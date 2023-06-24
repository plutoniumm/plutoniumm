<script lang="ts">
  import Card from "$component/card.svelte";
  import Code from "./code.svelte";

  import ATOMICSS from "./atomicss.jsonc?raw";
  import MISTAKEJS from "./mistakejs.jsonc?raw";

  interface Lexx {
    value: string;
    files: any;
  }
  type PublicCode = [string, string, string, Lexx];

  const codes: Array<PublicCode> = [
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
</section>

<style>
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
</style>
