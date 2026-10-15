// Builds the price request Lugarde's own configurator sends to its price engine
// (POST lugarde-configurator.com/api/v1/cart/?dealerToken=…) for one of our designs.
//
// This is a port of the parts of Lugarde's configurator that turn a design into that request
// (lugarde.PriceStructure, lugarde.HeightCalculator and the cart contents, from its app bundle
// app.9781bd4.js, 13 Oct 2026; research/lugarde-2026-10-13/), for the rectangular rooms and side
// canopies this configurator offers. tools/parity/ proves it against Lugarde's configurator
// itself: the same designs loaded into Lugarde's editor give the same structure and the same price.
//
// Plan coordinates follow Lugarde: millimetres, x to the right, y towards the front (the front
// wall is at y max). Log Cabin and Prima walls run on the nominal outside size; Pro walls on post
// centres (outside size less the 140mm post).
import {RANGES, OPENINGS, COVERINGS, TRIM_COLOURS, TREATMENT_KINDS, OPTIONS, SPOTS, WALL_LIGHTS, SKYLIGHTS} from './configurator-data.js';

const POST = 140, PRO_PANEL = 3500;
const rad = d => d * Math.PI / 180;
const mm = v => Math.round(v * 1000);

/** Wall heights as Lugarde's HeightCalculator.calculateWallHeight (the walls the price uses). */
export function wallHeight(s) {
  const doors = s.openings.map(o => OPENINGS[o.type]).filter(o => o.group === 'door');
  const r = doors.some(o => o.fh * 1000 > 1905), d = doors.some(o => o.fh * 1000 > 2040);
  const a = s.openings.some(o => o.type === 'pj26');
  const canopy = s.canopy.side !== 'none';
  let h = 0, c = 0;
  if (s.range === 'log') {
    h = 2000 + (s.roof === 'flat' ? 70 : s.roof === 'apex' ? 135 : 0);
    if (r || a) c = 135;
    if (d) c = 270;
  } else if (s.range === 'prima') {
    h = 2000 + (s.roof === 'pyramid' ? 180 : 20);
    if (r || canopy || a) c = 135;
    if (d) c += 135;
  } else {
    h = 2210 + (s.roof === 'apex' ? 270 : 0);
  }
  h += foundationChange(s) + c + waterLoad(s) + raiseMM(s);
  return h;
}
// Lugarde's "raise by N boards" (wall.raise.0N) adds 135mm a board to its height calculations.
const raiseMM = s => (s.raise || 0) * 135;
function foundationChange(s) {
  if (s.range === 'pro') return 0;
  return s.thickness === 28 ? -7 : s.thickness === 44 || s.thickness === 68 ? -32 : 0;
}
// Prima flat roofs draining front or back over 4.2m or more get one more board (water load).
function waterLoad(s) {
  // Only flat roofs have a water direction; ours drains to the back, so Lugarde checks the
  // building's depth.
  if (s.range !== 'prima' || s.roof !== 'flat') return 0;
  const {D} = outlineMM(s);
  return D >= 4200 ? 135 : 0;
}
/** Lugarde's HeightCalculator._getWallHeight: the base of its overall height. */
function wallBaseHeight(s) {
  const doors = s.openings.map(o => OPENINGS[o.type]).filter(o => o.group === 'door');
  const d = doors.some(o => o.fh * 1000 > 1905), o = doors.some(x => x.fh * 1000 > 2040);
  const c = s.roof === 'flat' ? 150 : 135;
  const canopy = s.canopy.side !== 'none', a = s.openings.some(x => x.type === 'pj26');
  let n = 1800;
  if (s.range === 'log') {
    n += 50;
    if (d || a) n += c;
    if (o) n += c;
    if (s.roof === 'apex' && s.thickness >= 44) n -= 119;
  } else if (s.range === 'prima') {
    if (d || a || canopy) n += c;
    if (o) n += 135;
  } else n += 190;
  return n + raiseMM(s) + foundationChange(s) + waterLoad(s);
}
/** Roof height above the walls as Lugarde's HeightCalculator._getRoofHeight. */
function roofHeight(s) {
  const r = RANGES[s.range], ov = overhangMM(s), slope = s.slope;
  if (s.roof === 'flat') return 500;
  if (s.roof === 'pent') return 703; // Lugarde: Math.ceil(702.5)
  if (s.roof === 'pyramid') {
    const {W, D} = outlineMM(s), t = Math.min(W, D), sl = slope === 30 ? 29.5 : slope;
    return Math.ceil(30 + 80 + (t / 2 + 2 * ov) * Math.tan(rad(sl)));
  }
  // Apex: the widest gable face (with its overhang) sets the rise.
  const span = spanMM(s);
  let face = span + 2 * ov;
  if (r.lugarde === 'pro') {
    if (face - 2 * ov > PRO_PANEL) face -= POST;
    face /= 2;
    let a = (face - ov) * Math.tan(rad(slope)) + 443;
    a += slope === 25 ? 141 : slope === 40 ? 151 : 0;
    return Math.ceil(a);
  }
  const base = s.thickness === 28 ? 300 : 443;
  return Math.ceil((face / 2 - ov) * Math.tan(rad(slope)) + base);
}
export const overhangMM = s => mm(RANGES[s.range].over[s.roof]);
/** Main room in Lugarde plan units: log/prima outside size, Pro post centres. */
export function outlineMM(s) {
  const pro = s.range === 'pro';
  return {W: mm(s.width) - (pro ? POST : 0), D: mm(s.depth) - (pro ? POST : 0)};
}
/** The apex span: the ridge runs along the longer side (Lugarde's roof.direction.largest). */
function ridgeAlongX(s) { const {W, D} = outlineMM(s); return W >= D; }
function spanMM(s) { const {W, D} = outlineMM(s); return ridgeAlongX(s) ? D : W; }

