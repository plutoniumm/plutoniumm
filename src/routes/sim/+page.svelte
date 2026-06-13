<script lang="ts">
  interface Sim {
    name: string;
    href: string;
    desc: string;
  }

  interface Group {
    name: string;
    accent: string;
    bg: string;
    items: Sim[];
  }

  const groups: Group[] = [
    {
      name: "Physics",
      accent: "var(--c4)",
      bg: "color-mix(in srgb, var(--c4) 8%, var(--w))",
      items: [
        {
          name: "Ray Optics",
          href: "/sim/optics",
          desc: "2D ray optics playground with mirrors, prisms, lenses and dispersion: Snell, Fresnel, and total internal reflection.",
        },
      ],
    },
    {
      name: "Math",
      accent: "var(--c3)",
      bg: "color-mix(in srgb, var(--c3) 10%, var(--w))",
      items: [
        {
          name: "Markov Chains",
          href: "/sim/markov",
          desc: "Build an arbitrary chain with nodes, weights and self-loops; watch distributions evolve, find stationary states, classify the structure.",
        },
      ],
    },
    {
      name: "Computer Science",
      accent: "var(--ok)",
      bg: "color-mix(in srgb, var(--ok) 10%, var(--w))",
      items: [
        {
          name: "Clifford",
          href: "/sim/clifford",
          desc: "Stabilizer circuit simulator (Aaronson–Gottesman CHP tableau) that pushes hundreds of qubits in the browser.",
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Simulators | manav.ch</title>
  <meta
    name="description"
    content="Interactive in-browser physics and quantum simulators."
  />
</svelte:head>

<main class="mx-a p20 flow-y-s">
  <h1>Simulators</h1>
  <p class="sub">Interactive toys that run entirely in your browser.</p>

  {#each groups as g, i (i)}
    {#if g.items.length}
      <section class="mb10">
        <h2 style="color:{g.accent}">{g.name}</h2>
        <div class="cards d-g">
          {#each g.items as item, i (i)}
            <a
              href={item.href}
              class="card rx10 d-b"
              style="--ac:{g.accent}; --bg:{g.bg}"
            >
              <h3>{item.name}</h3>
              <p class="desc m0">{item.desc}</p>
            </a>
          {/each}
        </div>
      </section>
    {/if}
  {/each}
</main>

<style>
  main {
    max-width: 800px;
    max-height: 99vh;
  }

  .sub {
    color: var(--g3);
    margin-bottom: 30px;
  }

  h2 {
    font-size: 20px;
    margin: 0 0 12px;
  }

  .cards {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  .card {
    background: var(--bg);
    border: 1.5px solid var(--ac);
    border-top-width: 5px;
    padding: 14px 16px;
    text-decoration: none;
    transition:
      transform 0.12s ease,
      box-shadow 0.12s ease;
  }

  .card:hover,
  .card:focus {
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--k2) 13%, transparent);
  }

  h3 {
    margin: 0 0 8px;
    color: var(--ac);
  }

  .desc {
    color: var(--g3);
    font-size: 16px;
  }
</style>
