// Coastal Garden Buildings: the Lugarde catalogue this configurator offers. Pure data: no DOM, no
// Three.js. Shared by the page, the 3D, the PDF, the price function and the QA tools.
//
// Built on the Sutton Garden Buildings v2 designer (another Lugarde dealer): the same Lugarde
// catalogue, rules, price-engine port and 3D, with Coastal's own dealer account and facts.
//
// Sources (checked 13-15 October 2026; details in research/ and docs/CONFIRMATIONS.md):
// - Coastal's current configurator: Lugarde's dealer configurator with Coastal's dealer token
//   (lugarde-configurator.com/?dealerToken=40ba..., the "View configurator" button on
//   coastalgardenbuildings.co.uk/services/design-your-own-bespoke-garden-building-with-3d-configurator/).
//   Its product list (/api/v1/products), templates, business rules (size limits, which roof,
//   thickness, treatment and door each system allows) and its price engine (/api/v1/cart). Every
//   price shown comes from that engine, live, for Coastal's dealer account.
// - coastalgardenbuildings.co.uk: contact details, show site, opening hours, services and selling
//   points (research/coastal-site-2026-10-13.md; every page fetched on 13 Oct 2026). Coastal
//   publishes no prices of its own.
// - Lugarde's construction drawings and UK catalogue (the Sutton repo's research/lugarde-specs):
//   post sizes, board and log heights, roof edges, door and window sizes.
//
// Prices: never stored here as a total. The building and every Lugarde option are priced by
// Lugarde's engine for Coastal's dealer account (netlify/functions/price.mjs). `list` below is
// Lugarde's published unit price for a fixed-price product, shown next to the option;
// tools/qa/check-prices.mjs proves each one still equals the engine's price for Coastal's token
// (42 of 42 on 15 Oct 2026). Area-priced options (treatments, floors, insulation) show "Priced to
// your size". Coastal's own work (groundworks, installation, electrics, fit-out) is never priced
// here: "Quoted by Coastal".

export const DEALER_TOKEN = '40babb820bb07ab118b01a927d23be6f';
export const LUGARDE_URL = `https://lugarde-configurator.com/?dealerToken=${DEALER_TOKEN}`;

export const RANGE_ORDER = ['log', 'prima', 'pro'];

