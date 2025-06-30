import type { PageServerLoad } from "./$types";
import fs from "fs";

function parseText(text: string) {
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

let posts = [];
fs.readdirSync("src/routes/p").forEach((f) => {
    if (f.includes(".")) return f;
    if (f.includes("test")) return f;

    const file = fs.readFileSync(`src/routes/p/${f}/+page.svelte`, "utf-8");
    if (file.includes("nodeploy")) return f;
    const stats = parseText(file);
    stats["raw"] = f.replace(".svelte", "");

    posts.push(stats);
});

posts = posts.reduce((acc, post) => {
    const year = post.date.split(" ")[2];
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(post);
    return acc;
}, {});

export const prerender = true;
export const load: PageServerLoad = async ({ params }) => {
    return {
        posts: Object.entries(posts),
    };
};
