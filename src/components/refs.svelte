<script>
    import { onMount } from "svelte";
    import Link from "./link.svelte";

    export let list = [];
    let toc_list = [];

    onMount(() => {
        const headings = "h2, h3, h4";

        let toc = Array.from(document.querySelectorAll(headings));
        toc_list = toc.map((el) => {
            const id =
                el.id || el.textContent.replace(/\s+/g, "-").toLowerCase();
            el.id = id;

            return { id, text: el.innerHTML };
        });
    });
</script>

{#if list.length}
    <h3>Table of Contents</h3>
    <ul class="toc">
        {#each toc_list as item}
            <li>
                <Link href={`#${item.id}`}>{@html item.text}</Link>
            </li>
        {/each}
    </ul>
{/if}

<h3>References</h3>
<ul>
    {#each list as re}
        <li>
            <Link href={re[1]}>{re[0]}</Link>
        </li>
    {/each}
</ul>
