<script>
  import { onMount } from "svelte";

  export let name, link, desc, code;

  let frame;
  onMount(() => {
    const { files, value } = code;
    frame.contentWindow.postMessage({ type: "files", value, files }, "*");
  });
</script>

<div class="f d-b fw" target="_blank" rel="noopener noreferrer">
  <div>
    <h2 class="m0">{name}</h2>
    <!-- copy -->
    <a href={link} style="color:#888;">
      {link}
    </a>
    <p style="margin: 10px 0 0 0;">{desc}</p>
  </div>
  <div class="scroll tr w-100">Scroll For Demo</div>
  <iframe
    bind:this={frame}
    class="rx10 w-100"
    src="https://lexx.manav.ch"
    frameborder="0"
    title="lexx editor"
  />

  <div>
    <br />See Full docs at
    <a href="/docs/{link}" style="color:var(--theme-hl)">docs</a>
  </div>
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
