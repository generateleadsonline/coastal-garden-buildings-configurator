// The 3D preview: renderer, garden setting, cameras, focus and highlight, plan dimensions and
// the PDF captures. Built on the SMART configurator's scene (same tiers, first-frame check,
// context-loss handling and SVG last resort); the building comes from building.js.
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {buildBuilding, envelope, wallThickness, heights, openingRects, GEOMETRY} from './building.js';
import {createTextures} from './textures.js';
import {FlatSVGRenderer} from './svg.js';
import {PRODUCTS} from '../catalog.js';

// The highlight: a clear sea-glass blue that reads against timber, grass and sky alike.
const SIGNAL = new THREE.Color('#1fb6d0');
const ease = t => 1 - Math.pow(1 - t, 3);

// What each device class can afford. Phones get half-size textures (a quarter of the canvas
// memory), a lower pixel ratio and smaller PDF renders. `low` is for WebGL1 devices and a
// second attempt after a lost context; `safe` is Lambert shading with no shadows or
// reflections for GPUs whose full shaders fail; `svg` draws the same scene flat, with no WebGL.
export const TIERS = {
  high: {ratio: 2, textures: 1, shadow: 2048, softShadows: true, env: true, antialias: true, capture: 2000, cache: 40},
  medium: {ratio: 1.5, textures: .5, shadow: 1024, softShadows: true, env: true, antialias: true, capture: 1600, cache: 18},
  low: {ratio: 1.25, textures: .5, shadow: 1024, softShadows: false, env: true, antialias: true, capture: 1400, cache: 14},
  safe: {ratio: 1, textures: .5, shadow: 0, softShadows: false, env: false, antialias: false, capture: 1400, cache: 14, simple: true},
  svg: {ratio: 1, textures: .5, shadow: 0, softShadows: false, env: false, antialias: false, capture: 0, cache: 40}
};

/**
 * Builds the preview in `container`. Failures carry `err.stage`: 'context' when no WebGL context
 * could be made, 'setup' for anything after that. Nothing is left behind either way: a context
 * that exists is lost on purpose and its canvas removed, because a leaked context still counts
 * against the browser's cap and makes the next attempt fail for the wrong reason.
 */
export function createScene(container, options = {}) {
  const tier = TIERS[options.tier] ? options.tier : 'high', T = TIERS[tier];
  let renderer;
  if (tier === 'svg') renderer = new FlatSVGRenderer();
  else {
    const canvas = document.createElement('canvas');
    try {
      renderer = new THREE.WebGLRenderer({canvas, antialias: T.antialias, preserveDrawingBuffer: false, powerPreference: tier === 'high' ? 'high-performance' : 'default'});
    } catch (err) {
      releaseContext(canvas);
      throw staged(err, 'context');
    }
  }
  const undo = [];
  try {
    return setupScene(container, renderer, {...options, tier}, undo);
  } catch (err) {
    for (const f of undo.reverse()) { try { f(); } catch {} }
    try { renderer.dispose(); } catch {}
    if (renderer.isWebGLRenderer) { try { renderer.forceContextLoss(); } catch {} }
    renderer.domElement.remove();
    container.querySelectorAll('.scene-overlay').forEach(el => el.remove());
    throw staged(err, 'setup');
  }
}
function staged(err, stage) {
  const e = err instanceof Error ? err : new Error(String(err));
  e.stage = e.stage || stage;
  return e;
}
function releaseContext(canvas) {
  for (const type of ['webgl2', 'webgl']) {
    try {
      const gl = canvas.getContext(type);
      if (gl) { gl.getExtension('WEBGL_lose_context')?.loseContext(); return; }
    } catch {}
  }
}

