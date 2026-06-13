<script>
    export let wires = []; // wire labels, "" for an unlabelled wire
    export let gates = []; // {t, kind:'box'|'cx', w|c+x, label, col}
    export let seam = -1; // dashed cut drawn between this wire and the next
    export let chips = []; // [{from, to, label, col}]
    export let note = "";
    export let pad = 0; // extra empty time slots on the right

    const GAP = 38; // wire spacing
    const STEP = 48; // time slot width
    const MX = 12;
    const MY = 22;

    $: labelW = wires.some((w) => w) ? 30 : 0;
    $: T = gates.reduce((m, g) => Math.max(m, g.t), 0) + 1 + pad;
    $: W = MX + labelW + T * STEP + MX;
    $: H = MY + (wires.length - 1) * GAP + MY;

    $: wy = (i) => MY + i * GAP;
    $: gx = (t) => MX + labelW + (t + 0.5) * STEP;
</script>

<figure class="mx-a my20 tc">
    <svg
        viewBox="0 0 {W} {H}"
        width={W}
        font-family="monospace"
        font-size="12"
        role="img"
    >
        {#each chips as ch, j (j)}
            <rect
                x={MX + labelW}
                y={wy(ch.from) - GAP / 2 + 5}
                width={T * STEP}
                height={(ch.to - ch.from + 1) * GAP - 10}
                style="fill:{ch.col}"
                fill-opacity="0.07"
                rx="6"
            />
            <text
                x={MX + labelW + 5}
                y={wy(ch.from) - GAP / 2 + 17}
                style="fill:{ch.col}"
                font-size="10"
            >
                {ch.label}
            </text>
        {/each}

        {#each wires as wl, i (i)}
            <line
                x1={MX + labelW}
                x2={W - MX}
                y1={wy(i)}
                y2={wy(i)}
                style="stroke:var(--k1)"
                stroke-width="1.4"
            />
            {#if wl}
                <text
                    x={MX + labelW - 6}
                    y={wy(i) + 4}
                    text-anchor="end"
                    style="fill:var(--g3)"
                    font-size="11"
                >
                    {wl}
                </text>
            {/if}
        {/each}

        {#if seam >= 0 && seam < wires.length - 1}
            <line
                x1={MX}
                x2={W - MX}
                y1={(wy(seam) + wy(seam + 1)) / 2}
                y2={(wy(seam) + wy(seam + 1)) / 2}
                style="stroke:var(--c1)"
                stroke-width="1.4"
                stroke-dasharray="6 5"
            />
            <text
                x={W - MX}
                y={(wy(seam) + wy(seam + 1)) / 2 - 5}
                text-anchor="end"
                style="fill:var(--c1)"
                font-size="10"
            >
                cut
            </text>
        {/if}

        {#each gates as g, j (j)}
            {#if g.kind === "cx"}
                <line
                    x1={gx(g.t)}
                    x2={gx(g.t)}
                    y1={wy(g.c)}
                    y2={wy(g.x)}
                    style="stroke:{g.col || 'var(--k1)'}"
                    stroke-width="1.8"
                />
                <circle
                    cx={gx(g.t)}
                    cy={wy(g.c)}
                    r="4.5"
                    style="fill:{g.col || 'var(--k1)'}"
                />
                <circle
                    cx={gx(g.t)}
                    cy={wy(g.x)}
                    r="9"
                    style="fill:var(--w);stroke:{g.col || 'var(--k1)'}"
                    stroke-width="1.8"
                />
                <line
                    x1={gx(g.t) - 6}
                    x2={gx(g.t) + 6}
                    y1={wy(g.x)}
                    y2={wy(g.x)}
                    style="stroke:{g.col || 'var(--k1)'}"
                    stroke-width="1.8"
                />
                <line
                    x1={gx(g.t)}
                    x2={gx(g.t)}
                    y1={wy(g.x) - 6}
                    y2={wy(g.x) + 6}
                    style="stroke:{g.col || 'var(--k1)'}"
                    stroke-width="1.8"
                />
            {:else}
                <rect
                    x={gx(g.t) - 14}
                    y={wy(g.w) - 14}
                    width="28"
                    height="28"
                    style="fill:var(--w);stroke:{g.col || 'var(--k1)'}"
                    stroke-width="1.6"
                    rx="4"
                />
                <text
                    x={gx(g.t)}
                    y={wy(g.w) + 4}
                    text-anchor="middle"
                    style="fill:{g.col || 'var(--k1)'}"
                >
                    {g.label}
                </text>
            {/if}
        {/each}
    </svg>
    {#if note}
        <figcaption class="note">{note}</figcaption>
    {/if}
</figure>

<style>
    svg {
        /* atomic.css strokes every svg with currentcolor; strokes here are
           explicit, so kill the inherited one */
        stroke: none;
        max-width: 100%;
        height: auto;
    }
    .note {
        font-size: 0.78em;
        color: var(--g2);
        max-width: 420px;
        margin: 4px auto 0;
    }
</style>
