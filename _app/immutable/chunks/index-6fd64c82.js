function w(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(q)}function D(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function ot(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(I(e,n))}function at(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,s){if(r){const l=L(e,n,i,s);t.p(l,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:Q(1,r,g=>e[n[g]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const s=[],l=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);o>=c;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);s.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<s.length&&l[c].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(l[c],f)}}function U(t,e){if(v){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){v&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function yt(){return A(" ")}function gt(){return A("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){tt(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function H(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||s.push(o.name)}s.forEach(l=>r.removeAttribute(l))},()=>i(e))}function $t(t,e,n){return H(t,e,n,X)}function wt(t,e,n){return H(t,e,n,Y)}function et(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function vt(t){return et(t," ")}function Et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,n){t.classList[n?"add":"remove"](e)}function At(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function jt(t,e){return new t(e)}let p;function m(t){p=t}function O(){if(!p)throw new Error("Function called outside component initialization");return p}function Ct(t){O().$$.on_mount.push(t)}function Mt(t){O().$$.after_update.push(t)}const h=[],T=[],b=[],k=[],P=Promise.resolve();let N=!1;function z(){N||(N=!0,P.then(F))}function Tt(){return z(),P}function S(t){b.push(t)}const E=new Set;let _=0;function F(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const e=h[_];_++,m(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(m(null),h.length=0,_=0;T.length;)T.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];E.has(n)||(E.add(n),n())}b.length=0}while(h.length);for(;k.length;)k.pop()();N=!1,E.clear(),m(t)}function nt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const $=new Set;let d;function kt(){d={r:0,c:[],p:d}}function qt(){d.r||y(d.c),d=d.p}function it(t,e){t&&t.i&&($.delete(t),t.i(e))}function Dt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Lt(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function rt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||S(()=>{const l=t.$$.on_mount.map(q).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...l):y(l),t.$$.on_mount=[]}),s.forEach(S)}function lt(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,i,r,s,l,o=[-1]){const c=p;m(t);const u=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,g,...j)=>{const C=j.length?j[0]:g;return u.ctx&&r(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&ct(t,a)),g}):[],u.update(),f=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){J();const a=Z(e.target);u.fragment&&u.fragment.l(a),a.forEach(V)}else u.fragment&&u.fragment.c();e.intro&&it(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),K(),F()}m(c)}class Ot{$destroy(){lt(this,1),this.$destroy=w}$on(e,n){if(!D(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Tt as A,w as B,at as C,dt as D,_t as E,ft as F,U as G,st as H,ot as I,Y as J,wt as K,pt as L,R as M,ht as N,At as O,St as P,xt as Q,D as R,Ot as S,yt as a,mt as b,vt as c,qt as d,gt as e,it as f,kt as g,V as h,Ht as i,Mt as j,X as k,$t as l,Z as m,bt as n,Ct as o,Nt as p,A as q,et as r,ut as s,Dt as t,Et as u,jt as v,Lt as w,Bt as x,rt as y,lt as z};
