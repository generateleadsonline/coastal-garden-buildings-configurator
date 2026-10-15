// Builds a Lugarde building from a design, in metres: x across the width (left to right as
// seen from the front), z front (+) to back (-), y up from the ground. Width and depth are
// Lugarde's outside-wall dimensions; roof overhang, log ends and canopies come on top.
//
// Construction follows Lugarde's drawings and Coastal's photos:
// - Log cabin: 145mm logs stacked on foundation beams, a windmill joint at each corner where
//   the logs of both walls run 150mm past the corner on alternate courses (straight or
//   diamond cut), gables filled with logs.
// - Prima: horizontal tongue-and-groove boards slid into slim square corner posts.
// - Pro: 14 x 14cm laminated posts at the corners and at most 3m apart, boards between.
// Roofs: flat (EPDM, timber fascia, aluminium edge trim, falls to the back), apex and pyramid
// (felt shingles, barge boards), pent (single slope). Every part carries `userData.tags`, used
// to frame and highlight it when its option changes, and to fingerprint the scene in QA.
// No two visible faces share a plane: parts stop short, sit proud or are inset by 2-5mm.
import * as THREE from 'three';
import {PRODUCTS, SHINGLES, TRIMS, FINISHES} from '../catalog.js';
import {GEOMETRY, heights, envelope, wallThickness, openingRects, postsAlong, pentRiseOf} from '../geometry.js';
export {GEOMETRY, heights, envelope, wallThickness, openingRects, postsAlong, pentRiseOf};
import {finishColour} from './textures.js';

const EPS = .003;

// ---------------------------------------------------------------------------------------------
// Geometry helpers. Boxes get UVs in world metres on every face, so log courses and boards run
// continuously across separate pieces of the same wall.
function worldBox(w, h, d, x, y, z) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x, y, z);
  const pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const nx = Math.abs(nor.getX(i)), ny = Math.abs(nor.getY(i));
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    if (ny > .5) uv.setXY(i, px, pz);
    else if (nx > .5) uv.setXY(i, pz, py);
    else uv.setXY(i, px, py);
  }
  return g;
}
function mesh(geometry, material, tags, opts = {}) {
  const m = new THREE.Mesh(geometry, material);
  m.castShadow = opts.cast !== false; m.receiveShadow = true;
  m.userData.tags = tags;
  if (opts.solid) m.userData.solid = true;
  return m;
}
/** A prism along z from a 2D outline in x/y (used for gables and diamond log ends). */
function prism(points, depth, z) {
  const shape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x, y)));
  const g = new THREE.ExtrudeGeometry(shape, {depth, bevelEnabled: false});
  g.translate(0, 0, z);
  const pos = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i), pos.getY(i));
  return g;
}

