// Aaronson–Gottesman CHP stabilizer tableau (arXiv:quant-ph/0406196).
// State for n qubits is 2n+1 rows (n destabilizers, n stabilizers, 1 scratch).
// Each row is a Pauli: x bits + z bits packed into Uint32Array words, plus a
// phase bit r. Layout is flat row-major: row i owns words [i*W, (i+1)*W).

export interface MeasureResult {
  outcome: 0 | 1;
  random: boolean;
}

export class Clifford {
  n: number;
  /** words per row = ceil(n / 32) */
  W: number;
  /** 2n + 1 (destabilizers, stabilizers, scratch) */
  rows: number;
  xs: Uint32Array;
  zs: Uint32Array;
  r: Uint8Array;

  constructor(n: number) {
    if (!Number.isInteger(n) || n < 1) throw new Error("n must be a positive integer");
    this.n = n;
    this.W = (n + 31) >>> 5;
    this.rows = 2 * n + 1;
    this.xs = new Uint32Array(this.rows * this.W);
    this.zs = new Uint32Array(this.rows * this.W);
    this.r = new Uint8Array(this.rows);
    this.reset();
  }

  /** identity tableau: destabilizer i = X_i, stabilizer i = Z_i, all phases + */
  reset (): void {
    const { n, W, xs, zs, r } = this;
    xs.fill(0);
    zs.fill(0);
    r.fill(0);

    for (let i = 0; i < n; i++) {
      const //
        w = i >>> 5,
        m = 1 << (i & 31);
      xs[i * W + w] |= m;
      zs[(i + n) * W + w] |= m;
    }
  }

  h (q: number): void {
    const { W, xs, zs, r } = this;
    const //
      w = q >>> 5,
      m = 1 << (q & 31);

    for (let i = 0, o = w; i < this.rows - 1; i++, o += W) {
      const //
        x = xs[o] & m,
        z = zs[o] & m;
      if (x && z) r[i] ^= 1;

      if (!x !== !z) {
        xs[o] ^= m;
        zs[o] ^= m;
      }
    }
  }

  s (q: number): void {
    const { W, xs, zs, r } = this;
    const //
      w = q >>> 5,
      m = 1 << (q & 31);

    for (let i = 0, o = w; i < this.rows - 1; i++, o += W) {
      const x = xs[o] & m;

      if (x) {
        if (zs[o] & m) r[i] ^= 1;
        zs[o] ^= m;
      }
    }
  }

  x (q: number): void {
    const { W, zs, r } = this;
    const //
      w = q >>> 5,
      m = 1 << (q & 31);

    for (let i = 0, o = w; i < this.rows - 1; i++, o += W) {
      if (zs[o] & m) r[i] ^= 1;
    }
  }

  z (q: number): void {
    const { W, xs, r } = this;
    const //
      w = q >>> 5,
      m = 1 << (q & 31);

    for (let i = 0, o = w; i < this.rows - 1; i++, o += W) {
      if (xs[o] & m) r[i] ^= 1;
    }
  }

  /** Y = Z then X (global phase is not tracked) */
  y (q: number): void {
    this.z(q);
    this.x(q);
  }

  cnot (c: number, t: number): void {
    const { W, xs, zs, r } = this;
    const //
      wc = c >>> 5,
      mc = 1 << (c & 31);
    const //
      wt = t >>> 5,
      mt = 1 << (t & 31);

    for (let i = 0, o = 0; i < this.rows - 1; i++, o += W) {
      const //
        xc = !!(xs[o + wc] & mc),
        zc = !!(zs[o + wc] & mc);
      const //
        xt = !!(xs[o + wt] & mt),
        zt = !!(zs[o + wt] & mt);

      if (
        xc
        && zt
        && xt === zc
      )
        r[i] ^= 1; // r ^= xc & zt & (xt ^ zc ^ 1)

      if (xc) xs[o + wt] ^= mt;
      if (zt) zs[o + wc] ^= mc;
    }
  }

  cz (c: number, t: number): void {
    this.h(t);
    this.cnot(c, t);
    this.h(t);
  }

  swap (a: number, b: number): void {
    this.cnot(a, b);
    this.cnot(b, a);
    this.cnot(a, b);
  }

  clone (): Clifford {
    const c = Object.create(Clifford.prototype) as Clifford;
    c.n = this.n;
    c.W = this.W;
    c.rows = this.rows;
    c.xs = this.xs.slice();
    c.zs = this.zs.slice();
    c.r = this.r.slice();

    return c;
  }

