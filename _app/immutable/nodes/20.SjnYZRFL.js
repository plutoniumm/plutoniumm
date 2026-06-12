import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{p as wt,ap as A,aq as It,m as H,g as e,a as yt,s as t,u as o,ar as w,a7 as y,c as l,r as s,n as U,f as xe,M as he,d as ma}from"../chunks/B2m1v2r5.js";import{a as P,f as ye,c as ta,e as me}from"../chunks/jMVSJ8sL.js";import{h as a}from"../chunks/Dinoy2hm.js";import{i as kt}from"../chunks/DfRH6yYd.js";import{D as va,d as Ue,a as d,_ as W}from"../chunks/DiDFwN8_.js";import{s as M}from"../chunks/U_RTbSeY.js";import{i as Te}from"../chunks/DazIb_FU.js";import{e as Ce,i as De}from"../chunks/yeFf2kLj.js";import{s as n,r as Ee}from"../chunks/i3WTgkrM.js";import{s as fa}from"../chunks/D3gB4U0r.js";import{b as Re}from"../chunks/DrOeZab7.js";import{p as Le}from"../chunks/CLlFx2vb.js";import{M as ua,R as pa}from"../chunks/DUMmpYWJ.js";import{A as Lt}from"../chunks/Do23EQ4p.js";const we=(h,u)=>[h,u||0],bt=(h,u)=>[h[0]+u[0],h[1]+u[1]],xt=(h,u)=>[h[0]*u[0]-h[1]*u[1],h[0]*u[1]+h[1]*u[0]],Ye=h=>Math.hypot(h[0],h[1]),Ze=(h,u)=>Array.from({length:h},()=>Array.from({length:u},()=>we(0))),_a=h=>{const u=Ze(h,h);for(let i=0;i<h;i++)u[i][i]=we(1);return u};function Ot(h){const u=[{name:"I",M:_a(h),norm:h}];for(let i=0;i<h;i++)for(let c=i+1;c<h;c++){const v=Ze(h,h);v[i][c]=we(1),v[c][i]=we(1),u.push({name:"S"+i+c,M:v,norm:2});const _=Ze(h,h);_[i][c]=we(0,-1),_[c][i]=we(0,1),u.push({name:"A"+i+c,M:_,norm:2})}for(let i=1;i<h;i++){const c=Ze(h,h),v=Math.sqrt(2/(i*(i+1)));for(let _=0;_<i;_++)c[_][_]=we(v);c[i][i]=we(-i*v),u.push({name:"D"+i,M:c,norm:2})}return u}function Et(h,u){const i=h.length;let c=we(0);for(let v=0;v<i;v++)for(let _=0;_<i;_++)c=bt(c,xt(h[v][_],u[_][v]));return c}function Rt(h,u){const i=Ze(h,h);for(let c=0;c<h;c++)i[(c+u)%h][c]=we(1);return i}function Yt(h,u){const i=Ze(h,h);return i[u][u]=we(1),i}function Jt(h,u){const i=h.length,c=u.length,v=Ze(i*c,i*c);for(let _=0;_<i;_++)for(let m=0;m<i;m++)for(let b=0;b<c;b++)for(let f=0;f<c;f++)v[_*c+b][m*c+f]=xt(h[_][m],u[b][f]);return v}function aa(h,u,i){const c=Ot(h),v=Ot(u),_=Array.from({length:c.length},()=>Array.from({length:v.length},()=>we(0)));for(let f=0;f<h;f++){const p=Yt(h,f),X=Rt(u,f%u),S=c.map(k=>{const x=Et(p,k.M);return[x[0]/k.norm,x[1]/k.norm]}),C=v.map(k=>{const x=Et(X,k.M);return[x[0]/k.norm,x[1]/k.norm]});for(let k=0;k<c.length;k++)if(!(Ye(S[k])<1e-13))for(let x=0;x<v.length;x++)_[k][x]=bt(_[k][x],xt(S[k],C[x]))}const m=[];for(let f=0;f<c.length;f++)for(let p=0;p<v.length;p++)Ye(_[f][p])>1e-12&&m.push({a:f,b:p,an:c[f].name,bn:v[p].name,c:_[f][p]});let b=null;if(i){const f=h*u,p=Ze(f,f);for(const S of m){const C=Jt(c[S.a].M,v[S.b].M);for(let k=0;k<f;k++)for(let x=0;x<f;x++)p[k][x]=bt(p[k][x],xt(S.c,C[k][x]))}const X=Ze(f,f);for(let S=0;S<h;S++){const C=Jt(Yt(h,S),Rt(u,S%u));for(let k=0;k<f;k++)for(let x=0;x<f;x++)X[k][x]=bt(X[k][x],C[k][x])}b=0;for(let S=0;S<f;S++)for(let C=0;C<f;C++)b=Math.max(b,Ye([p[S][C][0]-X[S][C][0],p[S][C][1]-X[S][C][1]]))}return{names1:c.map(f=>f.name),names2:v.map(f=>f.name),grid:_,terms:m,err:b}}const ea=["B","KB","MB","GB","TB","PB","EB"];function be(h){let u=0;for(;h>=1024&&u<ea.length-1;)h/=1024,u++;return(h>=100?Math.round(h):Math.round(h*10)/10)+" "+ea[u]}var ga=me('<text text-anchor="start" fill="#555"> </text>'),ba=me('<text text-anchor="end" fill="#555"> </text>'),xa=me("<!><!>",1),wa=me('<rect stroke="#ddd" stroke-width="0.5"></rect>'),ya=ye("<sub> </sub>"),ka=ye("<sub> </sub>"),qa=ye("<span> <!> <!></span>"),Ma=ye('<div class="f fw j-ct g5 mt10"></div>'),Ta=ye(`<div class="hint mt5 svelte-qoev0h">at d₁ = d₂ = 2 the basis is the Pauli set (S₀₁ = X, A₀₁ = Y, D₁ =
            Z), and the four lit cells read exactly ½(I⊗I + Z⊗I + I⊗X − Z⊗X)</div>`),Ba=ye(`<div class="dx tc mx-a my20 p10 rx10 svelte-qoev0h"><div class="f al-ct j-ct fw g10 mb10"><label>control dim d₁ = <b> </b> <input type="range" min="2" max="5" step="1" class="svelte-qoev0h"/></label> <label>target dim d₂ = <b> </b> <input type="range" min="2" max="5" step="1" class="svelte-qoev0h"/></label></div> <svg font-family="monospace" font-size="10" class="svelte-qoev0h"><!><!></svg> <div class="stat mt5 svelte-qoev0h"><b class="ok svelte-qoev0h"> </b> <b> </b> · rebuild error <b class="ok svelte-qoev0h"> </b></div> <!> <!> <div class="note mt10 svelte-qoev0h">every cell is one possible pair Aᵢ⊗Bᵢ: rows run over the control-side
        basis, columns over the target-side basis. teal = real weight, orange =
        imaginary weight, deeper = larger |cᵢ|. only the lit cells turn into
        circuit runs; the white ones are free.</div></div>`);function Xa(h,u){wt(u,!1);const i=y(),c=y(),v=y(),_=y(),m=y(),b=y(),f=y(),p=y(),X=y(),S=y(),C=y(),k=y(),x=y();let re=y(2),z=y(3);const ve=(g,j,N)=>{const B=Math.trunc(Number(g));return Number.isFinite(B)?Math.min(N,Math.max(j,B)):j},pe=(g,j)=>{const N=Ye(g);if(N<1e-12||j===0)return"#fff";const B=(.18+.82*N/j).toFixed(2);return Math.abs(g[1])>Math.abs(g[0])?"rgba(199, 82, 0, "+B+")":"rgba(0, 153, 119, "+B+")"},le=g=>{const j=Math.round(g[0]*100)/100,N=Math.round(g[1]*100)/100;return N===0?(j<0?"−":"+")+Math.abs(j):(N<0?"−":"+")+Math.abs(N)+"i"},V=g=>g.slice(0,1),de=g=>g.slice(1);A(()=>e(re),()=>{w(i,ve(e(re),2,5))}),A(()=>e(z),()=>{w(c,ve(e(z),2,5))}),A(()=>(e(i),e(c)),()=>{w(v,aa(e(i),e(c),!0))}),A(()=>e(v),()=>{w(_,e(v).names1.length)}),A(()=>e(v),()=>{w(m,e(v).names2.length)}),A(()=>(e(v),Ye),()=>{w(b,e(v).terms.reduce((g,j)=>Math.max(g,Ye(j.c)),0))}),A(()=>(e(i),e(c)),()=>{w(f,Math.min(e(i),e(c)))}),A(()=>(e(_),e(m)),()=>{w(p,e(_)>9||e(m)>9?13:24)}),A(()=>(e(_),e(m)),()=>{w(X,e(_)<=9&&e(m)<=9)}),A(()=>e(X),()=>{w(S,e(X)?44:18)}),A(()=>e(X),()=>{w(C,e(X)?40:14)}),A(()=>(e(S),e(m),e(p)),()=>{w(k,e(S)+e(m)*e(p)+14)}),A(()=>(e(C),e(_),e(p)),()=>{w(x,e(C)+e(_)*e(p)+8)}),It(),kt();var Y=Ba(),Be=l(Y),Xe=l(Be),_e=t(l(Xe)),Se=l(_e,!0);s(_e);var I=t(_e,2);Ee(I),s(Xe);var r=t(Xe,2),Z=t(l(r)),K=l(Z,!0);s(Z);var F=t(Z,2);Ee(F),s(r),s(Be);var L=t(Be,2),O=l(L);{var G=g=>{var j=xa(),N=xe(j);Ce(N,1,()=>(e(v),o(()=>e(v).names2)),De,(J,ee,oe)=>{var $=ga(),te=l($,!0);s($),H(()=>{n($,"x",e(S)+oe*e(p)+e(p)/2),n($,"y",e(C)-7),n($,"transform",`rotate(-55 ${e(S)+oe*e(p)+e(p)/2} ${e(C)-7})`),M(te,e(ee))}),P(J,$)});var B=t(N);Ce(B,1,()=>(e(v),o(()=>e(v).names1)),De,(J,ee,oe)=>{var $=ba(),te=l($,!0);s($),H(()=>{n($,"x",e(S)-5),n($,"y",e(C)+oe*e(p)+e(p)/2+3),M(te,e(ee))}),P(J,$)}),P(g,j)};Te(O,g=>{e(X)&&g(G)})}var D=t(O);Ce(D,1,()=>(e(v),o(()=>e(v).grid)),De,(g,j,N)=>{var B=ta(),J=xe(B);Ce(J,1,()=>e(j),De,(ee,oe,$)=>{var te=wa();H(Pe=>{n(te,"x",e(S)+$*e(p)),n(te,"y",e(C)+N*e(p)),n(te,"width",e(p)-1),n(te,"height",e(p)-1),n(te,"fill",Pe)},[()=>(e(oe),e(b),o(()=>pe(e(oe),e(b))))]),P(ee,te)}),P(g,B)}),s(L);var Q=t(L,2),E=l(Q),ce=l(E,!0);s(E);var ie=t(E),ue=t(ie),ge=l(ue,!0);s(ue);var $e=t(ue,2),Ie=l($e,!0);s($e),s(Q);var ke=t(Q,2);{var ze=g=>{var j=Ma();Ce(j,5,()=>(e(v),o(()=>e(v).terms)),De,(N,B)=>{var J=qa();let ee;var oe=l(J),$=t(oe);{var te=ne=>{var fe=ya(),qe=l(fe,!0);s(fe),H(Me=>M(qe,Me),[()=>(e(B),o(()=>de(e(B).an)))]),P(ne,fe)};Te($,ne=>{e(B),o(()=>de(e(B).an))&&ne(te)})}var Pe=t($),Fe=t(Pe);{var We=ne=>{var fe=ka(),qe=l(fe,!0);s(fe),H(Me=>M(qe,Me),[()=>(e(B),o(()=>de(e(B).bn)))]),P(ne,fe)};Te(Fe,ne=>{e(B),o(()=>de(e(B).bn))&&ne(We)})}s(J),H((ne,fe,qe,Me)=>{ee=fa(J,1,"chip rx5 svelte-qoev0h",null,ee,ne),M(oe,`${fe??""}
                    ${qe??""}`),M(Pe,`⊗${Me??""}`)},[()=>({imag:Math.abs(e(B).c[1])>Math.abs(e(B).c[0])}),()=>(e(B),o(()=>le(e(B).c))),()=>(e(B),o(()=>V(e(B).an))),()=>(e(B),o(()=>V(e(B).bn)))]),P(N,J)}),s(j),P(g,j)};Te(ke,g=>{e(v),o(()=>e(v).terms.length<=14)&&g(ze)})}var je=t(ke,2);{var Ae=g=>{var j=Ta();P(g,j)};Te(je,g=>{e(i)===2&&e(c)===2&&g(Ae)})}U(2),s(Y),H(g=>{M(Se,e(i)),M(K,e(c)),n(L,"width",e(k)),n(L,"height",e(x)),M(ce,(e(v),o(()=>e(v).terms.length))),M(ie,` non-zero terms out of ${e(_)*e(m)}
        possible pairs · Schmidt route needs `),M(ge,e(f)),M(Ie,g)},[()=>(e(v),o(()=>e(v).err.toExponential(1)))]),Re(I,()=>e(re),g=>w(re,g)),Re(F,()=>e(z),g=>w(z,g)),P(h,Y),yt()}var Sa=me('<line y1="14" y2="98" stroke="#eee"></line><text y="110" text-anchor="middle" fill="#999"> </text>',1),Ia=me('<text y="37" text-anchor="end" fill="#fff"> </text>'),Aa=me('<text y="37" fill="#555"> </text>'),ja=me('<text y="79" text-anchor="end" fill="#fff"> </text>'),Pa=me('<text y="79" fill="#555"> </text>'),Ca=ye('<div class="pg mx-a my20 p10 rx10 svelte-5fdyfn"><div class="f al-ct j-ct fw g10 mb10"><label class="svelte-5fdyfn">chip A: <b> </b> qudits <input type="range" min="1" max="8" step="1" class="svelte-5fdyfn"/></label> <label class="svelte-5fdyfn">each of dim <b> </b> <input type="range" min="2" max="9" step="1" class="svelte-5fdyfn"/></label></div> <div class="f al-ct j-ct fw g10 mb10"><label class="svelte-5fdyfn">chip B: <b> </b> qudits <input type="range" min="1" max="8" step="1" class="svelte-5fdyfn"/></label> <label class="svelte-5fdyfn">each of dim <b> </b> <input type="range" min="2" max="9" step="1" class="svelte-5fdyfn"/></label></div> <div class="tc"><svg width="470" height="126" font-family="monospace" font-size="10" class="svelte-5fdyfn"><!><text y="37" text-anchor="end" fill="#555">uncut</text><rect y="22" height="24" fill="#c75200"></rect><!><text y="79" text-anchor="end" fill="#555">cut</text><rect y="64" height="24" fill="#097"></rect><!></svg> <div class="cap svelte-5fdyfn">state-vector memory, logarithmic scale (ticks ≈ decades)</div></div> <div class="form tc my10 svelte-5fdyfn"><div class="my2"> <sup> </sup> <sup> </sup> × 8 B = <b> </b></div> <div class="my2"> <sup> </sup> <sup> </sup>) × 8 B = <b> </b></div> <div class="my2">memory factor <b class="ok svelte-5fdyfn"> </b></div></div></div>');function Da(h,u){wt(u,!1);const i=y(),c=y(),v=y(),_=y(),m=y(),b=y(),f=y(),p=y(),X=y(),S=y(),C=y(),k=y();let x=y(8),re=y(8),z=y(4),ve=y(4);const pe=(q,T,ae)=>{const R=Math.trunc(Number(q));return Number.isFinite(R)?Math.min(ae,Math.max(T,R)):T},le=17,V=86,de=340,Y=q=>Math.max(3,Math.log10(q)/le*de),Be=q=>q>=10?Math.round(q).toLocaleString("en-US"):String(Math.round(q*10)/10),Xe=[[3,"KB"],[6,"MB"],[9,"GB"],[12,"TB"],[15,"PB"]];A(()=>e(x),()=>{w(i,pe(e(x),2,9))}),A(()=>e(re),()=>{w(c,pe(e(re),2,9))}),A(()=>e(z),()=>{w(v,pe(e(z),1,8))}),A(()=>e(ve),()=>{w(_,pe(e(ve),1,8))}),A(()=>(e(i),e(v)),()=>{w(m,Math.pow(e(i),e(v))*8)}),A(()=>(e(c),e(_)),()=>{w(b,Math.pow(e(c),e(_))*8)}),A(()=>(e(i),e(v),e(c),e(_)),()=>{w(f,Math.pow(e(i),e(v))*Math.pow(e(c),e(_))*8)}),A(()=>(e(m),e(b)),()=>{w(p,e(m)+e(b))}),A(()=>(e(f),e(p)),()=>{w(X,e(f)/e(p))}),A(()=>(e(i),e(c)),()=>{w(S,aa(e(i),e(c),!1).terms.length)}),A(()=>(e(i),e(c)),()=>{w(C,Math.min(e(i),e(c)))}),A(()=>(e(i),e(c)),()=>{w(k,e(i)*Math.pow(e(i)*e(c),2))}),It(),kt();var _e=Ca(),Se=l(_e),I=l(Se),r=t(l(I)),Z=l(r,!0);s(r);var K=t(r,2);Ee(K),s(I);var F=t(I,2),L=t(l(F)),O=l(L,!0);s(L);var G=t(L,2);Ee(G),s(F),s(Se);var D=t(Se,2),Q=l(D),E=t(l(Q)),ce=l(E,!0);s(E);var ie=t(E,2);Ee(ie),s(Q);var ue=t(Q,2),ge=t(l(ue)),$e=l(ge,!0);s(ge);var Ie=t(ge,2);Ee(Ie),s(ue),s(D);var ke=t(D,2),ze=l(ke),je=l(ze);Ce(je,1,()=>Xe,De,(q,T)=>{var ae=Sa(),R=xe(ae),se=t(R),at=l(se,!0);s(se),H(()=>{n(R,"x1",(e(T),o(()=>V+e(T)[0]/le*de))),n(R,"x2",(e(T),o(()=>V+e(T)[0]/le*de))),n(se,"x",(e(T),o(()=>V+e(T)[0]/le*de))),M(at,(e(T),o(()=>e(T)[1])))}),P(q,ae)});var Ae=t(je);n(Ae,"x",V-8);var g=t(Ae);n(g,"x",V);var j=t(g);{var N=q=>{var T=Ia(),ae=l(T,!0);s(T),H((R,se)=>{n(T,"x",R),M(ae,se)},[()=>(e(f),o(()=>V+Y(e(f))-6)),()=>(he(be),e(f),o(()=>be(e(f))))]),P(q,T)},B=q=>{var T=Aa(),ae=l(T,!0);s(T),H((R,se)=>{n(T,"x",R),M(ae,se)},[()=>(e(f),o(()=>V+Y(e(f))+6)),()=>(he(be),e(f),o(()=>be(e(f))))]),P(q,T)};Te(j,q=>{e(f),o(()=>Y(e(f))>240)?q(N):q(B,!1)})}var J=t(j);n(J,"x",V-8);var ee=t(J);n(ee,"x",V);var oe=t(ee);{var $=q=>{var T=ja(),ae=l(T,!0);s(T),H((R,se)=>{n(T,"x",R),M(ae,se)},[()=>(e(p),o(()=>V+Y(e(p))-6)),()=>(he(be),e(p),o(()=>be(e(p))))]),P(q,T)},te=q=>{var T=Pa(),ae=l(T,!0);s(T),H((R,se)=>{n(T,"x",R),M(ae,se)},[()=>(e(p),o(()=>V+Y(e(p))+6)),()=>(he(be),e(p),o(()=>be(e(p))))]),P(q,T)};Te(oe,q=>{e(p),o(()=>Y(e(p))>240)?q($):q(te,!1)})}s(ze),U(2),s(ke);var Pe=t(ke,2),Fe=l(Pe),We=l(Fe),ne=t(We),fe=l(ne,!0);s(ne);var qe=t(ne),Me=t(qe),ct=l(Me,!0);s(Me);var Ge=t(Me,2),qt=l(Ge,!0);s(Ge),s(Fe);var Ke=t(Fe,2),Je=l(Ke),Ne=t(Je),ht=l(Ne,!0);s(Ne);var mt=t(Ne),He=t(mt),vt=l(He,!0);s(He);var Ve=t(He,2),ft=l(Ve,!0);s(Ve),s(Ke);var et=t(Ke,2),tt=t(l(et)),ut=l(tt);s(tt),s(et),s(Pe),s(_e),H((q,T,ae,R,se)=>{M(Z,e(v)),M(O,e(i)),M(ce,e(_)),M($e,e(c)),n(g,"width",q),n(ee,"width",T),M(We,`uncut: ${e(i)??""}`),M(fe,e(v)),M(qe,` × ${e(c)??""}`),M(ct,e(_)),M(qt,ae),M(Je,`cut: (${e(i)??""}`),M(ht,e(v)),M(mt,` + ${e(c)??""}`),M(vt,e(_)),M(ft,R),M(ut,`×${se??""}`)},[()=>(e(f),o(()=>Y(e(f)))),()=>(e(p),o(()=>Y(e(p)))),()=>(he(be),e(f),o(()=>be(e(f)))),()=>(he(be),e(p),o(()=>be(e(p)))),()=>(e(X),o(()=>Be(e(X))))]),Re(K,()=>e(z),q=>w(z,q)),Re(G,()=>e(x),q=>w(x,q)),Re(ie,()=>e(ve),q=>w(ve,q)),Re(Ie,()=>e(re),q=>w(re,q)),P(h,_e),yt()}var Za=me('<rect fill-opacity="0.07" rx="6"></rect><text font-size="10"> </text>',1),$a=me('<text text-anchor="end" fill="#555" font-size="11"> </text>'),za=me('<line stroke="#222" stroke-width="1.4"></line><!>',1),Fa=me('<line stroke="#c75200" stroke-width="1.4" stroke-dasharray="6 5"></line><text text-anchor="end" fill="#c75200" font-size="10">cut</text>',1),Wa=me('<line stroke-width="1.8"></line><circle r="4.5"></circle><circle r="9" fill="#fff" stroke-width="1.8"></circle><line stroke-width="1.8"></line><line stroke-width="1.8"></line>',1),Ua=me('<rect width="28" height="28" fill="#fff" stroke-width="1.6" rx="4"></rect><text text-anchor="middle"> </text>',1),Ka=ye('<figcaption class="note svelte-1wsfehj"> </figcaption>'),Qa=ye('<figure class="mx-a my20 tc"><svg font-family="monospace" font-size="12" role="img" class="svelte-1wsfehj"><!><!><!><!></svg> <!></figure>');function Oe(h,u){wt(u,!1);const i=y(),c=y(),v=y(),_=y(),m=y(),b=y();let f=Le(u,"wires",24,()=>[]),p=Le(u,"gates",24,()=>[]),X=Le(u,"seam",24,()=>-1),S=Le(u,"chips",24,()=>[]),C=Le(u,"note",8,""),k=Le(u,"pad",8,0);const x=38,re=48,z=12,ve=22;A(()=>he(f()),()=>{w(i,f().some(I=>I)?30:0)}),A(()=>(he(p()),he(k())),()=>{w(c,p().reduce((I,r)=>Math.max(I,r.t),0)+1+k())}),A(()=>(e(i),e(c)),()=>{w(v,z+e(i)+e(c)*re+z)}),A(()=>he(f()),()=>{w(_,ve+(f().length-1)*x+ve)}),A(()=>{},()=>{w(m,I=>ve+I*x)}),A(()=>e(i),()=>{w(b,I=>z+e(i)+(I+.5)*re)}),It(),kt();var pe=Qa(),le=l(pe),V=l(le);Ce(V,1,S,De,(I,r)=>{var Z=Za(),K=xe(Z),F=t(K),L=l(F,!0);s(F),H((O,G)=>{n(K,"x",z+e(i)),n(K,"y",O),n(K,"width",e(c)*re),n(K,"height",(e(r),o(()=>(e(r).to-e(r).from+1)*x-10))),n(K,"fill",(e(r),o(()=>e(r).col))),n(F,"x",z+e(i)+5),n(F,"y",G),n(F,"fill",(e(r),o(()=>e(r).col))),M(L,(e(r),o(()=>e(r).label)))},[()=>(e(m),e(r),o(()=>e(m)(e(r).from)-x/2+5)),()=>(e(m),e(r),o(()=>e(m)(e(r).from)-x/2+17))]),P(I,Z)});var de=t(V);Ce(de,1,f,De,(I,r,Z)=>{var K=za(),F=xe(K),L=t(F);{var O=G=>{var D=$a(),Q=l(D,!0);s(D),H(E=>{n(D,"x",z+e(i)-6),n(D,"y",E),M(Q,e(r))},[()=>(e(m),o(()=>e(m)(Z)+4))]),P(G,D)};Te(L,G=>{e(r)&&G(O)})}H((G,D)=>{n(F,"x1",z+e(i)),n(F,"x2",e(v)-z),n(F,"y1",G),n(F,"y2",D)},[()=>(e(m),o(()=>e(m)(Z))),()=>(e(m),o(()=>e(m)(Z)))]),P(I,K)});var Y=t(de);{var Be=I=>{var r=Fa(),Z=xe(r);n(Z,"x1",z);var K=t(Z);H((F,L,O)=>{n(Z,"x2",e(v)-z),n(Z,"y1",F),n(Z,"y2",L),n(K,"x",e(v)-z),n(K,"y",O)},[()=>(e(m),he(X()),o(()=>(e(m)(X())+e(m)(X()+1))/2)),()=>(e(m),he(X()),o(()=>(e(m)(X())+e(m)(X()+1))/2)),()=>(e(m),he(X()),o(()=>(e(m)(X())+e(m)(X()+1))/2-5))]),P(I,r)};Te(Y,I=>{he(X()),he(f()),o(()=>X()>=0&&X()<f().length-1)&&I(Be)})}var Xe=t(Y);Ce(Xe,1,p,De,(I,r)=>{var Z=ta(),K=xe(Z);{var F=O=>{var G=Wa(),D=xe(G),Q=t(D),E=t(Q),ce=t(E),ie=t(ce);H((ue,ge,$e,Ie,ke,ze,je,Ae,g,j,N,B,J,ee,oe,$)=>{n(D,"x1",ue),n(D,"x2",ge),n(D,"y1",$e),n(D,"y2",Ie),n(D,"stroke",(e(r),o(()=>e(r).col||"#222"))),n(Q,"cx",ke),n(Q,"cy",ze),n(Q,"fill",(e(r),o(()=>e(r).col||"#222"))),n(E,"cx",je),n(E,"cy",Ae),n(E,"stroke",(e(r),o(()=>e(r).col||"#222"))),n(ce,"x1",g),n(ce,"x2",j),n(ce,"y1",N),n(ce,"y2",B),n(ce,"stroke",(e(r),o(()=>e(r).col||"#222"))),n(ie,"x1",J),n(ie,"x2",ee),n(ie,"y1",oe),n(ie,"y2",$),n(ie,"stroke",(e(r),o(()=>e(r).col||"#222")))},[()=>(e(b),e(r),o(()=>e(b)(e(r).t))),()=>(e(b),e(r),o(()=>e(b)(e(r).t))),()=>(e(m),e(r),o(()=>e(m)(e(r).c))),()=>(e(m),e(r),o(()=>e(m)(e(r).x))),()=>(e(b),e(r),o(()=>e(b)(e(r).t))),()=>(e(m),e(r),o(()=>e(m)(e(r).c))),()=>(e(b),e(r),o(()=>e(b)(e(r).t))),()=>(e(m),e(r),o(()=>e(m)(e(r).x))),()=>(e(b),e(r),o(()=>e(b)(e(r).t)-6)),()=>(e(b),e(r),o(()=>e(b)(e(r).t)+6)),()=>(e(m),e(r),o(()=>e(m)(e(r).x))),()=>(e(m),e(r),o(()=>e(m)(e(r).x))),()=>(e(b),e(r),o(()=>e(b)(e(r).t))),()=>(e(b),e(r),o(()=>e(b)(e(r).t))),()=>(e(m),e(r),o(()=>e(m)(e(r).x)-6)),()=>(e(m),e(r),o(()=>e(m)(e(r).x)+6))]),P(O,G)},L=O=>{var G=Ua(),D=xe(G),Q=t(D),E=l(Q,!0);s(Q),H((ce,ie,ue,ge)=>{n(D,"x",ce),n(D,"y",ie),n(D,"stroke",(e(r),o(()=>e(r).col||"#222"))),n(Q,"x",ue),n(Q,"y",ge),n(Q,"fill",(e(r),o(()=>e(r).col||"#222"))),M(E,(e(r),o(()=>e(r).label)))},[()=>(e(b),e(r),o(()=>e(b)(e(r).t)-14)),()=>(e(m),e(r),o(()=>e(m)(e(r).w)-14)),()=>(e(b),e(r),o(()=>e(b)(e(r).t))),()=>(e(m),e(r),o(()=>e(m)(e(r).w)+4))]),P(O,G)};Te(K,O=>{e(r),o(()=>e(r).kind==="cx")?O(F):O(L,!1)})}P(I,Z)}),s(le);var _e=t(le,2);{var Se=I=>{var r=Ka(),Z=l(r,!0);s(r),H(()=>M(Z,C())),P(I,r)};Te(_e,I=>{C()&&I(Se)})}s(pe),H(()=>{n(le,"viewBox",`0 0 ${e(v)??""} ${e(_)??""}`),n(le,"width",e(v))}),P(h,pe),yt()}var Ga=ye(`<p>Three symmetric ones, one per pair of levels <!>:</p> <!> <p>Three antisymmetric ones on the same pairs:</p> <!> <p>And two diagonal ones:</p> <!> <p>That is <!> matrices; with <!> they span everything a 3×3
        operator can be. Each squares to something with trace 2, which is the normalisation
        used in the coefficient formula. Restricting to the top-left 2×2 block recovers
        the Paulis: <!>, <!>, <!>.</p>`,1),Na=ye(`<p>The one genuinely annoying part of heterogeneous cutting is index
        bookkeeping. A homogeneous register of qubits labels its states with
        binary strings, and position 7 means <!> everywhere. In a mixed
        register the "digits" of a state label run on different bases, and the simulator
        may store fragments in a different particle order than the logical circuit
        (big-endian qudits flipped into little-endian, for one). The fix is mechanical:
        for each flat index <!> of the stitched amplitude vector, peel off digits
        in mixed radix, one base per particle. With bases <!> and <!>:</p> <!> <p>giving digits <!>. A fixed permutation then reorders the
        digits from storage order to logical particle order, the digits are
        joined into a state label, and the squared magnitude of amplitude <!> is filed under that label. Dull, mechanical, and the source of essentially
        all bugs in getting TVD to actually read zero.</p>`,1),Ha=ye(`<!> <p>The largest quantum processors today carry a few hundred noisy qubits, and
    the circuits worth running keep not fitting on them. One response is to wait
    for bigger chips. The other is to saw the circuit in half, run the two
    halves separately, and glue See you in the next video.the answers back
    together with classical arithmetic via what is called <i>circuit cutting</i>.</p> <p>Most software assumes it stops at two levels, however real hardware does not
    stop at two levels, <i>even if</i> that is all we use. Trapped ions,
    superconducting transmons and photons all come with more levels than the two
    usually addressed, and using those extra levels (making <i>qudits</i> rather than qubits) packs more state into fewer particles. Here we shall work
    out how to generalise circuit cutting to higher dimensions and mixed systems.</p> <!> <h3>Qudits, and what a register costs</h3> <p>A qubit is a particle with two usable levels, written <!> and <!>,
    and its state is a pair of complex numbers saying how much of each it holds.
    A qudit of dimension <!> is the same thing with <!> levels, <!> through <!>, and <!> complex numbers. As an example, a qutrit
    is the <!> case.</p> <p>The cost of a <i>register</i> is where the trouble starts. Particles
    entangle, so a register of <!> qudits cannot be described by <!> separate small lists; it needs one complex number for every joint configuration,
    and there are <!> of those, just like qubits have <!>. Simulating
    a register means storing that whole vector. At 8 bytes per complex number
    (single-precision real and imaginary parts), the stress-test system below, 8
    particles of dimension 8, costs</p> <!> <p>which still fits in a laptop, but every added particle multiplies the bill
    by 8. Now suppose we could split the register into two halves of 4 qudits
    each and simulate them separately:</p> <!> <p>The ratio between the two is</p> <!> <p>a factor of two thousand, from one cut, and it grows exponentially with the
    size of the halves. The catch is that the halves are not independent: some
    gate in the circuit acts on a particle from each side, and that one gate is
    what entangles them. The advantage of circuit cutting is that we can trade
    off some time, for a massive save in memory.</p> <div class="m20"><hr/></div> <h3>Cutting a gate in half</h3> <p>Draw the circuit with chip A's particles on top and chip B's at the bottom.
    Every gate that lives entirely on one chip is unaffected; the problem is the
    one two-particle gate straddling the seam:</p> <!> <p>In the simplest case the straddling gate is a CX. Written next to the
    single-qubit gates it is built from:</p> <!> <p>The known starting point, due to Mitarai and Fujii, is that this 4×4 matrix
    is a weighted sum of products of 2×2 matrices:</p> <!> <p>The tensor product in the original case meant a gate on two qubits on the
    same chip. But now after cutting, it implies the two adjacent qubits are on
    different chips. The identity is easy to check by adding the matrices:</p> <!> <!> <p>Operationally: run the circuit four times. Each time, replace the CX with
    one of the four local pairs (<!> on A and <!> on B, then <!> and <!>,
    then <!> and <!>, then <!> and <!>). Record the outputs, then
    combine them with the weights <!>. The weighted sum behaves exactly as if the CX had been applied.
    Drawn as circuits:</p> <div class="f al-ct j-ct fw g5 my20 eqrow svelte-a3o1hu"><!> <span>=</span> <span>+½</span> <!> <span>+½</span> <!> <span>+½</span> <!> <span>−½</span> <!></div> <p>No qubit ever crossed the seam: in each of the four runs both gates are
    local, and the non-local dependency is now handled classically.</p> <h3>The part that generalises</h3> <p>Where does that identity come from? Unpack what a CX does, one control value
    at a time. If the control reads 0, the target gets <!>; if it reads 1,
    the target gets <!>:</p> <!> <p><!> and <!> are projectors: "keep the part of the state where the control
    is 0 (or 1), delete the rest". This form is two terms instead of four, but it
    is not runnable, because a projector is not a gate; deleting part of a state
    is not something a quantum device can do deterministically. The fix is to expand
    each projector in a basis of operators that <i>are</i> implementable. For qubits that basis is <!>, and the
    coefficient of each basis element is found by taking traces:</p> <!> <p>Substituting back:</p> <!> <p>The recipe has two steps: write the gate as a sum of (projector on the
    control) ⊗ (action on the target), then expand both factors in a local
    operator basis. Step one is not qubit-specific at all. Step two leans on the
    Pauli matrices, which only exist for <!>. We will now generalise the
    Pauli matrices to higher dimensions.</p> <div class="m20"><hr/></div> <h3>Beyond qubits</h3> <p>First, the gate itself has to mean something between mismatched particles.
    The <!>-dimensional generalisation of NOT is the shift <!>, which
    moves every level up by one and wraps the top around. For a qutrit:</p> <!> <p>The generalised CX (often called CSUM) reads the control level <!> and shifts
    the target by <!>: control at 0 does nothing, control at 1 shifts by one,
    control at 2 shifts by two, and so on. With a control of dimension <!> and
    a target of dimension <!>, the object of study is</p> <!> <p>which is the projector form from before, just with <!> terms instead of
    two, and with the two factors living in different dimensions. What replaces the
    Pauli basis?</p> <p>The generalised Gell-Mann matrices: for dimension <!> there are <!> of them, and together with the identity they form a complete orthogonal
    basis for <!> operators, with the Paulis as the <!> special case. They come in three
    families: symmetric pairs, antisymmetric pairs, and diagonals.</p> <!> <p>The expansion machinery is the same trace formula as before, applied on each
    side of the seam in its own dimension:</p> <!> <p>Worked through for the headline cut, a qubit controlling a qutrit (<!>, <!>): the control side is unchanged, <!> and <!>. On the
    target side the shift has to be expanded in Gell-Mann matrices. One
    coefficient in full, the <!> component of <!>:</p> <!> <p>Doing the other seven coefficients the same way gives</p> <!> <p>Some weights are imaginary now. That is fine: the recombination step is
    classical arithmetic and is perfectly happy with complex weights, and the
    imaginary parts cancel in mirror pairs when the gate is rebuilt, since the
    gate itself is real. Multiplying everything out and collecting like terms,
    the qubit-qutrit CX becomes a sum of</p> <!> <p>distinct products: 2 surviving control-side elements (<!> and <!>)
    times 7 target-side elements (<!> and the six off-diagonal Gell-Mann matrices).
    Fourteen pairs of local gates, fourteen runs, one weighted sum, and a gate between
    two particles that do not even have the same dimension has been cut. The widget
    below does this whole computation live for any pair of dimensions, including
    the rebuild check at the end:</p> <!> <p>Two things stand out in it. The rebuild error stays at machine zero (around <!>,
    the resolution of floating-point arithmetic) for every pair of dimensions:
    the decomposition is exact, not approximate. And the grid stays mostly
    white. A candidate term pairs any of the <!> control-basis elements with
    any of the <!> target-basis elements,</p> <!> <p>and only the 14 counted above carry weight. The weights can also be <i>truncated</i>: sort them, drop any with magnitude below a threshold, and accept a small
    reconstruction error in exchange for fewer runs. Dropping every coefficient
    below <!> leaves the output error at zero to three decimal places even for combined gate
    dimensions of <!>; a coarser <!> holds up to around <!> before floating-point noise accumulates; and past <!>, accepting a 10 percent output error buys back more than two
    thirds of the computation time.</p> <!> <div class="m20"><hr/></div> <h3>The memory bill, measured</h3> <p>Back to the stress test: 8 particles of dimension 8, cut down the middle
    into two fragments of 4. The arithmetic at the top of the article said 128
    MB for the whole circuit and 64 KB for the fragment pair. With an artifical
    memory cap at 150 MB, the uncut simulation fits and takes about 130 seconds.
    The cut version runs 532 fragment pairs, takes about 1350 seconds, and
    stitches back to TVD 0.00000. With the cap at 100 MB, below the 128 MB state
    vector, the uncut simulation cannot run at all, and the cut version finishes
    in about 1400 seconds, unbothered.</p> <p>The planner below lets you play architect: pick the size and dimension of
    each chip, and see what the seam costs.</p> <!> <h3>Fewer pieces: cutting with an SVD</h3> <p>The Gell-Mann search has two costs that grow with dimension. The basis
    itself grows quadratically (<!> elements per side), so the search space
    grows fast; and summing hundreds of weighted terms in floating point accumulates
    rounding error. For larger dimensions: instead of searching a fixed basis of
    nice hardware-friendly gates, what is the <i>minimum</i> number of product terms any decomposition could have?</p> <p>Linear algebra tells us any matrix can be factored by SVD, and applying SVD
    across the seam of a gate <!> acting on dimensions <!> gives</p> <!> <p>a sum with at most <!> terms, the Schmidt decomposition of the
    gate. The local factors <!> are whatever the SVD says they are, arbitrary
    unitaries rather than named basis gates, but a simulator does not care about
    named or unnamed gates. Further, one may reasonably assume, for higher dimensional
    systems in the future, there may exist efficient ways to impliment arbitrary
    single unitaries for small numbers of particles at once. For a cut between two
    dimension-12 qudits, the full basis search produces 225 terms while the Schmidt
    route needs 12. For the dimension-8 stress test, the full search with no truncation
    kept 63 terms; Schmidt needs 8. If all term outputs are held in memory at once
    for stitching, that difference is</p> <!> <p>Which means if we compare from the beginning, what now takes 1 MB was a 128
    MB state vector when the circuit ran uncut: a 128x drop in memory, bought
    with a tenfold increase in time.</p> <!>`,1);function dr(h,u){wt(u,!1),kt();var i=Ha(),c=xe(i);ua(c,{title:"Cutting Quantum Circuits Beyond Qubits",sub:"arXiv:2601.02064",desc:"Sawing mixed-dimensional quantum circuits into fragments small enough to run anywhere",date:"5 January 2026"});var v=t(c,6);{let rt=ma(()=>[Ue("d","Levels per particle. A qubit has d = 2, a qutrit d = 3. The two sides of a cut may disagree: d₁ for the control, d₂ for the target"),Ue("n","Number of particles in a register; simulating it costs dⁿ complex numbers"),Ue("r","Control level index, 0 ≤ r < d₁; the cut gate is rebuilt one control level at a time"),Ue("X","Shift gate, the d-level generalisation of NOT: it sends level j to level j+1 and wraps the top level back to 0. Xʳ shifts by r"),Ue("P","Projector Pᵣ = |r⟩⟨r|: keeps the slice of the state where the control reads r, deletes everything else. Not a physical gate, which turns out to be the whole problem"),Ue("G","Generalised Gell-Mann matrices: d²−1 of them plus the identity form a complete basis for d×d operators. For d = 2 they are exactly the Pauli matrices"),Ue("c","Decomposition weights in CX = Σ cᵢ Aᵢ⊗Bᵢ; every non-zero cᵢ costs one extra pair of circuit runs"),Ue("σ","Singular values of the cut gate; the Schmidt route keeps only min(d₁, d₂) of them")]);va(v,{ignores:"H, R, I, Z, A, B, S, D, U, V, M, T, Q, a, b, j, k, l, m, q, x, y, i, e, t, z, Y, CX, Tr, TVD, min",get list(){return e(rt)}})}var _=t(v,4),m=t(l(_));a(m,()=>d`|0\\rangle`);var b=t(m,2);a(b,()=>d`|1\\rangle`);var f=t(b,2);a(f,()=>d`d`);var p=t(f,2);a(p,()=>d`d`);var X=t(p,2);a(X,()=>d`|0\\rangle`);var S=t(X,2);a(S,()=>d`|d-1\\rangle`);var C=t(S,2);a(C,()=>d`d`);var k=t(C,2);a(k,()=>d`d =
    3`),U(),s(_);var x=t(_,2),re=t(l(x),3);a(re,()=>d`n`);var z=t(re,2);a(z,()=>d`n`);var ve=t(z,2);a(ve,()=>d`d^n`);var pe=t(ve,2);a(pe,()=>d`2^n`),U(),s(x);var le=t(x,2);a(le,()=>W`
8^8 \\times 8 \\text{ B} = 2^{24} \\times 8 \\text{ B} = 2^{27} \\text{ B} = 128 \\text{ MB}
`);var V=t(le,4);a(V,()=>W`
2 \\times \\left( 8^4 \\times 8 \\text{ B} \\right) = 2 \\times 32 \\text{ KB} = 64 \\text{ KB}
`);var de=t(V,4);a(de,()=>W`
\\frac{128 \\text{ MB}}{64 \\text{ KB}} = \\frac{2^{27}}{2^{16}} = 2^{11} = 2048
`);var Y=t(de,10);Oe(Y,{wires:["q₁","q₂","q₃","q₄"],seam:1,chips:[{from:0,to:1,label:"chip A",col:"#2456c9"},{from:2,to:3,label:"chip B",col:"#097"}],gates:[{t:0,kind:"box",w:0,label:"H"},{t:0,kind:"box",w:1,label:"H"},{t:0,kind:"box",w:2,label:"H"},{t:0,kind:"box",w:3,label:"H"},{t:1,kind:"cx",c:0,x:1},{t:1,kind:"cx",c:3,x:2},{t:2,kind:"cx",c:1,x:2,col:"#c75200"},{t:3,kind:"box",w:0,label:"U"},{t:3,kind:"box",w:1,label:"U"},{t:3,kind:"box",w:2,label:"U"},{t:3,kind:"box",w:3,label:"U"}],note:"every gate sits on one chip except the orange CX: its control is on chip A, its target on chip B."});var Be=t(Y,4);a(Be,()=>W`
I = \\begin{pmatrix}1&0\\\\0&1\\end{pmatrix},\\quad
X = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\quad
Z = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},\\quad
\\mathrm{CX} = \\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&0&1\\\\0&0&1&0\\end{pmatrix}
`);var Xe=t(Be,4);a(Xe,()=>W`
\\mathrm{CX} = \\tfrac{1}{2}\\left(I \\otimes I + Z \\otimes I + I \\otimes X - Z \\otimes X\\right)
`);var _e=t(Xe,4);a(_e,()=>W`
I \\otimes I + Z \\otimes I = \\begin{pmatrix}2&0&0&0\\\\0&2&0&0\\\\0&0&0&0\\\\0&0&0&0\\end{pmatrix},
\\qquad
I \\otimes X - Z \\otimes X = \\begin{pmatrix}0&0&0&0\\\\0&0&0&0\\\\0&0&0&2\\\\0&0&2&0\\end{pmatrix}
`);var Se=t(_e,2);a(Se,()=>W`
\\tfrac12 \\left( \\text{sum} \\right) = \\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&0&1\\\\0&0&1&0\\end{pmatrix} = \\mathrm{CX}
`);var I=t(Se,2),r=t(l(I));a(r,()=>d`I`);var Z=t(r,2);a(Z,()=>d`I`);var K=t(Z,2);a(K,()=>d`Z`);var F=t(K,2);a(F,()=>d`I`);var L=t(F,2);a(L,()=>d`I`);var O=t(L,2);a(O,()=>d`X`);var G=t(O,2);a(G,()=>d`Z`);var D=t(G,2);a(D,()=>d`X`);var Q=t(D,2);a(Q,()=>d`+\\tfrac12, +\\tfrac12, +\\tfrac12,
    -\\tfrac12`),U(),s(I);var E=t(I,2),ce=l(E);Oe(ce,{wires:["",""],seam:0,gates:[{t:0,kind:"cx",c:0,x:1,col:"#c75200"}]});var ie=t(ce,6);Oe(ie,{wires:["",""],seam:0,gates:[{t:0,kind:"box",w:0,label:"I"},{t:0,kind:"box",w:1,label:"I"}]});var ue=t(ie,4);Oe(ue,{wires:["",""],seam:0,gates:[{t:0,kind:"box",w:0,label:"Z"},{t:0,kind:"box",w:1,label:"I"}]});var ge=t(ue,4);Oe(ge,{wires:["",""],seam:0,gates:[{t:0,kind:"box",w:0,label:"I"},{t:0,kind:"box",w:1,label:"X"}]});var $e=t(ge,4);Oe($e,{wires:["",""],seam:0,gates:[{t:0,kind:"box",w:0,label:"Z"},{t:0,kind:"box",w:1,label:"X"}]}),s(E);var Ie=t(E,6),ke=t(l(Ie));a(ke,()=>d`I`);var ze=t(ke,2);a(ze,()=>d`X`),U(),s(Ie);var je=t(Ie,2);a(je,()=>W`
\\mathrm{CX} = P_0 \\otimes I + P_1 \\otimes X,
\\qquad
P_0 = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\quad
P_1 = \\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}
`);var Ae=t(je,2),g=l(Ae);a(g,()=>d`P_0`);var j=t(g,2);a(j,()=>d`P_1`);var N=t(j,4);a(N,()=>d`\\{I, X, Y, Z\\}`),U(),s(Ae);var B=t(Ae,2);a(B,()=>W`
a_Z = \\frac{\\mathrm{Tr}(P_0 Z)}{\\mathrm{Tr}(Z^2)} = \\frac{1}{2}
\\quad\\Rightarrow\\quad
P_0 = \\tfrac12 I + \\tfrac12 Z,
\\qquad
P_1 = \\tfrac12 I - \\tfrac12 Z
`);var J=t(B,4);a(J,()=>W`
\\begin{aligned}
\\mathrm{CX} &= \\left(\\tfrac12 I + \\tfrac12 Z\\right) \\otimes I + \\left(\\tfrac12 I - \\tfrac12 Z\\right) \\otimes X\\\\
&= \\tfrac12 \\left( I \\otimes I + Z \\otimes I + I \\otimes X - Z \\otimes X \\right)
\\end{aligned}
`);var ee=t(J,2),oe=t(l(ee));a(oe,()=>d`d = 2`),U(),s(ee);var $=t(ee,6),te=t(l($));a(te,()=>d`d`);var Pe=t(te,2);a(Pe,()=>d`X`),U(),s($);var Fe=t($,2);a(Fe,()=>W`
X = \\sum_{j=0}^{d-1} |\\,(j+1) \\bmod d\\,\\rangle\\langle j|,
\\qquad
X_{(3)} = \\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix}
`);var We=t(Fe,2),ne=t(l(We));a(ne,()=>d`r`);var fe=t(ne,2);a(fe,()=>d`r`);var qe=t(fe,2);a(qe,()=>d`d_1`);var Me=t(qe,2);a(Me,()=>d`d_2`),U(),s(We);var ct=t(We,2);a(ct,()=>W`
\\mathrm{CX}_{d_1, d_2} = \\sum_{r=0}^{d_1 - 1} P_r \\otimes X^r
`);var Ge=t(ct,2),qt=t(l(Ge));a(qt,()=>d`d_1`),U(),s(Ge);var Ke=t(Ge,2),Je=t(l(Ke));a(Je,()=>d`d`);var Ne=t(Je,2);a(Ne,()=>d`d^2 - 1`);var ht=t(Ne,2);a(ht,()=>d`d \\times d`);var mt=t(ht,2);a(mt,()=>d`d = 2`),U(),s(Ke);var He=t(Ke,2);Lt(He,{title:"The Gell-Mann matrices for d = 3, explicitly",children:(rt,ca)=>{var it=Ga(),Qe=xe(it),pt=t(l(Qe));a(pt,()=>d`j < k`),U(),s(Qe);var ot=t(Qe,2);a(ot,()=>W`
    S_{01} = \\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&0\\end{pmatrix},\\quad
    S_{02} = \\begin{pmatrix}0&0&1\\\\0&0&0\\\\1&0&0\\end{pmatrix},\\quad
    S_{12} = \\begin{pmatrix}0&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix}
    `);var nt=t(ot,4);a(nt,()=>W`
    A_{01} = \\begin{pmatrix}0&-i&0\\\\i&0&0\\\\0&0&0\\end{pmatrix},\\quad
    A_{02} = \\begin{pmatrix}0&0&-i\\\\0&0&0\\\\i&0&0\\end{pmatrix},\\quad
    A_{12} = \\begin{pmatrix}0&0&0\\\\0&0&-i\\\\0&i&0\\end{pmatrix}
    `);var _t=t(nt,4);a(_t,()=>W`
    D_1 = \\begin{pmatrix}1&0&0\\\\0&-1&0\\\\0&0&0\\end{pmatrix},\\quad
    D_2 = \\tfrac{1}{\\sqrt{3}}\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&-2\\end{pmatrix}
    `);var st=t(_t,2),lt=t(l(st));a(lt,()=>d`3^2 - 1 = 8`);var dt=t(lt,2);a(dt,()=>d`I`);var gt=t(dt,2);a(gt,()=>d`S_{01} = X`);var Vt=t(gt,2);a(Vt,()=>d`A_{01} =
        Y`);var ha=t(Vt,2);a(ha,()=>d`D_1 = Z`),U(),s(st),P(rt,it)},$$slots:{default:!0}});var vt=t(He,4);a(vt,()=>W`
P_r = \\sum_{A \\in \\mathcal{B}_1} a_A^{(r)} A,
\\qquad
X^r = \\sum_{B \\in \\mathcal{B}_2} b_B^{(r)} B,
\\qquad
a_A^{(r)} = \\frac{\\mathrm{Tr}(P_r A)}{\\mathrm{Tr}(A^2)}
`);var Ve=t(vt,2),ft=t(l(Ve));a(ft,()=>d`d_1 = 2`);var et=t(ft,2);a(et,()=>d`d_2 = 3`);var tt=t(et,2);a(tt,()=>d`P_0
    = \\tfrac12 I + \\tfrac12 Z`);var ut=t(tt,2);a(ut,()=>d`P_1 = \\tfrac12 I - \\tfrac12 Z`);var q=t(ut,2);a(q,()=>d`S_{01}`);var T=t(q,2);a(T,()=>d`X_{(3)}`),U(),s(Ve);var ae=t(Ve,2);a(ae,()=>W`
X_{(3)} S_{01} =
\\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix}
\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&0\\end{pmatrix}
=
\\begin{pmatrix}0&0&0\\\\0&1&0\\\\1&0&0\\end{pmatrix}
\\;\\Rightarrow\\;
b_{S_{01}} = \\frac{\\mathrm{Tr}(X_{(3)} S_{01})}{\\mathrm{Tr}(S_{01}^2)} = \\frac{1}{2}
`);var R=t(ae,4);a(R,()=>W`
X_{(3)} = \\tfrac12\\left(S_{01} + S_{02} + S_{12}\\right)
- \\tfrac{i}{2} A_{01} + \\tfrac{i}{2} A_{02} - \\tfrac{i}{2} A_{12}
`);var se=t(R,4);a(se,()=>W`
2 \\times 7 = 14
`);var at=t(se,2),At=t(l(at));a(At,()=>d`I`);var jt=t(At,2);a(jt,()=>d`Z`);var ra=t(jt,2);a(ra,()=>d`I`),U(),s(at);var Pt=t(at,2);Xa(Pt,{});var Mt=t(Pt,2),Ct=t(l(Mt));a(Ct,()=>d`10^{-16}`);var Dt=t(Ct,2);a(Dt,()=>d`d_1^2`);var ia=t(Dt,2);a(ia,()=>d`d_2^2`),U(),s(Mt);var Zt=t(Mt,2);a(Zt,()=>W`
d_1^2 \\times d_2^2 = 4 \\times 9 = 36 \\;\\text{ candidates}
`);var Tt=t(Zt,2),$t=t(l(Tt),3);a($t,()=>d`10^{-2}`);var zt=t($t,2);a(zt,()=>d`(d_1 d_2)^2 = 10^6`);var Ft=t(zt,2);a(Ft,()=>d`5 \\times 10^{-2}`);var Wt=t(Ft,2);a(Wt,()=>d`10^9`);var oa=t(Wt,2);a(oa,()=>d`10^{14}`),U(),s(Tt);var Ut=t(Tt,2);Lt(Ut,{title:"The bookkeeping: stitching mixed-radix amplitudes",children:(rt,ca)=>{var it=Na(),Qe=xe(it),pt=t(l(Qe));a(pt,()=>d`|0111\\rangle`);var ot=t(pt,2);a(ot,()=>d`k`);var nt=t(ot,2);a(nt,()=>d`(3, 3, 2, 2)`);var _t=t(nt,2);a(_t,()=>d`k
        = 25`),U(),s(Qe);var st=t(Qe,2);a(st,()=>W`
    \\begin{aligned}
    25 \\bmod 3 &= 1, &\\quad \\lfloor 25 / 3 \\rfloor &= 8\\\\
    8 \\bmod 3 &= 2, &\\quad \\lfloor 8 / 3 \\rfloor &= 2\\\\
    2 \\bmod 2 &= 0, &\\quad \\lfloor 2 / 2 \\rfloor &= 1\\\\
    1 \\bmod 2 &= 1, &\\quad \\lfloor 1 / 2 \\rfloor &= 0
    \\end{aligned}
    `);var lt=t(st,2),dt=t(l(lt));a(dt,()=>d`(1, 2, 0, 1)`);var gt=t(dt,2);a(gt,()=>d`k`),U(),s(lt),P(rt,it)},$$slots:{default:!0}});var Kt=t(Ut,10);Da(Kt,{});var Bt=t(Kt,4),na=t(l(Bt));a(na,()=>d`d^2`),U(3),s(Bt);var Xt=t(Bt,2),Qt=t(l(Xt));a(Qt,()=>d`U`);var sa=t(Qt,2);a(sa,()=>d`d_1, d_2`),U(),s(Xt);var Gt=t(Xt,2);a(Gt,()=>W`
U = \\sum_{i=1}^{\\min(d_1, d_2)} \\sigma_i \\; U_i^{(d_1)} \\otimes V_i^{(d_2)}
`);var St=t(Gt,2),Nt=t(l(St));a(Nt,()=>d`\\min(d_1, d_2)`);var la=t(Nt,2);a(la,()=>d`U_i, V_i`),U(),s(St);var Ht=t(St,2);a(Ht,()=>W`
\\begin{aligned}
\\text{full basis} &: 64 \\text{ KB} \\times 63 \\times 2 \\approx 7.9 \\text{ MB}\\\\
\\text{Schmidt} &: 64 \\text{ KB} \\times 8 \\times 2 = 1 \\text{ MB}
\\end{aligned}
`);var da=t(Ht,4);pa(da,{list:[["Cutting Quantum Circuits Beyond Qubits (Seksaria, Prabhakar)","https://arxiv.org/abs/2601.02064"],["Simulating Large Quantum Circuits on a Small Quantum Computer (Peng, Harrow, Ozols, Wu; 2020)","https://arxiv.org/abs/1904.00102"],["Constructing a virtual two-qubit gate by sampling single-qubit operations (Mitarai, Fujii; 2021)","https://arxiv.org/abs/1909.07534"],["CutQC: Using Small Quantum Computers for Large Quantum Circuit Evaluations (Tang et al.; 2021)","https://arxiv.org/abs/2012.02333"],["Qudits and High-Dimensional Quantum Computing (Wang, Hu, Sanders, Kais; 2020)","https://www.frontiersin.org/articles/10.3389/fphy.2020.589504/full"]]}),P(h,i),yt()}export{dr as component};
