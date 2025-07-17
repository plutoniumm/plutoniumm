<script lang="ts">
    import { Accordion, Link, Meta, Definations, define } from "$cpt";
    import { _, __ } from "$lib";
</script>

<Meta
    title="Fractional, complex, and fractional complex derivatives"
    sub="Recreational Math #003"
    desc="Non-integer and other continuous derivatives."
    date="29 June 2025"
></Meta>

<Definations
    generics={{
        N: ["n"],
        R: ["x", "y", "z"],
        fXX: ["f"],
    }}
    list={[
        define("D", "Derivative operator"),
        define("k", "Variable positive integer"),
        define("α", "Variable real"),
        define("Γ", "Gamma function", "wikipedia"),
    ]}
/>

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

{__`
\frac{d^2}{dx^2} f(x) = \frac{d}{dx} \left( \frac{d}{dx} f(x) \right) \\
\frac{d}{dx} f(x) = \frac{d^{0.5}}{dx^{0.5}} \left( \frac{d^{0.5}}{dx^{0.5}} f(x) \right) \\
`}

First and foremost, we define {_`D^k = \frac{d^k}{dx^k}`} as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of {_`x^n`}
which, in general, is

{__`
    \frac{d^k}{dx^k} x^n = D^k x^n  =\frac{n!}{(n-k)!} x^{n-k} = \frac{\Gamma(n+1)}{\Gamma(n-k+1)} x^{n-k}
`}

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

{__`D^{0.5} = \frac{\Gamma(n+1)}{\Gamma(n-\frac12+1)} x^{n-\frac12}`}. We can
now apply this twice to get the 1st derivative:

{__`D^{0.5} D^{0.5} x^n = \frac{\Gamma(n+1)}{\Gamma(n-\frac12+1)} \cdot \frac{\Gamma(n-\frac12+1)}{\Gamma(n-1+1)} x^{n-1} = \frac{\Gamma(n+1)}{\Gamma(n-1+1)} x^{n-1} = n x^{n-1} = D x^n.`}

So one can then see that {_`D^{0.5} x = \frac{2}{\sqrt{\pi}} \sqrt{x}`}. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

<h3>Derivatives of {_`e^{kx}`}</h3>
We know the basic ones like {_`D e^{kx} = k e^{kx}`} and
{_`D^2 e^{kx} = k^2 e^{kx}`}. From the pattern, we would expect that
{_`D^{\alpha} e^{kx} = k^{\alpha} e^{kx}`}, which would imply {_`D^{0.5} e^{kx} = \sqrt{k} e^{kx}`}.
It is trivial to see, if we apply {_`D^{0.5}`} twice, we get {_`D e^{kx}`}
back. So then what happens if we feed in {_`k=2, \alpha=i`}

{__`
\begin{align*}
    D^{i} e^{2x} &= 2^i e^{2x}
    &= e^{i \ln2} e^{2x}
    &= (\cos(\ln2) + i \sin(\ln2)) e^{2x}
\end{align*}
`}

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient. We can now even try to find {_`D^i e^{ix}`} which would be {_`i^i e^{ix}`}
or {_`e^{-\frac{\pi}{2}} e^{ix}`}. Now that we took the imaginary derivative of
a complex function, we got a real coefficient. In general, we can safely say
that non-integer derivatives may give us a real or complex result. Now if we
want a the derivative of say {_`\cos x`}, we can represent {_`\cos x = \frac{e^{ix} + e^{-ix}}{2}`}
and then proceed from there. One can verify that {_`D^{\alpha} \cos x = \cos x + \frac{\pi}2 \alpha`}.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is {_`D^i x`}?

<h3>{_`D^i x`}</h3>
Simple application of the definition gives us {_`D^i x = \frac{1}{\Gamma(2-i)} x^{1 - i}`}

Here {_`\frac{1}{\Gamma(2-i)} = \frac{i-1}{2\pi}\Gamma(i)`}, and {_`x^{1 - i} = x \cos (\ln x) + i x \sin(\ln x)`}.
Giving us

{__`
    D^i x = \frac{i-1}{2\pi} \Gamma(i) \left( x \cos (\ln x) + i x \sin(\ln x) \right)
`}

Absolute insanity.

<Accordion title="Continuous Taylor's Series">
    The way the Taylor's series is defined in its discrete form is as follows:

    {__`
        f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n
    `}

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    {__`
        f(x) = \int_0^{\infty} \frac{D^t f(a)}{\Gamma(t+1)} (x-a)^t dt
    `}
</Accordion>

<h4>References</h4>
<ul>
    <li>
        <Link
            href="https://www.youtube.com/playlist?list=PLJb1qAQIrmmB_ma3YrfuOXTPOQawokYV_"
        >
            Fractional Derivatives (playlist)
        </Link>
    </li>
    <li>
        <Link href="https://en.m.wikipedia.org/wiki/Gamma_function">
            Gamma Function
        </Link>
    </li>
</ul>
