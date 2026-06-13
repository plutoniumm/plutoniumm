import{$ as e,A as l,D as T,E as xe,G as It,I as De,K as G,M as g,N as ln,P as Je,Q as fe,R as a,T as we,V as c,W as Me,Z as r,_ as Pt,at as qa,ct as Ue,d as Ta,et as E,f as Ea,ft as h,it as cn,k as Y,lt as ea,mt as dn,nt as $,o as aa,p as L,pt as o,r as vn,tt as Ze,v as Ye,w as t}from"../chunks/BvhN-6Rm.js";import"../chunks/DwdwGuwu.js";import"../chunks/DDwXJn8G.js";import{a as ce,d as hn,i as n,n as pn,o as un,t as U,u as mn}from"../chunks/gs4HCyIA.js";var Oe=g('<span class="plus svelte-11fkcz8">+</span>'),jt=g("<sup></sup>"),_n=g('<span class="pow ml2 svelte-11fkcz8">x <!></span>'),Kt=g('<!> <span class="cell svelte-11fkcz8"><input class="tc svelte-11fkcz8" type="number" min="0" step="1"/> <!></span>',1),fn=g('<span class="pow ml2 svelte-11fkcz8">x<!></span>'),Ct=g('<span class="term svelte-11fkcz8">0</span>'),wa=g("<sup> </sup>"),ka=g("x<!>",1),bn=g("<!> <span> <!></span>",1),yn=g('<b class="wrap fw7 svelte-11fkcz8"> </b>'),gn=g('<!> <span class="term svelte-11fkcz8"><!> <!><!><!></span>',1),xn=g('<span class="term final fw7 svelte-11fkcz8">0</span>'),wn=g('<!> <span class="term final fw7 svelte-11fkcz8"> <!></span>',1),kn=g('<div class="ringmul tc mx-a my20 p10 rx10 svelte-11fkcz8"><div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">a(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">b(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">a·b</span> <span class="plus svelte-11fkcz8">=</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">x<sup></sup> ≡ −1</span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8"></span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="note mt10 svelte-11fkcz8">every product in <b>R<sub></sub></b> </div></div>');function qn(We,Se){ea(Se,!1);const R=17,M=4;let z=E([1,2,3,4]),x=E([2,1,0,0]);const re=p=>(p%R+R)%R,X=p=>{const s=Math.trunc(Number(p));return Number.isFinite(s)?re(s):0};let A=E([]),N=E([]),K=E([]);const B=p=>p.map((s,v)=>({v:s,i:v})).filter(s=>s.v!==0);Me(()=>(a(z),a(x)),()=>{const p=a(z).map(X),s=a(x).map(X),v=new Array(2*M-1).fill(0);for(let _=0;_<M;_++)for(let y=0;y<M;y++)v[_+y]+=p[_]*s[y];$(A,v),$(K,v.slice(0,M).map((_,y)=>({lo:_,hi:v[y+M]||0,i:y})).filter(_=>_.lo!==0||_.hi!==0)),$(N,v.slice(0,M).map((_,y)=>re(_-(v[y+M]||0))))}),It(),aa();var C=kn(),k=r(C),be=e(r(k),4);we(be,1,()=>a(z),xe,(p,s,v)=>{var _=Kt(),y=fe(_),J=d=>{var u=Oe();l(d,u)};T(y,d=>{v>0&&d(J)});var j=e(y,2),w=r(j);Ea(w),L(w,"max",R-1);var Q=e(w,2),V=d=>{var u=_n(),Z=e(r(u)),ee=I=>{var F=jt();F.textContent=v,l(I,F)};T(Z,I=>{v>1&&I(ee)}),o(u),l(d,u)};T(Q,d=>{v>0&&d(V)}),o(j),Ta(w,()=>a(z)[v],d=>Ze(z,a(z)[v]=d)),De("change",w,()=>Ze(z,a(z)[v]=X(a(z)[v]))),l(p,_)}),o(k);var ae=e(k,2),se=e(r(ae),4);we(se,1,()=>a(x),xe,(p,s,v)=>{var _=Kt(),y=fe(_),J=d=>{var u=Oe();l(d,u)};T(y,d=>{v>0&&d(J)});var j=e(y,2),w=r(j);Ea(w),L(w,"max",R-1);var Q=e(w,2),V=d=>{var u=fn(),Z=e(r(u)),ee=I=>{var F=jt();F.textContent=v,l(I,F)};T(Z,I=>{v>1&&I(ee)}),o(u),l(d,u)};T(Q,d=>{v>0&&d(V)}),o(j),Ta(w,()=>a(x)[v],d=>Ze(x,a(x)[v]=d)),De("change",w,()=>Ze(x,a(x)[v]=X(a(x)[v]))),l(p,_)}),o(ae);var S=e(ae,2),P=e(r(S),4),H=p=>{var s=Ct();l(p,s)},te=qa(()=>(a(A),c(()=>B(a(A)).length===0)));T(P,p=>{a(te)&&p(H)});var ie=e(P,2);we(ie,1,()=>(a(A),c(()=>B(a(A)))),xe,(p,s,v)=>{var _=bn(),y=fe(_),J=u=>{var Z=Oe();l(u,Z)};T(y,u=>{v>0&&u(J)});var j=e(y,2);let w;var Q=r(j,!0),V=e(Q),d=u=>{var Z=ka(),ee=e(fe(Z)),I=F=>{var f=wa(),D=r(f,!0);o(f),G(()=>Y(D,(a(s),c(()=>a(s).i)))),l(F,f)};T(ee,F=>{a(s),c(()=>a(s).i>1)&&F(I)}),l(u,Z)};T(V,u=>{a(s),c(()=>a(s).i>0)&&u(d)}),o(j),G(()=>{w=Ye(j,1,"term svelte-11fkcz8",null,w,{wrap:a(s).i>=M,fw7:a(s).i>=M}),Y(Q,(a(s),c(()=>a(s).v)))}),l(p,_)}),o(S);var ne=e(S,2),pe=r(ne),le=e(r(pe));le.textContent="4",h(),o(pe);var ue=e(pe,4),Le=p=>{var s=Ct();l(p,s)};T(ue,p=>{a(K),c(()=>a(K).length===0)&&p(Le)});var de=e(ue,2);we(de,1,()=>a(K),xe,(p,s,v)=>{var _=gn(),y=fe(_),J=f=>{var D=Oe();l(f,D)};T(y,f=>{v>0&&f(J)});var j=e(y,2),w=r(j),Q=f=>{var D=Je("(");l(f,D)};T(w,f=>{a(s),c(()=>a(s).hi&&a(s).i>0)&&f(Q)});var V=e(w,1,!0),d=e(V),u=f=>{var D=yn(),he=r(D);o(D),G(()=>Y(he,`−${a(s),c(()=>a(s).hi)??""}`)),l(f,D)};T(d,f=>{a(s),c(()=>a(s).hi)&&f(u)});var Z=e(d),ee=f=>{var D=Je(")");l(f,D)};T(Z,f=>{a(s),c(()=>a(s).hi&&a(s).i>0)&&f(ee)});var I=e(Z),F=f=>{var D=ka(),he=e(fe(D)),Pe=ze=>{var Ae=wa(),Fe=r(Ae,!0);o(Ae),G(()=>Y(Fe,(a(s),c(()=>a(s).i)))),l(ze,Ae)};T(he,ze=>{a(s),c(()=>a(s).i>1)&&ze(Pe)}),l(f,D)};T(I,f=>{a(s),c(()=>a(s).i>0)&&f(F)}),o(j),G(()=>Y(V,(a(s),c(()=>a(s).lo)))),l(p,_)}),o(ne);var ve=e(ne,2),ke=r(ve);ke.textContent="mod 17";var qe=e(ke,4),W=p=>{var s=xn();l(p,s)},Ce=qa(()=>(a(N),c(()=>B(a(N)).length===0)));T(qe,p=>{a(Ce)&&p(W)});var Te=e(qe,2);we(Te,1,()=>(a(N),c(()=>B(a(N)))),xe,(p,s,v)=>{var _=wn(),y=fe(_),J=d=>{var u=Oe();l(d,u)};T(y,d=>{v>0&&d(J)});var j=e(y,2),w=r(j,!0),Q=e(w),V=d=>{var u=ka(),Z=e(fe(u)),ee=I=>{var F=wa(),f=r(F,!0);o(F),G(()=>Y(f,(a(s),c(()=>a(s).i)))),l(I,F)};T(Z,I=>{a(s),c(()=>a(s).i>1)&&I(ee)}),l(d,u)};T(Q,d=>{a(s),c(()=>a(s).i>0)&&d(V)}),o(j),G(()=>Y(w,(a(s),c(()=>a(s).v)))),l(p,_)}),o(ve);var Ee=e(ve,2),ye=e(r(Ee)),Re=e(r(ye));Re.textContent="17",o(ye);var Ie=e(ye);Ie.nodeValue=` with n = 4: long
        multiplication, the tinted overflow terms fold back with a sign flip,
        coefficients wrap mod 17`,o(Ee),o(C),l(We,C),Ue()}var Tn=g('<button type="button"> </button>'),En=g('<span class="pcell tr svelte-1x9pnmt"> </span>'),$n=g('<div class="prow f al-ct my2 svelte-1x9pnmt"><span> </span> <span class="pname tr svelte-1x9pnmt"> </span> <!></div>'),Mn=ln('<rect width="26"></rect><text y="206" text-anchor="middle"> </text>',1),Ln=g(`<div class="hint tc mt5 svelte-1x9pnmt">no noise at all: decryption is perfect, but b = a·s exactly, so Eve
            computes b·a<sup>−1</sup> and has the secret key</div>`),Rn=g(`<div class="pg mx-a my20 p10 rx10 svelte-1x9pnmt"><div class="f al-ct j-ct fw g10 mb10"><label>error size η = <b> </b> <input type="range" min="0" max="6" class="svelte-1x9pnmt"/></label> <button type="button" class="ptr rx5 svelte-1x9pnmt">new keys</button> <button type="button" class="ptr rx5 svelte-1x9pnmt">re-encrypt</button></div> <div class="tc my5"><span class="cap svelte-1x9pnmt">message (click bits to flip):</span> <!></div> <div class="polys svelte-1x9pnmt"></div> <div class="tc"><svg width="430" height="216" font-family="monospace" font-size="10" class="svelte-1x9pnmt"><rect x="44" style="fill:color-mix(in srgb, var(--c3) 10%, transparent)"></rect><line x1="44" style="stroke:var(--g2)"></line><line x1="44" style="stroke:var(--c4)" stroke-dasharray="4 3"></line><line x1="44" style="stroke:var(--c4)" stroke-dasharray="4 3"></line><text x="40" text-anchor="end">+48</text><text x="40" text-anchor="end" style="fill:var(--c4)">+q/4</text><text x="40" text-anchor="end">0</text><text x="40" text-anchor="end" style="fill:var(--c4)">−q/4</text><text x="40" text-anchor="end">−48</text><!></svg> <div class="cap svelte-1x9pnmt">coefficients of v − u·s (centered mod 97), decoded bits below</div></div> <div><!></div> <!> <div class="note tc mt10 svelte-1x9pnmt">Eve only ever sees a, b, u, v. Each is indistinguishable from uniform
        random numbers mod 97; the secret s and all the error polynomials never
        leave home.</div></div>`);function zn(We,Se){ea(Se,!1);const R=E(),M=E(),z=E(),x=E(),re=E(),X=E(),A=8,N=97,K=48,B=N/4;let C=E(1),k=E([1,0,1,1,0,0,1,0]),be=E(0),ae=E(0);const se=i=>(i%N+N)%N,S=i=>se(i)>N/2?se(i)-N:se(i),P=(i,m)=>i+Math.floor(Math.random()*(m-i+1)),H=i=>Array.from({length:A},()=>P(-i,i)),te=()=>Array.from({length:A},()=>P(0,N-1));function ie(i,m){const b=new Array(A).fill(0);for(let q=0;q<A;q++)for(let O=0;O<A;O++)b[(q+O)%A]+=(q+O<A?1:-1)*i[q]*m[O];return b.map(se)}const ne=(i,m)=>i.map((b,q)=>se(b+m[q])),pe=(i,m)=>i.map((b,q)=>se(b-m[q]));let le=E([]),ue=E([]),Le=E([]),de=E([]),ve=E([]),ke=E([]),qe=E([]);const W=i=>100-i*(88/K),Ce=i=>48+i*46;Me(()=>(a(be),a(C),a(le),a(ue),a(Le)),()=>{a(be),a(C),$(le,te()),$(ue,H(Math.max(1,+a(C)))),$(Le,H(+a(C))),$(de,ne(ie(a(le),a(ue)),a(Le)))}),Me(()=>(a(ae),a(de),a(C)),()=>{a(ae),a(de),$(ve,H(Math.max(1,+a(C)))),$(ke,H(+a(C))),$(qe,H(+a(C)))}),Me(()=>(a(le),a(ve),a(ke)),()=>{$(R,ne(ie(a(le),a(ve)),a(ke)))}),Me(()=>(a(de),a(ve),a(qe),a(k)),()=>{$(M,ne(ne(ie(a(de),a(ve)),a(qe)),a(k).map(i=>i*K)))}),Me(()=>(a(M),a(R),a(ue)),()=>{$(z,pe(a(M),ie(a(R),a(ue))).map(S))}),Me(()=>a(z),()=>{$(x,a(z).map(i=>Math.abs(i)>B?1:0))}),Me(()=>(a(x),a(k)),()=>{$(re,a(x).filter((i,m)=>i!==a(k)[m]).length)}),Me(()=>(a(z),a(k)),()=>{$(X,Math.max(...a(z).map((i,m)=>Math.abs(S(i-a(k)[m]*K)))))}),It(),aa();var Te=Rn(),Ee=r(Te),ye=r(Ee),Re=e(r(ye)),Ie=r(Re,!0);o(Re);var p=e(Re,2);Ea(p),o(ye);var s=e(ye,2),v=e(s,2);o(Ee);var _=e(Ee,2),y=e(r(_),2);we(y,1,()=>a(k),xe,(i,m,b)=>{var q=Tn();let O;var oe=r(q,!0);o(q),G(()=>{O=Ye(q,1,"bit ptr rx5 mx2 svelte-1x9pnmt",null,O,{on:a(m)===1}),Y(oe,a(m))}),De("click",q,()=>Ze(k,a(k)[b]=1-a(k)[b])),l(i,q)}),o(_);var J=e(_,2);we(J,5,()=>[["pub","public","a",a(le)],["pub","public","b",a(de)],["sec","secret","s",a(ue)],["ct","sent","u",a(R)],["ct","sent","v",a(M)]],xe,(i,m)=>{var b=qa(()=>dn(a(m),4));let q=()=>a(b)[0],O=()=>a(b)[1],oe=()=>a(b)[2],$e=()=>a(b)[3];var ge=$n(),me=r(ge),je=r(me,!0);o(me);var _e=e(me,2),Ne=r(_e);o(_e);var Be=e(_e,2);we(Be,1,$e,xe,(Ge,Ve,ta,$a)=>{var Ke=En(),Xe=r(Ke,!0);o(Ke),G(()=>Y(Xe,a(Ve))),l(Ge,Ke)}),o(ge),G(()=>{Ye(me,1,`tag ${q()??""} d-ib tc`,"svelte-1x9pnmt"),Y(je,O()),Y(Ne,`${oe()??""} =`)}),l(i,ge)}),o(J);var j=e(J,2),w=r(j),Q=r(w);L(Q,"width",A*46-16);var V=e(Q);L(V,"x2",396);var d=e(V);L(d,"x2",396);var u=e(d);L(u,"x2",396);var Z=e(u),ee=e(Z),I=e(ee),F=e(I),f=e(F),D=e(f);we(D,1,()=>a(z),xe,(i,m,b)=>{var q=Mn(),O=fe(q),oe=e(O),$e=r(oe,!0);o(oe),G((ge,me,je,_e)=>{L(O,"x",ge),L(O,"y",me),L(O,"height",je),Pt(O,`fill:${a(x),a(k),c(()=>a(x)[b]===a(k)[b]?"var(--ok)":"var(--no)")??""}`),L(oe,"x",_e),Pt(oe,`fill:${a(x),a(k),c(()=>a(x)[b]===a(k)[b]?"var(--g3)":"var(--no)")??""}`),L(oe,"font-weight",(a(x),a(k),c(()=>a(x)[b]===a(k)[b]?"normal":"bold"))),Y($e,(a(x),c(()=>a(x)[b])))},[()=>c(()=>Ce(b)),()=>(a(m),c(()=>Math.min(W(0),W(a(m))))),()=>(a(m),c(()=>Math.abs(W(a(m))-W(0))||1)),()=>c(()=>Ce(b)+13)]),l(i,q)}),o(w),h(2),o(j);var he=e(j,2);let Pe;var ze=r(he),Ae=i=>{var m=Je();G(()=>Y(m,`✓ all 8 bits decoded correctly · largest noise |w| = ${a(X)??""} of the
            24.25 allowed`)),l(i,m)},Fe=i=>{var m=Je();G(()=>Y(m,`✗ ${a(re)??""} of 8 bits flipped · largest noise |w| = ${a(X)??""} blew past
            the limit of 24.25`)),l(i,m)};T(ze,i=>{a(re)===0?i(Ae):i(Fe,-1)}),o(he);var He=e(he,2),Qe=i=>{var m=Ln();l(i,m)};T(He,i=>{+a(C)==0&&i(Qe)}),h(2),o(Te),G((i,m,b,q,O,oe,$e,ge,me,je,_e,Ne,Be)=>{Y(Ie,a(C)),L(Q,"y",i),L(Q,"height",m),L(V,"y1",b),L(V,"y2",q),L(d,"y1",O),L(d,"y2",oe),L(u,"y1",$e),L(u,"y2",ge),L(Z,"y",me),L(ee,"y",je),L(I,"y",_e),L(F,"y",Ne),L(f,"y",Be),Pe=Ye(he,1,"verdict tc mt10 svelte-1x9pnmt",null,Pe,{bad:a(re)>0})},[()=>c(()=>W(B)),()=>c(()=>W(-24.25)-W(B)),()=>c(()=>W(0)),()=>c(()=>W(0)),()=>c(()=>W(B)),()=>c(()=>W(B)),()=>c(()=>W(-24.25)),()=>c(()=>W(-24.25)),()=>c(()=>W(K)+3),()=>c(()=>W(B)+3),()=>c(()=>W(0)+3),()=>c(()=>W(-24.25)+3),()=>c(()=>W(-48)+3)]),Ta(p,()=>a(C),i=>$(C,i)),De("click",s,()=>$(be,a(be)+1)),De("click",v,()=>$(ae,a(ae)+1)),l(We,Te),Ue()}var An=g(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is ML-KEM,
                the lattice scheme this article builds, hybridised with the
                classical elliptic-curve exchange.</p>`),Wn=g(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is
                classical only, no ML-KEM. A recording of that handshake could
                be unwrapped by a future quantum computer.</p>`),Sn=g(`<p class="svelte-kugc17">The request to the test server did not make it (an ad blocker, a
                strict privacy mode, or being offline will do that), so there is
                nothing to report.</p>`),Pn=g('<div><span class="k d-ib svelte-kugc17"> </span> </div>'),jn=g('<div class="trace my10 py5 px10 rx5 svelte-kugc17"></div>'),Kn=g(`<!> <!> <p class="note svelte-kugc17">via pq.cloudflareresearch.com/cdn-cgi/trace, which echoes back the
            key exchange it negotiated with you. This tests your browser, not
            this site.</p>`,1),Cn=g("<div><!></div>");function In(We,Se){ea(Se,!1);let R=E("checking"),M=E(""),z=E([]);const x={checking:"… checking whether your browser uses post-quantum crypto",pq:"✓ your browser is using post-quantum crypto",classical:"✗ your browser is not using post-quantum crypto",unknown:"could not check post-quantum support"},re=["kex","tls","http","h","ip","colo","loc","uag"];vn(async()=>{try{const A=await(await fetch("https://pq.cloudflareresearch.com/cdn-cgi/trace")).text();$(z,(A.match(/[ -~]+/g)||[]).map(K=>{const B=K.indexOf("=");return[K.slice(0,B),K.slice(B+1)]}).filter(K=>re.includes(K[0])));const N=A.match(/kex=([A-Za-z0-9_-]+)/);$(M,N?N[1]:""),a(M)?a(M).includes("MLKEM")||a(M).includes("Kyber")?$(R,"pq"):$(R,"classical"):$(R,"unknown")}catch{$(R,"unknown")}}),aa();var X=Cn();hn(r(X),{get title(){return x[a(R)]},children:(A,N)=>{var K=Kn(),B=fe(K),C=S=>{var P=An(),H=e(r(P)),te=r(H,!0);o(H),h(),o(P),G(()=>Y(te,a(M))),l(S,P)},k=S=>{var P=Wn(),H=e(r(P)),te=r(H,!0);o(H),h(),o(P),G(()=>Y(te,a(M))),l(S,P)},be=S=>{var P=Sn();l(S,P)};T(B,S=>{a(R)==="pq"?S(C):a(R)==="classical"?S(k,1):a(R)==="unknown"&&S(be,2)});var ae=e(B,2),se=S=>{var P=jn();we(P,5,()=>a(z),xe,(H,te)=>{var ie=Pn(),ne=r(ie),pe=r(ne,!0);o(ne);var le=e(ne,1,!0);o(ie),G(()=>{Y(pe,a(te)[0]),Y(le,a(te)[1])}),l(H,ie)}),o(P),l(S,P)};T(ae,S=>{a(z).length&&S(se)}),h(2),l(A,K)},$$slots:{default:!0}}),o(X),G(()=>Ye(X,1,`pqc ${a(R)==="pq"?"green":"yellow"}`,"svelte-kugc17")),l(We,X),Ue()}var Fn=g(`<!> <!> Cast: <ul><li>Alice (wants to receive secrets)</li> <li>Bob (wants to send her one)</li> <li>Eve (reads everything in transit)</li> <li>a large quantum computer (arrival date unknown)</li></ul> <!> <p>Nearly every secret on the internet is guarded by one of two locks: RSA,
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
    Cryptography.</p> <!>`,1);function Dn(We,Se){ea(Se,!1),aa();var R=Fn(),M=fe(R);un(M,{title:"Ring Learning with Errors",sub:"Post-Quantum Cryptography",desc:"Quantum-safe encryption from deliberately noisy polynomial arithmetic",date:"10 June 2026"});var z=e(M,2);In(z,{});var x=e(z,4);{let sn=cn(()=>[U("q","The size of the clock: a prime modulus, all arithmetic keeps only remainders, e.g. $20 \\bmod 7 = 6$. Toy values 17 and 97 here; ML-KEM uses 3329"),U("n","Ring dimension, a power of two: every polynomial is a tray of $n$ coefficients. Toy values 4 and 8 here; ML-KEM uses 256"),U("x","Formal placeholder, never given a value; its powers only label coefficient slots"),U("s","Alice's secret, a polynomial with small coefficients; the thing Eve wants"),U("a","Public polynomial, every coefficient drawn uniformly at random"),U("b","Public noisy product b = a·s + e, the other half of Alice's public key"),U("e","Error polynomial: small, fresh, deliberate. The lie that makes the problem hard"),U("pk","Alice's public key, the pair $(a, b)$; published to everyone, Eve included"),U("sk","Alice's secret key, just $s$; never leaves her machine"),U("r","Bob's own small randomness, drawn fresh for every encryption"),U("m","The message, a polynomial with coefficients 0 or 1 (one bit per slot)"),U("u","First half of the ciphertext, u = a·r + e₁"),U("v","Second half of the ciphertext, v = b·r + e₂ + ⌊q/2⌋·m"),U("w","Decryption residue w = e·r − e₁·s + e₂; rounding succeeds while every |wᵢ| < q/4"),U("η","Noise bound: 'small' always means coefficients in [−η, η]"),U("R","The polynomial ring itself; $R_q = \\mathbb{Z}_q[x]/(x^n + 1)$, where all the arithmetic of the scheme takes place")]);pn(x,{get list(){return a(sn)}})}var re=e(x,8),X=e(r(re));t(X,()=>n`q`);var A=e(X,2);t(A,()=>n`q`);var N=e(A,2);t(N,()=>n`q`);var K=e(N,2);t(K,()=>n`15 + 5 = 20`);var B=e(K,2);t(B,()=>n`15 + 5 \\equiv 3`);var C=e(B,2);t(C,()=>n`9 \\times 9 = 81 = 4 \\times 17 +
    13`);var k=e(C,2);t(k,()=>n`9 \\times 9 \\equiv 13`);var be=e(k,2);t(be,()=>n`16
    \\equiv -1`),h(),o(re);var ae=e(re,2),se=e(r(ae));t(se,()=>n`q`);var S=e(se,2);t(S,()=>n`(s_1,
    s_2) = (3, 7)`),h(),o(ae);var P=e(ae,2);t(P,()=>ce`
\\begin{aligned}
2 s_1 + 5 s_2 &\\equiv 7 \\pmod{17}\\\\
4 s_1 + s_2 &\\equiv 2 \\pmod{17}
\\end{aligned}
`);var H=e(P,4);t(H,()=>ce`
\\begin{aligned}
2 \\times \\text{first} - \\text{second}: \\qquad 9 s_2 &\\equiv 14 - 2 \\equiv 12
&&\\Rightarrow\\ s_2 \\equiv 7\\\\
\\text{put } s_2 \\text{ into second}: \\qquad 4 s_1 &\\equiv 2 - 7 \\equiv 12
&&\\Rightarrow\\ s_1 \\equiv 3
\\end{aligned}
`);var te=e(H,2),ie=e(r(te));t(ie,()=>n`9 \\times 7 = 63 \\equiv 12`);var ne=e(ie,2);t(ne,()=>n`4
    \\times 3 = 12`),h(),o(te);var pe=e(te,2),le=e(r(pe));t(le,()=>n`+1`);var ue=e(le,2);t(ue,()=>n`-1`),h(),o(pe);var Le=e(pe,2);t(Le,()=>ce`
\\begin{aligned}
2 s_1 + 5 s_2 &\\approx 8 \\pmod{17}\\\\
4 s_1 + s_2 &\\approx 1 \\pmod{17}
\\end{aligned}
`);var de=e(Le,2),ve=e(r(de));t(ve,()=>n`(s_1, s_2) = (14, 13)`);var ke=e(ve,2);t(ke,()=>n`(3, 7)`);var qe=e(ke,2);t(qe,()=>n`9 \\mod 17`);var W=e(qe,2);t(W,()=>n`\\pm 1`);var Ce=e(W,2);t(Ce,()=>n`\\pm 9`),h(),o(de);var Te=e(de,4),Ee=e(r(Te),3);t(Ee,()=>n`b_i \\approx \\vec{a}_i \\cdot \\vec{s}`);var ye=e(Ee,2);t(ye,()=>n`\\vec{s}`);var Re=e(ye,2);t(Re,()=>n`\\vec{s}`);var Ie=e(Re,2);t(Ie,()=>n`\\vec{a}_i`);var p=e(Ie,2);t(p,()=>n`\\vec{a}_i \\cdot \\vec{s}`);var s=e(p,2);t(s,()=>n`2 s_1 + 5 s_2`),h(3),o(Te);var v=e(Te,4),_=e(r(v));t(_,()=>n`n`);var y=e(_,2);t(y,()=>n`n`);var J=e(y,2);t(J,()=>n`n`);var j=e(J,2);t(j,()=>n`n`);var w=e(j,2);t(w,()=>n`n^2`);var Q=e(w,2);t(Q,()=>n`n`);var V=e(Q,2);t(V,()=>n`n`),h(),o(v);var d=e(v,2),u=e(r(d));t(u,()=>n`n`);var Z=e(u,2);t(Z,()=>n`q`);var ee=e(Z,2);t(ee,()=>n`n`);var I=e(ee,2);t(I,()=>n`x`);var F=e(I,2);t(F,()=>n`q`);var f=e(F,2);t(f,()=>n`x^n`),h(),o(d);var D=e(d,2);t(D,()=>ce`x^n \\equiv -1`);var he=e(D,2),Pe=e(r(he));t(Pe,()=>n`x^n + 1`);var ze=e(Pe,2);t(ze,()=>n`x^{n+2}`);var Ae=e(ze,2);t(Ae,()=>n`-x^2`);var Fe=e(Ae,2);t(Fe,()=>n`n = 4`);var He=e(Fe,2);t(He,()=>n`q
    = 17`);var Qe=e(He,2);t(Qe,()=>n`1 + 2x + 3x^2 + 4x^3`);var i=e(Qe,2);t(i,()=>n`2 + x`),h(),o(he);var m=e(he,2);t(m,()=>ce`
\\begin{aligned}
(1 + 2x + 3x^2 + 4x^3)(2 + x) &= 2 + 5x + 8x^2 + 11x^3 + 4x^4\\\\
&\\equiv -2 + 5x + 8x^2 + 11x^3\\\\
&\\equiv 15 + 5x + 8x^2 + 11x^3 \\pmod{17}
\\end{aligned}
`);var b=e(m,2),q=e(r(b));t(q,()=>n`4x^4 \\equiv -4`);var O=e(q,2);t(O,()=>n`x^3`),h(),o(b);var oe=e(b,4);qn(oe,{});var $e=e(oe,2),ge=e(r($e));t(ge,()=>n`R_q = \\mathbb{Z}_q[x]/(x^n + 1)`);var me=e(ge,2);t(me,()=>n`n`);var je=e(me,2);t(je,()=>n`q`),h(5),o($e);var _e=e($e,2),Ne=e(r(_e));t(Ne,()=>n`\\mathbb{Z}_q`);var Be=e(Ne,2);t(Be,()=>n`\\mathbb{Z}_q[x]`);var Ge=e(Be,2);t(Ge,()=>n`x`);var Ve=e(Ge,2);t(Ve,()=>n`(x^n + 1)`);var ta=e(Ve,2);t(ta,()=>n`x^n + 1`);var $a=e(ta,2);t($a,()=>n`x^n \\equiv -1`),h(),o(_e);var Ke=e(_e,2),Xe=e(r(Ke));t(Xe,()=>n`n`);var Ma=e(Xe,2);t(Ma,()=>n`n`);var La=e(Ma,2);t(La,()=>n`n^2`);var Ra=e(La,2);t(Ra,()=>n`\\mathcal{O}(n \\log n)`);var Ft=e(Ra,2);t(Ft,()=>n`\\mathcal{O}(n^2)`),h(),o(Ke);var na=e(Ke,4),za=e(r(na));t(za,()=>n`s`);var Aa=e(za,4);t(Aa,()=>n`\\{-1, 0,
    1\\}`);var Wa=e(Aa,2);t(Wa,()=>n`a`);var Sa=e(Wa,2);t(Sa,()=>n`n`);var Pa=e(Sa,2);t(Pa,()=>n`0`);var ja=e(Pa,2);t(ja,()=>n`q-1`);var Nt=e(ja,2);t(Nt,()=>n`e`),h(),o(na);var Ka=e(na,2);t(Ka,()=>ce`(a,\\ b = a \\cdot s + e)`);var oa=e(Ka,2),Ca=e(r(oa));t(Ca,()=>n`n = 4`);var Bt=e(Ca,2);t(Bt,()=>n`q = 17`),h(),o(oa);var Ia=e(oa,2);t(Ia,()=>ce`
\\begin{alignedat}{2}
s &= 1 + x - x^3 \\qquad && \\text{secret, small}\\\\
a &= 6 + 14x + 3x^2 + 9x^3\\quad && \\text{public, uniform}\\\\
a \\cdot s &\\equiv 11 + 6x + 9x^2 + 6x^3\\quad && \\text{fold, then mod 17}\\\\
e &= 1 - x + x^3 && \\text{small lies}\\\\
b &\\equiv 12 + 5x + 9x^2 + 7x^3 && \\text{published}
\\end{alignedat}
`);var ra=e(Ia,2),Fa=e(r(ra));t(Fa,()=>n`(a, b)`);var Na=e(Fa,2);t(Na,()=>n`s`);var Ot=e(Na,2);t(Ot,()=>n`b`),h(),o(ra);var sa=e(ra,2),Ba=e(r(sa));t(Ba,()=>n`b = a \\cdot s`);var Oa=e(Ba,2);t(Oa,()=>n`s = b \\cdot a^{-1}`);var Zt=e(Oa,2);t(Zt,()=>n`a`),h(),o(sa);var ia=e(sa,6),Za=e(r(ia));t(Za,()=>n`[-\\eta,
    \\eta]`);var Dt=e(Za,2);t(Dt,()=>n`\\eta`),h(),o(ia);var la=e(ia,2),Da=e(r(la),2);t(Da,()=>n`a`);var Ya=e(Da,2);t(Ya,()=>n`s`);var Ha=e(Ya,2);t(Ha,()=>n`e`);var Yt=e(Ha,2);t(Yt,()=>n`s`),h(),o(la);var Qa=e(la,2);t(Qa,()=>ce`
\\mathrm{pk} = (a,\\ b = a \\cdot s + e), \\qquad \\mathrm{sk} = s
`);var Ga=e(Qa,4);t(Ga,()=>ce`
\\begin{aligned}
\\mathrm{pk} &= (6 + 14x + 3x^2 + 9x^3,\\ \\ 12 + 5x + 9x^2 + 7x^3)\\\\
\\mathrm{sk} &= 1 + x - x^3
\\end{aligned}
`);var ca=e(Ga,2),Va=e(r(ca),2);t(Va,()=>n`n`);var Xa=e(Va,2);t(Xa,()=>n`m`);var Ja=e(Xa,2);t(Ja,()=>n`\\lfloor
    q/2 \\rfloor`);var Ua=e(Ja,2);t(Ua,()=>n`r`);var et=e(Ua,2);t(et,()=>n`e_1`);var Ht=e(et,2);t(Ht,()=>n`e_2`),h(),o(ca);var at=e(ca,2);t(at,()=>ce`
\\begin{aligned}
u &= a \\cdot r + e_1\\\\
v &= b \\cdot r + e_2 + \\lfloor q/2 \\rfloor \\cdot m
\\end{aligned}
`);var da=e(at,2),tt=e(r(da));t(tt,()=>n`(1, 0, 1, 1)`);var nt=e(tt,2);t(nt,()=>n`m = 1 + x^2 + x^3`);var ot=e(nt,2);t(ot,()=>n`\\lfloor 17/2 \\rfloor = 8`);var rt=e(ot,2);t(rt,()=>n`8 + 8x^2 + 8x^3`);var st=e(rt,2);t(st,()=>n`r = 1 - x^2 + x^3`);var it=e(st,2);t(it,()=>n`e_1 = x + x^2 - x^3`);var Qt=e(it,2);t(Qt,()=>n`e_2 = -1 + x`),h(),o(da);var lt=e(da,2);t(lt,()=>ce`
\\begin{aligned}
u &= a \\cdot r + e_1 = (12 + 3x + 5x^2 + x^3) + (x + x^2 - x^3)\\\\
&\\equiv 12 + 4x + 6x^2\\\\[4pt]
v &= b \\cdot r + e_2 + 8m\\\\
&= (16 + 3x + 7x^2 + 14x^3) + (-1 + x) + (8 + 8x^2 + 8x^3)\\\\
&\\equiv 6 + 4x + 15x^2 + 5x^3
\\end{aligned}
`);var va=e(lt,2),ct=e(r(va));t(ct,()=>n`u`);var Gt=e(ct,2);t(Gt,()=>n`v`),h(),o(va);var ha=e(va,2),Vt=e(r(ha),2);t(Vt,()=>n`v - u \\cdot s`),h(),o(ha);var dt=e(ha,2);t(dt,()=>ce`
\\begin{aligned}
v - u \\cdot s &= (a s + e) r + e_2 + \\lfloor q/2 \\rfloor m - (a r + e_1) s\\\\
&= \\lfloor q/2 \\rfloor \\, m + \\underbrace{e \\cdot r - e_1 \\cdot s + e_2}_{w,\\ \\text{small}}
\\end{aligned}
`);var pa=e(dt,2),vt=e(r(pa));t(vt,()=>n`a \\cdot r \\cdot s`);var ht=e(vt,2);t(ht,()=>n`w`);var pt=e(ht,2);t(pt,()=>n`m_i \\lfloor q/2
    \\rfloor + w_i`);var ut=e(pt,2);t(ut,()=>n`q/2`);var Xt=e(ut,2);t(Xt,()=>n`|w_i| < q/4`),h(),o(pa);var ua=e(pa,2),Jt=e(r(ua));t(Jt,()=>n`u \\cdot s \\equiv 16 + 5x + 10x^2 +
    11x^3`),h(),o(ua);var mt=e(ua,2);t(mt,()=>ce`
\\begin{aligned}
v - u \\cdot s &\\equiv 7 + 16x + 5x^2 + 11x^3\\\\
&= 7 - x + 5x^2 - 6x^3 \\qquad \\text{(centered mod 17)}\\\\
&= \\underbrace{8 + 8x^2 + 8x^3}_{8m} + \\underbrace{(-1 - x - 3x^2 + 3x^3)}_{w}
\\end{aligned}
`);var ma=e(mt,2),_t=e(r(ma));t(_t,()=>n`w`);var ft=e(_t,2);t(ft,()=>n`q/4 \\approx
    4.25`);var bt=e(ft,2);t(bt,()=>n`-6`);var yt=e(bt,2);t(yt,()=>n`-1`);var Ut=e(yt,2);t(Ut,()=>n`(1, 0, 1, 1)`),h(),o(ma);var _a=e(ma,2),gt=e(r(_a));t(gt,()=>n`e
    \\cdot r`);var xt=e(gt,2);t(xt,()=>n`n`);var wt=e(xt,2);t(wt,()=>n`\\eta`);var kt=e(wt,2);t(kt,()=>n`n \\eta^2`);var qt=e(kt,2);t(qt,()=>n`\\eta`);var en=e(qt,2);t(en,()=>n`2^{160}`),h(),o(_a);var fa=e(_a,4),Tt=e(r(fa));t(Tt,()=>n`n = 8`);var Et=e(Tt,2);t(Et,()=>n`q = 97`);var $t=e(Et,2);t($t,()=>n`\\lfloor q/2 \\rfloor = 48`);var Mt=e($t,2);t(Mt,()=>n`q/4
    \\approx 24`);var an=e(Mt,2);t(an,()=>n`v - u \\cdot s`),h(),o(fa);var Lt=e(fa,2);zn(Lt,{});var ba=e(Lt,4),ya=r(ba),Rt=e(r(ya));t(Rt,()=>n`\\eta = 0`);var tn=e(Rt,2);t(tn,()=>n`b = a \\cdot s`),h(),o(ya);var ga=e(ya,2),nn=e(r(ga));t(nn,()=>n`\\eta = 1`),h(),o(ga);var zt=e(ga,2),on=e(r(zt));t(on,()=>n`\\eta`),h(),o(zt),o(ba);var xa=e(ba,6),At=e(r(xa));t(At,()=>n`n = 256`);var Wt=e(At,2);t(Wt,()=>n`q = 3329`);var St=e(Wt,2);t(St,()=>n`\\eta
    = 2`);var rn=e(St,4);t(rn,()=>n`2^{-164}`),h(),o(xa),mn(e(xa,2),{list:[["On Ideal Lattices and Learning with Errors Over Rings (LPR, 2010)","https://eprint.iacr.org/2012/230"],["The Learning with Errors Problem (Regev's survey)","https://cims.nyu.edu/~regev/papers/lwesurvey.pdf"],["Worst-case to average-case reduction for LWE (MIT lecture notes)","https://people.csail.mit.edu/vinodv/CS294/lecture4.pdf"],["FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism","https://csrc.nist.gov/pubs/fips/203/final"],["Ring learning with errors (Wikipedia)","https://en.wikipedia.org/wiki/Ring_learning_with_errors"]]}),l(We,R),Ue()}export{Dn as component};
