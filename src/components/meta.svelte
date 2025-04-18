<script>
  export let //
    title,
    description;
</script>

<svelte:head>
  <title>{title} | manav.ch</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<h1>{title}</h1>
