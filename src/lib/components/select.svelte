<script>
    import { func } from "$lib/store";
    export let options = [];

    let showOpts = false;

    const dropdownManager = (e) => {
        const type = e.target.id;
        if (type !== "inf") $func = options[type];
        showOpts ^= 1;
    };
</script>

<svelte:head>
    <script src="/helpers/uglify.js "></script>
</svelte:head>

<div class="dropdown" on:click={dropdownManager}>
    <div id="inf" class="elt p-10 rx-10 m-10">
        {$func}
    </div>
    <div class:active={showOpts} class="wrapper m-10 rx-10">
        {#each options as opt, i}
            <div class="elt p-10" id={i}>
                {opt}
            </div>
        {/each}
    </div>
</div>

<style type="text/scss">
    .dropdown {
        position: relative;
    }
    .elt {
        cursor: pointer;
        transition: all 0.1s ease;
        background: #fff;
        width: 200px;
        &:hover {
            background: #f8f8f8;
        }
    }
    #inf {
        border: 1px solid #aaa4;
    }
    .wrapper {
        opacity: 0;
        border: 1px solid #aaa4;
        position: absolute;
        z-index: 1000000;
        overflow: hidden;
        transition: all 0.2s ease-in;
        transform: rotateX(30deg) translate(0, -50%);
    }
    .active {
        opacity: 1;
        transform: rotateX(0) translate(0);
    }
</style>
