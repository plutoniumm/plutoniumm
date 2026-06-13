<script lang="ts">
  import { onMount } from "svelte";
  import {
    VIEW,
    DEG,
    makeEl,
    trace,
    wlColor,
    hitEl,
    segOf,
    polyOf,
    presets,
  } from "./optics";
  import type { El, Kind, Vec, Preset } from "./optics";

  import beamIcon from "./beam.svg?raw";
  import pointIcon from "./point.svg?raw";
  import mirrorIcon from "./mirror.svg?raw";
  import lensConvIcon from "./lens-converging.svg?raw";
  import lensDivIcon from "./lens-diverging.svg?raw";
  import blockIcon from "./block.svg?raw";
  import prismIcon from "./prism.svg?raw";
  import circleIcon from "./circle.svg?raw";
  import screenIcon from "./screen.svg?raw";

  const palette: {
    kind: Kind;
    label: string;
    icon: string;
    over?: Partial<El>;
  }[] = [
    {
      kind: "beam",
      label: "beam",
      icon: beamIcon,
    },
    {
      kind: "point",
      label: "point source",
      icon: pointIcon,
    },
    {
      kind: "mirror",
      label: "mirror",
      icon: mirrorIcon,
    },
    {
      kind: "lens",
      label: "converging lens",
      icon: lensConvIcon,
      over: { f: 150 },
    },
    {
      kind: "lens",
      label: "diverging lens",
      icon: lensDivIcon,
      over: { f: -150 },
    },
    {
      kind: "block",
      label: "glass block",
      icon: blockIcon,
    },
    {
      kind: "prism",
      label: "prism",
      icon: prismIcon,
    },
    {
      kind: "circle",
      label: "glass circle",
      icon: circleIcon,
    },
    {
      kind: "screen",
      label: "screen",
      icon: screenIcon,
    },
  ];

  const labels: Record<Kind, string> = {
    point: "point source",
    beam: "beam",
    mirror: "mirror",
    lens: "ideal lens",
    block: "glass block",
    prism: "prism",
    circle: "glass circle",
    screen: "screen",
  };

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;

  let elements: El[] = [];
  let sel: El | null = null;
  let rays = 12;
  let fresnel = true;
  let segCount = 0;
  let truncated = false;

  let mode: "move" | "rotate" | null = null;
  let grab = {
    x: 0,
    y: 0,
  };

  const glassKinds: Kind[] = ["block", "prism", "circle"];
  const isGlass = (k: Kind) => glassKinds.includes(k);

  function handleR(el: El): number {
    if (el.kind === "circle") return 0;
    if (el.kind === "point") return 36;
    if (el.kind === "beam") return 28 + el.len / 2;
    if (el.kind === "block") return Math.hypot(el.len, el.size) / 2 + 18;
    if (el.kind === "prism") return el.size * 0.75 + 18;

    return el.len / 2 + 18;
  }

  function drawEl(c: CanvasRenderingContext2D, el: El) {
    if (isGlass(el.kind)) {
      c.fillStyle = "rgba(150,190,255,0.08)";
      c.strokeStyle = "rgba(150,190,255,0.5)";
      c.lineWidth = 1.5;
      c.beginPath();

      if (el.kind === "circle") {
        c.arc(el.x, el.y, el.size, 0, 2 * Math.PI);
      } else {
        const v = polyOf(el);

        if (v) {
          c.moveTo(v[0].x, v[0].y);
          for (let i = 1; i < v.length; i++) c.lineTo(v[i].x, v[i].y);
          c.closePath();
        }
      }

      c.fill();
      c.stroke();

      return;
    }

    if (el.kind === "mirror" || el.kind === "screen") {
      const { a, b } = segOf(el);
      c.strokeStyle = el.kind === "mirror" ? "#d8dee8" : "#666";
      c.lineWidth = el.kind === "mirror" ? 3 : 5;
      c.beginPath();
      c.moveTo(a.x, a.y);
      c.lineTo(b.x, b.y);
      c.stroke();

      return;
    }

    if (el.kind === "lens") {
      const { a, b } = segOf(el);
      const u = {
        x: Math.cos(el.angle),
        y: Math.sin(el.angle),
      };
      c.strokeStyle = "#8fc1ff";
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(a.x, a.y);
      c.lineTo(b.x, b.y);
      // arrowheads: outward for converging, inward for diverging

      const chev = (p: Vec, d: Vec) => {
        c.moveTo(p.x - d.x * 10 - d.y * 6, p.y - d.y * 10 + d.x * 6);
        c.lineTo(p.x, p.y);
        c.lineTo(p.x - d.x * 10 + d.y * 6, p.y - d.y * 10 - d.x * 6);
      };

      if (Math.abs(el.f) < 5) {
        // engine treats |f| < 5 as a transparent pane: no arrowheads
      } else if (el.f >= 0) {
        chev(b, u);
        chev(a, {
          x: -u.x,
          y: -u.y,
        });
      } else {
        chev(b, {
          x: -u.x,
          y: -u.y,
        });
        chev(a, u);
      }

      c.stroke();

      return;
    }

    // sources
    const [r, g, bl] = wlColor(el.wl);
    const col = el.white ? "#fff" : `rgb(${r},${g},${bl})`;

    if (el.kind === "point") {
      c.fillStyle = col;
      c.beginPath();
      c.arc(el.x, el.y, 5, 0, 2 * Math.PI);
      c.fill();

      if (el.spread < 360) {
        c.strokeStyle = col;
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(el.x, el.y);
        c.lineTo(
          el.x + Math.cos(el.angle) * 16,
          el.y + Math.sin(el.angle) * 16,
        );
        c.stroke();
      }
    } else {
      // beam: emitting aperture bar + direction tick
      const { a, b } = segOf({
        ...el,
        angle: el.angle + Math.PI / 2,
      });
      c.strokeStyle = col;
      c.lineWidth = 4;
      c.beginPath();
      c.moveTo(a.x, a.y);
      c.lineTo(b.x, b.y);
      c.stroke();
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(el.x, el.y);
      c.lineTo(el.x + Math.cos(el.angle) * 18, el.y + Math.sin(el.angle) * 18);
      c.stroke();
    }
  }

  function drawSelection(c: CanvasRenderingContext2D, el: El) {
    c.strokeStyle = "#ffd34d";
    c.lineWidth = 1.5;
    c.setLineDash([5, 4]);
    c.beginPath();

    if (el.kind === "circle") {
      c.arc(el.x, el.y, el.size + 5, 0, 2 * Math.PI);
    } else if (isGlass(el.kind)) {
      const v = polyOf(el);

      if (v) {
        c.moveTo(v[0].x, v[0].y);
        for (let i = 1; i < v.length; i++) c.lineTo(v[i].x, v[i].y);
        c.closePath();
      }
    } else if (el.kind === "point" || el.kind === "beam") {
      c.arc(el.x, el.y, 14, 0, 2 * Math.PI);
    } else {
      const { a, b } = segOf(el);
      c.moveTo(a.x, a.y);
      c.lineTo(b.x, b.y);
    }

    c.stroke();

    const r = handleR(el);

    if (r > 0) {
      const hx = el.x + Math.cos(el.angle) * r;
      const hy = el.y + Math.sin(el.angle) * r;
      c.beginPath();
      c.moveTo(el.x, el.y);
      c.lineTo(hx, hy);
      c.stroke();
      c.setLineDash([]);
      c.fillStyle = "#ffd34d";
      c.beginPath();
      c.arc(hx, hy, 6, 0, 2 * Math.PI);
      c.fill();
    }

    c.setLineDash([]);

    if (el.kind === "lens") {
      // focal point crosses on both sides of the lens plane
      const m = {
        x: -Math.sin(el.angle),
        y: Math.cos(el.angle),
      };
      const fd = Math.abs(el.f);
      c.strokeStyle = "#ffd34d";
      c.lineWidth = 1.5;

      for (const s of [1, -1]) {
        const px = el.x + m.x * fd * s;
        const py = el.y + m.y * fd * s;
        c.beginPath();
        c.moveTo(px - 5, py);
        c.lineTo(px + 5, py);
        c.moveTo(px, py - 5);
        c.lineTo(px, py + 5);
        c.stroke();
      }
    }
  }

  function render() {
    if (!ctx) return;
    const out = trace(elements, {
      rays,
      fresnel,
    });
    segCount = out.segs.length;
    truncated = out.truncated;
    const c = ctx;

    c.fillStyle = "#0d0e12";
    c.fillRect(0, 0, VIEW.w, VIEW.h);

    c.strokeStyle = "#181a21";
    c.lineWidth = 1;
    c.beginPath();

    for (let x = 50; x < VIEW.w; x += 50) {
      c.moveTo(x, 0);
      c.lineTo(x, VIEW.h);
    }

    for (let y = 50; y < VIEW.h; y += 50) {
      c.moveTo(0, y);
      c.lineTo(VIEW.w, y);
    }

    c.stroke();

    for (const el of elements) drawEl(c, el);

    c.save();
    c.beginPath();
    c.rect(0, 0, VIEW.w, VIEW.h);
    c.clip();
    c.globalCompositeOperation = "lighter";
    c.lineWidth = 1.4;

    for (const s of out.segs) {
      const [r, g, b] = wlColor(s.wl);
      c.strokeStyle = `rgba(${r},${g},${b},${Math.min(s.I, 1)})`;
      c.beginPath();
      c.moveTo(s.a.x, s.a.y);
      c.lineTo(s.b.x, s.b.y);
      c.stroke();
    }

    c.restore();

    if (sel) drawSelection(c, sel);
  }

  function toWorld(e: PointerEvent): Vec {
    const r = canvas.getBoundingClientRect();

    return {
      x: ((e.clientX - r.left) * VIEW.w) / r.width,
      y: ((e.clientY - r.top) * VIEW.h) / r.height,
    };
  }

  function pick(p: Vec): El | null {
    // small elements (sources, lines) take priority over glass bodies
    for (let i = elements.length - 1; i >= 0; i--)
      if (!isGlass(elements[i].kind) && hitEl(elements[i], p))
        return elements[i];

    for (let i = elements.length - 1; i >= 0; i--)
      if (isGlass(elements[i].kind) && hitEl(elements[i], p))
        return elements[i];

    return null;
  }

  let pid: number | null = null;

  function down(e: PointerEvent) {
    if (mode) return;
    const p = toWorld(e);
    pid = e.pointerId;

    if (sel) {
      const r = handleR(sel);

      if (r > 0) {
        const hx = sel.x + Math.cos(sel.angle) * r;
        const hy = sel.y + Math.sin(sel.angle) * r;

        if (Math.hypot(p.x - hx, p.y - hy) < 14) {
          mode = "rotate";
          e.preventDefault();

          return;
        }
      }
    }

    sel = pick(p);

    if (sel) {
      mode = "move";
      grab = {
        x: p.x - sel.x,
        y: p.y - sel.y,
      };
      e.preventDefault();
    }

    render();
  }

  function move(e: PointerEvent) {
    if (
      !mode
      || !sel
      || e.pointerId !== pid
    )
      return;

    const p = toWorld(e);

    if (mode === "move") {
      sel.x = Math.min(Math.max(p.x - grab.x, 0), VIEW.w);
      sel.y = Math.min(Math.max(p.y - grab.y, 0), VIEW.h);
    } else {
      sel.angle = Math.atan2(p.y - sel.y, p.x - sel.x);

      if (sel.kind === "beam") {
        // handle sits at 28 + len/2, so radial drag maps back to width
        const d = Math.hypot(p.x - sel.x, p.y - sel.y);
        sel.len = Math.min(Math.max((d - 28) * 2, 2), 240);
      }
    }

    sel = sel;
    render();
  }

  function up(e: PointerEvent) {
    if (e.pointerId !== pid) return;
    mode = null;
    pid = null;
  }

  function key(e: KeyboardEvent) {
    if (e.key !== "Delete" && e.key !== "Backspace") return;
    const t = e.target as HTMLElement | null;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;

    if (sel) {
      removeSel();
      e.preventDefault();
    }
  }

  function add(kind: Kind, over?: Partial<El>) {
    const el = makeEl(
      kind,
      VIEW.w / 2 + Math.round(Math.random() * 80 - 40),
      VIEW.h / 2 + Math.round(Math.random() * 60 - 30),
      over,
    );
    elements = [...elements, el];
    sel = el;
    render();
  }

  function removeSel() {
    if (!sel) return;
    elements = elements.filter((e) => e !== sel);
    sel = null;
    render();
  }

  function clearAll() {
    elements = [];
    sel = null;
    render();
  }

  function loadPreset(p: Preset) {
    elements = p.build();
    rays = p.rays;
    sel = null;
    render();
  }

  function setAngle(e: Event) {
    if (!sel) return;
    sel.angle = +(e.currentTarget as HTMLInputElement).value * DEG;
    sel = sel;
    render();
  }

  const degOf = (a: number) => {
    let d = Math.round(a / DEG) % 360;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;

    return d;
  };

  onMount(() => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = VIEW.w * dpr;
    canvas.height = VIEW.h * dpr;
    const c = canvas.getContext("2d");
    if (!c) return;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx = c;
    loadPreset(presets[0]);
  });
