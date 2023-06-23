<div class="card blur-fff8 p-rel rx20 p20 j-ct m10 {$$props.className || ''}">
    <slot />
</div>

<style>
    .card {
        font-size: 16px;
        width: calc(min(600px, 100%) - 60px);
        align-items: center;
    }
    .card::after {
        position: absolute;
        top: -10px;
        left: -10px;
        content: "";
        height: calc(100% + 20px);
        width: calc(100% + 20px);
        -webkit-filter: blur(8px);
        filter: blur(8px);
        z-index: -1;
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
            width: calc(95% - 40px);
            flex-wrap: wrap;
            text-align: center;
        }
    }
</style>
