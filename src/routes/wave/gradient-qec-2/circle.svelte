<script>
    import { onDestroy } from "svelte";
    import { _ } from "$lib";

    // maximise f(x, y) = x + 2y on the unit circle x^2 + y^2 = 1.
    // three update rules race from the same start:
    //   raw:  q += eta (1,2)
    //   ret:  q += eta (1,2), then q /= |q|
    //   tan:  q += eta [ (1,2) - ((1,2)·q̂) q̂ ], then q /= |q|
    const FS = Math.sqrt(5); // on-circle maximum 2.2361
    const QS = [1 / FS, 2 / FS];
    const TOL = 1e-3; // stop once f improves by under 0.1% per step
    const CAP = 200;

    const f = (q) => q[0] + 2 * q[1];
    const rad = (q) => Math.hypot(q[0], q[1]);

    const honest = (q) => {
        const r = rad(q) || 1;

        return f([q[0] / r, q[1] / r]);
    };

    // n = 0: run to convergence; n > 0: run exactly n steps (raw never
    // converges, f grows by 5η every step, so it gets the race length)
    function trace(q0, h, md, n = 0) {
        let q = q0;
        const out = [q];
        let prev = f(q);

        for (let s = 0; n ? s < n : s < CAP; s++) {
            let dir = [1, 2];

            if (md === "tan") {
                const r = rad(q) || 1;
                const qh = [q[0] / r, q[1] / r];
                const dot = qh[0] + 2 * qh[1];
                dir = [1 - dot * qh[0], 2 - dot * qh[1]];
            }

            let nq = [q[0] + h * dir[0], q[1] + h * dir[1]];

            if (md !== "raw") {
                const nr = rad(nq) || 1;
                nq = [nq[0] / nr, nq[1] / nr];
            }

            out.push(nq);
            q = nq;

            if (
                !n &&
                Math.abs(f(q) - prev) < TOL * Math.max(Math.abs(prev), 1e-12)
            )
                break;

            prev = f(q);
        }

        return out;
    }

    const RULES = [
        {
            id: "raw",
            name: "raw step",
            col: "#c75200",
        },
        {
            id: "ret",
            name: "raw step, then retract",
            col: "#2456c9",
        },
        {
            id: "tan",
            name: "tangent step, then retract",
            col: "#097",
        },
    ];

    let q0 = [1, 0];
    let eta = 0.2;
    let k = 0;

    $: tret = trace(q0, +eta, "ret");
    $: ttan = trace(q0, +eta, "tan");
    $: last = Math.max(tret.length, ttan.length) - 1;
    $: trails = [trace(q0, +eta, "raw", last), tret, ttan];
    $: if (k > last) k = last;
    $: at = trails.map((t) => t[Math.min(k, t.length - 1)]);

    // gradient decomposition at the start point, drawn at step scale eta
    $: qh = (() => {
        const r = rad(q0) || 1;

        return [q0[0] / r, q0[1] / r];
    })();
    $: dot = qh[0] + 2 * qh[1];
    $: gtan = [1 - dot * qh[0], 2 - dot * qh[1]];
    $: grad_tip = [q0[0] + eta * 1, q0[1] + eta * 2];
    $: tan_tip = [q0[0] + eta * gtan[0], q0[1] + eta * gtan[1]];

    let timer = null;

    function stop() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    onDestroy(stop);

    function play() {
        if (timer) {
            stop();

            return;
        }

        if (k >= last) k = 0;
        timer = setInterval(() => {
            if (k >= last) return stop();
            k += 1;
        }, 150);
    }

    function reset() {
        stop();
        q0 = [1, 0];
        k = 0;
    }

    const lo = -1.7;
    const hi = 1.7;
    const W = 400;
    const M = 28;
    const sx = (x) => M + ((x - lo) / (hi - lo)) * W;
    const sy = (y) => M + W - ((y - lo) / (hi - lo)) * W;

    let dragging = false;

    function setQ(e) {
        const r = e.currentTarget.getBoundingClientRect();
        const s = (W + 2 * M) / r.width;
        const x = lo + (((e.clientX - r.left) * s - M) / W) * (hi - lo);
        const y = lo + ((M + W - (e.clientY - r.top) * s) / W) * (hi - lo);
        q0 = [
            Math.max(lo + 0.05, Math.min(hi - 0.05, x)),
            Math.max(lo + 0.05, Math.min(hi - 0.05, y)),
        ];
    }

    function down(e) {
        stop();
        dragging = true;
        setQ(e);
        e.preventDefault();
    }

    function move(e) {
        if (dragging) setQ(e);
    }

    function up() {
        dragging = false;
    }

    // level sets f = c, labelled where each line exits the frame
    const CONT = [-2, -1, 0, 1, 2].map((c) => {
        let x = 1.64;
        let y = (c - x) / 2;

        if (y < -1.55) {
            y = -1.55;
            x = c - 2 * y;
        }

        return {
            c,
            x,
            y,
        };
    });
