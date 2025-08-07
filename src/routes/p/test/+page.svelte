<script lang="ts">
    // nodeploy
    import { Accordion, Link, Meta, Definations, define } from "$cpt";
    import { _, __ } from "$lib";
    // import * as MJS from "mathjs";
    // import M from "$lib/math";
    // const { Map, Rng, Cplx } = M;
</script>

<Meta
    title="Test Slide"
    sub="Recreational Math #00n"
    desc="A test slide for math content"
    date="21 June 2025"
></Meta>

<Definations
    generics={{
        C: ["E"],
        R: ["x", "y"],
    }}
    list={[
        define("c", "speed of light", "c"),
        define("m", "mass or slope, depending on context"),
    ]}
/>

{__`
y = mx + c \\
y = ax^2 + bx + c
`}

This is {_`E = mc^2`}.

<block />
