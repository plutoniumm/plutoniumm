<script>
    import { Refs, Meta, Definations, define, Accordion } from "$cpt";
    import { _, __ } from "$lib";
    import CoinToss from "./cointoss.svelte";
    import Windows from "./windows.svelte";
    import Budget from "./budget.svelte";
</script>

<Meta
    title="Estimating Shots and Variance"
    sub="arXiv:2501.03194"
    desc="How many runs a noisy quantum computer needs before its answer deserves trust"
    date="6 January 2025"
></Meta>

<p>
    A quantum computer hands you one sample from a probability distribution
    shaped by your circuit, not the answer directly. Run the circuit once and
    you get one string of bits; run it again and you get a different one. Each
    run is called a <b>shot</b>, and the number you actually wanted, usually an
    average, has to be assembled out of thousands of shots. Time on these
    machines is rented by the second, so every shot has a price. Too few shots
    and the answer is noise; too many and you paid for precision you did not
    need.
</p>

<p>
    Given a circuit, a noisy machine, and a target precision, can the number of
    shots be predicted in advance, instead of found by trial and error, which is
    how it is mostly done today? It can be done in two ways:
</p>
<ul>
    <li>
        Bottom-Up: take one qubit, model each noise source from physics, and
        predict the spread of its outcomes from the machine's published
        calibration data.
    </li>
    <li>
        Top-Down: for real multi-qubit circuits, where the bottom-up route turns
        out to be intractable, fit a two-parameter law to a few cheap runs and
        read the shot count off the curve.
    </li>
</ul>

<Definations
    ignores="t,k,n,x,y,i,j,s,e,d,a,m,q,r,u,v,X,Y,Z,P,V,S,W,I,R,F,L,D"
    list={[
        define(
            "N",
            "number of shots: how many times the same circuit is run and measured",
        ),
        define(
            "μ",
            "mean of the measured bits; for the coin circuit, the fraction of shots that read 1. μ′ is the mean after noise shifts it",
        ),
        define(
            "σ",
            "standard deviation of the estimate; σ² is the variance, the measure of precision throughout",
        ),
        define(
            "p",
            "probability of reading 1, with p₀ = 1 − p₁. The readout errors p₀→₁ and p₁→₀ are the odds of a 0 being read as 1, and the reverse",
        ),
        define(
            "w",
            "window size: shots are grouped into windows of w and each window is averaged, which makes the averages near-normal",
        ),
        define(
            "c",
            "intercept of the ln(RSD) vs ln(w) line; one number summarising how noisy a qubit's outcome distribution is",
        ),
        define(
            "ε",
            "for T₁: the probability the qubit decays during the wait, 1 − e^(−t/T₁); for T₂: the coherence that survives the wait, e^(−t/T₂)",
        ),
        define(
            "b",
            "(1+ε)/(1−ε), the factor a decay clock contributes inside the intercept formula",
        ),
        define(
            "T",
            "decay clocks from the calibration sheet: T₁ for amplitude (a |1⟩ falling back to |0⟩), T₂ for phase",
        ),
        define(
            "H",
            "the Hadamard gate: sends |0⟩ to an equal split of |0⟩ and |1⟩, the quantum coin flip",
        ),
        define(
            "O",
            "the observable being estimated; here, the energy of the H₂ molecule",
        ),
        define(
            "A",
            "statistical half of the model Var ≈ A/N + B; close to σ² of the observable, and shrinks as shots grow",
        ),
        define(
            "B",
            "bias floor: the variance left over as N → ∞. No shot budget removes it",
        ),
        define(
            "E",
            "error per layered gate (EPLG), a published benchmark of gate noise",
        ),
    ]}
/>

<h3>A coin made of one qubit</h3>

<p>
    The simplest useful circuit is one qubit, one Hadamard gate, one
    measurement. The qubit starts in {_`|0\rangle`}, the {_`H`} gate puts it in an
    equal superposition, and the measurement collapses it to 0 or 1 with probability
    one half each. On a perfect machine this is a fair coin, and most of the bottom-up
    approach is us studying how noise bends this coin.
</p>

<p>
    Averaging the bits over {_`N`} shots gives an estimate {_`\mu`} of the true probability
    {_`\mu_0 = 0.5`}. One shot is a Bernoulli draw, so its variance is {_`p(1-p)`},
    and averaging {_`N`} independent draws divides the variance by {_`N`}:
