import{S as W,i as X,s as Z,v as Y,k as l,q as A,a as k,w as F,l as o,m as x,r as B,h as p,c as L,x as _,n as c,p as aa,b as J,G as r,y as O,t as P,d as sa,f as Q,z as U,I as ra,B as ta,g as ea}from"../../../../chunks/index-3a2d977b.js";function na(g){let e,w,$,V,v,H,i,h,E,R,T,b,j,q,z,a,S,C=g[1].title+"",K=new Date(g[1].date).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"})+"",m=g[1].caption&&function(t){let s,n,f,u,d,D,M=t[1].caption+"";return{c(){s=l("div"),n=l("img"),u=k(),d=l("div"),D=A(M),this.h()},l(G){s=o(G,"DIV",{class:!0});var I=x(s);n=o(I,"IMG",{fetchpriority:!0,class:!0,src:!0,alt:!0}),u=L(I),d=o(I,"DIV",{class:!0});var N=x(d);D=B(N,M),N.forEach(p),I.forEach(p),this.h()},h(){c(n,"fetchpriority","high"),c(n,"class","hero w-100 rx10 p-rel svelte-cpgsef"),ra(n.src,f=t[1].image)||c(n,"src",f),c(n,"alt",t[1].caption),c(d,"class","p5 rx10 p-abs capt svelte-cpgsef"),c(s,"class","p-rel mx-a w-100")},m(G,I){J(G,s,I),r(s,n),r(s,u),r(s,d),r(d,D)},p:ta,d(G){G&&p(s)}}}(g);var y=g[0].component;return y&&(a=Y(y,{})),{c(){e=l("div"),w=l("style"),$=A(`img {
      max-width: 100%;
      max-height: 400px;
      border-radius: 5px;
    }

    pre,
    code {
      white-space: pre-wrap !important;
      word-break: break-word !important;
    }`),V=k(),v=l("link"),H=k(),i=l("article"),h=l("header"),E=l("h1"),R=A(C),T=k(),b=l("div"),j=A(K),q=k(),m&&m.c(),z=k(),a&&F(a.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var s=x(e);w=o(s,"STYLE",{});var n=x(w);$=B(n,`img {
      max-width: 100%;
      max-height: 400px;
      border-radius: 5px;
    }

    pre,
    code {
      white-space: pre-wrap !important;
      word-break: break-word !important;
    }`),n.forEach(p),V=L(s),v=o(s,"LINK",{rel:!0,href:!0}),H=L(s),i=o(s,"ARTICLE",{class:!0});var f=x(i);h=o(f,"HEADER",{class:!0,style:!0});var u=x(h);E=o(u,"H1",{class:!0});var d=x(E);R=B(d,C),d.forEach(p),T=L(u),b=o(u,"DIV",{class:!0});var D=x(b);j=B(D,K),D.forEach(p),u.forEach(p),q=L(f),m&&m.l(f),z=L(f),a&&_(a.$$.fragment,f),f.forEach(p),s.forEach(p),this.h()},h(){c(v,"rel","stylesheet"),c(v,"href","/css/prismvsc.css"),c(E,"class","m20 tc"),c(b,"class","nav w-100 f j-bw"),c(h,"class","d-b"),aa(h,"margin","10px 0"),c(i,"class","rpm-10 mx-a svelte-cpgsef"),c(e,"class","p20")},m(t,s){J(t,e,s),r(e,w),r(w,$),r(e,V),r(e,v),r(e,H),r(e,i),r(i,h),r(h,E),r(E,R),r(h,T),r(h,b),r(b,j),r(i,q),m&&m.m(i,null),r(i,z),a&&O(a,i,null),S=!0},p(t,[s]){if(t[1].caption&&m.p(t,s),y!==(y=t[0].component)){if(a){ea();const n=a;P(n.$$.fragment,1,0,()=>{U(n,1)}),sa()}y?(a=Y(y,{}),F(a.$$.fragment),Q(a.$$.fragment,1),O(a,i,null)):a=null}},i(t){S||(a&&Q(a.$$.fragment,t),S=!0)},o(t){a&&P(a.$$.fragment,t),S=!1},d(t){t&&p(e),m&&m.d(),a&&U(a)}}}function ca(g,e,w){let{data:$}=e;const{post:V}=$;return g.$$set=v=>{"data"in v&&w(0,$=v.data)},[$,V]}class la extends W{constructor(e){super(),X(this,e,ca,na,Z,{data:0})}}export{la as default};