// Geometry, metres. Heights are the walls' heights as Lugarde's configurator reports them for
// each roof (its measurements block): log cabin flat 2.038m walls under a 0.28m roof edge, apex
// 2.103m to the eaves at 21 degrees, pent 1.968m at the low side; Prima 2.148m; Pro 2.21m flat
// (2.49m overall, the catalogue's York figures) and 2.48m to the eaves on the gable.
// `log` and `board` are the visible log or board height (about 135mm on Lugarde's drawings).
export const RANGES = {
  log: {
    name: 'Log Cabin', lugarde: 'log-cabin', price: 'blokhut', tag: 'Solid logs, windmill corners',
    description: 'Solid timber logs stacked horizontally and locked together at the corners with a traditional windmill joint.',
    bestFor: 'Authentic character and a traditional look and feel',
    thicknesses: [44, 68, 90], thickness: 44,
    roofs: ['flat', 'apex', 'pent'], roof: 'flat',
    step: .1, width: [1.5, 20], depth: {flat: [1.5, 5], apex: [1.5, 6.5], pent: [1.5, 5]},
    wall: {flat: 2.038, apex: 2.103, pent: 1.968}, edge: .28, over: {flat: .23, apex: .3, pent: .23},
    slopes: [17, 21, 26, 30], slope: 21, log: .1355, corner: .09, post: .12,
    treatments: ['none', 'spray', 'boiler'], raise: 4, canopy: true,
    defaultSize: [4.4, 3], highlights: ['44, 68 or 90mm logs', 'Up to 20m long']
  },
  prima: {
    name: 'Prima', lugarde: 'PRIMA-4-corners', price: 'prima', tag: 'Walls slot into corner posts',
    description: 'Lugarde’s patented system: wall sections slot into corner posts with an aluminium core, with no visible nails or screws.',
    bestFor: 'A modern garden room where design and a clean finish matter',
    thicknesses: [28, 44], thickness: 44,
    roofs: ['flat', 'pyramid'], roof: 'flat',
    step: .6, width: [1.8, 5.4], depth: {flat: [1.8, 4.2], pyramid: [1.8, 4.2]}, small: {28: 3.6},
    wall: {flat: 2.148, pyramid: 2.148}, edge: .295, over: {flat: .18, pyramid: .264},
    slopes: [30], slope: 30, board: .135, cornerPost: .075, post: .12,
    treatments: ['none', 'spray', 'pickle'], raise: 4, canopy: true,
    defaultSize: [4.2, 3], highlights: ['28 or 44mm walls', '60cm modules']
  },
  pro: {
    name: 'Pro', lugarde: 'pro', price: 'prosystem', tag: '14 × 14cm laminated posts',
    description: 'Wall sections slot directly into laminated 14 × 14cm posts: Lugarde’s strongest, most stable system, sized in 10cm steps.',
    bestFor: 'Larger builds, home offices, gyms and year-round rooms',
    thicknesses: [28], thickness: 28,
    roofs: ['flat', 'apex'], roof: 'flat',
    step: .1, width: [1, 8.5], depth: {flat: [1, 4.3], apex: [2.5, 8.5]}, span: {apex: 5.8}, canopyMax: 3.6,
    wall: {flat: 2.21, apex: 2.48}, edge: .28, over: {flat: .23, apex: .35},
    slopes: [25, 40], slope: 25, board: .134, post: .14, panel: 3.5,
    treatments: ['none', 'spray', 'pickle', 'boiler'], raise: 0, canopy: true,
    defaultSize: [4, 3], highlights: ['14 × 14cm posts', 'Sized in 10cm steps']
  }
};

export const ROOFS = {
  flat: {name: 'Flat roof', note: 'EPDM rubber with a wide aluminium roof trim', product: 'roof.type.flat', price: 'flat'},
  apex: {name: 'Apex roof', note: 'Two slopes with gables, shingles or metal roof tiles', product: 'roof.type.sadle', price: 'saddle'},
  pent: {name: 'Pent roof', note: 'A single slope, falling to the back', product: 'roof.type.pent', price: 'pent'},
  pyramid: {name: 'Pyramid roof', note: 'Four slopes to a central point, shingled', product: 'roof.type.pyramid', price: 'pyramid'}
};

// Roof coverings. Flat roofs: EPDM with an aluminium trim, silver or black (black £6 a metre of trim).
// Apex and pyramid: shingles (Lugarde's rules hide blue and brown, so black, green and red), or on
// an apex, Lugarde's metal roof tiles.
export const TRIM_COLOURS = {
  silver: {name: 'Silver trim', hex: '#c9ccce', product: 'roof.trim-color.silver', list: 0},
  black: {name: 'Black trim', hex: '#26282a', product: 'roof.trim-color.black', list: 6, unit: 'metre'}
};
export const COVERINGS = {
  'shingles-black': {name: 'Black shingles', hex: '#2b2d30', kind: 'shingles', products: ['roof.cover.shingles', 'roof.shingles.black']},
  'shingles-green': {name: 'Green shingles', hex: '#3f5a43', kind: 'shingles', products: ['roof.cover.shingles', 'roof.shingles.green']},
  'shingles-red': {name: 'Red shingles', hex: '#7c3a2f', kind: 'shingles', products: ['roof.cover.shingles', 'roof.shingles.red']},
  'classic-7016': {name: 'Metal tiles, Classic, anthracite (RAL 7016)', hex: '#383e42', kind: 'tiles', profile: 'classic', apexOnly: true, products: ['roof.covering.classic.ral7016']},
  'classic-8012': {name: 'Metal tiles, Classic, red-brown (RAL 8012)', hex: '#59191f', kind: 'tiles', profile: 'classic', apexOnly: true, products: ['roof.covering.classic.ral8012']},
  'classic-9005': {name: 'Metal tiles, Classic, black (RAL 9005)', hex: '#141414', kind: 'tiles', profile: 'classic', apexOnly: true, products: ['roof.covering.classic.ral9005']},
  'modern-7016': {name: 'Metal tiles, Modern, anthracite (RAL 7016)', hex: '#383e42', kind: 'tiles', profile: 'modern', apexOnly: true, products: ['roof.covering.modern.ral7016']},
  'modern-9005': {name: 'Metal tiles, Modern, black (RAL 9005)', hex: '#141414', kind: 'tiles', profile: 'modern', apexOnly: true, products: ['roof.covering.modern.ral9005']}
};

