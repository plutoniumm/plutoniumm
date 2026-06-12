<script>
    import { decompose, cabs } from "./gm.js";

    let d1 = 2;
    let d2 = 3;

    const clamp = (v, lo, hi) => {
        const x = Math.trunc(Number(v));
        if (!Number.isFinite(x)) return lo;

        return Math.min(hi, Math.max(lo, x));
    };

    $: D1 = clamp(d1, 2, 5);
    $: D2 = clamp(d2, 2, 5);
    $: res = decompose(D1, D2, true);
    $: rows = res.names1.length;
    $: cols = res.names2.length;
    $: maxMag = res.terms.reduce((s, t) => Math.max(s, cabs(t.c)), 0);
    $: schmidt = Math.min(D1, D2);

    $: cs = rows > 9 || cols > 9 ? 13 : 24;
    $: showLabels = rows <= 9 && cols <= 9;
    $: padL = showLabels ? 44 : 18;
    $: padT = showLabels ? 40 : 14;
    $: W = padL + cols * cs + 14;
    $: H = padT + rows * cs + 8;

    const fill = (c, mx) => {
        const mag = cabs(c);
        if (mag < 1e-12 || mx === 0) return "#fff";
        const a = (0.18 + (0.82 * mag) / mx).toFixed(2);

        if (Math.abs(c[1]) > Math.abs(c[0]))
            return "rgba(199, 82, 0, " + a + ")";

        return "rgba(0, 153, 119, " + a + ")";
    };

    const fc = (c) => {
        const re = Math.round(c[0] * 100) / 100;
        const im = Math.round(c[1] * 100) / 100;
        if (im === 0) return (re < 0 ? "−" : "+") + Math.abs(re);

        return (im < 0 ? "−" : "+") + Math.abs(im) + "i";
    };

    const head = (s) => s.slice(0, 1);
    const tail = (s) => s.slice(1);
</script>

<div class="dx tc mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            control dim d₁ = <b>{D1}</b>
            <input type="range" min="2" max="5" step="1" bind:value={d1} />
        </label>
        <label>
            target dim d₂ = <b>{D2}</b>
            <input type="range" min="2" max="5" step="1" bind:value={d2} />
        </label>
    </div>

    <svg width={W} height={H} font-family="monospace" font-size="10">
        {#if showLabels}
            {#each res.names2 as nm, b (b)}
                <text
                    x={padL + b * cs + cs / 2}
                    y={padT - 7}
                    text-anchor="start"
                    fill="#555"
                    transform="rotate(-55 {padL + b * cs + cs / 2} {padT - 7})"
                    >{nm}</text
                >
            {/each}
            {#each res.names1 as nm, a (a)}
                <text
                    x={padL - 5}
                    y={padT + a * cs + cs / 2 + 3}
                    text-anchor="end"
                    fill="#555">{nm}</text
                >
            {/each}
        {/if}
        {#each res.grid as row, a (a)}
            {#each row as c, b (b)}
                <rect
                    x={padL + b * cs}
                    y={padT + a * cs}
                    width={cs - 1}
                    height={cs - 1}
                    fill={fill(c, maxMag)}
                    stroke="#ddd"
                    stroke-width="0.5"
                />
            {/each}
        {/each}
    </svg>

    <div class="stat mt5">
        <b class="ok">{res.terms.length}</b> non-zero terms out of {rows * cols}
        possible pairs · Schmidt route needs <b>{schmidt}</b> · rebuild error
        <b class="ok">{res.err.toExponential(1)}</b>
    </div>

    {#if res.terms.length <= 14}
        <div class="f fw j-ct g5 mt10">
            {#each res.terms as t, k (k)}
                <span
                    class="chip rx5"
                    class:imag={Math.abs(t.c[1]) > Math.abs(t.c[0])}
                >
                    {fc(t.c)}
                    {head(t.an)}{#if tail(t.an)}<sub>{tail(t.an)}</sub
                        >{/if}⊗{head(t.bn)}{#if tail(t.bn)}<sub
                            >{tail(t.bn)}</sub
                        >{/if}
                </span>
            {/each}
        </div>
    {/if}

    {#if D1 === 2 && D2 === 2}
        <div class="hint mt5">
            at d₁ = d₂ = 2 the basis is the Pauli set (S₀₁ = X, A₀₁ = Y, D₁ =
            Z), and the four lit cells read exactly ½(I⊗I + Z⊗I + I⊗X − Z⊗X)
        </div>
    {/if}

    <div class="note mt10">
        every cell is one possible pair Aᵢ⊗Bᵢ: rows run over the control-side
        basis, columns over the target-side basis. teal = real weight, orange =
        imaginary weight, deeper = larger |cᵢ|. only the lit cells turn into
        circuit runs; the white ones are free.
    </div>
</div>

<style>
    .dx {
        background: #fff;

        max-width: 640px;
        color: #222;
    }
    input[type="range"] {
        vertical-align: middle;
        width: 110px;
    }
    svg {
        max-width: 100%;
    }
    .stat {
        font-size: 0.85em;
    }
    .ok {
        color: #097;
    }
    .chip {
        font-family: monospace;
        font-size: 0.8em;

        padding: 2px 7px;
        color: #097;
        white-space: nowrap;
    }
    .chip.imag {
        color: #c75200;
    }
    .hint {
        font-size: 0.82em;
        color: #c75200;
    }
    .note {
        font-size: 0.78em;
        color: #777;
    }
</style>
