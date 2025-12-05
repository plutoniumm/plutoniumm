// Rng: {
//     circ: (prec) => lin(0, Math.PI * 2, prec),
//     ones: (prec) => lin(0, 1, prec)
//   },

type Range = [number, number];

function lin (range: Range, steps: number): number[] {
  const [start, end] = range;

  const step = (end - start) / (steps - 1);
  return Array.from({ length: steps }, (_, i) => start + i * step);
};

function ucirc (t: number): Cplx {
  const x = Math.cos(t);
  const y = Math.sin(t);

  return [x, y];
}

function rcirc (t: number, r: number): Cplx {
  const x = r * Math.cos(t);
  const y = r * Math.sin(t);

  return [x, y];
};

export const Domain = {
  linear: lin,
  linear2d: (
    rangeX: Range,
    rangeY: Range,
    stepsX: number,
    stepsY: number
  ): number[][] => {
    const xs = lin(rangeX, stepsX);
    const ys = lin(rangeY, stepsY);

    const points: number[][] = [];
    xs.forEach(x => {
      ys.forEach(y => {
        points.push([x, y]);
      });
    });

    return points;
  }
}