// Wood treatments: Lugarde's names and RAL codes (its product list and treatments page). `hex`
// is the colour the timber shows (RAL references for the opaque stains; the configurator's tints
// over spruce for the transparent ones). Which system offers which comes from Lugarde's rules:
// opaque stain on Prima and Pro, pressure treatment on Log Cabin and Pro, pre-treatment on all.
export const TREATMENT_KINDS = {
  none: {name: 'Untreated', note: 'Natural Nordic spruce, to stain on site'},
  spray: {name: 'Pre-treated', note: 'Transparent factory pre-treatment: the grain shows through', product: 'material.woodtreatment.spray'},
  pickle: {name: 'Opaque stain', note: 'Factory-painted opaque stain', product: 'material.woodtreatment.pickle'},
  boiler: {name: 'Pressure-treated', note: 'Impregnated under pressure', product: 'material.woodtreatment.boiler'}
};
export const UNTREATED = '#d8bf93';
export const COLOURS = {
  spray: {
    transparent: {name: 'Transparent', hex: '#d6b98c', opaque: false},
    brown: {name: 'Transparent brown', hex: '#b07a45', opaque: false},
    graphitegrey: {name: 'Transparent graphite grey', hex: '#4a4b4a', opaque: false},
    lightgrey: {name: 'Transparent light grey', hex: '#c9ccc5', opaque: false},
    white: {name: 'Transparent white', hex: '#e0dfd6', opaque: false},
    'transparent-black-oil': {name: 'Transparent black oil', hex: '#2c2b29', opaque: false},
    'transparent-brown-oil': {name: 'Transparent brown oil', hex: '#7a5532', opaque: false}
  },
  pickle: {
    black: {name: 'Black grey (RAL 7021)', hex: '#2f3234', opaque: true},
    dustygrey: {name: 'Dusty grey (RAL 7037)', hex: '#7a7b7a', opaque: true},
    gravelgrey: {name: 'Pebble grey (RAL 7032)', hex: '#b5b0a1', opaque: true},
    purewhite: {name: 'Pure white (RAL 9010)', hex: '#f1ece1', opaque: true},
    quartzgrey: {name: 'Quartz grey (RAL 7039)', hex: '#6b665e', opaque: true},
    transparentoak: {name: 'Transparent oak (stain)', hex: '#b9955c', opaque: false}
  },
  boiler: {
    brown: {name: 'Brown', hex: '#9a6a3c', opaque: false},
    green: {name: 'Green', hex: '#8a8156', opaque: false},
    grey: {name: 'Grey', hex: '#8e8b80', opaque: false}
  }
};
// Doors and windows: pre-treated or painted on every system; posts follow the walls.
export const FRAME_KINDS = ['none', 'spray', 'pickle'];

