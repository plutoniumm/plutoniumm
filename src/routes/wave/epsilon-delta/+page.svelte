<script>
    // nodeploy
    import { _, __, Dataset } from "$lib";
    import { Image, Refs, Meta, Definations, define } from "$cpt";
</script>

<Meta
    title="Multiple first-principles"
    sub="Recreational Math #004"
    desc="Different ways to redefine the derivative"
    date="13 July 2025"
></Meta>

<Definations
    generics={{
        C: ["E", "ih"],
        R: ["x", "y", "a", "b"],
        fXX: ["f"],
    }}
    list={[
        define(
            "ℑ",
            "The imaginary part of a complex number, often also written as Im",
        ),
        define(
            "ε",
            "Dual number, often interpreted as an infinitesimal step. ε² = 0, but ε ≠ 0",
        ),
        define("h", "Variable, often interpreted as a small increment"),
        define("δ", "Variable, often interpreted as a small increment"),
        define("ϵ", "Epsilon, of δ fame."),
        define(
            "ih",
            "Variable, often interpreted as a small increment. Here, h is treated as real, and i is imaginary so that ih is complex",
        ),
    ]}
/>

We often define the fundamental derivative as:

{__`
    \frac{d}{dx} f = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
`}

which is a limit of the difference quotient as the increment
{_`h`} approaches zero. We try to move a small distance in one direction ({_`x`})
and see how far it forces us in the other direction ({_`y`}).

<Image
    href={"//en.wikipedia.org/wiki/Limit_of_a_function"}
    src={"//upload.wikimedia.org/wikipedia/commons/d/d5/Epsilon-delta_limit.svg"}
    alt={"Wikipedia: Limit of a function"}
></Image>

as in the image above, when at standing at {`(x=a,y=b)`}, we take a small step {_`\delta`}
in {_`x`}, and end up at {_`(x=a+\delta,y=b+\epsilon)`}. We see we also get a
small step {_`\epsilon`}, at the corresponding {_`y=b`}. Taking the same idea
forward, if {_`f'(x) = \frac{f(x + h) - f(x)}{h}`}, we can also define the
derivative, of the derivative, as:

{__`
\begin{align*}
    \frac{d^2f}{dx^2}
    &=\lim _{h\to 0}\frac{{\dfrac {f(x+h)-f(x)}{h}}-{\dfrac {f(x)-f(x-h)}{h}}}{h}\\
    &=\lim _{h\to 0}{\frac {f(x+h)-2f(x)+f(x-h)}{h^{2}}}
\end{align*}
`}

We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only {_`f`}

<h4>Imaginary Steps</h4>

This however still leaves us with a lot of freedom in how we choose the value
for {_`h`}. We can then also give it an imaginary value, and replace {_`h`} with
{_`ih`}, and get:

{__`
\frac{d}{dx} f = \lim_{h \to 0} \frac{f(x + ih) - f(x)}{ih}
`}

which implies, applying the Taylor series expansion, that:

{__`
\frac{f(x + ih) - f(x)}{ih} = f'(x) + ih \frac{f''(x)}{2!} - h^2 \frac{f^{(3)}(x)}{3!} + \cdots \\
`}

or taking just the real part both sides, we get:

{__`
\begin{align*}
f'(x) &= \Im\left[\frac{f(x + ih) - f(x)}{ih}\right] + h^2 \frac{f^{(3)}(x)}{3!} - \cdots \\
&= \frac{\Im[f(x + ih) - f(x)]}{h} + \mathcal{O}(h^2) \\
\end{align*}
`}

We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now {_`h^2`}, and not {_`h`}.

<h4>Automatic Differentiation</h4>

Just as we took a small real step {_`h`}, or a small imaginary step {_`ih`}, we
can also take a small <i>'dual'</i> step, using dual numbers, which are
peculiarly defined as, let {_`\varepsilon^2 = 0`}, but {_`\varepsilon \neq 0`}.
We can define a dual number as:

{__`a + b\varepsilon`}

This also implies we throw away anything involving {_`\varepsilon^2, \varepsilon^3, \cdots`},
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from {_`x \to x + \varepsilon`}. We expand via Taylor:

{__`f(x + \varepsilon) = f(x) + f'(x)\varepsilon + \frac{f''(x)}{2!}\varepsilon^2 + \cdots`}

But {_`\varepsilon^2 = 0`}, so: {_`f(x + \varepsilon) = f(x) + f'(x)\varepsilon`}

i.e.

{__`
f'(x) = \frac{f(x + \varepsilon) - f(x)}{\varepsilon}
`}

Now isn't that neat. Automatic differentiation.

<Refs list={[]}></Refs>

<style>
</style>
