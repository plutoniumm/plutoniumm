<script lang="ts">
    import {
        update_ignores,
        update_definations,
        run,
        Defs,
        Undefs,
    } from "$lib/define";
    import StdDefns from "$data/defns.json";
    import { onMount } from "svelte";
    import { _, __ } from "$lib";

    export let //
        undefind = [],
        list: Defination[] = [],
        generics: Record<string, string[]> = {},
        ignores: string = "";

    const gmap = {
        R: "\\mathbb{R}",
        C: "\\mathbb{C}",
        X: "\\mathbb{X}",
        N: "\\mathbb{N}",
        I: "\\mathbb{I}",
        fRR: "\\mathbb{f}: \\mathbb{R} \\to \\mathbb{R}",
        fRC: "\\mathbb{f}: \\mathbb{R} \\to \\mathbb{C}",
        fCR: "\\mathbb{f}: \\mathbb{C} \\to \\mathbb{R}",
        fCC: "\\mathbb{f}: \\mathbb{C} \\to \\mathbb{C}",
        fXX: "\\mathbb{f}: \\mathbb{X} \\to \\mathbb{X}",
        Unit: "[0, 1]",
        Circle: "[-\\pi, \\pi]",
        Interval: "[-\\infty, \\infty]",
        Hex: "[0-F]_{16} = [0-15]_{10}",
    };

    const skip = Object.values(generics).flat();
    for (let i = 0; i < ignores.length; i++) {
        const ignore = ignores[i].trim();
        if (ignore.length > 0 && !skip.includes(ignore)) {
            skip.push(ignore);
        }
    }

    const MAP = (...args) => Array.prototype.map.call(...args);
    const sel = (id) => `span.${id}:not(:has(span))`;

    onMount(async () => {
        update_ignores(skip);
        await update_definations(StdDefns, Defs);
        await update_definations(list, Defs);

        MAP(document.querySelectorAll(".katex-html"), (node) => {
            MAP(node.querySelectorAll(sel("mord")), (e) =>
                run(["f8f", "48f", "84f", "4a8", "f84", "f48"], e),
            );

            MAP(
                node.querySelectorAll(
                    [sel("mop"), sel("mopen"), sel("mclose")].join(", "),
                ),
                (e) => run(["025", "029", "015", "88f", "808"], e),
            );
        });

        undefind = Undefs;
    });
</script>

<div class="generics p10">
    {#if Object.keys(generics).length}
        Generic Variables: 'commonly used' notation which I will not otherwise
        define. For the other ones click on any coloured variable to define it.
        <br />
        <ul>
            {#each Object.entries(generics) as [key, values]}
                {@const vars = values.map((v) => v.trim()).join(", ")}
                <li>
                    {@html _(`${vars} \\in ${gmap[key]}`)}
                </li>
            {/each}
        </ul>
    {/if}
    {#if undefind.length}
        <br />
        Still Undefined: <br />
        <ul>
            {#each undefind as u}
                <li>{@html _(`${u}`)}</li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .generics {
        background: #fff0;
        border-top: 2px dotted #8884;
        border-bottom: 2px solid #8884;
        width: calc(100% - 20px);
        margin: 10px 0;
    }
</style>
