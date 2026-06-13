import{A as ve,B as A,D as P,E as T,F as me,H as V,I as e,J as ye,L as n,O as la,Q as y,V as $t,X as q,Y as t,at as H,b as Fe,c as o,et as Ke,it as Tt,k as Ie,n as Bt,o as Je,ot as s,p as _a,q as l,rt as Xt,s as et,t as Re,tt as Mt,v as a,x as Xe,y as ze}from"../chunks/Rl5PQ8XL.js";import"../chunks/D3BS_AkK.js";import{a as G,d as ea,i as c,n as ga,o as ba,t as Ge,u as xa}from"../chunks/BXB8e5cd.js";var qe=(h,f)=>[h,f||0],qt=(h,f)=>[h[0]+f[0],h[1]+f[1]],kt=(h,f)=>[h[0]*f[0]-h[1]*f[1],h[0]*f[1]+h[1]*f[0]],tt=h=>Math.hypot(h[0],h[1]),We=(h,f)=>Array.from({length:h},()=>Array.from({length:f},()=>qe(0))),wa=h=>{const f=We(h,h);for(let i=0;i<h;i++)f[i][i]=qe(1);return f};function ta(h){const f=[{name:"I",M:wa(h),norm:h}];for(let i=0;i<h;i++)for(let d=i+1;d<h;d++){const u=We(h,h);u[i][d]=qe(1),u[d][i]=qe(1),f.push({name:"S"+i+d,M:u,norm:2});const _=We(h,h);_[i][d]=qe(0,-1),_[d][i]=qe(0,1),f.push({name:"A"+i+d,M:_,norm:2})}for(let i=1;i<h;i++){const d=We(h,h),u=Math.sqrt(2/(i*(i+1)));for(let _=0;_<i;_++)d[_][_]=qe(u);d[i][i]=qe(-i*u),f.push({name:"D"+i,M:d,norm:2})}return f}function aa(h,f){const i=h.length;let d=qe(0);for(let u=0;u<i;u++)for(let _=0;_<i;_++)d=qt(d,kt(h[u][_],f[_][u]));return d}function ra(h,f){const i=We(h,h);for(let d=0;d<h;d++)i[(d+f)%h][d]=qe(1);return i}function ia(h,f){const i=We(h,h);return i[f][f]=qe(1),i}function na(h,f){const i=h.length,d=f.length,u=We(i*d,i*d);for(let _=0;_<i;_++)for(let m=0;m<i;m++)for(let g=0;g<d;g++)for(let v=0;v<d;v++)u[_*d+g][m*d+v]=kt(h[_][m],f[g][v]);return u}function ca(h,f,i){const d=ta(h),u=ta(f),_=Array.from({length:d.length},()=>Array.from({length:u.length},()=>qe(0)));for(let v=0;v<h;v++){const p=ia(h,v),X=ra(f,v%f),I=d.map(w=>{const x=aa(p,w.M);return[x[0]/w.norm,x[1]/w.norm]}),C=u.map(w=>{const x=aa(X,w.M);return[x[0]/w.norm,x[1]/w.norm]});for(let w=0;w<d.length;w++)if(!(tt(I[w])<1e-13))for(let x=0;x<u.length;x++)_[w][x]=qt(_[w][x],kt(I[w],C[x]))}const m=[];for(let v=0;v<d.length;v++)for(let p=0;p<u.length;p++)tt(_[v][p])>1e-12&&m.push({a:v,b:p,an:d[v].name,bn:u[p].name,c:_[v][p]});let g=null;if(i){const v=h*f,p=We(v,v);for(const I of m){const C=na(d[I.a].M,u[I.b].M);for(let w=0;w<v;w++)for(let x=0;x<v;x++)p[w][x]=qt(p[w][x],kt(I.c,C[w][x]))}const X=We(v,v);for(let I=0;I<h;I++){const C=na(ia(h,I),ra(f,I%f));for(let w=0;w<v;w++)for(let x=0;x<v;x++)X[w][x]=qt(X[w][x],C[w][x])}g=0;for(let I=0;I<v;I++)for(let C=0;C<v;C++)g=Math.max(g,tt([p[I][C][0]-X[I][C][0],p[I][C][1]-X[I][C][1]]))}return{names1:d.map(v=>v.name),names2:u.map(v=>v.name),grid:_,terms:m,err:g}}var oa=["B","KB","MB","GB","TB","PB","EB"];function we(h){let f=0;for(;h>=1024&&f<oa.length-1;)h/=1024,f++;return(h>=100?Math.round(h):Math.round(h*10)/10)+" "+oa[f]}var ya=ve('<text text-anchor="start" fill="#555"> </text>'),qa=ve('<text text-anchor="end" fill="#555"> </text>'),Ma=ve("<!><!>",1),ka=ve('<rect stroke="#ddd" stroke-width="0.5"></rect>'),sa=Ie("<sub> </sub>"),Ta=Ie("<span> <!> <!></span>"),Ba=Ie('<div class="f fw j-ct g5 mt10"></div>'),Xa=Ie(`<div class="hint mt5 svelte-qoev0h">at d₁ = d₂ = 2 the basis is the Pauli set (S₀₁ = X, A₀₁ = Y, D₁ =
            Z), and the four lit cells read exactly ½(I⊗I + Z⊗I + I⊗X − Z⊗X)</div>`),Ia=Ie(`<div class="dx tc mx-a my20 p10 rx10 svelte-qoev0h"><div class="f al-ct j-ct fw g10 mb10"><label>control dim d₁ = <b> </b> <input type="range" min="2" max="5" step="1" class="svelte-qoev0h"/></label> <label>target dim d₂ = <b> </b> <input type="range" min="2" max="5" step="1" class="svelte-qoev0h"/></label></div> <svg font-family="monospace" font-size="10" class="svelte-qoev0h"><!><!></svg> <div class="stat mt5 svelte-qoev0h"><b class="ok svelte-qoev0h"> </b> <b> </b> · rebuild error <b class="ok svelte-qoev0h"> </b></div> <!> <!> <div class="note mt10 svelte-qoev0h">every cell is one possible pair Aᵢ⊗Bᵢ: rows run over the control-side
        basis, columns over the target-side basis. teal = real weight, orange =
        imaginary weight, deeper = larger |cᵢ|. only the lit cells turn into
        circuit runs; the white ones are free.</div></div>`);function Sa(h,f){Tt(f,!1);const i=q(),d=q(),u=q(),_=q(),m=q(),g=q(),v=q(),p=q(),X=q(),I=q(),C=q(),w=q(),x=q();let ie=q(2),z=q(3);const se=(b,j,U)=>{const B=Math.trunc(Number(b));return Number.isFinite(B)?Math.min(U,Math.max(j,B)):j},_e=(b,j)=>{const U=tt(b);if(U<1e-12||j===0)return"#fff";const B=(.18+.82*U/j).toFixed(2);return Math.abs(b[1])>Math.abs(b[0])?"rgba(199, 82, 0, "+B+")":"rgba(0, 153, 119, "+B+")"},le=b=>{const j=Math.round(b[0]*100)/100,U=Math.round(b[1]*100)/100;return U===0?(j<0?"−":"+")+Math.abs(j):(U<0?"−":"+")+Math.abs(U)+"i"},L=b=>b.slice(0,1),ue=b=>b.slice(1);A(()=>e(ie),()=>{y(i,se(e(ie),2,5))}),A(()=>e(z),()=>{y(d,se(e(z),2,5))}),A(()=>(e(i),e(d)),()=>{y(u,ca(e(i),e(d),!0))}),A(()=>e(u),()=>{y(_,e(u).names1.length)}),A(()=>e(u),()=>{y(m,e(u).names2.length)}),A(()=>(e(u),tt),()=>{y(g,e(u).terms.reduce((b,j)=>Math.max(b,tt(j.c)),0))}),A(()=>(e(i),e(d)),()=>{y(v,Math.min(e(i),e(d)))}),A(()=>(e(_),e(m)),()=>{y(p,e(_)>9||e(m)>9?13:24)}),A(()=>(e(_),e(m)),()=>{y(X,e(_)<=9&&e(m)<=9)}),A(()=>e(X),()=>{y(I,e(X)?44:18)}),A(()=>e(X),()=>{y(C,e(X)?40:14)}),A(()=>(e(I),e(m),e(p)),()=>{y(w,e(I)+e(m)*e(p)+14)}),A(()=>(e(C),e(_),e(p)),()=>{y(x,e(C)+e(_)*e(p)+8)}),$t(),Bt();var ee=Ia(),Se=l(ee),Ae=l(Se),ge=t(l(Ae)),je=l(ge,!0);s(ge);var S=t(ge,2);et(S),s(Ae);var r=t(Ae,2),$=t(l(r)),W=l($,!0);s($);var Z=t($,2);et(Z),s(r),s(Se);var O=t(Se,2),E=l(O),N=b=>{var j=Ma(),U=ye(j);ze(U,1,()=>(e(u),n(()=>e(u).names2)),Fe,(ae,he,Y)=>{var F=ya(),te=l(F,!0);s(F),V(()=>{o(F,"x",e(I)+Y*e(p)+e(p)/2),o(F,"y",e(C)-7),o(F,"transform",`rotate(-55 ${e(I)+Y*e(p)+e(p)/2} ${e(C)-7})`),T(te,e(he))}),P(ae,F)});var B=t(U);ze(B,1,()=>(e(u),n(()=>e(u).names1)),Fe,(ae,he,Y)=>{var F=qa(),te=l(F,!0);s(F),V(()=>{o(F,"x",e(I)-5),o(F,"y",e(C)+Y*e(p)+e(p)/2+3),T(te,e(he))}),P(ae,F)}),P(b,j)};Xe(E,b=>{e(X)&&b(N)});var D=t(E);ze(D,1,()=>(e(u),n(()=>e(u).grid)),Fe,(b,j,U)=>{var B=la(),ae=ye(B);ze(ae,1,()=>e(j),Fe,(he,Y,F)=>{var te=ka();V(He=>{o(te,"x",e(I)+F*e(p)),o(te,"y",e(C)+U*e(p)),o(te,"width",e(p)-1),o(te,"height",e(p)-1),o(te,"fill",He)},[()=>(e(Y),e(g),n(()=>_e(e(Y),e(g))))]),P(he,te)}),P(b,B)}),s(O);var Q=t(O,2),R=l(Q),ce=l(R,!0);s(R);var de=t(R),fe=t(de),be=l(fe,!0);s(fe);var Ce=t(fe,2),De=l(Ce,!0);s(Ce),s(Q);var Me=t(Q,2),Qe=b=>{var j=Ba();ze(j,5,()=>(e(u),n(()=>e(u).terms)),Fe,(U,B)=>{var ae=Ta();let he;var Y=l(ae),F=t(Y),te=re=>{var pe=sa(),ke=l(pe,!0);s(pe),V(xe=>T(ke,xe),[()=>(e(B),n(()=>ue(e(B).an)))]),P(re,pe)},He=Mt(()=>(e(B),n(()=>ue(e(B).an))));Xe(F,re=>{e(He)&&re(te)});var Ue=t(F),Ne=t(Ue),Ve=re=>{var pe=sa(),ke=l(pe,!0);s(pe),V(xe=>T(ke,xe),[()=>(e(B),n(()=>ue(e(B).bn)))]),P(re,pe)},Le=Mt(()=>(e(B),n(()=>ue(e(B).bn))));Xe(Ne,re=>{e(Le)&&re(Ve)}),s(ae),V((re,pe,ke,xe)=>{he=_a(ae,1,"chip rx5 svelte-qoev0h",null,he,re),T(Y,`${pe??""}
                    ${ke??""}`),T(Ue,`⊗${xe??""}`)},[()=>({imag:Math.abs(e(B).c[1])>Math.abs(e(B).c[0])}),()=>(e(B),n(()=>le(e(B).c))),()=>(e(B),n(()=>L(e(B).an))),()=>(e(B),n(()=>L(e(B).bn)))]),P(U,ae)}),s(j),P(b,j)};Xe(Me,b=>{e(u),n(()=>e(u).terms.length<=14)&&b(Qe)});var Pe=t(Me,2),$e=b=>{var j=Xa();P(b,j)};Xe(Pe,b=>{e(i)===2&&e(d)===2&&b($e)}),H(2),s(ee),V(b=>{T(je,e(i)),T(W,e(d)),o(O,"width",e(w)),o(O,"height",e(x)),T(ce,(e(u),n(()=>e(u).terms.length))),T(de,` non-zero terms out of ${e(_)*e(m)}
        possible pairs · Schmidt route needs `),T(be,e(v)),T(De,b)},[()=>(e(u),n(()=>e(u).err.toExponential(1)))]),Je(S,()=>e(ie),b=>y(ie,b)),Je(Z,()=>e(z),b=>y(z,b)),P(h,ee),Xt()}var Aa=ve('<line y1="14" y2="98" stroke="#eee"></line><text y="110" text-anchor="middle" fill="#999"> </text>',1),ja=ve('<text y="37" text-anchor="end" fill="#fff"> </text>'),Pa=ve('<text y="37" fill="#555"> </text>'),Ca=ve('<text y="79" text-anchor="end" fill="#fff"> </text>'),Da=ve('<text y="79" fill="#555"> </text>'),$a=Ie('<div class="pg mx-a my20 p10 rx10 svelte-5fdyfn"><div class="f al-ct j-ct fw g10 mb10"><label class="svelte-5fdyfn">chip A: <b> </b> qudits <input type="range" min="1" max="8" step="1" class="svelte-5fdyfn"/></label> <label class="svelte-5fdyfn">each of dim <b> </b> <input type="range" min="2" max="9" step="1" class="svelte-5fdyfn"/></label></div> <div class="f al-ct j-ct fw g10 mb10"><label class="svelte-5fdyfn">chip B: <b> </b> qudits <input type="range" min="1" max="8" step="1" class="svelte-5fdyfn"/></label> <label class="svelte-5fdyfn">each of dim <b> </b> <input type="range" min="2" max="9" step="1" class="svelte-5fdyfn"/></label></div> <div class="tc"><svg width="470" height="126" font-family="monospace" font-size="10" class="svelte-5fdyfn"><!><text y="37" text-anchor="end" fill="#555">uncut</text><rect y="22" height="24" fill="#c75200"></rect><!><text y="79" text-anchor="end" fill="#555">cut</text><rect y="64" height="24" fill="#097"></rect><!></svg> <div class="cap svelte-5fdyfn">state-vector memory, logarithmic scale (ticks ≈ decades)</div></div> <div class="form tc my10 svelte-5fdyfn"><div class="my2"> <sup> </sup> <sup> </sup> × 8 B = <b> </b></div> <div class="my2"> <sup> </sup> <sup> </sup>) × 8 B = <b> </b></div> <div class="my2">memory factor <b class="ok svelte-5fdyfn"> </b></div></div></div>');function Za(h,f){Tt(f,!1);const i=q(),d=q(),u=q(),_=q(),m=q(),g=q(),v=q(),p=q(),X=q(),I=q(),C=q(),w=q();let x=q(8),ie=q(8),z=q(4),se=q(4);const _e=(M,k,ne)=>{const J=Math.trunc(Number(M));return Number.isFinite(J)?Math.min(ne,Math.max(k,J)):k},le=17,L=86,ue=340,ee=M=>Math.max(3,Math.log10(M)/le*ue),Se=M=>M>=10?Math.round(M).toLocaleString("en-US"):String(Math.round(M*10)/10),Ae=[[3,"KB"],[6,"MB"],[9,"GB"],[12,"TB"],[15,"PB"]];A(()=>e(x),()=>{y(i,_e(e(x),2,9))}),A(()=>e(ie),()=>{y(d,_e(e(ie),2,9))}),A(()=>e(z),()=>{y(u,_e(e(z),1,8))}),A(()=>e(se),()=>{y(_,_e(e(se),1,8))}),A(()=>(e(i),e(u)),()=>{y(m,Math.pow(e(i),e(u))*8)}),A(()=>(e(d),e(_)),()=>{y(g,Math.pow(e(d),e(_))*8)}),A(()=>(e(i),e(u),e(d),e(_)),()=>{y(v,Math.pow(e(i),e(u))*Math.pow(e(d),e(_))*8)}),A(()=>(e(m),e(g)),()=>{y(p,e(m)+e(g))}),A(()=>(e(v),e(p)),()=>{y(X,e(v)/e(p))}),A(()=>(e(i),e(d)),()=>{y(I,ca(e(i),e(d),!1).terms.length)}),A(()=>(e(i),e(d)),()=>{y(C,Math.min(e(i),e(d)))}),A(()=>(e(i),e(d)),()=>{y(w,e(i)*Math.pow(e(i)*e(d),2))}),$t(),Bt();var ge=$a(),je=l(ge),S=l(je),r=t(l(S)),$=l(r,!0);s(r);var W=t(r,2);et(W),s(S);var Z=t(S,2),O=t(l(Z)),E=l(O,!0);s(O);var N=t(O,2);et(N),s(Z),s(je);var D=t(je,2),Q=l(D),R=t(l(Q)),ce=l(R,!0);s(R);var de=t(R,2);et(de),s(Q);var fe=t(Q,2),be=t(l(fe)),Ce=l(be,!0);s(be);var De=t(be,2);et(De),s(fe),s(D);var Me=t(D,2),Qe=l(Me),Pe=l(Qe);ze(Pe,1,()=>Ae,Fe,(M,k)=>{var ne=Aa(),J=ye(ne),oe=t(J),bt=l(oe,!0);s(oe),V(()=>{o(J,"x1",(e(k),n(()=>L+e(k)[0]/le*ue))),o(J,"x2",(e(k),n(()=>L+e(k)[0]/le*ue))),o(oe,"x",(e(k),n(()=>L+e(k)[0]/le*ue))),T(bt,(e(k),n(()=>e(k)[1])))}),P(M,ne)});var $e=t(Pe);o($e,"x",L-8);var b=t($e);o(b,"x",L);var j=t(b),U=M=>{var k=ja(),ne=l(k,!0);s(k),V((J,oe)=>{o(k,"x",J),T(ne,oe)},[()=>(e(v),n(()=>L+ee(e(v))-6)),()=>(me(we),e(v),n(()=>we(e(v))))]),P(M,k)},B=Mt(()=>(e(v),n(()=>ee(e(v))>240))),ae=M=>{var k=Pa(),ne=l(k,!0);s(k),V((J,oe)=>{o(k,"x",J),T(ne,oe)},[()=>(e(v),n(()=>L+ee(e(v))+6)),()=>(me(we),e(v),n(()=>we(e(v))))]),P(M,k)};Xe(j,M=>{e(B)?M(U):M(ae,-1)});var he=t(j);o(he,"x",L-8);var Y=t(he);o(Y,"x",L);var F=t(Y),te=M=>{var k=Ca(),ne=l(k,!0);s(k),V((J,oe)=>{o(k,"x",J),T(ne,oe)},[()=>(e(p),n(()=>L+ee(e(p))-6)),()=>(me(we),e(p),n(()=>we(e(p))))]),P(M,k)},He=Mt(()=>(e(p),n(()=>ee(e(p))>240))),Ue=M=>{var k=Da(),ne=l(k,!0);s(k),V((J,oe)=>{o(k,"x",J),T(ne,oe)},[()=>(e(p),n(()=>L+ee(e(p))+6)),()=>(me(we),e(p),n(()=>we(e(p))))]),P(M,k)};Xe(F,M=>{e(He)?M(te):M(Ue,-1)}),s(Qe),H(2),s(Me);var Ne=t(Me,2),Ve=l(Ne),Le=l(Ve),re=t(Le),pe=l(re,!0);s(re);var ke=t(re),xe=t(ke),It=l(xe,!0);s(xe);var at=t(xe,2),rt=l(at,!0);s(at),s(Ve);var it=t(Ve,2),Oe=l(it),Ee=t(Oe),pt=l(Ee,!0);s(Ee);var nt=t(Ee),ot=t(nt),_t=l(ot,!0);s(ot);var st=t(ot,2),lt=l(st,!0);s(st),s(it);var ct=t(it,2),dt=t(l(ct)),gt=l(dt);s(dt),s(ct),s(Ne),s(ge),V((M,k,ne,J,oe)=>{T($,e(u)),T(E,e(i)),T(ce,e(_)),T(Ce,e(d)),o(b,"width",M),o(Y,"width",k),T(Le,`uncut: ${e(i)??""}`),T(pe,e(u)),T(ke,` × ${e(d)??""}`),T(It,e(_)),T(rt,ne),T(Oe,`cut: (${e(i)??""}`),T(pt,e(u)),T(nt,` + ${e(d)??""}`),T(_t,e(_)),T(lt,J),T(gt,`×${oe??""}`)},[()=>(e(v),n(()=>ee(e(v)))),()=>(e(p),n(()=>ee(e(p)))),()=>(me(we),e(v),n(()=>we(e(v)))),()=>(me(we),e(p),n(()=>we(e(p)))),()=>(e(X),n(()=>Se(e(X))))]),Je(W,()=>e(z),M=>y(z,M)),Je(N,()=>e(x),M=>y(x,M)),Je(de,()=>e(se),M=>y(se,M)),Je(De,()=>e(ie),M=>y(ie,M)),P(h,ge),Xt()}var Fa=ve('<rect fill-opacity="0.07" rx="6"></rect><text font-size="10"> </text>',1),za=ve('<text text-anchor="end" fill="#555" font-size="11"> </text>'),Wa=ve('<line stroke="#222" stroke-width="1.4"></line><!>',1),Qa=ve('<line stroke="#c75200" stroke-width="1.4" stroke-dasharray="6 5"></line><text text-anchor="end" fill="#c75200" font-size="10">cut</text>',1),Ua=ve('<line stroke-width="1.8"></line><circle r="4.5"></circle><circle r="9" fill="#fff" stroke-width="1.8"></circle><line stroke-width="1.8"></line><line stroke-width="1.8"></line>',1),Ka=ve('<rect width="28" height="28" fill="#fff" stroke-width="1.6" rx="4"></rect><text text-anchor="middle"> </text>',1),Ga=Ie('<figcaption class="note svelte-1wsfehj"> </figcaption>'),Ha=Ie('<figure class="mx-a my20 tc"><svg font-family="monospace" font-size="12" role="img" class="svelte-1wsfehj"><!><!><!><!></svg> <!></figure>');function Ye(h,f){Tt(f,!1);const i=q(),d=q(),u=q(),_=q(),m=q(),g=q();let v=Re(f,"wires",24,()=>[]),p=Re(f,"gates",24,()=>[]),X=Re(f,"seam",24,()=>-1),I=Re(f,"chips",24,()=>[]),C=Re(f,"note",8,""),w=Re(f,"pad",8,0);const x=38,ie=48,z=12,se=22;A(()=>me(v()),()=>{y(i,v().some(S=>S)?30:0)}),A(()=>(me(p()),me(w())),()=>{y(d,p().reduce((S,r)=>Math.max(S,r.t),0)+1+w())}),A(()=>(e(i),e(d)),()=>{y(u,z+e(i)+e(d)*ie+z)}),A(()=>me(v()),()=>{y(_,se+(v().length-1)*x+se)}),A(()=>{},()=>{y(m,S=>se+S*x)}),A(()=>e(i),()=>{y(g,S=>z+e(i)+(S+.5)*ie)}),$t(),Bt();var _e=Ha(),le=l(_e),L=l(le);ze(L,1,I,Fe,(S,r)=>{var $=Fa(),W=ye($),Z=t(W),O=l(Z,!0);s(Z),V((E,N)=>{o(W,"x",z+e(i)),o(W,"y",E),o(W,"width",e(d)*ie),o(W,"height",(e(r),n(()=>(e(r).to-e(r).from+1)*x-10))),o(W,"fill",(e(r),n(()=>e(r).col))),o(Z,"x",z+e(i)+5),o(Z,"y",N),o(Z,"fill",(e(r),n(()=>e(r).col))),T(O,(e(r),n(()=>e(r).label)))},[()=>(e(m),e(r),n(()=>e(m)(e(r).from)-x/2+5)),()=>(e(m),e(r),n(()=>e(m)(e(r).from)-x/2+17))]),P(S,$)});var ue=t(L);ze(ue,1,v,Fe,(S,r,$)=>{var W=Wa(),Z=ye(W),O=t(Z),E=N=>{var D=za(),Q=l(D,!0);s(D),V(R=>{o(D,"x",z+e(i)-6),o(D,"y",R),T(Q,e(r))},[()=>(e(m),n(()=>e(m)($)+4))]),P(N,D)};Xe(O,N=>{e(r)&&N(E)}),V((N,D)=>{o(Z,"x1",z+e(i)),o(Z,"x2",e(u)-z),o(Z,"y1",N),o(Z,"y2",D)},[()=>(e(m),n(()=>e(m)($))),()=>(e(m),n(()=>e(m)($)))]),P(S,W)});var ee=t(ue),Se=S=>{var r=Qa(),$=ye(r);o($,"x1",z);var W=t($);V((Z,O,E)=>{o($,"x2",e(u)-z),o($,"y1",Z),o($,"y2",O),o(W,"x",e(u)-z),o(W,"y",E)},[()=>(e(m),me(X()),n(()=>(e(m)(X())+e(m)(X()+1))/2)),()=>(e(m),me(X()),n(()=>(e(m)(X())+e(m)(X()+1))/2)),()=>(e(m),me(X()),n(()=>(e(m)(X())+e(m)(X()+1))/2-5))]),P(S,r)};Xe(ee,S=>{me(X()),me(v()),n(()=>X()>=0&&X()<v().length-1)&&S(Se)});var Ae=t(ee);ze(Ae,1,p,Fe,(S,r)=>{var $=la(),W=ye($),Z=E=>{var N=Ua(),D=ye(N),Q=t(D),R=t(Q),ce=t(R),de=t(ce);V((fe,be,Ce,De,Me,Qe,Pe,$e,b,j,U,B,ae,he,Y,F)=>{o(D,"x1",fe),o(D,"x2",be),o(D,"y1",Ce),o(D,"y2",De),o(D,"stroke",(e(r),n(()=>e(r).col||"#222"))),o(Q,"cx",Me),o(Q,"cy",Qe),o(Q,"fill",(e(r),n(()=>e(r).col||"#222"))),o(R,"cx",Pe),o(R,"cy",$e),o(R,"stroke",(e(r),n(()=>e(r).col||"#222"))),o(ce,"x1",b),o(ce,"x2",j),o(ce,"y1",U),o(ce,"y2",B),o(ce,"stroke",(e(r),n(()=>e(r).col||"#222"))),o(de,"x1",ae),o(de,"x2",he),o(de,"y1",Y),o(de,"y2",F),o(de,"stroke",(e(r),n(()=>e(r).col||"#222")))},[()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(m),e(r),n(()=>e(m)(e(r).c))),()=>(e(m),e(r),n(()=>e(m)(e(r).x))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(m),e(r),n(()=>e(m)(e(r).c))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(m),e(r),n(()=>e(m)(e(r).x))),()=>(e(g),e(r),n(()=>e(g)(e(r).t)-6)),()=>(e(g),e(r),n(()=>e(g)(e(r).t)+6)),()=>(e(m),e(r),n(()=>e(m)(e(r).x))),()=>(e(m),e(r),n(()=>e(m)(e(r).x))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(m),e(r),n(()=>e(m)(e(r).x)-6)),()=>(e(m),e(r),n(()=>e(m)(e(r).x)+6))]),P(E,N)},O=E=>{var N=Ka(),D=ye(N),Q=t(D),R=l(Q,!0);s(Q),V((ce,de,fe,be)=>{o(D,"x",ce),o(D,"y",de),o(D,"stroke",(e(r),n(()=>e(r).col||"#222"))),o(Q,"x",fe),o(Q,"y",be),o(Q,"fill",(e(r),n(()=>e(r).col||"#222"))),T(R,(e(r),n(()=>e(r).label)))},[()=>(e(g),e(r),n(()=>e(g)(e(r).t)-14)),()=>(e(m),e(r),n(()=>e(m)(e(r).w)-14)),()=>(e(g),e(r),n(()=>e(g)(e(r).t))),()=>(e(m),e(r),n(()=>e(m)(e(r).w)+4))]),P(E,N)};Xe(W,E=>{e(r),n(()=>e(r).kind==="cx")?E(Z):E(O,-1)}),P(S,$)}),s(le);var ge=t(le,2),je=S=>{var r=Ga(),$=l(r,!0);s(r),V(()=>T($,C())),P(S,r)};Xe(ge,S=>{C()&&S(je)}),s(_e),V(()=>{o(le,"viewBox",`0 0 ${e(u)??""} ${e(_)??""}`),o(le,"width",e(u))}),P(h,_e),Xt()}var Na=Ie(`<p>Three symmetric ones, one per pair of levels <!>:</p> <!> <p>Three antisymmetric ones on the same pairs:</p> <!> <p>And two diagonal ones:</p> <!> <p>That is <!> matrices; with <!> they span everything a 3×3
        operator can be. Each squares to something with trace 2, which is the normalisation
        used in the coefficient formula. Restricting to the top-left 2×2 block recovers
        the Paulis: <!>, <!>, <!>.</p>`,1),Va=Ie(`<p>The one genuinely annoying part of heterogeneous cutting is index
        bookkeeping. A homogeneous register of qubits labels its states with
        binary strings, and position 7 means <!> everywhere. In a mixed
        register the "digits" of a state label run on different bases, and the simulator
        may store fragments in a different particle order than the logical circuit
        (big-endian qudits flipped into little-endian, for one). The fix is mechanical:
        for each flat index <!> of the stitched amplitude vector, peel off digits
        in mixed radix, one base per particle. With bases <!> and <!>:</p> <!> <p>giving digits <!>. A fixed permutation then reorders the
        digits from storage order to logical particle order, the digits are
        joined into a state label, and the squared magnitude of amplitude <!> is filed under that label. Dull, mechanical, and the source of essentially
        all bugs in getting TVD to actually read zero.</p>`,1),La=Ie(`<!> <p>The largest quantum processors today carry a few hundred noisy qubits, and
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
    with a tenfold increase in time.</p> <!>`,1);function Ya(h,f){Tt(f,!1);const i=(K,Ze,Te)=>({t:K,kind:"box",w:Ze,label:Te}),d=(K,Ze,Te,Be)=>({t:K,kind:"cx",c:Ze,x:Te,col:Be}),u=(K,Ze,Te,Be)=>({from:K,to:Ze,label:Te,col:Be});Bt();var _=La(),m=ye(_);ba(m,{title:"Cutting Quantum Circuits Beyond Qubits",sub:"arXiv:2601.02064",desc:"Sawing mixed-dimensional quantum circuits into fragments small enough to run anywhere",date:"5 January 2026"});var g=t(m,6);{let K=Ke(()=>[Ge("d","Levels per particle. A qubit has d = 2, a qutrit d = 3. The two sides of a cut may disagree: d₁ for the control, d₂ for the target"),Ge("n","Number of particles in a register; simulating it costs dⁿ complex numbers"),Ge("r","Control level index, 0 ≤ r < d₁; the cut gate is rebuilt one control level at a time"),Ge("X","Shift gate, the d-level generalisation of NOT: it sends level j to level j+1 and wraps the top level back to 0. Xʳ shifts by r"),Ge("P","Projector Pᵣ = |r⟩⟨r|: keeps the slice of the state where the control reads r, deletes everything else. Not a physical gate, which turns out to be the whole problem"),Ge("G","Generalised Gell-Mann matrices: d²−1 of them plus the identity form a complete basis for d×d operators. For d = 2 they are exactly the Pauli matrices"),Ge("c","Decomposition weights in CX = Σ cᵢ Aᵢ⊗Bᵢ; every non-zero cᵢ costs one extra pair of circuit runs"),Ge("σ","Singular values of the cut gate; the Schmidt route keeps only min(d₁, d₂) of them")]);ga(g,{ignores:"H, R, I, Z, A, B, S, D, U, V, M, T, Q, a, b, j, k, l, m, q, x, y, i, e, t, z, Y, CX, Tr, TVD, min",get list(){return e(K)}})}var v=t(g,4),p=t(l(v));a(p,()=>c`|0\\rangle`);var X=t(p,2);a(X,()=>c`|1\\rangle`);var I=t(X,2);a(I,()=>c`d`);var C=t(I,2);a(C,()=>c`d`);var w=t(C,2);a(w,()=>c`|0\\rangle`);var x=t(w,2);a(x,()=>c`|d-1\\rangle`);var ie=t(x,2);a(ie,()=>c`d`);var z=t(ie,2);a(z,()=>c`d =
    3`),H(),s(v);var se=t(v,2),_e=t(l(se),3);a(_e,()=>c`n`);var le=t(_e,2);a(le,()=>c`n`);var L=t(le,2);a(L,()=>c`d^n`);var ue=t(L,2);a(ue,()=>c`2^n`),H(),s(se);var ee=t(se,2);a(ee,()=>G`
8^8 \\times 8 \\text{ B} = 2^{24} \\times 8 \\text{ B} = 2^{27} \\text{ B} = 128 \\text{ MB}
`);var Se=t(ee,4);a(Se,()=>G`
2 \\times \\left( 8^4 \\times 8 \\text{ B} \\right) = 2 \\times 32 \\text{ KB} = 64 \\text{ KB}
`);var Ae=t(Se,4);a(Ae,()=>G`
\\frac{128 \\text{ MB}}{64 \\text{ KB}} = \\frac{2^{27}}{2^{16}} = 2^{11} = 2048
`);var ge=t(Ae,10);{let K=Ke(()=>[u(0,1,"chip A","#2456c9"),u(2,3,"chip B","#097")]),Ze=Ke(()=>[i(0,0,"H"),i(0,1,"H"),i(0,2,"H"),i(0,3,"H"),d(1,0,1),d(1,3,2),d(2,1,2,"#c75200"),i(3,0,"U"),i(3,1,"U"),i(3,2,"U"),i(3,3,"U")]);Ye(ge,{wires:["q₁","q₂","q₃","q₄"],seam:1,get chips(){return e(K)},get gates(){return e(Ze)},note:"every gate sits on one chip except the orange CX: its control is on chip A, its target on chip B."})}var je=t(ge,4);a(je,()=>G`
I = \\begin{pmatrix}1&0\\\\0&1\\end{pmatrix},\\quad
X = \\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\quad
Z = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},\\quad
\\mathrm{CX} = \\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&0&1\\\\0&0&1&0\\end{pmatrix}
`);var S=t(je,4);a(S,()=>G`
\\mathrm{CX} = \\tfrac{1}{2}\\left(I \\otimes I + Z \\otimes I + I \\otimes X - Z \\otimes X\\right)
`);var r=t(S,4);a(r,()=>G`
I \\otimes I + Z \\otimes I = \\begin{pmatrix}2&0&0&0\\\\0&2&0&0\\\\0&0&0&0\\\\0&0&0&0\\end{pmatrix},
\\qquad
I \\otimes X - Z \\otimes X = \\begin{pmatrix}0&0&0&0\\\\0&0&0&0\\\\0&0&0&2\\\\0&0&2&0\\end{pmatrix}
`);var $=t(r,2);a($,()=>G`
\\tfrac12 \\left( \\text{sum} \\right) = \\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&0&1\\\\0&0&1&0\\end{pmatrix} = \\mathrm{CX}
`);var W=t($,2),Z=t(l(W));a(Z,()=>c`I`);var O=t(Z,2);a(O,()=>c`I`);var E=t(O,2);a(E,()=>c`Z`);var N=t(E,2);a(N,()=>c`I`);var D=t(N,2);a(D,()=>c`I`);var Q=t(D,2);a(Q,()=>c`X`);var R=t(Q,2);a(R,()=>c`Z`);var ce=t(R,2);a(ce,()=>c`X`);var de=t(ce,2);a(de,()=>c`+\\tfrac12, +\\tfrac12, +\\tfrac12,
    -\\tfrac12`),H(),s(W);var fe=t(W,2),be=l(fe);{let K=Ke(()=>[d(0,0,1,"#c75200")]);Ye(be,{wires:["",""],seam:0,get gates(){return e(K)}})}var Ce=t(be,6);{let K=Ke(()=>[i(0,0,"I"),i(0,1,"I")]);Ye(Ce,{wires:["",""],seam:0,get gates(){return e(K)}})}var De=t(Ce,4);{let K=Ke(()=>[i(0,0,"Z"),i(0,1,"I")]);Ye(De,{wires:["",""],seam:0,get gates(){return e(K)}})}var Me=t(De,4);{let K=Ke(()=>[i(0,0,"I"),i(0,1,"X")]);Ye(Me,{wires:["",""],seam:0,get gates(){return e(K)}})}var Qe=t(Me,4);{let K=Ke(()=>[i(0,0,"Z"),i(0,1,"X")]);Ye(Qe,{wires:["",""],seam:0,get gates(){return e(K)}})}s(fe);var Pe=t(fe,6),$e=t(l(Pe));a($e,()=>c`I`);var b=t($e,2);a(b,()=>c`X`),H(),s(Pe);var j=t(Pe,2);a(j,()=>G`
\\mathrm{CX} = P_0 \\otimes I + P_1 \\otimes X,
\\qquad
P_0 = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\quad
P_1 = \\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}
`);var U=t(j,2),B=l(U);a(B,()=>c`P_0`);var ae=t(B,2);a(ae,()=>c`P_1`);var he=t(ae,4);a(he,()=>c`\\{I, X, Y, Z\\}`),H(),s(U);var Y=t(U,2);a(Y,()=>G`
a_Z = \\frac{\\mathrm{Tr}(P_0 Z)}{\\mathrm{Tr}(Z^2)} = \\frac{1}{2}
\\quad\\Rightarrow\\quad
P_0 = \\tfrac12 I + \\tfrac12 Z,
\\qquad
P_1 = \\tfrac12 I - \\tfrac12 Z
`);var F=t(Y,4);a(F,()=>G`
\\begin{aligned}
\\mathrm{CX} &= \\left(\\tfrac12 I + \\tfrac12 Z\\right) \\otimes I + \\left(\\tfrac12 I - \\tfrac12 Z\\right) \\otimes X\\\\
&= \\tfrac12 \\left( I \\otimes I + Z \\otimes I + I \\otimes X - Z \\otimes X \\right)
\\end{aligned}
`);var te=t(F,2),He=t(l(te));a(He,()=>c`d = 2`),H(),s(te);var Ue=t(te,6),Ne=t(l(Ue));a(Ne,()=>c`d`);var Ve=t(Ne,2);a(Ve,()=>c`X`),H(),s(Ue);var Le=t(Ue,2);a(Le,()=>G`
X = \\sum_{j=0}^{d-1} |\\,(j+1) \\bmod d\\,\\rangle\\langle j|,
\\qquad
X_{(3)} = \\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix}
`);var re=t(Le,2),pe=t(l(re));a(pe,()=>c`r`);var ke=t(pe,2);a(ke,()=>c`r`);var xe=t(ke,2);a(xe,()=>c`d_1`);var It=t(xe,2);a(It,()=>c`d_2`),H(),s(re);var at=t(re,2);a(at,()=>G`
\\mathrm{CX}_{d_1, d_2} = \\sum_{r=0}^{d_1 - 1} P_r \\otimes X^r
`);var rt=t(at,2),it=t(l(rt));a(it,()=>c`d_1`),H(),s(rt);var Oe=t(rt,2),Ee=t(l(Oe));a(Ee,()=>c`d`);var pt=t(Ee,2);a(pt,()=>c`d^2 - 1`);var nt=t(pt,2);a(nt,()=>c`d \\times d`);var ot=t(nt,2);a(ot,()=>c`d = 2`),H(),s(Oe);var _t=t(Oe,2);ea(_t,{title:"The Gell-Mann matrices for d = 3, explicitly",children:(K,Ze)=>{var Te=Na(),Be=ye(Te),xt=t(l(Be));a(xt,()=>c`j < k`),H(),s(Be);var ht=t(Be,2);a(ht,()=>G`
    S_{01} = \\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&0\\end{pmatrix},\\quad
    S_{02} = \\begin{pmatrix}0&0&1\\\\0&0&0\\\\1&0&0\\end{pmatrix},\\quad
    S_{12} = \\begin{pmatrix}0&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix}
    `);var mt=t(ht,4);a(mt,()=>G`
    A_{01} = \\begin{pmatrix}0&-i&0\\\\i&0&0\\\\0&0&0\\end{pmatrix},\\quad
    A_{02} = \\begin{pmatrix}0&0&-i\\\\0&0&0\\\\i&0&0\\end{pmatrix},\\quad
    A_{12} = \\begin{pmatrix}0&0&0\\\\0&0&-i\\\\0&i&0\\end{pmatrix}
    `);var wt=t(mt,4);a(wt,()=>G`
    D_1 = \\begin{pmatrix}1&0&0\\\\0&-1&0\\\\0&0&0\\end{pmatrix},\\quad
    D_2 = \\tfrac{1}{\\sqrt{3}}\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&-2\\end{pmatrix}
    `);var vt=t(wt,2),ut=t(l(vt));a(ut,()=>c`3^2 - 1 = 8`);var ft=t(ut,2);a(ft,()=>c`I`);var yt=t(ft,2);a(yt,()=>c`S_{01} = X`);var Jt=t(yt,2);a(Jt,()=>c`A_{01} =
        Y`);var pa=t(Jt,2);a(pa,()=>c`D_1 = Z`),H(),s(vt),P(K,Te)},$$slots:{default:!0}});var st=t(_t,4);a(st,()=>G`
P_r = \\sum_{A \\in \\mathcal{B}_1} a_A^{(r)} A,
\\qquad
X^r = \\sum_{B \\in \\mathcal{B}_2} b_B^{(r)} B,
\\qquad
a_A^{(r)} = \\frac{\\mathrm{Tr}(P_r A)}{\\mathrm{Tr}(A^2)}
`);var lt=t(st,2),ct=t(l(lt));a(ct,()=>c`d_1 = 2`);var dt=t(ct,2);a(dt,()=>c`d_2 = 3`);var gt=t(dt,2);a(gt,()=>c`P_0
    = \\tfrac12 I + \\tfrac12 Z`);var M=t(gt,2);a(M,()=>c`P_1 = \\tfrac12 I - \\tfrac12 Z`);var k=t(M,2);a(k,()=>c`S_{01}`);var ne=t(k,2);a(ne,()=>c`X_{(3)}`),H(),s(lt);var J=t(lt,2);a(J,()=>G`
X_{(3)} S_{01} =
\\begin{pmatrix}0&0&1\\\\1&0&0\\\\0&1&0\\end{pmatrix}
\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&0\\end{pmatrix}
=
\\begin{pmatrix}0&0&0\\\\0&1&0\\\\1&0&0\\end{pmatrix}
\\;\\Rightarrow\\;
b_{S_{01}} = \\frac{\\mathrm{Tr}(X_{(3)} S_{01})}{\\mathrm{Tr}(S_{01}^2)} = \\frac{1}{2}
`);var oe=t(J,4);a(oe,()=>G`
X_{(3)} = \\tfrac12\\left(S_{01} + S_{02} + S_{12}\\right)
- \\tfrac{i}{2} A_{01} + \\tfrac{i}{2} A_{02} - \\tfrac{i}{2} A_{12}
`);var bt=t(oe,4);a(bt,()=>G`
2 \\times 7 = 14
`);var St=t(bt,2),Zt=t(l(St));a(Zt,()=>c`I`);var Ft=t(Zt,2);a(Ft,()=>c`Z`);var da=t(Ft,2);a(da,()=>c`I`),H(),s(St);var zt=t(St,2);Sa(zt,{});var At=t(zt,2),Wt=t(l(At));a(Wt,()=>c`10^{-16}`);var Qt=t(Wt,2);a(Qt,()=>c`d_1^2`);var ha=t(Qt,2);a(ha,()=>c`d_2^2`),H(),s(At);var Ut=t(At,2);a(Ut,()=>G`
d_1^2 \\times d_2^2 = 4 \\times 9 = 36 \\;\\text{ candidates}
`);var jt=t(Ut,2),Kt=t(l(jt),3);a(Kt,()=>c`10^{-2}`);var Gt=t(Kt,2);a(Gt,()=>c`(d_1 d_2)^2 = 10^6`);var Ht=t(Gt,2);a(Ht,()=>c`5 \\times 10^{-2}`);var Nt=t(Ht,2);a(Nt,()=>c`10^9`);var ma=t(Nt,2);a(ma,()=>c`10^{14}`),H(),s(jt);var Vt=t(jt,2);ea(Vt,{title:"The bookkeeping: stitching mixed-radix amplitudes",children:(K,Ze)=>{var Te=Va(),Be=ye(Te),xt=t(l(Be));a(xt,()=>c`|0111\\rangle`);var ht=t(xt,2);a(ht,()=>c`k`);var mt=t(ht,2);a(mt,()=>c`(3, 3, 2, 2)`);var wt=t(mt,2);a(wt,()=>c`k
        = 25`),H(),s(Be);var vt=t(Be,2);a(vt,()=>G`
    \\begin{aligned}
    25 \\bmod 3 &= 1, &\\quad \\lfloor 25 / 3 \\rfloor &= 8\\\\
    8 \\bmod 3 &= 2, &\\quad \\lfloor 8 / 3 \\rfloor &= 2\\\\
    2 \\bmod 2 &= 0, &\\quad \\lfloor 2 / 2 \\rfloor &= 1\\\\
    1 \\bmod 2 &= 1, &\\quad \\lfloor 1 / 2 \\rfloor &= 0
    \\end{aligned}
    `);var ut=t(vt,2),ft=t(l(ut));a(ft,()=>c`(1, 2, 0, 1)`);var yt=t(ft,2);a(yt,()=>c`k`),H(),s(ut),P(K,Te)},$$slots:{default:!0}});var Lt=t(Vt,10);Za(Lt,{});var Pt=t(Lt,4),va=t(l(Pt));a(va,()=>c`d^2`),H(3),s(Pt);var Ct=t(Pt,2),Ot=t(l(Ct));a(Ot,()=>c`U`);var ua=t(Ot,2);a(ua,()=>c`d_1, d_2`),H(),s(Ct);var Et=t(Ct,2);a(Et,()=>G`
U = \\sum_{i=1}^{\\min(d_1, d_2)} \\sigma_i \\; U_i^{(d_1)} \\otimes V_i^{(d_2)}
`);var Dt=t(Et,2),Rt=t(l(Dt));a(Rt,()=>c`\\min(d_1, d_2)`);var fa=t(Rt,2);a(fa,()=>c`U_i, V_i`),H(),s(Dt);var Yt=t(Dt,2);a(Yt,()=>G`
\\begin{aligned}
\\text{full basis} &: 64 \\text{ KB} \\times 63 \\times 2 \\approx 7.9 \\text{ MB}\\\\
\\text{Schmidt} &: 64 \\text{ KB} \\times 8 \\times 2 = 1 \\text{ MB}
\\end{aligned}
`),xa(t(Yt,4),{list:[["Cutting Quantum Circuits Beyond Qubits (Seksaria, Prabhakar)","https://arxiv.org/abs/2601.02064"],["Simulating Large Quantum Circuits on a Small Quantum Computer (Peng, Harrow, Ozols, Wu; 2020)","https://arxiv.org/abs/1904.00102"],["Constructing a virtual two-qubit gate by sampling single-qubit operations (Mitarai, Fujii; 2021)","https://arxiv.org/abs/1909.07534"],["CutQC: Using Small Quantum Computers for Large Quantum Circuit Evaluations (Tang et al.; 2021)","https://arxiv.org/abs/2012.02333"],["Qudits and High-Dimensional Quantum Computing (Wang, Hu, Sanders, Kais; 2020)","https://www.frontiersin.org/articles/10.3389/fphy.2020.589504/full"]]}),P(h,_),Xt()}export{Ya as component};
