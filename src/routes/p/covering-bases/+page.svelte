<script lang="ts">
    import { Accordion, Refs, Meta, Definations, define } from "$cpt";
    import Bars from "./bars.svelte";
    import { _, __ } from "$lib";

    function expand_str(
        nums: number[] = [],
        base: number = -2,
        suffix: string = "",
        base_str: string = "",
    ): string {
        nums.reverse();
        if (base_str.length === 0) {
            base_str = base.toString();
        }

        let str1 = "";
        let str2 = "";
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            str1 =
                `${num} \cdot (${base_str})^${i}` +
                (str1.length > 0 ? " + " : "") +
                str1;

            if (typeof base === "object") continue;
            str2 =
                `${num} \cdot (${Math.pow(base, i).toFixed(2)}` +
                (str2.length > 0 ? " + " : "") +
                str2;
        }

        if (str2.length > 1) str2 = "= " + str2;

        return _`${str1} ${str2} ${suffix}`;
    }

    function toBase(num: number, base: number): string {
        return num.toString(base).toUpperCase();
    }
</script>

<Meta
    title="Going to 3.14th base"
    sub="Recreational Math #002"
    desc="Bases other than positive integers"
    date="29 May 2025"
    wallpaper="naohoits4g"
></Meta>

<Definations
    generics={{
        C: ["z"],
        Hex: ["A", "F"],
    }}
    list={[
        define("n", "Variable. Usually positive integer"),
        define("r", "Remainder. Usually < divisor base"),
        define("b", "Base of number system"),
    ]}
/>

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

<Bars top={[4, 2, 0]} base={10}></Bars>

or very simply {@html expand_str([4, 2, 0], 10, "")}. The same number in base 2
is {@html expand_str([1, 1, 0, 1, 0, 0, 1, 0, 0], 2, "")}. Which is written as:

<Bars top={[1, 1, 0, 1, 0, 0, 1, 0, 0]} base={2}></Bars>

<h3>Base Conversion</h3>
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

{__`
\begin{align*}
	420 \div 2 &= 210\ &r\ 0\\
	210 \div 2 &= 105\ &r\ 0\\
	105 \div 2 &= 52\ &r\ 1\\
	52 \div 2 &= 26\ &r\ 0\\
	26 \div 2 &= 13\ &r\ 0\\
	13 \div 2 &= 6\ &r\ 1\\
	6 \div 2 &= 3\ &r\ 0\\
	3 \div 2 &= 1\ &r\ 1
\end{align*}
`}

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
{@html toBase(420, 2)}. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

{__`
\begin{align*}
  420 \div 7 &= 60\ &r\ 0\\
  60 \div 7 &= 8\ &r\ 4\\
  8 \div 7 &= 1\ &r\ 1\\
\end{align*}
`}

which again, including the last quotient, gives us the base 7 number
{@html toBase(420, 7)}.

<Bars top={[1, 1, 4, 0]} base={7}></Bars>

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base {_`b`}, we use the digits 0 to
{_`b-1`} to represent the number, with the obvious exception of 0.

<h3>Rational Bases</h3>
While we did say for a given base {_`b`} we use the digits 0 to {_`b-1`}, we'll
slightly modify this to say we'll use the digits 0 to {_`|b|-1`} for a base
{_`b`}, this would let us allow for negative bases with just a small change in
how the numbers are read.

<Bars top={[1, 1, 1, 0]} base={-2}></Bars>
The above number is read as {@html expand_str([1, 1, 1, 0], -2, "= -6")}. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say &lt;1). If we use single-part fractions,
i.e. {_`\frac1n`}, we can even flip around the traditional positive power
numbers around the decimal point.