</p>

{__`
\begin{aligned}
\text{one shot:}\quad \sigma^2 &= p(1-p) = 0.5 \times 0.5 = 0.25\\
N \text{ shots:}\quad \sigma &= \sqrt{0.25/N} = 0.5/\sqrt{N}\\
N = 100:\quad \sigma &= 0.05\\
N = 10\,000:\quad \sigma &= 0.005
\end{aligned}
`}

<p>
    The spread shrinks as {_`1/\sqrt{N}`}, so each extra digit of precision
    costs a factor of 100 in shots, which is to say a factor of 100 in money.
    This square-root law is the reason shot estimation is worth doing carefully:
    overshooting "to be safe" is expensive in exactly the same regime where the
    machine is already expensive.
</p>

<h3>Noise that hides and noise that shifts</h3>

<p>
    The first noise source is the most mundane: the machine sometimes reads the
    bit wrong. These are state preparation and measurement (SPAM) errors, and
    the readout half of them comes in two parts, {_`p_{0 \to 1}`}, the
    probability a 0 is reported as 1, and {_`p_{1 \to 0}`}, the reverse. The
    measured mean becomes
</p>

{__`
\mu' = P(1) + p_{0\to1}\,P(0) - p_{1\to0}\,P(1)
`}

<p>
    For the fair coin {_`P(0) = P(1) = 0.5`}. Take a strongly asymmetric case,
    {_`p_{0\to1} = 0.33`} and {_`p_{1\to0} = 0.5`}:
</p>

{__`
\mu' = 0.5 + 0.33 \times 0.5 - 0.5 \times 0.5 = 0.415
`}

<p>
    Two things follow, and you can check both in the widget below. If the two
    error rates are equal, the shifts cancel and {_`\mu' = 0.5`} exactly: the mean
    of a fair coin cannot see symmetric readout noise at all, no matter how large
    it is. If the rates differ, the whole distribution slides to a new centre, 0.415
    in the worked case, and no number of shots brings it back. More shots only sharpen
    the estimate of the wrong value. The paper confirms the symmetric cancellation
    on two independent noisy simulators, IBM's and CERN's, both set to {_`p_{0\to1} = p_{1\to0} = 0.33`}.
</p>

<CoinToss></CoinToss>

<h3>One number per qubit</h3>

<p>
    To compare spreads across different means we switch from {_`\sigma`} to the relative
    standard deviation, {_`\text{RSD} = \sigma/\mu`}, which is dimensionless.
    Then we apply the central limit theorem in its most practical form. Take a
    long record of shots, {_`2^{15}`} of them, and chop it into 256 windows of {_`w`}
    shots each, for {_`w = 4, 8, 16, \ldots,
    128`}. Average each window. The window averages are close to normally
    distributed, and their RSD inherits the square-root law, so on log axes the
    points fall on a straight line:
</p>

{__`
\ln(\text{RSD}) = -\tfrac{1}{2}\ln w + c
`}

<p>
    The slope is always {_`-1/2`}; it carries no information about the device.
    Everything the noise does to the distribution is compressed into the
    intercept {_`c`}. For a coin that reads 1 with probability {_`p`}, the
    window average has mean {_`p`} and standard deviation
    {_`\sqrt{p(1-p)/w}`}, so the intercept can be computed in closed form (all
    logs natural here):
</p>

{__`
\begin{aligned}
c &= \ln\frac{\sigma}{\mu} + \tfrac{1}{2}\ln w
= \ln\frac{\sqrt{p(1-p)/w}}{p} + \tfrac{1}{2}\ln w\\
&= \tfrac{1}{2}\ln\frac{1-p}{p} = \tfrac{1}{2}\ln\frac{p_0}{p_1}
\end{aligned}
`}

<p>
    A fair coin has {_`p_0 = p_1`} and therefore {_`c = 0`}. The asymmetric SPAM
    coin from the last section had {_`\mu' = 0.415`}, so
</p>

{__`
c = \tfrac{1}{2}\ln\frac{0.585}{0.415} = 0.172
`}

<p>
    and substituting {_`\mu'`} for {_`p`} in general gives the prediction straight
    from the two readout rates:
</p>