function setupScene(container, renderer, {onLost = () => {}, onBroken = () => {}, onVerified = () => {}, onPick = () => {}, onViewChange = () => {}, tier}, undo) {
  const T = TIERS[tier];
  const svg = tier === 'svg', simple = Boolean(T.simple);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let ratio = Math.min(window.devicePixelRatio || 1, T.ratio);
  renderer.setPixelRatio(ratio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .98;
  renderer.shadowMap.enabled = !svg && !simple;
  renderer.shadowMap.type = T.softShadows ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
  let broken = null, verified = false;
  const shaderErrors = [];
  if (!svg) {
    renderer.debug.onShaderError = (gl, program, vertex, fragment) => {
      const log = [gl.getProgramInfoLog(program), gl.getShaderInfoLog(vertex), gl.getShaderInfoLog(fragment)].filter(Boolean).join(' | ').replace(/\s+/g, ' ').slice(0, 300);
      shaderErrors.push(log || 'link failed, no log');
      console.warn('A 3D shader failed to link on this GPU:', log);
      if (!broken) { broken = 'shader'; if (verified) setTimeout(() => { if (!disposed && !lost) onBroken('shader'); }); }
    };
  }
  renderer.domElement.setAttribute('role', 'img');
  renderer.domElement.setAttribute('aria-label', 'Interactive 3D preview of your garden building. Drag to look around, scroll or pinch to zoom.');
  container.appendChild(renderer.domElement);
  const overlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  overlay.setAttribute('class', 'scene-overlay');
  overlay.setAttribute('aria-hidden', 'true');
  container.appendChild(overlay);

  const scene = new THREE.Scene();
  const tex = createTextures(renderer, {scale: T.textures, flat: svg});
  undo.push(() => tex.dispose());
  let envMap = null;
  if (!svg && T.env) {
    try {
      const pmrem = new THREE.PMREMGenerator(renderer);
      envMap = pmrem.fromScene(new RoomEnvironment(), .04).texture;
      pmrem.dispose();
    } catch { envMap = null; }
  }
  scene.environment = envMap;
  // Three r162 (the WebGL 1 build) has no scene-wide environment intensity: scale each material.
  const nativeEnvIntensity = 'environmentIntensity' in scene;
  function setEnvironmentIntensity(v) {
    scene.environmentIntensity = v;
    if (nativeEnvIntensity) return;
    scene.traverse(o => {
      for (const m of o.material ? [].concat(o.material) : []) {
        if (!('envMapIntensity' in m)) continue;
        if (m.userData.envBase === undefined) m.userData.envBase = m.envMapIntensity;
        m.envMapIntensity = m.userData.envBase * v;
      }
    });
  }

  // Sky: a soft coastal gradient behind a garden that fades into it.
  const sky = (top, horizon, ground) => {
    const c = document.createElement('canvas'); c.width = 4; c.height = 512;
    const g = c.getContext('2d').createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, top); g.addColorStop(.55, horizon); g.addColorStop(1, ground);
    const ctx = c.getContext('2d'); ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 512);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  };
  scene.background = svg ? new THREE.Color('#d6e3e8') : sky('#9fc0d6', '#e2ebee', '#e3e9e2');
  scene.fog = new THREE.Fog('#e3e9e2', 18, 52);
  const hemi = new THREE.HemisphereLight('#e6f0f6', '#76855c', svg ? 1.25 : 1.0);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff1dc', svg ? .55 : 2.6);
  sun.position.set(-7, 10, 9);
  sun.castShadow = renderer.shadowMap.enabled;
  if (T.shadow) sun.shadow.mapSize.set(T.shadow, T.shadow);
  sun.shadow.bias = -.0002; sun.shadow.normalBias = .02; sun.shadow.radius = 3;
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight('#d9e6f2', svg ? .12 : .55);
  fill.position.set(8, 5, -6);
  scene.add(fill);
  setEnvironmentIntensity(.5);

  // Garden: lawn, a sandstone path to the door, shrubs and a hedge behind.
  const garden = new THREE.Group();
  scene.add(garden);
  const lawnTex = tex.lawn();
  const lawnMat = new THREE.MeshStandardMaterial({map: lawnTex.map, normalMap: lawnTex.normalMap, roughness: .95, color: '#ffffff'});
  const lawn = new THREE.Mesh(new THREE.CircleGeometry(60, 64), lawnMat);
  lawn.rotation.x = -Math.PI / 2; lawn.receiveShadow = true; lawn.userData.ground = true; lawn.renderOrder = -2;
  lawn.geometry.attributes.uv.array.forEach((v, i, a) => { a[i] = (v - .5) * 120; });
  garden.add(lawn);

  const camera = new THREE.PerspectiveCamera(35, 1, .05, 200);
  const controls = new OrbitControls(camera, renderer.domElement);
  undo.push(() => controls.dispose());
  controls.enableDamping = !reducedMotion.matches && !svg;
  controls.dampingFactor = .09;
  controls.rotateSpeed = .6;
  controls.zoomSpeed = .8;
  controls.enablePan = false;

  let state = null, building = null, disposed = false, frame = 0, night = false;
  let view = 'outside', anim = null, pulse = null, persistentTags = [], lightRig = [];
  let groundExtras = null, highlight = null;
  let size = {w: 1, h: 1};

  function disposeObject(o) { o.traverse(m => { if (m.geometry) m.geometry.dispose(); }); }

  function landscaping(s, e) {
    if (groundExtras) { garden.remove(groundExtras); disposeObject(groundExtras); groundExtras.userData.mats?.forEach(m => m.dispose()); }
    const g = new THREE.Group(); groundExtras = g; garden.add(g);
    const mats = [];
    const mk = (pair, colour = '#ffffff', rough = .9) => { const m = new THREE.MeshStandardMaterial({color: colour, map: pair?.map || null, normalMap: pair?.normalMap || null, roughness: rough}); mats.push(m); return m; };
    const gravel = mk(tex.gravel()), paving = mk(tex.paving());
    const {x0, x1} = e;
    const gv = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0 + 1.6, s.depth + 1.8), gravel);
    gv.rotation.x = -Math.PI / 2; gv.position.set((x0 + x1) / 2, .005, .1); gv.receiveShadow = true; gv.userData.ground = true; gv.renderOrder = -1;
    const uv = gv.geometry.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (x1 - x0 + 1.6), uv.getY(i) * (s.depth + 1.8));
    g.add(gv);
    // Stepping stones from the main door into the garden.
    const door = (s.openings || []).find(o => o.wall === 'front' && PRODUCTS[o.code]?.kind === 'door');
    const px = door ? door.at : 0;
    for (let i = 0; i < 4; i++) {
      const slab = new THREE.Mesh(new THREE.BoxGeometry(.9, .04, .6), paving);
      slab.position.set(px + Math.sin(i * 1.3) * .08, .02, s.depth / 2 + .95 + i * .82); slab.receiveShadow = slab.castShadow = true; slab.userData.ground = true;
      const u2 = slab.geometry.attributes.uv; for (let k = 0; k < u2.count; k++) u2.setXY(k, u2.getX(k) * .9, u2.getY(k) * .6);
      g.add(slab);
    }
    const leafA = new THREE.MeshStandardMaterial({color: '#4d6e3f', roughness: .9}), leafB = new THREE.MeshStandardMaterial({color: '#6c8a4f', roughness: .9}), hedge = new THREE.MeshStandardMaterial({color: '#3f5a35', roughness: .95});
    mats.push(leafA, leafB, hedge);
    const rand = (() => { let v = 7; return () => (v = (v * 16807) % 2147483647) / 2147483647; })();
    const shrub = (x, z, s0) => {
      const sg = new THREE.Group(); sg.position.set(x, 0, z); g.add(sg);
      for (let i = 0; i < 7; i++) {
        const m = new THREE.Mesh(new THREE.IcosahedronGeometry(.28 * s0 * (.7 + rand() * .5), 1), i % 2 ? leafA : leafB);
        m.position.set((rand() - .5) * .5 * s0, .25 * s0 + rand() * .35 * s0, (rand() - .5) * .5 * s0);
        m.castShadow = m.receiveShadow = true; sg.add(m);
      }
    };
    shrub(x0 - 1.1, -s.depth / 2 + .3, 1.2); shrub(x1 + 1.1, -s.depth / 2 + .6, 1); shrub(x0 - .9, s.depth / 2 + .2, .8);
    const hz = -s.depth / 2 - 3.4;
    for (let x = x0 - 4; x < x1 + 4; x += .9) {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(.75 + rand() * .2, 1), Math.round(x * 10) % 2 ? hedge : leafA);
      m.scale.set(1, 1.35 + rand() * .2, .8); m.position.set(x, .85, hz + (rand() - .5) * .3);
      m.castShadow = m.receiveShadow = true; g.add(m);
    }
    g.userData.mats = mats;
  }

  // Safe tier: Lambert instead of physically based materials (colour and texture kept).
  const simpler = new WeakMap();
  function simplify(root, owned) {
    const swap = m => {
      if (!m?.isMeshStandardMaterial) return m;
      let l = simpler.get(m);
      if (!l) {
        l = new THREE.MeshLambertMaterial({color: m.color, map: m.map, emissive: m.emissive, emissiveIntensity: m.emissiveIntensity, transparent: m.transparent, opacity: m.opacity, side: m.side, depthWrite: m.depthWrite});
        l.name = m.name; l.userData = m.userData;
        simpler.set(m, l); owned?.push(l);
      }
      return l;
    };
    root.traverse(o => { if (o.isMesh) o.material = Array.isArray(o.material) ? o.material.map(swap) : swap(o.material); });
  }
  // SVG has no textures: give each textured material the colour its texture would have had.
  function flatColours(root) {
    root.traverse(o => {
      for (const m of o.material ? [].concat(o.material) : []) {
        if (m.userData.flatColour || !m.map?.userData.hex) continue;
        m.color.multiply(new THREE.Color(m.map.userData.hex));
        m.userData.flatColour = true;
      }
    });
  }

  function extentsOf(s) {
    const e = envelope(s);
    return {x0: e.roofX0, x1: e.roofX1, z0: e.roofZ0, z1: e.roofZ1 + .2, top: e.ridge + .05, e};
  }

  function rigLights(list) {
    for (const l of lightRig) { scene.remove(l); l.dispose?.(); }
    lightRig = [];
    if (!night) return;
    for (const l of list.filter(l => l.kind === 'interior').slice(0, 4)) {
      const p = new THREE.PointLight('#ffd8a8', 5, 7, 1.6); p.position.copy(l.position); scene.add(p); lightRig.push(p);
    }
    for (const l of list.filter(l => l.kind !== 'interior').slice(0, 4)) {
      const s = new THREE.SpotLight('#ffcf94', 6, 4.5, .75, .65, 1.4);
      s.position.copy(l.position); s.target.position.copy(l.position).add(new THREE.Vector3(0, -2, .25));
      scene.add(s, s.target); lightRig.push(s, s.target);
    }
  }
  function applyLighting() {
    hemi.intensity = night ? .16 : svg ? 1.25 : 1.0;
    sun.intensity = night ? .18 : svg ? .55 : 2.6;
    fill.intensity = night ? .05 : svg ? .12 : .55;
    setEnvironmentIntensity(night ? .07 : .5);
    renderer.toneMappingExposure = night ? 1.2 : .98;
    building?.group.traverse(o => { if (o.isMesh && o.userData.tags?.includes('lamp')) for (const m of [].concat(o.material)) if (m.emissive) m.emissiveIntensity = night ? 4 : .35; });
    rigLights(building?.lights || []);
  }
  function fitShadow(ext) {
    const r = Math.max(ext.x1 - ext.x0, ext.z1 - ext.z0) / 2 + 2.5;
    const cam = sun.shadow.camera;
    cam.left = -r; cam.right = r; cam.top = r; cam.bottom = -r; cam.near = 1; cam.far = 40;
    cam.updateProjectionMatrix();
    sun.target.position.set((ext.x0 + ext.x1) / 2, 0, (ext.z0 + ext.z1) / 2);
  }

  // ---- Views ---------------------------------------------------------------------------
  const roomBox = () => {
    const x = extentsOf(state);
    return new THREE.Box3(new THREE.Vector3(x.x0 - .1, 0, x.z0 - .1), new THREE.Vector3(x.x1 + .1, x.top, x.z1));
  };
  function fitDistance(boxIn, dir, fov, aspect, margin = 1.1) {
    const c = boxIn.getCenter(new THREE.Vector3());
    const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), dir).normalize();
    if (right.lengthSq() < .1) right.set(1, 0, 0);
    const up = new THREE.Vector3().crossVectors(dir, right).normalize();
    const tanY = Math.tan(THREE.MathUtils.degToRad(fov / 2)), tanX = tanY * aspect;
    let dist = 0;
    for (const x of [boxIn.min.x, boxIn.max.x]) for (const y of [boxIn.min.y, boxIn.max.y]) for (const z of [boxIn.min.z, boxIn.max.z]) {
      const p = new THREE.Vector3(x, y, z).sub(c);
      const near = p.dot(dir);
      dist = Math.max(dist, near + Math.abs(p.dot(right)) / tanX * margin, near + Math.abs(p.dot(up)) / tanY * margin);
    }
    return dist;
  }
  function insideViewpoint(lookAt = null) {
    const e = envelope(state), t = Math.max(e.t, GEOMETRY[state.range].post || 0);
    const iw = state.width - 2 * t, id = state.depth - 2 * t;
    const door = (state.openings || []).find(o => o.wall === 'front' && PRODUCTS[o.code]?.kind === 'door');
    const x = THREE.MathUtils.clamp(door ? door.at : 0, -iw / 2 + .45, iw / 2 - .45);
    const pos = new THREE.Vector3(x, e.y0 + 1.6, Math.max(-id / 2 + .35, id / 2 - .3));
    const at = lookAt || new THREE.Vector3(-x * .35, e.y0 + 1.0, -id / 2);
    return {pos, at};
  }
  function poseFor(name, opts = {}) {
    const aspect = size.w / size.h;
    if (name === 'inside') {
      const {pos, at} = insideViewpoint(opts.lookAt);
      const dir = at.clone().sub(pos).normalize();
      return {view: 'inside', fov: aspect < .9 ? 86 : 74, position: pos, target: pos.clone().addScaledVector(dir, .02)};
    }
    if (name === 'plan') {
      const b = roomBox(); b.max.y = 1; b.expandByVector(new THREE.Vector3(.7, 0, .7));
      const c = b.getCenter(new THREE.Vector3());
      const dist = fitDistance(b, new THREE.Vector3(0, 1, .0001).normalize(), 30, aspect, 1.15);
      return {view: 'plan', fov: 30, position: new THREE.Vector3(c.x, dist + 1, c.z + .001), target: new THREE.Vector3(c.x, 0, c.z)};
    }
    const dir = (opts.dir || new THREE.Vector3(-.62, .32, 1)).clone().normalize();
    const b = opts.box || roomBox();
    const c = b.getCenter(new THREE.Vector3());
    if (!opts.box) c.y = Math.min(c.y, 1.3);
    const fov = 35;
    const dist = Math.max(opts.minDistance || 0, fitDistance(b, dir, fov, aspect, opts.margin || (opts.box ? 1.1 : 1.18)));
    return {view: 'outside', fov, position: c.clone().addScaledVector(dir, dist), target: c};
  }
  function configureControls(name) {
    controls.enableRotate = name !== 'plan';
    controls.enablePan = name === 'plan';
    controls.screenSpacePanning = true;
    controls.enableZoom = true;
    if (name === 'outside') {
      controls.minPolarAngle = .12; controls.maxPolarAngle = 1.5;
      const x = extentsOf(state);
      controls.minDistance = 2.2; controls.maxDistance = Math.max(x.x1 - x.x0, x.z1 - x.z0) * 3 + 14;
      controls.rotateSpeed = .6;
      controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
      controls.touches.ONE = THREE.TOUCH.ROTATE; controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
    } else if (name === 'inside') {
      // Inside, zooming narrows the lens instead of walking through walls (see zoom()).
      controls.enableZoom = false;
      controls.minPolarAngle = .5; controls.maxPolarAngle = 2.4;
      controls.minDistance = 0; controls.maxDistance = .05;
      controls.rotateSpeed = -.35;
      controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
      controls.touches.ONE = THREE.TOUCH.ROTATE;
    } else {
      controls.minDistance = 2; controls.maxDistance = 80;
      controls.mouseButtons.LEFT = THREE.MOUSE.PAN;
      controls.touches.ONE = THREE.TOUCH.PAN; controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
    }
  }
  function applyViewVisibility() {
    if (!building) return;
    const hideRoof = view === 'plan';
    building.group.traverse(o => {
      const t = o.userData.tags;
      if (!t || !o.isMesh) return;
      if (t.includes('roof') || t.includes('ceiling') || t.includes('timbers') || (t.includes('lighting') && !t.includes('wallLights'))) o.visible = !hideRoof;
    });
    // Inside: walls between the eye and the room would hide it at wide angles, so they stay.
    renderOverlay();
  }
  function moveTo(pose, animate = true) {
    const changed = pose.view !== view;
    view = pose.view;
    configureControls(view);
    applyViewVisibility();
    const from = {position: camera.position.clone(), target: controls.target.clone(), fov: camera.fov};
    if (!animate || reducedMotion.matches || changed && (view === 'inside' || from.position.distanceTo(pose.position) > 60)) {
      camera.position.copy(pose.position); controls.target.copy(pose.target); camera.fov = pose.fov; camera.updateProjectionMatrix();
      anim = null; controls.update(); request();
    } else {
      anim = {start: performance.now(), duration: changed ? 700 : 650, from, to: pose};
      request();
    }
    if (changed) onViewChange(view);
  }
  function step(now) {
    if (!anim) return false;
    const t = Math.min(1, (now - anim.start) / anim.duration), k = ease(t);
    const target = anim.from.target.clone().lerp(anim.to.target, k);
    const a = new THREE.Spherical().setFromVector3(anim.from.position.clone().sub(anim.from.target));
    const b = new THREE.Spherical().setFromVector3(anim.to.position.clone().sub(anim.to.target));
    let dTheta = b.theta - a.theta;
    if (dTheta > Math.PI) dTheta -= 2 * Math.PI; if (dTheta < -Math.PI) dTheta += 2 * Math.PI;
    const s = new THREE.Spherical(a.radius + (b.radius - a.radius) * k, a.phi + (b.phi - a.phi) * k, a.theta + dTheta * k);
    camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(s));
    controls.target.copy(target);
    camera.fov = anim.from.fov + (anim.to.fov - anim.from.fov) * k;
    camera.updateProjectionMatrix();
    if (t === 1) anim = null;
    return true;
  }

  // ---- Highlight: a glowing copy of the changed part plus its edges -----------------------
  // OutlinePass drew nothing under some GPUs and SwiftShader, so the highlight is geometry:
  // translucent copies of the part's meshes (polygon offset towards the camera) and their edges.
  const glowMat = new THREE.MeshBasicMaterial({color: SIGNAL, transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2});
  const edgeMat = new THREE.LineBasicMaterial({color: SIGNAL, transparent: true, opacity: 0, depthTest: true});
  glowMat.name = 'hidden'; // the z-fighting check skips it
  function meshesTagged(tags) {
    const list = [];
    building?.group.traverse(o => {
      if (o.isMesh && o.visible && o.userData.tags && tags.some(t => o.userData.tags.includes(t)) && !(Array.isArray(o.material) ? o.material : [o.material]).some(m => m.name === 'glass')) list.push(o);
    });
    return list;
  }
  function boxOf(meshes) { const b = new THREE.Box3(); for (const m of meshes) b.expandByObject(m); return b; }
  function setHighlight(meshes) {
    if (highlight) { scene.remove(highlight); highlight.traverse(o => { if (o.isLineSegments) o.geometry.dispose(); }); highlight = null; }
    if (!meshes.length || svg) return;
    highlight = new THREE.Group(); highlight.userData.highlight = true;
    for (const m of meshes.slice(0, 400)) {
      m.updateWorldMatrix(true, false);
      const g = new THREE.Mesh(m.geometry, glowMat); g.matrixAutoUpdate = false; g.matrix.copy(m.matrixWorld); g.renderOrder = 5;
      g.userData.tags = ['highlight'];
      highlight.add(g);
      if (meshes.length < 120) {
        const l = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry, 30), edgeMat); l.matrixAutoUpdate = false; l.matrix.copy(m.matrixWorld); l.renderOrder = 6;
        highlight.add(l);
      }
    }
    scene.add(highlight);
  }

  // ---- Render loop -----------------------------------------------------------------------
  function request() { if (!disposed && !lost && !frame) frame = requestAnimationFrame(render); }
  let frames = 0, lastError = null, lost = false, lastFrame = 0, slowFrames = 0;
  function render(now) {
    frame = 0; frames++;
    if (disposed || lost) return;
    adapt(now);
    const moving = step(now);
    const damped = controls.update();
    let pulsing = false;
    if (pulse) {
      // Time-based, but never shorter than ~40 drawn frames, so slow devices still see it.
      pulse.frames = (pulse.frames || 0) + 1;
      const t = Math.min(Math.max(0, now - pulse.start) / 1000, pulse.frames / 13);
      const strength = t < 1.6 ? .35 + .3 * Math.abs(Math.sin(t * Math.PI * 1.25)) : Math.max(persistentTags.length ? .18 : 0, .5 * (1 - (t - 1.6) / 1.4));
      glowMat.opacity = strength * .55; edgeMat.opacity = Math.min(1, strength * 1.6);
      if (t > 3) { pulse = null; if (!persistentTags.length) setHighlight([]); }
      pulsing = true;
    } else if (persistentTags.length) { glowMat.opacity = .12; edgeMat.opacity = .55; }
    try { renderer.render(scene, camera); } catch (err) { lastError = String(err); }
    renderOverlay();
    if (!verified && !checked) verifyFrame();
    if (moving || damped || pulsing) request();
  }

  // A context that renders nothing is worse than none. Read back three points of the frame
  // just drawn (sky, building, ground are never near black); black three frames running means
  // the GPU drew nothing, and the page steps down.
  let checked = false, blankFrames = 0;
  const samples = [], glErrors = [];
  function verifyFrame() {
    let blank = false;
    if (!svg && !broken) {
      try {
        const gl = renderer.getContext(), b = renderer.getDrawingBufferSize(new THREE.Vector2()), px = new Uint8Array(4);
        const read = [];
        for (const fy of [.92, .5, .08]) { gl.readPixels(b.x >> 1, Math.round(b.y * fy), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); read.push([px[0], px[1], px[2]]); }
        samples.push(read);
        blank = read.every(([r, g, b2]) => r + g + b2 < 12);
        const err = gl.getError();
        if (err) glErrors.push(err);
      } catch (err) { samples.push(String(err)); }
    }
    if (blank && ++blankFrames < 3) { request(); return; }
    if (blank) broken = 'blank';
    checked = true;
    setTimeout(() => {
      if (disposed || lost) return;
      if (broken) onBroken(broken);
      else { verified = true; onVerified(); }
    });
  }
  // Slow GPUs: when continuous frames average under ~20 a second, step the pixel ratio down.
  function adapt(now) {
    const dt = now - lastFrame;
    lastFrame = now;
    if (!(dt > 0 && dt < 250)) return;
    slowFrames = dt > 50 ? slowFrames + 1 : Math.max(0, slowFrames - 2);
    if (slowFrames < 20 || ratio <= 1) return;
    slowFrames = 0;
    ratio = Math.max(1, Math.round((ratio - .25) * 4) / 4);
    renderer.setPixelRatio(ratio);
    size = {w: 0, h: 0};
    resize();
  }
  controls.addEventListener('change', request);
  controls.addEventListener('start', () => { anim = null; });

  // ---- Overlay: dimensions in plan view ---------------------------------------------------
  let showDims = false;
  function project(v) {
    const p = v.clone().project(camera);
    return [(p.x + 1) / 2 * size.w, (1 - p.y) / 2 * size.h, p.z];
  }
  const fmt = m => `${(m * 1000).toFixed(0)}`;
  function renderOverlay() {
    if (!state || (!showDims && view !== 'plan')) { if (overlay.childNodes.length) overlay.innerHTML = ''; return; }
    const w = state.width, d = state.depth, y = view === 'plan' ? .05 : .02;
    const lines = [];
    const dim = (a, b, label, offset, cls = '') => {
      const [x1, y1, z1] = project(a.clone().add(offset)), [x2, y2, z2] = project(b.clone().add(offset));
      if (z1 > 1 || z2 > 1) return;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, len = Math.max(48, label.length * 7.2 + 18);
      lines.push(`<g class="dim ${cls}"><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><line class="tick" x1="${x1}" y1="${y1 - 6}" x2="${x1}" y2="${y1 + 6}"/><line class="tick" x1="${x2}" y1="${y2 - 6}" x2="${x2}" y2="${y2 + 6}"/><g transform="translate(${mx} ${my})"><rect x="${-len / 2}" y="-11" width="${len}" height="22" rx="11"/><text text-anchor="middle" dy="4">${label}</text></g></g>`);
    };
    const e = envelope(state);
    dim(new THREE.Vector3(-w / 2, y, d / 2), new THREE.Vector3(w / 2, y, d / 2), `${fmt(w)} mm`, new THREE.Vector3(0, 0, view === 'plan' ? e.over + .55 : .6));
    dim(new THREE.Vector3(w / 2, y, d / 2), new THREE.Vector3(w / 2, y, -d / 2), `${fmt(d)} mm`, new THREE.Vector3((view === 'plan' ? e.over + .55 : .6) + (e.canopy.side === 'right' ? e.canopy.width : 0), 0, 0));
    if (view === 'plan') {
      // Every door and window, measured along its wall.
      for (const name of ['front', 'back', 'left', 'right']) {
        for (const r of openingRects(state, name)) {
          const off = .28, u0 = r.u0, u1 = r.u1;
          let a, b, o;
          if (name === 'front') { a = new THREE.Vector3(u0, y, d / 2); b = new THREE.Vector3(u1, y, d / 2); o = new THREE.Vector3(0, 0, off); }
          else if (name === 'back') { a = new THREE.Vector3(-u1, y, -d / 2); b = new THREE.Vector3(-u0, y, -d / 2); o = new THREE.Vector3(0, 0, -off); }
          else if (name === 'left') { a = new THREE.Vector3(-w / 2, y, u0); b = new THREE.Vector3(-w / 2, y, u1); o = new THREE.Vector3(-off, 0, 0); }
          else { a = new THREE.Vector3(w / 2, y, -u1); b = new THREE.Vector3(w / 2, y, -u0); o = new THREE.Vector3(off, 0, 0); }
          dim(a, b, `${r.p.w}`, o, 'small');
        }
      }
      if (e.canopy.side !== 'none') {
        const cx0 = e.canopy.side === 'left' ? e.x0 : w / 2, cx1 = e.canopy.side === 'left' ? -w / 2 : e.x1;
        dim(new THREE.Vector3(cx0, y, d / 2), new THREE.Vector3(cx1, y, d / 2), `canopy ${fmt(e.canopy.width)}`, new THREE.Vector3(0, 0, e.over + .55), 'small');
      }
      const names = [['Front', (e.x0 + e.x1) / 2, d / 2 + e.over + 1.15], ['Back', 0, -d / 2 - e.over - .4], ['Left', -w / 2 - e.over - .5 - (e.canopy.side === 'left' ? e.canopy.width : 0), 0], ['Right', w / 2 + e.over + .5 + (e.canopy.side === 'right' ? e.canopy.width : 0), -d * .3]];
      for (const [n, x, z] of names) {
        const [px, py] = project(new THREE.Vector3(x, 0, z));
        lines.push(`<text class="wall-name" x="${px}" y="${py}" text-anchor="middle">${n}</text>`);
      }
    }
    overlay.setAttribute('viewBox', `0 0 ${size.w} ${size.h}`);
    overlay.innerHTML = lines.join('');
  }

  // ---- Picking ---------------------------------------------------------------------------
  const ray = new THREE.Raycaster();
  let downAt = null;
  renderer.domElement.addEventListener('pointerdown', e => { downAt = [e.clientX, e.clientY]; });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6 || !building) return;
    const r = renderer.domElement.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera);
    const hit = ray.intersectObject(building.group, true).find(h => h.object.visible);
    const tag = hit?.object.userData.tags?.find(t => t.startsWith('opening:'));
    if (tag) onPick({kind: 'opening', id: tag.slice(8)});
    else if (hit) {
      const part = ['roof', 'floor', 'canopy', 'walls'].find(t => hit.object.userData.tags?.includes(t));
      if (part) onPick({kind: 'part', part});
    }
  });

  // ---- Size and context loss -------------------------------------------------------------
  function resize() {
    const rect = container.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    if (Math.abs(rect.width - size.w) < .5 && Math.abs(rect.height - size.h) < .5) return;
    size = {w: rect.width, h: rect.height};
    renderer.setSize(size.w, size.h, false);
    camera.aspect = size.w / size.h; camera.updateProjectionMatrix();
    if (state) moveTo(poseFor(view), false);
    request();
  }
  const ro = new ResizeObserver(resize);
  undo.push(() => ro.disconnect());
  ro.observe(container);
  renderer.domElement.addEventListener('webglcontextlost', e => {
    e.preventDefault();
    if (disposed || lost) return;
    lost = true;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    onLost();
  });

  // ---- Public API ------------------------------------------------------------------------
  let designKey = '';
  const api = {
    update(next, {refit = false} = {}) {
      if (disposed) return;
      const key = JSON.stringify(next);
      if (key === designKey && !refit) return;
      designKey = key;
      const first = !state;
      const sizeChanged = state && (state.width !== next.width || state.depth !== next.depth || state.range !== next.range || state.roof !== next.roof || JSON.stringify(state.canopy) !== JSON.stringify(next.canopy));
      tex.begin();
      let built;
      try { built = buildBuilding(next, tex); } catch (err) {
        lastError = String(err); designKey = '';
        if (first) throw err;
        console.error(err);
        return;
      }
      state = next;
      if (building) { scene.remove(building.group); disposeObject(building.group); building.materials.forEach(m => m.dispose()); }
      building = built;
      scene.add(building.group);
      const ext = extentsOf(state);
      landscaping(state, ext.e);
      tex.prune(T.cache);
      if (svg) { flatColours(building.group); flatColours(groundExtras); flatColours(lawn); }
      if (simple) { simplify(building.group, building.materials); simplify(groundExtras, groundExtras.userData.mats); simplify(lawn); }
      fitShadow(ext);
      applyLighting();
      if (pulse) setHighlight(meshesTagged(pulse.tags));
      else if (persistentTags.length) setHighlight(meshesTagged(persistentTags));
      else setHighlight([]);
      applyViewVisibility();
      if (first) { resize(); moveTo(poseFor('outside'), false); }
      else if (refit || sizeChanged) moveTo(poseFor(view), true);
      request();
    },
    setView(name, {animate = true} = {}) { if (state) moveTo(poseFor(name), animate); },
    get view() { return view; },
    /**
     * Turns to a part and highlights it. spec: {tags, view?, dir?, lookAt?, persist?}
     * Outside parts are framed from `dir`; inside parts turn the walk-in camera to face them.
     */
    focus(input) {
      if (!state || !building) return;
      const d = input.dir;
      const spec = {...input, dir: d ? (Array.isArray(d) ? new THREE.Vector3(...d) : new THREE.Vector3(d.x, d.y, d.z)) : undefined};
      const tags = spec.tags || [];
      const want = spec.view || 'outside';
      if (want === 'inside') {
        const meshes = meshesTagged(tags);
        const at = meshes.length ? boxOf(meshes).getCenter(new THREE.Vector3()) : null;
        if (at && spec.lookDown) at.y = envelope(state).y0;
        moveTo(poseFor('inside', {lookAt: at}), true);
      } else if (want === 'plan') moveTo(poseFor('plan'), true);
      else {
        const meshes = tags.length ? meshesTagged(tags) : [];
        let b = meshes.length ? boxOf(meshes) : roomBox();
        if (spec.whole || !meshes.length) b = roomBox();
        else {
          const s0 = b.getSize(new THREE.Vector3()), pad = spec.pad ?? .5;
          b = b.clone().expandByVector(new THREE.Vector3(Math.max(pad, s0.x * .2), Math.max(pad * .7, .35), Math.max(pad, s0.z * .2)));
          b.min.y = Math.max(0, b.min.y);
        }
        moveTo(poseFor('outside', {dir: spec.dir, box: b, minDistance: spec.minDistance || 3.2}), true);
      }
      if (spec.highlight !== false && tags.length) {
        pulse = {tags, start: performance.now() + (reducedMotion.matches ? 0 : 250)};
        setHighlight(meshesTagged(tags));
      }
      request();
    },
    /** Keeps a part highlighted (the selected door or window) until called with nothing. */
    select(tags) {
      persistentTags = tags || [];
      if (!pulse) setHighlight(persistentTags.length ? meshesTagged(persistentTags) : []);
      request();
    },
    zoom(direction) {
      if (view === 'inside') { camera.fov = THREE.MathUtils.clamp(camera.fov - direction * 8, 38, 90); camera.updateProjectionMatrix(); request(); return; }
      const offset = camera.position.clone().sub(controls.target);
      const dist = THREE.MathUtils.clamp(offset.length() * (direction > 0 ? .8 : 1.25), controls.minDistance, controls.maxDistance);
      const to = {view, fov: camera.fov, position: controls.target.clone().add(offset.setLength(dist)), target: controls.target.clone()};
      anim = reducedMotion.matches ? null : {start: performance.now(), duration: 260, from: {position: camera.position.clone(), target: controls.target.clone(), fov: camera.fov}, to};
      if (!anim) camera.position.copy(to.position);
      request();
    },
    reset() { moveTo(poseFor(view), true); },
    setNight(on) { night = Boolean(on); applyLighting(); request(); },
    setDimensions(on) { showDims = Boolean(on); renderOverlay(); request(); },
    /**
     * Renders named views at a fixed size for the PDF; the visible preview is untouched.
     * front/back/left/right are square-on elevations, hero a three-quarter view.
     */
    capture(names = ['hero', 'front', 'back', 'left', 'right', 'inside', 'plan'], {width = 1800, height = 1125} = {}) {
      if (!state || lost || svg || renderer.getContext().isContextLost()) return {};
      if (width > T.capture) { height = Math.round(height * T.capture / width); width = T.capture; }
      const cam = new THREE.PerspectiveCamera(35, width / height, .05, 200);
      const saved = {night, view, size: renderer.getSize(new THREE.Vector2()), ratio: renderer.getPixelRatio()};
      const out = {}, prevSize = size, hl = highlight;
      if (highlight) highlight.visible = false;
      try {
        renderer.setPixelRatio(1);
        renderer.setSize(width, height, false);
        size = {w: width, h: height};
        const dirs = {hero: [-.62, .26, 1], front: [0, .1, 1], back: [0, .1, -1], left: [-1, .1, 0], right: [1, .1, 0], aerial: [-.5, 1.1, .8]};
        for (const name of names) {
          const isDusk = name === 'dusk';
          if (night !== isDusk) { night = isDusk; applyLighting(); }
          let pose;
          if (dirs[name]) pose = poseFor('outside', {dir: new THREE.Vector3(...dirs[name]), margin: 1.08});
          else if (name === 'dusk') pose = poseFor('outside', {dir: new THREE.Vector3(-.62, .22, 1), margin: 1.08});
          else if (name === 'inside') pose = poseFor('inside');
          else pose = poseFor('plan');
          view = pose.view;
          applyViewVisibility();
          cam.fov = pose.fov; cam.aspect = width / height; cam.updateProjectionMatrix();
          cam.position.copy(pose.position); cam.lookAt(pose.target);
          renderer.render(scene, cam);
          out[name] = renderer.domElement.toDataURL('image/jpeg', .9);
        }
      } catch { /* A missing view leaves its page with the drawn plan instead. */ }
      finally {
        size = prevSize;
        if (night !== saved.night) { night = saved.night; applyLighting(); }
        view = saved.view; applyViewVisibility();
        renderer.setPixelRatio(saved.ratio);
        renderer.setSize(saved.size.x, saved.size.y, false);
        if (hl) hl.visible = true;
        if (!lost) renderer.render(scene, camera);
      }
      return out;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      if (frame) cancelAnimationFrame(frame);
      ro.disconnect(); controls.dispose();
      if (building) { disposeObject(building.group); building.materials.forEach(m => m.dispose()); }
      if (groundExtras) disposeObject(groundExtras);
      setHighlight([]);
      tex.dispose(); envMap?.dispose(); glowMat.dispose(); edgeMat.dispose(); lawnMat.dispose();
      renderer.dispose();
      // Hand the context back now: browsers cap live contexts, and iOS counts their memory.
      if (!lost && renderer.isWebGLRenderer) renderer.forceContextLoss();
      renderer.domElement.remove(); overlay.remove();
    },
    quality: () => ({tier, ratio, lost, broken, ...tex.stats(), webgl: svg ? 0 : renderer.capabilities.isWebGL2 === false ? 1 : 2, svg: svg ? renderer.info : undefined}),
    diagnostics() {
      const d = {tier, gpu: api.gpu(), ratio, frames, verified, broken, shaderErrors: shaderErrors.slice(0, 3), glErrors: glErrors.slice(0, 5), samples: samples.slice(0, 3), lastError, textures: tex.stats()};
      if (!svg) {
        try {
          const gl = renderer.getContext(), a = gl.getContextAttributes() || {};
          d.webgl = renderer.capabilities.isWebGL2 === false ? 1 : 2;
          d.context = {antialias: a.antialias, lost: gl.isContextLost()};
          d.maxTexture = gl.getParameter(gl.MAX_TEXTURE_SIZE);
          d.buffer = renderer.getDrawingBufferSize(new THREE.Vector2()).toArray();
        } catch (err) { d.contextError = String(err); }
      } else d.svg = renderer.info;
      return d;
    },
    gpu() {
      if (svg) return 'none (SVG)';
      try {
        const gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info');
        return String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER));
      } catch { return 'unknown'; }
    },
    /** QA only: what the z-fighting and option checks need. */
    _debug: () => ({scene, camera, controls, room: building, view, state, highlight, pulse, anim, frames, lastError, glowOpacity: glowMat.opacity, THREE: {Raycaster: THREE.Raycaster, Vector3: THREE.Vector3, DoubleSide: THREE.DoubleSide}})
  };
  return api;
}
