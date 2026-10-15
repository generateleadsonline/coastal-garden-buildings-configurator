// POST /api/enquiry: Coastal's lead pipeline. Every form on the designer (the quote that unlocks the
// price, a callback, a show-site visit, the brochure and Book a call) posts here. The function
// checks the details again (first and last name, a UK phone number under Ofcom's numbering plan,
// email, postcode; a day and time for a call) and saves the enquiry, with the full specification,
// the price the visitor saw and a link that reopens the design, in the site's private Netlify Blobs
// store `coastal-enquiries` (the store v1 used). Nothing is sent anywhere else: routing to Coastal
// by email or CRM is still to be agreed (docs/CONFIRMATIONS.md). Netlify Forms detection is off on
// this site, so the forms do not use it.
import {randomUUID} from 'node:crypto';
import {parseUKPhone, validEmail, validName, validPostcode, formatPostcode} from '../../src/configurator-model.js';

const TYPES = new Set(['quote', 'callback', 'visit', 'brochure', 'book-call']);
// Fields kept, with a length cap; anything else in the post is dropped.
const FIELDS = {
  'first-name': 50, 'last-name': 50, email: 254, phone: 20, postcode: 9, 'phone-e164': 16,
  'preferred-day': 60, 'preferred-time': 30, 'visit-type': 60, timescale: 60, 'project-notes': 1000, marketing: 3,
  subject: 120, 'design-link': 2000, 'design-reference': 20, 'design-summary': 6000, 'building-system': 60,
  'building-size': 60, 'selected-options': 2000, 'price-shown': 40,
  'utm-source': 200, 'utm-medium': 200, 'utm-campaign': 200, 'utm-term': 200, 'utm-content': 200, 'utm-id': 200,
  'referrer-host': 200, 'entry-path': 300
};
const json = (status, body) => new Response(JSON.stringify(body), {
  status, headers: {'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff'}
});

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

/** The whole check-and-save, with the store passed in (the local QA server passes a stand-in). */
export async function handle(req, store) {
  if (req.method !== 'POST') return json(405, {ok: false, reason: 'method'});
  if (!originAllowed(req)) return json(403, {ok: false, reason: 'origin'});
  const raw = await req.text();
  if (raw.length > 24000) return json(413, {ok: false, reason: 'size'});
  let input;
  try {
    input = /application\/json/.test(req.headers.get('content-type') || '') ? JSON.parse(raw) : Object.fromEntries(new URLSearchParams(raw));
  } catch { return json(400, {ok: false, reason: 'body'}); }
  const wantsPage = !/json/.test(req.headers.get('accept') || '');
  if (input.company) return wantsPage ? Response.redirect(new URL('/configurator/thank-you/', req.url), 303) : json(200, {ok: true, ref: 'CGB-OK'}); // honeypot
  const type = String(input.type || String(input['form-name'] || '').replace(/^coastal-/, ''));
  if (!TYPES.has(type)) return json(400, {ok: false, reason: 'type'});

  const phone = parseUKPhone(input.phone);
  const problems = [];
  if (!validName(input['first-name'])) problems.push('first-name');
  if (!validName(input['last-name'])) problems.push('last-name');
  if (!phone.valid) problems.push('phone');
  if (!validEmail(input.email)) problems.push('email');
  if (!validPostcode(input.postcode)) problems.push('postcode');
  if (type === 'book-call' && (!input['preferred-day'] || !input['preferred-time'])) problems.push('preferred-day');
  if (problems.length) return json(422, {ok: false, reason: 'fields', fields: problems});

  const fields = {};
  for (const [k, cap] of Object.entries(FIELDS)) if (input[k] != null && input[k] !== '') fields[k] = String(input[k]).slice(0, cap);
  fields.phone = phone.display; fields['phone-e164'] = phone.e164; fields.postcode = formatPostcode(input.postcode);
  const at = new Date().toISOString();
  const ref = `CGB-${at.slice(2, 10).replace(/-/g, '')}-${randomUUID().slice(0, 6).toUpperCase()}`;
  const record = {
    ref, type, receivedAt: at, fields,
    page: (req.headers.get('referer') || '').slice(0, 300), userAgent: (req.headers.get('user-agent') || '').slice(0, 300),
    test: /\b(QA|GLO QA)\b/.test(`${fields['first-name']} ${fields['last-name']}`) || /@example\.(com|org)$/i.test(fields.email || '')
  };
  try {
    await store.setJSON(`leads/${at.slice(0, 10)}/${ref}`, record);
  } catch (err) {
    console.error('enquiry store failed', String(err?.message || err).slice(0, 120));
    return json(503, {ok: false, reason: 'store'});
  }
  return wantsPage ? Response.redirect(new URL('/configurator/thank-you/', req.url), 303) : json(200, {ok: true, ref, type});
}

export default async req => {
  const {getStore} = await import('@netlify/blobs');
  return handle(req, getStore({name: 'coastal-enquiries', consistency: 'strong'}));
};

export const config = {path: '/api/enquiry'};
