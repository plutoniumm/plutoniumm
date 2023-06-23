<script>
  import Card from "$component/card.svelte";
  import Code from "./code.svelte";

  const base = "manav.ch";
  const codes = [
    // link, displayLink, name, description
    [
      "atomic.css",
      base + "/atomic.css",
      "Atomicss",
      "A minimal extremely modular CSS list. This is not a framework or a toolchain. Just a dumb definition list",
    ],
    [
      "/mistake.js",
      base + "/mistake.js",
      "MistakeJS",
      "if you have to use this something has gone catastrophically wrong somewhere without exception",
    ],
  ];
</script>

<section class="mx-a w-100 flow-y-s">
  {#each codes as code}
    <Card className="w-100 tl">
      <Code link={code[0]} copy={code[1]} name={code[2]} desc={code[3]} />
    </Card>
  {/each}
</section>

<style>
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
</style>
