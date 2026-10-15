// Illustrative furniture for the room's use, after the Sutton dealer's inspiration galleries (this designer is built on Sutton's) (garden offices,
// home gyms, games rooms, home bars, golf simulators, granny annexes, summerhouses). It shows
// what the room could become; it is never priced and the page labels it illustrative.
//
// Works inside the room: x across, z front (+) to back (-), floor at room.floor. Furniture keeps
// clear of doors and windows on the wall it stands against.
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {OPENINGS} from './configurator-data.js';
import {sillOf} from './configurator-model.js';

const SOFT = {sand: '#d8c7a8', oat: '#e6dccb', terracotta: '#b8714e', clay: '#c99a72', ink: '#2a2f33', oak: '#b88d5f', walnut: '#6e4b33', rubber: '#2b2d2f', canvas: '#efe9dc', leaf: '#4f7a46', brass: '#b8955a', charcoal: '#3a3a3c', linen: '#f1ece2', felt: '#2f6d4a', grass: '#3e7a3a', slate: '#4a4f55'};

export function furnish(parent, s, room, kit) {
  const {std, add, box, group} = kit;
  const iw = room.x1 - room.x0, id = room.z1 - room.z0, F = room.floor;
  const cx = (room.x0 + room.x1) / 2, cz = (room.z0 + room.z1) / 2;
  const fg = group(parent, 'furniture');
  fg.position.set(cx, 0, cz);
  const m = {};
  for (const [k, v] of Object.entries(SOFT)) m[k] = std(v, {roughness: k === 'rubber' ? .95 : k === 'brass' ? .35 : .75, metalness: k === 'brass' ? .6 : 0});
  const rbox = (w, h, d, x, y, z, mat, r = .04) => add(fg, new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2, h / 2, d / 2)), mat, x, y, z, 'furniture');
  const cyl = (r0, r1, h, x, y, z, mat, seg = 20) => add(fg, new THREE.CylinderGeometry(r0, r1, h, seg), mat, x, y, z, 'furniture');
  const b = (w, h, d, x, y, z, mat) => box(fg, w, h, d, x, y, z, mat, 'furniture');
  // Openings on each wall, in this frame: [from, to] along the wall and their sill.
  const spans = side => s.openings.filter(o => o.wall === side).map(o => {
    const sp = OPENINGS[o.type], L = side === 'front' || side === 'back' ? s.width : s.depth, c = o.p * L;
    const a = c - sp.fw / 2 - .05, e = c + sp.fw / 2 + .05;
    // Along x for front (left to right), back (right to left), z for the sides.
    const map = u => (side === 'front' ? u - s.width / 2 - cx : side === 'back' ? s.width / 2 - u - cx : side === 'left' ? u - s.depth / 2 - cz : s.depth / 2 - u - cz);
    const p = [map(a), map(e)].sort((x, y) => x - y);
    return {a: p[0], b: p[1], sill: sillOf(o.type)};
  });
  const clear = (side, pos, half, below) => spans(side).every(sp => pos + half < sp.a || pos - half > sp.b || sp.sill > below);
  const spot = (side, half, prefer = 0, below = 2) => {
    const lim = (side === 'front' || side === 'back' ? iw : id) / 2 - half - .05;
    for (let k = 0; k < 50; k++) for (const sg of [1, -1]) {
      const pos = prefer + sg * k * .1;
      if (Math.abs(pos) <= lim && clear(side, pos, half, below)) return pos;
    }
    return null;
  };
  const plant = (x, z, sc = 1) => {
    cyl(.14 * sc, .11 * sc, .3 * sc, x, F + .15 * sc, z, m.charcoal);
    for (let i = 0; i < 5; i++) add(fg, new THREE.IcosahedronGeometry(.13 * sc, 1), m.leaf, x + Math.sin(i * 2.4) * .07 * sc, F + (.42 + i * .08) * sc, z + Math.cos(i * 2.4) * .07 * sc, 'furniture');
  };
  const rug = (x, z, w0, d0, mat) => { const r0 = b(w0, .006, d0, x, F + .004, z, mat); r0.castShadow = false; };
  const back = -id / 2;
  const use = s.use;
  if (use === 'office') {
    const x = spot('back', .7, -iw / 6, 1.0) ?? 0;
    b(1.4, .03, .7, x, F + .74, back + .4, m.oak);
    for (const sx of [-1, 1]) b(.04, .72, .62, x + sx * .66, F + .36, back + .4, m.ink);
    rbox(.5, .32, .03, x, F + .98, back + .2, m.ink, .01);
    rbox(.5, .08, .5, x, F + .47, back + .95, m.charcoal);
    rbox(.48, .5, .07, x, F + .78, back + 1.18, m.charcoal);
    cyl(.03, .03, .4, x, F + .22, back + .95, m.ink, 10);
    const sx = spot('back', .45, iw / 3, 2.2);
    if (sx !== null && Math.abs(sx - x) > 1.2) {
      // An open bookcase: back, sides, top and base, shelves and rows of books.
      b(.9, 1.8, .02, sx, F + .9, back + .02, m.oak);
      for (const ex of [-1, 1]) b(.025, 1.8, .32, sx + ex * .4375, F + .9, back + .17, m.oak);
      for (let k = 0; k < 6; k++) b(.85, .025, .3, sx, F + .0125 + k * .3525, back + .18, m.oak);
      const books = [m.terracotta, m.ink, m.canvas, m.leaf, m.clay, m.slate, m.brass];
      for (let k = 0; k < 4; k++) for (let i = 0; i < 9; i++) if ((i + k) % 5 !== 4) { const bh = .22 + ((i * 7 + k * 3) % 4) * .015; b(.075, bh, .2, sx - .36 + i * .088, F + .025 + k * .3525 + bh / 2 + .001, back + .14, books[(i + k * 2) % books.length]); }
    }
    if (id > 2.4) { rbox(1.6, .42, .8, 0, F + .21, id / 2 - .75, m.oat); rbox(1.6, .4, .18, 0, F + .5, id / 2 - .38, m.oat); }
    plant(iw / 2 - .3, back + .3, .9);
  } else if (use === 'gym') {
    rug(0, 0, Math.min(2.6, iw - .4), Math.min(1.8, id - .4), m.rubber);
    const x = spot('back', .6, 0, 2.2) ?? 0;
    for (const sx of [-.55, .55]) b(.07, 2, .07, x + sx, F + 1, back + .5, m.ink);
    b(1.2, .05, .05, x, F + 1.95, back + .5, m.ink);
    b(1.6, .03, .03, x, F + 1.3, back + .62, m.brass);
    for (const sx of [-.75, .75]) cyl(.22, .22, .05, x + sx, F + 1.3, back + .62, m.rubber).rotation.z = Math.PI / 2;
    rbox(1.1, .1, .3, 0, F + .45, 0, m.ink);
    for (const zz of [-.4, .4]) b(.05, .4, .05, 0, F + .2, zz, m.ink);
    const bx = spot('left', .5, 0, 1.4);
    if (bx !== null) { b(.5, .9, 1.1, -iw / 2 + .5, F + .45, bx, m.charcoal); rbox(.35, .08, .4, -iw / 2 + .5, F + .95, bx - .2, m.rubber); }
    plant(iw / 2 - .3, id / 2 - .4, .8);
  } else if (use === 'games') {
    const tw = Math.min(2.2, iw - 1.2), td = Math.min(1.2, id - 1.2);
    if (tw > 1.2 && td > .7) {
      rbox(tw, .14, td, 0, F + .74, -id / 8, m.walnut, .03);
      b(tw - .16, .01, td - .16, 0, F + .815, -id / 8, m.felt);
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b(.12, .68, .12, sx * (tw / 2 - .15), F + .34, -id / 8 + sz * (td / 2 - .15), m.walnut);
    }
    const dx = spot('back', .3, iw / 3, 2.2);
    if (dx !== null) cyl(.23, .23, .04, dx, F + 1.73, back + .03, m.ink, 28).rotation.x = Math.PI / 2;
    for (const sx of [-1, 1]) { cyl(.18, .18, .05, sx * (iw / 2 - .4), F + .75, id / 2 - .5, m.ink); cyl(.025, .025, .72, sx * (iw / 2 - .4), F + .36, id / 2 - .5, m.brass, 8); }
  } else if (use === 'bar') {
    const x = spot('back', 1.1, 0, 1.0) ?? 0, bw = Math.min(2.2, iw - .6);
    b(bw, .9, .5, x, F + .45, back + 1.1, m.walnut);
    b(bw + .1, .05, .62, x, F + .925, back + 1.1, m.slate);
    b(bw, 1.6, .3, x, F + 1.2, back + .16, m.ink);
    for (let k = 1; k < 4; k++) b(bw - .04, .02, .28, x, F + .6 + k * .38, back + .18, m.oak);
    for (let i = 0; i < Math.floor(bw / .16); i++) for (let k = 1; k < 4; k++) cyl(.035, .035, .26, x - bw / 2 + .12 + i * .16, F + .6 + k * .38 + .14, back + .2, [m.leaf, m.brass, m.terracotta, m.canvas][(i + k) % 4], 10);
    for (let i = 0; i < Math.max(2, Math.floor(bw / .6)); i++) { const sx = x - bw / 2 + .35 + i * .6; cyl(.19, .19, .06, sx, F + .78, back + 1.65, m.ink); cyl(.025, .025, .74, sx, F + .38, back + 1.65, m.brass, 8); }
  } else if (use === 'golf') {
    const sw = Math.min(3.2, iw - .4), sh = Math.min(2.2, (room.wallTop - F) - .25);
    b(sw, sh, .03, 0, F + .15 + sh / 2, back + .06, m.canvas);
    b(Math.min(1.5, iw - .6), .02, Math.min(1.5, id - 1.2), 0, F + .01, back + 1.4, m.grass);
    rbox(.3, .1, .12, 0, Math.min(room.wallTop - .15, F + 2.3), id / 2 - .8, m.ink);
    rbox(.6, .45, .5, iw / 2 - .5, F + .225, id / 2 - .6, m.charcoal);
    cyl(.012, .012, 1, -.45, F + .5, back + 1.6, m.ink, 8).rotation.z = .3;
  } else if (use === 'annexe') {
    const x = spot('back', .9, 0, 1.0) ?? 0, bw = Math.min(1.6, iw - .8);
    rbox(bw, .4, 2, x, F + .2, back + 1.05, m.walnut, .03);
    rbox(bw - .06, .22, 1.9, x, F + .5, back + 1.07, m.linen, .06);
    rbox(bw, .9, .08, x, F + .45, back + .05, m.walnut, .02);
    for (const sx of [-1, 1]) { rbox(.4, .28, .3, x + sx * (bw / 2 + .3), F + .44, back + .2, m.linen, .1); b(.45, .5, .4, x + sx * (bw / 2 + .3), F + .25, back + .25, m.oak); }
    if (id > 3) { rbox(.8, .4, .8, -iw / 2 + .6, F + .2, id / 2 - .7, m.terracotta); }
  } else {
    rug(0, -id / 8, Math.min(2.2, iw - .6), Math.min(1.6, id - .6), m.oat);
    for (const sx of [-1, 1]) { rbox(.75, .42, .75, sx * .7, F + .21, -id / 8, m.canvas); rbox(.75, .38, .16, sx * .7, F + .55, -id / 8 - .3, m.canvas); }
    cyl(.35, .35, .04, 0, F + .4, -id / 8, m.oak, 28); cyl(.04, .04, .38, 0, F + .19, -id / 8, m.ink, 10);
    plant(-iw / 2 + .35, back + .35);
  }
}
