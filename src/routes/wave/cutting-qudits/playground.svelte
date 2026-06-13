<script>
    import { decompose, fmtBytes } from "./gm.js";

    let d1 = 8;
    let d2 = 8;
    let k = 4;
    let m = 4;

    const clamp = (v, lo, hi) => {
        const x = Math.trunc(Number(v));
        if (!Number.isFinite(x)) return lo;

        return Math.min(hi, Math.max(lo, x));
    };

    $: D1 = clamp(d1, 2, 9);
    $: D2 = clamp(d2, 2, 9);
    $: K = clamp(k, 1, 8);
    $: M = clamp(m, 1, 8);

    $: left = Math.pow(D1, K) * 8;
    $: right = Math.pow(D2, M) * 8;
    $: memFull = Math.pow(D1, K) * Math.pow(D2, M) * 8;
    $: memCut = left + right;
    $: ratio = memFull / memCut;
    $: gmTerms = decompose(D1, D2, false).terms.length;
    $: schmidt = Math.min(D1, D2);
    $: bound = D1 * Math.pow(D1 * D2, 2);

    const LOGMAX = 17;
    const BX = 86;
    const BW = 340;
    const bw = (bytes) => Math.max(3, (Math.log10(bytes) / LOGMAX) * BW);

    const big = (x) =>
        x >= 10
            ? Math.round(x).toLocaleString("en-US")
            : String(Math.round(x * 10) / 10);

    const TICKS = [
        [3, "KB"],
        [6, "MB"],
        [9, "GB"],
        [12, "TB"],
        [15, "PB"],
    ];
</script>

<div class="pg mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            chip A: <b>{K}</b> qudits
            <input type="range" min="1" max="8" step="1" bind:value={k} />
        </label>
        <label>
            each of dim <b>{D1}</b>
            <input type="range" min="2" max="9" step="1" bind:value={d1} />
        </label>
    </div>
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            chip B: <b>{M}</b> qudits
            <input type="range" min="1" max="8" step="1" bind:value={m} />
        </label>
        <label>
            each of dim <b>{D2}</b>
            <input type="range" min="2" max="9" step="1" bind:value={d2} />
        </label>
    </div>

    <div class="tc">
        <svg width="470" height="126" font-family="monospace" font-size="10">
            {#each TICKS as t, i (i)}
                <line
                    x1={BX + (t[0] / LOGMAX) * BW}
                    x2={BX + (t[0] / LOGMAX) * BW}
                    y1="14"
                    y2="98"
                    style="stroke:var(--g1)"
                />
                <text
                    x={BX + (t[0] / LOGMAX) * BW}
                    y="110"
                    text-anchor="middle"
                    style="fill:var(--g2)">{t[1]}</text
                >
            {/each}

            <text x={BX - 8} y="37" text-anchor="end" style="fill:var(--g3)">uncut</text>
            <rect
                x={BX}
                y="22"
                height="24"
                width={bw(memFull)}
                style="fill:var(--c1)"
            />
            {#if bw(memFull) > 240}
                <text
                    x={BX + bw(memFull) - 6}
                    y="37"
                    text-anchor="end"
                    style="fill:var(--w)">{fmtBytes(memFull)}</text
                >
            {:else}
                <text x={BX + bw(memFull) + 6} y="37" style="fill:var(--g3)"
                    >{fmtBytes(memFull)}</text
                >
            {/if}

            <text x={BX - 8} y="79" text-anchor="end" style="fill:var(--g3)">cut</text>
            <rect x={BX} y="64" height="24" width={bw(memCut)} style="fill:var(--c2)" />
            {#if bw(memCut) > 240}
                <text
                    x={BX + bw(memCut) - 6}
                    y="79"
                    text-anchor="end"
                    style="fill:var(--w)">{fmtBytes(memCut)}</text
                >
            {:else}
                <text x={BX + bw(memCut) + 6} y="79" style="fill:var(--g3)"
                    >{fmtBytes(memCut)}</text
                >
            {/if}
        </svg>
        <div class="cap">
            state-vector memory, logarithmic scale (ticks ≈ decades)
        </div>
    </div>

    <div class="form tc my10">
        <div class="my2">
            uncut: {D1}<sup>{K}</sup> × {D2}<sup>{M}</sup> × 8 B =
            <b>{fmtBytes(memFull)}</b>
        </div>
        <div class="my2">
            cut: ({D1}<sup>{K}</sup> + {D2}<sup>{M}</sup>) × 8 B =
            <b>{fmtBytes(memCut)}</b>
        </div>
        <div class="my2">memory factor <b class="ok">×{big(ratio)}</b></div>
    </div>
</div>

<style>
    .pg {
        background: var(--w);

        max-width: 620px;
        color: var(--k1);
    }
    label {
        white-space: nowrap;
    }
    input[type="range"] {
        vertical-align: middle;
        width: 120px;
    }
    svg {
        max-width: 100%;
    }
    .cap {
        font-size: 0.78em;
        color: var(--g2);
    }
    .form {
        font-family: monospace;
        font-size: 0.85em;
    }
    .ok {
        color: var(--ok);
    }
</style>
