<script>
    import { Refs, Meta, Definations, define, Accordion } from "$cpt";
    import { _, __ } from "$lib";
    import Decompose from "./decompose.svelte";
    import Playground from "./playground.svelte";
    import Circuit from "./circuit.svelte";
</script>

<Meta
    title="Cutting Quantum Circuits Beyond Qubits"
    sub="arXiv:2601.02064"
    desc="Sawing mixed-dimensional quantum circuits into fragments small enough to run anywhere"
    date="5 January 2026"
></Meta>

<p>
    The largest quantum processors today carry a few hundred noisy qubits, and
    the circuits worth running keep not fitting on them. One response is to wait
    for bigger chips. The other is to saw the circuit in half, run the two
    halves separately, and glue See you in the next video.the answers back
    together with classical arithmetic via what is called <i>circuit cutting</i
    >.
</p>

<p>
    Most software assumes it stops at two levels, however real hardware does not
    stop at two levels, <i>even if</i> that is all we use. Trapped ions,
    superconducting transmons and photons all come with more levels than the two
    usually addressed, and using those extra levels (making <i>qudits</i>
    rather than qubits) packs more state into fewer particles. Here we shall work
    out how to generalise circuit cutting to higher dimensions and mixed systems.
</p>

<Definations
    ignores={"H, R, I, Z, A, B, S, D, U, V, M, T, Q, a, b, j, k, l, m, q, x, y, i, e, t, z, Y, CX, Tr, TVD, min"}
    list={[
        define(
            "d",
            "Levels per particle. A qubit has d = 2, a qutrit d = 3. The two sides of a cut may disagree: d₁ for the control, d₂ for the target",
        ),
        define(
            "n",
            "Number of particles in a register; simulating it costs dⁿ complex numbers",
        ),
        define(
            "r",
            "Control level index, 0 ≤ r < d₁; the cut gate is rebuilt one control level at a time",
        ),
        define(
            "X",
            "Shift gate, the d-level generalisation of NOT: it sends level j to level j+1 and wraps the top level back to 0. Xʳ shifts by r",
        ),
        define(
            "P",
            "Projector Pᵣ = |r⟩⟨r|: keeps the slice of the state where the control reads r, deletes everything else. Not a physical gate, which turns out to be the whole problem",
        ),
        define(
            "G",
            "Generalised Gell-Mann matrices: d²−1 of them plus the identity form a complete basis for d×d operators. For d = 2 they are exactly the Pauli matrices",
        ),
        define(
            "c",
            "Decomposition weights in CX = Σ cᵢ Aᵢ⊗Bᵢ; every non-zero cᵢ costs one extra pair of circuit runs",
        ),
        define(
            "σ",
            "Singular values of the cut gate; the Schmidt route keeps only min(d₁, d₂) of them",
        ),
    ]}
/>

<h3>Qudits, and what a register costs</h3>

<p>
    A qubit is a particle with two usable levels, written {_`|0\rangle`} and {_`|1\rangle`},
    and its state is a pair of complex numbers saying how much of each it holds.
    A qudit of dimension {_`d`} is the same thing with {_`d`} levels, {_`|0\rangle`}
    through {_`|d-1\rangle`}, and {_`d`} complex numbers. As an example, a qutrit
    is the {_`d =
    3`} case.
</p>

<p>
    The cost of a <i>register</i> is where the trouble starts. Particles
    entangle, so a register of {_`n`} qudits cannot be described by {_`n`}
    separate small lists; it needs one complex number for every joint configuration,
    and there are {_`d^n`} of those, just like qubits have {_`2^n`}. Simulating
    a register means storing that whole vector. At 8 bytes per complex number
    (single-precision real and imaginary parts), the stress-test system below, 8
    particles of dimension 8, costs
</p>

{__`
8^8 \times 8 \text{ B} = 2^{24} \times 8 \text{ B} = 2^{27} \text{ B} = 128 \text{ MB}
`}

