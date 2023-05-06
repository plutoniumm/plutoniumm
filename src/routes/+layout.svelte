<main class="w-100"><slot /></main>

<style lang="scss">
    :global {
        section {
            height: 100vh;
        }
    }
    main {
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        background: transparent;
        width: 100vw;
        overflow-x: hidden;
    }
</style>
