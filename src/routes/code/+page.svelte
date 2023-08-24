<script lang="ts">
  import { cascade } from "predefined";
  import Card from "$component/card.svelte";
  import Code from "./code.svelte";
  import Tag from "./tag.svelte";

  import ATOMICSS from "./atomicss.jsonc?raw";
  import MISTAKEJS from "./mistakejs.jsonc?raw";

  interface Lexx {
    value: string;
    files: any;
  }

  const codes: Array<[string, string, string, Lexx]> = [
    [
      "atomic.css",
      "Atomicss",
      "A minimal extremely modular CSS list. This is not a framework or a toolchain. Just a dumb definition list",
      { value: "static", files: JSON.parse(ATOMICSS) },
    ],
    [
      "mistake.js",
      "MistakeJS",
      "if you have to use this something has gone catastrophically wrong somewhere without exception. It lets you use pure svelte web-components directly in vanilla html",
      { value: "static", files: JSON.parse(MISTAKEJS) },
    ],
  ];

  export let data;
</script>

<svelte:head>
  <link rel="preload" href="https://lexx.manav.ch" as="document" />
</svelte:head>

<section class="mx-a w-100 flow-y-s">
  {#each codes as code}
    <Card className="w-100 tl">
      <Code link={code[0]} name={code[1]} desc={code[2]} code={code[3]} />
    </Card>
  {/each}

  {#each data.list as repo}
    <Card className="w-100 tl">
      <div class="repo">
        <div class="head f j-bw">
          <h1 class="title m0">{repo.name}</h1>
          <div style="font-size:1.25rem;color:#888;">
            {cascade(Date.now() / 1000 - repo.created)} ago
          </div>
        </div>
        <div class="body">
          <div class="tags">
            <Tag name={repo.tag} inner={repo.tagDesc} />
            <Tag name="license" inner={repo.license} />
          </div>
          <div>
            <p>{repo.description}</p>
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
