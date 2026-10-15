// Every price the designer shows next to an option must be Lugarde's: each fixed-price product's
// line in Lugarde's engine (Coastal's dealer token) must equal the price in configurator-data.js,
// and every per-metre price must match the engine's rate. Read-only: the engine only calculates.
//   node tools/qa/check-prices.mjs
import {buildCartRequest} from '../../src/lugarde-cart.js';
import {normalise, addOpening} from '../../src/configurator-model.js';
import {DEALER_TOKEN, OPENINGS, OPTIONS, SPOTS, WALL_LIGHTS, SKYLIGHTS, TRIM_COLOURS} from '../../src/configurator-data.js';

const URL0 = `https://lugarde-configurator.com/api/v1/cart/?dealerToken=${DEALER_TOKEN}`;
async function price(s, tries = 3) {
  try {
    const res = await fetch(URL0, {method: 'POST', headers: {'Content-Type': 'application/vnd.api+json', Accept: 'application/vnd.api+json'}, body: JSON.stringify(buildCartRequest(s, 'prices')), signal: AbortSignal.timeout(30000)});
    if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 100)}`);
    return (await res.json()).data.attributes.contents;
  } catch (err) { if (tries > 1) { await new Promise(r => setTimeout(r, 1500)); return price(s, tries - 1); } throw err; }
}
let failed = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) failed++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}  ${detail}`); };
const line = (c, key) => c[key] || null;

// Doors and windows: four at a time on a 7m log cabin, untreated (no paint line folded in).
const types = Object.keys(OPENINGS);
for (let i = 0; i < types.length; i += 4) {
  let s = normalise({range: 'log', width: 7, depth: 5, openings: [], frames: {kind: 'none'}, treatment: {kind: 'none'}});
  const walls = ['front', 'right', 'back', 'left'];
  types.slice(i, i + 4).forEach((t, k) => { const r = addOpening(s, walls[k], t); s = {...s, openings: r.state.openings}; });
  s = normalise(s);
  const c = await price(s);
  for (const t of types.slice(i, i + 4)) {
    const o = OPENINGS[t];
    let l = line(c, o.product);
    // One that did not fit beside the others (or between a log cabin's stability points) is priced
    // on its own, centred on a 5.4m Prima front.
    if (!l) { const solo = normalise({range: 'prima', width: 5.4, depth: 4.2, openings: [{wall: 'front', type: t, p: .5}], frames: {kind: 'none'}, treatment: {kind: 'none'}}); l = line(await price(solo), o.product); }
    check(l && l.price === o.list * 100, `${o.name} (${o.code})`, `designer £${o.list}, Lugarde ${l ? '£' + l.price / 100 : 'no line'}`);
  }
}
const base = normalise({range: 'log', width: 4.4, depth: 3, treatment: {kind: 'none'}, frames: {kind: 'none'}});
for (const [k, x] of Object.entries(SPOTS)) if (x.product) { const c = await price({...base, spots: Number(k)}); const l = line(c, x.product); check(l && l.total === x.list * 100, x.name, `designer £${x.list}, Lugarde ${l ? '£' + l.total / 100 : 'no line'}`); }
for (const [k, x] of Object.entries(WALL_LIGHTS)) if (x.product) { const c = await price({...base, wallLights: Number(k)}); const l = line(c, x.product); check(l && l.total === x.list * 100, x.name, `designer £${x.list}, Lugarde ${l ? '£' + l.total / 100 : 'no line'}`); }
for (const [k, x] of Object.entries(SKYLIGHTS)) if (x.product) { const c = await price({...base, skylight: k}); const l = line(c, x.product); check(l && l.total === x.list * 100, x.name, `designer £${x.list}, Lugarde ${l ? '£' + l.total / 100 : 'no line'}`); }
{ const c = await price({...base, trim: 'black'}); const l = line(c, TRIM_COLOURS.black.product); check(l && l.price === TRIM_COLOURS.black.list * 100, 'Black roof trim (a metre)', `designer £${TRIM_COLOURS.black.list} a metre, Lugarde ${l ? `${l.amount}m at £${l.price / 100}` : 'no line'}`); }
// Options: every cart line the option adds, against its displayed price (fixed, per metre, or sized).
const designs = {
  diamond: base, stormAnchors: base, plasticBeams: base, downpipe: base,
  gutter: normalise({range: 'log', roof: 'apex', width: 5, depth: 3.5, treatment: {kind: 'none'}, frames: {kind: 'none'}}),
  finial: normalise({range: 'prima', roof: 'pyramid', treatment: {kind: 'none'}, frames: {kind: 'none'}})
};
for (const [key, d] of Object.entries(designs)) {
  const before = await price(d), after = await price(normalise({...d, options: {...d.options, [key]: true}}));
  // Lugarde raises a log cabin apex by one board when gutters go on (the page says so); that line
  // is the higher walls' own price, not the gutters'.
  const added = Object.entries(after).filter(([k, v]) => v.total && !(before[k] && before[k].total === v.total) && !k.startsWith('discount.') && !k.startsWith('material.') && !k.startsWith('wall.raise'));
  const o = OPTIONS[key], unit = o.unit || 'each';
  const sum = added.reduce((t, [, v]) => t + v.total, 0) / 100;
  const detail = added.map(([k, v]) => `${k}: ${v.title} = £${v.total / 100}${v.amount !== 1 ? ` (${v.amount} at £${v.price / 100})` : ''}`).join('; ') || 'no line';
  if (o.list === null) check(added.length > 0, `${o.name} (priced to size)`, detail);
  else if (unit === 'metre') check(added.length === 1 && added[0][1].price === o.list * 100, `${o.name} (£${o.list} a metre)`, detail);
  else check(Math.abs(sum - o.list) < .005, `${o.name} (£${o.list})`, detail);
}
console.log(failed ? `${failed} of ${n} prices differ from Lugarde's engine` : `All ${n} displayed prices match Lugarde's engine`);
process.exitCode = failed ? 1 : 0;
