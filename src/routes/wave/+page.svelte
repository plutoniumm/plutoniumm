<script lang="ts">
    export let data;

    function fmt(date) {
        const d = new Date(date);

        return d.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
        });
    }
</script>

<svelte:head>
    <title>Handwavium | manav.ch</title>
    <meta
        name="description"
        content="Abstract nonsense that is dimensionally correct. At least by inspection."
    />
</svelte:head>

<article class="mx-a">
    <h1 class="mb5">Handwavium</h1>
    <div class="tagline">
        Abstract nonsense that is dimensionally correct. At least by inspection.
    </div>

    {#each [...data.posts].sort((a, b) => +b[0] - +a[0]) as [year, posts], i (i)}
        {#if posts}
            <h4>{year}</h4>
            <ul>
                {#each posts.sort((a, b) => +new Date(b.date) - +new Date(a.date)) as post, i (i)}
                    <li>
                        <a href="/wave/{post.raw}">
                            {fmt(post.date)} - {post.title}
                        </a>
                    </li>
                {/each}
            </ul>
        {/if}
    {/each}
</article>

<style>
    .tagline {
        margin-bottom: 12px;

        color: #888;
        font-style: italic;
    }
</style>
