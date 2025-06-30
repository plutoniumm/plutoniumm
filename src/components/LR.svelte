<script lang="ts">
  export let ratio = "1:1";

  function norm(ratio: string): [number, number] {
    const [l, r] = ratio.split(":").map(Number);
    const sum = l + r;
    return [l / sum, r / sum];
  }

  ratio = norm(ratio);
</script>

<div class="f">
  <div style="flex: {ratio[0]};">
    <slot name="l"></slot>
  </div>

  <div style="flex: {ratio[1]};">
    <slot name="r"></slot>
  </div>
</div>

<style>
</style>
