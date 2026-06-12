import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{p as Ge,aJ as ze,aK as $t,a as Ve,g as a,s as e,c as s,a7 as M,aq as L,r,u as d,n as p,f as he,aO as Ne,m as Q,aM as ao,aN as to,d as oo}from"../chunks/Cc-U2CFn.js";import{a as l,f as h,t as Xe,e as ro,c as At}from"../chunks/ecw0CP_J.js";import{h as t}from"../chunks/DCtWGmPh.js";import{i as Ue}from"../chunks/Bj7q6zUx.js";import{D as so,d as se,a as o,_ as pe}from"../chunks/BP9avG_5.js";import{s as Z}from"../chunks/DeJRxx7c.js";import{i as q}from"../chunks/C81BIPVe.js";import{e as we,i as ke}from"../chunks/zxXQGJud.js";import{r as xa,s as E}from"../chunks/F8hb3Lht.js";import{s as Oe}from"../chunks/Dh1Rx5K6.js";import{e as Be}from"../chunks/6ADeoIni.js";import{b as wa}from"../chunks/CgYsFJFV.js";import{o as no}from"../chunks/D4p5ZQOb.js";import{A as io}from"../chunks/DvSWQ2_a.js";import{M as lo}from"../chunks/DNjFuzX8.js";import{R as co}from"../chunks/MKQfYD7l.js";var vo=h('<span class="plus svelte-11fkcz8">+</span>'),po=h("<sup></sup>"),ho=h('<span class="pow svelte-11fkcz8">x<!></span>'),uo=h('<!> <span class="cell svelte-11fkcz8"><input type="number" min="0" step="1" class="svelte-11fkcz8"/> <!></span>',1),mo=h('<span class="plus svelte-11fkcz8">+</span>'),fo=h("<sup></sup>"),_o=h('<span class="pow svelte-11fkcz8">x<!></span>'),bo=h('<!> <span class="cell svelte-11fkcz8"><input type="number" min="0" step="1" class="svelte-11fkcz8"/> <!></span>',1),yo=h('<span class="term svelte-11fkcz8">0</span>'),go=h('<span class="plus svelte-11fkcz8">+</span>'),xo=h("<sup> </sup>"),wo=h("x<!>",1),ko=h("<!> <span> <!></span>",1),qo=h('<span class="term svelte-11fkcz8">0</span>'),To=h('<span class="plus svelte-11fkcz8">+</span>'),Eo=h('<b class="wrap svelte-11fkcz8"> </b>'),zo=h("<sup> </sup>"),Mo=h("x<!>",1),Lo=h('<!> <span class="term svelte-11fkcz8"><!> <!><!><!></span>',1),Ro=h('<span class="term final svelte-11fkcz8">0</span>'),Ao=h('<span class="plus svelte-11fkcz8">+</span>'),$o=h("<sup> </sup>"),Wo=h("x<!>",1),So=h('<!> <span class="term final svelte-11fkcz8"> <!></span>',1),Po=h('<div class="ringmul tc mx-a my20 p10 rx10 svelte-11fkcz8"><div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8">a(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8">b(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8">a·b</span> <span class="plus svelte-11fkcz8">=</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8">x<sup></sup> ≡ −1</span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8"></span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="note mt10 svelte-11fkcz8">every product in <b>R<sub></sub></b> </div></div>');function jo($e,We){Ge(We,!1);const A=17,$=4;let W=M([1,2,3,4]),T=M([2,1,0,0]);const ce=u=>(u%A+A)%A,ee=u=>{const n=Math.trunc(Number(u));return Number.isFinite(n)?ce(n):0};let P=M([]),I=M([]),J=M([]);const R=u=>u.map((n,v)=>({v:n,i:v})).filter(n=>n.v!==0);ze(()=>(a(W),a(T)),()=>{const u=a(W).map(ee),n=a(T).map(ee),v=new Array(2*$-1).fill(0);for(let _=0;_<$;_++)for(let y=0;y<$;y++)v[_+y]+=u[_]*n[y];L(P,v),L(J,v.slice(0,$).map((_,y)=>({lo:_,hi:v[y+$]||0,i:y})).filter(_=>_.lo!==0||_.hi!==0)),L(I,v.slice(0,$).map((_,y)=>ce(_-(v[y+$]||0))))}),$t(),Ue();var x=Po(),w=s(x),ge=e(s(w),4);we(ge,1,()=>a(W),ke,(u,n,v)=>{var _=uo(),y=he(_);{var oe=c=>{var f=vo();l(c,f)};q(y,c=>{v>0&&c(oe)})}var N=e(y,2),k=s(N);xa(k),E(k,"max",A-1);var V=e(k,2);{var re=c=>{var f=ho(),j=e(s(f));{var U=C=>{var F=po();F.textContent=v,l(C,F)};q(j,C=>{v>1&&C(U)})}r(f),l(c,f)};q(V,c=>{v>0&&c(re)})}r(N),wa(k,()=>a(W)[v],c=>Ne(W,a(W)[v]=c)),Be("change",k,()=>Ne(W,a(W)[v]=ee(a(W)[v]))),l(u,_)}),r(w);var ne=e(w,2),ve=e(s(ne),4);we(ve,1,()=>a(T),ke,(u,n,v)=>{var _=bo(),y=he(_);{var oe=c=>{var f=mo();l(c,f)};q(y,c=>{v>0&&c(oe)})}var N=e(y,2),k=s(N);xa(k),E(k,"max",A-1);var V=e(k,2);{var re=c=>{var f=_o(),j=e(s(f));{var U=C=>{var F=fo();F.textContent=v,l(C,F)};q(j,C=>{v>1&&C(U)})}r(f),l(c,f)};q(V,c=>{v>0&&c(re)})}r(N),wa(k,()=>a(T)[v],c=>Ne(T,a(T)[v]=c)),Be("change",k,()=>Ne(T,a(T)[v]=ee(a(T)[v]))),l(u,_)}),r(ne);var D=e(ne,2),Y=e(s(D),4);{var X=u=>{var n=yo();l(u,n)};q(Y,u=>{a(P),d(()=>R(a(P)).length===0)&&u(X)})}var ie=e(Y,2);we(ie,1,()=>(a(P),d(()=>R(a(P)))),ke,(u,n,v)=>{var _=ko(),y=he(_);{var oe=f=>{var j=go();l(f,j)};q(y,f=>{v>0&&f(oe)})}var N=e(y,2);let k;var V=s(N,!0),re=e(V);{var c=f=>{var j=wo(),U=e(he(j));{var C=F=>{var b=xo(),O=s(b,!0);r(b),Q(()=>Z(O,(a(n),d(()=>a(n).i)))),l(F,b)};q(U,F=>{a(n),d(()=>a(n).i>1)&&F(C)})}l(f,j)};q(re,f=>{a(n),d(()=>a(n).i>0)&&f(c)})}r(N),Q(()=>{k=Oe(N,1,"term svelte-11fkcz8",null,k,{wrap:a(n).i>=$}),Z(V,(a(n),d(()=>a(n).v)))}),l(u,_)}),r(D);var G=e(D,2),K=s(G),ae=e(s(K));ae.textContent="4",p(),r(K);var H=e(K,4);{var le=u=>{var n=qo();l(u,n)};q(H,u=>{a(J),d(()=>a(J).length===0)&&u(le)})}var ue=e(H,2);we(ue,1,()=>a(J),ke,(u,n,v)=>{var _=Lo(),y=he(_);{var oe=b=>{var O=To();l(b,O)};q(y,b=>{v>0&&b(oe)})}var N=e(y,2),k=s(N);{var V=b=>{var O=Xe("(");l(b,O)};q(k,b=>{a(n),d(()=>a(n).hi&&a(n).i>0)&&b(V)})}var re=e(k,1,!0),c=e(re);{var f=b=>{var O=Eo(),Ae=s(O);r(O),Q(()=>Z(Ae,`−${a(n),d(()=>a(n).hi)??""}`)),l(b,O)};q(c,b=>{a(n),d(()=>a(n).hi)&&b(f)})}var j=e(c);{var U=b=>{var O=Xe(")");l(b,O)};q(j,b=>{a(n),d(()=>a(n).hi&&a(n).i>0)&&b(U)})}var C=e(j);{var F=b=>{var O=Mo(),Ae=e(he(O));{var je=me=>{var Te=zo(),Ke=s(Te,!0);r(Te),Q(()=>Z(Ke,(a(n),d(()=>a(n).i)))),l(me,Te)};q(Ae,me=>{a(n),d(()=>a(n).i>1)&&me(je)})}l(b,O)};q(C,b=>{a(n),d(()=>a(n).i>0)&&b(F)})}r(N),Q(()=>Z(re,(a(n),d(()=>a(n).lo)))),l(u,_)}),r(G);var te=e(G,2),fe=s(te);fe.textContent="mod 17";var qe=e(fe,4);{var Me=u=>{var n=Ro();l(u,n)};q(qe,u=>{a(I),d(()=>R(a(I)).length===0)&&u(Me)})}var S=e(qe,2);we(S,1,()=>(a(I),d(()=>R(a(I)))),ke,(u,n,v)=>{var _=So(),y=he(_);{var oe=c=>{var f=Ao();l(c,f)};q(y,c=>{v>0&&c(oe)})}var N=e(y,2),k=s(N,!0),V=e(k);{var re=c=>{var f=Wo(),j=e(he(f));{var U=C=>{var F=$o(),b=s(F,!0);r(F),Q(()=>Z(b,(a(n),d(()=>a(n).i)))),l(C,F)};q(j,C=>{a(n),d(()=>a(n).i>1)&&C(U)})}l(c,f)};q(V,c=>{a(n),d(()=>a(n).i>0)&&c(re)})}r(N),Q(()=>Z(k,(a(n),d(()=>a(n).v)))),l(u,_)}),r(te);var Se=e(te,2),_e=e(s(Se)),Le=e(s(_e));Le.textContent="17",r(_e);var Re=e(_e);Re.nodeValue=` with n = 4: long
        multiplication, the tinted overflow terms fold back with a sign flip,
        coefficients wrap mod 17`,r(Se),r(x),l($e,x),Ve()}var Ko=h("<button> </button>"),Co=h('<span class="pcell svelte-1x9pnmt"> </span>'),Fo=h('<div class="prow svelte-1x9pnmt"><span> </span> <span class="pname svelte-1x9pnmt"> </span> <!></div>'),Io=ro('<rect width="26"></rect><text y="206" text-anchor="middle"> </text>',1),No=h(`<div class="hint tc mt5 svelte-1x9pnmt">no noise at all: decryption is perfect, but b = a·s exactly, so Eve
            computes b·a<sup>−1</sup> and has the secret key</div>`),Oo=h(`<div class="pg mx-a my20 p10 rx10 svelte-1x9pnmt"><div class="f al-ct j-ct fw g10 mb10"><label class="svelte-1x9pnmt">error size η = <b> </b> <input type="range" min="0" max="6" class="svelte-1x9pnmt"/></label> <button class="svelte-1x9pnmt">new keys</button> <button class="svelte-1x9pnmt">re-encrypt</button></div> <div class="tc my5"><span class="cap svelte-1x9pnmt">message (click bits to flip):</span> <!></div> <div class="polys svelte-1x9pnmt"></div> <div class="tc"><svg width="430" height="216" font-family="monospace" font-size="10" class="svelte-1x9pnmt"><rect x="44" fill="rgba(34, 170, 255, 0.10)"></rect><line x1="44" stroke="#999"></line><line x1="44" stroke="#e67" stroke-dasharray="4 3"></line><line x1="44" stroke="#e67" stroke-dasharray="4 3"></line><text x="40" text-anchor="end">+48</text><text x="40" text-anchor="end" fill="#e67">+q/4</text><text x="40" text-anchor="end">0</text><text x="40" text-anchor="end" fill="#e67">−q/4</text><text x="40" text-anchor="end">−48</text><!></svg> <div class="cap svelte-1x9pnmt">coefficients of v − u·s (centered mod 97), decoded bits below</div></div> <div><!></div> <!> <div class="note tc mt10 svelte-1x9pnmt">Eve only ever sees a, b, u, v. Each is indistinguishable from uniform
        random numbers mod 97; the secret s and all the error polynomials never
        leave home.</div></div>`);function Bo($e,We){Ge(We,!1);const A=M(),$=M(),W=M(),T=M(),ce=M(),ee=M(),P=8,I=97,J=48,R=I/4;let x=M(1),w=M([1,0,1,1,0,0,1,0]),ge=M(0),ne=M(0);const ve=i=>(i%I+I)%I,D=i=>ve(i)>I/2?ve(i)-I:ve(i),Y=(i,m)=>i+Math.floor(Math.random()*(m-i+1)),X=i=>Array.from({length:P},()=>Y(-i,i)),ie=()=>Array.from({length:P},()=>Y(0,I-1));function G(i,m){const g=new Array(P).fill(0);for(let z=0;z<P;z++)for(let B=0;B<P;B++)g[(z+B)%P]+=(z+B<P?1:-1)*i[z]*m[B];return g.map(ve)}const K=(i,m)=>i.map((g,z)=>ve(g+m[z])),ae=(i,m)=>i.map((g,z)=>ve(g-m[z]));let H=M([]),le=M([]),ue=M([]),te=M([]),fe=M([]),qe=M([]),Me=M([]);const S=i=>100-i*(88/J),Se=i=>48+i*46;ze(()=>(a(ge),a(x),a(H),a(le),a(ue)),()=>{a(ge),a(x),L(H,ie()),L(le,X(Math.max(1,+a(x)))),L(ue,X(+a(x))),L(te,K(G(a(H),a(le)),a(ue)))}),ze(()=>(a(ne),a(te),a(x)),()=>{a(ne),a(te),L(fe,X(Math.max(1,+a(x)))),L(qe,X(+a(x))),L(Me,X(+a(x)))}),ze(()=>(a(H),a(fe),a(qe)),()=>{L(A,K(G(a(H),a(fe)),a(qe)))}),ze(()=>(a(te),a(fe),a(Me),a(w)),()=>{L($,K(K(G(a(te),a(fe)),a(Me)),a(w).map(i=>i*J)))}),ze(()=>(a($),a(A),a(le)),()=>{L(W,ae(a($),G(a(A),a(le))).map(D))}),ze(()=>a(W),()=>{L(T,a(W).map(i=>Math.abs(i)>R?1:0))}),ze(()=>(a(T),a(w)),()=>{L(ce,a(T).filter((i,m)=>i!==a(w)[m]).length)}),ze(()=>(a(W),a(w)),()=>{L(ee,Math.max(...a(W).map((i,m)=>Math.abs(D(i-a(w)[m]*J)))))}),$t(),Ue();var _e=Oo(),Le=s(_e),Re=s(Le),u=e(s(Re)),n=s(u,!0);r(u);var v=e(u,2);xa(v),r(Re);var _=e(Re,2),y=e(_,2);r(Le);var oe=e(Le,2),N=e(s(oe),2);we(N,1,()=>a(w),ke,(i,m,g)=>{var z=Ko();let B;var de=s(z,!0);r(z),Q(()=>{B=Oe(z,1,"bit svelte-1x9pnmt",null,B,{on:a(m)===1}),Z(de,a(m))}),Be("click",z,()=>Ne(w,a(w)[g]=1-a(w)[g])),l(i,z)}),r(oe);var k=e(oe,2);we(k,5,()=>[["pub","public","a",a(H)],["pub","public","b",a(te)],["sec","secret","s",a(le)],["ct","sent","u",a(A)],["ct","sent","v",a($)]],ke,(i,m)=>{var g=ao(()=>to(a(m),4));let z=()=>a(g)[0],B=()=>a(g)[1],de=()=>a(g)[2],Ee=()=>a(g)[3];var xe=Fo(),be=s(xe),Pe=s(be,!0);r(be);var ye=e(be,2),Ce=s(ye);r(ye);var Fe=e(ye,2);we(Fe,1,Ee,ke,(Qe,Je)=>{var Ie=Co(),ea=s(Ie,!0);r(Ie),Q(()=>Z(ea,a(Je))),l(Qe,Ie)}),r(xe),Q(()=>{Oe(be,1,`tag ${z()??""}`,"svelte-1x9pnmt"),Z(Pe,B()),Z(Ce,`${de()??""} =`)}),l(i,xe)}),r(k);var V=e(k,2),re=s(V),c=s(re);E(c,"width",P*46-16);var f=e(c);E(f,"x2",44+P*46-16);var j=e(f);E(j,"x2",44+P*46-16);var U=e(j);E(U,"x2",44+P*46-16);var C=e(U),F=e(C),b=e(F),O=e(b),Ae=e(O),je=e(Ae);we(je,1,()=>a(W),ke,(i,m,g)=>{var z=Io(),B=he(z),de=e(B),Ee=s(de,!0);r(de),Q((xe,be,Pe,ye)=>{E(B,"x",xe),E(B,"y",be),E(B,"height",Pe),E(B,"fill",(a(T),a(w),d(()=>a(T)[g]===a(w)[g]?"#2af":"#e44"))),E(de,"x",ye),E(de,"fill",(a(T),a(w),d(()=>a(T)[g]===a(w)[g]?"#555":"#e44"))),E(de,"font-weight",(a(T),a(w),d(()=>a(T)[g]===a(w)[g]?"normal":"bold"))),Z(Ee,(a(T),d(()=>a(T)[g])))},[()=>d(()=>Se(g)),()=>(a(m),d(()=>Math.min(S(0),S(a(m))))),()=>(a(m),d(()=>Math.abs(S(a(m))-S(0))||1)),()=>d(()=>Se(g)+13)]),l(i,z)}),r(re),p(2),r(V);var me=e(V,2);let Te;var Ke=s(me);{var De=i=>{var m=Xe();Q(()=>Z(m,`✓ all 8 bits decoded correctly · largest noise |w| = ${a(ee)??""} of the
            24.25 allowed`)),l(i,m)},Ye=i=>{var m=Xe();Q(()=>Z(m,`✗ ${a(ce)??""} of 8 bits flipped · largest noise |w| = ${a(ee)??""} blew past
            the limit of 24.25`)),l(i,m)};q(Ke,i=>{a(ce)===0?i(De):i(Ye,!1)})}r(me);var He=e(me,2);{var Ze=i=>{var m=No();l(i,m)};q(He,i=>{+a(x)==0&&i(Ze)})}p(2),r(_e),Q((i,m,g,z,B,de,Ee,xe,be,Pe,ye,Ce,Fe)=>{Z(n,a(x)),E(c,"y",i),E(c,"height",m),E(f,"y1",g),E(f,"y2",z),E(j,"y1",B),E(j,"y2",de),E(U,"y1",Ee),E(U,"y2",xe),E(C,"y",be),E(F,"y",Pe),E(b,"y",ye),E(O,"y",Ce),E(Ae,"y",Fe),Te=Oe(me,1,"verdict tc mt10 svelte-1x9pnmt",null,Te,{bad:a(ce)>0})},[()=>d(()=>S(R)),()=>d(()=>S(-R)-S(R)),()=>d(()=>S(0)),()=>d(()=>S(0)),()=>d(()=>S(R)),()=>d(()=>S(R)),()=>d(()=>S(-R)),()=>d(()=>S(-R)),()=>d(()=>S(J)+3),()=>d(()=>S(R)+3),()=>d(()=>S(0)+3),()=>d(()=>S(-R)+3),()=>d(()=>S(-J)+3)]),wa(v,()=>a(x),i=>L(x,i)),Be("click",_,()=>L(ge,a(ge)+1)),Be("click",y,()=>L(ne,a(ne)+1)),l($e,_e),Ve()}var Do=h(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is
                ML-KEM, the lattice scheme this article builds, hybridised with
                the classical elliptic-curve exchange.</p>`),Yo=h(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is
                classical only, no ML-KEM. A recording of that handshake could
                be unwrapped by a future quantum computer.</p>`),Ho=h(`<p class="svelte-kugc17">The request to the test server did not make it (an ad blocker,
                a strict privacy mode, or being offline will do that), so there
                is nothing to report.</p>`),Zo=h('<div><span class="k svelte-kugc17"> </span> </div>'),Qo=h('<div class="trace my10 py5 px10 rx5 svelte-kugc17"></div>'),Jo=h(`<!> <!> <p class="note svelte-kugc17">via pq.cloudflareresearch.com/cdn-cgi/trace, which echoes back the
            key exchange it negotiated with you. This tests your browser, not
            this site.</p>`,1),Xo=h("<div><!></div>");function Go($e,We){Ge(We,!1);let A=M("checking"),$=M(""),W=M([]);const T={checking:"… checking whether your browser uses post-quantum crypto",pq:"✓ your browser is using post-quantum crypto",classical:"✗ your browser is not using post-quantum crypto",unknown:"could not check post-quantum support"},ce=["kex","tls","http","h","ip","colo","loc","uag"];no(async()=>{try{const J=await(await fetch("https://pq.cloudflareresearch.com/cdn-cgi/trace")).text();L(W,(J.match(/[ -~]+/g)||[]).map(x=>{const w=x.indexOf("=");return[x.slice(0,w),x.slice(w+1)]}).filter(x=>ce.includes(x[0])));const R=J.match(/kex=([A-Za-z0-9_-]+)/);L($,R?R[1]:""),a($)?a($).includes("MLKEM")||a($).includes("Kyber")?L(A,"pq"):L(A,"classical"):L(A,"unknown")}catch{L(A,"unknown")}}),Ue();var ee=Xo(),P=s(ee);io(P,{get title(){return T[a(A)]},children:(I,J)=>{var R=Jo(),x=he(R);{var w=D=>{var Y=Do(),X=e(s(Y)),ie=s(X,!0);r(X),p(),r(Y),Q(()=>Z(ie,a($))),l(D,Y)},ge=D=>{var Y=At(),X=he(Y);{var ie=K=>{var ae=Yo(),H=e(s(ae)),le=s(H,!0);r(H),p(),r(ae),Q(()=>Z(le,a($))),l(K,ae)},G=K=>{var ae=At(),H=he(ae);{var le=ue=>{var te=Ho();l(ue,te)};q(H,ue=>{a(A)==="unknown"&&ue(le)},!0)}l(K,ae)};q(X,K=>{a(A)==="classical"?K(ie):K(G,!1)},!0)}l(D,Y)};q(x,D=>{a(A)==="pq"?D(w):D(ge,!1)})}var ne=e(x,2);{var ve=D=>{var Y=Qo();we(Y,5,()=>a(W),ke,(X,ie)=>{var G=Zo(),K=s(G),ae=s(K,!0);r(K);var H=e(K,1,!0);r(G),Q(()=>{Z(ae,a(ie)[0]),Z(H,a(ie)[1])}),l(X,G)}),r(Y),l(D,Y)};q(ne,D=>{a(W).length&&D(ve)})}p(2),l(I,R)},$$slots:{default:!0}}),r(ee),Q(()=>Oe(ee,1,`pqc ${a(A)==="pq"?"green":"yellow"}`,"svelte-kugc17")),l($e,ee),Ve()}var Vo=h(`<!> <!> Cast: <ul><li>Alice (wants to receive secrets)</li> <li>Bob (wants to send her one)</li> <li>Eve (reads everything in transit)</li> <li>a large quantum computer (arrival date unknown)</li></ul> <!> <p>Nearly every secret on the internet is guarded by one of two locks: RSA,
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
    Cryptography.</p> <!>`,1);function _r($e,We){Ge(We,!1),Ue();var A=Vo(),$=he(A);lo($,{title:"Ring Learning with Errors",sub:"Post-Quantum Cryptography",desc:"Quantum-safe encryption from deliberately noisy polynomial arithmetic",date:"10 June 2026"});var W=e($,2);Go(W,{});var T=e(W,4);{let eo=oo(()=>[se("q","The size of the clock: a prime modulus, all arithmetic keeps only remainders, e.g. $20 \\bmod 7 = 6$. Toy values 17 and 97 here; ML-KEM uses 3329"),se("n","Ring dimension, a power of two: every polynomial is a tray of $n$ coefficients. Toy values 4 and 8 here; ML-KEM uses 256"),se("x","Formal placeholder, never given a value; its powers only label coefficient slots"),se("s","Alice's secret, a polynomial with small coefficients; the thing Eve wants"),se("a","Public polynomial, every coefficient drawn uniformly at random"),se("b","Public noisy product b = a·s + e, the other half of Alice's public key"),se("e","Error polynomial: small, fresh, deliberate. The lie that makes the problem hard"),se("pk","Alice's public key, the pair $(a, b)$; published to everyone, Eve included"),se("sk","Alice's secret key, just $s$; never leaves her machine"),se("r","Bob's own small randomness, drawn fresh for every encryption"),se("m","The message, a polynomial with coefficients 0 or 1 (one bit per slot)"),se("u","First half of the ciphertext, u = a·r + e₁"),se("v","Second half of the ciphertext, v = b·r + e₂ + ⌊q/2⌋·m"),se("w","Decryption residue w = e·r − e₁·s + e₂; rounding succeeds while every |wᵢ| < q/4"),se("η","Noise bound: 'small' always means coefficients in [−η, η]")]);so(T,{get list(){return a(eo)}})}var ce=e(T,8),ee=e(s(ce));t(ee,()=>o`q`);var P=e(ee,2);t(P,()=>o`q`);var I=e(P,2);t(I,()=>o`q`);var J=e(I,2);t(J,()=>o`15 + 5 = 20`);var R=e(J,2);t(R,()=>o`15 + 5 \\equiv 3`);var x=e(R,2);t(x,()=>o`9 \\times 9 = 81 = 4 \\times 17 +
    13`);var w=e(x,2);t(w,()=>o`9 \\times 9 \\equiv 13`);var ge=e(w,2);t(ge,()=>o`16
    \\equiv -1`),p(),r(ce);var ne=e(ce,2),ve=e(s(ne));t(ve,()=>o`q`);var D=e(ve,2);t(D,()=>o`(s_1,
    s_2) = (3, 7)`),p(),r(ne);var Y=e(ne,2);t(Y,()=>pe`
\\begin{aligned}
2 s_1 + 5 s_2 &\\equiv 7 \\pmod{17}\\\\
4 s_1 + s_2 &\\equiv 2 \\pmod{17}
\\end{aligned}
`);var X=e(Y,4);t(X,()=>pe`
\\begin{aligned}
2 \\times \\text{first} - \\text{second}: \\qquad 9 s_2 &\\equiv 14 - 2 \\equiv 12
&&\\Rightarrow\\ s_2 \\equiv 7\\\\
\\text{put } s_2 \\text{ into second}: \\qquad 4 s_1 &\\equiv 2 - 7 \\equiv 12
&&\\Rightarrow\\ s_1 \\equiv 3
\\end{aligned}
`);var ie=e(X,2),G=e(s(ie));t(G,()=>o`9 \\times 7 = 63 \\equiv 12`);var K=e(G,2);t(K,()=>o`4
    \\times 3 = 12`),p(),r(ie);var ae=e(ie,2),H=e(s(ae));t(H,()=>o`+1`);var le=e(H,2);t(le,()=>o`-1`),p(),r(ae);var ue=e(ae,2);t(ue,()=>pe`
\\begin{aligned}
2 s_1 + 5 s_2 &\\approx 8 \\pmod{17}\\\\
4 s_1 + s_2 &\\approx 1 \\pmod{17}
\\end{aligned}
`);var te=e(ue,2),fe=e(s(te));t(fe,()=>o`(s_1, s_2) = (14, 13)`);var qe=e(fe,2);t(qe,()=>o`(3, 7)`);var Me=e(qe,2);t(Me,()=>o`9 \\mod 17`);var S=e(Me,2);t(S,()=>o`\\pm 1`);var Se=e(S,2);t(Se,()=>o`\\pm 9`),p(),r(te);var _e=e(te,4),Le=e(s(_e),3);t(Le,()=>o`b_i \\approx \\vec{a}_i \\cdot \\vec{s}`);var Re=e(Le,2);t(Re,()=>o`\\vec{s}`);var u=e(Re,2);t(u,()=>o`\\vec{s}`);var n=e(u,2);t(n,()=>o`\\vec{a}_i`);var v=e(n,2);t(v,()=>o`\\vec{a}_i \\cdot \\vec{s}`);var _=e(v,2);t(_,()=>o`2 s_1 + 5 s_2`),p(3),r(_e);var y=e(_e,4),oe=e(s(y));t(oe,()=>o`n`);var N=e(oe,2);t(N,()=>o`n`);var k=e(N,2);t(k,()=>o`n`);var V=e(k,2);t(V,()=>o`n`);var re=e(V,2);t(re,()=>o`n^2`);var c=e(re,2);t(c,()=>o`n`);var f=e(c,2);t(f,()=>o`n`),p(),r(y);var j=e(y,2),U=e(s(j));t(U,()=>o`n`);var C=e(U,2);t(C,()=>o`q`);var F=e(C,2);t(F,()=>o`n`);var b=e(F,2);t(b,()=>o`x`);var O=e(b,2);t(O,()=>o`q`);var Ae=e(O,2);t(Ae,()=>o`x^n`),p(),r(j);var je=e(j,2);t(je,()=>pe`x^n \\equiv -1`);var me=e(je,2),Te=e(s(me));t(Te,()=>o`x^n + 1`);var Ke=e(Te,2);t(Ke,()=>o`x^{n+2}`);var De=e(Ke,2);t(De,()=>o`-x^2`);var Ye=e(De,2);t(Ye,()=>o`n = 4`);var He=e(Ye,2);t(He,()=>o`q
    = 17`);var Ze=e(He,2);t(Ze,()=>o`1 + 2x + 3x^2 + 4x^3`);var i=e(Ze,2);t(i,()=>o`2 + x`),p(),r(me);var m=e(me,2);t(m,()=>pe`
\\begin{aligned}
(1 + 2x + 3x^2 + 4x^3)(2 + x) &= 2 + 5x + 8x^2 + 11x^3 + 4x^4\\\\
&\\equiv -2 + 5x + 8x^2 + 11x^3\\\\
&\\equiv 15 + 5x + 8x^2 + 11x^3 \\pmod{17}
\\end{aligned}
`);var g=e(m,2),z=e(s(g));t(z,()=>o`4x^4 \\equiv -4`);var B=e(z,2);t(B,()=>o`x^3`),p(),r(g);var de=e(g,4);jo(de,{});var Ee=e(de,2),xe=e(s(Ee));t(xe,()=>o`R_q = \\mathbb{Z}_q[x]/(x^n + 1)`);var be=e(xe,2);t(be,()=>o`n`);var Pe=e(be,2);t(Pe,()=>o`q`),p(5),r(Ee);var ye=e(Ee,2),Ce=e(s(ye));t(Ce,()=>o`\\mathbb{Z}_q`);var Fe=e(Ce,2);t(Fe,()=>o`\\mathbb{Z}_q[x]`);var Qe=e(Fe,2);t(Qe,()=>o`x`);var Je=e(Qe,2);t(Je,()=>o`(x^n + 1)`);var Ie=e(Je,2);t(Ie,()=>o`x^n + 1`);var ea=e(Ie,2);t(ea,()=>o`x^n \\equiv -1`),p(),r(ye);var aa=e(ye,2),ka=e(s(aa));t(ka,()=>o`n`);var qa=e(ka,2);t(qa,()=>o`n`);var Ta=e(qa,2);t(Ta,()=>o`n^2`);var Ea=e(Ta,2);t(Ea,()=>o`\\mathcal{O}(n \\log n)`);var Wt=e(Ea,2);t(Wt,()=>o`\\mathcal{O}(n^2)`),p(),r(aa);var ta=e(aa,4),za=e(s(ta));t(za,()=>o`s`);var Ma=e(za,4);t(Ma,()=>o`\\{-1, 0,
    1\\}`);var La=e(Ma,2);t(La,()=>o`a`);var Ra=e(La,2);t(Ra,()=>o`n`);var Aa=e(Ra,2);t(Aa,()=>o`0`);var $a=e(Aa,2);t($a,()=>o`q-1`);var St=e($a,2);t(St,()=>o`e`),p(),r(ta);var Wa=e(ta,2);t(Wa,()=>pe`(a,\\ b = a \\cdot s + e)`);var oa=e(Wa,2),Sa=e(s(oa));t(Sa,()=>o`n = 4`);var Pt=e(Sa,2);t(Pt,()=>o`q = 17`),p(),r(oa);var Pa=e(oa,2);t(Pa,()=>pe`
\\begin{alignedat}{2}
s &= 1 + x - x^3 \\qquad && \\text{secret, small}\\\\
a &= 6 + 14x + 3x^2 + 9x^3\\quad && \\text{public, uniform}\\\\
a \\cdot s &\\equiv 11 + 6x + 9x^2 + 6x^3\\quad && \\text{fold, then mod 17}\\\\
e &= 1 - x + x^3 && \\text{small lies}\\\\
b &\\equiv 12 + 5x + 9x^2 + 7x^3 && \\text{published}
\\end{alignedat}
`);var ra=e(Pa,2),ja=e(s(ra));t(ja,()=>o`(a, b)`);var Ka=e(ja,2);t(Ka,()=>o`s`);var jt=e(Ka,2);t(jt,()=>o`b`),p(),r(ra);var sa=e(ra,2),Ca=e(s(sa));t(Ca,()=>o`b = a \\cdot s`);var Fa=e(Ca,2);t(Fa,()=>o`s = b \\cdot a^{-1}`);var Kt=e(Fa,2);t(Kt,()=>o`a`),p(),r(sa);var na=e(sa,6),Ia=e(s(na));t(Ia,()=>o`[-\\eta,
    \\eta]`);var Ct=e(Ia,2);t(Ct,()=>o`\\eta`),p(),r(na);var ia=e(na,2),Na=e(s(ia),2);t(Na,()=>o`a`);var Oa=e(Na,2);t(Oa,()=>o`s`);var Ba=e(Oa,2);t(Ba,()=>o`e`);var Ft=e(Ba,2);t(Ft,()=>o`s`),p(),r(ia);var Da=e(ia,2);t(Da,()=>pe`
\\mathrm{pk} = (a,\\ b = a \\cdot s + e), \\qquad \\mathrm{sk} = s
`);var Ya=e(Da,4);t(Ya,()=>pe`
\\begin{aligned}
\\mathrm{pk} &= (6 + 14x + 3x^2 + 9x^3,\\ \\ 12 + 5x + 9x^2 + 7x^3)\\\\
\\mathrm{sk} &= 1 + x - x^3
\\end{aligned}
`);var la=e(Ya,2),Ha=e(s(la),2);t(Ha,()=>o`n`);var Za=e(Ha,2);t(Za,()=>o`m`);var Qa=e(Za,2);t(Qa,()=>o`\\lfloor
    q/2 \\rfloor`);var Ja=e(Qa,2);t(Ja,()=>o`r`);var Xa=e(Ja,2);t(Xa,()=>o`e_1`);var It=e(Xa,2);t(It,()=>o`e_2`),p(),r(la);var Ga=e(la,2);t(Ga,()=>pe`
\\begin{aligned}
u &= a \\cdot r + e_1\\\\
v &= b \\cdot r + e_2 + \\lfloor q/2 \\rfloor \\cdot m
\\end{aligned}
`);var da=e(Ga,2),Va=e(s(da));t(Va,()=>o`(1, 0, 1, 1)`);var Ua=e(Va,2);t(Ua,()=>o`m = 1 + x^2 + x^3`);var et=e(Ua,2);t(et,()=>o`\\lfloor 17/2 \\rfloor = 8`);var at=e(et,2);t(at,()=>o`8 + 8x^2 + 8x^3`);var tt=e(at,2);t(tt,()=>o`r = 1 - x^2 + x^3`);var ot=e(tt,2);t(ot,()=>o`e_1 = x + x^2 - x^3`);var Nt=e(ot,2);t(Nt,()=>o`e_2 = -1 + x`),p(),r(da);var rt=e(da,2);t(rt,()=>pe`
\\begin{aligned}
u &= a \\cdot r + e_1 = (12 + 3x + 5x^2 + x^3) + (x + x^2 - x^3)\\\\
&\\equiv 12 + 4x + 6x^2\\\\[4pt]
v &= b \\cdot r + e_2 + 8m\\\\
&= (16 + 3x + 7x^2 + 14x^3) + (-1 + x) + (8 + 8x^2 + 8x^3)\\\\
&\\equiv 6 + 4x + 15x^2 + 5x^3
\\end{aligned}
`);var ca=e(rt,2),st=e(s(ca));t(st,()=>o`u`);var Ot=e(st,2);t(Ot,()=>o`v`),p(),r(ca);var va=e(ca,2),Bt=e(s(va),2);t(Bt,()=>o`v - u \\cdot s`),p(),r(va);var nt=e(va,2);t(nt,()=>pe`
\\begin{aligned}
v - u \\cdot s &= (a s + e) r + e_2 + \\lfloor q/2 \\rfloor m - (a r + e_1) s\\\\
&= \\lfloor q/2 \\rfloor \\, m + \\underbrace{e \\cdot r - e_1 \\cdot s + e_2}_{w,\\ \\text{small}}
\\end{aligned}
`);var pa=e(nt,2),it=e(s(pa));t(it,()=>o`a \\cdot r \\cdot s`);var lt=e(it,2);t(lt,()=>o`w`);var dt=e(lt,2);t(dt,()=>o`m_i \\lfloor q/2
    \\rfloor + w_i`);var ct=e(dt,2);t(ct,()=>o`q/2`);var Dt=e(ct,2);t(Dt,()=>o`|w_i| < q/4`),p(),r(pa);var ha=e(pa,2),Yt=e(s(ha));t(Yt,()=>o`u \\cdot s \\equiv 16 + 5x + 10x^2 +
    11x^3`),p(),r(ha);var vt=e(ha,2);t(vt,()=>pe`
\\begin{aligned}
v - u \\cdot s &\\equiv 7 + 16x + 5x^2 + 11x^3\\\\
&= 7 - x + 5x^2 - 6x^3 \\qquad \\text{(centered mod 17)}\\\\
&= \\underbrace{8 + 8x^2 + 8x^3}_{8m} + \\underbrace{(-1 - x - 3x^2 + 3x^3)}_{w}
\\end{aligned}
`);var ua=e(vt,2),pt=e(s(ua));t(pt,()=>o`w`);var ht=e(pt,2);t(ht,()=>o`q/4 \\approx
    4.25`);var ut=e(ht,2);t(ut,()=>o`-6`);var mt=e(ut,2);t(mt,()=>o`-1`);var Ht=e(mt,2);t(Ht,()=>o`(1, 0, 1, 1)`),p(),r(ua);var ma=e(ua,2),ft=e(s(ma));t(ft,()=>o`e
    \\cdot r`);var _t=e(ft,2);t(_t,()=>o`n`);var bt=e(_t,2);t(bt,()=>o`\\eta`);var yt=e(bt,2);t(yt,()=>o`n \\eta^2`);var gt=e(yt,2);t(gt,()=>o`\\eta`);var Zt=e(gt,2);t(Zt,()=>o`2^{160}`),p(),r(ma);var fa=e(ma,4),xt=e(s(fa));t(xt,()=>o`n = 8`);var wt=e(xt,2);t(wt,()=>o`q = 97`);var kt=e(wt,2);t(kt,()=>o`\\lfloor q/2 \\rfloor = 48`);var qt=e(kt,2);t(qt,()=>o`q/4
    \\approx 24`);var Qt=e(qt,2);t(Qt,()=>o`v - u \\cdot s`),p(),r(fa);var Tt=e(fa,2);Bo(Tt,{});var _a=e(Tt,4),ba=s(_a),Et=e(s(ba));t(Et,()=>o`\\eta = 0`);var Jt=e(Et,2);t(Jt,()=>o`b = a \\cdot s`),p(),r(ba);var ya=e(ba,2),Xt=e(s(ya));t(Xt,()=>o`\\eta = 1`),p(),r(ya);var zt=e(ya,2),Gt=e(s(zt));t(Gt,()=>o`\\eta`),p(),r(zt),r(_a);var ga=e(_a,6),Mt=e(s(ga));t(Mt,()=>o`n = 256`);var Lt=e(Mt,2);t(Lt,()=>o`q = 3329`);var Rt=e(Lt,2);t(Rt,()=>o`\\eta
    = 2`);var Vt=e(Rt,4);t(Vt,()=>o`2^{-164}`),p(),r(ga);var Ut=e(ga,2);co(Ut,{list:[["On Ideal Lattices and Learning with Errors Over Rings (LPR, 2010)","https://eprint.iacr.org/2012/230"],["The Learning with Errors Problem (Regev's survey)","https://cims.nyu.edu/~regev/papers/lwesurvey.pdf"],["Worst-case to average-case reduction for LWE (MIT lecture notes)","https://people.csail.mit.edu/vinodv/CS294/lecture4.pdf"],["FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism","https://csrc.nist.gov/pubs/fips/203/final"],["Ring learning with errors (Wikipedia)","https://en.wikipedia.org/wiki/Ring_learning_with_errors"]]}),l($e,A),Ve()}export{_r as component};
