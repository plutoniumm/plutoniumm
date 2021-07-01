<script>
    export let //
        important = false,
        fade = false;
</script>

<div class:active={important} class:fade class="card m-10">
    <slot />
</div>

<style>
    .card {
        opacity: 0;
        font-size: 16px;
        width: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 15px;
        padding: 1em;
    }
    .active {
        border-radius: 25px;
        border-bottom: 4px solid var(--theme-hl);
    }

    @media (max-width: 600px) {
        .card {
            width: calc(95% - 20px);
            flex-wrap: wrap;
            text-align: center;
        }
    }
</style>
