import{_ as r}from"./preload-helper-5e4dbdac.js";const a=(s,n)=>{const e=s[n];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((t,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+n)))})},i=async({data:s,params:n})=>{const e=s.post.slug,t=e.split("/");let o;return t.length===1?o=await a(Object.assign({"../../../../docs/tex.md":()=>r(()=>import("./tex-71eaa423.js"),["./tex-71eaa423.js","./index-3a2d977b.js"],import.meta.url)}),`../../../../docs/${e}.md`):t.length===2?o=await a(Object.assign({}),`../../../../docs/${t[0]}/${t[1]}.md`):t.length===3&&(o=await a(Object.assign({}),`../../../../docs/${t[0]}/${t[1]}/${t[2]}.md`)),{post:s.post,component:o.default}},l=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{l as _,i as l};
