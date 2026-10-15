// The configurator's design model: pure functions only, shared by the page, the 3D, the PDF, the
// price function and the QA tools. The rules come from Lugarde's own configurator (its size
// limits, roof and slope rules, which treatments and options each system offers, where its Pro
// posts and log stability points fall) so that every design here is one Lugarde's configurator
// would accept and price the same way. Adapted from the Atelia, Hideaway and SMART configurators
// (fitting, share links, UK phone and postcode rules).
import {
  RANGES, RANGE_ORDER, ROOFS, OPENINGS, DOWNSIZE, WALLS, LAYOUTS_BY_RANGE, TRIM_COLOURS, COVERINGS, TREATMENT_KINDS,
  COLOURS, UNTREATED, FRAME_KINDS, CANOPY_SIDES, CANOPY_DEPTHS, OPTIONS, SPOTS, WALL_LIGHTS, SKYLIGHTS, DEALER_EXTRAS, USES, CONTACT
} from './configurator-data.js';
import {proPosts, stabilityPoints, heights, longestProSection, PRO_SECTION_MAX} from './lugarde-cart.js';

export {RANGES, RANGE_ORDER, ROOFS, OPENINGS, WALLS, TRIM_COLOURS, COVERINGS, TREATMENT_KINDS, COLOURS, CANOPY_SIDES, OPTIONS, SPOTS, WALL_LIGHTS, SKYLIGHTS, DEALER_EXTRAS, USES};

