import{$ as t,A as $,D as Xe,E as ze,G as Zt,K as H,L as ve,M as Ae,N as ue,Q as qe,R as e,T as Fe,V as n,W as I,Z as o,_ as Ce,a as Re,at as kt,ct as Bt,d as et,et as w,f as tt,ft as Q,it as Qe,j as ca,k as T,lt as St,nt as q,o as Xt,p as v,pt as s,v as ga,w as a}from"../chunks/BvhN-6Rm.js";import"../chunks/DwdwGuwu.js";import"../chunks/DDwXJn8G.js";import{a as N,d as ta,i as l,n as ba,o as xa,t as Y,u as ya}from"../chunks/gs4HCyIA.js";var Me=(d,p)=>[d,p||0],Mt=(d,p)=>[d[0]+p[0],d[1]+p[1]],Tt=(d,p)=>[d[0]*p[0]-d[1]*p[1],d[0]*p[1]+d[1]*p[0]],at=d=>Math.hypot(d[0],d[1]),Ue=(d,p)=>Array.from({length:d},()=>Array.from({length:p},()=>Me(0))),wa=d=>{const p=Ue(d,d);for(let i=0;i<d;i++)p[i][i]=Me(1);return p};function aa(d){const p=[{name:"I",M:wa(d),norm:d}];for(let i=0;i<d;i++)for(let c=i+1;c<d;c++){const u=Ue(d,d);u[i][c]=Me(1),u[c][i]=Me(1),p.push({name:"S"+i+c,M:u,norm:2});const _=Ue(d,d);_[i][c]=Me(0,-1),_[c][i]=Me(0,1),p.push({name:"A"+i+c,M:_,norm:2})}for(let i=1;i<d;i++){const c=Ue(d,d),u=Math.sqrt(2/(i*(i+1)));for(let _=0;_<i;_++)c[_][_]=Me(u);c[i][i]=Me(-i*u),p.push({name:"D"+i,M:c,norm:2})}return p}function ra(d,p){const i=d.length;let c=Me(0);for(let u=0;u<i;u++)for(let _=0;_<i;_++)c=Mt(c,Tt(d[u][_],p[_][u]));return c}function ia(d,p){const i=Ue(d,d);for(let c=0;c<d;c++)i[(c+p)%d][c]=Me(1);return i}function na(d,p){const i=Ue(d,d);return i[p][p]=Me(1),i}function sa(d,p){const i=d.length,c=p.length,u=Ue(i*c,i*c);for(let _=0;_<i;_++)for(let h=0;h<i;h++)for(let g=0;g<c;g++)for(let m=0;m<c;m++)u[_*c+g][h*c+m]=Tt(d[_][h],p[g][m]);return u}function da(d,p,i){const c=aa(d),u=aa(p),_=Array.from({length:c.length},()=>Array.from({length:u.length},()=>Me(0)));for(let m=0;m<d;m++){const f=na(d,m),B=ia(p,m%p),S=c.map(y=>{const x=ra(f,y.M);return[x[0]/y.norm,x[1]/y.norm]}),j=u.map(y=>{const x=ra(B,y.M);return[x[0]/y.norm,x[1]/y.norm]});for(let y=0;y<c.length;y++)if(!(at(S[y])<1e-13))for(let x=0;x<u.length;x++)_[y][x]=Mt(_[y][x],Tt(S[y],j[x]))}const h=[];for(let m=0;m<c.length;m++)for(let f=0;f<u.length;f++)at(_[m][f])>1e-12&&h.push({a:m,b:f,an:c[m].name,bn:u[f].name,c:_[m][f]});let g=null;if(i){const m=d*p,f=Ue(m,m);for(const S of h){const j=sa(c[S.a].M,u[S.b].M);for(let y=0;y<m;y++)for(let x=0;x<m;x++)f[y][x]=Mt(f[y][x],Tt(S.c,j[y][x]))}const B=Ue(m,m);for(let S=0;S<d;S++){const j=sa(na(d,S),ia(p,S%p));for(let y=0;y<m;y++)for(let x=0;x<m;x++)B[y][x]=Mt(B[y][x],j[y][x])}g=0;for(let S=0;S<m;S++)for(let j=0;j<m;j++)g=Math.max(g,at([f[S][j][0]-B[S][j][0],f[S][j][1]-B[S][j][1]]))}return{names1:c.map(m=>m.name),names2:u.map(m=>m.name),grid:_,terms:h,err:g}}var oa=["B","KB","MB","GB","TB","PB","EB"];function we(d){let p=0;for(;d>=1024&&p<oa.length-1;)d/=1024,p++;return(d>=100?Math.round(d):Math.round(d*10)/10)+" "+oa[p]}var qa=ue('<text text-anchor="start" style="fill:var(--g3)"> </text>'),Ma=ue('<text text-anchor="end" style="fill:var(--g3)"> </text>'),ka=ue("<!><!>",1),Ta=ue('<rect stroke-width="0.5"></rect>'),la=Ae("<sub> </sub>"),Ba=Ae("<span> <!> <!></span>"),Sa=Ae('<div class="f fw j-ct g5 mt10"></div>'),Xa=Ae(`<div class="hint mt5 svelte-qoev0h">at d₁ = d₂ = 2 the basis is the Pauli set (S₀₁ = X, A₀₁ = Y, D₁ =
            Z), and the four lit cells read exactly ½(I⊗I + Z⊗I + I⊗X − Z⊗X)</div>`),Aa=Ae(`<div class="dx tc mx-a my20 p10 rx10 svelte-qoev0h"><div class="f al-ct j-ct fw g10 mb10"><label>control dim d₁ = <b> </b> <input type="range" min="2" max="5" step="1" class="svelte-qoev0h"/></label> <label>target dim d₂ = <b> </b> <input type="range" min="2" max="5" step="1" class="svelte-qoev0h"/></label></div> <svg font-family="monospace" font-size="10" class="svelte-qoev0h"><!><!></svg> <div class="stat mt5 svelte-qoev0h"><b class="ok svelte-qoev0h"> </b> <b> </b> · rebuild error <b class="ok svelte-qoev0h"> </b></div> <!> <!> <div class="note mt10 svelte-qoev0h">every cell is one possible pair Aᵢ⊗Bᵢ: rows run over the control-side
        basis, columns over the target-side basis. teal = real weight, orange =
        imaginary weight, deeper = larger |cᵢ|. only the lit cells turn into
        circuit runs; the white ones are free.</div></div>`);function Ia(d,p){St(p,!1);const i=w(),c=w(),u=w(),_=w(),h=w(),g=w(),m=w(),f=w(),B=w(),S=w(),j=w(),y=w(),x=w();let ne=w(2),W=w(3);const le=(b,P,U)=>{const X=Math.trunc(Number(b));return Number.isFinite(X)?Math.min(U,Math.max(P,X)):P},ge=(b,P)=>{const U=at(b);if(U<1e-12||P===0)return"var(--w)";const X=Math.round((.18+.82*U/P)*100);return`color-mix(in srgb, var(${Math.abs(b[1])>Math.abs(b[0])?"--c1":"--c2"}) ${X}%, transparent)`},ce=b=>{const P=Math.round(b[0]*100)/100,U=Math.round(b[1]*100)/100;return U===0?(P<0?"−":"+")+Math.abs(P):(U<0?"−":"+")+Math.abs(U)+"i"},L=b=>b.slice(0,1),pe=b=>b.slice(1);I(()=>e(ne),()=>{q(i,le(e(ne),2,5))}),I(()=>e(W),()=>{q(c,le(e(W),2,5))}),I(()=>(e(i),e(c)),()=>{q(u,da(e(i),e(c),!0))}),I(()=>e(u),()=>{q(_,e(u).names1.length)}),I(()=>e(u),()=>{q(h,e(u).names2.length)}),I(()=>(e(u),at),()=>{q(g,e(u).terms.reduce((b,P)=>Math.max(b,at(P.c)),0))}),I(()=>(e(i),e(c)),()=>{q(m,Math.min(e(i),e(c)))}),I(()=>(e(_),e(h)),()=>{q(f,e(_)>9||e(h)>9?13:24)}),I(()=>(e(_),e(h)),()=>{q(B,e(_)<=9&&e(h)<=9)}),I(()=>e(B),()=>{q(S,e(B)?44:18)}),I(()=>e(B),()=>{q(j,e(B)?40:14)}),I(()=>(e(S),e(h),e(f)),()=>{q(y,e(S)+e(h)*e(f)+14)}),I(()=>(e(j),e(_),e(f)),()=>{q(x,e(j)+e(_)*e(f)+8)}),Zt(),Xt();var te=Aa(),Ie=o(te),Pe=o(Ie),be=t(o(Pe)),$e=o(be,!0);s(be);var A=t(be,2);tt(A),s(Pe);var r=t(Pe,2),D=t(o(r)),z=o(D,!0);s(D);var Z=t(D,2);tt(Z),s(r),s(Ie);var E=t(Ie,2),O=o(E),V=b=>{var P=ka(),U=qe(P);Fe(U,1,()=>(e(u),n(()=>e(u).names2)),ze,(re,me,J)=>{var G=qa(),ae=o(G,!0);s(G),H(()=>{v(G,"x",e(S)+J*e(f)+e(f)/2),v(G,"y",e(j)-7),v(G,"transform",`rotate(-55 ${e(S)+J*e(f)+e(f)/2} ${e(j)-7})`),T(ae,e(me))}),$(re,G)});var X=t(U);Fe(X,1,()=>(e(u),n(()=>e(u).names1)),ze,(re,me,J)=>{var G=Ma(),ae=o(G,!0);s(G),H(()=>{v(G,"x",e(S)-5),v(G,"y",e(j)+J*e(f)+e(f)/2+3),T(ae,e(me))}),$(re,G)}),$(b,P)};Xe(O,b=>{e(B)&&b(V)});var C=t(O);Fe(C,1,()=>(e(u),n(()=>e(u).grid)),ze,(b,P,U)=>{var X=ca(),re=qe(X);Fe(re,1,()=>e(P),ze,(me,J,G)=>{var ae=Ta();H(Ve=>{v(ae,"x",e(S)+G*e(f)),v(ae,"y",e(j)+U*e(f)),v(ae,"width",e(f)-1),v(ae,"height",e(f)-1),Ce(ae,`fill:${Ve??""};stroke:var(--g1)`)},[()=>(e(J),e(g),n(()=>ge(e(J),e(g))))]),$(me,ae)}),$(b,X)}),s(E);var F=t(E,2),R=o(F),de=o(R,!0);s(R);var he=t(R),fe=t(he),xe=o(fe,!0);s(fe);var De=t(fe,2),Ze=o(De,!0);s(De),s(F);var ke=t(F,2),Ke=b=>{var P=Sa();Fe(P,5,()=>(e(u),n(()=>e(u).terms)),ze,(U,X)=>{var re=Ba();let me;var J=o(re),G=t(J),ae=ie=>{var _e=la(),Te=o(_e,!0);s(_e),H(ye=>T(Te,ye),[()=>(e(X),n(()=>pe(e(X).an)))]),$(ie,_e)},Ve=kt(()=>(e(X),n(()=>pe(e(X).an))));Xe(G,ie=>{e(Ve)&&ie(ae)});var Ne=t(G),He=t(Ne),Le=ie=>{var _e=la(),Te=o(_e,!0);s(_e),H(ye=>T(Te,ye),[()=>(e(X),n(()=>pe(e(X).bn)))]),$(ie,_e)},Ee=kt(()=>(e(X),n(()=>pe(e(X).bn))));Xe(He,ie=>{e(Ee)&&ie(Le)}),s(re),H((ie,_e,Te,ye)=>{me=ga(re,1,"chip rx5 svelte-qoev0h",null,me,ie),T(J,`${_e??""}
                    ${Te??""}`),T(Ne,`⊗${ye??""}`)},[()=>({imag:Math.abs(e(X).c[1])>Math.abs(e(X).c[0])}),()=>(e(X),n(()=>ce(e(X).c))),()=>(e(X),n(()=>L(e(X).an))),()=>(e(X),n(()=>L(e(X).bn)))]),$(U,re)}),s(P),$(b,P)};Xe(ke,b=>{e(u),n(()=>e(u).terms.length<=14)&&b(Ke)});var je=t(ke,2),Ge=b=>{var P=Xa();$(b,P)};Xe(je,b=>{e(i)===2&&e(c)===2&&b(Ge)}),Q(2),s(te),H(b=>{T($e,e(i)),T(z,e(c)),v(E,"width",e(y)),v(E,"height",e(x)),T(de,(e(u),n(()=>e(u).terms.length))),T(he,` non-zero terms out of ${e(_)*e(h)}
        possible pairs · Schmidt route needs `),T(xe,e(m)),T(Ze,b)},[()=>(e(u),n(()=>e(u).err.toExponential(1)))]),et(A,()=>e(ne),b=>q(ne,b)),et(Z,()=>e(W),b=>q(W,b)),$(d,te),Bt()}var Pa=ue('<line y1="14" y2="98" style="stroke:var(--g1)"></line><text y="110" text-anchor="middle" style="fill:var(--g2)"> </text>',1),$a=ue('<text y="37" text-anchor="end" style="fill:var(--w)"> </text>'),ja=ue('<text y="37" style="fill:var(--g3)"> </text>'),Ca=ue('<text y="79" text-anchor="end" style="fill:var(--w)"> </text>'),Da=ue('<text y="79" style="fill:var(--g3)"> </text>'),Za=Ae('<div class="pg mx-a my20 p10 rx10 svelte-5fdyfn"><div class="f al-ct j-ct fw g10 mb10"><label class="svelte-5fdyfn">chip A: <b> </b> qudits <input type="range" min="1" max="8" step="1" class="svelte-5fdyfn"/></label> <label class="svelte-5fdyfn">each of dim <b> </b> <input type="range" min="2" max="9" step="1" class="svelte-5fdyfn"/></label></div> <div class="f al-ct j-ct fw g10 mb10"><label class="svelte-5fdyfn">chip B: <b> </b> qudits <input type="range" min="1" max="8" step="1" class="svelte-5fdyfn"/></label> <label class="svelte-5fdyfn">each of dim <b> </b> <input type="range" min="2" max="9" step="1" class="svelte-5fdyfn"/></label></div> <div class="tc"><svg width="470" height="126" font-family="monospace" font-size="10" class="svelte-5fdyfn"><!><text y="37" text-anchor="end" style="fill:var(--g3)">uncut</text><rect y="22" height="24" style="fill:var(--c1)"></rect><!><text y="79" text-anchor="end" style="fill:var(--g3)">cut</text><rect y="64" height="24" style="fill:var(--c2)"></rect><!></svg> <div class="cap svelte-5fdyfn">state-vector memory, logarithmic scale (ticks ≈ decades)</div></div> <div class="form tc my10 svelte-5fdyfn"><div class="my2"> <sup> </sup> <sup> </sup> × 8 B = <b> </b></div> <div class="my2"> <sup> </sup> <sup> </sup>) × 8 B = <b> </b></div> <div class="my2">memory factor <b class="ok svelte-5fdyfn"> </b></div></div></div>');function Ga(d,p){St(p,!1);const i=w(),c=w(),u=w(),_=w(),h=w(),g=w(),m=w(),f=w(),B=w(),S=w(),j=w(),y=w();let x=w(8),ne=w(8),W=w(4),le=w(4);const ge=(M,k,se)=>{const ee=Math.trunc(Number(M));return Number.isFinite(ee)?Math.min(se,Math.max(k,ee)):k},ce=17,L=86,pe=340,te=M=>Math.max(3,Math.log10(M)/ce*pe),Ie=M=>M>=10?Math.round(M).toLocaleString("en-US"):String(Math.round(M*10)/10),Pe=[[3,"KB"],[6,"MB"],[9,"GB"],[12,"TB"],[15,"PB"]];I(()=>e(x),()=>{q(i,ge(e(x),2,9))}),I(()=>e(ne),()=>{q(c,ge(e(ne),2,9))}),I(()=>e(W),()=>{q(u,ge(e(W),1,8))}),I(()=>e(le),()=>{q(_,ge(e(le),1,8))}),I(()=>(e(i),e(u)),()=>{q(h,Math.pow(e(i),e(u))*8)}),I(()=>(e(c),e(_)),()=>{q(g,Math.pow(e(c),e(_))*8)}),I(()=>(e(i),e(u),e(c),e(_)),()=>{q(m,Math.pow(e(i),e(u))*Math.pow(e(c),e(_))*8)}),I(()=>(e(h),e(g)),()=>{q(f,e(h)+e(g))}),I(()=>(e(m),e(f)),()=>{q(B,e(m)/e(f))}),I(()=>(e(i),e(c)),()=>{q(S,da(e(i),e(c),!1).terms.length)}),I(()=>(e(i),e(c)),()=>{q(j,Math.min(e(i),e(c)))}),I(()=>(e(i),e(c)),()=>{q(y,e(i)*Math.pow(e(i)*e(c),2))}),Zt(),Xt();var be=Za(),$e=o(be),A=o($e),r=t(o(A)),D=o(r,!0);s(r);var z=t(r,2);tt(z),s(A);var Z=t(A,2),E=t(o(Z)),O=o(E,!0);s(E);var V=t(E,2);tt(V),s(Z),s($e);var C=t($e,2),F=o(C),R=t(o(F)),de=o(R,!0);s(R);var he=t(R,2);tt(he),s(F);var fe=t(F,2),xe=t(o(fe)),De=o(xe,!0);s(xe);var Ze=t(xe,2);tt(Ze),s(fe),s(C);var ke=t(C,2),Ke=o(ke),je=o(Ke);Fe(je,1,()=>Pe,ze,(M,k)=>{var se=Pa(),ee=qe(se),oe=t(ee),xt=o(oe,!0);s(oe),H(()=>{v(ee,"x1",(e(k),n(()=>L+e(k)[0]/ce*pe))),v(ee,"x2",(e(k),n(()=>L+e(k)[0]/ce*pe))),v(oe,"x",(e(k),n(()=>L+e(k)[0]/ce*pe))),T(xt,(e(k),n(()=>e(k)[1])))}),$(M,se)});var Ge=t(je);v(Ge,"x",L-8);var b=t(Ge);v(b,"x",L);var P=t(b),U=M=>{var k=$a(),se=o(k,!0);s(k),H((ee,oe)=>{v(k,"x",ee),T(se,oe)},[()=>(e(m),n(()=>L+te(e(m))-6)),()=>(ve(we),e(m),n(()=>we(e(m))))]),$(M,k)},X=kt(()=>(e(m),n(()=>te(e(m))>240))),re=M=>{var k=ja(),se=o(k,!0);s(k),H((ee,oe)=>{v(k,"x",ee),T(se,oe)},[()=>(e(m),n(()=>L+te(e(m))+6)),()=>(ve(we),e(m),n(()=>we(e(m))))]),$(M,k)};Xe(P,M=>{e(X)?M(U):M(re,-1)});var me=t(P);v(me,"x",L-8);var J=t(me);v(J,"x",L);var G=t(J),ae=M=>{var k=Ca(),se=o(k,!0);s(k),H((ee,oe)=>{v(k,"x",ee),T(se,oe)},[()=>(e(f),n(()=>L+te(e(f))-6)),()=>(ve(we),e(f),n(()=>we(e(f))))]),$(M,k)},Ve=kt(()=>(e(f),n(()=>te(e(f))>240))),Ne=M=>{var k=Da(),se=o(k,!0);s(k),H((ee,oe)=>{v(k,"x",ee),T(se,oe)},[()=>(e(f),n(()=>L+te(e(f))+6)),()=>(ve(we),e(f),n(()=>we(e(f))))]),$(M,k)};Xe(G,M=>{e(Ve)?M(ae):M(Ne,-1)}),s(Ke),Q(2),s(ke);var He=t(ke,2),Le=o(He),Ee=o(Le),ie=t(Ee),_e=o(ie,!0);s(ie);var Te=t(ie),ye=t(Te),At=o(ye,!0);s(ye);var rt=t(ye,2),it=o(rt,!0);s(rt),s(Le);var nt=t(Le,2),Oe=o(nt),Ye=t(Oe),_t=o(Ye,!0);s(Ye);var st=t(Ye),ot=t(st),gt=o(ot,!0);s(ot);var lt=t(ot,2),ct=o(lt,!0);s(lt),s(nt);var dt=t(nt,2),ht=t(o(dt)),bt=o(ht);s(ht),s(dt),s(He),s(be),H((M,k,se,ee,oe)=>{T(D,e(u)),T(O,e(i)),T(de,e(_)),T(De,e(c)),v(b,"width",M),v(J,"width",k),T(Ee,`uncut: ${e(i)??""}`),T(_e,e(u)),T(Te,` × ${e(c)??""}`),T(At,e(_)),T(it,se),T(Oe,`cut: (${e(i)??""}`),T(_t,e(u)),T(st,` + ${e(c)??""}`),T(gt,e(_)),T(ct,ee),T(bt,`×${oe??""}`)},[()=>(e(m),n(()=>te(e(m)))),()=>(e(f),n(()=>te(e(f)))),()=>(ve(we),e(m),n(()=>we(e(m)))),()=>(ve(we),e(f),n(()=>we(e(f)))),()=>(e(B),n(()=>Ie(e(B))))]),et(z,()=>e(W),M=>q(W,M)),et(V,()=>e(x),M=>q(x,M)),et(he,()=>e(le),M=>q(le,M)),et(Ze,()=>e(ne),M=>q(ne,M)),$(d,be),Bt()}var Wa=ue('<rect fill-opacity="0.07" rx="6"></rect><text font-size="10"> </text>',1),za=ue('<text text-anchor="end" style="fill:var(--g3)" font-size="11"> </text>'),Fa=ue('<line style="stroke:var(--k1)" stroke-width="1.4"></line><!>',1),Ua=ue('<line style="stroke:var(--c1)" stroke-width="1.4" stroke-dasharray="6 5"></line><text text-anchor="end" style="fill:var(--c1)" font-size="10">cut</text>',1),Ka=ue('<line stroke-width="1.8"></line><circle r="4.5"></circle><circle r="9" stroke-width="1.8"></circle><line stroke-width="1.8"></line><line stroke-width="1.8"></line>',1),Na=ue('<rect width="28" height="28" stroke-width="1.6" rx="4"></rect><text text-anchor="middle"> </text>',1),Qa=Ae('<figcaption class="note svelte-1wsfehj"> </figcaption>'),Va=Ae('<figure class="mx-a my20 tc"><svg font-family="monospace" font-size="12" role="img" class="svelte-1wsfehj"><!><!><!><!></svg> <!></figure>');function Je(d,p){St(p,!1);const i=w(),c=w(),u=w(),_=w(),h=w(),g=w();let m=Re(p,"wires",24,()=>[]),f=Re(p,"gates",24,()=>[]),B=Re(p,"seam",24,()=>-1),S=Re(p,"chips",24,()=>[]),j=Re(p,"note",8,""),y=Re(p,"pad",8,0);const x=38,ne=48,W=12,le=22;I(()=>ve(m()),()=>{q(i,m().some(A=>A)?30:0)}),I(()=>(ve(f()),ve(y())),()=>{q(c,f().reduce((A,r)=>Math.max(A,r.t),0)+1+y())}),I(()=>(e(i),e(c)),()=>{q(u,W+e(i)+e(c)*ne+W)}),I(()=>ve(m()),()=>{q(_,le+(m().length-1)*x+le)}),I(()=>{},()=>{q(h,A=>le+A*x)}),I(()=>e(i),()=>{q(g,A=>W+e(i)+(A+.5)*ne)}),Zt(),Xt();var ge=Va(),ce=o(ge),L=o(ce);Fe(L,1,S,ze,(A,r)=>{var D=Wa(),z=qe(D),Z=t(z),E=o(Z,!0);s(Z),H((O,V)=>{v(z,"x",W+e(i)),v(z,"y",O),v(z,"width",e(c)*ne),v(z,"height",(e(r),n(()=>(e(r).to-e(r).from+1)*x-10))),Ce(z,`fill:${e(r),n(()=>e(r).col)??""}`),v(Z,"x",W+e(i)+5),v(Z,"y",V),Ce(Z,`fill:${e(r),n(()=>e(r).col)??""}`),T(E,(e(r),n(()=>e(r).label)))},[()=>(e(h),e(r),n(()=>e(h)(e(r).from)-x/2+5)),()=>(e(h),e(r),n(()=>e(h)(e(r).from)-x/2+17))]),$(A,D)});var pe=t(L);Fe(pe,1,m,ze,(A,r,D)=>{var z=Fa(),Z=qe(z),E=t(Z),O=V=>{var C=za(),F=o(C,!0);s(C),H(R=>{v(C,"x",W+e(i)-6),v(C,"y",R),T(F,e(r))},[()=>(e(h),n(()=>e(h)(D)+4))]),$(V,C)};Xe(E,V=>{e(r)&&V(O)}),H((V,C)=>{v(Z,"x1",W+e(i)),v(Z,"x2",e(u)-W),v(Z,"y1",V),v(Z,"y2",C)},[()=>(e(h),n(()=>e(h)(D))),()=>(e(h),n(()=>e(h)(D)))]),$(A,z)});var te=t(pe),Ie=A=>{var r=Ua(),D=qe(r);v(D,"x1",W);var z=t(D);H((Z,E,O)=>{v(D,"x2",e(u)-W),v(D,"y1",Z),v(D,"y2",E),v(z,"x",e(u)-W),v(z,"y",O)},[()=>(e(h),ve(B()),n(()=>(e(h)(B())+e(h)(B()+1))/2)),()=>(e(h),ve(B()),n(()=>(e(h)(B())+e(h)(B()+1))/2)),()=>(e(h),ve(B()),n(()=>(e(h)(B())+e(h)(B()+1))/2-5))]),$(A,r)};Xe(te,A=>{ve(B()),ve(m()),n(()=>B()>=0&&B()<m().length-1)&&A(Ie)});var Pe=t(te);Fe(Pe,1,f,ze,(A,r)=>{var D=ca(),z=qe(D),Z=O=>{var V=Ka(),C=qe(V),F=t(C),R=t(F),de=t(R),he=t(de);H((fe,xe,De,Ze,ke,Ke,je,Ge,b,P,U,X,re,me,J,G)=>{v(C,"x1",fe),v(C,"x2",xe),v(C,"y1",De),v(C,"y2",Ze),Ce(C,`stroke:${e(r),n(()=>e(r).col||"var(--k1)")??""}`),v(F,"cx",ke),v(F,"cy",Ke),Ce(F,`fill:${e(r),n(()=>e(r).col||"var(--k1)")??""}`),v(R,"cx",je),v(R,"cy",Ge),Ce(R,`fill:var(--w);stroke:${e(r),n(()=>e(r).col||"var(--k1)")??""}`),v(de,"x1",b),v(de,"x2",P),v(de,"y1",U),v(de,"y2",X),Ce(de,`stroke:${e(r),n(()=>e(r).col||"var(--k1)")??""}`),v(he,"x1",re),v(he,"x2",me),v(he,"y1",J),v(he,"y2",G),Ce(he,`stroke:${e(r),n(()=>e(r).col||"var(--k1)")??""}`)},[()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(h),e(r),n(()=>e(h)(e(r).c))),()=>(e(h),e(r),n(()=>e(h)(e(r).x))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(h),e(r),n(()=>e(h)(e(r).c))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(h),e(r),n(()=>e(h)(e(r).x))),()=>(e(g),e(r),n(()=>e(g)(e(r).t)-6)),()=>(e(g),e(r),n(()=>e(g)(e(r).t)+6)),()=>(e(h),e(r),n(()=>e(h)(e(r).x))),()=>(e(h),e(r),n(()=>e(h)(e(r).x))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(h),e(r),n(()=>e(h)(e(r).x)-6)),()=>(e(h),e(r),n(()=>e(h)(e(r).x)+6))]),$(O,V)},E=O=>{var V=Na(),C=qe(V),F=t(C),R=o(F,!0);s(F),H((de,he,fe,xe)=>{v(C,"x",de),v(C,"y",he),Ce(C,`fill:var(--w);stroke:${e(r),n(()=>e(r).col||"var(--k1)")??""}`),v(F,"x",fe),v(F,"y",xe),Ce(F,`fill:${e(r),n(()=>e(r).col||"var(--k1)")??""}`),T(R,(e(r),n(()=>e(r).label)))},[()=>(e(g),e(r),n(()=>e(g)(e(r).t)-14)),()=>(e(h),e(r),n(()=>e(h)(e(r).w)-14)),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(h),e(r),n(()=>e(h)(e(r).w)+4))]),$(O,V)};Xe(z,O=>{e(r),n(()=>e(r).kind==="cx")?O(Z):O(E,-1)}),$(A,D)}),s(ce);var be=t(ce,2),$e=A=>{var r=Qa(),D=o(r,!0);s(r),H(()=>T(D,j())),$(A,r)};Xe(be,A=>{j()&&A($e)}),s(ge),H(()=>{v(ce,"viewBox",`0 0 ${e(u)??""} ${e(_)??""}`),v(ce,"width",e(u))}),$(d,ge),Bt()}var Ha=Ae(`<p>Three symmetric ones, one per pair of levels <!>:</p> <!> <p>Three antisymmetric ones on the same pairs:</p> <!> <p>And two diagonal ones:</p> <!> <p>That is <!> matrices; with <!> they span everything a 3×3
        operator can be. Each squares to something with trace 2, which is the normalisation
        used in the coefficient formula. Restricting to the top-left 2×2 block recovers
        the Paulis: <!>, <!>, <!>.</p>`,1),La=Ae(`<p>The one genuinely annoying part of heterogeneous cutting is index
        bookkeeping. A homogeneous register of qubits labels its states with
        binary strings, and position 7 means <!> everywhere. In a mixed
        register the "digits" of a state label run on different bases, and the simulator
        may store fragments in a different particle order than the logical circuit
        (big-endian qudits flipped into little-endian, for one). The fix is mechanical:
        for each flat index <!> of the stitched amplitude vector, peel off digits
        in mixed radix, one base per particle. With bases <!> and <!>:</p> <!> <p>giving digits <!>. A fixed permutation then reorders the
        digits from storage order to logical particle order, the digits are
        joined into a state label, and the squared magnitude of amplitude <!> is filed under that label. Dull, mechanical, and the source of essentially
        all bugs in getting TVD to actually read zero.</p>`,1),Ea=Ae(`<!> <p>The largest quantum processors today carry a few hundred noisy qubits, and
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
    with a tenfold increase in time.</p> <!>`,1);function er(d,p){St(p,!1);const i=(K,We,Be)=>({t:K,kind:"box",w:We,label:Be}),c=(K,We,Be,Se)=>({t:K,kind:"cx",c:We,x:Be,col:Se}),u=(K,We,Be,Se)=>({from:K,to:We,label:Be,col:Se});Xt();var _=Ea(),h=qe(_);xa(h,{title:"Cutting Quantum Circuits Beyond Qubits",sub:"arXiv:2601.02064",desc:"Sawing mixed-dimensional quantum circuits into fragments small enough to run anywhere",date:"5 January 2026"});var g=t(h,6);{let K=Qe(()=>[Y("d","Levels per particle. A qubit has d = 2, a qutrit d = 3. The two sides of a cut may disagree: d₁ for the control, d₂ for the target"),Y("n","Number of particles in a register; simulating it costs dⁿ complex numbers"),Y("r","Control level index, 0 ≤ r < d₁; the cut gate is rebuilt one control level at a time"),Y("X","Shift gate, the d-level generalisation of NOT: it sends level j to level j+1 and wraps the top level back to 0. Xʳ shifts by r"),Y("P","Projector Pᵣ = |r⟩⟨r|: keeps the slice of the state where the control reads r, deletes everything else. Not a physical gate, which turns out to be the whole problem"),Y("G","Generalised Gell-Mann matrices: d²−1 of them plus the identity form a complete basis for d×d operators. For d = 2 they are exactly the Pauli matrices"),Y("c","Decomposition weights in CX = Σ cᵢ Aᵢ⊗Bᵢ; every non-zero cᵢ costs one extra pair of circuit runs"),Y("σ","Singular values of the cut gate; the Schmidt route keeps only min(d₁, d₂) of them"),Y("I","The identity matrix: the do-nothing gate, 1s down the diagonal and 0s elsewhere"),Y("Z","Pauli Z, equivalently the d = 2 diagonal Gell-Mann matrix D₁ = diag(1, −1): leaves |0⟩ alone and flips the sign of |1⟩"),Y("Y","Pauli Y, the d = 2 antisymmetric Gell-Mann matrix A₀₁"),Y("S","Symmetric Gell-Mann matrices Sⱼₖ, one per level pair j < k (real off-diagonal pairs). For d = 2, S₀₁ = X"),Y("A","Antisymmetric Gell-Mann matrices Aⱼₖ, one per level pair j < k (imaginary off-diagonal pairs, A₀₁ = Y); also the dummy control-side basis element A in the expansion Pᵣ = Σ a_A A"),Y("D","Diagonal Gell-Mann matrices D₁, D₂; for d = 2, D₁ = Z"),Y("B","Dummy target-side basis element B in the expansion Xʳ = Σ b_B B"),Y("U","A gate being cut across the seam; in the SVD route, its left Schmidt factors Uᵢ acting on the control side"),Y("V","The right Schmidt factors Vᵢ from the gate's SVD, acting on the target side"),Y("CX","The controlled-shift gate (CSUM) being cut: CX = Σᵣ Pᵣ⊗Xʳ reads the control level r and shifts the target by r"),Y("a","Control-side expansion coefficient a_A^(r) = Tr(Pᵣ A) / Tr(A²), the weight of basis element A in the projector Pᵣ"),Y("b","Target-side expansion coefficient b_B^(r), the weight of basis element B in the shift Xʳ")]);ba(g,{ignores:"Tr, min, i, j, k, l, m, q, t, x, y, z",get list(){return e(K)}})}var m=t(g,4),f=t(o(m));a(f,()=>l`|0\\rangle`);var B=t(f,2);a(B,()=>l`|1\\rangle`);var S=t(B,2);a(S,()=>l`d`);var j=t(S,2);a(j,()=>l`d`);var y=t(j,2);a(y,()=>l`|0\\rangle`);var x=t(y,2);a(x,()=>l`|d-1\\rangle`);var ne=t(x,2);a(ne,()=>l`d`);var W=t(ne,2);a(W,()=>l`d =
    3`),Q(),s(m);var le=t(m,2),ge=t(o(le),3);a(ge,()=>l`n`);var ce=t(ge,2);a(ce,()=>l`n`);var L=t(ce,2);a(L,()=>l`d^n`);var pe=t(L,2);a(pe,()=>l`2^n`),Q(),s(le);var te=t(le,2);a(te,()=>N`
8^8 \\times 8 \\text{ B} = 2^{24} \\times 8 \\text{ B} = 2^{27} \\text{ B} = 128 \\text{ MB}
`);var Ie=t(te,4);a(Ie,()=>N`
2 \\times \\left( 8^4 \\times 8 \\text{ B} \\right) = 2 \\times 32 \\text{ KB} = 64 \\text{ KB}
`);var Pe=t(Ie,4);a(Pe,()=>N`
\\frac{128 \\text{ MB}}{64 \\text{ KB}} = \\frac{2^{27}}{2^{16}} = 2^{11} = 2048
`);var be=t(Pe,10);{let K=Qe(()=>[u(0,1,"chip A","var(--c3)"),u(2,3,"chip B","var(--c2)")]),We=Qe(()=>[i(0,0,"H"),i(0,1,"H"),i(0,2,"H"),i(0,3,"H"),c(1,0,1),c(1,3,2),c(2,1,2,"var(--c1)"),i(3,0,"U"),i(3,1,"U"),i(3,2,"U"),i(3,3,"U")]);Je(be,{wires:["q₁","q₂","q₃","q₄"],seam:1,get chips(){return e(K)},get gates(){return e(We)},note:"every gate sits on one chip except the orange CX: its control is on chip A, its target on chip B."})}var $e=t(be,4);a($e,()=>N`
I = \\begin{pmatrix}1&0\\\\0&1\\end{pmatrix},\\quad
X = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\quad
Z = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},\\quad
\\mathrm{CX} = \\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&0&1\\\\0&0&1&0\\end{pmatrix}
`);var A=t($e,4);a(A,()=>N`
\\mathrm{CX} = \\tfrac{1}{2}\\left(I \\otimes I + Z \\otimes I + I \\otimes X - Z \\otimes X\\right)
`);var r=t(A,4);a(r,()=>N`
I \\otimes I + Z \\otimes I = \\begin{pmatrix}2&0&0&0\\\\0&2&0&0\\\\0&0&0&0\\\\0&0&0&0\\end{pmatrix},
\\qquad
I \\otimes X - Z \\otimes X = \\begin{pmatrix}0&0&0&0\\\\0&0&0&0\\\\0&0&0&2\\\\0&0&2&0\\end{pmatrix}
`);var D=t(r,2);a(D,()=>N`
\\tfrac12 \\left( \\text{sum} \\right) = \\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&0&1\\\\0&0&1&0\\end{pmatrix} = \\mathrm{CX}
`);var z=t(D,2),Z=t(o(z));a(Z,()=>l`I`);var E=t(Z,2);a(E,()=>l`I`);var O=t(E,2);a(O,()=>l`Z`);var V=t(O,2);a(V,()=>l`I`);var C=t(V,2);a(C,()=>l`I`);var F=t(C,2);a(F,()=>l`X`);var R=t(F,2);a(R,()=>l`Z`);var de=t(R,2);a(de,()=>l`X`);var he=t(de,2);a(he,()=>l`+\\tfrac12, +\\tfrac12, +\\tfrac12,
    -\\tfrac12`),Q(),s(z);var fe=t(z,2),xe=o(fe);{let K=Qe(()=>[c(0,0,1,"var(--c1)")]);Je(xe,{wires:["",""],seam:0,get gates(){return e(K)}})}var De=t(xe,6);{let K=Qe(()=>[i(0,0,"I"),i(0,1,"I")]);Je(De,{wires:["",""],seam:0,get gates(){return e(K)}})}var Ze=t(De,4);{let K=Qe(()=>[i(0,0,"Z"),i(0,1,"I")]);Je(Ze,{wires:["",""],seam:0,get gates(){return e(K)}})}var ke=t(Ze,4);{let K=Qe(()=>[i(0,0,"I"),i(0,1,"X")]);Je(ke,{wires:["",""],seam:0,get gates(){return e(K)}})}var Ke=t(ke,4);{let K=Qe(()=>[i(0,0,"Z"),i(0,1,"X")]);Je(Ke,{wires:["",""],seam:0,get gates(){return e(K)}})}s(fe);var je=t(fe,6),Ge=t(o(je));a(Ge,()=>l`I`);var b=t(Ge,2);a(b,()=>l`X`),Q(),s(je);var P=t(je,2);a(P,()=>N`
\\mathrm{CX} = P_0 \\otimes I + P_1 \\otimes X,
\\qquad
P_0 = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\quad
P_1 = \\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}
`);var U=t(P,2),X=o(U);a(X,()=>l`P_0`);var re=t(X,2);a(re,()=>l`P_1`);var me=t(re,4);a(me,()=>l`\\{I, X, Y, Z\\}`),Q(),s(U);var J=t(U,2);a(J,()=>N`
a_Z = \\frac{\\mathrm{Tr}(P_0 Z)}{\\mathrm{Tr}(Z^2)} = \\frac{1}{2}
\\quad\\Rightarrow\\quad
P_0 = \\tfrac12 I + \\tfrac12 Z,
\\qquad
P_1 = \\tfrac12 I - \\tfrac12 Z
`);var G=t(J,4);a(G,()=>N`
\\begin{aligned}
\\mathrm{CX} &= \\left(\\tfrac12 I + \\tfrac12 Z\\right) \\otimes I + \\left(\\tfrac12 I - \\tfrac12 Z\\right) \\otimes X\\\\
&= \\tfrac12 \\left( I \\otimes I + Z \\otimes I + I \\otimes X - Z \\otimes X \\right)
\\end{aligned}
`);var ae=t(G,2),Ve=t(o(ae));a(Ve,()=>l`d = 2`),Q(),s(ae);var Ne=t(ae,6),He=t(o(Ne));a(He,()=>l`d`);var Le=t(He,2);a(Le,()=>l`X`),Q(),s(Ne);var Ee=t(Ne,2);a(Ee,()=>N`
X = \\sum_{j=0}^{d-1} |\\,(j+1) \\bmod d\\,\\rangle\\langle j|,
\\qquad
X_{(3)} = \\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix}
`);var ie=t(Ee,2),_e=t(o(ie));a(_e,()=>l`r`);var Te=t(_e,2);a(Te,()=>l`r`);var ye=t(Te,2);a(ye,()=>l`d_1`);var At=t(ye,2);a(At,()=>l`d_2`),Q(),s(ie);var rt=t(ie,2);a(rt,()=>N`
\\mathrm{CX}_{d_1, d_2} = \\sum_{r=0}^{d_1 - 1} P_r \\otimes X^r
`);var it=t(rt,2),nt=t(o(it));a(nt,()=>l`d_1`),Q(),s(it);var Oe=t(it,2),Ye=t(o(Oe));a(Ye,()=>l`d`);var _t=t(Ye,2);a(_t,()=>l`d^2 - 1`);var st=t(_t,2);a(st,()=>l`d \\times d`);var ot=t(st,2);a(ot,()=>l`d = 2`),Q(),s(Oe);var gt=t(Oe,2);ta(gt,{title:"The Gell-Mann matrices for d = 3, explicitly",children:(K,We)=>{var Be=Ha(),Se=qe(Be),yt=t(o(Se));a(yt,()=>l`j < k`),Q(),s(Se);var mt=t(Se,2);a(mt,()=>N`
    S_{01} = \\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&0\\end{pmatrix},\\quad
    S_{02} = \\begin{pmatrix}0&0&1\\\\0&0&0\\\\1&0&0\\end{pmatrix},\\quad
    S_{12} = \\begin{pmatrix}0&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix}
    `);var vt=t(mt,4);a(vt,()=>N`
    A_{01} = \\begin{pmatrix}0&-i&0\\\\i&0&0\\\\0&0&0\\end{pmatrix},\\quad
    A_{02} = \\begin{pmatrix}0&0&-i\\\\0&0&0\\\\i&0&0\\end{pmatrix},\\quad
    A_{12} = \\begin{pmatrix}0&0&0\\\\0&0&-i\\\\0&i&0\\end{pmatrix}
    `);var wt=t(vt,4);a(wt,()=>N`
    D_1 = \\begin{pmatrix}1&0&0\\\\0&-1&0\\\\0&0&0\\end{pmatrix},\\quad
    D_2 = \\tfrac{1}{\\sqrt{3}}\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&-2\\end{pmatrix}
    `);var ut=t(wt,2),pt=t(o(ut));a(pt,()=>l`3^2 - 1 = 8`);var ft=t(pt,2);a(ft,()=>l`I`);var qt=t(ft,2);a(qt,()=>l`S_{01} = X`);var ea=t(qt,2);a(ea,()=>l`A_{01} =
        Y`);var _a=t(ea,2);a(_a,()=>l`D_1 = Z`),Q(),s(ut),$(K,Be)},$$slots:{default:!0}});var lt=t(gt,4);a(lt,()=>N`
P_r = \\sum_{A \\in \\mathcal{B}_1} a_A^{(r)} A,
\\qquad
X^r = \\sum_{B \\in \\mathcal{B}_2} b_B^{(r)} B,
\\qquad
a_A^{(r)} = \\frac{\\mathrm{Tr}(P_r A)}{\\mathrm{Tr}(A^2)}
`);var ct=t(lt,2),dt=t(o(ct));a(dt,()=>l`d_1 = 2`);var ht=t(dt,2);a(ht,()=>l`d_2 = 3`);var bt=t(ht,2);a(bt,()=>l`P_0
    = \\tfrac12 I + \\tfrac12 Z`);var M=t(bt,2);a(M,()=>l`P_1 = \\tfrac12 I - \\tfrac12 Z`);var k=t(M,2);a(k,()=>l`S_{01}`);var se=t(k,2);a(se,()=>l`X_{(3)}`),Q(),s(ct);var ee=t(ct,2);a(ee,()=>N`
X_{(3)} S_{01} =
\\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix}
\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&0\\end{pmatrix}
=
\\begin{pmatrix}0&0&0\\\\0&1&0\\\\1&0&0\\end{pmatrix}
\\;\\Rightarrow\\;
b_{S_{01}} = \\frac{\\mathrm{Tr}(X_{(3)} S_{01})}{\\mathrm{Tr}(S_{01}^2)} = \\frac{1}{2}
`);var oe=t(ee,4);a(oe,()=>N`
X_{(3)} = \\tfrac12\\left(S_{01} + S_{02} + S_{12}\\right)
- \\tfrac{i}{2} A_{01} + \\tfrac{i}{2} A_{02} - \\tfrac{i}{2} A_{12}
`);var xt=t(oe,4);a(xt,()=>N`
2 \\times 7 = 14
`);var It=t(xt,2),Gt=t(o(It));a(Gt,()=>l`I`);var Wt=t(Gt,2);a(Wt,()=>l`Z`);var ha=t(Wt,2);a(ha,()=>l`I`),Q(),s(It);var zt=t(It,2);Ia(zt,{});var Pt=t(zt,2),Ft=t(o(Pt));a(Ft,()=>l`10^{-16}`);var Ut=t(Ft,2);a(Ut,()=>l`d_1^2`);var ma=t(Ut,2);a(ma,()=>l`d_2^2`),Q(),s(Pt);var Kt=t(Pt,2);a(Kt,()=>N`
d_1^2 \\times d_2^2 = 4 \\times 9 = 36 \\;\\text{ candidates}
`);var $t=t(Kt,2),Nt=t(o($t),3);a(Nt,()=>l`10^{-2}`);var Qt=t(Nt,2);a(Qt,()=>l`(d_1 d_2)^2 = 10^6`);var Vt=t(Qt,2);a(Vt,()=>l`5 \\times 10^{-2}`);var Ht=t(Vt,2);a(Ht,()=>l`10^9`);var va=t(Ht,2);a(va,()=>l`10^{14}`),Q(),s($t);var Lt=t($t,2);ta(Lt,{title:"The bookkeeping: stitching mixed-radix amplitudes",children:(K,We)=>{var Be=La(),Se=qe(Be),yt=t(o(Se));a(yt,()=>l`|0111\\rangle`);var mt=t(yt,2);a(mt,()=>l`k`);var vt=t(mt,2);a(vt,()=>l`(3, 3, 2, 2)`);var wt=t(vt,2);a(wt,()=>l`k
        = 25`),Q(),s(Se);var ut=t(Se,2);a(ut,()=>N`
    \\begin{aligned}
    25 \\bmod 3 &= 1, &\\quad \\lfloor 25 / 3 \\rfloor &= 8\\\\
    8 \\bmod 3 &= 2, &\\quad \\lfloor 8 / 3 \\rfloor &= 2\\\\
    2 \\bmod 2 &= 0, &\\quad \\lfloor 2 / 2 \\rfloor &= 1\\\\
    1 \\bmod 2 &= 1, &\\quad \\lfloor 1 / 2 \\rfloor &= 0
    \\end{aligned}
    `);var pt=t(ut,2),ft=t(o(pt));a(ft,()=>l`(1, 2, 0, 1)`);var qt=t(ft,2);a(qt,()=>l`k`),Q(),s(pt),$(K,Be)},$$slots:{default:!0}});var Et=t(Lt,10);Ga(Et,{});var jt=t(Et,4),ua=t(o(jt));a(ua,()=>l`d^2`),Q(3),s(jt);var Ct=t(jt,2),Ot=t(o(Ct));a(Ot,()=>l`U`);var pa=t(Ot,2);a(pa,()=>l`d_1, d_2`),Q(),s(Ct);var Yt=t(Ct,2);a(Yt,()=>N`
U = \\sum_{i=1}^{\\min(d_1, d_2)} \\sigma_i \\; U_i^{(d_1)} \\otimes V_i^{(d_2)}
`);var Dt=t(Yt,2),Rt=t(o(Dt));a(Rt,()=>l`\\min(d_1, d_2)`);var fa=t(Rt,2);a(fa,()=>l`U_i, V_i`),Q(),s(Dt);var Jt=t(Dt,2);a(Jt,()=>N`
\\begin{aligned}
\\text{full basis} &: 64 \\text{ KB} \\times 63 \\times 2 \\approx 7.9 \\text{ MB}\\\\
\\text{Schmidt} &: 64 \\text{ KB} \\times 8 \\times 2 = 1 \\text{ MB}
\\end{aligned}
`),ya(t(Jt,4),{list:[["Cutting Quantum Circuits Beyond Qubits (Seksaria, Prabhakar)","https://arxiv.org/abs/2601.02064"],["Simulating Large Quantum Circuits on a Small Quantum Computer (Peng, Harrow, Ozols, Wu; 2020)","https://arxiv.org/abs/1904.00102"],["Constructing a virtual two-qubit gate by sampling single-qubit operations (Mitarai, Fujii; 2021)","https://arxiv.org/abs/1909.07534"],["CutQC: Using Small Quantum Computers for Large Quantum Circuit Evaluations (Tang et al.; 2021)","https://arxiv.org/abs/2012.02333"],["Qudits and High-Dimensional Quantum Computing (Wang, Hu, Sanders, Kais; 2020)","https://www.frontiersin.org/articles/10.3389/fphy.2020.589504/full"]]}),$(d,_),Bt()}export{er as component};
