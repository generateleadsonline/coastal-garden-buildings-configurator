// Accessibility: axe-core (WCAG 2.2 A and AA rules) on every step and every dialog, desktop and
// phone. axe is loaded from AXE (default: the scratch install next to playwright-core).
//   PLAYWRIGHT_CORE=<path> AXE=<path>/axe-core/axe.min.js BASE=http://127.0.0.1:4812 node tools/qa/check-a11y.mjs
import {readFile} from 'node:fs/promises';
import {launch, BASE, SKIP_TOUR, ready3d} from './lib.mjs';

const axe = await readFile(process.env.AXE, 'utf8');
let failed = 0;
const browser = await launch('chromium');
for (const [width, mobile] of [[1440, false], [390, true]]) {
  // axe is injected through the debugging protocol, which the page's CSP does not cover.
  const ctx = await browser.newContext({viewport: {width, height: 900}, isMobile: mobile, hasTouch: mobile});
  await ctx.addInitScript(SKIP_TOUR);
  const page = await ctx.newPage(); page.setDefaultTimeout(Number(process.env.WAIT || 240000));
  await page.goto(BASE + `/configurator/?qa=1${process.env.WITH3D ? '' : '&no3d'}`, {waitUntil: 'load'});
  if (process.env.WITH3D) await ready3d(page);
  await page.evaluate(axe);
  const run = async where => {
    const res = await page.evaluate(async () => {
      const r = await window.axe.run(document, {runOnly: {type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']}, resultTypes: ['violations']});
      return r.violations.map(v => ({id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 3).map(n => n.target.join(' ') + ' :: ' + (n.failureSummary || '').split('\n')[1]?.trim())}));
    });
    for (const v of res) { failed++; console.log(`FAIL ${width}px ${where}: ${v.id} (${v.impact}) ${v.help}\n     ${v.nodes.join('\n     ')}`); }
    if (!res.length) console.log(`ok   ${width}px ${where}`);
  };
  for (const step of [0, 1, 2, 3, 4, 5, 6]) {
    await page.evaluate(s => document.querySelector(`#steps [data-step="${s}"]`).click(), step);
    if (step === 3) await page.evaluate(() => document.querySelector('.opening-row')?.click());
    await page.waitForTimeout(300);
    await run(`step ${step + 1}`);
  }
  await page.evaluate(() => window.__cfg.unlock('QA'));
  await page.evaluate(() => new Promise(r => { const end = Date.now() + 30000; const t = () => (window.__cfg.price.status !== 'loading' && window.__cfg.price.status !== 'idle' || Date.now() > end ? r() : setTimeout(t, 200)); t(); }));
  await page.waitForTimeout(300);
  await run('price unlocked');
  for (const dlg of ['callback', 'showroom', 'brochure', 'book', 'share']) {
    await page.evaluate(n => document.getElementById('dlg-' + n).showModal(), dlg);
    // Past the 300ms open animation, or axe samples the colours half faded in.
    await page.waitForTimeout(700);
    await run(`dialog ${dlg}`);
    await page.evaluate(n => document.getElementById('dlg-' + n).close(), dlg);
  }
  // The tour, which opens on a first visit.
  await page.evaluate(() => { localStorage.removeItem('coastal-cfg-tour-v2'); document.getElementById('tour-open').click(); });
  await page.waitForTimeout(300);
  await run('tour');
  await ctx.close();
}
await browser.close();
console.log(failed ? `${failed} accessibility violations` : 'No accessibility violations');
process.exit(failed ? 1 : 0);
