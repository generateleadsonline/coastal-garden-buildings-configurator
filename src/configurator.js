// Coastal Garden Buildings designer: page controller. Built on the Sutton Garden Buildings v2
// designer (adapted from the Atelia, Hideaway and SMART configurators). Pure design rules live in configurator-model.js; the 3D scene and the PDF load
// only when they are needed; prices come from Lugarde's engine through /api/price.
import {shimDialogs} from './configurator-compat.js';
import {createBoot, RUNGS} from './configurator-boot.js';
import {
  RANGES, RANGE_ORDER, ROOFS, OPENINGS, WALLS, TRIM_COLOURS, COVERINGS, TREATMENT_KINDS, COLOURS, OPTIONS, SPOTS,
  WALL_LIGHTS, SKYLIGHTS, DEALER_EXTRAS, USES, STEPS, CANOPY_SIDES,
  normalise, apply, switchRange, addOpening, fitsWall, limits, stepSize, slopesFor, coveringsFor, canopySides,
  canopyDepths, treatmentKinds, optionAllowed, skylightAllowed, ridgeAlongWidth, wallLength, heightsOf, sillOf, sizeLabel,
  area, roofName, treatmentName, specRows, summary, shareURL, fromURL, metres, metres2, money,
  pounds, parseUKPhone, phoneProblem, validEmail, validName, validPostcode, formatPostcode
} from './configurator-model.js';
import {USPS, CONTACT, BROCHURE, REVIEW, FRAME_KINDS} from './configurator-data.js';
import {captureAttribution, attributionFields} from './configurator-attribution.js';
import {createTour} from './configurator-tour.js';

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = v => String(v).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const icon = name => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
const tick = `<span class="tick">${icon('check')}</span>`;
// Every call to action and every step is an analytics event (dataLayer, as GTM expects).
const track = (event, values = {}) => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({event, ...values}); };
const clone = v => JSON.parse(JSON.stringify(v));
const STORAGE = 'coastal-building-design-v2', RECEIPT = 'coastal-design-receipt-v2';
const params = new URLSearchParams(location.search);
const QA = params.has('qa');
const DEBUG3D = params.has('debug3d');
const BOOK = params.has('book');
const LAST = STEPS.length - 1;
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const stacked = () => matchMedia('(max-width: 860px)').matches;

let attributionStore; try { attributionStore = sessionStorage; } catch {}
const attribution = captureAttribution({url: location.href, referrer: document.referrer, storage: attributionStore});

let state = normalise({});
let undoStack = [], future = [];
let scene = null, night = false;
let ui = {wall: 'front', opening: null, adding: null, notice: null, view: 'outside'};
let receipt = null, started = false, lastCapture = null;
const tour = createTour({onEvent: track});

// ---- Persistence ------------------------------------------------------------------------
function restore() {
  const linked = fromURL(location.href);
  if (linked) { state = linked; return 'link'; }
  try { const raw = localStorage.getItem(STORAGE); if (raw) { state = normalise(JSON.parse(raw)); return 'device'; } } catch {}
  return null;
}
function persist() {
  const url = new URL(shareURL(state, location.origin + '/configurator/'));
  url.searchParams.set('s', String(state.step));
  for (const keep of ['qa', 'debug3d', 'tier', 'no3d']) if (params.has(keep)) url.searchParams.set(keep, params.get(keep));
  window.history.replaceState(null, '', url);
  try { localStorage.setItem(STORAGE, JSON.stringify(state)); } catch {}
}
const unlocked = () => receipt !== null;
function reference(s) {
  let n = 2166136261;
  for (const ch of JSON.stringify({...s, step: 0, openings: s.openings.map(o => [o.wall, o.type, o.p])})) n = Math.imul(n ^ ch.charCodeAt(0), 16777619);
  return 'CGB-' + (n >>> 0).toString(16).toUpperCase().padStart(8, '0');
}

// ---- Price: Lugarde's engine through /api/price ------------------------------------------
// Fetched once the visitor has sent their design (and quietly on the price step, so the
// enquiry carries the figure they will see). A design the engine refuses shows no figure.
let price = {key: null, status: 'idle', data: null};
let priceTimer = 0, priceSeq = 0;
const priceKey = s => JSON.stringify({...s, step: 0, use: '', openings: s.openings.map(o => [o.wall, o.type, Math.round(o.p * 1000)])});
function requestPrice({soon = false} = {}) {
  const key = priceKey(state);
  if (price.key === key && (price.status === 'ok' || price.status === 'loading')) return;
  clearTimeout(priceTimer);
  priceTimer = setTimeout(() => fetchPrice(key, clone(state)), soon ? 0 : 450);
}
async function fetchPrice(key, design) {
  const seq = ++priceSeq;
  price = {key, status: 'loading', data: price.data};
  renderPrice();
  try {
    const res = await fetch('/api/price', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({design}), signal: AbortSignal.timeout ? AbortSignal.timeout(20000) : undefined});
    const body = await res.json().catch(() => ({ok: false, reason: 'unavailable'}));
    if (seq !== priceSeq) return;
    price = body.ok ? {key, status: 'ok', data: body} : {key, status: body.reason === 'unavailable' ? 'error' : 'refused', data: null, reason: body.reason};
    if (body.ok) track('configurator_price_shown', {range: design.range, total: Math.round(body.total) / 100, unlocked: unlocked()});
    else track('configurator_price_error', {reason: body.reason || 'unknown', range: design.range});
  } catch {
    if (seq !== priceSeq) return;
    price = {key, status: 'error', data: null};
    track('configurator_price_error', {reason: 'network', range: design.range});
  }
  renderPrice();
  fillHidden();
}
const currentPrice = () => (price.status === 'ok' && price.key === priceKey(state) ? price.data : null);
const GROUP_NAME = {building: 'Building', openings: 'Doors and windows', finish: 'Treatments', inside: 'Inside', extras: 'Extras', delivery: 'Delivery', offer: 'Lugarde’s offer'};
function renderPrice() {
  if (state.step !== LAST) return;
  const total = $('#price-total'), lines = $('#price-lines'), card = $('#price-card');
  if (!total) return;
  const p = currentPrice();
  card.classList.toggle('is-error', !p && price.status !== 'loading');
  if (p) {
    total.textContent = money(p.total);
    $('#price-for').textContent = 'Including VAT and delivery to mainland UK';
    const groups = Object.keys(GROUP_NAME).filter(g => p.lines.some(l => l.group === g));
    lines.innerHTML = groups.map(g => `<h3>${esc(GROUP_NAME[g])}</h3>${p.lines.filter(l => l.group === g).map(l => `<div class="price-line ${l.group === 'offer' ? 'is-offer' : ''}"><span>${esc(l.label)}</span><span>${money(l.total)}</span></div>`).join('')}`).join('') +
      `<div class="price-line is-total"><span>Your Lugarde price</span><span>${money(p.total)}</span></div><p class="price-meta">Priced by Lugarde’s price engine for Coastal’s dealer account on ${new Date(p.checked).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}: the building kit as designed, including VAT and delivery to mainland UK${p.discount ? ', with Lugarde’s current offer' : ''}. Coastal’s own work is quoted separately.</p>`;
  } else if (price.status === 'loading' || price.status === 'idle') {
    total.textContent = 'Pricing your design…';
    lines.innerHTML = '';
  } else {
    total.textContent = price.status === 'refused' ? 'Priced by Coastal' : 'Price not available just now';
    $('#price-for').textContent = price.status === 'refused' ? 'Lugarde’s engine can’t price this exact design online' : 'Your design is saved and with Coastal';
    lines.innerHTML = `<p class="price-meta">${price.status === 'refused' ? 'Coastal will price this design for you. Book a call or request a callback and it will be in front of them.' : 'Lugarde’s price engine didn’t answer. <button type="button" class="text-button" data-action="retry-price">Try again</button>'}</p>`;
  }
  const stageText = $('#stage-price-text');
  if (unlocked()) stageText.textContent = p ? money(p.total) : 'Book a call';
}

// ---- Focus: where the camera turns for each option, and what it outlines ------------------
const WALL_DIR = {front: [-.28, .2, 1], back: [.28, .22, -1], left: [-1, .22, .28], right: [1, .22, .28]};
// `s`: the design the camera turns to (the page's own, or one the QA sweep is checking).
function focusFor(key, extra = {}, s = state) {
  const log = s.range === 'log';
  switch (key) {
    case 'range': return {tags: [], whole: true, highlight: false};
    case 'use': return {tags: ['furniture'], view: 'inside'};
    case 'size': return {tags: [], whole: true, highlight: false, dir: [-.5, .55, 1]};
    case 'thickness': return {tags: [log ? 'logEnds' : 'cladding'], dir: [-.75, .22, 1], pad: .5, whole: !log};
    case 'raise': return {tags: ['cladding'], dir: [-.62, .2, 1], whole: true};
    case 'canopy': return {tags: ['canopy'], dir: [s.canopy.side === 'right' ? .55 : -.55, .3, 1], pad: .6};
    case 'roof': return {tags: ['roof'], dir: [-.55, .7, 1], whole: true};
    case 'slope': return {tags: ['roof'], dir: ridgeAlongWidth(s) ? [-1, .25, .35] : [-.35, .25, 1], whole: true};
    case 'covering': return {tags: ['roof'], dir: [-.5, .8, 1], whole: true};
    case 'trim': return {tags: ['trim'], dir: [-.6, .35, 1], pad: .5};
    case 'skylight': return {tags: ['skylight'], dir: [-.3, 1.6, .7], pad: 1.2};
    case 'gutter': return {tags: ['gutter'], dir: s.roof === 'pent' ? [.6, .25, -1] : [-.6, .25, 1], whole: true};
    case 'downpipe': return {tags: ['downpipe'], dir: [.75, .2, -1], pad: 1};
    case 'finial': return {tags: ['finial'], dir: [-.4, .45, 1], pad: .8};
    case 'wall': return {tags: ['wall:' + extra.wall], dir: WALL_DIR[extra.wall], pad: .4, highlight: extra.highlight};
    case 'opening': return {tags: ['opening:' + extra.id], dir: WALL_DIR[extra.wall], pad: 1.3, minDistance: 4.2};
    case 'treatment': return {tags: ['cladding'], dir: [-.62, .25, 1], whole: true};
    case 'frames': return {tags: ['frames'], dir: [-.2, .16, 1], whole: true};
    case 'diamond': return {tags: ['logEnds'], dir: [-1, .2, 1], pad: .5};
    case 'floor': return {tags: ['floor'], view: 'inside', lookDown: true};
    case 'floorInsulation': return {tags: ['floorInsulation'], view: 'plan'};
    case 'roofInsulation': return {tags: ['roofInsulation'], view: 'inside'};
    case 'wallInsulation': return {tags: ['wallInsulation'], view: 'inside'};
    case 'ceiling': return {tags: ['ceiling'], view: 'inside'};
    case 'veranda': return {tags: ['veranda'], dir: [s.canopy.side === 'right' ? .5 : -.5, .6, 1], pad: .6};
    case 'spots': return {tags: ['spots'], dir: [-.25, .04, 1], pad: 1.2, night: true, ground: true};
    case 'wallLights': return {tags: ['wallLights'], dir: [-.2, .1, 1], pad: 1.2, night: true};
    case 'plasticBeams': return {tags: ['beams'], dir: [-.6, .08, 1], pad: .5};
    case 'stormAnchors': return {tags: ['anchors'], dir: [-.75, .15, 1], pad: .6};
    case 'patio': return {tags: ['patio'], dir: [-.4, .9, 1], whole: true};
    case 'heater': return {tags: ['heater'], view: 'inside'};
    case 'fitout': return {tags: ['fitout'], view: 'inside'};
    default: return null;
  }
}

