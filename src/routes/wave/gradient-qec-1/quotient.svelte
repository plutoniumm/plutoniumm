<script>
    import { onDestroy } from "svelte";

    // two test functions, both probed as black boxes:
    // "abs": f(z) = |z|^2 (real-valued), "sq": f(z) = z^2 (holomorphic)
    const delta = 0.01;

    let mode = "abs";
    let th = 0; // probe direction in degrees
    let zx = 1;
    let zy = 0;

    function fval(x, y, m) {
        if (m === "abs") return [x * x + y * y, 0];
        return [x * x - y * y, 2 * x * y];
    }

    // q = (f(z0 + d) - f(z0)) / d, with d = delta e^{i th}
    function quot(x, y, rad, m) {
        const dx = delta * Math.cos(rad);
        const dy = delta * Math.sin(rad);
        const f1 = fval(x + dx, y + dy, m);
        const f0 = fval(x, y, m);
        const nr = f1[0] - f0[0];
        const ni = f1[1] - f0[1];
        const dd = dx * dx + dy * dy;
        return [(nr * dx + ni * dy) / dd, (ni * dx - nr * dy) / dd];
    }

    const N = 90; // ring resolution, one point per 4 degrees
    function ringOf(x, y, m) {
        const pts = [];
        for (let t = 0; t <= N; t++) {
            pts.push(quot(x, y, (t * 4 * Math.PI) / 180, m));
        }
        return pts;
    }

    function ringSpread(r) {
        let mx = 0;
        let my = 0;
        for (const p of r) {
            mx += p[0];
            my += p[1];
        }
        mx /= r.length;
        my /= r.length;
        let d = 0;
        for (const p of r) {
            d = Math.max(d, Math.hypot(p[0] - mx, p[1] - my));
        }
        return 2 * d;
    }

    const hue = (deg) => `hsl(${Math.round(deg)}, 75%, 42%)`;

    $: rad = (th * Math.PI) / 180;
    $: q = quot(zx, zy, rad, mode);
    $: ring = ringOf(zx, zy, mode);
    $: spread = ringSpread(ring);
    $: still = spread < 0.05;

    // geometry: two square panels
    const S = 230;
    const C = S / 2;
    const RL = 1.9; // z-plane half-range
    const RQ = 3.4; // quotient-plane half-range
    const PAD = 12;
    const lx = (v) => C + (v / RL) * (C - PAD);
    const ly = (v) => C - (v / RL) * (C - PAD);
    const qx = (v) => C + (v / RQ) * (C - PAD);
    const qy = (v) => C - (v / RQ) * (C - PAD);

    // direction arrow with a hand-drawn head, so it can carry the θ colour
    const ARR = 0.6;
    $: tip = [zx + ARR * Math.cos(rad), zy + ARR * Math.sin(rad)];
    $: head = (() => {
        const a = Math.atan2(ly(tip[1]) - ly(zy), lx(tip[0]) - lx(zx));
        const px = lx(tip[0]);
        const py = ly(tip[1]);
        const w = 7;
        return [
            px,
            py,
            px - w * Math.cos(a - 0.45),
            py - w * Math.sin(a - 0.45),
            px - w * Math.cos(a + 0.45),
            py - w * Math.sin(a + 0.45),
        ].join(",");
    })();

    // sweep animation: toggles, and any manual slider input cancels it
    let sweeping = false;
    let timer = null;
    function stopSweep() {
        sweeping = false;
        if (timer) clearInterval(timer);
        timer = null;
    }
    function sweep() {
        if (sweeping) return stopSweep();
        sweeping = true;
        timer = setInterval(() => {
            th = (th + 2) % 360;
        }, 30);
    }
    onDestroy(stopSweep);

    // drag z0 inside the left panel, clamped to |z0| <= 1.5
    let dragging = false;
    function setZ(e) {
        const r = e.currentTarget.getBoundingClientRect();
        const px = ((e.clientX - r.left) / r.width) * S;
        const py = ((e.clientY - r.top) / r.height) * S;
        let x = ((px - C) / (C - PAD)) * RL;
        let y = ((C - py) / (C - PAD)) * RL;
        const d = Math.hypot(x, y);
        if (d > 1.5) {
            x *= 1.5 / d;
            y *= 1.5 / d;
        }
        zx = x;
        zy = y;
    }
    function down(e) {
        dragging = true;
        setZ(e);
    }
    function move(e) {
        if (dragging) setZ(e);
    }
    function up() {
        dragging = false;
    }

    const fc = (re, im) =>
        re.toFixed(2) + (im >= 0 ? " + " : " − ") + Math.abs(im).toFixed(2) + "i";
</script>

