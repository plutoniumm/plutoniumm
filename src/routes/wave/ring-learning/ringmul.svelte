<script>
    const q = 17;
    const n = 4;

    let A = [1, 2, 3, 4];
    let B = [2, 1, 0, 0];

    const mod = (x) => ((x % q) + q) % q;

    const num = (v) => {
        const x = Math.trunc(Number(v));

        return Number.isFinite(x) ? mod(x) : 0;
    };

    let raw = [];
    let reduced = [];
    let pairs = [];
    $: {
        const a = A.map(num);
        const b = B.map(num);
        const c = new Array(2 * n - 1).fill(0);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) c[i + j] += a[i] * b[j];
        }

        raw = c;
        pairs = c
            .slice(0, n)
            .map((v, i) => ({
                lo: v,
                hi: c[i + n] || 0,
                i,
            }))
            .filter((p) => p.lo !== 0 || p.hi !== 0);
        reduced = c.slice(0, n).map((v, i) => mod(v - (c[i + n] || 0)));
    }

    const terms = (list) =>
        list
            .map((v, i) => ({
                v,
                i,
            }))
            .filter((t) => t.v !== 0);
</script>

<div class="ringmul tc mx-a my20 p10 rx10">
    <div class="fw al-ct j-ct g5 my5">
        <span class="lbl d-ib tr">a(x)</span>
        <span class="plus">=</span>
        {#each A as av, i (i)}
            {#if i > 0}<span class="plus">+</span>{/if}
            <span class="cell">
                <input
                    class="tc"
                    type="number"
                    min="0"
                    max={q - 1}
                    step="1"
                    bind:value={A[i]}
                    on:change={() => (A[i] = num(A[i]))}
                />
                {#if i > 0}
                    <span class="pow ml2">
                        x
                        {#if i > 1}
                            <sup>{i}</sup>
                        {/if}
                    </span>
                {/if}
            </span>
        {/each}
    </div>
    <div class="fw al-ct j-ct g5 my5">
        <span class="lbl d-ib tr">b(x)</span>
        <span class="plus">=</span>
        {#each B as bv, i (i)}
            {#if i > 0}<span class="plus">+</span>{/if}
            <span class="cell">
                <input
                    class="tc"
                    type="number"
                    min="0"
                    max={q - 1}
                    step="1"
                    bind:value={B[i]}
                    on:change={() => (B[i] = num(B[i]))}
                />
                {#if i > 0}<span class="pow ml2"
                        >x{#if i > 1}<sup>{i}</sup>{/if}</span
                    >{/if}
            </span>
        {/each}
    </div>

    <div class="fw al-ct j-ct g5 my5">
        <span class="lbl d-ib tr">a·b</span>
        <span class="plus">=</span>
        {#if terms(raw).length === 0}
            <span class="term">0</span>
        {/if}
        {#each terms(raw) as t, k (k)}
            {#if k > 0}<span class="plus">+</span>{/if}
            <span class="term" class:wrap={t.i >= n} class:fw7={t.i >= n}
                >{t.v}{#if t.i > 0}x{#if t.i > 1}<sup>{t.i}</sup
                        >{/if}{/if}</span
            >
        {/each}
    </div>

    <div class="fw al-ct j-ct g5 my5">
        <span class="lbl d-ib tr">x<sup>{n}</sup> ≡ −1</span>
        <span class="plus">≡</span>
        {#if pairs.length === 0}
            <span class="term">0</span>
        {/if}
        {#each pairs as p, k (k)}
            {#if k > 0}<span class="plus">+</span>{/if}
            <span class="term">
                {#if p.hi && p.i > 0}({/if}{p.lo}{#if p.hi}<b class="wrap fw7"
                        >−{p.hi}</b
                    >{/if}{#if p.hi && p.i > 0}){/if}{#if p.i > 0}x{#if p.i > 1}<sup
                            >{p.i}</sup
                        >{/if}{/if}
            </span>
        {/each}
    </div>

    <div class="fw al-ct j-ct g5 my5">
        <span class="lbl d-ib tr">mod {q}</span>
        <span class="plus">≡</span>
        {#if terms(reduced).length === 0}
            <span class="term final fw7">0</span>
        {/if}
        {#each terms(reduced) as t, k (k)}
            {#if k > 0}<span class="plus">+</span>{/if}
            <span class="term final fw7"
                >{t.v}{#if t.i > 0}x{#if t.i > 1}<sup>{t.i}</sup
                        >{/if}{/if}</span
            >
        {/each}
    </div>

    <div class="note mt10">
        every product in <b>R<sub>{q}</sub></b> with n = {n}: long
        multiplication, the tinted overflow terms fold back with a sign flip,
        coefficients wrap mod {q}
    </div>
</div>

<style>
    .ringmul {
        background: #fff;

        max-width: 560px;
        font-family: monospace;
        color: #222;
    }
    .lbl {
        width: 72px;
        margin-right: 12px;
        color: #555;
        font-size: 0.85em;
        white-space: nowrap;
    }
    .plus {
        color: #888;
    }
    .cell {
        white-space: nowrap;
    }
    input {
        width: 38px;
        padding: 3px 2px;
        font-family: monospace;
        color: #222;

        border-radius: 4px;
        -moz-appearance: textfield;
        appearance: textfield;
    }
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .pow {
        color: #555;
    }
    .term {
        white-space: nowrap;
    }
    .wrap {
        color: #c75200;
    }
    .final {
        color: #097;
    }
    .note {
        font-size: 0.78em;
        color: #777;
        font-family: sans-serif;
    }
</style>