// ---------------------------------------------------------------------------------------------
export function buildBuilding(d, tex) {
  const group = new THREE.Group();
  const materials = [];
  const mat = (opts, name) => { const m = new THREE.MeshStandardMaterial(opts); if (name) m.name = name; materials.push(m); return m; };
  const e = envelope(d), h = heights(d), t = e.t, W = d.width, D = d.depth, y0 = e.y0;
  const finish = FINISHES[d.finish] || FINISHES.none;
  const finishSpec = finish.group === 'none' ? null : {hex: finish.hex, opaque: finish.opaque, strength: finish.strength};
  const profile = d.range === 'log' ? 'log' : 'tg';
  const wallTex = tex.timber(profile, finishSpec);
  const wallMat = mat({map: wallTex.map, normalMap: wallTex.normalMap, roughness: wallTex.roughness, color: '#ffffff'});
  // Inside, the walls are the same timber, left untreated unless the treatment is clear.
  const innerTex = tex.timber(profile, finish.group === 'spray' && !finish.opaque && finish.strength <= .4 ? finishSpec : null);
  const innerMat = mat({map: innerTex.map, normalMap: innerTex.normalMap, roughness: innerTex.roughness, color: '#ffffff'});
  const joineryCol = finishColour(finishSpec);
  const joinery = mat({color: new THREE.Color(`rgb(${joineryCol.map(v => Math.round(v * .96)).join(',')})`), roughness: .62});
  const sprucePlain = tex.timber('tg', null);
  const boardsMat = mat({map: sprucePlain.map, normalMap: sprucePlain.normalMap, roughness: .78, color: '#f4efe6'});
  const beamMat = mat({color: '#6b5a44', roughness: .9});
  const glass = mat({color: '#9fb4bf', roughness: .05, metalness: .1, transparent: true, opacity: .32, envMapIntensity: 1.4, depthWrite: false}, 'glass');
  const steel = mat({color: '#3a3c3f', roughness: .35, metalness: .7});
  const lights = [];

  // ---- Base: paving pad and foundation beams ------------------------------------------------
  const pad = tex.paving();
  const padMat = mat({map: pad.map, normalMap: pad.normalMap, roughness: pad.roughness, color: '#ffffff'});
  const can = e.canopy;
  const bx0 = e.x0 - .35, bx1 = e.x1 + .35;
  group.add(mesh(worldBox(bx1 - bx0, .04, D + .7 + .6, (bx0 + bx1) / 2, .02, .3), padMat, ['base', 'ground'], {cast: false}));
  const beamH = y0 - .04;
  const beam = (x0, x1, z0, z1) => group.add(mesh(worldBox(x1 - x0, beamH - EPS, z1 - z0, (x0 + x1) / 2, .04 + (beamH - EPS) / 2, (z0 + z1) / 2), beamMat, ['foundation'], {solid: true}));
  const bw = .07;
  beam(-W / 2 + .01, W / 2 - .01, D / 2 - .01 - bw, D / 2 - .01);
  beam(-W / 2 + .01, W / 2 - .01, -D / 2 + .01, -D / 2 + .01 + bw);
  for (let x = -W / 2 + .01; x < W / 2; x += Math.min(.6, W / 2)) {
    const xx = Math.min(x, W / 2 - .01 - bw);
    beam(xx, xx + bw, -D / 2 + .02 + bw, D / 2 - .02 - bw);
  }

  // ---- Walls --------------------------------------------------------------------------------
  // Each wall is cut into rectangles around its openings. `along` maps the wall's own axis.
  const post = GEOMETRY[d.range].post || 0;
  const wallTop = y0 + h.wall;
  const walls = {
    front: {axis: 'x', len: W, at: D / 2 - t / 2, sign: 1, u0: -W / 2, u1: W / 2},
    back: {axis: 'x', len: W, at: -D / 2 + t / 2, sign: -1, u0: -W / 2, u1: W / 2},
    left: {axis: 'z', len: D, at: -W / 2 + t / 2, sign: -1, u0: -D / 2, u1: D / 2},
    right: {axis: 'z', len: D, at: W / 2 - t / 2, sign: 1, u0: -D / 2, u1: D / 2}
  };
  // Wall faces stop at the corner posts (Prima, Pro) or, for logs, side walls stop inside the
  // front and back walls so no two faces meet in one plane.
  for (const [name, w] of Object.entries(walls)) {
    let a = w.u0, b = w.u1;
    if (post) { a += post - .002; b -= post - .002; }
    else if (w.axis === 'z') { a += t; b -= t; }
    w.a = a; w.b = b;
  }
  // The inset of a Prima or Pro wall inside its posts: boards sit 10mm back from the post face.
  const inset = post ? .01 : 0;
  // A wall's visual u (outside, left to right) runs opposite to world x/z on back and left.
  const toU = (name, coord) => (name === 'back' || name === 'right') ? -coord : coord;

  function wallPieces(name, w, yTop, gable) {
    const rects = openingRects(d, name).map(r => ({...r, a: toU(name, r.u1) , b: toU(name, r.u0)})).map(r => ({...r, a: Math.min(r.a, r.b), b: Math.max(r.a, r.b)}));
    // Split the wall along its axis at every opening edge, then up the height around them.
    const cuts = [w.a, w.b, ...rects.flatMap(r => [r.a - .045, r.b + .045])].filter(c => c >= w.a && c <= w.b).sort((p, q) => p - q);
    const pieces = [];
    for (let i = 0; i < cuts.length - 1; i++) {
      const c0 = cuts[i], c1 = cuts[i + 1];
      if (c1 - c0 < .002) continue;
      const mid = (c0 + c1) / 2;
      const holes = rects.filter(r => mid > r.a - .045 && mid < r.b + .045).map(r => [r.y0 - .045, r.y1 + .045]).sort((p, q) => p[0] - q[0]);
      let y = y0;
      for (const [hy0, hy1] of holes) { if (hy0 > y + .002) pieces.push([c0, c1, y, hy0]); y = Math.max(y, hy1); }
      if (yTop > y + .002) pieces.push([c0, c1, y, yTop]);
    }
    const thick = t - inset * 0;
    for (const [c0, c1, ya, yb] of pieces) {
      const len = c1 - c0, cm = (c0 + c1) / 2, hy = yb - ya, cy = (ya + yb) / 2;
      const g = w.axis === 'x' ? worldBox(len, hy, thick, cm, cy, w.at - w.sign * inset) : worldBox(thick, hy, len, w.at - w.sign * inset, cy, cm);
      const m = mesh(g, [wallMat, wallMat, wallMat, wallMat, wallMat, wallMat].map((x, i) => x), ['walls', `wall:${name}`], {solid: true});
      // Inner face gets the inside material: box faces are +x,-x,+y,-y,+z,-z.
      const inner = w.axis === 'x' ? (w.sign > 0 ? 5 : 4) : (w.sign > 0 ? 1 : 0);
      m.material = m.material.map((x, i) => i === inner ? innerMat : wallMat);
      group.add(m);
    }
    // Lintels and reveals: a planed timber lining in each opening, so the cut logs never show.
    for (const r of rects) {
      const lin = (u0, u1, ya, yb, depthFrac = 1) => {
        const g = w.axis === 'x' ? worldBox(u1 - u0, yb - ya, t * depthFrac, (u0 + u1) / 2, (ya + yb) / 2, w.at - w.sign * inset) : worldBox(t * depthFrac, yb - ya, u1 - u0, w.at - w.sign * inset, (ya + yb) / 2, (u0 + u1) / 2);
        group.add(mesh(g, joinery, ['walls', `wall:${name}`, 'reveal'], {solid: true}));
      };
      lin(r.a - .045, r.a - .002, r.y0 - .045, r.y1 + .045);
      lin(r.b + .002, r.b + .045, r.y0 - .045, r.y1 + .045);
      lin(r.a - .002, r.b + .002, r.y1 + .002, r.y1 + .045);
      if (r.p.kind !== 'door') lin(r.a - .002, r.b + .002, r.y0 - .045, r.y0 - .002);
    }
    if (gable) group.add(gable);
  }

  // Gable infill above the wall plate: the triangle of an apex gable, or the sloping top of a
  // pent roof's side walls (and the extra height of its front wall), in the wall's own timber.
  const gableWalls = d.roof === 'apex' ? (e.ridgeAlongX ? ['left', 'right'] : ['front', 'back']) : d.roof === 'pent' ? ['left', 'right', 'front'] : [];
  const pentRise = d.roof === 'pent' ? pentRiseOf(d) : 0;
  for (const [name, w] of Object.entries(walls)) {
    let gable = null;
    if (gableWalls.includes(name)) {
      // Outline in (along-wall world coordinate, height above the wall plate).
      let pts;
      if (d.roof === 'apex') {
        const half = (w.u1 - w.u0) / 2, rise = (half + .1) * Math.tan(h.slope * Math.PI / 180);
        const at = c => Math.max(0, rise * (1 - Math.abs(c) / (half + .1)));
        pts = [[w.a, 0], [w.b, 0], [w.b, at(w.b)], [0, rise], [w.a, at(w.a)]];
      } else if (name === 'front') pts = [[w.a, 0], [w.b, 0], [w.b, pentRise], [w.a, pentRise]];
      else {
        // Side walls: z runs from back (low) to front (high).
        const at = z => pentRise * (z - (-D / 2)) / D;
        pts = [[w.a, 0], [w.b, 0], [w.b, at(w.b)], [w.a, at(w.a)]];
      }
      gable = mesh(extrudeOnWall(pts, w, wallTop, t, inset), wallMat, ['walls', `wall:${name}`, 'gable'], {solid: true});
    }
    wallPieces(name, w, wallTop, gable);
  }

  // ---- Corners --------------------------------------------------------------------------
  if (d.range === 'log') {
    // Windmill joint: on even courses the front and back logs run past the corner, on odd
    // courses the side logs do. Straight cut ends, or diamond cut (an option).
    const g = GEOMETRY.log, ext = g.ext, course = g.course, n = Math.round(h.wall / course);
    const endTex = tex.endGrain(finishSpec);
    const endMat = mat({map: endTex.map, roughness: .9, color: '#ffffff'});
    const pieces = [];
    // Front and back logs sit on whole courses, side logs half a course higher (the notch), so
    // both stacks of log ends are continuous, as on Coastal's York cabin.
    const nFront = d.roof === 'pent' ? Math.floor((h.wall + pentRiseOf(d)) / course) : n;
    for (let i = 0; i < nFront; i++) {
      const ya = y0 + i * course + .002, yb = y0 + (i + 1) * course - .002;
      const sa = Math.max(y0 + .002, y0 + (i - .5) * course + .002), sb = Math.min(wallTop - .002, y0 + (i + .5) * course - .002);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
        // Pent: the back corners stop at the low wall, the front ones climb with the front.
        if (i >= n && sz < 0) continue;
        pieces.push({g: worldBox(ext, yb - ya, t - .004, sx * (W / 2 + ext / 2), (ya + yb) / 2, sz * (D / 2 - t / 2)), sx, sz, along: 'x'});
        if (i < n && sb > sa + .01) pieces.push({g: worldBox(t - .004, sb - sa, ext, sx * (W / 2 - t / 2), (sa + sb) / 2, sz * (D / 2 + ext / 2)), sx, sz, along: 'z'});
      }
    }
    // The top half course of the side walls.
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const sa = y0 + (n - .5) * course + .002, sb = wallTop - .002;
      if (sb > sa + .01) pieces.push({g: worldBox(t - .004, sb - sa, ext, sx * (W / 2 - t / 2), (sa + sb) / 2, sz * (D / 2 + ext / 2)), sx, sz, along: 'z'});
    }
    for (const p of pieces) {
      const m = mesh(p.g, [wallMat, wallMat, wallMat, wallMat, wallMat, wallMat], ['corners', 'walls'], {solid: true});
      // End grain on the cut face.
      const endFace = p.along === 'x' ? (p.sx > 0 ? 0 : 1) : (p.sz > 0 ? 4 : 5);
      m.material = m.material.map((x, i) => i === endFace ? endMat : x);
      group.add(m);
      if (d.extras?.diamond) {
        // Diamond cut: a pointed nose on each end.
        const nose = .05, half = (t - .004) / 2;
        const tip = new THREE.BufferGeometry();
        const bb = new THREE.Box3().setFromBufferAttribute(p.g.attributes.position);
        const c = bb.getCenter(new THREE.Vector3());
        const v = [];
        if (p.along === 'x') {
          const x = p.sx > 0 ? bb.max.x : bb.min.x, xt = x + p.sx * nose;
          const quad = (a, b, cc, dd) => v.push(...a, ...b, ...cc, ...a, ...cc, ...dd);
          quad([x, bb.min.y, c.z - half], [xt, bb.min.y, c.z], [xt, bb.max.y, c.z], [x, bb.max.y, c.z - half]);
          quad([xt, bb.min.y, c.z], [x, bb.min.y, c.z + half], [x, bb.max.y, c.z + half], [xt, bb.max.y, c.z]);
          v.push(x, bb.max.y, c.z - half, xt, bb.max.y, c.z, x, bb.max.y, c.z + half);
        } else {
          const z = p.sz > 0 ? bb.max.z : bb.min.z, zt = z + p.sz * nose;
          const quad = (a, b, cc, dd) => v.push(...a, ...b, ...cc, ...a, ...cc, ...dd);
          quad([c.x - half, bb.min.y, z], [c.x, bb.min.y, zt], [c.x, bb.max.y, zt], [c.x - half, bb.max.y, z]);
          quad([c.x, bb.min.y, zt], [c.x + half, bb.min.y, z], [c.x + half, bb.max.y, z], [c.x, bb.max.y, zt]);
          v.push(c.x - half, bb.max.y, z, c.x, bb.max.y, zt, c.x + half, bb.max.y, z);
        }
        tip.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
        tip.computeVertexNormals();
        const tm = new THREE.Mesh(tip, endMat); tm.castShadow = true; tm.userData.tags = ['corners', 'walls', 'diamond'];
        endMat.side = THREE.DoubleSide;
        group.add(tm);
      }
    }
  } else {
    // Prima: slim corner posts; Pro: 14 x 14cm posts at the corners and between long walls.
    const postTex = tex.timber('post', finishSpec);
    const postMat = mat({map: postTex.map, normalMap: postTex.normalMap, roughness: postTex.roughness, color: '#ffffff'});
    const corner = (x, z) => group.add(mesh(worldBox(post, h.wall - .004, post, x, y0 + h.wall / 2, z), postMat, ['posts', 'walls'], {solid: true}));
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) corner(sx * (W / 2 - post / 2), sz * (D / 2 - post / 2));
    if (d.range === 'pro') {
      for (const x of postsAlong(W)) for (const sz of [-1, 1]) {
        if ((d.openings || []).some(o => (o.wall === (sz > 0 ? 'front' : 'back')) && Math.abs(toU(o.wall, x) - o.at) < PRODUCTS[o.code].w / 2000 + .1)) continue;
        group.add(mesh(worldBox(post, h.wall - .004, post + .002, x, y0 + h.wall / 2, sz * (D / 2 - post / 2)), postMat, ['posts', 'walls'], {solid: true}));
      }
      for (const z of postsAlong(D)) for (const sx of [-1, 1]) {
        if ((d.openings || []).some(o => (o.wall === (sx > 0 ? 'right' : 'left')) && Math.abs(toU(o.wall, z) - o.at) < PRODUCTS[o.code].w / 2000 + .1)) continue;
        group.add(mesh(worldBox(post + .002, h.wall - .004, post, sx * (W / 2 - post / 2), y0 + h.wall / 2, z), postMat, ['posts', 'walls'], {solid: true}));
      }
    }
  }

  // ---- Floor and ceiling --------------------------------------------------------------------
  const innerW = W - 2 * Math.max(t, post) - .004, innerD = D - 2 * Math.max(t, post) - .004;
  if (d.extras?.floor) {
    const fl = tex.floor(null);
    const floorMat = mat({map: fl.map, normalMap: fl.normalMap, roughness: fl.roughness, color: '#ffffff'});
    group.add(mesh(worldBox(innerW, .019, innerD, 0, y0 + .0095 + .002, 0), floorMat, ['floor'], {cast: false, solid: true}));
    // Skirting boards round the room.
    const sk = (w2, d2, x, z) => group.add(mesh(worldBox(w2, .07, d2, x, y0 + .021 + .035, z), joinery, ['floor'], {solid: true}));
    sk(innerW - .004, .012, 0, innerD / 2 - .006); sk(innerW - .004, .012, 0, -innerD / 2 + .006);
    sk(.012, innerD - .03, innerW / 2 - .006, 0); sk(.012, innerD - .03, -innerW / 2 + .006, 0);
    if (d.extras?.floorIns) {
      const ins = mat({color: '#e9e2b0', roughness: .9});
      group.add(mesh(worldBox(innerW - .02, .03, innerD - .02, 0, y0 - .016, 0), ins, ['floor', 'insulation:floor'], {solid: true}));
    }
  }
  if (d.extras?.wallIns) {
    // An inner skin of boards 40mm inside every wall, the visible sign of insulated double walls.
    const ins = mat({map: sprucePlain.map, normalMap: sprucePlain.normalMap, roughness: .78, color: '#efe6d6'});
    const gap = .05, iy = y0 + (h.wall - .03) / 2 + .02, ih = h.wall - .06;
    const iw = innerW - 2 * gap - .03, id = innerD - 2 * gap - .03;
    group.add(mesh(worldBox(iw, ih, .019, 0, iy, innerD / 2 - gap), ins, ['insulation:walls', 'walls'], {solid: true}));
    group.add(mesh(worldBox(iw, ih, .019, 0, iy, -innerD / 2 + gap), ins, ['insulation:walls', 'walls'], {solid: true}));
    group.add(mesh(worldBox(.019, ih, id, innerW / 2 - gap, iy, 0), ins, ['insulation:walls', 'walls'], {solid: true}));
    group.add(mesh(worldBox(.019, ih, id, -innerW / 2 + gap, iy, 0), ins, ['insulation:walls', 'walls'], {solid: true}));
    // The inner skin has openings too: cut it by hiding it behind each door and window.
    for (const r of ['front', 'back', 'left', 'right'].flatMap(n => openingRects(d, n).map(x => ({...x, wall: n})))) {
      // Simple and honest: a reveal lining across the gap round each opening.
      const wdir = walls[r.wall];
      const u0 = Math.min(toU(r.wall, r.u0), toU(r.wall, r.u1)), u1 = Math.max(toU(r.wall, r.u0), toU(r.wall, r.u1));
      const at = wdir.at - wdir.sign * (t / 2 + gap / 2 + .012);
      const box = (a, b, ya, yb) => group.add(mesh(wdir.axis === 'x' ? worldBox(b - a, yb - ya, gap - .004, (a + b) / 2, (ya + yb) / 2, at) : worldBox(gap - .004, yb - ya, b - a, at, (ya + yb) / 2, (a + b) / 2), joinery, ['insulation:walls', 'reveal']));
      box(u0 - .01, u0, r.y0, r.y1); box(u1, u1 + .01, r.y0, r.y1);
    }
  }

  // ---- Roof ---------------------------------------------------------------------------------
  buildRoof(d, e, h, {group, mat, tex, wallMat, boardsMat, finishSpec, joinery, lights});

  // ---- Canopy posts --------------------------------------------------------------------------
  if (can.side !== 'none') {
    const ps = d.range === 'pro' ? .14 : .12, cx = can.side === 'left' ? e.x0 + ps / 2 + .02 : e.x1 - ps / 2 - .02;
    for (const z of [D / 2 - ps / 2 - .02, -D / 2 + ps / 2 + .02]) {
      group.add(mesh(worldBox(ps, h.wall + (d.roof === 'flat' ? 0 : 0) - .004, ps, cx, y0 + (h.wall - .004) / 2, z), wallMat, ['canopy', 'posts'], {solid: true}));
      // Adjustable metal feet, as Lugarde supplies with canopy posts.
      group.add(mesh(worldBox(ps * .6, y0 - .045, ps * .6, cx, .04 + (y0 - .045) / 2, z), steel, ['canopy', 'posts']));
    }
    // A head beam between the canopy posts carries the roof edge.
    group.add(mesh(worldBox(ps, .14, D - .04, cx, y0 + h.wall - .07 - .002, 0), wallMat, ['canopy', 'posts'], {solid: true}));
  }

  // ---- Doors and windows ---------------------------------------------------------------------
  for (const name of ['front', 'back', 'left', 'right']) {
    for (const r of openingRects(d, name)) {
      const unit = buildOpening(r.p, {joinery, glass, steel, materials, mat});
      const w = walls[name], outward = w.sign;
      unit.userData.tags = ['openings', `opening:${r.o.id}`, `wall:${name}`];
      unit.traverse(o => { if (o.isMesh) o.userData.tags = ['openings', `opening:${r.o.id}`, r.p.kind === 'door' ? 'door' : 'window', ...(o.userData.part ? [o.userData.part] : [])]; });
      // Frames sit 8mm proud of the wall face.
      const face = w.at + outward * (t / 2 - inset + .004);
      const u = (r.u0 + r.u1) / 2;
      if (w.axis === 'x') {
        unit.position.set(name === 'back' ? -u : u, r.y0, face);
        if (name === 'back') unit.rotation.y = Math.PI;
      } else {
        unit.position.set(face, r.y0, name === 'right' ? -u : u);
        unit.rotation.y = name === 'right' ? Math.PI / 2 : -Math.PI / 2;
      }
      group.add(unit);
    }
  }

  // ---- Lighting and extras that show ---------------------------------------------------------
  if (d.extras?.wallLights) {
    // Two LED wall lights either side of the main door.
    const door = (d.openings || []).find(o => o.wall === 'front' && PRODUCTS[o.code]?.kind === 'door');
    const dx = door ? door.at : 0, half = door ? PRODUCTS[door.code].w / 2000 + .22 : .6;
    for (const s of [-1, 1]) {
      const x = THREE.MathUtils.clamp(dx + s * half, -W / 2 + .2, W / 2 - .2);
      const lamp = mesh(worldBox(.08, .16, .07, x, y0 + 1.95, D / 2 + .04), mat({color: '#2b2b2b', roughness: .4, metalness: .5, emissive: '#ffd59a', emissiveIntensity: .35}), ['lighting', 'lamp', 'wallLights']);
      group.add(lamp);
      lights.push({kind: 'down', position: new THREE.Vector3(x, y0 + 1.92, D / 2 + .12)});
    }
  }
  if (d.extras?.spots) {
    const m = mat({color: '#f8f4ea', emissive: '#fff1d6', emissiveIntensity: .35, roughness: .3});
    for (let i = 0; i < 6; i++) {
      const x = (i % 3 - 1) * innerW / 3.2, z = (Math.floor(i / 3) - .5) * innerD / 2.4;
      const s = new THREE.Mesh(new THREE.CylinderGeometry(.04, .04, .012, 16), m);
      s.position.set(x, wallTop - .02, z); s.userData.tags = ['lighting', 'lamp', 'spots'];
      group.add(s);
      if (i < 4) lights.push({kind: 'interior', position: new THREE.Vector3(x, wallTop - .1, z)});
    }
  }
  if (d.extras?.vents) {
    for (const sx of [-1, 1]) group.add(mesh(worldBox(.004, .1, .25, sx * (W / 2 + .003), wallTop - .25, 0), mat({color: '#2a2a2a', roughness: .6}), ['vents', 'walls']));
  }
  if (d.extras?.anchors) {
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) group.add(mesh(worldBox(.03, .5, .006, sx * (W / 2 - .3), y0 + .25, sz * (D / 2 + .005)), steel, ['anchors', 'walls']));
  }
  if (d.extras?.weather) {
    // Brush strips: a dark seal line along the foot of every door.
    for (const r of ['front', 'back', 'left', 'right'].flatMap(n => openingRects(d, n).filter(x => x.p.kind === 'door').map(x => ({...x, n})))) {
      const w = walls[r.n], face = w.at + w.sign * (t / 2 + .03), u = (r.u0 + r.u1) / 2, len = r.u1 - r.u0;
      group.add(mesh(w.axis === 'x' ? worldBox(len, .02, .012, r.n === 'back' ? -u : u, r.y0 + .012, face) : worldBox(.012, .02, len, face, r.y0 + .012, r.n === 'right' ? -u : u), mat({color: '#1a1a1a', roughness: .9}), ['weather', 'openings']));
    }
  }

  return {group, materials, lights, envelope: e};
}


