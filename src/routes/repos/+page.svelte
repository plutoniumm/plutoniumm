<script lang="ts">
  import { cascade } from "predefined";
  import Card from "$component/card.svelte";
  import Tag from "./tag.svelte";

  export let data;
</script>

<section class="mx-a w-100 flow-y-s">
  {#each data.list as repo}
    <Card className="w-100 tl">
      <div class="repo">
        <a
          class="head d-b f j-bw"
          href="https://github.com/plutoniumm/{repo.name}"
        >
          <h1 class="title m0">{repo.name}</h1>
          <div style="color:#888a;">
            created {cascade(Date.now() / 1000 - repo.created)} ago
          </div>
        </a>
        <div class="body">
          <div class="tags">
            <Tag name={repo.tag} inner={repo.tagDesc} />
            <Tag name="license" inner={repo.license} />
          </div>
          <div>
            {#if repo.description}
              <p>{repo.description}</p>
            {/if}
            <div class="updated">
              Last updated {cascade(Date.now() / 1000 - repo.updated)} ago
            </div>
          </div>
        </div>
      </div>
    </Card>
  {/each}
</section>

<style lang="scss">
  .repo {
    .title {
      text-transform: capitalize;
    }
  }
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
</style>
