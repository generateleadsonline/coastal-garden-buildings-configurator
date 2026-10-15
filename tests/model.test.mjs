// Model tests: each system's sizes, roofs, finishes and options against Lugarde's own configurator
// (its product list for Coastal's dealer token, research/lugarde-2026-10-15; its rules, in the Sutton repo's research/lugarde-2026-10-13), the price structure against the
// structures Lugarde's app built (tools/parity fixtures, offline), fitting doors and windows
// round Pro posts and log stability points, share links and the UK phone and postcode rules.
// node --test tests/
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import * as M from '../src/configurator-model.js';
import {longestProSection} from '../src/lugarde-cart.js';

const PRODUCTS = JSON.parse(readFileSync('research/lugarde-2026-10-15/products.json', 'utf8'));
const productList = Array.isArray(PRODUCTS) ? PRODUCTS : PRODUCTS.data;
const product = id => productList.find(p => p.id === id);

test('three Lugarde systems, with the roofs and wall thicknesses Lugarde offers each', () => {
  assert.deepEqual(M.RANGE_ORDER, ['log', 'prima', 'pro']);
  assert.deepEqual(M.RANGES.log.roofs, ['flat', 'apex', 'pent']);
  assert.deepEqual(M.RANGES.prima.roofs, ['flat', 'pyramid']);
  assert.deepEqual(M.RANGES.pro.roofs, ['flat', 'apex']);
  assert.deepEqual(M.RANGES.log.thicknesses, [44, 68, 90]);
  assert.deepEqual(M.RANGES.prima.thicknesses, [28, 44]);
  assert.deepEqual(M.RANGES.pro.thicknesses, [28]);
});
test('size limits follow Lugarde: log 1.5-20m, Prima 60cm modules, Pro in 10cm steps', () => {
  const n = d => { const s = M.normalise(d); return [s.width, s.depth]; };
  assert.deepEqual(n({range: 'log', width: 1, depth: 1}), [1.5, 1.5]);
  assert.deepEqual(n({range: 'log', width: 30, depth: 30}), [20, 5]);
  assert.deepEqual(n({range: 'log', roof: 'apex', width: 30, depth: 30}), [20, 6.5]);
  assert.deepEqual(n({range: 'prima', width: 4, depth: 3.1}), [4.2, 3]);
  assert.deepEqual(n({range: 'prima', thickness: 28, width: 5.4, depth: 4.2}), [3.6, 3.6]);
  assert.deepEqual(n({range: 'pro', width: .5, depth: 9}), [1, 4.3]);
  assert.deepEqual(n({range: 'pro', width: 4.34, depth: 3.06}), [4.3, 3.1]);
});
test('Pro sizes Lugarde cannot price are skipped, and apex spans stop at 5.8m', () => {
  for (const w of [6, 6.2, 6.4, 6.6, 6.8]) {
    const s = M.normalise({range: 'pro', width: w, depth: 3});
    assert.notEqual(s.width, w); assert.ok(M.sizePriceable(s)); assert.ok(longestProSection(s) <= 3500);
  }
  for (const w of [5.9, 6.1, 6.3, 6.9, 8.5]) assert.equal(M.normalise({range: 'pro', width: w, depth: 3}).width, w);
  assert.equal(M.stepSize(M.normalise({range: 'pro', width: 6.1, depth: 3}), 'width', -1), 5.9);
  assert.equal(M.stepSize(M.normalise({range: 'pro', width: 6.1, depth: 3}), 'width', 1), 6.3);
  const apex = M.normalise({range: 'pro', roof: 'apex', width: 8.5, depth: 8.5});
  assert.equal(Math.min(apex.width, apex.depth), 5.8);
});
test('apex slopes follow Lugarde: log 21 degrees under a 4m span, 17 from 4m; Pro 25 or 40', () => {
  assert.deepEqual(M.slopesFor(M.normalise({range: 'log', roof: 'apex', width: 5, depth: 3})), [21, 26, 30]);
  assert.deepEqual(M.slopesFor(M.normalise({range: 'log', roof: 'apex', width: 6, depth: 4.5})), [17, 26, 30]);
  assert.deepEqual(M.slopesFor(M.normalise({range: 'pro', roof: 'apex', width: 5, depth: 4})), [25, 40]);
});
test('every door and window is a Lugarde product at its published size and price', () => {
  for (const [key, o] of Object.entries(M.OPENINGS)) {
    const p = product(o.product);
    assert.ok(p, `${key}: ${o.product} is in Lugarde's product list`);
    assert.equal(Number(p.attributes.price), o.list, `${key} price`);
    assert.equal(p.attributes.width, Math.round(o.w * 1000), `${key} width`);
    assert.equal(p.attributes.height, Math.round(o.h * 1000), `${key} height`);
  }
});
test('treatments: opaque stain on Prima and Pro, pressure treatment on log cabins and Pro', () => {
  assert.deepEqual(M.RANGES.log.treatments, ['none', 'spray', 'boiler']);
  assert.deepEqual(M.RANGES.prima.treatments, ['none', 'spray', 'pickle']);
  assert.deepEqual(M.RANGES.pro.treatments, ['none', 'spray', 'pickle', 'boiler']);
  assert.equal(M.normalise({range: 'log', treatment: {kind: 'pickle', colour: 'black'}}).treatment.kind, 'spray');
});
test('canopies only beside flat and apex roofs; Pro canopies only up to 3.6m deep', () => {
  assert.deepEqual(M.canopySides(M.normalise({range: 'log'})), ['none', 'left', 'right']);
  assert.deepEqual(M.canopySides(M.normalise({range: 'log', roof: 'pent'})), ['none']);
  assert.deepEqual(M.canopySides(M.normalise({range: 'prima', roof: 'pyramid'})), ['none']);
  assert.deepEqual(M.canopySides(M.normalise({range: 'pro', width: 4, depth: 4})), ['none']);
  assert.equal(M.normalise({range: 'log', roof: 'pent', canopy: {side: 'left', depth: 2}}).canopy.side, 'none');
});
test('doors and windows never overlap a corner, a Pro post, a stability point or each other', () => {
  for (const d of [{range: 'pro', width: 8.5, depth: 4.3}, {range: 'log', width: 12, depth: 5}, {range: 'prima', width: 5.4, depth: 4.2}]) {
    let s = M.normalise({...d, openings: []});
    for (let i = 0; i < 8; i++) for (const wall of ['front', 'back', 'left', 'right']) { const r = M.addOpening(s, wall, i % 2 ? 'pe45h' : 'pe47'); s = {...s, openings: r.state.openings}; }
    s = M.normalise(s);
    const blocks = M.obstacles(s), m = M.cornerMargin(s);
    for (const wall of ['front', 'back', 'left', 'right']) {
      const L = M.wallLength(s, wall);
      const spans = s.openings.filter(o => o.wall === wall).map(o => [o.p * L - M.OPENINGS[o.type].fw / 2, o.p * L + M.OPENINGS[o.type].fw / 2]).sort((a, b) => a[0] - b[0]);
      for (const [a, b] of spans) {
        assert.ok(a >= m - 1e-6 && b <= L - m + 1e-6, `${d.range} ${wall}: inside the corners`);
        for (const [x, y] of blocks[wall]) assert.ok(b <= x + 1e-6 || a >= y - 1e-6, `${d.range} ${wall}: clear of ${x}-${y}`);
      }
      for (let i = 1; i < spans.length; i++) assert.ok(spans[i][0] >= spans[i - 1][1] - 1e-6, `${d.range} ${wall}: no overlap`);
      assert.deepEqual(blocks[wall], [...blocks[wall]].sort((x, y) => x[0] - y[0]), 'obstacles run left to right');
    }
  }
});
test('a door too wide for its wall steps down within its family, then is dropped with a notice', () => {
  const s = M.normalise({range: 'log', width: 2.2, depth: 3, openings: []});
  const r = M.apply(s, {openings: [{wall: 'front', type: 'sd300', p: .5}]});
  assert.equal(r.state.openings[0].type, 'dl01h');
  assert.equal(r.changes[0].kind, 'resized');
});
test('share links reopen the exact design', () => {
  const s = M.normalise({range: 'pro', roof: 'apex', width: 5, depth: 4, slope: 40, covering: 'modern-9005', canopy: {side: 'none'}, treatment: {kind: 'boiler', colour: 'grey'}, frames: {kind: 'spray', colour: 'white'}, options: {floor: true, gutter: true, wallInsulation: true}, floorColour: 'white', spots: 10, wallLights: 4, extras: {patio: true, heater: true}, use: 'gym'});
  const back = M.fromURL(M.shareURL(s, 'https://example.com/configurator/'));
  assert.deepEqual({...back, openings: back.openings.map(o => [o.wall, o.type, o.p.toFixed(3)])}, {...s, openings: s.openings.map(o => [o.wall, o.type, o.p.toFixed(3)])});
});
test('UK phone numbers follow Ofcom: mobiles and landlines in, premium, drama and foreign out', () => {
  for (const ok of ['07123 456789', '+44 7123 456789', '0044 121 351 3388', '0121 351 3388', '01425 274000', '020 8036 3707', '0333 123 4567', '0800 123 4567']) assert.ok(M.parseUKPhone(ok).valid, ok);
  for (const bad of ['07700 900123', '0900 123 4567', '07011 234567', '12345', '+1 202 555 0100', '07123 45678']) assert.ok(!M.parseUKPhone(bad).valid, bad);
  assert.equal(M.parseUKPhone('+44 (0)121 351 3388').e164, '+441213513388');
  assert.equal(M.parseUKPhone('07123456789').display, '07123 456789');
});
test('UK postcodes', () => {
  for (const ok of ['BH23 4SA', 'bh234sa', 'B76 2RR', 'SW1A 1AA', 'CV34 4AB', 'GIR 0AA']) assert.ok(M.validPostcode(ok), ok);
  for (const bad of ['12345', 'ABC', 'B76', 'B76 2R']) assert.ok(!M.validPostcode(bad), bad);
  assert.equal(M.formatPostcode('b762rr'), 'B76 2RR');
});
test('money: pence to pounds, with a proper minus for Lugarde\'s offer', () => {
  assert.equal(M.money(1161673.0772), '£11,616.73');
  assert.equal(M.money(-127630), '−£1,276.30');
});
test('price structure: identical to what Lugarde\'s own configurator builds (56 captured designs)', () => {
  const out = execFileSync('node', ['tools/parity/compare.mjs', '--offline'], {encoding: 'utf8'});
  assert.match(out, /0 structure differences/);
});