function change(patch, {key, label, focus = {}, value} = {}) {
  beginInteraction();
  let result;
  if (patch.__range) result = {state: switchRange(state, patch.__range), changes: []};
  else result = apply(state, patch);
  const next = {...result.state, step: state.step};
  if (JSON.stringify(next) === JSON.stringify(state)) { render({keepFocus: true}); return; }
  undoStack.push(clone(state)); if (undoStack.length > 60) undoStack.shift(); future = [];
  state = next;
  ui.notice = result.changes.length ? describeChanges(result.changes) : null;
  if (ui.opening && !state.openings.some(o => o.id === ui.opening)) ui.opening = null;
  render({keepFocus: true, changed: key});
  persist();
  const spec = key && focusFor(key, focus);
  if (spec && scene) { if (spec.night && !night) setNight(true); scene.focus(spec); }
  if (QA) window.__cfgLastFocus = {key, spec, at: performance.now()};
  if (label) toast(label);
  if (unlocked()) requestPrice();
  track('configurator_option_change', {option: key || Object.keys(patch).join(','), value: value ?? label ?? '', range: state.range, step: state.step + 1});
}
function describeChanges(changes) {
  return changes.map(c => c.kind === 'removed'
    ? `There was no room for the ${OPENINGS[c.type].name.toLowerCase()} on the ${WALLS[c.wall].toLowerCase()}, so it was removed.`
    : `The ${OPENINGS[c.from].name.toLowerCase()} on the ${WALLS[c.wall].toLowerCase()} became ${OPENINGS[c.to].name.toLowerCase()} to fit.`).join(' ');
}
let toastTimer = 0;
function toast(text) {
  const el = $('#change-toast');
  el.hidden = false; el.textContent = text;
  el.classList.remove('is-in'); void el.offsetWidth; el.classList.add('is-in');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  $('#announce').textContent = text;
}
function beginInteraction() {
  if (started) return;
  started = true;
  track('configurator_start', {range: state.range});
}

// ---- Rendering ---------------------------------------------------------------------------
const STEP_COPY = [
  ['Choose your building', 'Three Lugarde systems, designed by you and installed by Coastal’s own fitters.'],
  ['Size, walls and canopy', 'Measured outside wall to outside wall, in the steps each system is made in.'],
  ['Roof', 'The roofs Lugarde makes for this system, with their coverings and trims.'],
  ['Doors and windows', 'Lugarde’s double-glazed doors and windows, on any wall.'],
  ['Finish', 'Factory treatments and colours for the timber, the doors and the windows.'],
  ['Inside and extras', 'Floor, insulation and lighting from Lugarde, and Coastal’s own services.'],
  ['Your price', 'Your design, Lugarde’s price and your next steps.']
];
const NEXT_LABEL = ['Next: size', 'Next: roof', 'Next: doors & windows', 'Next: finish', 'Next: inside & extras', 'See my price'];
const STEP_USPS = s => [
  ['family', 'showSite', 'bespoke'],
  ['tenCm', 'survey', 'yearRound'],
  ['epdm', 'lowRoof', 'warranty'],
  ['configurable', 'glazing', 'laminated'],
  ['painting', 'warranty', 'showSite'],
  ['groundworks', 'electrics', 'fitters'],
  ['survey', 'fitters', 'noHardSell']
][s.step];
const USP_ICON = {family: 'award', showSite: 'pin', bespoke: 'star', configurable: 'window', lowRoof: 'ruler', yearRound: 'layers', tenCm: 'ruler', epdm: 'shield', glazing: 'window', laminated: 'check', warranty: 'shield', painting: 'leaf', survey: 'house', groundworks: 'tree', fitters: 'team', removal: 'check', electrics: 'check', aftersales: 'shield', noHardSell: 'clock'};
const LIST_NOTE = 'Prices beside options are Lugarde’s list prices including VAT, before treatments and offers. Your price on the last step includes everything.';

const radio = (name, value, checked, body, {cls = '', disabled = false, label = ''} = {}) =>
  `<label class="opt ${cls}" data-key="${name}:${esc(value)}"><input type="radio" name="${name}" value="${esc(value)}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} ${label ? `aria-label="${esc(label)}"` : ''}><span>${body}</span></label>`;
const swatch = (name, value, checked, hex, label, pattern = '', disabled = false) =>
  `<label class="swatch" data-key="${name}:${esc(value)}"><input type="radio" name="${name}" value="${esc(value)}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}><span><i class="${pattern}" data-c="${hex || '#cfcfcf'}"></i><small>${esc(label)}</small></span></label>`;
const toggle = (name, checked, title, sub, {disabled = false, badge: b = ''} = {}) =>
  `<label class="switch" data-key="${name}"><input type="checkbox" name="${name}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}><span class="track"></span><span class="opt-text"><strong>${esc(title)} ${b}</strong>${sub ? `<small>${esc(sub)}</small>` : ''}</span></label>`;
// Option badges: Lugarde's list price, priced to the building's size, included, or quoted by Coastal.
const badge = (kind, list) => kind === 'list' ? `<span class="badge lugarde">${list ? '+' + pounds(list) : 'No charge'}</span>`
  : kind === 'perm' ? `<span class="badge lugarde">${pounds(list)} a metre</span>`
  : kind === 'sized' ? '<span class="badge sized">Priced to your size</span>'
  : kind === 'quoted' ? '<span class="badge quoted">Quoted by Coastal</span>' : '<span class="badge included">Included</span>';
const optionBadge = k => (OPTIONS[k].unit === 'metre' ? badge('perm', OPTIONS[k].list) : OPTIONS[k].list === null ? badge('sized') : badge('list', OPTIONS[k].list));
const section = (title, note, body, cls = '') => `<section class="section ${cls}"><div class="section-head"><h3>${title}</h3>${note ? `<small>${note}</small>` : ''}</div>${body}</section>`;
const usp = key => `<div class="usp">${icon(USP_ICON[key] || 'check')}<div><strong>${esc(USPS[key].title)}</strong><span>${esc(USPS[key].copy)}</span></div></div>`;
const uspRow = keys => `<div class="usp-row">${keys.slice(0, 2).map(usp).join('')}</div>`;
const segmented = (name, label, items, current, {fmt = v => v, disabled = () => false} = {}) =>
  `<div class="segmented" role="radiogroup" aria-label="${esc(label)}">${items.map(v => `<label data-key="${name}:${v}"><input type="radio" name="${name}" value="${v}" ${String(current) === String(v) ? 'checked' : ''} ${disabled(v) ? 'disabled' : ''}><span>${fmt(v)}</span></label>`).join('')}</div>`;

function renderRange() {
  const r = RANGES[state.range];
  return section('Choose your system', 'Tap to see it in 3D', `<div class="choices">${RANGE_ORDER.map(k => {
      const x = RANGES[k];
      return radio('range', k, state.range === k, `<img src="/assets/img/range-${k}-240.webp" width="112" height="80" alt="" loading="lazy" decoding="async"><span class="opt-text"><strong>Lugarde ${esc(x.name)}</strong><small>${esc(x.tag)}</small><span class="tags">${x.highlights.map(h => `<span>${esc(h)}</span>`).join('')}</span></span>${tick}`, {cls: 'range-card', label: `Lugarde ${x.name}: ${x.tag}`});
    }).join('')}</div><p class="section-note">${esc(r.description)} <strong>Best for:</strong> ${esc(r.bestFor.toLowerCase())}.</p>`) +
    section('What is it for?', 'Sets the furniture shown', `<div class="choices uses">${Object.entries(USES).map(([k, u]) => radio('use', k, state.use === k, `<span class="icon">${icon(u.icon)}</span><span class="opt-text"><strong>${esc(u.name)}</strong></span>${tick}`)).join('')}</div><p class="illustrative">Furniture is shown for scale and is not part of the price.</p>`) +
    uspRow(STEP_USPS(state));
}

