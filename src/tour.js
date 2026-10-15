// A short first-visit tour: a ring round each part of the page and a card saying what it does.
// Shown once (remembered on the device), replayable from Help.
const KEY = 'coastal-tour-v1';
const $ = s => document.querySelector(s);
const STEPS = [
  {el: '#stage', title: 'Your building in 3D', text: 'Drag to turn it, pinch or scroll to zoom, and switch between Outside, Inside and Plan. The plan shows every dimension.'},
  {el: '#stepper', title: 'Six simple steps', text: 'Range, size and roof, doors and windows, colour, extras, then your price. Jump to any step at any time.'},
  {el: '#step-body', title: 'See every change', text: 'Each choice redraws the building and turns the camera to the part you changed, outlined in blue.'},
  {el: '#stage-total', title: 'Lugarde’s price, live', text: 'The total updates as you go: Lugarde’s own prices, including VAT and delivery.'},
  {el: () => (matchMedia('(max-width: 1023px)').matches ? '#menu-btn' : '#top-ctas'), title: 'Talk to Coastal any time', text: 'Request a callback, plan a visit to the show site, download the brochure or call 01425 274000.'},
  {el: '#help-btn', title: 'Help is here', text: 'Replay this tour, share your design or see where the prices come from.'}
];

export function maybeStartTour(api) {
  let seen = false;
  try { seen = localStorage.getItem(KEY) === '1'; } catch {}
  if (!seen) setTimeout(() => startTour(api, true), 900);
}

export function startTour({track}, first = false) {
  const root = $('#tour');
  let i = 0;
  const finish = how => {
    root.hidden = true; root.innerHTML = '';
    try { localStorage.setItem(KEY, '1'); } catch {}
    document.removeEventListener('keydown', onKey);
    removeEventListener('resize', show);
    track(how === 'done' ? 'tour_completed' : 'tour_skipped', {step: String(i + 1)});
    $('#help-btn')?.focus();
  };
  const onKey = e => { if (e.key === 'Escape') finish('skip'); };
  function show() {
    const s = STEPS[i];
    const sel = typeof s.el === 'function' ? s.el() : s.el;
    const target = $(sel);
    if (!target) { if (i < STEPS.length - 1) { i++; return show(); } return finish('done'); }
    const r = target.getBoundingClientRect();
    const pad = 6, vw = innerWidth, vh = innerHeight;
    const box = {l: Math.max(4, r.left - pad), t: Math.max(4, r.top - pad), w: Math.min(vw - 8, r.width + 2 * pad), h: Math.min(vh - 8, r.height + 2 * pad)};
    root.hidden = false;
    root.innerHTML = `<div class="tour-ring"></div><div class="tour-card" role="dialog" aria-modal="true" aria-labelledby="tour-title"><h2 id="tour-title">${s.title}</h2><p>${s.text}</p><div class="row"><span class="count">${i + 1} of ${STEPS.length}</span><span><button type="button" class="btn ghost" data-t="skip">${i === STEPS.length - 1 ? 'Close' : 'Skip'}</button> <button type="button" class="btn primary" data-t="next">${i === STEPS.length - 1 ? 'Start designing' : 'Next'}</button></span></div></div>`;
    const ring = root.querySelector('.tour-ring'), card = root.querySelector('.tour-card');
    Object.assign(ring.style, {left: `${box.l}px`, top: `${box.t}px`, width: `${box.w}px`, height: `${box.h}px`});
    const cw = Math.min(340, vw - 32), ch = card.offsetHeight || 170;
    let top = box.t + box.h + 12;
    if (top + ch > vh - 8) top = Math.max(8, box.t - ch - 12);
    if (top < 8 || (box.h > vh * .6)) top = Math.max(8, Math.min(vh - ch - 8, box.t + 16));
    const left = Math.min(vw - cw - 16, Math.max(16, box.l + box.w / 2 - cw / 2));
    Object.assign(card.style, {left: `${left}px`, top: `${top}px`});
    root.querySelector('[data-t=next]').onclick = () => { if (i < STEPS.length - 1) { i++; show(); track('tour_step', {step: String(i + 1)}); } else finish('done'); };
    root.querySelector('[data-t=skip]').onclick = () => finish(i === STEPS.length - 1 ? 'done' : 'skip');
    root.querySelector('[data-t=next]').focus();
  }
  document.addEventListener('keydown', onKey);
  addEventListener('resize', show);
  track('tour_started', {option: first ? 'first_visit' : 'help'});
  show();
}