<p>
    which still fits in a laptop, but every added particle multiplies the bill
    by 8. Now suppose we could split the register into two halves of 4 qudits
    each and simulate them separately:
</p>

{__`
2 \times \left( 8^4 \times 8 \text{ B} \right) = 2 \times 32 \text{ KB} = 64 \text{ KB}
`}

<p>The ratio between the two is</p>

{__`
\frac{128 \text{ MB}}{64 \text{ KB}} = \frac{2^{27}}{2^{16}} = 2^{11} = 2048
`}

<p>
    a factor of two thousand, from one cut, and it grows exponentially with the
    size of the halves. The catch is that the halves are not independent: some
    gate in the circuit acts on a particle from each side, and that one gate is
    what entangles them. The advantage of circuit cutting is that we can trade
    off some time, for a massive save in memory.
</p>

<xxx />

<h3>Cutting a gate in half</h3>

<p>
    Draw the circuit with chip A's particles on top and chip B's at the bottom.
    Every gate that lives entirely on one chip is unaffected; the problem is the
    one two-particle gate straddling the seam:
</p>

<Circuit
    wires={["q₁", "q₂", "q₃", "q₄"]}
    seam={1}
    chips={[
        { from: 0, to: 1, label: "chip A", col: "#2456c9" },
        { from: 2, to: 3, label: "chip B", col: "#097" },
    ]}
    gates={[
        { t: 0, kind: "box", w: 0, label: "H" },
        { t: 0, kind: "box", w: 1, label: "H" },
        { t: 0, kind: "box", w: 2, label: "H" },
        { t: 0, kind: "box", w: 3, label: "H" },
        { t: 1, kind: "cx", c: 0, x: 1 },
        { t: 1, kind: "cx", c: 3, x: 2 },
        { t: 2, kind: "cx", c: 1, x: 2, col: "#c75200" },
        { t: 3, kind: "box", w: 0, label: "U" },
        { t: 3, kind: "box", w: 1, label: "U" },
        { t: 3, kind: "box", w: 2, label: "U" },
        { t: 3, kind: "box", w: 3, label: "U" },
    ]}
    note="every gate sits on one chip except the orange CX: its control is on chip A, its target on chip B."
/>

<p>
    In the simplest case the straddling gate is a CX. Written next to the
    single-qubit gates it is built from:
</p>

{__`
I = \begin{pmatrix}1&0\\0&1\end{pmatrix},\quad
X = \begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
Z = \begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad
\mathrm{CX} = \begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix}
`}

<p>
    The known starting point, due to Mitarai and Fujii, is that this 4×4 matrix
    is a weighted sum of products of 2×2 matrices:
</p>

{__`
\mathrm{CX} = \tfrac{1}{2}\left(I \otimes I + Z \otimes I + I \otimes X - Z \otimes X\right)
`}

<p>
    The tensor product in the original case meant a gate on two qubits on the
    same chip. But now after cutting, it implies the two adjacent qubits are on
    different chips. The identity is easy to check by adding the matrices:
</p>

{__`
I \otimes I + Z \otimes I = \begin{pmatrix}2&0&0&0\\0&2&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix},
\qquad
I \otimes X - Z \otimes X = \begin{pmatrix}0&0&0&0\\0&0&0&0\\0&0&0&2\\0&0&2&0\end{pmatrix}
`}

{__`
\tfrac12 \left( \text{sum} \right) = \begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix} = \mathrm{CX}
`}

<p>
    Operationally: run the circuit four times. Each time, replace the CX with
    one of the four local pairs ({_`I`} on A and {_`I`} on B, then {_`Z`} and {_`I`},
    then {_`I`} and {_`X`}, then {_`Z`} and {_`X`}). Record the outputs, then
    combine them with the weights {_`+\tfrac12, +\tfrac12, +\tfrac12,
    -\tfrac12`}. The weighted sum behaves exactly as if the CX had been applied.
    Drawn as circuits:
</p>

