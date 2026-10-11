import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { COOKIE, createHandler, session } from '../server/service.mjs';
import { DEFAULT } from '../src/catalog.js';

const ORIGIN = 'https://coastal.example';
const REQUEST_ID = '67b7a1a3-7d10-4f2a-88a6-5b6e7c8d9e01';
const CONTACT = {
  name: 'Morgan Taylor', email: 'Morgan@Example.com', postcode: 'sw1a1aa',
  phone: '+44 7700 900123', timeline: 'Within 3 months', notes: 'A garden office.', marketing: false,
};
const clone = (value) => JSON.parse(JSON.stringify(value));
const hash = (value) => createHash('sha256').update(value).digest('hex');

// Match durable-store semantics: a read returns a new value, and a failed write
// cannot accidentally mutate data through a shared in-memory object reference.
function memoryStore({ failWrite, failRead } = {}) {
  const records = new Map();
  const writes = [];
  const reads = [];
  return {
    records, writes, reads,
    async get(key) {
      reads.push(key);
      if (failRead?.(key)) throw new Error('Storage read failed');
      const value = records.get(key);
      return value === undefined ? null : clone(value);
    },
    async setJSON(key, value, options = {}) {
      writes.push({ key, value: clone(value), options: { ...options } });
      if (failWrite?.(key)) throw new Error('Storage write failed');
      if (options.onlyIfNew && records.has(key)) return { modified: false };
      records.set(key, clone(value));
      return { modified: true };
    },
  };
}

function fixture(options) {
  const store = memoryStore(options);
  const storeOptions = [];
  const handler = createHandler((config) => { storeOptions.push(config); return store; });
  return { store, storeOptions, handler };
}

