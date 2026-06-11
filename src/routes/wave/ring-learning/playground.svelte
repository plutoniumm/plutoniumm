<script>
    const n = 8;
    const q = 97;
    const half = 48; // floor(q/2), where an encoded 1 sits
    const limit = q / 4; // rounding boundary, 24.25

    let eta = 1;
    let bits = [1, 0, 1, 1, 0, 0, 1, 0];
    let kseed = 0;
    let eseed = 0;

    const mod = (x) => ((x % q) + q) % q;
    const cent = (x) => (mod(x) > q / 2 ? mod(x) - q : mod(x));
    const rnd = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
    const small = (w) => Array.from({ length: n }, () => rnd(-w, w));
    const unif = () => Array.from({ length: n }, () => rnd(0, q - 1));

    function mul(f, g) {
        const c = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                c[(i + j) % n] += (i + j < n ? 1 : -1) * f[i] * g[j];
            }
        }
        return c.map(mod);
    }
    const add = (f, g) => f.map((v, i) => mod(v + g[i]));
    const sub = (f, g) => f.map((v, i) => mod(v - g[i]));

    // keygen: secret stays nonzero even at eta 0, only the errors vanish
    let a = [], s = [], e = [], b = [];
    $: {
        kseed;
        eta;
        a = unif();
        s = small(Math.max(1, +eta));
        e = small(+eta);
        b = add(mul(a, s), e);
    }

    // encrypt
    let r = [], e1 = [], e2 = [];
    $: {
        eseed;
        b;
        r = small(Math.max(1, +eta));
        e1 = small(+eta);
        e2 = small(+eta);
    }
    $: u = add(mul(a, r), e1);
    $: v = add(add(mul(b, r), e2), bits.map((m) => m * half));

    // decrypt
    $: d = sub(v, mul(u, s)).map(cent);
    $: got = d.map((x) => (Math.abs(x) > limit ? 1 : 0));
    $: flips = got.filter((x, i) => x !== bits[i]).length;
    $: wmax = Math.max(...d.map((x, i) => Math.abs(cent(x - bits[i] * half))));

    // chart geometry
    const Y = (val) => 100 - val * (88 / half);
    const X = (i) => 48 + i * 46;
</script>

