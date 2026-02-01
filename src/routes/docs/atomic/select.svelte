<script>
  import { onMount, tick } from "svelte";

  export let items = [];
  export let value = null;

  const ITEM_HEIGHT = 24;
  const VISIBLE_ITEMS = 1;

  let cont;
  let isScrolling = false;
  let scrollTimeout;

  $: height = ITEM_HEIGHT * VISIBLE_ITEMS;

  const minW = Math.max(...items.map((e) => String(e).length)) / 2;

  let index = items.indexOf(value);

  function onscroll() {
    clearTimeout(scrollTimeout);
    isScrolling = true;

    const scrollTop = cont.scrollTop;
    index = Math.round(scrollTop / ITEM_HEIGHT);

    if (index >= 0 && index < items.length) {
      if (items[index] !== value) {
        value = items[index];
      }
    }

    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 100);
  }

  $: if (cont && value && !isScrolling) {
    const index = items.indexOf(value);
    if (index !== -1) {
      cont.scrollTo({
        top: index * ITEM_HEIGHT,
        behavior: "smooth",
      });
    }
  }

  onMount(async () => {
    if (value) {
      await tick();
      const index = items.indexOf(value);
      if (index !== -1 && cont) {
        cont.scrollTop = index * ITEM_HEIGHT;
      }
    }
  });
</script>

<div
  class="picker p-rel d-if"
  style="--size: {ITEM_HEIGHT}px;--height: {height}px;"
  class:btop={index === 0}
  class:bbot={index === items.length - 1}
>
  <div
    class="cont w-100 h-100 flow-y-s p0"
    bind:this={cont}
    on:scroll={onscroll}
    style="min-width: {minW + 2}ch;"
  >
    {#each items as item}
      <div
        class="item f cc ptr o-50"
        class:selected={value === item}
        on:click={() => (value = item)}
      >
        {item}
      </div>
    {/each}
  </div>
</div>

<style>
  .picker {
    height: var(--height);
    background: transparent;
    overflow: hidden;
    user-select: none;
    vertical-align: middle;
    top: -2px;
    border-left: 1px solid #444;
    border-right: 1px solid #444;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .btop {
    border-top: 1px solid #444;
  }
  .bbot {
    border-bottom: 1px solid #444;
  }

  .cont {
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
  }

  .cont::-webkit-scrollbar {
    display: none;
  }

  .item {
    height: var(--size);
    scroll-snap-align: center;
    color: #ccc;
    transition: all 0.2s ease-in-out;
    font-size: inherit;
    vertical-align: middle;
  }

  .item.selected {
    color: #08f;
    opacity: 1;
  }
</style>
