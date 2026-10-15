// The design: what a shopper has chosen, kept valid against what Lugarde sells, priced from the
// captured price book. Pure functions, shared by the page, the PDF and the Netlify function.
import {RANGES, ROOFS, SHINGLES, TRIMS, FINISHES, PRODUCTS, EXTRAS, TRANSPORT, PROMO, VAT_RATE} from './catalog.js';

export const DEFAULT = {
  v: 2, range: 'log', width: 4, depth: 3, wall: 44, roof: 'flat', shingles: 'black', trim: 'silver', finish: 'none',
  openings: [
    {id: 'd1', code: 'pe45h', wall: 'front', at: 0},
    {id: 'w1', code: 'pj07', wall: 'front', at: -1.15},
    {id: 'w2', code: 'pj07', wall: 'front', at: 1.15}
  ],
  canopy: {side: 'none', width: 0},
  extras: {floor: true},
  quoted: {}
};

const round = (v, step, origin = 0) => +(Math.round((v - origin) / step) * step + origin).toFixed(3);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/** The size limits [min, max, step] for a range, wall and roof. */
export function limits(range, wall, roof) {
  const r = RANGES[range];
  const pick = spec => Array.isArray(spec) ? spec : spec[wall] || spec[roof] || Object.values(spec)[0];
  return {width: pick(r.width), depth: pick(r.depth)};
}
export function sizes(range, wall, roof, axis) {
  const [a, b, s] = limits(range, wall, roof)[axis];
  const out = [];
  for (let v = a; v <= b + 1e-6; v += s) out.push(+v.toFixed(3));
  return out;
}

/** Wall clear spans for doors and windows, and the room they leave between posts. */
export function spanOf(d, wall) {
  const t = d.wall / 1000, post = d.range === 'prima' ? .09 : d.range === 'pro' ? .14 : 0;
  const len = wall === 'front' || wall === 'back' ? d.width : d.depth;
  const inset = Math.max(t, post) + .1;
  return {len, from: -len / 2 + inset, to: len / 2 - inset};
}
/** Pro's intermediate posts (none on walls up to 3m), as offsets from the wall centre. */
export function proPosts(len) {
  const n = Math.max(1, Math.ceil((len - .001) / 3));
  return Array.from({length: n - 1}, (_, i) => +(-len / 2 + len * (i + 1) / n).toFixed(3));
}

/**
 * Returns a valid design and a list of what had to change. Unknown input falls back to the
 * defaults; sizes snap to the range's grid; doors and windows that no longer fit move along
 * their wall, and come off only when the wall has no room left.
 */
export function normalise(input = {}, previous = null) {
  const notes = [];
  const src = input && typeof input === 'object' ? input : {};
  const d = JSON.parse(JSON.stringify(DEFAULT));
  d.range = RANGES[src.range] ? src.range : (previous?.range || DEFAULT.range);
  const R = RANGES[d.range];
  d.wall = R.walls.includes(+src.wall) ? +src.wall : R.wall;
  d.roof = R.roofs.includes(src.roof) ? src.roof : R.roof;
  if (src.roof && src.roof !== d.roof) notes.push(`${ROOFS[src.roof]?.name || 'That roof'} is not made in the ${R.name} range, so it has a ${ROOFS[d.roof].name.toLowerCase()}.`);
  if (src.wall && +src.wall !== d.wall) notes.push(`${R.name}s come in ${R.walls.join(' or ')}mm walls.`);
  const lim = limits(d.range, d.wall, d.roof);
  for (const axis of ['width', 'depth']) {
    const [a, b, s] = lim[axis];
    const want = Number.isFinite(+src[axis]) ? +src[axis] : DEFAULT[axis];
    d[axis] = clamp(round(want, s, a), a, b);
    if (Number.isFinite(+src[axis]) && Math.abs(d[axis] - +src[axis]) > 1e-6) notes.push(`The ${axis} is now ${d[axis].toFixed(1)}m, the nearest size Lugarde makes in this range.`);
  }
  d.shingles = SHINGLES[src.shingles] ? src.shingles : DEFAULT.shingles;
  d.trim = TRIMS[src.trim] ? src.trim : DEFAULT.trim;
  d.finish = FINISHES[src.finish] && (src.finish === 'none' || R.treatments.includes(FINISHES[src.finish].group)) ? src.finish : 'none';
  // Extras: only known ones, only where the range and roof allow them.
  d.extras = {};
  for (const [k, v] of Object.entries(src.extras || DEFAULT.extras)) {
    const x = EXTRAS[k];
    if (!x || !v || x.price === 'quoted') continue;
    if (x.range && !x.range.includes(d.range)) continue;
    if (x.roofs && !x.roofs.includes(d.roof)) continue;
    d.extras[k] = true;
  }
  if (d.extras.floorIns && !d.extras.floor) { delete d.extras.floorIns; notes.push('Floor insulation goes under the timber floor, so it needs the floor too.'); }
  d.quoted = {};
  for (const [k, v] of Object.entries(src.quoted || {})) if (EXTRAS[k]?.price === 'quoted' && v) d.quoted[k] = true;
  // Canopy: none for now unless priced (see pricebook); kept for share-link compatibility.
  d.canopy = {side: 'none', width: 0};
  // Openings.
  const list = Array.isArray(src.openings) ? src.openings : (src.openings === undefined ? DEFAULT.openings : []);
  d.openings = fitOpenings(d, list, notes);
  if (!d.openings.some(o => PRODUCTS[o.code].kind === 'door')) {
    const door = fitOpenings(d, [{id: 'd1', code: 'pe45h', wall: 'front', at: 0}, ...d.openings], []);
    if (door.some(o => o.id === 'd1')) { d.openings = door; notes.push('Every building needs a door, so a pair of PE45 (H) doors has gone on the front.'); }
  }
  return {design: d, notes};
}

