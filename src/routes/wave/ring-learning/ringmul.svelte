<script>
    const q = 17;
    const n = 4;

    let A = [1, 2, 3, 4];
    let B = [2, 1, 0, 0];

    const mod = (x) => ((x % q) + q) % q;

    let raw = [];
    let folded = [];
    let reduced = [];
    $: {
        const a = A.map(Number);
        const b = B.map(Number);
        const c = new Array(2 * n - 1).fill(0);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) c[i + j] += a[i] * b[j];
        }
        raw = c;
        folded = c.slice(0, n).map((v, i) => v - (c[i + n] || 0));
        reduced = folded.map(mod);
    }
</script>

<div class="ringmul tc">
    <div class="row">
        <span class="lbl">a(x)</span>
        {#each A as av, i}
            <span class="cell">
                <input type="number" min="0" max={q - 1} bind:value={A[i]} />
                {#if i > 0}<span class="pow">x<sup>{i}</sup></span>{/if}
            </span>
        {/each}
    </div>
    <div class="row">
        <span class="lbl">b(x)</span>
        {#each B as bv, i}
            <span class="cell">
                <input type="number" min="0" max={q - 1} bind:value={B[i]} />
                {#if i > 0}<span class="pow">x<sup>{i}</sup></span>{/if}
            </span>
        {/each}
    </div>

    <div class="row out">
        <span class="lbl">a·b</span>
        {#each raw as cv, i}
            <span class="term" class:wrap={i >= n}>
                {#if i > 0}+&nbsp;{/if}{cv}{#if i > 0}x<sup>{i}</sup>{/if}
            </span>
        {/each}
    </div>

    <div class="row out">
        <span class="lbl">x<sup>4</sup> ≡ −1</span>
        {#each folded as fv, i}
            <span class="term">
                {#if i > 0}+&nbsp;{/if}{raw[i]}{#if raw[i + n]}&nbsp;−&nbsp;<b
                        class="wrap">{raw[i + n]}</b
                    >{/if}{#if i > 0}x<sup>{i}</sup>{/if}
            </span>
        {/each}
    </div>

    <div class="row out">
        <span class="lbl">mod {q}</span>
        {#each reduced as rv, i}
            <span class="term final">
                {#if i > 0}+&nbsp;{/if}{rv}{#if i > 0}x<sup>{i}</sup>{/if}
            </span>
        {/each}
    </div>

    <div class="note">
        every product in <b>R<sub>17</sub></b> with n = 4: school
        multiplication, then tinted overflow terms fold back with a sign flip,
        then coefficients wrap mod 17
    </div>
</div>

<style>
    .ringmul {
        margin: 24px auto;
        padding: 14px 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        max-width: 560px;
        font-family: monospace;
    }
    .row {
        margin: 6px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4px;
    }
    .lbl {
        display: inline-block;
        width: 70px;
        text-align: right;
        margin-right: 10px;
        color: #888;
        font-size: 0.85em;
    }
    input {
        width: 44px;
        padding: 3px 2px;
        text-align: center;
        font-family: monospace;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .pow {
        color: #888;
        margin-left: 1px;
    }
    .out .term {
        padding: 2px 1px;
    }
    .wrap {
        color: #e0731d;
        font-weight: bold;
    }
    .final {
        color: #1a9;
        font-weight: bold;
    }
    .note {
        margin-top: 10px;
        font-size: 0.78em;
        color: #999;
        font-family: sans-serif;
    }
</style>
