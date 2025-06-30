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

<div class="square h-100 w-100">
  <Scatter
    data={{
      labels: ["Scatter"],
      datasets: data,
    }}
    options={{
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      animation: false,
    }}
  />
</div>

<style>
  .square {
    --sz: 400px;
    max-width: var(--sz);
    max-height: var(--sz);
    margin: 2rem auto;
  }
</style>
