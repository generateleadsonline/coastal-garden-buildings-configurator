# Coastal Garden Buildings — current configurator research

Research performed 11 October 2026 against the supplied dealer link and Coastal's official website. All prices below are observed source prices, not Coastal installation quotes. The new configurator should use this distinction explicitly.

## Verified identity and branding

- Trading brand: Coastal Garden Buildings. Official logo: white brush-script “Coastal”, spaced uppercase “GARDEN BUILDINGS”, “EST.1979”, on a slate background. Original downloaded as `work/research-assets/coastal-logo.jpg` (628×428); copy made to `work/coastal-app/public/assets/logo.jpg`.
- Official CSS explicitly uses slate `#96abb0` for footer/background and `#5a5c66` for selected headings. White accompanies the logo. Fonts loaded include Raleway, Open Sans and Montserrat.
- Phone **01425 274000**, email **info@coastalgardenbuildings.co.uk**.
- Show site: **Stewarts Christchurch Garden Centre, Lyndhurst Road, Christchurch, Dorset BH23 4SA**.
- Family business established in **1979**. Current leaders Martin and Rachael Penny; some fitters have worked there for more than 20 years.
- Official brochures page says **over 90 buildings on show** and display site open daily. A strong, truthful trust signal.
- Official About page says installation area within 20 miles; Installation page says primarily 25 miles and some products available nationally. Avoid hard promises about postcode coverage until dealer review.
- Installation charges depend on building. Groundwork, surveys, removal and finishing services exist. Do not claim installation included in a manufacturer kit price.

