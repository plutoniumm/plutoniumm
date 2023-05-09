<script>
  import { onMount } from "svelte";

  let canvasRef;

  onMount(() => {
    const ctx = canvasRef.getContext("2d");
    const width = canvasRef.clientWidth;
    const height = canvasRef.clientHeight;

    // Set canvas size
    canvasRef.width = width;
    canvasRef.height = height;

    // Draw a circle 
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 100, 0, 2 * Math.PI);
    ctx.stroke();
  });
</script>

<canvas bind:this={canvasRef} />
