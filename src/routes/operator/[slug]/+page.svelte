<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  const { post } = data;
</script>

<div class="p20">
  <style>
    img {
      max-width: 100%;
      max-height: 400px;
      border-radius: 5px;
    }

    pre,
    code {
      white-space: pre-wrap !important;
      word-break: break-word !important;
    }
  </style>
  <link rel="stylesheet" href="/css/prismvsc.css" />
  <article class="rpm-10 mx-a">
    <header class="d-b" style="margin: 10px 0;">
      <h1 class="m20 tc">{post.title}</h1>

      <div class="nav w-100 f j-bw">
        {new Date(post.date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </header>

    {#if post.caption}
      <div class="p-rel mx-a w-100">
        <img
          fetchpriority="high"
          class="hero w-100 rx10 p-rel"
          src={post.image}
          alt={post.caption}
        />
        <div class="p5 rx10 p-abs capt">{post.caption}</div>
      </div>
    {/if}

    <!-- render the post -->
    <svelte:component this={data.component} />
  </article>
</div>

<style lang="scss">
  article {
    color: #eee;
    max-width: min(60ch, 100%);
  }
  .hero {
    object-fit: caption;
    aspect-ratio: 2.2;
  }
  .capt {
    bottom: 1.5em;
    right: 1em;
    background: #8888;
    color: #fff;
    font-size: 0.8em;
  }
</style>