/** Extrudes an outline drawn in (along-wall coordinate, height) through the wall's thickness. */
function extrudeOnWall(pts, w, base, t, inset) {
  const shape = new THREE.Shape(pts.map(([u, y]) => new THREE.Vector2(u, y)));
  const g = new THREE.ExtrudeGeometry(shape, {depth: t, bevelEnabled: false});
  const pos = g.attributes.position, uv = g.attributes.uv;
  const at = w.at - w.sign * inset - t / 2;
  for (let i = 0; i < pos.count; i++) {
    const u = pos.getX(i), y = pos.getY(i) + base, k = pos.getZ(i);
    if (w.axis === 'x') pos.setXYZ(i, u, y, at + k); else pos.setXYZ(i, at + k, y, u);
    uv.setXY(i, u, y);
  }
  // Swapping x and z mirrors the shape: turn the triangles back the right way round.
  if (w.axis === 'z') {
    const idx = g.index;
    if (idx) for (let i = 0; i < idx.count; i += 3) { const a = idx.getX(i + 1); idx.setX(i + 1, idx.getX(i + 2)); idx.setX(i + 2, a); }
    else for (let i = 0; i < pos.count; i += 3) {
      const ax = pos.getX(i + 1), ay = pos.getY(i + 1), az = pos.getZ(i + 1), au = uv.getX(i + 1), av = uv.getY(i + 1);
      pos.setXYZ(i + 1, pos.getX(i + 2), pos.getY(i + 2), pos.getZ(i + 2)); uv.setXY(i + 1, uv.getX(i + 2), uv.getY(i + 2));
      pos.setXYZ(i + 2, ax, ay, az); uv.setXY(i + 2, au, av);
    }
  }
  g.computeVertexNormals();
  return g;
}

