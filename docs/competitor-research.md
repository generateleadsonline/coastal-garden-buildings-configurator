# Coastal configurator competitor research

Research date: 11 October 2026. Read-only review of live public HTML/JavaScript, connected GitHub README/source, and clearly identified cached PDF reference extracts/images. No prospect records were read and no remote data was changed.

## Evidence and limitations

- Noah live configurator: https://start.noahgardenrooms.co.uk/configurator/. Fetched its full HTML and 717 KB inline application source into `work/competitor-sources/noah.html` and `noah-module.js`.
- SMART live configurator: https://smart-modular-buildings-homepage.netlify.app/configurator/. Fetched HTML and the served `configurator.44eaf85753.js` application source.
- Reviewed current connected GitHub README/source for `generateleadsonline/haus-garden-configurator`, `penthaus-configurator`, `forefront-garden-configurator`, `warwick-garden-configurator`, and `outdoor-modular-spaces-configurator`.
- Fetched public deployed app HTML and JS for https://haus-garden-configurator.netlify.app/, https://penthaus-garden-room-configurator.netlify.app/, and https://outdoor-modular-spaces-configurator.netlify.app/.
- Cached PDF examples are in the sibling task `/Users/johnparnell/Documents/Codex/2026-10-11/create-the-best-possible-garden-room-7/work/`: `noah-quote-text.txt`, `smart-quote-text.txt`, `noah-pdf-1.png`, `noah-pdf-5.png`, `noah-pdf-6.png`, `smart-pdf-1.png`, `smart-pdf-3.png`. Noah example was prepared 3 October 2026; SMART example 9 October 2026. Visual review covered SMART cover/plan and Noah dimensioned floor-plan page. These are supplementary references, **not established as the user's exact attached PDF**. No PDF file was present in this task's starting directory or the 11 October sibling directories.
- Public GitHub account enumeration showed only four public repositories; connected installation search exposes the wider private collection. Do not infer an unavailable repository from public search results.
- Competitor page source supports implementation/journey facts. This subtask did not interact with the competitor UI in a browser, submit any forms, or independently verify delivery of email/CRM notifications.

## SMART: strongest conversion benchmark

Five steps: Your room → Size → Style → Glazing → Get your quote. The opening asks how the room will be used: office, gym/wellbeing, creative studio, or retreat. Six ranges receive practical descriptions and real photographs, which make technical materials legible.

Persistent preview shows current range/size/use; modes are 3D, floor plan and real room, with outside/front/inside cameras, zoom, night/day, preview expansion and a mobile collapse control. Real photography is explicitly labelled as a range example. Parametric openings/finish/furniture respond to state. Non-WebGL fallback preserves real photos, plan, choices and quote enquiry.

Size presets are use-specific and explain the furniture/movement space. Width and depth currently use select controls, a direct opportunity for the requested slider improvement. State normalization snaps to real catalogue dimensions; unavailable range-size combinations become specialist quotes or explain the closest fit rather than fabricate a price.

Autosave, portable design links, undo/redo, mirror-layout and return-to-design links reduce loss aversion. The share link excludes contact details and unlock state.

The lead gate requires **name, email and UK project postcode**. Phone, timing, budget and notes are optional. Separate marketing opt-in is unchecked. The page explains what the enquiry unlocks: building price and six-page illustrated guide, with no payment/no obligation reassurance. POST must return successful HTTP before price/PDF reveal; failure retains the design and offers retry/call. Analytics distinguish submit attempts, errors and successful enquiries.

After acceptance, the page promotes a free 15-minute Discovery Call, then price/PDF/refine actions. All stages also expose a skip-to-quote CTA, respecting people who are ready early. Inclusions and separately quoted base/mains/site/upgrades/delivery are visible before the gate.

Current shortcomings to surpass: required-step route can still feel long; dropdown sizes are less exploratory; optional enrichment fields are all visible; design-state signature relocks after edits and can cause repeat submissions; only indicative opening schedule/plan. Prices are bundled in public JS, so gating is a customer journey rather than server authorization.

## Noah: strongest design fidelity / technical PDF benchmark

Six standard steps: Range → Shape and size → Structure and cladding → Doors and windows → Finishing touches → Your price. Granny annexes dynamically add Rooms, Kitchen and Shower room for nine steps. Step navigation is editable and a Price it shortcut appears from step two.

Sophisticated state/geometry modules serve preview, drawing, price, email and PDF consistently. Rectangular/L-shape/roof designs, per-wall cladding, dimension inputs/steppers, drag handles, door/window placement, internal room planning, electrical fittings, roof-off previews, local save and editable links are supported. Native feet/metres choice is remembered; ranges constrain the sizes and roofs available.