  private swapRows (a: number, b: number): void {
    const { W, xs, zs, r } = this;
    const //
      oa = a * W,
      ob = b * W;

    for (let k = 0; k < W; k++) {
      let t = xs[oa + k]; xs[oa + k] = xs[ob + k]; xs[ob + k] = t;
      t = zs[oa + k]; zs[oa + k] = zs[ob + k]; zs[ob + k] = t;
    }

    const t = r[a]; r[a] = r[b]; r[b] = t;
  }

  /**
   * Row h *= row i with the CHP phase rule:
   * g(x1,z1,x2,z2) = 0           if x1=z1=0
   *                = z2 - x2     if x1=1, z1=1
   *                = z2(2x2 - 1) if x1=1, z1=0
   *                = x2(1 - 2z2) if x1=0, z1=1
   * t = 2r_h + 2r_i + sum_j g(x_ij, z_ij, x_hj, z_hj) is 0 or 2 (mod 4).
   */
  private rowsum (h: number, i: number): void {
    const { n, W, xs, zs, r } = this;
    const //
      oh = h * W,
      oi = i * W;
    let t = 2 * r[h] + 2 * r[i];

    for (let j = 0; j < n; j++) {
      const //
        w = j >>> 5,
        m = 1 << (j & 31);
      const //
        x1 = xs[oi + w] & m,
        z1 = zs[oi + w] & m;

      if (!x1 && !z1)
        continue;

      const //
        x2 = xs[oh + w] & m,
        z2 = zs[oh + w] & m;

      if (x1 && z1) { t += (z2 ? 1 : 0) - (x2 ? 1 : 0); }
      else if (x1) {
        if (z2) t += x2 ? 1 : -1;
      }
      else {
        if (x2) t += z2 ? -1 : 1;
      }
    }

    r[h] = ((t % 4) + 4) % 4 === 2 ? 1 : 0;

    for (let w = 0; w < W; w++) {
      xs[oh + w] ^= xs[oi + w];
      zs[oh + w] ^= zs[oi + w];
    }
  }

  /** coin in [0,1) forces the random branch (for replayable circuits) */
  measure (a: number, coin?: number): MeasureResult {
    const { n, W, xs, zs, r } = this;
    const //
      w = a >>> 5,
      m = 1 << (a & 31);

    // a stabilizer anticommuting with Z_a => outcome is random
    let p = -1;

    for (let i = n; i < 2 * n; i++) {
      if (xs[i * W + w] & m) {
        p = i;
        break;
      }
    }

    if (p >= 0) {
      for (let i = 0; i < 2 * n; i++) {
        if (i !== p && (xs[i * W + w] & m)) this.rowsum(i, p);
      }

      const //
        src = p * W,
        dst = (p - n) * W;

      for (let k = 0; k < W; k++) {
        xs[dst + k] = xs[src + k];
        zs[dst + k] = zs[src + k];
        xs[src + k] = 0;
        zs[src + k] = 0;
      }

      r[p - n] = r[p];
      zs[src + w] = m;
      r[p] = (coin ?? Math.random()) < 0.5 ? 0 : 1;

      return {
        outcome: r[p] as 0 | 1,
        random: true,
      };
    }

    // deterministic: accumulate into the scratch row 2n
    const sc = 2 * n;
    const os = sc * W;

    for (let k = 0; k < W; k++) {
      xs[os + k] = 0;
      zs[os + k] = 0;
    }

    r[sc] = 0;

    for (let i = 0; i < n; i++) {
      if (xs[i * W + w] & m) this.rowsum(sc, i + n);
    }

    return {
      outcome: r[sc] as 0 | 1,
      random: false,
    };
  }

  /** stabilizer generators (rows n..2n-1) as signed Pauli strings, e.g. "+XZIIY" */
  stabilizerStrings (): string[] {
    const { n, W, xs, zs, r } = this;
    const out: string[] = [];

    for (let i = n; i < 2 * n; i++) {
      const o = i * W;
      let s = r[i] ? "-" : "+";

      for (let j = 0; j < n; j++) {
        const //
          w = j >>> 5,
          m = 1 << (j & 31);
        const //
          x = xs[o + w] & m,
          z = zs[o + w] & m;
        s += x
          ? (z ? "Y" : "X")
          : z
            ? "Z"
            : "I";
      }

      out.push(s);
    }

    return out;
  }

