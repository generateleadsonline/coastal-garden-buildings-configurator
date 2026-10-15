// Prints share-link queries for designs given as JSON, for render.mjs:
//   node tools/qa/queries.mjs '[{"range":"pitched"}, ...]' [extra flags]
import {build} from 'esbuild';
const out = await build({entryPoints: ['src/configurator-model.js'], bundle: true, format: 'esm', write: false, platform: 'neutral', logLevel: 'silent'});
const M = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
const designs = JSON.parse(process.argv[2]);
for (const d of designs) {
  const {view, night, dims, ...rest} = d;
  const q = new URL(M.shareURL(M.normalise(rest), 'https://x/configurator/')).search.slice(1);
  console.log(q + (view ? `&view=${view}` : '') + (night ? '&night=1' : '') + (dims ? '&dims=1' : '') + (process.argv[3] ? '&' + process.argv[3] : ''));
}
