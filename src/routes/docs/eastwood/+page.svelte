<script>
  import { onMount } from "svelte";
  import hljs from "highlight.js/lib/core";
  import "highlight.js/styles/github.css";

  // Install/usage snippets are plain CLI commands, which the stock `bash`
  // grammar barely tokenises (only #comments + a few builtins). This tiny
  // grammar colours the command, its flags, URLs and env vars so the blocks
  // actually read as highlighted code.
  hljs.registerLanguage("shell", () => ({
    name: "shell",
    contains: [
      { className: "comment", begin: /#/, end: /$/ },
      { className: "string", begin: /https?:\/\/\S+/ },
      { className: "string", begin: /"/, end: /"/ },
      { className: "variable", begin: /\$\{?\w+\}?/ },
      { className: "keyword", begin: /(?:^|\s)--?[A-Za-z][\w-]*/ },
      { className: "built_in", begin: /\b(?:brew|curl|go|cat|bash|sh|eastwood)\b/ },
    ],
  }));

  onMount(() => hljs.highlightAll());
</script>

<svelte:head>
  <title>Eastwood | manav.ch</title>
</svelte:head>

<div class="eastwood-docs mx-a">
  <h1>Eastwood</h1>
  <p>
    A single-binary, multi-language linter. It lints <b>Python</b>, <b>LaTeX</b>,
    <b>Go</b>, <b>JavaScript</b>, <b>TypeScript</b>, and <b>Rust</b> — 67 rules
    total. The binary is <code>eastwood</code>.
  </p>

  <h2>Install</h2>
  <p>Homebrew (macOS / Linux):</p>
  <pre class="rx5"><code class="language-shell"
      >brew tap plutoniumm/eastwood https://github.com/plutoniumm/eastwood
brew install eastwood</code
    ></pre>

  <p>Or the one-line installer (drops <code>eastwood</code> in <code>/usr/local/bin</code>):</p>
  <pre class="rx5"><code class="language-shell"
      >curl -fsSL https://manav.ch/eastwood.sh | bash</code
    ></pre>

  <p>Or from source (needs Go 1.25+ and a C toolchain):</p>
  <pre class="rx5"><code class="language-shell"
      >go install github.com/plutoniumm/eastwood/cmd/eastwood@latest</code
    ></pre>

  <h2>Usage</h2>
  <p>Point it at a file, a directory, or pipe in stdin:</p>
  <pre class="rx5"><code class="language-shell"
      >eastwood path/to/file.py
eastwood src/                    # walks a directory
cat foo.tex | eastwood --lang latex
eastwood --list-rules            # every rule + default severity</code
    ></pre>

  <h2>Rules &amp; config</h2>
  <p>
    <code>eastwood --list-rules</code> prints every rule, and
    <code>eastwood --rule py/bare-except path/</code> runs just one. Project
    settings live in an <code>eastwood.toml</code> at the project root (it walks
    up from the current directory) — set severities, per-rule options, and
    opt-in style preferences there.
  </p>

  <p>
    Full docs and the rule list are on
    <a
      href="https://github.com/plutoniumm/eastwood"
      target="_blank"
      rel="noopener noreferrer">GitHub</a
    >.
  </p>
</div>

<style>
  .eastwood-docs {
    max-width: 800px;
    color: #333;
  }

  h2 {
    margin-top: 32px;
  }

  pre {
    background: #f4f4f4;
    border-radius: 5px;
    padding: 4px;
  }

  pre code {
    display: block;
    padding: 12px;
    background: #fff;
    border-radius: 4px;
  }

  a {
    color: #2af;
  }
</style>
