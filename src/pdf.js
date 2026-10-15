// The design pack: an A4 PDF made in the browser from the live 3D scene. Seven pages: cover with
// the hero render; the four sides; inside and the dimensioned plan; the full specification
// and door and window schedule; the price line by line; next steps with a booking link and a
// QR code back to the design. Loaded only when someone asks for the PDF.
import {jsPDF} from 'jspdf';
import qrcode from 'qrcode-generator';
import latoRegular from './pdf-fonts/Lato-Regular-sub.ttf';
import latoBold from './pdf-fonts/Lato-Bold-sub.ttf';
import latoBlack from './pdf-fonts/Lato-Black-sub.ttf';
import logo from './pdf-fonts/coastal-logo.jpg';
import {RANGES, PRODUCTS, ROOFS, PROMO, WALL_NAMES} from './catalog.js';
import {money, specification, designLink} from './model.js';
import {envelope, heights, openingRects} from './geometry.js';
import {COASTAL} from './facts.js';

const W = 210, H = 297, M = 16;
const SLATE = [151, 170, 176], TEAL = [47, 89, 97], INK = [31, 44, 48], MUTED = [76, 92, 96], LINE = [211, 220, 222], SAND = [243, 239, 230];

export async function makePdf({design, price, spec, link, scene, ref, contact}) {
  const doc = new jsPDF({unit: 'mm', format: 'a4', compress: true});
  doc.addFileToVFS('Lato-Regular.ttf', latoRegular); doc.addFont('Lato-Regular.ttf', 'Lato', 'normal');
  doc.addFileToVFS('Lato-Bold.ttf', latoBold); doc.addFont('Lato-Bold.ttf', 'Lato', 'bold');
  doc.addFileToVFS('Lato-Black.ttf', latoBlack); doc.addFont('Lato-Black.ttf', 'LatoBlack', 'normal');
  doc.setProperties({title: `Your ${RANGES[design.range].name} from Coastal Garden Buildings`, author: 'Coastal Garden Buildings', subject: `Design ${ref || ''}`, creator: 'Coastal design studio'});
  // High-resolution renders from the live scene (2000 x 1250 on desktops, smaller on phones).
  const shots = scene?.capture(['hero', 'front', 'right', 'back', 'left', 'inside', 'plan'], {width: 2000, height: 1250}) || {};
  const R = RANGES[design.range], e = envelope(design), today = new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
  const name = [contact?.first, contact?.last].filter(Boolean).join(' ');
  const bookLink = `${link}&book=1`;
  let page = 0;
  const pages = 7;

  const font = (w = 'normal', size = 10, colour = INK) => { if (w === 'black') doc.setFont('LatoBlack', 'normal'); else doc.setFont('Lato', w); doc.setFontSize(size); doc.setTextColor(...colour); };
  const header = (title) => {
    page++;
    if (page > 1) doc.addPage();
    doc.setFillColor(...SLATE); doc.rect(0, 0, W, 24, 'F');
    doc.addImage(`data:image/jpeg;base64,${logo}`, 'JPEG', M, 2, 29.3, 20);
    font('black', 15, [19, 38, 42]); doc.text(title, M + 34, 11);
    font('normal', 9, [19, 38, 42]); doc.text(`${R.name}, ${design.width.toFixed(1)} x ${design.depth.toFixed(1)}m${ref ? `  •  Ref ${ref}` : ''}`, M + 34, 17);
    font('normal', 8, MUTED);
    doc.text(`Coastal Garden Buildings  •  ${COASTAL.phone}  •  ${COASTAL.email}`, M, H - 8);
    doc.text(`Page ${page} of ${pages}`, W - M, H - 8, {align: 'right'});
  };
  const img = (data, x, y, w, h, caption) => {
    doc.setFillColor(238, 242, 243); doc.rect(x, y, w, h, 'F');
    if (data) doc.addImage(data, 'JPEG', x, y, w, h, undefined, 'FAST');
    else { font('normal', 9, MUTED); doc.text('3D view not available on this device', x + w / 2, y + h / 2, {align: 'center'}); }
    if (caption) { font('bold', 9, INK); doc.text(caption, x, y + h + 5); }
  };
  const para = (text, x, y, w, size = 10, colour = INK, weight = 'normal', lh = 1.4) => {
    font(weight, size, colour);
    const lines = doc.splitTextToSize(text, w);
    doc.text(lines, x, y, {lineHeightFactor: lh});
    return y + lines.length * size * .3528 * lh;
  };
  const link_ = (text, x, y, url, size = 10) => { font('bold', size, TEAL); doc.textWithLink(text, x, y, {url}); return y; };

  // 1. Cover.
  header('Your garden building design');
  img(shots.hero, M, 30, W - 2 * M, (W - 2 * M) * 1250 / 2000);
  let y = 30 + (W - 2 * M) * .625 + 10;
  font('black', 22, INK); doc.text(`Your Lugarde ${R.name.toLowerCase()}`, M, y);
  y = para(`${design.width.toFixed(1)}m wide x ${design.depth.toFixed(1)}m deep (${(design.width * design.depth).toFixed(1)}m² inside the walls' outline), ${ROOFS[design.roof].name.toLowerCase()}, ${design.wall}mm walls.`, M, y + 8, 112, 11, MUTED);
  y = para(`Prepared ${today}${name ? ` for ${name}` : ''} by Coastal Garden Buildings, Christchurch: family run since 1979.`, M, y + 2, 112, 10, MUTED);
  if (price) {
    doc.setFillColor(...SAND); doc.roundedRect(W - M - 58, 30 + (W - 2 * M) * .625 + 4, 58, 40, 3, 3, 'F');
    const bx = W - M - 54, by = 30 + (W - 2 * M) * .625 + 13;
    font('bold', 9, MUTED); doc.text('Lugarde price', bx, by);
    font('black', 20, INK); doc.text(money(price.total), bx, by + 10);
    font('normal', 8, MUTED); doc.text(doc.splitTextToSize(`inc VAT and delivery${price.promo ? ', with Lugarde’s 10% offer to 31 Oct 2026' : ''}`, 50), bx, by + 16);
  }
  y = Math.max(y, 30 + (W - 2 * M) * .625 + 50) + 6;
  y = para('This pack shows your design from every side, inside and on plan, with the full specification, Lugarde’s price for it line by line, and what happens next.', M, y, W - 2 * M, 10);
  link_('Open your design online', M, y + 5, link);
  link_('Book a call with Coastal', M + 60, y + 5, bookLink);

  // 2. Every side.
  header('Your building from every side');
  const gw = (W - 2 * M - 6) / 2, gh = gw * .625;
  img(shots.front, M, 30, gw, gh, 'Front'); img(shots.right, M + gw + 6, 30, gw, gh, 'Right side');
  img(shots.back, M, 30 + gh + 12, gw, gh, 'Back'); img(shots.left, M + gw + 6, 30 + gh + 12, gw, gh, 'Left side');
  y = 30 + 2 * gh + 26;
  const h = heights(design);
  y = para(`Heights, as Lugarde measures them from the top of the foundation beams: walls ${h.wall.toFixed(2)}m, top of the roof ${(e.ridge - e.y0).toFixed(2)}m. The roof overhangs the walls by ${Math.round(h.over * 1000)}mm. ${design.range === 'log' ? 'Log ends project 150mm at each corner.' : ''}`, M, y, W - 2 * M, 10, MUTED);
  y = para('Renders show your choices in Lugarde’s construction; timber colour varies with the light and the wood. Coastal has treated samples at the show site.', M, y + 3, W - 2 * M, 9, MUTED);

  // 3. Inside and plan.
  header('Inside and the plan');
  img(shots.inside, M, 30, W - 2 * M, (W - 2 * M) * .5, 'Inside, from the door');
  drawPlan(doc, design, M, 30 + (W - 2 * M) * .5 + 12, W - 2 * M, 112);

  // 4. Specification.
  header('Full specification');
  y = 34;
  for (const [k, v] of spec) {
    font('bold', 10, INK); doc.text(k, M, y);
    const lines = doc.splitTextToSize(v, W - 2 * M - 48);
    font('normal', 10, INK); doc.text(lines, M + 48, y, {lineHeightFactor: 1.35});
    y += Math.max(1, lines.length) * 4.8 + 3;
    doc.setDrawColor(...LINE); doc.line(M, y - 2.2, W - M, y - 2.2);
  }
  y += 6; font('black', 13, INK); doc.text('Door and window schedule', M, y); y += 7;
  font('bold', 9, MUTED); doc.text('Code', M, y); doc.text('Product', M + 22, y); doc.text('Size (mm)', M + 100, y); doc.text('Wall', M + 130, y); doc.text('Centre from wall middle', M + 150, y); y += 5;
  for (const o of design.openings) {
    const p = PRODUCTS[o.code];
    font('normal', 9, INK);
    doc.text(o.code.toUpperCase(), M, y); doc.text(doc.splitTextToSize(p.name, 74)[0], M + 22, y); doc.text(`${p.w} x ${p.h}`, M + 100, y); doc.text(WALL_NAMES[o.wall], M + 130, y); doc.text(`${o.at >= 0 ? '+' : ''}${Math.round(o.at * 1000)}`, M + 150, y);
    y += 5.2;
  }
  y = para('Dimensions are Lugarde’s nominal sizes, outside wall to outside wall. Coastal confirms the exact specification, positions and access at the site survey.', M, y + 4, W - 2 * M, 9, MUTED);

  // 5. Price.
  header('Your price, line by line');
  y = 34;
  if (!price) y = para('This size is priced by Coastal on request.', M, y, W - 2 * M, 11);
  else {
    const row = (label, amount, weight = 'normal', colour = INK) => {
      const lines = doc.splitTextToSize(label, W - 2 * M - 40);
      font(weight, 10, colour); doc.text(lines, M, y, {lineHeightFactor: 1.3}); doc.text(money(amount), W - M, y, {align: 'right'});
      y += lines.length * 4.6 + 2.4; doc.setDrawColor(...LINE); doc.line(M, y - 1.8, W - M, y - 1.8);
    };
    for (const l of price.lines) row(l.label, l.amount);
    row('Products', price.products, 'bold');
    row('Lugarde transport surcharge', price.transport);
    if (price.promo) row(`${PROMO.label} (products only)`, price.promo, 'normal', [44, 107, 63]);
    y += 2; font('black', 14, INK); doc.text('Total inc VAT', M, y); doc.text(money(price.total), W - M, y, {align: 'right'}); y += 6;
    font('normal', 9, MUTED); doc.text(`Of which VAT at 20%: ${money(price.vat)}`, M, y); y += 8;
    if (price.quoted?.length) { font('bold', 10, INK); doc.text('Coastal will quote for', M, y); y += 5; for (const q of price.quoted) { font('normal', 10, INK); doc.text(`• ${q.label}`, M + 2, y); y += 5; } y += 3; }
    y = para(`Where the prices come from: Lugarde’s own configurator, opened with Coastal’s dealer link, read on ${price.captured}. Doors, windows and fixed-price extras are Lugarde’s list prices. Prices include VAT and Lugarde’s delivery to mainland England and Wales (Scotland adds £83). ${price.promo ? PROMO.terms + ' ' : ''}Not included: installation, a base, electrics, removal of an old building and painting, which Coastal quotes after a free site survey.`, M, y, W - 2 * M, 9, MUTED);
  }

  // 6. Next steps.
  header('What happens next');
  y = 36;
  const steps = [
    ['Talk it through', `Book a call and Coastal will go through your design and price with you. Or call ${COASTAL.phone}.`, bookLink, 'Book a call'],
    ['Free site survey', 'Coastal offers a free, no obligation site survey within 25 miles of Christchurch, to check access, the base and the exact size.', null],
    ['See it in person', `Over 90 buildings on show at ${COASTAL.showSite}. Winter opening: Monday to Saturday 9am to 4.30pm, Sunday 10.30am to 4pm.`, COASTAL.maps, 'Directions'],
    ['Confirm and order', 'Coastal confirms the final specification and price in writing, and arranges delivery, installation and any groundworks you want them to do.', null]
  ];
  steps.forEach(([t, body, url, label], i) => {
    doc.setFillColor(...TEAL); doc.circle(M + 5, y - 1.5, 5, 'F');
    font('black', 11, [255, 255, 255]); doc.text(String(i + 1), M + 5, y + .4, {align: 'center'});
    font('black', 13, INK); doc.text(t, M + 14, y);
    const yy = para(body, M + 14, y + 6, W - 2 * M - 14, 10, INK);
    if (url) link_(label, M + 14, yy + 3, url);
    y = yy + (url ? 12 : 8);
  });
  // QR code to the design.
  const qr = qrcode(0, 'M'); qr.addData(link); qr.make();
  const n = qr.getModuleCount(), size = 38, cell = size / n, qx = W - M - size, qy = H - 30 - size;
  doc.setFillColor(0, 0, 0);
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qr.isDark(r, c)) doc.rect(qx + c * cell, qy + r * cell, cell + .02, cell + .02, 'F');
  font('normal', 9, MUTED); doc.text(doc.splitTextToSize('Scan to open this design on your phone, or share it with someone at home.', 60), qx - 64, qy + 10);

  // 7. About.
  header('About Coastal and Lugarde');
  y = para('Coastal Garden Buildings', M, 36, W - 2 * M, 14, INK, 'bold');
  y = para('Established in 1979 as Broomhill Garden Buildings, Coastal is a family run business at Stewarts Christchurch Garden Centre, with over 90 buildings on show and its own team of fitters, some of whom have worked with Coastal for over 20 years. Coastal also lays bases, removes old buildings and can arrange electrics and painting.', M, y + 2, W - 2 * M, 10);
  y = para('Lugarde', M, y + 8, W - 2 * M, 14, INK, 'bold');
  y = para(`${R.system}: ${R.blurb} Every Lugarde building has a five-year warranty on manufacturing and structural defects, and is supplied untreated unless you choose a factory treatment.`, M, y + 2, W - 2 * M, 10);
  y = para('Lugarde’s 2022/2023 brochure is on Coastal’s website.', M, y + 8, W - 2 * M, 10, MUTED);
  link_('Download the Lugarde brochure', M, y + 3, COASTAL.brochure);
  return doc.output('blob');
}

