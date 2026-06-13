<script>
  import { onMount } from "svelte";
  import hljs from "highlight.js/lib/core";
  import xml from "highlight.js/lib/languages/xml";
  import "highlight.js/styles/github.css";
  import Select from "./select.svelte";
  import Card from "./card.svelte";

  hljs.registerLanguage("xml", xml);

  const presets = [0, 2, 5, 10, 20];
  const persets = [0, 25, 33, 50, 66, 75, 100];

  let selected = {
    rpm: 10,
    rx: 10,
    o: 50,
    w: 50,
    h: 50,
    d: "b",
    flow: "y-s",
    j: "ct",
    fw: 5,
    ta: "c",
    g: 10,
    dir: "x",
    sp: 10,
  };

  const dirMap = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right",
    x: "left + right",
    y: "top + bottom",
  };

  const displayMap = {
    n: "none",
    b: "block",
    i: "inline",
    ib: "inline-block",
    if: "inline-flex",
    g: "grid",
    c: "contents",
    u: "unset",
  };

  const alignMap = {
    l: "left",
    c: "center",
    r: "right",
    j: "justify",
  };

  onMount(() => hljs.highlightAll());
</script>

<div class="atomic-docs mx-a">
  <h1>Atomic CSS Utilities</h1>
  <p>
    Standardized utility classes for spacing, sizing, layout, and typography.
    AtomicCSS is used basically everywhere I've written a web application, so
    most CSS will not change drastically over time.
  </p>
  <p>Anything that has multiple values has two types,</p>
  <ul>
    <li>number: [{presets.join(", ")}]</li>
    <li>percent: [{persets.join(", ")}]</li>
  </ul>

  The usage is simple:
  <pre class="rx5"><code class="language-xml"
      >&lt;link rel="stylesheet" href="https://manav.ch/atomic.css"&gt;</code
    ></pre>

  <Card
    description="Sets margin, padding, and border-radius simultaneously. Updates CSS variables <code>--M</code> and <code>--P</code>. When used with dumb scales <code>.w, .h</code> it will cause overflows, whereas when using smart scales <code>.sw, .sh</code> it accounts for these values."
    code={`<div class="rpm-${selected.rpm}">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.rpm-{selected.rpm}</code>
      <Select items={presets} bind:value={selected.rpm} />
    </div>

    <div class="box">
      <div class="rpm-{selected.rpm} active">Content</div>
    </div>
  </Card>

  <Card
    description="Individual utilities for border-radius (rx), padding (p), and margin (m)."
    code={`<div class="rx${selected.rx} p${selected.rx} m${selected.rx}">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.rx{selected.rx}, .p{selected.rx}, .m{selected.rx}</code>
      <Select items={presets} bind:value={selected.rx} />
    </div>

    <div class="box">
      <div class="rx{selected.rx} p{selected.rx} m{selected.rx} active">
        Target
      </div>
    </div>
  </Card>

  <Card
    description="Directional padding and margin (<strong>{dirMap[
      selected.dir
    ]}</strong>). <code>t/b/l/r</code> target one side, <code>x/y</code> target an axis pair. Each updates a per-side tracker (<code>--PT/--PB/--PL/--PR</code>, <code>--MT/...</code>) which smart scales subtract. <code>.sw</code> accounts for left/right and <code>.sh</code> for top/bottom, so they compose with <code>sw/sh</code> just like <code>p*</code>/<code>m*</code>. Don't stack them with all-sides <code>p*</code>/<code>m*</code> on the same side, or the smart scale will reserve space twice."
    code={`<div class="p${selected.dir}${selected.sp} m${selected.dir}${selected.sp}">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.p{selected.dir}{selected.sp}, .m{selected.dir}{selected.sp}</code>
      <div class="f g10">
        <Select
          items={["t", "b", "l", "r", "x", "y"]}
          bind:value={selected.dir}
        />
        <Select items={presets} bind:value={selected.sp} />
      </div>
    </div>

    <div class="box">
      <div
        class="m{selected.dir}{selected.sp}"
        style="background: var(--g1); border-radius: 4px;"
      >
        <div class="p{selected.dir}{selected.sp}" style="background: var(--g2);">
          <div class="active">Target</div>
        </div>
      </div>
    </div>
  </Card>

  <Card
    description="Sets the opacity of an element."
    code={`<div class="o-${selected.o}">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.o-{selected.o}</code>
      <Select items={persets} bind:value={selected.o} />
    </div>

    <div class="box">
      <div class="active cc h80 w80 o-{selected.o}">
        {selected.o}%
      </div>
    </div>
  </Card>

  <Card
    description="Sets horizontal margins to auto, centering the element within its parent."
    code={'<div class="mx-a">...</div>'}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.mx-a</code>
    </div>

    <div class="box">
      <div class="mx-a active w-50">Centered Content</div>
    </div>
  </Card>

  <Card
    description="<code>w</code> sets standard width. <code>sw</code> (smart width) calculates width minus margins/padding. Height works the same with <code>h</code> and <code>sh</code>."
    code={`<div class="w-${selected.w}">Standard</div>\n<div class="sw-${selected.w}">Smart</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.w-{selected.w} / .sw-{selected.w}</code>
      <Select items={persets} bind:value={selected.w} />
    </div>

    <div class="f-col g10">
      <div class="box p0">
        <div class="w-{selected.w} active">Standard {selected.w}%</div>
      </div>
      <div class="box p0" style="margin-top: 10px;">
        <div class="rpm-10 sw-{selected.w} active">
          Smart {selected.w}% (w/ rpm-10)
        </div>
      </div>
    </div>
  </Card>

  <Card
    description="<code>f</code> initiates flexbox. <code>f-col</code> changes direction to column. <code>fw</code> allows wrapping."
    code={'<div class="f fw">...</div>'}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.f .f-col .fw</code>
    </div>

    <div class="f fw g10 box" style="align-items: flex-start;">
      <div class="active w40">1</div>
      <div class="active w40">2</div>
      <div class="active w40">3</div>
      <div class="f-col p5 g5" style="background: var(--g1); ">
        <div class="active w40 h40">Col</div>
        <div class="active w40 h40">Col</div>
      </div>
    </div>
  </Card>

  <Card
    description="Sets the gap between items in flex/grid containers."
    code={`<div class="f g${selected.g}">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.g{selected.g}</code>
      <Select items={presets} bind:value={selected.g} />
    </div>

    <div class="f al-ct g{selected.g} box">
      <div class="active w40">One</div>
      <div class="active w40">Two</div>
    </div>
  </Card>

  <Card
    description="Sets display property. Current: <strong>{displayMap[
      selected.d
    ]}</strong>."
    code={`<div class="d-${selected.d}">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.d-{selected.d}</code>
      <Select
        items={["n", "b", "i", "ib", "if", "g", "c", "u"]}
        bind:value={selected.d}
      />
    </div>

    <div class="box">
      <div class="active d-{selected.d}">Item 1</div>
      <div class="active d-{selected.d}" style="background: var(--c3);">Item 2</div>
    </div>
  </Card>

  <Card
    description="Position utilities, all <code>!important</code>. <code>.p-rel</code> turns an element into an anchor, <code>.p-abs</code> positions a child against the nearest anchor. <code>.p-fix</code> pins to the viewport instead (not demoed, it would escape this box)."
    code={`<div class="p-rel">\n  <div class="p-abs">badge</div>\n</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.p-rel .p-abs .p-fix</code>
    </div>

    <div class="box">
      <div class="p-rel active h80 w-100">
        anchor (.p-rel)
        <div class="p-abs badge">.p-abs</div>
      </div>
    </div>
  </Card>

  <Card
    description="<code>.ptr</code> sets <code>cursor: pointer</code>. <code>.dead</code> turns interaction off completely: <code>pointer-events: none</code> and <code>user-select: none</code>, so clicks pass through and the text can't even be highlighted. Try it on the boxes below."
    code={`<div class="ptr">...</div>\n<div class="dead">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.ptr .dead</code>
    </div>

    <div class="box bigbox f g10">
      <div class="active ptr w-50">.ptr: hover me, the cursor changes</div>
      <div class="active dead w-50">
        .dead: try selecting or clicking this text
      </div>
    </div>
  </Card>

  <Card
    description="Controls overflow behavior. <code>x/y</code> for axis, <code>h/s</code> for hidden/scroll. Alternatively it may be applied simultaneously with <code>.flow-h, .flow-s</code>"
    code={`<div class="flow-${selected.flow} flow-x-h">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.flow-{selected.flow}</code>
      <Select items={["x-h", "x-s", "y-h", "y-s"]} bind:value={selected.flow} />
    </div>

    <div class="box p0" style="height: 100px;">
      <div class="flow-{selected.flow} flow-x-h h-100 w-100">
        <div class="active" style="width: 150%; height: 150%;">
          Overflow Content
        </div>
      </div>
    </div>
  </Card>

  <Card
    description="Justify content helpers. <code>.cc</code> is a shorthand for centering both axes. In addition, <code>al-*</code> classes are available for align-items, but that supports only <code>al-ct</code> for now."
    code={`<div class="f j-${selected.j}">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.j-{selected.j}</code>
      <Select items={["ct", "bw", "ar", "st"]} bind:value={selected.j} />
    </div>

    <div class="f j-{selected.j} box al-ct h80">
      <div class="active w40 h40">A</div>
      <div class="active w40 h40">B</div>
      <div class="active w40 h40">C</div>
    </div>
    <div class="cc box" style="margin-top: 10px; background: var(--g1);">
      <div class="active" style="width: auto; padding: 0 10px;">
        .cc (absolute center)
      </div>
    </div>
  </Card>

  <Card
    description="Text align (<strong>{alignMap[
      selected.ta
    ]}</strong>) and font weight (<strong>{selected.fw}00</strong>)."
    code={`<div class="t${selected.ta} fw${selected.fw}">...</div>`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>.t{selected.ta} .fw{selected.fw}</code>
      <div class="f g10">
        <Select items={["l", "c", "r"]} bind:value={selected.ta} />
        <Select items={[1, 3, 4, 5, 7]} bind:value={selected.fw} />
      </div>
    </div>

    <div class="t{selected.ta} fw{selected.fw} box">
      <div class="active d-b w-100">The quick brown fox</div>
    </div>
  </Card>

  <h2 class="gd-title">Global defaults</h2>
  <p>
    Besides utilities, including the stylesheet also applies a couple of base
    tweaks automatically — no class required.
  </p>

  <Card
    description="atomic.css sets <code>interpolate-size: allow-keywords</code> on <code>:root</code>, which lets transitions animate to and from intrinsic size keywords like <code>auto</code>, <code>min-content</code>, and <code>fit-content</code> — something CSS normally can't do. Hover the box to see its height animate to <code>auto</code>."
    code={":root { interpolate-size: allow-keywords; }"}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>interpolate-size</code>
    </div>

    <div class="box">
      <div class="interp">
        <b>Hover me.</b> My height animates from a clamped value to
        <code>auto</code>, revealing this text smoothly. Without
        <code>interpolate-size</code>, transitioning to <code>auto</code>
        wouldn't animate at all — it would just snap open.
      </div>
    </div>
  </Card>

  <Card
    description="On <code>body</code>, atomic.css enables <code>-webkit-font-smoothing: antialiased</code> and <code>-moz-osx-font-smoothing: grayscale</code>, so text renders lighter and crisper on macOS/WebKit. Applied globally — no class needed."
    code={`body {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}`}
  >
    <div slot="header" class="f w-100 j-bw">
      <code>font-smoothing</code>
    </div>

    <div class="box">
      <div class="active d-b w-100 tc">
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  </Card>
</div>

<style lang="scss">
  .w40 {
    width: 40px;
  }

  .w80 {
    width: 80px;
  }

  .h40 {
    height: 40px;
  }

  .h80 {
    height: 80px;
  }

  .atomic-docs {
    max-width: 800px;
    color: var(--k1);
  }

  .box {
    background: var(--w);
    border-radius: 4px;
    padding: 20px;
    min-height: 60px;
  }

  .active {
    background: color-mix(in srgb, var(--c3) 40%, var(--w));
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    border: 1px solid color-mix(in srgb, var(--k2) 10%, transparent);
  }

  .badge {
    top: 5px;
    right: 5px;
    min-height: 0;
    padding: 2px 8px;
    font-size: 13px;
    background: var(--c3);
    border-radius: 4px;
  }

  .bigbox {
    min-height: 140px;
  }

  .bigbox > div {
    text-align: center;
    padding: 10px;
  }

  .gd-title {
    margin-top: 40px;
  }

  .interp {
    overflow: hidden;
    height: 1.6em;
    padding: 8px 12px;
    background: color-mix(in srgb, var(--c3) 40%, var(--w));
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.4s ease;
  }

  .interp:hover {
    height: auto;
  }

  .interp code {
    background: color-mix(in srgb, var(--c3) 12%, var(--w));
    padding: 1px 4px;
    border-radius: 4px;
  }
</style>
