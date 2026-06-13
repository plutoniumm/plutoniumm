<script>
    import { onDestroy } from "svelte";
    import {
        channel,
        fidelity,
        norm,
        inner,
        orthonormalise,
        ascend,
        damagedCode,
    } from "./repcode.js";

    let p = 0.05;
    let eps = 0.3;
    let eta = 0.005;
    let mode = "mani"; // mani | raw
    let seed = 42;

    let ch = null;
    let c0 = null;
    let c1 = null;
    let baseF = 1;
    let hist = []; // { raw, hon, lean }
    let timer = null;
    let blown = false;

    const cl = (v, a, b) => Math.min(b, Math.max(a, +v || 0));

    function stop() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    onDestroy(stop);

    const honestF = (a, b) => {
        const g = orthonormalise(a, b);

        return fidelity(g[0], g[1], ch);
    };

    const leanOf = (a, b) => {
        const o = inner(a, b);

        return Math.max(
            Math.abs(norm(a) - 1),
            Math.abs(norm(b) - 1),
            Math.hypot(o[0], o[1]),
        );
    };

    function record() {
        const raw = fidelity(c0, c1, ch);
        hist = hist.concat([
            {
                raw,
                hon: honestF(c0, c1),
                lean: leanOf(c0, c1),
            },
        ]);

        if (!Number.isFinite(raw) || raw > 1e6) {
            blown = true;
            stop();
        }
    }

    function reset() {
        stop();
        blown = false;
        ch = channel(cl(p, 0, 0.1));
        const clean = damagedCode(0, 1);
        baseF = fidelity(clean[0], clean[1], ch);
        [c0, c1] = damagedCode(cl(eps, 0, 0.6), seed);
        hist = [];
        record();
    }

    $: {
        p;
        eps;
        seed;
        reset();
    }

    function stepN(k) {
        if (blown) return;

        for (let s = 0; s < k && !blown; s++) {
            [c0, c1] = ascend(c0, c1, ch, mode, +eta);
            record();
        }
    }

    function run() {
        if (timer) {
            stop();

            return;
        }

        let left = 150;
        timer = setInterval(() => {
            stepN(Math.min(5, left));
            left -= 5;
            if (left <= 0) stop();
        }, 40);
    }

    const reroll = () => (seed = Math.trunc(Math.random() * 1e9));

    const PW = 380;
    const PH = 160;
    const LH = 34; // lean strip height
    const PM = 38;
    const TOP = 12;
    $: steps = Math.max(hist.length - 1, 1);
    $: xmax = Math.max(60, steps);
    $: ymin = Math.max(
        0,
        Math.floor((Math.min(baseF, ...hist.map((h) => h.hon)) - 0.04) * 10) /
            10,
    );
    const YMAX = 1.08;
    $: Y = (v) => TOP + (1 - (Math.min(v, YMAX) - ymin) / (YMAX - ymin)) * PH;
    $: X = (i) => PM + (i / xmax) * PW;
    $: yticks = [0, 1, 2, 3].map((t) => ymin + ((1 - ymin) * t) / 3);
    $: rawPts = hist.map((h, i) => X(i) + "," + Y(h.raw)).join(" ");
    $: honPts = hist.map((h, i) => X(i) + "," + Y(h.hon)).join(" ");
    const LY0 = TOP + PH + 30;
    $: LY = (v) => LY0 + LH - Math.min(v, 1) * LH;
    $: leanPts =
        `${X(0)},${LY0 + LH} ` +
        hist.map((h, i) => X(i) + "," + LY(h.lean)).join(" ") +
        ` ${X(hist.length - 1)},${LY0 + LH}`;

    $: cur = hist[hist.length - 1] || {
        raw: 0,
        hon: 0,
        lean: 0,
    };
    $: n0 = c0 ? norm(c0) : 1;
    $: n1 = c1 ? norm(c1) : 1;

    const sci = (v) =>
        v > 10 || !Number.isFinite(v) ? v.toExponential(1) : v.toFixed(4);
</script>

