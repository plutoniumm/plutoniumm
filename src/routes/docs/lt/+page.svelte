<script>
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import xml from "highlight.js/lib/languages/xml";
  import "highlight.js/styles/github.css";

  import Card from "../atomic/card.svelte";

  hljs.registerLanguage("xml", xml);

  const usage = (name) => `<pre class="rx5"><code class="language-xml"
    >&lt;script type="module" src="https://manav.ch/lt/${name}.js"&gt;&lt;/script&gt;</code
    ></pre>`;

  onMount(() => hljs.highlightAll());
</script>

<svelte:head>
  <script src="/lt/mermaid.js"></script>
  <script src="/lt/split.js"></script>
  <script src="/lt/code.js"></script>
</svelte:head>

<div class="atomic mx-a">
  <h1>Light Components</h1>
  <p>
    Minimal self contained web components built with TypeScript. Designed to be
    lightweight and easy to use. Drop in components that do one thing well.
  </p>

  <Card
    description="Renders markup diagrams and flowcharts using Mermaid.js. <br/> {usage(
      'mmd',
    )}"
    code={`<lt-mmd>
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
</lt-mmd>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>&lt;lt-mmd&gt;</code>
    </div>

    <div class="box p20">
      <div class="rpm-10 active cc">
        <lt-mmd>
          {`
          graph TD;
          A-->B;
          A-->C;
          B-->D;
          C-->D;
        `}
        </lt-mmd>
      </div>
    </div>
  </Card>

  <Card
    code={`<lt-split ratio="1:4">
  <div slot="a">1</div>
  <div slot="b">2</div>
</lt-split>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>&lt;lt-split&gt;</code>
    </div>

    <div slot="description">
      Creates a resizable split view between two panes.
      <br />
      {@html usage("split")}
      <br />

      The 'ratio' attribute defines the initial size ratio between the two
      panes. Additional styles, classes, and attributes are passed on.
      Additionally, split takes two optional parameters

      <table class="w-100 mt10">
        <thead>
          <tr>
            <th class="p10">Parameter</th>
            <th class="p10">Type</th>
            <th class="p10">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p10">vertical</td>
            <td class="p10">boolean</td>
            <td class="p10"
              >If true, the split is vertical (top/bottom). Default is
              horizontal (left/right).</td
            >
          </tr>
          <tr>
            <td class="p10">disabled</td>
            <td class="p10">boolean</td>
            <td class="p10">If true, disables the resizing functionality.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box p20" style="height: 200px;">
      <lt-split class="border rx 10 sw sh" ratio="1:4">
        <div class="border sw sh cc" slot="a">1</div>
        <div class="border sw sh cc" slot="b">4</div>
      </lt-split>
    </div>
  </Card>

  <Card
    code={`<lt-code language="javascript" value="
  const hello = 'Hello, World!';
  console.log(hello);
">
</lt-code>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>&lt;lt-code&gt;</code>
    </div>

    <div slot="description">
      Syntax highlighted code block using Highlight.js.
      <br />
      {@html usage("code")}
      <br />
      The 'language' attribute specifies the programming language for syntax highlighting.
    </div>
    <div class="box p20">
      <lt-code
        language="javascript"
        value="const hello = 'Hello, World!';
console.log(hello);"
      >
      </lt-code>
    </div>
  </Card>
</div>

<style lang="scss">
  .border {
    border: 1px solid #0001;
  }

  .atomic {
    max-width: 800px;
    color: #333;
  }

  .box {
    background: #f4f4f4;
    border-radius: 5px;
  }

  .active {
    background: #aaf;
    min-height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  thead th {
    background: #eee;
    color: #222;
  }

  tbody tr:nth-child(even) {
    background: #eee8;
  }

  tbody tr:hover {
    background: #eef;
  }
</style>
