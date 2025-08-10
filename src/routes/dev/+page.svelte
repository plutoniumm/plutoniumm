<script lang="ts">
    import { hash, Stripe, Circ, save } from ".";
    import { addText, Distort } from "./calc";
    import { onMount } from "svelte";

    let logo = "/assets/meta.png";
    let text = "sample text";
    const [SW, SH] = [1024, 576];

    let canvasContainer;
    let steps = 100;
    let c, g;

    interface Post {
        title: string;
        sub: string;
        desc: string;
        date: string;
        raw: string;
        year?: string;
    }

    let posts: Post[] = [];
    onMount(async () => {
        const url = new URL(window.location.href);
        const index = parseInt(url.searchParams.get("index") || "0");

        posts = await fetch("/data/posts.json").then((r) => r.json());

        text = posts[index].title;

        new p5((p) => {
            p.setup = () => {
                c = p.createCanvas(SW, SH);
                p.smooth();

                c.parent(canvasContainer);
                g = p.createGraphics(p.width, p.height);
                p.colorMode(p.HSB, 1, 1, 1);
                g.colorMode(p.HSB, 1, 1, 1);

                redrawCanvas(p);
            };

            p.loadImage(logo, (img) => (logo = img));

            p.draw = () => {
                const ITERS = 100;
                if (steps < ITERS) {
                    p.image(g, 0, 0);
                    Distort.x(g, c, p, steps);
                    Distort.y(g, c, p, steps);

                    steps++;
                }

                if (steps == ITERS) {
                    addText(p, text);
                    if (logo) {
                        const sz = 75;

                        p.image(
                            logo,
                            p.width - sz - sz / 4,
                            p.height - sz - sz / 4,
                            sz,
                            sz,
                        );
                    }
                    steps++;
                }
            };
        });
    });

    async function redrawCanvas(p) {
        steps = 0;
        p.noiseSeed(1);

        Stripe(p, p.width, p.height);

        let H = await hash(text);
        H = new Array(110).fill(0).map((_, i) => H[i % H.length]);

        Circ(p, H, p.width, p.height, 330);
    }

    function sel(event) {
        const index = parseInt(event.target.value);

        if (!isNaN(index) && posts[index]) {
            const url = new URL(window.location.href);
            url.searchParams.set("index", index.toString());
            window.location.href = url.toString();
        }
    }
</script>

<svelte:head>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"
    ></script>
</svelte:head>

<div class="canvasCont" bind:this={canvasContainer}></div>

<div class="dock blur f j-ar rx20 p10 p-abs">
    <select class="b0 p10 rx10" on:change={sel}>
        <option disabled selected value="-1">Select Post</option>
        {#each posts as post, i}
            <option value={i}>{post.title}</option>
        {/each}
    </select>

    <button
        class="ptr f j-ct al-ct rx10 p10 b0"
        on:click={async () => save(c, text)}
    >
        <svg class="d-b" viewBox="0 0 32 32" width="28" height="28">
            <path
                d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 26 L16 30 21 26 M16 16 L16 30"
            />
        </svg>
    </button>
</div>

<style>
    svg {
        stroke-width: 2 !important;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        stroke: #000;
    }

    .dock {
        min-width: 500px;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        gap: 12px;
        --bg: #aaa4;
        backdrop-filter: blur(10px);
        z-index: 10;
        box-shadow: 0 0 20px #0004;
        border: 1px solid #fffa;
    }

    select {
        font-size: 18px;
        min-width: 200px;
        background: #fff8;
    }
</style>
