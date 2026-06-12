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
      name: "Orb",
      icon: "https://plutoniumm.github.io/orb/build/orb.svg",
      href: "https://plutoniumm.github.io/orb",
      desc: "Newtonian solar system simulation with variable coordinates systems",
    },
    {
      name: "Eastwood",
      icon: "https://github.com/plutoniumm.png",
      href: "/docs/eastwood",
      desc: "Single-binary multi-language linter for Python, LaTeX, Go, JS, TS, and Rust.",
    },
  ];
</script>

<main class="mx-a p20 flow-y-s">
  {#each items as item, i (i)}
    {@const isExt = item.href.startsWith("http")}
    <a
      href={item.href}
      class="item f g20 rx10 al-ct d-b"
      target={isExt ? "_blank" : null}
      rel={isExt ? "noopener noreferrer" : null}
    >
      <img class="m20" src={item.icon} alt={item.name} />

      <div class="f-col">
        <h3 class="mt0 mb10">{item.name}</h3>
        <p class="desc m0">{item.desc}</p>
      </div>
    </a>

    <hr class="w-50 mx-a my20 o-25" />
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

  .item {
    text-decoration: none;
    padding: 8px 0;
  }

  img {
    width: 75px;
    height: 75px;
  }

  .desc {
    color: #555;
    font-size: 18px;
  }

  hr {
    border: 1px solid #000;
  }
</style>
