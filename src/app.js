// Coastal Garden Buildings design studio: the page. Steps, live Lugarde price, the 3D preview
// (loaded after first paint through boot.js), share links, forms, tour and diagnostics.
import {shimDialogs} from './compat.js';
import {createBoot} from './boot.js';
import {RANGES, RANGE_ORDER, ROOFS, SHINGLES, TRIMS, FINISHES, FINISH_ORDER, PRODUCTS, DOORS, WINDOWS, EXTRAS, STEPS, WALL_NAMES, PROMO, TRANSPORT} from './catalog.js';
import {DEFAULT, normalise, encode, decode, designLink, priceFor, money, specification, sizes, promoActive} from './model.js';
import {COASTAL, USPS} from './facts.js';
import {envelope} from './geometry.js';
import {track} from './analytics.js';
import {openForm, openInfo, initForms} from './forms.js';
import {startTour, maybeStartTour} from './tour.js';

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const BUILD = JSON.parse($('#build').textContent);
const qs = new URLSearchParams(location.search);
const QA = qs.has('qa');
const STORE = 'coastal-design-v2';

// ---- State --------------------------------------------------------------------------------
let book = null;
let design = initialDesign();
let step = 0, selected = null, notes = [], booted = false;
const seen = new Set();

function initialDesign() {
  const h = new URLSearchParams(location.hash.slice(1));
  if (h.get('d')) { const d = decode(h.get('d')); if (d) return d; }
  try { const s = JSON.parse(localStorage.getItem(STORE) || 'null'); if (s) return normalise(s).design; } catch {}
  return normalise(DEFAULT).design;
}
function save() {
  try { localStorage.setItem(STORE, JSON.stringify(design)); } catch {}
  const code = encode(design);
  try { history.replaceState(null, '', `${location.pathname}${location.search}#d=${encodeURIComponent(code)}`); } catch {}
}
const price = () => book ? priceFor(design, book) : null;

/**
 * Applies a change, keeps the design valid, re-renders, and turns the 3D to the changed part.
 * `focus` is the scene focus spec; `option` names the change for analytics.
 */
function change(patch, {focus = null, option = null, value = null} = {}) {
  const next = typeof patch === 'function' ? patch(JSON.parse(JSON.stringify(design))) : {...design, ...patch};
  const {design: d, notes: n} = normalise(next, design);
  design = d; notes = n;
  save();
  render();
  scene()?.update(design);
  if (focus) setTimeout(() => scene()?.focus(focus), 60);
  if (option) track('design_option_changed', {step: STEPS[step].id, option, value: String(value ?? '')});
}

// ---- 3D -------------------------------------------------------------------------------------
let boot = null;
const scene = () => boot?.scene || null;
const isPhone = matchMedia('(pointer: coarse)').matches || Math.min(screen.width, screen.height) < 600;
window.__cfg = QA ? {get state() { return design; }, get scene() { return boot?.scene; }, get boot() { return boot && {log: boot.diagnostics().log, verified: boot.diagnostics().verified}; }, get rung() { return boot?.rung; }, fallback: null, attempt: 0, change, setStep: s => goto(s), price} : undefined;

function start3D() {
  if (booted) return;
  booted = true;
  const container = $('#scene');
  const override = qs.get('tier');
  boot = createBoot({
    container,
    load: level => level === 1 ? import(/* @vite-ignore */ BUILD.gl1) : import('./scene/index.js'),
    design: () => design,
    sceneOptions: {onPick: pick, onViewChange: v => setViewButtons(v)},
    preferred: isPhone ? 'medium' : 'high',
    override: ['high', 'medium', 'low', 'safe', 'svg'].includes(override) ? override : null,
    session: sessionStorage, local: localStorage, track,
    onChange(phase, detail) {
      if (window.__cfg) window.__cfg.attempt++;
      $('#stage-loader').hidden = phase !== 'loading' && phase !== 'down';
      if (phase === 'ready') {
        $('#stage-poster').hidden = true; $('#stage-fallback').hidden = true;
        if (window.__cfg) window.__cfg.fallback = null;
        if (selected) detail.select([`opening:${selected}`]);
      }
      if (phase === 'verified') debugPanel();
      if (phase === 'failed') {
        // Only a download or build failure ends here: show the photo with a retry button.
        if (window.__cfg) window.__cfg.fallback = detail.reason;
        $('#stage-fallback').hidden = false; $('#stage-poster').hidden = true;
        $('#fallback-caption').textContent = detail.reason === 'load' ? 'The 3D view could not download on this connection. Your design and price still work.' : 'The 3D view stopped. Your design and price still work.';
        $('#fallback-retry').hidden = false;
        track('configurator_3d_failed', {reason: detail.reason});
      }
      debugPanel();
    }
  });
  boot.start();
}
$('#fallback-retry').addEventListener('click', () => { booted = false; boot?.dispose(); boot = null; $('#stage-fallback').hidden = true; start3D(); track('cta_click', {cta: '3d_retry'}); });

