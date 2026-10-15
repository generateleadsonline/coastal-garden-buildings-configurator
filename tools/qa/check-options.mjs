// Every option must visibly change the 3D model, and changing it must turn the camera to the part
// and outline it. Runs in headless Chrome (real WebGL; the Mac GPU unless SWIFTSHADER=1) against
// a served build.
//
//   PLAYWRIGHT_CORE=<path>/node_modules/playwright-core BASE=http://127.0.0.1:4812 node tools/qa/check-options.mjs
//
// Part A: for every value of every option (systems, uses, sizes at each system's limits, wall
// thicknesses, higher walls, canopies and their depths, roofs, pitches, coverings, trims,
// skylights, gutters, downpipes, finials, every door and window type, moving, removing and
// mirroring openings, every timber and frame treatment colour, log ends, floor, floor finish,
// insulation, ceiling, canopy decking, spots, wall lights, foundation beams, storm anchors and
// Coastal's own services), the design is built before and after. Two proofs must both hold:
//   1. the scene fingerprint (each visible mesh's tags, geometry, world position, colour and
//      texture) differs;
//   2. seen from the camera the page turns to for that option (focusFor, with no animation), the
//      rendered frame differs in at least 25 pixels. A whole-frame diff at full resolution, so a
//      small part counts (as My Retreat's sweep found).
// Part B: one real control of each kind is changed through the page; the camera must move (or
// switch view) and the changed part must be outlined.
import {launch, BASE, SKIP_TOUR, ready3d, waitFor} from './lib.mjs';

let failed = 0;
const browser = await launch('chromium');
const ctx = await browser.newContext({viewport: {width: 1280, height: 820}, reducedMotion: 'reduce'});
await ctx.addInitScript(SKIP_TOUR);
const page = await ctx.newPage(); page.setDefaultTimeout(Number(process.env.WAIT || 240000));
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(BASE + `/configurator/?qa=1&tier=${process.env.TIER || 'low'}`, {waitUntil: 'load'});
await ready3d(page);