function renderSize() {
  const r = RANGES[state.range], lim = limits(state), h = heightsOf(state);
  const stepWord = lim.step >= .5 ? `${Math.round(lim.step * 100)}cm modules` : '10cm steps';
  const dimRow = dim => {
    const value = state[dim], [lo, hi] = lim[dim];
    return `<div class="dim"><div class="dim-head"><label for="sl-${dim}">${dim === 'width' ? 'Width (front)' : 'Depth (side)'}</label><output for="sl-${dim}" aria-live="polite">${metres(value)}</output></div><div class="row"><button type="button" data-size="${dim}" data-dir="-1" aria-label="Smaller ${dim}" ${stepSize(state, dim, -1) === null ? 'disabled' : ''}>${icon('minus')}</button><input type="range" id="sl-${dim}" data-dim="${dim}" min="${lo}" max="${hi}" step="${lim.step}" value="${value}" aria-valuetext="${metres(value)}"><button type="button" data-size="${dim}" data-dir="1" aria-label="Larger ${dim}" ${stepSize(state, dim, 1) === null ? 'disabled' : ''}>${icon('plus')}</button></div></div>`;
  };
  const thickNote = {log: 'Thicker logs are stronger and warmer: 68 and 90mm logs lock together with a double tongue and groove.', prima: '28mm walls are made up to 3.6m; 44mm walls up to 5.4m × 4.2m.', pro: 'Pro walls are 28mm boards between laminated 14 × 14cm posts.'}[state.range];
  const thickness = r.thicknesses.length > 1
    ? `${segmented('thickness', 'Wall thickness', r.thicknesses, state.thickness, {fmt: v => `${v}mm`})}<p class="section-note">${esc(thickNote)} ${badge('sized')}</p>`
    : `<p class="section-note"><strong>28mm</strong>. ${esc(thickNote)}</p>`;
  const raise = r.raise ? section('Higher walls', 'Extra boards under the roof', `<div class="stepper"><div><label id="raise-label">Extra boards</label><div class="row"><button type="button" data-raise="-1" aria-label="Fewer extra boards" ${state.raise <= 0 ? 'disabled' : ''}>${icon('minus')}</button><output aria-labelledby="raise-label">${state.raise ? '+' + state.raise : 'None'}</output><button type="button" data-raise="1" aria-label="More extra boards" ${state.raise >= r.raise ? 'disabled' : ''}>${icon('plus')}</button></div><small>${state.raise ? `About ${state.raise * 135}mm higher` : 'Standard height'}</small></div></div><p class="section-note">Lugarde raises the walls up to ${r.raise} boards at a time ${badge('sized')}${state.options.gutter && state.range === 'log' && state.roof === 'apex' ? '. Gutters on a log cabin apex need at least one.' : ''}</p>`) : '';
  const sides = canopySides(state);
  const canopyWhy = state.roof === 'pent' || state.roof === 'pyramid' ? `Lugarde makes canopies for flat and apex roofs, not ${ROOFS[state.roof].name.toLowerCase()}s.`
    : state.roof === 'apex' && !ridgeAlongWidth(state) ? 'On an apex roof the canopy sits at a gable end: make the building at least as wide as it is deep.'
    : state.range === 'pro' && sides.length === 1 ? 'A Pro canopy needs a building no more than 3.6m deep.' : '';
  const canopy = section(`Canopy ${state.canopy.side !== 'none' ? badge('sized') : ''}`, 'An open porch under the same roof',
    sides.length > 1 ? `${segmented('canopySide', 'Canopy', sides, state.canopy.side, {fmt: v => (v === 'none' ? 'None' : v === 'left' ? 'Left side' : 'Right side')})}${state.canopy.side !== 'none' ? `<p class="section-note"><strong>Canopy depth</strong></p>${segmented('canopyDepth', 'Canopy depth', canopyDepths(state), state.canopy.depth, {fmt: v => `${Number(v).toFixed(1)}m`})}<p class="section-note">On ${state.range === 'pro' ? '14 × 14' : '12 × 12'}cm posts, as deep as the building. Decking under it is in Inside &amp; extras.</p>` : ''}`
      : `<p class="section-note">${esc(canopyWhy)}</p>`);
  const pro = state.range === 'pro' ? '<p class="section-note">Lugarde’s price engine can’t price Pro walls of 6.0, 6.2, 6.4, 6.6 or 6.8m, so those sizes are skipped. Coastal can advise.</p>' : '';
  return section('Outside size', `${stepWord}, ${metres(lim.width[0])} to ${metres(lim.width[1])} wide`, `<div class="dims">${dimRow('width')}${dimRow('depth')}</div><div class="area"><span>Footprint</span><strong>${area(state).toFixed(1)}m&sup2;</strong></div><div class="heights"><div><span>Walls</span><strong>about ${metres2(h.wall)}</strong></div><div><span>${state.roof === 'flat' ? 'Overall' : 'To the top'}</span><strong>about ${metres2(h.total)}</strong></div></div>${pro}`) +
    section(state.range === 'log' ? 'Log thickness' : 'Wall thickness', '', thickness) +
    raise + canopy + uspRow(STEP_USPS(state));
}

function renderRoof() {
  const r = RANGES[state.range];
  const roofs = section('Roof shape', 'Lugarde’s roofs for this system', `<div class="choices">${r.roofs.map(k => radio('roof', k, state.roof === k, `<span class="icon">${icon('roof')}</span><span class="opt-text"><strong>${esc(ROOFS[k].name)}</strong><small>${esc(ROOFS[k].note)}</small></span>${tick}`)).join('')}</div>`);
  let body = '';
  if (state.roof === 'apex') {
    const slopes = slopesFor(state);
    body += section('Roof pitch', slopes.length > 1 ? 'Steeper roofs are taller' : 'Set by the building’s span', slopes.length > 1 ? segmented('slope', 'Roof pitch', slopes, state.slope, {fmt: v => `${v}°`}) : `<p class="section-note"><strong>${state.slope}°</strong>, as Lugarde makes it for a ${metres(Math.min(state.width, state.depth))} span.</p>`);
  }
  if (state.roof === 'apex' || state.roof === 'pyramid') {
    const list = coveringsFor(state);
    const shingles = list.filter(k => COVERINGS[k].kind === 'shingles'), tiles = list.filter(k => COVERINGS[k].kind === 'tiles');
    body += section(`Roof covering ${badge('sized')}`, 'Bitumen shingles or metal roof tiles', `<div class="swatches small">${shingles.map(k => swatch('covering', k, state.covering === k, COVERINGS[k].hex, COVERINGS[k].name.replace(' shingles', ''), 'shingle')).join('')}</div>${tiles.length ? `<p class="section-note"><strong>Metal roof tiles</strong></p><div class="swatches small">${tiles.map(k => swatch('covering', k, state.covering === k, COVERINGS[k].hex, COVERINGS[k].name.replace('Metal tiles, ', '').replace(/ \(RAL \d+\)/, ''), COVERINGS[k].profile === 'modern' ? 'ribs' : 'lap')).join('')}</div>` : ''}<p class="section-note">${esc(COVERINGS[state.covering].name)}.</p>`);
  }
  if (state.roof === 'flat') {
    body += section('Roof trim', 'The aluminium edge of the EPDM roof', `<div class="swatches small">${Object.entries(TRIM_COLOURS).map(([k, x]) => swatch('trim', k, state.trim === k, x.hex, x.name)).join('')}</div><p class="section-note">${esc(TRIM_COLOURS[state.trim].name)} ${TRIM_COLOURS[state.trim].unit === 'metre' ? badge('perm', TRIM_COLOURS[state.trim].list) : badge('list', TRIM_COLOURS[state.trim].list)}</p>`);
  }
  if (skylightAllowed(state)) {
    body += section('Skylight', 'A roof window in the flat roof', `<div class="choices">${Object.entries(SKYLIGHTS).map(([k, x]) => radio('skylight', k, state.skylight === k, `<span class="opt-text"><strong>${esc(x.name)}</strong></span>${k === 'none' ? '' : badge('list', x.list)}${tick}`)).join('')}</div>`);
  }
  const drainage = ['gutter', 'downpipe', 'finial'].filter(k => optionAllowed(state, k));
  if (drainage.length) body += section('Roof extras', '', drainage.map(k => toggle(k, state.options[k], OPTIONS[k].name, OPTIONS[k].note, {badge: optionBadge(k)})).join(''));
  return roofs + body + uspRow(STEP_USPS(state)) + `<p class="illustrative">${esc(LIST_NOTE)}</p>`;
}

const GROUPS = {door: [['single', 'Single doors'], ['double', 'Double doors'], ['sliding', 'Sliding doors'], ['folding', 'Folding and bi-fold doors']], window: [['tilt', 'Tilt-and-turn windows'], ['casement', 'Casement windows'], ['fixed', 'Fixed windows']]};
function renderOpenings() {
  const walls = Object.keys(WALLS);
  if (!walls.includes(ui.wall)) ui.wall = 'front';
  const wall = ui.wall, L = wallLength(state, wall);
  const list = state.openings.filter(o => o.wall === wall);
  const count = w => state.openings.filter(o => o.wall === w).length;
  const tabs = `<div class="wall-tabs" role="tablist" aria-label="Wall" data-walls="4">${walls.map(k => `<button type="button" role="tab" data-wall="${k}" aria-selected="${k === wall}"><span>${esc(WALLS[k].replace(' side', ''))}</span><small>${count(k)} ${count(k) === 1 ? 'item' : 'items'}</small></button>`).join('')}</div>`;
  const H = 2.3;
  const diagram = `<div class="wall-diagram" aria-hidden="true"><span class="len">${metres2(L)}</span>${list.map(o => { const s = OPENINGS[o.type], sill = sillOf(o.type); const left = (o.p * L - s.fw / 2) / L * 100, width = s.fw / L * 100; return `<span class="seg ${s.group === 'door' ? 'is-door' : ''} ${o.id === ui.opening ? 'is-active' : ''}" data-open="${o.id}" data-box="${left.toFixed(2)},${width.toFixed(2)},${(s.fh / H * 100).toFixed(2)},${(sill / H * 100).toFixed(2)}"></span>`; }).join('')}</div>`;
  const size = x => `${Math.round(x.w * 100)} × ${Math.round(x.h * 100)}cm`;
  const editor = o => {
    const s = OPENINGS[o.type], pos = o.p * L;
    return `<div class="opening-edit"><div><label class="lead" for="type-${o.id}">Type</label><select id="type-${o.id}" data-field="type" data-id="${o.id}">${Object.entries(GROUPS).map(([g, kinds]) => kinds.map(([kind, label]) => `<optgroup label="${label}">${Object.entries(OPENINGS).filter(([, x]) => x.group === g && x.kind === kind).map(([k, x]) => `<option value="${k}" ${k === o.type ? 'selected' : ''} ${fitsWall(state, wall, k) || k === o.type ? '' : 'disabled'}>${esc(`${x.name} (${x.code}), ${size(x)}, ${pounds(x.list)}`)}</option>`).join('')}</optgroup>`).join('')).join('')}</select></div>
      <div><label class="lead" for="pos-${o.id}">Position: ${(pos - s.fw / 2).toFixed(2)}m from the left corner</label><div class="slide"><button type="button" data-nudge="-1" data-id="${o.id}" aria-label="Move left">${icon('back')}</button><input id="pos-${o.id}" type="range" min="0" max="1000" step="5" value="${Math.round(o.p * 1000)}" data-field="p" data-id="${o.id}"><button type="button" data-nudge="1" data-id="${o.id}" aria-label="Move right">${icon('arrow')}</button></div></div>
      <div class="opening-actions"><button type="button" class="button ghost small" data-remove="${o.id}">${icon('trash')}<span>Remove</span></button></div></div>`;
  };
  const rows = list.length ? list.map(o => {
    const s = OPENINGS[o.type], active = o.id === ui.opening;
    return `<div class="opening ${active ? 'is-active' : ''}"><button type="button" class="opening-row" data-open="${o.id}" aria-expanded="${active}"><span class="icon">${icon(s.group === 'door' ? 'door' : 'window')}</span><span class="opt-text"><strong>${esc(s.name)} ${badge('list', s.list)}</strong><small>Lugarde ${esc(s.code)}, ${size(s)}</small></span>${icon(active ? 'minus' : 'plus')}</button>${active ? editor(o) : ''}</div>`;
  }).join('') : '<p class="section-note">No doors or windows on this wall yet.</p>';
  const picker = ui.adding ? `<div class="choices spaced">${GROUPS[ui.adding].map(([kind, label]) => `<p class="section-note"><strong>${label}</strong></p>${Object.entries(OPENINGS).filter(([, x]) => x.group === ui.adding && x.kind === kind).map(([k, x]) => `<button type="button" class="opt" data-add="${k}" ${fitsWall(state, wall, k) ? '' : 'disabled'}><span><span class="icon">${icon(x.group === 'door' ? 'door' : 'window')}</span><span class="opt-text"><strong>${esc(x.name)} ${badge('list', x.list)}</strong><small>Lugarde ${esc(x.code)}, ${size(x)}${fitsWall(state, wall, k) ? '' : ', too big for this wall'}</small></span></span></button>`).join('')}`).join('')}<button type="button" class="text-button" data-add-cancel>Cancel</button></div>` : `<div class="add-row" role="group" aria-label="Add to this wall"><button type="button" class="button ghost" data-adding="window" aria-label="Add a window">${icon('plus')}<span>Window</span></button><button type="button" class="button ghost" data-adding="door" aria-label="Add a door">${icon('plus')}<span>Door</span></button></div>`;
  const notice = ui.notice ? `<p class="notice" role="status">${icon('info')}<span>${esc(ui.notice)}</span><button type="button" data-undo-notice>Undo</button></p>` : '';
  const blocked = state.range === 'pro' ? ' Openings fit between the Pro posts.' : state.range === 'log' && state.width > 5 ? ' Long log walls have stability points that openings fit around.' : '';
  return section('Choose a wall', 'Left and right as you face the front', `${tabs}${diagram}<div class="opening-list">${rows}</div>${notice}${picker}<p class="section-note">Tip: tap any door or window in the 3D view to edit it.${blocked}</p>`) +
    section('Mirror the layout', '', `<button type="button" class="button ghost wide" data-action="mirror">${icon('mirror')}<span>Flip the doors and windows left to right</span></button>`) +
    uspRow(STEP_USPS(state)) + `<p class="illustrative">${esc(LIST_NOTE)}</p>`;
}

