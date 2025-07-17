<script>
    import { onMount } from "svelte";

    export let //
        image,
        href = "",
        src = "",
        alt = "",
        scale = 1;

    onMount(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            let [w, h] = [img.width, img.height];
            [w, h] = [w * scale, h * scale];

            image.style.width = `${w}px`;
            image.style.height = `${h}px`;
            image.src = src;
        };
        img.onerror = () => {
            console.error("Failed to load image:", src);
        };
    });
</script>

<a {href} class="p-rel d-b tc" target="_blank" rel="noopener noreferrer">
    <img src {alt} bind:this={image} />
    <span class="w-100 p-abs">{alt}</span>
</a>

<style>
    img {
        max-width: min(100vw, 100%, 600px);
        max-height: min(400px, 100vh);
        min-height: 100px;
        min-width: 100px;
        object-fit: contain;
    }
    a {
        margin: 2em auto;
    }
    span {
        bottom: -1.5em;
        right: 0;
        padding: 0.5em;
        color: #888;
        font-size: 0.8em;
    }
</style>
