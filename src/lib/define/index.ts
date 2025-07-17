import { invalid } from "./utils";

export { update_ignores, update_definations } from "./utils";

const KV: Record<string, string> = {};
export const Defs = {};
export const Undefs = [];

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
    const data = Defs[key];

    sticky.innerHTML = `
        <b style="font-size: 20px">${key}</b>:<br>
        ${data}
    `;
    existing?.remove();
    document.body.appendChild(sticky);
}

export function run(colors, e) {
    if (e.children.length > 0) return;
    const t = e.innerText;
    if (invalid(t)) return;

    if (!Object.hasOwn(KV, t)) {
        KV[t] = colors[Object.keys(KV).length % colors.length];
    }
    if (!Object.hasOwn(Defs, t)) {
        if (!Undefs.includes(t)) {
            Undefs.push(t);
        }
    }

    let col = KV[t];
    e.style.color = "#" + col;
    e.id = "dfn-" + t;

    e.addEventListener("click", define);
}
