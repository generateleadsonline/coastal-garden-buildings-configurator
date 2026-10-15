// Shared Playwright helpers for the QA suites. playwright-core is not a project dependency: point
// PLAYWRIGHT_CORE at an install whose WebKit build matches the cached browsers (see README).
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
export const pw = require(process.env.PLAYWRIGHT_CORE || 'playwright-core');
export const BASE = (process.env.BASE || 'http://127.0.0.1:4812').replace(/\/$/, '');
export const SKIP_TOUR = () => { try { localStorage.setItem('coastal-cfg-tour-v2', 'done'); } catch {} };
export async function launch(kind = 'chromium') {
  return kind === 'webkit' ? pw.webkit.launch() : pw.chromium.launch({channel: 'chrome', args: process.env.SWIFTSHADER ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] : ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist']});
}
// Polls with plain evaluate calls: waitForFunction evaluates a string in the page, which the
// live CSP refuses (as SMART's check-mobile-3d found).
export async function waitFor(page, fn, arg, timeout = Number(process.env.WAIT || 240000)) {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    if (await page.evaluate(fn, arg).catch(() => false)) return true;
    await new Promise(r => setTimeout(r, 250));
  }
  throw new Error('timed out waiting for ' + fn);
}
export const ready3d = page => waitFor(page, () => window.__cfg && (window.__cfg.fallback || window.__cfg.boot.verified));
export const frames = page => page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(r, 200)))));
