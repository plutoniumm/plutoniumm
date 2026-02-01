<script>
  export let code = "";
  export let description = "";
</script>

<div class="utility rx10 flow-h">
  <div class="header fw7 p20 f cc">
    <slot name="header" />
  </div>

  <p class="description m0 p20">
    <slot name="description">
      {@html description}
    </slot>
  </p>

  <pre class="m0"><code class="language-xml">{code}</code></pre>

  <div class="stage p20">
    <slot />
  </div>
</div>

<style lang="scss">
  .utility {
    margin-bottom: 24px;
    background: #fff;

    .header {
      background: #eee;
      font-size: 1.1em;
    }

    .description {
      line-height: 1.5;

      :global(code) {
        background: #eef;
        padding: 2px 4px;
        border-radius: 5px;
        font-size: 0.9em;
      }
    }

    pre {
      padding: 0 20px;

      code {
        padding: 12px;
        background: #fff;
        border-radius: 4px;
        display: block;
      }
    }
  }
</style>
