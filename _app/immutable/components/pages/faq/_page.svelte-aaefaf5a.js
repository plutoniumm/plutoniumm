import{S as C,i as N,s as S,k as _,l as p,m as d,h as u,n as v,b as m,f as h,d as T,t as g,J as B,w as A,x as D,y as L,z as V,g as W,q as y,a as w,r as x,c as b,G as q,B as j}from"../../../chunks/index-fe928154.js";import{C as z}from"../../../chunks/card-d9ca0f74.js";const E=[{question:"Why Imaginary Numbers?",answer:"That's a misnomer. They just have one extra dimension. They're very real. While at hand, have you ever considered that even negetive numbers are made up. In fact. ALL NUMBERS are made up"}];function I(i,t,o){const s=i.slice();return s[0]=t[o],s}function G(i){let t,o=i[0].question+"",s,e,c,l=i[0].answer+"",n,a;return{c(){t=_("div"),s=y(o),e=w(),c=_("div"),n=y(l),a=w(),this.h()},l(r){t=p(r,"DIV",{class:!0});var f=d(t);s=x(f,o),f.forEach(u),e=b(r),c=p(r,"DIV",{class:!0});var $=d(c);n=x($,l),$.forEach(u),a=b(r),this.h()},h(){v(t,"class","q svelte-bw3iwm"),v(c,"class","a")},m(r,f){m(r,t,f),q(t,s),m(r,e,f),m(r,c,f),q(c,n),m(r,a,f)},p:j,d(r){r&&u(t),r&&u(e),r&&u(c),r&&u(a)}}}function k(i){let t,o;return t=new z({props:{className:"m10 w-100 tl",$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){A(t.$$.fragment)},l(s){D(t.$$.fragment,s)},m(s,e){L(t,s,e),o=!0},p(s,e){const c={};e&8&&(c.$$scope={dirty:e,ctx:s}),t.$set(c)},i(s){o||(h(t.$$.fragment,s),o=!0)},o(s){g(t.$$.fragment,s),o=!1},d(s){V(t,s)}}}function J(i){let t,o,s=E,e=[];for(let l=0;l<s.length;l+=1)e[l]=k(I(i,s,l));const c=l=>g(e[l],1,1,()=>{e[l]=null});return{c(){t=_("section");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=p(l,"SECTION",{class:!0});var n=d(t);for(let a=0;a<e.length;a+=1)e[a].l(n);n.forEach(u),this.h()},h(){v(t,"class","mx-a w-100 svelte-bw3iwm")},m(l,n){m(l,t,n);for(let a=0;a<e.length;a+=1)e[a].m(t,null);o=!0},p(l,[n]){if(n&0){s=E;let a;for(a=0;a<s.length;a+=1){const r=I(l,s,a);e[a]?(e[a].p(r,n),h(e[a],1)):(e[a]=k(r),e[a].c(),h(e[a],1),e[a].m(t,null))}for(W(),a=s.length;a<e.length;a+=1)c(a);T()}},i(l){if(!o){for(let n=0;n<s.length;n+=1)h(e[n]);o=!0}},o(l){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)g(e[n]);o=!1},d(l){l&&u(t),B(e,l)}}}class P extends C{constructor(t){super(),N(this,t,null,J,S,{})}}export{P as default};