// ---------------------------------------------------------------------------------------------
function buildRoof(d, e, h, {group, mat, tex, wallMat, boardsMat, finishSpec, joinery, lights}) {
  const W = d.width, D = d.depth, wallTop = e.y0 + h.wall, over = h.over;
  const x0 = e.x0 - over, x1 = e.x1 + over, z0 = -D / 2 - over, z1 = D / 2 + over;
  const trim = TRIMS[d.trim] || TRIMS.silver;
  const trimMat = mat({color: trim.hex, roughness: .35, metalness: .75});
  const ceilingMat = boardsMat;
  if (d.roof === 'flat' || d.roof === 'pent') {
    // Fascia band: timber boards on the front and sides, aluminium trim capping the edge.
    const flat = d.roof === 'flat';
    const tilt = Math.tan(5.2 * Math.PI / 180);
    const frontTop = flat ? e.y0 + h.top : wallTop + .28 + pentRiseOf(d) + over * tilt;
    const backTop = flat ? frontTop - .06 : wallTop + .28 - over * tilt;
    const fall = frontTop - backTop;
    const band = .2;
    const epdm = tex.roof('epdm', '#2b2d2f');
    const roofMat = mat({map: epdm.map, normalMap: epdm.normalMap, roughness: .86, color: '#ffffff'});
    // The deck: a sloping slab from front to back, inside the fascia.
    const deck = new THREE.BoxGeometry(x1 - x0 - .05, .08, z1 - z0 - .05);
    const pos = deck.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const z = pos.getZ(i), k = (z + (z1 - z0) / 2) / (z1 - z0);
      pos.setY(i, pos.getY(i) + backTop - .045 + (frontTop - backTop) * k);
    }
    deck.translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
    deck.computeVertexNormals();
    const duv = deck.attributes.uv; for (let i = 0; i < pos.count; i++) duv.setXY(i, pos.getX(i), pos.getZ(i));
    group.add(mesh(deck, [roofMat, roofMat, roofMat, ceilingMat, roofMat, roofMat], ['roof'], {solid: true}));
    // Fascia boards: front full height, sides tapering with the fall, back shallow.
    const fasciaFinish = wallMat;
    const fd = .025;
    const fz = (z, top, depth) => group.add(mesh(worldBox(x1 - x0 + 2 * fd, depth, fd, (x0 + x1) / 2, top - depth / 2, z), fasciaFinish, ['roof', 'fascia'], {solid: true}));
    fz(z1 + fd / 2, frontTop + .01, band + .07);
    fz(z0 - fd / 2, backTop + .01, Math.max(.12, band - .04));
    for (const sx of [-1, 1]) {
      const side = new THREE.BufferGeometry();
      const x = sx > 0 ? x1 + fd / 2 : x0 - fd / 2, a = x - fd / 2, b = x + fd / 2;
      const yTf = frontTop + .01, yTb = backTop + .01, yBf = yTf - band - .07, yBb = yTb - Math.max(.12, band - .04);
      const v = [], uvs = [];
      const quad = (p1, p2, p3, p4) => { v.push(...p1, ...p2, ...p3, ...p1, ...p3, ...p4); uvs.push(p1[2], p1[1], p2[2], p2[1], p3[2], p3[1], p1[2], p1[1], p3[2], p3[1], p4[2], p4[1]); };
      // Outer and inner faces, top and bottom edges (a thin tapering board).
      quad([b, yBb, z0], [b, yBf, z1], [b, yTf, z1], [b, yTb, z0]);
      quad([a, yBf, z1], [a, yBb, z0], [a, yTb, z0], [a, yTf, z1]);
      quad([a, yTb, z0], [b, yTb, z0], [b, yTf, z1], [a, yTf, z1]);
      quad([a, yBf, z1], [b, yBf, z1], [b, yBb, z0], [a, yBb, z0]);
      side.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
      side.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      if (sx < 0) { const p = side.attributes.position; for (let i = 0; i < p.count; i += 3) { const ax = p.getX(i + 1), ay = p.getY(i + 1), az = p.getZ(i + 1); p.setXYZ(i + 1, p.getX(i + 2), p.getY(i + 2), p.getZ(i + 2)); p.setXYZ(i + 2, ax, ay, az); } }
      side.computeVertexNormals();
      group.add(mesh(side, fasciaFinish, ['roof', 'fascia'], {solid: true}));
    }
    // Aluminium edge trim along the top of the fascia, front, sides and back.
    const tr = (w2, d2, x, y, z) => group.add(mesh(worldBox(w2, .03, d2, x, y, z), trimMat, ['roof', 'trim']));
    tr(x1 - x0 + 2 * fd + .03, .045, (x0 + x1) / 2, frontTop + .025, z1 + fd / 2);
    tr(x1 - x0 + 2 * fd + .03, .045, (x0 + x1) / 2, backTop + .025, z0 - fd / 2);
    for (const sx of [-1, 1]) {
      const g = new THREE.BoxGeometry(.045, .03, z1 - z0 - .05);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const k = (p.getZ(i) + (z1 - z0 - .05) / 2) / (z1 - z0 - .05); p.setY(i, p.getY(i) + backTop + .025 + (frontTop - backTop) * k); }
      g.translate(sx > 0 ? x1 + fd / 2 : x0 - fd / 2, 0, (z0 + z1) / 2);
      g.computeVertexNormals();
      group.add(mesh(g, trimMat, ['roof', 'trim']));
    }
    // Rafter ends and the ceiling inside: exposed roof boards on joists, as Lugarde builds.
    const joist = joinery;
    for (let x = -W / 2 + .4; x < W / 2 - .2; x += .6) {
      const g = new THREE.BoxGeometry(.044, .12, D - 2 * e.t - .01);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const k = (p.getZ(i) + D / 2) / D; p.setY(i, p.getY(i) + backTop - .16 + (frontTop - backTop) * k); }
      g.translate(x, 0, 0); g.computeVertexNormals();
      group.add(mesh(g, joist, ['roof', 'ceiling', 'timbers']));
    }
    if (d.extras?.roofIns) {
      const ins = mat({color: '#d9d2a8', roughness: .9});
      const g = new THREE.BoxGeometry(W - 2 * e.t - .02, .04, D - 2 * e.t - .02);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const k = (p.getZ(i) + D / 2) / D; p.setY(i, p.getY(i) + backTop - .25 + (frontTop - backTop) * k); }
      g.computeVertexNormals();
      group.add(mesh(g, ins, ['roof', 'ceiling', 'insulation:roof']));
    }
    if (d.extras?.gutters) gutters(group, mat, [[x0, x1, z0 - .07, backTop - .05, 'x']]);
    if (d.extras?.skylight && d.roof === 'pent') skylight(group, mat, (x0 + x1) / 2, (z0 + z1) / 2, (frontTop + backTop) / 2 + .03, Math.atan2(fall, z1 - z0));
    return;
  }

  // Pitched roofs: apex (ridge along the longer side) and pyramid.
  const sh = SHINGLES[d.shingles] || SHINGLES.black;
  const sTex = tex.roof('shingles', sh.hex);
  const shMat = mat({map: sTex.map, normalMap: sTex.normalMap, roughness: .94, color: '#ffffff'});
  const slope = h.slope * Math.PI / 180, thick = .06;
  const bargeMat = wallMat;
  if (d.roof === 'apex') {
    const alongX = e.ridgeAlongX;
    // Work in a frame where the ridge runs along X; rotate at the end if it runs along Z.
    const L0 = alongX ? x0 : z0, L1 = alongX ? x1 : z1;
    const halfSpan = (alongX ? D : W) / 2;
    const run = halfSpan + over, rise = (halfSpan + .1) * Math.tan(slope);
    const ridgeY = wallTop + rise + .06;
    const roof = new THREE.Group();
    for (const s of [-1, 1]) {
      // One slope: a slab from the ridge down past the wall by the overhang.
      const len = run / Math.cos(slope);
      const g = new THREE.BoxGeometry(L1 - L0, thick, len);
      const uv = g.attributes.uv, p = g.attributes.position;
      for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i), p.getZ(i));
      const m = new THREE.Mesh(g, [shMat, shMat, shMat, ceilingMat, shMat, shMat]);
      m.rotation.x = s * slope;
      m.position.set((L0 + L1) / 2, ridgeY - Math.sin(slope) * len / 2 - thick / 2, s * Math.cos(slope) * len / 2);
      m.castShadow = m.receiveShadow = true; m.userData.tags = ['roof', 'shingles']; m.userData.solid = true;
      roof.add(m);
      // Barge boards along the gable edges and a fascia along the eaves.
      for (const end of [L0 - .015, L1 + .015]) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(.025, .18, len + .02), bargeMat);
        b.rotation.x = s * slope; b.position.set(end, ridgeY - Math.sin(slope) * len / 2 - .08, s * Math.cos(slope) * len / 2);
        b.castShadow = true; b.userData.tags = ['roof', 'fascia']; roof.add(b);
      }
      const eaveZ = s * run, eaveY = ridgeY - rise * run / halfSpan - .1;
      const f = new THREE.Mesh(new THREE.BoxGeometry(L1 - L0 + .05, .16, .022), bargeMat);
      f.position.set((L0 + L1) / 2, eaveY - .02, eaveZ + s * .005); f.rotation.x = s * slope * .15;
      f.userData.tags = ['roof', 'fascia']; roof.add(f);
      if (d.extras?.gutters) {
        const gt = new THREE.Mesh(new THREE.CylinderGeometry(.055, .055, L1 - L0, 12, 1, true, 0, Math.PI), mat({color: '#9aa0a3', roughness: .35, metalness: .7, side: THREE.DoubleSide}));
        gt.rotation.z = Math.PI / 2; gt.rotation.x = Math.PI / 2 * (s > 0 ? 1 : -1) + Math.PI / 2;
        gt.position.set((L0 + L1) / 2, eaveY - .08, eaveZ + s * .07);
        gt.userData.tags = ['roof', 'gutters']; roof.add(gt);
      }
    }
    // Ridge cap.
    const cap = new THREE.Mesh(new THREE.BoxGeometry(L1 - L0 + .02, .05, .16), shMat);
    cap.position.set((L0 + L1) / 2, ridgeY + .005, 0); cap.userData.tags = ['roof', 'shingles']; roof.add(cap);
    if (d.extras?.skylight) {
      const sk = new THREE.Group();
      skylight(sk, mat, 0, 0, 0, 0);
      sk.rotation.x = slope; sk.position.set((L0 + L1) / 2, ridgeY - rise * .45, -run * .45);
      roof.add(sk);
    }
    if (!alongX) roof.rotation.y = Math.PI / 2;
    roof.traverse(o => { if (o.isMesh && !o.userData.tags) o.userData.tags = ['roof']; });
    group.add(roof);
    return;
  }
  if (d.roof === 'pyramid') {
    const hx = W / 2 + over, hz = D / 2 + over, rise = (Math.min(W, D) / 2 + .05) * Math.tan(slope);
    const top = wallTop + rise + .06, eaveY = wallTop - over * Math.tan(slope) + .06;
    const ridgeHalf = Math.max(0, (W - D) / 2);
    const v = [], uv = [];
    const tri = (a, b, c) => { v.push(...a, ...b, ...c); uv.push(a[0] + a[2], a[1] * 1.6, b[0] + b[2], b[1] * 1.6, c[0] + c[2], c[1] * 1.6); };
    const A = [-hx, eaveY, hz], B = [hx, eaveY, hz], C = [hx, eaveY, -hz], Dd = [-hx, eaveY, -hz];
    const R1 = [-ridgeHalf, top, 0], R2 = [ridgeHalf, top, 0];
    tri(A, B, R2); tri(A, R2, R1); tri(C, Dd, R1); tri(C, R1, R2); tri(B, C, R2); tri(Dd, A, R1);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    const m = mesh(g, shMat, ['roof', 'shingles']);
    group.add(m);
    // Underside boards and a fascia band all round.
    const under = g.clone(); under.translate(0, -.03, 0);
    const ui = under.index; const up = under.attributes.position;
    for (let i = 0; i < up.count; i += 3) { const ax = up.getX(i + 1), ay = up.getY(i + 1), az = up.getZ(i + 1); up.setXYZ(i + 1, up.getX(i + 2), up.getY(i + 2), up.getZ(i + 2)); up.setXYZ(i + 2, ax, ay, az); }
    under.computeVertexNormals();
    group.add(mesh(under, ceilingMat, ['roof', 'ceiling']));
    const fb = (w2, d2, x, z) => group.add(mesh(worldBox(w2, .14, d2, x, eaveY - .07 - .005, z), bargeMat, ['roof', 'fascia']));
    fb(2 * hx + .05, .022, 0, hz + .012); fb(2 * hx + .05, .022, 0, -hz - .012); fb(.022, 2 * hz, hx + .012, 0); fb(.022, 2 * hz, -hx - .012, 0);
    if (d.extras?.gutters) gutters(group, mat, [[-hx, hx, hz + .07, eaveY - .1, 'x'], [-hx, hx, -hz - .07, eaveY - .1, 'x']]);
    if (d.extras?.skylight) skylight(group, mat, 0, hz * .45, eaveY + (top - eaveY) * .45 + .03, -slope);
  }
}

