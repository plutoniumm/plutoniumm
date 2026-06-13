<script>
    import { Refs, Meta, Definations, define, Accordion } from "$cpt";
    import { _, __ } from "$lib";
    import RingMul from "./ringmul.svelte";
    import Playground from "./playground.svelte";
    import PQCheck from "./pqcheck.svelte";
</script>

<Meta
    title="Ring Learning with Errors"
    sub="Post-Quantum Cryptography"
    desc="Quantum-safe encryption from deliberately noisy polynomial arithmetic"
    date="10 June 2026"
></Meta>

<PQCheck></PQCheck>

Cast:
<ul>
    <li>Alice (wants to receive secrets)</li>
    <li>Bob (wants to send her one)</li>
    <li>Eve (reads everything in transit)</li>
    <li>a large quantum computer (arrival date unknown)</li>
</ul>

<Definations
    list={[
        define(
            "q",
            "The size of the clock: a prime modulus, all arithmetic keeps only remainders, e.g. $20 \bmod 7 = 6$. Toy values 17 and 97 here; ML-KEM uses 3329",
        ),
        define(
            "n",
            "Ring dimension, a power of two: every polynomial is a tray of $n$ coefficients. Toy values 4 and 8 here; ML-KEM uses 256",
        ),
        define(
            "x",
            "Formal placeholder, never given a value; its powers only label coefficient slots",
        ),
        define(
            "s",
            "Alice's secret, a polynomial with small coefficients; the thing Eve wants",
        ),
        define(
            "a",
            "Public polynomial, every coefficient drawn uniformly at random",
        ),
        define(
            "b",
            "Public noisy product b = a·s + e, the other half of Alice's public key",
        ),
        define(
            "e",
            "Error polynomial: small, fresh, deliberate. The lie that makes the problem hard",
        ),
        define(
            "pk",
            "Alice's public key, the pair $(a, b)$; published to everyone, Eve included",
        ),
        define("sk", "Alice's secret key, just $s$; never leaves her machine"),
        define(
            "r",
            "Bob's own small randomness, drawn fresh for every encryption",
        ),
        define(
            "m",
            "The message, a polynomial with coefficients 0 or 1 (one bit per slot)",
        ),
        define("u", "First half of the ciphertext, u = a·r + e₁"),
        define("v", "Second half of the ciphertext, v = b·r + e₂ + ⌊q/2⌋·m"),
        define(
            "w",
            "Decryption residue w = e·r − e₁·s + e₂; rounding succeeds while every |wᵢ| < q/4",
        ),
        define(
            "η",
            "Noise bound: 'small' always means coefficients in [−η, η]",
        ),
        define(
            "R",
            "The polynomial ring itself; $R_q = \mathbb{Z}_q[x]/(x^n + 1)$, where all the arithmetic of the scheme takes place",
        ),
    ]}
/>

<p>
    Nearly every secret on the internet is guarded by one of two locks: RSA,
    which bets that splitting a 2000-bit number into its two prime factors is
    hopeless, and elliptic curves, which make a similar bet about reversing a
    certain curve arithmetic. In 1994 Peter Shor showed that a sufficiently
    large quantum computer wins both bets in an afternoon. No such machine
    exists yet, but traffic recorded today can be decrypted whenever one shows
    up ("harvest now, decrypt later"), so the locks have to be replaced before
    the machine arrives, not after.
</p>

<p>
    NIST ran an eight-year competition for quantum-resistant replacements, and
    in 2024 the winner for encryption, ML-KEM (formerly Kyber), became a
    standard. Your browser very likely already uses it on every TLS connection.
    The mathematics under its hood is a problem called:
</p>

<h3>Ring Learning with Errors</h3>

<p>
    Everything below happens on a clock. Working "mod {_`q`}" means we count on
    a dial with {_`q`} positions, keeping only the remainder after dividing by {_`q`}.
    Take mod 17: {_`15 + 5 = 20`}, and 20 divided by 17 leaves remainder 3, so
    we write {_`15 + 5 \equiv 3`}. Likewise {_`9 \times 9 = 81 = 4 \times 17 +
    13`}, so {_`9 \times 9 \equiv 13`}. One quirk: a clock has no notion of big
    or small. 16 is a neighbour of 0, one step behind it, so {_`16
    \equiv -1`}: both names point at the same position on the dial. That means
    "approximately correct" loses its meaning the moment numbers wrap around; a
    value that looks enormous may be one step away from zero.