/** Canopy rectangle in plan units (posts' centre line on Pro). */
export function canopyRect(s) {
  if (s.canopy.side === 'none') return null;
  const {W, D} = outlineMM(s), c = mm(s.canopy.depth);
  if (s.canopy.side === 'right') return {x: W, y: 0, w: c, d: D};
  if (s.canopy.side === 'left') return {x: -c, y: 0, w: c, d: D};
  return {x: 0, y: D, w: W, d: c};
}

/** Lugarde's ProsystemGrid.ROOM._findClosestPoint: post centres on which every panel is a whole 10cm. */
function proGrid(e) {
  const max = PRO_PANEL - POST;
  if (e < 0) return -proGrid(-e);
  if (e < 430) return 0;
  if (e <= max) return 100 * Math.round((e - 1360) / 100) + 1360;
  const t = Math.floor(e / max) * max, n = e % max;
  return n > 180 && n < 430 ? 360 + t : t + proGrid(n);
}
/**
 * Intermediate Pro posts, as Lugarde's PoleGenerator.distributePolesBetween places them on a
 * customer's design: a wall longer than 3.36m between corner posts (3361mm, its supporting
 * distance for spruce) gets floor(L / 3361) posts at an even grid spacing; walls running towards
 * the origin (front and left) are offset 500mm per post. Returns, per wall, each post's distance
 * from the wall's start in Lugarde's clockwise order (back x0→x1, right y0→y1, front x1→x0,
 * left y1→y0). Doors and windows do not move the posts: openings fit between them.
 */
export function proPosts(s) {
  const {W, D} = outlineMM(s), out = {};
  for (const [wall, L, negative] of [['back', W, false], ['right', D, false], ['front', W, true], ['left', D, true]]) {
    const c = Math.floor(L / 3361), posts = [];
    if (c > 0) {
      const C = Math.abs(proGrid(L / (c + 1)));
      let w = L % C;
      w = w === proGrid(w) ? Math.abs(C - w) : -Math.abs(w);
      const H = w !== C, R = Math.abs(w) / 500;
      for (let k = 0; k < c; k++) {
        let I = C * (k + 1);
        // Lugarde's extra synchronisation only applies to walls of 10.44m and more.
        if (negative) { I = -I; if (H) I += 1 < R && k < R ? w / R * (k + 1) : w; }
        posts.push(Math.abs(I));
      }
    }
    out[wall] = posts;
  }
  return out;
}
/**
 * The longest Pro wall section (mm, as priced: between post centres plus one post). Lugarde makes
 * Pro walls up to 3.5m; at some sizes its own post grid leaves a 3.6m section (outside widths of
 * 6.0, 6.2, 6.4, 6.6 and 6.8m), which its engine refuses ("Invalid wall-type: wall.28mm.400"),
 * so the configurator does not offer those sizes.
 */