Sources: [Home](https://coastalgardenbuildings.co.uk/), [Contact](https://coastalgardenbuildings.co.uk/contact/), [About](https://coastalgardenbuildings.co.uk/about-us-coastal-garden-buildings-christchurch-dorset/), [Brochures](https://coastalgardenbuildings.co.uk/brochures/), [Installation](https://coastalgardenbuildings.co.uk/services/installation/), [official CSS](https://coastalgardenbuildings.co.uk/?custom-css=560ee964ae), [original logo](https://coastalgardenbuildings.co.uk/wp-content/uploads/2020/03/coastal_block_blue-01.jpg).

## Current Lugarde experience

Live source: [dealer configurator](https://lugarde-configurator.com/?dealerToken=40babb820bb07ab118b01a927d23be6f).

- Visibly manufacturer-branded Lugarde, rather than Coastal. The template page displays a Netherlands help number and Lugarde's Netherlands address. The dealer token is carried internally but Coastal's identity is not prominent.
- Top navigation: Template, numbers 1–6, Quote. Steps: walls/posts, roof, doors, windows, treatments, other options. Numeric navigation communicates little progress or consumer meaning.
- Template library exposes 79 Summerhouse/Log cabin options, eight Garage options, nine Gazebo/Carport options. System filters include Log cabin, Prima, Pro, Premium and wood variants. Roof filters include flat, apex, pyramid, cone, pent and asymmetrical.
- Dimensions are adjusted by dragging the walls of the canvas floor plan. There is no accessible consumer-friendly width/depth slider. Concrete 2D/3D viewer exists, with per-wall contextual controls to add canopy/extension.
- Current walls menu uses thickness values and technical profile labels. Doors/windows must be selected then placed using floor-plan position controls. Treatments are split across wall/post/balustrade/roof/floor components.
- Price is exposed immediately in the header and cart. It is not lead-gated.
- Saving invites an email to receive a link and continue later. The quote page also has a Save route that may ask visitors to log in.
- Current quote page demands first name, last name, email, telephone, street, house number, postcode, city, country, use purpose and remarks. It adds terms and disclaimer checkboxes. The address rationale says it locates the nearest dealer, even though visitor entered via Coastal's token.
- Source FAQs acknowledge that changing the design rebuilds 3D and may make the app slow. They advise temporarily switching 3D off. A new implementation can improve perceived speed through immediate lightweight visuals and durable saved state.

## Genuine product rules

The current HTML embeds detailed manufacturer FAQs and filter guidance; extracted to `work/lugarde-faq.json` and `work/lugarde-filterInfo.json` for further reference.

| System | Sizing increments | Verified limits | Construction/roof options |
|---|---:|---|---|
| Log cabin | 100 mm | Length up to 20 m in configurator; maximum span per side 5 m flat/pent/asymmetric, 6.5 m gable | 44/68/90 mm walls; flat, gable, pent, asymmetric. The live wall selector also displays 28 mm but it is disabled in the observed cabin template. |
| Prima | 600 mm | Wall lengths 1.2,1.8,2.4,3.0,3.6,4.2,4.8,5.4 m; 28 mm max 3.6 m, 44 mm max 5.4 m; roof span 4.2 m per side | Patented corner-post system with aluminium inner core; flat/pyramid; square, five/eight-sided shapes. |
| Pro | 100 mm | Length up to 13.5 m; flat roof span 4.36 m, gable 6 m | 14×14 cm posts; 28/44 mm walls; flat or gable with 25°/40°. |
| Premium | Not separately verified | Do not invent structural guarantees or free-form limits | Post-and-beam construction with mortise/tenon and dovetail joints, spruce/Douglas/larch, vertical/horizontal cladding. |

- Width/depth are measured outside wall to outside wall, **excluding roof overhang**. Roof footprint needs a separate clear indication.
- Flat roof includes boarding/purlins and an EPDM package, outlet, adhesive/sealant and aluminium trims. Apex includes shingles with colour choice. Flat roofs have a drainage slope.
- Single doors generally open outward, standard single-door hinges are left but can swap. Double-door right leaf opens first. Sliding/folding/garage doors available.
- Timber doors and windows use 56 mm construction and standard HR++ double glazing; doors have a 3-point SKG lock except sliding products. Safety/frosted glazing options exist. Do not generalise these details to every opening type.
- Standard foundation beams are included; a level base is still required.
- Optional internal floor, roof/floor/wall insulation, additional ceiling, lighting, vent, skylight and treatment exist.
- Manufacturer warranty: five years for manufacturing/construction defects, with exclusions. Avoid fabricated ten-year/25-year performance promises.
- Assembly is **excluded** from source configurator prices. Delivery treatment depends on destination.
- Any planning statement should be qualified and link to local advice. Observed 4×3 m apex configuration had 2,718 mm ridge height, 2,103 mm wall height and 300 mm overhang, so it cannot be described universally as under 2.5 m.

## Verified price anchors

Read through the live cart after the price calculation completed. All source totals include VAT. Empty shells below include structure and source roof package but **no door, window, internal floor, insulation, treatment, fitting, base or electrical works**.

| Design | Source structure line before temporary discount | Transport surcharge | Current live total after temporary 10% promotion |
|---|---:|---:|---:|
| 3×3 m log cabin, 44 mm, flat | £3,730.00 | £130.00 | £3,487.00 |
| 4×3 m log cabin, 44 mm, flat | £4,495.00 | £130.00 | £4,175.50 |
| 5×3 m log cabin, 44 mm, flat | £5,440.00 | £130.00 | £5,026.00 |
| 4×3 m log cabin, 44 mm, apex 21°, black shingles | £4,495.00 | £130.00 | £4,175.50 |

Current source campaign is valid **1 September–31 October 2026** and discounts product price, not installation/delivery. The cart labels its total inclusive of VAT and mainland UK delivery; the £130 surcharge is a specific added line. Do not claim a permanent discount or universally free delivery.

Observed optional lines for the 4×3 m 44 mm apex configuration:

| Optional component | Source line |
|---|---:|
| Internal floor, 12 m² | £708.00 (£59/m²) |
| Floor insulation | £276.00 (£23/m² of footprint) |
| Roof insulation | £835.11 |
| Double-wall insulation, 34.42 m² wall area | £2,202.60 (approximately £64/m²) |

That sample's product subtotal was £8,516.71; source total with £130 surcharge and temporary 10% product discount was £7,795.05. It still contained no openings/treatment/installation/electrics/base. These anchors can support a clearly labelled guide range, not an exact dealer quotation.

## Public API and integration implications

- Downloaded source is an AngularJS app, about 5.7 MB uncompressed JavaScript: [app source](https://lugarde-configurator.com/js/app.9781bd4.js).
- Public GET endpoints work: [`/api/v1/products/`](https://lugarde-configurator.com/api/v1/products/) and [`/api/v1/templates/`](https://lugarde-configurator.com/api/v1/templates/). Cached locally as `work/lugarde-products.json` and `work/lugarde-templates.json`.
- Product list includes identifiers, titles, price, unit, sizes, imagery and video. Many structural components have a zero list price because their cost is calculated from geometry, not because they are free.
- Price calculation POST endpoint is `/api/v1/cart/`, with query parameters for dealerToken and optional countryId. JSON:API payload contains `contents`, `structure`, `system`; contents comprise identifier/amount/treatment. The response reports product line prices and total in minor units, converted by client to currency units.
- Exact pricing depends on a genuine manufacturer's structural model, opening geometry, treatment state and quantities. A new app should not imply it is plugged into this exact calculation unless it actually builds and verifies that model and has vendor permission for ongoing reliance. The public read interface has no published SLA or integration contract.
- Confirm-order endpoint is a distinct mutation, protected by Turnstile for anonymous submissions. It should not be used merely to calculate an estimate.
- Public product examples (list prices, observed UK source): PE45 double door £1,133; SD200 sliding door £1,645; SD300 £2,760; DL01H folding £1,599; VL01H £1,852; VL02H £2,053. These are separate from opening-width layout constraints and should not be added blindly to a room area formula.

## Useful authentic assets

Downloaded official home images:

- `work/research-assets/coastal-building-1.jpg`: grey painted log cabin with side canopy, lush garden setting. [Original](https://coastalgardenbuildings.co.uk/wp-content/uploads/2025/02/PHOTO-2024-08-02-12-03-03.jpg).
- `work/research-assets/coastal-building-2.jpg`: contemporary cedar/glazed room in warm evening light. Appears alongside the site's Hut section; use as brand inspiration/project photography, not a claim that it is a Lugarde configuration. [Original](https://coastalgardenbuildings.co.uk/wp-content/uploads/2025/02/IMG_4853.jpg).
- `work/research-assets/coastal-building-3.jpg`: glazed house-attached canopy, unsuitable as the main garden-room hero. [Original](https://coastalgardenbuildings.co.uk/wp-content/uploads/2025/02/IMG_3897.jpg).

## CRO/UX recommendations informed by the actual source

1. Lead with the visitor's intended use and achievable room styles; translate system names into clear benefits while retaining accurate product specifications.
2. Keep a compelling live visual beside the controls. Use width/depth sliders with increments set by system; show room area, usable-space cue and roof footprint. Let keyboard users change values and give mobile controls adequate target size.
3. Display meaningful named steps, reversible selections and a persistent next action. Keep any cross-step constraints visible when a roof/system change adjusts dimensions.
4. Pair the required price/PDF gate with clear value: unlock a personalised guide range, full specification, plan and downloadable design pack. Do not reveal the price in HTML/assets/PDF endpoints before successful server submission.
5. Ask only for details necessary for the lead. Name, email and postcode can support quoting; phone can be optional or explain its use. Let visitors choose contact preference. Use an optional separate marketing consent and avoid forcing an account creation.
6. Show Coastal's real phone and show-site invitation, authentic founding year and project photography, then a plain statement that the team will check access, base, fitting and final specification. No invented reviews, guarantees or response-time promises.
7. Save the current configuration automatically and let a share URL reproduce it. Build the PDF around the visitor's actual selections, dimensioned floor plan, annotated external preview, inclusions/exclusions, price basis and next steps.
8. Measure starts, each step, slider/design changes, gate opens, validation errors, successful lead storage, quote unlock and PDF download, including device type. A dramatic conversion improvement needs live analytics/experiment evidence; never promise a verified uplift before testing.

Additional official context: [current Coastal design page](https://coastalgardenbuildings.co.uk/services/design-your-own-bespoke-garden-building-with-3d-configurator/), [Coastal home office page](https://coastalgardenbuildings.co.uk/home-office-uk-home-office-ideas-uk-home-office/). The latter describes the fully insulated bespoke Hut specification and says installed Lugarde rooms can include guttering/downpipes, laminate floor and a painted finish. Those installed dealer services are distinct from the manufacturer kit calculator.
