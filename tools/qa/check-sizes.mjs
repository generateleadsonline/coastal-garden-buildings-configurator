// Every size the designer offers must be one Lugarde's engine can price: each system and roof is
// priced at every step of its width and depth range (log cabins every 10cm with a flat roof and
// every 30cm on apex and pent; Prima every module at both wall thicknesses; Pro every 10cm on both
// roofs). Read-only, three requests at a time.   node tools/qa/check-sizes.mjs
import {buildCartRequest} from '../../src/lugarde-cart.js';
import {normalise, limits} from '../../src/configurator-model.js';
import {DEALER_TOKEN, RANGES} from '../../src/configurator-data.js';

const URL0 = `https://lugarde-configurator.com/api/v1/cart/?dealerToken=${DEALER_TOKEN}`;
const r2 = v => Math.round(v * 100) / 100;
const seen = new Set(), jobs = [];
const add = d => { const s = normalise(d); const k = JSON.stringify([s.range, s.roof, s.thickness, s.width, s.depth]); if (!seen.has(k)) { seen.add(k); jobs.push(s); } };
for (const range of ['log', 'prima', 'pro']) for (const roof of RANGES[range].roofs) for (const thickness of range === 'prima' ? [28, 44] : [RANGES[range].thickness]) {
  const lim = limits({range, roof, thickness}), every = range === 'log' && roof !== 'flat' ? .3 : lim.step;
  const mid = [r2(Math.min(lim.width[1], Math.max(lim.width[0], 4))), r2(Math.min(lim.depth[1], Math.max(lim.depth[0], 3)))];
  for (let w = lim.width[0]; w <= lim.width[1] + 1e-9; w = r2(w + every)) add({range, roof, thickness, width: w, depth: mid[1]});
  for (let d = lim.depth[0]; d <= lim.depth[1] + 1e-9; d = r2(d + every)) add({range, roof, thickness, width: Math.max(mid[0], roof === 'apex' ? d : 0), depth: d});
  add({range, roof, thickness, width: lim.width[1], depth: lim.depth[1]});
}
let failed = 0, done = 0;
async function price(s, tries = 3) {
  try {
    const res = await fetch(URL0, {method: 'POST', headers: {'Content-Type': 'application/vnd.api+json', Accept: 'application/vnd.api+json'}, body: JSON.stringify(buildCartRequest(s, 'sizes')), signal: AbortSignal.timeout(30000)});
    const text = await res.text();
    if (!res.ok) return {error: text.slice(0, 120)};
    const a = JSON.parse(text).data.attributes;
    return a.warnings?.length ? {error: 'warnings ' + JSON.stringify(a.warnings)} : {total: a.total};
  } catch (err) { if (tries > 1) { await new Promise(r => setTimeout(r, 1500)); return price(s, tries - 1); } return {error: String(err)}; }
}
const queue = [...jobs];
await Promise.all([1, 2, 3].map(async () => {
  while (queue.length) {
    const s = queue.shift(), r = await price(s);
    done++;
    if (r.error) { failed++; console.log(`FAIL ${s.range} ${s.roof} ${s.thickness}mm ${s.width} x ${s.depth}: ${r.error}`); }
  }
}));
console.log(failed ? `${failed} of ${done} sizes refused by Lugarde's engine` : `All ${done} sizes the designer offers are priced by Lugarde's engine`);
process.exitCode = failed ? 1 : 0;
