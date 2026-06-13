<script lang="ts">
  import { onDestroy } from "svelte";
  import {
    MAXN,
    VIEW,
    matrixOf,
    normalise,
    stepDist,
    stationary,
    classify,
    tvDistance,
    damp,
    uniform,
    pointMass,
    presets,
  } from "./markov";
  import type { Edge, Pt, Preset, StateType } from "./markov";

  const R = 18;
  const MAXT = 400;
  const name = (i: number) => String.fromCharCode(65 + i);
  const PALETTE = [
    "#c75200",
    "#097",
    "#2456c9",
    "#d22",
    "#8a5cc2",
    "#0a8888",
    "#a07000",
    "#555",
    "#c2447e",
    "#2e2e2e",
  ];
  const TYPE_COLOR: Record<StateType, string> = {
    transient: "#777",
    recurrent: "#097",
    absorbing: "#d22",
  };

  let nodes: Pt[] = [];
  let edges: Edge[] = [];
  let d = 0;
  let pi: number[] = [];
  let history: number[][] = [[]];

  type Sel = { kind: "node"; i: number } | { kind: "edge"; i: number } | null;
  let sel: Sel = null;
  let nag = "";
  let hoverEdge: { i: number; j: number } | null = null;
  let hoverNode: number | null = null;
  let editCell: { i: number; j: number } | null = null;
  let editVal = "";
  let running = false;
  let timer: ReturnType<typeof setInterval> | null = null;

  let svgEl: SVGSVGElement;
  let drag: { i: number; sx: number; sy: number; moved: boolean } | null = null;
  let lastNodeUp = 0;

  $: n = nodes.length;
  $: W = matrixOf(n, edges);
  $: P = normalise(W);
  $: Peff = damp(P, d);
  $: implicit = W.map((row) => row.every((w) => w <= 0));
  $: analysis = classify(Peff);
  $: piHat = n ? stationary(Peff, history[0]) : [];
  $: t = history.length - 1;
  $: tvHist = analysis.ergodic ? history.map((h) => tvDistance(h, piHat)) : [];
  $: hasRev = edges.map(
    (e) =>
      e.from !== e.to && edges.some((o) => o.from === e.to && o.to === e.from),
  );
  $: geos = edges.map((e, k) => edgeGeo(e, nodes, hasRev[k]));
  $: periodicClass = analysis.classes.find((c) => c.recurrent && c.period > 1);
  $: hint =
    sel?.kind === "node"
      ? `edge mode: click another state to add ${name(sel.i)} → there, or click ${name(sel.i)} again for a self-loop. drag moves it, backspace deletes it, empty space deselects.`
      : sel?.kind === "edge" && edges[sel.i]
        ? `selected ${name(edges[sel.i].from)} → ${name(edges[sel.i].to)}: adjust the weight below, backspace deletes the edge.`
        : n === 0
          ? "click empty space to add a state."
          : "click empty space to add a state. click a state to select it, then a second one to draw an edge.";

  const setStr = (states: number[]) => "{" + states.map(name).join(",") + "}";

  const norm = (x: number, y: number) => {
    const m = Math.hypot(x, y) || 1;

    return {
      x: x / m,
      y: y / m,
    };
  };

  function arrowAt(x: number, y: number, tx: number, ty: number): string {
    const s = 8;
    const px = -ty;
    const py = tx;

    return (
      `${x + tx * 2},${y + ty * 2} ` +
      `${x - tx * s + px * s * 0.5},${y - ty * s + py * s * 0.5} ` +
      `${x - tx * s - px * s * 0.5},${y - ty * s - py * s * 0.5}`
    );
  }

  function loopGeo(x: number, y: number) {
    const d = `M ${x - 9} ${y - 16} C ${x - 32} ${y - 54}, ${x + 32} ${y - 54}, ${x + 9} ${y - 16}`;
    const tg = norm(-23, 38);

    return {
      d,
      lx: x,
      ly: y - 58,
      arrow: arrowAt(x + 9, y - 16, tg.x, tg.y),
    };
  }

  function edgeGeo(e: Edge, nds: Pt[], curved: boolean) {
    const a = nds[e.from];
    const b = nds[e.to];

    if (!a || !b)
      return {
        d: "",
        lx: 0,
        ly: 0,
        arrow: "",
      };

    if (e.from === e.to) return loopGeo(a.x, a.y);
    const h = curved ? 40 : 0;
    const u = norm(b.x - a.x, b.y - a.y);
    const px = -u.y;
    const py = u.x;
    const mx = (a.x + b.x) / 2 + px * h;
    const my = (a.y + b.y) / 2 + py * h;
    const sd = norm(mx - a.x, my - a.y);
    const sx = a.x + sd.x * R;
    const sy = a.y + sd.y * R;
    const ed = norm(b.x - mx, b.y - my);
    const ex = b.x - ed.x * (R + 3);
    const ey = b.y - ed.y * (R + 3);

    return {
      d: `M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`,
      lx: 0.25 * sx + 0.5 * mx + 0.25 * ex + px * 10,
      ly: 0.25 * sy + 0.5 * my + 0.25 * ey + py * 10,
      arrow: arrowAt(ex, ey, ed.x, ed.y),
    };
  }

  const clamp = (v: number, lo: number, hi: number) =>
    Math.min(hi, Math.max(lo, v));

  function restart(p: number[] = pi) {
    pi = p;
    history = [pi];
  }

  function toSvg(ev: MouseEvent): Pt {
    const r = svgEl.getBoundingClientRect();

    return {
      x: ((ev.clientX - r.left) * VIEW.w) / r.width,
      y: ((ev.clientY - r.top) * VIEW.h) / r.height,
    };
  }

  function bgClick(ev: MouseEvent) {
    // a tap on a node can reflow the page (the hint text grows), and touch
    // re-hit-tests its synthesized click against the new layout; if that
    // ghost click lands here it would undo the selection the tap just made
    if (Date.now() - lastNodeUp < 350) return;
    nag = "";
    editCell = null;

    if (sel) {
      sel = null;

      return;
    }

    if (n >= MAXN) {
      nag = `at most ${MAXN} states.`;

      return;
    }

    const p = toSvg(ev);
    const wasEmpty = n === 0;
    nodes = [
      ...nodes,
      {
        x: clamp(p.x, 26, VIEW.w - 26),
        y: clamp(p.y, 26, VIEW.h - 26),
      },
    ];
    restart(wasEmpty ? [1] : [...pi, 0]);
  }

  function nodeDown(i: number, ev: PointerEvent) {
    ev.preventDefault();
    const p = toSvg(ev);
    drag = {
      i,
      sx: p.x,
      sy: p.y,
      moved: false,
    };
  }

  function winMove(ev: PointerEvent) {
    if (!drag) return;
    const p = toSvg(ev);
    if (!drag.moved && Math.hypot(p.x - drag.sx, p.y - drag.sy) < 4) return;
    drag.moved = true;
    const i = drag.i;
    nodes = nodes.map((nd, k) =>
      k === i
        ? {
            x: clamp(p.x, 26, VIEW.w - 26),
            y: clamp(p.y, 26, VIEW.h - 26),
          }
        : nd,
    );
  }

  function winUp() {
    if (!drag) return;
    const { i, moved } = drag;
    drag = null;
    lastNodeUp = Date.now();
    if (!moved) nodeClick(i);
  }

  function nodeClick(i: number) {
    nag = "";
    editCell = null;

    if (sel?.kind === "node") {
      const from = sel.i;
      const ei = edges.findIndex((e) => e.from === from && e.to === i);

      if (ei >= 0) {
        sel = {
          kind: "edge",
          i: ei,
        };
      } else {
        edges = [
          ...edges,
          {
            from,
            to: i,
            w: 1,
          },
        ];
        sel = {
          kind: "edge",
          i: edges.length - 1,
        };
        restart();
      }

      return;
    }

    sel = {
      kind: "node",
      i,
    };
  }

  function removeEdge(k: number) {
    edges = edges.filter((_, x) => x !== k);

    if (sel?.kind === "edge") {
      if (sel.i === k) {
        sel = null;
      } else if (sel.i > k) {
        sel = {
          kind: "edge",
          i: sel.i - 1,
        };
      }
    }

    restart();
  }

  function setW(k: number, w: number) {
    if (isNaN(w)) return;

    if (w <= 0) {
      removeEdge(k);

      return;
    }

    edges = edges.map((e, x) =>
      x === k
        ? {
            ...e,
            w,
          }
        : e,
    );
    restart();
  }

  function deleteSel() {
    if (!sel) return;

    if (sel.kind === "edge") {
      removeEdge(sel.i);

      return;
    }

    const i = sel.i;
    sel = null;
    nodes = nodes.filter((_, k) => k !== i);
    edges = edges
      .filter((e) => e.from !== i && e.to !== i)
      .map((e) => ({
        ...e,
        from: e.from > i ? e.from - 1 : e.from,
        to: e.to > i ? e.to - 1 : e.to,
      }));
    let np = pi.filter((_, k) => k !== i);
    const s = np.reduce((a, b) => a + b, 0);
    np = s > 1e-9 ? np.map((v) => v / s) : uniform(np.length);
    restart(np);
  }

  function onKey(ev: KeyboardEvent) {
    const tag = (ev.target as HTMLElement)?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    if (ev.key === "Escape") {
      sel = null;
      editCell = null;

      return;
    }

    if ((ev.key === "Backspace" || ev.key === "Delete") && sel) {
      ev.preventDefault();
      deleteSel();
    }
  }

  function startEdit(i: number, j: number) {
    editCell = {
      i,
      j,
    };
    editVal = String(W[i][j] || 0);
  }

  function commitCell() {
    if (!editCell) return;
    const { i, j } = editCell;
    editCell = null;
    const v = parseFloat(editVal);
    if (isNaN(v) || v < 0) return;
    const ei = edges.findIndex((e) => e.from === i && e.to === j);

    if (v === 0) {
      if (ei >= 0) removeEdge(ei);

      return;
    }

    if (ei >= 0) {
      edges = edges.map((e, k) =>
        k === ei
          ? {
              ...e,
              w: v,
            }
          : e,
      );
    } else {
      edges = [
        ...edges,
        {
          from: i,
          to: j,
          w: v,
        },
      ];
    }

    restart();
  }

  const focusInput = (el: HTMLInputElement) => {
    el.focus();
    el.select();
  };

  function stepOnce() {
    if (n === 0) return;

    if (history.length > MAXT) {
      stopRun();
      nag = `run capped at ${MAXT} steps. reset to continue.`;

      return;
    }

    pi = stepDist(pi, Peff);
    history = [...history, pi];
  }

  function stopRun() {
    running = false;
    if (timer) clearInterval(timer);
    timer = null;
  }

  function toggleRun() {
    if (running) {
      stopRun();

      return;
    }

    if (n === 0) return;
    running = true;
    timer = setInterval(stepOnce, 280);
  }

  function setStart(i: number) {
    restart(pointMass(n, i));
  }

  function setUniform() {
    restart(uniform(n));
  }

  function resetRun() {
    stopRun();
    restart(history[0]);
  }

  onDestroy(stopRun);

  const PW = 560;
  const PH = 130;
  const py2 = (v: number) => PH - 6 - v * (PH - 14);

  function lineOf(vals: number[]): string {
    const m = vals.length;
    if (m < 2) return "";

    return vals
      .map((v, k) => `${((k / (m - 1)) * PW).toFixed(1)},${py2(v).toFixed(1)}`)
      .join(" ");
  }

  $: plotLines = nodes.map((_, j) => lineOf(history.map((h) => h[j] ?? 0)));
  $: tvLine = lineOf(tvHist);

  function loadPreset(p: Preset) {
    stopRun();
    nodes = p.nodes.map((nd) => ({ ...nd }));
    edges = p.edges.map((e) => ({ ...e }));
    d = p.d;
    sel = null;
    nag = "";
    editCell = null;
    restart(
      p.start !== null && p.start !== undefined
        ? pointMass(nodes.length, p.start)
        : uniform(nodes.length),
    );
  }

  loadPreset(presets[0]);
