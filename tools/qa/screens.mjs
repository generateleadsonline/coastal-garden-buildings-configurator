// Screenshots of every step (and the dialogs) at a desktop and a phone width, for checking by eye.
//   PLAYWRIGHT_CORE=<path> BASE=http://127.0.0.1:4812 SHOTS=<dir> node tools/qa/screens.mjs [widths]
import {mkdir} from 'node:fs/promises';
import {launch, BASE, SKIP_TOUR, ready3d} from './lib.mjs';
const dir = process.env.SHOTS || 'qa-screens';
await mkdir(dir, {recursive: true});
const widths = (process.argv[2] || '1440,390').split(',').map(Number);
const browser = await launch('chromium');
for (const w of widths) {
  const mobile = w < 768;
  const ctx = await browser.newContext({viewport: {width: w, height: mobile ? 844 : 900}, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: mobile ? 2 : 1, reducedMotion: 'reduce'});
  await ctx.addInitScript(SKIP_TOUR);
  const page = await ctx.newPage(); page.setDefaultTimeout(240000);
  await page.goto(BASE + `/configurator/?qa=1&tier=${mobile ? 'medium' : 'high'}${process.env.QUERY ? '&' + process.env.QUERY : ''}`, {waitUntil: 'load'});
  await ready3d(page); await page.waitForTimeout(800);
  for (const s of [0, 1, 2, 3, 4, 5, 6]) {
    await page.evaluate(i => document.querySelector(`#steps [data-step="${i}"]`).click(), s);
    if (s === 3) await page.evaluate(() => document.querySelector('.opening-row')?.click());
    await page.waitForTimeout(900);
    await page.screenshot({path: `${dir}/${w}-step${s + 1}.png`, caret: 'initial', fullPage: false});
    if (mobile) { await page.evaluate(() => document.getElementById('panel').scrollIntoView()); await page.waitForTimeout(300); await page.screenshot({path: `${dir}/${w}-step${s + 1}-panel.png`, caret: 'initial'}); await page.evaluate(() => scrollTo(0, 0)); }
  }
  for (const d of (process.env.DIALOGS || '').split(',').filter(Boolean)) {
    await page.evaluate(n => document.querySelector(`[data-dialog="${n}"]`).click(), d);
    await page.waitForTimeout(500);
    await page.screenshot({path: `${dir}/${w}-dialog-${d}.png`, caret: 'initial'});
    await page.evaluate(n => document.getElementById('dlg-' + n).close(), d);
  }
  await ctx.close();
}
await browser.close();
console.log('saved to', dir);
