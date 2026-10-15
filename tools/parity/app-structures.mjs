// Price parity, step 1: ask Lugarde's own configurator (Coastal's dealer link) what price structure
// it builds for each design in tools/parity/designs.mjs, and save it as a fixture.
//
// For each base template (system + roof) the script starts the template the way a customer does,
// then for each design edits the configurator's own design JSON (size, canopy, doors and windows,
// wall thickness, slope), loads it back into the configurator and reads the structure the
// configurator itself generates for its price engine (editor.generatePriceJson()). Nothing is
// submitted: no quote, enquiry, account or saved project. Cookies: "necessary only".
//
//   PLAYWRIGHT_CORE=<path to playwright-core> node tools/parity/app-structures.mjs [base ...]
// Writes tools/parity/fixtures/app-structures.json (merged with any existing entries).
import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {DESIGNS, BASES, bare, heavy} from './designs.mjs';
import {toLugardeJSON} from './design-json.mjs';
import {LUGARDE_URL} from '../../src/configurator-data.js';

const {chromium} = await import(process.env.PLAYWRIGHT_CORE || 'playwright-core');
const OUT = new URL(process.env.OUT || './fixtures/app-structures.json', import.meta.url);
const URL0 = LUGARDE_URL; // Coastal's dealer link
await mkdir(new URL('./fixtures/', import.meta.url), {recursive: true});
let saved = {};
try { saved = JSON.parse(await readFile(OUT, 'utf8')); } catch {}
const only = process.argv.slice(2);
const browser = await chromium.launch({channel: 'chrome', headless: true, args: ['--use-angle=metal']});

async function openBase(base) {
  const ctx = await browser.newContext({viewport: {width: 1440, height: 900}, locale: 'en-GB'});
  const page = await ctx.newPage();
  await page.goto(URL0, {waitUntil: 'domcontentloaded', timeout: 90000});
  const click = async (re, ms = 15000) => {
    const end = Date.now() + ms;
    while (Date.now() < end) {
      if (await page.evaluate(src => { const el = [...document.querySelectorAll('button, a')].find(b => new RegExp(src, 'i').test(b.textContent.trim()) && b.offsetParent); if (el) { el.click(); return true; } return false; }, re.source)) return true;
      await page.waitForTimeout(400);
    }
    return false;
  };
  await click(/^necessary only$/, 20000);
  await page.waitForTimeout(1200);
  const search = page.locator('input.searchbar[placeholder^="Search by page"]').first();
  await search.fill(base.template, {force: true}).catch(() => {});
  await search.press('Enter').catch(() => {});
  await page.waitForTimeout(2500);
  const ok = await page.evaluate(async t => {
    for (let i = 0; i < 30; i++) {
      const h = [...document.querySelectorAll('h4')].find(x => x.textContent.trim() === t);
      if (h) { let c = h; for (let k = 0; k < 6 && !/start design/i.test(c.textContent); k++) c = c.parentElement; const b = [...c.querySelectorAll('button, a')].find(x => /start design/i.test(x.textContent)); if (b) { b.click(); return true; } }
      const hs = [...document.querySelectorAll('h4')]; hs[hs.length - 1]?.scrollIntoView(); await new Promise(r => setTimeout(r, 600));
    }
    return false;
  }, base.template);
  if (!ok) throw new Error('template not found: ' + base.template);
  await click(/^yes$/, 5000);
  await page.waitForTimeout(5000);
  await page.evaluate(() => document.querySelectorAll('a.close-icon').forEach(a => a.offsetParent && a.click()));
  const json = await page.evaluate(() => angular.element(document.body).injector().get('2DConfigurator')._element.getJSONData());
  return {ctx, page, json: JSON.parse(json)};
}

const bases = Object.entries(BASES).filter(([k]) => !only.length || only.includes(k));
for (const [key, base] of bases) {
  const designs = DESIGNS.filter(d => d.base === key);
  if (!designs.length) continue;
  let session;
  try { session = await openBase(base); } catch (err) { console.log(key, 'FAILED', err.message); continue; }
  console.log(key, 'base loaded,', designs.length, 'designs');
  for (const d of designs) {
    const b = bare(d), h = heavy(d);
    const j = toLugardeJSON(session.json, b);
    // The same design with every priced option: gutters (pitched roofs) or a downpipe (flat roofs)
    // change the structure the engine prices by, and gutters on a log apex or Prima pyramid make
    // Lugarde's configurator raise the walls a board.
    const jh = toLugardeJSON(session.json, h);
    if (h.options.downpipe) jh.system.hasRoofDownspouts = true;
    if (h.options.gutter) jh.system.hasRoofGutters = true;
    const grab = (text, st) => session.page.evaluate(async ([text, slope, raise]) => {
      const inj = angular.element(document.body).injector(), cfg = inj.get('2DConfigurator'), ed = cfg._element, Cart = inj.get('Cart');
      // Slope and wall raise follow the cart's products in Lugarde's configurator: set them there.
      for (const k of Object.keys(Cart.getContents())) if (/^roof\.slope\.|^wall\.raise\./.test(k)) Cart.setProductAmount(k, 0, true);
      if (slope) Cart.setProductAmount('roof.slope.' + String(slope).padStart(2, '0'), 1, true);
      if (raise) Cart.setProductAmount('wall.raise.' + String(raise).padStart(2, '0'), 1, true);
      cfg.setData(text);
      await new Promise(r => setTimeout(r, 500));
      // Rebuild the roof from the new outline, as the editor does after a customer's edit.
      try { lugarde.AppModel.getInstance().structure.updateRoofBasePath(true); } catch (err) { return {error: 'roof: ' + err}; }
      await new Promise(r => setTimeout(r, 700));
      try {
        const pj = ed.generatePriceJson();
        return {structure: JSON.parse(JSON.stringify(pj)), json: JSON.parse(ed.getJSONData())};
      } catch (err) { return {error: String(err)}; }
    }, [text, st.roof === 'apex' ? st.slope : 0, st.raise]);
    const got = await grab(JSON.stringify(j), b);
    const heavyGot = await grab(JSON.stringify(jh), h);
    saved[d.id] = {design: d, state: b, heavyState: h, base: key, captured: new Date().toISOString(), ...got, json: undefined, heavy: heavyGot.structure || null};
    console.log(' ', d.id, got.error || `${got.structure.substructures.length} sub, ${got.structure.canopies.length} canopy, ${got.structure.roofs.length} roofs, ${got.structure.insets.length} insets`);
  }
  await session.ctx.close();
  await writeFile(OUT, JSON.stringify(saved, null, 1));
}
await browser.close();