export function longestProSection(s) {
  if (s.range !== 'pro') return 0;
  const {W, D} = outlineMM(s), posts = proPosts(s);
  let longest = 0;
  for (const [wall, L] of [['back', W], ['right', D], ['front', W], ['left', D]]) {
    const cuts = [0, ...posts[wall], L];
    for (let i = 0; i < cuts.length - 1; i++) longest = Math.max(longest, cuts[i + 1] - cuts[i] + POST);
  }
  return longest;
}
export const PRO_SECTION_MAX = PRO_PANEL;
/** The structure Lugarde's PriceStructure.transformStructure builds for this design. */
export function buildStructure(s) {
  const r = RANGES[s.range], pro = s.range === 'pro', {W, D} = outlineMM(s);
  const ov = overhangMM(s), cr = canopyRect(s);
  const wallH = wallHeight(s), total = wallBaseHeight(s) + roofHeight(s), roofH = total - wallH;
  const lenOf = L => (pro ? L + POST : L);
  // Walls of the main room in Lugarde's order: back (y0), right, front (y max), left.
  const posts = pro ? proPosts(s) : null;
  const sides = [
    ['back', [0, 0], [W, 0]], ['right', [W, 0], [W, D]], ['front', [W, D], [0, D]], ['left', [0, D], [0, 0]]
  ];
  const walls = [], poles = [];
  if (pro) {
    for (const [x, y] of [[0, 0], [W, 0], [W, D], [0, D]]) poles.push({type: 'd', x, y, plinth: false, scaffolds: 0, decorativeScaffolds: 0, is_extra: true});
  }
  for (const [wall, a, b] of sides) {
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]), ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L;
    if (!pro || !posts[wall].length) {
      walls.push({type: 'outer', length_mm1: lenOf(L), x: (a[0] + b[0]) / 2, y: (a[1] + b[1]) / 2, ...(pro ? {containsProduct: 'solid'} : {})});
      continue;
    }
    // Lugarde lists a split wall's panels from the far end back to the start.
    const cuts = [0, ...posts[wall], L];
    const panels = [];
    for (let i = 0; i < cuts.length - 1; i++) {
      const m = (cuts[i] + cuts[i + 1]) / 2;
      panels.push({type: 'outer', length_mm1: cuts[i + 1] - cuts[i] + POST, x: a[0] + ux * m, y: a[1] + uy * m, containsProduct: 'solid'});
    }
    walls.push(...panels.reverse());
    for (const p of posts[wall]) poles.push({type: 'c', x: a[0] + ux * p, y: a[1] + uy * p, plinth: false, scaffolds: 0, decorativeScaffolds: 0, is_extra: true});
  }
  // Braces: a corner post next to a canopy carries one, each canopy post two.
  if (pro && cr) for (const p of poles) if (p.type === 'd' && onCanopyEdge(p, cr)) p.scaffolds = 1;
  const sub = {type: 'rectangle', x: 0, y: 0, depth_mm1: D, width_mm1: W, floor_mm2: pro ? (W + POST) * (D + POST) : W * D, outer_floor_mm2: 0, walls, glass_walls: [], poles};
  if (s.range === 'log' && s.roof === 'apex') {
    // Log cabins: Lugarde rebuilds the room along the ridge.
    if (ridgeAlongX(s)) { sub.depth_mm1 = W; sub.width_mm1 = D; } else { sub.depth_mm1 = D; sub.width_mm1 = W; }
    if (sub.width_mm1 > 6500) [sub.width_mm1, sub.depth_mm1] = [sub.depth_mm1, sub.width_mm1];
  }
  const canopies = [];
  if (cr) {
    const cp = canopyPosts(s, cr);
    const c = {type: 'regular', x: cr.x, y: cr.y, depth_mm1: cr.d, width_mm1: cr.w, floor_mm2: pro ? (cr.w + POST) * (cr.d + POST) : cr.w * cr.d, inside_substructure: false, walls: [], glass_walls: [], poles: cp};
    if (s.roof === 'apex') {
      // A canopy at a gable end is Lugarde's "front" canopy; log cabins measure it along the gable.
      c.type = 'front';
      if (s.range === 'log') [c.width_mm1, c.depth_mm1] = [c.depth_mm1, c.width_mm1];
    }
    canopies.push(c);
  }
  // Roofs, as Lugarde's stage-one generation (one roof over everything when it fits its price
  // bounds), otherwise one per part.
  const roofs = roofItems(s, sub, cr);
  const outline = unionBounds(s, cr);
  // Gutters run along the eaves, overhang included: both eaves of an apex (along the ridge,
  // canopy included), the back eave of a pent, all round a pyramid. Lugarde prices them by length.
  if (s.options.gutter && s.roof !== 'flat') {
    const bw = outline.x1 - outline.x0, bd = outline.y1 - outline.y0;
    const len = s.roof === 'apex' ? 2 * ((ridgeAlongX(s) ? bw : bd) + 2 * ov) : s.roof === 'pent' ? bw + 2 * ov : 2 * (bw + bd + 4 * ov);
    roofs[0].roofGuttersMM1 = len;
  }
  const st = {
    system: r.price, substructures: [sub], canopies, roofs, attic_mm2: 0,
    downspout_amount: s.options.downpipe && s.roof === 'flat' ? ((sub.floor_mm2 + (canopies[0]?.floor_mm2 || 0)) >= 18e6 ? 2 : 1) : 0,
    walls: [], floors: [], insets: [],
    wall_insulation_mm2: 0, roof_surface_mm2: 0, roof_insulation_mm2: 0,
    roof_reinforcement_mm2: sub.floor_mm2 + (canopies[0]?.floor_mm2 || 0), double_roof_surface_mm2: 0,
    ring_beam_mm1: walls.reduce((t, w) => t + w.length_mm1, 0), overhang_type: '',
    foundation_beams_mm1: walls.reduce((t, w) => t + w.length_mm1, 0),
    internal_canopies_parallel_to_roof_ridge_mm2: 0, structure: '', structureSummary: {}, overhang_length_mm1: 0
  };
  // Wall area for insulation and treatment: outer walls x wall height, plus the gables, less every
  // door and window at its frame size, plus 10%.
  let area = walls.reduce((t, w) => t + w.length_mm1 * wallH, 0);
  if (s.roof === 'apex') area += roofs[0].facades_mm1.reduce((t, f) => t + f, 0) * roofH / 2;
  area -= s.openings.reduce((t, o) => t + mm(OPENINGS[o.type].fw) * mm(OPENINGS[o.type].fh), 0);
  st.wall_insulation_mm2 = area > 0 ? Math.round(1.1 * area) : 0;
  st.roof_surface_mm2 = st.double_roof_surface_mm2 = roofSurface(s, outline, roofs, roofH);
  st.roof_insulation_mm2 = Math.round(1.07 * st.roof_surface_mm2);
  if (s.roof === 'flat') {
    const rr = pro ? ov + 60 + 10 : ov;
    st.overhang_length_mm1 = Math.round(2 * ((outline.x1 - outline.x0 + 2 * rr) + (outline.y1 - outline.y0 + 2 * rr)));
  }
  st.insets = insets(s);
  st.structureSummary = {
    hasDoors: s.openings.some(o => OPENINGS[o.type].group === 'door'), hasWindows: s.openings.some(o => OPENINGS[o.type].group === 'window'),
    hasPoles: poles.length > 0 || canopies.some(c => c.poles.length > 0), hasOuterWalls: true
  };
  st.measurements = {
    roofOverhangMM: ov, roofSlope: s.slope, wallThicknessMM: s.thickness, totalHeightMM: total, wallHeightMM: wallH,
    roomSurfaceMM2: W * D, canopySurfaceMM2: cr ? cr.w * cr.d : 0
  };
  return st;
}
function onCanopyEdge(p, cr) {
  return (p.x === cr.x || p.x === cr.x + cr.w) && p.y >= cr.y && p.y <= cr.y + cr.d;
}
/** Canopy posts at the canopy's two free corners: Lugarde sets 12cm posts in from the corner. */
function canopyPosts(s, cr) {
  const inset = s.range === 'pro' ? 0 : s.range === 'prima' ? 60 : 20;
  const free = s.canopy.side === 'right' ? [[cr.x + cr.w, cr.y], [cr.x + cr.w, cr.y + cr.d]]
    : s.canopy.side === 'left' ? [[cr.x, cr.y + cr.d], [cr.x, cr.y]] : [[cr.x + cr.w, cr.y + cr.d], [cr.x, cr.y + cr.d]];
  const cx = cr.x + cr.w / 2, cy = cr.y + cr.d / 2;
  const posts = free.map(([x, y]) => ({type: 'a', x: x + Math.sign(cx - x) * inset, y: y + Math.sign(cy - y) * inset, plinth: false, scaffolds: 2, decorativeScaffolds: 0, is_extra: false}));
  // Log cabins: a canopy edge longer than 3.5m gets a middle post (it does not change the price).
  if (s.range === 'log' && s.roof === 'flat' && cr.d > 3500) posts.splice(1, 0, {...posts[0], y: cy});
  return posts;
}
function unionBounds(s, cr) {
  const {W, D} = outlineMM(s);
  let x0 = 0, y0 = 0, x1 = W, y1 = D;
  if (cr) { x0 = Math.min(x0, cr.x); y0 = Math.min(y0, cr.y); x1 = Math.max(x1, cr.x + cr.w); y1 = Math.max(y1, cr.y + cr.d); }
  return {x0, y0, x1, y1};
}
// Lugarde's roof price bounds for stage one (log cabins and Prima): 1.8 (Prima flat 1.2) to 6m
// by 1.8 to 4.2m, either way round. Pro always has one roof over the whole building.
function fitsRoofBounds(s, w, d) {
  if (s.range === 'pro') return true;
  const min = s.range === 'prima' && s.roof === 'flat' ? 1200 : 1800;
  const ok = (a, b) => a >= min && a <= 6000 && b >= 1800 && b <= 4200;
  return ok(w, d) || ok(d, w);
}
function roofItems(s, sub, cr) {
  const type = {flat: 'flat', apex: 'saddle', pent: 'pent', pyramid: 'pyramid'}[s.roof];
  const pro = s.range === 'pro', {W, D} = outlineMM(s);
  const facades = () => {
    if (s.roof !== 'apex') return [];
    let g = spanMM(s);
    if (pro) { g += POST; if (g > PRO_PANEL - POST) g += POST; }
    return [g, g];
  };
  const base = {x: 0, y: 0, facades_mm1: facades(), has_metal: s.roof === 'pyramid', valley_gutters: 0, altered_overhang_mm1: 0, strategy: 'stage-1', roofGuttersMM1: 0};
  const u = unionBounds(s, cr), bw = u.x1 - u.x0, bd = u.y1 - u.y0;
  if (pro) {
    const w = bw + POST, d = bd + POST;
    return [{type, depth_mm1: d, width_mm1: w, ...base, above: cr ? 'both' : 'substructure', area_mm2: w * d}];
  }
  if (fitsRoofBounds(s, bw, bd)) {
    const rot = !((bw >= (s.range === 'prima' && s.roof === 'flat' ? 1200 : 1800) && bw <= 6000 && bd >= 1800 && bd <= 4200));
    const w = rot ? bd : bw, d = rot ? bw : bd;
    return [{type, depth_mm1: d, width_mm1: w, ...base, above: cr ? 'both' : 'substructure', area_mm2: w * d}];
  }
  // Too big for one: the room and the canopy separately (stage two), or the room in chunks.
  const parts = [{w: W, d: D, above: 'substructure'}];
  if (cr) parts.push({w: cr.w, d: cr.d, above: 'canopy'});
  const out = [];
  for (const p of parts) {
    if (fitsRoofBounds(s, p.w, p.d)) {
      const rot = !((p.w >= 1800 && p.w <= 6000 && p.d >= 1800 && p.d <= 4200));
      out.push({type, depth_mm1: rot ? p.w : p.d, width_mm1: rot ? p.d : p.w, ...base, facades_mm1: out.length ? [] : base.facades_mm1, above: p.above, strategy: cr ? 'stage-2' : 'stage-3', area_mm2: p.w * p.d});
    } else {
      // Area only matters to the engine here (log cabins price the roof with the room).
      out.push({type, depth_mm1: Math.min(p.w, p.d), width_mm1: Math.max(p.w, p.d), ...base, facades_mm1: out.length ? [] : base.facades_mm1, above: p.above, strategy: 'stage-3', area_mm2: p.w * p.d});
    }
  }
  return out;
}
function roofSurface(s, u, roofs, roofH) {
  const ov = overhangMM(s), pro = s.range === 'pro', half = pro ? POST / 2 : 0;
  const bw = u.x1 - u.x0, bd = u.y1 - u.y0;
  if (s.roof === 'flat') return (bw + 2 * ov + 2 * half * 2) * (bd + 2 * ov + 2 * half * 2) - (pro ? 0 : 0);
  if (s.roof === 'pent') {
    const a = bw + 2 * ov, b = bd + 2 * ov;
    return Math.min(a, b) / Math.cos(rad(s.slope)) * Math.max(a, b);
  }
  if (s.roof === 'apex') {
    // Lugarde's prism: ridge length and span each grow by the overhang (plus half a post on Pro).
    const n = ov + half, along = ridgeAlongX(s) ? bw : bd, span = ridgeAlongX(s) ? bd : bw;
    const h = span / 2 * Math.tan(rad(s.slope));
    const run = span / 2 + n, rise = h + n * (h / (span / 2));
    return (along + 2 * n) * 2 * Math.hypot(rise, run);
  }
  // Pyramid, per roof: Lugarde fixes its overhang at 250mm here.
  return roofs.reduce((t, r) => {
    const e = Math.min(r.width_mm1, r.depth_mm1), sl = rad(s.slope), sh = (roofH + 250 * Math.tan(sl)) / Math.sin(sl);
    let a = 4 * (sh * (e + 500) / 2);
    if (r.width_mm1 !== r.depth_mm1) a += 2 * (Math.max(r.width_mm1, r.depth_mm1) - e) * sh;
    return t + a;
  }, 0);
}
/** Doors and windows as Lugarde lists them in the request (positions in plan units). */
function insets(s) {
  const {W, D} = outlineMM(s), rot = {front: 180, right: 90, back: 0, left: -90};
  return s.openings.map(o => {
    const spec = OPENINGS[o.type], p = o.p;
    const pos = o.wall === 'front' ? [p * W, D] : o.wall === 'back' ? [W - p * W, 0] : o.wall === 'left' ? [0, p * D] : [W, D - p * D];
    return {
      inset: {
        product: {name: spec.code.replace(/[ ()]/g, ''), type: spec.group, width: mm(spec.fw), height: mm(spec.fh), width3d: mm(spec.fw), height3d: mm(spec.fh), identifier: spec.product, glass: 0, treatment: null},
        scale: 1, width: mm(spec.fw), height: mm(spec.fh), margin: {top: 0, right: 20, bottom: 0, left: 20}, horizontal: 'center', vertical: 'bottom',
        justified: true, outwards: true, hingeLeft: true, hasWeatherStrips: false, glasslock: false,
        position: {_x: Math.round(pos[0]), _y: Math.round(pos[1])}, rotation: rot[o.wall], opposite_direction_on_outer_edge: false, safetyglass: false, clearglass: o.glass !== 'frosted'
      },
      isInCanopy: false, isInInnerWall: false
    };
  });
}

