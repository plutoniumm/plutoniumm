<script>
  import Cartesian from "$cpt/scatter.svelte";
  import { _, __, Dataset } from "$lib";
  import Meta from "$cpt/meta.svelte";
  import LR from "$cpt/LR.svelte";
  import M from "$lib/math";
  const { Map, Rng, Cplx } = M;

  let prec = 50;
  let off = 0.2 * (prec / 50);
  let Circ = Rng.circ(prec);
  let mut = [0, 0];
  let flags = [true, true];
</script>

<Meta
  title="The square root of a Square"
  sub="Seeing Numbers #001"
  desc="Algebra and 'Arithmetic' on Shapes"
  date="18 April 2025"
></Meta>

I had some time one evening so I decided to play around with the idea of doing
algebra but with shapes. What does it mean to add two shapes? Some results are
intuitive, a square of side 5 + a square of side 10 should be a square of side
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

<p>
  where each number is of the form {@html _(
    "z = a + bi = |z| e^{i\\ \\text{arg}(z)} = r e^{i\\theta}",
  )}, and then just using a bunch of points for each shape. For example, a
  circle can just be 100 complex points
</p>

<Cartesian data={Dataset("circle", Circ.map(Map.ucirc))}></Cartesian>

<p>
  So if a shape is just a collection of points, and each point is just a complex
  number, then we can add, subtract, multiply points.
</p>

<h4>Adding and Multiplying Shapes</h4>
<p>
  We can add shapes by adding the points that make them up. So a circle of
  radius 1 + another and a square + another square have some obvious results.
</p>

<div class="f j-bw">
  <Cartesian
    data={[
      Dataset("circle", Circ.map(Map.ucirc)),
      Dataset(
        "circle (offset)",
        M.lin(off, M["2Pi"] + off, prec).map(Map.ucirc),
      ),
      Dataset(
        "circle + circle (offset)",
        Circ.map((x) => Cplx.sum(Map.ucirc(x), Map.ucirc(x + off))),
      ),
    ]}
  ></Cartesian>

  <Cartesian
    data={[
      Dataset("square", Circ.map(Map.usq)),
      Dataset("square (offset)", M.lin(off, M["2Pi"] + off, prec).map(Map.usq)),
      Dataset(
        "square + square (offset)",
        Circ.map((x) => Cplx.sum(Map.usq(x), Map.usq(x + off))),
      ),
    ]}
  ></Cartesian>
</div>

<p>
  Naturally a two unit circles added should give a circle of radius 2. Since {@html _(
    "z = |z| e^{i \\theta}",
  )}, {@html _(
    "z_1 + z_2 = |z_1| e^{i \\theta} + |z_2| e^{i \\theta} = |z_1 + z_2| e^{i 2\\theta+k}",
  )}, with an offset parameter {@html _("k")}, since we can choose which angle
  we want the two squares to meet at (this will be important later). And, a
  square added to a square should give a square of side 2 (the edges look choppy
  because computers are finite precision).
</p>

<LR>
  <Cartesian
    slot="l"
    data={[
      Dataset("circle", Circ.map(Map.ucirc)),
      Dataset("square", Circ.map(Map.usq)),
      Dataset(
        "circle + square",
        Circ.map((x) => Cplx.sum(Map.ucirc(x), Map.usq(x + off * mut[0]))),
      ),
    ]}
  ></Cartesian>

  <div class="f-col j-ar h-100" slot="r">
    {@html __(
      `|z_1| e^{i \\theta} + |z_2| e^{i \\theta}
        \\newline\\quad\\quad
        \\rightarrow (z_1 + z_2 e^{${mut[0]}})  e^{i \\theta}`,
    )}

    <p style="margin: 0 2rem;">
      Offset: 0
      <input type="range" min="0" max="8" step="0.5" bind:value={mut[0]} /> 8
    </p>
  </div>
</LR>

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

  <a
    href="https://en.wikipedia.org/wiki/Cayan_Tower"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Cayan_Tower.jpg/330px-Cayan_Tower.jpg"
      alt="Cayan Tower China"
      style="max-height: min(100vh, 300px);max-width: 100vw"
    />
  </a>
</div>

<LR>
  <Cartesian
    slot="l"
    data={[
      Dataset("circle", Circ.map(Map.ucirc)),
      Dataset("square", Circ.map(Map.usq)),
      Dataset(
        "circle * square",
        Circ.map((x) => Cplx.prod(Map.ucirc(x), Map.usq(x + off * mut[0]))),
      ),
    ]}
  >
    <div slot="caption">
      Offset: 0
      <input type="range" min="0" max="31.41" step="0.25" bind:value={mut[0]} />
      31.41
    </div>
  </Cartesian>

  <div class="f-col j-ar h-100" slot="r">
    {@html __(
      `|z_1| e^{i \\theta} * |z_2| e^{i \\theta} \\newline\\quad\\quad
        \\rightarrow |z_1 * z_2| e^{i 2\\theta+${mut[0]}}`,
    )}

    <p style="margin: 0 2rem;">
      Offset: 0
      <input type="range" min="0" max="31.41" step="0.25" bind:value={mut[0]} />
      31.41
    </p>
  </div>
