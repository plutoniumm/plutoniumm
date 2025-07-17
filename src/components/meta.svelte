<script>
    export let //
        title,
        sub,
        desc,
        date;
</script>

<svelte:head>
    <title>{title} | manav.ch</title>
    <meta name="description" content={desc} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:card" content="summary" />
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