// Doors and windows: Lugarde's product codes, leaf sizes (its product list) and outer frame sizes
// (`fw`, `fh`: the size its configurator draws, metres). `leaves`, `bars` (columns x rows of
// panes per leaf) and `panel` (boarded share at the bottom) follow Lugarde's own product drawings.
// `list` is Lugarde's published unit price (product list, 13 Oct 2026; GBP), proven against the
// engine by tools/qa/check-prices.mjs. Only the 1.935m-high (H) doors are offered: every system
// takes them in Lugarde's configurator (the 1.80m versions remain available through Coastal).
const D = (code, name, group, kind, w, h, fw, fh, list, extra = {}) => ({code, name, group, kind, w, h, fw, fh, list, ...extra});
export const OPENINGS = {
  pe46h: D('PE46 (H)', 'Glazed single door', 'door', 'single', .77, 1.935, .91, 2.04, 851, {product: 'door.single.pe46h', leaves: 1, glass: .62, panel: .3}),
  pe61h: D('PE61 (H)', 'Half-glazed single door', 'door', 'single', .77, 1.935, .91, 2.04, 828, {product: 'door.single.pe61h', leaves: 1, glass: .42, panel: .5}),
  px39h: D('PX39 (H)', 'Single door with glazing bars', 'door', 'single', .77, 1.935, .91, 2.04, 874, {product: 'door.single.px39h', leaves: 1, glass: .6, panel: .3, bars: [2, 3]}),
  mg01h: D('MG01 (H)', 'Single door, frosted glass strips', 'door', 'single', .77, 1.935, .91, 2.04, 874, {product: 'door.single.mg01h', leaves: 1, strips: 4, panel: .25, frosted: true}),
  dd01h: D('DD01 (H)', 'Boarded single door', 'door', 'single', .77, 1.935, .91, 2.04, 851, {product: 'door.single.dd01h', leaves: 1, glass: 0, panel: 1}),
  pe45h: D('PE45 (H)', 'French doors', 'door', 'double', 1.21, 1.935, 1.35, 2.04, 1196, {product: 'door.double.pe45h', leaves: 2, glass: .66, panel: .26}),
  pe24h: D('PE24 (H)', 'French doors with glazing bars', 'door', 'double', 1.21, 1.935, 1.35, 2.04, 1288, {product: 'door.double.pe24h', leaves: 2, glass: .64, panel: .27, bars: [2, 4]}),
  pe60h: D('PE60 (H)', 'Half-glazed French doors', 'door', 'double', 1.21, 1.935, 1.35, 2.04, 1196, {product: 'door.double.pe60h', leaves: 2, glass: .45, panel: .48}),
  pe50h: D('PE50 (H)', 'Wide French doors', 'door', 'double', 1.51, 1.935, 1.63, 2.04, 1403, {product: 'door.double.pe50h', leaves: 2, glass: .9, panel: 0, bars: [2, 4]}),
  pe45fh: D('PE45F (H)', 'Boarded double doors', 'door', 'double', 1.21, 1.935, 1.35, 2.04, 1432, {product: 'door.double.pe45fh', leaves: 2, glass: 0, panel: 1}),
  sd200: D('SD200', 'Sliding doors, 2m', 'door', 'sliding', 2, 1.935, 2.12, 2.04, 1645, {product: 'door.sliding.sd200', leaves: 2, glass: .92, panel: 0}),
  sd300: D('SD300', 'Sliding doors, 3m', 'door', 'sliding', 3, 1.935, 3.12, 2.04, 2760, {product: 'door.sliding.sd300', leaves: 4, glass: .92, panel: 0}),
  dl01h: D('DL01H', 'Folding doors, 3 leaves', 'door', 'folding', 1.495, 1.935, 1.63, 2.04, 1599, {product: 'door.folding.dl01h', leaves: 3, glass: .66, panel: .26}),
  vl01h: D('VL01H', 'Bi-fold doors, 2m', 'door', 'folding', 1.995, 1.935, 2.12, 2.04, 1852, {product: 'door.folding.vl01h', leaves: 4, glass: .7, panel: .22}),
  vl02h: D('VL02H', 'Bi-fold doors, 2.4m', 'door', 'folding', 2.415, 1.935, 2.54, 2.04, 2053, {product: 'door.folding.vl02h', leaves: 4, glass: .7, panel: .22}),
  pe47: D('PE47', 'Tilt-and-turn window', 'window', 'tilt', .77, 1, .91, 1.145, 857, {product: 'window.tiltandturn.pe47', leaves: 1, sill: .85}),
  pe48: D('PE48', 'Wide tilt-and-turn window', 'window', 'tilt', 1.29, 1, 1.43, 1.145, 1127, {product: 'window.tiltandturn.pe48', leaves: 2, sill: .85}),
  pe49: D('PE49', 'Tall double tilt-and-turn window', 'window', 'tilt', 1.21, 1.53, 1.35, 1.68, 1231, {product: 'window.tiltandturn.pe49', leaves: 2, sill: .32}),
  pe65: D('PE65', 'Tall narrow tilt-and-turn window', 'window', 'tilt', .53, 1.53, .675, 1.68, 1058, {product: 'window.tiltandturn.pe65', leaves: 1, sill: .32}),
  pj07: D('PJ07', 'Tall slot window (fixed)', 'window', 'fixed', .34, 1.53, .45, 1.68, 282, {product: 'window.picture.pj07', leaves: 1, sill: .32}),
  pj26: D('PJ26', 'Full-height fixed window', 'window', 'fixed', .77, 1.8, .91, 1.935, 587, {product: 'window.picture.pj26', leaves: 1, sill: .05}),
  pj25: D('PJ25', 'Wide fixed window', 'window', 'fixed', 1.53, 1, 1.68, 1.145, 362, {product: 'window.picture.pj25', leaves: 1, sill: .85}),
  pj06h: D('PJ06H', 'Landscape slot window (fixed)', 'window', 'fixed', 1.14, .34, 1.28, .475, 196, {product: 'window.picture.pj06h', leaves: 1, sill: 1.5}),
  pe21: D('PE21', 'Casement window with glazing bars', 'window', 'casement', 1, 1.14, 1.14, 1.28, 857, {product: 'window.casement.pe21', leaves: 2, sill: .7, bars: [2, 3]}),
  pe23: D('PE23', 'Wide casement window with glazing bars', 'window', 'casement', 1.21, 1.14, 1.35, 1.28, 909, {product: 'window.casement.pe23', leaves: 2, sill: .7, bars: [2, 4]})
};
// When a wall is too short, an opening steps down within its family before it is dropped.
export const DOWNSIZE = {sd300: 'sd200', sd200: 'vl01h', vl02h: 'vl01h', vl01h: 'dl01h', dl01h: 'pe45h', pe50h: 'pe45h', pe45h: 'pe46h', pe24h: 'px39h', pe60h: 'pe61h', pe45fh: 'dd01h', pe48: 'pe47', pe49: 'pe65', pj25: 'pe47', pe23: 'pe21', pe21: 'pe47'};