</LR>

<p>
  The parametrised form of a square is {@html _(
    "z(\\theta) = \\sec(\\theta- \\frac \\pi2 \\lfloor \\frac {4\\theta + \\pi}{2\\pi}\\rfloor )e^{i \\theta}",
  )}, and that of a circle is {@html _("z(\\theta) = e^{i \\theta}")}. So the
  product of a circle and a square is
  {@html _(
    "z(\\theta+k) = \\sec(\\theta - \\frac{\\pi}{2} \\lfloor \\frac{4\\theta + \\pi}{2\\pi} \\rfloor) e^{i 2\\theta + k}",
  )}. I have no idea what is going on here or why it's periodicity is 10&pi;.
</p>

<p>
  Obviously here there is one catch. What output we get depends HEAVILY upon
  what parametrisation we select for our shape. Since all parametrisations only
  promise us that they can complete the shape, they all have different ways of
  going about it.
</p>

I have chosen a continuous parametrisation, of the square, with {@html _(
  "f(\\alpha) = \\sec(\\alpha- \\frac \\pi2 \\lfloor \\frac {4\\alpha + \\pi}{2\\pi}\\rfloor )",
)}, to then give {@html _(
  "(\\cos(\\alpha) f(\\alpha) \\frac X2 +x_0, \\sin(\\alpha) f(\\alpha) \\frac Y2 + y_0) ",
)}, whereas people may often go for a piecewise linear parametrisation of the
square which will trace the shape out differently leading to a different
outcome.

<h4>The Power of a Circle</h4>
We can also raise a circle to the power of a circle, or anything to a circle's power,
or a circle to anything's power.

<LR>
  <Cartesian
    slot="l"
    data={[
      Dataset("circle", Circ.map(Map.ucirc)),
      Dataset(
        "circle (offset)",
        M.lin(off, M["2Pi"] + off, prec).map(Map.ucirc),
      ),
      Dataset(
        "circle ^ circle (offset)",
        Circ.map((x) =>
          Cplx.pow(Map.ucirc(x + off * mut[0]), Map.ucirc(x + off * mut[1])),
        ),
      ),
    ]}
  ></Cartesian>
  <div class="f-col j-ar h-100" slot="r" style="margin: 0 2rem;">
    {@html __(`r_1 e^{i \\theta_1 r_2 e^{i \\theta_2}}
      \\newline\\quad\\quad
      e^{i[(\\theta + ${mut[0]})\\cos\\theta + ${mut[1]}]} e^{ (\\theta + ${mut[0]})\\sin\\theta}`)}

    <div>
      Offset 1: 0
      <input type="range" min="0" max="8" step="0.5" bind:value={mut[0]} />
      8
    </div>
    <div>
      Offset 2: 0
      <input type="range" min="0" max="8" step="0.5" bind:value={mut[1]} />
      8
    </div>
  </div>
</LR>

We're looking at the yellow lines as they vary, the blue and red is just a
reference of our original circles. Even taking {@html _("|z_1|=|z_2|=1")}, it
seems when a circle is raised to a circle, we still lose out on normalisation.
The 2nd term {@html _("e^{ (\\theta + k_1)\\sin\\theta}")} is a damping term, and
the first term {@html _("e^{i[(\\theta + k_1)\\cos\\theta + k_2]}")} is a rotation
term. Now what happens if I take square and raise it to a circle

<LR>
  <Cartesian
    slot="l"
    data={[
      ...(flags[0]
        ? [
            Dataset("square", Circ.map(Map.usq)),
            Dataset("circle", Circ.map(Map.ucirc)),
          ]
        : []),
      Dataset(
        "square ^ circle (offset)",
        Circ.map((x) =>
          Cplx.pow(Map.usq(x + off * mut[0]), Map.ucirc(x + off * mut[1])),
        ),
      ),
    ]}
  ></Cartesian>

  <div class="f-col j-ar h-100" slot="r" style="margin: 0 2rem;">
    <label class="f al-ct" for="show-base">
      Show base circle and square
      <input type="checkbox" bind:checked={flags[0]} id="show-base" />
    </label>

    <div>
      Offset 1: 0
      <input type="range" min="0" max="8" step="0.5" bind:value={mut[0]} />
      8
    </div>
    <div>
      Offset 2: 0
      <input type="range" min="0" max="8" step="0.5" bind:value={mut[1]} />
      8
    </div>
  </div>
</LR>

<h4>Mixing numbers and shapes</h4>
Now that we can add and multiply shapes, we can also mix them with numbers. So we
can take the square root of a square

<Cartesian
  data={[
    Dataset("square", M.lin(0, M["2Pi"], 2 * prec).map(Map.usq)),
    Dataset(
      "square ^ 0.5",
      M.lin(0, M["2Pi"], 2 * prec).map((x) => Cplx.pow(Map.usq(x), [0.5, 0])),
    ),
  ]}
></Cartesian>

Now that is certainly cool. The square root of a square is a half octagon with
curved edges.With some effort it is in fact possible to raise a matrix to the
power of a matrix or even a matrix to a shape. There is no reason we should
limit ourselves to the conventional patterns that happen to be useful to
physicists and engineers.

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
