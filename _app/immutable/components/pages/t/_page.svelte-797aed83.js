import{S as Z,i as x,s as ee,k,a as I,q as N,l as b,m as w,c as j,r as T,h as d,n as p,b as B,G as _,f as y,d as G,t as q,L as P,o as te,w as F,x as J,y as K,z as X,g as V,p as le,u as L,B as ae,I as H}from"../../../chunks/index-6fd64c82.js";import{C as Y}from"../../../chunks/card-559dee78.js";const R=[{question:"Why Imaginary Numbers?",answer:"That's a misnomer. They just have one extra dimension. They're very real. While at hand, have you ever considered that even negetive numbers are made up. In fact. ALL NUMBERS are made up"}];function W(f,e,o){const t=f.slice();return t[1]=e[o],t}function z(f,e,o){const t=f.slice();return t[4]=e[o],t}function O(f){let e,o,t;return{c(){e=k("img"),this.h()},l(n){e=b(n,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){p(e,"class","rx5 svelte-t9kejr"),H(e.src,o=`https://manav.ch/posts/${f[4].slug}/${f[4].image}`)||p(e,"src",o),p(e,"alt",t=f[4].caption)},m(n,i){B(n,e,i)},p(n,i){i&1&&!H(e.src,o=`https://manav.ch/posts/${n[4].slug}/${n[4].image}`)&&p(e,"src",o),i&1&&t!==(t=n[4].caption)&&p(e,"alt",t)},d(n){n&&d(e)}}}function se(f){let e,o,t,n,i=f[4].title+"",v,$,m,u=new Date(f[4].date).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"2-digit"})+"",r,E,g,c=f[4].desc+"",D,s,a=f[4].image&&O(f);return{c(){e=k("a"),a&&a.c(),o=I(),t=k("div"),n=k("h3"),v=N(i),$=I(),m=k("span"),r=N(u),E=I(),g=k("p"),D=N(c),this.h()},l(l){e=b(l,"A",{class:!0,href:!0});var h=w(e);a&&a.l(h),o=j(h),t=b(h,"DIV",{});var S=w(t);n=b(S,"H3",{class:!0});var M=w(n);v=T(M,i),M.forEach(d),$=j(S),m=b(S,"SPAN",{class:!0});var A=w(m);r=T(A,u),A.forEach(d),E=j(S),g=b(S,"P",{style:!0});var C=w(g);D=T(C,c),C.forEach(d),S.forEach(d),h.forEach(d),this.h()},h(){p(n,"class","svelte-t9kejr"),p(m,"class","dt svelte-t9kejr"),le(g,"margin-bottom","0"),p(e,"class","f svelte-t9kejr"),p(e,"href",s="/t/"+f[4].slug)},m(l,h){B(l,e,h),a&&a.m(e,null),_(e,o),_(e,t),_(t,n),_(n,v),_(t,$),_(t,m),_(m,r),_(t,E),_(t,g),_(g,D)},p(l,h){l[4].image?a?a.p(l,h):(a=O(l),a.c(),a.m(e,o)):a&&(a.d(1),a=null),h&1&&i!==(i=l[4].title+"")&&L(v,i),h&1&&u!==(u=new Date(l[4].date).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"2-digit"})+"")&&L(r,u),h&1&&c!==(c=l[4].desc+"")&&L(D,c),h&1&&s!==(s="/t/"+l[4].slug)&&p(e,"href",s)},d(l){l&&d(e),a&&a.d()}}}function Q(f){let e,o;return e=new Y({props:{className:"w-100 tl",$$slots:{default:[se]},$$scope:{ctx:f}}}),{c(){F(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){K(e,t,n),o=!0},p(t,n){const i={};n&129&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){o||(y(e.$$.fragment,t),o=!0)},o(t){q(e.$$.fragment,t),o=!1},d(t){X(e,t)}}}function ne(f){let e,o=f[1].question+"",t,n,i,v=f[1].answer+"",$,m;return{c(){e=k("div"),t=N(o),n=I(),i=k("div"),$=N(v),m=I(),this.h()},l(u){e=b(u,"DIV",{class:!0});var r=w(e);t=T(r,o),r.forEach(d),n=j(u),i=b(u,"DIV",{class:!0});var E=w(i);$=T(E,v),E.forEach(d),m=j(u),this.h()},h(){p(e,"class","q fw5 svelte-t9kejr"),p(i,"class","a")},m(u,r){B(u,e,r),_(e,t),B(u,n,r),B(u,i,r),_(i,$),B(u,m,r)},p:ae,d(u){u&&d(e),u&&d(n),u&&d(i),u&&d(m)}}}function U(f){let e,o;return e=new Y({props:{className:"m10 w-100 tl",$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){F(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){K(e,t,n),o=!0},p(t,n){const i={};n&128&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){o||(y(e.$$.fragment,t),o=!0)},o(t){q(e.$$.fragment,t),o=!1},d(t){X(e,t)}}}function re(f){let e,o,t,n,i,v,$,m,u=f[0].posts,r=[];for(let s=0;s<u.length;s+=1)r[s]=Q(z(f,u,s));const E=s=>q(r[s],1,1,()=>{r[s]=null});let g=R,c=[];for(let s=0;s<g.length;s+=1)c[s]=U(W(f,g,s));const D=s=>q(c[s],1,1,()=>{c[s]=null});return{c(){e=k("section");for(let s=0;s<r.length;s+=1)r[s].c();o=I(),t=k("br"),n=I(),i=k("h1"),v=N("Mini Thinks"),$=I();for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){e=b(s,"SECTION",{class:!0});var a=w(e);for(let h=0;h<r.length;h+=1)r[h].l(a);o=j(a),t=b(a,"BR",{}),n=j(a),i=b(a,"H1",{});var l=w(i);v=T(l,"Mini Thinks"),l.forEach(d),$=j(a);for(let h=0;h<c.length;h+=1)c[h].l(a);a.forEach(d),this.h()},h(){p(e,"class","mx-a w-100 svelte-t9kejr")},m(s,a){B(s,e,a);for(let l=0;l<r.length;l+=1)r[l].m(e,null);_(e,o),_(e,t),_(e,n),_(e,i),_(i,v),_(e,$);for(let l=0;l<c.length;l+=1)c[l].m(e,null);m=!0},p(s,[a]){if(a&1){u=s[0].posts;let l;for(l=0;l<u.length;l+=1){const h=z(s,u,l);r[l]?(r[l].p(h,a),y(r[l],1)):(r[l]=Q(h),r[l].c(),y(r[l],1),r[l].m(e,o))}for(V(),l=u.length;l<r.length;l+=1)E(l);G()}if(a&0){g=R;let l;for(l=0;l<g.length;l+=1){const h=W(s,g,l);c[l]?(c[l].p(h,a),y(c[l],1)):(c[l]=U(h),c[l].c(),y(c[l],1),c[l].m(e,null))}for(V(),l=g.length;l<c.length;l+=1)D(l);G()}},i(s){if(!m){for(let a=0;a<u.length;a+=1)y(r[a]);for(let a=0;a<g.length;a+=1)y(c[a]);m=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)q(r[a]);c=c.filter(Boolean);for(let a=0;a<c.length;a+=1)q(c[a]);m=!1},d(s){s&&d(e),P(r,s),P(c,s)}}}function oe(f,e,o){let{data:t}=e;return te(()=>{console.log(t)}),f.$$set=n=>{"data"in n&&o(0,t=n.data)},[t]}class fe extends Z{constructor(e){super(),x(this,e,oe,re,ee,{data:0})}}export{fe as default};
