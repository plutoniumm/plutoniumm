function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function i(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,s,u){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(c){const r=f(n,e,o,u);t.p(r,c)}}function l(t,n,e=n){return t.set(e),n}function d(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function _(){return b("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function E(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?m(n):g(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return b(n)}function A(t){return k(t," ")}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function N(t,n){t.value=null==n?"":n}function O(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function S(t,n,e){t.classList[e?"add":"remove"](n)}function L(t,n=document.body){return Array.from(n.querySelectorAll(t))}let q;function C(t){q=t}function M(){if(!q)throw new Error("Function called outside component initialization");return q}function P(t){M().$$.on_mount.push(t)}function T(t){M().$$.after_update.push(t)}function z(t,n){M().$$.context.set(t,n)}const B=[],F=[],D=[],G=[],H=Promise.resolve();let I=!1;function J(t){D.push(t)}let K=!1;const Q=new Set;function R(){if(!K){K=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];C(n),U(n.$$)}for(C(null),B.length=0;F.length;)F.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];Q.has(n)||(Q.add(n),n())}D.length=0}while(B.length);for(;G.length;)G.pop()();I=!1,K=!1,Q.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}const V=new Set;let W;function X(){W={r:0,c:[],p:W}}function Y(){W.r||r(W.c),W=W.p}function Z(t,n){t&&t.i&&(V.delete(t),t.i(n))}function tt(t,n,e,o){if(t&&t.o){if(V.has(t))return;V.add(t),W.c.push((()=>{V.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function nt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],c=n[s];if(c){for(const t in u)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function et(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function rt(t,n){t&&t.l(n)}function st(t,n,o,u){const{fragment:c,on_mount:i,on_destroy:f,after_update:a}=t.$$;c&&c.m(n,o),u||J((()=>{const n=i.map(e).filter(s);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(J)}function ut(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){-1===t.$$.dirty[0]&&(B.push(t),I||(I=!0,H.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(n,e,s,u,c,i,f=[-1]){const a=q;C(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&c(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ct(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!u&&u(l.ctx),e.target){if(e.hydrate){const t=w(e.target);l.fragment&&l.fragment.l(t),t.forEach(p)}else l.fragment&&l.fragment.c();e.intro&&Z(n.$$.fragment),st(n,e.target,e.anchor,e.customElement),R()}C(a)}class ft{$destroy(){ut(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function lt(n,e=t){let o;const r=[];function s(t){if(u(n,t)&&(n=t,o)){const t=!at.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),at.push(t,n)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(u,c=t){const i=[u,c];return r.push(i),1===r.length&&(o=e(s)||t),u(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,X as B,lt as C,i as D,a as E,d as F,t as G,m as H,$ as I,F as J,O as K,S as L,L as M,x as N,c as O,l as P,N as Q,r as R,ft as S,w as a,v as b,E as c,p as d,g as e,h as f,k as g,j as h,it as i,ot as j,y as k,_ as l,rt as m,A as n,st as o,nt as p,et as q,tt as r,u as s,b as t,Y as u,Z as v,ut as w,z as x,T as y,P as z};