<Accordion title="Base ½ example">
    Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    {__`
  \begin{align*}
    31 \div 2 &= 15\ &r\ 1\\
    15 \div 2 &= 7\ &r\ 1\\
    7 \div 2 &= 3\ &r\ 1\\
    3 \div 2 &= 1\ &r\ 1\\
    \text{ and, }\\
    0.125 \times 2 &= 0.25\ &r\ 0\\
    0.25 \times 2 &= 0.5\ &r\ 0\\
    0.5 \times 2 &= 1.0\ &r\ 1\\
  \end{align*}
  `}

    Or,

    <Bars top={[1, 1, 1, 1, ".", 0, 0, 1]} base={2}></Bars>

    To obtain the same result, follow the same process with the base {_`\frac1n`}.
    We can see efficiently, all that needs to be done is to rotate everything
    around the first digit before the decimal point.

    <Bars top={[1, 0, 0, 1, ".", 1, 1, 1]} base={1 / 2} base_str={"½"}></Bars>

    Just as before, the way for base {_`b`} we used digits 0 to {_`|b|-1`}. For
    base {_`\frac1b`} also we can do the same.
</Accordion>

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form {_`\frac1n`}? So, say how we write 265 in base {_`\frac73`}.

{__`
\begin{align*}
  265 \div 7 &= 37\ &r\ 6, 37 \times 3 &= 111\\
  111 \div 7 &= 15\ &r\ 6, 15 \times 3 &= 45\\
  45 \div 7 &= 6\ &r\ 3, 6 \times 3 &= 18\\
  18 \div 7 &= 2\ &r\ 4, 2 \times 3 &= 6\\
  6 \div 7 &= 0\ &r\ 6, 0 \times 3 &= 0\\
\end{align*}
`}

So very simply {@html expand_str(
    [6, 4, 3, 6, 6],
    7 / 3,
    `\approx 265`,
    `\frac73`,
)}. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base {_`\frac37`} also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
<br />
<br />
Th, however, also means that we will be using the same digits 0 to 6 for {_`\frac37`}
also, which is natural considering that for fractions &lt;1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the first digit.

<h3>Irrational and Transcendental Bases</h3>
The easiest to start with is an 'nth' root base, such as {_`\sqrt[4]{5}`}. This
should be related to being in base 5. So consider 42 in base 5, or {parseInt(
    "42",
    5,
)} in base 10. We can very easily first write

<Bars top={[4, 0, 0, 0, 2, 0, 0, 0, 0]} base={Math.pow(5, 0.25)} base_str={"∜5"}
></Bars>

<Bars top={[4, 2]} base={5}></Bars>

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that {_`(\sqrt[4]5)^{2n}`} are the standard place values
when we use five as our base.
<br />
<br />
So now, if we were to create a new number 421 in base {_`\sqrt[4]{5}`}, it's
value would be {@html expand_str(
    [1, 2, 4, 2, 1],
    Math.pow(5, 0.25),
    "= 24.622 Leftrightarrow [6 + 2 \times 5^{\frac34} + 4 \times 5^{\frac24} + 2 \times 5^{\frac14}]",
    "sqrt[4]{5}",
)}. Or as an exercise you can verify that converting {_`\sqrt{5}`} to ten for 1234,
is {_`[1234]_{\sqrt5} = [14 + 8 \sqrt5]_{10}`}. Finally, we can use these ideas
to use the base {_`\pi`}. Then 123 in base three would be {@html expand_str(
    [1, 2, 3],
    3.1415926535,
    "approx 19.15",
    "pi",
)}.

<h3>Removing Constraints</h3>
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, {_`[0 \rightarrow 9, A \rightarrow F]`}, but in base 7. Then
the number F1 would be {@html expand_str([15, 1], 7, "= 106_{10}")}. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly {@html expand_str(
    [7, 9, 10, 4, 5],
    2,
    "= 237",
)}

<h3>Going further</h3>
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, {_`\omega = \frac{-1}2 + \frac{i\sqrt3}2`}. So a simple
number like 1234 would be

<Bars top={[1, 2, 3, 4]} base={5} base_str={"ω"}></Bars>

{@html expand_str(
    [1, 2, 3, 4],
    [-0.5, Math.sqrt(3) / 2],
    "= 5 + 3 omega + 2omega^2.",
    "ω",
)}

<Refs
    list={[
        [
            "Can any Number be a Base? (video)",
            "https://www.youtube.com/watch?v=PQAhC1M93C8",
        ],
    ]}
></Refs>
