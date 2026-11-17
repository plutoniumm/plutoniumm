<script lang="ts">
  import { onMount } from "svelte";

  let browser: [string, string][] = [];

  function parseUA(ua: string): {
    browser: string;
    engine: string;
    os: string;
  } {
    let //
      b = "unknown",
      e = "unknown",
      os = "unknown";
    let m: RegExpMatchArray | null;

    if ((m = ua.match(/Firefox\/([\d.]+)/))) {
      [b, e] = [`Firefox ${m[1]}`, "Gecko"];
    } else if ((m = ua.match(/Edg\/([\d.]+)/))) {
      [b, e] = [`Edge ${m[1]}`, "Blink"];
    } else if ((m = ua.match(/OPR\/([\d.]+)/))) {
      [b, e] = [`Opera ${m[1]}`, "Blink"];
    } else if ((m = ua.match(/Chrome\/([\d.]+)/))) {
      [b, e] = [`Chrome ${m[1]}`, "Blink"];
    } else if ((m = ua.match(/Version\/([\d.]+).*Safari/))) {
      [b, e] = [`Safari ${m[1]}`, "WebKit"];
    } else if (/Safari/.test(ua)) {
      [b, e] = ["Safari", "WebKit"];
    }

    if ((m = ua.match(/iPhone OS ([\d_]+)/))) {
      os = `iOS ${m[1].replace(/_/g, ".")}`;
    } else if ((m = ua.match(/Mac OS X ([\d_]+)/))) {
      os = `macOS ${m[1].replace(/_/g, ".")}`;
    } else if ((m = ua.match(/Android ([\d.]+)/))) {
      os = `Android ${m[1]}`;
    } else if ((m = ua.match(/Windows NT ([\d.]+)/))) {
      os = `Windows NT ${m[1]}`;
    } else if (/Linux/.test(ua)) {
      os = "Linux";
    }

    return {
      browser: b,
      engine: e,
      os,
    };
  }

  function readBrowser() {
    type UABrand = { brand: string; version: string };
    type NavigatorExtras = Navigator & {
      userAgentData?: {
        brands?: UABrand[];
        platform?: string;
        mobile?: boolean;
      };
      deviceMemory?: number;
      connection?: { effectiveType?: string; downlink?: number; rtt?: number };
      getBattery?: () => Promise<{ level: number; charging: boolean }>;
    };
    const n = navigator as NavigatorExtras;
    const ua = parseUA(n.userAgent);
    const rows: [string, string][] = [];

    rows.push(["browser", ua.browser]);
    rows.push(["engine", ua.engine]);
    const uad = n.userAgentData;

    if (uad?.brands?.length) {
      rows.push([
        "ua brands",
        uad.brands.map((x) => `${x.brand} ${x.version}`).join(", "),
      ]);
    }

    rows.push(["os", uad?.platform ? `${uad.platform} (${ua.os})` : ua.os]);
    if (uad) rows.push(["mobile", String(!!uad.mobile)]);
    rows.push(["user agent", n.userAgent]);
    if (n.deviceMemory) rows.push(["device memory", `≥ ${n.deviceMemory} GB`]);

    if (n.hardwareConcurrency)
      rows.push(["cpu threads", String(n.hardwareConcurrency)]);

    rows.push([
      "screen",
      `${screen.width}×${screen.height} @ ${devicePixelRatio}x, ${screen.colorDepth}-bit`,
    ]);
    rows.push(["viewport", `${innerWidth}×${innerHeight}`]);
    rows.push([
      "touch",
      "ontouchstart" in window || n.maxTouchPoints > 0 ? "yes" : "no",
    ]);
    rows.push(["languages", (n.languages || [n.language]).join(", ")]);
    const off = -new Date().getTimezoneOffset() / 60;
    rows.push([
      "timezone",
      `${Intl.DateTimeFormat().resolvedOptions().timeZone} (UTC${off >= 0 ? "+" : ""}${off})`,
    ]);
    rows.push(["online", n.onLine ? "yes" : "no"]);
    rows.push(["cookies", n.cookieEnabled ? "enabled" : "disabled"]);
    rows.push([
      "color scheme",
      matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    ]);
    rows.push([
      "reduced motion",
      matchMedia("(prefers-reduced-motion: reduce)").matches ? "yes" : "no",
    ]);
    const c = n.connection;

    if (c) {
      rows.push([
        "connection",
        [
          c.effectiveType,
          c.downlink ? `${c.downlink} Mbps` : "",
          c.rtt ? `${c.rtt} ms rtt` : "",
        ]
          .filter(Boolean)
          .join(", "),
      ]);
    }

    browser = rows;

    if (n.getBattery) {
      n.getBattery()
        .then((b) => {
          browser = [
            ...browser,
            [
              "battery",
              `${Math.round(b.level * 100)}%${b.charging ? ", charging" : ""}`,
            ],
          ];
        })
        .catch(() => {});
    }
  }

  let net: [string, string][] = [];
  let netState = "—";

  const TLS_NAMES: Record<string, string> = {
    "TLSv1.3": "TLS 1.3 · AEAD, forward secrecy",
    "TLSv1.2": "TLS 1.2",
  };

  async function readNet() {
    netState = "querying…";
    const urls = [
      "https://one.one.one.one/cdn-cgi/trace",
      "https://speed.cloudflare.com/cdn-cgi/trace",
    ];

    for (const u of urls) {
      try {
        const r = await fetch(u);

        if (!r.ok) continue;

        const kv: Record<string, string> = {};

        for (const line of (await r.text()).trim().split("\n")) {
          const i = line.indexOf("=");
          if (i > 0) kv[line.slice(0, i)] = line.slice(i + 1);
        }

        net = [
          ["ip", kv.ip ?? "?"],
          ["country", kv.loc ?? "?"],
          ["cf datacenter", kv.colo ?? "?"],
          ["cryptography", kv.tls ? (TLS_NAMES[kv.tls] ?? kv.tls) : "?"],
          ["http", kv.http ?? "?"],
          ["warp", kv.warp ?? "?"],
        ];
        netState = `via ${new URL(u).host}`;

        return;
      } catch {
        /* next */
      }
    }

    try {
      const r = await fetch("https://api.ipify.org?format=json");
      const j = await r.json();
      net = [
        ["ip", j.ip],
        ["country", "unavailable"],
        ["cf datacenter", "unavailable"],
        ["cryptography", "unavailable"],
      ];
      netState = "via api.ipify.org (cloudflare unreachable)";
    } catch {
      netState = "unreachable";
    }
  }

  onMount(() => {
    readBrowser();
    readNet();
  });
