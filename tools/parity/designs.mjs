// The designs priced both ways by the parity checks: through Lugarde's own configurator
// (app-structures.mjs) and through our cart builder (src/lugarde-cart.js). They cover every
// system and roof, the size limits, canopies on each side, every door and window and every option.
// `base` names the Lugarde template the configurator starts from (BASES).
import {normalise} from '../../src/configurator-model.js';

// Each design is run through our own model first (normalise: sizes, slopes, canopies and where its
// doors and windows can go), so both sides price exactly what a customer could design here.
export const bare = d => normalise({...d, treatment: {kind: 'none'}, frames: {kind: 'none'}, options: {}, spots: 0, wallLights: 0, skylight: 'none', extras: {}});
// Every option the engine prices by area, length or count, where the system offers it.
export const heavy = d => normalise({
  ...d, trim: 'black', treatment: {kind: 'spray', colour: 'brown'}, frames: {kind: 'pickle', colour: 'black'}, floorColour: 'lightgrey',
  options: {floor: true, floorInsulation: true, roofInsulation: true, wallInsulation: true, ceiling: true, veranda: true, gutter: true, downpipe: true, diamond: true, plasticBeams: true, stormAnchors: true, finial: true},
  spots: 6, wallLights: 2, skylight: 's1'
});

export const BASES = {
  'log-flat': {template: 'Log cabin | Flat roof | Canopy (12×12 cm posts)'},
  'log-apex': {template: 'Log Cabin | Gable Roof - Canopy Left'},
  'log-pent': {template: 'Log Cabin | Mono-Pitch Roof'},
  'prima-flat': {template: 'Prima System | Flat Roof | Canopy (12×12 cm Posts)'},
  'prima-pyramid': {template: 'Prima System | Pyramid Roof'},
  'pro-flat': {template: 'Pro System | Flat roof | Canopy (14×14cm posts)'},
  'pro-apex': {template: 'Pro System | Gable Roof'}
};
const O = (wall, type, p) => ({wall, type, p});
const d = (id, base, range, roof, width, depth, thickness, extra = {}) => ({id, base, range, roof, width, depth, thickness, canopy: {side: 'none', depth: 0}, openings: [], ...extra});
export const DESIGNS = [
  d('log-flat-min', 'log-flat', 'log', 'flat', 1.5, 1.5, 44),
  d('log-flat-3x2.5', 'log-flat', 'log', 'flat', 3, 2.5, 44, {openings: [O('front', 'pe46h', .5)]}),
  d('log-flat-4.4x3', 'log-flat', 'log', 'flat', 4.4, 3, 44, {openings: [O('front', 'pj07', .2), O('front', 'pe45h', .5), O('front', 'pj07', .8), O('left', 'pe47', .5)]}),
  d('log-flat-6x4-68', 'log-flat', 'log', 'flat', 6, 4, 68, {openings: [O('front', 'vl01h', .5), O('right', 'pe65', .5)]}),
  d('log-flat-8x5-90', 'log-flat', 'log', 'flat', 8, 5, 90, {openings: [O('front', 'sd300', .5), O('back', 'pj25', .5)]}),
  d('log-flat-12x5', 'log-flat', 'log', 'flat', 12, 5, 44, {openings: [O('front', 'pe50h', .3), O('front', 'pe50h', .7)]}),
  d('log-flat-20x5', 'log-flat', 'log', 'flat', 20, 5, 44, {openings: [O('front', 'pe45h', .5)]}),
  d('log-flat-canopy-right', 'log-flat', 'log', 'flat', 4, 3, 44, {canopy: {side: 'right', depth: 1.5}, openings: [O('front', 'pe45h', .5)]}),
  d('log-flat-canopy-left', 'log-flat', 'log', 'flat', 5, 3.5, 44, {canopy: {side: 'left', depth: 2.5}, openings: [O('front', 'pe50h', .5)]}),
  d('log-flat-canopy-right-5', 'log-flat', 'log', 'flat', 6, 5, 44, {canopy: {side: 'right', depth: 3}, openings: [O('front', 'pe50h', .5)]}),
  d('log-flat-canopy-left-4', 'log-flat', 'log', 'flat', 3.5, 4, 68, {canopy: {side: 'left', depth: 1}, openings: [O('front', 'pe45h', .5)]}),
  // Canopy posts: where Lugarde adds a middle post along the canopy's free edge.
  d('cx-log-3.6', 'log-flat', 'log', 'flat', 3, 3.6, 44, {canopy: {side: 'right', depth: 1.5}}),
  d('cx-log-3.7', 'log-flat', 'log', 'flat', 3, 3.7, 44, {canopy: {side: 'right', depth: 1.5}}),
  d('cx-log-3.8', 'log-flat', 'log', 'flat', 3, 3.8, 44, {canopy: {side: 'right', depth: 1.5}}),
  d('cx-log-3.9', 'log-flat', 'log', 'flat', 3, 3.9, 44, {canopy: {side: 'right', depth: 1.5}}),
  d('cx-prima-3.6', 'prima-flat', 'prima', 'flat', 3, 3.6, 44, {canopy: {side: 'right', depth: 1.2}}),
  d('cx-prima-4.2', 'prima-flat', 'prima', 'flat', 3, 4.2, 44, {canopy: {side: 'right', depth: 1.2}}),
  d('cx-pro-3.5', 'pro-flat', 'pro', 'flat', 3, 3.5, 28, {canopy: {side: 'right', depth: 1.5}}),
  d('cx-pro-3.6', 'pro-flat', 'pro', 'flat', 3, 3.6, 28, {canopy: {side: 'right', depth: 1.5}}),
  d('log-apex-3x3', 'log-apex', 'log', 'apex', 3, 3, 44, {slope: 21, openings: [O('front', 'pe45h', .5)]}),
  d('log-apex-4x3.8', 'log-apex', 'log', 'apex', 4, 3.8, 44, {slope: 21, openings: [O('front', 'pe24h', .5), O('front', 'pe21', .15)]}),
  d('log-apex-6x5-68', 'log-apex', 'log', 'apex', 6, 5, 68, {slope: 26, openings: [O('front', 'dl01h', .5)]}),
  d('log-apex-10x6.5', 'log-apex', 'log', 'apex', 10, 6.5, 44, {slope: 21, openings: [O('front', 'pe45h', .5)]}),
  d('log-apex-canopy-left', 'log-apex', 'log', 'apex', 3, 2.7, 44, {slope: 21, canopy: {side: 'left', depth: 1.7}, openings: [O('front', 'pe45h', .5)]}),
  d('log-apex-canopy-left-big', 'log-apex', 'log', 'apex', 5, 4, 44, {slope: 21, canopy: {side: 'left', depth: 2.5}, openings: [O('front', 'pe50h', .5)]}),
  d('log-pent-2.5', 'log-pent', 'log', 'pent', 2.5, 2.5, 44, {openings: [O('front', 'pe46h', .5)]}),
  d('log-pent-5x4', 'log-pent', 'log', 'pent', 5, 4, 44, {openings: [O('front', 'pe45h', .5)]}),
  d('log-pent-8x5-68', 'log-pent', 'log', 'pent', 8, 5, 68, {openings: [O('front', 'sd200', .5)]}),
  d('prima-flat-1.8', 'prima-flat', 'prima', 'flat', 1.8, 1.8, 28, {openings: [O('front', 'pe46h', .5)]}),
  d('prima-flat-3x2.4', 'prima-flat', 'prima', 'flat', 3, 2.4, 44, {openings: [O('front', 'pe45h', .5)]}),
  d('prima-flat-4.2x3', 'prima-flat', 'prima', 'flat', 4.2, 3, 44, {openings: [O('front', 'pe50h', .38), O('front', 'pj07', .82), O('right', 'pe65', .5)]}),
  d('prima-flat-5.4x4.2', 'prima-flat', 'prima', 'flat', 5.4, 4.2, 44, {openings: [O('front', 'vl02h', .5)]}),
  d('prima-flat-3.6-28', 'prima-flat', 'prima', 'flat', 3.6, 3.6, 28, {openings: [O('front', 'pe45h', .5)]}),
  d('prima-flat-canopy-right', 'prima-flat', 'prima', 'flat', 3, 2.4, 44, {canopy: {side: 'right', depth: 1.2}, openings: [O('front', 'pe45h', .5)]}),
  d('prima-flat-canopy-left', 'prima-flat', 'prima', 'flat', 4.2, 3, 44, {canopy: {side: 'left', depth: 2.4}, openings: [O('front', 'pe45h', .5)]}),
  d('prima-flat-canopy-right-4.2', 'prima-flat', 'prima', 'flat', 5.4, 4.2, 44, {canopy: {side: 'right', depth: 2.4}, openings: [O('front', 'pe50h', .5)]}),
  d('prima-pyr-2.4', 'prima-pyramid', 'prima', 'pyramid', 2.4, 2.4, 28, {openings: [O('front', 'pe46h', .5)]}),
  d('prima-pyr-4.2', 'prima-pyramid', 'prima', 'pyramid', 4.2, 4.2, 44, {openings: [O('front', 'pe45h', .5)]}),
  d('prima-pyr-5.4x4.2', 'prima-pyramid', 'prima', 'pyramid', 5.4, 4.2, 44, {openings: [O('front', 'pe50h', .5)]}),
  d('pro-flat-1x1', 'pro-flat', 'pro', 'flat', 1, 1, 28),
  d('pro-flat-3x2', 'pro-flat', 'pro', 'flat', 3, 2, 28, {openings: [O('front', 'pe46h', .5)]}),
  d('pro-flat-3.5x3', 'pro-flat', 'pro', 'flat', 3.5, 3, 28, {openings: [O('front', 'sd200', .5)]}),
  d('pro-flat-4x3', 'pro-flat', 'pro', 'flat', 4, 3, 28, {openings: [O('front', 'sd200', .5), O('left', 'pe65', .5)]}),
  d('pro-flat-6.3x4.3', 'pro-flat', 'pro', 'flat', 6.3, 4.3, 28, {openings: [O('front', 'sd300', .5)]}),
  d('pro-flat-8.5x4.3', 'pro-flat', 'pro', 'flat', 8.5, 4.3, 28, {openings: [O('front', 'vl02h', .3), O('front', 'sd200', .75)]}),
  d('pro-flat-canopy-right', 'pro-flat', 'pro', 'flat', 3, 2, 28, {canopy: {side: 'right', depth: 1.5}, openings: [O('front', 'pe45h', .5)]}),
  d('pro-flat-canopy-left', 'pro-flat', 'pro', 'flat', 4, 3, 28, {canopy: {side: 'left', depth: 2}, openings: [O('front', 'sd200', .5)]}),
  d('pro-flat-canopy-right-3.6', 'pro-flat', 'pro', 'flat', 5, 3.6, 28, {canopy: {side: 'right', depth: 3}, openings: [O('front', 'sd200', .5)]}),
  d('pro-apex-3x2.5', 'pro-apex', 'pro', 'apex', 3, 2.5, 28, {slope: 25, openings: [O('front', 'pe45h', .5)]}),
  d('pro-apex-4x3', 'pro-apex', 'pro', 'apex', 4, 3, 28, {slope: 25, openings: [O('front', 'sd200', .5)]}),
  d('pro-apex-4.5x4.5-40', 'pro-apex', 'pro', 'apex', 4.5, 4.5, 28, {slope: 40, openings: [O('front', 'pe50h', .5)]}),
  d('pro-apex-8.5x4.5', 'pro-apex', 'pro', 'apex', 8.5, 4.5, 28, {slope: 25, openings: [O('front', 'sd300', .5)]}),
  d('pro-apex-3x4.5', 'pro-apex', 'pro', 'apex', 3, 4.5, 28, {slope: 25, openings: [O('front', 'pe45h', .5)]}),
  // Spans up to Lugarde's largest Pro gable end (5.8m), and sizes either side of the 3.6m-section gap.
  d('pro-apex-5.8x7-40', 'pro-apex', 'pro', 'apex', 5.8, 7, 28, {slope: 40, openings: [O('front', 'vl02h', .5)]}),
  d('pro-apex-6.3x5.5', 'pro-apex', 'pro', 'apex', 6.3, 5.5, 28, {slope: 25, openings: [O('front', 'sd300', .5), O('left', 'pe65', .5)]}),
  d('pro-apex-6.1x5.1', 'pro-apex', 'pro', 'apex', 6.1, 5.1, 28, {slope: 25, openings: [O('front', 'pe45h', .5)]})
];
