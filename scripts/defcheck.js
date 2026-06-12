import { readFileSync, readdirSync } from "fs";
import { dirname, join } from "path";
import katex from "katex";

import { ignores, invalid } from "../src/lib/define/core.js";

const StdKeys = new Set();

for (const d of JSON.parse(
    readFileSync(new URL("../src/lib/defns.json", import.meta.url), "utf-8"),
)) {
    StdKeys.add(d.key);
}

const entities = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
};

const unescape = (s) =>
    s.replace(/&(?:(amp|lt|gt|quot)|#(\d+)|#x([0-9a-f]+));/gi, (_, name, dec, hex) =>
        name ? entities[name] : String.fromCodePoint(parseInt(dec ?? hex, hex ? 16 : 10)),
    );

// the runtime equivalent is `span.mord:not(:has(span))` etc. inside
// .katex-html, skipping anything under \text{...}; this walks katex's
// html-only output the same way without a DOM
function tokens(html) {
    const out = [];
    const stack = [];
    const re = /<span([^>]*)>|<\/span>|<[^>]+>|([^<]+)/g;
    let m;

    while ((m = re.exec(html))) {

        if (m[0][1] === "/" && m[0] === "</span>") {
            const top = stack.pop();
            if (!top) continue;
            const inText =
                /\btext\b/.test(top.cls) || stack.some((s) => /\btext\b/.test(s.cls));

            if (!top.child && !inText && /\b(mord|mop|mopen|mclose)\b/.test(top.cls)) {
                const t = unescape(top.text).trim();
                if (t) out.push(t);
            }
        } else if (m[0].startsWith("<span")) {
            const cls = (m[1].match(/class="([^"]*)"/) || [])[1] || "";
            if (stack.length) stack[stack.length - 1].child = true;
            stack.push({
                cls,
                text: "",
                child: false
            });
        } else if (m[2]) {
            if (stack.length) stack[stack.length - 1].text += m[2];
        } else if (stack.length) {
            stack[stack.length - 1].child = true; // svg, path, ...
        }
    }

    return out;
}

function maths(code, out) {
    const re = /(_{1,2})`((?:[^`\\]|\\.)*)`/g;
    let m;

    while ((m = re.exec(code))) {
        // svelte interpolations render with live values; a digit is
        // structurally invalid as a variable, so it cannot false-positive
        out.push([m[2].replace(/\$\{[^}]*\}/g, "1"), m[1] === "__"]);
    }
}

function page(code, dir) {
    const extras = [];

    const add = (s) =>
        s.split(",").forEach((e) => {
            e = e.trim();
            if (e && !extras.includes(e)) extras.push(e);
        });

    const ig = code.match(/ignores=(?:"([^"]*)"|\{\s*"([^"]*)"\s*\})/);
    if (ig) add(ig[1] ?? ig[2]);

    const gen = code.match(/generics=\{\{([^]*?)\}\}/);
    if (gen) for (const [, v] of gen[1].matchAll(/"([^"]+)"/g)) add(v);

    const list = ignores.concat(extras);

    const defined = new Set();

    for (const [, k] of code.matchAll(/define\(\s*"((?:[^"\\]|\\.)*)"/g)) {
        defined.add(k);
    }

    // the page's defines and ignores also govern math in its widgets
    const blocks = [];
    maths(code, blocks);

    for (const f of readdirSync(dir)) {
        if (!f.endsWith(".svelte") || f.startsWith("+")) continue;
        maths(readFileSync(join(dir, f), "utf-8"), blocks);
    }

    const undefs = new Set();

    for (const [tex, displayMode] of blocks) {
        const html = katex.renderToString(tex, {
            displayMode,
            throwOnError: false,
            output: "html",
        });

        for (const t of tokens(html)) {
            if (!invalid(t, list) && !StdKeys.has(t) && !defined.has(t)) {
                undefs.add(t);
            }
        }
    }

    return [...undefs];
}

export default function Defcheck() {
    const seen = new Set();

    return {
        name: "vite-plugin-defcheck",
        enforce: "pre", // before Tex doubles the backslashes
        transform(code, id) {
            if (!/\/routes\/(wave|drafts)\/[^/]+\/\+page\.svelte$/.test(id)) return;
            if (!code.includes("<Definations")) return;

            const undefs = page(code, dirname(id));
            const slug = id.replace(/.*\/routes\//, "").replace(/\/\+page\.svelte$/, "");
            const msg = `${slug}: ${undefs.join(", ")}`;
            if (!undefs.length || seen.has(msg)) return;

            seen.add(msg);
            console.warn(`\x1b[33m[defs] undefined in ${msg}\x1b[0m`);
        },
    };
}
