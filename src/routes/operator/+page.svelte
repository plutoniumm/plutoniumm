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

{JSON.stringify(data)}
<main class="f j-ar fw">
  {#each data.posts as p}
    <a class="f d-b j-ar fw" href="/operator/{p.slug}">
      <img src={p.image} alt={p.caption} />
      <div>
        <h2>{p.title}</h2>
        <p>{p.desc}</p>
        <time datetime={p.date}>{new Date(p.date).toLocaleDateString()}</time>
      </div>
    </a>
  {/each}
</main>

<style lang="scss">
  main {
    color: #fff;
  }
</style>
