<script>
  import Cartesian from "$cpt/scatter.svelte";
  import Meta from "$cpt/meta.svelte";
  import { _, __, Dataset } from "$lib";
  import M from "$lib/math";
  import { map } from "mathjs";

  let prec = 50;
</script>

<Meta title="Algebra on Shapes" description="Algebra and 'Arithmetic' on Shapes"
></Meta>

I had some time one evening so I decided to play around with the idea of doing
algebra but with shapes. What does it mean to add two shapes? Some results are
intuitive, A square of side 5 + a square of side 10 should be a square of side
15. But what happens when we add a square and circle? or raise a circle to the
power of a circle.

<h4>Complex Numbers</h4>
We in fact start with the question of which number system do we use. It should be
trivial to see we'll run into issues very fast if we try to manipulate equations
directly. We can ease our workload by working with complex numbers

<svg
  class="mx-a d-b tc"
  font-family="sans-serif"
  font-weight="300"
  font-size="10"
  width="350"
  height="350"
  viewBox="0 -12 160 160"
  stroke="#000"
>
  <path fill="none" d="m38.8 27.2-.5 85" transform="translate(-18 1.8)" />
  <path fill="none" d="M164.6 111.8H37.8" transform="translate(-18 1.8)" />

  <text x="153.4" y="124.1" transform="translate(-18 1.8)">Re(z)</text>
  <text x="23.1" y="22.3" transform="translate(-18 1.8)">Im(z)</text>
  <path fill="none" d="M21 112.7 73 77" />
  <text x="52.3" y="92.9" transform="translate(-18 1.8)">|z|</text>
  <text x="53.2" y="108.3" font-size="8.5" transform="translate(-18 1.8)"
    >arg(z)</text
  >
  <path fill="none" stroke-dasharray="1 1" d="M73.4 76.8v36.6m.5-36.5h-53" />
  <text x="62.7" y="122" transform="translate(-18 2)">a</text>
  <text x="27.9" y="92.8" transform="translate(-18 2)">b</text>
  <text x="95.7" y="77" transform="translate(-18 2)">z = a + b i</text>
</svg>

where each number is of the form {@html _(
  "z = a + bi = |z| e^&lcub;arg(z)&rcub;",
)}, and then just using a bunch of points for each shape. For example, a circle
can just be 100 complex points

<Cartesian
  data={Dataset("circle", M.lin(0, M["2Pi"], prec).map(M.map.ucircle))}
>
  <div class="tc" slot="caption">
    <label for="prec">prec</label>
    <input
      class="p-rel"
      type="range"
      bind:value={prec}
      min="0"
      max="200"
      step="5"
    />
  </div>
</Cartesian>

So if a shape is just a collection of points, and each point is just a complex
number, then we can add, subtract, multiply points.

<h4>Adding Shapes</h4>
We can add shapes by adding the points that make them up. So a circle of radius 1
+ another is

<Cartesian
  data={[
    Dataset("circle", M.lin(0, M["2Pi"] + 0, prec).map(M.map.ucircle)),
    Dataset(
      "circle (offset)",
      M.lin(0.2, M["2Pi"] + 0.2, prec).map(M.map.ucircle),
    ),
    Dataset(
      "circle + circle (offset)",
      M.lin(0, M["2Pi"], prec).map((x) => [
        M.cos(x) + M.cos(x + 0.2),
        M.sin(x) + M.sin(x + 0.2),
      ]),
    ),
  ]}
>
  <div class="tc" slot="caption">
    <label for="prec">prec</label>
    <input
      class="p-rel"
      type="range"
      bind:value={prec}
      min="0"
      max="200"
      step="5"
    />
  </div>
</Cartesian>

Naturally a two unit circles added should give a circle of radius 2. Now what if
we add a circle of radius 1 and a square of side 1.

<Cartesian
  data={[
    Dataset("circle", M.lin(0, M["2Pi"], prec).map(M.map.ucircle)),
    Dataset("square", M.lin(0, M["2Pi"], prec).map(M.map.usquare)),
    Dataset(
      "circle + square",
      M.lin(0, M["2Pi"], prec).map((x) => {
        const c = M.map.ucircle(x);
        const s = M.map.usquare(x);

        return [c[0] + s[0], c[1] + s[1]];
      }),
    ),
  ]}
>
  <div class="tc" slot="caption">
    <label for="prec">prec</label>
    <input
      class="p-rel"
      type="range"
      bind:value={prec}
      min="0"
      max="200"
      step="5"
    />
  </div>
</Cartesian>

<style>
  svg {
    stroke-width: 0.5;
  }

  input[type="range"] {
    background-color: #fff;
    border: 1px solid #ccc;
    min-width: 10ch;
    font-size: 16px;
    color: #333;

    top: 4px;
  }
</style>