function finishPicker(target, kinds, current) {
  const kindRow = segmented(target + 'Kind', target === 'treatment' ? 'Timber treatment' : 'Door and window treatment', kinds, current.kind, {fmt: k => TREATMENT_KINDS[k].name});
  const colours = current.kind === 'none' ? `<p class="section-note">${esc(TREATMENT_KINDS.none.note)}.</p>`
    : `<div class="swatches small spaced">${Object.entries(COLOURS[current.kind]).map(([c, x]) => swatch(target + 'Colour', c, current.colour === c, x.hex, x.name.replace(/ \(RAL \d+\)/, ''), x.opaque ? 'boards-h' : 'grain')).join('')}</div><p class="section-note"><strong>${esc(treatmentName(current))}</strong>. ${esc(TREATMENT_KINDS[current.kind].note)}. ${badge('sized')}</p>`;
  return kindRow + colours;
}
function renderFinish() {
  const kinds = treatmentKinds(state);
  let body = section('Timber', 'Walls, roof edges and canopy', finishPicker('treatment', kinds, state.treatment)) +
    section('Doors and windows', 'Their frames and leaves', finishPicker('frames', FRAME_KINDS, state.frames));
  if (optionAllowed(state, 'diamond')) body += section('Log ends', 'Where the logs cross at the corners', toggle('diamond', state.options.diamond, OPTIONS.diamond.name, OPTIONS.diamond.note, {badge: optionBadge('diamond')}));
  return body + uspRow(STEP_USPS(state)) + '<p class="illustrative">Colours on screen are a guide: Coastal’s show site has the real finishes.</p>';
}

function renderExtras() {
  const opt = k => (optionAllowed(state, k) || state.options[k] ? toggle(k, state.options[k], OPTIONS[k].name, OPTIONS[k].note, {badge: optionBadge(k), disabled: !optionAllowed(state, k)}) : '');
  const floorColour = state.options.floor && state.treatment.kind !== 'boiler'
    ? `<p class="section-note"><strong>Floor finish</strong></p><div class="swatches small">${swatch('floorColour', 'none', state.floorColour === 'none', '#d3b98d', 'Untreated', 'grain')}${Object.entries(COLOURS.spray).map(([c, x]) => swatch('floorColour', c, state.floorColour === c, x.hex, x.name, 'grain')).join('')}</div>` : '';
  const inside = section('Floor and insulation', 'Lugarde’s floor and insulation kits', opt('floor') + floorColour + opt('floorInsulation') + opt('wallInsulation') + opt('roofInsulation') + opt('ceiling'));
  const lights = section('Lighting', 'Lugarde’s LED lighting',
    `<p class="section-note"><strong>Spots in the roof overhang</strong></p>${segmented('spots', 'Soffit spots', Object.keys(SPOTS).map(Number), state.spots, {fmt: v => (v ? String(v) : 'None')})}${state.spots ? `<p class="section-note">${esc(SPOTS[state.spots].name)} ${badge('list', SPOTS[state.spots].list)}</p>` : ''}
     <p class="section-note"><strong>Wall lights by the doors</strong></p>${segmented('wallLights', 'Wall lights', Object.keys(WALL_LIGHTS).map(Number), state.wallLights, {fmt: v => (v ? String(v) : 'None')})}${state.wallLights ? `<p class="section-note">${esc(WALL_LIGHTS[state.wallLights].name)} ${badge('list', WALL_LIGHTS[state.wallLights].list)}</p>` : ''}
     <button type="button" class="text-button" data-action="dusk">${icon('moon')}<span>See it at dusk</span></button>`);
  const outside = section('Outside and base', '', opt('veranda') + opt('plasticBeams') + opt('stormAnchors'));
  const dealer = section('Coastal’s own services', 'Quoted after a free site survey', Object.entries(DEALER_EXTRAS).map(([k, x]) => toggle('extra-' + k, state.extras[k], x.name, x.note, {badge: badge('quoted')})).join('') + '<p class="section-note">Delivery and installation by Coastal’s own fitters, the base and removal of an old building are quoted by Coastal (installation within about 25 miles of Christchurch; delivery only is available too).</p>');
  return inside + lights + outside + dealer + uspRow(STEP_USPS(state)) + `<p class="illustrative">${esc(LIST_NOTE)}</p>`;
}

function renderQuote() {
  const r = RANGES[state.range], open = unlocked();
  $('#quote-summary').innerHTML = `<img id="summary-shot" src="${lastCapture || `/assets/img/range-${state.range}-240.webp`}" alt="" width="120" height="80"><div><strong>Lugarde ${esc(r.name)}, ${esc(sizeLabel(state))}</strong><span>${esc(roofName(state))}</span></div>`;
  $('#quote-locked').hidden = open; $('#quote-unlocked').hidden = !open;
  $('#pdf-note').textContent = open ? 'Your design, views, specification and price' : 'Unlocks when you send your design';
  const rows = specRows(state);
  const sections = [...new Set(rows.map(x => x.section))];
  const stepOf = {Building: 1, Finish: 4, 'Doors and windows': 3, Inside: 5, Extras: 5, 'Coastal’s work': 5};
  const status = x => (x.status === 'quoted' ? badge('quoted') : x.status === 'included' ? (x.info ? '' : badge('included')) : '<span class="badge lugarde">In your price</span>');
  $('#quote-spec').innerHTML = `<h3>Your specification</h3>` + sections.map(sec => `<h3>${esc(sec)} <button type="button" class="spec-edit" data-goto="${stepOf[sec] ?? 0}" aria-label="Edit ${esc(sec.toLowerCase())}">Edit</button></h3><dl>${rows.filter(x => x.section === sec).map(x => `<div class="spec-row"><dt>${esc(x.label)}</dt><dd>${esc(x.value)}</dd><dd class="spec-status">${status(x)}</dd></div>`).join('')}</dl>`).join('');
  $('#quote-proof').innerHTML = ['family', 'survey', 'fitters', 'removal', 'aftersales'].map(k => `<li>${icon(USP_ICON[k])}<span><strong>${esc(USPS[k].title)}</strong>${esc(USPS[k].copy)}</span></li>`).join('');
  $('#quote-review').innerHTML = `<blockquote>“${esc(REVIEW.quote)}”</blockquote><figcaption>${esc(REVIEW.name)}, a Coastal customer</figcaption>`;
  let name = ''; try { name = sessionStorage.getItem(RECEIPT + '-name') || ''; } catch {}
  $('#thanks-title').textContent = name ? `Thanks, ${name}. Your design is with Coastal.` : 'Your design is with Coastal.';
  if (open) requestPrice({soon: true}); else requestPrice();
  renderPrice();
  fillHidden();
}

const RENDERERS = [renderRange, renderSize, renderRoof, renderOpenings, renderFinish, renderExtras];
function render({keepFocus = false, changed = null} = {}) {
  const focusKey = keepFocus ? document.activeElement?.closest('[data-key]')?.dataset.key || null : null;
  const focusSel = keepFocus && !focusKey && document.activeElement?.id ? '#' + document.activeElement.id : null;
  const r = RANGES[state.range], open = unlocked();
  $$('#steps [data-step]').forEach(b => { const i = Number(b.dataset.step); b.removeAttribute('aria-current'); if (i === state.step) b.setAttribute('aria-current', 'step'); b.classList.toggle('is-done', i < state.step); });
  $('#panel-count').textContent = `Step ${state.step + 1} of ${STEPS.length}`;
  $('#panel-title').textContent = STEP_COPY[state.step][0];
  $('#panel-intro').textContent = STEP_COPY[state.step][1];
  $$('[data-panel]').forEach(p => { p.hidden = Number(p.dataset.panel) !== state.step; });
  if (state.step < LAST) { const p = $(`[data-panel="${state.step}"]`); p.innerHTML = RENDERERS[state.step](); paint(p); }
  else renderQuote();
  $('#stage-title').textContent = `Your Lugarde ${r.name}`;
  $('#stage-sub').textContent = `${sizeLabel(state)}, ${ROOFS[state.roof].name.toLowerCase()}`;
  $('#stage-price').classList.toggle('is-unlocked', open);
  const p = currentPrice();
  $('#stage-price-text').textContent = open ? (p ? money(p.total) : 'Book a call') : 'See your price';
  $('#stage-price').querySelector('use').setAttribute('href', open ? '#i-calendar' : '#i-lock');
  $('#stage-usps').innerHTML = STEP_USPS(state).map(k => `<li>${icon(USP_ICON[k])}${esc(USPS[k].title)}</li>`).join('');
  $('#back').hidden = state.step === 0;
  $('#next-label').textContent = state.step === LAST ? (open ? 'Book a call' : 'Show my price') : NEXT_LABEL[state.step];
  $('#undo').disabled = !undoStack.length; $('#redo').disabled = !future.length;
  posterFor(state.range);
  $('#scene').setAttribute('aria-label', `3D view of a Lugarde ${r.name}, ${state.width} by ${state.depth} metres, ${ROOFS[state.roof].name.toLowerCase()}, ${treatmentName(state.treatment).toLowerCase()}, ${state.openings.length} doors and windows.`);
  if (scene) {
    try { scene.update(state); scene.select(ui.opening && state.step === 3 ? ['opening:' + ui.opening] : []); } catch (err) { console.error(err); }
  }
  if (changed) {
    const el = document.querySelector(`[data-key="${CSS.escape(changedKey(changed))}"]`);
    if (el && !reduced()) { el.classList.remove('is-changed'); void el.offsetWidth; el.classList.add('is-changed'); }
  }
  if (focusKey) document.querySelector(`[data-key="${CSS.escape(focusKey)}"] input`)?.focus({preventScroll: true});
  else if (focusSel) document.querySelector(focusSel)?.focus({preventScroll: true});
}
// The page's CSP forbids inline style attributes, so colours and positions are set through CSSOM.
function paint(root) {
  root.querySelectorAll('[data-c]').forEach(el => el.style.setProperty('--c', el.dataset.c));
  root.querySelectorAll('[data-box]').forEach(el => { const [l, w, h, b] = el.dataset.box.split(','); Object.assign(el.style, {left: l + '%', width: w + '%', height: h + '%', bottom: b + '%'}); });
  root.querySelectorAll('[data-walls]').forEach(el => el.style.setProperty('--walls', el.dataset.walls));
}
function changedKey(key) {
  const map = {use: 'use:' + state.use, range: 'range:' + state.range, roof: 'roof:' + state.roof, covering: 'covering:' + state.covering, trim: 'trim:' + state.trim, skylight: 'skylight:' + state.skylight};
  return map[key] || key;
}