/** A dimensioned plan, drawn as vectors so it stays sharp at any zoom. */
function drawPlan(doc, d, x, y, w, h) {
  const e = envelope(d);
  const totalW = e.roofX1 - e.roofX0 + 1.4, totalD = e.roofZ1 - e.roofZ0 + 1.4;
  const s = Math.min(w / totalW, (h - 10) / totalD);
  const cx = x + w / 2, cy = y + (h - 10) / 2;
  const X = v => cx + v * s, Y = v => cy + v * s;
  doc.setFont('Lato', 'bold'); doc.setFontSize(9); doc.setTextColor(...INK);
  doc.text('Plan (outside dimensions, mm)', x, y - 2);
  // Roof outline dashed, walls solid.
  doc.setDrawColor(...MUTED); doc.setLineDashPattern([1.2, 1], 0); doc.setLineWidth(.2);
  doc.rect(X(e.roofX0), Y(e.roofZ0), (e.roofX1 - e.roofX0) * s, (e.roofZ1 - e.roofZ0) * s);
  doc.setLineDashPattern([], 0);
  const t = Math.max(e.t, .06);
  doc.setFillColor(...INK); doc.setDrawColor(...INK);
  const W2 = d.width / 2, D2 = d.depth / 2;
  doc.rect(X(-W2), Y(-D2), d.width * s, t * s, 'F'); doc.rect(X(-W2), Y(D2 - t), d.width * s, t * s, 'F');
  doc.rect(X(-W2), Y(-D2), t * s, d.depth * s, 'F'); doc.rect(X(W2 - t), Y(-D2), t * s, d.depth * s, 'F');
  // Openings: a gap in the wall, door swings drawn as arcs.
  for (const wall of ['front', 'back', 'left', 'right']) {
    for (const r of openingRects(d, wall)) {
      const a = r.u0, b = r.u1, door = r.p.kind === 'door';
      doc.setFillColor(255, 255, 255);
      let rx, ry, rw, rh;
      if (wall === 'front') { rx = X(a); ry = Y(D2 - t) - .2; rw = (b - a) * s; rh = t * s + .4; }
      else if (wall === 'back') { rx = X(-b); ry = Y(-D2) - .2; rw = (b - a) * s; rh = t * s + .4; }
      else if (wall === 'left') { rx = X(-W2) - .2; ry = Y(a); rw = t * s + .4; rh = (b - a) * s; }
      else { rx = X(W2 - t) - .2; ry = Y(-b); rw = t * s + .4; rh = (b - a) * s; }
      doc.rect(rx, ry, rw, rh, 'F');
      doc.setDrawColor(...TEAL); doc.setLineWidth(.35);
      if (door) doc.line(rx, ry + rh / 2, rx + rw, ry + rh / 2); else { doc.line(rx, ry + rh * .35, rx + rw, ry + rh * .35); doc.line(rx, ry + rh * .65, rx + rw, ry + rh * .65); }
      doc.setFontSize(6.5); doc.setTextColor(...TEAL); doc.setFont('Lato', 'bold');
      const lx = rx + rw / 2, ly = ry + rh / 2;
      const off = wall === 'front' ? 4.5 : wall === 'back' ? -3 : 0;
      if (wall === 'left' || wall === 'right') doc.text(`${r.o.code.toUpperCase()} ${r.p.w}`, wall === 'left' ? rx - 1.5 : rx + rw + 1.5, ly, {align: wall === 'left' ? 'right' : 'left', baseline: 'middle'});
      else doc.text(`${r.o.code.toUpperCase()} ${r.p.w}`, lx, ly + off, {align: 'center'});
    }
  }
  // Overall dimensions.
  doc.setDrawColor(...INK); doc.setLineWidth(.2); doc.setFontSize(8); doc.setTextColor(...INK); doc.setFont('Lato', 'bold');
  const dy = Y(e.roofZ1) + 6;
  doc.line(X(-W2), dy, X(W2), dy); doc.line(X(-W2), dy - 1.5, X(-W2), dy + 1.5); doc.line(X(W2), dy - 1.5, X(W2), dy + 1.5);
  doc.text(`${Math.round(d.width * 1000)}`, cx, dy - 1.2, {align: 'center'});
  const dx = X(e.roofX1) + 6;
  doc.line(dx, Y(-D2), dx, Y(D2)); doc.line(dx - 1.5, Y(-D2), dx + 1.5, Y(-D2)); doc.line(dx - 1.5, Y(D2), dx + 1.5, Y(D2));
  doc.text(`${Math.round(d.depth * 1000)}`, dx + 1.5, cy, {baseline: 'middle'});
  doc.setFont('Lato', 'normal'); doc.setTextColor(...MUTED); doc.setFontSize(8);
  doc.text('Front', cx, Y(e.roofZ1) + 12, {align: 'center'});
  doc.text(`Dashed line: roof edge, ${Math.round(e.over * 1000)}mm beyond the walls.`, x, y + h - 2);
}