/** Keeps each opening on its wall's clear span, clear of the others and of Pro posts. */
export function fitOpenings(d, list, notes = []) {
  const out = [];
  const used = new Set();
  for (const raw of list.slice(0, 16)) {
    const p = PRODUCTS[raw?.code];
    if (!p || !['front', 'back', 'left', 'right'].includes(raw.wall)) continue;
    let id = String(raw.id || '').replace(/[^a-z0-9]/gi, '').slice(0, 8) || `o${out.length + 1}`;
    while (used.has(id)) id += 'x';
    const span = spanOf(d, raw.wall), w = p.w / 1000;
    if (span.to - span.from < w) { notes.push(`The ${p.name} is too wide for the ${raw.wall} wall at this size, so it has come off.`); continue; }
    const others = out.filter(o => o.wall === raw.wall).map(o => [o.at - PRODUCTS[o.code].w / 2000 - .1, o.at + PRODUCTS[o.code].w / 2000 + .1]);
    if (d.range === 'pro') for (const x of proPosts(span.len)) others.push([x - .07 - .05, x + .07 + .05]);
    const want = clamp(Number.isFinite(+raw.at) ? +raw.at : 0, span.from + w / 2, span.to - w / 2);
    const at = place(want, w, span, others);
    if (at === null) { notes.push(`There is no room left on the ${raw.wall} wall for the ${p.name}, so it has come off.`); continue; }
    if (Math.abs(at - (+raw.at || 0)) > .051) notes.push(`The ${p.name} has moved along the ${raw.wall} wall to fit.`);
    used.add(id);
    out.push({id, code: raw.code, wall: raw.wall, at: +at.toFixed(3)});
  }
  return out;
}
// Nearest position to `want` (in 50mm steps) where an opening of width w overlaps nothing.
function place(want, w, span, blocks) {
  const lo = span.from + w / 2, hi = span.to - w / 2;
  const free = x => blocks.every(([a, b]) => x + w / 2 <= a + 1e-6 || x - w / 2 >= b - 1e-6);
  if (free(want)) return want;
  for (let k = 1; k < 400; k++) {
    for (const x of [want + k * .05, want - k * .05]) if (x >= lo - 1e-6 && x <= hi + 1e-6 && free(x)) return x;
  }
  return null;
}

// ---- Share links: a compact, versioned code in the URL hash -----------------------------
export function encode(d) {
  const ex = Object.keys(d.extras).sort().join('.');
  const q = Object.keys(d.quoted || {}).sort().join('.');
  const op = d.openings.map(o => `${o.wall[0]}${o.code}${Math.round(o.at * 1000)}`).join('_');
  const parts = [2, d.range, Math.round(d.width * 1000), Math.round(d.depth * 1000), d.wall, d.roof, d.shingles, d.trim, d.finish, op, ex, q];
  return parts.join('~');
}
export function decode(code) {
  try {
    const p = String(code).split('~');
    if (p[0] !== '2') return null;
    const walls = {f: 'front', b: 'back', l: 'left', r: 'right'};
    const openings = (p[9] || '').split('_').filter(Boolean).map((s, i) => {
      const m = /^([fblr])([a-z0-9]+?)(-?\d+)$/.exec(s);
      return m ? {id: `o${i + 1}`, wall: walls[m[1]], code: m[2], at: +m[3] / 1000} : null;
    }).filter(Boolean);
    const set = s => Object.fromEntries((s || '').split('.').filter(Boolean).map(k => [k, true]));
    return normalise({range: p[1], width: +p[2] / 1000, depth: +p[3] / 1000, wall: +p[4], roof: p[5], shingles: p[6], trim: p[7], finish: p[8], openings, extras: set(p[10]), quoted: set(p[11])}).design;
  } catch { return null; }
}
export function designLink(d, origin = 'https://coastal-garden-buildings-configurator.netlify.app/') {
  return `${origin.replace(/#.*$/, '').replace(/\?.*$/, '')}#d=${encodeURIComponent(encode(d))}`;
}

