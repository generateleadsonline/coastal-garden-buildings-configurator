// "Your Lugarde building" PDF for Coastal Garden Buildings: renders of the visitor's design (front,
// all four sides, two views inside, the plan and dusk), a dimensioned plan, the full
// specification, Lugarde's itemised price for the design, and the next steps with a booking link.
// Built on the Sutton Garden Buildings v2 PDF (adapted from the Atelia, Hideaway and SMART PDFs).
import {jsPDF} from 'jspdf';
import qrcode from 'qrcode-generator';
import {normalise, metres, metres2, money, specRows, summary, outline, obstacles, heightsOf, area, roofName, treatmentName, OPENINGS, WALLS, RANGES, ROOFS, DEALER_EXTRAS} from './configurator-model.js';
import {USPS, CONTACT} from './configurator-data.js';
import {PDF_FONTS, PDF_LOGO, PDF_LOGO_SIZE, PDF_LOGO_WHITE, PDF_LOGO_WHITE_SIZE} from './configurator-pdf-assets.js';

// Coastal: dark slate ink, the site's slate-teal links (#597177) and the logo's blue-grey (#96abb0).
const C = {ink: '#22333a', ink2: '#33464d', green: '#597177', sage: '#96abb0', pale: '#eaf0f1', cream: '#f6f8f8', muted: '#56666b', line: '#d9e1e3', paper: '#ffffff', frost: '#c8d3d6', light: '#c3d0d4'};
const W = 210, H = 297, M = 16, CW = W - 2 * M;
const GROUP_NAME = {building: 'Building', openings: 'Doors and windows', finish: 'Treatments', inside: 'Inside', extras: 'Extras', delivery: 'Delivery', offer: 'Lugarde’s offer'};

/**
 * @param input  a design state (or anything normalise() accepts)
 * @param views  {hero, front, back, left, right, inside, inside2, plan, dusk}: JPEG data URLs
 * @param options {contactName, reference, preparedAt, price, save=true, siteURL}
 *   price: the /api/price response ({total, lines, checked, discount}) or null when not shown.
 */
