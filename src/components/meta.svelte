<script>
    export let //
        title,
        sub,
        desc,
        date,
        wallpaper;
</script>

<div class="tools"></div>
<svelte:head>
    <title>{title} | manav.ch</title>
    <meta name="description" content={desc} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://manav.ch/" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={wallpaper} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://manav.ch/" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={desc} />
    <meta property="twitter:image" content={wallpaper} />
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
