import { invalid } from "./core.js";

export { update_ignores, update_definations } from "./utils";

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
        boxShadow: `-1px 1px 8px ${el.style.color}`,
    });

    const key = el.innerText;
    const data = Defs[key];

    sticky.innerHTML = `
        <span class="close ptr p-abs f-col j-ar al-ct" onclick="document.getElementById('${id}').remove()">✕</span>
        <b style="font-size: 20px;text-decoration:underline;">${key}</b>: <br />
        ${data}
    `;
    existing?.remove();
    document.body.appendChild(sticky);
}

export function run(colors, e) {
    if (e.children.length > 0) return;
    // words inside \text{...} are prose labels, never variables
    if (e.closest(".text")) return;
    const t = e.innerText;
    // explicit definitions always win; otherwise structurally invalid
    // tokens are skipped
    if (invalid(t) && !Object.hasOwn(Defs, t)) return;

    if (!Object.hasOwn(KV, t)) {
        KV[t] = colors[Object.keys(KV).length % colors.length];
    }

    let col = KV[t];
    e.style.color = col;
    e.id = "dfn-" + t;

    e.addEventListener("click", define);
}
