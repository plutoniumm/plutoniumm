<script>
  export let code = "";
  export let description = "";
</script>

<div class="utility rx10 flow-h">
  <div class="header fw7 p20 f cc">
    <slot name="header" />
  </div>

  <div class="description m0 p20">
    <slot name="description">
      {@html description}
    </slot>
  </div>

  <pre class="m0 py0 px20"><code class="language-xml d-b">{code}</code></pre>

  <div class="stage p20">
    <slot />
  </div>
</div>

<style lang="scss">
  .utility {
    margin-bottom: 24px;
    background: var(--w);

    .header {
      background: var(--g4);
      font-size: 1.1em;
    }

    .description {
      line-height: 1.5;

      :global(code) {
        background: color-mix(in srgb, var(--c3) 12%, var(--w));
        padding: 2px 4px;
        border-radius: 5px;
      }
    }

    pre {
      code {
        padding: 12px;
        background: var(--w);
        border-radius: 4px;
      }
    }
  }
</style>
