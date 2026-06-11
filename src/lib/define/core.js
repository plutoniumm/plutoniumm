// pure token rules shared by the runtime (utils.ts) and the build-time
// checker (scripts/defcheck.js); must stay free of app imports so the
// vite config can bundle it
export const ignores = (
    "sin,cos,ln,log,sinh,cosh,tanh,arg,sec,lim,mod" +
    "," +
    "d, O" +
    "," +
    "±,/,+,−,-,∪,∩,e,i,∅,∈,∧,∨,¬,⇒,⇔,→,↔,⊆,⊂,⊇,⊃,∃,∀,∄,∃!,∀!,{,},!,)!,.,⌊,⌋,⌈,⌉,∣,∥,∝,≠,=,≈,≡,≅,≤,≥,≪,≫,⊥,∠,⊤,⊥⊤,⊢,⊣,⊨,⊩,⊪,⊫,′,′′,′′′" +
    "," +
    "(((,((,(,),)),))), [[[,[[,[,],]],]]], [(,)], ([,]), ⌈), ⌉), ⌊), ⌋), ⌊, ⌋, ⌈, ⌉"
)
    .split(",")
    .map((e) => e.trim());

// just include any of these makes it invalid
const powderkeg = "π".split(",");

export function invalid(t, list = ignores) {
    if (!t.length) return true;
    if (/\s/.test(t)) return true;
    if (list.includes(t)) return true;
    // a variable looks like a variable: letters only. This drops operators,
    // slashes, digits and fraction debris (±, /, /2, 17, ⌊ ...) structurally
    if (!/^\p{L}+$/u.test(t)) return true;
    if (powderkeg.some((g) => t.includes(g))) return true;

    return false;
}
