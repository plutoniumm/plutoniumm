export async function hash(message) {
    const data = new TextEncoder().encode(message);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf)).map((b) => b / 255);
}

export function Stripe(p, width, height) {
    for (let i = 0; i < width; i++) {
        let amt = (i / width) * 3 + 0.5;
        amt = Math.sin((amt % 1) * Math.PI);
        p.stroke(i / width, 1, p.lerp(0.7, 1, amt));
        p.line(i, 0, i, height);
    }
    p.noStroke();
}

export function Circ(p, H, width, height, size) {
    for (let i = 0; i < 100; i++) {
        if (i % 5 === 0) {
            p.fill("white");
        } else {
            p.fill(H[i + 0], H[i + 1], H[i + 2], 0.66);
        }
        p.circle(H[i + 0] * width, H[i + 1] * height, H[i + 2] * size);
    }
}

function clean(fname) {
    fname = fname.replace(/[^a-zA-Z0-9]/g, "");
    fname = fname
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");

    if (fname.length > 10) {
        fname = fname.substring(0, 10);
    } else {
        while (fname.length < 10) {
            fname += Math.random().toString(36).substring(2, 3);
        }
    }

    return fname;
}

export function save(c, fname) {
    if (!c) return;
    if (!fname) {
        fname = Math.random().toString(36).substring(2, 15);
    } else {
        fname = clean(fname);
    }

    c.elt.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fname + ".png";
        a.click();
    });
}
