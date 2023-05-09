<script>
  import Card from "@component/card.svelte";
  import { onMount } from "svelte";
  export let data;

  onMount(() => {
    console.log(data);
  });
</script>

<section class="mx-a w-100">
  {#each data.posts as p}
    <Card className="m10 w-100 tl">
      {JSON.stringify(p)}
    </Card>
  {/each}
</section>

<style>
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
</style>
