<script>
  export let data;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@1.9.0/themes/prism-vsc-dark-plus.css"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <style>
    pre {
      border-radius: 10px;
    }
  </style>
</svelte:head>

<article class="blur-fff8 rx10 p10" style="max-width:991px;">
  <svelte:component this={data.component} />
</article>

<style>
  .blur-fff8 {
    margin: 20px auto;
    overflow: hidden;
    word-wrap: break-word;
    width: calc(min(70ch, 100%) - 60px);
  }
</style>
