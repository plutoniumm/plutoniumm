<script>
    const S = 2 ** 10;

    let p01 = 0;
    let p10 = 0;
    let seed = 0;

    const num = (v) => {
        const x = Number(v);
        if (!Number.isFinite(x)) return 0;

        return Math.min(0.5, Math.max(0, x));
    };

    let means = [];
    $: {
        seed;
        const a = num(p01);
        const b = num(p10);
        const out = new Array(S);
        let sum = 0;

        for (let i = 0; i < S; i++) {
            let bit = Math.random() < 0.5 ? 1 : 0;

            if (bit === 0 && Math.random() < a) bit = 1;
            else if (bit === 1 && Math.random() < b) bit = 0;

            sum += bit;
            out[i] = sum / (i + 1);
        }

        means = out;
    }

    $: mu = 0.5 * (1 + num(p01) - num(p10));
    $: half = Math.sqrt(mu * (1 - mu));
    $: last = means[S - 1] || 0;

    const X = (i) => 42 + (i / (S - 1)) * 426;
    const Y = (v) => 162 - Math.min(1, Math.max(0, v)) * 142;

    $: trace = means
        .map((m, i) => X(i).toFixed(1) + "," + Y(m).toFixed(1))
        .join(" ");

    $: upper = means
        .map((m, i) =>
            i < 3
                ? ""
                : X(i).toFixed(1) +
                  "," +
                  Y(mu + half / Math.sqrt(i + 1)).toFixed(1),
        )
        .filter((s) => s.length > 0)
        .join(" ");

    $: lower = means
        .map((m, i) =>
            i < 3
                ? ""
                : X(i).toFixed(1) +
                  "," +
                  Y(mu - half / Math.sqrt(i + 1)).toFixed(1),
        )
        .filter((s) => s.length > 0)
        .join(" ");
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
        <button on:click={() => (seed += 1)}>re-toss</button>
    </div>

    <svg width="480" height="186" font-family="monospace" font-size="10">
        <line x1="42" x2="468" y1={Y(0.5)} y2={Y(0.5)} stroke="#ddd" />
        <line x1="42" x2="468" y1={Y(0)} y2={Y(0)} stroke="#999" />
        <line x1="42" x2="468" y1={Y(1)} y2={Y(1)} stroke="#eee" />
        <text x="38" y={Y(1) + 3} text-anchor="end">1.0</text>
        <text x="38" y={Y(0.5) + 3} text-anchor="end">0.5</text>
        <text x="38" y={Y(0) + 3} text-anchor="end">0.0</text>

        <polyline
            points={upper}
            fill="none"
            stroke="#bbb"
            stroke-dasharray="3 3"
        />
        <polyline
            points={lower}
            fill="none"
            stroke="#bbb"
            stroke-dasharray="3 3"
        />
        <line
            x1="42"
            x2="468"
            y1={Y(mu)}
            y2={Y(mu)}
            stroke="#c75200"
            stroke-dasharray="5 4"
        />
        <text x="468" y={Y(mu) - 4} text-anchor="end" fill="#c75200">
            μ′ = {mu.toFixed(3)}
        </text>
        <polyline points={trace} fill="none" stroke="#097" stroke-width="1.5" />
        <text x="255" y="182" text-anchor="middle" fill="#777">
            shot number (1 … {S})
        </text>
    </svg>

    <div class="stat mt5">
        after {S} shots: measured mean
        <b>{last.toFixed(3)}</b>
        · prediction from the SPAM formula
        <b>{mu.toFixed(3)}</b>
    </div>
    <div class="note mt5">
        running mean of one noisy coin; the gray envelope is μ′ ± σ/√n. Set the
        two errors equal and the dashed line stays at 0.5; make them unequal and
        it shifts.
    </div>
</div>

<style>
    .box {
        background: #fff;

        max-width: 560px;
        color: #222;
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

        border-radius: 5px;
        background: #f6f6f6;
        cursor: pointer;
        font-size: 0.85em;
        color: #222;
    }
    button:hover {
        background: #ececec;
    }
    .stat {
        font-size: 0.85em;
        color: #097;
    }
    .note {
        font-size: 0.78em;
        color: #777;
    }
    svg {
        max-width: 100%;
    }
</style>
