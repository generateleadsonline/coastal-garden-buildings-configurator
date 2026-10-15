// Pure geometry of a Lugarde building (no three.js): heights, footprint, roof line and where
// doors and windows sit. Shared by the 3D scene, the page (heights) and the PDF drawings.
import {PRODUCTS} from './catalog.js';
// Heights read from Lugarde's own structure measurements for each system and roof (the
// configurator's `measurements` block, 13 October 2026), in metres above the foundation beams.
export const GEOMETRY = {
  log: {beam: .07, course: .1456, ext: .15, flat: {wall: 2.038, top: 2.318, over: .23}, apex: {wall: 2.103, slope: 21, over: .3}, pent: {wall: 1.968, top: 2.521, over: .23, slope: 3}},
  prima: {beam: .044, post: .09, flat: {wall: 2.17, top: 2.45, over: .18}, pyramid: {wall: 2.18, slope: 30, over: .25}},
  pro: {beam: .044, post: .14, flat: {wall: 2.21, top: 2.49, over: .135}, apex: {wall: 2.48, slope: 25, over: .35}}
};
export function wallThickness(d) { return (d.wall || 28) / 1000; }
export function heights(d) {
  const g = GEOMETRY[d.range], r = g[d.roof] || g.flat;
  return {beam: g.beam, wall: r.wall, top: r.top, over: r.over, slope: r.slope};
}

/** Where every part is, for the camera, the plan overlay and the PDF drawings. */
export function envelope(d) {
  const h = heights(d), t = wallThickness(d), w = d.width, dep = d.depth;
  const ext = d.range === 'log' ? GEOMETRY.log.ext : 0;
  const can = canopyOf(d);
  const x0 = -w / 2 - (can.side === 'left' ? can.width : 0), x1 = w / 2 + (can.side === 'right' ? can.width : 0);
  const y0 = h.beam;
  const eave = y0 + h.wall;
  let ridge = y0 + (h.top || h.wall + .28);
  const ridgeAlongX = d.roof === 'apex' ? apexAlongX(d) : true;
  if (d.roof === 'apex') ridge = eave + (((ridgeAlongX ? dep : w) / 2) + .1) * Math.tan(h.slope * Math.PI / 180) + .06;
  if (d.roof === 'pent') ridge = eave + .28 + pentRiseOf(d) + h.over * Math.tan(5.2 * Math.PI / 180);
  if (d.roof === 'pyramid') ridge = eave + (Math.min(w, dep) / 2 + .05) * Math.tan(h.slope * Math.PI / 180) + .06;
  return {w, d: dep, t, x0, x1, z0: -dep / 2, z1: dep / 2, y0, eave, ridge, over: h.over, ext, canopy: can, ridgeAlongX,
    roofX0: x0 - h.over, roofX1: x1 + h.over, roofZ0: -dep / 2 - h.over, roofZ1: dep / 2 + h.over};
}
export function canopyOf(d) { return d.canopy && d.canopy.side !== 'none' && d.canopy.width > 0 ? d.canopy : {side: 'none', width: 0}; }
/** Lugarde runs an apex ridge along the longest side (their "longest direction" default). */
export function apexAlongX(d) { return d.width >= d.depth; }

/** Wall lengths and the clear span openings can use on each wall (outside view, left to right). */
export function wallSpans(d) {
  const t = wallThickness(d), post = GEOMETRY[d.range].post || 0, inset = Math.max(t, post) + .12;
  return {
    front: {length: d.width, from: -d.width / 2 + inset, to: d.width / 2 - inset},
    back: {length: d.width, from: -d.width / 2 + inset, to: d.width / 2 - inset},
    left: {length: d.depth, from: -d.depth / 2 + inset, to: d.depth / 2 - inset},
    right: {length: d.depth, from: -d.depth / 2 + inset, to: d.depth / 2 - inset}
  };
}
/** Intermediate Pro posts: none on walls up to 3m, otherwise evenly spaced at most 3m apart. */
export function postsAlong(length) {
  const n = Math.max(1, Math.ceil((length - .001) / 3));
  return Array.from({length: n - 1}, (_, i) => -length / 2 + length * (i + 1) / n);
}

/** Opening rectangles on a wall: u along the wall (outside view, from the wall's centre), y up. */
export function openingRects(d, wall) {
  const y0 = heights(d).beam;
  return (d.openings || []).filter(o => o.wall === wall && PRODUCTS[o.code]).map(o => {
    const p = PRODUCTS[o.code], w = p.w / 1000, h = p.h / 1000;
    // Doors stand on the floor; windows share the door head height (Lugarde's "top" alignment),
    // high strip windows sit just under the wall plate.
    const head = y0 + .02 + 1.935;
    const bottom = p.kind === 'door' ? y0 + .02 : p.high ? y0 + heights(d).wall - .12 - h : head - h;
    return {o, p, u0: o.at - w / 2, u1: o.at + w / 2, y0: bottom, y1: bottom + h};
  });
}


/** Rise of a pent roof's front over its back: Lugarde's 5 degree mono-pitch. */
export function pentRiseOf(d) { return d.depth * Math.tan(5.2 * Math.PI / 180); }