export const WALLS = {front: 'Front', right: 'Right side', back: 'Back', left: 'Left side'};

// Starting layouts (Lugarde products, a starting point only): French doors centred on the front of a
// log cabin with tall slot windows either side; wide French doors and a slot window on Prima;
// sliding doors across the front of a Pro, like the glass-fronted cabin in Coastal's 2025 install photo.
export const LAYOUTS_BY_RANGE = {
  log: [{wall: 'front', type: 'pj07', p: .2}, {wall: 'front', type: 'pe45h', p: .5}, {wall: 'front', type: 'pj07', p: .8}, {wall: 'left', type: 'pe47', p: .5}],
  prima: [{wall: 'front', type: 'pe50h', p: .38}, {wall: 'front', type: 'pj07', p: .82}, {wall: 'right', type: 'pe65', p: .5}],
  pro: [{wall: 'front', type: 'sd200', p: .5}, {wall: 'left', type: 'pe65', p: .5}]
};

// Canopy: Lugarde's open canopy beside or in front of the room, on 12 x 12cm posts (14 x 14 on Pro),
// under the same roof. Not on pent roofs (Lugarde's rules).
export const CANOPY_SIDES = {none: 'No canopy', left: 'Canopy on the left', right: 'Canopy on the right', front: 'Canopy across the front'};
export const CANOPY_DEPTHS = {log: [1, 1.5, 2, 2.5, 3], prima: [1.2, 1.8, 2.4], pro: [1, 1.5, 2, 2.5, 3]};

