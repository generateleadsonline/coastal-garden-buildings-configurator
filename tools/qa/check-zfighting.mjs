// Fails if any two visible faces share a plane and overlap (z-fighting: flicker and blotches on
// real GPUs), across every system and roof over its full size range, plus the extremes and every
// feature that adds geometry. Reuses the SMART configurator's detector (tools/qa/zfight.js)
// unchanged; this runner builds each design in one page, so the 300-odd designs run in minutes.
//
//   PLAYWRIGHT_CORE=<path>/node_modules/playwright-core BASE=http://127.0.0.1:4812 node tools/qa/check-zfighting.mjs [quick]
// LIVE_ORIGIN is not needed: BASE can be the live site, as the check builds designs in the page.
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {launch, BASE, SKIP_TOUR, ready3d} from './lib.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const detector = await readFile(path.join(here, 'zfight.js'), 'utf8');
const quick = process.argv[2] === 'quick';
// Each system and roof over a grid of its own size range (Lugarde's limits), then the extremes and
// every feature that adds geometry.
const GRID = {
  'log/flat': [[1.5, 2.2, 3, 4.4, 6, 8, 10, 14, 20], [1.5, 2.5, 3.5, 5]],
  'log/apex': [[1.5, 2.2, 3, 4.4, 6, 8, 10, 14, 20], [1.5, 2.5, 3.5, 5, 6.5]],
  'log/pent': [[1.5, 2.2, 3, 4.4, 6, 8, 10, 14, 20], [1.5, 2.5, 3.5, 5]],
  'prima/flat': [[1.8, 2.4, 3, 3.6, 4.2, 4.8, 5.4], [1.8, 2.4, 3, 3.6, 4.2]],
  'prima/pyramid': [[1.8, 2.4, 3, 3.6, 4.2, 4.8, 5.4], [1.8, 2.4, 3, 3.6, 4.2]],
  'pro/flat': [[1, 1.7, 2.5, 3.3, 4, 5, 6.1, 7, 8.5], [1, 2, 3, 4.3]],
  'pro/apex': [[2.5, 3.5, 4.5, 5.8, 7, 8.5], [2.5, 3.5, 4.5, 5.8, 7, 8.5]]
};
const designs = [];
for (const [key, [W, D]] of Object.entries(GRID)) {
  const [range, roof] = key.split('/');
  W.forEach((width, i) => D.forEach((depth, j) => { if (!quick || !((i + j) % 3)) designs.push({range, roof, width, depth}); }));
}
const all = {floor: true, floorInsulation: true, roofInsulation: true, wallInsulation: true, ceiling: true, veranda: true, gutter: true, downpipe: true, plasticBeams: true, stormAnchors: true, finial: true};
const extras = {patio: true, heater: true, fitout: true};
for (const range of ['log', 'prima', 'pro']) for (const side of ['left', 'right']) {
  const roofs = {log: ['flat', 'apex'], prima: ['flat'], pro: ['flat', 'apex']}[range];
  for (const roof of roofs) for (const depth of {log: [1, 3], prima: [1.2, 2.4], pro: [1, 3]}[range]) designs.push({range, roof, width: roof === 'apex' ? 5 : 4.2, depth: 3, canopy: {side, depth}, options: all, spots: 12, wallLights: 4, extras});
}
for (const [range, roof] of [['log', 'flat'], ['log', 'apex'], ['log', 'pent'], ['prima', 'flat'], ['prima', 'pyramid'], ['pro', 'flat'], ['pro', 'apex']]) {
  designs.push({range, roof, width: 4.2, depth: 3, options: all, spots: 6, wallLights: 2, skylight: roof === 'flat' ? 's4' : 'none', extras, use: 'bar', raise: 4, floorColour: 'white'});
  designs.push({range, roof, width: 3, depth: 3, options: {floor: true}, use: 'gym', treatment: {kind: 'none'}, frames: {kind: 'none'}});
}
for (const th of [44, 68, 90]) designs.push({range: 'log', width: 6, depth: 4, thickness: th, options: {diamond: th === 44, floor: true}, raise: 2});
designs.push({range: 'prima', width: 3.6, depth: 3.6, thickness: 28}, {range: 'prima', roof: 'pyramid', width: 3.6, depth: 3.6, thickness: 28, options: {finial: true, gutter: true}});
// Every door and window type, on each system's walls.
const types = ['pe46h', 'pe61h', 'px39h', 'mg01h', 'dd01h', 'pe45h', 'pe24h', 'pe60h', 'pe50h', 'pe45fh', 'sd200', 'sd300', 'dl01h', 'vl01h', 'vl02h', 'pe47', 'pe48', 'pe49', 'pe65', 'pj07', 'pj26', 'pj25', 'pj06h', 'pe21', 'pe23'];
for (const range of ['log', 'prima', 'pro']) for (let i = 0; i < types.length; i += 4) {
  const walls = ['front', 'right', 'back', 'left'];
  designs.push({range, width: range === 'prima' ? 5.4 : 7, depth: range === 'prima' ? 4.2 : 4.3, openings: types.slice(i, i + 4).map((type, k) => ({wall: walls[k], type, p: .5}))});
}

const browser = await launch('chromium');
const ctx = await browser.newContext({viewport: {width: 640, height: 480}});
await ctx.addInitScript(SKIP_TOUR);
const page = await ctx.newPage(); page.setDefaultTimeout(Number(process.env.WAIT || 240000));
await page.goto(BASE + '/configurator/?qa=1&tier=low', {waitUntil: 'load'});
await ready3d(page);
let failures = 0, n = 0;
for (const d of designs) {
  n++;
  const label = JSON.stringify(d);
  const ok = await page.evaluate(d => {
    const {scene, model: M} = window.__cfg;
    scene.update(M.normalise(d));
    return true;
  }, d);
  if (!ok) continue;
  const found = await page.evaluate(detector);
  const visible = (found || []).filter(f => f.visible);
  if (visible.length) {
    failures++;
    console.log(`FAIL ${label}${visible.map(f => `\n     ${f.pair} (${f.count}) normal ${f.normal} near ${f.at}`).join('')}`);
  } else if (n % 40 === 0) console.log(`ok ${n}/${designs.length}`);
}
await browser.close();
if (failures) { console.error(`${failures} of ${designs.length} designs have visible z-fighting`); process.exitCode = 1; }
else console.log(`No visible z-fighting in ${designs.length} designs (every system and roof across its size range, plus extremes and features).`);