<div class="f al-ct j-ct fw g5 my20 eqrow">
    <Circuit
        wires={["", ""]}
        seam={0}
        gates={[{ t: 0, kind: "cx", c: 0, x: 1, col: "#c75200" }]}
    />
    <span>=</span>
    <span>+½</span>
    <Circuit
        wires={["", ""]}
        seam={0}
        gates={[
            { t: 0, kind: "box", w: 0, label: "I" },
            { t: 0, kind: "box", w: 1, label: "I" },
        ]}
    />
    <span>+½</span>
    <Circuit
        wires={["", ""]}
        seam={0}
        gates={[
            { t: 0, kind: "box", w: 0, label: "Z" },
            { t: 0, kind: "box", w: 1, label: "I" },
        ]}
    />
    <span>+½</span>
    <Circuit
        wires={["", ""]}
        seam={0}
        gates={[
            { t: 0, kind: "box", w: 0, label: "I" },
            { t: 0, kind: "box", w: 1, label: "X" },
        ]}
    />
    <span>−½</span>
    <Circuit
        wires={["", ""]}
        seam={0}
        gates={[
            { t: 0, kind: "box", w: 0, label: "Z" },
            { t: 0, kind: "box", w: 1, label: "X" },
        ]}
    />
</div>

<p>
    No qubit ever crossed the seam: in each of the four runs both gates are
    local, and the non-local dependency is now handled classically.
</p>

<h3>The part that generalises</h3>

<p>
    Where does that identity come from? Unpack what a CX does, one control value
    at a time. If the control reads 0, the target gets {_`I`}; if it reads 1,
    the target gets {_`X`}:
</p>

{__`
\mathrm{CX} = P_0 \otimes I + P_1 \otimes X,
\qquad
P_0 = \begin{pmatrix}1&0\\0&0\end{pmatrix},\quad
P_1 = \begin{pmatrix}0&0\\0&1\end{pmatrix}
`}

<p>
    {_`P_0`} and {_`P_1`} are projectors: "keep the part of the state where the control
    is 0 (or 1), delete the rest". This form is two terms instead of four, but it
    is not runnable, because a projector is not a gate; deleting part of a state
    is not something a quantum device can do deterministically. The fix is to expand
    each projector in a basis of operators that <i>are</i>
    implementable. For qubits that basis is {_`\{I, X, Y, Z\}`}, and the
    coefficient of each basis element is found by taking traces:
</p>

{__`
a_Z = \frac{\mathrm{Tr}(P_0 Z)}{\mathrm{Tr}(Z^2)} = \frac{1}{2}
\quad\Rightarrow\quad
P_0 = \tfrac12 I + \tfrac12 Z,
\qquad
P_1 = \tfrac12 I - \tfrac12 Z
`}

<p>Substituting back:</p>

{__`
\begin{aligned}
\mathrm{CX} &= \left(\tfrac12 I + \tfrac12 Z\right) \otimes I + \left(\tfrac12 I - \tfrac12 Z\right) \otimes X\\
&= \tfrac12 \left( I \otimes I + Z \otimes I + I \otimes X - Z \otimes X \right)
\end{aligned}
`}

<p>
    The recipe has two steps: write the gate as a sum of (projector on the
    control) ⊗ (action on the target), then expand both factors in a local
    operator basis. Step one is not qubit-specific at all. Step two leans on the
    Pauli matrices, which only exist for {_`d = 2`}. We will now generalise the
    Pauli matrices to higher dimensions.
</p>

<xxx />

<h3>Beyond qubits</h3>

<p>
    First, the gate itself has to mean something between mismatched particles.
    The {_`d`}-dimensional generalisation of NOT is the shift {_`X`}, which
    moves every level up by one and wraps the top around. For a qutrit:
</p>

{__`
X = \sum_{j=0}^{d-1} |\,(j+1) \bmod d\,\rangle\langle j|,
\qquad
X_{(3)} = \begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}
`}

