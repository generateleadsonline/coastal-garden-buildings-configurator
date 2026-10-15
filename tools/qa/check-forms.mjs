// Forms: every form needs first name, last name, a UK phone number (Ofcom's numbering plan), email
// and postcode, and sends the full specification, Lugarde's price where shown and a design link.
// Against the local server (tools/qa/static-server.mjs, which records each POST in
// .qa-forms.ndjson and never forwards it) it submits every form and checks what arrives. Against
// any other origin (the live site) it never submits a valid form: it checks validation and the
// data each form would attach, read from the form itself.
//   PLAYWRIGHT_CORE=<path> BASE=http://127.0.0.1:4812 node tools/qa/check-forms.mjs
import {readFile, writeFile} from 'node:fs/promises';
import {launch, BASE, SKIP_TOUR} from './lib.mjs';

const LOCAL = /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(BASE);
const LOG = new URL('../../.qa-forms.ndjson', import.meta.url);
if (LOCAL) await writeFile(LOG, '');
let failed = 0;
const check = (ok, label, detail = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? '  ' + detail : ''}`); if (!ok) failed++; };
const browser = await launch('chromium');
const ctx = await browser.newContext({viewport: {width: 1280, height: 900}});
await ctx.addInitScript(SKIP_TOUR);
const page = await ctx.newPage(); page.setDefaultTimeout(240000);
const events = [];
await page.exposeFunction('__qaEvent', e => events.push(e));
await ctx.addInitScript(() => { const push = Array.prototype.push; window.dataLayer = []; window.dataLayer.push = function (...a) { a.forEach(e => window.__qaEvent?.(e)); return push.apply(this, a); }; });
await page.goto(BASE + '/configurator/?qa=1&no3d', {waitUntil: 'load'});
await page.evaluate(() => document.querySelector('#steps [data-step="6"]').click());
// The price step fetches Lugarde's price quietly, so the enquiry carries the figure shown next.
await page.evaluate(() => new Promise(r => { const end = Date.now() + 30000; const t = () => (['ok', 'error', 'refused'].includes(window.__cfg.price.status) || Date.now() > end ? r() : setTimeout(t, 200)); t(); }));
const fill = async (form, v) => page.evaluate(([form, v]) => {
  const f = document.forms[form];
  for (const [k, val] of Object.entries(v)) { const el = f.elements.namedItem(k); el.value = val; el.dispatchEvent(new Event('input', {bubbles: true})); }
}, [form, v]);
const submitAndRead = async form => page.evaluate(async form => {
  const f = document.forms[form];
  f.requestSubmit();
  await new Promise(r => setTimeout(r, 900));
  return {errors: [...f.querySelectorAll('.field-error:not([hidden])')].map(e => e.textContent), status: f.querySelector('.form-status')?.hidden ? '' : f.querySelector('.form-status')?.textContent, hidden: f.hidden};
}, form);

// Validation on the price form.
await fill('coastal-quote', {'first-name': '', 'last-name': '', email: 'not-an-email', phone: '07700 900123', postcode: '12345'});
let r = await submitAndRead('coastal-quote');
check(r.errors.length === 5, 'Quote form: empty names, a bad email, an Ofcom drama number and a bad postcode are all refused', r.errors.join(' / '));
for (const [phone, ok] of [['07123 456789', true], ['+44 7123 456789', true], ['0044 7123 456789', true], ['01425 274000', true], ['+44 (0)1425 274000', true], ['020 8036 3707', true], ['0333 123 4567', true], ['0800 123 4567', true],
  ['07700 900123', false], ['0900 123 4567', false], ['07011 234567', false], ['12345', false], ['+1 202 555 0100', false], ['07123 45678', false], ['071234567890', false], ['01425 2740a0', false]]) {
  const res = await page.evaluate(p => { const el = document.forms['coastal-quote'].elements.phone; el.value = p; el.dispatchEvent(new FocusEvent('focusout', {bubbles: true})); return el.getAttribute('aria-invalid'); }, phone);
  check((res === 'false') === ok, `Phone ${phone} is ${ok ? 'accepted' : 'refused'}`, `aria-invalid ${res}`);
}
for (const [pc, ok] of [['BH23 4SA', true], ['bh234sa', true], ['SW1A 1AA', true], ['CV34 4AB', true], ['12345', false], ['ABC', false], ['BH23', false]]) {
  const res = await page.evaluate(p => { const el = document.forms['coastal-quote'].elements.postcode; el.value = p; el.dispatchEvent(new FocusEvent('focusout', {bubbles: true})); return [el.getAttribute('aria-invalid'), el.value]; }, pc);
  check((res[0] === 'false') === ok, `Postcode ${pc} is ${ok ? 'accepted' : 'refused'}`, `aria-invalid ${res[0]}, shown as ${res[1]}`);
}
const person = {'first-name': 'Qa', 'last-name': 'Test', email: 'qa-test@example.com', phone: '07123 456789', postcode: 'bh234sa'};
if (!LOCAL) {
  // Live: fill the forms but never send a valid one; check what they would attach.
  for (const [name, dlg] of [['coastal-quote', null], ['coastal-callback', 'callback'], ['coastal-visit', 'showroom'], ['coastal-brochure', 'brochure'], ['coastal-book-call', 'book']]) {
    if (dlg) await page.evaluate(n => document.querySelector(`[data-dialog="${n}"]`).click(), dlg);
    await fill(name, {...person, 'last-name': ''});
    r = await submitAndRead(name);
    check(r.errors.length === 1 && !r.hidden, `${name} (live): a missing last name is refused before anything is sent`, r.errors.join(' / '));
    const f = await page.evaluate(n => { const f = document.forms[n]; return {link: f.elements['design-link'].value, summary: f.elements['design-summary'].value, ref: f.elements['design-reference'].value, price: f.elements['price-shown'].value}; }, name);
    check(/\/configurator\/\?v=1&r=/.test(f.link) && f.summary.split('\n').length > 12 && /^CGB-/.test(f.ref), `${name} (live): would attach the design link and full specification`, `${f.summary.split('\n').length} lines, price ${f.price}`);
    if (dlg) await page.evaluate(n => document.getElementById('dlg-' + n).close(), dlg);
  }
  await browser.close();
  console.log(failed ? `${failed} failed` : 'All live form checks passed (nothing submitted)');
  process.exit(failed ? 1 : 0);
}
// A good submission unlocks Lugarde's price and sends everything.
await fill('coastal-quote', person);
r = await submitAndRead('coastal-quote');
await page.waitForTimeout(1500);
const shown = await page.evaluate(() => !document.getElementById('quote-unlocked').hidden && document.getElementById('price-total').textContent);
const engine = await page.evaluate(() => window.__cfg.price.data?.total);
check(/^£[\d,]+\.\d\d$/.test(shown || '') && engine && shown === '£' + (Math.round(engine) / 100).toLocaleString('en-GB', {minimumFractionDigits: 2}), 'Quote form: a valid enquiry unlocks the itemised price, exactly as Lugarde\'s engine priced it', `${shown} (engine ${engine})`);
const lines = await page.evaluate(() => document.querySelectorAll('#price-lines .price-line').length);
check(lines >= 4, 'Price step: itemised lines and a total', `${lines} lines`);
for (const [name, dlg] of [['coastal-callback', 'callback'], ['coastal-visit', 'showroom'], ['coastal-brochure', 'brochure'], ['coastal-book-call', 'book']]) {
  await page.evaluate(n => document.querySelector(`[data-dialog="${n}"]`).click(), dlg);
  // Details given once in the visit are filled in again; clear one to prove it is required.
  await page.evaluate(n => { const f = document.forms[n]; f.elements['last-name'].value = ''; }, name);
  r = await submitAndRead(name);
  check(r.errors.length === 1 && !r.hidden, `${name}: a missing last name is refused`, r.errors.join(' / '));
  await fill(name, person);
  r = await submitAndRead(name);
  check(r.hidden, `${name}: sends with first and last name, UK phone, email and postcode`);
  await page.evaluate(n => document.getElementById('dlg-' + n).close(), dlg);
}
await page.waitForTimeout(500);
const posts = (await readFile(LOG, 'utf8')).trim().split('\n').filter(Boolean).map(l => JSON.parse(l).fields);
const forms = ['coastal-quote', 'coastal-callback', 'coastal-visit', 'coastal-brochure', 'coastal-book-call'];
for (const f of forms) {
  const p = posts.find(x => x['form-name'] === f);
  if (!p) { check(false, `${f}: received`); continue; }
  const missing = ['first-name', 'last-name', 'email', 'phone', 'phone-e164', 'postcode', 'design-link', 'design-reference', 'design-summary', 'building-system', 'building-size', 'selected-options', 'price-shown'].filter(k => !p[k]);
  check(!missing.length, `${f}: carries the person, the design link and the full specification`, missing.length ? 'missing ' + missing.join(', ') : `${p['design-summary'].split('\n').length} specification lines`);
  check(p['phone-e164'] === '+447123456789' && p.phone === '07123 456789' && p.postcode === 'BH23 4SA', `${f}: phone normalised to +44, postcode formatted`, `${p['phone-e164']} ${p.phone} ${p.postcode}`);
  const priced = p['price-shown'];
  check(/^£[\d,]+\.\d\d$/.test(priced) && p['design-summary'].includes('Lugarde price: ' + priced), `${f}: the specification carries Lugarde's price as shown, and no other figure`, priced);
  check(/^https?:\/\/[^ ]+\/configurator\/\?v=1&r=/.test(p['design-link']), `${f}: design link reopens the design`, p['design-link'].slice(0, 80));
}
// Analytics: every call to action and step is an event.
const names = new Set(events.map(e => e.event));
for (const e of ['configurator_view', 'configurator_step_view', 'cta_click', 'configurator_form_view', 'configurator_form_start', 'configurator_submit_attempt', 'configurator_form_error', 'generate_lead', 'configurator_enquiry_saved', 'configurator_dialog_open', 'configurator_price_shown']) check(names.has(e), `Analytics event ${e}`);
await browser.close();
console.log(failed ? `${failed} failed` : 'All form checks passed');
process.exit(failed ? 1 : 0);
