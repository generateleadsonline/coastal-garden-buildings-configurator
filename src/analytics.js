// Every step and every call to action is an analytics event: pushed to window.dataLayer (for
// Coastal's Google Tag Manager or GA4 when they connect it), dispatched as a DOM event, and
// counted anonymously by /api/event so the funnel can be read before any tag is installed.
// Events never carry contact details.
const queue = [];
let timer = 0;
const bot = /HeadlessChrome|bot\b|crawler|spider|Lighthouse/i.test(navigator.userAgent);

export function track(event, params = {}) {
  const detail = {event, ...params};
  try { (window.dataLayer = window.dataLayer || []).push(detail); } catch {}
  try { window.dispatchEvent(new CustomEvent('coastal:event', {detail})); } catch {}
  window.__events?.push(detail);
  if (bot || new URLSearchParams(location.search).has('qa')) return;
  queue.push({e: event, s: params.step || params.cta || params.option || ''});
  clearTimeout(timer);
  timer = setTimeout(flush, 1500);
}
function flush() {
  if (!queue.length) return;
  const body = JSON.stringify({events: queue.splice(0, 40)});
  try {
    if (navigator.sendBeacon && navigator.sendBeacon('/api/event', new Blob([body], {type: 'application/json'}))) return;
  } catch {}
  fetch('/api/event', {method: 'POST', headers: {'Content-Type': 'application/json'}, body, keepalive: true}).catch(() => {});
}
addEventListener('pagehide', flush);