// The poster: a still of each system, shown until the 3D is running.
let posterRange = null;
function posterFor(range) {
  if (posterRange === range) return;
  posterRange = range;
  const img = $('#stage-poster'), base = `/assets/img/poster-${range}`;
  img.srcset = `${base}-800.webp 800w, ${base}-1200.webp 1200w`;
  img.src = `${base}-1200.webp`;
  $('#fallback-photo').src = `${base}-1200.webp`;
  $('#fallback-photo').alt = `A Lugarde ${RANGES[range].name} drawn in Coastal's designer`;
}

function designSummary() {
  const s = summary(state), p = currentPrice();
  return [`Design ${reference(state)}: Lugarde ${s.range}, ${s.size} (${s.area})`,
    `Lugarde price: ${p ? money(p.total) + ' including VAT and delivery' + (p.discount ? ', with Lugarde’s offer' : '') : 'not shown'}`,
    ...s.rows.map(x => `${x.section} | ${x.label}: ${x.value}${x.status === 'quoted' ? ' (quoted by Coastal)' : ''}`),
    ...(p ? ['Price lines:', ...p.lines.map(l => `  ${l.label}: ${money(l.total)}`)] : []),
    `Design link: ${s.designLink}`].join('\n');
}
function fillHidden() {
  const s = summary(state), p = currentPrice();
  const picked = [...Object.keys(OPTIONS).filter(k => state.options[k]).map(k => OPTIONS[k].name), ...(state.spots ? [SPOTS[state.spots].name] : []), ...(state.wallLights ? [WALL_LIGHTS[state.wallLights].name] : []), ...(state.skylight !== 'none' ? [SKYLIGHTS[state.skylight].name] : []), ...Object.keys(DEALER_EXTRAS).filter(k => state.extras[k]).map(k => DEALER_EXTRAS[k].name + ' (quoted)')];
  const values = {
    'design-link': s.designLink, 'design-reference': reference(state), 'design-summary': designSummary(),
    'building-system': `Lugarde ${RANGES[state.range].name}`, 'building-size': `${s.size} (${s.area}), ${s.roof}`,
    'selected-options': picked.join('; ') || 'None', 'price-shown': p ? money(p.total) : 'Not shown', ...attributionFields(attribution)
  };
  for (const form of document.forms) for (const [name, value] of Object.entries(values)) { const el = form.elements.namedItem(name); if (el && !(el instanceof RadioNodeList)) el.value = value; }
}

// ---- Steps and navigation ------------------------------------------------------------------
function selectStep(i, {focusHeading = true} = {}) {
  beginInteraction();
  state.step = Math.max(0, Math.min(LAST, i));
  ui.adding = null;
  if (state.step !== 3) ui.opening = null;
  render();
  persist();
  scene?.setDimensions(state.step === 1);
  if (scene) {
    if (state.step === 0 || state.step === LAST) scene.focus({tags: [], whole: true, highlight: false});
    if (state.step === 1) scene.focus({tags: [], whole: true, highlight: false, dir: [-.5, .55, 1]});
    if (state.step === 2) scene.focus({tags: ['roof'], whole: true, highlight: false, dir: [-.55, .7, 1]});
    if (state.step === 3) scene.focus(focusFor('wall', {wall: ui.wall, highlight: false}));
    if (state.step === 4) scene.focus({tags: [], whole: true, highlight: false, dir: [-.62, .3, 1]});
    if (state.step === 5) scene.setView('inside');
  }
  if (focusHeading) { $('#panel-title').focus({preventScroll: true}); $('#panel-body').scrollTop = 0; if (stacked()) $('#panel').scrollIntoView({block: 'start', behavior: reduced() ? 'auto' : 'smooth'}); }
  track('configurator_step_view', {step: state.step + 1, step_name: STEPS[state.step]});
  if (state.step === LAST) { track('configurator_quote_view', {range: state.range}); captureThumb(); }
}
function captureThumb() {
  if (!scene) return;
  requestAnimationFrame(() => {
    const shots = scene.capture(['hero'], {width: 480, height: 320});
    if (shots.hero) { lastCapture = shots.hero; const img = $('#summary-shot'); if (img) img.src = lastCapture; }
  });
}
function goToQuote(placement) {
  track('cta_click', {cta: unlocked() ? 'book-call' : 'see-price', placement});
  if (unlocked()) return openDialog('book', $('#stage-price'));
  selectStep(LAST);
  setTimeout(() => $('#q-first').focus(), reduced() ? 0 : 350);
}

// ---- Panel events ------------------------------------------------------------------------
const panel = $('#panel-body');
panel.addEventListener('change', e => {
  const el = e.target, name = el.name, v = el.value;
  if (el.dataset.field) return onOpeningField(el);
  if (el.dataset.dim) return onSizeSlider(el, false);
  if (name === 'range') return change({__range: v}, {key: 'range', value: v, label: `Lugarde ${RANGES[v].name}`});
  if (name === 'use') return change({use: v}, {key: 'use', value: v, label: `Furnished as a ${USES[v].name.toLowerCase()}`});
  if (name === 'thickness') return change({thickness: Number(v)}, {key: 'thickness', value: v, label: `${v}mm ${state.range === 'log' ? 'logs' : 'walls'}`});
  if (name === 'canopySide') return change({canopy: {...state.canopy, side: v}}, {key: v === 'none' ? 'size' : 'canopy', value: v, label: CANOPY_SIDES[v]});
  if (name === 'canopyDepth') return change({canopy: {...state.canopy, depth: Number(v)}}, {key: 'canopy', value: v, label: `Canopy ${Number(v).toFixed(1)}m deep`});
  if (name === 'roof') return change({roof: v}, {key: 'roof', value: v, label: ROOFS[v].name});
  if (name === 'slope') return change({slope: Number(v)}, {key: 'slope', value: v, label: `Roof pitch ${v}°`});
  if (name === 'covering') return change({covering: v}, {key: 'covering', value: v, label: COVERINGS[v].name});
  if (name === 'trim') return change({trim: v}, {key: 'trim', value: v, label: TRIM_COLOURS[v].name});
  if (name === 'skylight') return change({skylight: v}, {key: v === 'none' ? 'roof' : 'skylight', value: v, label: SKYLIGHTS[v].name});
  if (name === 'treatmentKind' || name === 'framesKind') {
    const target = name === 'treatmentKind' ? 'treatment' : 'frames';
    const colour = v === 'none' ? undefined : (state[target].kind === v ? state[target].colour : Object.keys(COLOURS[v])[0]);
    return change({[target]: v === 'none' ? {kind: 'none'} : {kind: v, colour}}, {key: target, value: v, label: `${target === 'treatment' ? 'Timber' : 'Doors and windows'}: ${TREATMENT_KINDS[v].name.toLowerCase()}`});
  }
  if (name === 'treatmentColour' || name === 'framesColour') {
    const target = name === 'treatmentColour' ? 'treatment' : 'frames';
    return change({[target]: {kind: state[target].kind, colour: v}}, {key: target, value: v, label: `${target === 'treatment' ? 'Timber' : 'Doors and windows'}: ${COLOURS[state[target].kind][v].name}`});
  }
  if (name === 'floorColour') return change({floorColour: v}, {key: 'floor', value: v, label: v === 'none' ? 'Untreated floor' : `Floor: ${COLOURS.spray[v].name.toLowerCase()}`});
  if (name === 'spots') return change({spots: Number(v)}, {key: Number(v) ? 'spots' : 'roof', value: v, label: SPOTS[v].name});
  if (name === 'wallLights') return change({wallLights: Number(v)}, {key: Number(v) ? 'wallLights' : 'treatment', value: v, label: WALL_LIGHTS[v].name});
  if (name && name.startsWith('extra-')) {
    const k = name.slice(6);
    return change({extras: {...state.extras, [k]: el.checked}}, {key: el.checked ? k : (k === 'patio' ? 'size' : 'floor'), value: String(el.checked), label: `${DEALER_EXTRAS[k].name}${el.checked ? ' added' : ' removed'}`});
  }
  if (OPTIONS[name]) {
    const off = {floor: 'floor', floorInsulation: 'floor', roofInsulation: 'ceiling', wallInsulation: 'treatment', ceiling: 'ceiling', veranda: 'canopy', gutter: 'roof', downpipe: 'roof', diamond: 'thickness', plasticBeams: 'size', stormAnchors: 'treatment', finial: 'roof'}[name];
    const patch = {options: {...state.options, [name]: el.checked}};
    if (name === 'floor' && !el.checked) patch.options.floorInsulation = false;
    return change(patch, {key: el.checked ? name : off, value: String(el.checked), label: `${OPTIONS[name].name}${el.checked ? ' added' : ' removed'}`});
  }
});
panel.addEventListener('input', e => {
  if (e.target.type === 'range' && e.target.dataset.field) onOpeningField(e.target, true);
  else if (e.target.dataset.dim) onSizeSlider(e.target, true);
});
// The size sliders resize the building live; the whole drag becomes one undo step when released.
let sizeDrag = null;
function onSizeSlider(el, live) {
  const dim = el.dataset.dim, value = Math.round(Number(el.value) * 100) / 100;
  if (!sizeDrag) sizeDrag = {before: clone(state)};
  const res = apply(state, {[dim]: value});
  state = {...res.state, step: state.step};
  const out = el.closest('.dim')?.querySelector('output');
  if (out) out.textContent = metres(state[dim]);
  el.setAttribute('aria-valuetext', metres(state[dim]));
  scene?.update(state);
  if (!live) {
    undoStack.push(sizeDrag.before); future = []; sizeDrag = null;
    ui.notice = res.changes.length ? describeChanges(res.changes) : null;
    persist(); render({keepFocus: true});
    scene?.focus(focusFor('size'));
    toast(`${dim === 'width' ? 'Width' : 'Depth'} ${metres(state[dim])}`);
    if (unlocked()) requestPrice();
    track('configurator_option_change', {option: 'size', value: `${dim}:${state[dim]}`, range: state.range, step: state.step + 1});
  }
}
panel.addEventListener('click', e => {
  const b = e.target.closest('button, [data-open]');
  if (!b) return;
  if (b.dataset.size) {
    const dim = b.dataset.size, next = stepSize(state, dim, Number(b.dataset.dir));
    if (next === null) return;
    return change({[dim]: next}, {key: 'size', value: `${dim}:${next}`, label: `${dim === 'width' ? 'Width' : 'Depth'} ${metres(next)}`});
  }
  if (b.dataset.raise) { const next = state.raise + Number(b.dataset.raise); return change({raise: next}, {key: 'raise', value: String(next), label: next ? `Walls raised by ${next} board${next > 1 ? 's' : ''}` : 'Standard wall height'}); }
  if (b.dataset.wall) { ui.wall = b.dataset.wall; ui.opening = null; ui.adding = null; render(); scene?.focus(focusFor('wall', {wall: ui.wall})); $(`[data-wall="${ui.wall}"]`)?.focus(); track('configurator_option_view', {option: 'wall', value: ui.wall}); return; }
  if (b.dataset.open) {
    ui.opening = ui.opening === b.dataset.open ? null : b.dataset.open; ui.adding = null; render();
    const o = state.openings.find(x => x.id === b.dataset.open);
    if (o && ui.opening) scene?.focus(focusFor('opening', {id: o.id, wall: o.wall}));
    document.querySelector(`.opening-row[data-open="${b.dataset.open}"]`)?.focus();
    return;
  }
  if (b.dataset.adding) { ui.adding = b.dataset.adding; render(); panel.querySelector('[data-add]:not(:disabled)')?.focus(); return; }
  if (b.hasAttribute('data-add-cancel')) { ui.adding = null; render(); return; }
  if (b.dataset.add) {
    const res = addOpening(state, ui.wall, b.dataset.add);
    ui.adding = null;
    if (!res.id) { ui.notice = `There is no room for the ${OPENINGS[b.dataset.add].name.toLowerCase()} on the ${WALLS[ui.wall].toLowerCase()}. Try a smaller one, or another wall.`; render(); return; }
    ui.opening = res.id;
    change({openings: res.state.openings}, {key: 'opening', value: b.dataset.add, focus: {id: res.id, wall: ui.wall}, label: `${OPENINGS[b.dataset.add].name} added to the ${WALLS[ui.wall].toLowerCase()}`});
    return;
  }
  if (b.dataset.remove) {
    const o = state.openings.find(x => x.id === b.dataset.remove);
    ui.opening = null;
    change({openings: state.openings.filter(x => x.id !== b.dataset.remove)}, {key: 'wall', value: 'remove', focus: {wall: o.wall, highlight: true}, label: `${OPENINGS[o.type].name} removed. Undo is at the bottom of the 3D view.`});
    return;
  }
  if (b.dataset.nudge) {
    const o = state.openings.find(x => x.id === b.dataset.id), L = wallLength(state, o.wall);
    const p = Math.max(0, Math.min(1, o.p + Number(b.dataset.nudge) * .1 / L));
    return change({openings: state.openings.map(x => x.id === o.id ? {...x, p} : x)}, {key: 'opening', value: 'nudge', focus: {id: o.id, wall: o.wall}});
  }
  if (b.hasAttribute('data-undo-notice')) { $('#undo').click(); return; }
  if (b.dataset.action === 'mirror') return mirror();
  if (b.dataset.action === 'dusk') { setNight(true); return; }
  if (b.dataset.action === 'retry-price') { price.key = null; requestPrice({soon: true}); track('cta_click', {cta: 'retry-price', placement: 'price-step'}); }
});
let drag = null;
function onOpeningField(el, live = false) {
  const id = el.dataset.id, o = state.openings.find(x => x.id === id);
  if (!o) return;
  const field = el.dataset.field;
  const value = field === 'p' ? Number(el.value) / 1000 : el.value;
  const patch = {openings: state.openings.map(x => x.id === id ? {...x, [field]: value} : x)};
  const L = wallLength(state, o.wall);
  if (field === 'p') {
    // The slider moves the opening live; the whole drag becomes one undo step when released.
    if (!drag || drag.id !== id) drag = {id, before: clone(state)};
    const res = apply(state, patch);
    state = {...res.state, step: state.step};
    scene?.update(state); scene?.select(['opening:' + id]);
    const moved = state.openings.find(x => x.id === id);
    const label = el.closest('.opening-edit')?.querySelector(`label[for="pos-${id}"]`);
    if (label && moved) label.textContent = `Position: ${(moved.p * L - OPENINGS[moved.type].fw / 2).toFixed(2)}m from the left corner`;
    if (!live) {
      undoStack.push(drag.before); future = []; drag = null;
      persist(); render({keepFocus: true});
      scene?.focus({...focusFor('opening', {id, wall: o.wall}), highlight: false});
      track('configurator_option_change', {option: 'opening-position', range: state.range, step: state.step + 1});
    }
    return;
  }
  change(patch, {key: 'opening', value: `${field}:${value}`, focus: {id, wall: o.wall}, label: field === 'type' ? `${OPENINGS[value].name} on the ${WALLS[o.wall].toLowerCase()}` : undefined});
}
function mirror() {
  const flip = {left: 'right', right: 'left', front: 'front', back: 'back'};
  const openings = state.openings.map(o => ({...o, wall: flip[o.wall], p: 1 - o.p}));
  change({openings}, {key: 'range', value: 'mirror', label: 'Doors and windows mirrored'});
}

