// Layout at 320, 360, 375, 390, 768, 1024 and 1440px: no sideways scrolling on any step or dialog,
// and every touch target at least 44 x 44px (WCAG 2.5.5). Phones are emulated as touch devices.
//   PLAYWRIGHT_CORE=<path> BASE=http://127.0.0.1:4812 SHOTS=<dir> node tools/qa/check-layout.mjs
import {launch, BASE, SKIP_TOUR} from './lib.mjs';

const WIDTHS = [320, 360, 375, 390, 768, 1024, 1440];
let failed = 0;
const browser = await launch('chromium');
const probe = () => {
  const vw = document.documentElement.clientWidth, out = {overflow: 0, wide: [], small: []};
  out.overflow = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - vw;
  if (out.overflow > 1) {
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.width && (r.right > vw + 1) && getComputedStyle(el).position !== 'fixed' && !el.closest('.sr-only, .honeypot, .sprite, .skip')) out.wide.push(`${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}.${[...el.classList].join('.')} right ${Math.round(r.right)}`);
    }
    out.wide = out.wide.slice(0, 6);
  }
  // Touch targets: what a finger presses. Hidden radios and checkboxes are pressed through their
  // styled label; links inside a sentence are WCAG's inline exception and are listed separately.
  const visible = el => { const r = el.getBoundingClientRect(), s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && !el.closest('[hidden], .sr-only, .honeypot, .skip, .tour[hidden]'); };
  const targets = new Set();
  for (const el of document.querySelectorAll('button, a[href], select, textarea, input:not([type=hidden]):not([type=radio]):not([type=checkbox]), summary')) if (!el.closest('label')) targets.add(el);
  for (const el of document.querySelectorAll('input[type=radio], input[type=checkbox]')) {
    const l = el.closest('label'); if (!l) { targets.add(el); continue; }
    targets.add(l.querySelector(':scope > span') && !l.classList.contains('switch') && !l.classList.contains('check') ? l.querySelector(':scope > span') : l);
  }
  for (const el of targets) {
    if (!visible(el)) continue;
    const r = el.getBoundingClientRect();
    const inline = el.tagName === 'A' && getComputedStyle(el).display === 'inline' && el.closest('p, small, span, li');
    if ((r.width < 43.5 || r.height < 43.5) && !inline) out.small.push(`${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : ''} "${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
  }
  out.small = [...new Set(out.small)].slice(0, 12);
  return out;
};
for (const width of WIDTHS) {
  const mobile = width < 768;
  const ctx = await browser.newContext({viewport: {width, height: mobile ? 760 : 900}, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: 1});
  await ctx.addInitScript(SKIP_TOUR);
  const page = await ctx.newPage(); page.setDefaultTimeout(Number(process.env.WAIT || 240000));
  await page.goto(BASE + '/configurator/?qa=1&no3d', {waitUntil: 'load'});
  await page.waitForTimeout(400);
  const report = [];
  for (const step of [0, 1, 2, 3, 4, 5, 6]) {
    await page.evaluate(s => document.querySelector(`#steps [data-step="${s}"]`).click(), step);
    // Open the first door and window editor on step 4, and the floor (its finishes) on step 6, so
    // their controls are measured too.
    if (step === 3) await page.evaluate(() => document.querySelector('.opening-row')?.click());
    if (step === 5) await page.evaluate(() => { const f = document.querySelector('input[name=floor]'); if (f && !f.checked) f.click(); });
    await page.waitForTimeout(300);
    report.push([`step ${step + 1}`, await page.evaluate(probe)]);
    if (process.env.SHOTS && (step === 0 || step === 2 || step === 5)) await page.screenshot({path: `${process.env.SHOTS}/w${width}-step${step + 1}.png`});
  }
  // The price step once the design is sent: the itemised price and the next steps.
  await page.evaluate(() => window.__cfg.unlock('QA'));
  await page.evaluate(() => new Promise(r => { const end = Date.now() + 30000; const t = () => (window.__cfg.price.status !== 'loading' && window.__cfg.price.status !== 'idle' || Date.now() > end ? r() : setTimeout(t, 200)); t(); }));
  await page.waitForTimeout(300);
  report.push(['price unlocked', await page.evaluate(probe)]);
  if (process.env.SHOTS) await page.screenshot({path: `${process.env.SHOTS}/w${width}-price.png`, fullPage: false});
  for (const dlg of ['callback', 'showroom', 'brochure', 'book', 'share']) {
    await page.evaluate(n => document.querySelector(`[data-dialog="${n}"]`)?.click() || window.__cfg && document.getElementById('dlg-' + n).showModal(), dlg);
    // Dialogs open from scale(.98): measure after the animation ends, not after a fixed wait, or
    // a 44px target reads as 43px on a loaded machine.
    await page.evaluate(n => Promise.all(document.getElementById('dlg-' + n).getAnimations({subtree: true}).map(a => a.finished)), dlg);
    report.push([`dialog ${dlg}`, await page.evaluate(probe)]);
    await page.evaluate(n => document.getElementById('dlg-' + n).close(), dlg);
  }
  if (mobile) {
    await page.evaluate(() => document.getElementById('menu-toggle').click()); await page.waitForTimeout(150);
    report.push(['menu', await page.evaluate(probe)]);
  }
  let bad = 0;
  for (const [where, r] of report) {
    if (r.overflow > 1) { bad++; console.log(`FAIL ${width}px ${where}: page scrolls sideways by ${r.overflow}px: ${r.wide.join(' | ')}`); }
    if (r.small.length) { bad++; console.log(`FAIL ${width}px ${where}: touch targets under 44px: ${r.small.join(' | ')}`); }
  }
  console.log(`${bad ? 'FAIL' : 'ok  '} ${width}px: ${report.length} screens checked`);
  failed += bad;
  await ctx.close();
}
await browser.close();
console.log(failed ? `${failed} layout problems` : 'All layout checks passed');
process.exit(failed ? 1 : 0);
