<script lang="ts">
  export let data;

  function fmt(date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    });
  }
</script>

<article class="mx-a">
  <h1>Some recent stuff</h1>
  {#each data.posts as [year, posts]}
    {#if posts}
      <h4>{year}</h4>
      <ul>
        {#each posts.sort((a, b) => +new Date(b.date) - +new Date(a.date)) as post}
          <li>
            <a href="/p/{post.raw}">
              {fmt(post.date)} - {post.title}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  {/each}
</article>

<style>
  article {
  }
</style>
