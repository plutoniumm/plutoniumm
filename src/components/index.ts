export { default as Accordion } from "./accord.svelte";
export { default as Refs } from "./refs.svelte";
export { default as Link } from "./link.svelte";
export { default as LR } from "./LR.svelte";
export { default as Image } from "./image.svelte";
export { default as Scatter } from "./scatter.svelte";
export { default as Meta } from "./meta.svelte";
export { default as Definations } from "./define.svelte";

export const T: Record<DefSource, DefSource> = {
    text: "text",
    wikipedia: "wikipedia",
};

export function define(
    key: string,
    content: string,
    type: DefSource = T.text,
): Defination {
    return {
        key,
        type,
        content,
    };
}
