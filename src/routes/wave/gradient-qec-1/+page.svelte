<script>
    import { Refs, Meta, Definations, define, Accordion } from "$cpt";
    import { _, __ } from "$lib";
    import Quotient from "./quotient.svelte";
    import Climb from "./climb.svelte";
</script>

<Meta
    title="Correcting Quantum Errors 1: Complex Gradients"
    sub="arXiv:2512.18061"
    desc="Fidelity is a black-box function of complex numbers, and the complex derivative refuses to exist; two probes per coefficient fix that"
    date="19 December 2025"
    next="/wave/gradient-qec-2"
></Meta>

<p>
    Nearly every quantum error-correcting code in use was designed by hand: pick
    an algebraic structure, derive the codewords, prove a distance. The results
    are clean objects, implicitly tuned for clean noise in which every kind of
    error is equally likely. Hardware is not clean. A real device might flip
    phases ten times more often than bits, and a hand-made code does not know
    that.
</p>

<p>
    A quantum code is a short list of complex numbers; its quality against a
    fixed noise model is a single number, the fidelity. So fidelity is a
    function of the coefficients, and functions can be climbed: nudge each
    coefficient, re-measure the score, step uphill, repeat. Two things break on
    the way. Complex numbers refuse the usual notion of derivative, and naive
    steps walk the codewords out of quantum mechanics entirely. This part is
    about the first problem, and it ends with a gradient that passes every check
    thrown at it.
</p>

<Definations
    ignores="x,y,z,i,j,k,n,c,u,v,q,f,g,A,B,I,L,P,Y,tan,ρ,σ,ϕ,ψ,Δ,ˉ"
    list={[
        define(
            "p",
            "per-qubit error chances: an X flip with probability $p_x$, a Y with $p_y$, a Z with $p_z$",
        ),
        define(
            "F",
            "fidelity: the score of a code against a noise model, between 0 and 1; how much of the logical qubit survives the encode → noise → recover → decode round trip",
        ),
        define(
            "N",
            "the noise channel: what the hardware does to the physical qubits, here random X, Y, Z flips",
        ),
        define(
            "R",
            "the recovery operation, fixed before optimisation starts; here the Petz map",
        ),
        define(
            "a",
            "one codeword coefficient, a complex number $a_i = x_i + i y_i$: two real knobs",
        ),
        define(
            "δ",
            "probe size for finite differences: nudge a coefficient by δ, re-measure, divide. 0.01 in the worked examples, 10⁻⁴ in the full runs",
        ),
        define(
            "θ",
            "direction of a probe or step inside one coefficient's complex plane, measured from the real axis",
        ),
        define(
            "S",
            "the steepest available slope, ‖∇f‖, the length of the gradient vector",
        ),
        define("η", "learning rate: how far one gradient update moves"),
    ]}
/>

<h3>Breaking a qubit</h3>

<p>
    A qubit is a pair of complex amplitudes, {_`c_0|0\rangle + c_1|1\rangle`}
    with {_`|c_0|^2 + |c_1|^2 = 1`}. Three basic accidents can happen to it: an
    {_`X`} error swaps the amplitudes, a {_`Z`} error flips the sign of {_`c_1`},
    and a {_`Y`} error does both at once. The noise model throughout is the Pauli
    channel: in each round every physical qubit independently suffers an {_`X`}
    with probability {_`p_x`}, a {_`Y`} with {_`p_y`}, a {_`Z`} with {_`p_z`},
    and survives untouched otherwise.
</p>

