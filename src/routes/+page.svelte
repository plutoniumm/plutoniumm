<script>
    const i = (str) => `/assets/${str}.svg`;
    const blocks = [
        {
            title: "",
            links: [
                ["plutoniumm", "//github.com/plutoniumm", "github"],
                // ["plutoniumm", "//youtu.be/zL19uMsnpSU", "youtube"],
                [
                    "Scholar",
                    "//scholar.google.com/citations?user=CkJTRyAAAAAJ",
                    "scholar",
                ],
                ["Books", "//books.manav.ch", "bookmark"],
            ],
        },
        {
            title: ".",
            links: [
                ["Handwavium", "/wave", "clip"],
                ["Simulators", "/sim", "comment"],
                ["Docs", "/docs", "docs"],
            ],
        },
    ];
</script>

<svelte:head>
    <meta name="title" content="Plutoniumm" />
    <meta name="description" content="Don't worry, I'm a programmer" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://manav.ch/" />
    <meta property="og:title" content="Plutoniumm" />
    <meta property="og:description" content="Don't worry, I'm a programmer" />
    <meta property="og:image" content="/assets/meta.png" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://manav.ch/" />
    <meta property="twitter:title" content="Plutoniumm" />
    <meta
        property="twitter:description"
        content="Don't worry, I'm a programmer"
    />
    <meta property="twitter:image" content="/assets/meta.png" />
</svelte:head>

<section class="p-rel al-ct j-ct f-col fw flow-x-h flow-y-h">
    <div class="p-rel">
        <img
            class="left p10"
            width="125px"
            height="125px"
            src="/assets/pic.png"
            alt=""
        />
        <div id="wave" class="p-abs">
            <span class="d-ib" style="transform: rotate(-30deg);"> ✋🏽 </span>
        </div>
    </div>
    <div class="right fade p20">
        <div class="title fw5">Manav Seksaria</div>
        <br />
        <div class="f-col g10">
            {#each blocks as block, idx}
                <div>
                    {#if idx !== 0}
                        <hr class="rpm-0 o-25 w-50 mx-a" />
                    {/if}
                    {#each block.links as link}
                        <a
                            class="p-rel d-b"
                            href={link[1]}
                            rel="external noreferrer noopener"
                            target="_blank"
                        >
                            <img class="p-rel" src={i(link[2])} alt={link[0]} />
                            {link[0]}
                        </a>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    section {
        height: 100vh;
    }

    .title {
        font-size: 1.5rem;
        line-height: 1rem;
    }
    a[target="_blank"] {
        margin: 4px 0;
        font-size: 18px;
        line-height: 1.5;

        img {
            top: 6px;
            left: -2px;
            height: 22px;
            width: 22px;
            object-fit: contain;
            filter: invert(0.8);
        }
    }
    .left {
        transform: translateY(-15px) scale(1.1);
        padding-bottom: 0;
    }
    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(14deg);
        }
        20% {
            transform: rotate(-8deg);
        }
        30% {
            transform: rotate(14deg);
        }
        40% {
            transform: rotate(-4deg);
        }
        50% {
            transform: rotate(10deg);
        }
        60% {
            transform: rotate(0deg);
        } /* Reset for the last half to pause */
        100% {
            transform: rotate(0deg);
        }
    }
    #wave {
        font-size: 0.8em;
        animation: 2.5s wave infinite;
        transform-origin: 70% 70%;
        bottom: 17px;
        left: 2px;
        font-size: 52px;
    }
</style>
