// What Coastal sells through its Lugarde dealer configurator, and what each choice costs.
//
// Every price comes from Lugarde's own configurator opened with Coastal's dealer link
// (lugarde-configurator.com/?dealerToken=40babb82..., read 13 October 2026):
// - per-size prices (wall structure, roof, floor, insulation, treatment, gutters) are in
//   pricebook.json, captured design by design from that tool by tools/pricebook/;
// - fixed-price items (doors, windows, lights, skylights, extras) are Lugarde's product list
//   prices, which its cart charges unchanged (checked in tests/pricing.test.mjs).
// Prices include VAT, as Lugarde's cart does. Nothing here is estimated: an extra with no
// captured price is marked 'quoted' and the PDF says so.

export const VAT_RATE = .2;
export const TRANSPORT = 130; // Lugarde's "Extra transport surcharge" line on every cart.
export const DELIVERY = {scotland: 83, ireland: 415}; // Lugarde's surcharges by destination.
// Lugarde's "Late summer offer": 10% off the product price, excluding delivery, for designs
// started before the end of 31 October 2026 (shown on Coastal's dealer link).
export const PROMO = {label: 'Lugarde late summer offer: 10% off', rate: .1, until: '2026-10-31T23:59:59+00:00', terms: 'Valid 1 September to 31 October 2026. 10% off the product price, excluding delivery and installation.'};

export const RANGES = {
  log: {
    name: 'Log cabin', system: 'Lugarde Log cabin system', code: 'B',
    blurb: 'Solid spruce logs stacked and locked together with a windmill joint at every corner.',
    facts: ['Interlocking 44mm or 68mm logs', 'Log ends show at every corner', 'Flat, apex or pent roof'],
    walls: [44, 68], wall: 44, roofs: ['flat', 'apex', 'pent'], roof: 'flat',
    width: [2, 8, .5], depth: [2, 5, .5],
    treatments: ['none', 'spray'], corner: true, posts: 0
  },
  prima: {
    name: 'Prima garden room', system: 'Lugarde Prima system', code: 'PR',
    blurb: "Lugarde's patented system: walls slide into slim corner posts with an aluminium core, no visible nails or screws.",
    facts: ['Slim corner posts with an aluminium core', 'Sizes in 60cm steps', 'Flat or pyramid roof'],
    walls: [28, 44], wall: 28, roofs: ['flat', 'pyramid'], roof: 'flat',
    width: {28: [1.8, 3.6, .6], 44: [1.8, 5.4, .6]}, depth: {28: [1.8, 3.6, .6], 44: [1.8, 4.2, .6]},
    treatments: ['none', 'spray'], posts: .09
  },
  pro: {
    name: 'Pro garden room', system: 'Lugarde Pro system', code: 'PS',
    blurb: 'Laminated 14 x 14cm posts with the wall sections slid in between: a sturdy, modern frame.',
    facts: ['Laminated 14 x 14cm posts', '28mm wall boards', 'Flat or apex roof'],
    walls: [28], wall: 28, roofs: ['flat', 'apex'], roof: 'flat',
    width: [2, 8, .5], depth: {flat: [2, 4, .5], apex: [2, 5.5, .5]},
    treatments: ['none', 'spray'], posts: .14
  }
};
export const RANGE_ORDER = ['log', 'prima', 'pro'];

export const ROOFS = {
  flat: {name: 'Flat roof', blurb: 'EPDM rubber roof with aluminium edge trims, gently falling to the back.'},
  apex: {name: 'Apex roof', blurb: 'A pitched roof with felt shingles in your choice of five colours.'},
  pent: {name: 'Pent roof', blurb: 'A single low slope: modern lines and extra height at the front.'},
  pyramid: {name: 'Pyramid roof', blurb: 'Four slopes to a central point, covered in felt shingles.'}
};

// Lugarde's five shingle colours (included in the price) and the two flat-roof trim colours.
export const SHINGLES = {
  black: {name: 'Black', hex: '#2c2d30'}, red: {name: 'Red', hex: '#7a3329'}, green: {name: 'Green', hex: '#3f5641'},
  brown: {name: 'Brown', hex: '#5b4434'}, blue: {name: 'Blue', hex: '#384a63'}
};
export const TRIMS = {silver: {name: 'Silver aluminium', hex: '#c9ccce', price: 0}, black: {name: 'Black aluminium', hex: '#26282a', price: 'trim-black'}};

