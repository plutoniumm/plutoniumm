import fs from "fs";

function parseText (text: string) {
    //   <Meta
    //   title="The square root of a Square"
    //   sub="Recreational Math #001"
    //   desc="Algebra and 'Arithmetic' on Shapes"
    //   date="18 April 2025"
    // ></Meta>
    let string = text.split("<Meta")[1].split("></Meta>")[0].trim().split("\n");
    let string2 = "{";

    for (let i = 0; i < string.length; i++) {
        let line = string[i].trim();

        if (line.length > 0) {
            const [key, value] = line.split("=");
            string2 += `"${key.trim()}": ${value.trim()},`;
        }
    }

    string2 = string2.slice(0, -1) + "}";

    return JSON.parse(string2);
}

const posts = {};

for (const f of fs.readdirSync("src/routes/wave")) {
    if (f.includes("."))
        continue;

    if (f.includes("test"))
        continue;

    const file = fs.readFileSync(`src/routes/wave/${f}/+page.svelte`, "utf-8");

    if (file.includes("nodeploy"))
        continue;

    const stats = parseText(file);
    stats["raw"] = f;

    const year = stats.date.split(" ")[2];
    (posts[year] ??= []).push(stats);
}

export const data = posts;