</script>

<svelte:head>
  <title>Markov chain simulator | manav.ch</title>
  <meta
    name="description"
    content="Draw an arbitrary Markov chain, read its transition matrix, watch the distribution evolve, and see communicating classes, periods and stationary distributions live."
  />
</svelte:head>

<svelte:window
  on:pointermove={winMove}
  on:pointerup={winUp}
  on:pointercancel={winUp}
  on:keydown={onKey}
/>

<main class="mx-a p20 f-col g10">
  <h1>Markov chains</h1>
  <p class="intro m0">
    A Markov chain is a random walk on a graph: from each state it jumps to a
    neighbour with a fixed probability, remembering nothing else. The whole
    chain is one stochastic matrix P, and a distribution over states evolves by
    π<sub>t+1</sub> = π<sub>t</sub>P. Draw a chain below, then run it and watch
    where the probability mass goes.
  </p>

  <section class="panel rx5 p10 f-col g10">
    <p class="hint m0">{nag || hint}</p>

    <div class="flow-x-s">
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <svg
        viewBox="0 0 {VIEW.w} {VIEW.h}"
        class="board rx5 d-b w-100"
        bind:this={svgEl}
      >
        <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
        <rect
          x="0"
          y="0"
          width={VIEW.w}
          height={VIEW.h}
          class="bg"
          on:click={bgClick}
        />

        {#each edges as e, k (k)}
          {@const g = geos[k]}
          {@const p = Peff[e.from]?.[e.to] ?? 0}
          {@const hl =
            hoverEdge && hoverEdge.i === e.from && hoverEdge.j === e.to}
          {@const on = sel?.kind === "edge" && sel.i === k}
          <g class="edge {hl ? 'hl' : ''} {on ? 'on' : ''}">
            <path d={g.d} class="estroke" style="stroke-width:{1 + 4 * p}" />
            <polygon points={g.arrow} class="ehead" />
            <text x={g.lx} y={g.ly + 4} class="elabel">{p.toFixed(2)}</text>
            <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
            <path
              d={g.d}
              class="ehit ptr"
              on:click={() => {
                sel = { kind: "edge", i: k };
                nag = "";
              }}
              on:mouseenter={() => (hoverEdge = { i: e.from, j: e.to })}
              on:mouseleave={() => (hoverEdge = null)}
            />
          </g>
        {/each}

        {#each nodes as nd, i (i)}
          {#if implicit[i]}
            {@const g = loopGeo(nd.x, nd.y)}
            {@const hl = hoverEdge && hoverEdge.i === i && hoverEdge.j === i}
            <g class="edge imp {hl ? 'hl' : ''}">
              <path d={g.d} class="estroke" style="stroke-width:1.5" />
              <polygon points={g.arrow} class="ehead" />
              <text x={g.lx} y={g.ly + 4} class="elabel"
                >{(Peff[i]?.[i] ?? 1).toFixed(2)}</text
              >
            </g>
          {/if}
        {/each}

        {#if sel?.kind === "node" && hoverNode !== null && hoverNode !== sel.i}
          <line
            x1={nodes[sel.i].x}
            y1={nodes[sel.i].y}
            x2={nodes[hoverNode].x}
            y2={nodes[hoverNode].y}
            class="ghostlink"
          />
        {/if}

        {#each nodes as nd, i (i)}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <g
            class="node ptr"
            on:pointerdown={(ev) => nodeDown(i, ev)}
            on:mouseenter={() => (hoverNode = i)}
            on:mouseleave={() => (hoverNode = null)}
          >
            <circle
              cx={nd.x}
              cy={nd.y}
              r={R}
              class="body"
              fill-opacity={0.06 + 0.9 * (pi[i] ?? 0)}
              stroke={TYPE_COLOR[analysis.type[i] ?? "transient"]}
            />
            {#if (piHat[i] ?? 0) > 0.002}
              <circle
                cx={nd.x}
                cy={nd.y}
                r={Math.max(2.5, R * Math.sqrt(piHat[i]))}
                class="ghost"
              />
            {/if}
            {#if sel?.kind === "node" && sel.i === i}
              <circle cx={nd.x} cy={nd.y} r={R + 5} class="selring" />
            {/if}
            <text x={nd.x} y={nd.y + 5} class="nname">{name(i)}</text>
          </g>
        {/each}
      </svg>
    </div>

    <p class="dim m0">
      outline marks the state type: <b style="color:#097">recurrent</b>,
      <b style="color:#d22">absorbing</b>, <b style="color:#777">transient</b>.
      orange fill = current probability, dashed green ring = stationary mass. a
      dashed loop is the implicit self-loop of a state with no outgoing edge.
    </p>

    {#if sel?.kind === "edge" && edges[sel.i]}
      {@const e = edges[sel.i]}
      <div class="f g10 al-ct fw">
        <span class="mono">{name(e.from)} &rarr; {name(e.to)}</span>
        <span class="dim">weight</span>
        <button
          type="button"
          class="mini ptr"
          on:click={() => setW(sel.i, Math.max(0.5, e.w - 0.5))}>-</button
        >
        <input
          class="winput mono"
          type="number"
          min="0"
          step="0.5"
          value={e.w}
          on:change={(ev) => setW(sel.i, parseFloat(ev.currentTarget.value))}
        />
        <button
          type="button"
          class="mini ptr"
          on:click={() => setW(sel.i, e.w + 0.5)}>+</button
        >
        <span class="mono dim"
          >p = {(Peff[e.from]?.[e.to] ?? 0).toFixed(3)}</span
        >
        <button
          type="button"
          class="mini ptr"
          on:click={() => removeEdge(sel.i)}>delete</button
        >
      </div>
    {/if}

    <div class="f g10 al-ct fw">
      <span class="dim">damping d</span>
      <input
        type="range"
        min="0"
        max="0.5"
        step="0.01"
        bind:value={d}
        on:input={() => restart()}
        class="dslide"
      />
      <span class="mono">{d.toFixed(2)}</span>
      {#if d > 0}
        <span class="dim"
          >P&prime; = (1&minus;d)P + d/n: teleport anywhere with probability d</span
        >
      {/if}
    </div>
  </section>

  <section class="panel rx5 p10 f-col g10">
    <h3 class="m0">Transition matrix</h3>
    {#if n === 0}
      <p class="dim m0">add states to see P.</p>
    {:else}
      <div class="flow-x-s">
        <div
          class="mgrid d-g"
          style="grid-template-columns: 34px repeat({n}, 48px);"
        >
          <div></div>
          {#each nodes as _, j (j)}
            <div class="mhead mono tc fw7" style="color:{PALETTE[j]}">
              {name(j)}
            </div>
          {/each}
          {#each nodes as _, i (i)}
            <div class="mhead mono tc fw7" style="color:{PALETTE[i]}">
              {name(i)}
            </div>
            {#each nodes as _, j (j)}
              {#if editCell && editCell.i === i && editCell.j === j}
                <input
                  class="mcell medit mono tc p0 ptr"
                  bind:value={editVal}
                  use:focusInput
                  on:blur={commitCell}
                  on:keydown={(ev) => {
                    if (ev.key === "Enter") {
                      commitCell();
                    } else if (ev.key === "Escape") {
                      editCell = null;
                    }
                  }}
                />
              {:else}
                {@const v = Peff[i][j]}
                <button
                  type="button"
                  class="mcell mono tc p0 ptr {hoverEdge &&
                  hoverEdge.i === i &&
                  hoverEdge.j === j
                    ? 'hl'
                    : ''} {v < 1e-9 ? 'z' : ''} {implicit[i] && i === j
                    ? 'imp'
                    : ''}"
                  on:click={() => startEdit(i, j)}
                  on:mouseenter={() => (hoverEdge = { i, j })}
                  on:mouseleave={() => (hoverEdge = null)}
                >
                  {v < 1e-9 ? "0" : v.toFixed(2)}
                </button>
              {/if}
            {/each}
          {/each}
        </div>
      </div>
      <p class="dim m0">
        row = from, column = to. shown: normalised probabilities{d > 0
          ? " with damping mixed in"
          : ""}. hover a cell to light up its edge and vice versa. click a cell
        to type a raw weight, 0 removes the edge.
      </p>

      <div class="f fw g5 al-ct">
        <span class="dim">classes:</span>
        {#each analysis.classes as c, ix (ix)}
          <span
            class="cchip rx5 mono"
            style="border-color:{c.recurrent
              ? c.states.length === 1
                ? '#d22'
                : '#097'
              : '#999'}"
          >
            {setStr(c.states)}
            {c.recurrent
              ? c.states.length === 1
                ? "absorbing"
                : "recurrent"
              : "transient"}{c.period > 1 ? `, period ${c.period}` : ""}
          </span>
        {/each}
      </div>

      {#if periodicClass}
        <div class="callout warn rx5 p10">
          chain is periodic: class {setStr(periodicClass.states)} has period
          {periodicClass.period}, so a point mass on it cycles forever and the
          distribution oscillates instead of converging. the dashed rings show
          the time average it orbits around.
        </div>
      {/if}
      {#if !analysis.irreducible}
        <div class="callout info rx5 p10">
          {#if analysis.nRecurrent > 1}
            chain is reducible with {analysis.nRecurrent} recurrent classes: the
            stationary distribution depends on where you start. restart the walk
            from different states and watch the rings move.
          {:else}
            chain is reducible: the transient states drain into
            {setStr(analysis.classes.find((c) => c.recurrent)?.states ?? [])}
            and the long-run mass lives only there.
          {/if}
        </div>
      {/if}
    {/if}
  </section>

  <section class="panel rx5 p10 f-col g10">
    <h3 class="m0">Evolution</h3>
    <div class="f g5 al-ct fw">
      <button
        type="button"
        class="mini ptr"
        on:click={stepOnce}
        disabled={n === 0}>step</button
      >
      <button
        type="button"
        class="mini ptr"
        on:click={toggleRun}
        disabled={n === 0}
      >
        {running ? "pause" : "run"}
      </button>
      <button
        type="button"
        class="mini ptr"
        on:click={resetRun}
        disabled={t === 0}>reset</button
      >
      <button
        type="button"
        class="mini ptr"
        on:click={setUniform}
        disabled={n === 0}>uniform start</button
      >
      <span class="mono dim">t = {t}</span>
      {#if analysis.ergodic && tvHist.length}
        <span class="spacer"></span>
        <span class="mono dim"
          >tv(&pi;<sub>t</sub>, &pi;&#770;) = {tvHist[t].toFixed(4)}</span
        >
      {/if}
    </div>

    <div class="f fw g5 al-ct">
      <span class="dim">&pi;<sub>t</sub></span>
      {#each pi as p, i (i)}
        <button
          type="button"
          class="chip rx5 mono ptr"
          style="border-color:{PALETTE[i]}; color:{PALETTE[i]}"
          title="restart as a point mass on {name(i)}"
          on:click={() => setStart(i)}
        >
          {name(i)}
          {p.toFixed(3)}
        </button>
      {/each}
      {#if n === 0}<span class="dim">no states yet</span>{/if}
    </div>
    {#if n > 0}
      <p class="dim m0">
        click a chip to restart the walk as a point mass on that state.
      </p>
      <div class="f fw g5 al-ct">
        <span class="dim">&pi;&#770;</span>
        {#each piHat as v, i (i)}
          <span class="schip mono" style="color:{PALETTE[i]}"
            >{name(i)} {v.toFixed(3)}</span
          >
        {/each}
        <span class="dim">stationary, computed from the current start</span>
      </div>
    {/if}

    {#if history.length > 1}
      <svg viewBox="0 0 {PW} {PH}" class="plot rx5 d-b w-100">
        {#each [0, 0.5, 1] as gv, ix (ix)}
          <line x1="0" y1={py2(gv)} x2={PW} y2={py2(gv)} class="grid" />
          <text x="4" y={py2(gv) - 3} class="axis">{gv}</text>
        {/each}
        {#each plotLines as pl, i (i)}
          {#if pl}
            <polyline
              points={pl}
              fill="none"
              stroke={PALETTE[i]}
              stroke-width="1.8"
            />
          {/if}
        {/each}
        {#if tvLine}
          <polyline
            points={tvLine}
            fill="none"
            stroke="#222"
            stroke-width="1.4"
            stroke-dasharray="5 4"
          />
        {/if}
      </svg>
      <p class="dim m0">
        per-state probability against t, colors as above{analysis.ergodic
          ? ". dashed black: total-variation distance to the stationary distribution, it never increases"
          : ""}.
      </p>
    {/if}
  </section>

  <section class="panel rx5 p10 f-col g5">
    <h3 class="m0">Presets</h3>
    {#each presets as p, ix (ix)}
      <div class="f g10 al-ct">
        <button type="button" class="preset ptr" on:click={() => loadPreset(p)}
          >{p.name}</button
        >
        <span class="dim">{p.cap}</span>
      </div>
    {/each}
  </section>

  <section class="panel rx5 p10 f-col g5 notes">
    <h3 class="m0">Notes</h3>
    <p class="m0">
      Edge weights need not sum to 1: each row of P is the weights divided by
      the row sum. A state with no outgoing edge keeps all its mass, which is
      the dashed implicit self-loop.
    </p>
    <p class="m0">
      States that can reach each other form a communicating class (a strongly
      connected component, found with Tarjan's algorithm). A class with no edge
      leaving it is recurrent; a one-state recurrent class is absorbing;
      everything else is transient and eventually drains out.
    </p>
    <p class="m0">
      The period of a class is the gcd of its cycle lengths. A 3-cycle has
      period 3: a point mass returns home every third step and never settles,
      even though the stationary distribution is uniform, 1/3 each.
    </p>
    <p class="m0">
      The stationary distribution solves &pi;P = &pi;. It is computed here by
      power iteration on the lazy chain (P + I)/2, which has the same fixed
      points but no periodicity. On a reducible chain the answer depends on the
      start: a fair gambler one step from ruin is absorbed at 0 with probability
      3/4.
    </p>
    <p class="m0">
      Total-variation distance &frac12;&Sigma;|&pi;<sub>i</sub> &minus;
      &pi;&#770;<sub>i</sub>| can never increase under a stochastic map, so the
      dashed curve only flattens or falls. When the chain is irreducible and
      aperiodic it falls geometrically to 0 from any start.
    </p>
    <p class="m0">
      Damping replaces P with (1&minus;d)P + d/n: with probability d the walker
      teleports to a uniformly random state. Any d &gt; 0 makes every transition
      possible, so the chain becomes irreducible and aperiodic and the
      stationary distribution is unique. That is the PageRank trick: load "tiny
      web", set d to 0, and watch the D,E trap soak up everything.
    </p>
    <p class="m0">
      Limits: {MAXN} states, runs capped at {MAXT} steps. Engine self-tested in node:
      classes, periods, absorption probabilities and tv monotonicity are asserted,
      not eyeballed.
    </p>
  </section>
</main>

<style>
  main {
    max-width: 760px;
    font-family: sans-serif;
    line-height: 1.5;
  }

  .intro {
    font-size: 17px;
    color: #333;
  }

  .panel {
    background: #fff8;
    border: 1px solid #bbb;
  }

  .hint {
    font-size: 14px;
    color: #666;
    min-height: 2.9em; /* the edge-mode hint wraps to two lines; do not shift the board */
  }

  .spacer {
    flex: 1;
  }

  /* ----- board */
  .board {
    touch-action: none; /* node drags must not scroll the page */
    min-width: 540px;
    background: #fcfbf8;
    border: 1px solid #ddd;
  }

  .bg {
    fill: transparent;
  }

  .node .body {
    fill: #c75200;
    stroke-width: 2.5;
  }

  .node .ghost {
    fill: none;
    stroke: #097;
    stroke-width: 1.8;
    stroke-dasharray: 3 2.5;
    pointer-events: none;
  }

  .node .selring {
    fill: none;
    stroke: #222;
    stroke-width: 1.5;
    stroke-dasharray: 4 3;
    pointer-events: none;
  }

  .nname {
    font:
      700 14px ui-monospace,
      "SF Mono",
      Menlo,
      monospace;
    fill: #222;
    text-anchor: middle;
    stroke: #fff;
    stroke-width: 3;
    paint-order: stroke;
    pointer-events: none;
  }

  .edge .estroke {
    fill: none;
    stroke: #555;
  }

  .edge .ehead {
    fill: #555;
    stroke: none;
  }

  .edge .elabel {
    font:
      600 12px ui-monospace,
      "SF Mono",
      Menlo,
      monospace;
    fill: #555;
    text-anchor: middle;
    stroke: #fcfbf8;
    stroke-width: 3;
    paint-order: stroke;
    pointer-events: none;
  }

  .edge .ehit {
    fill: none;
    stroke: transparent;
    stroke-width: 14;
  }

  .edge.hl .estroke,
  .edge.on .estroke {
    stroke: #2456c9;
  }

  .edge.hl .ehead,
  .edge.on .ehead {
    fill: #2456c9;
  }

  .edge.hl .elabel,
  .edge.on .elabel {
    fill: #2456c9;
  }

  .edge.imp .estroke {
    stroke-dasharray: 4 3;
    stroke: #999;
  }

  .edge.imp .ehead {
    fill: #999;
  }

  .edge.imp .elabel {
    fill: #999;
  }

  .edge.imp.hl .estroke {
    stroke: #2456c9;
  }

  .ghostlink {
    stroke: #999;
    stroke-width: 1.5;
    stroke-dasharray: 4 4;
    pointer-events: none;
  }

  /* ----- matrix */
  .mgrid {
    gap: 3px;
    width: max-content;
  }

  .mhead {
    font-size: 12px;
    align-self: center;
  }

  .mcell {
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    font-size: 12px;
  }

  .mcell.z {
    color: #bbb;
  }

  .mcell.imp {
    color: #999;
    font-style: italic;
    border-style: dashed;
  }

  .mcell.hl {
    border-color: #2456c9;
    background: #eef3fd;
    color: #2456c9;
  }

  .medit {
    border-color: #2456c9;
    width: 48px;
  }

  .cchip {
    border: 1.5px solid #999;
    background: #fff;
    padding: 2px 8px;
    font-size: 12px;
  }

  .callout {
    font-size: 14px;
  }

  .callout.warn {
    background: #fdf3e6;
    border: 1px solid #c75200;
    color: #7a3a00;
  }

  .callout.info {
    background: #eef3fd;
    border: 1px solid #2456c9;
    color: #1a3a85;
  }

  /* ----- evolution */
  .chip {
    border: 1.5px solid #ccc;
    background: #fff;
    padding: 3px 9px;
    font-size: 13px;
  }

  .chip:hover {
    background: #f4f4f4;
  }

  .schip {
    font-size: 13px;
    padding: 3px 4px;
  }

  .plot {
    background: #fcfbf8;
    border: 1px solid #ddd;
  }

  .plot .grid {
    stroke: #e4e0d8;
    stroke-width: 1;
  }

  .plot .axis {
    font:
      10px ui-monospace,
      "SF Mono",
      Menlo,
      monospace;
    fill: #999;
  }

  /* ----- shared widgets */
  .mini,
  .preset {
    padding: 4px 10px;
    border: 1px solid #777;
    border-radius: 4px;
    background: #fff;
  }

  .preset {
    min-width: 130px;
  }

  .mini:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .mini:hover:enabled,
  .preset:hover {
    background-color: #eef;
  }

  .winput {
    width: 64px;
    padding: 3px 6px;
    border: 1px solid #999;
    border-radius: 4px;
  }

  .dslide {
    width: 160px;
    accent-color: #333;
  }

  input[type="range"] {
    accent-color: #333;
  }

  .mono {
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 13px;
  }

  .dim {
    color: #777;
    font-size: 14px;
  }

  .notes p {
    font-size: 14px;
    color: #444;
  }

  h3 {
    font-size: 16px;
  }
</style>
