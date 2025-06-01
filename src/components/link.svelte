<script>
  export let href = "";
</script>

<a {href}>
  <slot></slot>

  <svg class="p-rel" viewBox="0 0 32 32" fill="none">
    <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
  </svg>
</a>

<style>
  a {
    color: #2af;
  }
  svg {
    stroke-width: 2.5;
    height: 1em;
    width: 1em;
    top: 0;
  }
</style>