// Treatments, as Lugarde names them. Spray pre-treatment is one price whatever the colour.
// Untreated spruce is the standard; Coastal can paint on site (quoted).
export const FINISHES = {
  none: {name: 'Untreated spruce', group: 'none', hex: '#d6b487', opaque: false, strength: 0},
  'spray-transparent': {name: 'Transparent (colourless)', group: 'spray', hex: '#d9b07a', strength: .35},
  'spray-white': {name: 'Transparent white', group: 'spray', hex: '#ece6da', strength: .62},
  'spray-lightgrey': {name: 'Transparent light grey', group: 'spray', hex: '#b7b4ad', strength: .7},
  'spray-graphitegrey': {name: 'Transparent graphite grey', group: 'spray', hex: '#5f605e', strength: .78},
  'spray-brown': {name: 'Transparent brown', group: 'spray', hex: '#9a6a3c', strength: .7},
  'spray-transparent-black-oil': {name: 'Transparent black oil', group: 'spray', hex: '#2f2d2b', strength: .84},
  'spray-transparent-brown-oil': {name: 'Transparent brown oil', group: 'spray', hex: '#6d4a2c', strength: .78}
};
export const FINISH_ORDER = Object.keys(FINISHES);
// The Lugarde product ids for each treatment, as their cart lists them.
export const FINISH_IDS = Object.fromEntries(Object.keys(FINISHES).filter(k => k !== 'none').map(k => [k, `material.wood.${k.replace('-', '.')}`]));

/**
 * Doors and windows. Codes, sizes (mm, width x height) and prices are Lugarde's product list
 * (lugarde-configurator.com/api/v1/products/, 13 October 2026); looks follow the drawings on
 * pages 136-137 of the Lugarde brochure on Coastal's site: `bars` is [columns, rows] of glazing
 * bars per leaf, `boards` the height of the boarded bottom panel of a door.
 */
export const PRODUCTS = {
  pe45h: {name: 'PE45 (H) double doors', kind: 'door', type: 'double', w: 1210, h: 1935, price: 1196, boards: .32, note: 'Fully glazed double doors, 3-point lock'},
  pe24h: {name: 'PE24 (H) Georgian double doors', kind: 'door', type: 'double', w: 1210, h: 1935, price: 1288, boards: .32, bars: [2, 4], note: 'Double doors with glazing bars'},
  pe50h: {name: 'PE50 (H) wide double doors', kind: 'door', type: 'double', w: 1510, h: 1935, price: 1403, boards: .32, bars: [2, 4], note: 'Wide Georgian double doors'},
  pe46h: {name: 'PE46 (H) single door', kind: 'door', type: 'single', w: 770, h: 1935, price: 851, boards: .32, note: 'Glazed single door'},
  px45h: {name: 'PX45 (H) Georgian single door', kind: 'door', type: 'single', w: 770, h: 1935, price: 874, boards: .32, bars: [2, 4], note: 'Single door with glazing bars'},
  sd200: {name: 'SD200 sliding doors', kind: 'door', type: 'sliding', w: 2000, h: 1935, price: 1645, leaves: 2, note: 'Two-leaf sliding doors'},
  sd300: {name: 'SD300 sliding doors', kind: 'door', type: 'sliding', w: 3000, h: 1935, price: 2760, leaves: 3, note: 'Three-leaf sliding doors'},
  dl01h: {name: 'DL01H folding doors', kind: 'door', type: 'folding', w: 1495, h: 1935, price: 1599, leaves: 2, note: 'Two-leaf folding doors'},
  vl01h: {name: 'VL01H folding doors', kind: 'door', type: 'folding', w: 1995, h: 1935, price: 1852, leaves: 3, note: 'Three-leaf folding doors'},
  vl02h: {name: 'VL02H folding doors', kind: 'door', type: 'folding', w: 2415, h: 1935, price: 2053, leaves: 4, note: 'Four-leaf folding doors'},
  pe23: {name: 'PE23 Georgian casement window', kind: 'window', type: 'casement', w: 1210, h: 1140, price: 909, leaves: 2, bars: [2, 3]},
  pe21: {name: 'PE21 casement window', kind: 'window', type: 'casement', w: 1000, h: 1140, price: 857, leaves: 2},
  pe44: {name: 'PE44 tall casement window', kind: 'window', type: 'casement', w: 1210, h: 1530, price: 851, leaves: 2},
  px44: {name: 'PX44 Georgian top-hung window', kind: 'window', type: 'tophung', w: 770, h: 1140, price: 587, leaves: 1, bars: [2, 3]},
  pe51: {name: 'PE51 tall Georgian window', kind: 'window', type: 'tophung', w: 770, h: 1800, price: 667, leaves: 1, bars: [2, 4]},
  pj26: {name: 'PJ26 tall fixed window', kind: 'window', type: 'fixed', w: 770, h: 1800, price: 587, leaves: 1},
  pj07: {name: 'PJ07 narrow fixed window', kind: 'window', type: 'fixed', w: 340, h: 1530, price: 282, leaves: 1},
  pj25: {name: 'PJ25 landscape fixed window', kind: 'window', type: 'fixed', w: 1530, h: 1000, price: 362, leaves: 1},
  pj24: {name: 'PJ24 high strip window', kind: 'window', type: 'fixed', w: 1935, h: 340, price: 282, leaves: 1, high: true},
  pe47: {name: 'PE47 tilt and turn window', kind: 'window', type: 'tilt', w: 770, h: 1000, price: 857, leaves: 1},
  pe49: {name: 'PE49 tilt and turn window', kind: 'window', type: 'tilt', w: 1210, h: 1530, price: 1231, leaves: 1}
};
export const DOORS = Object.keys(PRODUCTS).filter(k => PRODUCTS[k].kind === 'door');
export const WINDOWS = Object.keys(PRODUCTS).filter(k => PRODUCTS[k].kind === 'window');
// Lugarde's catalogue id for each code, as its cart lists it.
export const PRODUCT_IDS = {
  pe45h: 'door.double.pe45h', pe24h: 'door.double.pe24h', pe50h: 'door.double.pe50h', pe46h: 'door.single.pe46h', px45h: 'door.single.px45h',
  sd200: 'door.sliding.sd200', sd300: 'door.sliding.sd300', dl01h: 'door.folding.dl01h', vl01h: 'door.folding.vl01h', vl02h: 'door.folding.vl02h',
  pe23: 'window.casement.pe23', pe21: 'window.casement.pe21', pe44: 'window.casement.pe44', px44: 'window.hung.px44', pe51: 'window.hung.pe51',
  pj26: 'window.picture.pj26', pj07: 'window.picture.pj07', pj25: 'window.picture.pj25', pj24: 'window.picture.pj24', pe47: 'window.tiltandturn.pe47', pe49: 'window.tiltandturn.pe49'
};