The price gate requires first name, last name, email, phone and postcode, then email confirmation. This is more friction than SMART's three required fields. Broad technical controls, per-wall editing and repeated price deltas increase cognitive demand for first-time buyers. They can be progressive advanced controls in Coastal's redesign.

The gate accurately describes included items, unpriced additions, delivery scope and survey assumptions before submission. Source indicates server-side lead submission with saved reference; PDF rendering uses fixed views from the current model and reduces images for oversized requests. A fallback pending route exists on API failure, so acceptance and price-display semantics need deliberate treatment in the new build.

The cached nine-page proposal contains: personalized design cover/price/QR; benefits and index; exterior corner views; roof-off interior; four elevations; dimensioned floor plan and tagged opening schedule; selected specification/inclusions; itemised price; next steps/contact. Floor plan records outside/internal dimensions, door swings, opening offsets, external size, drawing scale, measurement units and indicative status. This is clearer technically than SMART's simpler plan, but nine pages are substantial for an early enquiry.

## Existing generateleadsonline implementations worth adopting

| Implementation | Transferable strengths | Caveat |
| --- | --- | --- |
| HAUS | Five steps, live 3D, plan/real imagery, autosave/undo, private server-persisted receipt and HttpOnly session, server quote recalculation after edits, seven-page PDF with immutable configuration/quote | Published package rates are estimates specific to HAUS; no transferable product rates/spec promises |
| Pent Haus | Catalogue-index sliders; real discrete sizes; structure-dependent actual depths; 27 front/nine side layout constraints; server-only tariffs; bearer-authorized quote/PDF; Netlify form plus private immutable quote | Kit pricing and roof/opening taxonomy are manufacturer-specific |
| OMS | Four steps, private persistence before price return, idempotent edits, Forms inbox mirror, source-only configuration links, lazy PDF loading, strong UI fallback | Public area-based starting rates are not applicable to Lugarde |
| Forefront | Six guided steps instead of eleven technical categories; exact upstream catalogue use; one normalized spec for 3D/plan/summary/PDF; no invented extras; preserved form error recovery | Client receipt relocks every changed design; repeat lead capture should be improved |
| Warwick | Five steps, actual 21-size catalogue, two saved-design comparison, selected panel constraints, price/PDF gate, six-page illustrated PDF | Browser-based pricing snapshot is available before gate in bundle; installation/delivery uncertainties are honestly flagged |

Useful local reference source: `/Users/johnparnell/Documents/Codex/2026-10-11/create-the-best-possible-garden-room-4/work/reference/haus/server/quote-service.mjs` and `pdf-service.mjs`. Quote source validates enums, dimensions and contact fields; persists lead before response; hashes random session tokens; supports authenticated design revisions without new lead form; protects PDF access by lead/design reference; fails closed if storage fails. These are architectural references, not code or tariffs to copy blindly.

## Recommended Coastal UX and CRO

