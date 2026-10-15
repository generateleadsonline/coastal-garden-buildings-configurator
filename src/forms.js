// The enquiry forms (request a callback, visit the showroom, book a call, download the PDF) and
// the information sheets. Every enquiry carries the full specification, the price shown and a
// link back to the design. The phone validator (libphonenumber) loads when a form first opens.
import {COASTAL} from './facts.js';
import {EXTRAS} from './catalog.js';
import {encode, money} from './model.js';

const $ = (s, root = document) => root.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
let deps = {toast: () => {}, track: () => {}, getCtx: () => ({})};
let validators = null;
const loadValidators = () => (validators ||= import('./phone.js'));

const FORMS = {
  callback: {title: 'Request a callback', lead: 'Leave your number and a good time to call. Coastal’s team will ring you back about your design.', submit: 'Request my callback', extra: 'time', done: 'Thank you. Coastal will call you back about your design.'},
  book: {title: 'Book a call', lead: 'Choose a day and time and Coastal will call you then to go through your design and price.', submit: 'Book my call', extra: 'slot', done: 'Thank you. Your call request is with Coastal, who will confirm the time.'},
  visit: {title: 'Visit the showroom', lead: 'Over 90 buildings on show at Stewarts Christchurch Garden Centre, open every day. Tell Coastal when you’re coming and they’ll have your design ready.', submit: 'Send my visit details', extra: 'visit', done: 'Thank you. Coastal will have your design ready when you visit.'},
  pdf: {title: 'Download your design as a PDF', lead: 'Your design pack has renders from every side, the plan, the full specification and your Lugarde price. Coastal will follow up with your free site survey options.', submit: 'Download my PDF', extra: 'pdf', done: 'Your PDF is downloading.'}
};
const QUOTED = ['installation', 'base', 'removal', 'electrics', 'painting'];

export function initForms(d) { deps = d; }

function field(id, label, type, attrs = '', full = false, help = '') {
  return `<div class="field${full ? ' full' : ''}"><label for="f-${id}">${label}</label><input id="f-${id}" name="${id}" type="${type}" ${attrs}><span class="err" id="e-${id}" aria-live="polite"></span>${help}</div>`;
}
function extraFields(kind) {
  const days = [...Array(8)].map((_, i) => { const d = new Date(Date.now() + (i + 1) * 864e5); return d; }).filter(d => d.getDay() !== 0).slice(0, 6);
  const dayOpts = days.map(d => `<option>${d.toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long'})}</option>`).join('');
  if (kind === 'time') return `<div class="field full"><label for="f-when">Best time to call</label><select id="f-when" name="when"><option>Any time</option><option>Morning (9am to 12pm)</option><option>Afternoon (12pm to 4.30pm)</option></select></div>`;
  if (kind === 'slot') return `<div class="field"><label for="f-day">Day</label><select id="f-day" name="day">${dayOpts}</select></div><div class="field"><label for="f-when">Time</label><select id="f-when" name="when"><option>9am to 10am</option><option>10am to 11am</option><option>11am to 12pm</option><option>12pm to 1pm</option><option>2pm to 3pm</option><option>3pm to 4.30pm</option></select></div>`;
  if (kind === 'visit') return `<div class="visit-card full"><strong>${esc(COASTAL.showSite)}</strong><span>${COASTAL.hours.map(([d, h]) => `${d}: ${h}`).join(' &middot; ')}</span><span class="small">${esc(COASTAL.hoursNote)}</span><a href="${COASTAL.maps}" target="_blank" rel="noopener" data-cta="directions">Directions in Google Maps</a></div><div class="field full"><label for="f-day">When are you thinking of visiting?</label><select id="f-day" name="day"><option>Not sure yet</option>${dayOpts}</select></div>`;
  return '';
}

