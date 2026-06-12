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
    let //
        a = [],
        s = [],
        e = [],
        b = [];
    $: {
        kseed;
        eta;
        a = unif();
        s = small(Math.max(1, +eta));
        e = small(+eta);
        b = add(mul(a, s), e);
    }

    // encrypt
    let //
        r = [],
        e1 = [],
        e2 = [];
    $: {
        eseed;
        b;
        r = small(Math.max(1, +eta));
        e1 = small(+eta);
        e2 = small(+eta);
    }
    $: u = add(mul(a, r), e1);
    $: v = add(
        add(mul(b, r), e2),
        bits.map((m) => m * half),
    );

    // decrypt
    $: d = sub(v, mul(u, s)).map(cent);
    $: got = d.map((x) => (Math.abs(x) > limit ? 1 : 0));
    $: flips = got.filter((x, i) => x !== bits[i]).length;
    $: wmax = Math.max(...d.map((x, i) => Math.abs(cent(x - bits[i] * half))));

    // chart geometry
    const Y = (val) => 100 - val * (88 / half);
    const X = (i) => 48 + i * 46;
</script>

<div class="pg mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            error size η = <b>{eta}</b>
            <input type="range" min="0" max="6" bind:value={eta} />
        </label>
        <button type="button" class="ptr rx5" on:click={() => (kseed += 1)}
            >new keys</button
        >
        <button type="button" class="ptr rx5" on:click={() => (eseed += 1)}
            >re-encrypt</button
        >
    </div>

    <div class="tc my5">
        <span class="cap">message (click bits to flip):</span>
        {#each bits as bv, i (i)}
            <button
                type="button"
                class="bit ptr rx5 mx2"
                class:on={bv === 1}
                on:click={() => (bits[i] = 1 - bits[i])}>{bv}</button
            >
        {/each}
    </div>

    <div class="polys">
        {#each [["pub", "public", "a", a], ["pub", "public", "b", b], ["sec", "secret", "s", s], ["ct", "sent", "u", u], ["ct", "sent", "v", v]] as [cls, tag, name, vec], k (k)}
            <div class="prow f al-ct my2">
                <span class="tag {cls} d-ib tc">{tag}</span>
                <span class="pname tr">{name} =</span>
                {#each vec as pv, k (k)}
                    <span class="pcell tr">{pv}</span>
                {/each}
            </div>
        {/each}
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

            {#each d as dv, i (i)}
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

    <div class="verdict tc mt10" class:bad={flips > 0}>
        {#if flips === 0}
            ✓ all {n} bits decoded correctly · largest noise |w| = {wmax} of the
            {limit} allowed
        {:else}
            ✗ {flips} of {n} bits flipped · largest noise |w| = {wmax} blew past
            the limit of {limit}
        {/if}
    </div>

    {#if +eta === 0}
        <div class="hint tc mt5">
            no noise at all: decryption is perfect, but b = a·s exactly, so Eve
            computes b·a<sup>−1</sup> and has the secret key
        </div>
    {/if}

    <div class="note tc mt10">
        Eve only ever sees a, b, u, v. Each is indistinguishable from uniform
        random numbers mod 97; the secret s and all the error polynomials never
        leave home.
    </div>
</div>

<style>
    .pg {
        background: #fff;

        max-width: 620px;
        color: #222;
    }
    input[type="range"] {
        vertical-align: middle;
        width: 130px;
    }
    button {
        padding: 4px 10px;

        background: #f6f6f6;
        font-size: 0.85em;
        color: #222;
    }
    button:hover {
        background: #ececec;
    }
    .bit {
        width: 30px;
        height: 30px;
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
        color: #777;
    }
    .polys {
        font-family: monospace;
        font-size: 0.78em;
        margin: 12px auto;
        width: fit-content;
        max-width: 100%;
        overflow-x: auto;
    }
    .prow {
        white-space: nowrap;
    }
    .pname {
        width: 32px;
        margin-right: 6px;
        color: #555;
    }
    .pcell {
        width: 3ch;
        flex: none;
    }
    .tag {
        width: 52px;
        border-radius: 4px;

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
        color: #097;
    }
    .verdict.bad {
        color: #d22;
    }
    .hint {
        font-size: 0.82em;
        color: #c75200;
    }
    .note {
        font-size: 0.78em;
        color: #777;
    }
    svg {
        max-width: 100%;
    }
</style>
