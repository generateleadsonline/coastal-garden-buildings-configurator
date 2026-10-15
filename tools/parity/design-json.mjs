// Turns one of our designs into Lugarde's own 2D design JSON, starting from a template's JSON:
// resizes the room (keeping the roof overhang), rebuilds the canopy on the chosen side, sets the
// wall thickness and slope, and places doors and windows as Lugarde insets.
// Lugarde plan coordinates: x to the right, y towards the front (the front wall is y max), in mm.
// Log Cabin and Prima walls run on the nominal outside size; Pro walls run on post centres
// (outside size less 140mm).
import {OPENINGS} from '../../src/configurator-data.js';
import {proPosts} from '../../src/lugarde-cart.js';

const clone = o => JSON.parse(JSON.stringify(o));
const P = (x, y) => ({$class: 'Point', x: Math.round(x), y: Math.round(y)});
const isMain = r => r.$class === 'Room' && r.walls.items.every(w => w.type !== 'none' && w.type !== 'invisible');

export function toLugardeJSON(base, d) {
  const j = clone(base);
  const f0 = j.floors.items[0];
  const main = f0.rooms.items.find(isMain);
  const xs = main.walls.items.flatMap(w => [w.p1.x, w.p2.x]), ys = main.walls.items.flatMap(w => [w.p1.y, w.p2.y]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const pro = d.range === 'pro';
  const W = Math.round(d.width * 1000) - (pro ? 140 : 0), D = Math.round(d.depth * 1000) - (pro ? 140 : 0);
  // 1. Drop any canopy the template had: its rooms, its posts, and roof points beyond the room.
  const canopyTemplate = f0.rooms.items.find(r => !isMain(r) && r.$class === 'Room') || null;
  const poleTemplate = f0.poles.items.find(p => p.type === 'a') || null;
  f0.rooms.items = f0.rooms.items.filter(isMain);
  f0.poles.items = f0.poles.items.filter(p => p.type !== 'a');
  // 2. Resize: points on or inside the room scale; points outside move with the nearest edge.
  const mx = x => (x <= x0 ? x : x >= x1 ? x0 + W + (x - x1) : x0 + (x - x0) * W / (x1 - x0));
  const my = y => (y <= y0 ? y : y >= y1 ? y0 + D + (y - y1) : y0 + (y - y0) * D / (y1 - y0));
  const walk = o => {
    if (Array.isArray(o)) return o.forEach(walk);
    if (o && typeof o === 'object') {
      if (o.$class === 'Point') { o.x = Math.round(mx(o.x)); o.y = Math.round(my(o.y)); return; }
      for (const k of Object.keys(o)) walk(o[k]);
    }
  };
  walk(j.floors);
  const X0 = x0, X1 = x0 + W, Y0 = y0, Y1 = y0 + D;
  // 3. System settings.
  j.system.wallThickness = d.thickness;
  for (const w of main.walls.items) w.thickness = d.thickness;
  if (d.slope) j.system.roofSlope = d.slope;
  j.system.addedHeight = (d.raise || 0) * 135;
  j.system.bounds = {$class: 'Rectangle', x: X0, y: Y0, width: W, height: D};
  // Pro: long walls get intermediate posts (panels of at most 3.5m outside, 3360mm on centres).
  // Pro: intermediate posts exactly where our builder puts them (equal panels on 100mm steps, never
  // in an opening), so both sides price the same panels.
  if (pro) {
    for (const w of main.walls.items) w.extraPoleAmount = 0;
    const corner = f0.poles.items.find(p => p.type === 'd');
    f0.poles.items = f0.poles.items.filter(p => p.type !== 'c');
    const posts = proPosts({...d, openings: d.openings || [], canopy: d.canopy || {side: 'none'}});
    const start = {back: [X0, Y0, 1, 0], right: [X1, Y0, 0, 1], front: [X1, Y1, -1, 0], left: [X0, Y1, 0, -1]};
    for (const [wall, list] of Object.entries(posts)) for (const along of list) {
      const [sx, sy, ux, uy] = start[wall], pole = clone(corner);
      const pt = P(sx + ux * along, sy + uy * along);
      pole.type = 'c'; pole.position = pt; pole.originPoint = clone(pt); pole.rawPosition = clone(pt);
      f0.poles.items.push(pole);
    }
  }
  // 4. Canopy on the chosen side, using the template's canopy walls as the pattern.
  if (d.canopy && d.canopy.side !== 'none') {
    if (!canopyTemplate) throw new Error(`base ${d.base} has no canopy pattern`);
    const c = Math.round(d.canopy.depth * 1000) - (pro ? 0 : 0);
    const room = clone(canopyTemplate);
    const pattern = room.walls.items;
    const none = pattern.find(w => w.type === 'none'), inv = pattern.find(w => w.type === 'invisible');
    const wall = (type, a, b) => ({...clone(type === 'invisible' ? inv : none), p1: P(...a), p2: P(...b), insets: {$class: 'Array', items: []}});
    let rect;
    if (d.canopy.side === 'right') rect = [[X1, Y0], [X1 + c, Y0], [X1 + c, Y1], [X1, Y1]];
    else if (d.canopy.side === 'left') rect = [[X0 - c, Y0], [X0, Y0], [X0, Y1], [X0 - c, Y1]];
    else rect = [[X0, Y1], [X1, Y1], [X1, Y1 + c], [X0, Y1 + c]];
    // Walls clockwise; the one shared with the room is invisible.
    const shared = d.canopy.side === 'right' ? 3 : d.canopy.side === 'left' ? 1 : 0;
    room.walls.items = rect.map((a, i) => wall(i === shared ? 'invisible' : 'none', a, rect[(i + 1) % 4]));
    f0.rooms.items.push(room);
    // Posts at the canopy's two free corners, set in from the corner as the template's are.
    if (poleTemplate) {
      const inset = Math.abs(poleTemplate.position.x - poleTemplate.rawPosition.x);
      const cx = (rect[0][0] + rect[2][0]) / 2, cy = (rect[0][1] + rect[2][1]) / 2;
      const free = rect.filter((pt, i) => i !== shared && i !== (shared + 1) % 4);
      for (const [x, y] of free) {
        const pole = clone(poleTemplate);
        const px = x + Math.sign(cx - x) * inset, py = y + Math.sign(cy - y) * inset;
        pole.position = P(px, py); pole.originPoint = P(px, py); pole.rawPosition = P(x, y);
        f0.poles.items.push(pole);
      }
    }
  }
  // 5. Doors and windows as insets on the room's walls.
  for (const w of main.walls.items) w.insets = {$class: 'Array', items: []};
  const sideOf = w => (w.p1.y === Y0 && w.p2.y === Y0 ? 'back' : w.p1.y === Y1 && w.p2.y === Y1 ? 'front' : w.p1.x === X0 && w.p2.x === X0 ? 'left' : 'right');
  const rotation = {front: 180, right: 90, back: 0, left: -90};
  for (const o of d.openings || []) {
    const s = OPENINGS[o.type];
    const w = main.walls.items.find(x => sideOf(x) === o.wall);
    if (!w) continue;
    // p runs from the wall's left end as seen from outside: front x0→x1, right y1→y0, back x1→x0, left y0→y1.
    const t = o.p;
    const pos = o.wall === 'front' ? [X0 + t * W, Y1] : o.wall === 'back' ? [X1 - t * W, Y0] : o.wall === 'left' ? [X0, Y0 + t * D] : [X1, Y1 - t * D];
    w.insets.items.push({
      $class: 'Inset', product: {$class: 'Product', identifier: s.product, name: s.code.replace(/[ ()]/g, ''), type: s.group, width: Math.round(s.fw * 1000), height: Math.round(s.fh * 1000)},
      position: P(...pos), rotation: rotation[o.wall], margin: {$class: 'Object', top: 0, right: 20, bottom: 0, left: 20},
      horizontal: 'center', vertical: 'bottom', hingeLeft: true, outwards: true, justified: true, opposite_direction_on_outer_edge: false,
      safetyglass: false, clearglass: false, hasWeatherStrips: false, glasslock: false
    });
  }
  return j;
}
