// 3D diagnostics from ?debug3d: a phone that cannot show the 3D sends its report here and gets
// a reference; GET ?ref= reads it back so the problem can be diagnosed remotely.
import {getStore} from '@netlify/blobs';
const json = (status, body) => new Response(JSON.stringify(body), {status, headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-store'}});
export default async req => {
  const store = getStore('coastal-3d-diagnostics');
  const url = new URL(req.url);
  if (req.method === 'GET') {
    const ref = (url.searchParams.get('ref') || '').replace(/[^A-Z0-9-]/g, '');
    if (!ref) return json(400, {error: 'Add ?ref=3D-XXXXXXXX'});
    const r = await store.get(ref, {type: 'json'});
    return r ? json(200, r) : json(404, {error: 'No report with that reference.'});
  }
  if (req.method !== 'POST') return json(405, {error: 'Use POST.'});
  const ua = req.headers.get('user-agent') || '';
  let b;
  try { b = JSON.parse((await req.text()).slice(0, 20000)); } catch { return json(400, {error: 'Unreadable report.'}); }
  const ref = `3D-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
  await store.setJSON(ref, {ref, at: new Date().toISOString(), userAgent: ua.slice(0, 300), headless: /HeadlessChrome/.test(ua), report: String(b.report || '').slice(0, 15000), design: String(b.design || '').slice(0, 500)});
  return json(200, {ref});
};
export const config = {path: '/api/diagnostics'};
