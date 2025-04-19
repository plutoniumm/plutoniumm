import * as MJS from 'mathjs';

type Complex = [number, number]
type MComplex = MJS.Complex
type Cplx = MJS.Complex | Complex

function lin (start: number, end: number, num: number): number[] {
  const step = (end - start) / (num - 1);
  return Array.from({ length: num }, (_, i) => start + i * step);
};

function ucircle (t: number): Cplx {
  const x = Math.cos(t);
  const y = Math.sin(t);

  return [x, y];
}

function rcircle (t: number, r: number): Cplx {
  const x = r * Math.cos(t);
  const y = r * Math.sin(t);

  return [x, y];
};

function square_pref (alpha: number): number {
  // f(\alpha) = \sec(\alpha- \frac \pi2 \lfloor \frac {4\alpha + \pi}{2\pi}\rfloor )
  return 1 / Math.cos(
    alpha - Math.floor((4 * alpha + Math.PI) / (2 * Math.PI)) * Math.PI / 2
  );
}
function usquare (i: number): Cplx {
  return [
    Math.cos(i) * square_pref(i) / 2,
    Math.sin(i) * square_pref(i) / 2
  ]
};

function rsquare (i: number, r: number): Cplx {
  return [
    r * Math.cos(i) * square_pref(i) / 2,
    r * Math.sin(i) * square_pref(i) / 2
  ];
}

type Zip<T> = (a: T[], b: T[]) => T[][];
function zip (a, b): Zip<any> {
  return a.map((_, i) => [a[i], b[i]]);
}

export default {
  lin, zip,

  cos: Math.cos,
  sin: Math.sin,

  Rng: {
    circ: (prec) => lin(0, Math.PI * 2, prec),
  },

  Cplx: {
    prod: (a: Complex, b: Complex): Complex => {
      const pro: MComplex = MJS.multiply(
        MJS.complex(...a),
        MJS.complex(...b),
      )

      return [pro.re, pro.im]
    },
    sum: (a: Complex, b: Complex): Complex => {
      const sum = MJS.add(
        MJS.complex(...a),
        MJS.complex(...b),
      )

      return [sum.re, sum.im]
    },
    pow: (a: Complex, b: Complex): Complex => {
      const pow = MJS.pow(
        MJS.complex(...a),
        MJS.complex(...b)
      )

      return [pow.re, pow.im]
    }
  },

  Map: {
    ucircle, rcircle,
    usquare, rsquare,
    square_pref,
  },
  "2Pi": Math.PI * 2,
}