// ---- Prices --------------------------------------------------------------------------------
/** The price book key for a design: sizes are stored with the longer side first. */
export function bookKey(d) {
  const a = Math.round(Math.max(d.width, d.depth) * 1000), b = Math.round(Math.min(d.width, d.depth) * 1000);
  return `${d.range}|${d.roof}|${d.wall}|${a}x${b}`;
}
export const promoActive = (now = new Date()) => now.getTime() <= Date.parse(PROMO.until);

/**
 * Lugarde's price for a design, line by line, including VAT as their cart does. `book` is the
 * captured price book. Returns null for a size the book does not hold (never estimated).
 */
export function priceFor(d, book, now = new Date()) {
  const entry = book?.entries?.[bookKey(d)];
  if (!entry) return null;
  const lines = [];
  const add = (key, label, amount, group, note) => { if (amount) lines.push({key, label, amount: +amount.toFixed(2), group, note}); };
  for (const l of entry.structure) add(l.key, l.title, l.total, 'building');
  for (const o of d.openings) add(`opening:${o.id}`, `${PRODUCTS[o.code].name} (${o.wall})`, PRODUCTS[o.code].price, 'openings');
  const fin = FINISHES[d.finish];
  if (fin.group === 'spray') add('finish', `Spray pre-treatment: ${fin.name.toLowerCase()}`, entry.spray, 'finish');
  if (d.trim === 'black' && d.roof === 'flat') add('trim', 'Black aluminium roof trim', entry.trimBlack, 'finish');
  for (const [k, on] of Object.entries(d.extras)) {
    if (!on) continue;
    const x = EXTRAS[k];
    const amount = typeof x.price === 'number' ? x.price : entry[x.price];
    if (amount == null) return null;
    add(k, x.name, amount, 'extras', x.note);
  }
  const products = lines.reduce((s, l) => s + l.amount, 0);
  const transport = TRANSPORT;
  const promo = promoActive(now) ? -Math.round(products * PROMO.rate * 100) / 100 : 0;
  const total = +(products + transport + promo).toFixed(2);
  const vat = +(total - total / (1 + VAT_RATE)).toFixed(2);
  const quoted = Object.keys(d.quoted || {}).filter(k => d.quoted[k]).map(k => ({key: k, label: EXTRAS[k].name, note: EXTRAS[k].note || 'Quoted by Coastal'}));
  return {lines, products: +products.toFixed(2), transport, promo, promoLabel: promo ? PROMO.label : null, total, vat, list: +(products + transport).toFixed(2), quoted, source: book.source, captured: book.captured};
}

export const money = (n, pence = true) => '£' + Number(n).toLocaleString('en-GB', {minimumFractionDigits: pence ? 2 : 0, maximumFractionDigits: pence ? 2 : 0});

/** A plain-English specification, for the summary, the PDF and the enquiry. */
export function specification(d) {
  const R = RANGES[d.range], fin = FINISHES[d.finish];
  const rows = [
    ['Range', `${R.name} (${R.system})`],
    ['Size', `${d.width.toFixed(1)}m wide x ${d.depth.toFixed(1)}m deep, outside the walls (${(d.width * d.depth).toFixed(1)}m²)`],
    ['Walls', `${d.wall}mm ${d.range === 'log' ? 'interlocking logs' : 'tongue-and-groove spruce boards'}`],
    ['Roof', `${ROOFS[d.roof].name}${d.roof === 'flat' ? `, EPDM with ${TRIMS[d.trim].name.toLowerCase()} trims` : d.roof === 'pent' ? ', EPDM' : `, ${SHINGLES[d.shingles].name.toLowerCase()} felt shingles`}`],
    ['Treatment', fin.group === 'none' ? 'Untreated (supplied untreated as standard)' : `Spray pre-treatment, ${fin.name.toLowerCase()}`]
  ];
  for (const w of ['front', 'left', 'right', 'back']) {
    const list = d.openings.filter(o => o.wall === w);
    if (list.length) rows.push([`${w[0].toUpperCase()}${w.slice(1)} wall`, list.map(o => PRODUCTS[o.code].name).join(', ')]);
  }
  const ex = Object.keys(d.extras).filter(k => d.extras[k]).map(k => EXTRAS[k].name);
  rows.push(['Extras', ex.length ? ex.join(', ') : 'None']);
  const q = Object.keys(d.quoted || {}).filter(k => d.quoted[k]).map(k => EXTRAS[k].name);
  if (q.length) rows.push(['Ask Coastal to quote', q.join(', ')]);
  return rows;
}
