<script>
  import { onMount, onDestroy } from "svelte";
  import Chart from "chart.js/auto";

  export let data = [];

  let canvasEl;
  let chart;

  function toDatasets(d) {
    if (Array.isArray(d)) return d;
    if (d == null) return [];
    return [d];
  }

  onMount(() => {
    const ctx = canvasEl.getContext("2d");
    chart = new Chart(ctx, {
      type: "scatter",
      data: {
        labels: ["Scatter"],
        datasets: toDatasets(data),
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        animation: false,
      },
    });
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
      chart = null;
    }
  });

  $: if (chart) {
    chart.data.labels = ["Scatter"];
    chart.data.datasets = toDatasets(data);
    chart.update();
  }
</script>

<div class="square h-100 w-100">
  <canvas bind:this={canvasEl}></canvas>
</div>

<style>
  .square {
    --sz: 400px;
    max-width: var(--sz);
    max-height: var(--sz);
    margin: 2rem auto;
  }

  .square canvas {
    width: 100% !important;
    height: 100% !important;
  }
</style>