function pick(hit) {
  if (hit.kind === 'opening') { selected = hit.id; goto(2); render(); scene()?.select([`opening:${hit.id}`]); track('design_part_picked', {part: 'opening'}); }
  else if (hit.part === 'roof') { goto(1); track('design_part_picked', {part: 'roof'}); }
}
function setViewButtons(v) {
  for (const b of $$('[data-view]')) b.setAttribute('aria-pressed', String(b.dataset.view === v));
  $('#stage-hint').textContent = v === 'plan' ? 'Plan view: drag to move, scroll or pinch to zoom' : v === 'inside' ? 'Inside: drag to look around' : 'Drag to turn, scroll or pinch to zoom';
}
for (const b of $$('[data-view]')) b.addEventListener('click', () => { scene()?.setView(b.dataset.view); setViewButtons(b.dataset.view); track('view_changed', {option: b.dataset.view}); });
for (const b of $$('[data-zoom]')) b.addEventListener('click', () => { const z = +b.dataset.zoom; if (z) scene()?.zoom(z); else scene()?.reset(); track('view_zoom', {option: z > 0 ? 'in' : z < 0 ? 'out' : 'reset'}); });

// ---- Rendering --------------------------------------------------------------------------------
const body = $('#step-body');
function render() {
  renderStepper();
  const s = STEPS[step].id;
  const html = {range: rangeStep, size: sizeStep, openings: openingsStep, finish: finishStep, extras: extrasStep, price: priceStep}[s]();
  body.innerHTML = html + (notes.length ? `<div class="notes" role="status">${notes.map(n => `<p>${esc(n)}</p>`).join('')}</div>` : '');
  paintSwatches();
  renderUsps();
  renderTotal();
  $('#back-btn').hidden = step === 0;
  $('#next-btn').textContent = step === STEPS.length - 1 ? 'Book a call' : `Next: ${STEPS[step + 1].name}`;
  if (!seen.has(s)) { seen.add(s); track('configurator_step_view', {step: s, index: step + 1}); }
}
function renderStepper() {
  $('#stepper').innerHTML = STEPS.map((s, i) => `<button type="button" data-step="${i}" ${i === step ? 'aria-current="step"' : ''} class="${i < step ? 'done' : ''}"><b>${i + 1}</b>${esc(s.name)}</button>`).join('');
  for (const b of $$('[data-step]')) b.addEventListener('click', () => goto(+b.dataset.step));
}
function goto(i) {
  step = Math.max(0, Math.min(STEPS.length - 1, i));
  notes = [];
  render();
  body.focus({preventScroll: true});
  if (matchMedia('(max-width: 1023px)').matches) $('#stepper').scrollIntoView({block: 'start', behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto'});
  // Each step frames what it is about.
  const sc = scene();
  if (!sc) return;
  const id = STEPS[step].id;
  if (id === 'size' || id === 'range') sc.setView('outside');
  if (id === 'openings' && selected) sc.select([`opening:${selected}`]); else sc.select([]);
  if (id === 'extras' && design.extras.floor) sc.focus({tags: ['floor'], view: 'inside', lookDown: true, highlight: false});
  if (id === 'price') sc.setView('outside');
}
$('#back-btn').addEventListener('click', () => { goto(step - 1); track('cta_click', {cta: 'back'}); });
$('#next-btn').addEventListener('click', () => {
  if (step === STEPS.length - 1) { openForm('book', ctx()); track('cta_click', {cta: 'book_call', where: 'next'}); return; }
  goto(step + 1); track('cta_click', {cta: 'next', step: STEPS[step].id});
});

function renderTotal() {
  const p = price();
  const el = $('#stage-total');
  if (!p) { el.innerHTML = book ? '<span>Price on request for this size</span>' : '<span>Loading prices</span>'; return; }
  el.innerHTML = `${p.promo ? `<s>${money(p.list)}</s> ` : ''}<strong>${money(p.total)}</strong><span>${p.promo ? 'with Lugarde’s 10% offer, ' : ''}inc VAT and delivery</span>`;
}
function renderUsps() {
  const list = USPS[STEPS[step].id] || [];
  $('#usps').innerHTML = list.length ? `<h3>Why Coastal</h3>${list.map(u => `<p class="usp"><strong>${esc(u.title)}</strong><span>${esc(u.quote)}</span> <a href="${esc(u.src)}" target="_blank" rel="noopener" data-cta="usp_source">${esc(u.by)}</a></p>`).join('')}` : '';
}
function paintSwatches() { for (const s of $$('[data-swatch]')) s.style.background = s.dataset.swatch; }
const attr = (on) => `aria-pressed="${on ? 'true' : 'false'}"`;

// Step 1: range.
function fromPrice(range) {
  if (!book) return null;
  const R = RANGES[range];
  let best = null;
  for (const wall of R.walls) for (const roof of R.roofs) {
    const w = sizes(range, wall, roof, 'width')[0], dd = sizes(range, wall, roof, 'depth')[0];
    const d = normalise({range, wall, roof, width: w, depth: dd, openings: [{id: 'd1', code: 'pe46h', wall: 'front', at: 0}], extras: {}}).design;
    const p = priceFor(d, book);
    if (p && (!best || p.list < best.list)) best = {...p, d};
  }
  return best;
}
function rangeStep() {
  return `<h2>Choose your Lugarde range</h2><p class="lead">Coastal is a Lugarde dealer. Each range is built a different way; all are made to order in the size you choose.</p>
  <div class="cards">${RANGE_ORDER.map(k => {
    const R = RANGES[k], f = fromPrice(k);
    return `<button type="button" class="card" data-range="${k}" ${attr(design.range === k)}>
      <img src="/assets/img/range-${k}.webp" width="116" height="86" alt="" loading="lazy">
      <span><strong>${esc(R.name)}</strong>
      ${f ? `<span class="from">From ${money(f.list, false)}</span><span class="sub">${f.d.width.toFixed(1)} x ${f.d.depth.toFixed(1)}m with a single door, inc VAT and delivery</span>` : ''}
      <span class="sub">${esc(R.blurb)}</span>
      <ul>${R.facts.map(x => `<li>${esc(x)}</li>`).join('')}</ul></span></button>`;
  }).join('')}</div>
  <p class="small">Photos: Lugarde York log cabin and Prima PR32 from Coastal's site; the Pro image is Lugarde's.</p>`;
}
// Step 2: size and roof.
function sizeStep() {
  const R = RANGES[design.range];
  const ws = sizes(design.range, design.wall, design.roof, 'width'), ds = sizes(design.range, design.wall, design.roof, 'depth');
  const sel = (axis, list) => `<div class="size-ctl"><label for="sz-${axis}">${axis === 'width' ? 'Width (front)' : 'Depth (side)'}</label>
    <button type="button" data-step-size="${axis}" data-dir="-1" aria-label="Smaller ${axis}">−</button>
    <select id="sz-${axis}" data-size="${axis}">${list.map(v => `<option value="${v}" ${Math.abs(v - design[axis]) < 1e-6 ? 'selected' : ''}>${v.toFixed(1)} m</option>`).join('')}</select>
    <button type="button" data-step-size="${axis}" data-dir="1" aria-label="Larger ${axis}">+</button></div>`;
  const p = price();
  return `<h2>Size and roof</h2><p class="lead">Outside wall to outside wall, as Lugarde measures. ${R.name}s come in ${esc(stepText())}.</p>
  <div class="stepper-row">${sel('width', ws)}${sel('depth', ds)}</div>
  <p class="facts"><span>Floor area <b>${(design.width * design.depth).toFixed(1)}m²</b></span><span>Height <b>${heightText()}</b></span>${p ? `<span>Building <b>${money(p.lines.filter(l => l.group === 'building').reduce((s, l) => s + l.amount, 0))}</b></span>` : ''}</p>
  ${R.walls.length > 1 ? `<h3>Wall thickness</h3><div class="opts">${R.walls.map(w => `<button type="button" class="opt" data-wall="${w}" ${attr(design.wall === w)}><strong>${w}mm</strong><span>${wallNote(w)}</span></button>`).join('')}</div>` : ''}
  <h3>Roof</h3><div class="opts">${R.roofs.map(r => `<button type="button" class="opt" data-roof="${r}" ${attr(design.roof === r)}><strong>${esc(ROOFS[r].name)}</strong><span>${esc(ROOFS[r].blurb)}</span></button>`).join('')}</div>
  ${design.roof === 'flat' ? `<h3>Roof trim</h3><div class="chips">${Object.entries(TRIMS).map(([k, t]) => `<button type="button" class="chip" data-trim="${k}" ${attr(design.trim === k)}><span class="swatch" data-swatch="${t.hex}"></span>${esc(t.name)}</button>`).join('')}</div>` : ''}
  ${['apex', 'pyramid'].includes(design.roof) ? `<h3>Shingle colour</h3><div class="chips">${Object.entries(SHINGLES).map(([k, s]) => `<button type="button" class="chip" data-shingles="${k}" ${attr(design.shingles === k)}><span class="swatch" data-swatch="${s.hex}"></span>${esc(s.name)}</button>`).join('')}</div><p class="small">Felt shingles in all five colours are included in the price.</p>` : ''}`;
}
function stepText() {
  const R = RANGES[design.range], w = Array.isArray(R.width) ? R.width : R.width[design.wall];
  return `widths of ${w[0].toFixed(1)} to ${w[1].toFixed(1)}m in ${Math.round(w[2] * 100)}cm steps`;
}
function wallNote(w) { return {28: 'Summerhouse and garden room use', 44: 'Lugarde\u2019s most popular wall', 68: 'Double tongue and groove, sturdier'}[w] || ''; }
/** Height to the top of the roof above the foundation beams, as Lugarde measures it. */
function heightText() { const e = envelope(design); return `${(e.ridge - e.y0).toFixed(2)}m`; }
// Step 3: doors and windows.
function openingsStep() {
  const list = design.openings;
  const opt = (codes, current) => codes.map(c => `<option value="${c}" ${c === current ? 'selected' : ''}>${esc(PRODUCTS[c].name)} (${PRODUCTS[c].w} x ${PRODUCTS[c].h}mm), ${money(PRODUCTS[c].price, false)}</option>`).join('');
  return `<h2>Doors and windows</h2><p class="lead">Lugarde's own joinery, priced from their list. Pick one to move it along its wall; tap one in the 3D to select it.</p>
  <div class="openings">${list.map(o => {
    const p = PRODUCTS[o.code];
    return `<div class="opening" data-oid="${o.id}" ${selected === o.id ? 'aria-current="true"' : ''}>
      <header><button type="button" class="name" data-select="${o.id}">${esc(p.name)}</button><span class="price">${money(p.price, false)}</span></header>
      <div class="row">
        <label class="sr" for="code-${o.id}">Type</label><select id="code-${o.id}" data-code="${o.id}">${opt(p.kind === 'door' ? DOORS : WINDOWS, o.code)}</select>
        <label class="sr" for="wall-${o.id}">Wall</label><select id="wall-${o.id}" data-wallsel="${o.id}">${Object.entries(WALL_NAMES).map(([k, n]) => `<option value="${k}" ${k === o.wall ? 'selected' : ''}>${n}</option>`).join('')}</select>
      </div>
      <div class="row"><button type="button" class="mini" data-move="${o.id}" data-dir="-1" aria-label="Move ${esc(p.name)} left">← Left</button><button type="button" class="mini" data-move="${o.id}" data-dir="1" aria-label="Move ${esc(p.name)} right">Right →</button><button type="button" class="mini danger" data-remove="${o.id}" aria-label="Remove ${esc(p.name)}">Remove</button></div>
    </div>`;
  }).join('')}</div>
  <div class="add-row"><button type="button" class="btn" data-add="door">Add a door</button><button type="button" class="btn" data-add="window">Add a window</button></div>
  <p class="small">${esc(PRODUCTS.pe45h.note)}. Lugarde doors and windows are double glazed (sliding doors excepted) and 56mm thick.</p>`;
}
// Step 4: colour.
function finishStep() {
  const R = RANGES[design.range], p = price();
  const spray = p && book.entries[`${design.range}|${design.roof}|${design.wall}|${Math.round(Math.max(design.width, design.depth) * 1000)}x${Math.round(Math.min(design.width, design.depth) * 1000)}`]?.spray;
  return `<h2>Colour</h2><p class="lead">Lugarde buildings come untreated as standard. A factory spray pre-treatment protects the timber in the colour you choose${spray ? `, for ${money(spray)} at this size` : ''}; Lugarde advise staining within a year.</p>
  <div class="opts">${FINISH_ORDER.filter(k => k === 'none' || R.treatments.includes(FINISHES[k].group)).map(k => `<button type="button" class="opt" data-finish="${k}" ${attr(design.finish === k)}><span class="swatch" data-swatch="${FINISHES[k].hex}"></span><strong>${esc(FINISHES[k].name)}</strong><span>${k === 'none' ? 'Included' : 'Spray pre-treatment'}</span></button>`).join('')}</div>
  <p class="small">On-screen colours are a guide. Coastal can show you treated samples at the show site, and their painter can finish a building in a colour of your choice (quoted).</p>`;
}
// Step 5: extras.
function extrasStep() {
  const p = price(), key = `${design.range}|${design.roof}|${design.wall}|${Math.round(Math.max(design.width, design.depth) * 1000)}x${Math.round(Math.min(design.width, design.depth) * 1000)}`;
  const entry = book?.entries[key];
  const row = k => {
    const x = EXTRAS[k];
    if (x.range && !x.range.includes(design.range)) return '';
    if (x.roofs && !x.roofs.includes(design.roof)) return '';
    const amt = typeof x.price === 'number' ? x.price : entry?.[x.price];
    return `<label class="toggle"><span><strong>${esc(x.name)}</strong><br><span>${esc(x.note || '')}</span></span><input type="checkbox" data-extra="${k}" ${design.extras[k] ? 'checked' : ''} ${x.needs && !design.extras[x.needs] ? 'disabled' : ''}><span class="amt">${amt != null ? money(amt) : ''}</span></label>`;
  };
  const groups = [['comfort', 'Comfort and use all year'], ['outside', 'Outside details']];
  return `<h2>Extras</h2><p class="lead">Lugarde's options at Lugarde's prices for this size. Insulation and a floor make a garden room usable all year.</p>
  ${groups.map(([g, title]) => `<h3>${title}</h3>${Object.keys(EXTRAS).filter(k => EXTRAS[k].group === g).map(row).join('')}`).join('')}`;
}
// Step 6: price.
function priceStep() {
  const p = price();
  if (!p) return `<h2>Your price</h2><p class="lead">${book ? 'This size is priced by Coastal on request.' : 'Loading Lugarde’s prices…'}</p>${ctaBlock()}`;
  const rows = p.lines.map(l => `<tr><th scope="row">${esc(l.label)}</th><td>${money(l.amount)}</td></tr>`).join('');
  return `<h2>Your price</h2>
  <div class="price-head"><strong>${money(p.total)}</strong><span class="small">inc VAT (${money(p.vat)}) and Lugarde delivery</span></div>
  ${p.promo ? `<p class="small">${esc(PROMO.label)}. ${esc(PROMO.terms)}</p>` : ''}
  ${ctaBlock()}
  <table class="price-lines"><caption class="sr">Price breakdown</caption><tbody>${rows}
    <tr class="sub"><th scope="row">Products</th><td>${money(p.products)}</td></tr>
    <tr><th scope="row">Lugarde transport surcharge</th><td>${money(p.transport)}</td></tr>
    ${p.promo ? `<tr class="promo"><th scope="row">Lugarde late summer offer, 10% off products</th><td>${money(p.promo)}</td></tr>` : ''}
    <tr class="total"><th scope="row">Total inc VAT</th><td>${money(p.total)}</td></tr></tbody></table>
  <p class="small">Prices are Lugarde's own, read from the Lugarde configurator Coastal uses on ${esc(p.captured)}. Delivery to mainland England and Wales is included; Lugarde add ${money(83, false)} for Scotland. Installation, a base, electrics and removal of an old building are quoted by Coastal after a free site survey.</p>
  <h3>Your specification</h3><table class="price-lines"><tbody>${specification(design).map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td class="spec">${esc(v)}</td></tr>`).join('')}</tbody></table>`;
}
function ctaBlock() {
  return `<div class="price-actions"><button type="button" class="btn primary" data-cta="book">Book a call</button><button type="button" class="btn primary" data-cta="pdf">Download PDF</button><button type="button" class="btn" data-cta="callback">Request a callback</button><button type="button" class="btn" data-cta="visit">Visit the showroom</button></div>`;
}

// ---- Events in the panel -----------------------------------------------------------------------
const DIRS = {front: [0, .18, 1], back: [0, .18, -1], left: [-1, .18, .1], right: [1, .18, .1]};
body.addEventListener('click', e => {
  const t = e.target.closest('button,[data-cta]');
  if (!t) return;
  const ds = t.dataset;
  if (ds.range) change({range: ds.range, wall: RANGES[ds.range].wall, roof: design.range === ds.range ? design.roof : RANGES[ds.range].roof}, {focus: {tags: ['walls'], whole: true}, option: 'range', value: ds.range});
  else if (ds.wall) change({wall: +ds.wall}, {focus: {tags: ['corners', 'posts', 'reveal'], dir: [.8, .25, .9]}, option: 'wall', value: ds.wall});
  else if (ds.roof) change({roof: ds.roof}, {focus: {tags: ['roof'], dir: [-.6, .9, 1], whole: true}, option: 'roof', value: ds.roof});
  else if (ds.trim) change({trim: ds.trim}, {focus: {tags: ['trim'], dir: [-.3, .45, 1]}, option: 'trim', value: ds.trim});
  else if (ds.shingles) change({shingles: ds.shingles}, {focus: {tags: ['shingles'], dir: [-.6, .9, 1]}, option: 'shingles', value: ds.shingles});
  else if (ds.finish) change({finish: ds.finish}, {focus: {tags: ['walls'], whole: true}, option: 'finish', value: ds.finish});
  else if (ds.stepSize) {
    const axis = ds.stepSize, list = sizes(design.range, design.wall, design.roof, axis), i = list.findIndex(v => Math.abs(v - design[axis]) < 1e-6);
    const v = list[Math.max(0, Math.min(list.length - 1, i + +ds.dir))];
    if (v !== design[axis]) change({[axis]: v}, {focus: {tags: ['walls'], whole: true}, option: axis, value: v});
  } else if (ds.select) { selected = ds.select; const o = design.openings.find(x => x.id === selected); render(); scene()?.focus({tags: [`opening:${selected}`], dir: DIRS[o.wall]}); scene()?.select([`opening:${selected}`]); }
  else if (ds.move) {
    const id = ds.move, o = design.openings.find(x => x.id === id);
    selected = id;
    change(d => { const x = d.openings.find(y => y.id === id); x.at = +(x.at + +ds.dir * .1).toFixed(3); return d; }, {focus: {tags: [`opening:${id}`], dir: DIRS[o.wall]}, option: 'opening_move', value: o.code});
    scene()?.select([`opening:${id}`]);
  } else if (ds.remove) {
    const o = design.openings.find(x => x.id === ds.remove);
    if (PRODUCTS[o.code].kind === 'door' && design.openings.filter(x => PRODUCTS[x.code].kind === 'door').length === 1) { toast('Every building needs a door: change this one instead.'); return; }
    selected = null;
    change(d => { d.openings = d.openings.filter(x => x.id !== ds.remove); return d; }, {focus: {tags: ['walls'], dir: DIRS[o.wall], whole: true}, option: 'opening_remove', value: o.code});
  } else if (ds.add) addOpening(ds.add);
  else if (ds.cta) cta(ds.cta, 'price_step');
});
body.addEventListener('change', e => {
  const t = e.target, ds = t.dataset;
  if (ds.size) change({[ds.size]: +t.value}, {focus: {tags: ['walls'], whole: true}, option: ds.size, value: t.value});
  else if (ds.code) { const id = ds.code; selected = id; change(d => { d.openings.find(x => x.id === id).code = t.value; return d; }, {focus: {tags: [`opening:${id}`], dir: DIRS[design.openings.find(x => x.id === id).wall]}, option: 'opening_type', value: t.value}); scene()?.select([`opening:${id}`]); }
  else if (ds.wallsel) { const id = ds.wallsel; selected = id; change(d => { const o = d.openings.find(x => x.id === id); o.wall = t.value; o.at = 0; return d; }, {focus: {tags: [`opening:${id}`], dir: DIRS[t.value]}, option: 'opening_wall', value: t.value}); scene()?.select([`opening:${id}`]); }
  else if (ds.extra) {
    const k = ds.extra, on = t.checked;
    const focus = {floor: {tags: ['floor'], view: 'inside', lookDown: true}, floorIns: {tags: ['insulation:floor'], dir: [1, .12, .2]}, roofIns: {tags: ['insulation:roof'], view: 'inside'}, wallIns: {tags: ['insulation:walls'], view: 'inside'},
      gutters: {tags: ['gutters'], dir: [-.4, .45, -1]}, diamond: {tags: ['diamond', 'corners'], dir: [.8, .2, .9]}, anchors: {tags: ['anchors'], dir: [-.5, .2, 1]}, weather: {tags: ['weather'], dir: [0, .2, 1]},
      vents: {tags: ['vents'], dir: [1, .3, 0]}, spots: {tags: ['spots'], view: 'inside'}, wallLights: {tags: ['wallLights'], dir: [0, .25, 1]}, skylight: {tags: ['skylight'], dir: [-.4, 1, .6]}}[k];
    change(d => { d.extras[k] = on; if (k === 'floor' && !on) delete d.extras.floorIns; return d; }, {focus: on ? focus : {tags: ['walls'], whole: true, highlight: false}, option: `extra_${k}`, value: on});
  }
});
function addOpening(kind) {
  const code = kind === 'door' ? 'pe46h' : 'pe23';
  const wall = kind === 'door' ? 'front' : (design.openings.some(o => o.wall === 'right') ? 'left' : 'right');
  const id = `o${Date.now().toString(36).slice(-5)}`;
  const before = design.openings.length;
  change(d => { d.openings.push({id, code, wall, at: 0}); return d; }, {focus: {tags: [`opening:${id}`], dir: DIRS[wall]}, option: `add_${kind}`, value: code});
  if (design.openings.length === before) toast(`There is no room for another ${kind} on that wall at this size.`);
  else { selected = id; render(); scene()?.select([`opening:${id}`]); }
}

// ---- Calls to action ---------------------------------------------------------------------------
function ctx() { return {design, price: price(), spec: specification(design), link: designLink(design, location.origin + location.pathname), scene: scene()}; }
function cta(name, where = 'header') {
  track('cta_click', {cta: name, where});
  if (name === 'callback' || name === 'visit' || name === 'book' || name === 'pdf') openForm(name, ctx());
}
document.addEventListener('click', e => {
  const t = e.target.closest('[data-cta]');
  if (!t || body.contains(t)) return;
  const name = t.dataset.cta;
  if (t.tagName === 'A') { track('cta_click', {cta: name, where: t.closest('.top') ? 'header' : t.closest('.foot') ? 'footer' : 'page'}); return; }
  cta(name, t.closest('.top') ? 'header' : 'page');
  $('#top-ctas').classList.remove('open'); $('#menu-btn').setAttribute('aria-expanded', 'false');
});
$('#menu-btn').addEventListener('click', () => { const open = $('#top-ctas').classList.toggle('open'); $('#menu-btn').setAttribute('aria-expanded', String(open)); track('cta_click', {cta: 'menu', where: 'header'}); });
$('#help-btn').addEventListener('click', e => { e.stopPropagation(); const m = $('#help-menu'); m.hidden = !m.hidden; $('#help-btn').setAttribute('aria-expanded', String(!m.hidden)); track('cta_click', {cta: 'help', where: 'header'}); });
document.addEventListener('click', e => { if (!e.target.closest('.top-tools')) { $('#help-menu').hidden = true; $('#help-btn').setAttribute('aria-expanded', 'false'); } });
$('#help-menu').addEventListener('click', e => {
  const b = e.target.closest('[data-help]'); if (!b) return;
  $('#help-menu').hidden = true;
  const h = b.dataset.help;
  track('cta_click', {cta: `help_${h}`, where: 'help'});
  if (h === 'tour') startTour({goto, track});
  else if (h === 'share') share();
  else if (h === 'pricing') openInfo('pricing', ctx());
  else if (h === 'debug') { const u = new URL(location.href); u.searchParams.set('debug3d', '1'); location.href = u.toString(); }
});
async function share() {
  const link = designLink(design, location.origin + location.pathname);
  try {
    if (navigator.share && isPhone) { await navigator.share({title: 'My Coastal garden building', url: link}); track('design_shared', {option: 'native'}); return; }
    await navigator.clipboard.writeText(link); toast('Link to your design copied'); track('design_shared', {option: 'clipboard'});
  } catch { openInfo('share', {...ctx(), link}); }
}
let toastTimer = 0;
export function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('on'), 3200); }

// ---- ?debug3d ------------------------------------------------------------------------------------
function debugPanel() {
  if (!qs.has('debug3d') || !boot) return;
  const d = boot.diagnostics(), s = d.scene || {};
  const text = [`3D: ${d.rung || '-'} | WebGL ${d.gl} | ${d.verified ? 'verified' : 'not verified yet'}`, `GPU: ${s.gpu || '-'}`, `Ratio ${s.ratio ?? '-'} | frames ${s.frames ?? '-'} | textures ${s.textures?.textures ?? '-'} (${s.textures?.failures ?? 0} drawn flat)`,
    `Browser: ${navigator.userAgent}`, `Screen: ${screen.width}x${screen.height} @${devicePixelRatio}`, '', 'Steps:', ...d.log.map(e => `${e.t}ms ${e.rung || ''} ${e.event}${e.detail ? ': ' + e.detail : ''}`), s.shaderErrors?.length ? 'Shader errors: ' + s.shaderErrors.join(' / ') : ''].join('\n');
  const el = $('#debug3d');
  el.hidden = false;
  el.innerHTML = `<pre></pre><button type="button" id="dbg-copy">Copy report</button><button type="button" id="dbg-send">Send to Coastal's web team</button><button type="button" id="dbg-close">Close</button><p id="dbg-ref"></p>`;
  $('pre', el).textContent = text;
  $('#dbg-copy').onclick = () => navigator.clipboard?.writeText(text).then(() => toast('Report copied'));
  $('#dbg-close').onclick = () => { el.hidden = true; };
  $('#dbg-send').onclick = async () => {
    try {
      const r = await fetch('/api/diagnostics', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({report: text, design: encode(design)})});
      const j = await r.json(); $('#dbg-ref').textContent = j.ref ? `Reference ${j.ref}` : 'Could not send the report.';
    } catch { $('#dbg-ref').textContent = 'Could not send the report.'; }
  };
}

// ---- Prices --------------------------------------------------------------------------------------
async function loadBook() {
  try {
    const r = await fetch(BUILD.pricebook, {cache: 'force-cache'});
    book = await r.json();
  } catch { book = null; toast('Prices could not load. Please refresh the page.'); }
  render();
}

// ---- Start -----------------------------------------------------------------------------------------
shimDialogs();
initForms({toast, track, getCtx: ctx});
render();
loadBook();
// The 3D loads after the page has painted and settled: it is the heaviest part of the page.
const startLater = () => (window.requestIdleCallback ? requestIdleCallback(start3D, {timeout: 1800}) : setTimeout(start3D, 600));
if (document.readyState === 'complete') startLater(); else addEventListener('load', startLater, {once: true});
for (const ev of ['pointerdown', 'keydown', 'touchstart']) addEventListener(ev, start3D, {once: true, passive: true});
track('configurator_started', {range: design.range, shared: location.hash.includes('d=') ? 'yes' : 'no'});
if (!QA) maybeStartTour({goto, track});
window.addEventListener('hashchange', () => { const h = new URLSearchParams(location.hash.slice(1)); const d = h.get('d') && decode(h.get('d')); if (d && encode(d) !== encode(design)) { design = d; render(); scene()?.update(design); } });