1. **One branded design workspace, five editable steps**: Your space; Size & roof; Exterior & openings; Comfort & extras; My design & price. Start with a compelling real Coastal/Lugarde photograph and useful default, not an empty engineering canvas. Explain that design is free and a short enquiry unlocks the price/guide from the beginning, avoiding surprise gating.
2. **Native width/depth range sliders**, mapped to the manufacturer's actual allowed dimension array, rather than implying continuous buildable sizes. Large live values, minimum/maximum labels, +/- controls and editable numeric alternative; popular presets; external footprint and meaningful use-specific fit sentence. Keyboard range controls must work and announce formatted dimensions. Adapt bounds per model/roof/wall system and explain automatic adjustments with Undo.
3. **Large live preview with familiar controls**: 3D, front, inside/cutaway and floor plan; clear reset/zoom; daytime/dusk; preview expansion; optional illustrative furniture; real-project inspiration. One shared geometry/spec source must power model, plan and PDF. Every render change should correspond to the selected product, not cosmetic approximation masquerading as configuration.
4. **Progressive technical depth**: default roof/wall system/glazing recommendations, then expandable advanced openings/material controls. User-facing cards explain benefits (light, privacy, maintenance, work-through-winter) beside factual specifications. Avoid copying SMART's insulation/electrics/warranty claims to Lugarde unless manufacturer/dealer evidence supports them.
5. **Persistent commitment and value**: unobtrusive autosave/undo/share; summary of choices; editable completed steps; sticky mobile Continue/Get my price action; no email gate for simple design saving/sharing. Offer quote jump from every step.
6. **Value-led three-field enquiry**: name, email, project postcode required; phone optional; timeline/budget/project notes in an optional expandable group. Tell customers exactly what appears immediately after acceptance: current-design price or transparently identified quote-needed result, illustrated guide, saved-design link. Keep marketing optional and separate from enquiry permission. Show verified trust evidence and actual dealer contact; no invented ratings or urgency.
7. **Persist first, unlock second**: successful backend validation/storage is required before price/PDF access. Keep all monetary values server-side, including option deltas and £0 badges. Retry failures without losing design/input; idempotency prevents duplicates. Rejected/honeypot/malformed submissions must not unlock. Use private session/receipt to update estimates on design changes without requiring repeat lead details; freeze each PDF to exact quote revision.
8. **Do not create a false quote**: preserve real manufacturer model/size/roof/wall-system limitations and upstream tariffs. Unverified prices/extras remain quoted separately; no made-up £/m² heuristic. Show VAT, kit/building/installed scope and delivery uncertainty explicitly. A transparent quote-required outcome is better than a fabricated fixed price.
9. **Convert the accepted lead to a useful next step**: price/PDF immediately visible, download never asks for another form, then real dealer contact/design consultation action. Explain how Coastal confirms site access/base/delivery/final specification. Do not claim emailed confirmation, a booking or CRM handoff unless actually configured.
10. **Measure qualified leads, not raw gate completions**: privacy-safe events for start, step, choice, preview, save/share, gate view, validation error, accepted lead, PDF download and contact CTA. Keep contact details out of events/share URLs. A dramatic uplift is the design aim; validate through a controlled comparison with equivalent traffic and sales qualification.

## PDF design that improves on both references

Recommend seven polished A4 pages, using Coastal branding and actual configured renders:

1. **Your garden room**: personal/reference/date; large clean configured hero; exact external width/depth/footprint/model; prominent gross price with VAT/scope or honest quote-required state; concrete next action; resume-design QR and clickable link.
2. **See it from every angle**: front and rear/corner renders plus roof-off interior; selected finishes/frame/roof labels; furniture/landscape illustration note.
3. **A layout that works**: large vector dimensioned plan; consistent numbered doors/windows; opening schedule from the same geometry; external dimensions and verified internal dimensions only; show door swings only when handing is selected/confirmed; label indicative/not for construction rather than falsely claim scale.
4. **Your selected specification**: readable group table for product/construction/roof/finish/openings/floor/insulation/extras; actual selected inclusions, not a generic brochure; requested unpublished options distinguished.
5. **Your investment explained**: itemised real tariff components, subtotal/VAT/gross reconciliation; included and separately quoted work in two clearly contrasting columns; estimate date/version and terms/validity only if source supports them.
6. **Ready for your garden**: short use-specific space/site checklist; base/access/delivery/power/planning questions for discussion; customer notes/timing; no unsupported planning guarantee or construction promise.
7. **Let's make room for your life**: verified dealer value proposition/contact/showroom; clear route from design review to site checks, written quotation and installation; phone/web links; clickable resume link and QR. Keep decorative content subordinate to useful information and next action.

PDF QA must inspect every page after generation, not just text extraction: zero clipping, readable tables, correct render/plan/spec consistency, all choices represented, VAT/price reconciliation, valid clickable links and decoded QR. Test both default and widest/longest/spec-heavy configurations. Never invent quote terms, deposits, delivery inclusions, structural warranties or manufacturer dimensions.

## Live QA acceptance targets

- Desktop and small mobile layout, no horizontal overflow; live preview, sliders and sticky controls remain usable.
- Mouse, touch and keyboard range operation; value labels and visible focus; reduced motion; form labels/error focus/announcements.
- Every primary CTA leads to the intended step; saved/restored/shared configuration matches, with no contact information, unlocked price or access token in share link.
- Monetary values and PDF inaccessible before accepted enquiry; malformed/failed/storage-error submission stays locked.
- Successful submission persists exact selection and source; quote edits revise a session without duplicate enquiries; refresh restores authorized access appropriately.
- Actual pricing scope/VAT and unknown items match screen and PDF; PDF works and images survive non-WebGL fallback.
- Unsupported catalogue combinations prevent invalid configuration or transparently request a quote.
- No success copy claims email/CRM/appointment delivery absent working integration.
- Analytics reflect acceptance only after backend confirmation; no name/email/phone/postcode in event payloads.
