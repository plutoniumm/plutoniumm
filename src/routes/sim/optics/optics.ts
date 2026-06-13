export interface Vec {
  x: number;
  y: number;
}

export type Kind =
  | "point"
  | "beam"
  | "mirror"
  | "lens"
  | "block"
  | "prism"
  | "circle"
  | "screen";

export interface El {
  id: number;
  kind: Kind;
  x: number;
  y: number;
  angle: number;
  n: number;
  disp: number;
  f: number;
  len: number;
  size: number;
  apex: number;
  white: boolean;
  wl: number;
  spread: number;
}

export interface Segment {
  a: Vec;
  b: Vec;
  wl: number;
  I: number;
}

export interface TraceOpts {
  /** geometric rays per source */
  rays: number;
  /** spawn Fresnel partial reflections */
  fresnel: boolean;
  maxDepth?: number;
  maxSegs?: number;
}

export interface TraceResult {
  segs: Segment[];
  truncated: boolean;
}

export const VIEW = {
  w: 900,
  h: 560,
};
export const DEG = Math.PI / 180;

const TMIN = 0.05; // ignore hits closer than this along the ray
const STEP = 0.05; // restart offset after an interaction
const EXTENT = 2600; // length of rays that escape the scene
const MIN_I = 0.03; // drop rays dimmer than this
const WHITE_WL = [420, 450, 480, 510, 540, 570, 600, 630, 660, 690];

let nextId = 1;

export function makeEl (kind: Kind, x: number, y: number, over: Partial<El> = {}): El {
  const base: El = {
    id: nextId++,
    kind,
    x,
    y,
    angle: 0,
    n: 1.5,
    disp: 0.01,
    f: 150,
    len: 160,
    size: 100,
    apex: 60,
    white: false,
    wl: 580,
    spread: 360,
  };

  if (kind === "beam") {
    base.len = 40;
    base.white = true;
  }

  if (kind === "block") base.len = 170;
  if (kind === "prism") base.size = 140;
  if (kind === "circle") base.size = 70;

  return {
    ...base,
    ...over,
  };
}

/** index of refraction at wavelength wl (nm), anchored at 550 nm */
export function indexAt (el: El, wl: number): number {
  const um = wl / 1000;

  return el.n + el.disp * (1 / (um * um) - 1 / (0.55 * 0.55));
}

const rot = (p: Vec, c: number, s: number): Vec => ({
  x: p.x * c - p.y * s,
  y: p.x * s + p.y * c,
});

/** world-space vertices of a polygonal glass element, null otherwise */
export function polyOf (el: El): Vec[] | null {
  let local: Vec[];

  if (el.kind === "block") {
    const w = el.len / 2;
    const h = el.size / 2;
    local = [
      {
        x: -w,
        y: -h,
      },
      {
        x: w,
        y: -h,
      },
      {
        x: w,
        y: h,
      },
      {
        x: -w,
        y: h,
      },
    ];
  } else if (el.kind === "prism") {
    const half = (el.apex * DEG) / 2;
    const b = el.size * Math.sin(half);
    const h = el.size * Math.cos(half);
    local = [
      {
        x: 0,
        y: (-2 * h) / 3,
      },
      {
        x: b,
        y: h / 3,
      },
      {
        x: -b,
        y: h / 3,
      },
    ];
  } else {
    return null;
  }

  const c = Math.cos(el.angle);
  const s = Math.sin(el.angle);

  return local.map((p) => {
    const r = rot(p, c, s);

    return {
      x: r.x + el.x,
      y: r.y + el.y,
    };
  });
}

/** endpoints of a line element (mirror, lens, screen) */
export function segOf (el: El): { a: Vec; b: Vec } {
  const dx = (Math.cos(el.angle) * el.len) / 2;
  const dy = (Math.sin(el.angle) * el.len) / 2;

  return {
    a: {
      x: el.x - dx,
      y: el.y - dy,
    },
    b: {
      x: el.x + dx,
      y: el.y + dy,
    },
  };
}

