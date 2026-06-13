<script>
  export let title = "";
</script>

<details class="p20 rx10 sw-100 my20 mx0">
  <summary class="p-rel ptr p10 sw-100"> {title}</summary>

  <div>
    <slot></slot>
  </div>
</details>

<style>
  details {
    background: var(--w);
    z-index: 5;
  }

  summary:focus-visible {
    outline: none;
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