/**
 * Extras. `price` is a number (each), a pricebook key (per size), or 'quoted' (Coastal prices
 * it after a survey). `range` limits an extra to some systems.
 */
export const EXTRAS = {
  floor: {name: 'Internal timber floor', group: 'comfort', price: 'floor', note: '19mm spruce floorboards with skirting, on pressure-treated beams'},
  floorIns: {name: 'Floor insulation', group: 'comfort', price: 'floorIns', needs: 'floor', note: '40mm insulation boards under the floor'},
  roofIns: {name: 'Roof insulation', group: 'comfort', price: 'roofIns', note: '40mm PIR boards, lambda 0.027'},
  wallIns: {name: 'Double walls with insulation', group: 'comfort', price: 'wallIns', note: 'An insulated inner wall on every wall'},
  gutters: {name: 'Zinc gutters and downpipe', group: 'outside', price: 'gutter', note: 'Priced per metre of roof edge'},
  diamond: {name: 'Diamond cut log ends', group: 'outside', price: 125, range: ['log'], note: 'Pointed log ends at every corner'},
  anchors: {name: 'Storm anchor kit', group: 'outside', price: 130},
  weather: {name: 'Draught-proofing brush strips', group: 'comfort', price: 79},
  vents: {name: 'Ventilation grilles (set)', group: 'comfort', price: 28},
  spots: {name: 'Six LED ceiling spots', group: 'comfort', price: 425},
  wallLights: {name: 'Two LED wall lights', group: 'outside', price: 390},
  skylight: {name: 'Skylight 50 x 150cm', group: 'comfort', price: 1161, roofs: ['apex', 'pent', 'pyramid']},
  installation: {name: 'Installation by Coastal\'s own fitters', group: 'coastal', price: 'quoted', note: 'Quoted after a free site survey within 25 miles of Christchurch'},
  base: {name: 'Base and groundworks by Coastal', group: 'coastal', price: 'quoted', note: 'Timber decking, steel, slabs or concrete'},
  removal: {name: 'Removal of an old building', group: 'coastal', price: 'quoted'},
  electrics: {name: 'Electrics by Coastal\'s electrician', group: 'coastal', price: 'quoted'},
  painting: {name: 'Painting by Coastal\'s painter', group: 'coastal', price: 'quoted'}
};

/** The step-by-step order of the designer. */
export const STEPS = [
  {id: 'range', name: 'Range'},
  {id: 'size', name: 'Size and roof'},
  {id: 'openings', name: 'Doors and windows'},
  {id: 'finish', name: 'Colour'},
  {id: 'extras', name: 'Extras'},
  {id: 'price', name: 'Your price'}
];

export const WALL_NAMES = {front: 'Front', back: 'Back', left: 'Left side', right: 'Right side'};
