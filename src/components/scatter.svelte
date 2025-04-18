<script>
  import { Scatter } from "svelte-chartjs";
  import "chart.js/auto";

  export let data = [];
  if (data !== undefined || data !== null) {
    if (!Array.isArray(data)) {
      data = [data];
    }
  }
</script>

<div class="square">
  <Scatter
    data={{
      labels: ["Scatter"],
      datasets: data,
    }}
    options={{
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      maxWidth: 400,
    }}
  />

  <slot name="caption"></slot>
</div>

<style>
  .square {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    margin: 2rem auto;
  }
</style>
