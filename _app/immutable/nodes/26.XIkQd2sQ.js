import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{p as Ve,ap as ze,aq as At,a as Ue,g as a,s as e,c as s,a7 as M,ar as L,r as o,u as d,n as p,f as he,aO as Oe,m as Q,at as ar,au as tr,d as rr}from"../chunks/B2m1v2r5.js";import{a as l,f as h,t as Je,e as or,c as $t}from"../chunks/jMVSJ8sL.js";import{h as t}from"../chunks/Dinoy2hm.js";import{i as ea}from"../chunks/DfRH6yYd.js";import{D as sr,d as se,a as r,_ as pe}from"../chunks/DiDFwN8_.js";import{s as Z}from"../chunks/U_RTbSeY.js";import{i as q}from"../chunks/DazIb_FU.js";import{e as we,i as ke}from"../chunks/yeFf2kLj.js";import{r as xa,s as E}from"../chunks/i3WTgkrM.js";import{s as Be}from"../chunks/D3gB4U0r.js";import{e as Ne}from"../chunks/BhLmv89i.js";import{b as wa}from"../chunks/DrOeZab7.js";import{o as nr}from"../chunks/Dg3jdXm7.js";import{A as ir}from"../chunks/Do23EQ4p.js";import{M as lr,R as dr}from"../chunks/DUMmpYWJ.js";var cr=h('<span class="plus svelte-11fkcz8">+</span>'),vr=h("<sup></sup>"),pr=h('<span class="pow ml2 svelte-11fkcz8">x<!></span>'),hr=h('<!> <span class="cell svelte-11fkcz8"><input class="tc svelte-11fkcz8" type="number" min="0" step="1"/> <!></span>',1),ur=h('<span class="plus svelte-11fkcz8">+</span>'),mr=h("<sup></sup>"),fr=h('<span class="pow ml2 svelte-11fkcz8">x<!></span>'),_r=h('<!> <span class="cell svelte-11fkcz8"><input class="tc svelte-11fkcz8" type="number" min="0" step="1"/> <!></span>',1),br=h('<span class="term svelte-11fkcz8">0</span>'),yr=h('<span class="plus svelte-11fkcz8">+</span>'),gr=h("<sup> </sup>"),xr=h("x<!>",1),wr=h("<!> <span> <!></span>",1),kr=h('<span class="term svelte-11fkcz8">0</span>'),qr=h('<span class="plus svelte-11fkcz8">+</span>'),Tr=h('<b class="wrap fw7 svelte-11fkcz8"> </b>'),Er=h("<sup> </sup>"),zr=h("x<!>",1),Mr=h('<!> <span class="term svelte-11fkcz8"><!> <!><!><!></span>',1),Lr=h('<span class="term final fw7 svelte-11fkcz8">0</span>'),Rr=h('<span class="plus svelte-11fkcz8">+</span>'),$r=h("<sup> </sup>"),Ar=h("x<!>",1),Wr=h('<!> <span class="term final fw7 svelte-11fkcz8"> <!></span>',1),Sr=h('<div class="ringmul tc mx-a my20 p10 rx10 svelte-11fkcz8"><div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">a(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">b(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">a·b</span> <span class="plus svelte-11fkcz8">=</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">x<sup></sup> ≡ −1</span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8"></span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="note mt10 svelte-11fkcz8">every product in <b>R<sub></sub></b> </div></div>');function Pr(Ae,We){Ve(We,!1);const A=17,R=4;let W=M([1,2,3,4]),T=M([2,1,0,0]);const ce=u=>(u%A+A)%A,ee=u=>{const n=Math.trunc(Number(u));return Number.isFinite(n)?ce(n):0};let P=M([]),I=M([]),X=M([]);const $=u=>u.map((n,v)=>({v:n,i:v})).filter(n=>n.v!==0);ze(()=>(a(W),a(T)),()=>{const u=a(W).map(ee),n=a(T).map(ee),v=new Array(2*R-1).fill(0);for(let _=0;_<R;_++)for(let y=0;y<R;y++)v[_+y]+=u[_]*n[y];L(P,v),L(X,v.slice(0,R).map((_,y)=>({lo:_,hi:v[y+R]||0,i:y})).filter(_=>_.lo!==0||_.hi!==0)),L(I,v.slice(0,R).map((_,y)=>ce(_-(v[y+R]||0))))}),At(),ea();var x=Sr(),w=s(x),ge=e(s(w),4);we(ge,1,()=>a(W),ke,(u,n,v)=>{var _=hr(),y=he(_);{var re=c=>{var f=cr();l(c,f)};q(y,c=>{v>0&&c(re)})}var O=e(y,2),k=s(O);xa(k),E(k,"max",A-1);var V=e(k,2);{var oe=c=>{var f=pr(),j=e(s(f));{var U=K=>{var F=vr();F.textContent=v,l(K,F)};q(j,K=>{v>1&&K(U)})}o(f),l(c,f)};q(V,c=>{v>0&&c(oe)})}o(O),wa(k,()=>a(W)[v],c=>Oe(W,a(W)[v]=c)),Ne("change",k,()=>Oe(W,a(W)[v]=ee(a(W)[v]))),l(u,_)}),o(w);var ne=e(w,2),ve=e(s(ne),4);we(ve,1,()=>a(T),ke,(u,n,v)=>{var _=_r(),y=he(_);{var re=c=>{var f=ur();l(c,f)};q(y,c=>{v>0&&c(re)})}var O=e(y,2),k=s(O);xa(k),E(k,"max",A-1);var V=e(k,2);{var oe=c=>{var f=fr(),j=e(s(f));{var U=K=>{var F=mr();F.textContent=v,l(K,F)};q(j,K=>{v>1&&K(U)})}o(f),l(c,f)};q(V,c=>{v>0&&c(oe)})}o(O),wa(k,()=>a(T)[v],c=>Oe(T,a(T)[v]=c)),Ne("change",k,()=>Oe(T,a(T)[v]=ee(a(T)[v]))),l(u,_)}),o(ne);var D=e(ne,2),Y=e(s(D),4);{var G=u=>{var n=br();l(u,n)};q(Y,u=>{a(P),d(()=>$(a(P)).length===0)&&u(G)})}var ie=e(Y,2);we(ie,1,()=>(a(P),d(()=>$(a(P)))),ke,(u,n,v)=>{var _=wr(),y=he(_);{var re=f=>{var j=yr();l(f,j)};q(y,f=>{v>0&&f(re)})}var O=e(y,2);let k;var V=s(O,!0),oe=e(V);{var c=f=>{var j=xr(),U=e(he(j));{var K=F=>{var b=gr(),B=s(b,!0);o(b),Q(()=>Z(B,(a(n),d(()=>a(n).i)))),l(F,b)};q(U,F=>{a(n),d(()=>a(n).i>1)&&F(K)})}l(f,j)};q(oe,f=>{a(n),d(()=>a(n).i>0)&&f(c)})}o(O),Q(()=>{k=Be(O,1,"term svelte-11fkcz8",null,k,{wrap:a(n).i>=R,fw7:a(n).i>=R}),Z(V,(a(n),d(()=>a(n).v)))}),l(u,_)}),o(D);var J=e(D,2),C=s(J),ae=e(s(C));ae.textContent="4",p(),o(C);var H=e(C,4);{var le=u=>{var n=kr();l(u,n)};q(H,u=>{a(X),d(()=>a(X).length===0)&&u(le)})}var ue=e(H,2);we(ue,1,()=>a(X),ke,(u,n,v)=>{var _=Mr(),y=he(_);{var re=b=>{var B=qr();l(b,B)};q(y,b=>{v>0&&b(re)})}var O=e(y,2),k=s(O);{var V=b=>{var B=Je("(");l(b,B)};q(k,b=>{a(n),d(()=>a(n).hi&&a(n).i>0)&&b(V)})}var oe=e(k,1,!0),c=e(oe);{var f=b=>{var B=Tr(),$e=s(B);o(B),Q(()=>Z($e,`−${a(n),d(()=>a(n).hi)??""}`)),l(b,B)};q(c,b=>{a(n),d(()=>a(n).hi)&&b(f)})}var j=e(c);{var U=b=>{var B=Je(")");l(b,B)};q(j,b=>{a(n),d(()=>a(n).hi&&a(n).i>0)&&b(U)})}var K=e(j);{var F=b=>{var B=zr(),$e=e(he(B));{var Ce=me=>{var Te=Er(),Ke=s(Te,!0);o(Te),Q(()=>Z(Ke,(a(n),d(()=>a(n).i)))),l(me,Te)};q($e,me=>{a(n),d(()=>a(n).i>1)&&me(Ce)})}l(b,B)};q(K,b=>{a(n),d(()=>a(n).i>0)&&b(F)})}o(O),Q(()=>Z(oe,(a(n),d(()=>a(n).lo)))),l(u,_)}),o(J);var te=e(J,2),fe=s(te);fe.textContent="mod 17";var qe=e(fe,4);{var Me=u=>{var n=Lr();l(u,n)};q(qe,u=>{a(I),d(()=>$(a(I)).length===0)&&u(Me)})}var S=e(qe,2);we(S,1,()=>(a(I),d(()=>$(a(I)))),ke,(u,n,v)=>{var _=Wr(),y=he(_);{var re=c=>{var f=Rr();l(c,f)};q(y,c=>{v>0&&c(re)})}var O=e(y,2),k=s(O,!0),V=e(k);{var oe=c=>{var f=Ar(),j=e(he(f));{var U=K=>{var F=$r(),b=s(F,!0);o(F),Q(()=>Z(b,(a(n),d(()=>a(n).i)))),l(K,F)};q(j,K=>{a(n),d(()=>a(n).i>1)&&K(U)})}l(c,f)};q(V,c=>{a(n),d(()=>a(n).i>0)&&c(oe)})}o(O),Q(()=>Z(k,(a(n),d(()=>a(n).v)))),l(u,_)}),o(te);var Se=e(te,2),_e=e(s(Se)),Le=e(s(_e));Le.textContent="17",o(_e);var Re=e(_e);Re.nodeValue=` with n = 4: long
        multiplication, the tinted overflow terms fold back with a sign flip,
        coefficients wrap mod 17`,o(Se),o(x),l(Ae,x),Ue()}var jr=h('<button type="button"> </button>'),Cr=h('<span class="pcell tr svelte-1x9pnmt"> </span>'),Kr=h('<div class="prow f al-ct my2 svelte-1x9pnmt"><span> </span> <span class="pname tr svelte-1x9pnmt"> </span> <!></div>'),Fr=or('<rect width="26"></rect><text y="206" text-anchor="middle"> </text>',1),Ir=h(`<div class="hint tc mt5 svelte-1x9pnmt">no noise at all: decryption is perfect, but b = a·s exactly, so Eve
            computes b·a<sup>−1</sup> and has the secret key</div>`),Or=h(`<div class="pg mx-a my20 p10 rx10 svelte-1x9pnmt"><div class="f al-ct j-ct fw g10 mb10"><label>error size η = <b> </b> <input type="range" min="0" max="6" class="svelte-1x9pnmt"/></label> <button type="button" class="ptr rx5 svelte-1x9pnmt">new keys</button> <button type="button" class="ptr rx5 svelte-1x9pnmt">re-encrypt</button></div> <div class="tc my5"><span class="cap svelte-1x9pnmt">message (click bits to flip):</span> <!></div> <div class="polys svelte-1x9pnmt"></div> <div class="tc"><svg width="430" height="216" font-family="monospace" font-size="10" class="svelte-1x9pnmt"><rect x="44" fill="rgba(34, 170, 255, 0.10)"></rect><line x1="44" stroke="#999"></line><line x1="44" stroke="#e67" stroke-dasharray="4 3"></line><line x1="44" stroke="#e67" stroke-dasharray="4 3"></line><text x="40" text-anchor="end">+48</text><text x="40" text-anchor="end" fill="#e67">+q/4</text><text x="40" text-anchor="end">0</text><text x="40" text-anchor="end" fill="#e67">−q/4</text><text x="40" text-anchor="end">−48</text><!></svg> <div class="cap svelte-1x9pnmt">coefficients of v − u·s (centered mod 97), decoded bits below</div></div> <div><!></div> <!> <div class="note tc mt10 svelte-1x9pnmt">Eve only ever sees a, b, u, v. Each is indistinguishable from uniform
        random numbers mod 97; the secret s and all the error polynomials never
        leave home.</div></div>`);function Br(Ae,We){Ve(We,!1);const A=M(),R=M(),W=M(),T=M(),ce=M(),ee=M(),P=8,I=97,X=48,$=I/4;let x=M(1),w=M([1,0,1,1,0,0,1,0]),ge=M(0),ne=M(0);const ve=i=>(i%I+I)%I,D=i=>ve(i)>I/2?ve(i)-I:ve(i),Y=(i,m)=>i+Math.floor(Math.random()*(m-i+1)),G=i=>Array.from({length:P},()=>Y(-i,i)),ie=()=>Array.from({length:P},()=>Y(0,I-1));function J(i,m){const g=new Array(P).fill(0);for(let z=0;z<P;z++)for(let N=0;N<P;N++)g[(z+N)%P]+=(z+N<P?1:-1)*i[z]*m[N];return g.map(ve)}const C=(i,m)=>i.map((g,z)=>ve(g+m[z])),ae=(i,m)=>i.map((g,z)=>ve(g-m[z]));let H=M([]),le=M([]),ue=M([]),te=M([]),fe=M([]),qe=M([]),Me=M([]);const S=i=>100-i*(88/X),Se=i=>48+i*46;ze(()=>(a(ge),a(x),a(H),a(le),a(ue)),()=>{a(ge),a(x),L(H,ie()),L(le,G(Math.max(1,+a(x)))),L(ue,G(+a(x))),L(te,C(J(a(H),a(le)),a(ue)))}),ze(()=>(a(ne),a(te),a(x)),()=>{a(ne),a(te),L(fe,G(Math.max(1,+a(x)))),L(qe,G(+a(x))),L(Me,G(+a(x)))}),ze(()=>(a(H),a(fe),a(qe)),()=>{L(A,C(J(a(H),a(fe)),a(qe)))}),ze(()=>(a(te),a(fe),a(Me),a(w)),()=>{L(R,C(C(J(a(te),a(fe)),a(Me)),a(w).map(i=>i*X)))}),ze(()=>(a(R),a(A),a(le)),()=>{L(W,ae(a(R),J(a(A),a(le))).map(D))}),ze(()=>a(W),()=>{L(T,a(W).map(i=>Math.abs(i)>$?1:0))}),ze(()=>(a(T),a(w)),()=>{L(ce,a(T).filter((i,m)=>i!==a(w)[m]).length)}),ze(()=>(a(W),a(w)),()=>{L(ee,Math.max(...a(W).map((i,m)=>Math.abs(D(i-a(w)[m]*X)))))}),At(),ea();var _e=Or(),Le=s(_e),Re=s(Le),u=e(s(Re)),n=s(u,!0);o(u);var v=e(u,2);xa(v),o(Re);var _=e(Re,2),y=e(_,2);o(Le);var re=e(Le,2),O=e(s(re),2);we(O,1,()=>a(w),ke,(i,m,g)=>{var z=jr();let N;var de=s(z,!0);o(z),Q(()=>{N=Be(z,1,"bit ptr rx5 mx2 svelte-1x9pnmt",null,N,{on:a(m)===1}),Z(de,a(m))}),Ne("click",z,()=>Oe(w,a(w)[g]=1-a(w)[g])),l(i,z)}),o(re);var k=e(re,2);we(k,5,()=>[["pub","public","a",a(H)],["pub","public","b",a(te)],["sec","secret","s",a(le)],["ct","sent","u",a(A)],["ct","sent","v",a(R)]],ke,(i,m)=>{var g=ar(()=>tr(a(m),4));let z=()=>a(g)[0],N=()=>a(g)[1],de=()=>a(g)[2],Ee=()=>a(g)[3];var xe=Kr(),be=s(xe),Pe=s(be,!0);o(be);var ye=e(be,2),Fe=s(ye);o(ye);var Ie=e(ye,2);we(Ie,1,Ee,ke,(Qe,Xe,aa,ka)=>{var je=Cr(),Ge=s(je,!0);o(je),Q(()=>Z(Ge,a(Xe))),l(Qe,je)}),o(xe),Q(()=>{Be(be,1,`tag ${z()??""} d-ib tc`,"svelte-1x9pnmt"),Z(Pe,N()),Z(Fe,`${de()??""} =`)}),l(i,xe)}),o(k);var V=e(k,2),oe=s(V),c=s(oe);E(c,"width",P*46-16);var f=e(c);E(f,"x2",44+P*46-16);var j=e(f);E(j,"x2",44+P*46-16);var U=e(j);E(U,"x2",44+P*46-16);var K=e(U),F=e(K),b=e(F),B=e(b),$e=e(B),Ce=e($e);we(Ce,1,()=>a(W),ke,(i,m,g)=>{var z=Fr(),N=he(z),de=e(N),Ee=s(de,!0);o(de),Q((xe,be,Pe,ye)=>{E(N,"x",xe),E(N,"y",be),E(N,"height",Pe),E(N,"fill",(a(T),a(w),d(()=>a(T)[g]===a(w)[g]?"#2af":"#e44"))),E(de,"x",ye),E(de,"fill",(a(T),a(w),d(()=>a(T)[g]===a(w)[g]?"#555":"#e44"))),E(de,"font-weight",(a(T),a(w),d(()=>a(T)[g]===a(w)[g]?"normal":"bold"))),Z(Ee,(a(T),d(()=>a(T)[g])))},[()=>d(()=>Se(g)),()=>(a(m),d(()=>Math.min(S(0),S(a(m))))),()=>(a(m),d(()=>Math.abs(S(a(m))-S(0))||1)),()=>d(()=>Se(g)+13)]),l(i,z)}),o(oe),p(2),o(V);var me=e(V,2);let Te;var Ke=s(me);{var De=i=>{var m=Je();Q(()=>Z(m,`✓ all 8 bits decoded correctly · largest noise |w| = ${a(ee)??""} of the
            24.25 allowed`)),l(i,m)},Ye=i=>{var m=Je();Q(()=>Z(m,`✗ ${a(ce)??""} of 8 bits flipped · largest noise |w| = ${a(ee)??""} blew past
            the limit of 24.25`)),l(i,m)};q(Ke,i=>{a(ce)===0?i(De):i(Ye,!1)})}o(me);var He=e(me,2);{var Ze=i=>{var m=Ir();l(i,m)};q(He,i=>{+a(x)==0&&i(Ze)})}p(2),o(_e),Q((i,m,g,z,N,de,Ee,xe,be,Pe,ye,Fe,Ie)=>{Z(n,a(x)),E(c,"y",i),E(c,"height",m),E(f,"y1",g),E(f,"y2",z),E(j,"y1",N),E(j,"y2",de),E(U,"y1",Ee),E(U,"y2",xe),E(K,"y",be),E(F,"y",Pe),E(b,"y",ye),E(B,"y",Fe),E($e,"y",Ie),Te=Be(me,1,"verdict tc mt10 svelte-1x9pnmt",null,Te,{bad:a(ce)>0})},[()=>d(()=>S($)),()=>d(()=>S(-$)-S($)),()=>d(()=>S(0)),()=>d(()=>S(0)),()=>d(()=>S($)),()=>d(()=>S($)),()=>d(()=>S(-$)),()=>d(()=>S(-$)),()=>d(()=>S(X)+3),()=>d(()=>S($)+3),()=>d(()=>S(0)+3),()=>d(()=>S(-$)+3),()=>d(()=>S(-X)+3)]),wa(v,()=>a(x),i=>L(x,i)),Ne("click",_,()=>L(ge,a(ge)+1)),Ne("click",y,()=>L(ne,a(ne)+1)),l(Ae,_e),Ue()}var Nr=h(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is ML-KEM,
                the lattice scheme this article builds, hybridised with the
                classical elliptic-curve exchange.</p>`),Dr=h(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is
                classical only, no ML-KEM. A recording of that handshake could
                be unwrapped by a future quantum computer.</p>`),Yr=h(`<p class="svelte-kugc17">The request to the test server did not make it (an ad blocker, a
                strict privacy mode, or being offline will do that), so there is
                nothing to report.</p>`),Hr=h('<div><span class="k d-ib svelte-kugc17"> </span> </div>'),Zr=h('<div class="trace my10 py5 px10 rx5 svelte-kugc17"></div>'),Qr=h(`<!> <!> <p class="note svelte-kugc17">via pq.cloudflareresearch.com/cdn-cgi/trace, which echoes back the
            key exchange it negotiated with you. This tests your browser, not
            this site.</p>`,1),Xr=h("<div><!></div>");function Gr(Ae,We){Ve(We,!1);let A=M("checking"),R=M(""),W=M([]);const T={checking:"… checking whether your browser uses post-quantum crypto",pq:"✓ your browser is using post-quantum crypto",classical:"✗ your browser is not using post-quantum crypto",unknown:"could not check post-quantum support"},ce=["kex","tls","http","h","ip","colo","loc","uag"];nr(async()=>{try{const X=await(await fetch("https://pq.cloudflareresearch.com/cdn-cgi/trace")).text();L(W,(X.match(/[ -~]+/g)||[]).map(x=>{const w=x.indexOf("=");return[x.slice(0,w),x.slice(w+1)]}).filter(x=>ce.includes(x[0])));const $=X.match(/kex=([A-Za-z0-9_-]+)/);L(R,$?$[1]:""),a(R)?a(R).includes("MLKEM")||a(R).includes("Kyber")?L(A,"pq"):L(A,"classical"):L(A,"unknown")}catch{L(A,"unknown")}}),ea();var ee=Xr(),P=s(ee);ir(P,{get title(){return T[a(A)]},children:(I,X)=>{var $=Qr(),x=he($);{var w=D=>{var Y=Nr(),G=e(s(Y)),ie=s(G,!0);o(G),p(),o(Y),Q(()=>Z(ie,a(R))),l(D,Y)},ge=D=>{var Y=$t(),G=he(Y);{var ie=C=>{var ae=Dr(),H=e(s(ae)),le=s(H,!0);o(H),p(),o(ae),Q(()=>Z(le,a(R))),l(C,ae)},J=C=>{var ae=$t(),H=he(ae);{var le=ue=>{var te=Yr();l(ue,te)};q(H,ue=>{a(A)==="unknown"&&ue(le)},!0)}l(C,ae)};q(G,C=>{a(A)==="classical"?C(ie):C(J,!1)},!0)}l(D,Y)};q(x,D=>{a(A)==="pq"?D(w):D(ge,!1)})}var ne=e(x,2);{var ve=D=>{var Y=Zr();we(Y,5,()=>a(W),ke,(G,ie)=>{var J=Hr(),C=s(J),ae=s(C,!0);o(C);var H=e(C,1,!0);o(J),Q(()=>{Z(ae,a(ie)[0]),Z(H,a(ie)[1])}),l(G,J)}),o(Y),l(D,Y)};q(ne,D=>{a(W).length&&D(ve)})}p(2),l(I,$)},$$slots:{default:!0}}),o(ee),Q(()=>Be(ee,1,`pqc ${a(A)==="pq"?"green":"yellow"}`,"svelte-kugc17")),l(Ae,ee),Ue()}var Jr=h(`<!> <!> Cast: <ul><li>Alice (wants to receive secrets)</li> <li>Bob (wants to send her one)</li> <li>Eve (reads everything in transit)</li> <li>a large quantum computer (arrival date unknown)</li></ul> <!> <p>Nearly every secret on the internet is guarded by one of two locks: RSA,
    which bets that splitting a 2000-bit number into its two prime factors is
    hopeless, and elliptic curves, which make a similar bet about reversing a
    certain curve arithmetic. In 1994 Peter Shor showed that a sufficiently
    large quantum computer wins both bets in an afternoon. No such machine
    exists yet, but traffic recorded today can be decrypted whenever one shows
    up ("harvest now, decrypt later"), so the locks have to be replaced before
    the machine arrives, not after.</p> <p>NIST ran an eight-year competition for quantum-resistant replacements, and
    in 2024 the winner for encryption, ML-KEM (formerly Kyber), became a
    standard. Your browser very likely already uses it on every TLS connection.
    The mathematics under its hood is a problem called:</p> <h3>Ring Learning with Errors</h3> <p>Everything below happens on a clock. Working "mod <!>" means we count on
    a dial with <!> positions, keeping only the remainder after dividing by <!>.
    Take mod 17: <!>, and 20 divided by 17 leaves remainder 3, so
    we write <!>. Likewise <!>, so <!>. One quirk: a clock has no notion of big
    or small. 16 is a neighbour of 0, one step behind it, so <!>: both names point at the same position on the dial. That means
    "approximately correct" loses its meaning the moment numbers wrap around; a
    value that looks enormous may be one step away from zero.</p> <p>Solving exact linear equations is easy. Gaussian elimination, the
    substitute-and-cancel, works just as well mod <!>, because adding,
    subtracting and multiplying all behave themselves on the clock. If I hold a
    secret pair <!> and hand you exact equations</p> <!> <p>you recover the secret in two lines of working:</p> <!> <p>The two arrows are clock division: <!> and <!>, and mod a prime every such division lands on exactly one
    answer. Two unknowns, two equations, done. The same process can be extended
    with very little modification to thousands of unknowns.</p> <p>Now I do something petty: before publishing each equation, I flip a coin and
    add <!> or <!> to its right-hand side. You receive</p> <!> <p>Solve these as if they were exact and you get <!>.
    The truth was <!>. The reason for such a big error is that the
    process of multiplication amplifies the noise, so that the error in the
    solution is much larger than the error in the data. So in the previous
    equation when we doubled the first equation, we also doubled the error, so
    the resulting equation was off by 2. The subtraction in the next step added
    the second equation's error to it too so what was once exact, is now already
    off by at least '3'. When we then multiply in the next step by <!> the <!> turns into <!>. We can see how as this process scales
    up, the errors will scale up disproportionately.</p> <p>There is a secondary issue here, one may ask why can we not 'fit' a solution
    to the problem as opposed to solve it. The fundamental assumption behind
    least squares regression (say) is that it assumes that 16 is far away from
    0, so the penalty for a solution that is off by 16 is much larger than a
    solution that is off by 1. This is not true on a clock. The error of 16 is
    the same as the error of 1, since both of them are only 1 away from 0.</p> <p>This is the <i>Learning With Errors</i> problem, introduced by Oded Regev in
    2005: given many noisy equations <!> in a secret vector <!>, find the secret. Here <!> is the list
    of secret numbers, each <!> is a list of coefficients, and <!> gives us something
    like <!> but with hundreds of terms. With enough equations the
    secret is uniquely determined, so the information is all there; what is missing
    is any efficient algorithm to extract it. The best known attacks, classical <i>and</i> quantum take exponential time. And Regev proved something stronger
    and stranger than that.</p> <h3>From numbers to polynomials</h3> <p>Plain LWE has a logistics problem. One equation costs <!> published coefficients,
    hardness needs <!> in the hundreds, and pinning down <!> unknowns needs <!> equations: <!> numbers in total, megabytes of public
    key. The fix is to publish <!> numbers once and let an arithmetic rule churn
    out <!> equations from them. That rule is polynomial arithmetic.</p> <p>We work with polynomials of degree less than <!>, with coefficients mod <!>.
    A polynomial here is a tray of <!> clock numbers, and <!> is never given
    a value, we actually care only about its power/exponent. Adding two of them is
    coefficient-wise clock addition. Multiplying is ordinary long multiplication
    followed by two cleanup rules: every coefficient is reduced mod <!>, and every power that reaches <!> is folded back using the rule</p> <!> <p>which is equivalent to taking a remainder after dividing by <!> . A power like <!> becomes <!>: it wraps around to the low
    end and picks up a minus sign on the way. Consider toy numbers <!>, <!>, with the polynomials <!> and <!>.</p> <!> <p>That single fold, <!> here, is the clock being applied to polynomials
    which will eventually also keep the problem from growing too big. Play with it
    below; the tinted terms are the ones that overflow past <!> and fold back
    with a sign flip.</p> <blockquote>Cryptography is about finding algorithms which are very very easy to compute
    in the forward direction but very very hard to reverse. We call such
    algorithms <i>one way functions</i></blockquote> <!> <p>This structure, written <!> with <!> a power
    of two and <!> prime, is called a polynomial <b>ring</b>, and the
    wrap-with-sign-flip multiplication is called <i>negacyclic</i>.</p> <blockquote>Reading the notation left to right: <!> is the clock numbers, <!> is polynomials in <!> with clock coefficients, and dividing
    by <!> declares that <!> counts as zero. Rearranged, that
    is the fold rule <!>.</blockquote> <p>The choice has two advantages. First, one ring multiplication mixes every
    coefficient of one polynomial with every coefficient of the other, so a
    single ring equation packs <!> scalar equations into <!> published numbers
    instead of <!>. Second, negacyclic multiplication is a convolution, and
    FFT-style tricks compute it in <!> steps instead of <!>.</p> <h3>The RLWE problem</h3> <p>We can now play the same learning with errors game, but inside a ring. Alice
    picks a secret polynomial <!> whose coefficients are <i>small</i>, say from <!>. A sample is produced by drawing a random polynomial <!> (each of its <!> coefficients rolled fresh and uniformly from <!> to <!>), a
    fresh small error polynomial <!> playing the part of the coin-flip lies, and
    publishing the pair</p> <!> <p>In the toy ring of the widget above (<!>, <!>), one full
    sample:</p> <!> <p>Eve receives <!>, and as many more such pairs as she cares to
    collect. Recovering <!> from them is the RLWE problem, and nobody knows how
    to do it efficiently. Encryption will rely on something even more basic: <!> cannot be told apart from a uniformly random polynomial at all. Everything Eve
    intercepts in the scheme below is built out of RLWE samples, so everything she
    intercepts looks like static.</p> <p>To appreciate what the noise buys, delete it. If <!> exactly, then <!>, one division in the ring (a random <!> is invertible with high probability), and the secret falls out instantly. The
    entire security rests on those small errors. Lyubashevsky, Peikert and Regev
    proved that solving RLWE on average is as hard as worst-case short-vector problems
    on ideal lattices. After fifteen years of cryptanalysis, quantum algorithms included,
    nothing better than exponential attacks is known.</p> <div class="m20"><hr/></div> <h3>An actual cryptosystem</h3> <p>Hardness alone does not encrypt anything; we need the LPR scheme, named
    after the same three initials, which turns RLWE into public-key encryption
    in three short moves. The approach is as such: Alice's public key will be
    one noisy equation, Bob's ciphertext will be two noisy equations built on
    top of it, and decryption will be the one subtraction in which all the large
    random terms annihilate each other, leaving only the message plus a puddle
    of small noise. From here on, "small" always means coefficients in <!> for some tiny <!>.</p> <p><b>Key generation.</b> Alice draws a uniform random <!>, a small secret <!>,
    and a small error <!>, then publishes the RLWE sample as her public key
    and keeps <!>:</p> <!> <p>The sample worked out in the last section is exactly such a key, so we keep
    those numbers and follow one message all the way through:</p> <!> <p><b>Encryption.</b> Bob wants to send <!> bits, so he writes them as a polynomial <!> with coefficients 0 or 1, then scales it by <!>: each 0 stays at 0, each 1 moves to the point diametrically
    opposite on the clock, as far from 0 as it can possibly get. That distance
    is deliberate. Noise will shove every coefficient around, and the two bit
    values must remain distinguishable afterwards, so they start at the two
    points of maximum separation. He draws his own small <!>, <!>, <!> and sends the pair</p> <!> <p>Say Bob's bits are <!>, so <!> and <!> scales it to <!>. He draws <!>, <!>, <!>, and
    folds and reduces mod 17 as always:</p> <!> <blockquote>Note: what Eve sees. <!> is an RLWE sample, and <!> is an RLWE sample with
    the message added, so all of it looks like uniform static to her.</blockquote> <p><b>Decryption.</b> Alice computes <!> and watches almost everything
    cancel:</p> <!> <p>The huge term <!> appears once with each sign and vanishes;
    only the message and a residue <!> of small-times-small products survive.
    Each coefficient of the result is <!>, so Alice just rounds: a coefficient closer to 0 (in clock
    distance) decodes to 0, one closer to <!> decodes to 1. The rounding is
    exact when every <!>.</p> <p>On the running example Alice computes <!> and subtracts:</p> <!> <p>Every coefficient of <!> has size at most 3, inside the <!> boundary, so the rounding is clean: 7, 5 and <!> all sit farther than
    4.25 from 0, so they decode to 1, while <!> sits inside and decodes to 0.
    Out come the bits <!> Bob sent.</p> <p>The noise scale here is the parameter we have to be careful to tune. The
    coefficients of <!> are sums of <!> products of numbers of size <!>, so the
    noise grows like <!> in the worst case. Make <!> too small and
    RLWE gets easier to attack; make it too big and Alice starts misreading her own
    mail. Real parameter sets live in the comfortable middle, with failure odds around
    one in <!>.</p> <h3>Seeing is believing</h3> <p>Below is the full LPR scheme running live with <!>, <!>, so <!> and the rounding boundary sits at <!>. The chart shows the eight coefficients of <!>,
    the quantity Alice actually looks at. Bars inside the shaded band decode to
    0, bars outside it decode to 1, and a bar turns red when its bit came out
    wrong.</p> <!> <p>Some things worth trying:</p> <ul><li>Set <!>. Decryption becomes perfect, every bar sits exactly on
        0 or 48, and the scheme is broken: <!> with no noise, so Eve
        divides and reads your mail.</li> <li>At <!> or 2, the bars jitter around their targets but stay on the
        right side of the boundary. This is the regime real schemes operate in: noisy
        enough to be hard, quiet enough to decrypt.</li> <li>Crank <!> up and re-encrypt a few times. Watch bars drift across the
        dashed line and bits flip red. The noise that protects the secret is now
        eating the message.</li></ul> <div class="m20"><hr/></div> <h3>From toy to the real thing</h3> <p>Scale the toy up and you have arrived at the standard. ML-KEM works in a
    similar manner with <!> and <!>, errors of size <!>, and one extra trick: instead of single ring elements it uses small
    vectors and matrices <i>of</i> ring elements (two to four of them), a
    variant called Module-LWE that lets one ring design serve three security
    levels. The ML-KEM-768 level decrypts wrongly with probability around <!>,
    which is to say never. Since 2024 Chrome and Firefox have shipped it
    hybridised with the old elliptic-curve exchange under the name
    X25519MLKEM768, so both locks would have to fail for the session to fall. No
    need to take that on faith, either: the coloured box at the very top of this
    page should indicate if your browser uses Post Quantum (Allegedly)
    Cryptography.</p> <!>`,1);function fo(Ae,We){Ve(We,!1),ea();var A=Jr(),R=he(A);lr(R,{title:"Ring Learning with Errors",sub:"Post-Quantum Cryptography",desc:"Quantum-safe encryption from deliberately noisy polynomial arithmetic",date:"10 June 2026"});var W=e(R,2);Gr(W,{});var T=e(W,4);{let er=rr(()=>[se("q","The size of the clock: a prime modulus, all arithmetic keeps only remainders, e.g. $20 \\bmod 7 = 6$. Toy values 17 and 97 here; ML-KEM uses 3329"),se("n","Ring dimension, a power of two: every polynomial is a tray of $n$ coefficients. Toy values 4 and 8 here; ML-KEM uses 256"),se("x","Formal placeholder, never given a value; its powers only label coefficient slots"),se("s","Alice's secret, a polynomial with small coefficients; the thing Eve wants"),se("a","Public polynomial, every coefficient drawn uniformly at random"),se("b","Public noisy product b = a·s + e, the other half of Alice's public key"),se("e","Error polynomial: small, fresh, deliberate. The lie that makes the problem hard"),se("pk","Alice's public key, the pair $(a, b)$; published to everyone, Eve included"),se("sk","Alice's secret key, just $s$; never leaves her machine"),se("r","Bob's own small randomness, drawn fresh for every encryption"),se("m","The message, a polynomial with coefficients 0 or 1 (one bit per slot)"),se("u","First half of the ciphertext, u = a·r + e₁"),se("v","Second half of the ciphertext, v = b·r + e₂ + ⌊q/2⌋·m"),se("w","Decryption residue w = e·r − e₁·s + e₂; rounding succeeds while every |wᵢ| < q/4"),se("η","Noise bound: 'small' always means coefficients in [−η, η]")]);sr(T,{get list(){return a(er)}})}var ce=e(T,8),ee=e(s(ce));t(ee,()=>r`q`);var P=e(ee,2);t(P,()=>r`q`);var I=e(P,2);t(I,()=>r`q`);var X=e(I,2);t(X,()=>r`15 + 5 = 20`);var $=e(X,2);t($,()=>r`15 + 5 \\equiv 3`);var x=e($,2);t(x,()=>r`9 \\times 9 = 81 = 4 \\times 17 +
    13`);var w=e(x,2);t(w,()=>r`9 \\times 9 \\equiv 13`);var ge=e(w,2);t(ge,()=>r`16
    \\equiv -1`),p(),o(ce);var ne=e(ce,2),ve=e(s(ne));t(ve,()=>r`q`);var D=e(ve,2);t(D,()=>r`(s_1,
    s_2) = (3, 7)`),p(),o(ne);var Y=e(ne,2);t(Y,()=>pe`
\\begin{aligned}
2 s_1 + 5 s_2 &\\equiv 7 \\pmod{17}\\\\
4 s_1 + s_2 &\\equiv 2 \\pmod{17}
\\end{aligned}
`);var G=e(Y,4);t(G,()=>pe`
\\begin{aligned}
2 \\times \\text{first} - \\text{second}: \\qquad 9 s_2 &\\equiv 14 - 2 \\equiv 12
&&\\Rightarrow\\ s_2 \\equiv 7\\\\
\\text{put } s_2 \\text{ into second}: \\qquad 4 s_1 &\\equiv 2 - 7 \\equiv 12
&&\\Rightarrow\\ s_1 \\equiv 3
\\end{aligned}
`);var ie=e(G,2),J=e(s(ie));t(J,()=>r`9 \\times 7 = 63 \\equiv 12`);var C=e(J,2);t(C,()=>r`4
    \\times 3 = 12`),p(),o(ie);var ae=e(ie,2),H=e(s(ae));t(H,()=>r`+1`);var le=e(H,2);t(le,()=>r`-1`),p(),o(ae);var ue=e(ae,2);t(ue,()=>pe`
\\begin{aligned}
2 s_1 + 5 s_2 &\\approx 8 \\pmod{17}\\\\
4 s_1 + s_2 &\\approx 1 \\pmod{17}
\\end{aligned}
`);var te=e(ue,2),fe=e(s(te));t(fe,()=>r`(s_1, s_2) = (14, 13)`);var qe=e(fe,2);t(qe,()=>r`(3, 7)`);var Me=e(qe,2);t(Me,()=>r`9 \\mod 17`);var S=e(Me,2);t(S,()=>r`\\pm 1`);var Se=e(S,2);t(Se,()=>r`\\pm 9`),p(),o(te);var _e=e(te,4),Le=e(s(_e),3);t(Le,()=>r`b_i \\approx \\vec{a}_i \\cdot \\vec{s}`);var Re=e(Le,2);t(Re,()=>r`\\vec{s}`);var u=e(Re,2);t(u,()=>r`\\vec{s}`);var n=e(u,2);t(n,()=>r`\\vec{a}_i`);var v=e(n,2);t(v,()=>r`\\vec{a}_i \\cdot \\vec{s}`);var _=e(v,2);t(_,()=>r`2 s_1 + 5 s_2`),p(3),o(_e);var y=e(_e,4),re=e(s(y));t(re,()=>r`n`);var O=e(re,2);t(O,()=>r`n`);var k=e(O,2);t(k,()=>r`n`);var V=e(k,2);t(V,()=>r`n`);var oe=e(V,2);t(oe,()=>r`n^2`);var c=e(oe,2);t(c,()=>r`n`);var f=e(c,2);t(f,()=>r`n`),p(),o(y);var j=e(y,2),U=e(s(j));t(U,()=>r`n`);var K=e(U,2);t(K,()=>r`q`);var F=e(K,2);t(F,()=>r`n`);var b=e(F,2);t(b,()=>r`x`);var B=e(b,2);t(B,()=>r`q`);var $e=e(B,2);t($e,()=>r`x^n`),p(),o(j);var Ce=e(j,2);t(Ce,()=>pe`x^n \\equiv -1`);var me=e(Ce,2),Te=e(s(me));t(Te,()=>r`x^n + 1`);var Ke=e(Te,2);t(Ke,()=>r`x^{n+2}`);var De=e(Ke,2);t(De,()=>r`-x^2`);var Ye=e(De,2);t(Ye,()=>r`n = 4`);var He=e(Ye,2);t(He,()=>r`q
    = 17`);var Ze=e(He,2);t(Ze,()=>r`1 + 2x + 3x^2 + 4x^3`);var i=e(Ze,2);t(i,()=>r`2 + x`),p(),o(me);var m=e(me,2);t(m,()=>pe`
\\begin{aligned}
(1 + 2x + 3x^2 + 4x^3)(2 + x) &= 2 + 5x + 8x^2 + 11x^3 + 4x^4\\\\
&\\equiv -2 + 5x + 8x^2 + 11x^3\\\\
&\\equiv 15 + 5x + 8x^2 + 11x^3 \\pmod{17}
\\end{aligned}
`);var g=e(m,2),z=e(s(g));t(z,()=>r`4x^4 \\equiv -4`);var N=e(z,2);t(N,()=>r`x^3`),p(),o(g);var de=e(g,4);Pr(de,{});var Ee=e(de,2),xe=e(s(Ee));t(xe,()=>r`R_q = \\mathbb{Z}_q[x]/(x^n + 1)`);var be=e(xe,2);t(be,()=>r`n`);var Pe=e(be,2);t(Pe,()=>r`q`),p(5),o(Ee);var ye=e(Ee,2),Fe=e(s(ye));t(Fe,()=>r`\\mathbb{Z}_q`);var Ie=e(Fe,2);t(Ie,()=>r`\\mathbb{Z}_q[x]`);var Qe=e(Ie,2);t(Qe,()=>r`x`);var Xe=e(Qe,2);t(Xe,()=>r`(x^n + 1)`);var aa=e(Xe,2);t(aa,()=>r`x^n + 1`);var ka=e(aa,2);t(ka,()=>r`x^n \\equiv -1`),p(),o(ye);var je=e(ye,2),Ge=e(s(je));t(Ge,()=>r`n`);var qa=e(Ge,2);t(qa,()=>r`n`);var Ta=e(qa,2);t(Ta,()=>r`n^2`);var Ea=e(Ta,2);t(Ea,()=>r`\\mathcal{O}(n \\log n)`);var Wt=e(Ea,2);t(Wt,()=>r`\\mathcal{O}(n^2)`),p(),o(je);var ta=e(je,4),za=e(s(ta));t(za,()=>r`s`);var Ma=e(za,4);t(Ma,()=>r`\\{-1, 0,
    1\\}`);var La=e(Ma,2);t(La,()=>r`a`);var Ra=e(La,2);t(Ra,()=>r`n`);var $a=e(Ra,2);t($a,()=>r`0`);var Aa=e($a,2);t(Aa,()=>r`q-1`);var St=e(Aa,2);t(St,()=>r`e`),p(),o(ta);var Wa=e(ta,2);t(Wa,()=>pe`(a,\\ b = a \\cdot s + e)`);var ra=e(Wa,2),Sa=e(s(ra));t(Sa,()=>r`n = 4`);var Pt=e(Sa,2);t(Pt,()=>r`q = 17`),p(),o(ra);var Pa=e(ra,2);t(Pa,()=>pe`
\\begin{alignedat}{2}
s &= 1 + x - x^3 \\qquad && \\text{secret, small}\\\\
a &= 6 + 14x + 3x^2 + 9x^3\\quad && \\text{public, uniform}\\\\
a \\cdot s &\\equiv 11 + 6x + 9x^2 + 6x^3\\quad && \\text{fold, then mod 17}\\\\
e &= 1 - x + x^3 && \\text{small lies}\\\\
b &\\equiv 12 + 5x + 9x^2 + 7x^3 && \\text{published}
\\end{alignedat}
`);var oa=e(Pa,2),ja=e(s(oa));t(ja,()=>r`(a, b)`);var Ca=e(ja,2);t(Ca,()=>r`s`);var jt=e(Ca,2);t(jt,()=>r`b`),p(),o(oa);var sa=e(oa,2),Ka=e(s(sa));t(Ka,()=>r`b = a \\cdot s`);var Fa=e(Ka,2);t(Fa,()=>r`s = b \\cdot a^{-1}`);var Ct=e(Fa,2);t(Ct,()=>r`a`),p(),o(sa);var na=e(sa,6),Ia=e(s(na));t(Ia,()=>r`[-\\eta,
    \\eta]`);var Kt=e(Ia,2);t(Kt,()=>r`\\eta`),p(),o(na);var ia=e(na,2),Oa=e(s(ia),2);t(Oa,()=>r`a`);var Ba=e(Oa,2);t(Ba,()=>r`s`);var Na=e(Ba,2);t(Na,()=>r`e`);var Ft=e(Na,2);t(Ft,()=>r`s`),p(),o(ia);var Da=e(ia,2);t(Da,()=>pe`
\\mathrm{pk} = (a,\\ b = a \\cdot s + e), \\qquad \\mathrm{sk} = s
`);var Ya=e(Da,4);t(Ya,()=>pe`
\\begin{aligned}
\\mathrm{pk} &= (6 + 14x + 3x^2 + 9x^3,\\ \\ 12 + 5x + 9x^2 + 7x^3)\\\\
\\mathrm{sk} &= 1 + x - x^3
\\end{aligned}
`);var la=e(Ya,2),Ha=e(s(la),2);t(Ha,()=>r`n`);var Za=e(Ha,2);t(Za,()=>r`m`);var Qa=e(Za,2);t(Qa,()=>r`\\lfloor
    q/2 \\rfloor`);var Xa=e(Qa,2);t(Xa,()=>r`r`);var Ga=e(Xa,2);t(Ga,()=>r`e_1`);var It=e(Ga,2);t(It,()=>r`e_2`),p(),o(la);var Ja=e(la,2);t(Ja,()=>pe`
\\begin{aligned}
u &= a \\cdot r + e_1\\\\
v &= b \\cdot r + e_2 + \\lfloor q/2 \\rfloor \\cdot m
\\end{aligned}
`);var da=e(Ja,2),Va=e(s(da));t(Va,()=>r`(1, 0, 1, 1)`);var Ua=e(Va,2);t(Ua,()=>r`m = 1 + x^2 + x^3`);var et=e(Ua,2);t(et,()=>r`\\lfloor 17/2 \\rfloor = 8`);var at=e(et,2);t(at,()=>r`8 + 8x^2 + 8x^3`);var tt=e(at,2);t(tt,()=>r`r = 1 - x^2 + x^3`);var rt=e(tt,2);t(rt,()=>r`e_1 = x + x^2 - x^3`);var Ot=e(rt,2);t(Ot,()=>r`e_2 = -1 + x`),p(),o(da);var ot=e(da,2);t(ot,()=>pe`
\\begin{aligned}
u &= a \\cdot r + e_1 = (12 + 3x + 5x^2 + x^3) + (x + x^2 - x^3)\\\\
&\\equiv 12 + 4x + 6x^2\\\\[4pt]
v &= b \\cdot r + e_2 + 8m\\\\
&= (16 + 3x + 7x^2 + 14x^3) + (-1 + x) + (8 + 8x^2 + 8x^3)\\\\
&\\equiv 6 + 4x + 15x^2 + 5x^3
\\end{aligned}
`);var ca=e(ot,2),st=e(s(ca));t(st,()=>r`u`);var Bt=e(st,2);t(Bt,()=>r`v`),p(),o(ca);var va=e(ca,2),Nt=e(s(va),2);t(Nt,()=>r`v - u \\cdot s`),p(),o(va);var nt=e(va,2);t(nt,()=>pe`
\\begin{aligned}
v - u \\cdot s &= (a s + e) r + e_2 + \\lfloor q/2 \\rfloor m - (a r + e_1) s\\\\
&= \\lfloor q/2 \\rfloor \\, m + \\underbrace{e \\cdot r - e_1 \\cdot s + e_2}_{w,\\ \\text{small}}
\\end{aligned}
`);var pa=e(nt,2),it=e(s(pa));t(it,()=>r`a \\cdot r \\cdot s`);var lt=e(it,2);t(lt,()=>r`w`);var dt=e(lt,2);t(dt,()=>r`m_i \\lfloor q/2
    \\rfloor + w_i`);var ct=e(dt,2);t(ct,()=>r`q/2`);var Dt=e(ct,2);t(Dt,()=>r`|w_i| < q/4`),p(),o(pa);var ha=e(pa,2),Yt=e(s(ha));t(Yt,()=>r`u \\cdot s \\equiv 16 + 5x + 10x^2 +
    11x^3`),p(),o(ha);var vt=e(ha,2);t(vt,()=>pe`
\\begin{aligned}
v - u \\cdot s &\\equiv 7 + 16x + 5x^2 + 11x^3\\\\
&= 7 - x + 5x^2 - 6x^3 \\qquad \\text{(centered mod 17)}\\\\
&= \\underbrace{8 + 8x^2 + 8x^3}_{8m} + \\underbrace{(-1 - x - 3x^2 + 3x^3)}_{w}
\\end{aligned}
`);var ua=e(vt,2),pt=e(s(ua));t(pt,()=>r`w`);var ht=e(pt,2);t(ht,()=>r`q/4 \\approx
    4.25`);var ut=e(ht,2);t(ut,()=>r`-6`);var mt=e(ut,2);t(mt,()=>r`-1`);var Ht=e(mt,2);t(Ht,()=>r`(1, 0, 1, 1)`),p(),o(ua);var ma=e(ua,2),ft=e(s(ma));t(ft,()=>r`e
    \\cdot r`);var _t=e(ft,2);t(_t,()=>r`n`);var bt=e(_t,2);t(bt,()=>r`\\eta`);var yt=e(bt,2);t(yt,()=>r`n \\eta^2`);var gt=e(yt,2);t(gt,()=>r`\\eta`);var Zt=e(gt,2);t(Zt,()=>r`2^{160}`),p(),o(ma);var fa=e(ma,4),xt=e(s(fa));t(xt,()=>r`n = 8`);var wt=e(xt,2);t(wt,()=>r`q = 97`);var kt=e(wt,2);t(kt,()=>r`\\lfloor q/2 \\rfloor = 48`);var qt=e(kt,2);t(qt,()=>r`q/4
    \\approx 24`);var Qt=e(qt,2);t(Qt,()=>r`v - u \\cdot s`),p(),o(fa);var Tt=e(fa,2);Br(Tt,{});var _a=e(Tt,4),ba=s(_a),Et=e(s(ba));t(Et,()=>r`\\eta = 0`);var Xt=e(Et,2);t(Xt,()=>r`b = a \\cdot s`),p(),o(ba);var ya=e(ba,2),Gt=e(s(ya));t(Gt,()=>r`\\eta = 1`),p(),o(ya);var zt=e(ya,2),Jt=e(s(zt));t(Jt,()=>r`\\eta`),p(),o(zt),o(_a);var ga=e(_a,6),Mt=e(s(ga));t(Mt,()=>r`n = 256`);var Lt=e(Mt,2);t(Lt,()=>r`q = 3329`);var Rt=e(Lt,2);t(Rt,()=>r`\\eta
    = 2`);var Vt=e(Rt,4);t(Vt,()=>r`2^{-164}`),p(),o(ga);var Ut=e(ga,2);dr(Ut,{list:[["On Ideal Lattices and Learning with Errors Over Rings (LPR, 2010)","https://eprint.iacr.org/2012/230"],["The Learning with Errors Problem (Regev's survey)","https://cims.nyu.edu/~regev/papers/lwesurvey.pdf"],["Worst-case to average-case reduction for LWE (MIT lecture notes)","https://people.csail.mit.edu/vinodv/CS294/lecture4.pdf"],["FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism","https://csrc.nist.gov/pubs/fips/203/final"],["Ring learning with errors (Wikipedia)","https://en.wikipedia.org/wiki/Ring_learning_with_errors"]]}),l(Ae,A),Ue()}export{fo as component};
