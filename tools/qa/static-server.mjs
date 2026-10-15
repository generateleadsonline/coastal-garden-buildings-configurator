// Local stand-in for Netlify: serves public/ with the headers from public/_headers (so the CSP is
// exercised), /dir/ to index.html, 404.html for misses, the netlify.toml redirects for / and
// /configurator, runs /api/enquiry through the real function with the Blobs store swapped for a
// local log (nothing leaves this machine: each saved enquiry is appended to $FORMS_LOG, default
// .qa-forms.ndjson, git-ignored, so QA can check every field), and runs /api/price through the real function (netlify/functions/
// price.mjs, which asks Lugarde's engine: read-only). PRICE=stub answers with a fixed test price
// instead, PRICE=down with an outage, for offline and failure checks.
// node tools/qa/static-server.mjs [port]
import {createServer} from 'node:http';
import {readFile, appendFile, stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../public');
const port = Number(process.argv[2] || process.env.PORT || 4812);
const priceFn = (await import('../../netlify/functions/price.mjs')).default;
const {handle: enquiry} = await import('../../netlify/functions/enquiry.mjs');
let priceCalls = 0;
const log = process.env.FORMS_LOG || path.resolve(root, '../.qa-forms.ndjson');
const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json', '.txt': 'text/plain'};

async function headersFor(urlPath) {
  const text = await readFile(path.join(root, '_headers'), 'utf8').catch(() => '');
  const out = {};
  let match = false;
  for (const line of text.split('\n')) {
    if (!line.trim()) continue;
    if (!/^\s/.test(line)) {
      const pattern = line.trim().replace(/\*/g, '.*');
      match = new RegExp('^' + pattern + '$').test(urlPath);
    } else if (match) {
      const i = line.indexOf(':');
      // Served over plain http here, so the live CSP's upgrade-insecure-requests would send
      // WebKit to https://127.0.0.1 and fail every subresource: drop just that directive.
      out[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/;\s*upgrade-insecure-requests/, '');
    }
  }
  return out;
}
createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  let p = decodeURIComponent(url.pathname);
  if (p === '/api/price') {
    let body = ''; for await (const c of req) body += c;
    priceCalls++;
    if (process.env.PRICE === 'down') { res.writeHead(502, {'Content-Type': 'application/json'}); res.end(JSON.stringify({ok: false, reason: 'unavailable'})); return; }
    if (process.env.PRICE === 'stub') { res.writeHead(200, {'Content-Type': 'application/json'}); res.end(JSON.stringify({ok: true, total: 1234567, discount: -100000, checked: new Date().toISOString(), lines: [{key: 'substructure.rectangle.0', group: 'building', label: 'QA stub building', amount: 1, total: 1321567}, {key: 'transport.surcharge', group: 'delivery', label: 'Extra transport surcharge', amount: 1, total: 13000}, {key: 'discount.qa', group: 'offer', label: 'QA stub offer', amount: 1, total: -100000}]})); return; }
    const out = await priceFn(new Request(`http://127.0.0.1:${port}/api/price`, {method: req.method, headers: {'content-type': 'application/json', ...(req.headers.origin ? {origin: req.headers.origin} : {})}, body: req.method === 'POST' ? body : undefined}));
    res.writeHead(out.status, Object.fromEntries(out.headers)); res.end(await out.text()); return;
  }
  if (p === '/__qa/price-calls') { res.writeHead(200, {'Content-Type': 'application/json'}); res.end(JSON.stringify({calls: priceCalls})); return; }
  if (p === '/api/enquiry') {
    // The real enquiry function (its validation and record), with a stand-in for the Blobs store
    // that appends the record to the local log instead. Nothing leaves this machine.
    let body = ''; for await (const c of req) body += c;
    const store = {setJSON: async (key, record) => appendFile(log, JSON.stringify({at: record.receivedAt, path: p, key, fields: {...record.fields, 'form-name': 'coastal-' + record.type, type: record.type}, test: record.test}) + '\n')};
    const out = await enquiry(new Request(`http://127.0.0.1:${port}/api/enquiry`, {method: req.method, headers: {'content-type': req.headers['content-type'] || '', accept: req.headers.accept || '', ...(req.headers.origin ? {origin: req.headers.origin} : {})}, body: req.method === 'POST' ? body : undefined}), store);
    res.writeHead(out.status, Object.fromEntries(out.headers)); res.end(await out.text()); return;
  }
  if (req.method === 'POST') { res.writeHead(405); res.end('POST only goes to /api/enquiry and /api/price'); return; }
  if (p === '/') { res.writeHead(302, {Location: '/configurator/' + url.search}); res.end(); return; }
  if (p === '/configurator') { res.writeHead(301, {Location: '/configurator/' + url.search}); res.end(); return; }
  if (p.endsWith('/')) p += 'index.html';
  let file = path.join(root, p), status = 200;
  if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
  try { if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html'); } catch { file = path.join(root, '404.html'); status = 404; }
  try {
    const body = await readFile(file);
    res.writeHead(status, {'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', ...(await headersFor(url.pathname))});
    res.end(body);
  } catch { res.writeHead(404); res.end('not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Serving public/ on http://127.0.0.1:${port}`));
