// Dev harness: renders the 3D preview alone for headless checks.
//   ?j=<json design patch>&view=outside|inside|plan|front|back|left|right&tier=high&focus=<tag>&dims=1
import {createScene} from '../../src/scene/index.js';
import {normalise, decode} from '../../src/model.js';
const q = new URLSearchParams(location.search);
const state = q.get('d') ? decode(q.get('d')) : normalise(JSON.parse(q.get('j') || '{}')).design;
const el = document.getElementById('scene');
const scene = createScene(el, {tier: q.get('tier') || 'high'});
window.__scene = scene; window.__state = state;
scene.update(state);
const v = q.get('view');
if (v === 'inside' || v === 'plan') scene.setView(v, {animate: false});
if (q.get('dims') === '1') scene.setDimensions(true);
if (q.get('focus')) scene.focus({tags: q.get('focus').split(','), dir: q.get('dir') ? q.get('dir').split(',').map(Number) : undefined});
if (q.get('night') === '1') scene.setNight(true);
if (['front', 'back', 'left', 'right', 'hero', 'aerial'].includes(v)) {
  const shot = scene.capture([v], {width: 1600, height: 1000});
  const img = new Image(); img.src = shot[v]; img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#fff';
  document.body.appendChild(img);
}
setTimeout(() => { window.__ready = true; }, 400);
