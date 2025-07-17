<script>
    import { _ } from "$lib/index";
    import { onMount } from "svelte";

    export let top = [];
    export let base;
    export let base_str = "?";
    let powoff = 1;
    let shift = 30;

    if (base_str === "?" && base !== undefined) {
        base_str = base.toString();
    }

    onMount(() => {
        if (top.includes(".")) {
            powoff = top.length - top.indexOf(".");
        }

        if (base <= 9 && base >= 2 && base % 1 === 0) {
            shift = 24;
        }
    });
</script>

<p class="w-100 tc">
    <svg
        width={15 + top.length * 30}
        height="80"
        font-family="sans-serif"
        font-weight="300"
        font-size="24"
        transform="scale(1.25)"
    >
        <text x="10" y="20">
            {#each top as item, index}
                <tspan id="digit" x={15 + index * 30} y="25">{item}</tspan>
            {/each}
        </text>

        <text x="10" y="45">
            {#each top as _, index}
                <tspan id="bar" x={10 + index * 30} y="45">―</tspan>
            {/each}
        </text>

        <text x="10" y="70" font-size="12">
            {#each top as _, index}
                <tspan id="base" x={10 + index * 30} y="65">
                    ({base_str})
                    <sup>{top.length - index}</sup>
                </tspan>
                <tspan id="power" x={shift + index * 30} y="60">
                    {top.length - index - powoff}
                </tspan>
            {/each}
        </text>
    </svg>
</p>
