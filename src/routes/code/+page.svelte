<script>
  import Card from "$component/card.svelte";
  import Code from "./code.svelte";

  const base = "manav.ch";
  const codes = [
    // link, name, description
    [
      "atomic.css",
      "Atomicss",
      "A minimal extremely modular CSS list. This is not a framework or a toolchain. Just a dumb definition list",
      {
        render: `<html>
<head>
  <link rel="stylesheet" href="//manav.ch/atomic.css">
</head>

<body class="f j-ar">
  <section class="rpm-5">
    This looks
  </section>
  <section class="rpm-5 fw7">
    awesome
  </section>
</body>
</html>`,
      },
    ],
    [
      "/mistake.js",
      "MistakeJS",
      "if you have to use this something has gone catastrophically wrong somewhere without exception",
    ],
  ];
</script>

<section class="mx-a w-100 flow-y-s">
  {#each codes as code}
    <Card className="w-100 tl">
      <Code link={code[0]} name={code[2]} desc={code[3]} />
    </Card>
  {/each}
</section>

<style>
  section {
    padding-top: 10px;
    max-width: min(100%, 600px);
  }
</style>
