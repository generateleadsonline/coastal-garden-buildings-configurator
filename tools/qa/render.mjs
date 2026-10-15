// Renders designs headlessly (real WebGL via SwiftShader) to PNGs for a visual check.
//   node tools/qa/render.mjs <outdir> '<json design>' [view] [--w 1280 --h 800] ...
// Each extra argument after the design list is "label|json|view|query".
import {build} from 'esbuild';
import {createServer} from 'node:http';
import {readFile, mkdtemp, writeFile} from 'node:fs/promises';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const run = promisify(execFile);
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [outdir, ...jobs] = process.argv.slice(2);
const tmp = await mkdtemp(path.join(process.env.SHOT_TMP || os.tmpdir(), 'coastal-render-'));
await build({entryPoints: [path.join(repo, 'tools/qa/harness.js')], outfile: path.join(tmp, 'harness.js'), bundle: true, format: 'esm', logLevel: 'error', alias: process.env.GL1 ? {three: 'three-webgl1'} : {}});
await writeFile(path.join(tmp, 'index.html'), '<!doctype html><meta charset="utf-8"><style>html,body{margin:0;height:100%}#scene{position:absolute;inset:0}.scene-overlay{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;font:600 13px system-ui}.scene-overlay line{stroke:#1d3a40;stroke-width:1.5}.scene-overlay rect{fill:#fff;stroke:#1d3a40}.scene-overlay text{fill:#1d3a40}.scene-overlay .wall-name{font-size:14px;fill:#1d3a40}</style><div id="scene"></div><script type="module" src="harness.js"></script>');
const server = createServer(async (req, res) => {
  const file = path.join(tmp, new URL(req.url, 'http://x').pathname.replace(/\/$/, '/index.html'));
  try { const body = await readFile(file); res.writeHead(200, {'Content-Type': file.endsWith('.js') ? 'text/javascript' : 'text/html'}); res.end(body); }
  catch { res.writeHead(404); res.end(); }
}).listen(0, '127.0.0.1');
await new Promise(r => server.on('listening', r));
const port = server.address().port;
const W = process.env.W || '1280', H = process.env.H || '800';
let i = 0;
const queue = jobs.map(j => { const [label, json, view = 'outside', extra = ''] = j.split('|'); return {label: label || `shot${i++}`, json, view, extra}; });
const conc = Number(process.env.CONC || 2);
async function one({label, json, view, extra}) {
  const url = `http://127.0.0.1:${port}/?j=${encodeURIComponent(json)}&view=${view}${extra ? '&' + extra : ''}`;
  const out = path.join(outdir, label + '.png');
  try {
    const {stdout, stderr} = await run('node', [path.join(repo, 'tools/qa/shot.mjs'), url, W, H, out, '--wait', 'window.__ready', '--settle', process.env.SETTLE || '2500', '--timeout', '240000'], {env: {...process.env, SHOT_TMP: tmp}, maxBuffer: 1e8});
    console.log('ok', label, (stdout + stderr).trim().slice(0, 600));
  } catch (e) { console.log('FAIL', label, String(e.stdout || e.message).slice(0, 600)); }
}
for (let k = 0; k < queue.length; k += conc) await Promise.all(queue.slice(k, k + conc).map(one));
server.close();
