import { source } from "./sources";
import { ignores } from "./core.js";

export function update_ignores(extra) {
    for (let i = 0; i <= extra.length; i++) {
        const e = extra[i];
        if (e && !ignores.includes(e)) {
            ignores.push(e);
        }
    }
}

export function update_definations(definitions, Defs) {
    return Promise.all(
        definitions.map((def) => {
            const { type, content, key } = def;
            return source(type, content).then((d) => {
                Defs[key] = d || "";
                return d;
            });
        }),
    );
}