</p>

<p>
    Solving exact linear equations is easy. Gaussian elimination, the
    substitute-and-cancel, works just as well mod {_`q`}, because adding,
    subtracting and multiplying all behave themselves on the clock. If I hold a
    secret pair {_`(s_1,
    s_2) = (3, 7)`} and hand you exact equations
</p>

{__`
\begin{aligned}
2 s_1 + 5 s_2 &\equiv 7 \pmod{17}\\
4 s_1 + s_2 &\equiv 2 \pmod{17}
\end{aligned}
`}

<p>you recover the secret in two lines of working:</p>

{__`
\begin{aligned}
2 \times \text{first} - \text{second}: \qquad 9 s_2 &\equiv 14 - 2 \equiv 12
&&\Rightarrow\ s_2 \equiv 7\\
\text{put } s_2 \text{ into second}: \qquad 4 s_1 &\equiv 2 - 7 \equiv 12
&&\Rightarrow\ s_1 \equiv 3
\end{aligned}
`}

<p>
    The two arrows are clock division: {_`9 \times 7 = 63 \equiv 12`} and {_`4
    \times 3 = 12`}, and mod a prime every such division lands on exactly one
    answer. Two unknowns, two equations, done. The same process can be extended
    with very little modification to thousands of unknowns.
</p>

<p>
    Now I do something petty: before publishing each equation, I flip a coin and
    add {_`+1`} or {_`-1`} to its right-hand side. You receive
</p>

{__`
\begin{aligned}
2 s_1 + 5 s_2 &\approx 8 \pmod{17}\\
4 s_1 + s_2 &\approx 1 \pmod{17}
\end{aligned}
`}

<p>
    Solve these as if they were exact and you get {_`(s_1, s_2) = (14, 13)`}.
    The truth was {_`(3, 7)`}. The reason for such a big error is that the
    process of multiplication amplifies the noise, so that the error in the
    solution is much larger than the error in the data. So in the previous
    equation when we doubled the first equation, we also doubled the error, so
    the resulting equation was off by 2. The subtraction in the next step added
    the second equation's error to it too so what was once exact, is now already
    off by at least '3'. When we then multiply in the next step by {_`9 \mod 17`}
    the {_`\pm 1`} turns into {_`\pm 9`}. We can see how as this process scales
    up, the errors will scale up disproportionately.
</p>

<p>
    There is a secondary issue here, one may ask why can we not 'fit' a solution
    to the problem as opposed to solve it. The fundamental assumption behind
    least squares regression (say) is that it assumes that 16 is far away from
    0, so the penalty for a solution that is off by 16 is much larger than a
    solution that is off by 1. This is not true on a clock. The error of 16 is
    the same as the error of 1, since both of them are only 1 away from 0.
</p>

<p>
    This is the <i>Learning With Errors</i> problem, introduced by Oded Regev in
    2005: given many noisy equations {_`b_i \approx \vec{a}_i \cdot \vec{s}`}
    in a secret vector {_`\vec{s}`}, find the secret. Here {_`\vec{s}`} is the list
    of secret numbers, each {_`\vec{a}_i`}
    is a list of coefficients, and {_`\vec{a}_i \cdot \vec{s}`} gives us something
    like {_`2 s_1 + 5 s_2`} but with hundreds of terms. With enough equations the
    secret is uniquely determined, so the information is all there; what is missing
    is any efficient algorithm to extract it. The best known attacks, classical
    <i>and</i> quantum take exponential time. And Regev proved something stronger
    and stranger than that.
</p>

<h3>From numbers to polynomials</h3>

<p>
    Plain LWE has a logistics problem. One equation costs {_`n`} published coefficients,
    hardness needs {_`n`} in the hundreds, and pinning down {_`n`}
    unknowns needs {_`n`} equations: {_`n^2`} numbers in total, megabytes of public
    key. The fix is to publish {_`n`} numbers once and let an arithmetic rule churn
    out {_`n`} equations from them. That rule is polynomial arithmetic.
</p>

<p>
    We work with polynomials of degree less than {_`n`}, with coefficients mod {_`q`}.
    A polynomial here is a tray of {_`n`} clock numbers, and {_`x`} is never given
    a value, we actually care only about its power/exponent. Adding two of them is
    coefficient-wise clock addition. Multiplying is ordinary long multiplication
    followed by two cleanup rules: every coefficient is reduced mod
    {_`q`}, and every power that reaches {_`x^n`}
    is folded back using the rule
