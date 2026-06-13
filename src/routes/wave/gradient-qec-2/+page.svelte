<script>
    import { Refs, Meta, Definations, define } from "$cpt";
    import { _, __ } from "$lib";
    import Circle from "./circle.svelte";
    import Shop from "./shop.svelte";
</script>

<Meta
    title="Correcting Quantum Errors 2: Staying on the Manifold"
    sub="arXiv:2512.18061"
    desc="Valid codewords live on a curved constraint surface; raw gradient steps keep leaving it, and the fix is to walk the surface itself"
    date="19 December 2025"
    prev="/wave/gradient-qec-1"
></Meta>

<p>
    <a href="/wave/gradient-qec-1">Part 1</a> built a gradient for quantum
    codes: fidelity is a black box evaluated by running the encode → noise →
    recover → decode pipeline, each complex coefficient {_`a_i = x_i + i y_i`} is
    two real knobs, each knob gives a slope by finite differences. The update that
    falls out steps every coefficient at once:
</p>

{__`
a_i \;\rightarrow\; a_i - \eta\left(
\frac{\partial L}{\partial x_i} + i\,\frac{\partial L}{\partial y_i}
\right)
`}

<p>
    That update treats the 128 real numbers of a {_`[[5,1,3]]`} code as free. They
    are not. A pair of codewords is only a code if each has unit length and the two
    are perpendicular,
</p>

{__`
\| \, |0_L\rangle \, \| = 1,
\qquad
\| \, |1_L\rangle \, \| = 1,
\qquad
\langle 0_L | 1_L \rangle = 0
`}

<p>
    This section is about how we maintain the physics of the codewords and the
    space by using Riemannian geometry to stay on the constraint surface.
</p>

<Definations
    ignores="j,k,QR"
    list={[
        define(
            "F",
            "fidelity: the score of a code against a noise model, between 0 and 1 when the codewords are orthonormal; 0.783 for the clean [[5,1,3]] code under 5% isotropic Pauli noise",
        ),
        define(
            "a",
            "one codeword coefficient, a complex number $a_i = x_i + i y_i$: two real knobs",
        ),
        define(
            "x",
            "real part of a coefficient $a_i = x_i + i y_i$; in the 2-D toy the horizontal coordinate of the point $q = (x, y)$",
        ),
        define(
            "y",
            "imaginary part of a coefficient $a_i = x_i + i y_i$; in the 2-D toy the vertical coordinate of $q = (x, y)$",
        ),
        define("η", "learning rate; 10⁻³ in the headline run"),
        define(
            "q",
            "the toy's variable: a point (x, y) in the plane, constrained to the unit circle x² + y² = 1",
        ),
        define("r", "distance from the origin, r = ‖q‖; the circle is r = 1"),
        define(
            "L",
            "in $\\partial L/\\partial x$, the loss being minimised (1 − F); as the subscript in $|0_L\\rangle, |1_L\\rangle$ it marks the logical codewords",
        ),
        define(
            "f",
            "the toy score $f(x, y) = x + 2y$, a stand-in for fidelity; its gradient is the constant arrow (1, 2)",
        ),
        define(
            "g",
            "a gradient vector: $g_{tan}$ the tangent part on the circle, $g_w$ the slope vector for codeword $w$",
        ),
        define("w", "selects which codeword: $w \\in \\{0_L, 1_L\\}$"),
        define(
            "n",
            "number of qudits; a pure state carries $\\mathcal{O}(d^n)$ coefficients",
        ),
        define(
            "d",
            "levels per qudit (qubit $d = 2$, qutrit $d = 3$)",
        ),
        define(
            "p",
            "per-qubit error probability: an X, a Y and a Z flip each with probability p",
        ),
        define("N", "the noise channel acting on the physical qubits"),
        define(
            "R",
            "the recovery operation, frozen throughout: the Petz map of the clean code",
        ),
        define("δ", "finite-difference probe size, 10⁻⁴"),
        define(
            "ε",
            "damage size in the repair-shop widget: how far the codewords are shoved before descent repairs them",
        ),
    ]}
/>

<h3>Four equations, 124 directions</h3>

<p>
    Count what the constraints remove. Two codewords of 32 complex coefficients
    are 128 real numbers. The two norm conditions are one real equation each.
    The overlap {_`\langle 0_L | 1_L \rangle`} is a complex number, so forcing it
    to zero is two real equations. Four equations in 128 unknowns leave a surface
    with {_`128 - 4 = 124`} dimensions, curved and sitting inside the flat 128-dimensional
    space the optimiser actually moves in.
