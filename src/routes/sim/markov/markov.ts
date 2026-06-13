// Finite Markov chain engine. Pure functions only: no DOM.
// States are indices 0..n-1. Edges carry non-negative weights; the
// transition probability is weight / row sum. A state with no outgoing
// weight is treated as absorbing: its row becomes an implicit self-loop.

export interface Edge {
  from: number;
  to: number;
  w: number;
}

export interface Pt {
  x: number;
  y: number;
}

export type StateType = "transient" | "recurrent" | "absorbing";

export interface ClassInfo {
  /** state indices in this communicating class, ascending */
  states: number[];
  /** closed under the dynamics: no edge leaves the class */
  recurrent: boolean;
  /** gcd of cycle lengths inside the class, 0 if the class has no edge */
  period: number;
}

export interface Analysis {
  /** class index per state */
  comp: number[];
  classes: ClassInfo[];
  type: StateType[];
  irreducible: boolean;
  /** irreducible and aperiodic */
  ergodic: boolean;
  nRecurrent: number;
}

export const MAXN = 10;
export const VIEW = {
  w: 720,
  h: 420,
};

export const uniform = (n: number): number[] => Array(n).fill(1 / n);

export const pointMass = (n: number, i: number): number[] => {
  const out = Array(n).fill(0);
  out[i] = 1;

  return out;
};

/** weight matrix from an edge list; parallel edges add */
export function matrixOf (n: number, edges: Edge[]): number[][] {
  const W: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (const e of edges)
    if (
      e.from >= 0
      && e.from < n
      && e.to >= 0
      && e.to < n
      && e.w > 0
    )
      W[e.from][e.to] += e.w;

  return W;
}

/** row-normalise weights into a stochastic matrix; zero rows become self-loops */
export function normalise (W: number[][]): number[][] {
  return W.map((row, i) => {
    let s = 0;

    for (const w of row)
        if (w > 0) s += w;

    if (s <= 0) return row.map((_, j) => (j === i ? 1 : 0));

    return row.map((w) => (w > 0 ? w / s : 0));
  });
}

/** one step of the chain: returns pi P */
export function stepDist (pi: number[], P: number[][]): number[] {
  const n = pi.length;
  const out = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const p = pi[i];

    if (p === 0)
        continue;

    const row = P[i];
    for (let j = 0; j < n; j++) out[j] += p * row[j];
  }

  return out;
}

/** trajectory [pi, piP, piP², ...] of length steps+1 */
export function evolve (pi: number[], P: number[][], steps: number): number[][] {
  const out = [pi.slice()];
  for (let t = 0; t < steps; t++) out.push(stepDist(out[t], P));

  return out;
}

/** total variation distance, ½ Σ|aᵢ − bᵢ| */
export function tvDistance (a: number[], b: number[]): number {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += Math.abs(a[i] - b[i]);

  return s / 2;
}

/** P' = (1−d)P + d·(1/n): teleport to a uniform state with probability d */
export function damp (P: number[][], d: number): number[][] {
  const n = P.length;
  if (n === 0 || d <= 0) return P;
  const u = d / n;

  return P.map((row) => row.map((p) => (1 - d) * p + u));
}

/**
 * A stationary distribution reachable from pi0 (uniform if omitted).
 * Power iteration on the lazy chain (P + I)/2, which keeps the same
 * stationary vectors as P but is aperiodic, so the iteration converges
 * geometrically even when P is periodic. On reducible chains the answer
 * depends on pi0, which is the point.
 */
export function stationary (
  P: number[][],
  pi0?: number[],
  tol = 1e-13,
  maxIter = 100000,
): number[] {
  const n = P.length;
  if (n === 0) return [];
  let pi = pi0 ? pi0.slice() : uniform(n);

  for (let t = 0; t < maxIter; t++) {
    const fwd = stepDist(pi, P);
    const nx = fwd.map((v, i) => (v + pi[i]) / 2);
    if (tvDistance(nx, pi) < tol) return nx;
    pi = nx;
  }

  return pi;
}

/** strongly connected components (Tarjan); each component sorted ascending */
export function sccs (adj: boolean[][]): number[][] {
  const n = adj.length;
  const index = Array(n).fill(-1);
  const low = Array(n).fill(0);
  const onstack = Array(n).fill(false);
  const stack: number[] = [];
  const out: number[][] = [];
  let idx = 0;

  function strong (v: number) {
    index[v] = low[v] = idx++;
    stack.push(v);
    onstack[v] = true;

    for (let w = 0; w < n; w++) {
      if (!adj[v][w])
          continue;

      if (index[w] < 0) {
        strong(w);
        low[v] = Math.min(low[v], low[w]);
      } else if (onstack[w]) {
        low[v] = Math.min(low[v], index[w]);
      }
    }

    if (low[v] === index[v]) {
      const c: number[] = [];
      let w: number;

      do {
        w = stack.pop() ?? v;
        onstack[w] = false;
        c.push(w);
      } while (w !== v);

      c.sort((a, b) => a - b);
      out.push(c);
    }
  }

  for (let v = 0; v < n; v++)
      if (index[v] < 0) strong(v);

  return out;
}

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** period of one SCC: gcd of (level[u]+1 − level[v]) over its internal edges */
function classPeriod (states: number[], adj: boolean[][]): number {
  const level = new Map<number, number>();
  level.set(states[0], 0);
  const q = [states[0]];

  for (let qi = 0; qi < q.length; qi++) {
    const u = q[qi];
    const lu = level.get(u) ?? 0;

    for (const v of states)
      if (adj[u][v] && !level.has(v)) {
        level.set(v, lu + 1);
        q.push(v);
      }
  }

  let g = 0;

  for (const u of states)
    for (const v of states)
      if (adj[u][v]) g = gcd(g, Math.abs((level.get(u) ?? 0) + 1 - (level.get(v) ?? 0)));

  return g;
}

