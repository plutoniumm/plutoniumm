import{S as rt,i as ot,s as it,a as st,e as B,c as lt,b as J,g as ue,t as F,d as de,f as G,h as H,j as ct,o as Ie,k as ft,l as ut,m as dt,n as be,p as C,q as pt,r as ht,u as mt,v as W,w as Y,x as Oe,y as X,z as Z,A as le}from"./chunks/index-cec5b51f.js";import{S as nt,I as q,g as ze,f as We,a as ve,b as ce,s as V,i as Ye,c as fe,P as Xe,d as _t,e as gt,h as wt}from"./chunks/singletons-04ee8089.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function bt(a){return a.split("%25").map(decodeURI).join("%25")}function vt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const o of Et){let s=n[o];Object.defineProperty(n,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return St(n),n}function St(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(a){return a.replace(/\/$/,"")+Rt}function It(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ue(a)),pe(a,e));const te=new Map;function At(a,e){const n=Ue(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:s,...c}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&te.set(n,{body:s,init:c,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,c))}return pe(a,e)}function Pt(a,e,n){if(te.size>0){const o=Ue(a,n),s=te.get(o);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);te.delete(o)}}return pe(e,n)}function Ue(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${It(e.body)}"]`),o}const $t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(o=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const c=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(c)return e.push({name:c[1],matcher:c[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((g,p)=>{if(p%2){if(g.startsWith("x+"))return Ee(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Ee(String.fromCharCode(...g.slice(2).split("-").map($=>parseInt($,16))));const _=$t.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,k,L,D]=_;return e.push({name:L,matcher:D,optional:!!E,rest:!!k,chained:k?p===1&&t[0]==="":!1}),k?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Ee(g)}).join("")}).join("")}/?$`),params:e}}function Ut(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(Ut)}function Tt(a,e,n){const o={},s=a.slice(1);let c="";for(let t=0;t<e.length;t+=1){const f=e[t];let g=s[t];if(f.chained&&f.rest&&c&&(g=g?c+"/"+g:c),c="",g===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!n[f.matcher](g)){if(f.optional&&f.chained){let p=s.indexOf(void 0,t);if(p===-1){const _=e[t+1];if(_!=null&&_.rest&&_.chained)c=g;else return}for(;p>=t;)s[p]=s[p-1],p-=1;continue}return}o[f.name]=g}}if(!c)return o}function Ee(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,o){const s=new Set(e);return Object.entries(n).map(([f,[g,p,_]])=>{const{pattern:E,params:k}=Ot(f),L={id:f,exec:D=>{const $=E.exec(D);if($)return Tt($,k,o)},errors:[1,..._||[]].map(D=>a[D]),layouts:[0,...p||[]].map(t),leaf:c(g)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function c(f){const g=f<0;return g&&(f=~f),[g,a[f]]}function t(f){return f===void 0?f:[s.has(f),a[f]]}}function Dt(a){let e,n,o;var s=a[0][0];function c(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=W(s,c(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Oe(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),o=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&2&&(g.form=t[1]),s!==(s=t[0][0])){if(e){ue();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),de()}s?(e=W(s,c(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){o||(e&&G(e.$$.fragment,t),o=!0)},o(t){e&&F(e.$$.fragment,t),o=!1},d(t){t&&H(n),e&&Z(e,t)}}}function Ct(a){let e,n,o;var s=a[0][0];function c(t){return{props:{data:t[2],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return s&&(e=W(s,c(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Oe(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),o=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&523&&(g.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){ue();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),de()}s?(e=W(s,c(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){o||(e&&G(e.$$.fragment,t),o=!0)},o(t){e&&F(e.$$.fragment,t),o=!1},d(t){t&&H(n),e&&Z(e,t)}}}function qt(a){let e,n,o;var s=a[0][1];function c(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=W(s,c(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Oe(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),o=!0},p(t,f){const g={};if(f&8&&(g.data=t[3]),f&2&&(g.form=t[1]),s!==(s=t[0][1])){if(e){ue();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),de()}s?(e=W(s,c(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){o||(e&&G(e.$$.fragment,t),o=!0)},o(t){e&&F(e.$$.fragment,t),o=!1},d(t){t&&H(n),e&&Z(e,t)}}}function Ze(a){let e,n=a[5]&&xe(a);return{c(){e=ft("div"),n&&n.c(),this.h()},l(o){e=ut(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=dt(e);n&&n.l(s),s.forEach(H),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(o,s){J(o,e,s),n&&n.m(e,null)},p(o,s){o[5]?n?n.p(o,s):(n=xe(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&H(e),n&&n.d()}}}function xe(a){let e;return{c(){e=pt(a[6])},l(n){e=ht(n,a[6])},m(n,o){J(n,e,o)},p(n,o){o&64&&mt(e,n[6])},d(n){n&&H(e)}}}function Vt(a){let e,n,o,s,c;const t=[Ct,Dt],f=[];function g(_,E){return _[0][1]?0:1}e=g(a),n=f[e]=t[e](a);let p=a[4]&&Ze(a);return{c(){n.c(),o=st(),p&&p.c(),s=B()},l(_){n.l(_),o=lt(_),p&&p.l(_),s=B()},m(_,E){f[e].m(_,E),J(_,o,E),p&&p.m(_,E),J(_,s,E),c=!0},p(_,[E]){let k=e;e=g(_),e===k?f[e].p(_,E):(ue(),F(f[k],1,1,()=>{f[k]=null}),de(),n=f[e],n?n.p(_,E):(n=f[e]=t[e](_),n.c()),G(n,1),n.m(o.parentNode,o)),_[4]?p?p.p(_,E):(p=Ze(_),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(_){c||(G(n),c=!0)},o(_){F(n),c=!1},d(_){f[e].d(_),_&&H(o),p&&p.d(_),_&&H(s)}}}function Bt(a,e,n){let{stores:o}=e,{page:s}=e,{components:c}=e,{form:t}=e,{data_0:f=null}=e,{data_1:g=null}=e;ct(o.page.notify);let p=!1,_=!1,E=null;return Ie(()=>{const k=o.page.subscribe(()=>{p&&(n(5,_=!0),n(6,E=document.title||"untitled page"))});return n(4,p=!0),k}),a.$$set=k=>{"stores"in k&&n(7,o=k.stores),"page"in k&&n(8,s=k.page),"components"in k&&n(0,c=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,g=k.data_1)},a.$$.update=()=>{a.$$.dirty&384&&o.page.set(s)},[c,t,f,g,p,_,E,o,s]}class Ft extends rt{constructor(e){super(),ot(this,e,Bt,Vt,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Ht=function(a,e){return new URL(a,e).href},Qe={},ke=function(e,n,o){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=Ht(c,o),c in Qe)return;Qe[c]=!0;const t=c.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!o)for(let _=s.length-1;_>=0;_--){const E=s[_];if(E.href===c&&(!t||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Gt,t||(p.as="script",p.crossOrigin=""),p.href=c,document.head.appendChild(p),t)return new Promise((_,E)=>{p.addEventListener("load",_),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},Mt={},he=[()=>ke(()=>import("./chunks/0-018cd335.js"),["./chunks/0-018cd335.js","./chunks/_layout-38454bf1.js","./components/pages/_layout.svelte-58491963.js","./chunks/index-cec5b51f.js","./assets/_layout-1548f59b.css"],import.meta.url),()=>ke(()=>import("./chunks/1-fbe2d626.js"),["./chunks/1-fbe2d626.js","./components/error.svelte-36d155ea.js","./chunks/index-cec5b51f.js","./chunks/singletons-04ee8089.js"],import.meta.url),()=>ke(()=>import("./chunks/2-a0fc5439.js"),["./chunks/2-a0fc5439.js","./components/pages/_page.svelte-5a5eae3f.js","./chunks/index-cec5b51f.js","./assets/_page-2ee927e7.css"],import.meta.url)],Jt=[],Kt={"/":[2]},zt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},et=class{constructor(e,n){this.status=e,this.location=n}};async function Wt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,s])=>[o,await s])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Yt=-1,Xt=-2,Zt=-3,xt=-4,Qt=-5,en=-6;function tn(a,e){if(typeof a=="number")return s(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,o=Array(n.length);function s(c,t=!1){if(c===Yt)return;if(c===Zt)return NaN;if(c===xt)return 1/0;if(c===Qt)return-1/0;if(c===en)return-0;if(t)throw new Error("Invalid input");if(c in o)return o[c];const f=n[c];if(!f||typeof f!="object")o[c]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const g=f[0],p=e==null?void 0:e[g];if(p)return o[c]=p(s(f[1]));switch(g){case"Date":o[c]=new Date(f[1]);break;case"Set":const _=new Set;o[c]=_;for(let L=1;L<f.length;L+=1)_.add(s(f[L]));break;case"Map":const E=new Map;o[c]=E;for(let L=1;L<f.length;L+=2)E.set(s(f[L]),s(f[L+1]));break;case"RegExp":o[c]=new RegExp(f[1],f[2]);break;case"Object":o[c]=Object(f[1]);break;case"BigInt":o[c]=BigInt(f[1]);break;case"null":const k=Object.create(null);o[c]=k;for(let L=1;L<f.length;L+=2)k[f[L]]=s(f[L+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(f.length);o[c]=g;for(let p=0;p<f.length;p+=1){const _=f[p];_!==Xt&&(g[p]=s(_))}}else{const g={};o[c]=g;for(const p in f){const _=f[p];g[p]=s(_)}}return o[c]}return s(0)}function Ne(a){const e=new Set(a);function n(o,s){if(o){for(const c in o)if(c[0]!=="_"&&!e.has(c)){const t=a.join(", ");throw new Error(`Invalid export '${c}'${s?` in ${s}`:""} (valid exports are ${t}, or anything with a '_' prefix)`)}}}return n}Ne(["load","prerender","csr","ssr","trailingSlash"]);Ne(["load","prerender","csr","ssr","actions","trailingSlash"]);Ne(["GET","POST","PATCH","PUT","DELETE","prerender","trailingSlash"]);function nn(a){return a.filter(e=>e!=null)}const Se=jt(he,Jt,Kt,Mt),Pe=he[0],$e=he[1];Pe();$e();let ne={};try{ne=JSON.parse(sessionStorage[nt])}catch{}function Re(a){ne[a]=fe()}function an({target:a,base:e}){var Me;const n=document.documentElement,o=[];let s=null;const c={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,g=!1,p=!0,_=!1,E=!1,k=!1,L=!1,D,$=(Me=history.state)==null?void 0:Me[q];$||($=Date.now(),history.replaceState({...history.state,[q]:$},"",location.href));const me=ne[$];me&&(history.scrollRestoration="manual",scrollTo(me.x,me.y));let M,Te,ae;async function je(){ae=ae||Promise.resolve(),await ae,ae=null;const r=new URL(location.href),i=ie(r,!0);s=null,await Ce(i,r,[])}async function _e(r,{noScroll:i=!1,replaceState:u=!1,keepFocus:l=!1,state:h={},invalidateAll:d=!1},m,b){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:i?fe():null,keepfocus:l,redirect_chain:m,details:{state:h,replaceState:u},nav_token:b,accepted:()=>{d&&(L=!0)},blocked:()=>{},type:"goto"})}async function De(r){const i=ie(r,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:i.id,promise:Be(i).then(u=>(u.type==="loaded"&&u.state.error&&(s=null),u))},s.promise}async function re(...r){const u=Se.filter(l=>r.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(u)}async function Ce(r,i,u,l,h={},d){var b,y;Te=h;let m=r&&await Be(r);if(m||(m=await He(i,{id:null},await ee(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(r==null?void 0:r.url)||i,Te!==h)return!1;if(m.type==="redirect")if(u.length>10||u.includes(i.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return _e(new URL(m.location,i).href,{},[...u,i.pathname],h),!1;else((y=(b=m.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await V.updated.check()&&await Q(i);if(o.length=0,L=!1,_=!0,l&&l.details){const{details:w}=l,S=w.replaceState?0:1;w.state[q]=$+=S,history[w.replaceState?"replaceState":"pushState"](w.state,"",i)}if(s=null,g?(t=m.state,m.props.page&&(m.props.page.url=i),D.$set(m.props)):qe(m),l){const{scroll:w,keepfocus:S}=l,{activeElement:O}=document;await le();const j=document.activeElement!==O&&document.activeElement!==document.body;if(!S&&!j&&await Le(),p){const I=i.hash&&document.getElementById(i.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await le();p=!0,m.props.page&&(M=m.props.page),d&&d(),_=!1}function qe(r){var l;t=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),M=r.props.page,D=new Ft({target:a,props:{...r.props,stores:V},hydrate:!0});const u={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};c.after_navigate.forEach(h=>h(u)),g=!0}async function x({url:r,params:i,branch:u,status:l,error:h,route:d,form:m}){let b="never";for(const I of u)(I==null?void 0:I.slash)!==void 0&&(b=I.slash);r.pathname=yt(r.pathname,b),r.search=r.search;const y={type:"loaded",state:{url:r,params:i,branch:u,error:h,route:d},props:{components:nn(u).map(I=>I.node.component)}};m!==void 0&&(y.props.form=m);let w={},S=!M,O=0;for(let I=0;I<Math.max(u.length,t.branch.length);I+=1){const v=u[I],U=t.branch[I];(v==null?void 0:v.data)!==(U==null?void 0:U.data)&&(S=!0),v&&(w={...w,...v.data},S&&(y.props[`data_${O}`]=w),O+=1)}return(!t.url||r.href!==t.url.href||t.error!==h||m!==void 0&&m!==M.form||S)&&(y.props.page={error:h,params:i,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(r),form:m??null,data:S?w:M.data}),y}async function ge({loader:r,parent:i,url:u,params:l,route:h,server_data_node:d}){var w,S,O;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((w=y.universal)!=null&&w.load){let j=function(...v){for(const U of v){const{href:T}=new URL(U,u);b.dependencies.add(T)}};const I={route:{get id(){return b.route=!0,h.id}},params:new Proxy(l,{get:(v,U)=>(b.params.add(U),v[U])}),data:(d==null?void 0:d.data)??null,url:kt(u,()=>{b.url=!0}),async fetch(v,U){let T;v instanceof Request?(T=v.url,U={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...U}):T=v;const R=new URL(T,u).href;return j(R),g?Pt(T,R,U):At(T,U)},setHeaders:()=>{},depends:j,parent(){return b.parent=!0,i()}};m=await y.universal.load.call(null,I)??null,m=m?await Wt(m):null}return{node:y,loader:r,server:d,universal:(S=y.universal)!=null&&S.load?{type:"data",data:m,uses:b}:null,data:m??(d==null?void 0:d.data)??null,slash:((O=y.universal)==null?void 0:O.trailingSlash)??(d==null?void 0:d.slash)}}function Ve(r,i,u,l,h){if(L)return!0;if(!l)return!1;if(l.parent&&r||l.route&&i||l.url&&u)return!0;for(const d of l.params)if(h[d]!==t.params[d])return!0;for(const d of l.dependencies)if(o.some(m=>m(new URL(d))))return!0;return!1}function we(r,i){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?i??null:null}async function Be({id:r,invalidating:i,url:u,params:l,route:h}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:d,layouts:m,leaf:b}=h,y=[...m,b];d.forEach(R=>R==null?void 0:R().catch(()=>{})),y.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const S=t.url?r!==t.url.pathname+t.url.search:!1,O=t.route?h.id!==t.route.id:!1,j=y.reduce((R,P,N)=>{var z;const A=t.branch[N],K=!!(P!=null&&P[0])&&((A==null?void 0:A.loader)!==P[1]||Ve(R.some(Boolean),O,S,(z=A.server)==null?void 0:z.uses,l));return R.push(K),R},[]);if(j.some(Boolean)){try{w=await tt(u,j)}catch(R){return oe({status:500,error:await ee(R,{url:u,params:l,route:{id:h.id}}),url:u,route:h})}if(w.type==="redirect")return w}const I=w==null?void 0:w.nodes;let v=!1;const U=y.map(async(R,P)=>{var z;if(!R)return;const N=t.branch[P],A=I==null?void 0:I[P];if((!A||A.type==="skip")&&R[1]===(N==null?void 0:N.loader)&&!Ve(v,O,S,(z=N.universal)==null?void 0:z.uses,l))return N;if(v=!0,(A==null?void 0:A.type)==="error")throw A;return ge({loader:R[1],url:u,params:l,route:h,parent:async()=>{var Ke;const Je={};for(let ye=0;ye<P;ye+=1)Object.assign(Je,(Ke=await U[ye])==null?void 0:Ke.data);return Je},server_data_node:we(A===void 0&&R[0]?{type:"skip"}:A??null,N==null?void 0:N.server)})});for(const R of U)R.catch(()=>{});const T=[];for(let R=0;R<y.length;R+=1)if(y[R])try{T.push(await U[R])}catch(P){if(P instanceof et)return{type:"redirect",location:P.location};let N=500,A;if(I!=null&&I.includes(P))N=P.status??N,A=P.error;else if(P instanceof Ae)N=P.status,A=P.body;else{if(await V.updated.check())return await Q(u);A=await ee(P,{params:l,url:u,route:{id:h.id}})}const K=await Fe(R,T,d);return K?await x({url:u,params:l,branch:T.slice(0,K.idx).concat(K.node),status:N,error:A,route:h}):await He(u,{id:h.id},A,N)}else T.push(void 0);return await x({url:u,params:l,branch:T,status:200,error:null,route:h,form:i?void 0:null})}async function Fe(r,i,u){for(;r--;)if(u[r]){let l=r;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await u[r](),loader:u[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:i,url:u,route:l}){const h={},d=await Pe();let m=null;if(d.has_server_load)try{const w=await tt(u,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||f)&&await Q(u)}const b=await ge({loader:Pe,url:u,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:we(m)}),y={node:await $e(),loader:$e,universal:null,server:null,data:null};return await x({url:u,params:h,branch:[b,y],status:r,error:i,route:null})}function ie(r,i){if(Ye(r,e))return;const u=bt(r.pathname.slice(e.length)||"/");for(const l of Se){const h=l.exec(u);if(h)return{id:r.pathname+r.search,invalidating:i,route:l,params:vt(h),url:r}}}function Ge({url:r,type:i,intent:u,delta:l}){var b,y;let h=!1;const d={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((y=u==null?void 0:u.route)==null?void 0:y.id)??null},url:r},willUnload:!u,type:i};l!==void 0&&(d.delta=l);const m={...d,cancel:()=>{h=!0}};return E||c.before_navigate.forEach(w=>w(m)),h?null:d}async function se({url:r,scroll:i,keepfocus:u,redirect_chain:l,details:h,type:d,delta:m,nav_token:b,accepted:y,blocked:w}){const S=ie(r,!1),O=Ge({url:r,type:d,delta:m,intent:S});if(!O){w();return}Re($),y(),E=!0,g&&V.navigating.set(O),await Ce(S,r,l,{scroll:i,keepfocus:u,details:h},b,()=>{E=!1,c.after_navigate.forEach(j=>j(O)),V.navigating.set(null)})}async function He(r,i,u,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await oe({status:l,error:u,url:r,route:i}):await Q(r)}function Q(r){return location.href=r.href,new Promise(()=>{})}function at(){let r;n.addEventListener("mousemove",d=>{const m=d.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function i(d){l(d.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const u=new IntersectionObserver(d=>{for(const m of d)m.isIntersecting&&(re(new URL(m.target.href).pathname),u.unobserve(m.target))},{threshold:0});function l(d,m){const b=We(d,n);if(!b)return;const{url:y,external:w}=ve(b,e);if(w)return;const S=ce(b);S.reload||(m<=S.preload_data?De(y):m<=S.preload_code&&re(y.pathname))}function h(){u.disconnect();for(const d of n.querySelectorAll("a")){const{url:m,external:b}=ve(d,e);if(b)continue;const y=ce(d);y.reload||(y.preload_code===Xe.viewport&&u.observe(d),y.preload_code===Xe.eager&&re(m.pathname))}}c.after_navigate.push(h),h()}return{after_navigate:r=>{Ie(()=>(c.after_navigate.push(r),()=>{const i=c.after_navigate.indexOf(r);c.after_navigate.splice(i,1)}))},before_navigate:r=>{Ie(()=>(c.before_navigate.push(r),()=>{const i=c.before_navigate.indexOf(r);c.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!g)&&(p=!1)},goto:(r,i={})=>_e(r,i,[]),invalidate:r=>{if(typeof r=="function")o.push(r);else{const{href:i}=new URL(r,location.href);o.push(u=>u.href===i)}return je()},invalidateAll:()=>(L=!0,je()),preload_data:async r=>{const i=new URL(r,ze(document));await De(i)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:u,route:l}=t;if(!l)return;const h=await Fe(t.branch.length,u,l.errors);if(h){const d=await x({url:i,params:t.params,branch:u.slice(0,h.idx).concat(h.node),status:r.status??500,error:r.error,route:l});t=d.state,D.$set(d.props),le().then(Le)}}else if(r.type==="redirect")_e(r.location,{invalidateAll:!0},[]);else{const i={form:r.data,page:{...M,form:r.data,status:r.status}};D.$set(i),r.type==="success"&&le().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let u=!1;if(!E){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};c.before_navigate.forEach(d=>d(h))}u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re($);try{sessionStorage[nt]=JSON.stringify(ne)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||at(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const u=We(i.composedPath()[0],n);if(!u)return;const{url:l,external:h,target:d}=ve(u,e);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const m=ce(u);if(!(u instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(h||m.reload){Ge({url:l,type:"link"})||i.preventDefault(),E=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){k=!0,Re($),t.url=l,V.page.set({...M,url:l}),V.page.notify();return}se({url:l,scroll:m.noscroll?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{if(i.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||u.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||u.action);if(Ye(d,e))return;const m=i.target,{noscroll:b,reload:y}=ce(m);if(y)return;i.preventDefault(),i.stopPropagation();const w=new FormData(m),S=l==null?void 0:l.getAttribute("name");S&&w.append(S,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(w).toString(),se({url:d,scroll:b?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var u;if((u=i.state)!=null&&u[q]){if(i.state[q]===$)return;const l=i.state[q]-$;se({url:new URL(location.href),scroll:ne[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=i.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[q]:++$},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&V.navigating.set(null)})},_hydrate:async({status:r=200,error:i,node_ids:u,params:l,route:h,data:d,form:m})=>{f=!0;const b=new URL(location.href);({params:l={},route:h={id:null}}=ie(b,!1)||{});let y;try{const w=u.map(async(S,O)=>{const j=d[O];return ge({loader:he[S],url:b,params:l,route:h,parent:async()=>{const I={};for(let v=0;v<O;v+=1)Object.assign(I,(await w[v]).data);return I},server_data_node:we(j)})});y=await x({url:b,params:l,branch:await Promise.all(w),status:r,error:i,form:m,route:Se.find(({id:S})=>S===h.id)??null})}catch(w){if(w instanceof et){await Q(new URL(w.location,location.href));return}y=await oe({status:w instanceof Ae?w.status:500,error:await ee(w,{url:b,params:l,route:h}),url:b,route:h})}qe(y)}}}async function tt(a,e){var c;const n=new URL(a);n.pathname=Lt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await pe(n.href),s=await o.json();if(!o.ok)throw new Error(s);return(c=s.nodes)==null||c.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=tn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ee(a,e){return a instanceof Ae?a.body:zt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(o=>{setTimeout(()=>{var s;o((s=getSelection())==null?void 0:s.removeAllRanges())})})}}async function cn({env:a,hydrate:e,paths:n,target:o,version:s}){_t(n),wt(s);const c=an({target:o,base:n.base});gt({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{cn as start};