{__`
c_{\text{pred}} = \tfrac{1}{2}\ln\!\left(\frac{1 + p_{1\to0} - p_{0\to1}}{1 + p_{0\to1} - p_{1\to0}}\right)
`}

<p>
    Symmetric errors give {_`c_{\text{pred}} = 0`} regardless of size, matching what
    the mean already told us. The formula is also a warning: if one error rate is
    held at zero and the other is {_`x`}, the sensitivity is {_`dc/dx =
    \pm 2/(x^2 - 1)`}, which is steepest near small {_`x`}. One-directional
    readout error inflates the variance fastest, so a hardware designer should
    want readout errors small <i>and</i> symmetric, in that order of importance.
</p>

<Windows></Windows>

<p>
    This is the entire bottom-up program in miniature: predict {_`c`} from the calibration
    sheet, measure {_`c`} from the windowed shots, compare. Every quantum machine
    publishes a calibration sheet per qubit on every calibration cycle: readout error
    rates, decay times, gate errors. On IBM's Torino machine the prediction landed
    within 0.01 of the measured intercept using nothing but that sheet.
</p>

<h3>The decay clocks</h3>

<p>
    A qubit holding {_`|1\rangle`} relaxes toward {_`|0\rangle`} with a characteristic
    time {_`T_1`}. To see it with the coin, we insert a wait of length {_`t`} between
    the {_`H`} gate and the measurement. The probability that an excited qubit decays
    during the wait is {_`\varepsilon = 1 -
    e^{-t/T_1}`}, which reshuffles the two outcome probabilities:
</p>

{__`
p_0' = p_0 + p_1\,\varepsilon, \qquad p_1' = p_1\,(1 - \varepsilon)
`}

<p>
    Pushing these through the intercept formula gives the same expression as
    SPAM with one new factor {_`b`}:
</p>

{__`
c_{\text{pred}} = \tfrac{1}{2}\ln\!\left(\frac{b\,(1-p_{0\to1}) + p_{1\to0}}{b\,p_{0\to1} + 1 - p_{1\to0}}\right),
\qquad b = \frac{1+\varepsilon}{1-\varepsilon}
`}

<p>
    When the wait is short, {_`\varepsilon \to 0`}, {_`b \to 1`}, and the SPAM
    formula reappears unchanged. With clean readout the formula collapses to
    {_`c = \tfrac{1}{2}\ln b`}, and the numbers stay tame for realistic waits.
    Torino's calibration listed {_`T_1 = 232`} microseconds; a wait one tenth of
    that gives
</p>

{__`
\begin{aligned}
\varepsilon &= 1 - e^{-23.2/232} = 0.095\\
b &= \frac{1.095}{0.905} = 1.210\\
c &= \tfrac{1}{2}\ln 1.210 = 0.095
\end{aligned}
`}

<p>
    Running the wait circuit on Torino's hardware across a range of delays and
    comparing to these predictions, the median error was 0.01.
</p>

<p>
    The second clock, {_`T_2`}, governs phase: how long the qubit remembers
    <i>where</i> in the superposition it is, not just how much. Phase is
    invisible to a direct measurement, so the circuit changes to {_`H`}, wait,
    {_`H`}. With no wait the two Hadamards cancel and the circuit always reads
    0. As the wait grows the surviving coherence {_`\varepsilon_2 =
    e^{-t/T_2}`} shrinks, and the outcome drifts from deterministic toward a fair
    coin. The same intercept formula applies with {_`b =
    (1+\varepsilon_2)/(1-\varepsilon_2)`}, and on Torino the predictions held
    with mean and median errors of about 1%, with a visibly larger spread than
    the {_`T_1`} case.
</p>

<Accordion title="Where the decay factor b comes from">
    <p>
        The clean way to track both decays at once is the Jaynes-Cummings
        density matrix. Write the qubit state as {_`\alpha|0\rangle + \beta|1\rangle`}
        and apply the standard
        {_`T_1, T_2`} noise channel for a wait of length {_`t`}; with
        {_`\varepsilon_1 = e^{-t/T_1}`} and {_`\varepsilon_2 = e^{-t/T_2}`} the state
        becomes
    </p>
    {__`
    \rho_{T_1+T_2} = \begin{pmatrix}
    1 + (|\alpha|^2 - 1)\,\varepsilon_1 & \alpha\beta^*\,\varepsilon_2\\
    \alpha^*\beta\,\varepsilon_2 & |\beta|^2\,\varepsilon_1
    \end{pmatrix}
    `}
    <p>
        The diagonal carries populations and is eaten by {_`\varepsilon_1`}; the
        off-diagonal carries coherence and is eaten by
        {_`\varepsilon_2`}. A direct measurement reads only the diagonal, which
        is why the {_`T_1`} experiment needs no extra gates. Sandwiching the wait
        between Hadamards rotates the off-diagonal terms onto the diagonal by creating
        a change of basis, so the second measurement reads the surviving coherence
        as a bias of the coin.
    </p>
