import katex from 'katex';

function clean (str: string): string {
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

export function _ (string: string): string {
  return katex.renderToString(clean(string), {
    throwOnError: false,
  });
};

export function __ (string: string): string {
  return katex.renderToString(clean(string), {
    throwOnError: false,
    displayMode: true,
  });
};

interface Dataset {
  label: string;
  data: any;
  _mch: "dataset";
}

export function Dataset (name: string, data: any): Dataset {
  return {
    _mch: "dataset",
    label: name,
    data: data,
  }
}