</p>

<p>
    A smooth constraint surface like this is called a <b>manifold</b>: zoom in
    far enough at any point and it looks flat, and that local flat approximation
    is called the tangent space at the point. The simplest example is already
    here: a single normalised codeword is 64 real numbers with
    {_`\sum_i (x_i^2 + y_i^2) = 1`}, a sphere in 63 dimensions. The full
    feasible set, pairs of orthonormal vectors, is a Stiefel manifold.
</p>
<p>
    Traditional Gradient descent generates points wherever the arithmetic lands,
    whereas optimising on the surface closes a critical gap: every iterate is a
    valid code, so every score is a real fidelity.
</p>

<h3>A circle to think with</h3>

<p>
    Every failure and every fix already happens in two dimensions, where it can
    be drawn. Take a point {_`q = (x, y)`} constrained to the unit circle
    {_`x^2 + y^2 = 1`} (the manifold) and score it with {_`f(x, y) = x + 2y`}.
    The two slopes are constants, so the gradient is one fixed arrow:
</p>

{__`
\nabla f = \left(\frac{\partial f}{\partial x},\ \frac{\partial f}{\partial y}\right)
= (1,\ 2)
\quad \text{everywhere}
`}

<p>
    And {_`f = q \cdot (1, 2)`} is a dot product, maximised on the circle by the
    unit vector along {_`(1, 2)`}: {_`q^* = (1, 2)/\sqrt{5} = (0.447,
    0.894)`}, scoring {_`f(q^*) = \sqrt{5} = 2.236`}, the length of {_`(1,
    2)`}. That number plays the role of "fidelity 1": the best score any
    <i>valid</i> point can have.
</p>

<p>
    Start at {_`q = (1, 0)`}, where {_`f = 1`}, and take a raw gradient step
    with {_`\eta = 0.2`}:
</p>

{__`
q' = (1, 0) + 0.2\,(1, 2) = (1.2,\ 0.4),
\qquad
r = \sqrt{1.2^2 + 0.4^2} = 1.265
`}

<p>
    One step and the point is 26% off the circle, reading {_`f = 2.0`}; a second
    step reads {_`f(1.4, 0.8) = 3.0`}, above the best any valid point can score.
    We can see immidiately score detaches from the physics.
</p>

<p>
    Two geometric tools fix this, and both are one line of algebra on the
    circle. First, the <b>tangent space</b>: at a point {_`q`} on the circle, the
    directions that stay on the circle to first order are the ones perpendicular
    to {_`q`}. Project the gradient onto them by subtracting its radial part:
</p>

{__`
g_{\text{tan}} = \nabla f - (\nabla f \cdot q)\, q
= (1,2) - 1 \cdot (1, 0) = (0,\ 2)
\quad \text{at } q = (1,0)
`}

<p>
    Stepping along {_`(0, 2)`} instead of {_`(1, 2)`} gives {_`q' = (1,\
    0.4)`}, with {_`r = \sqrt{1.16} = 1.077`}. Better, but still off the circle:
    the tangent line is straight and the circle curves away from it, so a
    straight step of size {_`\eta`} leaks off the manifold by order
    {_`\eta^2`}. No direction fixes curvature, hence the second tool. A
    <b>retraction</b> pulls the landed point back onto the manifold.
</p>

<blockquote>
    While in the general case a retraction implies taking a {_`QR`} decomposition,
    for a sphere (or an n-ball) it reduces simply to division by the norm:
</blockquote>

{__`
q'' = \frac{(1,\ 0.4)}{1.077} = (0.928,\ 0.371),
\qquad
f(q'') = 1.671
`}

<p>
    That 1.671 used both tools: project, then step, then retract. Is the
    projection even needed, or does the retraction alone do the job? Test it by
    retracting the raw step from before, the one that landed at {_`(1.2, 0.4)`}
    with {_`r = 1.265`}:
</p>

{__`
\frac{(1.2,\ 0.4)}{1.265} = (0.949,\ 0.316),
\qquad
f = 0.949 + 2 \cdot 0.316 = 1.581
`}

<p>
    Same start, same {_`\eta`}, worse score: 1.581 against 1.671. The raw step
    spent part of its length pushing radially outward, and the retraction
    deleted that part on landing. Projecting first puts the whole step into a
    direction that survives, so nothing is wasted. The widget below races all
    three rules from one start; at {_`q = (1, 0)`}, {_`\eta = 0.2`} it reproduces
    every number above.
