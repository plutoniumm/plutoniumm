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

export function _(string: string, opts = {}): string {
  opts["throwOnError"] = false;

  return katex.renderToString(clean(string), opts);
}

export function __(string: string, opts = {}): string {
  opts["throwOnError"] = false;
  opts["displayMode"] = true;

  return katex.renderToString(clean(string), opts);
}

interface Dataset {
  label: string;
  data: any;
  _mch: "dataset";
  pointRadius: number;
}

export function Dataset(name: string, data: any): Dataset {
  return {
    _mch: "dataset",
    label: name,
    data: data,
    pointRadius: 2,
  };
}
