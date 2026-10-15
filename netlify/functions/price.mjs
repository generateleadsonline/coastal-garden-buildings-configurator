// POST /api/price: prices a design through Lugarde's own price engine, for Coastal's dealer account,
// exactly as Coastal's current Lugarde configurator (its dealer link) does (src/lugarde-cart.js builds the same
// request; tools/parity/ proves it). Read-only on Lugarde's side: the engine only calculates.
//
// Request: {design: <a design or share-link parameters>}. Response: {ok, total, lines, ...} with
// every amount in pence, as the engine returns it (VAT and delivery to mainland UK included,
// Lugarde's current offer applied). Anything the engine refuses or warns about returns
// {ok: false, reason}, never a guessed price.
import {buildCartRequest} from '../../src/lugarde-cart.js';
import {normalise, fromParams, sizePriceable} from '../../src/configurator-model.js';
import {DEALER_TOKEN, OPENINGS, RANGES} from '../../src/configurator-data.js';

const ENGINE = `https://lugarde-configurator.com/api/v1/cart/?dealerToken=${DEALER_TOKEN}`;
const MAX_BODY = 16384;
const TTL = 10 * 60 * 1000;
const cache = new Map();

const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: {'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff'}
});

// Same-origin only: the page on this site (production, deploy previews, local dev).
function originAllowed(req) {
  const origin = req.headers.get('origin');
  if (!origin) return true;
  try {
    const o = new URL(origin), self = new URL(req.url);
    if (o.host === self.host) return true;
    if (['localhost', '127.0.0.1'].includes(o.hostname)) return true;
    return /^([a-z0-9-]+--)?coastal-garden-buildings-configurator\.netlify\.app$/.test(o.hostname);
  } catch { return false; }
}

const BY_PRODUCT = Object.fromEntries(Object.values(OPENINGS).map(o => [o.product, o]));
// Groups for the itemised price, in the order the page lists them.
function groupOf(key) {
  if (key.startsWith('discount.')) return 'offer';
  if (key.startsWith('transport.')) return 'delivery';
  if (key.startsWith('door.') || key.startsWith('window.')) return 'openings';
  if (key.startsWith('material.')) return 'finish';
  if (/^(floors\.|roofs\.insulation|walls\.insulation|remainder\.insulation|remainder\.innerfloor)/.test(key)) return 'inside';
  if (/^(remainder\.|roof\.gutter|roof\.downspout|wall\.foundation|wall\.edge|roof\.trim)/.test(key)) return 'extras';
  return 'building';
}
// Lugarde's own line titles, tidied: "18.9m² x Internal floor" becomes "Internal floor, 18.9m²".
function labelOf(key, line) {
  const o = BY_PRODUCT[key];
  if (o) return `${line.amount > 1 ? line.amount + ' × ' : ''}${o.name} (Lugarde ${o.code})`;
  return String(line.title || key).replace(/^1 x /, '')
    .replace(/^([\d.]+m²?) x (.+)$/, '$2, $1')
    .replace(/^(\d+) x /, '$1 × ')
    .replace(/(\d)cm x (\d)/g, '$1 × $2');
}

async function engine(body, tries = 2) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(ENGINE, {
        method: 'POST',
        headers: {'Content-Type': 'application/vnd.api+json', Accept: 'application/vnd.api+json'},
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(12000)
      });
      const text = await res.text();
      if (res.ok) return {ok: true, data: JSON.parse(text)};
      // A 4xx/5xx with a message is a refusal of this design, not an outage: no retry.
      if (res.status < 500 || /Invalid|not possible/i.test(text)) return {ok: false, refused: text.slice(0, 160)};
    } catch (err) {
      if (i === tries - 1) return {ok: false, error: String(err).slice(0, 160)};
    }
    await new Promise(r => setTimeout(r, 600));
  }
  return {ok: false, error: 'engine unavailable'};
}

export default async req => {
  if (req.method !== 'POST') return json(405, {ok: false, reason: 'method'});
  if (!originAllowed(req)) return json(403, {ok: false, reason: 'origin'});
  const raw = await req.text();
  if (raw.length > MAX_BODY) return json(413, {ok: false, reason: 'size'});
  let input;
  try { input = JSON.parse(raw); } catch { return json(400, {ok: false, reason: 'json'}); }
  const d = input?.design;
  if (!d || typeof d !== 'object') return json(400, {ok: false, reason: 'design'});
  // Either a design object or the share link's parameters ({v: '1', r: 'log', ...}).
  const state = d.v === '1' && typeof d.r === 'string' ? fromParams(new URLSearchParams(d)) : normalise(d);
  if (!state || !sizePriceable(state)) return json(422, {ok: false, reason: 'size'});

  const request = buildCartRequest(state, 'coastal-' + Date.now().toString(36));
  const key = JSON.stringify([request.data.attributes.contents, request.data.attributes.structure]);
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) return json(200, {...hit.body, cached: true});

  const out = await engine(request);
  if (!out.ok) return json(out.refused ? 422 : 502, {ok: false, reason: out.refused ? 'refused' : 'unavailable', detail: out.refused || out.error});
  const a = out.data?.data?.attributes;
  if (!a || !Number.isFinite(a.total) || a.total <= 0) return json(502, {ok: false, reason: 'unavailable', detail: 'no total'});
  if (Array.isArray(a.warnings) && a.warnings.length) return json(422, {ok: false, reason: 'warnings', detail: a.warnings.slice(0, 5)});
  const lines = Object.entries(a.contents || {}).filter(([, v]) => v && Number.isFinite(v.total) && v.total !== 0)
    .map(([k, v]) => ({key: k, group: groupOf(k), label: labelOf(k, v), amount: v.amount, total: v.total}));
  // The engine's total must be the sum of its lines, or the price is not shown.
  const sum = lines.reduce((t, l) => t + l.total, 0);
  if (Math.abs(sum - a.total) > 1) return json(502, {ok: false, reason: 'unavailable', detail: `lines ${sum} != total ${a.total}`});
  const body = {
    ok: true, total: a.total, lines,
    system: RANGES[state.range].name,
    discount: lines.filter(l => l.group === 'offer').reduce((t, l) => t + l.total, 0),
    checked: new Date().toISOString(),
    basis: 'Lugarde’s price for the building kit for Coastal’s dealer account, including VAT and delivery to mainland UK, with Lugarde’s current offer applied.'
  };
  cache.set(key, {at: Date.now(), body});
  if (cache.size > 300) cache.delete(cache.keys().next().value);
  return json(200, body);
};

export const config = {path: '/api/price'};
