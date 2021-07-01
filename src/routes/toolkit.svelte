<script>
    import Card from "$lib/components/card.svelte";
    import Dropdown from "$lib/components/select.svelte";
    import { func } from "$lib/store";
    import { css_minify, js_minify } from "$lib/functions";

    let textarea = "";

    const jobProcessor = () => {
        const type = $func.split(" ")[0];
        if (type === "CSS") textarea = css_minify(textarea);
        if (type === "JS") textarea = js_minify(textarea);
    };
</script>

<section class="h-100 flex-col">
    <Dropdown options={["CSS Minify", "JS Minify"]} />

    <Card fade>
        <textarea
            on:keyup={jobProcessor}
            class="w-100 h-100 p-0 m-0"
            placeholder=".Paste&lcub;some:CSS;&rcub;"
            rows="10"
            bind:value={textarea}
            id=""
        />
    </Card>
</section>

<style>
    textarea {
        outline: none;
        border: none;
        font: 500 16px Helvetica;
    }
</style>
