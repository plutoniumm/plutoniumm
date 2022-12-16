<script>
    import { onMount } from "svelte";

    onMount(() => {
        mermaid.init({
            securityLevel: "loose",
            theme: "base",
        });
        // const rects = [...document.querySelectorAll("rect:not([class])")];
        // rects.forEach((e) => e.setAttribute("rx", "5%"));

        const svg = document.querySelector("svg");
        const viewbox = svg.getAttribute("viewbox");
        console.log(svg);
        const attrs = viewbox.split(" ");
        const newAttrs = [attrs[1], attrs[0], attrs[3], attrs[2]];
        svg.setAttribute("viewbox", newAttrs.join(" "));
    });
</script>

<svelte:head>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/9.2.2/mermaid.min.js"
        integrity="sha512-IX+bU+wShHqfqaMHLMrtwi4nK6W/Z+QdZoL4kPNtRxI2wCLyHPMAdl3a43Fv1Foqv4AP+aiW6hg1dcrTt3xc+Q=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    ></script>
</svelte:head>

<pre class="mermaid">
gitGraph
    commit id:"2012"

    branch Development
    checkout Development
    commit id:"Learning HTML"
    commit id:"Using Inspect Element"

    <!-- branch CyberSec -->
    {#each new Array(12).fill(0) as id, yr}
        commit id:"{2012 + yr}"
        <!--  -->
    {/each}
</pre>

<style>
    :global(body) {
        background-color: #222;
        color: #fff;
        overflow-y: scroll;
    }

    :global(svg) {
        stroke: none;
    }
</style>