function insidePoly (verts: Vec[], p: Vec): boolean {
  let inside = false;

  for (let i = 0, j = verts.length - 1; i < verts.length; j = i++) {
    const a = verts[i];
    const b = verts[j];

    if (a.y > p.y !== b.y > p.y && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x)
      inside = !inside;
  }

  return inside;
}

export function insideEl (el: El, p: Vec): boolean {
  if (el.kind === "circle") return Math.hypot(p.x - el.x, p.y - el.y) < el.size;
  const verts = polyOf(el);

  return verts ? insidePoly(verts, p) : false;
}

type Act = "mirror" | "absorb" | "lens" | "refract";

interface SegSurf {
  kind: "seg";
  a: Vec;
  b: Vec;
  act: Act;
  el: El;
}

interface CircSurf {
  kind: "circ";
  act: "refract";
  el: El;
}

type Surf = SegSurf | CircSurf;

function surfacesOf (el: El): Surf[] {
  if (
    el.kind === "mirror"
    || el.kind === "screen"
    || el.kind === "lens"
  ) {
    const act: Act = el.kind === "mirror"
      ? "mirror"
      : el.kind === "screen"
        ? "absorb"
        : "lens";
    const { a, b } = segOf(el);

    return [{
      kind: "seg",
      a,
      b,
      act,
      el,
    }];
  }

  if (el.kind === "circle") return [{
    kind: "circ",
    act: "refract",
    el,
  }];

  const verts = polyOf(el);
  if (!verts) return [];
  const out: Surf[] = [];

  for (let i = 0; i < verts.length; i++)
    out.push({
      kind: "seg",
      a: verts[i],
      b: verts[(i + 1) % verts.length],
      act: "refract",
      el,
    });

  return out;
}

interface Hit {
  t: number;
  /** unit surface normal, orientation arbitrary */
  nx: number;
  ny: number;
  surf: Surf;
}

function raySeg (p: Vec, d: Vec, s: SegSurf): Hit | null {
  const sx = s.b.x - s.a.x;
  const sy = s.b.y - s.a.y;
  const denom = d.x * sy - d.y * sx;
  if (Math.abs(denom) < 1e-12) return null;
  const ax = s.a.x - p.x;
  const ay = s.a.y - p.y;
  const t = (ax * sy - ay * sx) / denom;
  const u = (ax * d.y - ay * d.x) / denom;

  if (
    t < TMIN
    || u < 0
    || u > 1
  )
    return null;

  const m = Math.hypot(sx, sy);
  if (m === 0) return null;

  return {
    t,
    nx: sy / m,
    ny: -sx / m,
    surf: s,
  };
}

function rayCirc (p: Vec, d: Vec, s: CircSurf): Hit | null {
  const el = s.el;
  const ox = p.x - el.x;
  const oy = p.y - el.y;
  const b = ox * d.x + oy * d.y;
  const c = ox * ox + oy * oy - el.size * el.size;
  const disc = b * b - c;
  if (disc < 0) return null;

  const sq = Math.sqrt(disc);
  let t = -b - sq;
  if (t < TMIN) t = -b + sq;
  if (t < TMIN) return null;

  const hx = p.x + d.x * t;
  const hy = p.y + d.y * t;

  return {
    t,
    nx: (hx - el.x) / el.size,
    ny: (hy - el.y) / el.size,
    surf: s,
  };
}

interface Ray {
  p: Vec;
  d: Vec;
  wl: number;
  I: number;
  depth: number;
}

