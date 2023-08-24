<script>
  export let //
    name = "",
    inner = "",
    style = "";

  const tags = new Map([
    ["ACTIVE", { txt: "Active", col: "#2a2" }],
    ["NUAD", { txt: "Dead/Archived", col: "#aa2" }],
    ["PLAN", { txt: "Planned", col: "#888" }],
  ]);

  if (name === "license") {
    if (inner !== "none") {
      inner = `License: <a href="https://choosealicense.com/licenses/${inner.toLowerCase()}/" target="_blank">${inner}</a>`;
    } else {
      inner = "No License";
    }
  }

  if (tags.has(name)) {
    const { txt, col } = tags.get(name);
    style = `--col:${col};`;
    inner = txt;
  }

  if (!style) {
    style = `--col:#888;`;
  }
</script>

<div class="tag tc d-ib rx10 p5 fw6" {style}>
  {@html inner}
</div>

<style>
  .tag {
    color: #fff;
    margin-right: 10px;
    min-width: 50px;
    background: var(--col);
    font-size: 0.75rem;
  }
</style>
