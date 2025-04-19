<script>
  import { onMount } from "svelte";

  let component;
  onMount(() => {
    const { pathname } = window.location;
    if (!pathname.includes("/p/")) {
      console.error("Invalid path. Expected: /p/[slug]");
      component = false;
      return;
    }

    const slug = pathname.split("/").pop();
    import(`../../data/${slug}.svelte`)
      .then((m) => (component = m.default))
      .catch((_) => (component = false));

    document.body.classList.add("light");
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

  <footer class="tc m-a" style="margin-top: 10vw;">
    <hr class="w-33 o-50" />
    by<a href="/">plutoniumm.</a>
  </footer>
</article>

<button
  class="p-fix"
  on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <svg class="ptr" viewBox="0 0 200 200" height="48" width="48" fill="none">
    <path
      d="
    m 90.68 12.56 c 46.464 -5.808 87.12 29.04 101.64 72.6 s -14.52 87.12 -58.08 101.64 s -71.148 1.452 -91.476 -10.164 C -10.96 108.392 3.56 41.6 61.64 19.82 c 14.52 -4.356 21.78 -5.808 29.04 -7.26 z"
    />
    <path d="M 59 75 Q 77 65 99 47 Q 123 61 139 75 M 99 47 Q 101 85 99 155" />
  </svg>
</button>

<style lang="scss">
  button {
    bottom: 5%;
    right: 5%;
    path {
      stroke: #222a;
      stroke-width: 5;
    }
  }

  :global {
    hr {
      margin: 1em auto;
      width: 33%;
      opacity: 0.5;
    }

    img {
      border-radius: 5px;
      opacity: 0.9;
    }
  }
</style>
