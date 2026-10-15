// Renders designs in headless Chrome (real WebGL via SwiftShader) to PNGs, for checking the 3D
// against Hideaway's photos. node tools/qa/render.mjs <outdir> "<query>" ["<query>" ...]
// Each query is a share-link query (v=1&r=...) plus harness flags (view=, night=1, dims=1, tier=).
// Serves the bundled harness from a temporary in-process server; no dev server needed.
import {build} from 'esbuild';
import {createServer} from 'node:http';
import {readFile, mkdtemp, writeFile, rm, mkdir} from 'node:fs/promises';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const run = promisify(execFile);
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [outdir, ...queries] = process.argv.slice(2);
const W = Number(process.env.W || 1200), H = Number(process.env.H || 760);
await mkdir(outdir, {recursive: true});
const tmp = await mkdtemp(path.join(process.env.SHOT_TMP || os.tmpdir(), 'coastal-render-'));
try {
  await build({entryPoints: [path.join(repo, 'tools/qa/harness.js')], outfile: path.join(tmp, 'harness.js'), bundle: true, format: 'esm', logLevel: 'silent'});
  await writeFile(path.join(tmp, 'index.html'), '<!doctype html><meta charset="utf-8"><style>html,body{margin:0;height:100%}#scene{position:absolute;inset:0}.scene-overlay{position:absolute;inset:0;pointer-events:none;width:100%;height:100%}.scene-overlay line{stroke:#173142;stroke-width:1.5}.scene-overlay rect{fill:#fff;stroke:#173142}.scene-overlay text{font:600 12px sans-serif;fill:#173142}.scene-overlay .wall-name{font-size:13px;fill:#38714e}</style><div id="scene"></div><script type="module" src="harness.js"></script>');
  const server = createServer(async (req, res) => {
    const file = path.join(tmp, new URL(req.url, 'http://x').pathname.replace(/\/$/, '/index.html'));
    try { const body = await readFile(file); res.writeHead(200, {'Content-Type': file.endsWith('.js') ? 'text/javascript' : 'text/html'}); res.end(body); }
    catch { res.writeHead(404); res.end(); }
  }).listen(0, '127.0.0.1');
  await new Promise(r => server.on('listening', r));
  const port = server.address().port;
  const jobs = queries.map((q, i) => async () => {
    const out = path.join(outdir, `${String(i).padStart(2, '0')}.png`);
    const {stdout, stderr} = await run('node', [path.join(repo, 'tools/qa/shot.mjs'), `http://127.0.0.1:${port}/?${q}`, String(W), String(H), out, '--wait', 'window.__ready', '--settle', process.env.SETTLE || '2500', '--timeout', '240000'], {env: {...process.env, SHOT_TMP: process.env.SHOT_TMP || tmp}, maxBuffer: 1e8}).catch(e => ({stdout: e.stdout || '', stderr: String(e)}));
    console.log(`${out}  ${q}${stdout.trim() ? '\n   ' + stdout.trim().split('\n').slice(0, 6).join('\n   ') : ''}${stderr ? '\n   ERR ' + stderr.slice(0, 300) : ''}`);
  });
  for (let i = 0; i < jobs.length; i += 3) await Promise.all(jobs.slice(i, i + 3).map(f => f()));
  server.close();
} finally { await rm(tmp, {recursive: true, force: true}); }