function emit (el: El, count: number): Ray[] {
  const wls = el.white ? WHITE_WL : [el.wl];
  const I0 = el.white ? 0.5 : 0.85;
  const dirs: { p: Vec; d: Vec }[] = [];

  if (el.kind === "point") {
    const spread = Math.min(Math.max(el.spread, 1), 360) * DEG;
    const full = spread > 2 * Math.PI - 1e-3;

    for (let i = 0; i < count; i++) {
      const a = full
        ? el.angle + (i / count) * 2 * Math.PI
        : count === 1
          ? el.angle
          : el.angle - spread / 2 + (spread * i) / (count - 1);
      dirs.push({
        p: {
          x: el.x,
          y: el.y,
        },
        d: {
          x: Math.cos(a),
          y: Math.sin(a),
        },
      });
    }
  } else {
    const c = Math.cos(el.angle);
    const s = Math.sin(el.angle);

    for (let i = 0; i < count; i++) {
      const o = count === 1 ? 0 : (i / (count - 1) - 0.5) * el.len;

      dirs.push({
        p: {
          x: el.x - s * o,
          y: el.y + c * o,
        },
        d: {
          x: c,
          y: s,
        },
      });
    }
  }

  const rays: Ray[] = [];

  for (const g of dirs)
    for (const wl of wls)
      rays.push({
        p: {
          x: g.p.x,
          y: g.p.y,
        },
        d: {
          x: g.d.x,
          y: g.d.y,
        },
        wl,
        I: I0,
        depth: 0,
      });

  return rays;
}

const NUM_PROPS = [
  "x", "y", "angle", "n", "disp", "f", "len", "size", "apex", "wl", "spread",
] as const;

/** coerce every numeric field to a finite number; NaN would defeat the
    t/u comparison guards in raySeg and grind out garbage to the cap */
function sane (el: El): El {
  if (NUM_PROPS.every((k) => Number.isFinite(el[k]))) return el;
  const fix = { ...el };

  for (const k of NUM_PROPS) {
    const v = Number(fix[k]);
    fix[k] = Number.isFinite(v) ? v : 0;
  }

  return fix;
}

export function trace (els: El[], opts: TraceOpts): TraceResult {
  const maxDepth = opts.maxDepth ?? 24;
  const maxSegs = opts.maxSegs ?? 12000;
  const surfs: Surf[] = [];
  const stack: Ray[] = [];

  for (const raw of els) {
    const el = sane(raw);
    surfs.push(...surfacesOf(el));
    if (el.kind === "point" || el.kind === "beam") stack.push(...emit(el, opts.rays));
  }

  const segs: Segment[] = [];
  let truncated = false;

  while (stack.length > 0) {
    if (segs.length >= maxSegs) {
      truncated = true;
      break;
    }

    const ray = stack.pop();

    if (
      !ray
      || ray.I < MIN_I
      || ray.depth > maxDepth
    )
      continue;

    let hit: Hit | null = null;

    for (const s of surfs) {
      const h = s.kind === "seg" ? raySeg(ray.p, ray.d, s) : rayCirc(ray.p, ray.d, s);
      if (h && (!hit || h.t < hit.t)) hit = h;
    }

    if (!hit) {
      segs.push({
        a: ray.p,
        b: {
          x: ray.p.x + ray.d.x * EXTENT,
          y: ray.p.y + ray.d.y * EXTENT,
        },
        wl: ray.wl,
        I: ray.I,
      });
      continue;
    }

    const hp = {
      x: ray.p.x + ray.d.x * hit.t,
      y: ray.p.y + ray.d.y * hit.t,
    };
    segs.push({
      a: ray.p,
      b: hp,
      wl: ray.wl,
      I: ray.I,
    });

    const act = hit.surf.act;

    if (act === "absorb")
      continue;

    // surface normal oriented against the incoming ray
    let nx = hit.nx;
    let ny = hit.ny;

    if (nx * ray.d.x + ny * ray.d.y > 0) {
      nx = -nx;
      ny = -ny;
    }

    const spawn = (d: Vec, I: number) => {
      const m = Math.hypot(d.x, d.y);
      if (m < 1e-9 || I < MIN_I) return;
      const dx = d.x / m;
      const dy = d.y / m;
      stack.push({
        p: {
          x: hp.x + dx * STEP,
          y: hp.y + dy * STEP,
        },
        d: {
          x: dx,
          y: dy,
        },
        wl: ray.wl,
        I,
        depth: ray.depth + 1,
      });
    };

    if (act === "mirror") {
      const k = 2 * (ray.d.x * nx + ray.d.y * ny);
      spawn({
        x: ray.d.x - k * nx,
        y: ray.d.y - k * ny,
      }, ray.I);
      continue;
    }

    if (act === "lens") {
      const el = hit.surf.el;
      const cosA = -(ray.d.x * nx + ray.d.y * ny); // |cos| between ray and lens axis

      if (cosA < 1e-4 || Math.abs(el.f) < 5) {
        spawn(ray.d, ray.I); // grazing or degenerate: pass through
        continue;
      }

      // chief ray through the centre is undeviated; it meets the focal
      // plane at F. Real focus (f > 0): refracted ray heads toward F.
      // Virtual focus (f < 0): it heads away from F.
      const t = el.f / cosA;
      const F = {
        x: el.x + ray.d.x * t,
        y: el.y + ray.d.y * t,
      };
      const sgn = el.f > 0 ? 1 : -1;
      const out = {
        x: (F.x - hp.x) * sgn,
        y: (F.y - hp.y) * sgn,
      };

      if (Math.hypot(out.x, out.y) < 1e-6) { spawn(ray.d, ray.I); }
      else { spawn(out, ray.I); }

      continue;
    }

    // refraction at a glass boundary
    const el = hit.surf.el;
    const before = {
      x: hp.x - ray.d.x * 0.5,
      y: hp.y - ray.d.y * 0.5,
    };
    const ng = indexAt(el, ray.wl);
    const fromInside = insideEl(el, before);
    const n1 = fromInside ? ng : 1;
    const n2 = fromInside ? 1 : ng;
    const eta = n1 / n2;
    const cosI = -(ray.d.x * nx + ray.d.y * ny);
    const k = 1 - eta * eta * (1 - cosI * cosI);

    if (k < 0) {
      // total internal reflection
      const r = 2 * (ray.d.x * nx + ray.d.y * ny);
      spawn({
        x: ray.d.x - r * nx,
        y: ray.d.y - r * ny,
      }, ray.I);
      continue;
    }

    const cosT = Math.sqrt(k);
    // unpolarized Fresnel reflectance
    const rs = (n1 * cosI - n2 * cosT) / (n1 * cosI + n2 * cosT);
    const rp = (n1 * cosT - n2 * cosI) / (n1 * cosT + n2 * cosI);
    const R = (rs * rs + rp * rp) / 2;

    const term = eta * cosI - cosT;
    spawn({
      x: eta * ray.d.x + term * nx,
      y: eta * ray.d.y + term * ny,
    }, ray.I * (1 - R));

    if (opts.fresnel) {
      const r = 2 * (ray.d.x * nx + ray.d.y * ny);
      spawn({
        x: ray.d.x - r * nx,
        y: ray.d.y - r * ny,
      }, ray.I * R);
    }
  }

  return {
    segs,
    truncated,
  };
}

