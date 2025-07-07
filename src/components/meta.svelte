<script>
    export let //
        title,
        sub,
        desc,
        date,
        ignores = "";
</script>

<svelte:head>
    <title>{title} | manav.ch</title>
    <meta name="description" content={desc} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:card" content="summary" />

    {#if ignores.length}
        <meta name="ignore_list" content={ignores} />
    {/if}
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
