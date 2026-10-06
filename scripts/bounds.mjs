/* The box a shape's geometry covers, in the icon's units — curves and arcs by their true extent, not their control
   points, so a check against the field reads what is drawn. Strokes are not counted: the field bounds the geometry,
   as the set has always been drawn. */

const nums = (s) => (s.match(/-?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?/gi) ?? []).map(Number);

function arcNumbers(s) {
  const out = [];
  const re = /\s*,?\s*(-?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?)/iy;
  let i = 0;
  while (i < s.length) {
    const k = out.length % 7;
    if (k === 3 || k === 4) {
      const m = /^[\s,]*([01])/.exec(s.slice(i));
      if (!m) break;
      out.push(Number(m[1]));
      i += m[0].length;
      continue;
    }
    re.lastIndex = i;
    const m = re.exec(s);
    if (!m) break;
    out.push(Number(m[1]));
    i = re.lastIndex;
  }
  return out;
}

function cubicExtrema(p0, p1, p2, p3) {
  const a = -p0 + 3 * p1 - 3 * p2 + p3, b = 2 * (p0 - 2 * p1 + p2), c = p1 - p0;
  const ts = [];
  if (Math.abs(a) < 1e-12) { if (Math.abs(b) > 1e-12) ts.push(-c / b); }
  else { const d = b * b - 4 * a * c; if (d >= 0) { const r = Math.sqrt(d); ts.push((-b + r) / (2 * a), (-b - r) / (2 * a)); } }
  return ts.filter((t) => t > 0 && t < 1).map((t) => (1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t * t * p2 + t ** 3 * p3);
}
function quadExtrema(p0, p1, p2) {
  const d = p0 - 2 * p1 + p2;
  if (Math.abs(d) < 1e-12) return [];
  const t = (p0 - p1) / d;
  return t > 0 && t < 1 ? [(1 - t) ** 2 * p0 + 2 * (1 - t) * t * p1 + t * t * p2] : [];
}
/* An arc's points at every quarter angle it passes, from its endpoint form (SVG 1.1, F.6.5). */
function arcPoints(x1, y1, rx, ry, phi, fa, fs, x2, y2) {
  if (rx === 0 || ry === 0) return [];
  const cos = Math.cos((phi * Math.PI) / 180), sin = Math.sin((phi * Math.PI) / 180);
  const dx = (x1 - x2) / 2, dy = (y1 - y2) / 2;
  const x1p = cos * dx + sin * dy, y1p = -sin * dx + cos * dy;
  rx = Math.abs(rx); ry = Math.abs(ry);
  const lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
  if (lambda > 1) { rx *= Math.sqrt(lambda); ry *= Math.sqrt(lambda); }
  const num = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p;
  const co = (fa === fs ? -1 : 1) * Math.sqrt(Math.max(0, num / (rx * rx * y1p * y1p + ry * ry * x1p * x1p)));
  const cxp = (co * rx * y1p) / ry, cyp = (-co * ry * x1p) / rx;
  const cx = cos * cxp - sin * cyp + (x1 + x2) / 2, cy = sin * cxp + cos * cyp + (y1 + y2) / 2;
  const angle = (ux, uy, vx, vy) => Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy);
  const t1 = angle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
  let dt = angle((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry);
  if (!fs && dt > 0) dt -= 2 * Math.PI; else if (fs && dt < 0) dt += 2 * Math.PI;
  const out = [];
  const at = (t) => [cx + rx * Math.cos(t) * cos - ry * Math.sin(t) * sin, cy + rx * Math.cos(t) * sin + ry * Math.sin(t) * cos];
  for (let k = -8; k <= 8; k++) {
    const t = (k * Math.PI) / 2;
    const rel = dt > 0 ? t - t1 : t1 - t;
    const norm = ((rel % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    if (norm > 0 && norm < Math.abs(dt)) out.push(at(t));
  }
  return out;
}

export function pathBounds(d) {
  const xs = [], ys = [];
  let x = 0, y = 0, sx = 0, sy = 0, cx = 0, cy = 0, prev = "";
  const add = (px, py) => { xs.push(px); ys.push(py); };
  for (const [, cmd, args] of d.matchAll(/([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g)) {
    /* An arc's two flags are single digits that may touch what follows ("0 0 110 2" is flags 1 and 1, then 0 2). */
    const n = cmd.toUpperCase() === "A" ? arcNumbers(args) : nums(args);
    const rel = cmd === cmd.toLowerCase();
    const C = cmd.toUpperCase();
    if (C === "Z") { x = sx; y = sy; add(x, y); prev = C; continue; }
    const step = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7 }[C];
    for (let i = 0; i + step <= n.length; i += step) {
      const a = n.slice(i, i + step);
      const ox = rel ? x : 0, oy = rel ? y : 0;
      if (C === "M" || C === "L" || C === "T") {
        const nx = a[0] + ox, ny = a[1] + oy;
        if (C === "T") { const qx = prev === "Q" || prev === "T" ? 2 * x - cx : x, qy = prev === "Q" || prev === "T" ? 2 * y - cy : y; xs.push(...quadExtrema(x, qx, nx)); ys.push(...quadExtrema(y, qy, ny)); cx = qx; cy = qy; }
        x = nx; y = ny; add(x, y);
        if (C === "M" && i === 0) { sx = x; sy = y; }
      } else if (C === "H") { x = a[0] + (rel ? x : 0); add(x, y); }
      else if (C === "V") { y = a[0] + (rel ? y : 0); add(x, y); }
      else if (C === "C" || C === "S") {
        const [x1, y1] = C === "C" ? [a[0] + ox, a[1] + oy] : prev === "C" || prev === "S" ? [2 * x - cx, 2 * y - cy] : [x, y];
        const o = C === "C" ? 2 : 0;
        const x2 = a[o] + ox, y2 = a[o + 1] + oy, nx = a[o + 2] + ox, ny = a[o + 3] + oy;
        xs.push(...cubicExtrema(x, x1, x2, nx)); ys.push(...cubicExtrema(y, y1, y2, ny));
        cx = x2; cy = y2; x = nx; y = ny; add(x, y);
      } else if (C === "Q") {
        const qx = a[0] + ox, qy = a[1] + oy, nx = a[2] + ox, ny = a[3] + oy;
        xs.push(...quadExtrema(x, qx, nx)); ys.push(...quadExtrema(y, qy, ny));
        cx = qx; cy = qy; x = nx; y = ny; add(x, y);
      } else if (C === "A") {
        const nx = a[5] + ox, ny = a[6] + oy;
        for (const [px, py] of arcPoints(x, y, a[0], a[1], a[2], a[3], a[4], nx, ny)) add(px, py);
        x = nx; y = ny; add(x, y);
      }
      prev = C;
    }
  }
  return xs.length ? { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) } : null;
}

/** The geometry's box of one element. */
export function elementBounds(tag, a) {
  const n = (k, fallback = 0) => (a[k] === undefined ? fallback : Number(a[k]));
  if (tag === "path") return pathBounds(String(a.d ?? ""));
  if (tag === "rect") return { minX: n("x"), minY: n("y"), maxX: n("x") + n("width"), maxY: n("y") + n("height") };
  if (tag === "circle") return { minX: n("cx") - n("r"), maxX: n("cx") + n("r"), minY: n("cy") - n("r"), maxY: n("cy") + n("r") };
  if (tag === "ellipse") return { minX: n("cx") - n("rx"), maxX: n("cx") + n("rx"), minY: n("cy") - n("ry"), maxY: n("cy") + n("ry") };
  if (tag === "line") return { minX: Math.min(n("x1"), n("x2")), maxX: Math.max(n("x1"), n("x2")), minY: Math.min(n("y1"), n("y2")), maxY: Math.max(n("y1"), n("y2")) };
  if (tag === "polyline" || tag === "polygon") { const p = nums(String(a.points ?? "")); const xs = p.filter((_, i) => i % 2 === 0), ys = p.filter((_, i) => i % 2 === 1); return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) }; }
  return null;
}
