import{S as Z,i as x,s as ee,k as b,a as j,q as M,l as w,m as E,c as I,r as N,h as d,n as v,b as S,G as _,f as y,d as G,t as q,L as P,o as te,w as F,x as J,y as K,z as X,g as V,p as le,u as T,B as ae,I as H}from"../../../chunks/index-2b855ee9.js";import{C as Y}from"../../../chunks/card-f966f783.js";const R=[{question:"Why Imaginary Numbers?",answer:"That's a misnomer. They just have one extra dimension. They're very real. While at hand, have you ever considered that even negetive numbers are made up. In fact. ALL NUMBERS are made up"}];function W(f,e,i){const t=f.slice();return t[2]=e[i],t}function z(f,e,i){const t=f.slice();return t[5]=e[i],t}function O(f){let e,i,t;return{c(){e=b("img"),this.h()},l(n){e=w(n,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","rx5 svelte-e2jomr"),H(e.src,i=`/images/set/${f[1](f[5].image)}`)||v(e,"src",i),v(e,"alt",t=f[5].caption)},m(n,r){S(n,e,r)},p(n,r){r&1&&!H(e.src,i=`/images/set/${n[1](n[5].image)}`)&&v(e,"src",i),r&1&&t!==(t=n[5].caption)&&v(e,"alt",t)},d(n){n&&d(e)}}}function se(f){let e,i,t,n,r=f[5].title+"",g,$,m,u=new Date(f[5].date).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"2-digit"})+"",o,k,p,c=f[5].desc+"",B,s,a=f[5].image&&O(f);return{c(){e=b("a"),a&&a.c(),i=j(),t=b("div"),n=b("h3"),g=M(r),$=j(),m=b("span"),o=M(u),k=j(),p=b("p"),B=M(c),this.h()},l(l){e=w(l,"A",{class:!0,href:!0});var h=E(e);a&&a.l(h),i=I(h),t=w(h,"DIV",{});var D=E(t);n=w(D,"H3",{class:!0});var L=E(n);g=N(L,r),L.forEach(d),$=I(D),m=w(D,"SPAN",{class:!0});var A=E(m);o=N(A,u),A.forEach(d),k=I(D),p=w(D,"P",{style:!0});var C=E(p);B=N(C,c),C.forEach(d),D.forEach(d),h.forEach(d),this.h()},h(){v(n,"class","svelte-e2jomr"),v(m,"class","dt svelte-e2jomr"),le(p,"margin-bottom","0"),v(e,"class","f svelte-e2jomr"),v(e,"href",s="/t/"+f[5].slug)},m(l,h){S(l,e,h),a&&a.m(e,null),_(e,i),_(e,t),_(t,n),_(n,g),_(t,$),_(t,m),_(m,o),_(t,k),_(t,p),_(p,B)},p(l,h){l[5].image?a?a.p(l,h):(a=O(l),a.c(),a.m(e,i)):a&&(a.d(1),a=null),h&1&&r!==(r=l[5].title+"")&&T(g,r),h&1&&u!==(u=new Date(l[5].date).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"2-digit"})+"")&&T(o,u),h&1&&c!==(c=l[5].desc+"")&&T(B,c),h&1&&s!==(s="/t/"+l[5].slug)&&v(e,"href",s)},d(l){l&&d(e),a&&a.d()}}}function Q(f){let e,i;return e=new Y({props:{className:"w-100 tl",$$slots:{default:[se]},$$scope:{ctx:f}}}),{c(){F(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){K(e,t,n),i=!0},p(t,n){const r={};n&257&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){i||(y(e.$$.fragment,t),i=!0)},o(t){q(e.$$.fragment,t),i=!1},d(t){X(e,t)}}}function ne(f){let e,i=f[2].question+"",t,n,r,g=f[2].answer+"",$,m;return{c(){e=b("div"),t=M(i),n=j(),r=b("div"),$=M(g),m=j(),this.h()},l(u){e=w(u,"DIV",{class:!0});var o=E(e);t=N(o,i),o.forEach(d),n=I(u),r=w(u,"DIV",{class:!0});var k=E(r);$=N(k,g),k.forEach(d),m=I(u),this.h()},h(){v(e,"class","q fw5 svelte-e2jomr"),v(r,"class","a")},m(u,o){S(u,e,o),_(e,t),S(u,n,o),S(u,r,o),_(r,$),S(u,m,o)},p:ae,d(u){u&&d(e),u&&d(n),u&&d(r),u&&d(m)}}}function U(f){let e,i;return e=new Y({props:{className:"m10 w-100 tl",$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){F(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,n){K(e,t,n),i=!0},p(t,n){const r={};n&256&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){i||(y(e.$$.fragment,t),i=!0)},o(t){q(e.$$.fragment,t),i=!1},d(t){X(e,t)}}}function re(f){let e,i,t,n,r,g,$,m,u=f[0].posts,o=[];for(let s=0;s<u.length;s+=1)o[s]=Q(z(f,u,s));const k=s=>q(o[s],1,1,()=>{o[s]=null});let p=R,c=[];for(let s=0;s<p.length;s+=1)c[s]=U(W(f,p,s));const B=s=>q(c[s],1,1,()=>{c[s]=null});return{c(){e=b("section");for(let s=0;s<o.length;s+=1)o[s].c();i=j(),t=b("br"),n=j(),r=b("h1"),g=M("Mini Thinks"),$=j();for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){e=w(s,"SECTION",{class:!0});var a=E(e);for(let h=0;h<o.length;h+=1)o[h].l(a);i=I(a),t=w(a,"BR",{}),n=I(a),r=w(a,"H1",{});var l=E(r);g=N(l,"Mini Thinks"),l.forEach(d),$=I(a);for(let h=0;h<c.length;h+=1)c[h].l(a);a.forEach(d),this.h()},h(){v(e,"class","mx-a w-100 svelte-e2jomr")},m(s,a){S(s,e,a);for(let l=0;l<o.length;l+=1)o[l].m(e,null);_(e,i),_(e,t),_(e,n),_(e,r),_(r,g),_(e,$);for(let l=0;l<c.length;l+=1)c[l].m(e,null);m=!0},p(s,[a]){if(a&3){u=s[0].posts;let l;for(l=0;l<u.length;l+=1){const h=z(s,u,l);o[l]?(o[l].p(h,a),y(o[l],1)):(o[l]=Q(h),o[l].c(),y(o[l],1),o[l].m(e,i))}for(V(),l=u.length;l<o.length;l+=1)k(l);G()}if(a&0){p=R;let l;for(l=0;l<p.length;l+=1){const h=W(s,p,l);c[l]?(c[l].p(h,a),y(c[l],1)):(c[l]=U(h),c[l].c(),y(c[l],1),c[l].m(e,null))}for(V(),l=p.length;l<c.length;l+=1)B(l);G()}},i(s){if(!m){for(let a=0;a<u.length;a+=1)y(o[a]);for(let a=0;a<p.length;a+=1)y(c[a]);m=!0}},o(s){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)q(o[a]);c=c.filter(Boolean);for(let a=0;a<c.length;a+=1)q(c[a]);m=!1},d(s){s&&d(e),P(o,s),P(c,s)}}}function oe(f,e,i){let{data:t}=e;te(()=>{console.log(t)});const n=r=>{if(!r)return"";const g=r.split(".");return g[g.length-2]+="-sm",g.join(".")};return f.$$set=r=>{"data"in r&&i(0,t=r.data)},[t,n]}class fe extends Z{constructor(e){super(),x(this,e,oe,re,ee,{data:0})}}export{fe as default};
