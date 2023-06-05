<script>
  export let value;
</script>

<div class="p-rel d-ib">
  <div style="left:50%;transform:translateX(-50%);top:0;" class="p-abs">
    {value}%
  </div>
  <progress class="rx2" {value} max="100" />
</div>

<style>
  progress {
    min-width: 300px;
    width: auto;
    height: 1em;
    overflow: hidden;
  }
  progress::-webkit-progress-bar {
    background-color: #ccc8;
  }
  progress::-webkit-progress-value {
    background-color: #2af;
    border-radius: 0 5px 5px 0;
  }
</style>
