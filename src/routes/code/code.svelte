<script>
  import { onMount } from "svelte";

  export let name, link, desc, copy;

  let scroll, frame;

  let docs = `/docs/${link}.md`;
  onMount(() =>
    fetch(docs)
      .then((r) => r.text())
      .then((text) => {
        const docs = text?.split("===")[1]?.trim();
        console.log(docs);
        if (!docs) {
          scroll.remove();
          return frame.remove();
        }

        frame.contentWindow.postMessage(
          {
            type: "files",
            value: "static",
            files: {
              "index.html": {
                code: docs,
              },
            },
          },
          "*"
        );
      })
  );
</script>

<div class="f d-b fw" target="_blank" rel="noopener noreferrer">
  <div>
    <h2 class="m0">{name}</h2>
    <!-- copy -->
    <a href={link} style="color:#888;">
      {copy}
    </a>
    <p style="margin: 10px 0 0 0;">{desc}</p>
  </div>
  <div bind:this={scroll} class="scroll tr w-100">Scroll For Demo</div>
  <iframe
    bind:this={frame}
    class="rx10 w-100"
    src="//localhost:3001"
    frameborder="0"
    title="lexx editor"
  />

  <div>
    <br />See Full docs at <a href={docs} style="color:var(--theme-hl)">docs</a>
  </div>
  <!-- src="https://lexx.manav.ch" -->
</div>

<style>
  iframe {
    height: 300px;
    aspect-ratio: 16/10;
  }
  .scroll {
    margin-top: 10px;
    color: #888;
    font-size: 12px;
  }
</style>
