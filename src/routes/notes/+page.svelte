<script lang="ts">
  interface Post {
    title: string;
    desc: string;
    date: number;
    slug: string;
    image: string;
    caption?: string;
  }

  export let data = { posts: [] };
</script>

<main>
  {#each data.posts as p}
    <a class="f d-b j-ar fw rx10" href="./notes/{p.slug}">
      <div class="tc p10" style="flex:1;">
        {#if p.caption}
          <img class="rx10" src={p.image} alt={p.caption} />
          <p class="cap">{p.caption}</p>
        {/if}
      </div>
      <!--  -->
      <div style="flex:4;">
        <h2>{p.title}</h2>
        <time datetime={p.date}
          >{new Date(p.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</time
        >
        <p class="desc">{p.desc}</p>
      </div>
    </a>
    <hr class="o-25 w-25" />
  {/each}
</main>

<style lang="scss">
  .cap {
    color: #aaa;
    font-size: 0.9em;
    margin: 5px 0;
  }
  .desc {
    max-width: 85%;
    line-height: 1.25em;
  }
  img {
    width: 85%;
    aspect-ratio: 1;
    background: #fff;
  }
  h2 {
    margin-bottom: 2px;
  }
  time {
    color: #aaa;
    margin-bottom: 7px;
  }
  a {
    margin: 10px auto;
    max-width: min(100%, 768px);
    transition: background 0.1s ease-in-out;
    &:hover {
      background: #0004;
    }
  }
  main {
    color: #fff;
  }
</style>