<p>
    The oldest defence is repetition. Quantum states cannot be copied, but a
    state can be spread across three qubits, {_`c_0|000\rangle +
    c_1|111\rangle`}. The two strings {_`|000\rangle`} and {_`|111\rangle`} are the
    <b>codewords</b>, written {_`|0_L\rangle`} and {_`|1_L\rangle`} for "logical
    zero" and "logical one". A single bit flip ({_`c_0|010\rangle +
    c_1|101\rangle`}, say) is outvoted by the other two qubits, and the vote can
    be taken without ever reading the amplitudes themselves. With flip
    probability {_`p = 0.1`} per qubit:
</p>

{__`
\begin{aligned}
P(\text{no flip}) &= (1-p)^3 &&= 0.9^3 &&= 0.729\\
P(\text{one flip}) &= 3p(1-p)^2 &&= 3 \times 0.1 \times 0.81 &&= 0.243\\
P(\text{vote fails}) &= 3p^2(1-p) + p^3 &&= 0.027 + 0.001 &&= 0.028
\end{aligned}
`}

<p>
    The first two rows are handled correctly, so a 10% error rate becomes a 2.8%
    error rate. The catch: a {_`Z`} error on any one qubit turns {_`c_0|000\rangle
    + c_1|111\rangle`} into {_`c_0|000\rangle - c_1|111\rangle`}, and the vote
    sees nothing wrong, because both strings are still unanimous. Codes that
    correct every single-qubit error exist; the smallest is the {_`[[5,1,3]]`}
    code: five physical qubits holding one logical qubit, codewords made of sixteen
    five-bit strings each with carefully matched signs.
</p>

<p>
    One more ingredient. After the noise acts, a <b>recovery</b> operation
    {_`\mathcal{R}`} does the fixing, the generalisation of "take the vote and flip
    the minority qubit back". The recovery here is chosen once and then frozen: the
    Petz map, a general-purpose recovery written down directly from the code and
    the noise channel, and provably close to the best possible one. Freezing it matters:
    any improvement found later is an improvement of the <i>code</i>, not an
    artifact of a cleverer decoder.
</p>

<Accordion title="The Petz map">
    <p>
        Given the state {_`\rho`} being protected (for a code, the average of the
        codeword states) and the noise channel {_`\mathcal{N}`}, the Petz map is
    </p>
    {__`
    \mathcal{R}(\sigma) = \rho^{1/2}\, \mathcal{N}^{\dagger}\!\left(
    \mathcal{N}(\rho)^{-1/2}\,\sigma\,\mathcal{N}(\rho)^{-1/2}
    \right) \rho^{1/2}
    `}
    <p>
        Read it as a quantum version of Bayes' rule: {_`\sigma`} is the noisy evidence,
        {_`\rho`} is the prior, and the map answers "which input was most plausibly
        responsible for this output". It recovers the reference state exactly, {_`\mathcal{R}(\mathcal{N}(\rho)) = \rho`},
        and Barnum and Knill showed it is never far from the best possible
        recovery for any state in the code space.
    </p>
</Accordion>

<h3>A code is a list of numbers</h3>

<p>
    Five qubits live in a space with {_`2^5 = 32`} basis states, so a codeword is
    a list of 32 complex amplitudes:
</p>

{__`
|0_L\rangle = a_0|00000\rangle + a_1|00001\rangle + \cdots + a_{31}|11111\rangle
`}

<p>
    A code for one logical qubit is two such lists, {_`|0_L\rangle`} and {_`|1_L\rangle`}:
    64 complex coefficients, 128 real numbers, and that is almost all of quantum
    error correction: the algebra of code design is a very complicated way of
    choosing 128 numbers.
</p>

<p>
    And any such choice can be scored. Encode with the codewords, apply the
    noise {_`\mathcal{N}`}, apply the frozen recovery {_`\mathcal{R}`}, decode,
    and ask what fraction of the original quantum information survived. That
    score is the <b>fidelity</b>
    {_`\mathcal{F}`}, one real number between 0 and 1. For the {_`[[5,1,3]]`} code
    under isotropic 5% Pauli noise with Petz recovery it comes out at {_`\mathcal{F} = 0.783`}.
    How it is computed does not matter here: it is a black box, fillable by
    exact simulation, Monte Carlo sampling, or direct estimation on hardware.
</p>

<p>
    So code design collapses to one sentence: find the 128 numbers that maximise {_`\mathcal{F}`}.
    That is hill climbing in 128 dimensions, not physics, and it needs one tool,
    the gradient, the direction of steepest ascent. With no formula to
    differentiate, the gradient has to come from probing.
</p>

<xxx />

<h3>Slopes without formulas</h3>

<p>
    The slope of any function at a point is measured the same way: move a
    little, see how much the output moved, divide. For one real knob {_`x`} and a
    small probe {_`\delta`},
</p>

{__`
\text{slope} = \lim_{\delta \rightarrow 0} \frac{f(x + \delta) - f(x)}{\delta} \approx \frac{f(x + \Delta) - f(x)}{\Delta}
`}

<p>
    This is a finite difference, and it needs nothing but the ability to
    evaluate {_`f`} twice.
</p>

<h3>The derivative that does not exist</h3>

<p>
    Each coefficient {_`a_i`} is complex, and the complex derivative is a stricter
    object than the real one. The difference quotient at a point {_`z_0`}
    can probe from any direction {_`\theta`} in the plane,
</p>

{__`
q(\theta) = \frac{f(z_0 + \delta e^{i\theta}) - f(z_0)}{\delta e^{i\theta}}
`}

<p>
    and for "the derivative" to exist, every direction must report the same
    value. Try that on the simplest absolute-value function, {_`f(z) = |z|^2`},
    at {_`z_0 = 1`}, with {_`\delta = 0.01`}. Along the real axis ({_`\theta =
    0`}):
</p>

{__`
q(0) = \frac{f(1.01) - f(1)}{0.01} = \frac{1.0201 - 1}{0.01} = 2.01
`}

<p>Along the imaginary axis ({_`\theta = 90^\circ`}):</p>

{__`
q(90^\circ) = \frac{f(1 + 0.01i) - f(1)}{0.01i} = \frac{0.0001}{0.01i} = -0.01i
`}

<p>
    Two directions, two answers, 2 versus 0, so no single number deserves the
    name "the derivative at 1". Write {_`f = u + iv`} with {_`u`}, {_`v`} real: the
    requirement that all directions agree is the Cauchy-Riemann conditions,
</p>

{__`
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y},
\qquad
\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
`}

<p>
    For a real-valued function {_`v = 0`} everywhere, so both partial derivatives
    of {_`u`} must vanish: the only real-valued functions of a complex variable with
    a complex derivative are constants. Fidelity is real-valued and not constant.
    Case closed.
</p>

<Quotient></Quotient>

<p>
    The widget runs the same {_`f(z) = |z|^2`}: sweep {_`\theta`} and the quotient
    orbits a circle of diameter {_`2|z_0|`}. Switch to {_`f(z) = z^2`}
    and the dot freezes at {_`2 z_0`}: that stillness is a derivative, and
    fidelity does not have it.
</p>

<h3>Two knobs per coefficient</h3>

<p>
    The fix is a century old: Wirtinger calculus replaces the one derivative
    with a pair,
</p>

{__`
\frac{\partial}{\partial z} = \frac{1}{2}\left(\frac{\partial}{\partial x} - i\,\frac{\partial}{\partial y}\right),
\qquad
\frac{\partial}{\partial \bar{z}} = \frac{1}{2}\left(\frac{\partial}{\partial x} + i\,\frac{\partial}{\partial y}\right)
`}

<p>
    and a nonzero {_`\bar{z}`} component is the Cauchy-Riemann failure; evaluated
    on fidelity it comes out nonzero, which certifies the non-analyticity rather
    than assuming it. The practical version is simpler: {_`a_i = x_i + i y_i`}
    is two real knobs, probed individually:
</p>

{__`
\frac{\partial f}{\partial x_i} = \frac{f(a_i + \delta) - f(a_i)}{\delta},
\qquad
\frac{\partial f}{\partial y_i} = \frac{f(a_i + i\delta) - f(a_i)}{\delta}
`}

<p>
    Same coefficient, two nudges: one along the real axis, one along the
    imaginary axis. Consider an example small enough to check by hand: one
    complex knob {_`a`} controlling the normalised state
</p>

{__`
|\phi(a)\rangle = \frac{|0\rangle + a\,|1\rangle}{\sqrt{1 + |a|^2}}
`}

<p>
    and a fixed target {_`|\psi\rangle = (|0\rangle + (2+i)|1\rangle)/\sqrt{6}`},
    the {_`a = 2 + i`} member of the same family. The score is the squared overlap
    between the two (fidelity),
</p>

{__`
f(a) = \big|\langle \psi | \phi(a) \rangle\big|^2
= \frac{\big|1 + (2 - i)\,a\big|^2}{6\,(1 + |a|^2)}
`}

<p>
    where the {_`2 - i`} in the numerator is the target's {_`2 + i`} conjugated by
    the bra. The score peaks at {_`f = 1`} when {_`a = 2 + i`}. Start the
    optimiser at {_`a = 0`}, knowing nothing, and probe with {_`\delta = 0.01`}:
</p>

{__`
\begin{aligned}
f(0) &= \tfrac{1}{6} &&= 0.1667\\[2pt]
f(0 + \delta) &= \frac{|1.02 - 0.01i|^2}{6 \times 1.0001}
= \frac{1.0405}{6.0006} &&= 0.1734\\[2pt]
f(0 + i\delta) &= \frac{|1.01 + 0.02i|^2}{6 \times 1.0001}
= \frac{1.0205}{6.0006} &&= 0.1701
\end{aligned}
`}

{__`
\frac{\partial f}{\partial x} = \frac{0.1734 - 0.1667}{0.01} = 0.67,
\qquad
\frac{\partial f}{\partial y} = \frac{0.1701 - 0.1667}{0.01} = 0.34
`}

<p>
    A slope is only useful to move along, and a move is one direction in the
    coefficient's plane. The probes report 0.67 per unit along the real axis and
    0.34 along the imaginary, but the axes are just the two directions that got
    probed; the best direction mixes them. To first order, a step at angle
    {_`\theta`} collects both rates in proportion,
</p>

{__`
\partial_\theta f = \cos(\theta)\,\frac{\partial f}{\partial x} + \sin(\theta)\,\frac{\partial f}{\partial y}
`}

<p>
    and a rate of the form {_`A\cos\theta + B\sin\theta`} has a known maximum: magnitude
    {_`\sqrt{A^2 + B^2}`}, reached at {_`\theta = \tan^{-1}(B/A)`}. No search
    over angles needed. For the toy:
</p>

{__`
S = \sqrt{0.67^2 + 0.34^2} = 0.75,
\qquad
\theta = \tan^{-1}\!\left(\frac{0.34}{0.67}\right) = 27^\circ
`}

<p>
    And {_`\tan 27^\circ \approx 0.5`} is two units real per one imaginary, the direction
    of {_`2 + i`}: straight at a target neither probe looked at. The widget
    below runs the same loop; at {_`a = 0`} it reproduces the numbers above (unrounded,
    {_`S`} = 0.754 at {_`\theta = 26.8^\circ`}), and the scrubber walks the
    climb.
</p>

<Climb></Climb>

<ul>
    <li>
        Scrub to step 10: the trail runs dead straight up the {_`2 + i`} ray, f reads
        0.996, and the arrows have shrunk to almost nothing: the top of a hill, as
        a gradient sees it.
    </li>
    <li>
        Set {_`\delta = 0.2`}: the measured slope at {_`a = 0`} reads 0.769 against
        the exact 0.667, a visible finite-difference bias. At {_`\delta
        = 0.001`} the two agree to three digits. This is the probe-size convergence
        test in miniature.
    </li>
    <li>
        Drag the start to {_`a = -1 + i`}: the first step points straight up ({_`\theta = 90°`})
        and the trail arcs home, re-aimed at every step. The gradient is local;
        the straight road from {_`a = 0`} belonged to that start, not to the method.
    </li>
</ul>

<p>
    A full code does this for every coefficient {_`a_0, \ldots, a_n`} and collects
    the per-coefficient steepest slopes into one vector,
</p>

{__`
\nabla f = \big(\partial_{\theta_0} f,\ \ldots,\ \partial_{\theta_n} f\big),
\qquad
S = \|\nabla f\| = \sqrt{\textstyle\sum_i \big(\partial_{\theta_i} f\big)^2}
`}

<Accordion title="Trust, but differentiate: validating the gradient">
    <p>
        A finite-difference gradient is easy to get subtly wrong, so before
        optimising anything, test it against answers known in advance. The
        repetition code comes in two flavours: the ZZZ code {_`\{|000\rangle,
        |111\rangle\}`} above, which fights bit flips, and its mirror image the XXX
        code
        {_`\{|{+}{+}{+}\rangle, |{-}{-}{-}\rangle\}`}, which fights phase flips.
        Under {_`X`}-{_`Z`} symmetric noise they are one object seen from two angles,
        so the gradient machinery, which knows nothing of that symmetry, must report
        the same slope for both; and relabelling
        {_`0 \leftrightarrow 1`} maps each code to itself, so {_`\|\nabla f\|`}
        at {_`|0_L\rangle`} and {_`|1_L\rangle`} must match:
    </p>

    <div class="tc">
        <table class="mx-a my10">
            <thead>
                <tr
                    ><th>code</th><th>‖∇f‖ at |0<sub>L</sub>⟩</th><th
                        >‖∇f‖ at |1<sub>L</sub>⟩</th
                    ></tr
                >
            </thead>
            <tbody>
                <tr><td>XXX</td><td>0.917</td><td>0.917</td></tr>
                <tr><td>ZZZ</td><td>0.917</td><td>0.917</td></tr>
                <tr><td>XXX, perturbed</td><td>0.911</td><td>0.911</td></tr>
                <tr><td>ZZZ, perturbed</td><td>0.914</td><td>0.910</td></tr>
            </tbody>
        </table>
    </div>

    <p>
        The bottom half is the matching negative control. Shift every
        coefficient by 0.05, renormalise, and the symmetry that forced those
        numbers to agree is gone, so the agreement should dissolve.
    </p>

    <p>
        The last check is the probe size itself. At a sloppy {_`\delta = 10^{-1}`}
        the two repetition codes report different slopes, 0.98 against 0.88, pure
        finite-difference bias. Shrinking {_`\delta`} collapses both estimates onto
        the same 0.917, stable to three digits as {_`\delta`} approaches {_`10^{-4}`},
        the value then fixed for everything else. The {_`\delta`}
        selector in the widget above shows the identical effect on the toy: 0.769,
        then 0.667, then no further change.
    </p>
</Accordion>

<xxx />

<h3>A gradient, and a cliff</h3>

<p>
    The validated gradient turns into an optimiser in one line. Pack each slope
    pair back into a complex number and move every coefficient at once, with
    learning rate {_`\eta`}:
</p>

{__`
a_i \;\rightarrow\; a_i + \eta\left(
\frac{\partial \mathcal{F}}{\partial x_i} + i\,\frac{\partial \mathcal{F}}{\partial y_i}
\right)
`}

<p>
    Run on the {_`[[5,1,3]]`} code under 1% isotropic Pauli noise with Petz recovery
    ({_`\eta = 0.005`}, 20 steps), the fidelities come out as
</p>

{__`
\mathcal{F} \in [\,0.9821,\ 0.9828,\ 0.9825,\ 0.9825,\ 0.9826,\ \ldots,\ 0.9838,\ 0.9838,\ 0.9839\,]
`}

<p>
    It works, and it wobbles: step three goes down, step eight crashes back to
    the start before recovering. The wobble hides something worse: codewords
    must stay unit-length and perpendicular, nothing in the update knows that,
    and once they drift the computed "fidelity" can exceed 1, a fiction the
    optimiser will happily chase. The gradient is validated; the space it moves
    through is not. Keeping the walk on the set of valid codes is
    <a href="/wave/gradient-qec-2">part 2</a>.
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
            "Direct Fidelity Estimation from Few Pauli Measurements (Flammia, Liu)",
            "https://arxiv.org/abs/1104.4695",
        ],
    ]}
></Refs>

<style>
    th,
    td {
        border: 1px solid color-mix(in srgb, var(--g2) 40%, transparent);
        padding: 4px 14px;
        text-align: center;
    }
    th {
        font-weight: bold;
    }
</style>