export function openForm(kind, ctx) {
  const F = FORMS[kind];
  const dlg = $('#form-dialog');
  const p = ctx.price;
  dlg.innerHTML = `<div class="sheet-in"><button type="button" class="close" aria-label="Close">×</button>
    <h2 id="form-title">${F.title}</h2><p>${F.lead}</p>
    ${p ? `<p class="small">Your design: ${esc(ctx.spec[0][1])}, ${esc(ctx.spec[1][1].split(',')[0])}. ${money(p.total)} inc VAT.</p>` : ''}
    <form class="form" novalidate>
      ${field('first', 'First name', 'text', 'autocomplete="given-name" required maxlength="60"')}
      ${field('last', 'Last name', 'text', 'autocomplete="family-name" required maxlength="60"')}
      ${field('phone', 'Phone (UK)', 'tel', 'autocomplete="tel" inputmode="tel" required maxlength="20"')}
      ${field('postcode', 'Postcode', 'text', 'autocomplete="postal-code" required maxlength="9"')}
      ${field('email', 'Email', 'email', 'autocomplete="email" required maxlength="254"', true)}
      ${extraFields(F.extra)}
      <fieldset class="field full"><legend>Ask Coastal to quote for (optional)</legend>${QUOTED.map(k => `<label class="toggle"><span><strong>${esc(EXTRAS[k].name)}</strong></span><input type="checkbox" name="q-${k}" ${ctx.design.quoted?.[k] ? 'checked' : ''}></label>`).join('')}</fieldset>
      <div class="field full"><label for="f-message">Anything else? (optional)</label><textarea id="f-message" name="message" maxlength="1000"></textarea></div>
      <div class="hp" aria-hidden="true"><label for="f-company">Company</label><input id="f-company" name="company" tabindex="-1" autocomplete="off"></div>
      <p class="consent">Your details and design go to Coastal Garden Buildings only, to reply to this request. Your full specification and a link to this design are attached.</p>
      <p class="form-status" id="form-status" role="status"></p>
      <div class="full"><button type="submit" class="btn primary">${F.submit}</button></div>
    </form></div>`;
  dlg.showModal();
  deps.track('form_opened', {cta: kind});
  loadValidators();
  $('.close', dlg).onclick = () => { dlg.close(); deps.track('form_closed', {cta: kind}); };
  dlg.onclick = e => { if (e.target === dlg) dlg.close(); };
  const form = $('form', dlg);
  for (const id of ['first', 'last', 'phone', 'email', 'postcode']) $(`[name=${id}]`, form).addEventListener('change', () => checkOne(form, id));
  form.addEventListener('submit', e => { e.preventDefault(); submit(kind, form, ctx); });
  setTimeout(() => $('[name=first]', form).focus(), 50);
}

async function checkOne(form, id) {
  const v = await loadValidators();
  const val = form.elements[id].value;
  const r = id === 'phone' ? v.checkUkPhone(val) : id === 'email' ? v.checkEmail(val) : id === 'postcode' ? v.checkPostcode(val) : v.checkName(val, id === 'first' ? 'first' : 'last');
  const input = form.elements[id];
  input.setAttribute('aria-invalid', r.ok ? 'false' : 'true');
  input.setAttribute('aria-describedby', `e-${id}`);
  $(`#e-${id}`).textContent = r.ok ? '' : r.error;
  if (r.ok && id === 'phone') input.value = r.display;
  if (r.ok && id === 'postcode') input.value = r.value;
  return r;
}