const wlCache = new Map<number, [number, number, number]>();

/** approximate sRGB for a wavelength in nm (Bruton's piecewise fit) */
// wavelength -> a 5-band spectrum drawn only from the theme palette. canvas
// can't read CSS vars, so these rgb triples mirror --c5/--c3/--c2/--c1/--c4
// in static/css/global.css. short -> long: violet, blue, teal, orange, red.
const SPECTRUM: [number, number, number][] = [
  [ 175, 82, 222 ], // --c5 purple
  [ 0, 122, 255 ],  // --c3 blue
  [ 48, 176, 199 ], // --c2 teal
  [ 255, 149, 0 ],  // --c1 orange
  [ 255, 45, 85 ],  // --c4 pink
];

export function wlColor (wl: number): [number, number, number] {
  const hit = wlCache.get(wl);
  if (hit) return hit;

  const t = Math.min(Math.max((wl - 380) / (780 - 380), 0), 1);
  const [ r, g, b ] = SPECTRUM[Math.min(4, Math.floor(t * 5))];

  // dim the deep-violet / deep-red extremes, as the spectral version did
  let fade = 1;

  if (wl < 420) { fade = 0.4 + (0.6 * (wl - 380)) / 40; }
  else if (wl > 700) { fade = 0.4 + (0.6 * (780 - wl)) / 80; }

  fade = Math.min(Math.max(fade, 0), 1);
  const rgb: [number, number, number] = [
    Math.round(r * fade), Math.round(g * fade), Math.round(b * fade),
  ];
  wlCache.set(wl, rgb);

  return rgb;
}

