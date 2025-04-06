<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  const { post } = data;

  let cpt;
  onMount(() => {
    cpt.$$.root.querySelectorAll("a").forEach((a) => {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.style.color = "#4af";
      const text = a.textContent;
      if (text.startsWith("[") && text.endsWith("]")) {
        a.outerHTML = `<sup>${a.outerHTML}</sup>`;
      }
    });
  });
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
  <article class="rpm-10 fw3 mx-a">
    <header class="d-b tc" style="margin: 10px 0;">
      <h1 class="m20">{post.title}</h1>

      <div class="nav w-100">
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
          style="background: #fff;"
        />
        <div class="p5 rx10 p-abs capt">{post.caption}</div>
      </div>
    {/if}

    <!-- render the post -->
    <svelte:component this={data.component} bind:this={cpt} />
  </article>
</div>

<style lang="scss">
  article {
    color: #eee;
    max-width: min(60ch, 100%);
    line-height: 1.6;
    font-size: 18px;
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
