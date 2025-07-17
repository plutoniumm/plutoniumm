import { source } from "./sources";

const ignores = (
    "sin,cos,ln,log,sinh,cosh,tanh,arg,sec,lim" +
    "," +
    "d, O" +
    "," +
    "+,−,-,∪,∩,e,i,∅,∈,∧,∨,¬,⇒,⇔,→,↔,⊆,⊂,⊇,⊃,∃,∀,∄,∃!,∀!,{,},!,)!,.,⌊,⌋,⌈,⌉,∣,∥,∝,≠,=,≈,≡,≅,≤,≥,≪,≫,⊥,∠,⊤,⊥⊤,⊢,⊣,⊨,⊩,⊪,⊫,′,′′,′′′" +
    "," +
    "(((,((,(,),)),))), [[[,[[,[,],]],]]], [(,)], ([,]), ⌈), ⌉), ⌊), ⌋), ⌊, ⌋, ⌈, ⌉"
)
    .split(",")
    .map((e) => e.trim());

// just include any of these makes it invalid
const powderkeg = "π".split(",");

export function invalid(t: string): boolean {
    if (!t.length) return true;
    if (t.includes("\n") || t.includes(" ")) return true;
    if (ignores.includes(t)) return true;
    if (!isNaN(Number(t)) && !isNaN(parseFloat(t))) return true;
    if (powderkeg.some((g) => t.includes(g))) return true;

    return false;
}

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
                Defs[key] = d || 0;
                return d;
            });
        }),
    );
}
