# QA report: Coastal Garden Buildings designer v2

## 15 October 2026: v2 rebuild to the GLO configurator standard

- **Why:** the 15 Oct 2026 audit of every configurator (`~/projects/configurator-audit-2026-10-15/FIX-BRIEF.md`) found the live v1 short of the standard: a hero page in front of the designer, no tour, a header with only a phone number and "Expert help", 3D/Front/Floor plan views with no Inside, a form with one "Your name" field and an optional phone, no Book a call, and a 401 in the console on load. Only the price gate passed.
- **Build:** commit `36d90cf` on `main`; Netlify deploy `6ad0da2db44259b93dce1c2e` (Git-linked site `98aa1f5a-cd63-47aa-8ea1-7ffc137d3c30`, built by Netlify from the push, published 13:50 UTC).
- **Live:** https://coastal-garden-buildings-configurator.netlify.app/configurator/ (`/` and `/configurator` 301 to it).
- **v1** is tagged `v1-concept` (bd7c595) and pushed.

### The unfinished v2 that was found

A first v2 attempt (13 Oct, about 14:04) was in the working tree, uncommitted: a new app (`src/app.js`, its own 3D, PDF and forms) priced from a price book captured by driving Lugarde's configurator. It did not build (`esbuild` had no loader for the PDF's fonts and logo), it had no tests, and the price book held 55 entries out of 621 queued captures, so most sizes would have needed interpolated (invented) prices. It was not usable as a base. It is preserved on branch `v2-wip-2026-10-13` (pushed). Its Coastal research (`research/coastal-site-2026-10-13.md`, `research/lugarde-uk-2026-10-13.md`), selling points, Lato fonts and logo work were carried into the rebuild.

### What v2 is

The Sutton Garden Buildings v2 designer (another Lugarde dealer; Configurators row 41), with Coastal's dealer account and facts. Lugarde's engine prices Coastal's designs live, so there is no price book and nothing interpolated. Coastal's dealer product list is identical to Sutton's (389 products, 0 differences; `research/lugarde-2026-10-15/products.json`).

### Changes, by standard point