// ---- Part A -------------------------------------------------------------------------------
const results = await page.evaluate(async () => {
  const {scene, model: M, data: D, focusFor} = window.__cfg;
  const N = M.normalise;
  const fp = () => {
    const {room} = scene._debug(), parts = [];
    room.group.updateMatrixWorld(true);
    room.group.traverse(o => {
      if (!o.isMesh || !o.visible) return;
      const e = o.matrixWorld.elements, mats = [].concat(o.material);
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      const bb = o.geometry.boundingBox, box = [bb.min.x, bb.min.y, bb.min.z, bb.max.x, bb.max.y, bb.max.z].map(v => v.toFixed(3)).join(',');
      parts.push([(o.userData.tags || []).slice(0, 2).join('/'), o.geometry.attributes.position.count, box, e[12].toFixed(3), e[13].toFixed(3), e[14].toFixed(3), e[0].toFixed(3), e[10].toFixed(3),
        mats.map(m => `${m.color?.getHexString()}:${m.map?.uuid || ''}:${m.normalMap?.uuid || ''}:${m.opacity}`).join(',')].join('|'));
    });
    return parts.sort().join('\n');
  };
  const pixels = () => {
    const {renderer, scene: sc, camera} = scene._debug();
    renderer.render(sc, camera);
    const gl = renderer.getContext(), w = gl.drawingBufferWidth, h = gl.drawingBufferHeight, px = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    return px;
  };
  const diff = (a, b) => { let n = 0; for (let i = 0; i < a.length; i += 4) if (Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]) > 6) n++; return n; };
  const cases = [];
  const add = (label, key, base, patch, focus = {}) => cases.push({label, key, base, patch, focus});
  const log = N({range: 'log'}), prima = N({range: 'prima'}), pro = N({range: 'pro'});
  const logApex = N({range: 'log', roof: 'apex', width: 5, depth: 3.5}), logPent = N({range: 'log', roof: 'pent'});
  const primaPyr = N({range: 'prima', roof: 'pyramid'}), proApex = N({range: 'pro', roof: 'apex', width: 5, depth: 4});
  const flats = {log, prima, pro};
  add('system prima', 'range', log, {__range: 'prima'}); add('system pro', 'range', log, {__range: 'pro'}); add('system log', 'range', pro, {__range: 'log'});
  for (const u of Object.keys(D.USES)) if (u !== log.use) add(`use ${u}`, 'use', log, {use: u});
  for (const w of [1.5, 3, 6, 10, 20]) add(`log width ${w}`, 'size', log, {width: w});
  for (const d of [1.5, 4, 5]) add(`log depth ${d}`, 'size', log, {depth: d});
  add('log apex depth 6.5', 'size', logApex, {depth: 6.5});
  for (const w of [1.8, 3, 5.4]) add(`prima width ${w}`, 'size', prima, {width: w});
  for (const d of [1.8, 4.2]) add(`prima depth ${d}`, 'size', prima, {depth: d});
  for (const w of [1, 3, 6.1, 8.5]) add(`pro width ${w}`, 'size', pro, {width: w});
  for (const d of [1, 4.3]) add(`pro depth ${d}`, 'size', pro, {depth: d});
  add('pro apex 5.8 span', 'size', proApex, {width: 8.5, depth: 5.8});
  for (const th of [68, 90]) add(`log ${th}mm`, 'thickness', log, {thickness: th});
  add('prima 28mm', 'thickness', prima, {thickness: 28});
  for (const rs of [1, 4]) add(`log raise ${rs}`, 'raise', log, {raise: rs});
  add('prima raise 2', 'raise', prima, {raise: 2});
  for (const [name, base] of [['log', log], ['log apex', logApex], ['prima', prima], ['pro', pro]]) for (const side of M.canopySides(base).filter(x => x !== 'none')) for (const dd of M.canopyDepths(base)) add(`${name} canopy ${side} ${dd}m`, 'canopy', base, {canopy: {side, depth: dd}});
  add('log apex roof', 'roof', log, {roof: 'apex'}); add('log pent roof', 'roof', log, {roof: 'pent'});
  add('prima pyramid roof', 'roof', prima, {roof: 'pyramid'}); add('pro apex roof', 'roof', N({range: 'pro', width: 5, depth: 4}), {roof: 'apex'});
  for (const sl of M.slopesFor(logApex)) if (sl !== logApex.slope) add(`log apex ${sl} degrees`, 'slope', logApex, {slope: sl});
  const logApexWide = N({range: 'log', roof: 'apex', width: 6, depth: 4.5});
  for (const sl of M.slopesFor(logApexWide)) if (sl !== logApexWide.slope) add(`log apex 4.5m span ${sl} degrees`, 'slope', logApexWide, {slope: sl});
  add('pro apex 40 degrees', 'slope', proApex, {slope: 40});
  for (const c of M.coveringsFor(logApex)) if (c !== logApex.covering) add(`apex covering ${c}`, 'covering', logApex, {covering: c});
  for (const c of M.coveringsFor(primaPyr)) if (c !== primaPyr.covering) add(`pyramid covering ${c}`, 'covering', primaPyr, {covering: c});
  for (const [name, base] of Object.entries(flats)) add(`${name} black trim`, 'trim', base, {trim: 'black'});
  for (const [name, base] of Object.entries(flats)) for (const k of Object.keys(D.SKYLIGHTS)) if (k !== 'none') { const big = N({...base, width: Math.max(base.width, 3), depth: Math.max(base.depth, 3)}); add(`${name} skylight ${k}`, 'skylight', big, {skylight: k}); }
  for (const [name, base] of [['log apex', logApex], ['log pent', logPent], ['prima pyramid', primaPyr], ['pro apex', proApex]]) add(`${name} gutters`, 'gutter', base, {options: {...base.options, gutter: true}});
  for (const [name, base] of Object.entries(flats)) add(`${name} downpipe`, 'downpipe', base, {options: {...base.options, downpipe: true}});
  add('pyramid finial', 'finial', primaPyr, {options: {...primaPyr.options, finial: true}});
  // Every door and window type, added to the back wall of each system.
  for (const [label, base] of [['log', N({range: 'log', width: 6, depth: 4})], ['prima', N({range: 'prima', width: 5.4, depth: 4.2})], ['pro', N({range: 'pro', width: 6.1, depth: 4})]]) for (const t of Object.keys(D.OPENINGS)) {
    const r = M.addOpening(base, 'back', t);
    if (!r.id) { cases.push({label: `${label} add ${t}`, error: 'no room on the back wall'}); continue; }
    cases.push({label: `${label} add ${t}`, key: 'opening', base, next: N({...base, openings: r.state.openings}), focus: {id: r.id, wall: 'back'}});
  }
  const one = log.openings.find(o => o.wall === 'front' && o.type === 'pe45h');
  add('move an opening', 'opening', log, {openings: log.openings.map(o => o.id === one.id ? {...o, p: o.p + .04} : o)}, {id: one.id, wall: 'front'});
  add('remove an opening', 'wall', log, {openings: log.openings.filter(o => o.id !== one.id)}, {wall: 'front'});
  add('mirror the layout', 'range', prima, {openings: prima.openings.map(o => ({...o, wall: {left: 'right', right: 'left'}[o.wall] || o.wall, p: 1 - o.p}))});
  for (const [name, base] of Object.entries(flats)) for (const kind of M.treatmentKinds(base)) {
    if (kind === 'none') { if (base.treatment.kind !== 'none') add(`${name} timber untreated`, 'treatment', base, {treatment: {kind: 'none'}}); continue; }
    for (const colour of Object.keys(D.COLOURS[kind])) if (!(base.treatment.kind === kind && base.treatment.colour === colour)) add(`${name} timber ${kind} ${colour}`, 'treatment', base, {treatment: {kind, colour}});
  }
  for (const kind of D.FRAME_KINDS) {
    if (kind === 'none') { add('frames untreated', 'frames', log, {frames: {kind: 'none'}}); continue; }
    for (const colour of Object.keys(D.COLOURS[kind])) if (!(log.frames.kind === kind && log.frames.colour === colour)) add(`frames ${kind} ${colour}`, 'frames', log, {frames: {kind, colour}});
  }
  add('diamond log ends', 'diamond', log, {options: {...log.options, diamond: true}});
  for (const [name, base] of Object.entries(flats)) add(`${name} floor`, 'floor', base, {options: {...base.options, floor: true}});
  const floored = N({...log, options: {...log.options, floor: true}});
  for (const c of Object.keys(D.COLOURS.spray)) add(`floor finish ${c}`, 'floor', floored, {floorColour: c});
  add('floor insulation', 'floorInsulation', floored, {options: {...floored.options, floorInsulation: true}});
  for (const [name, base] of Object.entries(flats)) { add(`${name} wall insulation`, 'wallInsulation', base, {options: {...base.options, wallInsulation: true}}); add(`${name} roof insulation`, 'roofInsulation', base, {options: {...base.options, roofInsulation: true}}); add(`${name} extra ceiling`, 'ceiling', base, {options: {...base.options, ceiling: true}}); }
  add('log apex roof insulation', 'roofInsulation', logApex, {options: {...logApex.options, roofInsulation: true}});
  add('log pent extra ceiling', 'ceiling', logPent, {options: {...logPent.options, ceiling: true}});
  for (const [name, base] of Object.entries(flats)) { const c = N({...base, canopy: {side: 'left', depth: M.canopyDepths(base)[1]}}); if (c.canopy.side === 'left') add(`${name} canopy decking`, 'veranda', c, {options: {...c.options, veranda: true}}); }
  for (const [name, base] of Object.entries(flats)) for (const n of [6, 8, 10, 12]) add(`${name} ${n} spots`, 'spots', base, {spots: n});
  for (const [name, base] of Object.entries(flats)) for (const n of [2, 4]) add(`${name} ${n} wall lights`, 'wallLights', base, {wallLights: n});
  for (const [name, base] of Object.entries(flats)) add(`${name} plastic beams`, 'plasticBeams', base, {options: {...base.options, plasticBeams: true}});
  for (const [name, base] of [['log', log], ['prima', prima]]) add(`${name} storm anchors`, 'stormAnchors', base, {options: {...base.options, stormAnchors: true}});
  for (const k of Object.keys(D.DEALER_EXTRAS)) for (const [name, base] of Object.entries(flats)) add(`${name} Coastal ${k}`, k, base, {extras: {...base.extras, [k]: true}});

  const out = [];
  for (const c of cases) {
    if (c.error) { out.push({label: c.label, ok: false, why: c.error}); continue; }
    const next = c.next || (c.patch.__range ? M.switchRange(c.base, c.patch.__range) : M.apply(c.base, c.patch).state);
    if (JSON.stringify({...next, step: 0}) === JSON.stringify({...c.base, step: 0})) { out.push({label: c.label, ok: false, why: 'the design did not change (option refused)'}); continue; }
    // The camera (and view, and dusk) the page turns to after this change, with no outline and
    // no animation; both fingerprints count what is visible in that view.
    const spec = focusFor(c.key, c.focus, next) || {tags: [], whole: true};
    if (spec.night) scene.setNight(true);
    scene.update(next); scene.focus({...spec, highlight: false});
    const after = pixels(), b = fp();
    scene.update(c.base); scene.select([]);
    const before = pixels(), a = fp();
    if (spec.night) scene.setNight(false);
    const changed = diff(before, after);
    out.push({label: c.label, ok: a !== b && changed >= 25, why: a === b ? '3D unchanged' : changed < 25 ? `only ${changed} pixels change from the focused camera` : '', changed});
  }
  scene.update(window.__cfg.state);
  scene.setView('outside', {animate: false});
  return out;
});
for (const r of results) if (!r.ok) { failed++; console.log(`FAIL  ${r.label}: ${r.why}`); }
const smallest = results.filter(r => r.ok).sort((a, b) => a.changed - b.changed).slice(0, 5).map(r => `${r.label} (${r.changed}px)`).join(', ');
console.log(`Part A: ${results.length - results.filter(r => !r.ok).length} of ${results.length} option changes change the 3D model and the focused view. Smallest: ${smallest}`);

