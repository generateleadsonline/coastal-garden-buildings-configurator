// Procedural material textures, drawn on canvases at runtime: no image downloads. Each surface
// gets a colour map and a normal map derived from a height map, so log courses, board joints,
// shingle tabs and grain catch the light. Geometry UVs are in metres and every tile is drawn at
// the real size of the timber it shows (Lugarde 44mm logs at 145mm courses, Prima and Pro
// boards at 120mm, Premium Triple Rhombus slats at 68mm), so boards are true to scale.
// Adapted from the SMART configurator's textures (same memory rules: canvases freed on upload,
// half-size on phones, flat colour if a canvas cannot be drawn).
import * as THREE from 'three';

const PX = 1024;

function seeded(seed) {
  let s = seed >>> 0 || 1;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
function hashSeed(text) {
  let h = 2166136261;
  for (const c of String(text)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return h >>> 0;
}
const clamp = (v, a = 0, b = 255) => Math.max(a, Math.min(b, v));
export function rgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function shade([r, g, b], f, warm = 0) {
  return `rgb(${clamp(r * f + warm)},${clamp(g * f)},${clamp(b * f - warm)})`;
}
/** A treatment over spruce: transparent finishes tint the wood, opaque stains cover it. */
export function finishColour(finish) {
  const wood = rgb('#d6b487');
  if (!finish || finish.opaque) return finish ? rgb(finish.hex) : wood;
  const t = rgb(finish.hex), a = finish.strength ?? .7;
  return wood.map((v, i) => Math.round(v * (1 - a) + t[i] * a));
}

function normalFrom(height, strength) {
  const w = height.width, h = height.height;
  const src = height.getContext('2d').getImageData(0, 0, w, h).data;
  const out = document.createElement('canvas'); out.width = w; out.height = h;
  const ctx = out.getContext('2d');
  if (!ctx) throw new Error('2D canvas unavailable');
  const img = ctx.createImageData(w, h), d = img.data;
  const at = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x - 1, y) + at(x - 1, y + 1));
      const dy = (at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x, y - 1) + at(x + 1, y - 1));
      const nx = -dx * strength, ny = dy * strength, nz = 1, len = Math.hypot(nx, ny, nz), i = (y * w + x) * 4;
      d[i] = (nx / len * .5 + .5) * 255; d[i + 1] = (ny / len * .5 + .5) * 255; d[i + 2] = (nz / len * .5 + .5) * 255; d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return out;
}
function speckle(c, amount, seed) {
  const ctx = c.getContext('2d'), img = ctx.getImageData(0, 0, c.width, c.height), d = img.data, rand = seeded(seed);
  for (let i = 0; i < d.length; i += 4) {
    const n = (rand() - .5) * amount;
    d[i] = clamp(d[i] + n); d[i + 1] = clamp(d[i + 1] + n); d[i + 2] = clamp(d[i + 2] + n);
  }
  ctx.putImageData(img, 0, 0);
}
/** Grain running along a board (horizontal in the canvas) between y0 and y1. */
function grain(ctx, y0, y1, W, rand, base, o) {
  const height = y1 - y0;
  for (let i = 0; i < o.lines; i++) {
    const ys = y0 + rand() * height, dark = rand() < .65;
    const f = dark ? 1 - o.contrast * (.4 + rand() * .6) : 1 + o.contrast * .5 * rand();
    ctx.strokeStyle = shade(base, f, o.warm || 0);
    ctx.globalAlpha = (.1 + rand() * .28) * (o.alpha ?? 1);
    ctx.lineWidth = .6 + rand() * (dark ? 2.4 : 1.4);
    const k1 = 1 + Math.floor(rand() * 2), k2 = 2 + Math.floor(rand() * 4), a1 = rand() * o.wave, a2 = rand() * o.wave * .35;
    const p1 = rand() * 6.283, p2 = rand() * 6.283;
    ctx.beginPath();
    for (let x = 0; x <= W; x += 8) {
      const y = ys + a1 * Math.sin(6.283 * k1 * x / W + p1) + a2 * Math.sin(6.283 * k2 * x / W + p2);
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}
function knot(ctx, hctx, x, y, W, rand, base, size) {
  for (const xx of [x, x - W, x + W]) {
    const rx = size * (1.4 + rand() * .8), ry = size * (.6 + rand() * .4);
    const g = ctx.createRadialGradient(xx, y, 0, xx, y, rx * 1.4);
    g.addColorStop(0, shade(base, .5)); g.addColorStop(.45, shade(base, .7)); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(xx, y, rx * 1.4, ry * 1.4, 0, 0, 6.283); ctx.fill();
    if (hctx) { hctx.fillStyle = 'rgba(0,0,0,.15)'; hctx.beginPath(); hctx.ellipse(xx, y, rx, ry, 0, 0, 6.283); hctx.fill(); }
  }
}

// Timber profiles, in metres. Board faces measured against Lugarde's drawings and photos:
// log courses ~145mm (14 courses to a 2.04m log wall), Prima/Pro tongue-and-groove ~120mm,
// Swedish rebate ~130mm with a shadow line, Triple Rhombus slats 68mm with 12mm gaps.
export const PROFILES = {
  log: {course: .1456, rounded: true, lines: 26, contrast: .26, wave: 4, knots: .5, normal: 4.2, roughness: .78},
  tg: {course: .12, groove: .006, lines: 20, contrast: .22, wave: 3, knots: .45, normal: 3.4, roughness: .74},
  rebate: {course: .13, groove: .004, lap: true, lines: 20, contrast: .22, wave: 3, knots: .35, normal: 3.6, roughness: .74},
  rhombus: {course: .08, slat: .068, vertical: true, lines: 14, contrast: .25, wave: 2, knots: .2, normal: 4.4, roughness: .7},
  vtg: {course: .12, groove: .006, vertical: true, lines: 20, contrast: .22, wave: 3, knots: .35, normal: 3.2, roughness: .74},
  // Laminated posts: vertical grain with a fine glue line between the lamellae.
  post: {course: .046, groove: .0015, vertical: true, lines: 10, contrast: .2, wave: 2, knots: .1, normal: 1.6, roughness: .72}
};

/** `scale` below 1 allocates every canvas at a fraction of its designed size (phones use .5). */
export function createTextures(renderer, {scale = 1, flat: flatOnly = false} = {}) {
  const cache = new Map();
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const k = scale;
  let gen = 0, failures = 0;
  const canvas = (w, h = w) => {
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(w * k)); c.height = Math.max(1, Math.round(h * k));
    const ctx = c.getContext('2d');
    // iOS Safari returns null once a site's canvases pass its memory budget.
    if (!ctx) throw new Error('2D canvas unavailable');
    if (k !== 1) ctx.scale(k, k);
    return c;
  };
  // Zero-size canvases give their memory back at once (iPhones count every live canvas).
  const free = c => { c.width = c.height = 0; };
  const normal = (h, strength) => { const n = normalFrom(h, strength * k); free(h); return n; };
  const make = (c, colour = true) => {
    const t = new THREE.CanvasTexture(c);
    if (colour) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = anisotropy;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.onUpdate = () => { t.onUpdate = null; free(c); };
    return t;
  };
  const flat = hex => {
    const t = new THREE.DataTexture(new Uint8Array([...rgb(hex), 255]), 1, 1);
    t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true;
    t.userData.hex = hex;
    return {map: t, normalMap: null, roughness: .8, size: [1, 1]};
  };
  const memo = (key, hex, build) => {
    let entry = cache.get(key);
    if (!entry) {
      let value;
      if (flatOnly) value = flat(hex);
      else try { value = build(); } catch (err) { failures++; console.warn('Texture drawn flat:', key, err); value = flat(hex); }
      value.key = key;
      // The SVG renderer and the option sweep read these: the average colour and the source.
      if (value.map) { value.map.userData.hex = hex; value.map.userData.key = key; }
      entry = {value, used: gen};
      cache.set(key, entry);
    }
    entry.used = gen;
    return entry.value;
  };
  const release = pair => { for (const t of [pair.map, pair.normalMap]) t?.dispose(); };
  const set = (pair, sx, sy) => {
    for (const t of [pair.map, pair.normalMap].filter(Boolean)) t.repeat.set(1 / sx, 1 / sy);
    return {...pair, size: [sx, sy]};
  };
  const hexOf = c => '#' + c.map(v => clamp(Math.round(v)).toString(16).padStart(2, '0')).join('');

  /**
   * Walls: `profile` is a key of PROFILES, `finish` a treatment ({hex, opaque}). The canvas is
   * drawn with boards horizontal and rotated for vertical profiles. Tile = 8 courses x 2m.
   */
  function timber(profile, finish) {
    const base = finishColour(finish), opaque = Boolean(finish?.opaque);
    const hex = hexOf(base);
    return memo(`timber:${profile}:${hex}:${opaque}`, hex, () => {
      const o = PROFILES[profile];
      const courses = 8, tileH = o.course * courses, tileW = 2;
      const W = PX, H = PX, sy = H / tileH;
      const c = canvas(W, H), h = canvas(W, H), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      const rand = seeded(hashSeed(profile + hex));
      hctx.fillStyle = '#000'; hctx.fillRect(0, 0, W, H);
      ctx.fillStyle = shade(base, .5); ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < courses; i++) {
        const y0 = i * o.course * sy, y1 = y0 + (o.slat || o.course) * sy;
        const f = 1 + (rand() - .5) * (opaque ? .05 : .16);
        const b = base.map(v => v * f);
        ctx.fillStyle = shade(b, 1); ctx.fillRect(0, y0, W, y1 - y0);
        grain(ctx, y0, y1, W, rand, b, {...o, alpha: opaque ? .25 : 1, warm: opaque ? 0 : 4});
        if (o.knots && rand() < o.knots * (opaque ? .4 : 1)) knot(ctx, hctx, rand() * W, y0 + (y1 - y0) * (.3 + rand() * .4), W, rand, b, 4 + rand() * 5);
        // Butt joints: logs and boards come in lengths, offset course by course.
        if (rand() < .5) { const jx = rand() * W; ctx.fillStyle = shade(b, .55); ctx.fillRect(jx, y0, 2, y1 - y0); hctx.fillStyle = '#202020'; hctx.fillRect(jx, y0, 2, y1 - y0); }
        if (o.rounded) {
          // A log is rounded top and bottom: light on the crown, shadow into the joint.
          const g = hctx.createLinearGradient(0, y0, 0, y1);
          g.addColorStop(0, '#262626'); g.addColorStop(.18, '#c8c8c8'); g.addColorStop(.5, '#f2f2f2'); g.addColorStop(.82, '#c8c8c8'); g.addColorStop(1, '#262626');
          hctx.fillStyle = g; hctx.fillRect(0, y0, W, y1 - y0);
          const s = ctx.createLinearGradient(0, y0, 0, y1);
          s.addColorStop(0, 'rgba(0,0,0,.28)'); s.addColorStop(.2, 'rgba(0,0,0,0)'); s.addColorStop(.75, 'rgba(255,255,255,.05)'); s.addColorStop(1, 'rgba(0,0,0,.32)');
          ctx.fillStyle = s; ctx.fillRect(0, y0, W, y1 - y0);
        } else if (o.slat) {
          // Triple Rhombus: slanted faces either side of a flat front, a deep gap behind.
          const g = hctx.createLinearGradient(0, y0, 0, y1);
          g.addColorStop(0, '#404040'); g.addColorStop(.22, '#e8e8e8'); g.addColorStop(.78, '#e8e8e8'); g.addColorStop(1, '#404040');
          hctx.fillStyle = g; hctx.fillRect(0, y0, W, y1 - y0);
          ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(0, y1, W, (o.course - o.slat) * sy);
          ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.fillRect(0, y1 - (y1 - y0) * .18, W, (y1 - y0) * .18);
        } else {
          hctx.fillStyle = '#e8e8e8'; hctx.fillRect(0, y0 + 2, W, y1 - y0 - 4);
          if (o.lap) {
            // Swedish rebate: each board laps the one below, a shadow line under its edge.
            const g = hctx.createLinearGradient(0, y0, 0, y1);
            g.addColorStop(0, '#f6f6f6'); g.addColorStop(1, '#8a8a8a');
            hctx.fillStyle = g; hctx.fillRect(0, y0, W, y1 - y0);
            ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.fillRect(0, y1 - (y1 - y0) * .1, W, (y1 - y0) * .1);
          }
          const gw = Math.max(2, (o.groove || .004) * sy);
          ctx.fillStyle = shade(b, .42); ctx.fillRect(0, y1 - gw, W, gw);
          hctx.fillStyle = '#000'; hctx.fillRect(0, y1 - gw, W, gw);
        }
      }
      speckle(c, opaque ? 6 : 9, hashSeed(hex));
      let map = c, nrm = normal(h, o.normal);
      if (o.vertical) {
        // Rotate a quarter turn: boards run up the wall.
        const rot = cv => { const r = canvas(H, W), rc = r.getContext('2d'); rc.setTransform(k, 0, 0, k, 0, 0); rc.translate(H, 0); rc.rotate(Math.PI / 2); rc.drawImage(cv, 0, 0, W, H); free(cv); return r; };
        map = rot(c); nrm = rot(nrm);
        return set({map: make(map), normalMap: make(nrm, false), roughness: o.roughness}, tileH, tileW);
      }
      return set({map: make(map), normalMap: make(nrm, false), roughness: o.roughness}, tileW, tileH);
    });
  }

  /** Log end grain: growth rings and saw marks on the protruding corner ends. */
  function endGrain(finish) {
    const base = finishColour(finish), hex = hexOf(base.map(v => v * .86));
    return memo(`end:${hex}`, hex, () => {
      const c = canvas(256), ctx = c.getContext('2d'), rand = seeded(hashSeed('end' + hex));
      ctx.fillStyle = shade(base, .86); ctx.fillRect(0, 0, 256, 256);
      for (let r = 12; r < 360; r += 7 + rand() * 6) {
        ctx.strokeStyle = shade(base, .62 + rand() * .2); ctx.globalAlpha = .55; ctx.lineWidth = 1 + rand() * 1.5;
        ctx.beginPath(); ctx.arc(-40, 300, r, 0, 6.283); ctx.stroke();
      }
      ctx.globalAlpha = 1; speckle(c, 14, 3);
      return set({map: make(c), normalMap: null, roughness: .9}, .145, .145);
    });
  }

  /** Bitumen felt shingles (Lugarde's five colours) or the EPDM membrane of a flat roof. */
  function roof(kind, hex = '#2b2d2f') {
    return memo(`roof:${kind}:${hex}`, hex, () => {
      const rand = seeded(hashSeed(kind + hex)), base = rgb(hex);
      const c = canvas(512), h = canvas(512), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      if (kind === 'shingles') {
        // Hexagonal-cut tabs, 333mm wide and 143mm exposed, offset each course.
        ctx.fillStyle = shade(base, .55); ctx.fillRect(0, 0, 512, 512);
        hctx.fillStyle = '#000'; hctx.fillRect(0, 0, 512, 512);
        const rows = 7, tabs = 3, rh = 512 / rows, tw = 512 / tabs;
        for (let r = 0; r < rows; r++) {
          const off = (r % 2) * tw / 2;
          for (let t = -1; t <= tabs; t++) {
            const x = off + t * tw, f = .82 + rand() * .3, y = r * rh;
            ctx.fillStyle = shade(base, f); hctx.fillStyle = '#e0e0e0';
            for (const k2 of [ctx, hctx]) {
              k2.beginPath(); k2.moveTo(x + 3, y); k2.lineTo(x + tw - 3, y); k2.lineTo(x + tw - 3, y + rh * .72);
              k2.lineTo(x + tw / 2, y + rh - 2); k2.lineTo(x + 3, y + rh * .72); k2.closePath(); k2.fill();
            }
            const g = hctx.createLinearGradient(0, y, 0, y + rh);
            g.addColorStop(0, 'rgba(0,0,0,.45)'); g.addColorStop(1, 'rgba(0,0,0,0)');
            hctx.fillStyle = g; hctx.fillRect(x, y, tw, rh * .4);
          }
        }
        speckle(c, 34, 41);
        return set({map: make(c), normalMap: make(normal(h, 3.2), false), roughness: .94}, 1, .143 * rows);
      }
      ctx.fillStyle = hex; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 6000; i++) { ctx.fillStyle = `rgba(${rand() < .5 ? '0,0,0' : '110,112,114'},.16)`; ctx.fillRect(rand() * 512, rand() * 512, 2, 2); }
      hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 512, 512); speckle(h, 30, 3);
      return set({map: make(c), normalMap: make(normal(h, 1), false), roughness: .86}, 1.2, 1.2);
    });
  }

  /** The internal floor: 19mm spruce planks with staggered butt joints. */
  function floor(finish) {
    const base = finishColour(finish), hex = hexOf(base);
    return memo(`floor:${hex}`, hex, () => {
      const rand = seeded(hashSeed('floor' + hex));
      const c = canvas(PX), h = canvas(PX), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      const rows = 8, plankW = .12, plankL = 2.4, tileX = plankL, tileY = plankW * rows, sx = PX / tileX, sy = PX / tileY;
      hctx.fillStyle = '#000'; hctx.fillRect(0, 0, PX, PX);
      for (let r = 0; r < rows; r++) {
        const offset = (r * .41 % 1) * plankL;
        for (let k2 = -1; k2 < 2; k2++) {
          const x0 = (offset + k2 * plankL) * sx, y0 = r * plankW * sy, w = plankL * sx, hh = plankW * sy;
          const f = 1 + (rand() - .5) * .14, b = base.map(v => v * f);
          ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, w, hh); ctx.clip();
          ctx.fillStyle = shade(b, 1); ctx.fillRect(x0, y0, w, hh);
          ctx.translate(x0, 0); grain(ctx, y0, y0 + hh, w, rand, b, {lines: 14, contrast: .22, wave: 3});
          ctx.restore();
          hctx.fillStyle = '#e4e4e4'; hctx.fillRect(x0 + 2, y0 + 2, w - 4, hh - 4);
          ctx.fillStyle = shade(b, .55); ctx.fillRect(x0, y0, w, 1.4); ctx.fillRect(x0, y0, 1.4, hh);
        }
      }
      speckle(c, 7, 5);
      return set({map: make(c), normalMap: make(normal(h, 1.8), false), roughness: .62}, tileX, tileY);
    });
  }

  function lawn() {
    return memo('lawn', '#6a8649', () => {
      const rand = seeded(17), c = canvas(PX), ctx = c.getContext('2d');
      ctx.fillStyle = '#6a8649'; ctx.fillRect(0, 0, PX, PX);
      for (let i = 0; i < 90000; i++) {
        const g = rand();
        ctx.fillStyle = g < .45 ? 'rgba(46,72,30,.55)' : g < .85 ? 'rgba(125,152,86,.5)' : 'rgba(170,180,110,.45)';
        ctx.fillRect(rand() * PX, rand() * PX, 1.3, 2.6 + rand() * 3);
      }
      const h = canvas(512); h.getContext('2d').fillStyle = '#808080'; h.getContext('2d').fillRect(0, 0, 512, 512); speckle(h, 90, 21);
      return set({map: make(c), normalMap: make(normal(h, 1.4), false), roughness: .95}, 3, 3);
    });
  }
  /** Sandstone paving, as on Coastal's own install photos. */
  function paving() {
    return memo('paving', '#cdbf9f', () => {
      const rand = seeded(5), c = canvas(512), h = canvas(512), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      ctx.fillStyle = '#8f8573'; ctx.fillRect(0, 0, 512, 512); hctx.fillStyle = '#000'; hctx.fillRect(0, 0, 512, 512);
      const n = 2, s = 512 / n;
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        const f = .9 + rand() * .16;
        ctx.fillStyle = `rgb(${214 * f},${198 * f},${166 * f})`; ctx.fillRect(i * s + 3, j * s + 3, s - 6, s - 6);
        hctx.fillStyle = '#d8d8d8'; hctx.fillRect(i * s + 3, j * s + 3, s - 6, s - 6);
      }
      speckle(c, 22, 8); speckle(h, 40, 9);
      return set({map: make(c), normalMap: make(normal(h, 2), false), roughness: .9}, 1.2, 1.2);
    });
  }
  function gravel() {
    return memo('gravel', '#b5ab97', () => {
      const rand = seeded(23), c = canvas(512), h = canvas(512), ctx = c.getContext('2d'), hctx = h.getContext('2d');
      ctx.fillStyle = '#b5ab97'; ctx.fillRect(0, 0, 512, 512); hctx.fillStyle = '#202020'; hctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 9000; i++) {
        const x = rand() * 512, y = rand() * 512, r = 1.5 + rand() * 3.5, f = .7 + rand() * .5;
        ctx.fillStyle = `rgb(${205 * f},${194 * f},${172 * f})`; ctx.beginPath(); ctx.ellipse(x, y, r, r * .8, rand() * 3, 0, 6.283); ctx.fill();
        hctx.fillStyle = `rgb(${200 * f},${200 * f},${200 * f})`; hctx.beginPath(); hctx.ellipse(x, y, r, r * .8, 0, 0, 6.283); hctx.fill();
      }
      return set({map: make(c), normalMap: make(normal(h, 2.2), false), roughness: 1}, .8, .8);
    });
  }

  return {
    timber, endGrain, roof, floor, lawn, paving, gravel,
    begin() { gen++; },
    prune(limit) {
      const old = [...cache].filter(([key, e]) => e.used < gen && key !== 'lawn').sort((a, b) => a[1].used - b[1].used);
      for (const [key, e] of old) {
        if (cache.size <= limit) break;
        release(e.value); cache.delete(key);
      }
    },
    stats: () => ({textures: cache.size, failures, scale: k}),
    dispose() { for (const e of cache.values()) release(e.value); cache.clear(); }
  };
}
