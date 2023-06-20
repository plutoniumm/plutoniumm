<script>
  import Card from "$component/card.svelte";

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

<section class="mx-a w-100">
  {#each codes as code}
    <Card className="w-100 tl">
      <div class="f d-b" target="_blank" rel="noopener noreferrer">
        <div>
          <h2 class="m0">{code[2]}</h2>
          <!-- copy -->
          <a href={code[0]} style="color:#888;">
            {code[1]}
          </a>
          <p style="margin: 10px 0 0 0;">{code[3]}</p>
        </div>
      </div>
    </Card>
  {/each}
</section>

<style>
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
</style>
