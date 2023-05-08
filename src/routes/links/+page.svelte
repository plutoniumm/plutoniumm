<script>
  const i = (str) => `https://x.manav.ch/m2/i/${str}`;
  const data = [
    ["@plutoniumm", i("fas:github"), "//github.com/plutoniumm"],
    ["@fauxdinger", i("fas:twitter"), "//twitter.com/fauxdinger"],
    ["Homepage", i("fas:website"), "/"],
    ["Books", i("fas:books"), "//books.manav.ch"],
  ];
</script>

<section class="p10" style="width: calc(100% - 20px);overflow-y:scroll;">
  <article class="mx-a" style="max-width:min(100%, 600px)">
    <div class="tc">Hello, Manav Here</div>
    {#each data as d}
      <a
        class="rpm-20 link blur f"
        href={d[2]}
        rel="external"
        referrerpolicy="noreferrer"
      >
        <img src="//{d[1]}" alt={d[0]} />
        <div>
          {d[1]} - {d[0]}
        </div>
      </a>
    {/each}
  </article>
</section>

<style>
  .link {
    display: block;
    border: 1px solid #fff8;
    --bg: #fff8;
    --sz: 8px;
  }
</style>
