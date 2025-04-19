<script>
  import Cartesian from "$cpt/scatter.svelte";
  import Meta from "$cpt/meta.svelte";
  import { _, __, Dataset } from "$lib";
  import M from "$lib/math";
  const { Map, Rng, Cplx } = M;

  function Csquare(i, k) {
    return [
      (Math.cos(2 * i + k) * Map.square_pref(i)) / 2,
      (Math.sin(2 * i + k) * Map.square_pref(i)) / 2,
    ];
  }

  let prec = 50;
  let off = 0.2 * (prec / 50);
  let Circ = Rng.circ(prec);
  let sweeps = [0, 0];
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
  font-family="Comic Sans MS, Comic Sans, cursive"
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
  <text x="53.2" y="108.3" font-size="8.5" transform="translate(-18 1.8)">
    arg(z)
  </text>
  <path fill="none" stroke-dasharray="3 3" d="M73.4 76.8v36.6m.5-36.5h-53" />
  <text x="62.7" y="122" transform="translate(-18 2)">a</text>
  <text x="27.9" y="92.8" transform="translate(-18 2)">b</text>
  <text x="95.7" y="77" transform="translate(-18 2)">z = a + b i</text>
</svg>

where each number is of the form {@html _(
  "z = a + bi = |z| e^{i\\ \\text{arg}(z)}",
)}, and then just using a bunch of points for each shape. For example, a circle
can just be 100 complex points

<Cartesian data={Dataset("circle", Circ.map(Map.ucircle))}></Cartesian>

So if a shape is just a collection of points, and each point is just a complex
number, then we can add, subtract, multiply points.

<h4>Adding and Multiplying Shapes</h4>
We can add shapes by adding the points that make them up. So a circle of radius 1
+ another and a square + another square have some obvious results.

<div class="f j-bw">
  <Cartesian
    data={[
      Dataset("circle", Circ.map(Map.ucircle)),
      Dataset(
        "circle (offset)",
        M.lin(off, M["2Pi"] + off, prec).map(Map.ucircle),
      ),
      Dataset(
        "circle + circle (offset)",
        Circ.map((x) => Cplx.sum(Map.ucircle(x), Map.ucircle(x + off))),
      ),
    ]}
  ></Cartesian>

  <Cartesian
    data={[
      Dataset("square", Circ.map(Map.usquare)),
      Dataset(
        "square (offset)",
        M.lin(off, M["2Pi"] + off, prec).map(Map.usquare),
      ),
      Dataset(
        "square + square (offset)",
        Circ.map((x) => Cplx.sum(Map.usquare(x), Map.usquare(x + off))),
      ),
    ]}
  ></Cartesian>
</div>

Naturally a two unit circles added should give a circle of radius 2. Since {@html _(
  "z = |z| e^{i \\theta}",
)}, {@html _(
  "z_1 + z_2 = |z_1| e^{i \\theta} + |z_2| e^{i \\theta} = |z_1 + z_2| e^{i 2\\theta+k}",
)}, with an offset parameter {@html _("k")}, since we can choose which angle we
want the two squares to meet at (this will be important later). And, a square
added to a square should give a square of side 2 (the edges look choppy because
computers are finite precision). I have no idea what's going on here

<Cartesian
  data={[
    Dataset("circle", Circ.map(Map.ucircle)),
    Dataset("square", Circ.map(Map.usquare)),
    Dataset(
      "circle + square",
      Circ.map((x) =>
        Cplx.sum(Map.ucircle(x), Map.usquare(x + off * sweeps[0])),
      ),
    ),
  ]}
>
  <div slot="caption">
    Offset: 0
    <input type="range" min="0" max="8" step="0.5" bind:value={sweeps[0]} /> 8
  </div>
</Cartesian>

<div class="f j-ar">
  <div>
    <p>
      We get a twisting squircle. Sweep the offset from 0 to 8 and watch the
      squircle twist around 45&deg;. This can be imagined as a ring that twists
      around the cylender as it goes down in 3d. So if we can add shapes, we can
      also multiply them. So a circle times a circle
    </p>

    <p>With the additional change of also shrinking as it goes.</p>
  </div>

  <img
    src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Cayan_Tower.jpg/330px-Cayan_Tower.jpg"
    alt=""
    style="max-height: min(100vh, 300px);max-width: 100vw"
  />
</div>
<Cartesian
  data={[
    Dataset("circle", Circ.map(Map.ucircle)),
    Dataset("square", Circ.map(Map.usquare)),
    Dataset(
      "circle * square",
      Circ.map((x) => Csquare(x, off * sweeps[0])),
    ),
  ]}
>
  <div slot="caption">
    Offset: 0
    <input
      type="range"
      min="0"
      max="31.41"
      step="0.25"
      bind:value={sweeps[0]}
    /> 31.41
  </div>
</Cartesian>

The parametrised form of a square is {@html _(
  "z(\\theta) = \\sec(\\theta- \\frac \\pi2 \\lfloor \\frac {4\\theta + \\pi}{2\\pi}\\rfloor )e^{i \\theta}",
)}, and that of a circle is {@html _("z(\\theta) = e^{i \\theta}")}. So the
product of a circle and a square is
{@html _(
  "z(\\theta+k) = sec(\\theta - \\frac{\\pi}{2} \\lfloor \\frac{4\\theta + \\pi}{2\\pi} \\rfloor) e^{i 2\\theta + k}",
)}. I have no idea what is going on here or why it's periodicity is 10&pi;.

<h4>The Power of a Circle</h4>
We can also raise a circle to the power of a circle, or anything to a circle's power,
or a circle to anything's power.

<div class="f-col">
  <Cartesian
    data={[
      Dataset("circle", Circ.map(Map.ucircle)),
      Dataset(
        "circle (offset)",
        M.lin(off, M["2Pi"] + off, prec).map(Map.ucircle),
      ),
      Dataset(
        "circle ^ circle (offset)",
        Circ.map((x) =>
          Cplx.pow(
            Map.ucircle(x + off * sweeps[0]),
            Map.ucircle(x + off * sweeps[1]),
          ),
        ),
      ),
    ]}
  >
    <!-- both ranges -->
    <div slot="caption" class="f j-ar">
      <div>
        Offset 1: 0
        <input type="range" min="0" max="8" step="0.5" bind:value={sweeps[0]} />
        8
      </div>
      <div>
        Offset 2: 0
        <input type="range" min="0" max="8" step="0.5" bind:value={sweeps[1]} />
        8
      </div>
    </div>
  </Cartesian>
</div>

<style>
  text {
    stroke-width: 0;
  }

  input[type="range"] {
    position: relative;
    top: 2px;
  }

  [slot="caption"] {
    text-align: center;
  }
</style>
