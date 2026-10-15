# Coastal Garden Buildings: Lugarde garden building designer (v2)

A 3D designer for the Lugarde buildings Coastal Garden Buildings sells from its show site at Stewarts Christchurch Garden Centre, Dorset: the Log Cabin, Prima and Pro systems. It takes seven steps: system, size, roof, doors and windows, finish, inside and extras, and the price. Every price comes live from **Lugarde's own price engine for Coastal's dealer account** (the dealer link on Coastal's "Design your own" page). Coastal publishes no prices of its own, so nothing here is invented: the design runs through the same request Lugarde's configurator sends.

v2 is built on the Sutton Garden Buildings v2 designer (another Lugarde dealer, `generateleadsonline/sutton-garden-room-configurator`): the same Lugarde catalogue, rules, price-engine port, 3D and QA tools, with Coastal's dealer token, brand, contact details, services and selling points. Coastal's dealer product list and prices are identical to Sutton's (389 products, 0 differences on 15 Oct 2026).

- Live: https://coastal-garden-buildings-configurator.netlify.app/configurator/ (`/` redirects there)
- Netlify site `98aa1f5a-cd63-47aa-8ea1-7ffc137d3c30` (GLO team), **Git-linked**: a push to `main` deploys. Put `[skip netlify]` on docs-only commits.
- v1 (the 11 Oct 2026 concept) is tagged `v1-concept`. The unfinished first v2 attempt (13 Oct) is kept on branch `v2-wip-2026-10-13`; it never built and its price book was partial, so v2 was rebuilt from Sutton's architecture.
- Points for Coastal to confirm: [docs/CONFIRMATIONS.md](docs/CONFIRMATIONS.md). QA record: [docs/qa/QA-REPORT.md](docs/qa/QA-REPORT.md). Site research: [research/coastal-site-2026-10-13.md](research/coastal-site-2026-10-13.md).

## How it works

| Part | File |
|---|---|
| Catalogue: systems, roofs, doors and windows, treatments, options, prices beside options, Coastal's services, selling points, contact | `src/configurator-data.js` |
| Design rules (Lugarde's limits, slopes, canopies, which sizes the engine can price), fitting doors and windows round Pro posts and log stability points, share links, UK phone and postcode rules | `src/configurator-model.js` |
| Port of Lugarde's configurator: the price structure and cart its configurator sends to the engine | `src/lugarde-cart.js` |
| Live price: validates the design, asks Lugarde's engine with Coastal's token, checks the lines add up and returns them itemised | `netlify/functions/price.mjs` (`/api/price`) |
| Leads: every form (quote, callback, visit, brochure, `book-call`) is checked again and saved to the private Blobs store `coastal-enquiries` | `netlify/functions/enquiry.mjs` (`/api/enquiry`) |
| Page: steps, forms, gated price, PDF, analytics, the 3D start-up, the first-visit tour | `src/configurator.html`, `.css`, `.js`, `configurator-tour.js` |
| 3D: each system built to Lugarde's measurements, roofs, canopies, every door and window, interior, furniture and garden; Three.js r170 plus an r162 WebGL1 build | `src/configurator-building.js`, `-scene.js`, `-textures.js`, `-furniture.js` |
| Phones: tier ladder (high, medium, low, safe), WebGL1 fallback, SVG 3D as the last resort, rebuild on context loss, crash guard, `?debug3d` | `src/configurator-boot.js`, `-svg.js`, `-compat.js` (from SMART) |
| Customer PDF: renders from every side, inside, plan, dimensioned plan, specification, Lugarde's itemised price, next steps and a booking link | `src/configurator-pdf.js` |

**Start-up.** The page opens straight into the designer. The poster of the starting building is the largest paint; on its LCP entry (or once it loads, with a 3 s fallback) the page waits for `load`, then 2.5 s and an idle moment, and starts the 3D by itself, as Yorkshire's designer does. The 3D is live about 3–4 s after opening, and Lighthouse mobile stays above 90. A touch, scroll or key starts it sooner. The tour opens by itself on a first visit (localStorage `coastal-cfg-tour-v2`) and does not wait for the 3D; Help replays it.

**The price gate.** The quote form unlocks the price. It posts to `/api/enquiry`; only a saved enquiry unlocks the itemised price, the PDF and the booking. The price function itself is not secret (Lugarde's configurator shows the same price to anyone with Coastal's dealer link); the gate is for lead capture.

**Leads.** Netlify Forms detection is switched off on this site (`ignore_html_forms`), so the forms post to the enquiry function, which stores each enquiry as JSON under `leads/<date>/<ref>` in the `coastal-enquiries` Blobs store (the store v1 used). No email or CRM routing yet: see CONFIRMATIONS C2.

## Build

```sh
npm ci
python3 tools/build-pdf-assets.py   # only when the fonts or logo change: PDF assets, page fonts, logo, icons
python3 tools/build.py              # src/ -> public/ (hashed bundles, inline CSS, CSP by hash)
sh build.sh                         # what Netlify runs: checks public/
```

`public/` is committed. Edit `src/`, never `public/*.html`. The posters and thumbnails are renders of the starting designs (`W=1600 H=1000 node tools/qa/render.mjs <dir> <queries>`, then `python3 tools/make-images.py <dir>`).

## Tests and QA

Playwright: `PLAYWRIGHT_CORE=~/projects/loumil-garden-configurator/node_modules/playwright-core/index.mjs` (1.49.1). axe: `AXE=~/projects/bdpm-landing/node_modules/axe-core/axe.min.js`.

Start the local server with `node tools/qa/static-server.mjs <port>`. It serves `public/` with the real headers, runs `/api/price` through the real function, and runs `/api/enquiry` through the real function with the Blobs store swapped for `.qa-forms.ndjson` (git-ignored), so nothing is sent anywhere. Set `PRICE=stub` or `PRICE=down` for offline or outage checks.

| Check | Command |
|---|---|
| Model and parity, offline | `npm test` |
| Price parity with Lugarde's configurator (56 designs, Coastal's dealer link) | `PLAYWRIGHT_CORE=… node tools/parity/app-structures.mjs [base]`, then `node tools/parity/compare.mjs` |
| Every displayed price equals the engine's (Coastal's token) | `node tools/qa/check-prices.mjs` |
| Every offered size can be priced | `node tools/qa/check-sizes.mjs` |
| Every option changes the 3D and focuses the camera | `PLAYWRIGHT_CORE=… BASE=… node tools/qa/check-options.mjs` |
| No z-fighting across every system, roof and size | `… node tools/qa/check-zfighting.mjs` |
| iPhone (WebKit) and Android with forced failures | `… node tools/qa/check-mobile-3d.mjs <BASE>` |
| Layout at 320–1440px, 44px targets | `… node tools/qa/check-layout.mjs` |
| Accessibility (axe, WCAG 2.2 AA) | `… AXE=… node tools/qa/check-a11y.mjs` |
| Forms | `… node tools/qa/check-forms.mjs`. Locally it submits every form to the stand-in; against any other origin it never sends a valid form. |
| Customer PDF | `… OUT=<dir> node tools/qa/check-pdf.mjs "<design query>"`, then `swift tools/qa/pdfrender.swift <pdf> <dir> 1.4` |
| Live files equal the build, and the live price function works | `node tools/qa/check-live-files.mjs` |

## Analytics

Every step and call to action pushes a `dataLayer` event for Google Tag Manager; contact details are never included: `configurator_step_view`, `cta_click` (with `cta` and `placement`), `configurator_option_change`, the form view, start, error and submit events, `generate_lead` (`lead_type` `coastal_configurator_quote`, `coastal_callback`, `coastal_visit`, `coastal_brochure`, `coastal_book-call`), `configurator_price_shown`, the PDF events and the 3D events (`configurator_3d_start` with its trigger). No tracker is installed.