// ---- Part B -------------------------------------------------------------------------------
// Real controls, through the page: the camera must move or change view and the part must be
// outlined (a pulse with meshes), except for whole-room changes, which only reframe.
const ui = [
  [0, 'input[name=use][value=gym]', 'use', true],
  [4, 'input[name=treatmentColour][value=brown]', 'treatment', true], [4, 'input[name=framesColour][value=gravelgrey]', 'frames', true], [4, 'input[name=diamond]', 'diamond', true],
  [2, 'input[name=trim][value=black]', 'trim', true], [2, 'input[name=skylight][value=s1]', 'skylight', true], [2, 'input[name=downpipe]', 'downpipe', true],
  [5, 'input[name=floor]', 'floor', true], [5, 'input[name=wallInsulation]', 'wallInsulation', true], [5, 'input[name=spots][value="6"]', 'spots', true],
  [5, 'input[name=wallLights][value="2"]', 'wallLights', true], [5, 'input[name=stormAnchors]', 'stormAnchors', true], [5, 'input[name=extra-patio]', 'patio', true], [5, 'input[name=extra-heater]', 'heater', true],
  [1, 'button[data-size=width][data-dir="1"]', 'size', false], [1, 'input[name=canopySide][value=left]', 'canopy', true], [5, 'input[name=veranda]', 'veranda', true],
  [1, 'input[name=thickness][value="68"]', 'thickness', true], [1, 'button[data-raise="1"]', 'raise', true],
  [2, 'input[name=roof][value=apex]', 'roof', true], [2, 'input[name=covering][value=shingles-red]', 'covering', true], [2, 'input[name=slope][value="26"]', 'slope', true], [2, 'input[name=gutter]', 'gutter', true],
  [3, 'button[data-wall=back]', 'wall', true], [3, ['button[data-adding=door]', 'button[data-add=pe46h]'], 'opening', true],
  [0, 'input[name=range][value=pro]', 'range', false]
];
let bOk = 0;
for (const [step, sel, key, highlight] of ui) {
  await page.evaluate(s => { if (window.__cfg.state.step !== s) document.querySelector(`#steps [data-step="${s}"]`).click(); }, step);
  await page.waitForTimeout(400);
  const pose = () => { const d = window.__cfg.scene._debug(), p = d.camera.position, t = d.controls.target, dir = t.clone().sub(p).normalize(); return {pos: [...p.toArray(), ...dir.toArray()].map(v => +v.toFixed(3)), view: d.view, at: window.__cfgLastFocus?.at || 0}; };
  await waitFor(page, () => !window.__cfg.scene._debug().anim, null, 30000).catch(() => {});
  const before = await page.evaluate(pose);
  let clicked = true;
  for (const s of [].concat(sel)) { clicked = clicked && await page.evaluate(q => { const el = document.querySelector(q); if (!el || el.disabled) return false; el.click(); return true; }, s); await page.waitForTimeout(150); }
  if (!clicked) { failed++; console.log(`FAIL  UI ${key}: control ${sel} not found`); continue; }
  if (key === 'wall') await page.waitForTimeout(500);
  else await waitFor(page, at => (window.__cfgLastFocus?.at || 0) > at, before.at, 15000).catch(() => {});
  await page.waitForTimeout(300);
  const pulse = await page.evaluate(() => { const d = window.__cfg.scene._debug(); return {pulse: d.pulse ? d.pulse.meshes.length : 0, lines: d.highlight.children.length}; });
  await waitFor(page, () => !window.__cfg.scene._debug().anim, null, 30000).catch(() => {});
  const after = {...await page.evaluate(pose), key: key === 'wall' ? 'wall' : await page.evaluate(() => window.__cfgLastFocus?.key), ...pulse};
  const moved = after.view !== before.view || after.pos.some((v, i) => Math.abs(v - before.pos[i]) > .02);
  const lit = !highlight || (after.pulse > 0 && after.lines > 0);
  const ok = after.key === key && moved && lit;
  if (ok) bOk++; else { failed++; console.log(`FAIL  UI ${key} (${sel}): focus ${after.key}, camera moved ${moved}, outlined ${after.pulse} meshes / ${after.lines} line sets`); }
}
console.log(`Part B: ${bOk} of ${ui.length} real controls turn the camera to the part and outline it`);
if (errors.length) { failed++; console.log('Page errors:', errors.slice(0, 5).join(' | ')); }
await browser.close();
console.log(failed ? `${failed} failed` : 'All option checks passed');
process.exit(failed ? 1 : 0);
