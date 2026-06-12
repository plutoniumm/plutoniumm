import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import type { PageServerLoad } from "./$types";

export const prerender = true;

const sh = (cmd: string): string | null => {
  try {
    return execSync(cmd, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
};

const LANG: Record<string, string> = {
  svelte: "svelte",
  ts: "ts",
  js: "js",
  mjs: "js",
  cjs: "js",
  css: "css",
  html: "html",
  json: "json",
  md: "md",
};

// binary / image / font / lockfile — not code, don't count
const SKIP_EXT = new Set([
  "png", "jpg", "jpeg", "gif", "webp", "ico", "svg", "avif",
  "woff", "woff2", "ttf", "otf", "eot",
  "mp4", "mp3", "pdf", "zip", "wasm",
]);
const SKIP_FILE = new Set(["package-lock.json", "yarn.lock", "pnpm-lock.yaml"]);

const countLoc = () => {
  // only git-tracked files — never walk the fs (gitignored dirs hold drafts)
  const files = (sh("git ls-files") ?? "").split("\n").filter(Boolean);
  const byLang: Record<string, number> = {};
  let counted = 0;

  for (const f of files) {
    const base = f.split("/").pop() ?? f;
    if (SKIP_FILE.has(base)) continue;
    const dot = base.lastIndexOf(".");
    const ext = dot > 0 ? base.slice(dot + 1).toLowerCase() : "";
    if (SKIP_EXT.has(ext)) continue;

    let text: string;
    try {
      text = readFileSync(f, "utf8");
    } catch {
      continue;
    }
    if (text.includes("\0")) continue; // binary safety net

    let lines = 0;
    for (let i = 0; i < text.length; i++) if (text[i] === "\n") lines++;
    if (text.length && !text.endsWith("\n")) lines++;

    const lang = LANG[ext] ?? "other";
    byLang[lang] = (byLang[lang] ?? 0) + lines;
    counted++;
  }

  const loc = Object.entries(byLang)
    .map(([lang, lines]) => ({
      lang,
      lines
    }))
    .sort((a, b) => b.lines - a.lines);

  return {
    loc,
    files: counted
  };
};

export const load: PageServerLoad = async () => {
  const built = new Date().toISOString();

  const deployed =
    sh("git log -1 --format=%cI gh-pages") ??
    sh("git log -1 --format=%cI origin/gh-pages");

  const untracked = (sh("git status --porcelain") ?? "")
    .split("\n")
    .filter((l) => l.startsWith("??"))
    .map((l) => l.slice(3).trim());

  const commit = sh("git rev-parse --short HEAD");

  return {
    built,
    deployed,
    untracked,
    commit,
    ...countLoc()
  };
};
