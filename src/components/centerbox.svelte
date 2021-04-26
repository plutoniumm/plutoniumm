<script>
      let canvas;
      let img = new Image(); // Create new img element
      img.addEventListener(
            "load",
            () => {
                  const ctx = canvas.getContext("2d");
                  ctx.drawImage(img, 0, 0, 200, 200);
            },
            false
      );
      img.src = "/assets/pic.jpeg";
</script>

<style type="text/scss">
      .left {
            padding-right: 20px;
            canvas {
                  border-radius: 100px;
            }
      }
      .title {
            font-size: 32px;
            font-weight: 600;
            line-height: 8px;
            padding: 0;
      }
      @media (max-width: 600px) {
            .left,
            .right {
                  width: 100%;
                  padding: 0;
            }
      }
</style>

<div class="left">
      <canvas width="200px" height="200px" bind:this={canvas} />
</div>
<div class="right">
      <p class="title">Manav Seksaria</p>
      <p>Cyber Security <br /> Full Stack Javascript</p>
      <div style="line-height:1.5em;color: #7eb6ff;pointer-events: all;">
            <a href="https://github.com/plutoniumm">@plutoniumm</a>
            <br />
            <a href="mailto:plutoniumm@icloud.com">plutoniumm@icloud.com</a>
      </div>
</div>
