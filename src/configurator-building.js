// Builds a Lugarde building for a design as a Three.js group. Dimensions are metres. Axes: x to
// the right as you face the front, y up, z towards you; the room is centred on the origin, so the
// front wall's outer face is at z = depth / 2 (Pro: the outer faces of its posts).
//
// Construction follows Lugarde's own configurator and drawings (research/lugarde-specs,
// research/lugarde-2026-10-13): wall heights and overall heights from its height calculator
// (src/lugarde-cart.js); 135mm logs locked at the corners with log ends standing 90mm proud
// (straight or diamond cut); Prima boards slotted into aluminium-cored corner posts; Pro panels
// slotted into 14 x 14cm posts, with its intermediate posts exactly where Lugarde puts them;
// 70mm foundation beams; roof overhangs of 230mm (log, Pro flat), 180mm (Prima flat), 300 and
// 350mm (apex) and 264mm (pyramid); a 280mm flat roof edge with a wide aluminium trim; doors and
// windows at their frame sizes from Lugarde's product data, drawn after its product drawings.
// Photographs of Lugarde dealer builds fill in the rest: deep stained fascias, grey frames, up-and-down lights.
//
// Every mesh is tagged (userData.tags) so the scene can frame and outline any part. No two
// visible faces share a plane (tools/qa/zfight.js checks it): parts stop 1 to 4mm short of their
// neighbours and trims stand proud.
import * as THREE from 'three';
import {RANGES, OPENINGS, COVERINGS, TRIM_COLOURS, SKYLIGHTS, COLOURS} from './configurator-data.js';
import {outline, heightsOf, obstacles, sillOf, ridgeAlongWidth, finishHex} from './configurator-model.js';
import {proPosts} from './lugarde-cart.js';
import {furnish} from './configurator-furniture.js';

const BEAM = .07;          // foundation beam height (Lugarde FOUNDATIONHEIGHT)
const LOG_END = .09;       // log ends stand this far past the corner
const V = (x, y, z) => new THREE.Vector3(x, y, z);

/** Wall thickness (metres) and, for Pro, where the panel sits inside its posts. */
export function wallSpec(s) {
  if (s.range === 'pro') return {t: .028, post: RANGES.pro.post, inset: RANGES.pro.post / 2 - .014};
  return {t: s.thickness / 1000, post: s.range === 'prima' ? .085 : 0, inset: 0};
}
/** How far the roof (and canopy) reaches past each wall. */
export function roofOffsets(s) {
  const ov = RANGES[s.range].over[s.roof], c = s.canopy.side !== 'none' ? s.canopy.depth : 0;
  return {front: ov, back: ov, left: ov + (s.canopy.side === 'left' ? c : 0), right: ov + (s.canopy.side === 'right' ? c : 0)};
}
/** Building, roof and canopy extents in plan, and the highest point. */
export function extentsOf(s) {
  const o = roofOffsets(s), h = heightsOf(s);
  return {x0: -s.width / 2 - o.left, x1: s.width / 2 + o.right, z0: -s.depth / 2 - o.back, z1: s.depth / 2 + o.front + (s.extras?.patio ? 1.4 : 0), top: BEAM + h.total};
}
/** The roof's plan rectangle: room and canopy plus the overhang. */
function roofRect(s) {
  const o = roofOffsets(s);
  return {x0: -s.width / 2 - o.left, x1: s.width / 2 + o.right, z0: -s.depth / 2 - o.back, z1: s.depth / 2 + o.front};
}

/** A box whose UVs are in metres on every face, so tiled textures keep their true scale. */
export function metricBox(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let i = 0; i < uv.count; i++) {
    const [a, b] = dims[Math.floor(i / 4)];
    uv.setXY(i, uv.getX(i) * a, uv.getY(i) * b);
  }
  return g;
}
/** Splits an extruded solid's lids into groups: inside face (z=0), outside face (z=depth), edges. */
function splitLids(geometry) {
  const [lids, sides] = geometry.groups;
  const half = lids.count / 2;
  geometry.clearGroups();
  geometry.addGroup(lids.start, half, 0);
  geometry.addGroup(lids.start + half, half, 1);
  geometry.addGroup(sides.start, sides.count, 2);
  return geometry;
}