<p>
    The generalised CX (often called CSUM) reads the control level {_`r`} and shifts
    the target by {_`r`}: control at 0 does nothing, control at 1 shifts by one,
    control at 2 shifts by two, and so on. With a control of dimension {_`d_1`} and
    a target of dimension {_`d_2`}, the object of study is
</p>

{__`
\mathrm{CX}_{d_1, d_2} = \sum_{r=0}^{d_1 - 1} P_r \otimes X^r
`}

<p>
    which is the projector form from before, just with {_`d_1`} terms instead of
    two, and with the two factors living in different dimensions. What replaces the
    Pauli basis?
</p>

<p>
    The generalised Gell-Mann matrices: for dimension {_`d`} there are
    {_`d^2 - 1`} of them, and together with the identity they form a complete orthogonal
    basis for {_`d \times d`}
    operators, with the Paulis as the {_`d = 2`} special case. They come in three
    families: symmetric pairs, antisymmetric pairs, and diagonals.
</p>

<Accordion title="The Gell-Mann matrices for d = 3, explicitly">
    <p>Three symmetric ones, one per pair of levels {_`j < k`}:</p>
    {__`
    S_{01} = \begin{pmatrix}0&1&0\\1&0&0\\0&0&0\end{pmatrix},\quad
    S_{02} = \begin{pmatrix}0&0&1\\0&0&0\\1&0&0\end{pmatrix},\quad
    S_{12} = \begin{pmatrix}0&0&0\\0&0&1\\0&1&0\end{pmatrix}
    `}
    <p>Three antisymmetric ones on the same pairs:</p>
    {__`
    A_{01} = \begin{pmatrix}0&-i&0\\i&0&0\\0&0&0\end{pmatrix},\quad
    A_{02} = \begin{pmatrix}0&0&-i\\0&0&0\\i&0&0\end{pmatrix},\quad
    A_{12} = \begin{pmatrix}0&0&0\\0&0&-i\\0&i&0\end{pmatrix}
    `}
    <p>And two diagonal ones:</p>
    {__`
    D_1 = \begin{pmatrix}1&0&0\\0&-1&0\\0&0&0\end{pmatrix},\quad
    D_2 = \tfrac{1}{\sqrt{3}}\begin{pmatrix}1&0&0\\0&1&0\\0&0&-2\end{pmatrix}
    `}
    <p>
        That is {_`3^2 - 1 = 8`} matrices; with {_`I`} they span everything a 3×3
        operator can be. Each squares to something with trace 2, which is the normalisation
        used in the coefficient formula. Restricting to the top-left 2×2 block recovers
        the Paulis: {_`S_{01} = X`}, {_`A_{01} =
        Y`}, {_`D_1 = Z`}.
    </p>
</Accordion>

<p>
    The expansion machinery is the same trace formula as before, applied on each
    side of the seam in its own dimension:
</p>

{__`
P_r = \sum_{A \in \mathcal{B}_1} a_A^{(r)} A,
\qquad
X^r = \sum_{B \in \mathcal{B}_2} b_B^{(r)} B,
\qquad
a_A^{(r)} = \frac{\mathrm{Tr}(P_r A)}{\mathrm{Tr}(A^2)}
`}

<p>
    Worked through for the headline cut, a qubit controlling a qutrit ({_`d_1 = 2`},
    {_`d_2 = 3`}): the control side is unchanged, {_`P_0
    = \tfrac12 I + \tfrac12 Z`} and {_`P_1 = \tfrac12 I - \tfrac12 Z`}. On the
    target side the shift has to be expanded in Gell-Mann matrices. One
    coefficient in full, the {_`S_{01}`} component of {_`X_{(3)}`}:
</p>

{__`
X_{(3)} S_{01} =
\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}
\begin{pmatrix}0&1&0\\1&0&0\\0&0&0\end{pmatrix}
=
\begin{pmatrix}0&0&0\\0&1&0\\1&0&0\end{pmatrix}
\;\Rightarrow\;
b_{S_{01}} = \frac{\mathrm{Tr}(X_{(3)} S_{01})}{\mathrm{Tr}(S_{01}^2)} = \frac{1}{2}
`}

