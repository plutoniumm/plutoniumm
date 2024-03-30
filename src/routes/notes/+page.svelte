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
    <a class="f d-b j-ar fw rx10" href="./{p.slug}">
      {#if p.caption}
        <div>
          <img class="rx10" src={p.image} alt={p.caption} />
          <p>{p.caption}</p>
        </div>
      {/if}
      <div>
        <h2>{p.title}</h2>
        <time datetime={p.date}
          >{new Date(p.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</time
        >
        <p>{p.desc}</p>
      </div>
    </a>
  {/each}
</main>

<style lang="scss">
  h2 {
    margin-bottom: 2px;
  }
  time {
    color: #aaa;
    margin-bottom: 7px;
  }
  a {
    border: 1px solid #fff8;
    margin: 10px auto;
    max-width: min(100%, 768px);
  }
  main {
    color: #fff;
  }
</style>
