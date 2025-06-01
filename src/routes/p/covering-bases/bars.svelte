<script>
  import { _ } from "$lib/index";

  export let top = [];
  export let base = 10;
  export let base_str;

  if (typeof base !== "number") {
    throw new Error("Base must be a number");
  }

  // this is decimal, we'll have to shift the indices
  let powoff = 1;
  if (top.includes(".")) {
    powoff = top.length - top.indexOf(".");
  }

  let shift = 30;
  if (base <= 9 && base >= 2 && base % 1 === 0) {
    shift = 24;
  }

  if (!base_str) base_str = base.toString();
</script>

<p class="w-100 tc">
  <svg
    width={15 + top.length * 30}
    height="80"
    font-family="sans-serif"
    font-weight="300"
    font-size="24"
  >
    <text x="10" y="20">
      {#each top as item, index}
        <!-- digits -->
        <tspan x={15 + index * 30} y="25">{item}</tspan>
      {/each}
    </text>

    <text x="10" y="45">
      {#each top as _, index}
        <!-- bars -->
        <tspan x={10 + index * 30} y="45">―</tspan>
      {/each}
    </text>

    <text x="10" y="70" font-size="12">
      {#each top as _, index}
        <tspan x={10 + index * 30} y="65">
          <!-- base -->
          ({@html base_str})<sup>{top.length - index}</sup>
        </tspan>
        <tspan x={shift + index * 30} y="60">
          <!-- power -->
          {top.length - index - powoff}
        </tspan>
      {/each}
    </text>
  </svg>
</p>