<p>Doing the other seven coefficients the same way gives</p>

{__`
X_{(3)} = \tfrac12\left(S_{01} + S_{02} + S_{12}\right)
- \tfrac{i}{2} A_{01} + \tfrac{i}{2} A_{02} - \tfrac{i}{2} A_{12}
`}

<p>
    Some weights are imaginary now. That is fine: the recombination step is
    classical arithmetic and is perfectly happy with complex weights, and the
    imaginary parts cancel in mirror pairs when the gate is rebuilt, since the
    gate itself is real. Multiplying everything out and collecting like terms,
    the qubit-qutrit CX becomes a sum of
</p>

{__`
2 \times 7 = 14
`}

<p>
    distinct products: 2 surviving control-side elements ({_`I`} and {_`Z`})
    times 7 target-side elements ({_`I`} and the six off-diagonal Gell-Mann matrices).
    Fourteen pairs of local gates, fourteen runs, one weighted sum, and a gate between
    two particles that do not even have the same dimension has been cut. The widget
    below does this whole computation live for any pair of dimensions, including
    the rebuild check at the end:
</p>

<Decompose></Decompose>

<p>
    Two things stand out in it. The rebuild error stays at machine zero (around {_`10^{-16}`},
    the resolution of floating-point arithmetic) for every pair of dimensions:
    the decomposition is exact, not approximate. And the grid stays mostly
    white. A candidate term pairs any of the {_`d_1^2`} control-basis elements with
    any of the {_`d_2^2`} target-basis elements,
</p>

{__`
d_1^2 \times d_2^2 = 4 \times 9 = 36 \;\text{ candidates}
`}

<p>
    and only the 14 counted above carry weight. The weights can also be <i
        >truncated</i
    >: sort them, drop any with magnitude below a threshold, and accept a small
    reconstruction error in exchange for fewer runs. Dropping every coefficient
    below {_`10^{-2}`}
    leaves the output error at zero to three decimal places even for combined gate
    dimensions of {_`(d_1 d_2)^2 = 10^6`}; a coarser {_`5 \times 10^{-2}`}
    holds up to around {_`10^9`} before floating-point noise accumulates; and past
    {_`10^{14}`}, accepting a 10 percent output error buys back more than two
    thirds of the computation time.
</p>

<Accordion title="The bookkeeping: stitching mixed-radix amplitudes">
    <p>
        The one genuinely annoying part of heterogeneous cutting is index
        bookkeeping. A homogeneous register of qubits labels its states with
        binary strings, and position 7 means {_`|0111\rangle`} everywhere. In a mixed
        register the "digits" of a state label run on different bases, and the simulator
        may store fragments in a different particle order than the logical circuit
        (big-endian qudits flipped into little-endian, for one). The fix is mechanical:
        for each flat index {_`k`} of the stitched amplitude vector, peel off digits
        in mixed radix, one base per particle. With bases {_`(3, 3, 2, 2)`} and {_`k
        = 25`}:
    </p>
    {__`
    \begin{aligned}
    25 \bmod 3 &= 1, &\quad \lfloor 25 / 3 \rfloor &= 8\\
    8 \bmod 3 &= 2, &\quad \lfloor 8 / 3 \rfloor &= 2\\
    2 \bmod 2 &= 0, &\quad \lfloor 2 / 2 \rfloor &= 1\\
    1 \bmod 2 &= 1, &\quad \lfloor 1 / 2 \rfloor &= 0
    \end{aligned}
    `}
    <p>
        giving digits {_`(1, 2, 0, 1)`}. A fixed permutation then reorders the
        digits from storage order to logical particle order, the digits are
        joined into a state label, and the squared magnitude of amplitude {_`k`}
        is filed under that label. Dull, mechanical, and the source of essentially
        all bugs in getting TVD to actually read zero.
    </p>
</Accordion>

<xxx />

<h3>The memory bill, measured</h3>

