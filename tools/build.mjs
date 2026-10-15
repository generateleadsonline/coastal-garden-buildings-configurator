// Builds public/ from src/. Edit src/, never public/index.html or public/assets/app|engine.
//
//   node tools/build.mjs            build
//   node tools/build.mjs --check    build into a temporary folder and fail if public/ differs
//
// - src/app.js is bundled with code splitting: the WebGL 2 engine (three r180), the PDF writer
//   and the phone validator are separate chunks, loaded only when the page needs them.
// - src/scene/index.js is bundled a second time against three r162 (npm alias three-webgl1),
//   the last release that still draws with WebGL 1, for phones without WebGL 2.
// - src/styles.css is minified and inlined, and public/_headers gets a CSP that allows that one
//   inline style by hash, so neither scripts nor styles need 'unsafe-inline'.
import {build, transform} from 'esbuild';
import {createHash} from 'node:crypto';
import {readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync, statSync, mkdtempSync, cpSync} from 'node:fs';
import {join, dirname, relative} from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath} from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const check = process.argv.includes('--check');
const OUT = check ? mkdtempSync(join(tmpdir(), 'coastal-build-')) : join(ROOT, 'public');
if (check) cpSync(join(ROOT, 'public'), OUT, {recursive: true});

// Safari 13 and Chrome 79 are the floor (older iPads, Android 9 browsers). esbuild cannot lower
// destructuring for Safari 14, so it is declared supported, as on the other GLO configurators.
const TARGET = ['es2019', 'safari13', 'chrome79', 'firefox78', 'edge79'];
const common = {bundle: true, minify: true, format: 'esm', target: TARGET, charset: 'ascii', legalComments: 'none', supported: {destructuring: true}, logLevel: 'warning', metafile: true};

const sha = (s, enc = 'base64') => createHash('sha256').update(s).digest(enc);
const read = p => readFileSync(p, 'utf8');

for (const d of ['assets/app', 'assets/engine']) rmSync(join(OUT, d), {recursive: true, force: true});

// 1. The page app, with the WebGL 2 engine, PDF and phone validation as lazy chunks.
const app = await build({...common, entryPoints: {app: join(SRC, 'app.js')}, splitting: true, outdir: join(OUT, 'assets/app'), entryNames: '[name]-[hash]', chunkNames: 'c-[hash]', define: {__BUILD__: JSON.stringify(new Date().toISOString().slice(0, 10))}});
const appFile = Object.entries(app.metafile.outputs).find(([, o]) => o.entryPoint && o.entryPoint.endsWith('src/app.js'))[0];

// 2. The WebGL 1 engine: the same scene, built against three r162.
const gl1 = await build({...common, entryPoints: {'scene-gl1': join(SRC, 'scene/index.js')}, outdir: join(OUT, 'assets/engine'), entryNames: '[name]-[hash]', alias: {three: 'three-webgl1'}});
const gl1File = Object.keys(gl1.metafile.outputs).find(f => f.endsWith('.js'));
const gl1Size = statSync(join(ROOT, check ? relative(OUT, gl1File) : gl1File).replace(/^/, '')).size;

// 3. Styles, inlined.
const css = (await transform(read(join(SRC, 'styles.css')), {loader: 'css', minify: true, target: TARGET})).code.trim();

// 4. The page.
const url = f => '/' + relative(OUT, f.startsWith('/') ? f : join(ROOT, f)).split('\\').join('/');
const config = JSON.stringify({gl1: url(gl1File), built: new Date().toISOString().slice(0, 10)});
let html = read(join(SRC, 'index.html'))
  .replace('{{css}}', css)
  .replace('{{app}}', url(appFile))
  .replace('{{config}}', config.replace(/</g, '\\u003c'));
if (/\{\{[a-z]+\}\}/.test(html)) throw new Error('Unfilled placeholder in index.html: ' + html.match(/\{\{[a-z]+\}\}/)[0]);
const styleHashes = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => `'sha256-${sha(m[1])}'`);
if (/<script(?![^>]*\b(src|type="application\/json")\b)[^>]*>/.test(html)) throw new Error('Inline scripts need a CSP hash: keep them out of index.html.');
if (/\sstyle="/.test(html)) throw new Error('Inline style attributes are refused by the CSP.');
writeFileSync(join(OUT, 'index.html'), html);

// 5. Headers: the CSP lists the inline style by hash; assets are immutable (hashed names).
const csp = [
  "default-src 'self'", "script-src 'self'", `style-src 'self' ${styleHashes.join(' ')}`,
  "img-src 'self' data: blob:", "font-src 'self'", "connect-src 'self'", "worker-src 'self' blob:",
  "frame-ancestors 'self'", "base-uri 'self'", "form-action 'self'", "object-src 'none'", 'upgrade-insecure-requests'
].join('; ');
writeFileSync(join(OUT, '_headers'), read(join(SRC, '_headers')).replace('{{csp}}', csp));

const kb = f => (statSync(f).size / 1024).toFixed(0) + 'KB';
const outputs = Object.keys(app.metafile.outputs).filter(f => f.endsWith('.js')).map(f => `${relative(OUT, f.startsWith('/') ? f : join(ROOT, f))} ${kb(f.startsWith('/') ? f : join(ROOT, f))}`);
console.log(`built ${relative(ROOT, OUT) || OUT}: index.html ${(html.length / 1024).toFixed(0)}KB (css ${(css.length / 1024).toFixed(0)}KB), ${outputs.join(', ')}, ${relative(OUT, join(ROOT, gl1File))} ${(gl1Size / 1024).toFixed(0)}KB`);

if (check) {
  // Hashed names make any change visible as a different file list or a different index.html.
  const list = dir => existsSync(dir) ? readdirSync(dir, {recursive: true}).filter(f => !statSync(join(dir, f)).isDirectory()).sort() : [];
  const diff = [];
  for (const sub of ['assets/app', 'assets/engine']) {
    const a = list(join(ROOT, 'public', sub)).join('\n'), b = list(join(OUT, sub)).join('\n');
    if (a !== b) diff.push(sub);
  }
  for (const f of ['index.html', '_headers']) if (read(join(ROOT, 'public', f)) !== read(join(OUT, f))) diff.push(f);
  rmSync(OUT, {recursive: true, force: true});
  if (diff.length) { console.error('public/ is out of date: ' + diff.join(', ') + '. Run npm run build.'); process.exit(1); }
  console.log('public/ matches src/.');
}
