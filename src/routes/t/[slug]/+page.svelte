<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="p20">
  <article
    class="blur-fff8 rpm-10 mx-a"
    style="background-color: #fff8;max-width:991px;"
  >
    <header>
      <h1>{data.post.title}</h1>
    </header>
    <!-- render the post -->
    <main>
      <svelte:component this={data.component} />
    </main>
  </article>
</div>

<style>
  .blur-fff8 {
    overflow: hidden;
    word-wrap: break-word;
    width: calc(min(70ch, 100%) - 40px);
  }
  @media (max-width: 600px) {
    .rpm-10 {
      padding: 5px;
      margin: 0;
    }
    .blur-fff8 {
      width: calc(100% - 10px);
    }
  }
</style>
