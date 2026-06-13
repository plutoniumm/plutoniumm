<script lang="ts">
  import { Clifford, runSelfTest } from "./clifford";
  import type { TestResult } from "./clifford";

  type G1 = "H" | "X" | "Y" | "Z" | "S";
  type G2 = "CNOT" | "CZ" | "SWAP";
  type GC = "XC" | "ZC";
  type GateName = G1 | G2 | GC | "M";

  interface Op1 {
    g: G1;
    q: number;
  }

  interface OpM {
    g: "M";
    q: number;
    coin: number;
  }

  interface Op2 {
    g: G2;
    a: number;
    b: number;
  }

  /** Pauli on q, applied only if the M at column sc, wire sq read 1 */

  interface OpC {
    g: GC;
    q: number;
    sc: number;
    sq: number;
  }

  type Op = Op1 | OpM | Op2 | OpC;
  type Column = Op[];

  const //
    MINQ = 2,
    MAXQ = 8,
    MINCOLS = 8;
  const //
    CW = 46,
    RH = 44,
    GUT = 40,
    PAD = 12;

  const colx = (c: number) => GUT + c * CW + CW / 2;
  const wy = (q: number) => PAD + q * RH + RH / 2;

  const isTwo = (g: GateName) =>
    g === "CNOT" || // force newline
    g === "CZ" ||
    g === "SWAP";

  const isCond = (g: GateName) => g === "XC" || g === "ZC";

  const touches = (op: Op, q: number) =>
    "q" in op ? op.q === q : op.a === q || op.b === q;

  const opAt = (cs: Column[], col: number, q: number): Op | undefined =>
    cs[col]?.find((o) => touches(o, q));

  let nQ = 3;
  let cols: Column[] = [];
  let scrub = 0;
  let tool: GateName = "H";
  let pending: { col: number; q: number } | null = null;
  let hover: { col: number; q: number } | null = null;
  let history: { cols: Column[]; nQ: number }[] = [];
  let tantrum = false;
  let nag = "";

  function snapshot() {
    history = [
      ...history.slice(-99),
      {
        cols,
        nQ,
      },
    ];
  }

  function commit(next: Column[]) {
    while (next.length && next[next.length - 1].length === 0)
      next = next.slice(0, -1);

    cols = next;
    scrub = cols.length;
  }

  function grown(col: number): Column[] {
    const next = cols.map((c) => [...c]);
    while (next.length <= col) next.push([]);

    return next;
  }

  function selectTool(g: GateName) {
    tool = g;
    pending = null;
    tantrum = false;
    nag = "";
  }

  function cellClick(col: number, q: number) {
    tantrum = false;
    nag = "";

    if (pending) {
      const p = pending;
      pending = null;

      if (
        isTwo(tool) && // force newline
        col === p.col &&
        q !== p.q &&
        !opAt(cols, col, q)
      ) {
        snapshot();
        const next = grown(col);
        next[col] = [
          ...next[col],
          {
            g: tool as G2,
            a: p.q,
            b: q,
          },
        ];

        commit(next);
      } else if (isCond(tool)) {
        if (col <= p.col) {
          nag = "Place the conditioned gate in a column after its measurement.";
        } else if (!opAt(cols, col, q)) {
          snapshot();
          const next = grown(col);
          next[col] = [
            ...next[col],
            {
              g: tool as GC,
              q,
              sc: p.col,
              sq: p.q,
            },
          ];

          commit(next);
        }
      }

      return;
    }

    const hit = opAt(cols, col, q);

    if (isCond(tool) && hit?.g !== "M") {
      if (!hit) {
        nag =
          "Conditioned gates fire off a measurement: click a cell holding an M first.";

        return;
      }

      // a non-M gate under a conditional tool still deletes, below
    } else if (isCond(tool)) {
      pending = {
        col,
        q,
      };

      return;
    }

    if (hit) {
      snapshot();
      commit(cols.map((c, i) => (i === col ? c.filter((o) => o !== hit) : c)));

      return;
    }

    if (isTwo(tool)) {
      pending = {
        col,
        q,
      };

      return;
    }

    snapshot();
    const next = grown(col);
    const op: Op =
      tool === "M"
        ? {
            g: "M",
            q,
            coin: Math.random(),
          }
        : {
            g: tool as G1,
            q,
          };
    next[col] = [...next[col], op];

    commit(next);
  }

  function undo() {
    const prev = history[history.length - 1];
    if (!prev) return;

    history = history.slice(0, -1);
    cols = prev.cols;
    nQ = prev.nQ;
    pending = null;
    scrub = cols.length;
  }

  function clearAll() {
    if (!cols.length) return;
    snapshot();
    pending = null;
    commit([]);
  }

  function setN(d: number) {
    const n2 = Math.min(MAXQ, Math.max(MINQ, nQ + d));

    if (n2 === nQ) return;
    snapshot();
    nQ = n2;
    pending = null;

    commit(
      cols.map((c) =>
        c.filter((o) =>
          o.g === "XC" || o.g === "ZC"
            ? o.q < n2 && o.sq < n2
            : "q" in o
              ? o.q < n2
              : o.a < n2 && o.b < n2,
        ),
      ),
    );
  }

  function reroll() {
    cols = cols.map((c) =>
      c.map((o) =>
        o.g === "M"
          ? {
              ...o,
              coin: Math.random(),
            }
          : o,
      ),
    );
  }

  const KET: Record<"X" | "Y" | "Z", [string, string]> = {
    X: ["|+⟩", "|-⟩"],
    Y: ["|i⟩", "|-i⟩"],
    Z: ["|0⟩", "|1⟩"],
  };
  const CLUSTER = ["var(--c1)", "var(--c2)", "var(--c5)", "var(--c4)"];

  function runSim(cs: Column[], upto: number, n: number) {
    const sim = new Clifford(n);
    const outcomes = new Map<Op, { outcome: number; random: boolean }>();
    /** conditional gates: 1 fired, 0 condition read 0, -1 no source measured */
    const fired = new Map<Op, -1 | 0 | 1>();
    const stop = Math.min(upto, cs.length);

    for (let c = 0; c < stop; c++) {
      for (const op of cs[c]) {
        if (op.g === "H") {
          sim.h(op.q);
        } else if (op.g === "X") {
          sim.x(op.q);
        } else if (op.g === "Y") {
          sim.y(op.q);
        } else if (op.g === "Z") {
          sim.z(op.q);
        } else if (op.g === "S") {
          sim.s(op.q);
        } else if (op.g === "M") {
          outcomes.set(op, sim.measure(op.q, op.coin));
        } else if (op.g === "XC" || op.g === "ZC") {
          const src = cs[op.sc]?.find((o) => o.g === "M" && o.q === op.sq);
          const res = src && outcomes.get(src);

          if (!res) {
            fired.set(op, -1);
          } else if (res.outcome === 1) {
            if (op.g === "XC") {
              sim.x(op.q);
            } else {
              sim.z(op.q);
            }

            fired.set(op, 1);
          } else {
            fired.set(op, 0);
          }
        } else if (op.g === "CNOT") {
          sim.cnot(op.a, op.b);
        } else if (op.g === "CZ") {
          sim.cz(op.a, op.b);
        } else {
          sim.swap(op.a, op.b);
        }
      }
    }

    const groups = sim.clusters().filter((g) => g.length > 1);
    const cluster: number[] = new Array(n).fill(-1);
    groups.forEach((g, gi) => g.forEach((q) => (cluster[q] = gi)));
    const states = Array.from({ length: n }, (_, q) => {
      const ls = sim.localState(q);

      return {
        ket: ls ? KET[ls.axis][ls.sign] : null,
        cluster: cluster[q],
      };
    });

    return {
      states,
      stabs: sim.stabilizerStrings(),
      outcomes,
      fired,
    };
  }

  $: view = runSim(cols, scrub, nQ);
  $: nCols = Math.max(MINCOLS, cols.length + 1);
  $: svgW = GUT + nCols * CW + PAD;
  $: svgH = nQ * RH + PAD * 2;
  $: hasM = cols.some((c) => c.some((o) => o.g === "M"));

  const TOOLS: { g: GateName; lbl?: string; tip: string }[] = [
    {
      g: "H",
      tip: "Hadamard. Swaps X and Z. Takes |0⟩ to |+⟩.",
    },
    {
      g: "X",
      tip: "Bit flip. Takes |0⟩ to |1⟩.",
    },
    {
      g: "Y",
      tip: "Bit flip and phase flip together.",
    },
    {
      g: "Z",
      tip: "Phase flip. Takes |+⟩ to |-⟩.",
    },
    {
      g: "S",
      tip: "Quarter turn about Z. Takes X to Y.",
    },
    {
      g: "CNOT",
      tip: "Flips the target where the control is 1. Click control, then target.",
    },
    {
      g: "CZ",
      tip: "Phase flip where both are 1. Click two wires in one column.",
    },
    {
      g: "SWAP",
      tip: "Exchanges two wires. Click both.",
    },
    {
      g: "M",
      tip: "Measure in the Z basis. The bit appears under the gate.",
    },
    {
      g: "XC",
      lbl: "X?",
      tip: "X applied only if a measurement read 1. Click the M, then the target.",
    },
    {
      g: "ZC",
      lbl: "Z?",
      tip: "Z applied only if a measurement read 1. Click the M, then the target.",
    },
  ];

  const u = (g: G1, q: number): Op => ({
    g,
    q,
  });

  const b2 = (g: G2, a: number, b: number): Op => ({
    g,
    a,
    b,
  });

  const m = (q: number): Op => ({
    g: "M",
    q,
    coin: Math.random(),
  });

  const cif = (g: GC, q: number, sc: number, sq: number): Op => ({
    g,
    q,
    sc,
    sq,
  });

  interface Preset {
    name: string;
    n?: number;
    cap: string;
    build: (n: number) => Column[];
  }

  const PRESETS: Preset[] = [
    {
      name: "Bell pair",
      n: 2,
      cap: "H then CNOT. The first bit is random, the second is forced to agree.",
      build: () => [[u("H", 0)], [b2("CNOT", 0, 1)], [m(0)], [m(1)]],
    },
    {
      name: "GHZ",
      n: 4,
      cap: "One random bit drags the other three with it.",
      build: () => [
        [u("H", 0)],
        [b2("CNOT", 0, 1)],
        [b2("CNOT", 1, 2)],
        [b2("CNOT", 2, 3)],
        [m(0), m(1), m(2), m(3)],
      ],
    },
    {
      name: "Teleportation",
      n: 3,
      cap: "q0 starts as |i⟩. Both bits are random, and the X and Z fire on q2 only when their bit reads 1, yet q2 ends as |i⟩ every time. Reroll: different corrections, same state.",
      build: () => [
        [u("H", 0), u("H", 1)],
        [u("S", 0), b2("CNOT", 1, 2)],
        [b2("CNOT", 0, 1)],
        [u("H", 0)],
        [m(0), m(1)],
        [cif("XC", 2, 4, 1)],
        [cif("ZC", 2, 4, 0)],
      ],
    },
    {
      name: "Entanglement swap",
      n: 4,
      cap: "Two Bell pairs, a Bell measurement on the middle pair, and conditioned corrections leave q0 and q3 entangled though they never interacted.",
      build: () => [
        [u("H", 0), u("H", 2)],
        [b2("CNOT", 0, 1), b2("CNOT", 2, 3)],
        [b2("CNOT", 1, 2)],
        [u("H", 1)],
        [m(1), m(2)],
        [cif("XC", 3, 4, 2)],
        [cif("ZC", 3, 4, 1)],
      ],
    },
    {
      name: "Superdense coding",
      n: 2,
      cap: "X and Z on one half of a Bell pair encode the bits 1,1. Both readouts are forced.",
      build: () => [
        [u("H", 0)],
        [b2("CNOT", 0, 1)],
        [u("X", 0)],
        [u("Z", 0)],
        [b2("CNOT", 0, 1)],
        [u("H", 0)],
        [m(0), m(1)],
      ],
    },
    {
      name: "Repetition code",
      n: 5,
      cap: "An X error hits q1. The parity checks on q3 and q4 both read a forced 1, naming q1. The last X repairs it.",
      build: () => [
        [u("H", 0)],
        [b2("CNOT", 0, 1)],
        [b2("CNOT", 0, 2)],
        [u("X", 1)],
        [b2("CNOT", 0, 3), b2("CNOT", 2, 4)],
        [b2("CNOT", 1, 3)],
        [b2("CNOT", 1, 4)],
        [m(3), m(4)],
        [u("X", 1)],
      ],
    },
    {
      name: "Random Clifford",
      cap: "Ten columns of random gates on the current wires.",
      build: (n) => {
        const G: G1[] = ["H", "S", "X", "Z"];
        const out: Column[] = [];

        for (let c = 0; c < 10; c++) {
          const used = new Set<number>();

          const pick = () => {
            let q = Math.floor(Math.random() * n);
            while (used.has(q)) q = (q + 1) % n;
            used.add(q);

            return q;
          };

          const col: Column = [];

          if (Math.random() < 0.45) {
            col.push(b2("CNOT", pick(), pick()));
          } else {
            col.push(u(G[(Math.random() * G.length) | 0], pick()));

            if (n > 2 && Math.random() < 0.6)
              col.push(u(G[(Math.random() * G.length) | 0], pick()));
          }

          out.push(col);
        }

        return out;
      },
    },
  ];

  function loadPreset(p: Preset) {
    snapshot();
    pending = null;
    tantrum = false;
    nag = "";
    if (p.n) nQ = p.n;
    commit(p.build(nQ));
  }

  let selfTest: { pass: boolean; results: TestResult[] } | null = null;
