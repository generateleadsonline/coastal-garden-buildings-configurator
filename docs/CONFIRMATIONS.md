# Coastal Garden Buildings designer: points to confirm

v2 built 15 October 2026 on the Sutton Garden Buildings v2 designer (same Lugarde catalogue, rules, price-engine port and 3D). Wherever sources disagreed, the designer follows Lugarde's own configurator for Coastal's dealer account: its rules, its product list and its price engine. It does not guess, and it shows no price Coastal or Lugarde did not publish. Each point says what the designer does today and what Coastal (or Lugarde) needs to confirm.

Sources:
- **Lugarde:** its configurator at `lugarde-configurator.com/?dealerToken=40babb820bb07ab118b01a927d23be6f` (the "View configurator" button on Coastal's "Design your own" page), its product list (`research/lugarde-2026-10-15/products.json`), its business rules and its price engine.
- **Coastal:** coastalgardenbuildings.co.uk, every sitemap page read on 13 Oct 2026 ([research/coastal-site-2026-10-13.md](../research/coastal-site-2026-10-13.md); raw pages in `research/raw/`, git-ignored).
- **Lugarde brochure** linked from Coastal's brochures page (2023 upload).

## Before any traffic

| # | Point | What the designer does | To confirm |
|---|---|---|---|
| C1 | **Showing Lugarde's price.** Coastal publishes no prices; its site says its Lugarde configurator "itemises" the cost. Lugarde's engine prices each design for Coastal's dealer account, with VAT and delivery to mainland UK, the £130 transport surcharge and Lugarde's current offer (a 10% late summer offer on 15 Oct 2026). Coastal's dealer prices equal Sutton's: 389 products, 0 differences. | The full price shows, itemised, once the visitor sends the quote form. Options show Lugarde's list prices. All 42 option prices are proven against the engine for Coastal's token (`tools/qa/check-prices.mjs`). | Is Coastal happy to show Lugarde's dealer price? Does Coastal sell at that price, or add to it? |
| C2 | **Where leads go.** Netlify Forms detection is off on this site, so the five forms (quote, callback, show-site visit, brochure, `book-call`) post to the enquiry function, which saves each one to the private Netlify Blobs store `coastal-enquiries` (the store v1 used). | No email or CRM routing. Enquiries can be read in Netlify's Blobs view for the site. | Who receives the leads, and how (email to info@coastalgardenbuildings.co.uk, a CRM)? Until this is set up, nobody is notified of an enquiry. |
| C3 | **The brochure.** "Download brochure" opens Coastal's own Lugarde brochure (Lugarde-garden-buildings-christchurch-dorset.pdf, uploaded Sep 2023) after a short form. | Links Coastal's PDF; nothing compiled. | Is that brochure still current? Coastal's contact page also offers price lists by email: should those be offered? |
| C4 | **Show site and hours.** Coastal publishes only winter hours (Mon–Sat 9am–4.30pm, Sun 10.30am–4pm) and says the show site is open every day with no appointment needed. The show site is called both "Stewarts Garden Centre" and "Stewarts Christchurch Garden Centre". | Shows the winter hours, labelled as such, and the full address. Visit requests go through a form. | Summer hours. The preferred show-site name. |
| C5 | **Booking a call.** Coastal has no booking tool; its pages say to call to book an appointment. | Book a call ("Pick a day and time to talk it through") takes first and last name, UK phone, email, postcode and a day (any of the next ten, as the show site is open daily) and morning, lunchtime or afternoon. Coastal confirms. | The hours Coastal takes calls. Should weekends be offered? Should a real calendar replace the form? |
| C6 | **Privacy.** Coastal's privacy and cookies policy is at /home/privacy-policy-cookies/ (footer of every page). | Each form says Coastal uses the details only to respond about the building and links that policy. | Whether the policy covers enquiries from this designer, and whether the optional marketing tick box wording is right. |
| C7 | **The offer ends.** Lugarde's late summer offer (10%) runs to 31 October 2026, per Lugarde's configurator data. | Prices come from the engine live, so the discount line disappears when Lugarde ends it; the PDF names the offer only while the engine applies it. | None needed; noted so nobody is surprised when prices rise on 1 November. |

## Product range and rules (designer follows Lugarde's configurator)

| # | Point | Designer | To confirm |
|---|---|---|---|
| P1 | **Systems.** Coastal's site names Lugarde log cabins (B codes) and Prima summerhouses (P/PR codes, "44mm prima system"), never "Pro" or "Premium". Coastal's dealer link offers Log Cabin, Prima, Pro and Premium templates. | Log Cabin, Prima and Pro, as on Sutton's designer (Premium not modelled). | Does Coastal sell Pro? Should Premium be added (quoted)? |
| P2 | **Log thickness.** Coastal's "Standard features" graphic says 28, 44 or 68mm; one page says 28 or 44mm. Lugarde's configurator offers 44, 68 and 90mm log cabins and 28 or 44mm Prima. Coastal says "pine"; Lugarde says spruce. | Lugarde's thicknesses; no timber species claim beyond Lugarde's. | Is 28mm log cabin still available? |
| P3 | **Pro sizes 6.0–6.8m.** Lugarde's post grid leaves a 3.6m section and its engine refuses the design ("Invalid wall-type"). Lugarde's own configurator has the same gap. | Skips those sizes and says why. | Can Lugarde make them? Quote by hand? |
| P4 | **Pro apex span.** Lugarde's largest Pro gable end is 6m; the engine refuses spans over 5.8m. | Up to 5.8m span, 8.5m long. | Wider Pro apex to be quoted? |
| P5 | **Canopies.** Lugarde prices side canopies on flat and apex roofs (gable ends on an apex; Pro up to 3.6m deep). Front canopies and pent or pyramid canopies are not priced by its engine. | Same rules. | Front canopies or verandas to be quoted by Coastal? |
| P6 | **Shapes.** Coastal's site shows octagonal, corner, L-shaped and combination Lugarde buildings. | Rectangular buildings only (with canopies). | Should other shapes route to "talk to Coastal"? |
| P7 | **Door heights.** Lugarde makes 1.80m and 1.935m (H) doors. | H doors only. | Offer the 1.80m doors? |
| P8 | **Floor and paint "included".** A Coastal article says "All installations come with guttering and downpipes, laminate flooring and a choice of painted finish"; Lugarde's brochure says the floor and colour treatment are extra. | Follows Lugarde: the internal floor, gutters and treatments are priced options; Coastal's lined interior with laminate flooring is a "Quoted by Coastal" extra. | Does Coastal include any of these in its installed price? |

## Content and claims

| # | Point | Designer | To confirm |
|---|---|---|---|
| S1 | **Selling points.** Each is quoted or closely paraphrased from Coastal's pages, with the page in `src/configurator-data.js`: family run since 1979, over 90 buildings on show, open every day, free site survey within 25 miles, low roofs to stay under 2.5m, own fitters (some over 20 years), groundworks by Coastal's team, painting service, old building removed, trusted electrician, after-sales support, no hard sales. Lugarde's five-year warranty is from the Lugarde brochure Coastal links. | Shown next to the step each supports and in the PDF. | Still current? |
| S2 | **Install radius.** About page: 20 miles; installation, site survey and Hut pages: 25 miles. | Says "within about 25 miles of Christchurch". | Which radius? |
| S3 | **Review.** "Just a quick note to say how pleased we are with our new Lugarde summerhouse. It was erected quickly and efficiently by Rob and the team." (Customer in Lymington, 2022, Recent Installs page; trimmed.) | Shown on the price step. | OK to reuse? |
| S4 | **Coastal's own services in 3D.** Base and paving (groundworks), electrics with a heater (Coastal's electrician), and a lined interior with laminate flooring (as in The Hut). Each is drawn in the 3D and marked "Quoted by Coastal". | Never priced. | Does Coastal offer these with a Lugarde building? |
| S5 | **Colours.** Lugarde gives RAL codes for its opaque stains; the transparent finishes are approximated over spruce. | "Colours on screen are a guide: Coastal's show site has the real finishes." | None. |
| S6 | **Starting designs and scene.** The starting finishes (graphite log cabin, pebble-grey Prima, black-oil Pro), the posters and the garden scene are Sutton's, unchanged; they are Lugarde options, not Coastal photographs. | Each system starts this way. | Any preferred starting design, for example the pale-grey glass-fronted cabin in Coastal's 2025 install photo? |
| S7 | **Company name.** T&Cs: "Broomhill Garden Buildings Ltd trading as Coastal Garden Buildings". | Used in the PDF footer. | None. |
| S8 | **Phone typo on Coastal's site.** The Finishing Touches page says "01425 27400" (a digit short). | Uses 01425 274000 everywhere. | Fix on Coastal's site. |
| S9 | **Dealer link attribution on Coastal's site.** The in-text "3D configurator" link on Coastal's Design your own page goes to Lugarde without the dealer token. | n/a | Fix on Coastal's site, or point both links at this designer. |

## Technical (for John)

| # | Point |
|---|---|
| T1 | v1's `quote` and `proposal` functions are gone; `/api/enquiry` replaces them and writes to the same `coastal-enquiries` store (new keys `leads/<date>/<ref>`). v1's environment variables, if any, are unused. |
| T2 | `/` now redirects to `/configurator/`, where the designer lives. |
| T3 | The site has `processing_settings.ignore_html_forms: true`. The designer does not rely on Netlify Forms; turning detection on is not needed. |
| T4 | Branch `v2-wip-2026-10-13` holds the unfinished 13 Oct attempt (it does not build); tag `v1-concept` is the 11 Oct v1 (bd7c595). |