</p>

{__`x^n \equiv -1`}

<p>
    which is equivalent to taking a remainder after dividing by {_`x^n + 1`}
    . A power like {_`x^{n+2}`} becomes {_`-x^2`}: it wraps around to the low
    end and picks up a minus sign on the way. Consider toy numbers {_`n = 4`}, {_`q
    = 17`}, with the polynomials {_`1 + 2x + 3x^2 + 4x^3`} and {_`2 + x`}.
</p>

{__`
\begin{aligned}
(1 + 2x + 3x^2 + 4x^3)(2 + x) &= 2 + 5x + 8x^2 + 11x^3 + 4x^4\\
&\equiv -2 + 5x + 8x^2 + 11x^3\\
&\equiv 15 + 5x + 8x^2 + 11x^3 \pmod{17}
\end{aligned}
`}

<p>
    That single fold, {_`4x^4 \equiv -4`} here, is the clock being applied to polynomials
    which will eventually also keep the problem from growing too big. Play with it
    below; the tinted terms are the ones that overflow past {_`x^3`} and fold back
    with a sign flip.
</p>

<blockquote>
    Cryptography is about finding algorithms which are very very easy to compute
    in the forward direction but very very hard to reverse. We call such
    algorithms <i> one way functions </i>
</blockquote>

<RingMul></RingMul>

<p>
    This structure, written {_`R_q = \mathbb{Z}_q[x]/(x^n + 1)`} with {_`n`} a power
    of two and {_`q`} prime, is called a polynomial <b>ring</b>, and the
    wrap-with-sign-flip multiplication is called <i>negacyclic</i>.
</p>

<blockquote>
    Reading the notation left to right: {_`\mathbb{Z}_q`} is the clock numbers,
    {_`\mathbb{Z}_q[x]`} is polynomials in {_`x`} with clock coefficients, and dividing
    by {_`(x^n + 1)`} declares that {_`x^n + 1`} counts as zero. Rearranged, that
    is the fold rule {_`x^n \equiv -1`}.
</blockquote>

<p>
    The choice has two advantages. First, one ring multiplication mixes every
    coefficient of one polynomial with every coefficient of the other, so a
    single ring equation packs {_`n`} scalar equations into {_`n`} published numbers
    instead of {_`n^2`}. Second, negacyclic multiplication is a convolution, and
    FFT-style tricks compute it in {_`\mathcal{O}(n \log n)`}
    steps instead of {_`\mathcal{O}(n^2)`}.
</p>

<h3>The RLWE problem</h3>

<p>
    We can now play the same learning with errors game, but inside a ring. Alice
    picks a secret polynomial {_`s`}
    whose coefficients are <i>small</i>, say from {_`\{-1, 0,
    1\}`}. A sample is produced by drawing a random polynomial {_`a`} (each of its
    {_`n`} coefficients rolled fresh and uniformly from {_`0`} to {_`q-1`}), a
    fresh small error polynomial {_`e`} playing the part of the coin-flip lies, and
    publishing the pair
</p>

{__`(a,\ b = a \cdot s + e)`}

<p>
    In the toy ring of the widget above ({_`n = 4`}, {_`q = 17`}), one full
    sample:
</p>

{__`
\begin{alignedat}{2}
s &= 1 + x - x^3 \qquad && \text{secret, small}\\
a &= 6 + 14x + 3x^2 + 9x^3\quad && \text{public, uniform}\\
a \cdot s &\equiv 11 + 6x + 9x^2 + 6x^3\quad && \text{fold, then mod 17}\\
e &= 1 - x + x^3 && \text{small lies}\\
b &\equiv 12 + 5x + 9x^2 + 7x^3 && \text{published}
\end{alignedat}
`}

<p>
    Eve receives {_`(a, b)`}, and as many more such pairs as she cares to
    collect. Recovering {_`s`} from them is the RLWE problem, and nobody knows how
    to do it efficiently. Encryption will rely on something even more basic: {_`b`}
    cannot be told apart from a uniformly random polynomial at all. Everything Eve
    intercepts in the scheme below is built out of RLWE samples, so everything she
    intercepts looks like static.
</p>