</script>

<svelte:head>
  <title>About | manav.ch</title>
  <meta
    name="description"
    content="What your browser, device and connection tell this site."
  />
</svelte:head>

<main class="mx-a p20">
  <h1 class="mb5">About your visit</h1>

  <section>
    <h2>your browser</h2>
    <p class="note">
      what this static page can see without asking. nothing is sent anywhere.
    </p>
    <div class="rows f-col">
      {#if browser.length}
        {#each browser as [k, v], ix (ix)}
          <div class="row d-g">
            <span class="k">{k}</span>
            <span class="v">{v}</span>
          </div>
        {/each}
      {:else}
        <div class="row d-g">
          <span class="k">browser</span><span class="v">&mdash;</span>
        </div>
        <div class="row d-g">
          <span class="k">os</span><span class="v">&mdash;</span>
        </div>
        <div class="row d-g">
          <span class="k">screen</span><span class="v">&mdash;</span>
        </div>
        <div class="row d-g">
          <span class="k">timezone</span><span class="v">&mdash;</span>
        </div>
      {/if}
    </div>
  </section>

  <section>
    <h2>your connection</h2>
    <p class="note">
      one round trip to a cloudflare trace endpoint, parsed in your browser.
      <span class="v dim">{netState}</span>
    </p>
    <div class="rows f-col">
      {#if net.length}
        {#each net as [k, v], ix (ix)}
          <div class="row d-g">
            <span class="k">{k}</span>
            <span class="v">{v}</span>
          </div>
        {/each}
      {:else}
        <div class="row d-g">
          <span class="k">ip</span><span class="v">&mdash;</span>
        </div>
        <div class="row d-g">
          <span class="k">cryptography</span><span class="v">&mdash;</span>
        </div>
      {/if}
    </div>
  </section>
</main>

<style>
  main {
    max-width: 760px;
  }

  .sub {
    color: #888;
    font-style: italic;
    margin-bottom: 34px;
  }

  section {
    margin-bottom: 40px;
  }

  h2 {
    font-size: 15px;
    text-transform: lowercase;
    letter-spacing: 0.08em;
    color: #c75200;
    border-bottom: 1px solid #eee;
    padding-bottom: 6px;
    margin: 0 0 14px;
  }

  .note {
    color: #777;
    font-size: 15px;
    margin: 0 0 14px;
  }

  .rows {
    gap: 6px;
  }

  .row {
    grid-template-columns: 140px 1fr;
    gap: 12px;
    align-items: baseline;
    font-size: 15px;
  }

  .k {
    color: #555;
  }

  .v {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 14px;
    color: #222;
    overflow-wrap: anywhere;
  }

  .dim {
    color: #999;
  }

</style>
