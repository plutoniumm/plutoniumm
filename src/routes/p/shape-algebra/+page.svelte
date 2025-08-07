<script>
    import { Image, Link, Meta, Scatter, Definations, define } from "$cpt";
    import { _, __, Dataset } from "$lib";
    import LR from "$cpt/LR.svelte";
    import M from "$lib/math";
    const { Map, Rng, Cplx } = M;
    import Frame from "./frame.svelte";

    let prec = 50;
    let off = 0.2 * (prec / 50);
    let Circ = Rng.circ(prec);
    let mut = [0, 0];
    let flags = [true, true];
</script>

<Meta
    title="The square root of a Square"
    sub="Recreational Math #001"
    desc="Algebra and 'Arithmetic' on Shapes"
    date="18 April 2025"
    wallpaper="aauqrqfoos"
></Meta>

<Definations
    generics={{
        C: ["z", "ib"],
        fXX: ["f"],
        R: ["a", "b", "x", "y", "X", "Y"],
        Circle: ["α", "θ"],
        Unit: ["r"],
    }}
    list={[define("k", "Temporary Variable, positive integer")]}
/>

I had some time one evening, so I decided to play around with the idea of doing
algebra but with shapes. What does it mean to add two shapes? Some results are
intuitive; a square of side 5 + a square of side 10 should be a square of side
15. But what happens when we add a square and a circle? Or raise a circle to the
power of a circle.

<h4>Complex Numbers</h4>
We start by using complex numbers as our base. It should be trivial to see we'll
run into issues very fast if we try to manipulate equations directly. We can ease
our workload by working with complex numbers, with which, each point in 2D space,
is still just a number. And once something is a number it can be added, multiplied,
and divided.

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
    <text x="53.2" y="108.3" font-size="8.5" transform="translate(-18 1.8)">
        arg(z)
    </text>
    <path fill="none" stroke-dasharray="3 3" d="M73.4 76.8v36.6m.5-36.5h-53" />
    <text x="62.7" y="122" transform="translate(-18 2)">a</text>
    <text x="27.9" y="92.8" transform="translate(-18 2)">b</text>
    <text x="95.7" y="77" transform="translate(-18 2)">z = a + b i</text>
</svg>

<p>
    Each number is of the form {_`z = a + ib = |z| e^{i\ \text{arg}(z)} = r e^{i\theta}`},
    where {_`i = \sqrt{-1}`}. Then just use a bunch of points for each shape.
    For example, a a circle can just be a 100 complex points
</p>

<Scatter data={Dataset("circle", Circ.map(Map.ucirc))}></Scatter>

<p>
    So, if a shape is just a collection of points, and each point is just a
    complex number, then we can add, subtract, and multiply points.
</p>

<h4>Adding and Multiplying Shapes</h4>
<p>
    We can add shapes by adding the points that make them up. So a circle of
    radius 1 + another and a square + another square have some obvious results.
</p>

<div class="f j-bw">
    <Scatter
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
    ></Scatter>

    <Scatter
        data={[
            Dataset("square", Circ.map(Map.usq)),
            Dataset(
                "square (offset)",
                M.lin(off, M["2Pi"] + off, prec).map(Map.usq),
            ),
            Dataset(
                "square + square (offset)",
                Circ.map((x) => Cplx.sum(Map.usq(x), Map.usq(x + off))),
            ),
        ]}
    ></Scatter>
</div>

<p>
    Naturally a two unit circles added should give a circle of radius 2. It may
    be one's primary instinct to try to add their areas first. But that is not
    how we're defining addition here. Addition can be an abstract operation
    defined however we want to for fun.
</p>

<p>
    Since {_`z = r e^{i \theta}`}, {_`z_1 + z_2 = r_1 e^{i \theta} + r_2 e^{i \theta} = (r_1 + r_2) e^{i 2\theta+k}`},
    with an offset parameter {_`k`}, since we can choose which angle we want the
    two squares to meet at (this will be important later). And, a square added
    to a square should give a square of side 2 (the edges look choppy because
    computers are finite precision).
</p>

<LR>
    <Scatter
        slot="l"
        data={[
            Dataset("circle", Circ.map(Map.ucirc)),
            Dataset("square", Circ.map(Map.usq)),
            Dataset(
                "circle + square",
                Circ.map((x) =>
                    Cplx.sum(Map.ucirc(x), Map.usq(x + off * mut[0])),
                ),
            ),
        ]}
    ></Scatter>

    <div class="f-col j-ar h-100" slot="r">
        {__`r_1 e^{i \theta} + r_2 e^{i \theta}
        \newline\quad\quad
        \rightarrow (z_1 + z_2 e^{${mut[0]}})  e^{i \theta}`}

        <p style="margin: 0 2rem;">
            Offset: 0
            <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                bind:value={mut[0]}
            /> 8
        </p>
    </div>
</LR>

<div class="f j-ar">
    <div>
        <p>
            We get a twisting squircle. Sweep the offset from 0 to 8 and watch
            the squircle twist around 45&deg;. This can be imagined as a ring
            that twists around the cylinder as it goes down in 3d. just like
            this building. With the additional change of also getting slimmer in
            its waist as it goes.
        </p>

        <p>
            So if we can add shapes, we can also multiply them. So a circle
            times a circle
        </p>
    </div>

    <Image
        href="https://en.wikipedia.org/wiki/Cayan_Tower"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Cayan_Tower.jpg/330px-Cayan_Tower.jpg"
        alt="Wikipedia: Cayan Tower, China"
        scale="2"
    ></Image>
</div>

