// Anonymous funnel counts: one counter per event name and label per day, no personal data.
import {getStore} from '@netlify/blobs';
const BOT = /HeadlessChrome|bot\b|crawler|spider|Lighthouse|Netlify/i;
export default async req => {
  if (req.method !== 'POST') return new Response(null, {status: 405});
  if (BOT.test(req.headers.get('user-agent') || '')) return new Response(null, {status: 204});
  let body;
  try { body = JSON.parse((await req.text()).slice(0, 8000)); } catch { return new Response(null, {status: 400}); }
  const events = Array.isArray(body.events) ? body.events.slice(0, 40) : [];
  if (!events.length) return new Response(null, {status: 204});
  const day = new Date().toISOString().slice(0, 10);
  try {
    const store = getStore('coastal-analytics');
    const key = `counts/${day}`;
    const counts = (await store.get(key, {type: 'json'})) || {};
    for (const e of events) {
      const name = String(e.e || '').replace(/[^a-z0-9_]/gi, '').slice(0, 40), label = String(e.s || '').replace(/[^a-z0-9_ -]/gi, '').slice(0, 40);
      if (!name) continue;
      const k = label ? `${name}:${label}` : name;
      counts[k] = (counts[k] || 0) + 1;
    }
    await store.setJSON(key, counts);
  } catch (err) { console.error('event store failed', err?.message); }
  return new Response(null, {status: 204});
};
export const config = {path: '/api/event'};
