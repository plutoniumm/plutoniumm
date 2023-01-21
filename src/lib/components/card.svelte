<div
    class="card blur p-rel fade rx20 p20 ∆-ct o-0 m10 {$$props.className || ''}"
>
    <slot />
</div>

<style>
    .card {
        font-size: 16px;
        width: 600px;
        align-items: center;
        border: 1px solid #fff8;
        --bg: #fff8;
        --sz: 8px;
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
            width: calc(95% - 20px);
            flex-wrap: wrap;
            text-align: center;
        }
    }
</style>