// Options Lugarde prices, by key. `products`: the cart lines this option adds (amount 1 unless
// noted). `list`: Lugarde's price (each, or a metre where `unit` is 'metre'), or null where the
// engine prices it to the building's size. `rooms`: systems that offer it (Lugarde's rules).
// tools/qa/check-prices.mjs proves every one against the engine.
export const OPTIONS = {
  floor: {name: 'Internal floor', note: 'Pressure-treated floor beams, floorboards and skirting', products: ['remainder.innerfloor.yes'], list: null},
  floorInsulation: {name: 'Floor insulation', note: '20mm thermal boards between the floor beams (needs the internal floor)', products: ['remainder.insulation.floor'], list: null, needs: 'floor'},
  roofInsulation: {name: 'Roof insulation', note: 'Rigid thermoset boards, from 0.027 W/m.K', products: ['remainder.insulation.roof'], list: null},
  wallInsulation: {name: 'Double walls with insulation', note: 'An inner wall of 19mm boards on slotted beams, with a breathable membrane', products: ['remainder.insulation.wall'], list: null},
  ceiling: {name: 'Extra ceiling', note: 'Finishes the inside of a flat or pent roof below the insulation', products: ['remainder.insulation.extraceiling'], list: null, roofs: ['flat', 'pent']},
  veranda: {name: 'Canopy decking', note: 'Siberian larch decking under the canopy', products: ['remainder.outerfloor.yes'], list: null, needs: 'canopy'},
  gutter: {name: 'Zinc gutters and downpipes', note: 'Along the eaves, with downpipes', products: ['roof.gutter.yes'], list: 62, unit: 'metre', roofs: ['apex', 'pent', 'pyramid']},
  downpipe: {name: 'Downpipe set', note: 'Drains the flat roof’s outlet: one set or two, to suit the roof', products: ['roof.downspout.yes'], list: null, roofs: ['flat']},
  diamond: {name: 'Diamond-cut log ends', note: 'Instead of straight-cut (44mm logs)', products: ['wall.edge.diamond'], list: 125, rooms: ['log']},
  plasticBeams: {name: 'Plastic foundation beams', note: 'Instead of timber (not with 90mm logs)', products: ['wall.foundation-beams.plastic'], list: 13, unit: 'metre'},
  stormAnchors: {name: 'Storm anchor kit', note: 'Ties the walls to the base', products: ['remainder.stormanchors.yes'], list: 130, rooms: ['log', 'prima']},
  finial: {name: 'Chrome ball finial', note: 'On the pyramid’s metal cap', products: ['remainder.roof.edge.chrome-ball'], list: 0, roofs: ['pyramid']}
};
export const SPOTS = {0: {name: 'No soffit spots'}, 6: {name: 'Six LED spots', product: 'remainder.lighting.ceiling.spots-06', list: 425}, 8: {name: 'Eight LED spots', product: 'remainder.lighting.ceiling.spots-08', list: 485}, 10: {name: 'Ten LED spots', product: 'remainder.lighting.ceiling.spots-10', list: 540}, 12: {name: 'Twelve LED spots', product: 'remainder.lighting.ceiling.spots-12', list: 585}};
export const WALL_LIGHTS = {0: {name: 'No wall lights'}, 2: {name: 'Two LED up-and-down wall lights', product: 'remainder.lighting.wall.led-02', list: 390}, 4: {name: 'Four LED up-and-down wall lights', product: 'remainder.lighting.wall.led-04', list: 520}};
export const SKYLIGHTS = {none: {name: 'No skylight'}, s1: {name: 'Skylight 50 × 150cm', w: .5, d: 1.5, product: 'remainder.skylight.size-1', list: 1161}, s2: {name: 'Skylight 50 × 200cm', w: .5, d: 2, product: 'remainder.skylight.size-2', list: 1473}, s3: {name: 'Skylight 100 × 150cm', w: 1, d: 1.5, product: 'remainder.skylight.size-3', list: 1258}, s4: {name: 'Skylight 100 × 200cm', w: 1, d: 2, product: 'remainder.skylight.size-4', list: 1585}};