<p>
    Back to the stress test: 8 particles of dimension 8, cut down the middle
    into two fragments of 4. The arithmetic at the top of the article said 128
    MB for the whole circuit and 64 KB for the fragment pair. With an artifical
    memory cap at 150 MB, the uncut simulation fits and takes about 130 seconds.
    The cut version runs 532 fragment pairs, takes about 1350 seconds, and
    stitches back to TVD 0.00000. With the cap at 100 MB, below the 128 MB state
    vector, the uncut simulation cannot run at all, and the cut version finishes
    in about 1400 seconds, unbothered.
</p>

<p>
    The planner below lets you play architect: pick the size and dimension of
    each chip, and see what the seam costs.
</p>

<Playground></Playground>

<h3>Fewer pieces: cutting with an SVD</h3>

<p>
    The Gell-Mann search has two costs that grow with dimension. The basis
    itself grows quadratically ({_`d^2`} elements per side), so the search space
    grows fast; and summing hundreds of weighted terms in floating point accumulates
    rounding error. For larger dimensions: instead of searching a fixed basis of
    nice hardware-friendly gates, what is the
    <i>minimum</i>
    number of product terms any decomposition could have?
</p>

<p>
    Linear algebra tells us any matrix can be factored by SVD, and applying SVD
    across the seam of a gate {_`U`}
    acting on dimensions {_`d_1, d_2`} gives
</p>

{__`
U = \sum_{i=1}^{\min(d_1, d_2)} \sigma_i \; U_i^{(d_1)} \otimes V_i^{(d_2)}
`}

<p>
    a sum with at most {_`\min(d_1, d_2)`} terms, the Schmidt decomposition of the
    gate. The local factors {_`U_i, V_i`} are whatever the SVD says they are, arbitrary
    unitaries rather than named basis gates, but a simulator does not care about
    named or unnamed gates. Further, one may reasonably assume, for higher dimensional
    systems in the future, there may exist efficient ways to impliment arbitrary
    single unitaries for small numbers of particles at once. For a cut between two
    dimension-12 qudits, the full basis search produces 225 terms while the Schmidt
    route needs 12. For the dimension-8 stress test, the full search with no truncation
    kept 63 terms; Schmidt needs 8. If all term outputs are held in memory at once
    for stitching, that difference is
</p>

{__`
\begin{aligned}
\text{full basis} &: 64 \text{ KB} \times 63 \times 2 \approx 7.9 \text{ MB}\\
\text{Schmidt} &: 64 \text{ KB} \times 8 \times 2 = 1 \text{ MB}
\end{aligned}
`}

<p>
    Which means if we compare from the beginning, what now takes 1 MB was a 128
    MB state vector when the circuit ran uncut: a 128x drop in memory, bought
    with a tenfold increase in time.
</p>

<Refs
    list={[
        [
            "Cutting Quantum Circuits Beyond Qubits (Seksaria, Prabhakar)",
            "https://arxiv.org/abs/2601.02064",
        ],
        [
            "Simulating Large Quantum Circuits on a Small Quantum Computer (Peng, Harrow, Ozols, Wu; 2020)",
            "https://arxiv.org/abs/1904.00102",
        ],
        [
            "Constructing a virtual two-qubit gate by sampling single-qubit operations (Mitarai, Fujii; 2021)",
            "https://arxiv.org/abs/1909.07534",
        ],
        [
            "CutQC: Using Small Quantum Computers for Large Quantum Circuit Evaluations (Tang et al.; 2021)",
            "https://arxiv.org/abs/2012.02333",
        ],
        [
            "Qudits and High-Dimensional Quantum Computing (Wang, Hu, Sanders, Kais; 2020)",
            "https://www.frontiersin.org/articles/10.3389/fphy.2020.589504/full",
        ],
    ]}
></Refs>

<style>
    .eqrow {
        font-family: monospace;
        font-size: 1.05em;
        color: #222;
    }
    .eqrow :global(figure) {
        margin: 0;
    }
</style>