| # | Standard | v2 |
|---|---|---|
| 1 | Opens straight in | `/` redirects to `/configurator/`: steps, option panel and the 3D on the first screen. No hero. On phones the 3D is on top and the Next bar is fixed. |
| 2 | Live 3D on load, phone-proof | The poster is the LCP. On its LCP entry (or load, with a 3 s fallback) the page waits for `load` + 2.5 s + idle, then starts the 3D by itself. This is Yorkshire's timing, and it keeps Lighthouse mobile at 99–100. Every tier is kept: WebGL2, safe, WebGL1 (three r162), SVG, crash guard and `?debug3d`. There is no "3D unavailable" message. |
| 3 | Tour on the first visit | The tour opens by itself about 1.2 s after the page runs (localStorage `coastal-cfg-tour-v2`), without waiting for the 3D. Help in the header replays it. |
| 4 | Gated price | The price is blurred until the quote form is saved by `/api/enquiry`. Then the itemised Lugarde price, Book a call and Download PDF unlock. Options show Lugarde's list prices; Coastal's own services say "Quoted by Coastal". |
| 5 | Header | Request a callback, Visit showroom (Stewarts Christchurch Garden Centre), Download brochure (Coastal's own Lugarde brochure, after a short form), `tel:+441425274000`, Save, Help. On phones: Callback, Save, Help and a menu with the rest; at 320px Help moves into the menu. |
| 6 | Price step | Lead form, **Book a call** ("Pick a day and time to talk it through") and **Download PDF**. Book a call asks for first and last name, a required UK phone, email, postcode, and a preferred day and time. It posts as `type=book-call` and fires `generate_lead` with `lead_type: coastal_book-call`. |
| 7 | Views | Outside, Inside and Plan. |
| 8 | Lead form | First name, last name, required UK phone (Ofcom ranges; drama and premium numbers refused), email and postcode, all checked again by the server. |

**Leads.** Netlify Forms detection is off on this site (`ignore_html_forms: true`), so v2 does not rely on it. Every form posts to `netlify/functions/enquiry.mjs`, which validates the details again and saves the enquiry, with its specification, the price shown and a design link, in the private Blobs store `coastal-enquiries` (v1's store; reachable, holding v1's 4 records). No email or CRM routing yet (CONFIRMATIONS C2).

### Results

Local runs used `tools/qa/static-server.mjs`, which calls the real price function and the real enquiry function, with a stand-in log in place of Blobs. Live runs never sent a valid form: every POST to `/api/enquiry` was fulfilled inside the browser (`ctx.route`), and the forms suite only submits invalid forms against a live origin.

| Check | Local | Live |
|---|---|---|
| Build (`tools/build.py`, `build.sh`) and unit tests (`npm test`) | Build OK; 14 of 14 tests pass | Netlify build ready |
| Live files equal the build; CSP; noindex | n/a | 23 of 23 files byte-identical; CSP matches; X-Robots-Tag noindex |
| Price function | £8,563.85 (8 lines) for the starting design | 200, £8,563.85 in 8 lines; another origin gets 403 |
| Enquiry function | Server-side validation: missing day/time and a drama number refused (422); valid enquiries recorded | Invalid post refused with 422 (no valid post sent) |
| **Price parity** with Lugarde's own configurator, via **Coastal's dealer link** (56 designs, priced bare and with every area-priced option) | 0 structure and 0 price differences (`tools/parity/fixtures/compare-2026-10-15.log`) | n/a |
| Every displayed option price equals Lugarde's engine (Coastal's token) | 42 of 42 | n/a |
| Every size the designer offers can be priced | 631 of 631 | n/a |
| Every option visibly changes the 3D and focuses the view | 299 of 299; 26 of 26 controls turn the camera and outline the part | 299 of 299; 26 of 26 |
| No z-fighting (every system and roof across its size range, extremes, features) | 319 designs clean | 319 designs clean |
| Phones: iPhone (WebKit 2215) and Android Chrome with forced faults (no WebGL, WebGL1 only, lost context, shaders that won't link, a GPU that draws nothing, low memory, early reloads, crash guard, `?debug3d`) | 38 of 38 (run again after the start-up change: 38 of 38) | 38 of 38 |
| Layout at 320, 360, 375, 390, 768, 1024 and 1440px: every step, dialog and the unlocked price; no sideways scroll; 44px targets | All pass (95 screens) | All pass |
| Accessibility: axe, WCAG 2.2 A/AA, every step, dialog, unlocked price and the tour, at 1440 and 390px | 0 violations (28 screens) | 0 violations (28 screens) |
| Forms: names, 16 phone and 7 postcode cases, the specification, price and link each form attaches, analytics events | 65 of 65 (all five forms saved through the real enquiry function to the stand-in) | 34 of 34 (nothing submitted) |
| FIX-BRIEF checks, fresh context at 1440×900 and 390×844 (`std.mjs`, POSTs intercepted): lands in the designer, canvas visible with no interaction, tour open, first screen, header CTAs, views, price hidden, Book a call and PDF present, form fields, non-UK phone refused, a sent form unlocks the price, Book a call sends as `book-call` and is tracked, no console errors, no failed requests | 31 of 31 (3D live in 3.2–3.6 s, tour 1.3 s) | 31 of 31, twice (3D live in 5.5–8.9 s, tour 2.5–3.9 s) |
| Lighthouse, mobile | Performance 93–94 (TBT 10ms) after the start-up change, 71–73 before it; Accessibility 100; Best practices 100 | 3 runs: Performance **99, 100, 99** (LCP 1.5 s, TBT 0 ms, CLS 0–0.024); Accessibility 100; Best practices 100 |

SEO scores 66 only because the preview carries `noindex` on purpose.

The Mac was shared with other agents throughout, with load averages of 28 to 124. The live 3D start times above were measured under that load and include the network fetch of the 3D bundle. The local run at a load of about 116 showed 3.2 s.

**The reviewed PDF:** a Log Cabin, 5.4 × 3.5m, flat roof, with a 2m left canopy and larch decking, internal floor, floor and roof insulation, 8 soffit spots, 2 wall lights, a downpipe set and Coastal's base and paving. Lugarde's price is £15,986.41, including VAT, delivery and the 10% late summer offer. That is the same figure Sutton's engine gives for the same design, as expected, since the dealer prices are identical. The PDF has seven pages, each rendered to an image and checked by eye: cover, every side, inside and plan, dimensioned plan, specification, itemised price, next steps. File: [docs/examples/coastal-reviewed-example-2026-10-15.pdf](../examples/coastal-reviewed-example-2026-10-15.pdf).

### Defects found and fixed in this pass

1. **The 3D start cost Lighthouse 20 points.** Starting the 3D on the poster's LCP entry put the scene build, a 1.1 s throttled long task, inside the measured window: Performance 71–73, TBT 860ms. The start now waits for `load` + 2.5 s + idle, as Yorkshire's designer does: 93–94 locally and 99–100 live. The 3D still starts without any interaction.
2. **Help was hidden on phones.** Sutton's wide logo pushed Help into the menu below 400px. Coastal's logo block is narrow, so Help stays in the header down to 341px.
3. **The logo was distorted at 400px and below.** An inherited fixed width met a fixed height. Both now scale from the height.
4. **The PDF dated the offer itself.** It now names whatever offer line Lugarde's engine returns, so it can't go out of date.
5. **Missing minus sign.** The first v2's Lato subset had no "−" for discount lines. The fonts now come from Lato 2.015, page and PDF.
6. **Coastal does have a privacy policy.** The earlier research missed /home/privacy-policy-cookies/, linked from every page's footer. The forms now link it.

### Not done, or for later

- **No valid enquiry has been sent on the live site, by rule.** The function's Blobs write (`getStore` in production) has therefore not been run live. The store is reachable (CLI listing), and v1 wrote to it the same way. The first real enquiry will be the first live write. A single test enquiry from John, named "QA", would prove it; records with QA names or example.com emails are flagged `test`.
- **Leads go nowhere yet** beyond the Blobs store (C2).
- **Not changed from Sutton's designer:** the garden scene, the starting finishes and the posters (CONFIRMATIONS S6).

Points for Coastal are in [docs/CONFIRMATIONS.md](../CONFIRMATIONS.md).