</script>

<svelte:head>
  <title>Clifford simulator | manav.ch</title>
  <meta
    name="description"
    content="An in-browser Clifford/stabilizer quantum circuit simulator. CHP tableau, bit-packed, hundreds of qubits, courtesy of the Gottesman–Knill theorem."
  />
</svelte:head>

<main class="mx-a p20 f-col g10">
  <h1>Clifford simulator</h1>
  <p class="intro m0">
    Circuits made of H, S and CNOT can entangle every qubit on the board, yet a
    classical computer simulates them in polynomial time. Instead of 2
    <sup>n</sup>
    amplitudes you track the 2n Pauli operators that stabilize the state. Pick a
    gate, click the grid. The state below updates after every edit.
  </p>

  <section class="panel rx5 p10 f-col g10">
    <div class="f g5 al-ct fw">
      {#each TOOLS as t, j (j)}
        <button
          type="button"
          class="tool fw6 ptr t{t.g} {tool === t.g ? 'on' : ''}"
          title={t.tip}
          on:click={() => selectTool(t.g)}
        >
          {t.lbl ?? t.g}
        </button>
      {/each}
      <button
        type="button"
        class="tool fw6 ptr t-no"
        title="Not a Clifford gate."
        on:click={() => (tantrum = true)}>T</button
      >
      <span class="spacer"></span>
      <span class="dim">wires</span>
      <button
        type="button"
        class="mini ptr"
        on:click={() => setN(-1)}
        disabled={nQ <= MINQ}
      >
        -
      </button>
      <span class="mono">{nQ}</span>
      <button
        type="button"
        class="mini ptr"
        on:click={() => setN(1)}
        disabled={nQ >= MAXQ}
      >
        +
      </button>
      <button
        type="button"
        class="mini ptr"
        on:click={undo}
        disabled={!history.length}
      >
        undo
      </button>
      <button
        type="button"
        class="mini ptr"
        on:click={clearAll}
        disabled={!cols.length}
      >
        clear
      </button>
    </div>

    {#if tantrum}
      <div class="tantrum rx5 p10">
        <b>Nope.</b> T is not a Clifford gate, so this simulator refuses on principle.
        Gottesman and Knill drew the line exactly there: H, S and CNOT simulate cheaply,
        T is where quantum advantage starts.
      </div>
    {:else if pending && isCond(tool)}
      <p class="hint m0">
        Now click an empty cell in a later column. The {tool === "XC"
          ? "X"
          : "Z"} fires there only when that measurement reads 1.
      </p>
    {:else if pending}
      <p class="hint m0">
        Now click another wire in the same column to set the {tool === "CNOT"
          ? "target"
          : "second qubit"}. Any other click cancels.
      </p>
    {:else if nag}
      <p class="hint m0">{nag}</p>
    {:else if isTwo(tool)}
      <p class="hint m0">
        {tool}: click the {tool === "CNOT" ? "control" : "first"} wire, then a second
        wire in the same column.
      </p>
    {:else if isCond(tool)}
      <p class="hint m0">
        {tool === "XC" ? "X?" : "Z?"}: click the measurement, then the target
        cell in a later column.
      </p>
    {:else}
      <p class="hint m0">
        Click an empty cell to place {tool}. Click any placed gate to remove it.
      </p>
    {/if}

    <div class="flow-x-s">
      <svg width={svgW} height={svgH} class="circ d-b" style="stroke:none;">
        {#each Array(nQ) as _, q (q)}
          <line
            x1={GUT - 8}
            y1={wy(q)}
            x2={svgW - PAD}
            y2={wy(q)}
            class="wire"
          />
          <text x={8} y={wy(q) + 4} class="qlabel">q{q}</text>
        {/each}

        {#if scrub < cols.length}
          <line
            x1={GUT + scrub * CW}
            y1={4}
            x2={GUT + scrub * CW}
            y2={svgH - 4}
            class="now"
          />
        {/if}

        {#each cols as col, ci (ci)}
          <g opacity={ci < scrub ? 1 : 0.3}>
            {#each col as op, j (j)}
              {@const x = colx(ci)}
              {#if op.g === "CNOT"}
                <line x1={x} y1={wy(op.a)} x2={x} y2={wy(op.b)} class="link" />
                <circle cx={x} cy={wy(op.a)} r="5" class="dot" />
                <circle cx={x} cy={wy(op.b)} r="9" class="oplus" />
                <line
                  x1={x - 9}
                  y1={wy(op.b)}
                  x2={x + 9}
                  y2={wy(op.b)}
                  class="link"
                />
                <line
                  x1={x}
                  y1={wy(op.b) - 9}
                  x2={x}
                  y2={wy(op.b) + 9}
                  class="link"
                />
              {:else if op.g === "CZ"}
                <line x1={x} y1={wy(op.a)} x2={x} y2={wy(op.b)} class="link" />
                <circle cx={x} cy={wy(op.a)} r="5" class="dot" />
                <circle cx={x} cy={wy(op.b)} r="5" class="dot" />
              {:else if op.g === "SWAP"}
                <line x1={x} y1={wy(op.a)} x2={x} y2={wy(op.b)} class="link" />
                {#each [op.a, op.b] as sq, j (j)}
                  <line
                    x1={x - 6}
                    y1={wy(sq) - 6}
                    x2={x + 6}
                    y2={wy(sq) + 6}
                    class="link"
                  />
                  <line
                    x1={x - 6}
                    y1={wy(sq) + 6}
                    x2={x + 6}
                    y2={wy(sq) - 6}
                    class="link"
                  />
                {/each}
              {:else if op.g === "XC" || op.g === "ZC"}
                {@const y = wy(op.q)}
                {@const sx = colx(op.sc)}
                {@const sy = wy(op.sq)}
                {@const st = view.fired.get(op) ?? -1}
                <g class="cond {st === 1 ? 'live' : st === 0 ? 'idle' : 'cut'}">
                  {#if op.sq === op.q}
                    <line
                      x1={sx + 16}
                      y1={y - 1.6}
                      x2={x - 16}
                      y2={y - 1.6}
                      class="cwire"
                    />
                    <line
                      x1={sx + 16}
                      y1={y + 1.6}
                      x2={x - 16}
                      y2={y + 1.6}
                      class="cwire"
                    />
                    <circle cx={x - 21} cy={y} r="3.5" class="cring" />
                  {:else}
                    {@const dir = op.q > op.sq ? 1 : -1}
                    <line
                      x1={sx + 16}
                      y1={sy - 1.6}
                      x2={x + 1.6}
                      y2={sy - 1.6}
                      class="cwire"
                    />
                    <line
                      x1={sx + 16}
                      y1={sy + 1.6}
                      x2={x + 1.6}
                      y2={sy + 1.6}
                      class="cwire"
                    />
                    <line
                      x1={x - 1.6}
                      y1={sy}
                      x2={x - 1.6}
                      y2={y - 16 * dir}
                      class="cwire"
                    />
                    <line
                      x1={x + 1.6}
                      y1={sy}
                      x2={x + 1.6}
                      y2={y - 16 * dir}
                      class="cwire"
                    />
                    <circle cx={x} cy={y - 21 * dir} r="3.5" class="cring" />
                  {/if}
                  <rect
                    x={x - 16}
                    y={y - 16}
                    width="32"
                    height="32"
                    rx="5"
                    class="gbox b{op.g[0]}"
                  />
                  <text {x} y={y + 5} class="glabel">{op.g[0]}</text>
                </g>
              {:else if op.g === "M"}
                {@const y = wy(op.q)}
                {@const out = view.outcomes.get(op)}
                <rect
                  x={x - 16}
                  y={y - 16}
                  width="32"
                  height="32"
                  rx="5"
                  class="gbox bM"
                />
                <path d="M {x - 9} {y + 7} a 9 9 0 0 1 18 0" class="marc" />
                <line x1={x} y1={y + 6} x2={x + 7} y2={y - 5} class="mneedle" />
                {#if out}
                  <text
                    {x}
                    y={y + 29}
                    class="mout {out.random ? 'rand' : 'det'}"
                    >{out.outcome}</text
                  >
                {/if}
              {:else}
                {@const y = wy(op.q)}
                <rect
                  x={x - 16}
                  y={y - 16}
                  width="32"
                  height="32"
                  rx="5"
                  class="gbox b{op.g}"
                />
                <text {x} y={y + 5} class="glabel">{op.g}</text>
              {/if}
            {/each}
          </g>
        {/each}

        {#if pending && isCond(tool)}
          {@const px = colx(pending.col)}
          {@const py = wy(pending.q)}
          <rect
            x={px - 20}
            y={py - 20}
            width="40"
            height="40"
            rx="7"
            class="pendring"
          />
          {#if hover && hover.col > pending.col && hover.q < nQ && !opAt(cols, hover.col, hover.q)}
            <g class="dead" opacity="0.35">
              <polyline
                points="{px + 16},{py} {colx(hover.col)},{py} {colx(
                  hover.col,
                )},{wy(hover.q)}"
                fill="none"
                class="link ghostlink"
              />
              <rect
                x={colx(hover.col) - 16}
                y={wy(hover.q) - 16}
                width="32"
                height="32"
                rx="5"
                class="gbox b{tool[0]}"
              />
              <text x={colx(hover.col)} y={wy(hover.q) + 5} class="glabel"
                >{tool[0]}</text
              >
            </g>
          {/if}
        {:else if pending}
          {@const px = colx(pending.col)}
          <circle cx={px} cy={wy(pending.q)} r="5" class="dot" />
          <circle cx={px} cy={wy(pending.q)} r="11" class="pendring" />
          {#if hover && hover.col === pending.col && hover.q !== pending.q}
            <line
              x1={px}
              y1={wy(pending.q)}
              x2={px}
              y2={wy(hover.q)}
              class="link ghostlink"
            />
          {/if}
        {:else if hover && hover.q < nQ && isCond(tool)}
          {#if opAt(cols, hover.col, hover.q)?.g === "M"}
            <rect
              x={colx(hover.col) - 20}
              y={wy(hover.q) - 20}
              width="40"
              height="40"
              rx="7"
              class="pendring"
            />
          {/if}
        {:else if hover && hover.q < nQ && !opAt(cols, hover.col, hover.q)}
          <g class="dead" opacity="0.35">
            {#if isTwo(tool)}
              <circle cx={colx(hover.col)} cy={wy(hover.q)} r="5" class="dot" />
            {:else}
              <rect
                x={colx(hover.col) - 16}
                y={wy(hover.q) - 16}
                width="32"
                height="32"
                rx="5"
                class="gbox b{tool}"
              />
              <text x={colx(hover.col)} y={wy(hover.q) + 5} class="glabel"
                >{tool}</text
              >
            {/if}
          </g>
        {/if}

        {#each Array(nCols) as _, ci (ci)}
          {#each Array(nQ) as _, q (q)}
            <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
            <rect
              x={colx(ci) - CW / 2}
              y={wy(q) - RH / 2}
              width={CW}
              height={RH}
              class="cell ptr"
              on:click={() => cellClick(ci, q)}
              on:mouseenter={() =>
                (hover = {
                  col: ci,
                  q,
                })}
              on:mouseleave={() => (hover = null)}
            />
          {/each}
        {/each}
      </svg>
    </div>

    <div class="f g10 al-ct">
      <span class="dim">step</span>
      <input
        type="range"
        min="0"
        max={cols.length}
        step="1"
        bind:value={scrub}
        on:input={() => (pending = null)}
        disabled={!cols.length}
        class="w-100"
      />
      <span class="mono dim">{scrub}/{cols.length}</span>
    </div>
  </section>

  <section class="panel rx5 p10 f-col g10">
    <h3 class="m0">State</h3>
    <div class="f fw g5">
      {#each view.states as st, q (q)}
        <span
          class="chip rx5 {st.ket ? '' : 'mixed'}"
          style={st.cluster >= 0
            ? `border-color:${CLUSTER[st.cluster % CLUSTER.length]}`
            : ""}>q{q} {st.ket ?? "entangled"}</span
        >
      {/each}
    </div>
    <p class="dim m0">
      Chips with the same border color are entangled with each other. Measured
      bits show under each M gate:
      <span class="mono det">green</span> was forced by the state,
      <span class="mono rand">orange</span> could have gone either way.
      <button type="button" class="mini ptr" on:click={reroll} disabled={!hasM}
        >reroll</button
      >
    </p>
    <div class="mono stabs rx5 p10">
      {#each view.stabs as s, j (j)}
        <div>
          <span class="sgn">{s[0]}</span>{#each s
            .slice(1)
            .split("") as ch, j (j)}<span class="P{ch}">{ch}</span>{/each}
        </div>
      {/each}
    </div>
    <p class="dim m0">
      The stabilizers: {nQ} Pauli strings that pin the state down completely. Every
      gate just rewrites these letters.
    </p>
  </section>

  <section class="panel rx5 p10 f-col g5">
    <h3 class="m0">Presets</h3>
    {#each PRESETS as p, j (j)}
      <div class="f g10 al-ct">
        <button type="button" class="preset ptr" on:click={() => loadPreset(p)}
          >{p.name}</button
        >
        <span class="dim">{p.cap}</span>
      </div>
    {/each}
  </section>

  <details class="panel rx5 p10">
    <summary class="ptr fw6">Self test</summary>
    <div class="f g10 al-ct fw mt10">
      <button
        type="button"
        class="preset ptr"
        on:click={() => (selfTest = runSelfTest())}>self test</button
      >
    </div>
    {#if selfTest}
      <pre
        class="mono m0 mt10 {selfTest.pass ? 'det' : 'bad'}">{selfTest.results
          .map((t) => `${t.pass ? "PASS" : "FAIL"}  ${t.name}: ${t.detail}`)
          .join("\n")}</pre>
    {/if}
    <p class="dim m0 mt10">
      The tableau is (2n)² bits, so a few hundred qubits fit in a few megabytes.
      The visual grid stays small only so it stays readable.
    </p>
  </details>
</main>

<style>
  main {
    max-width: 760px;
    font-family: sans-serif;
    line-height: 1.5;
  }

  .intro {
    font-size: 17px;
    color: var(--k1);
  }

  .panel {
    background: color-mix(in srgb, var(--w) 53%, transparent);
    border: 1px solid var(--g1);
  }

  .spacer {
    flex: 1;
  }

  .tool {
    min-width: 38px;
    height: 36px;
    padding: 0 8px;

    border-radius: 5px;
    background: var(--w);
  }

  .tool.on {
    border-color: var(--k2);
    outline: 2px solid var(--k2);
    outline-offset: -2px;
    box-shadow: 0 1px 4px color-mix(in srgb, var(--k2) 20%, transparent);
  }

  .tool.tH {
    background: var(--c1);
  }
  .tool.tX {
    background: color-mix(in srgb, var(--c4) 45%, var(--w));
  }
  .tool.tY {
    background: color-mix(in srgb, var(--ok) 55%, var(--w));
  }
  .tool.tZ {
    background: color-mix(in srgb, var(--c3) 45%, var(--w));
  }
  .tool.tS {
    background: color-mix(in srgb, var(--c5) 40%, var(--w));
  }
  .tool.tM {
    background: var(--g1);
  }
  .tool.tXC,
  .tool.tZC {
    border-style: dashed;
  }
  .tool.tXC {
    background: color-mix(in srgb, var(--c4) 25%, var(--w));
  }
  .tool.tZC {
    background: color-mix(in srgb, var(--c3) 25%, var(--w));
  }

  .t-no {
    border-style: dashed;
    border-color: var(--c4);
    color: var(--c4);
  }

  .mini,
  .preset {
    padding: 4px 10px;
    border: 1px solid var(--g2);
    border-radius: 4px;
    background: var(--w);
  }

  .preset {
    min-width: 140px;
  }

  .mini:disabled,
  .preset:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .mini:hover:enabled,
  .preset:hover:enabled,
  .tool:hover {
    background-color: color-mix(in srgb, var(--c3) 12%, var(--w));
  }

  .hint {
    font-size: 14px;
    color: var(--g3);
  }

  .tantrum {
    background: color-mix(in srgb, var(--c4) 10%, var(--w));
    border: 1px solid var(--c4);
    font-size: 15px;
  }

  /* circuit svg */
  .wire {
    stroke: var(--g2);
    stroke-width: 1.5;
  }

  .qlabel {
    font:
      600 12px ui-monospace,
      "SF Mono",
      Menlo,
      monospace;
    fill: var(--g3);
    stroke: none;
  }

  .cell {
    fill: transparent;
    stroke: none;
  }

  .cell:hover {
    fill: color-mix(in srgb, var(--k2) 4%, transparent);
  }

  .gbox {
    stroke: color-mix(in srgb, var(--g3) 53%, transparent);
    stroke-width: 1;
  }

  .bH {
    fill: var(--c1);
  }
  .bX {
    fill: color-mix(in srgb, var(--c4) 45%, var(--w));
  }
  .bY {
    fill: color-mix(in srgb, var(--ok) 55%, var(--w));
  }
  .bZ {
    fill: color-mix(in srgb, var(--c3) 45%, var(--w));
  }
  .bS {
    fill: color-mix(in srgb, var(--c5) 40%, var(--w));
  }
  .bM {
    fill: var(--g1);
  }

  .glabel {
    font: 600 15px sans-serif;
    fill: var(--k1);
    text-anchor: middle;
    stroke: none;
  }

  .link {
    stroke: var(--k1);
    stroke-width: 2;
  }

  .dot {
    fill: var(--k1);
    stroke: none;
  }

  .oplus {
    fill: var(--w);
    stroke: var(--k1);
    stroke-width: 2;
  }

  .marc {
    fill: none;
    stroke: var(--k1);
    stroke-width: 1.5;
  }

  .mneedle {
    stroke: var(--k1);
    stroke-width: 1.5;
  }

  .mout {
    font:
      700 12px ui-monospace,
      "SF Mono",
      Menlo,
      monospace;
    text-anchor: middle;
    stroke: none;
  }

  .mout.rand {
    fill: var(--c1);
  }
  .mout.det {
    fill: var(--ok);
  }

  .cwire {
    stroke: var(--g2);
    stroke-width: 1.2;
    fill: none;
  }

  .cring {
    fill: var(--w);
    stroke: var(--g3);
    stroke-width: 1.5;
  }

  .cond.idle {
    opacity: 0.35;
  }

  .cond.cut {
    opacity: 0.3;
  }

  .cond.cut .cwire,
  .cond.cut .gbox {
    stroke-dasharray: 4 3;
  }

  .pendring {
    fill: none;
    stroke: var(--k1);
    stroke-width: 1.5;
    stroke-dasharray: 3 3;
  }

  .ghostlink {
    stroke-dasharray: 4 4;
    opacity: 0.5;
  }

  .now {
    stroke: var(--c4);
    stroke-width: 1.5;
    stroke-dasharray: 4 4;
  }

  /* state panel */
  .chip {
    border: 1.5px solid var(--g1);
    padding: 3px 9px;
    background: var(--w);
    font:
      500 13px ui-monospace,
      "SF Mono",
      Menlo,
      monospace;
  }

  .chip.mixed {
    background: color-mix(in srgb, var(--c5) 10%, var(--w));
  }

  .mono {
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 13px;
  }

  .stabs {
    background: var(--k2);
    line-height: 1.7;
    letter-spacing: 2px;
    overflow-x: auto;
    max-height: 220px;
    overflow-y: auto;
  }

  .sgn {
    color: var(--g2);
    margin-right: 6px;
  }

  .PI {
    color: var(--g3);
  }
  .PX {
    color: color-mix(in srgb, var(--c4) 50%, var(--w));
  }
  .PY {
    color: color-mix(in srgb, var(--ok) 55%, var(--w));
  }
  .PZ {
    color: color-mix(in srgb, var(--c3) 45%, var(--w));
  }

  .det {
    color: var(--ok);
  }
  .rand {
    color: var(--c1);
  }
  .bad {
    color: var(--c4);
  }

  .dim {
    color: var(--g2);
    font-size: 14px;
  }

  input[type="range"] {
    accent-color: var(--k1);
  }

  pre {
    white-space: pre;
    overflow-x: auto;
  }

  h3 {
    font-size: 16px;
  }
</style>