function request(method = 'POST', body, { cookie, origin = ORIGIN, headers = {} } = {}) {
  const requestHeaders = { origin, ...headers };
  if (cookie) requestHeaders.cookie = cookie;
  if (body !== undefined) requestHeaders['content-type'] = 'application/json';
  return new Request(`${ORIGIN}/api/enquiry`, {
    method, headers: requestHeaders,
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
}

const submission = (overrides = {}) => ({
  design: { ...DEFAULT }, lead: { ...CONTACT }, requestId: REQUEST_ID, botField: '', ...overrides,
});

function assertPrivate(response) {
  assert.equal(response.headers.get('cache-control'), 'private, no-store');
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
}

async function assertLocked(response, status) {
  assert.equal(response.status, status);
  assertPrivate(response);
  const body = await response.json();
  assert.equal(typeof body.error, 'string');
  assert.equal('quote' in body, false);
  assert.equal('receipt' in body, false);
  assert.equal(body.saved, undefined);
  assert.equal(response.headers.get('set-cookie'), null);
  return body;
}

async function accepted(f) {
  const response = await f.handler(request('POST', submission()));
  assert.equal(response.status, 200);
  const setCookie = response.headers.get('set-cookie');
  assert.ok(setCookie, 'An accepted enquiry should establish its private session');
  return { response, body: await response.json(), cookie: setCookie.split(';')[0], setCookie };
}

test('price remains private before submission, including design-only POSTs', async () => {
  const f = fixture();
  await assertLocked(await f.handler(request('GET')), 401);
  await assertLocked(await f.handler(request('POST', { design: DEFAULT, quote: { low: 1 }, saved: true })), 401);
  assert.equal(f.store.writes.length, 0);
});

test('malformed, forged, expired, and orphaned sessions cannot read a quote', async () => {
  const f = fixture();
  await assertLocked(await f.handler(request('GET', undefined, { cookie: `${COOKIE}=invalid` })), 401);
  const token = 'a'.repeat(64);
  const cookie = `${COOKIE}=${token}`;
  await assertLocked(await f.handler(request('GET', undefined, { cookie })), 401);
  f.store.records.set(`sessions/${hash(token)}`, { id: REQUEST_ID, expiresAt: Date.now() - 1000 });
  await assertLocked(await f.handler(request('GET', undefined, { cookie })), 401);
  f.store.records.set(`sessions/${hash(token)}`, { id: REQUEST_ID, expiresAt: Date.now() + 10000 });
  await assertLocked(await f.handler(request('GET', undefined, { cookie })), 401);
  assert.equal(f.store.writes.length, 0);
});

test('invalid dimensions, increments, and option values are rejected before storage', async (t) => {
  const invalidDesigns = [
    ['below minimum width', { width: 2.3 }],
    ['above maximum width', { width: 6.1 }],
    ['off-grid log width', { width: 4.05 }],
    ['off-grid Prima width', { system: 'prima', width: 4, depth: 3 }],
    ['excessive Pro depth', { system: 'pro', depth: 4.4 }],
    ['unknown roof', { roof: 'invented' }],
    ['unknown door', { glazing: 'invented' }],
    ['unknown window', { window: 'invented' }],
    ['unsupported canopy', { canopy: 3 }],
    ['nonboolean insulation', { insulated: 'true' }],
    ['string dimension', { width: '4' }],
  ];
  for (const [name, patch] of invalidDesigns) {
    await t.test(name, async () => {
      const f = fixture();
      await assertLocked(await f.handler(request('POST', submission({ design: { ...DEFAULT, ...patch } }))), 400);
      assert.equal(f.store.writes.length, 0);
    });
  }
});

test('the contact gate requires a real UK postcode and valid contact details', async (t) => {
  const invalidContacts = [
    ['non-UK postcode', { postcode: '90210' }],
    ['malformed UK postcode', { postcode: 'SW1A 1A1' }],
    ['empty postcode', { postcode: '' }],
    ['invalid email', { email: 'morgan@example' }],
    ['missing name', { name: '' }],
    ['invalid phone', { phone: '123' }],
    ['HTML in contact details', { name: '<script>Bad</script>' }],
    ['invalid marketing preference', { marketing: 'yes' }],
  ];
  for (const [name, patch] of invalidContacts) {
    await t.test(name, async () => {
      const f = fixture();
      await assertLocked(await f.handler(request('POST', submission({ lead: { ...CONTACT, ...patch } }))), 400);
      assert.equal(f.store.writes.length, 0);
    });
  }
});

test('failed lead or session persistence never unlocks a quote or returns a cookie', async (t) => {
  for (const prefix of ['leads/', 'sessions/']) {
    await t.test(prefix, async () => {
      const f = fixture({ failWrite: (key) => key.startsWith(prefix) });
      await assertLocked(await f.handler(request('POST', submission())), 503);
      assert.equal([...f.store.records.keys()].some((key) => key.startsWith('sessions/')), false);
      await assertLocked(await f.handler(request('GET')), 401);
    });
  }
  await t.test('store unavailable', async () => {
    const handler = createHandler(() => { throw new Error('Store unavailable'); });
    await assertLocked(await handler(request('POST', submission())), 503);
  });
});

test('an accepted enquiry persists contact consent and unlocks a private server quote', async () => {
  const f = fixture();
  const { response, body, cookie, setCookie } = await accepted(f);
  assertPrivate(response);
  assert.equal(body.saved, true);
  assert.equal(body.receipt, REQUEST_ID);
  assert.match(body.quote.reference, /^CGB-[A-F0-9]{8}$/);
  assert.ok(body.quote.high >= body.quote.low && body.quote.low > 0);
  assert.deepEqual(body.quote.design, DEFAULT);
  assert.match(setCookie, /HttpOnly/);
  assert.match(setCookie, /SameSite=Lax/);
  assert.match(setCookie, /Secure/);
  assert.match(setCookie, /Path=\//);
  assert.match(setCookie, /Max-Age=604800/);
  const record = f.store.records.get(`leads/${REQUEST_ID}`);
  assert.equal(record.lead.email, 'morgan@example.com');
  assert.equal(record.lead.postcode, 'SW1A 1AA');
  assert.equal(record.consent.enquiryRequested, true);
  assert.equal(record.consent.marketing, false);
  assert.equal([...f.store.records.keys()].filter((key) => key.startsWith('leads/')).length, 1);
  assert.equal([...f.store.records.keys()].filter((key) => key.startsWith('sessions/')).length, 1);
  const getResponse = await f.handler(request('GET', undefined, { cookie }));
  assert.equal(getResponse.status, 200);
  assertPrivate(getResponse);
  assert.deepEqual((await getResponse.json()).quote, record.quote);
  const { record: sessionRecord } = await session(request('GET', undefined, { cookie }), f.store);
  assert.equal(sessionRecord.id, REQUEST_ID);
});

test('retrying the same request is idempotent; reusing its ID with different details is rejected', async () => {
  const f = fixture();
  const first = await accepted(f);
  const retry = await accepted(f);
  assert.equal(retry.body.receipt, first.body.receipt);
  assert.equal(retry.body.quote.reference, first.body.quote.reference);
  assert.equal(retry.body.quote.low, first.body.quote.low);
  assert.equal([...f.store.records.keys()].filter((key) => key.startsWith('leads/')).length, 1);
  await assertLocked(await f.handler(request('POST', submission({ lead: { ...CONTACT, email: 'someone@example.com' } }))), 409);
  assert.equal(f.store.records.get(`leads/${REQUEST_ID}`).lead.email, 'morgan@example.com');
});

test('a session can update its design without submitting another lead', async () => {
  const f = fixture();
  const { body: original, cookie } = await accepted(f);
  const changed = { ...DEFAULT, width: 4.4, depth: 3.2, glazing: 'sliding', timber: 'sage' };
  const response = await f.handler(request('POST', { design: changed }, { cookie }));
  assert.equal(response.status, 200);
  assertPrivate(response);
  assert.equal(response.headers.get('set-cookie'), null);
  const body = await response.json();
  assert.equal(body.saved, true);
  assert.equal(body.quote.reference, original.quote.reference);
  assert.deepEqual(body.quote.design, changed);
  assert.ok(body.quote.low > original.quote.low);
  const saved = f.store.records.get(`leads/${REQUEST_ID}`);
  assert.deepEqual(saved.design, changed);
  assert.equal(saved.lead.email, 'morgan@example.com');
  assert.equal(typeof saved.updatedAt, 'string');
  assert.equal([...f.store.records.keys()].filter((key) => key.startsWith('leads/')).length, 1);
  assert.equal([...f.store.records.keys()].filter((key) => key.startsWith('sessions/')).length, 1);
  const reloaded = await f.handler(request('GET', undefined, { cookie }));
  assert.deepEqual((await reloaded.json()).quote, body.quote);
});

test('a failed authenticated update returns no new quote and leaves the saved design intact', async () => {
  let rejectWrites = false;
  const f = fixture({ failWrite: (key) => rejectWrites && key.startsWith('leads/') });
  const { cookie } = await accepted(f);
  rejectWrites = true;
  await assertLocked(await f.handler(request('POST', { design: { ...DEFAULT, width: 4.4 } }, { cookie })), 503);
  assert.deepEqual(f.store.records.get(`leads/${REQUEST_ID}`).design, DEFAULT);
});

test('cross-origin requests, bot fields, invalid request IDs, and unsupported methods stay locked', async () => {
  const f = fixture();
  await assertLocked(await f.handler(request('POST', submission(), { origin: 'https://other.example' })), 403);
  await assertLocked(await f.handler(request('POST', submission({ botField: 'filled' }))), 400);
  await assertLocked(await f.handler(request('POST', submission({ requestId: 'arbitrary-reference' }))), 400);
  const unsupported = await f.handler(request('DELETE'));
  await assertLocked(unsupported, 405);
  assert.equal(unsupported.headers.get('allow'), 'GET, POST');
  assert.equal(f.store.writes.length, 0);
});
