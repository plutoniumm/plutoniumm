<script>
    let A = 56;
    let B = 0.002;
    let target = 0.01;

    const num = (v, lo, hi) => {
        const x = Number(v);
        if (!Number.isFinite(x)) return lo;

        return Math.min(hi, Math.max(lo, x));
    };

    $: a = num(A, 1, 100);
    $: b = num(B, 0, 0.02);
    $: t = num(target, 0.001, 0.05);

    $: reachable = t > b;
    $: Nstar = reachable ? a / (t - b) : 0;
    $: Nshow = reachable ? Math.ceil(Nstar) : 0;

    const lg = (x) => Math.log(x) / Math.LN10;
    const PX = (x) => 50 + ((x - 1) * 420) / 4;
    const PY = (y) => 15 + ((1 - y) * 180) / 4;
    const clampY = (y) => Math.min(1.2, Math.max(-3.2, y));

    let curve = "";
    $: {
        const out = [];

        for (let i = 0; i <= 84; i++) {
            const x = 1 + (4 * i) / 84;
            const N = Math.pow(10, x);
            const y = clampY(lg(a / N + b));
            out.push(PX(x).toFixed(1) + "," + PY(y).toFixed(1));
        }

        curve = out.join(" ");
    }

    const xticks = [
        [1, "10"],
        [2, "100"],
        [3, "1k"],
        [4, "10k"],
        [5, "100k"],
    ];
    const yticks = [
        [0, "1"],
        [-1, "0.1"],
        [-2, "0.01"],
        [-3, "0.001"],
    ];
</script>

<div class="box tc mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            A (statistical) = <b>{a}</b>
            <input type="range" min="1" max="100" step="1" bind:value={A} />
        </label>
        <label>
            B (bias floor) = <b>{b.toFixed(3)}</b>
            <input
                type="range"
                min="0"
                max="0.02"
                step="0.001"
                bind:value={B}
            />
        </label>
        <label>
            target σ² = <b>{t.toFixed(3)}</b>
            <input
                type="range"
                min="0.001"
                max="0.05"
                step="0.001"
                bind:value={target}
            />
        </label>
    </div>

    <svg width="480" height="225" font-family="monospace" font-size="10">
        {#each yticks as yt, k (k)}
            <line
                x1="50"
                x2="470"
                y1={PY(yt[0])}
                y2={PY(yt[0])}
                stroke="#eee"
            />
            <text x="46" y={PY(yt[0]) + 3} text-anchor="end">{yt[1]}</text>
        {/each}
        {#each xticks as xt, k (k)}
            <line
                x1={PX(xt[0])}
                x2={PX(xt[0])}
                y1="15"
                y2="195"
                stroke="#f3f3f3"
            />
            <text x={PX(xt[0])} y="208" text-anchor="middle">{xt[1]}</text>
        {/each}

        {#if b > 0}
            <line
                x1="50"
                x2="470"
                y1={PY(clampY(lg(b)))}
                y2={PY(clampY(lg(b)))}
                stroke="#555"
                stroke-dasharray="2 3"
            />
            <text
                x="468"
                y={PY(clampY(lg(b))) - 4}
                text-anchor="end"
                fill="#555">floor B</text
            >
        {/if}
        <line
            x1="50"
            x2="470"
            y1={PY(clampY(lg(t)))}
            y2={PY(clampY(lg(t)))}
            stroke="#d22"
            stroke-dasharray="6 4"
        />
        <text x="54" y={PY(clampY(lg(t))) - 4} fill="#d22">target σ²</text>

        <polyline points={curve} fill="none" stroke="#097" stroke-width="1.8" />

        {#if reachable && Nstar >= 10 && Nstar <= 100000}
            <line
                x1={PX(lg(Nstar))}
                x2={PX(lg(Nstar))}
                y1="15"
                y2="195"
                stroke="#c75200"
                stroke-dasharray="4 3"
            />
            <circle
                cx={PX(lg(Nstar))}
                cy={PY(clampY(lg(t)))}
                r="4.5"
                fill="#c75200"
            />
        {/if}

        <text x="260" y="222" text-anchor="middle" fill="#777"
            >shots N (log axis)</text
        >
        <text
            x="14"
            y="105"
            transform="rotate(-90 14 105)"
            text-anchor="middle"
            fill="#777">Var (log axis)</text
        >
    </svg>

    {#if reachable}
        <div class="stat mt5">
            N = A / (σ² − B) = {a} / {(t - b).toFixed(3)} =
            <b>{Nshow.toLocaleString("en-US")} shots</b>
            {#if Nstar > 100000}(beyond the right edge of the chart){/if}
        </div>
    {:else}
        <div class="stat bad mt5">
            the target σ² = {t.toFixed(3)} sits at or below the floor B = {b.toFixed(
                3,
            )}: no number of shots reaches it
        </div>
    {/if}
    <div class="note mt5">
        Var(Ē<sub>N</sub>) = A/N + B on log-log axes. The curve falls as 1/N
        until the bias floor takes over; the marked point is where it crosses
        the target.
    </div>
</div>

<style>
    .box {
        background: #fff;

        max-width: 560px;
        color: #222;
    }
    label {
        font-size: 0.88em;
        white-space: nowrap;
    }
    input[type="range"] {
        vertical-align: middle;
        width: 100px;
    }
    .stat {
        font-size: 0.85em;
        color: #097;
    }
    .stat.bad {
        color: #d22;
    }
    .note {
        font-size: 0.78em;
        color: #777;
    }
    svg {
        max-width: 100%;
    }
</style>