</Accordion>

<p>
    One more refinement, because the calibration sheet is itself a measurement:
    {_`T_2`} comes with an uncertainty {_`\sigma_{T_2}`}, and that uncertainty
    propagates into the predicted intercept through the derivative,
</p>

{__`
\begin{aligned}
\sigma_c &= \frac{\partial c}{\partial T_2}\,\sigma_{T_2} = \frac{t\,e^{t/T_2}}{T_2^2\left(e^{2t/T_2} - 1\right)}\,\sigma_{T_2} \\
\text{At } &T_2 = 500\,\delta t,\;\; t = 100\delta t,\;\; \sigma_{T_2} = 20\, \delta t: \\
\sigma_c &= \frac{100 \cdot e^{0.2}}{500^2 \left(e^{0.4} - 1\right)} \cdot 20 \approx \frac{122.1}{122\,950} \cdot 20 \approx 0.02
\end{aligned}
`}

<p>
    where {_`\delta t`} is the machine's pulse time unit. The factor {_`1/T_2^2`}
    means the uncertainty in {_`c`} dies quickly as coherence times improve, and
    {_`t \to 0`} gives {_`\sigma_c \to 0`}: short circuits are insensitive to
    how well you know the clock.
</p>

<h3>Gates lie too</h3>

<p>
    Gate errors are the third ingredient. Assuming no correlated errors, each
    imperfect gate acts like a depolarising channel: with some probability it
    applies an unwanted {_`X`}, {_`Y`} or {_`Z`} to the qubit. Individual probabilities
    per axis are hard to extract, but randomised benchmarking publishes a single
    combined figure, the error per layered gate {_`E`}, and splitting it evenly
    gives {_`p_x = p_y = p_z = E/3`}. Errors along a given axis compound across {_`k`}
    gates as
</p>

{__`
P_k = 1 - (1-p)^k \approx k\,p
`}

<p>
    which for {_`p = 0.001`} and {_`k = 50`} gives {_`1 - 0.999^{50} = 0.0488`}
    against the shortcut's {_`0.05`}. Substituting these compounded
    probabilities into the same intercept machinery, and running on Torino's
    hardware, the prediction errors stayed within about 0.1, with a slight bias
    toward underprediction. These figures do not account for SPAM, so part of
    that 0.1 is noise deliberately left out of the model.
</p>

<blockquote>
    The shortcut is safe as long as {_`k \le 1/p`}. Past that the binomial error
    term grows large enough to corrupt predictions even though the circuit
    itself may still be fine. So the circuit still might work, but my math stops
    working.
</blockquote>

<xxx />

<h3>Where the bottom-up story ends</h3>

<p>
    At this point one qubit is a solved bookkeeping exercise: every noise source
    on the calibration sheet maps to a predictable shift of one number,
    {_`c`}. This however can be used only to caliberate individual qubits, and
    not compose them into large circuits.
</p>

<p>The variance of a sum of two random bits is</p>

{__`
\mathrm{Var}(X_1 + X_2) = \mathrm{Var}(X_1) + \mathrm{Var}(X_2) + 2\,\mathrm{Cov}(X_1, X_2)
`}

<p>
    For classical independent coins the covariance is zero and life is easy.
    Qubits in one circuit are entangled; entanglement is correlation, so the
    covariance term cannot be dropped. Every pair of qubits needs its own
    covariance, and pairs grow quadratically:
</p>

{__`
\binom{100}{2} = \frac{100 \times 99}{2} = 4950
`}

<p>
    covariances for a 100-qubit circuit, each one requiring its own
    measurements, on top of the single-qubit terms. Worse, the answer depends on
    how the measured bits are combined into a number, before any noise is even
    considered.
</p>

