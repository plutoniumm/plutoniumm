<script lang="ts">
    // nodeploy
    import Accordion from "$cpt/accord.svelte";
    import { _, __ } from "$lib";
    import Link from "$cpt/link.svelte";
    import Meta from "$cpt/meta.svelte";
    import * as MJS from "mathjs";
    import M from "$lib/math";
    const { Map, Rng, Cplx } = M;
</script>

<Meta
    title="Test Slide"
    sub="Recreational Math #00n"
    desc="A test slide for math content"
    date="21 June 2025"
></Meta>

{__`
y = mx + c \\
y = ax^2 + bx + c
`}

This is {_`E = mc^2`}.

<block />