</script>

<div class="box tc mx-a my20 p10 rx10">
    <div class="f al-ct j-ct fw g10 mb10">
        <label>
            η = <b>{(+eta).toFixed(2)}</b>
            <input
                type="range"
                min="0.05"
                max="0.4"
                step="0.05"
                bind:value={eta}
            />
        </label>
        <button type="button" class="ptr rx5" on:click={play}
            >{timer ? "pause" : "race"}</button
        >
        <button type="button" class="ptr rx5" on:click={reset}>reset</button>
        <label>
            step <b>{k}</b> / {last}
            <input
                type="range"
                min="0"
                max={last}
                step="1"
                bind:value={k}
                on:input={stop}
            />
        </label>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <svg
        viewBox="0 0 {W + 2 * M} {W + 2 * M}"
        width={W + 2 * M}
        font-family="monospace"
        font-size="10"
        role="img"
        on:pointerdown={down}
        on:pointermove={move}
        on:pointerup={up}
        on:pointerleave={up}
    >
        <defs>
            <marker
                id="cr-g"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="3"
                orient="auto"
            >
                <path d="M0,0 L6,3 L0,6 z" fill="#c75200" />
            </marker>
            <marker
                id="cr-t"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="3"
                orient="auto"
            >
                <path d="M0,0 L6,3 L0,6 z" fill="#097" />
            </marker>
        </defs>

        <!-- contours of f = x + 2y -->
        {#each CONT as c, ix (ix)}
            <line
                x1={sx(lo - 2)}
                y1={sy((c.c - (lo - 2)) / 2)}
                x2={sx(hi + 2)}
                y2={sy((c.c - (hi + 2)) / 2)}
                stroke="#8883"
            />
            <text x={sx(c.x)} y={sy(c.y) - 4} fill="#999" text-anchor="end">
                f = {c.c}
            </text>
        {/each}
        <!-- the f = sqrt(5) contour, tangent to the circle at q* -->
        <line
            x1={sx(lo - 2)}
            y1={sy((FS - (lo - 2)) / 2)}
            x2={sx(hi + 2)}
            y2={sy((FS - (hi + 2)) / 2)}
            stroke="#09794d"
            stroke-opacity="0.35"
            stroke-width="1.6"
        />
        <text x={sx(FS - 2 * 1.5) + 4} y={sy(1.5)} fill="#097">f = 2.236</text>

        <!-- the manifold -->
        <circle
            cx={sx(0)}
            cy={sy(0)}
            r={(1 / (hi - lo)) * W}
            fill="none"
            stroke="#222"
            stroke-width="1.6"
        />

        <!-- optimum -->
        <line
            x1={sx(QS[0]) - 5}
            x2={sx(QS[0]) + 5}
            y1={sy(QS[1])}
            y2={sy(QS[1])}
            stroke="#097"
            stroke-width="2"
        />
        <line
            x1={sx(QS[0])}
            x2={sx(QS[0])}
            y1={sy(QS[1]) - 5}
            y2={sy(QS[1]) + 5}
            stroke="#097"
            stroke-width="2"
        />
        <text x={sx(QS[0]) - 9} y={sy(QS[1]) - 8} text-anchor="end" fill="#097">
            q*
        </text>

        <!-- trails up to step k -->
        {#each RULES as r, i (i)}
            <polyline
                points={trails[i]
                    .slice(0, k + 1)
                    .map((p) => sx(p[0]) + "," + sy(p[1]))
                    .join(" ")}
                fill="none"
                stroke={r.col}
                stroke-width="1.6"
                stroke-opacity="0.55"
            />
            <circle
                cx={sx(at[i][0])}
                cy={sy(at[i][1])}
                r="5"
                fill={r.col}
                stroke="#fff"
                stroke-width="1.5"
            />
        {/each}

        <!-- gradient decomposition at the start -->
        <line
            x1={sx(q0[0])}
            y1={sy(q0[1])}
            x2={sx(grad_tip[0])}
            y2={sy(grad_tip[1])}
            stroke="#c75200"
            stroke-width="2.4"
            marker-end="url(#cr-g)"
        />
        <line
            x1={sx(q0[0])}
            y1={sy(q0[1])}
            x2={sx(tan_tip[0])}
            y2={sy(tan_tip[1])}
            stroke="#097"
            stroke-width="2.4"
            marker-end="url(#cr-t)"
        />
        <line
            x1={sx(tan_tip[0])}
            y1={sy(tan_tip[1])}
            x2={sx(grad_tip[0])}
            y2={sy(grad_tip[1])}
            stroke="#888"
            stroke-width="1.8"
            stroke-dasharray="3 3"
        />

        <!-- start -->
        <rect
            x={sx(q0[0]) - 4}
            y={sy(q0[1]) - 4}
            width="8"
            height="8"
            fill="#fff"
            stroke="#222"
            stroke-width="1.8"
        />
    </svg>

    <div class="legend mx-a mt5">
        {#each RULES as r, i (i)}
            <div class="row f al-ct">
                <span class="chip" style="background:{r.col}"></span>
                <span class="name tl">{r.name}</span>
                <span class="val tr" class:bad={f(at[i]) > FS + 5e-4}>
                    f = {f(at[i]).toFixed(3)}{f(at[i]) > FS + 5e-4
                        ? " (fiction)"
                        : ""}
                </span>
                <span class="hval tr">honest {honest(at[i]).toFixed(3)}</span>
            </div>
        {/each}
    </div>

    <div class="note mt10">
        maximising {_`f(x, y) = x + 2y`} on the unit circle. drag anywhere to move
        the start. at the start, <span class="cor">orange</span> is the raw step
        {_`η\nabla f`}, <span class="cgr">green</span> its tangent part, dashed
        grey the radial part the circle cannot use. "honest" is f at the nearest
        valid point, {_`q/\|q\|`}. anything above f = 2.236 beats every valid
        point: fiction.
    </div>
</div>

<style>
    .box {
        background: #fff;
        max-width: 520px;
        color: #222;
    }
    label {
        font-size: 0.85em;
        white-space: nowrap;
    }
    input[type="range"] {
        vertical-align: middle;
        width: 110px;
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
    svg {
        /* atomic.css strokes every svg with currentcolor; strokes here are
           explicit, so kill the inherited one (it outlines the labels) */
        stroke: none;
        max-width: 100%;
        height: auto;
        cursor: crosshair;
        background: #fff;
        touch-action: none;
    }
    .legend {
        max-width: 440px;
        font-family: monospace;
        font-size: 0.8em;
    }
    .row {
        gap: 8px;
        padding: 1px 0;
    }
    .chip {
        width: 10px;
        height: 10px;
        border-radius: 3px;
        flex: none;
    }
    .name {
        flex: 1;
        white-space: nowrap;
    }
    .val {
        min-width: 12ch;
    }
    .val.bad {
        color: #c75200;
        font-weight: bold;
    }
    .hval {
        min-width: 13ch;
        color: #555;
    }
    .note {
        font-size: 0.78em;
        color: #777;
    }
    .cor {
        color: #c75200;
    }
    .cgr {
        color: #097;
    }
</style>
