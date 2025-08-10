export { default as Accordion } from "./accord.svelte";
export { default as Refs } from "./refs.svelte";
export { default as Link } from "./link.svelte";
export { default as LR } from "./LR.svelte";
export { default as Image } from "./image.svelte";
export { default as Scatter } from "./scatter.svelte";
export { default as Meta } from "./meta.svelte";
export { default as Definations } from "./define.svelte";

export function define(key, content, type = "text"): Defination {
    return {
        key,
        type,
        content,
    };
}
