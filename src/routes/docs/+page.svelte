<script lang="ts">
  import AtomicCSS from "./atomic/icon.svg";
  import Lights from "./lt/icon.svg";

  interface Project {
    name: string;
    icon: string;
    href: string;
    desc: string;
  }

  const items: Project[] = [
    {
      name: "Atomic.CSS",
      icon: AtomicCSS,
      href: "/docs/atomic",
      desc: "Standardized utility classes for spacing, sizing, layout, and typography.",
    },
    {
      name: "Light Components",
      icon: Lights,
      href: "/docs/lt",
      desc: "A lightweight component library built with web components and TypeScript.",
    },
    {
      name: "SQLUI",
      icon: "https://github.com/plutoniumm/sqlui/raw/main/static/icon.svg",
      href: "https://plutoniumm.github.io/sqlui",
      desc: "mini ui for sqlite for small edits and browsing.",
    },
    {
      name: "Orb",
      icon: "https://plutoniumm.github.io/orb/build/orb.svg",
      href: "https://plutoniumm.github.io/orb",
      desc: "Newtonian solar system simulation with variable coordinates systems",
    },
    {
      name: "Ahana",
      icon: "https://github.com/plutoniumm/ahana/raw/main/icons/pf.svg",
      href: "https://plutoniumm.github.io/ahana",
      desc: "Diffractive ray optics simulation with prisms, lenses, and blocks.",
    },
    {
      name: "XOXO",
      icon: "https://github.com/plutoniumm/xoxo/raw/main/public/icon.svg",
      href: "https://plutoniumm.github.io/xoxo",
      desc: "3D Quantum Tic-Tac-Toe game demonstrating superposition and entanglement.",
    },
  ];
</script>

<main class="mx-a p20 flow-y-s">
  {#each items as item, i}
    {@const isExt = item.href.startsWith("http")}
    <a
      href={item.href}
      class="item f g20 rx10 al-ct d-b"
      target={isExt ? "_blank" : null}
      rel={isExt ? "noopener noreferrer" : null}
    >
      <img class="m20" src={item.icon} alt={item.name} />

      <div class="f-col">
        <h3>{item.name}</h3>
        <p class="desc">{item.desc}</p>
      </div>
    </a>

    <hr class="w-50 mx-a o-25" />
  {/each}
</main>

<style>
  a:hover,
  a:focus {
    background: #eef;
    text-decoration: none;
  }

  main {
    max-width: 600px;
    max-height: 99vh;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .item {
    text-decoration: none;
    padding: 8px 0;
  }

  img {
    width: 75px;
    height: 75px;
  }

  .desc {
    margin: 0;
    color: #555;
    font-size: 18px;
  }

  hr {
    margin: 20px auto;
    border: 1px solid #000;
  }
</style>
