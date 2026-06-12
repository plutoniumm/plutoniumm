import katex from "katex";

function clean(str: string): string {
    str = str
        .replaceAll("&lcub;", "{")
        .replaceAll("&rcub;", "}")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&quot;", '"')
        .replaceAll("&amp;", "&")
        .replaceAll("&apos;", "'")
        .replaceAll("&nbsp;", " ")
        .replaceAll("&copy;", "©")
        .replaceAll("&reg;", "®")
        .replaceAll("&trade;", "™");

    return String.raw`${str}`;
}

type TSA = TemplateStringsArray;

export function _(strings: TSA | string, ...values: unknown[]): string {
    let string = "";
    try {
        if (typeof strings === "string") {
            strings = [strings.trim()];
        }

        string = clean(strings.join(""));
        string = katex.renderToString(string, { throwOnError: false });
    } catch (e) {
        console.error("Error rendering KaTeX:", e, strings);
        string = "[[ERROR]]: " + strings[0];
    }

    return string;
}

export function __(strings: TSA | string, ...values: unknown[]): string {
    let string = "";
    try {
        if (typeof strings === "string") {
            strings = [strings.trim()];
        }

        string = clean(strings.join(""));
        string = katex.renderToString(string, {
            throwOnError: false,
            displayMode: true,
        });
    } catch (e) {
        console.error("Error rendering KaTeX:", e, strings);
        string = "[[ERROR]]: " + strings[0];
    }

    return string;
}

interface Dataset {
    label: string;
    data: unknown;
    _mch: "dataset";
    pointRadius: number;
}

export function Dataset(name: string, data: unknown): Dataset {
    return {
        _mch: "dataset",
        label: name,
        data: data,
        pointRadius: 2,
    };
}