<p>
    To appreciate what the noise buys, delete it. If {_`b = a \cdot s`}
    exactly, then {_`s = b \cdot a^{-1}`}, one division in the ring (a random {_`a`}
    is invertible with high probability), and the secret falls out instantly. The
    entire security rests on those small errors. Lyubashevsky, Peikert and Regev
    proved that solving RLWE on average is as hard as worst-case short-vector problems
    on ideal lattices. After fifteen years of cryptanalysis, quantum algorithms included,
    nothing better than exponential attacks is known.
</p>

<xxx />

<h3>An actual cryptosystem</h3>

<p>
    Hardness alone does not encrypt anything; we need the LPR scheme, named
    after the same three initials, which turns RLWE into public-key encryption
    in three short moves. The approach is as such: Alice's public key will be
    one noisy equation, Bob's ciphertext will be two noisy equations built on
    top of it, and decryption will be the one subtraction in which all the large
    random terms annihilate each other, leaving only the message plus a puddle
    of small noise. From here on, "small" always means coefficients in {_`[-\eta,
    \eta]`} for some tiny {_`\eta`}.
</p>

<p>
    <b>Key generation.</b> Alice draws a uniform random {_`a`}, a small secret {_`s`},
    and a small error {_`e`}, then publishes the RLWE sample as her public key
    and keeps {_`s`}:
</p>

{__`
\mathrm{pk} = (a,\ b = a \cdot s + e), \qquad \mathrm{sk} = s
`}

<p>
    The sample worked out in the last section is exactly such a key, so we keep
    those numbers and follow one message all the way through:
</p>

{__`
\begin{aligned}
\mathrm{pk} &= (6 + 14x + 3x^2 + 9x^3,\ \ 12 + 5x + 9x^2 + 7x^3)\\
\mathrm{sk} &= 1 + x - x^3
\end{aligned}
`}

<p>
    <b>Encryption.</b> Bob wants to send {_`n`} bits, so he writes them as a polynomial
    {_`m`} with coefficients 0 or 1, then scales it by {_`\lfloor
    q/2 \rfloor`}: each 0 stays at 0, each 1 moves to the point diametrically
    opposite on the clock, as far from 0 as it can possibly get. That distance
    is deliberate. Noise will shove every coefficient around, and the two bit
    values must remain distinguishable afterwards, so they start at the two
    points of maximum separation. He draws his own small {_`r`}, {_`e_1`},
    {_`e_2`} and sends the pair
</p>

{__`
\begin{aligned}
u &= a \cdot r + e_1\\
v &= b \cdot r + e_2 + \lfloor q/2 \rfloor \cdot m
\end{aligned}
`}

<p>
    Say Bob's bits are {_`(1, 0, 1, 1)`}, so {_`m = 1 + x^2 + x^3`} and
    {_`\lfloor 17/2 \rfloor = 8`} scales it to {_`8 + 8x^2 + 8x^3`}. He draws
    {_`r = 1 - x^2 + x^3`}, {_`e_1 = x + x^2 - x^3`}, {_`e_2 = -1 + x`}, and
    folds and reduces mod 17 as always:
</p>

{__`
\begin{aligned}
u &= a \cdot r + e_1 = (12 + 3x + 5x^2 + x^3) + (x + x^2 - x^3)\\
&\equiv 12 + 4x + 6x^2\\[4pt]
v &= b \cdot r + e_2 + 8m\\
&= (16 + 3x + 7x^2 + 14x^3) + (-1 + x) + (8 + 8x^2 + 8x^3)\\
&\equiv 6 + 4x + 15x^2 + 5x^3
\end{aligned}
`}

<blockquote>
    Note: what Eve sees. {_`u`} is an RLWE sample, and {_`v`} is an RLWE sample with
    the message added, so all of it looks like uniform static to her.
</blockquote>

<p>
    <b>Decryption.</b> Alice computes {_`v - u \cdot s`} and watches almost everything
    cancel:
</p>

{__`
\begin{aligned}
v - u \cdot s &= (a s + e) r + e_2 + \lfloor q/2 \rfloor m - (a r + e_1) s\\
&= \lfloor q/2 \rfloor \, m + \underbrace{e \cdot r - e_1 \cdot s + e_2}_{w,\ \text{small}}
\end{aligned}
`}

<p>
    The huge term {_`a \cdot r \cdot s`} appears once with each sign and vanishes;
    only the message and a residue {_`w`} of small-times-small products survive.
    Each coefficient of the result is {_`m_i \lfloor q/2
    \rfloor + w_i`}, so Alice just rounds: a coefficient closer to 0 (in clock
    distance) decodes to 0, one closer to {_`q/2`} decodes to 1. The rounding is
    exact when every {_`|w_i| < q/4`}.
