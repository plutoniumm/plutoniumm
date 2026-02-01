<script>
    export let //
        title,
        sub,
        desc,
        date;

    async function hash(input) {
        const data = new TextEncoder().encode(input);
        let hash = await crypto.subtle.digest("SHA-256", data);

        hash = Array.from(new Uint8Array(hash));
        hash = hash.map((b) => b.toString(16).padStart(2, "0")).join("");

        return hash;
    }

    const wallpaper = async () => "/posts/" + (await hash(title)) + ".png";
</script>

<svelte:head>
    <title>{title} | manav.ch</title>
    <meta name="description" content={desc} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://manav.ch/" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://manav.ch/" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={desc} />

    {#await wallpaper() then WP}
        <meta property="og:image" content={WP} />
        <meta property="twitter:image" content={WP} />
    {/await}
</svelte:head>

<h1>{title}</h1>
<div class="sub">
    {sub} &bullet; {new Date(date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })}
</div>

<style>
    h1 {
        margin-bottom: 5px;
    }
    .sub {
        margin-bottom: 12px;
        font-size: 0.9em;
        color: #888;
    }
</style>