function gutters(group, mat, runs) {
  const zinc = mat({color: '#9aa0a3', roughness: .35, metalness: .7, side: THREE.DoubleSide});
  for (const [a, b, z, y] of runs) {
    const g = new THREE.CylinderGeometry(.055, .055, b - a, 12, 1, true, 0, Math.PI);
    const m = new THREE.Mesh(g, zinc);
    m.rotation.z = Math.PI / 2; m.rotation.x = Math.PI;
    m.position.set((a + b) / 2, y, z);
    m.userData.tags = ['roof', 'gutters']; m.castShadow = true;
    group.add(m);
    const dp = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, y - .05, 10), zinc);
    dp.position.set(b - .1, (y - .05) / 2 + .04, z);
    dp.userData.tags = ['roof', 'gutters']; group.add(dp);
  }
}
function skylight(group, mat, x, z, y, tilt) {
  const g = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(.56, .06, 1.56), mat({color: '#3b3d40', roughness: .4, metalness: .5}));
  const pane = new THREE.Mesh(new THREE.BoxGeometry(.46, .01, 1.46), mat({color: '#8fb0c2', roughness: .05, metalness: .2, transparent: true, opacity: .55}, 'glass'));
  pane.position.y = .032;
  g.add(frame, pane);
  g.rotation.x = tilt; g.position.set(x, y, z);
  g.traverse(o => { if (o.isMesh) o.userData.tags = ['roof', 'skylight']; });
  group.add(g);
}