</p>

<p>
    On the running example Alice computes {_`u \cdot s \equiv 16 + 5x + 10x^2 +
    11x^3`} and subtracts:
</p>

{__`
\begin{aligned}
v - u \cdot s &\equiv 7 + 16x + 5x^2 + 11x^3\\
&= 7 - x + 5x^2 - 6x^3 \qquad \text{(centered mod 17)}\\
&= \underbrace{8 + 8x^2 + 8x^3}_{8m} + \underbrace{(-1 - x - 3x^2 + 3x^3)}_{w}
\end{aligned}
`}

<p>
    Every coefficient of {_`w`} has size at most 3, inside the {_`q/4 \approx
    4.25`} boundary, so the rounding is clean: 7, 5 and {_`-6`} all sit farther than
    4.25 from 0, so they decode to 1, while {_`-1`} sits inside and decodes to 0.
    Out come the bits {_`(1, 0, 1, 1)`} Bob sent.
</p>

<p>
    The noise scale here is the parameter we have to be careful to tune. The
    coefficients of {_`e
    \cdot r`} are sums of {_`n`} products of numbers of size {_`\eta`}, so the
    noise grows like {_`n \eta^2`} in the worst case. Make {_`\eta`} too small and
    RLWE gets easier to attack; make it too big and Alice starts misreading her own
    mail. Real parameter sets live in the comfortable middle, with failure odds around
    one in {_`2^{160}`}.
</p>

<h3>Seeing is believing</h3>

<p>
    Below is the full LPR scheme running live with {_`n = 8`}, {_`q = 97`}, so {_`\lfloor q/2 \rfloor = 48`}
    and the rounding boundary sits at {_`q/4
    \approx 24`}. The chart shows the eight coefficients of {_`v - u \cdot s`},
    the quantity Alice actually looks at. Bars inside the shaded band decode to
    0, bars outside it decode to 1, and a bar turns red when its bit came out
    wrong.
</p>

<Playground></Playground>

<p>Some things worth trying:</p>
<ul>
    <li>
        Set {_`\eta = 0`}. Decryption becomes perfect, every bar sits exactly on
        0 or 48, and the scheme is broken: {_`b = a \cdot s`} with no noise, so Eve
        divides and reads your mail.
    </li>
    <li>
        At {_`\eta = 1`} or 2, the bars jitter around their targets but stay on the
        right side of the boundary. This is the regime real schemes operate in: noisy
        enough to be hard, quiet enough to decrypt.
    </li>
    <li>
        Crank {_`\eta`} up and re-encrypt a few times. Watch bars drift across the
        dashed line and bits flip red. The noise that protects the secret is now
        eating the message.
    </li>
</ul>

<xxx />

<h3>From toy to the real thing</h3>

<p>
    Scale the toy up and you have arrived at the standard. ML-KEM works in a
    similar manner with {_`n = 256`} and {_`q = 3329`}, errors of size {_`\eta
    = 2`}, and one extra trick: instead of single ring elements it uses small
    vectors and matrices <i>of</i> ring elements (two to four of them), a
    variant called Module-LWE that lets one ring design serve three security
    levels. The ML-KEM-768 level decrypts wrongly with probability around {_`2^{-164}`},
    which is to say never. Since 2024 Chrome and Firefox have shipped it
    hybridised with the old elliptic-curve exchange under the name
    X25519MLKEM768, so both locks would have to fail for the session to fall. No
    need to take that on faith, either: the coloured box at the very top of this
    page should indicate if your browser uses Post Quantum (Allegedly)
    Cryptography.
</p>

<Refs
    list={[
        [
            "On Ideal Lattices and Learning with Errors Over Rings (LPR, 2010)",
            "https://eprint.iacr.org/2012/230",
        ],
        [
            "The Learning with Errors Problem (Regev's survey)",
            "https://cims.nyu.edu/~regev/papers/lwesurvey.pdf",
        ],
        [
            "Worst-case to average-case reduction for LWE (MIT lecture notes)",
            "https://people.csail.mit.edu/vinodv/CS294/lecture4.pdf",
        ],
        [
            "FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism",
            "https://csrc.nist.gov/pubs/fips/203/final",
        ],
        [
            "Ring learning with errors (Wikipedia)",
            "https://en.wikipedia.org/wiki/Ring_learning_with_errors",
        ],
    ]}
></Refs>
