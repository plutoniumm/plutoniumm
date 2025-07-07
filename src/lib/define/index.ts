import { update_ignores, invalid } from "./utils";
import { source } from "./sources";

const KV: Record<string, string> = {};
export const Defs = {};

function define(el: HTMLElement) {
    el = el.target;
    const id = "sticky";
    const existing = document.getElementById(id);

    const sticky = document.createElement("div");
    sticky.id = id;
    sticky.className = "sticky";
    Object.assign(sticky.style, {
        backgroundColor: el.style.color,
    });

    const key = el.innerText;
    const data = Defs[key] || "No definition found.";

    sticky.innerHTML = `
        <b style="font-size: 20px">${key}</b>:<br>
        ${data}
    `;
    existing?.remove();
    document.body.appendChild(sticky);
}

function run(colors, e) {
    if (e.children.length > 0) return;
    const t = e.innerText;
    if (invalid(t)) return;

    if (!Object.hasOwn(KV, t)) {
        KV[t] = colors[Object.keys(KV).length % colors.length];
    }
    let col = KV[t];
    e.style.color = "#" + col;
    e.id = "dfn-" + t;

    if (!Defs[t]) {
        const defn = document.querySelector(`define[key=${t}]`);
        if (!defn) {
            Defs[t] = 0;
            return;
        }
        const type = defn.getAttribute("type");
        const content = defn.getAttribute("content");

        source(type, content).then((d) => {
            Defs[t] = d || "No definition found.";
        });
    }
    e.addEventListener("click", define);
}

const sel = (id) => `span.${id}:not(:has(span))`;
export function walk(node: HTMLElement): string {
    update_ignores();

    node.querySelectorAll(sel("mord")).forEach((e) => {
        run(["f8f", "48f", "84f", "4a8", "f84", "f48"], e);
    });

    node.querySelectorAll(
        [sel("mop"), sel("mopen"), sel("mclose")].join(", "),
    ).forEach((e) => {
        run(["025", "029", "015", "88f", "808"], e);
    });
}