/** communicating classes, state types, and per-class periods of P */
export function classify (P: number[][]): Analysis {
  const n = P.length;
  const adj = P.map((row) => row.map((p) => p > 1e-12));
  const comps = sccs(adj);

  const comp = Array(n).fill(0);
  comps.forEach((c, k) => c.forEach((s) => (comp[s] = k)));

  const classes: ClassInfo[] = comps.map((states, k) => {
    let closed = true;

    for (const u of states)
      for (let v = 0; v < n && closed; v++)
        if (adj[u][v] && comp[v] !== k) closed = false;

    return {
      states,
      recurrent: closed,
      period: classPeriod(states, adj),
    };
  });

  const type: StateType[] = Array(n).fill("transient");

  for (const c of classes)
    if (c.recurrent)
      for (const s of c.states)
        type[s] = c.states.length === 1 ? "absorbing" : "recurrent";

  const irreducible = n > 0 && classes.length === 1;
  const ergodic = irreducible && classes[0].period === 1;
  const nRecurrent = classes.filter((c) => c.recurrent).length;

  return {
    comp,
    classes,
    type,
    irreducible,
    ergodic,
    nRecurrent,
  };
}

export interface Preset {
  name: string;
  cap: string;
  nodes: Pt[];
  edges: Edge[];
  /** damping to apply on load */
  d: number;
  /** start the walk as a point mass here; uniform if absent */
  start?: number;
}

const e = (from: number, to: number, w: number): Edge => ({
  from,
  to,
  w,
});

export const presets: Preset[] = [
  {
    name: "weather",
    cap: "three states, every state reachable from every other: ergodic, converges from any start.",
    nodes: [
      {
        x: 210,
        y: 140,
      },
      {
        x: 470,
        y: 140,
      },
      {
        x: 340,
        y: 320,
      },
    ],
    edges: [
      e(0, 0, 7), e(0, 1, 2), e(0, 2, 1),
      e(1, 0, 3), e(1, 1, 4), e(1, 2, 3),
      e(2, 0, 2), e(2, 1, 4), e(2, 2, 4),
    ],
    d: 0,
    start: 0,
  },
  {
    name: "gambler's ruin",
    cap: "fair coin, walk left or right; the ends absorb. where you end depends on where you start.",
    nodes: [
      {
        x: 90,
        y: 210,
      },
      {
        x: 230,
        y: 210,
      },
      {
        x: 370,
        y: 210,
      },
      {
        x: 510,
        y: 210,
      },
      {
        x: 650,
        y: 210,
      },
    ],
    edges: [
      e(1, 0, 1), e(1, 2, 1),
      e(2, 1, 1), e(2, 3, 1),
      e(3, 2, 1), e(3, 4, 1),
    ],
    d: 0,
    start: 2,
  },
  {
    name: "cycle",
    cap: "period 4: a point mass orbits forever and never converges, yet the stationary distribution is uniform.",
    nodes: [
      {
        x: 360,
        y: 80,
      },
      {
        x: 550,
        y: 210,
      },
      {
        x: 360,
        y: 340,
      },
      {
        x: 170,
        y: 210,
      },
    ],
    edges: [e(0, 1, 1), e(1, 2, 1), e(2, 3, 1), e(3, 0, 1)],
    d: 0,
    start: 0,
  },
  {
    name: "two islands",
    cap: "no path between the pairs: reducible, two recurrent classes, the limit depends on the start.",
    nodes: [
      {
        x: 170,
        y: 140,
      },
      {
        x: 170,
        y: 300,
      },
      {
        x: 550,
        y: 140,
      },
      {
        x: 550,
        y: 300,
      },
    ],
    edges: [
      e(0, 0, 1), e(0, 1, 2), e(1, 0, 1),
      e(2, 2, 1), e(2, 3, 1), e(3, 2, 3),
    ],
    d: 0,
    start: 0,
  },
  {
    name: "tiny web",
    cap: "pages D,E form a trap that soaks up all the mass. damping teleports out and makes the chain ergodic.",
    nodes: [
      {
        x: 140,
        y: 120,
      },
      {
        x: 360,
        y: 80,
      },
      {
        x: 290,
        y: 250,
      },
      {
        x: 520,
        y: 180,
      },
      {
        x: 620,
        y: 330,
      },
    ],
    edges: [
      e(0, 1, 1),
      e(1, 2, 1),
      e(2, 0, 1), e(2, 3, 1),
      e(3, 4, 1),
      e(4, 3, 1),
    ],
    d: 0.15,
    start: 0,
  },
];
