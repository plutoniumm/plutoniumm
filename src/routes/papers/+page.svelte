<script lang="ts">
  import data from "../../../data/papers.json";

  let value = "";

  function hl(text, value) {
    if (!value) return text;
    return text.replace(
      new RegExp(value, "gi"),
      (match) => `<span style="background: #010;">${match}</span>`,
    );
  }

  String.prototype.l = function () {
    return this.toLowerCase();
  };

  $: filterer = (v) => {
    if (!value) return true;
    let c = value.l();

    return (
      v.name.l().includes(c) ||
      v.authors.l().includes(c) ||
      v.loc.l().includes(c) ||
      v.desc.l().includes(c)
    );
  };
</script>

<main class="w-100" style="color: #fff;">
  <p>
    <input
      type="text"
      placeholder="Search..."
      class="rx10 p10 d-b"
      bind:value
    />
  </p>
  {#each data.filter(filterer) as paper}
    <a class="p10 rx10 d-b" href={paper.url}>
      <div class="title">{@html hl(paper.name, value)}</div>
      <div class="sub">
        <div>{@html hl(paper.authors, value)}</div>
        <div>{@html hl(paper.loc, value)}</div>
      </div>
      <p>{@html hl(paper.desc, value)}</p>
    </a>
  {/each}
</main>

<style lang="scss">
  input {
    margin: 5px auto;
    width: 100%;
    padding: 0.5rem;
    color: #fff;
    background: #222;
    width: min(100%, 600px);
  }

  a {
    margin: 10px auto;
    width: min(100%, 600px);
    background: #222;
    transition: background 0.2s ease-in-out;
    &:hover {
      background: #333;
    }
    .title {
      font-size: 1.25em;
      margin-bottom: 5px;
    }
    .sub {
      font-size: 0.9em;
      color: #aaa;
    }
    p {
      line-height: 1.5em;
      margin-bottom: 0;
    }
  }
</style>