// ---- Stage controls -----------------------------------------------------------------------
function setView(v) {
  ui.view = v;
  $$('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === v)));
  $('#stage-hint').textContent = v === 'inside' ? 'Drag to look around the room. Scroll, pinch or use + and - to zoom.' : v === 'plan' ? 'From above with the roof off, dimensions in metres. Drag to move, scroll or pinch to zoom.' : 'Drag to look around. Scroll or pinch to zoom.';
  $('#stage-hint').classList.remove('is-faded');
  clearTimeout(setView.t); setView.t = setTimeout(() => $('#stage-hint').classList.add('is-faded'), 4000);
}
function setNight(on) {
  night = on; scene?.setNight(on);
  $('#dusk').setAttribute('aria-pressed', String(on));
  $('#dusk').setAttribute('aria-label', on ? 'Show it in daylight' : 'Show it at dusk');
  $('#dusk use').setAttribute('href', on ? '#i-sun' : '#i-moon');
  track('configurator_dusk', {on});
}
const needs3d = () => { if (!bootStarted) startBoot('control'); };
$$('[data-view]').forEach(b => b.addEventListener('click', () => { needs3d(); scene?.setView(b.dataset.view); setView(b.dataset.view); track('configurator_view_change', {view: b.dataset.view}); }));
$('#zoom-in').addEventListener('click', () => { scene?.zoom(1); track('configurator_zoom', {direction: 'in'}); });
$('#zoom-out').addEventListener('click', () => { scene?.zoom(-1); track('configurator_zoom', {direction: 'out'}); });
$('#reset-view').addEventListener('click', () => { scene?.setView('outside'); setView('outside'); track('configurator_view_change', {view: 'reset'}); });
$('#dusk').addEventListener('click', () => setNight(!night));
$('#fullscreen').addEventListener('click', () => { const s = $('#stage'); if (document.fullscreenElement) document.exitFullscreen(); else s.requestFullscreen?.().catch(() => {}); track('configurator_fullscreen'); });
$('#undo').addEventListener('click', () => { if (!undoStack.length) return; future.push(clone(state)); const st = state.step; state = {...undoStack.pop(), step: st}; ui.notice = null; render(); persist(); toast('Undone'); if (unlocked()) requestPrice(); track('configurator_undo'); });
$('#redo').addEventListener('click', () => { if (!future.length) return; undoStack.push(clone(state)); const st = state.step; state = {...future.pop(), step: st}; render(); persist(); toast('Redone'); if (unlocked()) requestPrice(); track('configurator_redo'); });
$('#stage-price').addEventListener('click', () => goToQuote('stage'));
$$('#steps [data-step]').forEach(b => b.addEventListener('click', () => { track('cta_click', {cta: 'step-tab', placement: 'steps', step: Number(b.dataset.step) + 1}); selectStep(Number(b.dataset.step)); }));
$('#back').addEventListener('click', () => { track('cta_click', {cta: 'back', placement: 'footer', step: state.step + 1}); selectStep(state.step - 1); });
$('#next').addEventListener('click', () => {
  track('cta_click', {cta: state.step < LAST ? 'next' : unlocked() ? 'book-call' : 'show-price', placement: 'footer', step: state.step + 1});
  if (state.step < LAST) return selectStep(state.step + 1);
  if (unlocked()) return openDialog('book', $('#next'));
  $('#quote-form').requestSubmit();
});
document.addEventListener('click', e => {
  const goto = e.target.closest('[data-goto]'); if (goto) selectStep(Number(goto.dataset.goto));
  const cta = e.target.closest('[data-cta]'); if (cta) track('cta_click', {cta: cta.dataset.cta, placement: placementOf(cta)});
  const dlg = e.target.closest('[data-dialog]'); if (dlg) openDialog(dlg.dataset.dialog, dlg);
  const close = e.target.closest('[data-close]'); if (close) close.closest('dialog')?.close();
});
function placementOf(el) {
  return !el ? 'page' : el.closest('header') ? 'header' : el.closest('.menu-sheet') ? 'menu' : el.closest('dialog') ? el.closest('dialog').id.replace('dlg-', 'dialog-') : el.closest('.quote') ? 'price-step' : el.closest('.stage') ? 'stage' : 'page';
}

// ---- Dialogs ------------------------------------------------------------------------------
// Coastal's show site is open every day (winter hours Mon-Sat 9am-4.30pm, Sun 10.30am-4pm), so a call
// can be requested for any of the next ten days; Coastal confirms it.
function bookingDays() {
  const out = [], d = new Date();
  while (out.length < 10) {
    d.setDate(d.getDate() + 1);
    out.push(d.toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Europe/London'}));
  }
  return out;
}
function openDialog(name, from) {
  const d = $('#dlg-' + name);
  if (!d) return;
  $('#menu-sheet').hidden = true; $('#menu-toggle').setAttribute('aria-expanded', 'false');
  fillHidden();
  if (name === 'share') { $('#share-link').value = shareURL(state, location.origin + '/configurator/'); $('#share-status').hidden = true; }
  if (name === 'book') { const sel = $('#bk-day'); if (!sel.options.length) sel.innerHTML = bookingDays().map(x => `<option>${esc(x)}</option>`).join(''); }
  for (const [k, v] of Object.entries(contactMemo)) { const el = d.querySelector(`[name="${k}"]`); if (el && !el.value) el.value = v; }
  d.querySelector('.dialog-done') && (d.querySelector('.dialog-done').hidden = true);
  d.querySelector('form') && (d.querySelector('form').hidden = false);
  d.showModal();
  d.querySelector('input:not([type=hidden]):not([tabindex="-1"]), button')?.focus();
  d.addEventListener('close', () => from?.isConnected && from.focus({preventScroll: true}), {once: true});
  track('cta_click', {cta: name, placement: placementOf(from), step: state.step + 1});
  track('configurator_dialog_open', {dialog: name});
}
let contactMemo = {};
shimDialogs();
$$('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
$('#menu-toggle').addEventListener('click', () => { const open = $('#menu-sheet').hidden; $('#menu-sheet').hidden = !open; $('#menu-toggle').setAttribute('aria-expanded', String(open)); track('cta_click', {cta: 'menu', placement: 'header', open}); });
$('#share-copy').addEventListener('click', async () => {
  const link = $('#share-link').value, status = $('#share-status');
  try { await navigator.clipboard.writeText(link); status.textContent = 'Link copied. Paste it anywhere to open this exact design.'; }
  catch { $('#share-link').select(); status.textContent = 'Select the link above and copy it.'; }
  status.hidden = false; track('configurator_share', {method: 'copy'});
});
$('#new-design').addEventListener('click', () => { undoStack.push(clone(state)); future = []; state = normalise({}); render(); persist(); $('#dlg-share').close(); toast('A fresh design. Undo brings your last one back.'); track('configurator_new_design'); });
$('#tour-open').addEventListener('click', e => { track('cta_click', {cta: 'help', placement: 'header'}); tour.start(e.currentTarget); });
$('#menu-tour').addEventListener('click', () => { $('#menu-sheet').hidden = true; $('#menu-toggle').setAttribute('aria-expanded', 'false'); track('cta_click', {cta: 'help', placement: 'menu'}); tour.start($('#menu-toggle')); });

// ---- Forms --------------------------------------------------------------------------------
function fieldError(input, message) {
  const err = input.closest('.field')?.querySelector('.field-error');
  input.setAttribute('aria-invalid', String(Boolean(message)));
  input.classList.toggle('is-valid', !message && Boolean(input.value.trim()));
  if (err) {
    err.hidden = !message; err.textContent = message || '';
    if (!err.id) err.id = input.id + '-error';
    const hint = document.getElementById(input.id + '-hint');
    input.setAttribute('aria-describedby', [hint ? hint.id : '', message ? err.id : ''].filter(Boolean).join(' ') || null);
    if (!input.getAttribute('aria-describedby')) input.removeAttribute('aria-describedby');
  }
  return !message;
}
function check(input) {
  const v = input.value.trim(), name = input.name;
  if (input.closest('[hidden]')) return true;
  if (!input.required && !v) return fieldError(input, '');
  if (name === 'first-name' || name === 'last-name') return fieldError(input, !v ? `Enter your ${name === 'first-name' ? 'first' : 'last'} name.` : validName(v) ? '' : 'Use letters only, please.');
  if (name === 'email') return fieldError(input, validEmail(v) ? '' : 'Enter an email address like name@example.com.');
  if (name === 'phone') return fieldError(input, phoneProblem(v));
  if (name === 'postcode') return fieldError(input, validPostcode(v) ? '' : 'Enter a UK postcode, such as B76 2RR.');
  return fieldError(input, '');
}
for (const form of document.forms) {
  form.addEventListener('focusout', e => {
    const input = e.target;
    if (!input.matches?.('input[required], select[required]')) return;
    if (input.name === 'phone') { const p = parseUKPhone(input.value); if (p.valid) input.value = p.display; }
    if (input.name === 'postcode' && validPostcode(input.value)) input.value = formatPostcode(input.value);
    if (input.value || input.getAttribute('aria-invalid') === 'true') check(input);
  });
  form.addEventListener('input', e => { if (e.target.getAttribute('aria-invalid') === 'true') check(e.target); });
  form.addEventListener('change', e => { if (e.target.tagName === 'SELECT' && e.target.required) check(e.target); });
  form.addEventListener('submit', submit);
  let viewed = false, begun = false;
  const kind = form.dataset.kind;
  form.addEventListener('focusin', () => { if (!viewed) { viewed = true; track('configurator_form_view', {form: kind, range: state.range}); } });
  form.addEventListener('input', () => { if (!begun) { begun = true; track('configurator_form_start', {form: kind, range: state.range}); } });
}
async function submit(e) {
  e.preventDefault();
  const form = e.currentTarget, kind = form.dataset.kind || 'quote';
  if (form.dataset.busy) return;
  fillHidden();
  const inputs = [...form.querySelectorAll('input[required], select[required]')];
  const bad = inputs.filter(i => !check(i));
  const status = form.querySelector('.form-status');
  track('configurator_submit_attempt', {form: kind, range: state.range});
  if (bad.length) { bad[0].focus(); status.hidden = false; status.classList.remove('ok'); status.textContent = bad.length === 1 ? 'Please check the highlighted field.' : `Please check the ${bad.length} highlighted fields.`; track('configurator_form_error', {form: kind, field: bad[0].name, count: bad.length}); return; }
  status.hidden = true;
  const phone = parseUKPhone(form.elements.phone.value);
  form.elements['phone-e164'].value = phone.e164;
  form.elements.phone.value = phone.display;
  form.elements.postcode.value = formatPostcode(form.elements.postcode.value);
  const button = form.querySelector('[type=submit]'); button.classList.add('is-busy'); form.dataset.busy = '1';
  const sending = clone(state);
  const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 20000);
  try {
    const body = new URLSearchParams(new FormData(form)).toString();
    // Coastal's lead pipeline: the enquiry function stores it in the site's private Blobs store
    // (coastal-enquiries), the same store v1 used. Netlify Forms detection is off on this site.
    const res = await fetch('/api/enquiry', {method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json'}, body, signal: controller.signal});
    if (!res.ok) throw new Error('Not saved');
    const saved = await res.json().catch(() => ({}));
    if (!saved.ok) throw new Error('Not saved');
    const first = form.elements['first-name'].value.trim();
    contactMemo = {'first-name': first, 'last-name': form.elements['last-name'].value.trim(), email: form.elements.email.value.trim(), phone: form.elements.phone.value, postcode: form.elements.postcode.value};
    if (kind === 'quote') {
      receipt = reference(sending);
      try { sessionStorage.setItem(RECEIPT, receipt); sessionStorage.setItem(RECEIPT + '-name', first); } catch {}
      render();
      $('#quote-unlocked').scrollIntoView({block: 'start', behavior: reduced() ? 'auto' : 'smooth'});
      toast('Your design is with Coastal. Here is your price.');
      const lead = {lead_type: 'coastal_configurator_quote', range: sending.range, area_m2: Number(area(sending).toFixed(1))};
      track('configurator_enquiry_saved', lead); track('generate_lead', lead);
    } else {
      const done = form.closest('dialog').querySelector('.dialog-done');
      form.hidden = true; done.hidden = false;
      done.querySelector('.done-copy').textContent = kind === 'callback'
        ? `Thanks, ${first}. Coastal will call you on ${phone.display}, with your design in front of them.`
        : kind === 'visit' ? `Thanks, ${first}. Coastal will call you on ${phone.display} to arrange your visit.`
        : kind === 'book-call' ? `Thanks, ${first}. Coastal will confirm your call for ${form.elements['preferred-day'].value} (${form.elements['preferred-time'].value.toLowerCase()}) on ${phone.display}.`
        : `Thanks, ${first}. Open Coastal’s Lugarde brochure below.`;
      done.querySelector('h2').focus();
      if (kind === 'brochure') window.open(BROCHURE, '_blank', 'noopener');
      track('generate_lead', {lead_type: `coastal_${kind}`, range: sending.range});
    }
  } catch {
    status.hidden = false; status.classList.remove('ok');
    status.textContent = `That did not send. Your design is safe: please try again, or call Coastal on ${CONTACT.phone}.`;
    track('configurator_submit_error', {form: kind});
  } finally { clearTimeout(timer); button.classList.remove('is-busy'); delete form.dataset.busy; }
}

// ---- PDF ----------------------------------------------------------------------------------
const PDF_VIEWS = ['hero', 'front', 'back', 'left', 'right', 'inside', 'inside2', 'plan', 'dusk'];
async function downloadPdf(placement) {
  const status = $('#pdf-status');
  track('cta_click', {cta: 'download-pdf', placement});
  if (!unlocked()) { status.textContent = 'Send your design to Coastal above to unlock your PDF.'; $('#q-first').focus(); track('configurator_pdf_locked'); return; }
  const buttons = [$('#pdf-download'), $('#pdf-download-main')]; buttons.forEach(b => { b.disabled = true; });
  status.textContent = 'Drawing your design from every side and building your PDF. This takes a few seconds.';
  try {
    if (!scene) { needs3d(); await waitFor(() => scene, 20000); }
    if (!currentPrice() && price.status !== 'refused') { requestPrice({soon: true}); await waitFor(() => currentPrice() || price.status === 'error' || price.status === 'refused', 15000); }
    const views = scene ? scene.capture(PDF_VIEWS, {width: 2000, height: 1250}) : {};
    const mod = await loadPdf();
    let name = ''; try { name = sessionStorage.getItem(RECEIPT + '-name') || ''; } catch {}
    const out = await mod.downloadPDF(state, views, {contactName: name, reference: reference(state), price: currentPrice()});
    status.textContent = `Your PDF has downloaded (${out.pages} pages): your design from every side, inside and the plan, the specification, Lugarde’s price and how to book a call.`;
    track('configurator_pdf_download', {range: state.range, pages: out.pages, views: Object.keys(views).length});
  } catch (err) {
    console.error(err);
    status.textContent = `The PDF could not be made on this device. Your design link has been copied instead; call Coastal on ${CONTACT.phone} or email ${CONTACT.email}.`;
    try { await navigator.clipboard.writeText(shareURL(state, location.origin + '/configurator/')); } catch {}
    track('configurator_pdf_error');
  } finally { buttons.forEach(b => { b.disabled = false; }); }
}
const loadPdf = () => import(/*PDF*/'/assets/js/configurator-pdf.js');
const waitFor = (fn, ms) => new Promise(resolve => { const end = Date.now() + ms; const t = () => (fn() || Date.now() > end ? resolve(fn()) : setTimeout(t, 200)); t(); });
$('#pdf-download').addEventListener('click', () => downloadPdf('tile'));
$('#pdf-download-main').addEventListener('click', () => downloadPdf('next-step'));

// ---- Start --------------------------------------------------------------------------------
const loadedFrom = restore();
try { receipt = sessionStorage.getItem(RECEIPT); } catch {}
render();
persist();
setView('outside');
track('configurator_view', {range: state.range, resumed: Boolean(loadedFrom)});
track('configurator_step_view', {step: state.step + 1, step_name: STEPS[state.step]});
if (loadedFrom === 'link') toast('This shared design is ready to make your own.');
else if (loadedFrom === 'device') toast('Welcome back. Your design is as you left it.');
window.addEventListener('pagehide', e => { if (!e.persisted) scene?.dispose(); });
if (BOOK) setTimeout(() => openDialog('book', null), 300);

// ---- 3D ------------------------------------------------------------------------------------
// configurator-boot.js (reused from SMART) runs the preview: it picks the renderer and tier,
// retries, steps down, guards against crash loops and keeps the diagnostics.
const FALLBACK_TEXT = {
  context: "The 3D view couldn't start this time. Your design is saved, so loading it again is safe.",
  setup: "The 3D view couldn't start this time. Your design is saved, so loading it again is safe.",
  load: "The 3D view didn't download. Check your connection and load it again; your design is saved.",
  build: "The 3D view couldn't draw this design. Your choices still work, and Coastal sees every detail."
};
const TIER_PARAM = QA && params.get('tier');
function preferredRung() {
  const memory = navigator.deviceMemory || 8;
  if (memory <= 2) return 'low';
  const coarse = matchMedia('(pointer: coarse)').matches;
  return coarse || memory <= 4 || Math.min(screen.width, screen.height) < 700 ? 'medium' : 'high';
}
function pickPart(hit) {
  if (hit.kind === 'opening') {
    const o = state.openings.find(x => x.id === hit.id); if (!o) return;
    ui.wall = o.wall; ui.opening = o.id; ui.adding = null;
    if (state.step !== 3) selectStep(3, {focusHeading: false}); else render();
    scene?.focus(focusFor('opening', {id: o.id, wall: o.wall}));
    document.querySelector(`.opening-row[data-open="${o.id}"]`)?.scrollIntoView({block: 'nearest', behavior: reduced() ? 'auto' : 'smooth'});
    track('configurator_3d_pick', {part: 'opening'});
  } else {
    const stepOf = {skylight: 2, gutter: 2, downpipe: 2, trim: 2, fascia: 2, roof: 2, canopy: 1, corners: 1, posts: 1, walls: 4, cladding: 4, veranda: 5, spots: 5, wallLights: 5, floor: 5, heater: 5, beams: 5, anchors: 5, patio: 5, ceiling: 5, wallInsulation: 5, furniture: 0};
    const st = stepOf[hit.part];
    if (st !== undefined && st !== state.step) { selectStep(st, {focusHeading: false}); toast('Showing the options for what you tapped'); }
    track('configurator_3d_pick', {part: hit.part});
  }
}
const storage = name => { try { return window[name]; } catch { return null; } };
let sceneError = null, firstScene = true, bootStarted = false;
const boot = createBoot({
  container: $('#scene'),
  load: level => (level === 1 ? import(/*SCENE_GL1*/'/assets/js/scene-gl1.js') : import(/*SCENE*/'/assets/js/scene.js')),
  design: () => state,
  preferred: preferredRung(),
  override: RUNGS.includes(TIER_PARAM) ? TIER_PARAM : null,
  session: storage('sessionStorage'),
  local: storage('localStorage'),
  keyPrefix: 'coastal',
  track,
  sceneOptions: {onViewChange: v => setView(v), onPick: pickPart},
  onChange(phase, detail) {
    if (phase === 'loading' || phase === 'down') {
      scene = null;
      $('#stage-loader-text').textContent = firstScene ? 'Building your design in 3D' : 'Reloading the 3D view';
      $('#stage-loader').hidden = false;
    } else if (phase === 'ready') sceneReady(detail);
    else if (phase === 'verified') $('#stage-poster').classList.add('is-gone');
    else if (phase === 'failed') sceneFailed3d(detail.reason, detail.error);
    debug3d();
  }
});
function sceneReady(next) {
  scene = next;
  scene.setDimensions(state.step === 1);
  scene.select(ui.opening && state.step === 3 ? ['opening:' + ui.opening] : []);
  if (night) scene.setNight(true);
  const view = firstScene ? (state.step === 5 ? 'inside' : 'outside') : ui.view;
  if (view && view !== 'outside') scene.setView(view, {animate: firstScene});
  $('#stage-loader').hidden = true;
  $('#stage-fallback').hidden = true;
  $$('.view-switch, .stage-tools, .history, #stage-hint').forEach(el => { el.hidden = false; });
  if (boot.rung === 'svg') toast('Showing a simplified 3D view on this device. Every choice works as normal.');
  if (!firstScene) return;
  firstScene = false;
  if (state.step === LAST) captureThumb();
}
function sceneFailed3d(reason, err) {
  if (err) console.error(err);
  scene = null;
  $('#stage-loader').hidden = true; $('#stage-fallback').hidden = false;
  $('#fallback-caption').textContent = FALLBACK_TEXT[reason] || FALLBACK_TEXT.context;
  $('#fallback-retry').hidden = false;
  $$('.stage-tools, .history, #stage-hint').forEach(el => { el.hidden = true; });
  $('#stage').dataset.fallback = reason;
  sceneError = err ? String(err) : reason;
  track('configurator_3d_fallback', {reason, webgl: boot.gl, error: err ? String(err).slice(0, 120) : undefined});
  firstScene = false;
}
// ?debug3d on any device shows what the 3D is running on and every step it took, with Copy
// report, so a phone that misbehaves can say why.
function debug3d() {
  if (!DEBUG3D) return;
  let box = $('#debug3d');
  if (!box) {
    box = document.createElement('aside'); box.id = 'debug3d'; box.className = 'debug3d';
    box.innerHTML = '<pre></pre><button type="button" class="button ghost small">Copy report</button>';
    document.body.append(box);
    box.querySelector('button').addEventListener('click', () => navigator.clipboard?.writeText(box.querySelector('pre').textContent).catch(() => {}));
  }
  const d = boot.diagnostics(), s = d.scene || {};
  const fallback = $('#stage').dataset.fallback;
  box.querySelector('pre').textContent = [
    `3D: ${fallback ? 'photo (' + fallback + ')' : (d.rung || 'not started') + (d.verified ? '' : ' (starting)')} | WebGL ${d.gl}`,
    `GPU: ${s.gpu || '-'}`,
    `ratio ${s.ratio ?? '-'} | buffer ${s.buffer ? s.buffer.join('x') : '-'} | antialias ${s.context?.antialias ?? '-'} | max texture ${s.maxTexture ?? '-'}`,
    `extensions: ${s.extensions?.join(', ') || '-'}`,
    `textures ${s.textures?.textures ?? '-'} (scale ${s.textures?.scale ?? '-'}, flat ${s.textures?.failures ?? 0}) | frames ${s.frames ?? '-'}`,
    `first frame: ${s.samples?.length ? JSON.stringify(s.samples[0]) : '-'} | gl errors ${s.glErrors?.join(',') || '-'}`,
    `shader errors: ${s.shaderErrors?.join(' || ') || '-'}`,
    `error: ${sceneError || s.lastError || '-'}`,
    'steps:',
    ...d.log.map(e => `  +${e.t}ms ${e.rung || '-'} ${e.event}${e.detail ? ': ' + e.detail : ''}`),
    `screen ${screen.width}x${screen.height} @${devicePixelRatio} | memory ${navigator.deviceMemory || '?'}GB`,
    navigator.userAgent
  ].join('\n');
}
$('#fallback-retry').addEventListener('click', () => { track('configurator_3d_retry', {reason: $('#stage').dataset.fallback}); persist(); location.reload(); });

// The 3D starts by itself once the first screen has painted (GLO standard, 15 Oct 2026; Yorkshire's
// pattern): the poster of the building is the largest paint. On the poster's LCP entry (or once it
// has loaded where LCP isn't reported, with a 3 s fallback) the page waits for load, then 2.5 s and
// an idle moment, as Yorkshire's designer does, so building the 3D never blocks the first screen
// (Lighthouse mobile). A touch, scroll or key before then starts it at once.
function startBoot(why) {
  if (bootStarted) return;
  bootStarted = true;
  for (const ev of WAKE) removeEventListener(ev, wake, true);
  track('configurator_3d_start', {trigger: why});
  boot.start();
}
// The tour on a first visit, a moment after the page settles; Help replays it.
if (!tour.seen() && !QA) setTimeout(() => { if (!document.querySelector('dialog[open]')) tour.start(); }, 1200);
const WAKE = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll'];
const wake = e => startBoot(e.type);
for (const ev of WAKE) addEventListener(ev, wake, {capture: true, passive: true});
const idle = (fn, timeout) => (window.requestIdleCallback ? requestIdleCallback(fn, {timeout}) : setTimeout(fn, timeout));
function afterPoster(go) {
  let painted = false;
  const settle = why => {
    if (painted) return;
    painted = true;
    const run = () => setTimeout(() => idle(() => go(why), 1500), 2500);
    if (document.readyState === 'complete') run(); else addEventListener('load', run, {once: true});
  };
  try {
    const po = new PerformanceObserver(list => {
      if (list.getEntries().some(e => e.element && e.element.id === 'stage-poster')) { po.disconnect(); settle('poster-lcp'); }
    });
    po.observe({type: 'largest-contentful-paint', buffered: true});
  } catch {}
  const img = $('#stage-poster');
  const loaded = () => setTimeout(() => requestAnimationFrame(() => settle('poster-load')), 100);
  if (img && !img.complete) { img.addEventListener('load', loaded, {once: true}); img.addEventListener('error', () => settle('poster-error'), {once: true}); } else loaded();
  setTimeout(() => settle('timer'), 3000);
}
if (QA && params.has('no3d')) bootStarted = true;
else afterPoster(startBoot);

// QA hook for headless checks: ?qa=1 exposes the live scene, the design and the boot's report.
if (QA) {
  window.__cfg = {
    get scene() { return scene; }, get state() { return state; },
    get rung() { return boot.rung; }, get boot() { return boot.diagnostics(); },
    get attempt() { return Math.max(0, boot.diagnostics().log.filter(e => e.event === 'ready').length - 1); },
    get fallback() { return $('#stage').dataset.fallback || null; },
    get price() { return price; },
    set(patch) { const r = apply(state, patch); state = {...r.state, step: state.step}; render(); persist(); },
    unlock(name = 'QA') { receipt = reference(state); try { sessionStorage.setItem(RECEIPT, receipt); sessionStorage.setItem(RECEIPT + '-name', name); } catch {} render(); },
    // The customer PDF without a form submission, for QA and the reviewed example.
    async pdf(options = {}) {
      if (!currentPrice()) { requestPrice({soon: true}); await waitFor(() => currentPrice() || price.status === 'error' || price.status === 'refused', 20000); }
      const views = scene ? scene.capture(PDF_VIEWS, {width: 2000, height: 1250}) : {};
      return (await loadPdf()).downloadPDF(state, views, {reference: reference(state), price: currentPrice(), ...options});
    },
    model: {normalise, apply, switchRange, specRows, addOpening, fitsWall, limits, stepSize, slopesFor, coveringsFor, canopySides, canopyDepths, optionAllowed, treatmentKinds}, focusFor,
    data: {RANGES, RANGE_ORDER, ROOFS, OPENINGS, TRIM_COLOURS, COVERINGS, TREATMENT_KINDS, COLOURS, OPTIONS, SPOTS, WALL_LIGHTS, SKYLIGHTS, DEALER_EXTRAS, USES, FRAME_KINDS}
  };
}