// Coastal's own services, from its website. Quoted individually by Coastal; each shows in the 3D.
// (Keys are shared with the 3D: patio = the base and paving, heater = electrics, fitout = the
// lined interior.)
export const DEALER_EXTRAS = {
  patio: {name: 'Base and paving by Coastal', note: 'Coastal’s groundwork team: “timber decking, steel, slabs or concrete”', source: '/services/groundwork-garden-building-installation-dorset/'},
  heater: {name: 'Electrics by Coastal’s electrician', note: 'Sockets, lighting and a heater, by the electrician Coastal has used for over 20 years', source: '/services/finishing-touches/'},
  fitout: {name: 'Lined interior with laminate flooring', note: 'Lined, painted walls and laminate flooring, as in Coastal’s own garden rooms', source: '/garden-office/ (The Hut standard specification)'}
};

// What the room is for: the uses Coastal's site shows (garden office, home gym, garden games
// room, summerhouse; the games room page offers "a custom bar too"). Sets the illustrative furniture.
export const USES = {
  office: {name: 'Garden office', icon: 'office'},
  gym: {name: 'Home gym', icon: 'gym'},
  games: {name: 'Games room', icon: 'games'},
  bar: {name: 'Home bar', icon: 'bar'},
  summer: {name: 'Summerhouse', icon: 'retreat'}
};

