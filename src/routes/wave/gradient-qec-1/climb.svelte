<script>
    import { onDestroy } from "svelte";

    // f(a) = |1 + (2 - i) a|^2 / (6 (1 + |a|^2)), a = x + iy
    // peaks at f = 1 when a = 2 + i
    function f(x, y) {
        const wr = 1 + 2 * x + y;
        const wi = 2 * y - x;
        return (wr * wr + wi * wi) / (6 * (1 + x * x + y * y));
    }

    // closed-form partials, used only to flag finite-difference bias
    function exact(x, y) {
        const wr = 1 + 2 * x + y;
        const wi = 2 * y - x;
        const num = wr * wr + wi * wi;
        const den = 6 * (1 + x * x + y * y);
        return [
            ((4 * wr - 2 * wi) * den - num * 12 * x) / (den * den),
            ((2 * wr + 4 * wi) * den - num * 12 * y) / (den * den),
        ];
    }

    const TOL = 1e-3; // stop once f improves by under 0.1% per step
    const CAP = 500;

    let ax0 = 0; // start point
    let ay0 = 0;
    let delta = 0.01;
    let lr = 1;
    let k = 0; // scrub position along the trajectory

    // the whole climb is a pure function of (start, delta, lr); the slider
    // only picks a step along it, so no control can leave stale state behind
    function trace(x, y, d, eta) {
        const out = [];
        for (let s = 0; s <= CAP; s++) {
            const base = f(x, y);
            const gx = (f(x + d, y) - base) / d;
            const gy = (f(x, y + d) - base) / d;
            out.push({
                x,
                y,
                f: base,
                gx,
                gy,
                S: Math.hypot(gx, gy),
                th: (Math.atan2(gy, gx) * 180) / Math.PI,
            });
            if (
                s > 0 &&
                Math.abs(base - out[s - 1].f) <
                    TOL * Math.max(out[s - 1].f, 1e-12)
            )
                break;
            x += eta * gx;
            y += eta * gy;
        }
        return out;
    }

    $: traj = trace(ax0, ay0, +delta, +lr);
    $: last = traj.length - 1;
    $: if (k > last) k = last;
    $: cur = traj[k];
    $: ex = exact(cur.x, cur.y);
    $: past = traj.slice(0, k + 1);
    $: biased = Math.abs(cur.gx - ex[0]) + Math.abs(cur.gy - ex[1]) > 0.03;

    // changing the start, delta or lr stops playback and rewinds to step 0
    $: rewind(ax0, ay0, delta, lr);
    function rewind() {
        stopRun();
        k = 0;
    }

    let playing = false;
    let timer = null;
    function stopRun() {
        playing = false;
        if (timer) clearInterval(timer);
        timer = null;
    }
    function run() {
        if (playing) return stopRun();
        if (k >= last) k = 0;
        playing = true;
        timer = setInterval(() => {
            if (k >= last) return stopRun();
            k += 1;
        }, 200);
    }
    function home() {
        stopRun();
        ax0 = 0;
        ay0 = 0;
        k = 0;
    }
    onDestroy(stopRun);

    // plot geometry; the field is static since f never changes
    const LO = -1.5;
    const HI = 3;
    const NC = 52;
    const W = 380;
    const M = 26;

    const cells = [];
    const cw = (HI - LO) / NC;
    for (let r = 0; r < NC; r++) {
        for (let c = 0; c < NC; c++) {
            const x = LO + (c + 0.5) * cw;
            const y = LO + (r + 0.5) * cw;
            cells.push({ c, r, v: f(x, y) });
        }
    }

    const sx = (x) => M + ((x - LO) / (HI - LO)) * W;
    const sy = (y) => M + W - ((y - LO) / (HI - LO)) * W;

    // solid colour per cell: cells overlap to kill seams, so translucent
    // fills would stack to a dark grid; blend with white here instead
    const shade = (v) => {
        const a = Math.min(1, Math.max(0, v * 0.85));
        const ch = (c) => Math.round(255 + (c - 255) * a);
        return `rgb(${ch(0)}, ${ch(153)}, ${ch(119)})`;
    };
    const ARR = 0.55; // visual scale of the probe arrows

    // the angle theta drawn as an arc from the real axis to the red arrow
    const ARCR = 30;
    $: showDir = cur.S > 0.05;
    $: arc = (() => {
        const cx = sx(cur.x);
        const cy = sy(cur.y);
        const rad = (cur.th * Math.PI) / 180;
        const ex2 = cx + ARCR * Math.cos(rad);
        const ey2 = cy - ARCR * Math.sin(rad);
        const sweep = cur.th > 0 ? 0 : 1;
        return `M ${cx + ARCR} ${cy} A ${ARCR} ${ARCR} 0 0 ${sweep} ${ex2} ${ey2}`;
    })();
    $: arcLabel = (() => {
        const rad = ((cur.th / 2) * Math.PI) / 180;
        return [
            sx(cur.x) + (ARCR + 13) * Math.cos(rad),
            sy(cur.y) - (ARCR + 13) * Math.sin(rad),
        ];
    })();

    let dragging = false;
    function setStart(e) {
        const r = e.currentTarget.getBoundingClientRect();
        const scale = (W + 2 * M) / r.width;
        const px = (e.clientX - r.left) * scale;
        const py = (e.clientY - r.top) * scale;
        const x = LO + ((px - M) / W) * (HI - LO);
        const y = LO + ((M + W - py) / W) * (HI - LO);
        ax0 = Math.min(HI, Math.max(LO, x));
        ay0 = Math.min(HI, Math.max(LO, y));
    }
    function down(e) {
        dragging = true;
        setStart(e);
        e.preventDefault();
    }
    function move(e) {
        if (dragging) setStart(e);
    }
    function up() {
        dragging = false;
    }

    const fmt = (v) => (v >= 0 ? "+" : "") + v.toFixed(3);
    const fa = (x, y) =>
        x.toFixed(3) + (y >= 0 ? " + " : " − ") + Math.abs(y).toFixed(3) + "i";
