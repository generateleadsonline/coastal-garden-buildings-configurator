# Coastal Garden Buildings design studio

A Coastal-branded, responsive garden-building configurator based on the dealer's Lugarde journey and researched against Noah, SMART and established GLO configurators.

## Experience

- Four guided steps with interactive timber building, roof/finish/door/window options, sheltered side canopy and furnished 3D, front and floor-plan views.
- Accessible width/depth sliders using concept size increments. Prima changes in 60cm steps; Log and Pro in 10cm steps. Exact structural dimensions remain subject to dealer review.
- Automatic browser-local design saving and share links containing design choices only.
- Name, email and UK postcode unlock the price and PDF. Phone and project details are optional; marketing defaults off.
- Personalised design proposal with two high-resolution architectural 3D views, concept plan, full specification, indicative budget, exclusions, site checklist, clickable contact actions and design QR. Seven pages with 3D available; a six-page concept-plan fallback on devices without WebGL.
- Accepted sessions support edited designs and fresh proposals without repeat lead capture.

## Development and deployment

Node 22. `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm test`.

Netlify builds `dist`, bundles functions in `netlify/functions`, and provisions its native Blobs environment. No client credentials or paid API configuration are needed. The dev server shows the design interface; the quote/PDF endpoints run on Netlify.

## Enquiry handling

Production records are stored privately in Netlify Blobs store `coastal-enquiries`, under `leads/<request UUID>`. The hosting account can inspect these in Netlify's Blobs interface. Preview records are isolated by deploy ID. Customer details never enter GitHub, share URLs, frontend storage, analytics events or function logs.

Quotes and PDFs require an HttpOnly Secure SameSite enquiry cookie and a corresponding durable accepted enquiry record. Storage failures do not unlock anything. Duplicate submissions are idempotent. No fake local success is used. Lead routing to Coastal email/CRM is not configured: the current deployment records enquiries in the GLO Netlify account, with contact CTAs for the visitor. Connect an approved CRM/webhook before using this as Coastal's primary enquiry channel.

## Price basis

This is a transparent indicative supply-budget model, not the original manufacturer's live cart or a binding installation quote. Verified 11 October 2026, unpromoted 44mm shell references: 3x3m GBP3730, 4x3m GBP4495, 5x3m GBP5440. Internal floor GBP59/m2; example door prices GBP1133/1645/1599. Other dimensions are interpolated/scaled with ranges. Side glazing, paint/treatment and canopy are provisional allowances. Other systems also use the concept model pending a dealer price schedule.

Delivery, assembly, foundations, electrics, heating, final compatibility and final insulation specification require a Coastal quotation. The observed 10% Lugarde promotion is deliberately not assumed in ongoing budgets. The full basis appears in the unlocked breakdown and PDF.

## Measurement

The interface dispatches `coastal:analytics` and `dataLayer` events: `configurator_started`, `configurator_step_view`, `design_option_changed`, `design_saved`, `design_shared`, `enquiry_accepted`, and `proposal_downloaded`. No third-party analytics tracker is enabled without an account/consent configuration. Measure conversion uplift with a controlled test against the existing funnel; the design itself cannot establish an uplift percentage.

## Sources

- https://www.coastalgardenbuildings.co.uk/
- https://www.coastalgardenbuildings.co.uk/lugarde
- https://lugarde-configurator.com/
- https://start.noahgardenrooms.co.uk/configurator/
- https://smart-modular-buildings-homepage.netlify.app/configurator/
- GLO HAUS, Pent Haus, Outdoor Modular Spaces, Forefront and Warwick configurators.

Full research notes are in `docs/`. The user's competitor PDF attachment was not present in the calling chat; cached Noah/SMART reference PDFs were reviewed with their provenance recorded.