// Coastal's selling points, quoted from its own pages (research/coastal-site-2026-10-13.md, every
// page fetched 13 Oct 2026), and Lugarde's product claims from Lugarde's configurator and the
// Lugarde brochure Coastal links from its brochures page. Shown next to the step each supports.
export const USPS = {
  family: {title: 'Family run since 1979', copy: 'A family run business since 1979, now Coastal Garden Buildings in Christchurch.', source: 'coastalgardenbuildings.co.uk (footer), /about-us-coastal-garden-buildings-christchurch-dorset/'},
  showSite: {title: 'Over 90 buildings on show', copy: 'Over 90 garden buildings on show at Stewarts Christchurch Garden Centre, open every day.', source: 'coastalgardenbuildings.co.uk/brochures/, /contact/'},
  bespoke: {title: 'Completely bespoke', copy: 'All Coastal’s Lugarde buildings are completely bespoke.', source: 'coastalgardenbuildings.co.uk Lugarde P51 and P60 pages'},
  configurable: {title: 'Light where you want it', copy: 'Add doors and windows and move them around to get the best light in your garden.', source: 'coastalgardenbuildings.co.uk Lugarde PR5 and B44 pages'},
  lowRoof: {title: 'Low roofs on request', copy: 'Low pitched roofs to keep within the 2.5m height restriction.', source: 'coastalgardenbuildings.co.uk Lugarde P87 page'},
  yearRound: {title: 'Built for year-round use', copy: 'Coastal recommends 44mm timber plus roof and floor insulation for year-round comfort.', source: 'coastalgardenbuildings.co.uk Lugarde B4 page'},
  tenCm: {title: 'Sized to your garden', copy: 'Log Cabin and Pro in 10cm steps, log cabins up to 20m long.', source: 'Lugarde’s configurator limits (Coastal’s dealer link)'},
  epdm: {title: 'Complete EPDM roof kit', copy: 'Flat roofs come with EPDM rubber, adhesive, an outlet and a wide aluminium trim.', source: 'Lugarde configurator, Roof step'},
  glazing: {title: 'Double glazing, 3-point locks', copy: 'Double glazed windows and doors, 3-point locks and rubber draught excluders.', source: 'coastalgardenbuildings.co.uk Lugarde standard features graphic; Lugarde configurator'},
  laminated: {title: 'Laminated frames that don’t warp', copy: 'Lugarde doors and windows are finger-jointed and laminated.', source: 'Lugarde configurator, Windows step'},
  warranty: {title: 'Five-year Lugarde warranty', copy: 'Lugarde products carry a five-year warranty against manufacturing and construction defects.', source: 'Lugarde brochure linked from coastalgardenbuildings.co.uk/brochures/ (p. 141)'},
  painting: {title: 'Pre-painted or painted by Coastal', copy: 'Arrive pre-painted in a Lugarde colour, or use Coastal’s painting service for a colour of your choice.', source: 'coastalgardenbuildings.co.uk Lugarde P83 and P889 pages'},
  survey: {title: 'Free site survey', copy: 'A free, no-obligation site survey within 25 miles of Christchurch.', source: 'coastalgardenbuildings.co.uk/services/site-survey/'},
  groundworks: {title: 'Groundworks by Coastal’s team', copy: 'Timber decking, steel, slabs or concrete bases, done by Coastal’s own team.', source: 'coastalgardenbuildings.co.uk/services/groundwork-garden-building-installation-dorset/'},
  fitters: {title: 'Coastal’s own fitters', copy: 'A team of fitters, some of whom have been with Coastal for over 20 years.', source: 'coastalgardenbuildings.co.uk/about-us-.../, /our-latest-garden-building-installations-.../'},
  removal: {title: 'Old building removed', copy: 'Removing an old building is part of the service, priced on request.', source: 'coastalgardenbuildings.co.uk/services/installation/, /services/removals/'},
  electrics: {title: 'Electrics by a trusted electrician', copy: 'Coastal’s electrician of over 20 years, plus painting and decking through Coastal.', source: 'coastalgardenbuildings.co.uk/services/finishing-touches/'},
  aftersales: {title: 'After-sales support', copy: 'A personal service from your first question to installation, and after-sales support.', source: 'coastalgardenbuildings.co.uk/our-latest-garden-building-installations-dorset-new-forest-hampshire/'},
  noHardSell: {title: 'No hard sales tactics', copy: 'Just friendly staff, from your first enquiry to installation.', source: 'coastalgardenbuildings.co.uk/garden-office/'}
};
// A testimonial from Coastal's Recent Installs page, as published there (about a Lugarde summerhouse).
export const REVIEW = {quote: 'Just a quick note to say how pleased we are with our new Lugarde summerhouse. It was erected quickly and efficiently by Rob and the team.', name: 'Customer in Lymington, 2022', source: 'coastalgardenbuildings.co.uk/our-latest-garden-building-installations-dorset-new-forest-hampshire/'};

// Contact details exactly as Coastal publishes them (contact page and footer, 13 Oct 2026).
// Opening hours: Coastal publishes only its winter hours; the show site is open every day.
export const CONTACT = {
  name: 'Coastal Garden Buildings', short: 'Coastal',
  phone: '01425 274000', tel: '+441425274000', email: 'info@coastalgardenbuildings.co.uk',
  site: 'https://coastalgardenbuildings.co.uk',
  contactPage: 'https://coastalgardenbuildings.co.uk/contact/',
  company: 'Broomhill Garden Buildings Ltd, trading as Coastal Garden Buildings',
  showroom: 'Stewarts Christchurch Garden Centre, Lyndhurst Road, Christchurch, Dorset BH23 4SA',
  showroomShort: 'Stewarts Christchurch Garden Centre',
  map: 'https://www.google.com/maps/search/?api=1&query=Stewarts+Christchurch+Garden+Centre+Lyndhurst+Road+Christchurch+BH23+4SA',
  hours: 'Monday to Saturday 9am to 4.30pm, Sunday 10.30am to 4pm (winter opening times)',
  areas: 'Christchurch, Bournemouth, Poole, Ringwood, New Milton, Lymington, Lyndhurst, Brockenhurst and Southampton'
};
// Coastal's own Lugarde brochure, as linked from its brochures page.
export const BROCHURE = 'https://coastalgardenbuildings.co.uk/wp-content/uploads/2023/09/Lugarde-garden-buildings-christchurch-dorset.pdf';
