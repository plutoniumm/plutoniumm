<script>
  export let data;
</script>

<div class="p20">
  <article class="blur-fff8 rpm-10 mx-a" style="max-width:991px;">
    <svelte:component this={data.component} />
  </article>
</div>

<style>
  .blur-fff8 {
    overflow: hidden;
    word-wrap: break-word;
    width: calc(min(70ch, 100%) - 40px);
  }
</style>