/** The cart contents Lugarde's configurator sends for this design (product id → amount). */
export function buildContents(s) {
  const r = RANGES[s.range], c = {};
  const add = (id, n = 1) => { c[id] = (c[id] || 0) + n; };
  add('base.shape.rectangle');
  add(`wall.thickness.${s.thickness}mm`);
  add('remainder.trinkets.chrome');
  add(`roof.type.${{flat: 'flat', apex: 'sadle', pent: 'pent', pyramid: 'pyramid'}[s.roof]}`);
  if (s.roof === 'flat') { add('roof.waterdirection.backward'); add(TRIM_COLOURS[s.trim].product); }
  if (s.roof === 'apex') { add('roof.direction.largest'); add(`roof.slope.${String(s.slope).padStart(2, '0')}`); }
  if (s.roof === 'apex' || s.roof === 'pyramid') for (const p of COVERINGS[s.covering].products) add(p);
  if (s.range === 'log' && s.thickness === 44) add(s.options.diamond ? 'wall.edge.diamond' : 'wall.edge.solid');
  if (s.range === 'prima') add('wall.finish.uprofile');
  if (s.range === 'pro') add('wall.material.pine');
  add(s.options.plasticBeams ? 'wall.foundation-beams.plastic' : 'wall.foundation-beams.wood');
  if (s.raise) add(`wall.raise.${String(s.raise).padStart(2, '0')}`);
  for (const o of s.openings) add(OPENINGS[o.type].product);
  // Treatments: walls (and Pro or canopy posts follow), then doors and windows, then the floor.
  if (s.treatment.kind !== 'none') {
    add(TREATMENT_KINDS[s.treatment.kind].product);
    add(`material.wood.${s.treatment.kind}.${s.treatment.colour}`);
    if ((s.range === 'pro' || s.canopy.side !== 'none') && s.treatment.kind !== 'boiler') {
      add(`material.pole.treatment.${s.treatment.kind}`);
      add(`material.pole.${s.treatment.kind}.${s.treatment.colour}`);
    }
  }
  if (s.frames.kind !== 'none') {
    add(`material.door-window.treatment.${s.frames.kind}`);
    add(`material.door-window.${s.frames.kind}.${s.frames.colour}`);
  }
  if (s.options.floor && s.floorColour && s.floorColour !== 'none' && s.treatment.kind !== 'boiler') {
    add('material.floor.treatment.spray'); add(`material.floor.spray.${s.floorColour}`);
  }
  for (const [k, on] of Object.entries(s.options)) if (on && k !== 'diamond' && k !== 'plasticBeams') for (const p of OPTIONS[k].products) add(p);
  if (s.spots) add(SPOTS[s.spots].product);
  if (s.wallLights) add(WALL_LIGHTS[s.wallLights].product);
  if (s.skylight !== 'none') add(SKYLIGHTS[s.skylight].product);
  return c;
}