<div class="box tc mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb5">
        <label>
            noise p = <b>{cl(p, 0, 0.1).toFixed(3)}</b>
            <input type="range" min="0" max="0.1" step="0.005" bind:value={p} />
        </label>
        <label>
            damage ε = <b>{cl(eps, 0, 0.6).toFixed(2)}</b>
            <input
                type="range"
                min="0"
                max="0.6"
                step="0.05"
                bind:value={eps}
            />
        </label>
        <button type="button" class="ptr rx5" on:click={reroll}
            >re-roll damage</button
        >
    </div>
    <div class="f al-ct j-ct fw g10 mb10">
        <span class="modes">
            <button
                type="button"
                class="ptr rx5"
                class:on={mode === "raw"}
                on:click={() => (mode = "raw")}
            >
                raw ascent
            </button>
            <button
                type="button"
                class="ptr rx5"
                class:on={mode === "mani"}
                on:click={() => (mode = "mani")}
            >
                project + retract
            </button>
        </span>
        <label>
            η =
            <select bind:value={eta}>
                <option value={0.001}>0.001</option>
                <option value={0.002}>0.002</option>
                <option value={0.005}>0.005</option>
                <option value={0.01}>0.01</option>
            </select>
        </label>
        <button
            type="button"
            class="ptr rx5"
            on:click={() => stepN(1)}
            disabled={!!timer || blown}
        >
            1 step
        </button>
        <button type="button" class="ptr rx5" on:click={run} disabled={blown}>
            {timer ? "stop" : "run 150"}
        </button>
        <button type="button" class="ptr rx5" on:click={reset}>reset</button>
    </div>

    <svg
        viewBox="0 0 {PW + PM + 16} {LY0 + LH + 18}"
        width={PW + PM + 16}
        font-family="monospace"
        font-size="10"
    >
        <!-- the ceiling no valid code can cross -->
        <line
            x1={PM}
            x2={PM + PW}
            y1={Y(1)}
            y2={Y(1)}
            style="stroke:var(--c1)"
            stroke-width="1.2"
        />
        <text x={PM + 4} y={Y(1) - 4} style="fill:var(--c1)">
            F = 1: no valid code can be above this line
        </text>
        <!-- clean-code baseline -->
        <line
            x1={PM}
            x2={PM + PW}
            y1={Y(baseF)}
            y2={Y(baseF)}
            style="stroke:var(--g3)"
            stroke-dasharray="5 4"
        />
        <text x={PM + PW} y={Y(baseF) + 12} text-anchor="end" style="fill:var(--g3)">
            clean code F = {baseF.toFixed(4)}
        </text>
        {#each yticks as gv, ix (ix)}
            <line x1={PM - 3} x2={PM} y1={Y(gv)} y2={Y(gv)} style="stroke:var(--g2)" />
            <text x={PM - 6} y={Y(gv) + 3} text-anchor="end" style="fill:var(--g2)">
                {gv.toFixed(2)}
            </text>
        {/each}
        <line x1={PM} x2={PM} y1={Y(YMAX)} y2={Y(ymin)} style="stroke:var(--g2)" />
        <line x1={PM} x2={PM + PW} y1={Y(ymin)} y2={Y(ymin)} style="stroke:var(--g2)" />
        <text x={PM + PW} y={Y(ymin) + 14} text-anchor="end" style="fill:var(--g2)">
            step {steps}
        </text>
        <polyline
            points={rawPts}
            fill="none"
            style="stroke:var(--c1)"
            stroke-width="1.6"
        />
        <polyline
            points={honPts}
            fill="none"
            style="stroke:var(--c2)"
            stroke-width="2.2"
        />

        <!-- lean strip -->
        <text x={PM} y={LY0 - 5} text-anchor="start" style="fill:var(--g2)">
            distance from the manifold
        </text>
        <line x1={PM} x2={PM + PW} y1={LY0 + LH} y2={LY0 + LH} style="stroke:var(--g2)" />
        <text x={PM - 6} y={LY0 + LH + 3} text-anchor="end" style="fill:var(--g2)">0</text>
        <polygon points={leanPts} style="fill:color-mix(in srgb, var(--c1) 20%, transparent);stroke:var(--c1)" />
    </svg>
    <div class="cap">
        <span class="craw">raw F, what the optimiser sees</span> ·
        <span class="chon fw7">honest F, after re-orthonormalising a copy</span>
    </div>

    <div class="read tc mt5">
        F<sub>raw</sub> = {sci(cur.raw)} · F<sub>honest</sub> =
        {cur.hon.toFixed(4)} · norms = ({n0.toFixed(2)}, {n1.toFixed(2)})
    </div>
    {#if blown}
        <div class="warn fw7 mt5">
            the raw score passed 10⁶ and the run was stopped: the number no
            longer measures anything. switch to project + retract and reset.
        </div>
    {/if}

    <div class="note tc mt10">
        ascent on fidelity for the three-qubit repetition code (32 real knobs)
        against isotropic Pauli noise p, Petz recovery of the clean code frozen,
        probes δ = 10⁻⁴. the damage slider shoves every coefficient by ε and
        re-orthonormalises before descent starts. both modes use the identical
        gradient; the only difference is project + retract. switching modes
        mid-run keeps the curves.
    </div>
</div>

<style>
    .box {
        background: var(--w);
        max-width: 600px;
        color: var(--k1);
    }
    label {
        font-size: 0.85em;
        white-space: nowrap;
    }
    input[type="range"] {
        vertical-align: middle;
        width: 100px;
    }
    select {
        font-size: 0.95em;
    }
    button {
        padding: 4px 10px;
        background: var(--w);
        font-size: 0.85em;
        color: var(--k1);
    }
    button:hover {
        background: var(--g1);
    }
    button:disabled {
        opacity: 0.5;
        cursor: default;
    }
    .modes button.on {
        background: var(--c2);
        color: var(--w);
    }
    svg {
        stroke: none; /* atomic.css strokes every svg with currentcolor */
        max-width: 100%;
        height: auto;
    }
    .cap {
        font-size: 0.78em;
        color: var(--g2);
    }
    .craw {
        color: var(--c1);
    }
    .chon {
        color: var(--c2);
    }
    .read {
        font-family: monospace;
        font-size: 0.8em;
    }
    .warn {
        color: var(--c1);
        font-size: 0.82em;
    }
    .note {
        font-size: 0.78em;
        color: var(--g2);
    }
</style>
