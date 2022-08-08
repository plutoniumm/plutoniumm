<script>
    const { important, className } = $$props;
</script>

<div {important} class="card fade rx20 p20 ∆-ct o-0 m10 {className}">
    <slot />
</div>

<style>
    .card {
        font-size: 16px;
        width: 600px;
        align-items: center;
        background: #fff;
    }

    [important] {
        border-radius: 25px;
        border-bottom: 4px solid var(--theme-hl);
    }

    :global(code) {
        font-size: 0.9em;
        font-family: monospace;
        display: inline-block;
        background: #3a3d41;
        padding: 1px 3px;
        border-radius: 3px;
    }

    @media (max-width: 600px) {
        .card {
            width: calc(95% - 20px);
            flex-wrap: wrap;
            text-align: center;
        }
    }
</style>