<LR>
    <Scatter
        slot="l"
        data={[
            Dataset("circle", Circ.map(Map.ucirc)),
            Dataset("square", Circ.map(Map.usq)),
            Dataset(
                "circle * square",
                Circ.map((x) =>
                    Cplx.prod(Map.ucirc(x), Map.usq(x + off * mut[0])),
                ),
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
                bind:value={mut[0]}
            />
            31.41
        </div>
    </Scatter>

    <div class="f-col j-ar h-100" slot="r">
        {__`r_1 e^{i \theta} * r_2 e^{i \theta} \newline\quad\quad
        \rightarrow (r_1 * r_2) e^{i 2\theta+${mut[0]}}`}

        <p style="margin: 0 2rem;">
            Offset: 0
            <input
                type="range"
                min="0"
                max="31.41"
                step="0.25"
                bind:value={mut[0]}
            />
            31.41
        </p>
    </div>
</LR>

<p>
    The parametrised form of a square is {_`z(\theta) = \sec(\theta- \frac \pi2 \lfloor \frac {4\theta + \pi}{2\pi}\rfloor )e^{i \theta}`},
    and that of a circle is {_`z(\theta) = e^{i \theta}`}. So, the product of a
    circle and a square is
    {_`z(\theta+k) = \sec(\theta - \frac{\pi}{2} \lfloor \frac{4\theta + \pi}{2\pi} \rfloor) e^{i 2\theta + k}`}.
    I have no idea what is going on here or why it's periodicity is 10&pi;.
</p>

<p>
    Obviously, here, there is one catch. What output we get depends HEAVILY upon
    what parametrisation we select for our shape. Since all parametrisations
    only promise that they can complete the shape, they all have different ways
    of going about it.
</p>

I have chosen a continuous parametrisation, of the square, with {_`f(\alpha) = \sec(\alpha- \frac \pi2 \lfloor \frac {4\alpha + \pi}{2\pi}\rfloor )`},
to then give {_`(\cos(\alpha) f(\alpha) \frac X2 +x_0, \sin(\alpha) f(\alpha) \frac Y2 + y_0) `},
whereas people may often go for a piecewise linear parametrisation of the
square, which will trace the shape out differently, leading to a different
outcome.

<h4>The Power of a Circle</h4>
We can also raise a circle to the power of a circle, or anything to a circle's power,
or a circle to anything's power.

<LR>
    <Scatter
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
                    Cplx.pow(
                        Map.ucirc(x + off * mut[0]),
                        Map.ucirc(x + off * mut[1]),
                    ),
                ),
            ),
        ]}
    ></Scatter>
    <div class="f-col j-ar h-100" slot="r" style="margin: 0 2rem;">
        {__`r_1 e^{i \theta_1 r_2 e^{i \theta_2}}
      \newline\quad\quad
      e^{i[(\theta + ${mut[0]})\cos\theta + ${mut[1]}]} e^{ (\theta + ${mut[0]})\sin\theta}`}

        <div>
            Offset 1: 0
            <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                bind:value={mut[0]}
            />
            8
        </div>
        <div>
            Offset 2: 0
            <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                bind:value={mut[1]}
            />
            8
        </div>
    </div>
</LR>

We're looking at the yellow lines as they vary, the blue and red is just a
reference to our original circles. Even taking {_`r_1=r_2=1`}, it seems when a
circle is raised to a circle, we still lose out on normalisation. The 2nd term {_`e^{ (\theta + k_1)\sin\theta}`}
is a damping term, and the first term {_`e^{i[(\theta + k_1)\cos\theta + k_2]}`}
is a rotation term. Now, what happens if I take a square and raise it to a circle

<LR>
    <Scatter
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
                    Cplx.pow(
                        Map.usq(x + off * mut[0]),
                        Map.ucirc(x + off * mut[1]),
                    ),
                ),
            ),
        ]}
    ></Scatter>

    <div class="f-col j-ar h-100" slot="r" style="margin: 0 2rem;">
        <label class="f al-ct" for="show-base">
            Show base circle and square
            <input type="checkbox" bind:checked={flags[0]} id="show-base" />
        </label>

        <div>
            Offset 1: 0
            <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                bind:value={mut[0]}
            />
            8
        </div>
        <div>
            Offset 2: 0
            <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                bind:value={mut[1]}
            />
            8
        </div>
    </div>
</LR>

<h4>Mixing numbers and shapes</h4>
Now that we can add and multiply shapes, we can also mix them with numbers. So we
can take the square root of a square

<Scatter
    data={[
        Dataset("square", M.lin(0, M["2Pi"], 2 * prec).map(Map.usq)),
        Dataset(
            "square ^ 0.5",
            M.lin(0, M["2Pi"], 2 * prec).map((x) =>
                Cplx.pow(Map.usq(x), [0.5, 0]),
            ),
        ),
    ]}
></Scatter>

Now that is certainly cool. The square root of a square is a half-octagon with
curved edges. With some effort, it is, in fact, possible to raise a matrix to
the power of a matrix or even a matrix to a shape. There is no reason we should
limit ourselves to the conventional patterns that happen to be useful to
physicists and engineers.

<h4>Try it</h4>
Try to see what happens when you take your own image (requires webcam), and apply
some transformations to it. Any equation in the standard functions in a closed form
should work. As an example, I've shown {_`z^2 + 2`}, try something like {_`\sin(z)`}.

<Frame />

<h4>References</h4>
<ul>
    <li>
        <Link href="https://www.youtube.com/watch?v=iLkOBkWUDkM">
            Using shapes as exponents (video)
        </Link>
    </li>
</ul>

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