/** Lugarde's _getProductTreatment: the treatment it reports with each cart line. */
function treatmentFor(id, contents) {
  const has = k => Object.prototype.hasOwnProperty.call(contents, k);
  if (id.startsWith('door.') || id.startsWith('window.')) {
    const k = Object.keys(contents).find(x => x.startsWith('material.door-window.treatment.'));
    return k ? k.slice(31) : '';
  }
  if (id.startsWith('roof.type')) {
    if (has('material.woodtreatment.spray')) return 'spray';
    if (has('material.woodtreatment.boiler')) return 'boiler';
    const k = Object.keys(contents).find(x => x.startsWith('material.roof.treatment.'));
    return k ? k.slice(24) : '';
  }
  if (id.startsWith('remainder.innerfloor') || id.startsWith('remainder.outerfloor')) {
    if (has('material.woodtreatment.boiler')) return 'boiler';
    const k = Object.keys(contents).find(x => x.startsWith('material.floor.treatment.'));
    return k ? k.slice(25) : '';
  }
  if (id.startsWith('wall.thickness')) {
    return has('material.woodtreatment.boiler') ? 'boiler' : has('material.woodtreatment.spray') ? 'spray' : has('material.woodtreatment.pickle') ? 'pickle' : '';
  }
  return '';
}

