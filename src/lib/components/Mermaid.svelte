<script>
  import mermaid from "mermaid";
  import { onMount } from "svelte";

  export let content = "";
  export let config = {
    theme: "base",
    gitGraph: {
      mainBranchName: "New-Kernel",
    },
  };

  let graph = null;
  let rendered = "";
  mermaid.initialize({
    ...config,
    startOnLoad: false,
  });

  onMount(() => {
    rendered = mermaid.mermaidAPI.render(
      (+new Date()).toString(36),
      graph.innerText.trim()
    );
  });
</script>

<pre class="d-n" bind:this={graph}>
  {@html content}
</pre>
<main>
  <div id="rendered">
    {@html rendered}
  </div>
</main>

<style>
  :global(svg[aria-roledescription="gitGraph"]) {
    stroke: none !important;
  }
</style>