<Accordion title="How bits combine decides the variance">
    <p>
        Take {_`k`} independent bits where a 1 flips to 0 with probability
        {_`p`} and a 0 flips to 1 with probability {_`q`}. The variance
        contributed by the bit in position {_`i`} is
    </p>
    {__`
    \mathrm{Var}(X_i) = (1 - p + q)(p - q)\cdot 2^i
    `}
    <p>
        If the bits are read as an integer, {_`101010_2 = 42`}, the {_`2^i`}
        weights make the variance scale exponentially with position, irrespective
        of {_`p`} and {_`q`}: one flipped high bit moves the answer by half its
        range. If the same bits are read as a binary fraction, {_`0.0110101_2 \approx 0.42`},
        as the phase estimation algorithm does, each extra bit only refines the
        answer and the variance stays small. For a product of two variables the
        mixing is worse still:
    </p>
    {__`
    \mathrm{Var}(X_1 X_2) = \left(\mathrm{Var}(X_1) + \mu_1^2\right)\left(\mathrm{Var}(X_2) + \mu_2^2\right) - \mu_1^2\,\mu_2^2
    `}
    <p>
        means and variances contaminate each other. So even with a full table of
        single-qubit characterisations, the circuit-level variance depends on
        the readout convention, the combination arithmetic, and every pairwise
        covariance. There is no universal formula to aim for.
    </p>
</Accordion>

<h3>Measure the variance instead</h3>

<p>
    Here we flip direction; instead of predicting the variance from parts,
    measure it whole, but measure it cheaply. The analysis restricts to the
    class of circuits most NISQ algorithms already live in: expectation-value
    circuits, where the goal is the average {_`\langle O \rangle`}
    of some observable
    {_`O`} over a prepared state. Variational chemistry, optimisation, most near-term
    workloads have this shape. For such circuits the observable's intrinsic variance
    is itself measurable:
</p>

{__`
\sigma^2 = \mathrm{Var}(O) = \langle O^2 \rangle - \langle O \rangle^2
`}

<p>
    and on a noiseless machine the estimator after {_`N`} shots obeys the textbook
    law {_`\mathrm{Var}(\bar E_N) = \sigma^2/N`}: a straight line of slope {_`-1`}
    on log-log axes, falling forever. On a real machine it does not fall forever,
    and the deviation is modelled by the measured variance as
</p>

{__`
\mathrm{Var}(\bar E_N) = \frac{A}{N} + B, \qquad A \approx \sigma^2,\quad B \ge 0
`}

<p>
    {_`A`} is the statistical part, the intrinsic quantum randomness that shots genuinely
    average away. {_`B`} is a bias floor from systematic, device- and circuit-dependent
    error, the multi-qubit descendant of the intercept {_`c`}: shots do nothing
    to it. The model is two numbers, and both come almost free. The same
    procedure that estimates {_`\langle O \rangle`} can also be used to estimate
    {_`\langle O^2 \rangle`} with the same shot data. With one additional run of
    the same circuit with a 'squared' observable, the variance can be estimated.
    The fit over a few shot counts then gives us {_`A`} and {_`B`}.
</p>

<h3>A molecule as the test bench</h3>

<p>
    The test bench is the standard entry-level chemistry problem: a variational
    quantum eigensolver (VQE) finding the ground-state energy of the {_`H_2`}
    molecule, four qubits, a Hartree-Fock starting state, and an excitation-preserving
    ansatz. The observable is the molecular Hamiltonian, estimated term by term from
    {_`\pm 1`}-eigenvalue measurements.
</p>

<Accordion title="The actual Hamiltonian">
    <p>
        In the minimal STO-3G basis the {_`H_2`} Hamiltonian compiles to a sum of
        fifteen 4-qubit Pauli strings:
    </p>
    {__`
    \begin{aligned}
    H ={}& 0.045\,(YYYY + XXYY + YYXX + XXXX)\\
    &+ 0.120\,(IIZZ + ZZII) + 0.166\,(ZIIZ + IZZI)\\
    &+ 0.168\, IZIZ + 0.170\,(IIIZ + IZII) + 0.17\, ZIZI\\
    &- 0.219\,(ZIII + IIZI) - 0.815\, IIII
    \end{aligned}
    `}
    <p>
        Each string is measured by its own set of shots; the energy estimate is
        the coefficient-weighted sum. The estimator {_`\bar E_N`} over all of it
        is what the {_`A/N + B`} model describes.
    </p>
