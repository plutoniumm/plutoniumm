<script>
  import { onMount } from "svelte";
  export let name, id;

  let icon = null;
  onMount(() => {
    fetch(`/icon?name=${name}&id=${id}`)
      .then((r) => r.text())
      .then((res) => (icon = res))
      .catch((err) => console.error(err));
  });
</script>

<span class="rx10 p-rel pill" {id}>
  {#if name == "youtube"}
    <img src="/images/yt-col.svg" alt={name} />
  {:else}
    ?
  {/if}

  {#if icon}
    <img src={icon} alt={name} />
  {/if}
</span>

<style>
  .pill {
    display: inline-flex;
    height: 32px;
    width: 64px;
    top: 0.5em;
  }

  img {
    height: 32px;
    width: 32px;
    margin: 0;
    border-radius: 0 !important;
  }
</style>