  /**
   * Reduced state of one qubit. A stabilizer state leaves each qubit either
   * pure (some +/-P_q with P in {X,Y,Z} is in the group) or maximally mixed,
   * i.e. entangled with the rest, in which case this returns null.
   * sign 0 means +P (|0>, |+>, |i>), sign 1 means -P (|1>, |->, |-i>).
   */
  localState (q: number): { axis: "X" | "Y" | "Z"; sign: 0 | 1 } | null {
    const { n, W, xs, zs, r } = this;
    const //
      w = q >>> 5,
      m = 1 << (q & 31);
    // does row i anticommute with P_q?

    const anti = (i: number, axis: "X" | "Y" | "Z"): boolean => {
      const //
        x = !!(xs[i * W + w] & m),
        z = !!(zs[i * W + w] & m);
      if (axis === "X") return z;
      if (axis === "Z") return x;

      return x !== z;
    };

    for (const axis of ["Z", "X", "Y"] as const) {
      let det = true;

      for (let i = n; i < 2 * n; i++) {
        if (anti(i, axis)) {
          det = false;
          break;
        }
      }

      if (!det)
        continue;

      // P_q is in the group up to sign: multiply (into scratch) the stabilizer
      // rows whose destabilizer partners anticommute with P_q, exactly the
      // deterministic branch of measure() generalized to X and Y.
      const //
        sc = 2 * n,
        os = sc * W;
      xs.fill(0, os, os + W);
      zs.fill(0, os, os + W);
      r[sc] = 0;

      for (let i = 0; i < n; i++) {
        if (anti(i, axis)) this.rowsum(sc, i + n);
      }

      return {
        axis,
        sign: r[sc] as 0 | 1,
      };
    }

    return null;
  }

  /**
   * Partition qubits into entangled groups: Gaussian-eliminate the stabilizer
   * generators on a throwaway clone, then union qubits that share a
   * generator's support. Pure qubits come out as singletons.
   */
  clusters (): number[][] {
    const { n, W } = this;
    const c = this.clone();
    let row = n;

    for (const bits of [c.xs, c.zs]) {
      for (let j = 0; j < n && row < 2 * n; j++) {
        const //
          w = j >>> 5,
          m = 1 << (j & 31);
        let k = -1;

        for (let i = row; i < 2 * n; i++) {
          if (bits[i * W + w] & m) {
            k = i;
            break;
          }
        }

        if (k < 0)
          continue;

        c.swapRows(k, row);

        for (let i = n; i < 2 * n; i++) {
          if (i !== row && (bits[i * W + w] & m)) c.rowsum(i, row);
        }

        row++;
      }
    }

    const parent = Array.from({ length: n }, (_, i) => i);

    const find = (a: number): number =>
      parent[a] === a ? a : (parent[a] = find(parent[a]));

    for (let i = n; i < 2 * n; i++) {
      const o = i * W;
      let first = -1;

      for (let j = 0; j < n; j++) {
        const //
          w = j >>> 5,
          m = 1 << (j & 31);

        if ((c.xs[o + w] | c.zs[o + w]) & m) {
          if (first < 0) { first = j; }
          else { parent[find(j)] = find(first); }
        }
      }
    }

    const groups = new Map<number, number[]>();

    for (let q = 0; q < n; q++) {
      const root = find(q);
      const g = groups.get(root);

      if (g) { g.push(q); }
      else { groups.set(root, [q]); }
    }

    return [...groups.values()];
  }
}

export interface TestResult {
  name: string;
  pass: boolean;
  detail: string;
}

const fmt = (m: MeasureResult) => `${m.outcome} (${m.random ? "random" : "forced"})`;

export function runSelfTest (): { pass: boolean; results: TestResult[] } {
  const results: TestResult[] = [];

  { // Bell pair: first shot random, second forced to match
    const c = new Clifford(2);
    c.h(0);
    c.cnot(0, 1);
    const stabs = c.stabilizerStrings().join(" ");
    const m0 = c.measure(0);
    const m1 = c.measure(1);
    results.push({
      name: "Bell pair",
      pass: stabs === "+XX +ZZ"
        && m0.random
        && !m1.random
        && m1.outcome === m0.outcome,
      detail: `stabs=${stabs}, m0=${fmt(m0)}, m1=${fmt(m1)}`,
    });
  }

  { // X|0> measures 1 deterministically
    const c = new Clifford(1);
    c.x(0);
    const m = c.measure(0);
    results.push({
      name: "X then measure",
      pass: !m.random && m.outcome === 1,
      detail: `m=${fmt(m)}`,
    });
  }

  { // GHZ(3): all three outcomes equal, only the first is random
    const c = new Clifford(3);
    c.h(0);
    c.cnot(0, 1);
    c.cnot(0, 2);
    const //
      m0 = c.measure(0),
      m1 = c.measure(1),
      m2 = c.measure(2);
    results.push({
      name: "GHZ(3)",
      pass: m0.random
        && !m1.random
        && !m2.random
        && m1.outcome === m0.outcome
        && m2.outcome === m0.outcome,
      detail: `m0=${fmt(m0)}, m1=${fmt(m1)}, m2=${fmt(m2)}`,
    });
  }

  return {
    pass: results.every((t) => t.pass),
    results,
  };
}
