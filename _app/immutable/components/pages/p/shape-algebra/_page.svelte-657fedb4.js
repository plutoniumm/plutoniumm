import{S as ja,i as Oa,s as Na,K as Pa,e as x,h as q,j as y,l as c,L as _e,o as v,M as Pe,q as Se,H as Je,N as Ke,O as Qe,P as Ut,Q as he,R as Ze,x as M,y as V,z as D,T as as,U as ts,t as z,b as j,A as C,n as o,c as ie,f as A,C as H,m as T,E as R,p,u as oe,g as ce,a as le,F as Z,d as w,V as N,k as g,W,J as es,X as Y,G as L,Y as Za,Z as ya}from"../../../../chunks/index-c3f5ff3e.js";import{C as ze,u as je,S as ss,k as Oe,M as rs,a as X}from"../../../../chunks/math-566c513b.js";function ns(s){let a,n=[s[1]],e={};for(let i=0;i<n.length;i+=1)e=Pa(e,n[i]);return{c(){a=x("canvas"),this.h()},l(i){a=q(i,"CANVAS",{}),y(a).forEach(c),this.h()},h(){_e(a,e)},m(i,h){v(i,a,h),s[8](a)},p(i,[h]){_e(a,e=Pe(n,[i[1]]))},i:Se,o:Se,d(i){i&&c(a),s[8](null)}}}function is(s,a,n){let e,{type:i}=a,{data:h={datasets:[]}}=a,{options:r={}}=a,{plugins:u=[]}=a,{updateMode:l}=a,{chart:m=null}=a,d=function(f){let{data:E,type:b,options:O,plugins:F,children:_,$$scope:I,$$slots:S,...P}=f;return P}(a);return Je(()=>{n(2,m=new ze(e,{type:i,data:h,options:r,plugins:u}))}),Ke(()=>{m&&(n(2,m.data=h,m),Object.assign(m.options,r),m.update(l))}),Qe(()=>{m&&m.destroy(),n(2,m=null)}),je(()=>e),s.$$set=f=>{n(9,a=Pa(Pa({},a),Ut(f))),"type"in f&&n(3,i=f.type),"data"in f&&n(4,h=f.data),"options"in f&&n(5,r=f.options),"plugins"in f&&n(6,u=f.plugins),"updateMode"in f&&n(7,l=f.updateMode),"chart"in f&&n(2,m=f.chart)},a=Ut(a),[e,d,m,i,h,r,u,l,function(f){he[f?"unshift":"push"](()=>{e=f,n(0,e)})}]}class os extends ja{constructor(a){super(),Oa(this,a,is,ns,Na,{type:3,data:4,options:5,plugins:6,updateMode:7,chart:2})}}function cs(s){let a,n,e;const i=[{type:"scatter"},s[1]];function h(u){s[4](u)}let r={};for(let u=0;u<i.length;u+=1)r=Pa(r,i[u]);return s[0]!==void 0&&(r.chart=s[0]),a=new os({props:r}),s[3](a),he.push(()=>Ze(a,"chart",h)),{c(){M(a.$$.fragment)},l(u){V(a.$$.fragment,u)},m(u,l){D(a,u,l),e=!0},p(u,[l]){const m=2&l?Pe(i,[i[0],as(u[1])]):{};!n&&1&l&&(n=!0,m.chart=u[0],ts(()=>n=!1)),a.$set(m)},i(u){e||(z(a.$$.fragment,u),e=!0)},o(u){j(a.$$.fragment,u),e=!1},d(u){s[3](null),C(a,u)}}}function ls(s,a,n){ze.register(ss);let e,i,{chart:h=null}=a;return je(()=>i),s.$$set=r=>{n(5,a=Pa(Pa({},a),Ut(r))),"chart"in r&&n(0,h=r.chart)},s.$$.update=()=>{n(1,e=a)},a=Ut(a),[h,e,i,function(r){he[r?"unshift":"push"](()=>{i=r,n(2,i)})},function(r){h=r,n(0,h)}]}class hs extends ja{constructor(a){super(),Oa(this,a,ls,cs,Na,{chart:0})}}function ps(s){let a,n,e;return n=new hs({props:{data:{labels:["Scatter"],datasets:s[0]},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:1,animation:!1}}}),{c(){a=x("div"),M(n.$$.fragment),this.h()},l(i){a=q(i,"DIV",{class:!0});var h=y(a);V(n.$$.fragment,h),h.forEach(c),this.h()},h(){o(a,"class","square h-100 w-100 svelte-b874cb")},m(i,h){v(i,a,h),D(n,a,null),e=!0},p(i,[h]){const r={};1&h&&(r.data={labels:["Scatter"],datasets:i[0]}),n.$set(r)},i(i){e||(z(n.$$.fragment,i),e=!0)},o(i){j(n.$$.fragment,i),e=!1},d(i){i&&c(a),C(n)}}}function us(s,a,n){let{data:e=[]}=a;return e===void 0&&e===null||Array.isArray(e)||(e=[e]),s.$$set=i=>{"data"in i&&n(0,e=i.data)},[e]}class fa extends ja{constructor(a){super(),Oa(this,a,us,ps,Na,{data:0})}}function Ne(s){return s=s.replaceAll("&lcub;","{").replaceAll("&rcub;","}").replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&amp;","&").replaceAll("&apos;","'").replaceAll("&nbsp;"," ").replaceAll("&copy;","©").replaceAll("&reg;","®").replaceAll("&trade;","™"),String.raw`${s}`}function G(s){return Oe.renderToString(Ne(s),{throwOnError:!1})}function za(s){return Oe.renderToString(Ne(s),{throwOnError:!1,displayMode:!0})}function k(s,a){return{_mch:"dataset",label:s,data:a,pointRadius:2}}function fs(s){let a,n,e,i,h;const r=s[2].default,u=ie(r,s,s[1],null);return{c(){a=x("a"),u&&u.c(),n=A(),e=H("svg"),i=H("path"),this.h()},l(l){a=q(l,"A",{href:!0,class:!0});var m=y(a);u&&u.l(m),n=T(m),e=R(m,"svg",{class:!0,viewBox:!0,fill:!0});var d=y(e);i=R(d,"path",{d:!0}),y(i).forEach(c),d.forEach(c),m.forEach(c),this.h()},h(){o(i,"d","M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18"),o(e,"class","p-rel svelte-1wvqub8"),o(e,"viewBox","0 0 32 32"),o(e,"fill","none"),o(a,"href",s[0]),o(a,"class","svelte-1wvqub8")},m(l,m){v(l,a,m),u&&u.m(a,null),p(a,n),p(a,e),p(e,i),h=!0},p(l,[m]){u&&u.p&&(!h||2&m)&&oe(u,r,l,l[1],h?le(r,l[1],m,null):ce(l[1]),null),(!h||1&m)&&o(a,"href",l[0])},i(l){h||(z(u,l),h=!0)},o(l){j(u,l),h=!1},d(l){l&&c(a),u&&u.d(l)}}}function ms(s,a,n){let{$$slots:e={},$$scope:i}=a,{href:h=""}=a;return s.$$set=r=>{"href"in r&&n(0,h=r.href),"$$scope"in r&&n(1,i=r.$$scope)},[h,i,e]}class ds extends ja{constructor(a){super(),Oa(this,a,ms,fs,Na,{href:0})}}const $s=s=>({}),Ae=s=>({}),ws=s=>({}),Te=s=>({});function gs(s){let a,n,e,i,h;const r=s[2].l,u=ie(r,s,s[1],Te),l=s[2].r,m=ie(l,s,s[1],Ae);return{c(){a=x("div"),n=x("div"),u&&u.c(),e=A(),i=x("div"),m&&m.c(),this.h()},l(d){a=q(d,"DIV",{class:!0});var f=y(a);n=q(f,"DIV",{style:!0});var E=y(n);u&&u.l(E),E.forEach(c),e=T(f),i=q(f,"DIV",{style:!0});var b=y(i);m&&m.l(b),b.forEach(c),f.forEach(c),this.h()},h(){Z(n,"flex",s[0][0]),Z(i,"flex",s[0][1]),o(a,"class","f")},m(d,f){v(d,a,f),p(a,n),u&&u.m(n,null),p(a,e),p(a,i),m&&m.m(i,null),h=!0},p(d,[f]){u&&u.p&&(!h||2&f)&&oe(u,r,d,d[1],h?le(r,d[1],f,ws):ce(d[1]),Te),(!h||1&f)&&Z(n,"flex",d[0][0]),m&&m.p&&(!h||2&f)&&oe(m,l,d,d[1],h?le(l,d[1],f,$s):ce(d[1]),Ae),(!h||1&f)&&Z(i,"flex",d[0][1])},i(d){h||(z(u,d),z(m,d),h=!0)},o(d){j(u,d),j(m,d),h=!1},d(d){d&&c(a),u&&u.d(d),m&&m.d(d)}}}function vs(s,a,n){let{$$slots:e={},$$scope:i}=a,{ratio:h="1:1"}=a;return h=function(r){const[u,l]=r.split(":").map(Number),m=u+l;return[u/m,l/m]}(h),s.$$set=r=>{"ratio"in r&&n(0,h=r.ratio),"$$scope"in r&&n(1,i=r.$$scope)},[h,i,e]}class Ct extends ja{constructor(a){super(),Oa(this,a,vs,gs,Na,{ratio:0})}}function ys(s){let a,n;return a=new fa({props:{slot:"l",data:[k("circle",s[5].map(s[2].ucirc)),k("square",s[5].map(s[2].usq)),k("circle + square",s[5].map(s[9]))]}}),{c(){M(a.$$.fragment)},l(e){V(a.$$.fragment,e)},m(e,i){D(a,e,i),n=!0},p(e,i){const h={};1&i&&(h.data=[k("circle",e[5].map(e[2].ucirc)),k("square",e[5].map(e[2].usq)),k("circle + square",e[5].map(e[9]))]),a.$set(h)},i(e){n||(z(a.$$.fragment,e),n=!0)},o(e){j(a.$$.fragment,e),n=!1},d(e){C(a,e)}}}function xs(s){let a,n,e,i,h,r,u,l,m,d=za(`r_1 e^{i \\theta} + r_2 e^{i \\theta}
        \\newline\\quad\\quad
        \\rightarrow (z_1 + z_2 e^{${s[0][0]}})  e^{i \\theta}`)+"";return{c(){a=x("div"),n=new N(!1),e=A(),i=x("p"),h=w(`Offset: 0
      `),r=x("input"),u=w(" 8"),this.h()},l(f){a=q(f,"DIV",{class:!0,slot:!0});var E=y(a);n=W(E,!1),e=T(E),i=q(E,"P",{style:!0});var b=y(i);h=g(b,`Offset: 0
      `),r=q(b,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),u=g(b," 8"),b.forEach(c),E.forEach(c),this.h()},h(){n.a=e,o(r,"type","range"),o(r,"min","0"),o(r,"max","8"),o(r,"step","0.5"),o(r,"class","svelte-qea4xm"),Z(i,"margin","0 2rem"),o(a,"class","f-col j-ar h-100"),o(a,"slot","r")},m(f,E){v(f,a,E),n.m(d,a),p(a,e),p(a,i),p(i,h),p(i,r),Y(r,s[0][0]),p(i,u),l||(m=[L(r,"change",s[8]),L(r,"input",s[8])],l=!0)},p(f,E){1&E&&d!==(d=za(`r_1 e^{i \\theta} + r_2 e^{i \\theta}
        \\newline\\quad\\quad
        \\rightarrow (z_1 + z_2 e^{${f[0][0]}})  e^{i \\theta}`)+"")&&n.p(d),1&E&&Y(r,f[0][0])},d(f){f&&c(a),l=!1,Za(m)}}}function qs(s){let a,n,e,i,h,r;return{c(){a=x("div"),n=w(`Offset: 0
      `),e=x("input"),i=w(`
      31.41`),this.h()},l(u){a=q(u,"DIV",{slot:!0,class:!0});var l=y(a);n=g(l,`Offset: 0
      `),e=q(l,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),i=g(l,`
      31.41`),l.forEach(c),this.h()},h(){o(e,"type","range"),o(e,"min","0"),o(e,"max","31.41"),o(e,"step","0.25"),o(e,"class","svelte-qea4xm"),o(a,"slot","caption"),o(a,"class","svelte-qea4xm")},m(u,l){v(u,a,l),p(a,n),p(a,e),Y(e,s[0][0]),p(a,i),h||(r=[L(e,"change",s[11]),L(e,"input",s[11])],h=!0)},p(u,l){1&l&&Y(e,u[0][0])},d(u){u&&c(a),h=!1,Za(r)}}}function bs(s){let a,n;return a=new fa({props:{slot:"l",data:[k("circle",s[5].map(s[2].ucirc)),k("square",s[5].map(s[2].usq)),k("circle * square",s[5].map(s[12]))],$$slots:{caption:[qs]},$$scope:{ctx:s}}}),{c(){M(a.$$.fragment)},l(e){V(a.$$.fragment,e)},m(e,i){D(a,e,i),n=!0},p(e,i){const h={};1&i&&(h.data=[k("circle",e[5].map(e[2].ucirc)),k("square",e[5].map(e[2].usq)),k("circle * square",e[5].map(e[12]))]),4194305&i&&(h.$$scope={dirty:i,ctx:e}),a.$set(h)},i(e){n||(z(a.$$.fragment,e),n=!0)},o(e){j(a.$$.fragment,e),n=!1},d(e){C(a,e)}}}function Es(s){let a,n,e,i,h,r,u,l,m,d=za(`r_1 e^{i \\theta} * r_2 e^{i \\theta} \\newline\\quad\\quad
        \\rightarrow (r_1 * r_2) e^{i 2\\theta+${s[0][0]}}`)+"";return{c(){a=x("div"),n=new N(!1),e=A(),i=x("p"),h=w(`Offset: 0
      `),r=x("input"),u=w(`
      31.41`),this.h()},l(f){a=q(f,"DIV",{class:!0,slot:!0});var E=y(a);n=W(E,!1),e=T(E),i=q(E,"P",{style:!0});var b=y(i);h=g(b,`Offset: 0
      `),r=q(b,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),u=g(b,`
      31.41`),b.forEach(c),E.forEach(c),this.h()},h(){n.a=e,o(r,"type","range"),o(r,"min","0"),o(r,"max","31.41"),o(r,"step","0.25"),o(r,"class","svelte-qea4xm"),Z(i,"margin","0 2rem"),o(a,"class","f-col j-ar h-100"),o(a,"slot","r")},m(f,E){v(f,a,E),n.m(d,a),p(a,e),p(a,i),p(i,h),p(i,r),Y(r,s[0][0]),p(i,u),l||(m=[L(r,"change",s[10]),L(r,"input",s[10])],l=!0)},p(f,E){1&E&&d!==(d=za(`r_1 e^{i \\theta} * r_2 e^{i \\theta} \\newline\\quad\\quad
        \\rightarrow (r_1 * r_2) e^{i 2\\theta+${f[0][0]}}`)+"")&&n.p(d),1&E&&Y(r,f[0][0])},d(f){f&&c(a),l=!1,Za(m)}}}function ks(s){let a,n;return a=new fa({props:{slot:"l",data:[k("circle",s[5].map(s[2].ucirc)),k("circle (offset)",X.lin(s[4],X["2Pi"]+s[4],ma).map(s[2].ucirc)),k("circle ^ circle (offset)",s[5].map(s[15]))]}}),{c(){M(a.$$.fragment)},l(e){V(a.$$.fragment,e)},m(e,i){D(a,e,i),n=!0},p(e,i){const h={};1&i&&(h.data=[k("circle",e[5].map(e[2].ucirc)),k("circle (offset)",X.lin(e[4],X["2Pi"]+e[4],ma).map(e[2].ucirc)),k("circle ^ circle (offset)",e[5].map(e[15]))]),a.$set(h)},i(e){n||(z(a.$$.fragment,e),n=!0)},o(e){j(a.$$.fragment,e),n=!1},d(e){C(a,e)}}}function Is(s){let a,n,e,i,h,r,u,l,m,d,f,E,b,O,F=za(`r_1 e^{i \\theta_1 r_2 e^{i \\theta_2}}
      \\newline\\quad\\quad
      e^{i[(\\theta + ${s[0][0]})\\cos\\theta + ${s[0][1]}]} e^{ (\\theta + ${s[0][0]})\\sin\\theta}`)+"";return{c(){a=x("div"),n=new N(!1),e=A(),i=x("div"),h=w(`Offset 1: 0
      `),r=x("input"),u=w(`
      8`),l=A(),m=x("div"),d=w(`Offset 2: 0
      `),f=x("input"),E=w(`
      8`),this.h()},l(_){a=q(_,"DIV",{class:!0,slot:!0,style:!0});var I=y(a);n=W(I,!1),e=T(I),i=q(I,"DIV",{});var S=y(i);h=g(S,`Offset 1: 0
      `),r=q(S,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),u=g(S,`
      8`),S.forEach(c),l=T(I),m=q(I,"DIV",{});var P=y(m);d=g(P,`Offset 2: 0
      `),f=q(P,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),E=g(P,`
      8`),P.forEach(c),I.forEach(c),this.h()},h(){n.a=e,o(r,"type","range"),o(r,"min","0"),o(r,"max","8"),o(r,"step","0.5"),o(r,"class","svelte-qea4xm"),o(f,"type","range"),o(f,"min","0"),o(f,"max","8"),o(f,"step","0.5"),o(f,"class","svelte-qea4xm"),o(a,"class","f-col j-ar h-100"),o(a,"slot","r"),Z(a,"margin","0 2rem")},m(_,I){v(_,a,I),n.m(F,a),p(a,e),p(a,i),p(i,h),p(i,r),Y(r,s[0][0]),p(i,u),p(a,l),p(a,m),p(m,d),p(m,f),Y(f,s[0][1]),p(m,E),b||(O=[L(r,"change",s[13]),L(r,"input",s[13]),L(f,"change",s[14]),L(f,"input",s[14])],b=!0)},p(_,I){1&I&&F!==(F=za(`r_1 e^{i \\theta_1 r_2 e^{i \\theta_2}}
      \\newline\\quad\\quad
      e^{i[(\\theta + ${_[0][0]})\\cos\\theta + ${_[0][1]}]} e^{ (\\theta + ${_[0][0]})\\sin\\theta}`)+"")&&n.p(F),1&I&&Y(r,_[0][0]),1&I&&Y(f,_[0][1])},d(_){_&&c(a),b=!1,Za(O)}}}function _s(s){let a,n;return a=new fa({props:{slot:"l",data:[...s[1][0]?[k("square",s[5].map(s[2].usq)),k("circle",s[5].map(s[2].ucirc))]:[],k("square ^ circle (offset)",s[5].map(s[19]))]}}),{c(){M(a.$$.fragment)},l(e){V(a.$$.fragment,e)},m(e,i){D(a,e,i),n=!0},p(e,i){const h={};3&i&&(h.data=[...e[1][0]?[k("square",e[5].map(e[2].usq)),k("circle",e[5].map(e[2].ucirc))]:[],k("square ^ circle (offset)",e[5].map(e[19]))]),a.$set(h)},i(e){n||(z(a.$$.fragment,e),n=!0)},o(e){j(a.$$.fragment,e),n=!1},d(e){C(a,e)}}}function Ss(s){let a,n,e,i,h,r,u,l,m,d,f,E,b,O,F,_;return{c(){a=x("div"),n=x("label"),e=w(`Show base circle and square
      `),i=x("input"),h=A(),r=x("div"),u=w(`Offset 1: 0
      `),l=x("input"),m=w(`
      8`),d=A(),f=x("div"),E=w(`Offset 2: 0
      `),b=x("input"),O=w(`
      8`),this.h()},l(I){a=q(I,"DIV",{class:!0,slot:!0,style:!0});var S=y(a);n=q(S,"LABEL",{class:!0,for:!0});var P=y(n);e=g(P,`Show base circle and square
      `),i=q(P,"INPUT",{type:!0,id:!0}),P.forEach(c),h=T(S),r=q(S,"DIV",{});var sa=y(r);u=g(sa,`Offset 1: 0
      `),l=q(sa,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),m=g(sa,`
      8`),sa.forEach(c),d=T(S),f=q(S,"DIV",{});var B=y(f);E=g(B,`Offset 2: 0
      `),b=q(B,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),O=g(B,`
      8`),B.forEach(c),S.forEach(c),this.h()},h(){o(i,"type","checkbox"),o(i,"id","show-base"),o(n,"class","f al-ct"),o(n,"for","show-base"),o(l,"type","range"),o(l,"min","0"),o(l,"max","8"),o(l,"step","0.5"),o(l,"class","svelte-qea4xm"),o(b,"type","range"),o(b,"min","0"),o(b,"max","8"),o(b,"step","0.5"),o(b,"class","svelte-qea4xm"),o(a,"class","f-col j-ar h-100"),o(a,"slot","r"),Z(a,"margin","0 2rem")},m(I,S){v(I,a,S),p(a,n),p(n,e),p(n,i),i.checked=s[1][0],p(a,h),p(a,r),p(r,u),p(r,l),Y(l,s[0][0]),p(r,m),p(a,d),p(a,f),p(f,E),p(f,b),Y(b,s[0][1]),p(f,O),F||(_=[L(i,"change",s[16]),L(l,"change",s[17]),L(l,"input",s[17]),L(b,"change",s[18]),L(b,"input",s[18])],F=!0)},p(I,S){2&S&&(i.checked=I[1][0]),1&S&&Y(l,I[0][0]),1&S&&Y(b,I[0][1])},d(I){I&&c(a),F=!1,Za(_)}}}function As(s){let a;return{c(){a=w("Using shapes as exponents (video)")},l(n){a=g(n,"Using shapes as exponents (video)")},m(n,e){v(n,a,e)},d(n){n&&c(a)}}}function Ts(s){let a,n,e,i,h,r,u,l,m,d,f,E,b,O,F,_,I,S,P,sa,B,Lt,aa,Bt,at,Q,Ht,tt,et,st,rt,nt,da,it,xa,Rt,ot,qa,Yt,ct,ba,Ft,lt,ta,$a,Gt,wa,ht,Ea,Xt,pt,J,Jt,ut,ft,mt,dt,$t,wt,gt,ra,vt,ea,ga,Wa,Kt,Qt,Ma,Zt,ae,na,ia,We,yt,oa,xt,K,te,qt,bt,Et,kt,It,_t,St,ka,ee,At,Va,Da,Ca,Ua,Ia,se,Tt,ca,Pt,La,Ba,Ha,Ra,Ya,Fa,la,zt,_a,re,jt,va,Ot,Sa,ne,Nt,Aa,Ga,ha,Wt,Me=G("z = a + bi = |z| e^{i\\ \\text{arg}(z)} = r e^{i\\theta}")+"",Ve=G("i = \\sqrt{-1}")+"",De=G("z = r e^{i \\theta}")+"",Ce=G("z_1 + z_2 = r_1 e^{i \\theta} + r_2 e^{i \\theta} = (r_1 + r_2) e^{i 2\\theta+k}")+"",Ue=G("k")+"",Le=G("z(\\theta) = \\sec(\\theta- \\frac \\pi2 \\lfloor \\frac {4\\theta + \\pi}{2\\pi}\\rfloor )e^{i \\theta}")+"",Be=G("z(\\theta) = e^{i \\theta}")+"",He=G("z(\\theta+k) = \\sec(\\theta - \\frac{\\pi}{2} \\lfloor \\frac{4\\theta + \\pi}{2\\pi} \\rfloor) e^{i 2\\theta + k}")+"",Re=G("f(\\alpha) = \\sec(\\alpha- \\frac \\pi2 \\lfloor \\frac {4\\alpha + \\pi}{2\\pi}\\rfloor )")+"",Ye=G("(\\cos(\\alpha) f(\\alpha) \\frac X2 +x_0, \\sin(\\alpha) f(\\alpha) \\frac Y2 + y_0) ")+"",Fe=G("r_1=r_2=1")+"",Ge=G("e^{ (\\theta + k_1)\\sin\\theta}")+"",Xe=G("e^{i[(\\theta + k_1)\\cos\\theta + k_2]}")+"";return a=new rs({props:{title:"The square root of a Square",sub:"Seeing Numbers #001",desc:"Algebra and 'Arithmetic' on Shapes",date:"18 April 2025"}}),da=new fa({props:{data:k("circle",s[5].map(s[2].ucirc))}}),$a=new fa({props:{data:[k("circle",s[5].map(s[2].ucirc)),k("circle (offset)",X.lin(s[4],X["2Pi"]+s[4],ma).map(s[2].ucirc)),k("circle + circle (offset)",s[5].map(s[6]))]}}),wa=new fa({props:{data:[k("square",s[5].map(s[2].usq)),k("square (offset)",X.lin(s[4],X["2Pi"]+s[4],ma).map(s[2].usq)),k("square + square (offset)",s[5].map(s[7]))]}}),ra=new Ct({props:{$$slots:{r:[xs],l:[ys]},$$scope:{ctx:s}}}),oa=new Ct({props:{$$slots:{r:[Es],l:[bs]},$$scope:{ctx:s}}}),ca=new Ct({props:{$$slots:{r:[Is],l:[ks]},$$scope:{ctx:s}}}),la=new Ct({props:{$$slots:{r:[Ss],l:[_s]},$$scope:{ctx:s}}}),va=new fa({props:{data:[k("square",X.lin(0,X["2Pi"],2*ma).map(s[2].usq)),k("square ^ 0.5",X.lin(0,X["2Pi"],2*ma).map(s[20]))]}}),ha=new ds({props:{href:"https://www.youtube.com/watch?v=iLkOBkWUDkM",$$slots:{default:[As]},$$scope:{ctx:s}}}),{c(){M(a.$$.fragment),n=w(`

I had some time one evening, so I decided to play around with the idea of doing
algebra but with shapes. What does it mean to add two shapes? Some results are
intuitive; a square of side 5 + a square of side 10 should be a square of side
15. But what happens when we add a square and a circle? Or raise a circle to the
power of a circle.

`),e=x("h4"),i=w("Complex Numbers"),h=w(`
We start by using complex numbers as our base. It should be trivial to see we'll
run into issues very fast if we try to manipulate equations directly. We can ease
our workload by working with complex numbers, with which, each point in 2D space,
is still just a number. And once something is a number it can be added, multiplied,
and divided.

`),r=H("svg"),u=H("path"),l=H("path"),m=H("text"),d=w("Re(z)"),f=H("text"),E=w("Im(z)"),b=H("path"),O=H("text"),F=w("|z|"),_=H("text"),I=w(`arg(z)
  `),S=H("path"),P=H("text"),sa=w("a"),B=H("text"),Lt=w("b"),aa=H("text"),Bt=w("z = a + b i"),at=A(),Q=x("p"),Ht=w("Each number is of the form "),tt=new N(!1),et=w(", where "),st=new N(!1),rt=w(`. Then just use a bunch of points for
  each shape. For example, a a circle can just be a 100 complex points`),nt=A(),M(da.$$.fragment),it=A(),xa=x("p"),Rt=w(`So, if a shape is just a collection of points, and each point is just a
  complex number, then we can add, subtract, and multiply points.`),ot=A(),qa=x("h4"),Yt=w("Adding and Multiplying Shapes"),ct=A(),ba=x("p"),Ft=w(`We can add shapes by adding the points that make them up. So a circle of
  radius 1 + another and a square + another square have some obvious results.`),lt=A(),ta=x("div"),M($a.$$.fragment),Gt=A(),M(wa.$$.fragment),ht=A(),Ea=x("p"),Xt=w(`Naturally a two unit circles added should give a circle of radius 2. It may be
  one's primary instinct to try to add their areas first. But that is not how
  we're defining addition here. Addition can be an abstract operation defined
  however we want to for fun.`),pt=A(),J=x("p"),Jt=w("Since "),ut=new N(!1),ft=w(", "),mt=new N(!1),dt=w(", with an offset parameter "),$t=new N(!1),wt=w(`, since we can choose which angle
  we want the two squares to meet at (this will be important later). And, a
  square added to a square should give a square of side 2 (the edges look choppy
  because computers are finite precision).`),gt=A(),M(ra.$$.fragment),vt=A(),ea=x("div"),ga=x("div"),Wa=x("p"),Kt=w(`We get a twisting squircle. Sweep the offset from 0 to 8 and watch the
      squircle twist around 45°. This can be imagined as a ring that twists
      around the cylinder as it goes down in 3d. just like this building. With
      the additional change of also getting slimmer in its waist as it goes.`),Qt=A(),Ma=x("p"),Zt=w(`So if we can add shapes, we can also multiply them. So a circle times a
      circle`),ae=A(),na=x("a"),ia=x("img"),yt=A(),M(oa.$$.fragment),xt=A(),K=x("p"),te=w("The parametrised form of a square is "),qt=new N(!1),bt=w(", and that of a circle is "),Et=new N(!1),kt=w(`. So, the
  product of a circle and a square is
  `),It=new N(!1),_t=w(". I have no idea what is going on here or why it's periodicity is 10π."),St=A(),ka=x("p"),ee=w(`Obviously, here, there is one catch. What output we get depends HEAVILY upon
  what parametrisation we select for our shape. Since all parametrisations only
  promise that they can complete the shape, they all have different ways of
  going about it.`),At=w(`

I have chosen a continuous parametrisation, of the square, with `),Va=new N(!1),Da=w(", to then give "),Ca=new N(!1),Ua=w(`, whereas people may often go for a piecewise linear parametrisation of the
square, which will trace the shape out differently, leading to a different
outcome.

`),Ia=x("h4"),se=w("The Power of a Circle"),Tt=w(`
We can also raise a circle to the power of a circle, or anything to a circle's power,
or a circle to anything's power.

`),M(ca.$$.fragment),Pt=w(`

We're looking at the yellow lines as they vary, the blue and red is just a
reference to our original circles. Even taking `),La=new N(!1),Ba=w(`, it seems
when a circle is raised to a circle, we still lose out on normalisation. The 2nd
term `),Ha=new N(!1),Ra=w(` is a damping term, and the first
term `),Ya=new N(!1),Fa=w(` is a rotation term. Now,
what happens if I take a square and raise it to a circle

`),M(la.$$.fragment),zt=A(),_a=x("h4"),re=w("Mixing numbers and shapes"),jt=w(`
Now that we can add and multiply shapes, we can also mix them with numbers. So we
can take the square root of a square

`),M(va.$$.fragment),Ot=w(`

Now that is certainly cool. The square root of a square is a half-octagon with
curved edges. With some effort, it is, in fact, possible to raise a matrix to
the power of a matrix or even a matrix to a shape. There is no reason we should
limit ourselves to the conventional patterns that happen to be useful to
physicists and engineers.

`),Sa=x("h4"),ne=w("References"),Nt=A(),Aa=x("ul"),Ga=x("li"),M(ha.$$.fragment),this.h()},l(t){V(a.$$.fragment,t),n=g(t,`

I had some time one evening, so I decided to play around with the idea of doing
algebra but with shapes. What does it mean to add two shapes? Some results are
intuitive; a square of side 5 + a square of side 10 should be a square of side
15. But what happens when we add a square and a circle? Or raise a circle to the
power of a circle.

`),e=q(t,"H4",{});var $=y(e);i=g($,"Complex Numbers"),$.forEach(c),h=g(t,`
We start by using complex numbers as our base. It should be trivial to see we'll
run into issues very fast if we try to manipulate equations directly. We can ease
our workload by working with complex numbers, with which, each point in 2D space,
is still just a number. And once something is a number it can be added, multiplied,
and divided.

`),r=R(t,"svg",{class:!0,"font-family":!0,"font-weight":!0,"font-size":!0,width:!0,height:!0,viewBox:!0,stroke:!0});var U=y(r);u=R(U,"path",{fill:!0,d:!0,transform:!0}),y(u).forEach(c),l=R(U,"path",{fill:!0,d:!0,transform:!0}),y(l).forEach(c),m=R(U,"text",{x:!0,y:!0,transform:!0,class:!0});var Xa=y(m);d=g(Xa,"Re(z)"),Xa.forEach(c),f=R(U,"text",{x:!0,y:!0,transform:!0,class:!0});var Ja=y(f);E=g(Ja,"Im(z)"),Ja.forEach(c),b=R(U,"path",{fill:!0,d:!0}),y(b).forEach(c),O=R(U,"text",{x:!0,y:!0,transform:!0,class:!0});var Ka=y(O);F=g(Ka,"|z|"),Ka.forEach(c),_=R(U,"text",{x:!0,y:!0,"font-size":!0,transform:!0,class:!0});var Qa=y(_);I=g(Qa,`arg(z)
  `),Qa.forEach(c),S=R(U,"path",{fill:!0,"stroke-dasharray":!0,d:!0}),y(S).forEach(c),P=R(U,"text",{x:!0,y:!0,transform:!0,class:!0});var pe=y(P);sa=g(pe,"a"),pe.forEach(c),B=R(U,"text",{x:!0,y:!0,transform:!0,class:!0});var ue=y(B);Lt=g(ue,"b"),ue.forEach(c),aa=R(U,"text",{x:!0,y:!0,transform:!0,class:!0});var fe=y(aa);Bt=g(fe,"z = a + b i"),fe.forEach(c),U.forEach(c),at=T(t),Q=q(t,"P",{});var Ta=y(Q);Ht=g(Ta,"Each number is of the form "),tt=W(Ta,!1),et=g(Ta,", where "),st=W(Ta,!1),rt=g(Ta,`. Then just use a bunch of points for
  each shape. For example, a a circle can just be a 100 complex points`),Ta.forEach(c),nt=T(t),V(da.$$.fragment,t),it=T(t),xa=q(t,"P",{});var me=y(xa);Rt=g(me,`So, if a shape is just a collection of points, and each point is just a
  complex number, then we can add, subtract, and multiply points.`),me.forEach(c),ot=T(t),qa=q(t,"H4",{});var de=y(qa);Yt=g(de,"Adding and Multiplying Shapes"),de.forEach(c),ct=T(t),ba=q(t,"P",{});var $e=y(ba);Ft=g($e,`We can add shapes by adding the points that make them up. So a circle of
  radius 1 + another and a square + another square have some obvious results.`),$e.forEach(c),lt=T(t),ta=q(t,"DIV",{class:!0});var Mt=y(ta);V($a.$$.fragment,Mt),Gt=T(Mt),V(wa.$$.fragment,Mt),Mt.forEach(c),ht=T(t),Ea=q(t,"P",{});var we=y(Ea);Xt=g(we,`Naturally a two unit circles added should give a circle of radius 2. It may be
  one's primary instinct to try to add their areas first. But that is not how
  we're defining addition here. Addition can be an abstract operation defined
  however we want to for fun.`),we.forEach(c),pt=T(t),J=q(t,"P",{});var pa=y(J);Jt=g(pa,"Since "),ut=W(pa,!1),ft=g(pa,", "),mt=W(pa,!1),dt=g(pa,", with an offset parameter "),$t=W(pa,!1),wt=g(pa,`, since we can choose which angle
  we want the two squares to meet at (this will be important later). And, a
  square added to a square should give a square of side 2 (the edges look choppy
  because computers are finite precision).`),pa.forEach(c),gt=T(t),V(ra.$$.fragment,t),vt=T(t),ea=q(t,"DIV",{class:!0});var Vt=y(ea);ga=q(Vt,"DIV",{});var Dt=y(ga);Wa=q(Dt,"P",{});var ge=y(Wa);Kt=g(ge,`We get a twisting squircle. Sweep the offset from 0 to 8 and watch the
      squircle twist around 45°. This can be imagined as a ring that twists
      around the cylinder as it goes down in 3d. just like this building. With
      the additional change of also getting slimmer in its waist as it goes.`),ge.forEach(c),Qt=T(Dt),Ma=q(Dt,"P",{});var ve=y(Ma);Zt=g(ve,`So if we can add shapes, we can also multiply them. So a circle times a
      circle`),ve.forEach(c),Dt.forEach(c),ae=T(Vt),na=q(Vt,"A",{href:!0,target:!0,rel:!0});var ye=y(na);ia=q(ye,"IMG",{src:!0,alt:!0,style:!0}),ye.forEach(c),Vt.forEach(c),yt=T(t),V(oa.$$.fragment,t),xt=T(t),K=q(t,"P",{});var ua=y(K);te=g(ua,"The parametrised form of a square is "),qt=W(ua,!1),bt=g(ua,", and that of a circle is "),Et=W(ua,!1),kt=g(ua,`. So, the
  product of a circle and a square is
  `),It=W(ua,!1),_t=g(ua,". I have no idea what is going on here or why it's periodicity is 10π."),ua.forEach(c),St=T(t),ka=q(t,"P",{});var xe=y(ka);ee=g(xe,`Obviously, here, there is one catch. What output we get depends HEAVILY upon
  what parametrisation we select for our shape. Since all parametrisations only
  promise that they can complete the shape, they all have different ways of
  going about it.`),xe.forEach(c),At=g(t,`

I have chosen a continuous parametrisation, of the square, with `),Va=W(t,!1),Da=g(t,", to then give "),Ca=W(t,!1),Ua=g(t,`, whereas people may often go for a piecewise linear parametrisation of the
square, which will trace the shape out differently, leading to a different
outcome.

`),Ia=q(t,"H4",{});var qe=y(Ia);se=g(qe,"The Power of a Circle"),qe.forEach(c),Tt=g(t,`
We can also raise a circle to the power of a circle, or anything to a circle's power,
or a circle to anything's power.

`),V(ca.$$.fragment,t),Pt=g(t,`

We're looking at the yellow lines as they vary, the blue and red is just a
reference to our original circles. Even taking `),La=W(t,!1),Ba=g(t,`, it seems
when a circle is raised to a circle, we still lose out on normalisation. The 2nd
term `),Ha=W(t,!1),Ra=g(t,` is a damping term, and the first
term `),Ya=W(t,!1),Fa=g(t,` is a rotation term. Now,
what happens if I take a square and raise it to a circle

`),V(la.$$.fragment,t),zt=T(t),_a=q(t,"H4",{});var be=y(_a);re=g(be,"Mixing numbers and shapes"),be.forEach(c),jt=g(t,`
Now that we can add and multiply shapes, we can also mix them with numbers. So we
can take the square root of a square

`),V(va.$$.fragment,t),Ot=g(t,`

Now that is certainly cool. The square root of a square is a half-octagon with
curved edges. With some effort, it is, in fact, possible to raise a matrix to
the power of a matrix or even a matrix to a shape. There is no reason we should
limit ourselves to the conventional patterns that happen to be useful to
physicists and engineers.

`),Sa=q(t,"H4",{});var Ee=y(Sa);ne=g(Ee,"References"),Ee.forEach(c),Nt=T(t),Aa=q(t,"UL",{});var ke=y(Aa);Ga=q(ke,"LI",{});var Ie=y(Ga);V(ha.$$.fragment,Ie),Ie.forEach(c),ke.forEach(c),this.h()},h(){o(u,"fill","none"),o(u,"d","m38.8 27.2-.5 85"),o(u,"transform","translate(-18 1.8)"),o(l,"fill","none"),o(l,"d","M164.6 111.8H37.8"),o(l,"transform","translate(-18 1.8)"),o(m,"x","153.4"),o(m,"y","124.1"),o(m,"transform","translate(-18 1.8)"),o(m,"class","svelte-qea4xm"),o(f,"x","23.1"),o(f,"y","22.3"),o(f,"transform","translate(-18 1.8)"),o(f,"class","svelte-qea4xm"),o(b,"fill","none"),o(b,"d","M21 112.7 73 77"),o(O,"x","52.3"),o(O,"y","92.9"),o(O,"transform","translate(-18 1.8)"),o(O,"class","svelte-qea4xm"),o(_,"x","53.2"),o(_,"y","108.3"),o(_,"font-size","8.5"),o(_,"transform","translate(-18 1.8)"),o(_,"class","svelte-qea4xm"),o(S,"fill","none"),o(S,"stroke-dasharray","3 3"),o(S,"d","M73.4 76.8v36.6m.5-36.5h-53"),o(P,"x","62.7"),o(P,"y","122"),o(P,"transform","translate(-18 2)"),o(P,"class","svelte-qea4xm"),o(B,"x","27.9"),o(B,"y","92.8"),o(B,"transform","translate(-18 2)"),o(B,"class","svelte-qea4xm"),o(aa,"x","95.7"),o(aa,"y","77"),o(aa,"transform","translate(-18 2)"),o(aa,"class","svelte-qea4xm"),o(r,"class","mx-a d-b tc"),o(r,"font-family","sans-serif"),o(r,"font-weight","300"),o(r,"font-size","10"),o(r,"width","350"),o(r,"height","350"),o(r,"viewBox","0 -12 160 160"),o(r,"stroke","#000"),tt.a=et,st.a=rt,o(ta,"class","f j-bw"),ut.a=ft,mt.a=dt,$t.a=wt,es(ia.src,We="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Cayan_Tower.jpg/330px-Cayan_Tower.jpg")||o(ia,"src","https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Cayan_Tower.jpg/330px-Cayan_Tower.jpg"),o(ia,"alt","Cayan Tower China"),Z(ia,"max-height","min(100vh, 300px)"),Z(ia,"max-width","100vw"),o(na,"href","https://en.wikipedia.org/wiki/Cayan_Tower"),o(na,"target","_blank"),o(na,"rel","noreferrer"),o(ea,"class","f j-ar"),qt.a=bt,Et.a=kt,It.a=_t,Va.a=Da,Ca.a=Ua,La.a=Ba,Ha.a=Ra,Ya.a=Fa},m(t,$){D(a,t,$),v(t,n,$),v(t,e,$),p(e,i),v(t,h,$),v(t,r,$),p(r,u),p(r,l),p(r,m),p(m,d),p(r,f),p(f,E),p(r,b),p(r,O),p(O,F),p(r,_),p(_,I),p(r,S),p(r,P),p(P,sa),p(r,B),p(B,Lt),p(r,aa),p(aa,Bt),v(t,at,$),v(t,Q,$),p(Q,Ht),tt.m(Me,Q),p(Q,et),st.m(Ve,Q),p(Q,rt),v(t,nt,$),D(da,t,$),v(t,it,$),v(t,xa,$),p(xa,Rt),v(t,ot,$),v(t,qa,$),p(qa,Yt),v(t,ct,$),v(t,ba,$),p(ba,Ft),v(t,lt,$),v(t,ta,$),D($a,ta,null),p(ta,Gt),D(wa,ta,null),v(t,ht,$),v(t,Ea,$),p(Ea,Xt),v(t,pt,$),v(t,J,$),p(J,Jt),ut.m(De,J),p(J,ft),mt.m(Ce,J),p(J,dt),$t.m(Ue,J),p(J,wt),v(t,gt,$),D(ra,t,$),v(t,vt,$),v(t,ea,$),p(ea,ga),p(ga,Wa),p(Wa,Kt),p(ga,Qt),p(ga,Ma),p(Ma,Zt),p(ea,ae),p(ea,na),p(na,ia),v(t,yt,$),D(oa,t,$),v(t,xt,$),v(t,K,$),p(K,te),qt.m(Le,K),p(K,bt),Et.m(Be,K),p(K,kt),It.m(He,K),p(K,_t),v(t,St,$),v(t,ka,$),p(ka,ee),v(t,At,$),Va.m(Re,t,$),v(t,Da,$),Ca.m(Ye,t,$),v(t,Ua,$),v(t,Ia,$),p(Ia,se),v(t,Tt,$),D(ca,t,$),v(t,Pt,$),La.m(Fe,t,$),v(t,Ba,$),Ha.m(Ge,t,$),v(t,Ra,$),Ya.m(Xe,t,$),v(t,Fa,$),D(la,t,$),v(t,zt,$),v(t,_a,$),p(_a,re),v(t,jt,$),D(va,t,$),v(t,Ot,$),v(t,Sa,$),p(Sa,ne),v(t,Nt,$),v(t,Aa,$),p(Aa,Ga),D(ha,Ga,null),Wt=!0},p(t,[$]){const U={};4194305&$&&(U.$$scope={dirty:$,ctx:t}),ra.$set(U);const Xa={};4194305&$&&(Xa.$$scope={dirty:$,ctx:t}),oa.$set(Xa);const Ja={};4194305&$&&(Ja.$$scope={dirty:$,ctx:t}),ca.$set(Ja);const Ka={};4194307&$&&(Ka.$$scope={dirty:$,ctx:t}),la.$set(Ka);const Qa={};4194304&$&&(Qa.$$scope={dirty:$,ctx:t}),ha.$set(Qa)},i(t){Wt||(z(a.$$.fragment,t),z(da.$$.fragment,t),z($a.$$.fragment,t),z(wa.$$.fragment,t),z(ra.$$.fragment,t),z(oa.$$.fragment,t),z(ca.$$.fragment,t),z(la.$$.fragment,t),z(va.$$.fragment,t),z(ha.$$.fragment,t),Wt=!0)},o(t){j(a.$$.fragment,t),j(da.$$.fragment,t),j($a.$$.fragment,t),j(wa.$$.fragment,t),j(ra.$$.fragment,t),j(oa.$$.fragment,t),j(ca.$$.fragment,t),j(la.$$.fragment,t),j(va.$$.fragment,t),j(ha.$$.fragment,t),Wt=!1},d(t){C(a,t),t&&c(n),t&&c(e),t&&c(h),t&&c(r),t&&c(at),t&&c(Q),t&&c(nt),C(da,t),t&&c(it),t&&c(xa),t&&c(ot),t&&c(qa),t&&c(ct),t&&c(ba),t&&c(lt),t&&c(ta),C($a),C(wa),t&&c(ht),t&&c(Ea),t&&c(pt),t&&c(J),t&&c(gt),C(ra,t),t&&c(vt),t&&c(ea),t&&c(yt),C(oa,t),t&&c(xt),t&&c(K),t&&c(St),t&&c(ka),t&&c(At),t&&Va.d(),t&&c(Da),t&&Ca.d(),t&&c(Ua),t&&c(Ia),t&&c(Tt),C(ca,t),t&&c(Pt),t&&La.d(),t&&c(Ba),t&&Ha.d(),t&&c(Ra),t&&Ya.d(),t&&c(Fa),C(la,t),t&&c(zt),t&&c(_a),t&&c(jt),C(va,t),t&&c(Ot),t&&c(Sa),t&&c(Nt),t&&c(Aa),C(ha)}}}let ma=50;function Ps(s,a,n){const{Map:e,Rng:i,Cplx:h}=X;let r=ma/50*.2,u=i.circ(ma),l=[0,0],m=[!0,!0];return[l,m,e,h,r,u,d=>h.sum(e.ucirc(d),e.ucirc(d+r)),d=>h.sum(e.usq(d),e.usq(d+r)),function(){l[0]=ya(this.value),n(0,l)},d=>h.sum(e.ucirc(d),e.usq(d+r*l[0])),function(){l[0]=ya(this.value),n(0,l)},function(){l[0]=ya(this.value),n(0,l)},d=>h.prod(e.ucirc(d),e.usq(d+r*l[0])),function(){l[0]=ya(this.value),n(0,l)},function(){l[1]=ya(this.value),n(0,l)},d=>h.pow(e.ucirc(d+r*l[0]),e.ucirc(d+r*l[1])),function(){m[0]=this.checked,n(1,m)},function(){l[0]=ya(this.value),n(0,l)},function(){l[1]=ya(this.value),n(0,l)},d=>h.pow(e.usq(d+r*l[0]),e.ucirc(d+r*l[1])),d=>h.pow(e.usq(d),[.5,0])]}class Os extends ja{constructor(a){super(),Oa(this,a,Ps,Ts,Na,{})}}export{Os as default};