function distToSeg (p: Vec, a: Vec, b: Vec): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const m2 = dx * dx + dy * dy;
  const t = m2 === 0 ? 0 : Math.min(Math.max(((p.x - a.x) * dx + (p.y - a.y) * dy) / m2, 0), 1);

  return Math.hypot(p.x - (a.x + dx * t), p.y - (a.y + dy * t));
}

/** generous hit test for picking elements with mouse or touch */
export function hitEl (el: El, p: Vec): boolean {
  if (el.kind === "point" || el.kind === "beam")
    return Math.hypot(p.x - el.x, p.y - el.y) < 16;

  if (el.kind === "circle") return Math.hypot(p.x - el.x, p.y - el.y) < el.size + 6;
  const verts = polyOf(el);

  if (verts) {
    if (insidePoly(verts, p)) return true;

    for (let i = 0; i < verts.length; i++)
      if (distToSeg(p, verts[i], verts[(i + 1) % verts.length]) < 8) return true;

    return false;
  }

  const { a, b } = segOf(el);

  return distToSeg(p, a, b) < 10;
}

export interface Preset {
  name: string;
  rays: number;
  build: () => El[];
}

export const presets: Preset[] = [
  {
    name: "prism rainbow",
    rays: 4,
    build: () => [
      makeEl("beam", 130, 330, {
        angle: -10 * DEG,
        len: 12,
        white: true,
      }),
      makeEl("prism", 450, 260, {
        size: 150,
        apex: 60,
        n: 1.52,
        disp: 0.015,
      }),
      makeEl("screen", 820, 360, {
        angle: 90 * DEG,
        len: 360,
      }),
    ],
  },
  {
    // Newton's recombination: prism disperses white light into a diverging
    // fan, the lens (2f-2f, unit angular magnification) flips the fan into a
    // converging one, and a matched prism cancels the dispersion so the
    // output leaves parallel and overlapping: white again. The beam is kept
    // thin because a width-w beam through the lens picks up an unavoidable
    // w/f geometric fan past the focal crossover.
    name: "recombination",
    rays: 4,
    build: () => [
      makeEl("beam", 60, 254, {
        angle: -13 * DEG,
        len: 2,
        white: true,
      }),
      makeEl("prism", 250, 210, {
        size: 110,
        apex: 50,
        n: 1.5,
        disp: 0.03,
        angle: -2.1 * DEG,
      }),
      makeEl("lens", 479, 271, {
        angle: 96 * DEG,
        f: 104,
        len: 150,
      }),
      makeEl("prism", 672, 355, {
        size: 110,
        apex: 50,
        n: 1.5,
        disp: 0.03,
        angle: 36.5 * DEG,
      }),
      makeEl("screen", 820, 458, {
        angle: 135 * DEG,
        len: 130,
      }),
    ],
  },
  {
    name: "lens imaging",
    rays: 14,
    build: () => [
      makeEl("point", 160, 280, {
        spread: 34,
        angle: 0,
        wl: 600,
        white: false,
      }),
      makeEl("lens", 460, 280, {
        angle: 90 * DEG,
        f: 150,
        len: 240,
      }),
      makeEl("screen", 760, 280, {
        angle: 90 * DEG,
        len: 240,
      }),
    ],
  },
  {
    name: "fiber (TIR)",
    rays: 3,
    build: () => [
      makeEl("beam", 120, 230, {
        angle: 35 * DEG,
        len: 8,
        white: false,
        wl: 532,
      }),
      makeEl("block", 470, 290, {
        len: 560,
        size: 46,
        n: 1.5,
        disp: 0,
      }),
    ],
  },
  {
    name: "periscope",
    rays: 5,
    build: () => [
      makeEl("beam", 140, 150, {
        angle: 0,
        len: 30,
        white: false,
        wl: 580,
      }),
      makeEl("mirror", 520, 150, {
        angle: 45 * DEG,
        len: 80,
      }),
      makeEl("mirror", 520, 420, {
        angle: 45 * DEG,
        len: 80,
      }),
      makeEl("screen", 820, 420, {
        angle: 90 * DEG,
        len: 160,
      }),
    ],
  },
];
