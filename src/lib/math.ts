function lin (start: number, end: number, num: number): number[] {
  const step = (end - start) / (num - 1);
  return Array.from({ length: num }, (_, i) => start + i * step);
};

function ucircle (t: number): number[] {
  const x = Math.cos(t);
  const y = Math.sin(t);

  return [x, y];
}

function rcircle (t: number, r: number): number[] {
  const x = r * Math.cos(t);
  const y = r * Math.sin(t);

  return [x, y];
};

// f(\alpha) = \sec(\alpha- \frac \pi2 \lfloor \frac {4\alpha + \pi}{2\pi}\rfloor )
function sq_sec (alpha: number): number {
  return 1 / Math.cos(
    alpha - Math.floor((4 * alpha + Math.PI) / (2 * Math.PI)) * Math.PI / 2
  );
}
function usquare (i: number): number[] {
  return [
    Math.cos(i) * sq_sec(i) / 2,
    Math.sin(i) * sq_sec(i) / 2
  ]
};

function zip (a: number[], b: number[]): number[][] {
  return a.map((_, i) => [a[i], b[i]]);
}

export default {
  lin, zip,

  cos: Math.cos,
  sin: Math.sin,

  map: {
    ucircle, rcircle,
    usquare
  },
  "2Pi": Math.PI * 2,
}