</p>

<Circle></Circle>

<h3>The same three moves, in 128 dimensions</h3>

<p>
    Nothing in project, step, retract cared that the circle was two-dimensional.
    For codes the point is the codeword pair, the sphere becomes the Stiefel
    manifold, and the three moves run verbatim. The gradient from part 1 arrives
    as one slope vector {_`g_w`} per codeword.
    <b>Project</b>: the components of {_`g_w`} along the codewords themselves spend
    their length changing norms and overlap rather than fidelity, so subtract both:
</p>

{__`
\tilde g_w = g_w
\;-\; |0_L\rangle\langle 0_L | g_w \rangle
\;-\; |1_L\rangle\langle 1_L | g_w \rangle,
\qquad w \in \{0_L, 1_L\}
`}

<p>
    <b>Step</b>: {_`a_i \rightarrow a_i + \eta\, \tilde g_i`} for every coefficient
    at once.
</p>

<p>
    <b>Retract</b>: divide {_`|0_L\rangle`} by its norm, subtract from
    {_`|1_L\rangle`} its component along the new {_`|0_L\rangle`}, divide that
    by its norm. Two norm divisions and one subtraction, one per line below,
    worked on a pair that has drifted off the manifold:
</p>

{__`
\begin{aligned}
|0_L\rangle = (1.05,\ 0.10):\quad
& \|\,|0_L\rangle\,\| = 1.055,
&& |0_L\rangle \rightarrow (0.995,\ 0.095)\\[2pt]
|1_L\rangle = (0.12,\ 0.98):\quad
& \langle 0_L | 1_L \rangle = 0.212,
&& |1_L\rangle - 0.212\,|0_L\rangle = (-0.091,\ 0.960)\\[2pt]
& \|\,(-0.091,\ 0.960)\,\| = 0.964,
&& |1_L\rangle \rightarrow (-0.095,\ 0.995)
\end{aligned}
`}

<p>
    The result is orthonormal. Every iterate is a valid code, every reported
    score is then a real valid fidelity, by its very structure.
</p>

<h3>The repair shop</h3>

<p>
    The widget below runs the full machinery at small scale: the three-qubit
    repetition code, isotropic Pauli noise of strength {_`p`} per error type, probes
    at {_`\delta = 10^{-4}`}, ascent on fidelity. The damage slider shoves every
    coefficient by a random
    {_`\varepsilon`} and re-orthonormalises, wrecking the code while the recovery
    still expects the clean one; descent then repairs it. Both modes compute the
    identical gradient; the only difference is project and retract.
</p>

<Shop></Shop>

<xxx />

<h3>Any evaluator will do</h3>

<p>
    Nothing in the loop ever asked what fidelity <i>is</i>. The projection and
    the retraction are plain linear algebra, and {_`\mathcal{F}`} only ever appears
    as "evaluate, twice per knob". So the evaluator is swappable: Monte Carlo sampling
    for codes too large to simulate exactly, tensor-network estimates, or direct
    fidelity estimation on hardware, where descent tunes codewords against the device's
    true noise, including what no model contains. The cost is dimension: pure states
    on {_`n`} qudits of dimension
    {_`d`} carry {_`\mathcal{O}(d^n)`} coefficients, so the knob count grows exponentially
    and million-qubit codes are out of reach. The realistic targets are small codes
    tailored to measured, lopsided noise, the regime where hand-designed codes leave
    the most fidelity on the table.
</p>

<Refs
    list={[
        [
            "Correcting quantum errors one gradient step at a time (Seksaria, Prabhakar)",
            "https://arxiv.org/abs/2512.18061",
        ],
        [
            "Perfect Quantum Error Correcting Code (Laflamme, Miquel, Paz, Zurek)",
            "https://arxiv.org/abs/quant-ph/9602019",
        ],
        [
            "Reversing quantum dynamics with near-optimal quantum and classical fidelity (Barnum, Knill)",
            "https://arxiv.org/abs/quant-ph/0004088",
        ],
        [
            "Optimization Algorithms on Matrix Manifolds (Absil, Mahony, Sepulchre)",
            "https://press.princeton.edu/books/hardcover/9780691132983/optimization-algorithms-on-matrix-manifolds",
        ],
        [
            "Direct Fidelity Estimation from Few Pauli Measurements (Flammia, Liu)",
            "https://arxiv.org/abs/1104.4695",
        ],
    ]}
></Refs>