/** Builds the design. `tex` is the procedural texture factory; returns {group, lights, materials, room}. */
export function buildRoom(s, tex) {
  const r = RANGES[s.range], W = s.width, D = s.depth, ws = wallSpec(s), T = ws.t;
  const h = heightsOf(s), y0 = BEAM, y1 = BEAM + h.wall, edge = h.total - h.wall;
  const pro = s.range === 'pro', log = s.range === 'log', prima = s.range === 'prima';
  const root = new THREE.Group();
  root.name = 'room';
  const lights = [], materials = [];
  const keep = m => (materials.push(m), m);
  const std = (colour, o = {}) => keep(new THREE.MeshStandardMaterial({color: colour, roughness: .7, ...o}));

  // ---- Materials --------------------------------------------------------------------------
  const finish = finishHex(s.treatment), opaque = s.treatment.kind === 'pickle' && COLOURS.pickle[s.treatment.colour].opaque;
  const kindFor = base => (opaque ? base + 'Paint' : base);
  const wallPair = tex.cladding(kindFor(log ? 'log' : 'tng'), finish, true);
  const wallMat = std('#ffffff', {map: wallPair.map, normalMap: wallPair.normalMap, roughness: wallPair.roughness, normalScale: new THREE.Vector2(1, 1)});
  wallMat.name = 'walls';
  // Posts, fascia and trims: the same treatment in a plain board.
  const timberPair = tex.cladding(kindFor('tng'), finish, false);
  const timber = std('#ffffff', {map: timberPair.map, normalMap: timberPair.normalMap, roughness: timberPair.roughness});
  // Fascias and barge boards: one wide board, grain along it.
  const fasciaPair = tex.cladding(kindFor('fascia'), finish, true);
  const fasciaMat = std('#ffffff', {map: fasciaPair.map, normalMap: fasciaPair.normalMap, roughness: fasciaPair.roughness});
  const frameHex = finishHex(s.frames), frameOpaque = s.frames.kind === 'pickle' && COLOURS.pickle[s.frames.colour].opaque;
  const frameMat = s.frames.kind === 'none' || !frameOpaque
    ? (() => { const p = tex.cladding('tng', frameHex, false); return std('#ffffff', {map: p.map, normalMap: p.normalMap, roughness: .6}); })()
    : std(frameHex, {roughness: .55});
  frameMat.name = 'frames';
  const glass = keep(new THREE.MeshPhysicalMaterial({color: '#a9bfc4', roughness: .05, metalness: 0, transparent: true, opacity: .22, envMapIntensity: 1.8, side: THREE.DoubleSide, depthWrite: false}));
  const frosted = keep(new THREE.MeshPhysicalMaterial({color: '#e7eded', roughness: .55, transparent: true, opacity: .85, side: THREE.DoubleSide, depthWrite: false}));
  const chrome = std('#c9cdd0', {roughness: .25, metalness: .9});
  const steel = std('#8d9396', {roughness: .35, metalness: .8});
  const black = std('#1d1f22', {roughness: .45, metalness: .3});
  const hidden = std('#3a3a38', {roughness: 1});
  hidden.name = 'hidden';
  const beamMat = std(s.options.plasticBeams ? '#1c1d1e' : '#6c6845', {roughness: s.options.plasticBeams ? .5 : .85});
  const trimSpec = TRIM_COLOURS[s.trim];
  const aluMat = std(trimSpec.hex, {roughness: .32, metalness: .75});
  const epdm = (() => { const p = tex.roof('epdm'); return std('#ffffff', {map: p.map, normalMap: p.normalMap, roughness: p.roughness}); })();
  const soffitPair = tex.cladding(kindFor('soffit'), finish, false);
  const soffit = std('#ffffff', {map: soffitPair.map, normalMap: soffitPair.normalMap, roughness: .8, side: THREE.DoubleSide});
  const cover = COVERINGS[s.covering];
  const roofCover = s.roof === 'apex' || s.roof === 'pyramid'
    ? (() => { const p = cover.kind === 'tiles' ? tex.tiles(cover.hex, cover.profile) : tex.shingles(cover.hex); return std('#ffffff', {map: p.map, normalMap: p.normalMap, roughness: p.roughness, metalness: cover.kind === 'tiles' ? .4 : 0}); })()
    : null;
  const lamp = keep(new THREE.MeshStandardMaterial({color: '#fff6e0', emissive: '#ffd79a', emissiveIntensity: .35, roughness: .3}));
  // Inside: Lugarde's timber shows unless a lining or fit-out covers it.
  const innerPair = tex.cladding(kindFor(log ? 'log' : 'tng'), finish, true);
  const innerMat = std('#ffffff', {map: innerPair.map, normalMap: innerPair.normalMap, roughness: .8});
  const liningPair = s.options.wallInsulation ? tex.cladding('tng', '#e6d6b6', true) : null;
  const liningMat = liningPair ? std('#ffffff', {map: liningPair.map, normalMap: liningPair.normalMap, roughness: .8}) : null;

  // ---- Helpers ----------------------------------------------------------------------------
  const tag = (o, ...tags) => { o.userData.tags = [...(o.userData.tags || []), ...tags]; return o; };
  const add = (parent, geometry, material, x = 0, y = 0, z = 0, ...tags) => {
    const m = new THREE.Mesh(geometry, material);
    m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true;
    parent.add(m); return tag(m, ...tags);
  };
  const box = (parent, w0, h0, d0, x, y, z, material, ...tags) => add(parent, metricBox(w0, h0, d0), material, x, y, z, ...tags);
  const group = (parent, ...tags) => { const g = new THREE.Group(); parent.add(g); return tag(g, ...tags); };
  const kit = {std, add, box, group, materials: {lamp}};

  // ---- Walls ------------------------------------------------------------------------------
  const walls = outline(s), blocks = obstacles(s);
  const wallsGroup = group(root, 'walls');
  const apex = s.roof === 'apex', pent = s.roof === 'pent', along = ridgeAlongWidth(s);
  const slope = s.slope * Math.PI / 180;
  // Gable walls (perpendicular to an apex ridge) rise to a peak; pent side walls rise to the front.
  const gableWall = id => apex && (along ? id === 'left' || id === 'right' : id === 'front' || id === 'back');
  const spanOf = () => (along ? D : W);
  const PENT_RISE = .35;
  const topAt = (wl, u, inset = 0) => {
    // Height of the wall top at u along the wall (inner face for inset > 0).
    if (gableWall(wl.id)) {
      const half = spanOf() / 2, d = Math.abs(u - wl.L / 2);
      return y1 + Math.max(0, (half - d - inset) * Math.tan(slope)) - .015;
    }
    if (pent) {
      // z of this point: front is high.
      const z = wl.a[1] + wl.u[1] * u;
      return y1 + PENT_RISE * (z + D / 2) / D;
    }
    return y1;
  };
  const wallGroups = {};
  walls.forEach(wl => {
    const L = wl.L, side = wl.id;
    const g = group(wallsGroup, 'wall:' + side);
    g.position.set(wl.a[0], 0, wl.a[1]);
    g.rotation.y = Math.atan2(-wl.u[1], wl.u[0]);
    wallGroups[side] = {g, L, wall: wl};
    const ops = s.openings.filter(o => o.wall === side);
    const holes = ops.map(o => {
      const sp = OPENINGS[o.type], c = o.p * L, sill = sillOf(o.type);
      // A hole must stay inside the wall's outline, or the wall's faces break.
      const hp = new THREE.Path(), x0 = c - sp.fw / 2, x1 = c + sp.fw / 2, b = y0 + sill + (sill ? 0 : .002), t = Math.min(y0 + sill + sp.fh, topAt(wl, x0) - .004, topAt(wl, x1) - .004);
      hp.moveTo(x0, b); hp.lineTo(x0, t); hp.lineTo(x1, t); hp.lineTo(x1, b); hp.lineTo(x0, b);
      return hp;
    });
    // The slab's extent along the wall. Log cabins: front and back walls run to the corners, the
    // sides fit between them. Prima: boards between its corner posts. Pro: one panel per bay.
    const xWall = side === 'front' || side === 'back';
    let spans = [];
    if (log) spans = [xWall ? [0, L] : [T + .001, L - T - .001]];
    else if (prima) spans = [[ws.post - .003, L - ws.post + .003]];
    else {
      const cuts = [0, ...blocks[side].map(([a, b]) => (a + b) / 2), L];
      for (let i = 0; i < cuts.length - 1; i++) spans.push([cuts[i] + (i === 0 ? ws.post : ws.post / 2) + .001, cuts[i + 1] - (i === cuts.length - 2 ? ws.post : ws.post / 2) - .001]);
    }
    const zOuter = pro ? -ws.inset : 0;
    for (const [u0, u1] of spans) {
      const shape = new THREE.Shape();
      const ridgeU = gableWall(side) ? L / 2 : null;
      shape.moveTo(u0, y0); shape.lineTo(u1, y0);
      shape.lineTo(u1, topAt(wl, u1));
      if (ridgeU !== null && ridgeU > u0 && ridgeU < u1) shape.lineTo(ridgeU, topAt(wl, ridgeU));
      shape.lineTo(u0, topAt(wl, u0));
      shape.lineTo(u0, y0);
      shape.holes = holes.filter((hp, i) => { const c = ops[i].p * L; return c > u0 && c < u1; });
      add(g, splitLids(new THREE.ExtrudeGeometry(shape, {depth: T, bevelEnabled: false})), [innerMat, wallMat, wallMat], 0, 0, zOuter - T, 'cladding', 'wall:' + side);
    }
    // Inner lining of the double insulated walls: 19mm boards on battens, 60mm inside.
    if (liningMat) {
      // Log side linings stop against the front and back linings rather than overlapping them.
      const shape = new THREE.Shape(), u0 = log ? (xWall ? T + .07 : T + .102) : ws.post + .07, u1 = L - u0;
      shape.moveTo(u0, y0 + .03); shape.lineTo(u1, y0 + .03); shape.lineTo(u1, Math.min(topAt(wl, u1, .1), y1) - .03); shape.lineTo(u0, Math.min(topAt(wl, u0, .1), y1) - .03); shape.lineTo(u0, y0 + .03);
      shape.holes = holes.filter((hp, i) => { const c = ops[i].p * L; return c > u0 && c < u1; });
      add(g, splitLids(new THREE.ExtrudeGeometry(shape, {depth: .019, bevelEnabled: false})), [liningMat, hidden, liningMat], 0, 0, zOuter - T - .08, 'wallInsulation', 'insulation', 'wall:' + side);
    }
    // Foundation beam under the wall (Pro: between its posts).
    const bl = log ? (xWall ? L : L - 2 * T - .004) : prima ? L - 2 * ws.post : L - 2 * ws.post - .004;
    const bc = L / 2;
    box(g, bl, BEAM - .002, Math.max(T, .045) + .006, bc, BEAM / 2, zOuter - T / 2, beamMat, 'beams', 'base');
    for (const o of ops) buildOpening(g, o, L, zOuter);
  });

  // ---- Corners: log ends, Prima posts, Pro posts ----------------------------------------------
  const corners = group(root, 'corners');
  const cornerXZ = [[-1, 1], [1, 1], [1, -1], [-1, -1]];
  if (log) {
    const n = Math.max(1, Math.round(h.wall / .1355)), lh = h.wall / n;
    const diamond = s.options.diamond;
    // A log end in elevation: straight, or diamond cut (bevelled top and bottom to a nose).
    const endShape = (len, hh) => {
      const sh = new THREE.Shape();
      if (!diamond) { sh.moveTo(0, 0); sh.lineTo(len, 0); sh.lineTo(len, hh); sh.lineTo(0, hh); sh.lineTo(0, 0); return sh; }
      const b = Math.min(.035, hh * .3);
      sh.moveTo(0, 0); sh.lineTo(len - b, 0); sh.lineTo(len, hh / 2); sh.lineTo(len - b, hh); sh.lineTo(0, hh); sh.lineTo(0, 0);
      return sh;
    };
    const endGeo = endShape(LOG_END, lh - .006);
    for (const [sx, sz] of cornerXZ) {
      for (let k = 0; k < n; k++) {
        const yb = y0 + k * lh + .003;
        if (k % 2 === 0) {
          // Front/back log runs past the side wall.
          const geo = new THREE.ExtrudeGeometry(endGeo, {depth: T, bevelEnabled: false});
          const m = add(corners, geo, wallMat, sx * (W / 2 + .001), yb, sz > 0 ? D / 2 - T : -D / 2, 'corners', 'logEnds');
          if (sx < 0) { m.scale.x = -1; }
          void sz;
        } else {
          const geo = new THREE.ExtrudeGeometry(endGeo, {depth: T, bevelEnabled: false});
          const m = add(corners, geo, wallMat, sx > 0 ? W / 2 - T : -W / 2, yb, sz * (D / 2 + .001), 'corners', 'logEnds');
          m.rotation.y = sz > 0 ? -Math.PI / 2 : Math.PI / 2;
          m.position.x = sx > 0 ? W / 2 - (sz > 0 ? 0 : T) : -W / 2 + (sz > 0 ? T : 0);
        }
      }
    }
  } else {
    const P = ws.post, proud = prima ? .004 : 0;
    const postH = (pro ? y1 + .02 : y1 - .008);
    for (const [sx, sz] of cornerXZ) {
      const cx = sx * (W / 2 - P / 2 + proud / 2), cz = sz * (D / 2 - P / 2 + proud / 2);
      const top = apex && gableWallAtCorner() ? postH : postH;
      box(corners, P + proud, top - (pro ? 0 : y0), P + proud, cx, (pro ? 0 : y0) + (top - (pro ? 0 : y0)) / 2, cz, prima ? timber : timber, 'corners', 'posts');
      if (pro) box(corners, P + .01, .018, P + .01, cx, .009, cz, black, 'posts');
    }
    if (pro) {
      // Lugarde's intermediate posts, where its configurator puts them.
      for (const wl of walls) for (const [a, b] of blocks[wl.id]) {
        const u = (a + b) / 2, x = wl.a[0] + wl.u[0] * u + wl.n[0] * (-P / 2), z = wl.a[1] + wl.u[1] * u + wl.n[1] * (-P / 2);
        const top = topAt(wl, u);
        box(corners, P, top + .02, P, x, (top + .02) / 2, z, timber, 'corners', 'posts', 'wall:' + wl.id);
        box(corners, P + .01, .018, P + .01, x, .009, z, black, 'posts');
      }
    }
  }
  function gableWallAtCorner() { return false; }

  // Log cabins: Lugarde's stability points on long walls, braces inside the logs.
  if (log) {
    const stab = group(root, 'stability');
    for (const wl of walls) for (const [a, b] of blocks[wl.id]) {
      const u = (a + b) / 2, inward = T + .035;
      const x = wl.a[0] + wl.u[0] * u - wl.n[0] * inward, z = wl.a[1] + wl.u[1] * u - wl.n[1] * inward;
      const m = box(stab, .07, h.wall - .06, .07, x, y0 + h.wall / 2, z, timber, 'stability', 'wall:' + wl.id);
      if (wl.axis === 'z') m.rotation.y = Math.PI / 2;
    }
  }

  // ---- Floor and base ----------------------------------------------------------------------
  const inner = {x0: -W / 2 + (pro ? ws.post / 2 + ws.inset : T) + .002, x1: W / 2 - (pro ? ws.post / 2 + ws.inset : T) - .002, z0: -D / 2 + (pro ? ws.post / 2 + ws.inset : T) + .002, z1: D / 2 - (pro ? ws.post / 2 + ws.inset : T) - .002};
  if (s.options.wallInsulation) { inner.x0 += .1; inner.x1 -= .1; inner.z0 += .1; inner.z1 -= .1; }
  const iw = inner.x1 - inner.x0, id = inner.z1 - inner.z0, icx = (inner.x0 + inner.x1) / 2, icz = (inner.z0 + inner.z1) / 2;
  const floorTop = s.options.floor ? y0 + .03 : .012;
  const floorGroup = group(root, 'floor');
  const base = tex.paving();
  const baseMat = std('#d8d4ca', {map: base.map, normalMap: base.normalMap, roughness: .95});
  // The base under the building (concrete or slabs), always there.
  box(floorGroup, W + .1, .012, D + .1, 0, .006, 0, baseMat, 'base', 'groundwork');
  if (s.options.floor || s.extras.fitout) {
    const fit = s.extras.fitout;
    const fp = fit ? tex.floor('laminate', '#8f8a82') : tex.cladding(kindFor('tng'), s.floorColour !== 'none' ? COLOURS.spray[s.floorColour].hex : '#d3b98d', false);
    const fm = std('#ffffff', {map: fp.map, normalMap: fp.normalMap, roughness: fit ? .5 : .78});
    // The floor in two parts, so the plan view can lift the back-left corner and show the floor
    // beams (and the insulation between them) underneath.
    const cw = Math.min(1.2, iw * .4), cd = Math.min(1.2, id * .4);
    const fy = floorTop - .012;
    box(floorGroup, iw, .024, id - cd - .002, icx, fy, inner.z0 + cd + .002 + (id - cd - .002) / 2, fm, 'floor', ...(fit ? ['fitout'] : []));
    box(floorGroup, iw - cw - .002, .024, cd, inner.x0 + cw + .002 + (iw - cw - .002) / 2, fy, inner.z0 + cd / 2, fm, 'floor', ...(fit ? ['fitout'] : []));
    const patch = box(floorGroup, cw, .024, cd, inner.x0 + cw / 2, fy, inner.z0 + cd / 2, fm, 'floor', 'planHide');
    void patch;
    const under = group(floorGroup, 'floor', 'planOnly', 'floorInsulation');
    for (let x = inner.x0 + .05; x < inner.x0 + cw; x += .4) box(under, .045, .07, cd - .01, x, y0 - .035 + .02, inner.z0 + cd / 2, std('#7b6d4b', {roughness: .9}), 'floor', 'planOnly', 'floorInsulation');
    if (s.options.floorInsulation) {
      const foil = tex.foil();
      const fmz = std('#ffffff', {map: foil.map, normalMap: foil.normalMap, roughness: .35});
      for (let x = inner.x0 + .095; x < inner.x0 + cw - .05; x += .4) box(under, Math.min(.35, inner.x0 + cw - x - .03), .02, cd - .02, x + Math.min(.35, inner.x0 + cw - x - .03) / 2, y0 - .005, inner.z0 + cd / 2, fmz, 'floor', 'planOnly', 'floorInsulation');
    }
  }

  // ---- Roof --------------------------------------------------------------------------------
  const roofGroup = group(root, 'roof');
  const rr = roofRect(s), ov = r.over[s.roof];
  const ceilingY = {value: y1};
  if (s.roof === 'flat') buildFlatRoof();
  else if (apex) buildApexRoof();
  else if (pent) buildPentRoof();
  else buildPyramidRoof();

  function buildFlatRoof() {
    const top = y1 + edge, t = .025, rx = rr.x1 - rr.x0, rz = rr.z1 - rr.z0, cx = (rr.x0 + rr.x1) / 2, cz = (rr.z0 + rr.z1) / 2;
    // Roof deck with the EPDM on top, inside the fascia.
    box(roofGroup, rx - 2 * t - .004, .1, rz - 2 * t - .004, cx, top - .03 - .05, cz, epdm, 'roof');
    // Soffit boards under the overhang and over the room (the timber ceiling inside).
    const sof = box(roofGroup, rx - 2 * t - .004, .016, rz - 2 * t - .004, cx, y1 + .045, cz, soffit, 'roof', 'soffit', 'ceiling');
    void sof;
    // Fascia boards round the edge, then Lugarde's wide aluminium trim over their top.
    const fh = edge - .06, fy = y1 + .03 + fh / 2;
    box(roofGroup, rx, fh, t, cx, fy, rr.z1 - t / 2, fasciaMat, 'fascia');
    box(roofGroup, rx, fh, t, cx, fy, rr.z0 + t / 2, fasciaMat, 'fascia');
    box(roofGroup, t, fh, rz - 2 * t - .002, rr.x0 + t / 2, fy, cz, fasciaMat, 'fascia');
    box(roofGroup, t, fh, rz - 2 * t - .002, rr.x1 - t / 2, fy, cz, fasciaMat, 'fascia');
    const tt = .012, th = .065, ty = top - th / 2 + .006;
    box(roofGroup, rx + 2 * tt, th, tt, cx, ty, rr.z1 + tt / 2 + .001, aluMat, 'trim');
    box(roofGroup, rx + 2 * tt, th, tt, cx, ty, rr.z0 - tt / 2 - .001, aluMat, 'trim');
    box(roofGroup, tt, th, rz, rr.x0 - tt / 2 - .001, ty, cz, aluMat, 'trim');
    box(roofGroup, tt, th, rz, rr.x1 + tt / 2 + .001, ty, cz, aluMat, 'trim');
    // Trim caps over the EPDM edge.
    for (const [w0, d0, x, z] of [[rx, .05, cx, rr.z1 - .025], [rx, .05, cx, rr.z0 + .025], [.05, rz - .1, rr.x0 + .025, cz], [.05, rz - .1, rr.x1 - .025, cz]]) box(roofGroup, w0, .008, d0, x, top + .002, z, aluMat, 'trim');
    ceilingY.value = y1 + .037;
    if (s.skylight !== 'none') {
      const sk = SKYLIGHTS[s.skylight], sg = group(roofGroup, 'skylight');
      const sw = Math.min(sk.w, W - .8), sd = Math.min(sk.d, D - .8), sx = s.canopy.side === 'left' ? .2 : s.canopy.side === 'right' ? -.2 : 0;
      box(sg, sw + .1, .14, sd + .1, sx, top + .05, -D * .08, black, 'skylight', 'roof');
      add(sg, new THREE.PlaneGeometry(sw, sd), glass, sx, top + .122, -D * .08, 'skylight', 'roof', 'glass').rotation.x = -Math.PI / 2;
    }
  }

  function buildApexRoof() {
    const cover = .055, rise = Math.tan(slope);
    const L0 = along ? rr.x0 : rr.z0, L1 = along ? rr.x1 : rr.z1, Lr = L1 - L0, Lc = (L0 + L1) / 2;
    const half = spanOf() / 2, run = half + ov;
    const yWall = y1 + .02;                         // roof underside at the wall's outer face
    const yRidge = yWall + half * rise;
    const slopeLen = run / Math.cos(slope);
    for (const sgn of [-1, 1]) {
      // One plane: from the ridge down to the eave edge, ov past the wall.
      const g = new THREE.Group();
      roofGroup.add(g);
      const geo = metricBox(Lr, cover, slopeLen);
      const m = add(g, geo, [hidden, hidden, roofCover, soffit, hidden, hidden], 0, 0, 0, 'roof');
      const mid = sgn * run / 2, yMid = yRidge - run / 2 * rise + cover / 2 / Math.cos(slope);
      if (along) { m.position.set(Lc, yMid, mid); m.rotation.x = sgn * slope; }
      else { m.position.set(mid, yMid, Lc); m.rotation.z = -sgn * slope; m.rotation.y = 0; m.geometry = metricBox(slopeLen, cover, Lr); m.material = [roofCover, soffit, hidden, hidden, hidden, hidden]; m.material = [hidden, hidden, roofCover, soffit, hidden, hidden]; m.geometry.rotateY(Math.PI / 2); }
      // Eave fascia board.
      const eY = yWall - ov * rise - .07;
      if (along) box(roofGroup, Lr, .14, .022, Lc, eY, sgn * (run + .012), fasciaMat, 'fascia');
      else box(roofGroup, .022, .14, Lr, sgn * (run + .012), eY, Lc, fasciaMat, 'fascia');
      if (s.options.gutter) {
        const gy = eY - .02, gz = sgn * (run + .07);
        const gutter = new THREE.CylinderGeometry(.06, .06, Lr, 16, 1, true, 0, Math.PI);
        const gm = add(roofGroup, gutter, std('#9aa0a3', {roughness: .35, metalness: .7, side: THREE.DoubleSide}), along ? Lc : gz, gy, along ? gz : Lc, 'gutter');
        gm.rotation.z = Math.PI / 2; if (!along) gm.rotation.set(Math.PI / 2, 0, 0);
        for (const end of [L0 + .15, L1 - .15]) {
          const px = along ? end : gz, pz = along ? gz : end;
          add(roofGroup, new THREE.CylinderGeometry(.035, .035, gy - .05, 12), std('#9aa0a3', {roughness: .35, metalness: .7}), px, (gy - .05) / 2, pz, 'gutter');
        }
      }
    }
    // Ridge cap.
    if (along) box(roofGroup, Lr + .02, .05, .12, Lc, yRidge + cover + .02, 0, cover && roofCover, 'roof');
    else box(roofGroup, .12, .05, Lr + .02, 0, yRidge + cover + .02, Lc, roofCover, 'roof');
    // Barge boards up each gable edge.
    for (const end of [L0 - .012, L1 + .012]) for (const sgn of [-1, 1]) {
      const bl = slopeLen + .02, bm = add(roofGroup, metricBox(.022, .18, bl), timber, 0, 0, 0, 'fascia', 'barge');
      const yB = yRidge - run / 2 * rise - .02;
      // The two boards cross at the ridge: one sits 4mm further out so their faces never coincide.
      const e = end + (sgn > 0 ? Math.sign(end) * .004 : 0);
      if (along) { bm.position.set(e, yB, sgn * run / 2); bm.rotation.x = sgn * slope; }
      else { bm.geometry.dispose(); bm.geometry = metricBox(bl, .18, .022); bm.position.set(sgn * run / 2, yB, e); bm.rotation.z = -sgn * slope; }
    }
    // Log cabins: the purlins run through the gables and show under the overhang.
    if (log) {
      const nSide = half < 1.6 ? 1 : half < 2.6 ? 2 : 3;
      for (let i = 0; i <= nSide; i++) {
        const off = i === 0 ? 0 : (half - .25) * i / nSide;
        for (const sgn of i === 0 ? [0] : [-1, 1]) {
          const y = yRidge - off * rise - .11 - .015 * i;
          const len = Lr - .06;
          if (along) box(roofGroup, len, .17, .07, Lc, y, sgn * off, timber, 'roof', 'purlins');
          else box(roofGroup, .07, .17, len, sgn * off, y, Lc, timber, 'roof', 'purlins');
        }
      }
    }
    ceilingY.value = yRidge;
  }

  function buildPentRoof() {
    // One plane falling from the front to the back; EPDM on top, fascia boards round it.
    const rise = PENT_RISE / D, a = Math.atan(rise), th = .18;
    const rx = rr.x1 - rr.x0, rz = rr.z1 - rr.z0, cx = (rr.x0 + rr.x1) / 2;
    const yAt = z => y1 + .02 + PENT_RISE * (z + D / 2) / D;
    const len = rz / Math.cos(a), yc = (yAt(rr.z0) + yAt(rr.z1)) / 2 + th / 2;
    const slab = add(roofGroup, metricBox(rx - .05, th, len - .05), [hidden, hidden, epdm, soffit, timber, timber], cx, yc, 0, 'roof');
    slab.rotation.x = -a;
    for (const z of [rr.z0, rr.z1]) box(roofGroup, rx + .02, th + .04, .022, cx, yAt(z) + th / 2, z + (z > 0 ? .011 : -.011), fasciaMat, 'fascia');
    for (const x of [rr.x0 - .011, rr.x1 + .011]) {
      const f = add(roofGroup, metricBox(.022, th + .04, len + .01), timber, x, yc, 0, 'fascia');
      f.rotation.x = -a;
    }
    if (s.options.gutter) {
      const gm = add(roofGroup, new THREE.CylinderGeometry(.06, .06, rx, 16, 1, true, 0, Math.PI), std('#9aa0a3', {roughness: .35, metalness: .7, side: THREE.DoubleSide}), cx, yAt(rr.z0) - .02, rr.z0 - .07, 'gutter');
      gm.rotation.z = Math.PI / 2;
      add(roofGroup, new THREE.CylinderGeometry(.035, .035, yAt(rr.z0) - .07, 12), std('#9aa0a3', {roughness: .35, metalness: .7}), rr.x1 - .15, (yAt(rr.z0) - .07) / 2, rr.z0 - .07, 'gutter');
    }
    ceilingY.value = y1;
  }

  function buildPyramidRoof() {
    // Four planes to a ridge (or a point on a square), shingled, with a fascia round the eaves
    // and a metal cap at the top.
    const t = .05, a = slope, o = ov;
    const x0 = -W / 2 - o, x1 = W / 2 + o, z0 = -D / 2 - o, z1 = D / 2 + o;
    const m = Math.min(x1 - x0, z1 - z0) / 2, yE = y1 + .02 - o * Math.tan(a), yTop = yE + m * Math.tan(a);
    const rx = (x1 - x0) / 2 - m, rz = (z1 - z0) / 2 - m;
    const P = [V(x0, yE, z1), V(x1, yE, z1), V(x1, yE, z0), V(x0, yE, z0)], R = [V(-rx, yTop, rz), V(rx, yTop, rz), V(rx, yTop, -rz), V(-rx, yTop, -rz)];
    const pos = [], uv = [];
    const face = (a0, b0, c0, d0) => {
      const tri = (p, q, w) => { pos.push(p.x, p.y, p.z, q.x, q.y, q.z, w.x, w.y, w.z); for (const v of [p, q, w]) uv.push(v.x + v.z, v.y / Math.sin(slope)); };
      tri(a0, b0, c0); if (d0) tri(a0, c0, d0);
    };
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      if (R[i].distanceTo(R[j]) < 1e-4) face(P[i], P[j], R[i]); else face(P[i], P[j], R[j], R[i]);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.computeVertexNormals();
    add(roofGroup, geo, roofCover, 0, t, 0, 'roof');
    const under = geo.clone(); add(roofGroup, under, soffit, 0, 0, 0, 'roof', 'soffit').material = soffit;
    under.index = null;
    for (const [w0, d0, x, z] of [[x1 - x0 + .04, .022, 0, z1 + .011], [x1 - x0 + .04, .022, 0, z0 - .011], [.022, z1 - z0, x0 - .011, 0], [.022, z1 - z0, x1 + .011, 0]]) box(roofGroup, w0, .12, d0, x, yE - .02, z, fasciaMat, 'fascia');
    add(roofGroup, new THREE.ConeGeometry(.12, .16, 16), steel, rx > .01 ? 0 : 0, yTop + t + .06, 0, 'roof', 'cap').scale.x = Math.max(1, (rx * 2 + .24) / .24);
    if (s.options.finial) add(roofGroup, new THREE.SphereGeometry(.07, 20, 14), chrome, 0, yTop + t + .21, 0, 'finial', 'roof');
    if (s.options.gutter) {
      for (const [len, x, z, rot] of [[x1 - x0, 0, z1 + .07, 0], [x1 - x0, 0, z0 - .07, 0], [z1 - z0, x0 - .07, 0, 1], [z1 - z0, x1 + .07, 0, 1]]) {
        const gm = add(roofGroup, new THREE.CylinderGeometry(.055, .055, len, 14, 1, true, 0, Math.PI), std('#9aa0a3', {roughness: .35, metalness: .7, side: THREE.DoubleSide}), x, yE - .07, z, 'gutter');
        gm.rotation.set(rot ? Math.PI / 2 : 0, 0, rot ? 0 : Math.PI / 2);
      }
      add(roofGroup, new THREE.CylinderGeometry(.035, .035, yE - .1, 12), std('#9aa0a3', {roughness: .35, metalness: .7}), x1 + .07, (yE - .1) / 2, z1 + .07, 'gutter');
    }
    ceilingY.value = y1;
  }

  // Flat roofs: a downpipe from Lugarde's outlet at the back corner.
  if (s.roof === 'flat' && s.options.downpipe) {
    const px = rr.x1 - .25, pz = rr.z0 - .05;
    add(roofGroup, new THREE.CylinderGeometry(.035, .035, y1 + edge - .25, 12), std('#9aa0a3', {roughness: .35, metalness: .7}), px, (y1 + edge - .25) / 2, pz, 'downpipe');
    // The outlet box stands clear of the fascia board (it sat inside it and flickered).
    box(roofGroup, .08, .06, .08, px, y1 + edge - .227, pz - .004, std('#9aa0a3', {roughness: .35, metalness: .7}), 'downpipe');
  }

  // ---- Inside the roof: beams, insulation, ceiling ----------------------------------------
  const ceilGroup = group(root, 'ceiling');
  if (s.roof === 'flat' || pent) {
    const yb = s.roof === 'flat' ? y1 + .036 : y1 + .03;
    // Roof beams across the room, 600mm apart.
    const n = Math.max(1, Math.floor(iw / .6));
    for (let i = 1; i <= n; i++) {
      const x = inner.x0 + iw * i / (n + 1);
      const bm = box(ceilGroup, .045, .12, id - .01, x, yb - .062, icz, timber, 'ceiling', 'beams');
      if (pent) { bm.rotation.x = -Math.atan(PENT_RISE / D); bm.position.y = y1 + PENT_RISE / 2 - .04; }
    }
    if (s.options.roofInsulation && !s.options.ceiling && s.roof === 'flat') {
      const foil = tex.foil();
      add(ceilGroup, new THREE.PlaneGeometry(iw, id), std('#ffffff', {map: foil.map, normalMap: foil.normalMap, roughness: .35, side: THREE.DoubleSide}), icx, yb - .004, icz, 'roofInsulation', 'insulation', 'ceiling').rotation.x = Math.PI / 2;
    }
    if (s.options.ceiling) {
      const cp = tex.cladding('tng', '#efe6d3', false);
      add(ceilGroup, new THREE.PlaneGeometry(iw, id), std('#ffffff', {map: cp.map, normalMap: cp.normalMap, roughness: .8, side: THREE.DoubleSide}), icx, yb - .13, icz, 'ceiling', 'extraCeiling').rotation.x = Math.PI / 2;
      ceilingY.value = yb - .13;
    } else if (s.options.roofInsulation && pent) {
      const foil = tex.foil();
      const pl = add(ceilGroup, new THREE.PlaneGeometry(iw, id / Math.cos(Math.atan(PENT_RISE / D))), std('#ffffff', {map: foil.map, normalMap: foil.normalMap, roughness: .35, side: THREE.DoubleSide}), icx, y1 + PENT_RISE / 2 - .005, icz, 'roofInsulation', 'insulation', 'ceiling');
      pl.rotation.x = Math.PI / 2 - Math.atan(PENT_RISE / D);
    }
  } else if (s.options.roofInsulation) {
    // Apex and pyramid: foil boards under the roof planes.
    const foil = tex.foil();
    const fm = std('#ffffff', {map: foil.map, normalMap: foil.normalMap, roughness: .35, side: THREE.DoubleSide});
    if (apex) {
      const half = spanOf() / 2, Lr = along ? iw : id;
      for (const sgn of [-1, 1]) {
        const pl = add(ceilGroup, new THREE.PlaneGeometry(along ? Lr : (half - .1) / Math.cos(slope), along ? (half - .1) / Math.cos(slope) : Lr), fm, 0, 0, 0, 'roofInsulation', 'insulation', 'ceiling');
        const yMid = y1 + .02 + (half / 2) * Math.tan(slope) - .06;
        if (along) { pl.position.set(icx, yMid, sgn * half / 2); pl.rotation.x = -Math.PI / 2 + sgn * slope; }
        else { pl.position.set(sgn * half / 2, yMid, icz); pl.rotation.set(-Math.PI / 2, -sgn * slope, 0); }
      }
    } else {
      add(ceilGroup, new THREE.PlaneGeometry(iw, id), fm, icx, y1 - .01, icz, 'roofInsulation', 'insulation', 'ceiling').rotation.x = Math.PI / 2;
    }
  }

  // ---- Canopy ------------------------------------------------------------------------------
  if (s.canopy.side !== 'none') {
    const cg = group(root, 'canopy');
    const c = s.canopy.depth, sgn = s.canopy.side === 'left' ? -1 : 1;
    const P = pro ? .14 : .12;
    const xOut = sgn * (W / 2 + c) - sgn * P / 2;
    const zs = [-D / 2 + P / 2, D / 2 - P / 2];
    if (log && s.roof === 'flat' && D > 3.5) zs.splice(1, 0, 0);
    const beamY = s.roof === 'flat' ? y1 + .03 : y1 - .01;
    for (const z of zs) {
      box(cg, P, beamY - .01, P, xOut, (beamY - .01) / 2 + .005, z, timber, 'canopy', 'posts');
      box(cg, P + .02, .012, P + .02, xOut, .006, z, black, 'canopy', 'posts');
      // Knee braces: Lugarde's posts come with two each.
      for (const dir of z === zs[0] ? [1] : z === zs[zs.length - 1] ? [-1] : [-1, 1]) {
        const br = box(cg, .05, .55, .05, xOut, beamY - .3, z + dir * .17, timber, 'canopy', 'braces');
        br.rotation.x = -dir * Math.PI / 4;
      }
      const ib = box(cg, .05, .55, .05, xOut - sgn * .17, beamY - .3, z, timber, 'canopy', 'braces');
      ib.rotation.z = -sgn * Math.PI / 4;
    }
    // Edge beam along the canopy's open side, under the roof.
    box(cg, P - .012, .16, D - .004, xOut, beamY - .085, 0, timber, 'canopy', 'beams');
    if (s.options.veranda) {
      const dp = tex.deck('#b0835a');
      const dm = std('#ffffff', {map: dp.map, normalMap: dp.normalMap, roughness: dp.roughness});
      const x0 = sgn > 0 ? W / 2 + .004 : -W / 2 - c + .004, x1 = sgn > 0 ? W / 2 + c - .004 : -W / 2 - .004;
      box(cg, x1 - x0, .04, D - .008, (x0 + x1) / 2, .04, 0, dm, 'veranda', 'canopy');
    }
  }

  // ---- Exterior extras --------------------------------------------------------------------
  const ext = group(root, 'exterior');
  const front = walls.find(w => w.id === 'front');
  const mainDoor = s.openings.filter(o => o.wall === 'front' && OPENINGS[o.type].group === 'door').sort((a, b) => OPENINGS[b.type].fw - OPENINGS[a.type].fw)[0];
  if (s.wallLights) {
    const spots = [];
    if (mainDoor) { const c = mainDoor.p * W - W / 2, half = OPENINGS[mainDoor.type].fw / 2 + .22; spots.push(c - half, c + half); }
    else spots.push(-W / 4, W / 4);
    if (s.wallLights === 4) spots.push(-W / 2 + .35, W / 2 - .35);
    for (const x of spots.slice(0, s.wallLights)) {
      const lx = Math.max(-W / 2 + .2, Math.min(W / 2 - .2, x)), lz = D / 2 + (pro ? -ws.inset : 0) + .05;
      box(ext, .08, .16, .09, lx, y0 + 1.85, lz, black, 'wallLights');
      for (const dy of [-.09, .09]) box(ext, .05, .004, .05, lx, y0 + 1.85 + dy, lz, lamp, 'wallLights', 'lamp');
      lights.push({kind: 'updown', position: V(lx, y0 + 1.85, lz + .08)});
    }
  }
  if (s.spots) {
    // LED spots set into the soffit: along the front overhang, then round the sides.
    const n = s.spots, frontN = Math.min(n, Math.max(3, Math.round(n * W / (2 * W + D)))), sideN = Math.floor((n - frontN) / 2);
    const yS = s.roof === 'flat' ? y1 + .036 : y1 - ov * Math.tan(slope) + .01;
    const zF = D / 2 + Math.max(.08, ov / 2);
    const put = (x, z) => { add(ext, new THREE.CylinderGeometry(.03, .03, .008, 16), lamp, x, yS, z, 'spots', 'lamp'); lights.push({kind: 'down', position: V(x, yS - .02, z)}); };
    for (let i = 0; i < frontN; i++) put(-W / 2 + W * (i + .5) / frontN, zF);
    for (let i = 0; i < sideN; i++) for (const sx of [-1, 1]) put(sx * (W / 2 + Math.max(.08, ov / 2)), D / 2 - D * (i + .5) / (sideN + .5));
    lights.length = Math.min(lights.length, 12);
  }
  if (s.options.stormAnchors) {
    for (const [sx, sz] of cornerXZ) {
      const x = sx * (W / 2 + (log ? LOG_END + .01 : .006)), z = sz * (D / 2 - .3);
      box(ext, .006, h.wall - .05, .04, x, y0 + h.wall / 2, z, steel, 'anchors');
    }
  }
  if (s.extras.patio) {
    const pv = tex.paving();
    const pm = std('#e7e3da', {map: pv.map, normalMap: pv.normalMap, roughness: .7});
    const e = extentsOf({...s, extras: {}});
    const g0 = group(ext, 'patio');
    box(g0, e.x1 - e.x0 + 1.2, .03, 1.6, (e.x0 + e.x1) / 2, .015, e.z1 + .8, pm, 'patio');
    box(g0, e.x1 - e.x0 + 1.2, .05, .06, (e.x0 + e.x1) / 2, .025, e.z1 + 1.63, std('#5b5d60', {roughness: .8}), 'patio');
  }
  void front;

  // ---- Interior ----------------------------------------------------------------------------
  const room = {x0: inner.x0, x1: inner.x1, z0: inner.z0, z1: inner.z1, floor: floorTop, walls, ceilingAt: () => Math.max(ceilingY.value - .05, y1 - .05), wallTop: y1};
  if (s.extras.heater) {
    const hg = group(root, 'heater');
    box(hg, .9, .12, .07, icx, y1 - .45, inner.z0 + .05, std('#2b2d30', {roughness: .5, metalness: .3}), 'heater');
    box(hg, .82, .05, .01, icx, y1 - .47, inner.z0 + .088, keep(new THREE.MeshStandardMaterial({color: '#ffb27a', emissive: '#ff7a3a', emissiveIntensity: .8})), 'heater', 'lamp');
    lights.push({kind: 'interior', position: V(icx, y1 - .6, inner.z0 + .4)});
  }
  if (s.extras.fitout) {
    const fg = group(root, 'fitout');
    const cy = Math.min(room.ceilingAt(), y1 + .02) - .015;
    const nx = Math.max(2, Math.round(iw / 1.4)), nz = Math.max(1, Math.round(id / 1.4));
    for (let i = 0; i < nx; i++) for (let k = 0; k < nz; k++) {
      const x = inner.x0 + iw * (i + .5) / nx, z = inner.z0 + id * (k + .5) / nz;
      add(fg, new THREE.CylinderGeometry(.04, .04, .01, 14), lamp, x, cy, z, 'fitout', 'lamp');
      if (lights.filter(l => l.kind === 'interior').length < 4) lights.push({kind: 'interior', position: V(x, cy - .2, z)});
    }
    for (const [x, z, w0, d0] of [[icx, inner.z0 + .006, iw, .012], [icx, inner.z1 - .006, iw, .012], [inner.x0 + .006, icz, .012, id], [inner.x1 - .006, icz, .012, id]]) box(fg, w0, .09, d0, x, floorTop + .045, z, std('#f2f0ea', {roughness: .6}), 'fitout');
  }
  furnish(root, s, room, kit);

  // ---- Doors and windows ------------------------------------------------------------------
  function buildOpening(g, o, L, zOuter) {
    const sp = OPENINGS[o.type], c = o.p * L, sill = sillOf(o.type);
    const og = group(g, 'opening:' + o.id, 'openings');
    og.position.set(c, y0 + sill, zOuter - T / 2);
    const fw = sp.fw, fh = sp.fh, depth = T + .012, fr = .055;
    // Casing boards round the outside (Lugarde's frames carry them), proud of the wall.
    const cs = .065, cz = T / 2 + .011;
    // The head casing runs over the side casings, which stop beneath it (no overlap to flicker).
    box(og, fw + 2 * cs, cs, .02, 0, fh + cs / 2, cz, frameMat, 'opening:' + o.id, 'frames');
    for (const sx of [-1, 1]) box(og, cs, fh - .001, .02, sx * (fw / 2 + cs / 2), (fh - .001) / 2, cz, frameMat, 'opening:' + o.id, 'frames');
    // Frame: head, jambs and a sill or threshold.
    box(og, fw, fr, depth, 0, fh - fr / 2, 0, frameMat, 'opening:' + o.id, 'frames');
    for (const sx of [-1, 1]) box(og, fr, fh - fr - .001, depth, sx * (fw / 2 - fr / 2), (fh - fr) / 2, 0, frameMat, 'opening:' + o.id, 'frames');
    if (sp.group === 'window') {
      box(og, fw - 2 * fr - .002, fr, depth, 0, fr / 2, 0, frameMat, 'opening:' + o.id, 'frames');
      box(og, fw + .1, .035, .07, 0, -.0175, T / 2 + .035, frameMat, 'opening:' + o.id, 'frames', 'sill');
    } else box(og, fw - 2 * fr - .002, .02, depth, 0, .01, 0, steel, 'opening:' + o.id, 'frames');
    const iwid = fw - 2 * fr, ih = fh - fr - (sp.group === 'window' ? fr : .02), iy = sp.group === 'window' ? fr : .02;
    const n = sp.leaves, lw = iwid / n;
    for (let i = 0; i < n; i++) {
      const lx = -iwid / 2 + lw * (i + .5);
      const slide = sp.kind === 'sliding';
      const zl = slide ? (i % 2 ? -.012 : .012) : 0;
      leaf(og, lx, iy, lw - .004, ih - .002, zl, i, n);
    }
    function leaf(parent, x, yb, w0, h0, zl, i, count) {
      const st = sp.kind === 'sliding' ? .055 : .07, rail = .07, bottom = sp.group === 'door' ? .13 : .07;
      const lg = group(parent, 'opening:' + o.id);
      lg.position.set(x, yb, zl);
      const dz = .045;
      box(lg, w0, rail, dz, 0, h0 - rail / 2, 0, frameMat, 'opening:' + o.id, 'leaves');
      box(lg, w0, bottom, dz, 0, bottom / 2, 0, frameMat, 'opening:' + o.id, 'leaves');
      for (const sx of [-1, 1]) box(lg, st, h0 - rail - bottom - .002, dz, sx * (w0 / 2 - st / 2), bottom + (h0 - rail - bottom) / 2, 0, frameMat, 'opening:' + o.id, 'leaves');
      const gw = w0 - 2 * st - .002, open = h0 - rail - bottom - .002;
      const panelH = sp.group === 'door' ? open * (sp.panel ?? 0) : 0;
      const glassH = sp.group === 'door' && sp.glass === 0 ? 0 : open - panelH - (panelH ? rail : 0);
      if (panelH > .01) {
        // Boarded lower panel (vertical boards in the frame).
        const pp = box(lg, gw, panelH, .022, 0, bottom + panelH / 2, 0, frameMat, 'opening:' + o.id, 'leaves', 'panel');
        void pp;
        for (let b = 1; b < Math.round(gw / .09); b++) box(lg, .006, panelH - .02, .004, -gw / 2 + b * gw / Math.round(gw / .09), bottom + panelH / 2, .013, std('#000000', {transparent: true, opacity: .25, depthWrite: false}), 'opening:' + o.id, 'leaves');
        if (glassH > .01) box(lg, gw, rail, dz, 0, bottom + panelH + rail / 2, 0, frameMat, 'opening:' + o.id, 'leaves');
      }
      if (glassH > .01) {
        const gy = h0 - rail - glassH / 2 - .001;
        if (sp.strips) {
          // MG01: frosted strips between rails.
          const k = sp.strips, sh = glassH / k;
          for (let j = 0; j < k; j++) {
            add(lg, new THREE.PlaneGeometry(gw, sh - .07), frosted, 0, h0 - rail - sh * (j + .5), 0, 'opening:' + o.id, 'glass');
            if (j < k - 1) box(lg, gw, .07, dz * .8, 0, h0 - rail - sh * (j + 1), 0, frameMat, 'opening:' + o.id, 'leaves');
          }
        } else {
          add(lg, new THREE.PlaneGeometry(gw, glassH), o.glass === 'frosted' ? frosted : glass, 0, gy, 0, 'opening:' + o.id, 'glass');
          if (sp.bars) {
            const [cols, rows] = sp.bars;
            for (let b = 1; b < cols; b++) box(lg, .022, glassH, .018, -gw / 2 + gw * b / cols, gy, .012, frameMat, 'opening:' + o.id, 'bars');
            // Rails thinner than the uprights, so their faces never share a plane where they cross.
            for (let b = 1; b < rows; b++) box(lg, gw, .022, .012, 0, gy - glassH / 2 + glassH * b / rows, .012, frameMat, 'opening:' + o.id, 'bars');
          }
        }
      } else if (!panelH) {
        box(lg, gw, open, .022, 0, bottom + open / 2, 0, frameMat, 'opening:' + o.id, 'leaves', 'panel');
      }
      // Handle: on the meeting stile of doors and opening windows.
      if (sp.kind !== 'fixed' && (count === 1 || i === Math.floor(count / 2) - (count % 2 ? 0 : 1) || sp.kind === 'sliding' && i === 1)) {
        const hx = count === 1 ? w0 / 2 - st / 2 : w0 / 2 - st / 2;
        box(lg, .02, sp.group === 'door' ? .22 : .12, .03, hx, sp.group === 'door' ? Math.min(1.05, h0 * .52) : h0 / 2, dz / 2 + .02, chrome, 'opening:' + o.id, 'handles');
      }
    }
  }

  root.traverse(o => { if (o.isMesh && o.material === glass) o.castShadow = false; });
  return {group: root, lights, materials, room};
}