export async function downloadPDF(input, views = {}, options = {}) {
  const state = normalise(input), r = RANGES[state.range];
  const shots = views && typeof views === 'object' ? views : {};
  const base = options.siteURL || (typeof location !== 'undefined' ? location.origin + '/configurator/' : 'https://coastal-garden-buildings-configurator.netlify.app/configurator/');
  const s = summary(state, base), link = s.designLink, ref = options.reference || 'CGB-DESIGN';
  const booking = link + '&book=1';
  const price = options.price && Number.isFinite(options.price.total) ? options.price : null;
  const prepared = new Date(options.preparedAt || Date.now());
  const date = (Number.isFinite(prepared.getTime()) ? prepared : new Date()).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London'});
  const first = String(options.contactName || '').trim().split(/\s+/)[0].slice(0, 30);
  const name = `Lugarde ${r.name}`;
  const pdf = new jsPDF({unit: 'mm', format: 'a4', compress: true, putOnlyUsedFonts: true});
  for (const [key, style] of [['regular', 'normal'], ['bold', 'bold'], ['heading', 'italic']]) { pdf.addFileToVFS(key + '.ttf', PDF_FONTS[key]); pdf.addFont(key + '.ttf', 'Lato', style); }
  pdf.setProperties({title: `Your ${name}, ${s.size}`, subject: `${name} ${s.size}: your design, specification and price`, author: 'Coastal Garden Buildings', creator: 'Coastal Garden Buildings designer', keywords: 'Coastal Garden Buildings, Lugarde, log cabin, garden room, Christchurch, design'});
  pdf.setLanguage('en-GB');

  // 'italic' carries Lato Bold for headings: jsPDF knows four styles per family.
  const set = (size = 10, bold = false, colour = C.ink, heading = false) => { pdf.setFont('Lato', heading ? 'italic' : bold ? 'bold' : 'normal'); pdf.setFontSize(size); pdf.setTextColor(colour); };
  const para = (text, x, y, width, size = 9.5, colour = C.muted, line = 4.5, bold = false) => { set(size, bold, colour); const lines = pdf.splitTextToSize(String(text), width); pdf.text(lines, x, y, {lineHeightFactor: line / (size * .352778)}); return y + lines.length * line; };
  const heading = (text, x, y, size = 24, colour = C.ink, maxWidth = CW) => { set(size, false, colour, true); let fs = size; while (pdf.getTextWidth(String(text)) > maxWidth && fs > 11) { fs -= 1; pdf.setFontSize(fs); } pdf.text(String(text), x, y); };
  const label = (text, x, y, colour = C.muted) => { set(7.4, true, colour); pdf.text(String(text).toUpperCase(), x, y, {charSpace: .45}); };
  const image = (data, x, y, w, h, cover = true) => {
    if (typeof data !== 'string' || !/^data:image\/(png|jpeg);base64,/.test(data)) return false;
    try {
      const info = pdf.getImageProperties(data), fmt = data.startsWith('data:image/png') ? 'PNG' : 'JPEG';
      if (cover) {
        const k = Math.max(w / info.width, h / info.height), iw = info.width * k, ih = info.height * k;
        pdf.saveGraphicsState(); pdf.rect(x, y, w, h, null); pdf.clip(); pdf.discardPath();
        pdf.addImage(data, fmt, x - (iw - w) / 2, y - (ih - h) / 2, iw, ih, undefined, 'FAST');
        pdf.restoreGraphicsState();
      } else {
        const k = Math.min(w / info.width, h / info.height);
        pdf.addImage(data, fmt, x + (w - info.width * k) / 2, y + (h - info.height * k) / 2, info.width * k, info.height * k, undefined, 'FAST');
      }
      return true;
    } catch { return false; }
  };
  const qr = (url, x, y, size, dark = C.ink) => {
    const code = qrcode(0, 'M'); code.addData(url, 'Byte'); code.make();
    const n = code.getModuleCount(), unit = size / (n + 4);
    pdf.setFillColor('#ffffff'); pdf.rect(x, y, size, size, 'F'); pdf.setFillColor(dark);
    for (let row = 0; row < n; row++) for (let col = 0; col < n; col++) if (code.isDark(row, col)) pdf.rect(x + (col + 2) * unit, y + (row + 2) * unit, unit + .02, unit + .02, 'F');
  };
  const button = (text, x, y, w, h, url, fill = C.green, colour = '#ffffff') => { pdf.setFillColor(fill); pdf.roundedRect(x, y, w, h, 1.2, 1.2, 'F'); set(10.5, true, colour); pdf.text(text, x + w / 2, y + h / 2 + 1.5, {align: 'center'}); pdf.link(x, y, w, h, {url}); };
  const dot = (x, y, colour = C.green) => { pdf.setFillColor(colour); pdf.circle(x, y, .8, 'F'); };
  const bullets = (items, x, y, width, size = 9) => { for (const item of items) { dot(x + 1, y - 1.1); y = para(item, x + 5, y, width - 5, size, C.ink, 4.1) + 1.6; } return y; };
  const logoAt = (data, size, x, y, w) => image(data, x, y, w, w * size[1] / size[0], false);
  let page = 0;
  const pages = [];
  function frame(title, sub) {
    page++;
    pdf.setFillColor(C.paper); pdf.rect(0, 0, W, H, 'F');
    logoAt(PDF_LOGO, PDF_LOGO_SIZE, M, 7, 25);
    set(8.5, true, C.ink); pdf.text(`${name}, ${s.size}`, W - M, 14.5, {align: 'right'});
    set(7.2, false, C.muted); pdf.text(`${ref}  |  ${date}`, W - M, 19.5, {align: 'right'});
    pdf.setDrawColor(C.sage); pdf.setLineWidth(.6); pdf.line(M, 26, W - M, 26);
    heading(title, M, 39, 22);
    if (sub) para(sub, M, 46.5, CW, 9.6, C.muted, 4.5);
    pdf.setFillColor(C.ink); pdf.rect(0, 283, W, 14, 'F');
    set(8.8, true, C.light); pdf.textWithLink('Book a free call with Coastal', M, 289.5, {url: booking});
    set(7.2, false, C.frost); pdf.text(`${CONTACT.phone}  |  ${CONTACT.email}  |  coastalgardenbuildings.co.uk`, M, 293.6);
    pages.push(pdf.getCurrentPageInfo().pageNumber);
  }
  function framedImage(data, x, y, w, h, caption, fallback) {
    pdf.setFillColor(C.pale); pdf.rect(x, y, w, h, 'F');
    const ok = image(data, x, y, w, h) || (fallback ? fallback(x, y, w, h) : false);
    if (!ok) { set(8.5, false, C.muted); pdf.text('View not available on this device', x + w / 2, y + h / 2, {align: 'center'}); }
    if (caption) label(caption, x, y + h + 4.4);
    return ok;
  }

  // A dimensioned plan drawn as vectors: walls, posts, doors and windows, canopy, roof edge.
  const T = state.range === 'log' ? state.thickness / 1000 : state.range === 'prima' ? state.thickness / 1000 : .028;
  const over = r.over[state.roof] ?? .2;
  function drawPlan(x, y, w, h) {
    const walls = outline(state), blocks = obstacles(state);
    const cw = state.canopy.side === 'none' ? 0 : state.canopy.depth;
    const ex0 = -state.width / 2 - over - (state.canopy.side === 'left' ? cw : 0), ex1 = state.width / 2 + over + (state.canopy.side === 'right' ? cw : 0);
    const ez0 = -state.depth / 2 - over, ez1 = state.depth / 2 + over;
    const k = Math.min((w - 34) / (ex1 - ex0), (h - 34) / (ez1 - ez0));
    const ox = x + (w - (ex1 - ex0) * k) / 2 - ex0 * k, oz = y + 8 + (h - 34 - (ez1 - ez0) * k) / 2 - ez0 * k;
    const P = (px, pz) => [ox + px * k, oz + pz * k];
    pdf.setFillColor('#ffffff'); pdf.rect(x, y, w, h, 'F');
    // Roof edge, dashed, over the room and any canopy.
    pdf.setDrawColor(C.muted); pdf.setLineWidth(.25); pdf.setLineDashPattern([1.2, 1], 0);
    const [rx0, rz0] = P(ex0, ez0), [rx1, rz1] = P(ex1, ez1); pdf.rect(rx0, rz0, rx1 - rx0, rz1 - rz0, 'S');
    pdf.setLineDashPattern([], 0);
    // Canopy: its posts and, when chosen, the decking.
    if (cw) {
      const cx0 = state.canopy.side === 'left' ? -state.width / 2 - cw : state.width / 2, cx1 = cx0 + cw;
      const [a0, b0] = P(cx0, -state.depth / 2), [a1, b1] = P(cx1, state.depth / 2);
      if (state.options.veranda) { pdf.setFillColor('#e9e0d0'); pdf.rect(a0, b0, a1 - a0, b1 - b0, 'F'); }
      pdf.setDrawColor(C.sage); pdf.setLineWidth(.25); pdf.rect(a0, b0, a1 - a0, b1 - b0, 'S');
      const post = r.post || .12, outer = state.canopy.side === 'left' ? cx0 : cx1;
      pdf.setFillColor(C.ink);
      for (const pz of [-state.depth / 2, state.depth / 2]) { const [px, py] = P(outer - post / 2, pz - post / 2); pdf.rect(px, py, post * k, post * k, 'F'); }
      set(7, true, C.green); const [lx, lz] = P((cx0 + cx1) / 2, 0); pdf.text('CANOPY', lx, lz, {align: 'center', charSpace: .4});
    }
    // Walls, as filled bands of the wall thickness, inside the outline.
    pdf.setFillColor(C.ink);
    for (const wl of walls) {
      const t = Math.max(T, .03);
      const a = [Math.min(wl.a[0], wl.b[0]), Math.min(wl.a[1], wl.b[1])], b = [Math.max(wl.a[0], wl.b[0]), Math.max(wl.a[1], wl.b[1])];
      let x0 = a[0], z0 = a[1], x1 = b[0], z1 = b[1];
      if (wl.axis === 'x') { if (wl.n[1] > 0) z0 = z1 - t; else z1 = z0 + t; } else if (wl.n[0] > 0) x0 = x1 - t; else x1 = x0 + t;
      const [px0, pz0] = P(x0, z0), [px1, pz1] = P(x1, z1); pdf.rect(px0, pz0, px1 - px0, pz1 - pz0, 'F');
    }
    // Pro posts and log stability points along the walls.
    for (const wl of walls) for (const [a0, b0] of blocks[wl.id]) {
      const c = (a0 + b0) / 2, half = Math.max(.06, (b0 - a0) / 2);
      const px = wl.a[0] + wl.u[0] * c, pz = wl.a[1] + wl.u[1] * c;
      const [qx, qz] = P(px - half, pz - half); pdf.setFillColor('#8a8f88'); pdf.rect(qx, qz, half * 2 * k, half * 2 * k, 'F');
    }
    if (state.range === 'pro') { pdf.setFillColor('#8a8f88'); for (const [cx, cz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { const [qx, qz] = P(cx * state.width / 2 - (cx > 0 ? .14 : 0), cz * state.depth / 2 - (cz > 0 ? .14 : 0)); pdf.rect(qx, qz, .14 * k, .14 * k, 'F'); } }
    // Doors (sage) and windows (light blue) cut into the walls, door swings shown as arcs.
    for (const o of state.openings) {
      const wl = walls.find(v => v.id === o.wall), sp = OPENINGS[o.type], c = o.p * wl.L;
      const a = [wl.a[0] + wl.u[0] * (c - sp.fw / 2), wl.a[1] + wl.u[1] * (c - sp.fw / 2)];
      const b = [wl.a[0] + wl.u[0] * (c + sp.fw / 2), wl.a[1] + wl.u[1] * (c + sp.fw / 2)];
      const t = Math.max(T, .03) + .02;
      const xs = [a[0], b[0], a[0] - wl.n[0] * t, b[0] - wl.n[0] * t], zs = [a[1], b[1], a[1] - wl.n[1] * t, b[1] - wl.n[1] * t];
      const [px0, pz0] = P(Math.min(...xs), Math.min(...zs)), [px1, pz1] = P(Math.max(...xs), Math.max(...zs));
      pdf.setFillColor(sp.group === 'door' ? '#ffffff' : '#d9e8ef'); pdf.rect(px0, pz0, px1 - px0, pz1 - pz0, 'F');
      pdf.setDrawColor(sp.group === 'door' ? C.green : '#5f8ea3'); pdf.setLineWidth(.35); pdf.rect(px0, pz0, px1 - px0, pz1 - pz0, 'S');
      if (sp.group === 'door' && (sp.kind === 'single' || sp.kind === 'double')) {
        const leaf = sp.kind === 'single' ? sp.w : sp.w / 2;
        const hinges = sp.kind === 'single' ? [a] : [a, b];
        pdf.setLineWidth(.2);
        hinges.forEach((hp, i) => {
          const dir = i === 0 ? 1 : -1;
          const [hx, hz] = P(hp[0] - wl.n[0] * t, hp[1] - wl.n[1] * t);
          const ex = hx + (-wl.n[0]) * leaf * k, ez = hz + (-wl.n[1]) * leaf * k;
          pdf.line(hx, hz, ex, ez);
          const steps = 10; let lx = ex, lz = ez;
          for (let j = 1; j <= steps; j++) {
            const ang = (Math.PI / 2) * j / steps;
            const ux = -wl.n[0] * Math.cos(ang) + wl.u[0] * dir * Math.sin(ang), uz = -wl.n[1] * Math.cos(ang) + wl.u[1] * dir * Math.sin(ang);
            const nx = hx + ux * leaf * k, nz = hz + uz * leaf * k; pdf.line(lx, lz, nx, nz); lx = nx; lz = nz;
          }
        });
      }
    }
    const dim = (p1, p2, text, dx, dz) => {
      const [x1, z1] = P(...p1), [x2, z2] = P(...p2);
      pdf.setDrawColor(C.muted); pdf.setLineWidth(.2);
      pdf.line(x1 + dx, z1 + dz, x2 + dx, z2 + dz);
      for (const [px, pz] of [[x1, z1], [x2, z2]]) pdf.line(px + dx - (dz ? 1.2 : 0), pz + dz - (dx ? 1.2 : 0), px + dx + (dz ? 1.2 : 0), pz + dz + (dx ? 1.2 : 0));
      set(7.6, true, C.ink); pdf.text(text, (x1 + x2) / 2 + dx + (dx ? 1.8 : 0), (z1 + z2) / 2 + dz + (dz > 0 ? 3.4 : dz < 0 ? -1.4 : 1), {align: dx ? 'left' : 'center'});
    };
    dim([-state.width / 2, state.depth / 2], [state.width / 2, state.depth / 2], `${metres(state.width)} wide`, 0, over * k + 5);
    const rightEdge = state.width / 2 + (state.canopy.side === 'right' ? cw : 0);
    dim([rightEdge, -state.depth / 2], [rightEdge, state.depth / 2], `${metres(state.depth)} deep`, over * k + 4, 0);
    if (cw) { const cx0 = state.canopy.side === 'left' ? -state.width / 2 - cw : state.width / 2; dim([cx0, -state.depth / 2], [cx0 + cw, -state.depth / 2], metres(cw), 0, -(over * k + 3)); }
    set(7, true, C.green); pdf.text('FRONT', P(0, ez1)[0], P(0, ez1)[1] + 12, {align: 'center', charSpace: .5});
    const [cx, cz] = P(0, 0);
    set(12, false, C.ink, true); pdf.text(`${area(state).toFixed(1)}m²`, cx, cz + 1.5, {align: 'center'});
    return true;
  }

  const hgt = heightsOf(state);
  // ---- 1. Cover ----------------------------------------------------------------------------
  page++; pages.push(1);
  pdf.setFillColor(C.ink); pdf.rect(0, 0, W, H, 'F');
  logoAt(PDF_LOGO_WHITE, PDF_LOGO_WHITE_SIZE, M, 9, 40);
  set(8, false, C.frost); pdf.text(`Prepared ${date}`, W - M, 17.5, {align: 'right'}); pdf.text(ref, W - M, 23, {align: 'right'});
  heading(`Your ${name}`, M, 52, 30, '#ffffff');
  para(`${first ? first + ', here is your' : 'Your'} ${s.size} ${ROOFS[state.roof].name.toLowerCase()} building, designed in 3D with Coastal Garden Buildings.`, M, 60, CW, 11, C.frost, 5);
  pdf.setFillColor(C.ink2); pdf.rect(M, 68, CW, 108, 'F');
  if (!image(shots.hero, M, 68, CW, 108)) drawPlan(M, 68, CW, 108);
  para(shots.hero ? 'Rendered from your design. Furniture, planting and the garden are illustrative.' : 'Your plan. Download the PDF from the designer on a device with 3D to add the renders.', M, 181, CW, 7.6, C.frost, 3.5);
  const facts = [[s.size, 'Outside size'], [`${area(state).toFixed(1)}m²`, 'Footprint'], [metres2(hgt.total), state.roof === 'flat' ? 'Overall height' : 'Height to the top']];
  facts.forEach(([v, c], i) => { heading(v, M + i * (CW / 3), 196, 18, '#ffffff', CW / 3 - 4); set(8, false, C.frost); pdf.text(c, M + i * (CW / 3), 202); });
  pdf.setDrawColor('#4a4546'); pdf.setLineWidth(.3); pdf.line(M, 209, W - M, 209);
  label('Your Lugarde price', M, 217, C.frost);
  heading(price ? money(price.total) : 'Priced by Coastal', M, 229, 22, C.light, 100);
  para(price ? `The building kit as designed, priced by Lugarde for Coastal: VAT and delivery to mainland UK included${price.discount ? ', with Lugarde’s current offer' : ''}. Itemised on page 6.` : 'Coastal will price this design for you with your quote.', M, 236, 104, 8.4, C.frost, 3.9);
  para('Coastal’s own work (the base, delivery and installation, electrics and any removal) is quoted after a free site survey or call.', 126, 217, 68, 8.4, C.frost, 3.9);
  button('Book a free call', M, 252, 112, 14, booking, C.green);
  set(8, false, C.frost); pdf.text(`Free and no obligation. Or call Coastal on ${CONTACT.phone}.`, M, 273);
  qr(booking, 154, 246, 36); set(7.4, false, C.frost); pdf.text('Scan to book', 172, 287, {align: 'center'});

  // ---- 2. Front and four sides ------------------------------------------------------------
  pdf.addPage(); frame('Your building from every side', `${treatmentName(state.treatment)}; ${roofName(state).replace(/^./, c => c.toLowerCase())}.`);
  const fullH = CW * 10 / 16 * .74;
  framedImage(shots.front, M, 54, CW, fullH, 'Front', null);
  const gw = (CW - 6) / 2, gh = gw * 10 / 16;
  const y2 = 54 + fullH + 9;
  framedImage(shots.left, M, y2, gw, gh, 'Left side', null);
  framedImage(shots.right, M + gw + 6, y2, gw, gh, 'Right side', null);
  const y3 = y2 + gh + 9;
  framedImage(shots.back, M, y3, gw, gh, 'Back', null);
  framedImage(shots.hero, M + gw + 6, y3, gw, gh, 'From the front corner', null);

  // ---- 3. Inside, plan, dusk --------------------------------------------------------------
  const insideRows = specRows(state).filter(x => x.section === 'Inside');
  pdf.addPage(); frame('Step inside', 'Furniture is shown for scale, as a ' + s.use.toLowerCase() + ', and is not part of the price.');
  framedImage(shots.inside, M, 54, CW, fullH, 'Looking in from the doors', null);
  framedImage(shots.inside2, M, y2, gw, gh, 'Looking back towards the doors', null);
  framedImage(shots.plan, M + gw + 6, y2, gw, gh, 'From above, roof off', (x, y, w0, h0) => drawPlan(x, y, w0, h0));
  framedImage(shots.dusk, M, y3, gw, gh, 'At dusk', null);
  pdf.setFillColor(C.pale); pdf.rect(M + gw + 6, y3, gw, gh, 'F');
  let iy = y3 + 8;
  set(11, false, C.ink, true); pdf.text('Inside', M + gw + 11, iy); iy += 6;
  const insideLines = insideRows.length ? insideRows.map(x => `${x.label}: ${x.value}`) : ['No internal floor or insulation chosen: the building as Lugarde supplies it.'];
  insideLines.push(`Walls about ${metres2(hgt.wall)} high`);
  for (const line of insideLines.slice(0, 6)) iy = para(line, M + gw + 11, iy, gw - 10, 8.2, C.ink, 3.9) + .8;

  // ---- 4. Plan --------------------------------------------------------------------------
  pdf.addPage(); frame('Your plan', `Outside dimensions in metres. Doors in green, windows in blue${state.range === 'pro' ? ', Pro posts in grey' : state.range === 'log' && Object.values(obstacles(state)).some(x => x.length) ? ', log stability points in grey' : ''}; the dashed line is the roof edge.`);
  drawPlan(M, 54, CW, 148);
  let py = 212;
  set(11, false, C.ink, true); pdf.text('Doors and windows', M, py); py += 2;
  const walls = outline(state);
  for (const o of [...state.openings].sort((a, b) => ['front', 'right', 'back', 'left'].indexOf(a.wall) - ['front', 'right', 'back', 'left'].indexOf(b.wall))) {
    const sp = OPENINGS[o.type], wl = walls.find(v => v.id === o.wall), from = o.p * wl.L - sp.fw / 2;
    pdf.setDrawColor(C.line); pdf.setLineWidth(.2); pdf.line(M, py, W - M, py);
    set(8.4, false, C.ink); pdf.text(`${WALLS[o.wall]}: ${sp.name} (Lugarde ${sp.code})`, M, py + 4.4);
    set(8.4, false, C.muted); pdf.text(`${Math.round(sp.fw * 100)} × ${Math.round(sp.fh * 100)}cm frame, ${from.toFixed(2)}m from the left corner`, W - M, py + 4.4, {align: 'right'});
    py += 6.2;
    if (py > 276) break;
  }
  if (!state.openings.length) para('No doors or windows chosen yet.', M, py + 5, CW, 8.6, C.muted);

  // ---- 5. Specification --------------------------------------------------------------------
  pdf.addPage(); frame('Your specification', 'Everything you chose, and how each item is priced.');
  let sy = 54, lastSection = '';
  const chip = (status, x, y) => {
    const text = status === 'quoted' ? 'QUOTED BY COASTAL' : status === 'included' ? 'INCLUDED' : 'IN YOUR PRICE';
    pdf.setFillColor(status === 'quoted' ? '#f3f1ee' : status === 'included' ? C.pale : C.green);
    set(6.2, true, status === 'quoted' ? '#4e4a45' : status === 'included' ? C.green : '#ffffff');
    const tw = pdf.getTextWidth(text) + 4; pdf.rect(x - tw, y - 3.5, tw, 5, 'F'); pdf.text(text, x - tw + 2, y);
  };
  for (const row of specRows(state)) {
    if (sy > 268) { pdf.addPage(); frame('Your specification, continued', ''); sy = 50; lastSection = ''; }
    if (row.section !== lastSection) { sy += lastSection ? 7 : 3; set(11, false, C.ink, true); pdf.text(row.section, M, sy); sy += 2.5; lastSection = row.section; }
    const lines = pdf.splitTextToSize(row.value, 96);
    pdf.setDrawColor(C.line); pdf.setLineWidth(.2); pdf.line(M, sy, W - M, sy);
    set(8.2, true, C.muted); pdf.text(row.label, M, sy + 4.5);
    set(8.6, false, C.ink); pdf.text(lines, M + 44, sy + 4.5, {lineHeightFactor: 1.3});
    if (!row.info) chip(row.status, W - M, sy + 4.5);
    sy += 4.3 * lines.length + 3;
  }

  // ---- 6. Price ----------------------------------------------------------------------------
  pdf.addPage(); frame('Your Lugarde price', price ? `Priced by Lugarde’s own price engine for Coastal’s dealer account on ${new Date(price.checked || Date.now()).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}.` : 'Coastal prices your design with your quote.');
  let qy = 54;
  if (price) {
    const groups = Object.keys(GROUP_NAME).filter(g => price.lines.some(l => l.group === g));
    for (const g of groups) {
      if (qy > 240) { pdf.addPage(); frame('Your Lugarde price, continued', ''); qy = 50; }
      set(10, false, C.ink, true); pdf.text(GROUP_NAME[g], M, qy + 3.6); qy += 5.2;
      for (const l of price.lines.filter(x => x.group === g)) {
        pdf.setDrawColor(C.line); pdf.setLineWidth(.2); pdf.line(M, qy, W - M, qy);
        const lines = pdf.splitTextToSize(l.label, 130);
        set(8.6, false, C.ink); pdf.text(lines, M, qy + 4.3, {lineHeightFactor: 1.3});
        set(8.6, g === 'offer', g === 'offer' ? C.green : C.ink); pdf.text(money(l.total), W - M, qy + 4.3, {align: 'right'});
        qy += 3.9 * lines.length + 1.9;
      }
      qy += 2;
    }
    pdf.setFillColor(C.ink); pdf.rect(M, qy, CW, 16, 'F');
    set(11, true, '#ffffff'); pdf.text('Your Lugarde price', M + 6, qy + 10);
    set(16, false, C.light, true); pdf.text(money(price.total), W - M - 6, qy + 10.5, {align: 'right'});
    qy += 24;
    qy = para(`Including VAT and delivery to mainland UK, as Lugarde prices it.${price.discount ? ` Lugarde’s current offer is applied (${String((price.lines || []).find(l => l.group === 'offer')?.label || 'offer').replace(/[.:]+$/, '')}).` : ''} Lugarde can change its prices; Coastal confirms the price in your written quote.`, M, qy, CW, 8.4, C.muted, 4) + 4;
  } else {
    qy = para('Lugarde’s price engine didn’t give a price for this design when the PDF was made. Coastal will price it with your quote: book a call or call 01425 274000.', M, qy + 4, CW, 9.4, C.ink, 4.4) + 6;
  }
  if (qy + 40 > 280) { pdf.addPage(); frame('Your price, continued', ''); qy = 50; }
  pdf.setFillColor(C.pale); pdf.rect(M, qy, CW, 40, 'F');
  heading('Quoted separately by Coastal', M + 6, qy + 9, 13);
  const quoted = ['The base for your building, and delivery to your garden', 'Installation by Coastal’s own fitters', 'Electrics, removal of an old building and any site work', ...Object.keys(DEALER_EXTRAS).filter(k => state.extras[k]).map(k => DEALER_EXTRAS[k].name)];
  bullets(quoted.slice(0, 6), M + 6, qy + 16, CW - 12, 8.6);

  // ---- 7. Next steps -----------------------------------------------------------------------
  pdf.addPage(); frame('Your next steps', 'Coastal takes your project from your first question to a finished building.');
  const step = (n, title, copy, y) => { pdf.setFillColor(C.green); pdf.circle(M + 4, y - 1.5, 4, 'F'); set(10, true, '#ffffff'); pdf.text(String(n), M + 4, y - .1, {align: 'center'}); set(11, true, C.ink); pdf.text(title, M + 12, y); para(copy, M + 12, y + 5, 112, 8.8, C.muted, 4.1); };
  step(1, 'A call or a free site survey', 'Talk through your plans, your garden and this design with Coastal (free site surveys within 25 miles), who will advise on the base, access and position.', 62);
  step(2, 'Your design and quote', 'Coastal finalises the building with you in Lugarde’s official configurator and quotes the whole project in writing.', 82);
  step(3, 'Base and delivery', 'Coastal’s team prepares the base and the building arrives from Lugarde, made in the Netherlands.', 102);
  step(4, 'Installation', 'Coastal’s own fitters install it and make sure you are completely happy, with after-sales support to follow.', 122);
  qr(booking, 150, 58, 42); set(7.6, false, C.muted); pdf.text('Scan to book your call', 171, 105, {align: 'center'});
  button('Book a free call', M, 142, CW, 14, booking);
  const tiles = [['Call Coastal', CONTACT.phone, 'tel:' + CONTACT.tel], ['Visit the show site', 'Stewarts Christchurch Garden Centre, Christchurch BH23 4SA, open every day', CONTACT.map], ['Reopen your design', 'Change anything and see it again', link]];
  tiles.forEach(([t, c, url], i) => { const x = M + i * (CW / 3 + .5), w0 = CW / 3 - 3; pdf.setDrawColor(C.line); pdf.setLineWidth(.3); pdf.rect(x, 164, w0, 24, 'S'); set(9.2, true, C.green); pdf.text(t, x + 4, 172); para(c, x + 4, 178, w0 - 8, 7.8, C.muted, 3.6); pdf.link(x, 164, w0, 24, {url}); });
  const keys = ['family', 'showSite', 'survey', 'fitters', 'removal', 'aftersales'];
  keys.forEach((k, i) => { const x = M + (i % 2) * (CW / 2 + 2), y = 200 + Math.floor(i / 2) * 18; pdf.setFillColor(C.sage); pdf.circle(x + 2, y - 1.4, 1.5, 'F'); set(9.6, true, C.ink); pdf.text(USPS[k].title, x + 6, y); para(USPS[k].copy, x + 6, y + 4.6, CW / 2 - 10, 8.2, C.muted, 3.8); });
  para(`${CONTACT.company}, ${CONTACT.email}. Show site: ${CONTACT.showroom}. Images are rendered from your design and are illustrative: colours vary by screen and printer.`, M, 266, CW, 7.2, C.muted, 3.4);

  // Page numbers, now the page count is known.
  const total = pdf.getNumberOfPages();
  for (let i = 2; i <= total; i++) { pdf.setPage(i); set(7.2, false, C.frost); pdf.text(`Your ${name}  |  ${i} of ${total}`, W - M, 291.5, {align: 'right'}); }
  const slug = v => String(v).toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '');
  const filename = `Coastal-Lugarde-${slug(r.name)}-${state.width}x${state.depth}-design.pdf`;
  if (options.save !== false) pdf.save(filename);
  return {filename, pages: total, reference: ref, bytes: options.save === false ? pdf.output('arraybuffer') : null};
}