</script>

<svelte:window on:pointermove={move} on:pointerup={up} on:keydown={key} />

<svelte:head>
  <title>Ray optics | manav.ch</title>
  <meta
    name="description"
    content="An in-browser 2D ray optics playground. Snell refraction with Cauchy dispersion, Fresnel partial reflection, total internal reflection, mirrors, prisms and ideal lenses."
  />
</svelte:head>

<main class="mx-a p20 f-col g10">
  <h1>Ray optics</h1>
  <p class="intro m0">
    A 2D ray optics playground. Rays follow Snell's law with a wavelength
    dependent refractive index (Cauchy dispersion), so white light splits in
    glass. Surface losses follow the Fresnel equations, and steep internal
    angles give total internal reflection. Add elements from the palette, drag
    them to move, and drag the round handle to rotate (on a beam, pulling the
    handle in or out also sets the width). Click an element to edit it.
  </p>

  <section class="panel rx5 p10">
    <div class="f g5 al-ct fw">
      <span class="dim">add</span>
      {#each palette as p, j (j)}
        <button
          type="button"
          class="pal d-if al-ct ptr"
          on:click={() => add(p.kind, p.over)}
        >
          {@html p.icon}
          {p.label}
        </button>
      {/each}
      <button type="button" class="warn ptr" on:click={clearAll}>clear all</button>
    </div>
  </section>

  <canvas bind:this={canvas} class="rx5 w-100 d-b" on:pointerdown={down}
  ></canvas>

  <section class="panel rx5 p10 f g20 al-ct fw">
    <label>
      ray density
      <input
        type="range"
        min="2"
        max="48"
        step="1"
        bind:value={rays}
        on:input={render}
      />
      <span class="dim">{rays}</span>
    </label>
    <label class="f g5 al-ct">
      <input type="checkbox" bind:checked={fresnel} on:change={render} />
      partial reflections
    </label>
    <span class="dim">
      {segCount} segments{truncated ? ", budget reached, output truncated" : ""}
    </span>
  </section>

  {#if sel}
    <section class="panel rx5 p10">
      <div class="f g10 al-ct fw">
        <h3 class="my0">
          {sel.kind === "lens"
            ? sel.f >= 0
              ? "converging lens"
              : "diverging lens"
            : labels[sel.kind]}
        </h3>
        <button type="button" class="warn ptr" on:click={removeSel}>delete</button>
      </div>
      <div class="f g20 al-ct fw mt10">
        {#if sel.kind !== "circle"}
          <label>
            angle
            <input
              type="range"
              min="-180"
              max="180"
              step="1"
              value={degOf(sel.angle)}
              on:input={setAngle}
            />
            <span class="dim">{degOf(sel.angle)}&deg;</span>
          </label>
        {/if}

        {#if isGlass(sel.kind)}
          <label>
            n at 550nm
            <input
              type="range"
              min="1.3"
              max="2.4"
              step="0.01"
              bind:value={sel.n}
              on:input={render}
            />
            <span class="dim">{sel.n.toFixed(2)}</span>
          </label>
          <label>
            dispersion
            <input
              type="range"
              min="0"
              max="0.05"
              step="0.001"
              bind:value={sel.disp}
              on:input={render}
            />
            <span class="dim">{sel.disp.toFixed(3)}</span>
          </label>
        {/if}

        {#if sel.kind === "lens"}
          <label>
            focal length
            <input
              type="range"
              min="-400"
              max="400"
              step="5"
              bind:value={sel.f}
              on:input={render}
            />
            <span class="dim">{sel.f}px {Math.abs(sel.f) < 5
                ? "(inactive)"
                : sel.f >= 0
                  ? "(converging)"
                  : "(diverging)"}</span>
          </label>
        {/if}

        {#if sel.kind === "lens" || sel.kind === "mirror" || sel.kind === "screen"}
          <label>
            length
            <input
              type="range"
              min="40"
              max="400"
              step="5"
              bind:value={sel.len}
              on:input={render}
            />
            <span class="dim">{sel.len}px</span>
          </label>
        {/if}

        {#if sel.kind === "block"}
          <label>
            width
            <input
              type="range"
              min="40"
              max="600"
              step="5"
              bind:value={sel.len}
              on:input={render}
            />
            <span class="dim">{sel.len}px</span>
          </label>
          <label>
            height
            <input
              type="range"
              min="20"
              max="300"
              step="5"
              bind:value={sel.size}
              on:input={render}
            />
            <span class="dim">{sel.size}px</span>
          </label>
        {/if}

        {#if sel.kind === "prism"}
          <label>
            apex angle
            <input
              type="range"
              min="20"
              max="80"
              step="1"
              bind:value={sel.apex}
              on:input={render}
            />
            <span class="dim">{sel.apex}&deg;</span>
          </label>
          <label>
            size
            <input
              type="range"
              min="60"
              max="240"
              step="5"
              bind:value={sel.size}
              on:input={render}
            />
            <span class="dim">{sel.size}px</span>
          </label>
        {/if}

        {#if sel.kind === "circle"}
          <label>
            radius
            <input
              type="range"
              min="20"
              max="160"
              step="5"
              bind:value={sel.size}
              on:input={render}
            />
            <span class="dim">{sel.size}px</span>
          </label>
        {/if}

        {#if sel.kind === "point"}
          <label>
            spread
            <input
              type="range"
              min="2"
              max="360"
              step="1"
              bind:value={sel.spread}
              on:input={render}
            />
            <span class="dim">{sel.spread}&deg;</span>
          </label>
        {/if}

        {#if sel.kind === "beam"}
          <label>
            width
            <input
              type="range"
              min="2"
              max="200"
              step="2"
              bind:value={sel.len}
              on:input={render}
            />
            <span class="dim">{sel.len}px</span>
          </label>
        {/if}

        {#if sel.kind === "point" || sel.kind === "beam"}
          <label class="f g5 al-ct">
            <input
              type="checkbox"
              bind:checked={sel.white}
              on:change={render}
            />
            white light
          </label>
          {#if !sel.white}
            <label>
              wavelength
              <input
                type="range"
                min="400"
                max="700"
                step="5"
                bind:value={sel.wl}
                on:input={render}
              />
              <span class="dim">{sel.wl}nm</span>
            </label>
          {/if}
        {/if}
      </div>
    </section>
  {:else}
    <p class="dim my0">
      Nothing selected. Click an element on the canvas to edit it.
    </p>
  {/if}

  <section class="panel rx5 p10 f-col g5">
    <h3 class="m0">Presets</h3>
    <div class="f g5 al-ct fw">
      {#each presets as p, j (j)}
        <button type="button" class="ptr" on:click={() => loadPreset(p)}>{p.name}</button>
      {/each}
    </div>
  </section>

  <section class="panel rx5 p10">
    <h3 class="mt0 mb5">Notes</h3>
    <p class="dim my0">
      The lens is an ideal thin lens: it obeys 1/v + 1/u = 1/f exactly, with no
      aberration and no dispersion. Crosses mark its focal points when selected.
      Glass uses n(&lambda;) = A + B/&lambda;&sup2; with B in &micro;m&sup2;; B
      near 0.004 matches crown glass, larger values exaggerate the rainbow. Ray
      brightness drops at each partial reflection and rays dimmer than 3% are
      dropped. Bounces are capped, so the trace cannot hang.
    </p>
  </section>
</main>

<style>
  main {
    max-width: 940px;
    font-family: sans-serif;
    line-height: 1.5;
  }

  .intro {
    font-size: 18px;
    color: #333;
  }

  .panel {
    background: #fff8;
    border: 1px solid #bbb;
  }

  canvas {
    background: #0d0e12;
    border: 1px solid #bbb;
    touch-action: none;
    cursor: crosshair;
    aspect-ratio: 900 / 560;
  }

  label {
    font-size: 14px;
    color: #555;
  }

  input[type="range"] {
    vertical-align: middle;
    width: 120px;
    accent-color: #555;
  }

  button {
    padding: 5px 12px;
    border: 1px solid #555;
    border-radius: 4px;
    background: #fff;
    font: inherit;
  }

  button:hover {
    background: #eef;
  }

  .pal {
    gap: 6px;
  }

  .pal :global(svg) {
    display: block;
    flex: none;
    color: #345;
  }

  .warn {
    border-color: #b33;
    color: #b33;
  }

  .dim {
    color: #777;
    font-size: 14px;
  }

  h3 {
    font-size: 16px;
  }
</style>