/** The full JSON:API request body. */
export function buildCartRequest(s, id = String(Date.now())) {
  const contents = buildContents(s);
  const lines = Object.fromEntries(Object.entries(contents).map(([k, n]) => [k, {amount: n, treatment: treatmentFor(k, contents)}]));
  return {data: {id, type: 'cart', attributes: {contents: lines, structure: buildStructure(s), system: RANGES[s.range].price}}};
}

/** Heights Lugarde's configurator gives this design (mm): its walls and its overall height. */
export function heights(s) {
  return {wall: wallHeight(s), total: wallBaseHeight(s) + roofHeight(s)};
}
/**
 * Log cabins: Lugarde's stability points (braces inside long log walls). A wall longer than 5m
 * (apex: 5.9m at the gables, 4.9m under shingled eaves) gets one, then one more past 6.5, 9.7, 13,
 * 16.25 and 19.5m, spread evenly. Doors and windows must sit between them. Returns, per wall,
 * the points' distances from the wall's left end as seen from outside (metres).
 */
export function stabilityPoints(s) {
  const out = {front: [], right: [], back: [], left: []};
  if (s.range !== 'log') return out;
  const needed = L => [5500, 6500, 9700, 13000, 16250, 19500].filter(t => L > t).length;
  const {W, D} = outlineMM(s), alongX = W >= D;
  for (const [wall, L] of [['front', W], ['back', W], ['left', D], ['right', D]]) {
    let min = 5000;
    if (s.roof === 'apex') {
      const gable = alongX ? wall === 'left' || wall === 'right' : wall === 'front' || wall === 'back';
      min = gable ? 5900 : COVERINGS[s.covering]?.kind === 'shingles' ? 4900 : 5900;
    }
    if (!(L > min)) continue;
    const n = Math.max(1, needed(L));
    for (let k = 1; k <= n; k++) out[wall].push(Math.round(L * k / (n + 1)) / 1000);
  }
  return out;
}
