// Saves an enquiry (callback, call booking, showroom visit or PDF request) with the full
// specification, the server's own price for the design and a link back to it. Enquiries are
// stored in the private Netlify Blobs store `coastal-enquiries` until Coastal chooses where they
// should go (email or CRM); nothing is sent anywhere else.
import {getStore} from '@netlify/blobs';
import {decode, priceFor, specification, designLink, encode} from '../../src/model.js';
import {checkUkPhone, checkEmail, checkPostcode, checkName} from '../../src/phone.js';
import book from '../../src/data/pricebook.json' with {type: 'json'};

const TYPES = new Set(['callback', 'book', 'visit', 'pdf']);
const json = (status, body) => new Response(JSON.stringify(body), {status, headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-store'}});

export default async (req, context) => {
  if (req.method !== 'POST') return json(405, {error: 'Use POST.'});
  const origin = req.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(req.url).host) return json(403, {error: 'Please send the form from the design studio.'});
  const text = await req.text();
  if (text.length > 20000) return json(413, {error: 'That request is too large.'});
  let b;
  try { b = JSON.parse(text); } catch { return json(400, {error: 'The request could not be read.'}); }
  if (b.company) return json(200, {ok: true, ref: 'CGB-OK'}); // honeypot: pretend all is well
  if (!TYPES.has(b.type)) return json(400, {error: 'Unknown request type.'});
  const c = b.contact || {};
  const checks = {first: checkName(c.first, 'first'), last: checkName(c.last, 'last'), phone: checkUkPhone(c.phone), email: checkEmail(c.email), postcode: checkPostcode(c.postcode)};
  const bad = Object.entries(checks).find(([, r]) => !r.ok);
  if (bad) return json(422, {error: bad[1].error, field: bad[0]});
  const design = decode(b.design);
  if (!design) return json(400, {error: 'The design could not be read.'});
  const price = priceFor(design, book);
  const ref = `CGB-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const origin2 = new URL(req.url).origin + '/';
  const record = {
    ref, type: b.type, receivedAt: new Date().toISOString(),
    contact: {first: checks.first.value, last: checks.last.value, phone: checks.phone.e164, phoneDisplay: checks.phone.display, email: checks.email.value, postcode: checks.postcode.value},
    preference: {day: String(b.preference?.day || '').slice(0, 60), when: String(b.preference?.when || '').slice(0, 60)},
    message: String(b.message || '').slice(0, 1000),
    quoted: Object.keys(b.quoted || {}).filter(k => b.quoted[k]),
    specification: specification(design), designCode: encode(design), designLink: designLink(design, origin2),
    price: price ? {total: price.total, products: price.products, transport: price.transport, promo: price.promo, vat: price.vat, lines: price.lines} : null,
    priceShown: typeof b.total === 'number' ? b.total : null,
    page: String(b.page || '').slice(0, 300), userAgent: (req.headers.get('user-agent') || '').slice(0, 300),
    test: /\bQA\b|GLO QA/i.test(`${c.first} ${c.last} ${b.message}`)
  };
  try {
    const store = getStore({name: 'coastal-enquiries', consistency: 'strong'});
    await store.setJSON(`enquiries/${record.receivedAt.slice(0, 10)}/${ref}`, record);
  } catch (err) {
    console.error('enquiry store failed', err?.message);
    return json(503, {error: 'Your request could not be saved just now.'});
  }
  return json(200, {ok: true, ref});
};
export const config = {path: '/api/enquiry'};
