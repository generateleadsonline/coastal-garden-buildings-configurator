// Builds src/data/pricebook.json and tests/golden.json from carts captured in Lugarde's own
// configurator (Coastal's dealer link) by tools/pricebook/capture.mjs.
//   node tools/pricebook/build.mjs <captures.jsonl> [more.jsonl ...]
// A record is used only if its geometry matches the size asked for and its lines add up to the
// cart total. Every captured cart becomes a golden case for tests/pricing.test.mjs.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const files = process.argv.slice(2);
if (!files.length) { console.error('usage: build.mjs <captures.jsonl>...'); process.exit(1); }

// Which configurator template and options each capture series used.
const SERIES = [
  [/^log44f-/, 'log', 'flat', 44], [/^logapex-/, 'log', 'apex', 44], [/^logpent-/, 'log', 'pent', 44],
  [/^log68flat-/, 'log', 'flat', 68], [/^log68apex-/, 'log', 'apex', 68], [/^log68pent-/, 'log', 'pent', 68],
  [/^prima28flat-/, 'prima', 'flat', 28], [/^prima28pyr-/, 'prima', 'pyramid', 28], [/^prima44flat-/, 'prima', 'flat', 44], [/^prima44pyr-/, 'prima', 'pyramid', 44],
  [/^proflat-/, 'pro', 'flat', 28], [/^proapex-/, 'pro', 'apex', 28]
];
const OPTION = {'floors.inner': 'floor', 'floors.insulation.inner': 'floorIns', 'roofs.insulation.roof': 'roofIns', 'walls.insulation': 'wallIns', 'material.woodtreatment.spray': 'spray', 'roof.gutter.yes': 'gutter'};
const records = new Map();
for (const f of files) for (const line of fs.readFileSync(f, 'utf8').split('\n')) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  if (r.lines && r.spec?.W) records.set(r.key, r);
}
const entries = {}, golden = [], problems = [];
const cents = n => Math.round(n * 100);
for (const r of records.values()) {
  const s = SERIES.find(([re]) => re.test(r.key));
  if (!s) continue;
  const [, range, roof, wall] = s;
  // The geometry the app priced must be the size asked for.
  const sub = r.structure?.substructures?.[0];
  const got = [sub?.width_mm1, sub?.depth_mm1].map(Math.round).sort((a, b) => b - a), want = [r.spec.W, r.spec.D].sort((a, b) => b - a);
  if (Math.abs(got[0] - want[0]) > 1 || Math.abs(got[1] - want[1]) > 1) { problems.push(`${r.key}: priced ${got.join('x')}`); continue; }
  // The lines must add up to the cart total.
  const lines = Object.entries(r.lines).filter(([, v]) => v.tot);
  const sum = lines.reduce((t, [, v]) => t + cents(v.tot), 0);
  if (Math.abs(sum - cents(r.total)) > 1) { problems.push(`${r.key}: lines ${sum / 100} vs total ${r.total}`); continue; }
  if (wall === 68 && !Object.values(r.lines).some(v => /68mm/.test(v.t))) { problems.push(`${r.key}: not 68mm`); continue; }
  const key = `${range}|${roof}|${wall}|${want[0]}x${want[1]}`;
  const e = {structure: [], measured: r.structure?.measurements ? {wall: r.structure.measurements.wallHeightMM, top: r.structure.measurements.totalHeightMM, overhang: r.structure.measurements.roofOverhangMM, slope: r.structure.measurements.roofSlope} : null};
  for (const [k, v] of lines) {
    if (k === 'transport.surcharge' || k.startsWith('discount.')) continue;
    if (OPTION[k]) e[OPTION[k]] = +v.tot.toFixed(2);
    else e.structure.push({key: k, title: v.t, total: +v.tot.toFixed(2)});
  }
  entries[key] = e;
  golden.push({key: r.key, entry: key, range, roof, wall, width: r.spec.W / 1000, depth: r.spec.D / 1000, options: Object.keys(OPTION).filter(k => r.lines[k]?.tot).map(k => OPTION[k]), total: r.total, discount: lines.filter(([k]) => k.startsWith('discount.')).reduce((t, [, v]) => t + v.tot, 0), capturedAt: r.at});
}
const book = {source: 'Lugarde configurator, lugarde-configurator.com, opened with Coastal Garden Buildings’ dealer link', captured: '13 October 2026', note: 'Prices include VAT, as the Lugarde cart does. Transport surcharge and offer are added by src/model.js.', entries: Object.fromEntries(Object.entries(entries).sort())};
fs.mkdirSync(path.join(repo, 'src/data'), {recursive: true});
fs.writeFileSync(path.join(repo, 'src/data/pricebook.json'), JSON.stringify(book));
fs.writeFileSync(path.join(repo, 'tests/golden.json'), JSON.stringify(golden.sort((a, b) => a.key.localeCompare(b.key)), null, 1));
const count = {};
for (const k of Object.keys(entries)) { const p = k.split('|').slice(0, 3).join('|'); count[p] = (count[p] || 0) + 1; }
console.log(`${Object.keys(entries).length} price book entries from ${records.size} records`, count);
if (problems.length) console.log(`${problems.length} records left out:\n  ` + problems.slice(0, 40).join('\n  '));
