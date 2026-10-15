// Makes the customer PDF in a real browser (real WebGL renders of the design), saves it and checks
// its pages, for rendering to PNG with tools/qa/pdfrender.swift and checking by eye. It uses the
// QA hook (?qa=1, window.__cfg.pdf), so no form is submitted: safe against the live site.
//   PLAYWRIGHT_CORE=<path> BASE=<origin> OUT=<dir> NAME=<first name> node tools/qa/check-pdf.mjs "<design query>"
import {mkdir} from 'node:fs/promises';
import {launch, BASE, SKIP_TOUR, ready3d} from './lib.mjs';

const out = process.env.OUT || '.';
await mkdir(out, {recursive: true});
const query = process.argv[2] || 'v=1&r=hazel';
const browser = await launch('chromium');
const ctx = await browser.newContext({viewport: {width: 1440, height: 900}, acceptDownloads: true});
await ctx.addInitScript(SKIP_TOUR);
const page = await ctx.newPage(); page.setDefaultTimeout(900000);
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(`${BASE}/configurator/?${query}&qa=1&tier=${process.env.TIER || 'high'}`, {waitUntil: 'load'});
await ready3d(page);
await page.waitForTimeout(1500);
const [download, info] = await Promise.all([
  page.waitForEvent('download', {timeout: 900000}),
  page.evaluate(name => window.__cfg.pdf({contactName: name}).then(r => ({pages: r.pages, filename: r.filename, reference: r.reference})), process.env.NAME || 'Sam')
]);
const file = `${out}/${download.suggestedFilename()}`;
await download.saveAs(file);
console.log(JSON.stringify({file, ...info, errors}));
await browser.close();