async function submit(kind, form, ctx) {
  const status = $('#form-status'), button = $('[type=submit]', form);
  status.className = 'form-status'; status.textContent = '';
  const results = {};
  for (const id of ['first', 'last', 'phone', 'email', 'postcode']) results[id] = await checkOne(form, id);
  const bad = Object.entries(results).find(([, r]) => !r.ok);
  if (bad) { form.elements[bad[0]].focus(); status.className = 'form-status err'; status.textContent = 'Please check the highlighted details.'; deps.track('form_invalid', {cta: kind, option: bad[0]}); return; }
  button.disabled = true; button.textContent = kind === 'pdf' ? 'Preparing your PDF…' : 'Sending…';
  const fresh = deps.getCtx();
  const quoted = Object.fromEntries(QUOTED.map(k => [k, Boolean(form.elements[`q-${k}`]?.checked)]));
  const payload = {
    type: kind,
    contact: {first: results.first.value, last: results.last.value, phone: results.phone.e164, email: results.email.value, postcode: results.postcode.value},
    preference: {day: form.elements.day?.value || '', when: form.elements.when?.value || ''},
    message: form.elements.message.value.slice(0, 1000), company: form.elements.company.value,
    quoted, design: encode({...fresh.design, quoted}), link: fresh.link, total: fresh.price?.total ?? null, page: location.href.split('#')[0]
  };
  let ref = null;
  try {
    const r = await fetch('/api/enquiry', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)});
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || 'The request could not be sent.');
    ref = j.ref;
  } catch (err) {
    button.disabled = false; button.textContent = FORMS[kind].submit;
    status.className = 'form-status err';
    status.textContent = `${err.message} Please try again, or call Coastal on ${COASTAL.phone}.`;
    deps.track('form_error', {cta: kind});
    return;
  }
  deps.track('generate_lead', {cta: kind, value: fresh.price?.total ?? 0, currency: 'GBP'});
  if (kind === 'pdf') {
    try {
      const {makePdf} = await import('./pdf.js');
      const blob = await makePdf({...fresh, ref, contact: payload.contact, quoted});
      const url = URL.createObjectURL(blob), a = document.createElement('a');
      a.href = url; a.download = `Coastal-garden-building-${ref || 'design'}.pdf`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      deps.track('pdf_downloaded', {cta: 'pdf'});
    } catch (err) {
      console.error(err);
      status.className = 'form-status err'; status.textContent = 'Your request reached Coastal, but the PDF could not be made on this device. Coastal will email it to you.';
      button.disabled = false; button.textContent = FORMS.pdf.submit;
      deps.track('pdf_failed', {cta: 'pdf'});
      return;
    }
  }
  status.className = 'form-status'; status.textContent = `${FORMS[kind].done}${ref ? ` Your reference is ${ref}.` : ''}`;
  button.textContent = 'Done'; button.disabled = true;
  deps.toast(FORMS[kind].done);
}

export function openInfo(kind, ctx) {
  const dlg = $('#info-dialog');
  let html = '';
  if (kind === 'pricing') html = `<h2 id="info-title">Where the prices come from</h2><p>Every price is Lugarde’s own. They were read on ${esc(ctx.price?.captured || '13 October 2026')} from Lugarde’s configurator, opened with Coastal’s dealer link, for each size, roof and wall in this designer. Doors, windows and fixed-price extras are Lugarde’s list prices, which their basket charges unchanged.</p><p>Prices include VAT and Lugarde’s delivery to mainland England and Wales, plus Lugarde’s ${money(130, false)} transport surcharge, as their basket does. Lugarde’s late summer offer (10% off products) runs to 31 October 2026.</p><p>Not included: installation, a base, electrics, removal of an old building and painting. Coastal quotes for those after a free site survey.</p>`;
  if (kind === 'share') html = `<h2 id="info-title">Share or save this design</h2><p>This link opens your design exactly as it is now. It holds your choices only, no personal details.</p><div class="field"><label for="share-link">Link to your design</label><input id="share-link" readonly value="${esc(ctx.link)}"></div>`;
  dlg.innerHTML = `<div class="sheet-in"><button type="button" class="close" aria-label="Close">×</button>${html}</div>`;
  dlg.showModal();
  $('.close', dlg).onclick = () => dlg.close();
  dlg.onclick = e => { if (e.target === dlg) dlg.close(); };
  $('#share-link')?.select();
}
