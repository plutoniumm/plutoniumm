<script>
    const NW = 256;
    const W = [4, 8, 16, 32, 64, 128];
    const S = NW * 128;

    let p01 = 0.1;
    let p10 = 0.3;
    let seed = 0;

    const num = (v) => {
        const x = Number(v);
        if (!Number.isFinite(x)) return 0;

        return Math.min(0.5, Math.max(0, x));
    };

    let pts = [];
    let cMeas = 0;
    $: {
        seed;
        const a = num(p01);
        const b = num(p10);
        const bits = new Array(S);

        for (let i = 0; i < S; i++) {
            let bit = Math.random() < 0.5 ? 1 : 0;

            if (bit === 0 && Math.random() < a) {
                bit = 1;
            } else if (bit === 1 && Math.random() < b) {
                bit = 0;
            }

            bits[i] = bit;
        }

        const out = [];
        let acc = 0;

        for (const w of W) {
            const means = [];

            for (let i = 0; i < NW; i++) {
                let s = 0;

                for (let j = 0; j < w; j++) {
                    s += bits[i * w + j];
                }

                means.push(s / w);
            }

            const mu = means.reduce((x, y) => x + y, 0) / NW;
            let sg = 0;

            for (const m of means) {
                sg += (m - mu) * (m - mu);
            }

            sg = Math.sqrt(sg / (NW - 1));

            if (sg > 0 && mu > 0) {
                const x = Math.log(w);
                const y = Math.log(sg / mu);

                out.push({
                    x,
                    y,
                    w,
                });
                acc += y + 0.5 * x;
            }
        }

        pts = out;
        cMeas = out.length ? acc / out.length : 0;
    }

    $: cPred =
        0.5 * Math.log((1 + num(p10) - num(p01)) / (1 + num(p01) - num(p10)));

    const PX = (x) => 50 + ((x - 1.2) * 420) / 3.8;
    const PY = (y) => 15 + ((0.1 - y) * 195) / 3.2;
    const x0 = Math.log(4);
    const x1 = Math.log(128);
</script>

<div class="box tc mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            p<sub>0→1</sub> =
            <b>{num(p01).toFixed(2)}</b>

            <input
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                bind:value={p01}
            />
        </label>
        <label>
            p<sub>1→0</sub> =
            <b>{num(p10).toFixed(2)}</b>

            <input
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                bind:value={p10}
            />
        </label>

        <button type="button" class="ptr rx5" on:click={() => (seed += 1)}>
            re-toss
        </button>
    </div>

    <svg width="480" height="240" font-family="monospace" font-size="10">
        {#each [-1, -2, -3] as gy, k (k)}
            <line x1="50" x2="470" y1={PY(gy)} y2={PY(gy)} style="stroke:var(--g1)" />
            <text x="46" y={PY(gy) + 3} text-anchor="end">
                {gy}
            </text>
        {/each}
        {#each W as w, k (k)}
            <text x={PX(Math.log(w))} y="228" text-anchor="middle">
                {w}
            </text>
        {/each}

        <line
            x1={PX(x0)}
            y1={PY(cPred - 0.5 * x0)}
            x2={PX(x1)}
            y2={PY(cPred - 0.5 * x1)}
            style="stroke:var(--c1)"
            stroke-dasharray="6 4"
            stroke-width="1.5"
        />
        {#each pts as p, k (k)}
            <circle cx={PX(p.x)} cy={PY(p.y)} r="4" style="fill:var(--c2)" />
        {/each}

        <text
            x="14"
            y="120"
            transform="rotate(-90 14 120)"
            text-anchor="middle"
            style="fill:var(--g2)"
        >
            ln RSD
        </text>
        <text x="260" y="239" text-anchor="middle" style="fill:var(--g2)">
            window size w (log axis)
        </text>
    </svg>

    <div class="stat mt5">
        intercept from the fit: <b>c = {cMeas.toFixed(3)}</b> · predicted from
        the error rates: <b>c = {cPred.toFixed(3)}</b>
    </div>
    <div class="note mt5">
        {S} simulated shots, {NW} windows of each size. Dots are the measured ln
        RSD; the dashed line has slope −1/2 and the predicted intercept.
    </div>
</div>

<style>
    .box {
        background: var(--w);
        max-width: 560px;
        color: var(--k1);
    }
    label {
        white-space: nowrap;
    }
    input[type="range"] {
        vertical-align: middle;
        width: 110px;
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
    .stat {
        font-size: 0.85em;
        color: var(--c2);
    }
    .note {
        font-size: 0.78em;
        color: var(--g2);
    }
    svg {
        max-width: 100%;
    }
</style>
