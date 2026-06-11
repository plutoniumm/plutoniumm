import { _ } from "$lib";

async function wikipedia(url) {
    if (!url.includes("en.wikipedia")) {
        url = `https://en.wikipedia.org/api/rest_v1/page/summary/${url}`;
    }

    let res = await fetch(url).then((r) => r.json());
    if (!res) return "";

    res = res.extract_html || res.extract;
    if (!res) return "";

    return res;
}

export async function source(type: string, content: string): Promise<string> {
    if (type === "wikipedia") return wikipedia(content);
    if (type !== "text") {
        console.warn(
            `define: unknown type "${type}", valid types are: text, wikipedia. Treating content as text`,
        );
    }
    return content.replace(/\$([^$]+)\$/g, (m, expr) => _(expr));
}