</script>

<div class="box tc mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb5">
        <button on:click={run}>{playing ? "pause" : "climb"}</button>
        <button on:click={home}>reset</button>
        <label>
            step <b>{k}</b> / {last}
            <input
                type="range"
                min="0"
                max={last}
                step="1"
                bind:value={k}
                on:input={stopRun}
            />
        </label>
    </div>
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            probe δ =
            <select bind:value={delta}>
                <option value={0.2}>0.2</option>
                <option value={0.05}>0.05</option>
                <option value={0.01}>0.01</option>
                <option value={0.001}>0.001</option>
            </select>
        </label>
        <label>
            step size η = <b>{(+lr).toFixed(2)}</b>
            <input
                type="range"
                min="0.1"
                max="1.5"
                step="0.05"
                bind:value={lr}
            />
        </label>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <svg
        viewBox="0 0 {W + 2 * M} {W + 2 * M}"
        width={W + 2 * M}
        font-family="monospace"
        font-size="10"
        role="img"
        on:pointerdown={down}
        on:pointermove={move}
        on:pointerup={up}
        on:pointerleave={up}
    >
        <defs>
            <marker
                id="cl-x"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="3"
                orient="auto"
            >
                <path d="M0,0 L6,3 L0,6 z" fill="#c75200" />
            </marker>
            <marker
                id="cl-y"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="3"
                orient="auto"
            >
                <path d="M0,0 L6,3 L0,6 z" fill="#2456c9" />
            </marker>
            <marker
                id="cl-s"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="3"
                orient="auto"
            >
                <path d="M0,0 L6,3 L0,6 z" fill="#d22" />
            </marker>
        </defs>

        {#each cells as cell}
            <rect
                x={M + cell.c * (W / NC)}
                y={M + W - (cell.r + 1) * (W / NC)}
                width={W / NC + 0.6}
                height={W / NC + 0.6}
                fill={shade(cell.v)}
            />
        {/each}

        <line x1={sx(LO)} x2={sx(HI)} y1={sy(0)} y2={sy(0)} stroke="#8884" />
        <line x1={sx(0)} x2={sx(0)} y1={sy(LO)} y2={sy(HI)} stroke="#8884" />
        <text x={sx(HI) - 4} y={sy(0) - 5} text-anchor="end" class="ax">x</text>
        <text x={sx(0) + 6} y={sy(HI) + 12} class="ax">y</text>

        <!-- the peak -->
        <line x1={sx(2) - 5} x2={sx(2) + 5} y1={sy(1)} y2={sy(1)} stroke="#fff" />
        <line x1={sx(2)} x2={sx(2)} y1={sy(1) - 5} y2={sy(1) + 5} stroke="#fff" />
        <text x={sx(2) + 8} y={sy(1) - 6} class="axw">f = 1</text>

        <!-- the climb -->
        <polyline
            points={traj.map((p) => sx(p.x) + "," + sy(p.y)).join(" ")}
            fill="none"
            stroke="#2224"
            stroke-width="1.2"
            stroke-dasharray="2 4"
        />
        <polyline
            points={past.map((p) => sx(p.x) + "," + sy(p.y)).join(" ")}
            fill="none"
            stroke="#222"
            stroke-width="1.6"
        />
        <rect
            x={sx(traj[0].x) - 3.5}
            y={sy(traj[0].y) - 3.5}
            width="7"
            height="7"
            fill="#fff"
            stroke="#222"
            stroke-width="1.5"
        />

        {#if showDir}
            <!-- theta, drawn as the angle it is -->
            <path d={arc} fill="none" stroke="#d22" stroke-opacity="0.5" />
            <text
                x={arcLabel[0]}
                y={arcLabel[1] + 3}
                text-anchor="middle"
                fill="#d22"
            >
                θ
            </text>
        {/if}

        <!-- the two axis probes and the assembled steepest direction -->
        <line
            x1={sx(cur.x)}
            y1={sy(cur.y)}
            x2={sx(cur.x + ARR * cur.gx)}
            y2={sy(cur.y)}
            stroke="#c75200"
            stroke-width="2"
            marker-end="url(#cl-x)"
        />
        <line
            x1={sx(cur.x)}
            y1={sy(cur.y)}
            x2={sx(cur.x)}
            y2={sy(cur.y + ARR * cur.gy)}
            stroke="#2456c9"
            stroke-width="2"
            marker-end="url(#cl-y)"
        />
        <line
            x1={sx(cur.x)}
            y1={sy(cur.y)}
            x2={sx(cur.x + ARR * cur.gx)}
            y2={sy(cur.y + ARR * cur.gy)}
            stroke="#d22"
            stroke-width="2.4"
            marker-end="url(#cl-s)"
        />
        <circle
            cx={sx(cur.x)}
            cy={sy(cur.y)}
            r="5"
            fill="#fff"
            stroke="#222"
            stroke-width="2"
        />
    </svg>

    <div class="read mt5">
        a = {fa(cur.x, cur.y)} · f(a) = <b>{cur.f.toFixed(4)}</b>
    </div>
    <div class="read mt5">
        <span class="cx">∂f/∂x = {fmt(cur.gx)}</span>
        <span class="cy">∂f/∂y = {fmt(cur.gy)}</span>
        <span class="cs">→ S = {cur.S.toFixed(3)} at θ = {cur.th.toFixed(1)}°</span>
    </div>
    {#if biased}
        <div class="warn mt5">
            probe bias: the exact slopes are {fmt(ex[0])}, {fmt(ex[1])}. shrink
            δ and the measured ones converge to them.
        </div>
    {/if}

    <div class="note mt10">
        drag anywhere to move the start (white square); brighter green is
        higher f, the white cross is the peak at a = 2 + i. the
        <span class="cx">orange</span> and <span class="cy">blue</span> arrows
        are the two δ probes, <span class="cs">red</span> is the steepest
        direction assembled from them. the climb runs until f improves by
        under 0.1% a step.
    </div>
</div>

<style>
    .box {
        background: #fff;
        max-width: 470px;
        color: #222;
    }
    svg {
        /* atomic.css strokes every svg with currentcolor, which grids the
           heatmap and outlines the labels; kill it, strokes here are explicit */
        stroke: none;
        max-width: 100%;
        height: auto;
        cursor: crosshair;
        background: #fff;
        touch-action: none;
        border: 1px solid #eee;
        border-radius: 6px;
    }
    .ax {
        font-size: 11px;
        fill: #555;
        font-family: monospace;
    }
    .axw {
        font-size: 11px;
        fill: #fff;
        font-family: monospace;
    }
    button {
        padding: 4px 10px;
        border-radius: 5px;
        background: #f6f6f6;
        cursor: pointer;
        font-size: 0.85em;
        color: #222;
    }
    button:hover {
        background: #ececec;
    }
    input[type="range"] {
        vertical-align: middle;
        width: 130px;
    }
    label {
        font-size: 0.9em;
    }
    select {
        font-size: 0.9em;
    }
    .read {
        font-family: monospace;
        font-size: 0.8em;
    }
    .read span {
        margin: 0 6px;
    }
    .cx {
        color: #c75200;
    }
    .cy {
        color: #2456c9;
    }
    .cs {
        color: #d22;
    }
    .warn {
        color: #c75200;
        font-size: 0.8em;
        font-family: monospace;
    }
    .note {
        font-size: 0.78em;
        color: #777;
    }
</style>