// ---------------------------------------------------------------------------------------------
/**
 * A door or window from its Lugarde code: outer frame, leaves with stiles and rails, glass,
 * glazing bars and the boarded bottom of a door. Built at the origin, bottom centre, facing +z.
 */
export function buildOpening(p, {joinery, glass, steel}) {
  const g = new THREE.Group();
  const W = p.w / 1000, H = p.h / 1000, fw = .068, fd = .056;
  const add = (w, h, d, x, y, z, m, part) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = m !== glass; b.receiveShadow = true; if (part) b.userData.part = part; g.add(b); return b; };
  if (p.type === 'fixed') {
    // Fixed glazing: a slim frame straight round the glass, no opening leaf.
    const fw2 = .056;
    add(fw2, H, fd, -W / 2 + fw2 / 2, H / 2, 0, joinery, 'frame'); add(fw2, H, fd, W / 2 - fw2 / 2, H / 2, 0, joinery, 'frame');
    add(W - 2 * fw2, fw2, fd, 0, H - fw2 / 2, 0, joinery, 'frame'); add(W - 2 * fw2, fw2, fd, 0, fw2 / 2, 0, joinery, 'frame');
    add(W - 2 * fw2, H - 2 * fw2, .012, 0, H / 2, 0, glass, 'glass');
    add(W + .06, .03, fd + .05, 0, -.015, .02, joinery, 'sill');
    return g;
  }
  // Outer frame.
  add(fw, H, fd, -W / 2 + fw / 2, H / 2, 0, joinery, 'frame');
  add(fw, H, fd, W / 2 - fw / 2, H / 2, 0, joinery, 'frame');
  add(W - 2 * fw, fw, fd, 0, H - fw / 2, 0, joinery, 'frame');
  if (p.kind === 'window') { add(W - 2 * fw, fw, fd, 0, fw / 2, 0, joinery, 'frame'); add(W + .06, .03, fd + .05, 0, -.015, .02, joinery, 'sill'); }
  else add(W - 2 * fw, .02, fd, 0, .01, 0, steel, 'threshold');
  const leaves = p.leaves || (p.type === 'double' ? 2 : 1);
  const lw = (W - 2 * fw) / leaves, lh = H - fw - (p.kind === 'door' ? .02 : fw);
  const ly = p.kind === 'door' ? .02 : fw;
  const st = p.type === 'sliding' || p.type === 'folding' ? .07 : .085;
  for (let i = 0; i < leaves; i++) {
    const cx = -W / 2 + fw + lw * (i + .5);
    // Sliding leaves are staggered front and back, as on a real track.
    const z = p.type === 'sliding' ? (i % 2 ? -.012 : .012) : .006;
    const leaf = (w, h, x, y, part = 'leaf') => add(w, h, .045, x, y, z, joinery, part);
    leaf(st, lh, cx - lw / 2 + st / 2, ly + lh / 2);
    leaf(st, lh, cx + lw / 2 - st / 2, ly + lh / 2);
    leaf(lw - 2 * st, st, cx, ly + lh - st / 2);
    const boards = p.boards ? lh * p.boards : 0;
    const bottomRail = p.kind === 'door' ? Math.max(st, boards) : st;
    if (boards) {
      // The boarded bottom panel: horizontal boards with shadow lines.
      const bh = boards - st;
      leaf(lw - 2 * st, st, cx, ly + st / 2, 'leaf');
      const n = Math.max(3, Math.round(bh / .07));
      for (let k = 0; k < n; k++) add(lw - 2 * st - .004, bh / n - .006, .03, cx, ly + st + (k + .5) * bh / n, z - .004, joinery, 'panel');
      leaf(lw - 2 * st, .05, cx, ly + boards + .025);
    } else leaf(lw - 2 * st, st, cx, ly + st / 2);
    const gy0 = ly + (boards ? boards + .05 : st), gy1 = ly + lh - st, gw = lw - 2 * st;
    add(gw, gy1 - gy0, .012, cx, (gy0 + gy1) / 2, z, glass, 'glass');
    if (p.bars) {
      const [cols, rows] = p.bars;
      for (let c = 1; c < cols; c++) add(.022, gy1 - gy0, .05, cx - gw / 2 + gw * c / cols, (gy0 + gy1) / 2, z + .004, joinery, 'bars');
      for (let r = 1; r < rows; r++) add(gw, .022, .05, cx, gy0 + (gy1 - gy0) * r / rows, z + .004, joinery, 'bars');
    }
    if (p.kind === 'door' && (p.type === 'single' || (p.type === 'double' && i === 0))) {
      const hx = p.type === 'single' ? cx + lw / 2 - st / 2 : cx + lw / 2 - st / 2;
      add(.02, .14, .03, hx, ly + 1.02, z + .045, steel, 'handle');
    }
    if (p.kind === 'window' && p.type !== 'fixed') add(.02, .1, .03, cx + (leaves === 2 && i === 0 ? lw / 2 - st / 2 : 0), ly + lh / 2, z + .045, steel, 'handle');
  }
  if (p.type === 'sliding') add(W - 2 * fw, .03, .07, 0, .015 + .02, 0, steel, 'track');
  return g;
}
