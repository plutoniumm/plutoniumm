<script>
  export let title = "";
</script>

<details class="rpm-20">
  <summary class="p-rel ptr"> {title}</summary>

  <div>
    <slot></slot>
  </div>
</details>

<style>
  details {
    background: #fff;
    width: calc(100% - 40px);
    z-index: 5;
  }

  summary:focus-visible {
    outline: 2px solid #007aff;
    outline-offset: 8px;
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
    line-height: 1.3;
    margin-inline-start: 1rem;
    list-style-position: outside;
  }
</style>
