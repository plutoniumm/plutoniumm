<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let data;

  const COLORS: Record<string, string> = {
    svelte: "#c75200",
    ts: "#2456c9",
    js: "#b8860b",
    css: "#097",
    html: "#d22",
    json: "#8a5cd6",
    md: "#222",
    other: "#888",
  };

  $: total = data.loc.reduce((s, l) => s + l.lines, 0);

  const TAU = Math.PI * 2;

  function arc(a0: number, a1: number): string {
    const //
      cx = 100,
      cy = 100,
      r0 = 56,
      r1 = 92;
    if (a1 - a0 >= TAU) a1 = a0 + TAU - 1e-4;

    const p = (r: number, a: number) =>
      `${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`;

    const big = a1 - a0 > Math.PI ? 1 : 0;

    return (
      `M${p(r1, a0)}A92 92 0 ${big} 1 ${p(r1, a1)}` +
      `L${p(r0, a1)}A56 56 0 ${big} 0 ${p(r0, a0)}Z`
    );
  }

  $: segments = (() => {
    let a = -Math.PI / 2;

    return data.loc.map((l) => {
      const a0 = a;
      a += (l.lines / total) * TAU;

      return {
        ...l,
        d: arc(a0, a),
        color: COLORS[l.lang] ?? COLORS.other,
        pct: ((l.lines / total) * 100).toFixed(1),
      };
    });
  })();

  const UNITS: [number, string][] = [
    [31536000, "yr"],
    [2592000, "month"],
    [86400, "day"],
    [3600, "hr"],
    [60, "min"],
    [1, "sec"],
  ];

  function rel(iso: string | null, now: number): string {
    if (!iso) return "unknown";
    const d = (now - +new Date(iso)) / 1000;
    if (d < 1) return "just now";

    for (const [s, u] of UNITS) {
      if (d >= s) {
        const v = Math.floor(d / s);

        return `${v} ${u}${v === 1 ? "" : "s"} ago`;
      }
    }

    return "just now";
  }

  function abs(iso: string | null): string {
    if (!iso) return "unknown";

    return new Date(iso)
      .toISOString()
      .replace("T", " ")
      .replace(/\.\d+Z/, " UTC");
  }

  let now = 0; // 0 ⇒ prerendered, show placeholders
  let timer: ReturnType<typeof setInterval>;

  $: builtAgo = now ? rel(data.built, now) : "—";
  $: deployAgo = now
    ? data.deployed
      ? rel(data.deployed, now)
      : "unknown"
    : "—";

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

    if ((m = ua.match(/Firefox\/([\d.]+)/)))
      [b, e] = [`Firefox ${m[1]}`, "Gecko"];
    else if ((m = ua.match(/Edg\/([\d.]+)/)))
      [b, e] = [`Edge ${m[1]}`, "Blink"];
    else if ((m = ua.match(/OPR\/([\d.]+)/)))
      [b, e] = [`Opera ${m[1]}`, "Blink"];
    else if ((m = ua.match(/Chrome\/([\d.]+)/)))
      [b, e] = [`Chrome ${m[1]}`, "Blink"];
    else if ((m = ua.match(/Version\/([\d.]+).*Safari/)))
      [b, e] = [`Safari ${m[1]}`, "WebKit"];
    else if (/Safari/.test(ua)) [b, e] = ["Safari", "WebKit"];

    if ((m = ua.match(/iPhone OS ([\d_]+)/)))
      os = `iOS ${m[1].replace(/_/g, ".")}`;
    else if ((m = ua.match(/Mac OS X ([\d_]+)/)))
      os = `macOS ${m[1].replace(/_/g, ".")}`;
    else if ((m = ua.match(/Android ([\d.]+)/))) os = `Android ${m[1]}`;
    else if ((m = ua.match(/Windows NT ([\d.]+)/))) os = `Windows NT ${m[1]}`;
    else if (/Linux/.test(ua)) os = "Linux";

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
    now = Date.now();
    timer = setInterval(() => (now = Date.now()), 3000);
    readBrowser();
    readNet();
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });
</script>

<svelte:head>
  <title>About | manav.ch</title>
  <meta
    name="description"
    content="How this site is built: the pipeline, the code, and what your browser tells it."
  />
</svelte:head>

<main class="mx-a p20">
  <h1 class="mb5">About this build</h1>
  <p class="sub">
    This page is about the machine, not the man. Everything below is computed
    fresh: the repo stats at build time, the rest by your browser right now.
  </p>

  <section>
    <h2>build</h2>
    <div class="rows f-col">
      <div class="row d-g">
        <span class="k">built</span>
        <span class="v">{builtAgo}</span>
        <span class="v dim">{abs(data.built)}</span>
      </div>
      <div class="row d-g">
        <span class="k">deployed</span>
        <span class="v">{deployAgo}</span>
        <span class="v dim">{abs(data.deployed)}</span>
      </div>
      <div class="row d-g">
        <span class="k">commit</span>
        <span class="v">{data.commit ?? "unknown"}</span>
      </div>
    </div>
    <p class="note">
      static svelte-kit, prerendered to plain html and pushed to github pages.
      no server ever runs; the timestamps above were baked in at build.
    </p>
  </section>

  <section>
    <h2>code</h2>
    <p class="note">
      lines per language across {data.files} git-tracked files,
      {total.toLocaleString("en-US")} lines total.
    </p>
    <div class="donutwrap fw al-ct">
      <svg
        viewBox="0 0 200 200"
        class="donut"
        role="img"
        aria-label="lines of code by language"
      >
        {#each segments as s, ix (ix)}
          <path d={s.d} fill={s.color} stroke="#fff" stroke-width="1.5" />
        {/each}
        <text x="100" y="96" text-anchor="middle" class="big">
          {total.toLocaleString("en-US")}
        </text>
        <text x="100" y="114" text-anchor="middle" class="small">lines</text>
      </svg>
      <div class="legend f-col">
        {#each segments as s, ix (ix)}
          <div class="lrow d-g g10 al-ct">
            <span class="swatch" style="background:{s.color}"></span>
            <span class="lang">{s.lang}</span>
            <span class="lines tr">{s.lines.toLocaleString("en-US")}</span>
            <span class="pct">{s.pct}%</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section>
    <h2>working tree</h2>
    {#if data.untracked.length}
      <p class="note">
        {data.untracked.length} untracked file{data.untracked.length === 1
          ? ""
          : "s"}
        at build time:
      </p>
      <ul class="files m0 pl20">
        {#each data.untracked as f, ix (ix)}
          <li>{f}</li>
        {/each}
      </ul>
    {:else}
      <p class="note">no untracked files at build time. clean enough.</p>
    {/if}
  </section>

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

  .row:has(.dim) {
    grid-template-columns: 140px auto 1fr;
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

  /* atomic.css strokes every svg globally; opt out and stroke explicitly */
  svg.donut {
    stroke: none;
    stroke-width: 0;
  }

  .donutwrap {
    gap: 36px;
  }

  .donut {
    width: 220px;
    height: 220px;
    flex: none;
  }

  .donut .big {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 19px;
    fill: #222;
  }

  .donut .small {
    font-size: 11px;
    fill: #888;
  }

  .legend {
    gap: 7px;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 14px;
  }

  .lrow {
    grid-template-columns: 14px 70px 70px 1fr;
  }

  .swatch {
    width: 12px;
    height: 12px;
    border-radius: 3px;
  }

  .lang {
    color: #222;
  }

  .lines {
    color: #555;
  }

  .pct {
    color: #999;
  }

  .files {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 14px;
    color: #555;
  }

  .files li {
    margin-bottom: 3px;
  }
</style>
