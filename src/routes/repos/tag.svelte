<script>
  export let //
    name = "",
    inner = "";

  inner = inner || name;
</script>

<div class="tag d-ib rx20 fw6">
  {@html inner}
</div>

<style>
  .tag {
    padding: 0.25rem 0.5rem;
    background: #eee;
    color: #333;
    font-size: 0.75rem;
  }
</style>
