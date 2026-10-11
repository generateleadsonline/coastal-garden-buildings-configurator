import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// A self-contained product preview. Geometry is rebuilt only when the configuration
// changes; the render loop sleeps once camera damping and transitions have settled.
const DEFAULT_STATE = {
  width: 4, depth: 3, roof: 'flat', system: 'log', timber: 'natural',
  glazing: 'french', window: 'right', canopy: 0, insulated: false, use: 'office',
};
const FINISHES = {
  natural: { base: '#ba9062', light: '#d2ab79', dark: '#977346' },
  sage: { base: '#89978b', light: '#a4afa1', dark: '#6c7d6e' },
  charcoal: { base: '#515958', light: '#69716b', dark: '#39413f' },
  stone: { base: '#bbb7a8', light: '#d0ccbc', dark: '#959285' },
};

function seededRandom(seed = 17) {
  let value = seed;
  return () => { value = (value * 16807) % 2147483647; return (value - 1) / 2147483646; };
}

function woodTexture(finish) {
  const colors = FINISHES[finish] || FINISHES.natural;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const random = seededRandom();
  ctx.fillStyle = colors.base;
  ctx.fillRect(0, 0, 512, 512);
  for (let board = 0; board < 8; board += 1) {
    const y = board * 64;
    ctx.globalAlpha = 0.12 + random() * 0.13;
    ctx.fillStyle = board % 3 ? colors.light : colors.dark;
    ctx.fillRect(0, y, 512, 64);
    for (let grain = 0; grain < 40; grain += 1) {
      const grainY = y + random() * 62;
      ctx.strokeStyle = random() > 0.48 ? colors.light : colors.dark;
      ctx.globalAlpha = 0.06 + random() * 0.11;
      ctx.lineWidth = 0.5 + random();
      ctx.beginPath();
      ctx.moveTo(0, grainY);
      ctx.bezierCurveTo(130, grainY + random() * 7, 320, grainY - random() * 6, 512, grainY + random() * 3);
      ctx.stroke();
    }
    ctx.globalAlpha = 0.27;
    ctx.fillStyle = colors.dark;
    ctx.fillRect(0, y, 512, 1.7);
    ctx.globalAlpha = 0.23;
    ctx.fillStyle = colors.light;
    ctx.fillRect(0, y + 2, 512, 1);
  }
  ctx.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}

function lawnTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const random = seededRandom(94);
  ctx.fillStyle = '#b1b8a1';
  ctx.fillRect(0, 0, 256, 256);
  for (let index = 0; index < 7000; index += 1) {
    ctx.globalAlpha = 0.035 + random() * 0.1;
    ctx.fillStyle = random() > 0.5 ? '#e0e1c7' : '#718370';
    ctx.fillRect(random() * 256, random() * 256, 0.8, 2 + random() * 3);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 12);
  return texture;
}

function labelTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 384;
  canvas.height = 112;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255,255,250,0.95)';
  ctx.beginPath();
  ctx.roundRect(8, 8, 368, 96, 22);
  ctx.fill();
  ctx.strokeStyle = 'rgba(100,112,100,0.2)';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = '#314a41';
  ctx.font = '600 44px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 192, 57);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function disposeGroup(group) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  group.traverse((object) => {
    if (object.geometry) geometries.add(object.geometry);
    if (object.material) {
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        materials.add(material);
        // Only geometry-specific textures belong to the building. Source textures
        // are cached on the preview and disposed when the preview itself closes.
        if (material.map?.userData?.local) textures.add(material.map);
      }
    }
  });
  geometries.forEach((geometry) => geometry.dispose());
  materials.forEach((material) => material.dispose());
  textures.forEach((texture) => texture.dispose());
}

function normaliseState(input) {
  const state = { ...DEFAULT_STATE, ...input };
  state.width = Math.min(12, Math.max(2, Number(state.width) || 4));
  state.depth = Math.min(10, Math.max(2, Number(state.depth) || 3));
  state.canopy = Math.min(4, Math.max(0, Number(state.canopy) || 0));
  if (!FINISHES[state.timber]) state.timber = 'natural';
  return state;
}

function fallbackPreview(canvas, initialState) {
  let state = initialState;
  const draw = () => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = Math.max(600, canvas.clientWidth);
    canvas.height = Math.max(420, canvas.clientHeight);
    const { width: w, height: h } = canvas;
    ctx.fillStyle = '#edf0e9'; ctx.fillRect(0, 0, w, h);
    const scale = Math.min((w - 160) / state.width, (h - 180) / state.depth);
    const x = (w - state.width * scale) / 2;
    const y = (h - state.depth * scale) / 2 - 12;
    ctx.fillStyle = FINISHES[state.timber].base;
    ctx.fillRect(x, y, state.width * scale, state.depth * scale);
    ctx.fillStyle = '#e4dac7';
    ctx.fillRect(x + 10, y + 10, state.width * scale - 20, state.depth * scale - 20);
    ctx.strokeStyle = '#324b43'; ctx.lineWidth = 4;
    ctx.strokeRect(x, y, state.width * scale, state.depth * scale);
    ctx.fillStyle = '#91adb0';
    ctx.fillRect(w / 2 - scale * 0.8, y + state.depth * scale - 4, scale * 1.6, 8);
    ctx.fillStyle = '#324b43'; ctx.textAlign = 'center'; ctx.font = '600 20px system-ui';
    ctx.fillText(`${state.width.toFixed(1)} m × ${state.depth.toFixed(1)} m`, w / 2, h - 62);
    ctx.font = '14px system-ui'; ctx.fillText('Your garden room · plan preview', w / 2, h - 32);
  };
  draw();
  const resize = () => draw();
  window.addEventListener('resize', resize);
  queueMicrotask(() => canvas.dispatchEvent(new CustomEvent('preview:error', {
    bubbles: true, detail: { message: '3D is unavailable on this device. A plan preview is available.' },
  })));
  return {
    update(next) { state = normaliseState(next); draw(); },
    setView() {}, reset() { draw(); },
    capture() { try { return canvas.toDataURL('image/png'); } catch { return null; } },
    captureProposal() { return { hero: null, detail: null }; },
    dispose() { window.removeEventListener('resize', resize); },
  };
}

