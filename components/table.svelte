<script>
  export let titles = ["id", "val"];
  export let rows = [
    [1, "hello"],
    [2, "world"],
    [3, "sorted"],
    [4, "table"],
  ];

  // convert each row to kv
  let data = rows.map((row) => {
    let obj = {};
    titles.forEach((title, i) => {
      obj[title] = row[i];
    });
    return obj;
  });

  // Holds table sort state.  Initialized to reflect table sorted by id column ascending.
  let sortBy = { col: "id", ascending: true };

  $: sort = (column) => {
    if (sortBy.col == column) {
      sortBy.ascending = !sortBy.ascending;
    } else {
      sortBy.col = column;
      sortBy.ascending = true;
    }

    // Modifier to sorting function for ascending or descending
    let sortModifier = sortBy.ascending ? 1 : -1;

    let sort = (a, b) =>
      a[column] < b[column]
        ? -1 * sortModifier
        : a[column] > b[column]
        ? 1 * sortModifier
        : 0;

    data = data.sort(sort);
  };
</script>

<table class="rx5 tc">
  <thead>
    <tr>
      {#each titles as title}
        <th on:click={sort(title)}>{title}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        {#each titles as title}
          <td>{@html row[title]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  th,
  td {
    padding: 5px;
    border-collapse: collapse;
  }
  th {
    cursor: pointer;
    text-transform: capitalize;
  }
  table {
    min-width: 300px;
    background: #8882;
    border-collapse: collapse;
    border-radius: 1em;
  }
</style>
