const ignores = (
    "sin,cos,ln,log,sinh,cosh,tanh,arg,sec" +
    "," +
    "+,−,-,∪,∩,e,i,∅,∈,∧,∨,¬,⇒,⇔,→,↔,⊆,⊂,⊇,⊃,∃,∀,∄,∃!,∀!,{,},!,)!,.,⌊,⌋,⌈,⌉,∣,∥,∝,≠,=,≈,≡,≅,≤,≥,≪,≫,⊥,∠,⊤,⊥⊤,⊢,⊣,⊨,⊩,⊪,⊫" +
    "," +
    "(((,((,(,),)),))), [[[,[[,[,],]],]]], [(,)], ([,])"
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

export function update_ignores() {
    let extra = document.querySelector('meta[name="ignore_list"]');
    if (!extra) return;
    extra = extra.content.split(",").map((e) => e.trim());

    for (let i = 0; i <= extra.length; i++) {
        const e = extra[i];
        if (e && !ignores.includes(e)) {
            ignores.push(e);
        }
    }
}