export function initPreview(canvas) {
  let state = normaliseState(DEFAULT_STATE);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, preserveDrawingBuffer: true });
  } catch {
    return fallbackPreview(canvas, state);
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor('#e8ede5');
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#e8ede5');
  scene.fog = new THREE.Fog('#e8ede5', 17, 37);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.05, 100);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.085;
  controls.enablePan = false;
  controls.minPolarAngle = 0.14;
  controls.maxPolarAngle = Math.PI / 2 - 0.055;
  controls.minDistance = 4.8;
  controls.maxDistance = 25;
  controls.zoomSpeed = 0.75;
  controls.rotateSpeed = 0.65;
  controls.target.set(0, 1.12, 0);
  const hemisphere = new THREE.HemisphereLight('#fcfaf2', '#858f78', 2.3);
  scene.add(hemisphere);
  const sun = new THREE.DirectionalLight('#fff4dc', 3.4);
  sun.position.set(-5, 10, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -10;
  sun.shadow.camera.right = 10;
  sun.shadow.camera.top = 10;
  sun.shadow.camera.bottom = -10;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 35;
  sun.shadow.bias = -0.0003;
  sun.shadow.normalBias = 0.035;
  sun.shadow.radius = 4;
  scene.add(sun);
  const fill = new THREE.DirectionalLight('#d9e6ed', 1.1);
  fill.position.set(6, 5, -4);
  scene.add(fill);

  const sourceTextures = Object.fromEntries(Object.keys(FINISHES).map((key) => [key, woodTexture(key)]));
  const grass = lawnTexture();
  const garden = new THREE.Group();
  scene.add(garden);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), new THREE.MeshStandardMaterial({ map: grass, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.023;
  ground.receiveShadow = true;
  garden.add(ground);

  const gardenMaterials = {
    foliage: new THREE.MeshStandardMaterial({ color: '#718475', roughness: 1 }),
    foliageLight: new THREE.MeshStandardMaterial({ color: '#92a088', roughness: 1 }),
    trunk: new THREE.MeshStandardMaterial({ color: '#928371', roughness: 1 }),
    planter: new THREE.MeshStandardMaterial({ color: '#d3cabb', roughness: 0.9 }),
  };
  function gardenMesh(geometry, material, x, y, z) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    garden.add(mesh);
    return mesh;
  }
  // Softly coloured planting gives a sense of scale without hiding the product.
  for (const [x, z, size] of [[-6.4, -5.8, 1.15], [5.7, -6.4, 1.35], [7.5, -3.7, 0.85]]) {
    gardenMesh(new THREE.CylinderGeometry(0.06, 0.09, 2.2, 8), gardenMaterials.trunk, x, 1.1, z);
    for (const [dx, dy, dz, radius] of [[0, 2.4, 0, 0.9], [-0.4, 2.1, 0.15, 0.7], [0.43, 2.25, 0, 0.66]]) {
      const crown = gardenMesh(new THREE.IcosahedronGeometry(radius * size, 2), gardenMaterials.foliage, x + dx, dy * size, z + dz);
      crown.scale.y = 1.2;
    }
  }
  for (const [x, z] of [[-5.8, -3.7], [-5.3, -4.6], [5.2, -5.2], [6.2, -4.6]]) {
    const shrub = gardenMesh(new THREE.IcosahedronGeometry(0.64, 2), gardenMaterials.foliageLight, x, 0.4, z);
    shrub.scale.set(1.1, 0.8, 1);
  }

  let building = new THREE.Group();
  scene.add(building);
  let dimensions = new THREE.Group();
  scene.add(dimensions);
  let dirty = true;
  let disposed = false;
  let view = 'perspective';
  let animation = null;
  let frameId;
  let lastSignature = '';
  let proposalShadowMap = null;
  let proposalContact = null;
  // A transparent shadow catcher merges into the studio background without
  // exposing the far edge of the live garden's ground plane as a horizon seam.
  const proposalGround = new THREE.ShadowMaterial({ color: '#536057', opacity: 0.18 });

  function material(color, extra = {}) {
    return new THREE.MeshStandardMaterial({ color, roughness: 0.8, ...extra });
  }
  function box(parent, width, height, depth, x, y, z, mat, shadow = true) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = shadow;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  function cylinder(parent, radius, height, x, y, z, mat, topRadius = radius) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(topRadius, radius, height, 12), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  function timberMaterial(width, height, vertical = false) {
    const map = sourceTextures[state.timber].clone();
    map.userData.local = true;
    map.needsUpdate = true;
    if (vertical) {
      map.rotation = Math.PI / 2;
      map.center.set(0.5, 0.5);
      map.repeat.set(height / 1.2, width / 0.6);
    } else map.repeat.set(width / 1.2, height / 0.6);
    return material('#ffffff', { map, roughness: 0.87 });
  }

  function makeBuilding() {
    disposeGroup(building);
    scene.remove(building);
    building = new THREE.Group();
    scene.add(building);
    const w = state.width;
    const d = state.depth;
    const c = state.canopy;
    const floorY = 0.18;
    const wallH = 2.35;
    const topY = floorY + wallH;
    const vertical = state.system === 'pro';
    const frame = material('#354441', { roughness: 0.58, metalness: 0.18 });
    const roofMat = material('#46504c', { roughness: 0.93 });
    const inside = material(state.insulated ? '#ece7db' : '#c8ad89');
    const deckMat = material('#b9aa8e', { roughness: 0.94 });
    const black = material('#2b3936', { roughness: 0.55 });
    const glass = new THREE.MeshPhysicalMaterial({
      color: '#91b7ba', transparent: true, opacity: 0.31, roughness: 0.14,
      metalness: 0.12, clearcoat: 1, clearcoatRoughness: 0.16, side: THREE.DoubleSide,
      depthWrite: false,
    });
    const deckWidth = w + c + 0.62;
    const deckDepth = d + 1.13;
    box(building, deckWidth, 0.13, deckDepth, c / 2, 0.075, 0.23, deckMat);
    for (let x = -w / 2 - 0.26; x < w / 2 + c + 0.3; x += 0.145) {
      box(building, 0.009, 0.003, deckDepth, x, 0.142, 0.23, material('#9a8d77'), false);
    }
    box(building, w, 0.045, d, 0, floorY - 0.035, 0, material('#c7b696'));
    // An uninterrupted internal floor keeps glazing transparent and allows the
    // office/studio/gym layouts to remain visible through the openings.
    for (let x = -w / 2 + 0.17; x < w / 2; x += 0.25) {
      box(building, 0.006, 0.001, d - 0.14, x, floorY - 0.011, 0, material('#b4a184'), false);
    }

    function wallPanel(width, height, x, y, z, side = false) {
      if (width <= 0.001 || height <= 0.001) return;
      const panel = box(building, width, height, 0.115, x, y, z, timberMaterial(width, height, vertical));
      if (side) panel.rotation.y = Math.PI / 2;
      const interiorPanel = box(building, width, height, 0.018, x, y, z, inside);
      if (side) {
        interiorPanel.rotation.y = Math.PI / 2;
        interiorPanel.position.x += x < 0 ? 0.063 : -0.063;
      } else interiorPanel.position.z += z < 0 ? 0.063 : -0.063;
    }

    const openingW = Math.min(w - 0.65, ({ french: 1.7, sliding: 2.45, bifold: 2.9 })[state.glazing] || 1.7);
    const openingH = 2.05;
    const sideW = (w - openingW) / 2;
    wallPanel(sideW, wallH, -openingW / 2 - sideW / 2, floorY + wallH / 2, d / 2);
    wallPanel(sideW, wallH, openingW / 2 + sideW / 2, floorY + wallH / 2, d / 2);
    wallPanel(openingW, wallH - openingH, 0, floorY + openingH + (wallH - openingH) / 2, d / 2);
    wallPanel(w, wallH, 0, floorY + wallH / 2, -d / 2);

    function windowFrame(x, z, width, height, y, side = false) {
      const group = new THREE.Group();
      group.position.set(x, y, z);
      if (side) group.rotation.y = Math.PI / 2;
      building.add(group);
      box(group, width, 0.065, 0.105, 0, height / 2, 0, frame);
      box(group, width, 0.065, 0.105, 0, -height / 2, 0, frame);
      box(group, 0.065, height, 0.105, -width / 2, 0, 0, frame);
      box(group, 0.065, height, 0.105, width / 2, 0, 0, frame);
      box(group, 0.048, height, 0.075, 0, 0, 0, frame);
      box(group, width - 0.065, height - 0.065, 0.025, 0, 0, 0, glass, false);
      // A subtle high reflection helps the glazing read at every camera angle.
      box(group, width - 0.15, 0.045, 0.027, 0, height * 0.3, 0.015, material('#eef5ed', { transparent: true, opacity: 0.2 }), false);
    }
    for (const side of [-1, 1]) {
      const hasWindow = state.window === 'both' || (side === -1 && state.window === 'left') || (side === 1 && state.window === 'right');
      if (!hasWindow) {
        wallPanel(d, wallH, side * w / 2, floorY + wallH / 2, 0, true);
        continue;
      }
      const windowW = Math.min(d - 0.7, 1.5);
      const windowH = 1.12;
      const sill = 0.91;
      const backW = (d - windowW) / 2;
      wallPanel(backW, wallH, side * w / 2, floorY + wallH / 2, -windowW / 2 - backW / 2, true);
      wallPanel(backW, wallH, side * w / 2, floorY + wallH / 2, windowW / 2 + backW / 2, true);
      wallPanel(windowW, sill, side * w / 2, floorY + sill / 2, 0, true);
      wallPanel(windowW, wallH - sill - windowH, side * w / 2, floorY + sill + windowH + (wallH - sill - windowH) / 2, 0, true);
      windowFrame(side * (w / 2 + 0.025), 0, windowW, windowH, floorY + sill + windowH / 2, true);
    }

    // Prima/pro have crisp corner posts; log construction exposes the stacked
    // corner ends and a coarser seam profile, visibly distinct in the preview.
    if (state.system === 'log') {
      const logMat = timberMaterial(0.3, wallH);
      for (let y = floorY + 0.09; y < topY; y += 0.155) {
        for (const x of [-w / 2, w / 2]) {
          for (const z of [-d / 2, d / 2]) box(building, 0.27, 0.11, 0.25, x, y, z, logMat);
        }
      }
    } else {
      for (const x of [-w / 2, w / 2]) {
        for (const z of [-d / 2, d / 2]) box(building, 0.085, wallH + 0.045, 0.085, x, floorY + wallH / 2, z, timberMaterial(0.085, wallH, true));
      }
    }

    // Door systems have their actual panel count, tracks, and handles rather
    // than being a colour swap of one generic glass rectangle.
    const doors = new THREE.Group();
    doors.position.set(0, floorY + openingH / 2, d / 2 + 0.075);
    building.add(doors);
    const frameT = 0.065;
    box(doors, openingW + frameT, frameT, 0.13, 0, openingH / 2, 0, frame);
    box(doors, openingW + frameT, 0.055, 0.15, 0, -openingH / 2 + 0.018, 0, frame);
    box(doors, frameT, openingH, 0.13, -openingW / 2, 0, 0, frame);
    box(doors, frameT, openingH, 0.13, openingW / 2, 0, 0, frame);
    const count = state.glazing === 'bifold' ? 4 : state.glazing === 'sliding' ? 3 : 2;
    const panelW = openingW / count;
    for (let index = 0; index < count; index += 1) {
      const x = -openingW / 2 + panelW * (index + 0.5);
      const z = state.glazing === 'sliding' ? (index % 2 ? 0.025 : -0.02) : 0;
      box(doors, panelW - 0.055, openingH - 0.08, 0.025, x, 0, z, glass, false);
      if (index > 0) box(doors, state.glazing === 'bifold' ? 0.045 : 0.055, openingH - 0.05, 0.07, x - panelW / 2, 0, z, frame);
      if (state.glazing === 'french') {
        box(doors, panelW - 0.04, 0.04, 0.075, x, 0.18, z, frame);
        box(doors, 0.025, openingH - 0.08, 0.065, x, 0, z, frame);
      }
      const handleX = state.glazing === 'french' ? (index ? 0.115 : -0.115) : x + panelW * 0.34;
      if (state.glazing !== 'bifold' || index === 1) box(doors, 0.023, 0.18, 0.045, handleX, -0.04, 0.078, black);
      // Broad but faint bands mimic outdoor reflections without masking furniture.
      const reflection = box(doors, panelW - 0.095, 0.13, 0.027, x, openingH * 0.28, z + 0.017, material('#f2f7ef', { transparent: true, opacity: 0.17 }), false);
      reflection.rotation.z = -0.06;
    }
    if (state.glazing === 'sliding') {
      for (const z of [-0.055, 0.055]) box(doors, openingW, 0.014, 0.017, 0, -openingH / 2 + 0.052, z, material('#a0aaa2', { metalness: 0.6, roughness: 0.3 }));
    }

    const overhang = 0.16;
    if (state.roof === 'apex') {
      const rise = Math.min(0.72, w * 0.16);
      const slope = Math.atan2(rise, w / 2);
      const roofLength = Math.sqrt((w / 2 + overhang) ** 2 + (rise + overhang * Math.tan(slope)) ** 2);
      for (const side of [-1, 1]) {
        const roof = box(building, roofLength, 0.11, d + overhang * 2, side * (w / 4 + overhang / 2), topY + rise / 2 + 0.035 - overhang * Math.tan(slope) / 2, 0, roofMat);
        roof.rotation.z = -side * slope;
        // Regular courses make the pitched roof read as roofing, not a black lid.
        for (let offset = -d / 2 - overhang; offset < d / 2 + overhang; offset += 0.22) {
          const seam = box(building, roofLength, 0.006, 0.013, roof.position.x, roof.position.y + 0.058, offset, material('#65706a'), false);
          seam.rotation.z = roof.rotation.z;
        }
      }
      const shape = new THREE.Shape();
      shape.moveTo(-w / 2, 0); shape.lineTo(0, rise); shape.lineTo(w / 2, 0); shape.closePath();
      for (const side of [-1, 1]) {
        const gable = new THREE.Mesh(new THREE.ShapeGeometry(shape), timberMaterial(w, rise, vertical));
        gable.position.set(0, topY, side * d / 2);
        if (side < 0) gable.rotation.y = Math.PI;
        gable.castShadow = true;
        building.add(gable);
      }
    } else if (state.roof === 'pent') {
      const rise = 0.33;
      const angle = Math.atan2(rise, d);
      const roof = box(building, w + c + overhang * 2, 0.12, (d + overhang * 2) / Math.cos(angle), c / 2, topY + rise / 2 + 0.065, 0, roofMat);
      roof.rotation.x = -angle;
      wallPanel(w, rise, 0, topY + rise / 2, d / 2);
      // The side infill is triangular, following the roof instead of intersecting it.
      const shape = new THREE.Shape();
      shape.moveTo(-d / 2, 0); shape.lineTo(d / 2, 0); shape.lineTo(-d / 2, rise); shape.closePath();
      for (const side of [-1, 1]) {
        const infill = new THREE.Mesh(new THREE.ShapeGeometry(shape), timberMaterial(d, rise, vertical));
        infill.rotation.y = Math.PI / 2;
        infill.position.set(side * w / 2, topY, 0);
        infill.material.side = THREE.DoubleSide;
        building.add(infill);
      }
      const frontFascia = box(building, w + c + overhang * 2, 0.19, 0.07, c / 2, topY + rise + 0.045, d / 2 + overhang, frame);
      frontFascia.castShadow = true;
      box(building, w + c + overhang * 2, 0.16, 0.07, c / 2, topY + 0.035, -d / 2 - overhang, frame);
    } else {
      box(building, w + c + overhang * 2, 0.16, d + overhang * 2, c / 2, topY + 0.065, 0, roofMat);
      box(building, w + c + overhang * 2, 0.18, 0.07, c / 2, topY + 0.065, d / 2 + overhang, frame);
      box(building, w + c + overhang * 2, 0.18, 0.07, c / 2, topY + 0.065, -d / 2 - overhang, frame);
    }

    if (c > 0) {
      const canopyTop = state.roof === 'apex' ? topY - 0.07 : topY;
      if (state.roof === 'apex') {
        const canopyRoof = box(building, c + 0.13, 0.12, d + overhang * 2, w / 2 + c / 2 + 0.055, canopyTop + 0.035, 0, roofMat);
        canopyRoof.userData.roof = true;
      }
      const postMat = timberMaterial(0.11, canopyTop, true);
      for (const z of [-d / 2 + 0.05, d / 2 - 0.05]) {
        box(building, 0.115, canopyTop - floorY, 0.115, w / 2 + c - 0.025, floorY + (canopyTop - floorY) / 2, z, postMat);
      }
      box(building, c, 0.15, 0.105, w / 2 + c / 2, canopyTop - 0.075, d / 2 - 0.05, postMat);
      const cushion = material('#e1d8c4');
      const benchX = w / 2 + c / 2;
      box(building, Math.max(0.55, c - 0.25), 0.13, 0.49, benchX, 0.55, -d / 2 + 0.47, cushion);
      box(building, Math.max(0.55, c - 0.25), 0.44, 0.1, benchX, 0.8, -d / 2 + 0.21, deckMat);
      for (const x of [benchX - c * 0.26, benchX + c * 0.26]) box(building, 0.08, 0.34, 0.38, x, 0.33, -d / 2 + 0.47, deckMat);
    }

    const plant = (x, z, scale = 1, exterior = false) => {
      const potMat = exterior ? material('#c7bfae') : material('#c4ad91');
      const leaves = material('#5e7b61');
      const y = exterior ? 0.14 : floorY;
      cylinder(building, 0.18 * scale, 0.32 * scale, x, y + 0.16 * scale, z, potMat, 0.23 * scale);
      for (let index = 0; index < 7; index += 1) {
        const angle = index * Math.PI * 2 / 7;
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.13 * scale, 8, 6), leaves);
        leaf.scale.set(0.55, 2.5, 0.75);
        leaf.position.set(x + Math.cos(angle) * 0.12 * scale, y + (0.52 + (index % 3) * 0.05) * scale, z + Math.sin(angle) * 0.12 * scale);
        leaf.rotation.set(Math.sin(angle) * 0.4, 0, Math.cos(angle) * 0.4);
        leaf.castShadow = true;
        building.add(leaf);
      }
    };
    plant(-w / 2 - 0.01, d / 2 + 0.56, 0.9, true);
    plant(w / 2 - 0.39, -d / 2 + 0.45, 1.05);

    const furniture = new THREE.Group();
    furniture.position.y = floorY;
    building.add(furniture);
    const oak = material('#bda481');
    const upholstery = material('#c8bfae');
    const legs = material('#48514a', { roughness: 0.65 });
    const light = material('#ede7d9');
    const backZ = -d / 2 + 0.66;
    function table(x, z, width = 1.35, depth = 0.62, height = 0.75) {
      box(furniture, width, 0.055, depth, x, height, z, oak);
      for (const dx of [-width / 2 + 0.09, width / 2 - 0.09]) {
        for (const dz of [-depth / 2 + 0.07, depth / 2 - 0.07]) box(furniture, 0.045, height - 0.03, 0.045, x + dx, height / 2, z + dz, legs);
      }
    }
    function chair(x, z) {
      box(furniture, 0.45, 0.08, 0.45, x, 0.45, z, upholstery);
      box(furniture, 0.45, 0.45, 0.065, x, 0.69, z + 0.2, upholstery);
      for (const dx of [-0.17, 0.17]) for (const dz of [-0.17, 0.17]) box(furniture, 0.035, 0.42, 0.035, x + dx, 0.21, z + dz, legs);
    }
    if (state.use === 'gym') {
      box(furniture, 0.76, 0.025, 1.7, -0.35, 0.015, 0.15, material('#8b968a'));
      box(furniture, 0.76, 0.13, 1.35, 0.43, 0.09, backZ + 0.15, legs);
      box(furniture, 0.58, 0.008, 1.12, 0.43, 0.162, backZ + 0.15, material('#263932'));
      for (const x of [0.12, 0.74]) {
        const support = box(furniture, 0.055, 0.93, 0.055, x, 0.58, backZ - 0.35, legs);
        support.rotation.x = -0.15;
      }
      box(furniture, 0.65, 0.14, 0.21, 0.43, 1.08, backZ - 0.43, legs);
      box(furniture, 0.31, 0.014, 0.16, 0.43, 1.155, backZ - 0.43, material('#85a29e'));
      for (const x of [-0.6, -0.25]) {
        const bar = cylinder(furniture, 0.02, 0.37, x, 0.12, 0.68, black);
        bar.rotation.z = Math.PI / 2;
        for (const dx of [-0.15, 0.15]) {
          const weight = cylinder(furniture, 0.075, 0.095, x + dx, 0.12, 0.68, black);
          weight.rotation.z = Math.PI / 2;
        }
      }
    } else if (state.use === 'studio') {
      table(-0.35, backZ, 1.45, 0.64);
      chair(-0.35, backZ + 0.67);
      cylinder(furniture, 0.08, 0.14, -0.6, 0.84, backZ, material('#c49e78'));
      box(furniture, 0.32, 0.015, 0.23, -0.1, 0.795, backZ, light);
      const easelX = Math.min(w / 2 - 0.53, 1.1);
      for (const dx of [-0.23, 0.23]) {
        const easel = box(furniture, 0.035, 1.42, 0.04, easelX + dx, 0.73, -0.08, oak);
        easel.rotation.z = dx < 0 ? -0.15 : 0.15;
      }
      box(furniture, 0.57, 0.75, 0.04, easelX, 1.02, -0.06, light);
      box(furniture, 0.6, 0.055, 0.1, easelX, 0.64, 0, oak);
      box(furniture, 0.22, 0.32, 0.046, easelX - 0.09, 1.03, -0.033, material('#98a695'));
      box(furniture, 0.2, 0.12, 0.046, easelX + 0.08, 0.87, -0.032, material('#c6aa83'));
    } else if (state.use === 'retreat') {
      const sofaW = Math.min(1.8, w - 0.7);
      box(furniture, sofaW, 0.28, 0.72, -0.18, 0.25, backZ, upholstery);
      box(furniture, sofaW, 0.44, 0.14, -0.18, 0.58, backZ - 0.29, upholstery);
      for (const side of [-1, 1]) box(furniture, 0.14, 0.37, 0.72, -0.18 + side * (sofaW / 2 - 0.07), 0.45, backZ, upholstery);
      const pillow = box(furniture, 0.36, 0.35, 0.13, -0.18 - sofaW * 0.27, 0.54, backZ - 0.16, material('#809284'));
      pillow.rotation.z = -0.15;
      cylinder(furniture, 0.35, 0.045, -0.1, 0.43, backZ + 0.91, oak);
      cylinder(furniture, 0.08, 0.41, -0.1, 0.2, backZ + 0.91, legs);
      box(furniture, 0.19, 0.025, 0.15, -0.05, 0.466, backZ + 0.88, light);
    } else {
      table(-0.22, backZ, Math.min(1.55, w - 0.75));
      chair(-0.22, backZ + 0.73);
      box(furniture, 0.55, 0.34, 0.025, -0.22, 1.035, backZ - 0.12, legs);
      box(furniture, 0.5, 0.285, 0.027, -0.22, 1.04, backZ - 0.101, material('#94aaa6', { emissive: '#57706c', emissiveIntensity: 0.12 }));
      box(furniture, 0.035, 0.19, 0.035, -0.22, 0.87, backZ - 0.13, legs);
      box(furniture, 0.21, 0.023, 0.13, -0.22, 0.794, backZ - 0.08, legs);
      box(furniture, 0.31, 0.012, 0.11, -0.22, 0.792, backZ + 0.17, light);
      cylinder(furniture, 0.043, 0.09, 0.3, 0.82, backZ + 0.08, light);
      box(furniture, 0.61, 0.64, 0.35, -w / 2 + 0.45, 0.32, -d / 2 + 0.4, light);
    }
    const ceilingLight = new THREE.PointLight('#fff3d4', 1.8, 5, 2);
    ceilingLight.position.set(0, 2.05, -0.35);
    building.add(ceilingLight);
    makeDimensions();
  }

  function makeDimensions() {
    disposeGroup(dimensions);
    scene.remove(dimensions);
    dimensions = new THREE.Group();
    scene.add(dimensions);
    const w = state.width;
    const d = state.depth;
    const c = state.canopy;
    const mat = new THREE.LineBasicMaterial({ color: '#788c7f', transparent: true, opacity: 0.82 });
    const line = (points) => {
      const geometry = new THREE.BufferGeometry().setFromPoints(points.map((point) => new THREE.Vector3(...point)));
      dimensions.add(new THREE.Line(geometry, mat));
    };
    const y = 0.17;
    const front = d / 2 + 1.02;
    const side = w / 2 + c + 0.76;
    line([[-w / 2, y, front], [w / 2, y, front]]);
    for (const x of [-w / 2, w / 2]) line([[x, y, front - 0.11], [x, y, front + 0.11]]);
    line([[side, y, -d / 2], [side, y, d / 2]]);
    for (const z of [-d / 2, d / 2]) line([[side - 0.11, y, z], [side + 0.11, y, z]]);
    function label(text, x, z) {
      const map = labelTexture(text);
      map.userData.local = true;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map, depthTest: false, transparent: true }));
      sprite.scale.set(0.95, 0.277, 1);
      sprite.position.set(x, 0.31, z);
      sprite.renderOrder = 10;
      dimensions.add(sprite);
    }
    label(`${w.toFixed(1)} m`, 0, front);
    label(`${d.toFixed(1)} m`, side, 0);
    if (c > 0) {
      line([[w / 2, y, front], [w / 2 + c, y, front]]);
      line([[w / 2 + c, y, front - 0.11], [w / 2 + c, y, front + 0.11]]);
      label(`+ ${c.toFixed(1)} m`, w / 2 + c / 2, front);
    }
  }

  function getProposalContact() {
    if (!proposalContact) {
      const image = document.createElement('canvas');
      image.width = image.height = 256;
      const ctx = image.getContext('2d');
      ctx.filter = 'blur(19px)';
      ctx.fillStyle = '#27332d';
      ctx.fillRect(38, 42, 180, 172);
      const map = new THREE.CanvasTexture(image);
      map.colorSpace = THREE.SRGBColorSpace;
      proposalContact = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
        map, transparent: true, opacity: 0.14, depthWrite: false, toneMapped: false,
      }));
      proposalContact.rotation.x = -Math.PI / 2;
      proposalContact.position.y = -0.018;
      proposalContact.visible = false;
      scene.add(proposalContact);
    }
    return proposalContact;
  }

  function proposalCameraFor(bounds, points, side, detail = false) {
    const exportCamera = camera.clone();
    exportCamera.aspect = 16 / 9;
    exportCamera.fov = 30;
    exportCamera.zoom = 1;
    exportCamera.up.set(0, 1, 0);
    const center = bounds.getCenter(new THREE.Vector3());
    const azimuth = THREE.MathUtils.degToRad(detail ? 28 : 36) * side;
    const elevation = THREE.MathUtils.degToRad(detail ? 11 : 12);
    const direction = new THREE.Vector3(
      Math.sin(azimuth) * Math.cos(elevation), Math.sin(elevation), Math.cos(azimuth) * Math.cos(elevation),
    );
    const right = new THREE.Vector3().crossVectors(exportCamera.up, direction).normalize();
    const up = new THREE.Vector3().crossVectors(direction, right).normalize();
    const tanV = Math.tan(THREE.MathUtils.degToRad(exportCamera.fov / 2));
    const tanH = tanV * exportCamera.aspect;
    const projected = points.map((point) => {
      const offset = point.clone().sub(center);
      return { x: offset.dot(right), y: offset.dot(up), depth: offset.dot(direction) };
    });
    const extentsAt = (distance) => {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (const point of projected) {
        const inverseDepth = 1 / (distance - point.depth);
        const x = point.x * inverseDepth / tanH;
        const y = point.y * inverseDepth / tanV;
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      }
      return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
    };
    // Fit and centre the actual projected silhouette. A world-space cuboid
    // centre leaves excess sky because deck and roof have different depths.
    // A lens shift preserves the chosen architectural angle and all geometry.
    let low = Math.max(0.5, ...projected.map((point) => point.depth)) + 0.5;
    let high = Math.max(8, low * 2);
    while (extentsAt(high).width > 1.6 || extentsAt(high).height > 1.68) high *= 1.5;
    for (let step = 0; step < 22; step += 1) {
      const middle = (low + high) / 2;
      const extents = extentsAt(middle);
      if (extents.width <= 1.6 && extents.height <= 1.68) high = middle;
      else low = middle;
    }
    const distance = high;
    const extents = extentsAt(distance);
    exportCamera.position.copy(center).addScaledVector(direction, distance);
    exportCamera.near = 0.05;
    exportCamera.far = Math.max(100, distance * 4);
    exportCamera.lookAt(center);
    exportCamera.updateProjectionMatrix();
    exportCamera.projectionMatrix.elements[8] = (extents.minX + extents.maxX) / 2;
    exportCamera.projectionMatrix.elements[9] = (extents.minY + extents.maxY) / 2;
    exportCamera.projectionMatrixInverse.copy(exportCamera.projectionMatrix).invert();
    exportCamera.updateMatrixWorld(true);
    return exportCamera;
  }

  function renderProposalImage(exportCamera) {
    // Wide PNGs use the same request contract as the existing download. The
    // plain studio setting compresses much better than a textured lawn.
    for (const width of [1600, 1408, 1200, 1008]) {
      renderer.setSize(width, width * 9 / 16, false);
      renderer.render(scene, exportCamera);
      const result = canvas.toDataURL('image/png');
      if (result.length <= 1500000) return result;
    }
    return null;
  }

  function captureProposal() {
    const result = { hero: null, detail: null };
    if (disposed) return result;
    const size = renderer.getSize(new THREE.Vector2());
    const saved = {
      pixelRatio: renderer.getPixelRatio(), exposure: renderer.toneMappingExposure,
      background: scene.background, fog: scene.fog, environment: scene.environment,
      environmentIntensity: scene.environmentIntensity, ground: ground.material,
      dimensionsVisible: dimensions.visible, shadowType: renderer.shadowMap.type,
      shadowAutoUpdate: renderer.shadowMap.autoUpdate, shadowNeedsUpdate: renderer.shadowMap.needsUpdate,
      sun: { position: sun.position.clone(), target: sun.target.position.clone(), color: sun.color.clone(), intensity: sun.intensity },
      fill: { position: fill.position.clone(), color: fill.color.clone(), intensity: fill.intensity },
      hemisphere: { color: hemisphere.color.clone(), groundColor: hemisphere.groundColor.clone(), intensity: hemisphere.intensity },
      shadow: {
        map: sun.shadow.map, mapSize: sun.shadow.mapSize.clone(), radius: sun.shadow.radius,
        bias: sun.shadow.bias, normalBias: sun.shadow.normalBias, needsUpdate: sun.shadow.needsUpdate,
        camera: sun.shadow.camera.clone(), matrix: sun.shadow.matrix.clone(),
      },
    };
    const visibility = new Map();
    const materials = new Map();
    garden.children.forEach((object) => visibility.set(object, object.visible));
    building.traverse((object) => {
      if (!object.isMesh) return;
      visibility.set(object, object.visible);
      for (const mat of Array.isArray(object.material) ? object.material : [object.material]) {
        if (!mat.isMeshStandardMaterial || materials.has(mat)) continue;
        materials.set(mat, {
          roughness: mat.roughness, metalness: mat.metalness, envMapIntensity: mat.envMapIntensity,
          bumpMap: mat.bumpMap, bumpScale: mat.bumpScale, color: mat.color.clone(), opacity: mat.opacity,
        });
      }
    });
    const contact = getProposalContact();
    const contactVisible = contact.visible;
    try {
      renderer.setPixelRatio(1);
      renderer.toneMappingExposure = 0.88;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      renderer.shadowMap.autoUpdate = true;
      scene.background = new THREE.Color('#f1f0eb');
      scene.fog = null;
      // Direct studio lighting keeps first exports fast on mobile and software
      // WebGL devices; no cubemap baking or environment shader compilation.
      scene.environment = null;
      ground.material = proposalGround;
      dimensions.visible = false;
      garden.children.forEach((object) => { object.visible = object === ground; });
      building.traverse((object) => { if (object.userData.roof) object.visible = true; });
      materials.forEach((original, mat) => {
        mat.envMapIntensity = mat.isMeshPhysicalMaterial ? 0.95 : 0.45;
        if (mat.map) {
          mat.roughness = 0.73;
          mat.bumpMap = mat.map;
          mat.bumpScale = 0.014;
        } else if (mat.isMeshPhysicalMaterial) {
          mat.color.set('#b1cecb');
          mat.roughness = 0.08;
          mat.metalness = 0.05;
          mat.opacity = 0.4;
        } else if (mat.metalness > 0.1) mat.roughness = 0.38;
        mat.needsUpdate = true;
      });
      building.updateWorldMatrix(true, true);
      const bounds = new THREE.Box3().setFromObject(building);
      const center = bounds.getCenter(new THREE.Vector3());
      const points = [];
      building.traverseVisible((object) => {
        const positions = object.isMesh && object.geometry.getAttribute('position');
        if (!positions) return;
        for (let i = 0; i < positions.count; i += 1) {
          points.push(new THREE.Vector3().fromBufferAttribute(positions, i).applyMatrix4(object.matrixWorld));
        }
      });
      contact.position.x = center.x;
      contact.position.z = center.z;
      contact.scale.set(state.width + state.canopy + 1.45, state.depth + 1.8, 1);
      contact.visible = true;
      hemisphere.color.set('#f6f5ef');
      hemisphere.groundColor.set('#c6c9bf');
      hemisphere.intensity = 0.95;
      sun.color.set('#fff7eb');
      sun.intensity = 2.4;
      sun.position.set(center.x - 4, 8, 6);
      sun.target.position.set(center.x, 1.1, 0);
      sun.target.updateMatrixWorld(true);
      fill.color.set('#e3edf3');
      fill.intensity = 0.65;
      fill.position.set(center.x + 6, 4.5, 2.5);
      sun.shadow.map = proposalShadowMap;
      sun.shadow.mapSize.set(1024, 1024);
      sun.shadow.radius = 5;
      sun.shadow.bias = -0.00015;
      sun.shadow.normalBias = 0.02;
      const span = Math.max(state.width + state.canopy, state.depth) + 4;
      Object.assign(sun.shadow.camera, { left: -span / 2, right: span / 2, top: span / 2, bottom: -span / 2, near: 0.5, far: 35 });
      sun.shadow.camera.updateProjectionMatrix();
      sun.shadow.needsUpdate = true;
      const heroSide = state.canopy > 0 || state.window !== 'left' ? 1 : -1;
      result.hero = renderProposalImage(proposalCameraFor(bounds, points, heroSide));
      result.detail = renderProposalImage(proposalCameraFor(bounds, points, -heroSide, true));
    } catch {
      // The PDF can still use its vector plan if this device cannot export 3D.
    } finally {
      proposalShadowMap = sun.shadow.map === saved.shadow.map ? proposalShadowMap : sun.shadow.map;
      sun.shadow.map = saved.shadow.map;
      sun.shadow.mapSize.copy(saved.shadow.mapSize);
      sun.shadow.radius = saved.shadow.radius;
      sun.shadow.bias = saved.shadow.bias;
      sun.shadow.normalBias = saved.shadow.normalBias;
      sun.shadow.needsUpdate = saved.shadow.needsUpdate;
      sun.shadow.camera.copy(saved.shadow.camera);
      sun.shadow.matrix.copy(saved.shadow.matrix);
      sun.position.copy(saved.sun.position);
      sun.target.position.copy(saved.sun.target);
      sun.target.updateMatrixWorld(true);
      sun.color.copy(saved.sun.color);
      sun.intensity = saved.sun.intensity;
      fill.position.copy(saved.fill.position);
      fill.color.copy(saved.fill.color);
      fill.intensity = saved.fill.intensity;
      hemisphere.color.copy(saved.hemisphere.color);
      hemisphere.groundColor.copy(saved.hemisphere.groundColor);
      hemisphere.intensity = saved.hemisphere.intensity;
      scene.background = saved.background;
      scene.fog = saved.fog;
      scene.environment = saved.environment;
      scene.environmentIntensity = saved.environmentIntensity;
      ground.material = saved.ground;
      dimensions.visible = saved.dimensionsVisible;
      contact.visible = contactVisible;
      visibility.forEach((visible, object) => { object.visible = visible; });
      materials.forEach((original, mat) => {
        mat.roughness = original.roughness;
        mat.metalness = original.metalness;
        mat.envMapIntensity = original.envMapIntensity;
        mat.bumpMap = original.bumpMap;
        mat.bumpScale = original.bumpScale;
        mat.color.copy(original.color);
        mat.opacity = original.opacity;
        mat.needsUpdate = true;
      });
      renderer.shadowMap.type = saved.shadowType;
      renderer.shadowMap.autoUpdate = saved.shadowAutoUpdate;
      renderer.toneMappingExposure = saved.exposure;
      renderer.setSize(size.x, size.y, false);
      renderer.setPixelRatio(saved.pixelRatio);
      dirty = true;
      try { renderer.render(scene, camera); } catch { /* The normal render loop retries. */ }
      renderer.shadowMap.needsUpdate = saved.shadowNeedsUpdate;
      sun.shadow.needsUpdate = saved.shadow.needsUpdate;
    }
    return result;
  }

  function cameraPosition(mode) {
    const centerX = state.canopy / 2;
    const largest = Math.max(state.width + state.canopy, state.depth);
    const distance = Math.max(8.5, largest * 2.5);
    if (mode === 'front') return { position: new THREE.Vector3(centerX, 2.55, distance), target: new THREE.Vector3(centerX, 1.35, 0) };
    if (mode === 'plan') return { position: new THREE.Vector3(centerX, Math.max(11.5, largest * 2.75), 0.005), target: new THREE.Vector3(centerX, 0, 0) };
    return { position: new THREE.Vector3(centerX + distance * 0.65, distance * 0.43, distance * 0.79), target: new THREE.Vector3(centerX, 1.05, 0) };
  }
  function applyView(mode, animate = true) {
    view = ['front', 'plan', 'perspective'].includes(mode) ? mode : 'perspective';
    const next = cameraPosition(view);
    controls.enableRotate = view !== 'plan';
    controls.minPolarAngle = view === 'plan' ? 0.001 : 0.14;
    controls.maxDistance = Math.max(25, Math.max(state.width + state.canopy, state.depth) * 4.2);
    if (animate) {
      animation = { start: performance.now(), fromPosition: camera.position.clone(), fromTarget: controls.target.clone(), ...next };
    } else {
      camera.position.copy(next.position);
      controls.target.copy(next.target);
      camera.lookAt(next.target);
    }
    // Lift off the roof in plan view to expose the floor layout while retaining
    // the footprint, external glazing, and all three size labels.
    dirty = true;
  }
  function resize() {
    const width = Math.max(1, canvas.clientWidth || canvas.parentElement?.clientWidth || 800);
    const height = Math.max(1, canvas.clientHeight || canvas.parentElement?.clientHeight || 550);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    dirty = true;
  }
  controls.addEventListener('change', () => { dirty = true; });
  controls.addEventListener('start', () => { animation = null; });
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(resize) : null;
  observer?.observe(canvas);
  window.addEventListener('resize', resize);

  // Hide only roof surfaces in plan view: walls and furniture stay visible.
  function setPlanVisibility() {
    const isPlan = view === 'plan';
    building.traverse((object) => {
      if (!object.isMesh) return;
      if (object.userData.roof) object.visible = !isPlan;
    });
  }
  function markRoofMeshes() {
    building.traverse((object) => {
      // Roofing and gable meshes occupy the upper 300 mm of the model. The
      // property is stable across view switches and recalculated after updates.
      if (object.isMesh && object.parent === building && object.position.y > 2.51) object.userData.roof = true;
    });
    setPlanVisibility();
  }
  function renderFrame(now) {
    if (disposed) return;
    frameId = requestAnimationFrame(renderFrame);
    if (animation) {
      const t = Math.min(1, (now - animation.start) / 520);
      const ease = 1 - (1 - t) ** 3;
      camera.position.lerpVectors(animation.fromPosition, animation.position, ease);
      controls.target.lerpVectors(animation.fromTarget, animation.target, ease);
      if (t === 1) animation = null;
      dirty = true;
    }
    controls.update();
    if (dirty && !document.hidden) {
      renderer.render(scene, camera);
      dirty = false;
    }
  }

  makeBuilding();
  markRoofMeshes();
  resize();
  applyView('perspective', false);
  frameId = requestAnimationFrame(renderFrame);
  return {
    update(nextState) {
      const next = normaliseState(nextState);
      const signature = JSON.stringify(next);
      if (signature === lastSignature) return;
      const sizeChanged = next.width !== state.width || next.depth !== state.depth || next.canopy !== state.canopy;
      state = next;
      lastSignature = signature;
      makeBuilding();
      markRoofMeshes();
      if (sizeChanged || view !== 'perspective') applyView(view, true);
      dirty = true;
    },
    setView(mode) { applyView(mode); setPlanVisibility(); },
    reset() { applyView('perspective'); setPlanVisibility(); },
    captureProposal,
    capture() {
      const size = renderer.getSize(new THREE.Vector2());
      const pixelRatio = renderer.getPixelRatio();
      try {
        // Render the same camera at print resolution, even on a small phone.
        // Pixel ratio changes the drawing buffer without changing canvas CSS.
        // Keep the existing PNG request contract, with headroom below the
        // server's 1.6 million character image limit for detailed scenes.
        for (const longestEdge of [1600, 1400, 1200, 1000, 800]) {
          renderer.setPixelRatio(longestEdge / Math.max(size.x, size.y, 1));
          renderer.setSize(size.x, size.y, false);
          renderer.render(scene, camera);
          const image = canvas.toDataURL('image/png');
          if (image.length <= 1500000) return image;
        }
        return null;
      } catch {
        return null;
      } finally {
        renderer.setPixelRatio(pixelRatio);
        renderer.setSize(size.x, size.y, false);
        dirty = true;
        try { renderer.render(scene, camera); } catch { /* The render loop retries. */ }
      }
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frameId);
      observer?.disconnect();
      window.removeEventListener('resize', resize);
      controls.dispose();
      disposeGroup(building);
      disposeGroup(dimensions);
      disposeGroup(garden);
      Object.values(sourceTextures).forEach((texture) => texture.dispose());
      grass.dispose();
      proposalShadowMap?.dispose();
      proposalGround.dispose();
      if (proposalContact) {
        proposalContact.geometry.dispose();
        proposalContact.material.map.dispose();
        proposalContact.material.dispose();
      }
      renderer.dispose();
    },
  };
}