export const STEPS = ['range', 'size', 'roof', 'openings', 'finish', 'extras', 'quote'];
const GAP = .1;          // minimum wall between two openings (m)
const MARGIN = .02;      // Lugarde's inset margin either side of a frame
const round = (v, dp = 3) => Math.round(v * 10 ** dp) / 10 ** dp;
const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const oneOf = (value, object, fallback) => (typeof value === 'string' && has(object, value) ? value : fallback);
const num = v => (v !== null && v !== undefined && v !== '' && Number.isFinite(Number(v)) ? Number(v) : null);
export const nearest = (list, value) => list.reduce((a, b) => (Math.abs(b - value) < Math.abs(a - value) ? b : a));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const metres = value => `${Number(value).toFixed(1)}m`;
export const metres2 = value => `${Number(value).toFixed(2)}m`;
export const money = pence => `${pence < 0 ? '−' : ''}£${(Math.abs(pence) / 100).toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
export const pounds = v => `£${Number(v).toLocaleString('en-GB', {maximumFractionDigits: 0})}`;

// ---- What each system allows (Lugarde's rules) ---------------------------------------------
/** Size limits for the current system, roof and wall thickness (metres, outside size). */
export function limits(s) {
  const r = RANGES[s.range];
  const d = r.depth[s.roof] || r.depth.flat;
  let width = [...r.width], depth = [...d];
  if (s.range === 'prima' && s.thickness === 28) { width[1] = Math.min(width[1], r.small[28]); depth[1] = Math.min(depth[1], r.small[28]); }
  if (s.range === 'pro' && s.roof === 'apex') { width = [2.5, r.width[1]]; depth = [2.5, r.depth.apex[1]]; }
  return {width, depth, step: r.step};
}
/** Apex span: the ridge runs along the longer side (Lugarde's default roof direction). */
export const ridgeAlongWidth = s => s.width >= s.depth;
export const span = s => Math.min(s.width, s.depth);
/** Apex spans each system's engine can price (Pro: 5.8m; Lugarde's largest Pro gable end is 6m, its engine refuses wider). */
export function maxSpan(s) {
  if (s.roof !== 'apex') return Infinity;
  return s.range === 'pro' ? RANGES.pro.span.apex : 6.5;
}
/** Roof slopes Lugarde allows: log apex by span (21° below 4m, 17° from 4m; 26° to 6.5m; 30° to 5.5m). */
/** Whether Lugarde's engine can price this size: every Pro wall section within 3.5m. */
export const sizePriceable = s => s.range !== 'pro' || longestProSection(s) <= PRO_SECTION_MAX;
/** The next size up or down a dimension, skipping sizes Lugarde cannot price. Null at the limit. */
export function stepSize(s, dim, dir) {
  const lim = limits(s)[dim], step = limits(s).step;
  let v = s[dim];
  for (let i = 0; i < 6; i++) {
    v = round(v + dir * step, 2);
    if (v < lim[0] - 1e-9 || v > lim[1] + 1e-9) return null;
    if (sizePriceable({...s, [dim]: v})) return v;
  }
  return null;
}
export function slopesFor(s) {
  if (s.roof === 'pyramid') return [30];
  if (s.roof === 'pent') return [3];
  if (s.roof === 'flat') return [RANGES[s.range].slope];
  if (s.range === 'pro') return [25, 40];
  const sp = span(s) * 1000;
  return [17, 21, 26, 30].filter(a => !(a === 17 && sp < 4000) && !(a === 21 && sp >= 4000) && !(a === 26 && sp > 6500) && !(a === 30 && sp > 5500));
}
export const defaultSlope = s => (s.roof === 'apex' ? (s.range === 'pro' ? 25 : span(s) < 4 ? 21 : 17) : slopesFor(s)[0]);
export const coveringsFor = s => Object.keys(COVERINGS).filter(k => !COVERINGS[k].apexOnly || s.roof === 'apex');
/** Canopies: beside the room under the same roof; not on pent roofs; on an apex only at the gable ends. */
export function canopySides(s) {
  if (s.roof === 'pent' || s.roof === 'pyramid') return ['none'];
  if (s.roof === 'apex' && !ridgeAlongWidth(s)) return ['none'];
  if (s.range === 'pro' && s.depth > RANGES.pro.canopyMax + 1e-9) return ['none'];
  return ['none', 'left', 'right'];
}
export const canopyDepths = s => CANOPY_DEPTHS[s.range];
export const treatmentKinds = s => RANGES[s.range].treatments;
export function optionAllowed(s, key) {
  const o = OPTIONS[key];
  if (!o) return false;
  if (o.rooms && !o.rooms.includes(s.range)) return false;
  if (o.roofs && !o.roofs.includes(s.roof)) return false;
  if (key === 'diamond') return s.range === 'log' && s.thickness === 44;
  if (key === 'plasticBeams') return s.thickness !== 90;
  if (key === 'floorInsulation') return s.options?.floor === true;
  if (key === 'veranda') return s.canopy?.side && s.canopy.side !== 'none';
  if (key === 'roofInsulation') return !(s.range === 'log' && s.roof === 'pyramid');
  return true;
}
export const skylightAllowed = s => s.roof === 'flat';

// ---- Shape ---------------------------------------------------------------------------------
/**
 * The room's walls in plan metres: x to the right as you face the front, z towards you, the room
 * centred on the origin. Each wall runs from its left end as seen from outside (a) to its right
 * end (b); n is its outward normal.
 */
export function outline(s) {
  const w = s.width, d = s.depth, x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const pts = [['front', [x0, z1], [x1, z1]], ['right', [x1, z1], [x1, z0]], ['back', [x1, z0], [x0, z0]], ['left', [x0, z0], [x0, z1]]];
  return pts.map(([id, a, b], i) => {
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]), u = [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
    return {id, i, a, b, L: round(L, 4), u, n: [-u[1], u[0]], axis: Math.abs(u[0]) > .5 ? 'x' : 'z'};
  });
}
export const wallLength = (s, wall) => (wall === 'front' || wall === 'back' ? s.width : s.depth);
/** Where a corner stops an opening: the log ends, Prima's corner posts or Pro's 14cm posts. */
export function cornerMargin(s) {
  return s.range === 'log' ? .12 : s.range === 'prima' ? RANGES.prima.cornerPost + .06 : RANGES.pro.post / 2 + .07;
}
/**
 * Fixed obstacles along each wall that an opening cannot overlap, as [from, to] in metres from
 * the wall's left end seen from outside: Pro's intermediate posts (where Lugarde puts them) and
 * the log cabin's stability points. Pro measures along its post centres, so it is offset by half a
 * post from the outside corner.
 */
export function obstacles(s) {
  const out = {front: [], right: [], back: [], left: []};
  if (s.range === 'pro') {
    const posts = proPosts(s), half = RANGES.pro.post / 2;
    for (const wall of Object.keys(out)) {
      const Lc = wallLength(s, wall) * 1000 - 140;
      // Lugarde's along runs clockwise from its own start; ours runs from the left end seen from outside.
      for (const along of posts[wall]) { const c = (Lc - along) / 1000 + half; out[wall].push([c - half, c + half]); }
    }
  } else if (s.range === 'log') {
    const sp = stabilityPoints(s);
    for (const wall of Object.keys(out)) for (const c of sp[wall]) out[wall].push([c - .06, c + .06]);
  }
  // Left to right: Lugarde lists the front and left walls' posts from the far end.
  for (const wall of Object.keys(out)) out[wall].sort((a, b) => a[0] - b[0]);
  return out;
}
/** Wall height (metres) Lugarde gives this design, and its overall height. */
export function heightsOf(s) {
  const h = heights(s);
  return {wall: h.wall / 1000, total: h.total / 1000};
}
/** How high an opening's frame starts above the floor: doors at the floor; windows top-aligned with the doors. */
export function sillOf(type) {
  const o = OPENINGS[type];
  if (o.group === 'door') return 0;
  return Math.max(.05, 2.04 - o.fh);
}

let idCounter = 0;
const newId = () => 'o' + (++idCounter).toString(36) + Math.floor(Math.random() * 1296).toString(36);

/**
 * Places openings wall by wall in list order, nearest to where each one asks to be, never
 * overlapping each other, a corner, a Pro post or a log stability point. One that cannot fit is
 * stepped down within its family, then dropped. Returns {openings, changes}.
 */
export function fitOpenings(list, s) {
  const result = [], changes = [], blocks = obstacles(s), m = cornerMargin(s);
  const placed = {front: [], right: [], back: [], left: []};
  for (const o of list) {
    if (!has(placed, o.wall) || !has(OPENINGS, o.type)) continue;
    const L = wallLength(s, o.wall);
    let type = o.type, spot = null;
    while (type) {
      spot = freeSpot([...placed[o.wall], ...blocks[o.wall].map(([a, b]) => ({c: (a + b) / 2, w: b - a, fixed: true}))], OPENINGS[type].fw + 2 * MARGIN, (num(o.p) ?? .5) * L, m, L);
      if (spot !== null) break;
      type = DOWNSIZE[type];
    }
    if (spot === null) { changes.push({kind: 'removed', wall: o.wall, type: o.type}); continue; }
    if (type !== o.type) changes.push({kind: 'resized', wall: o.wall, from: o.type, to: type});
    placed[o.wall].push({c: spot, w: OPENINGS[type].fw + 2 * MARGIN});
    result.push({id: o.id || newId(), wall: o.wall, type, p: round(spot / L, 5), glass: o.glass === 'frosted' ? 'frosted' : 'clear'});
  }
  return {openings: result, changes};
}
function freeSpot(taken, w, desired, margin, L) {
  const lo = margin + w / 2, hi = L - margin - w / 2;
  if (hi < lo - 1e-9) return null;
  const blocks = taken.map(t => [t.c - t.w / 2 - (t.fixed ? 0 : GAP) - w / 2, t.c + t.w / 2 + (t.fixed ? 0 : GAP) + w / 2]).sort((a, b) => a[0] - b[0]);
  const free = [];
  let start = lo;
  for (const [a, b] of blocks) {
    if (a > start) free.push([start, Math.min(a, hi)]);
    start = Math.max(start, b);
  }
  if (start <= hi) free.push([start, hi]);
  let best = null;
  for (const [a, b] of free) {
    if (b < a - 1e-9) continue;
    const c = Math.min(Math.max(desired, a), b);
    if (best === null || Math.abs(c - desired) < Math.abs(best - desired)) best = c;
  }
  return best;
}
export function defaultOpenings(range, s) {
  return fitOpenings(LAYOUTS_BY_RANGE[range].map(o => ({...o, id: newId()})), s).openings;
}

// ---- The design --------------------------------------------------------------------------
const OPTION_KEYS = Object.keys(OPTIONS);
const EXTRA_KEYS = Object.keys(DEALER_EXTRAS);
export const DEFAULT = Object.freeze({
  v: 1, range: 'log', use: 'office', width: RANGES.log.defaultSize[0], depth: RANGES.log.defaultSize[1], thickness: 44,
  roof: 'flat', slope: 21, trim: 'silver', covering: 'shingles-black', raise: 0,
  canopy: {side: 'none', depth: 1.5}, openings: null,
  treatment: {kind: 'spray', colour: 'graphitegrey'}, frames: {kind: 'pickle', colour: 'dustygrey'}, floorColour: 'none',
  options: Object.fromEntries(OPTION_KEYS.map(k => [k, false])), spots: 0, wallLights: 0, skylight: 'none',
  extras: Object.fromEntries(EXTRA_KEYS.map(k => [k, false])), step: 0
});
// Starting finishes per system (Lugarde colours, a starting point the visitor changes): graphite log
// cabins with grey frames; Prima in pebble grey; Pro in transparent black oil. The posters match them.
const STARTING_FINISH = {
  log: {treatment: {kind: 'spray', colour: 'graphitegrey'}, frames: {kind: 'pickle', colour: 'dustygrey'}},
  prima: {treatment: {kind: 'pickle', colour: 'gravelgrey'}, frames: {kind: 'pickle', colour: 'quartzgrey'}},
  pro: {treatment: {kind: 'spray', colour: 'transparent-black-oil'}, frames: {kind: 'pickle', colour: 'black'}}
};

/** Turns any input (saved JSON, a share link, a partial patch) into a complete valid design. */
export function normalise(input = {}) {
  if (!input || typeof input !== 'object') input = {};
  const range = oneOf(input.range, RANGES, DEFAULT.range);
  const r = RANGES[range];
  const roof = r.roofs.includes(input.roof) ? input.roof : r.roof;
  const thickness = r.thicknesses.includes(Number(input.thickness)) ? Number(input.thickness) : r.thickness;
  const s = {v: 1, range, roof, thickness};
  const lim = limits(s), step = lim.step;
  const snap = (v, [a, b]) => {
    const n = Math.round((clamp(v, a, b) - a) / step);
    return round(clamp(a + n * step, a, b), 2);
  };
  s.width = snap(num(input.width) ?? r.defaultSize[0], lim.width);
  s.depth = snap(num(input.depth) ?? r.defaultSize[1], lim.depth);
  // An apex span beyond what the engine prices: bring the shorter side in.
  const ms = maxSpan(s);
  if (Math.min(s.width, s.depth) > ms + 1e-9) { if (s.width <= s.depth) s.width = snap(ms, lim.width); else s.depth = snap(ms, lim.depth); }
  // A Pro size Lugarde cannot price moves to the next size up (or down at the limit).
  for (const dim of ['width', 'depth']) if (!sizePriceable(s)) s[dim] = stepSize(s, dim, 1) ?? stepSize(s, dim, -1) ?? s[dim];
  const slopes = slopesFor(s);
  s.slope = slopes.includes(Number(input.slope)) ? Number(input.slope) : defaultSlope(s);
  s.trim = oneOf(input.trim, TRIM_COLOURS, DEFAULT.trim);
  s.covering = coveringsFor(s).includes(input.covering) ? input.covering : DEFAULT.covering;
  const c = input.canopy && typeof input.canopy === 'object' ? input.canopy : {};
  const sides = canopySides(s);
  s.canopy = {side: sides.includes(c.side) ? c.side : 'none', depth: nearest(canopyDepths(s), num(c.depth) ?? canopyDepths(s)[1] ?? canopyDepths(s)[0])};
  // Finishes: the kind must be one this system offers, the colour one of that kind.
  const fin = STARTING_FINISH[range];
  const t = input.treatment && typeof input.treatment === 'object' ? input.treatment : fin.treatment;
  const tKind = treatmentKinds(s).includes(t.kind) ? t.kind : fin.treatment.kind;
  s.treatment = tKind === 'none' ? {kind: 'none'} : {kind: tKind, colour: oneOf(t.colour, COLOURS[tKind], tKind === fin.treatment.kind ? fin.treatment.colour : Object.keys(COLOURS[tKind])[0])};
  const f = input.frames && typeof input.frames === 'object' ? input.frames : fin.frames;
  const fKind = FRAME_KINDS.includes(f.kind) ? f.kind : fin.frames.kind;
  s.frames = fKind === 'none' ? {kind: 'none'} : {kind: fKind, colour: oneOf(f.colour, COLOURS[fKind], Object.keys(COLOURS[fKind])[0])};
  const o = input.options && typeof input.options === 'object' ? input.options : {};
  s.options = Object.fromEntries(OPTION_KEYS.map(k => [k, o[k] === true]));
  s.canopy.side === 'none' && (s.options.veranda = false);
  for (const k of OPTION_KEYS) if (s.options[k] && !optionAllowed(s, k)) s.options[k] = false;
  // Floor colour: Lugarde pre-treats a floor in its spray colours (not with pressure treatment).
  s.floorColour = s.options.floor && s.treatment.kind !== 'boiler' && has(COLOURS.spray, input.floorColour) ? input.floorColour : 'none';
  s.spots = has(SPOTS, String(input.spots)) ? Number(input.spots) : 0;
  s.wallLights = has(WALL_LIGHTS, String(input.wallLights)) ? Number(input.wallLights) : 0;
  s.skylight = skylightAllowed(s) ? oneOf(input.skylight, SKYLIGHTS, 'none') : 'none';
  const e = input.extras && typeof input.extras === 'object' ? input.extras : {};
  s.extras = Object.fromEntries(EXTRA_KEYS.map(k => [k, e[k] === true]));
  s.use = oneOf(input.use, USES, DEFAULT.use);
  // Higher walls: Lugarde raises log and Prima walls a board at a time. Its configurator adds one
  // board itself when gutters go on a log cabin apex or a Prima pyramid.
  const minRaise = s.options.gutter && ((s.range === 'log' && s.roof === 'apex') || (s.range === 'prima' && s.roof === 'pyramid')) ? 1 : 0;
  s.raise = r.raise ? clamp(Math.round(num(input.raise) || 0), minRaise, r.raise) : 0;
  s.step = clamp(Math.floor(num(input.step) || 0), 0, STEPS.length - 1);
  const list = Array.isArray(input.openings) ? input.openings.filter(x => x && typeof x === 'object').slice(0, 24) : null;
  s.openings = list ? fitOpenings(list, s).openings : defaultOpenings(range, s);
  return s;
}

/** Applies a change and reports any doors or windows the new shape moved or removed. */
export function apply(state, patch) {
  const merged = {...state, ...patch};
  const next = normalise({...merged, openings: []});
  if (!Array.isArray(merged.openings)) return {state: normalise({...next, openings: null}), changes: []};
  const fitted = fitOpenings(merged.openings, next);
  return {state: normalise({...next, openings: fitted.openings}), changes: fitted.changes};
}
/** A new system brings its own size, roof, finishes and layout. */
export function switchRange(state, range) {
  const r = RANGES[range];
  return normalise({...state, range, roof: r.roof, thickness: r.thickness, width: r.defaultSize[0], depth: r.defaultSize[1], slope: null, canopy: {side: 'none'}, treatment: null, frames: null, openings: null, options: {}, skylight: 'none'});
}
export function addOpening(state, wall, type) {
  const taken = state.openings.filter(o => o.wall === wall);
  const L = wallLength(state, wall);
  let p = .5, best = -1;
  for (const c of [.5, .25, .75, .15, .85]) {
    const room = Math.min(...taken.map(o => Math.abs(o.p * L - c * L) - OPENINGS[o.type].fw / 2), 99);
    if (room > best) { best = room; p = c; }
  }
  const id = newId();
  const fitted = fitOpenings([...state.openings, {id, wall, type, p}], state);
  return {state: {...state, openings: fitted.openings}, id: fitted.openings.some(o => o.id === id) ? id : null, changes: fitted.changes};
}
/** Whether an opening type fits a wall at all, for disabling choices. */
export function fitsWall(state, wall, type) {
  return fitOpenings([{wall, type, p: .5}], {...state, openings: []}).openings.some(o => o.type === type);
}

// ---- Words -------------------------------------------------------------------------------
export function treatmentName(t) {
  if (!t || t.kind === 'none') return 'Untreated (natural spruce)';
  return `${TREATMENT_KINDS[t.kind].name}: ${COLOURS[t.kind][t.colour].name}`;
}
export function finishHex(t) {
  return !t || t.kind === 'none' ? UNTREATED : COLOURS[t.kind][t.colour].hex;
}
export function openingLabel(o) {
  const s = OPENINGS[o.type];
  return `${s.name} (Lugarde ${s.code})${o.glass === 'frosted' ? ', frosted glass' : ''}`;
}
export const sizeLabel = s => `${metres(s.width)} × ${metres(s.depth)}`;
export const area = s => s.width * s.depth;
export function roofName(s) {
  const r = ROOFS[s.roof];
  if (s.roof === 'flat') return `${r.name}, EPDM with ${TRIM_COLOURS[s.trim].name.toLowerCase()}`;
  if (s.roof === 'apex') return `${r.name} at ${s.slope}°, ${COVERINGS[s.covering].name.toLowerCase()}`;
  if (s.roof === 'pyramid') return `${r.name} at 30°, ${COVERINGS[s.covering].name.toLowerCase()}`;
  return `${r.name}, falling to the back`;
}

/**
 * Ordered specification rows {section, label, value, status}. status: 'lugarde' (priced by Lugarde's
 * engine, shown in the price), 'included' (part of Lugarde's price at no extra cost), 'quoted'
 * (Coastal's own work, quoted individually).
 */
export function specRows(state) {
  const s = normalise(state), r = RANGES[s.range], rows = [];
  const add = (section, label, value, status = 'lugarde', extra = {}) => rows.push({section, label, value, status, ...extra});
  const h = heightsOf(s);
  add('Building', 'System', `Lugarde ${r.name}: ${r.tag.toLowerCase()}`);
  add('Building', 'Outside size', `${metres(s.width)} wide × ${metres(s.depth)} deep (${area(s).toFixed(1)}m²), measured outside wall to outside wall`);
  add('Building', 'Walls', s.range === 'log' ? `${s.thickness}mm solid logs${s.thickness === 44 ? (s.options.diamond ? ', diamond-cut log ends' : ', straight-cut log ends') : ''}` : s.range === 'prima' ? `${s.thickness}mm boards in corner posts with an aluminium core` : '28mm boards between 14 × 14cm laminated posts');
  if (s.raise) add('Building', 'Higher walls', `Raised by ${s.raise} board${s.raise > 1 ? 's' : ''} (about ${s.raise * 135}mm)`);
  add('Building', 'Height', s.roof === 'flat' ? `Walls about ${metres2(h.wall)}, about ${metres2(h.total)} overall` : `Walls about ${metres2(h.wall)}, about ${metres2(h.total)} at the top`, 'included');
  add('Building', 'Roof', roofName(s));
  if (s.canopy.side !== 'none') add('Building', 'Canopy', `${metres(s.canopy.depth)} open canopy on the ${s.canopy.side}, on ${s.range === 'pro' ? '14 × 14' : '12 × 12'}cm posts`);
  add('Building', 'Use', `${USES[s.use].name} (furniture shown for illustration)`, 'included', {info: true});
  add('Finish', 'Timber', treatmentName(s.treatment), s.treatment.kind === 'none' ? 'included' : 'lugarde');
  add('Finish', 'Doors and windows', treatmentName(s.frames), s.frames.kind === 'none' ? 'included' : 'lugarde');
  if (s.roof === 'apex' || s.roof === 'pyramid') add('Finish', 'Roof covering', COVERINGS[s.covering].name, 'included');
  if (s.roof === 'flat') add('Finish', 'Roof trim', TRIM_COLOURS[s.trim].name, s.trim === 'black' ? 'lugarde' : 'included');
  for (const wall of ['front', 'right', 'back', 'left']) {
    const list = s.openings.filter(o => o.wall === wall);
    if (list.length) add('Doors and windows', WALLS[wall], list.map(openingLabel).join('; '));
  }
  if (!s.openings.length) add('Doors and windows', 'Openings', 'None chosen yet', 'included');
  add('Doors and windows', 'Glazing and locks', 'Double glazed (4+16+4, argon), 3-point locks on doors', 'included');
  if (s.options.floor) add('Inside', 'Floor', `Internal floor${s.floorColour !== 'none' ? `, pre-treated ${COLOURS.spray[s.floorColour].name.toLowerCase()}` : ''}`);
  const ins = ['floorInsulation', 'roofInsulation', 'wallInsulation', 'ceiling'].filter(k => s.options[k]).map(k => OPTIONS[k].name.toLowerCase());
  if (ins.length) add('Inside', 'Insulation', ins.join(', ').replace(/^./, c => c.toUpperCase()));
  for (const k of ['veranda', 'gutter', 'downpipe', 'plasticBeams', 'stormAnchors', 'finial']) if (s.options[k]) add('Extras', OPTIONS[k].name, OPTIONS[k].note);
  if (s.spots) add('Extras', 'Soffit lighting', SPOTS[s.spots].name);
  if (s.wallLights) add('Extras', 'Wall lights', WALL_LIGHTS[s.wallLights].name);
  if (s.skylight !== 'none') add('Extras', 'Skylight', SKYLIGHTS[s.skylight].name);
  for (const k of EXTRA_KEYS) if (s.extras[k]) add('Coastal’s work', DEALER_EXTRAS[k].name, DEALER_EXTRAS[k].note, 'quoted');
  add('Coastal’s work', 'Base, delivery and installation', 'By Coastal’s own fitters, after a free site survey', 'quoted');
  return rows;
}

export function summary(state, base = typeof location !== 'undefined' ? location.origin + '/configurator/' : 'https://coastal-garden-buildings-configurator.netlify.app/configurator/') {
  const s = normalise(state), r = RANGES[s.range];
  return {range: r.name, rangeKey: s.range, size: sizeLabel(s), area: area(s).toFixed(1) + 'm²', roof: roofName(s), use: USES[s.use].name, finish: treatmentName(s.treatment), rows: specRows(s), designLink: shareURL(s, base)};
}

// ---- Share links -------------------------------------------------------------------------
const WALL_CODE = {front: 'f', right: 'r', back: 'b', left: 'l'};
const CODE_WALL = Object.fromEntries(Object.entries(WALL_CODE).map(([k, v]) => [v, k]));
const T_CODE = {none: 'n', spray: 's', pickle: 'p', boiler: 'b'};
const CODE_T = Object.fromEntries(Object.entries(T_CODE).map(([k, v]) => [v, k]));
export function encode(state) {
  const s = normalise(state);
  return {
    v: '1', r: s.range, u: s.use, w: s.width, d: s.depth, t: s.thickness, rf: s.roof, sl: s.slope, tr: s.trim, cv: s.covering, rs: s.raise,
    c: `${s.canopy.side === 'none' ? 'n' : s.canopy.side[0]}${s.canopy.depth}`,
    o: s.openings.map(o => [WALL_CODE[o.wall], o.type, Math.round(o.p * 10000), o.glass === 'frosted' ? 'f' : ''].join('.').replace(/\.$/, '')).join('_'),
    tm: s.treatment.kind === 'none' ? 'n' : `${T_CODE[s.treatment.kind]}.${s.treatment.colour}`,
    fr: s.frames.kind === 'none' ? 'n' : `${T_CODE[s.frames.kind]}.${s.frames.colour}`,
    fc: s.floorColour, x: OPTION_KEYS.filter(k => s.options[k]).join('.'), sp: s.spots, wl: s.wallLights, sk: s.skylight,
    se: EXTRA_KEYS.filter(k => s.extras[k]).join('.')
  };
}
export function shareURL(state, base) {
  const u = new URL(base);
  u.hash = ''; u.search = '';
  Object.entries(encode(state)).forEach(([k, v]) => u.searchParams.set(k, String(v)));
  return u.toString();
}
export function fromParams(p) {
  if (p.get('v') !== '1' || !p.get('r')) return null;
  const openings = !p.has('o') ? null : (p.get('o') || '').split('_').filter(Boolean).map(token => {
    const [w, type, pos, glass] = token.split('.');
    return {wall: CODE_WALL[w], type, p: Number(pos) / 10000, glass: glass === 'f' ? 'frosted' : 'clear'};
  }).filter(o => o.wall && has(OPENINGS, o.type) && Number.isFinite(o.p));
  const fin = v => { if (!v || v === 'n') return {kind: 'none'}; const [k, ...c] = v.split('.'); return {kind: CODE_T[k] || 'none', colour: c.join('.')}; };
  const cv = p.get('c') || 'n';
  const side = {l: 'left', r: 'right'}[cv[0]] || 'none';
  const x = (p.get('x') || '').split('.'), se = (p.get('se') || '').split('.');
  return normalise({
    range: p.get('r'), use: p.get('u'), width: p.get('w'), depth: p.get('d'), thickness: p.get('t'), roof: p.get('rf'), slope: p.get('sl'), raise: p.get('rs'),
    trim: p.get('tr'), covering: p.get('cv'), canopy: {side, depth: Number(cv.slice(1))}, openings,
    treatment: fin(p.get('tm')), frames: fin(p.get('fr')), floorColour: p.get('fc'),
    options: Object.fromEntries(OPTION_KEYS.map(k => [k, x.includes(k)])), spots: p.get('sp'), wallLights: p.get('wl'), skylight: p.get('sk'),
    extras: Object.fromEntries(EXTRA_KEYS.map(k => [k, se.includes(k)])), step: p.get('s')
  });
}
export function fromURL(url) {
  try { return fromParams(new URL(url).searchParams); } catch { return null; }
}

// ---- Contact validation (Ofcom numbering plan, as the SMART and Hideaway configurators) -------
const POSTCODE = /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|[A-HK-Y][0-9]{1,2}|[0-9][A-HJKS-UW]|[A-HK-Y][0-9][ABEHMNPRV-Y]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;
export const validPostcode = value => POSTCODE.test(String(value || '').trim());
export function formatPostcode(value) {
  const v = String(value || '').toUpperCase().replace(/\s+/g, '');
  return v.length > 3 ? `${v.slice(0, -3)} ${v.slice(-3)}` : v;
}
// Geographic 01/02, non-geographic 03, mobiles 071-075 and 077-079 (and 07624), corporate 055/056
// and freephone 0800/0808. Premium 09, personal 070, pagers and Ofcom's drama ranges are refused.
const UK_NUMBER = /^0(?:1\d{8,9}|2\d{9}|3[0347]\d{8}|5[56]\d{8}|7(?:[1-57-9]\d{8}|624\d{6})|80[08]\d{6,7})$/;
const DRAMA = [/^07700900\d{3}$/, /^01632960\d{3}$/, /^0113496\d{4}$/, /^0114496\d{4}$/, /^0115496\d{4}$/, /^0116496\d{4}$/, /^0117496\d{4}$/, /^0118496\d{4}$/, /^01414960\d{3}$/, /^01314960\d{3}$/, /^02079460\d{3}$/, /^02890180\d{3}$/, /^02920180\d{3}$/, /^0191498\d{4}$/, /^03069990\d{3}$/, /^08081570\d{3}$/, /^09098790\d{3}$/];
/** Returns {valid, national, e164, display, kind, reason}. Accepts +44, 0044 and (0) forms. */
export function parseUKPhone(input) {
  const raw = String(input || '').trim();
  if (!raw) return {valid: false, reason: 'empty'};
  if (/[^\d\s()+.\-]/.test(raw)) return {valid: false, reason: 'characters'};
  let digits = raw.replace(/\(0\)/g, '').replace(/[^\d+]/g, '');
  if (digits.startsWith('+44')) digits = '0' + digits.slice(3);
  else if (digits.startsWith('0044')) digits = '0' + digits.slice(4);
  else if (digits.startsWith('44') && digits.length >= 12) digits = '0' + digits.slice(2);
  else if (digits.startsWith('+')) return {valid: false, reason: 'international'};
  if (digits.startsWith('00')) return {valid: false, reason: 'international'};
  if (!digits.startsWith('0')) digits = '0' + digits;
  if (!UK_NUMBER.test(digits)) return {valid: false, reason: digits.length < 10 ? 'short' : digits.length > 11 ? 'long' : 'range'};
  if (DRAMA.some(re => re.test(digits)) || /^0\d(\d)\1{7,8}$/.test(digits)) return {valid: false, reason: 'fictional'};
  const kind = digits.startsWith('07') ? 'mobile' : digits.startsWith('01') || digits.startsWith('02') ? 'landline' : 'other';
  let display;
  if (digits.startsWith('02')) display = `${digits.slice(0, 3)} ${digits.slice(3, 7)} ${digits.slice(7)}`;
  else if (digits.startsWith('07') || digits.startsWith('01') || digits.startsWith('05')) display = `${digits.slice(0, 5)} ${digits.slice(5)}`;
  else display = `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  return {valid: true, national: digits, e164: '+44' + digits.slice(1), display, kind};
}
export function phoneProblem(input) {
  const r = parseUKPhone(input);
  if (r.valid) return '';
  return {
    empty: 'Enter a UK phone number so Coastal can talk you through your design.',
    characters: 'Use numbers only, for example 07123 456789.',
    international: `Enter a UK number. From outside the UK, call Coastal on ${CONTACT.phone}.`,
    short: 'That number looks too short. UK numbers have 10 or 11 digits, such as 07123 456789.',
    long: 'That number looks too long. UK numbers have 10 or 11 digits, such as 07123 456789.',
    range: 'That does not look like a UK mobile or landline. Check the number, such as 07123 456789 or 01425 274000.',
    fictional: 'That number is reserved and cannot be called. Enter the number we can reach you on.'
  }[r.reason];
}
export const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value || '').trim());
export const validName = value => /^[\p{L}][\p{L}' .-]{0,49}$/u.test(String(value || '').trim());
