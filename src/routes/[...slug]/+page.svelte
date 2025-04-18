<script>
  import { onMount } from "svelte";

  let component;
  onMount(() => {
    const { pathname } = window.location;
    if (!pathname.includes("/note/")) {
      console.error("Invalid path. Expected: /note/[slug]");
      component = false;
      return;
    }

    const slug = pathname.split("/").pop();
    import(`../../data/${slug}.svelte`)
      .then((m) => (component = m.default))
      .catch((_) => (component = false));
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css"
    integrity="sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP"
    crossorigin="anonymous"
  />
</svelte:head>

<article class="mx-a tl p10">
  {#if component}
    <svelte:component this={component} />
  {:else if component === false}
    <p>Component not found. Please check the slug.</p>
  {:else}
    <p>Loading...</p>
  {/if}
</article>

<style lang="scss">
  :global {
    body {
      background: #fff !important;
      color: #111 !important;
    }

    body::before {
      filter: invert(1);
      opacity: 0.25 !important;
    }

    hr {
      margin: 1em auto;
      width: 33%;
      opacity: 0.5;
    }
  }

  article {
    font-size: 18px;
    font-family: "Comic Sans MS", sans-serif;
    max-width: min(80ch, 720px);
  }
</style>