<div class="pg">
    <div class="controls">
        <label>
            error size η = <b>{eta}</b>
            <input type="range" min="0" max="6" bind:value={eta} />
        </label>
        <button on:click={() => (kseed += 1)}>new keys</button>
        <button on:click={() => (eseed += 1)}>re-encrypt</button>
    </div>

    <div class="msg">
        <span class="cap">message (click bits to flip):</span>
        {#each bits as bv, i}
            <button
                class="bit"
                class:on={bv === 1}
                on:click={() => (bits[i] = 1 - bits[i])}>{bv}</button
            >
        {/each}
    </div>

    <div class="polys">
        <div><span class="tag pub">public</span> a = [{a.join(", ")}]</div>
        <div><span class="tag pub">public</span> b = [{b.join(", ")}]</div>
        <div><span class="tag sec">secret</span> s = [{s.join(", ")}]</div>
        <div><span class="tag ct">sent</span> u = [{u.join(", ")}]</div>
        <div><span class="tag ct">sent</span> v = [{v.join(", ")}]</div>
    </div>

    <div class="tc">
        <svg width="430" height="216" font-family="monospace" font-size="10">
            <rect
                x="44"
                y={Y(limit)}
                width={n * 46 - 16}
                height={Y(-limit) - Y(limit)}
                fill="rgba(34, 170, 255, 0.10)"
            />
            <line
                x1="44"
                x2={44 + n * 46 - 16}
                y1={Y(0)}
                y2={Y(0)}
                stroke="#999"
            />
            <line
                x1="44"
                x2={44 + n * 46 - 16}
                y1={Y(limit)}
                y2={Y(limit)}
                stroke="#e67"
                stroke-dasharray="4 3"
            />
            <line
                x1="44"
                x2={44 + n * 46 - 16}
                y1={Y(-limit)}
                y2={Y(-limit)}
                stroke="#e67"
                stroke-dasharray="4 3"
            />

            <text x="40" y={Y(half) + 3} text-anchor="end">+48</text>
            <text x="40" y={Y(limit) + 3} text-anchor="end" fill="#e67"
                >+q/4</text
            >
            <text x="40" y={Y(0) + 3} text-anchor="end">0</text>
            <text x="40" y={Y(-limit) + 3} text-anchor="end" fill="#e67"
                >−q/4</text
            >
            <text x="40" y={Y(-half) + 3} text-anchor="end">−48</text>

            {#each d as dv, i}
                <rect
                    x={X(i)}
                    width="26"
                    y={Math.min(Y(0), Y(dv))}
                    height={Math.abs(Y(dv) - Y(0)) || 1}
                    fill={got[i] === bits[i] ? "#2af" : "#e44"}
                />
                <text
                    x={X(i) + 13}
                    y="206"
                    text-anchor="middle"
                    fill={got[i] === bits[i] ? "#555" : "#e44"}
                    font-weight={got[i] === bits[i] ? "normal" : "bold"}
                    >{got[i]}</text
                >
            {/each}
        </svg>
        <div class="cap">
            coefficients of v − u·s (centered mod 97), decoded bits below
        </div>
    </div>

    <div class="verdict" class:bad={flips > 0}>
        {#if flips === 0}
            ✓ all {n} bits decoded correctly · largest noise |w| = {wmax} of
            the {limit} allowed
        {:else}
            ✗ {flips} of {n} bits flipped · largest noise |w| = {wmax} blew
            past the limit of {limit}
        {/if}
    </div>

    {#if +eta === 0}
        <div class="hint">
            no noise at all: decryption is perfect, but b = a·s exactly, so
            Eve computes b·a<sup>−1</sup> and has the secret key
        </div>
    {/if}

    <div class="note">
        Eve only ever sees a, b, u, v. Each is indistinguishable from uniform
        random numbers mod 97; the secret s and all the error polynomials
        never leave home.
    </div>
</div>

<style>
    .pg {
        margin: 24px auto;
        padding: 14px 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        max-width: 620px;
    }
    .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .controls label {
        font-size: 0.9em;
    }
    .controls input[type="range"] {
        vertical-align: middle;
        width: 130px;
    }
    button {
        padding: 4px 10px;
        border: 1px solid #bbb;
        border-radius: 5px;
        background: #fafafa;
        cursor: pointer;
        font-size: 0.85em;
    }
    button:hover {
        background: #f0f0f0;
    }
    .msg {
        text-align: center;
        margin: 8px 0;
    }
    .bit {
        width: 30px;
        height: 30px;
        margin: 0 2px;
        font-family: monospace;
        font-size: 1em;
        padding: 0;
    }
    .bit.on {
        background: #2af;
        border-color: #2af;
        color: #fff;
    }
    .cap {
        font-size: 0.78em;
        color: #999;
    }
    .polys {
        font-family: monospace;
        font-size: 0.78em;
        margin: 12px auto;
        max-width: 480px;
        overflow-x: auto;
        white-space: nowrap;
    }
    .polys div {
        margin: 2px 0;
    }
    .tag {
        display: inline-block;
        width: 52px;
        text-align: center;
        border-radius: 4px;
        font-size: 0.9em;
        margin-right: 6px;
        font-family: sans-serif;
    }
    .pub {
        background: #e3f4ff;
        color: #17a;
    }
    .sec {
        background: #ffe9e9;
        color: #c33;
    }
    .ct {
        background: #eee;
        color: #555;
    }
    .verdict {
        text-align: center;
        font-size: 0.9em;
        margin-top: 8px;
        color: #1a9;
    }
    .verdict.bad {
        color: #e44;
    }
    .hint {
        text-align: center;
        font-size: 0.82em;
        color: #e0731d;
        margin-top: 6px;
    }
    .note {
        margin-top: 12px;
        font-size: 0.78em;
        color: #999;
        text-align: center;
    }
    svg {
        max-width: 100%;
    }
</style>
