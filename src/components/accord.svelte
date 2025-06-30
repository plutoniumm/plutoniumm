<script>
  export let title = "";
</script>

<details class="p20 rx10">
  <summary class="p-rel ptr p10"> {title}</summary>

  <div>
    <slot></slot>
  </div>
</details>

<style>
  details {
    background: #fff;
    margin: 20px 0;
    width: calc(100% - 40px);
    z-index: 5;
  }

  summary:focus-visible {
    outline: none;
  }

  :root {
    interpolate-size: allow-keywords;
  }
  details::details-content {
    block-size: 0;
    overflow: hidden;
    transition:
      block-size 0.3s ease-in-out,
      content-visibility 0.3s ease-in-out;
    transition-behavior: allow-discrete;
  }
  details[open]::details-content {
    block-size: auto;
  }
  summary {
    width: calc(100% - 20px);
    line-height: 1.3;
    margin-inline-start: 1rem;
    list-style-position: outside;
  }
</style>
