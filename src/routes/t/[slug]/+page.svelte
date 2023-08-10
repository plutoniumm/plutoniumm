<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  const getLG = (image: string) => {
    if (!image) return "";
    const lg = image.split(".");
    lg[lg.length - 2] += "-lg";
    return lg.join(".");
  };
</script>

<svelte:head>
  <script src="/article.js"></script>
  <link rel="stylesheet" href="/article.css" />
</svelte:head>

<div class="p20">
  <article class="blur-fff8 rpm-10 mx-a" style="max-width:991px;">
    <header style="display:block;margin: 10px 0;">
      <h1 class="m0">{data.post.title}</h1>
      <div class="g" id="time" />
    </header>
    <div class="g">Table of Contents</div>
    <div id="toc" style="padding:5px 0;" />

    {#if data.post.image}
      {@const img = data.post.image}
      <img
        class="hero"
        src="/images/set/{getLG(img)}"
        alt={data.post.caption}
        onerror="this.onerror=null;this.src='/images/{img}';"
      />
      {#if data.post.caption}
        <div class="g" style="padding-bottom:1em">
          {data.post.caption}
        </div>
      {/if}
    {/if}

    <!-- render the post -->
    <svelte:component this={data.component} />
  </article>
</div>

<style>
  .g {
    color: #888;
  }
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