<div class="box tc mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            <input type="radio" bind:group={mode} value="abs" />
            f(z) = |z|<sup>2</sup>
        </label>
        <label>
            <input type="radio" bind:group={mode} value="sq" />
            f(z) = z<sup>2</sup>
        </label>
        <label>
            θ = <b>{th}°</b>
            <input
                type="range"
                min="0"
                max="359"
                step="1"
                bind:value={th}
                on:input={stopSweep}
            />
        </label>
        <button on:click={sweep}>{sweeping ? "stop" : "sweep θ"}</button>
    </div>

    <div class="f al-ct j-ct fw g10">
        <div>
            <div class="cap mb5">approach z₀ from direction θ</div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <svg
                viewBox="0 0 {S} {S}"
                width={S}
                role="img"
                class="drag"
                on:pointerdown={down}
                on:pointermove={move}
                on:pointerup={up}
                on:pointerleave={up}
            >
                <line x1="0" x2={S} y1={ly(0)} y2={ly(0)} stroke="#8883" />
                <line x1={lx(0)} x2={lx(0)} y1="0" y2={S} stroke="#8883" />
                <text x={lx(1)} y={ly(0) + 13} text-anchor="middle" class="ax">
                    1
                </text>
                <text x={lx(0) - 7} y={ly(1) + 3} text-anchor="end" class="ax">
                    i
                </text>

                <line
                    x1={lx(zx)}
                    y1={ly(zy)}
                    x2={lx(tip[0])}
                    y2={ly(tip[1])}
                    stroke={hue(th)}
                    stroke-width="2.5"
                />
                <polygon points={head} fill={hue(th)} />
                <circle
                    cx={lx(zx)}
                    cy={ly(zy)}
                    r="6"
                    fill="#fff"
                    stroke="#222"
                    stroke-width="2"
                />
                <text x={lx(zx) + 9} y={ly(zy) - 8} class="ax">z₀</text>
            </svg>
            <div class="cap">drag z₀</div>
        </div>

        <div>
            <div class="cap mb5">the answer q(θ), same colour</div>
            <svg viewBox="0 0 {S} {S}" width={S} role="img">
                <line x1="0" x2={S} y1={qy(0)} y2={qy(0)} stroke="#8883" />
                <line x1={qx(0)} x2={qx(0)} y1="0" y2={S} stroke="#8883" />
                <text x={qx(2)} y={qy(0) + 13} text-anchor="middle" class="ax">
                    2
                </text>
                <text x={qx(0) - 7} y={qy(2) + 3} text-anchor="end" class="ax">
                    2i
                </text>

                {#each ring.slice(0, -1) as p, t}
                    <line
                        x1={qx(p[0])}
                        y1={qy(p[1])}
                        x2={qx(ring[t + 1][0])}
                        y2={qy(ring[t + 1][1])}
                        stroke={hue(t * 4)}
                        stroke-width={still ? 5 : 2.5}
                        stroke-opacity="0.75"
                        stroke-linecap="round"
                    />
                {/each}
                <circle
                    cx={qx(q[0])}
                    cy={qy(q[1])}
                    r="6"
                    fill={hue(th)}
                    stroke="#222"
                    stroke-width="1.5"
                />
            </svg>
            <div class="cap">every direction's answer at once</div>
        </div>
    </div>

    <div class="verdict mt10" class:ok={still}>
        {#if still}
            every direction lands on the same point: f has a derivative at z₀ =
            {fc(zx, zy)}
        {:else}
            q(θ) = {fc(q[0], q[1])} — the answers spread over a circle of
            diameter {spread.toFixed(2)}: no single derivative exists at z₀ =
            {fc(zx, zy)}
        {/if}
    </div>

    <div class="note mt10">
        the arrow's colour is the direction θ; the dot of the same colour is
        that direction's difference quotient. with f = |z|² at z₀ = 1, θ = 0°
        reads 2.01 and θ = 90° reads −0.01i, the two answers worked in the
        text. switch to z² and the whole rainbow collapses onto one point.
    </div>
</div>

<style>
    .box {
        background: #fff;
        max-width: 540px;
        color: #222;
    }
    svg {
        stroke: none; /* atomic.css strokes every svg with currentcolor */
        max-width: 100%;
        height: auto;
        background: #fff;
        border: 1px solid #eee;
        border-radius: 6px;
    }
    svg.drag {
        cursor: crosshair;
        touch-action: none;
    }
    .ax {
        font-size: 11px;
        fill: #888;
        font-family: monospace;
    }
    .cap {
        font-size: 0.78em;
        color: #777;
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
    .verdict {
        font-size: 0.85em;
        color: #c75200;
        font-family: monospace;
    }
    .verdict.ok {
        color: #097;
    }
    .note {
        font-size: 0.78em;
        color: #777;
    }
</style>