</Accordion>

<p>
    A fit needs error bars. Since {_`\bar E_N`} is approximately normal, the sample
    variance follows a scaled chi-squared distribution and its standard error has
    a closed form:
</p>

{__`
\mathrm{SE}(s^2) = s^2\sqrt{\frac{2}{N-1}}, \qquad
s^2 = \frac{1}{N-1}\sum_{i=1}^{N}\left(E_i - \bar E_N\right)^2
`}

<p>
    The relative error depends only on {_`N`}, so it can be budgeted before
    touching the machine. Capping it at {_`p`} percent requires
</p>

{__`
N > \frac{2 \times 10^4}{p^2}: \qquad
p = 2 \;\Rightarrow\; N > 5000, \qquad
p = 1 \;\Rightarrow\; N > 20\,000
`}

<p>
    The circuit ran at three shot counts on three backends, a noisy simulator,
    IBM Kingston, and IBM Pittsburgh; {_`A/N + B`} was fitted through the three points
    and the fit's predictions checked at shot counts it had never seen. On all three
    backends the predictions agreed with the measured variances within the error
    bounds above. The lowest point, {_`N = 32`}, carries a very large error bar,
    exactly as {_`\sqrt{2/(N-1)}`} says it must.
</p>

<p>
    Once fitted, the model runs backwards, and the inverse is the practical
    payoff. Fix the target variance, solve for the shots:
</p>

{__`
N = \frac{A}{\sigma^2 - B} = \frac{56}{0.01 - 0.002} = 7000
`}

<p>
    The numbers 56 and 0.002 here are illustrative values consistent with the
    Pittsburgh fit; the conclusion is the paper's: for IBM Pittsburgh's noise
    characteristics at that instant, 7000 shots of this circuit would have
    achieved {_`\sigma^2 \approx 0.01`}. The widget below is this equation made
    draggable.
</p>

<Budget></Budget>

<p>
    The variance does carry its own price: {_`\langle O^2 \rangle`} means
    measuring a squared Hamiltonian, which compiles to its own, longer list of
    Pauli strings, each needing shots. The saving is that this overhead does
    not have to match the size of the main run. The variance enters only
    through the fitted {_`A`} and {_`B`}, and the curve, once fitted at small
    shot counts, can be evaluated at any {_`N`}. So if the production run
    spends 50,000 shots on one precise expectation value, learning its
    variance does not take a second 50,000-shot campaign; the cheap fit
    already prices it:
</p>

{__`
\mathrm{Var}(\bar E_{50\,000}) = \frac{56}{50\,000} + 0.002 \approx 0.0031
`}

<p>
    The expensive run buys the precision; a handful of cheap runs is enough to
    certify it.
</p>

<p>
    Both fitted numbers are perishable. {_`A`} varies with the state being prepared,
    {_`B`} with the device, the qubits chosen, the layout, and the hour; the two-day-stale
    calibration that wrecked the qubit 61 prediction applies with full force here.
    Measurements need to be made afresh, per session. Two gaps however still remain
    open. Correlated errors and crosstalk are excluded for lack of accepted models,
    and there is no mechanistic account of {_`B`}: the bottom-up half of the
    paper explains its single-qubit ancestor {_`c`} from first principles, but what
    sets the size of the multi-qubit floor, and which knobs lower it, is still an
    empirical question.
</p>

<Refs
    list={[
        [
            "Estimating shots and variance on noisy quantum circuits (Seksaria & Prabhakar, 2025)",
            "https://arxiv.org/abs/2501.03194",
        ],
        [
            "Quantum Computing in the NISQ era and beyond (Preskill, 2018)",
            "https://arxiv.org/abs/1801.00862",
        ],
        [
            "A variational eigenvalue solver on a photonic quantum processor (Peruzzo et al., 2014)",
            "https://www.nature.com/articles/ncomms5213",
        ],
        [
            "Benchmarking quantum processor performance at scale (McKay et al., 2023; EPLG)",
            "https://arxiv.org/abs/2311.05933",
        ],
        [
            "A quantum engineer's guide to superconducting qubits (Krantz et al., 2019)",
            "https://arxiv.org/abs/1904.06560",
        ],
    ]}
></Refs>
