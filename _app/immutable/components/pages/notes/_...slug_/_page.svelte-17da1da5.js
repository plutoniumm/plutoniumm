import{S as U,i as X,s as Z,v as N,k as f,q as T,a as L,w as Y,l as m,m as w,r as V,h as d,c as q,x as ss,n as l,p as _,b as F,G as t,y as J,t as O,d as as,f as P,z as Q,o as rs,I as ts,B as es,g as ns,K as cs}from"../../../../chunks/index-50681c01.js";function os(p){let n,v,E,H,h,e,c,u,k,A,G,y,M,B,C,s,S,K=p[2].title+"",R=new Date(p[2].date).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"})+"",$=p[2].caption&&function(r){let a,o,i,x,g,I,W=r[2].caption+"";return{c(){a=f("div"),o=f("img"),x=L(),g=f("div"),I=T(W),this.h()},l(j){a=m(j,"DIV",{class:!0});var D=w(a);o=m(D,"IMG",{fetchpriority:!0,class:!0,src:!0,alt:!0,style:!0}),x=q(D),g=m(D,"DIV",{class:!0});var z=w(g);I=V(z,W),z.forEach(d),D.forEach(d),this.h()},h(){l(o,"fetchpriority","high"),l(o,"class","hero w-100 rx10 p-rel svelte-jkfx9q"),ts(o.src,i=r[2].image)||l(o,"src",i),l(o,"alt",r[2].caption),_(o,"background","#fff"),l(g,"class","p5 rx10 p-abs capt svelte-jkfx9q"),l(a,"class","p-rel mx-a w-100")},m(j,D){F(j,a,D),t(a,o),t(a,x),t(a,g),t(g,I)},p:es,d(j){j&&d(a)}}}(p);var b=p[0].component;return b&&(s=N(b,{props:{}}),p[3](s)),{c(){n=f("div"),v=f("style"),E=T(`img {
      max-width: 100%;
      max-height: 400px;
      border-radius: 5px;
    }

    pre,
    code {
      white-space: pre-wrap !important;
      word-break: break-word !important;
    }`),H=L(),h=f("link"),e=L(),c=f("article"),u=f("header"),k=f("h1"),A=T(K),G=L(),y=f("div"),M=T(R),B=L(),$&&$.c(),C=L(),s&&Y(s.$$.fragment),this.h()},l(r){n=m(r,"DIV",{class:!0});var a=w(n);v=m(a,"STYLE",{});var o=w(v);E=V(o,`img {
      max-width: 100%;
      max-height: 400px;
      border-radius: 5px;
    }

    pre,
    code {
      white-space: pre-wrap !important;
      word-break: break-word !important;
    }`),o.forEach(d),H=q(a),h=m(a,"LINK",{rel:!0,href:!0}),e=q(a),c=m(a,"ARTICLE",{class:!0});var i=w(c);u=m(i,"HEADER",{class:!0,style:!0});var x=w(u);k=m(x,"H1",{class:!0});var g=w(k);A=V(g,K),g.forEach(d),G=q(x),y=m(x,"DIV",{class:!0});var I=w(y);M=V(I,R),I.forEach(d),x.forEach(d),B=q(i),$&&$.l(i),C=q(i),s&&ss(s.$$.fragment,i),i.forEach(d),a.forEach(d),this.h()},h(){l(h,"rel","stylesheet"),l(h,"href","/css/prismvsc.css"),l(k,"class","m20"),l(y,"class","nav w-100"),l(u,"class","d-b tc"),_(u,"margin","10px 0"),l(c,"class","rpm-10 fw3 mx-a svelte-jkfx9q"),l(n,"class","p20")},m(r,a){F(r,n,a),t(n,v),t(v,E),t(n,H),t(n,h),t(n,e),t(n,c),t(c,u),t(u,k),t(k,A),t(u,G),t(u,y),t(y,M),t(c,B),$&&$.m(c,null),t(c,C),s&&J(s,c,null),S=!0},p(r,[a]){r[2].caption&&$.p(r,a);const o={};if(b!==(b=r[0].component)){if(s){ns();const i=s;O(i.$$.fragment,1,0,()=>{Q(i,1)}),as()}b?(s=N(b,{props:{}}),r[3](s),Y(s.$$.fragment),P(s.$$.fragment,1),J(s,c,null)):s=null}else b&&s.$set(o)},i(r){S||(s&&P(s.$$.fragment,r),S=!0)},o(r){s&&O(s.$$.fragment,r),S=!1},d(r){r&&d(n),$&&$.d(),p[3](null),s&&Q(s)}}}function ls(p,n,v){let{data:E}=n;const{post:H}=E;let h;return rs(()=>{h.$$.root.querySelectorAll("a").forEach(e=>{e.target="_blank",e.rel="noopener noreferrer",e.style.color="#4af";const c=e.textContent;c.startsWith("[")&&c.endsWith("]")&&(e.outerHTML=`<sup>${e.outerHTML}</sup>`)})}),p.$$set=e=>{"data"in e&&v(0,E=e.data)},[E,h,H,function(e){cs[e?"unshift":"push"](()=>{h=e,v(1,h)})}]}class ps extends U{constructor(n){super(),X(this,n,ls,os,Z,{data:0})}}export{ps as default};
