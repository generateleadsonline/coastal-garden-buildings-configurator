// Price parity, step 2: for every design in designs.mjs, compare our cart builder
// (src/lugarde-cart.js) with the structure Lugarde's own configurator built for it
// (fixtures/app-structures.json, from app-structures.mjs), field by field, and then price both
// through Lugarde's engine (Coastal's dealer token) with the same cart contents. Each design is
// priced bare and again with every area-priced option on (floor, insulation, treatments, trims),
// so the areas the engine charges by are tested too. Read-only: the engine only calculates.
//
//   node tools/parity/compare.mjs [--offline]      (--offline: structure diff only, no requests)
// Writes tools/parity/fixtures/parity-report.json.
import {readFile, writeFile} from 'node:fs/promises';
import {DESIGNS, bare, heavy} from './designs.mjs';
import {buildStructure, buildCartRequest} from '../../src/lugarde-cart.js';
import {DEALER_TOKEN} from '../../src/configurator-data.js';

const offline = process.argv.includes('--offline');
const fixtures = JSON.parse(await readFile(new URL(process.env.FIXTURE || './fixtures/app-structures.json', import.meta.url), 'utf8'));
const URL0 = `https://lugarde-configurator.com/api/v1/cart/?dealerToken=${DEALER_TOKEN}`;

const near = (a, b, tol = 1) => Math.abs((a || 0) - (b || 0)) <= tol;
function diff(app, ours) {
  const out = [];
  const chk = (name, a, b, tol = 1) => { if (!near(a, b, tol)) out.push(`${name}: app ${a} ours ${b}`); };
  const A = app.substructures[0], O = ours.substructures[0];
  chk('sub.width', A.width_mm1, O.width_mm1); chk('sub.depth', A.depth_mm1, O.depth_mm1); chk('sub.floor', A.floor_mm2, O.floor_mm2);
  const wl = x => x.walls.map(w => w.length_mm1).sort((p, q) => p - q).join(',');
  if (wl(A) !== wl(O)) out.push(`walls: app ${wl(A)} ours ${wl(O)}`);
  const pl = x => x.poles.map(p => `${p.type}${p.scaffolds}`).sort().join(',');
  if (pl(A) !== pl(O)) out.push(`poles: app ${pl(A)} ours ${pl(O)}`);
  if (app.canopies.length !== ours.canopies.length) out.push(`canopies: app ${app.canopies.length} ours ${ours.canopies.length}`);
  app.canopies.forEach((c, i) => {
    const o = ours.canopies[i]; if (!o) return;
    if (c.type !== o.type) out.push(`canopy.type: app ${c.type} ours ${o.type}`);
    chk('canopy.width', c.width_mm1, o.width_mm1); chk('canopy.depth', c.depth_mm1, o.depth_mm1); chk('canopy.floor', c.floor_mm2, o.floor_mm2);
    const cp = x => x.poles.map(p => `${p.type}${p.scaffolds}`).sort().join(',');
    if (cp(c) !== cp(o)) out.push(`canopy.poles: app ${cp(c)} ours ${cp(o)}`);
  });
  const ra = x => x.roofs.reduce((t, r) => t + r.area_mm2, 0);
  chk('roofs.area', ra(app), ra(ours));
  const rs = x => x.roofs.map(r => `${r.type}:${r.width_mm1}x${r.depth_mm1}:${r.above}:${(r.facades_mm1 || []).join('/')}`).join(' ');
  if (ours.system !== 'blokhut' && rs(app) !== rs(ours)) out.push(`roofs: app ${rs(app)} ours ${rs(ours)}`);
  for (const k of ['wall_insulation_mm2', 'roof_insulation_mm2', 'roof_reinforcement_mm2', 'overhang_length_mm1', 'downspout_amount']) chk(k, app[k], ours[k], k === 'roof_insulation_mm2' ? 2 : 1);
  chk('roof_surface_mm2', app.roof_surface_mm2, ours.roof_surface_mm2, 2);
  if (app.insets.length !== ours.insets.length) out.push(`insets: app ${app.insets.length} ours ${ours.insets.length}`);
  return out;
}
async function price(body, tries = 3) {
  let res;
  try { res = await fetch(URL0, {method: 'POST', headers: {'Content-Type': 'application/vnd.api+json', Accept: 'application/vnd.api+json'}, body: JSON.stringify(body), signal: AbortSignal.timeout(30000)}); }
  catch (err) { if (tries > 1) { await new Promise(r => setTimeout(r, 1500)); return price(body, tries - 1); } return {error: String(err)}; }
  if (!res.ok) return {error: res.status};
  const j = await res.json();
  return {total: j.data.attributes.total, warnings: j.data.attributes.warnings, rows: Object.fromEntries(Object.entries(j.data.attributes.contents).filter(([, v]) => v.total).map(([k, v]) => [k, v.total]))};
}

const report = [];
let structureFails = 0, priceFails = 0, n = 0;
for (const d of DESIGNS) {
  const fx = fixtures[d.id];
  if (!fx?.structure) { console.log(`${d.id}: no fixture`); continue; }
  n++;
  // The app may have dropped an opening it would not accept; price what it kept.
  const s = bare(d), h = heavy(d);
  const kept = fx.structure.insets.map(i => i.inset.product.identifier);
  const ours = buildStructure(s);
  const problems = diff(fx.structure, ours);
  if (problems.length) structureFails++;
  const entry = {id: d.id, problems, kept};
  if (!offline) {
    for (const [label, state, appStructure] of [['bare', s, fx.structure], ['heavy', h, fx.heavy || fx.structure]]) {
      const ourBody = buildCartRequest(state, 'parity-' + d.id);
      const appBody = JSON.parse(JSON.stringify(ourBody));
      appBody.data.attributes.structure = appStructure;
      const [a, o] = await Promise.all([price(appBody), price(ourBody)]);
      entry[label] = {app: a.total, ours: o.total, warnings: [...(a.warnings || []), ...(o.warnings || [])]};
      if (!near(a.total, o.total, .5)) {
        priceFails++;
        entry[label].rows = Object.fromEntries(Object.keys({...a.rows, ...o.rows}).filter(k => !near(a.rows?.[k], o.rows?.[k], .5)).map(k => [k, [a.rows?.[k], o.rows?.[k]]]));
      }
    }
  }
  report.push(entry);
  const pr = offline ? '' : ` bare £${(entry.bare.app / 100).toFixed(2)}${near(entry.bare.app, entry.bare.ours, .5) ? ' =' : ' ≠ £' + (entry.bare.ours / 100).toFixed(2)}, heavy £${(entry.heavy.app / 100).toFixed(2)}${near(entry.heavy.app, entry.heavy.ours, .5) ? ' =' : ' ≠ £' + (entry.heavy.ours / 100).toFixed(2)}`;
  console.log(`${problems.length ? '✗' : '✓'} ${d.id}${pr}${problems.length ? '\n    ' + problems.join('\n    ') : ''}${entry.bare?.rows ? '\n    bare rows ' + JSON.stringify(entry.bare.rows) : ''}${entry.heavy?.rows ? '\n    heavy rows ' + JSON.stringify(entry.heavy.rows) : ''}`);
}
await writeFile(new URL('./fixtures/parity-report.json', import.meta.url), JSON.stringify({checked: new Date().toISOString(), designs: n, structureFails, priceFails, report}, null, 1));
console.log(`\n${n} designs: ${structureFails} structure differences, ${priceFails} price differences`);
process.exitCode = structureFails || priceFails ? 1 : 0;
