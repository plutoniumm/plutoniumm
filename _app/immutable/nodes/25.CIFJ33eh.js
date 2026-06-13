import{A as rn,B as Me,D as l,E as H,H as X,I as a,J as fe,L as d,N as De,Q as M,V as Kt,X as L,Y as e,Z as Ye,at as h,b as xe,bt as ln,c as k,et as dn,it as Ue,j as Ge,k as g,n as ea,o as qa,ot as o,p as He,q as s,rt as aa,s as Ta,tt as Ea,v as t,vt as cn,x as E,y as we}from"../chunks/Rl5PQ8XL.js";import"../chunks/CCKxRCvr.js";import"../chunks/D3BS_AkK.js";import{a as de,d as vn,i as n,n as hn,o as pn,t as ee,u as un}from"../chunks/BXB8e5cd.js";var Oe=g('<span class="plus svelte-11fkcz8">+</span>'),jt=g("<sup></sup>"),mn=g('<span class="pow ml2 svelte-11fkcz8">x <!></span>'),Pt=g('<!> <span class="cell svelte-11fkcz8"><input class="tc svelte-11fkcz8" type="number" min="0" step="1"/> <!></span>',1),_n=g('<span class="pow ml2 svelte-11fkcz8">x<!></span>'),Ct=g('<span class="term svelte-11fkcz8">0</span>'),wa=g("<sup> </sup>"),ka=g("x<!>",1),fn=g("<!> <span> <!></span>",1),bn=g('<b class="wrap fw7 svelte-11fkcz8"> </b>'),yn=g('<!> <span class="term svelte-11fkcz8"><!> <!><!><!></span>',1),gn=g('<span class="term final fw7 svelte-11fkcz8">0</span>'),xn=g('<!> <span class="term final fw7 svelte-11fkcz8"> <!></span>',1),wn=g('<div class="ringmul tc mx-a my20 p10 rx10 svelte-11fkcz8"><div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">a(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">b(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">a·b</span> <span class="plus svelte-11fkcz8">=</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8">x<sup></sup> ≡ −1</span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl d-ib tr svelte-11fkcz8"></span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="note mt10 svelte-11fkcz8">every product in <b>R<sub></sub></b> </div></div>');function kn(We,Se){Ue(Se,!1);const $=17,R=4;let z=L([1,2,3,4]),x=L([2,1,0,0]);const se=p=>(p%$+$)%$,V=p=>{const r=Math.trunc(Number(p));return Number.isFinite(r)?se(r):0};let A=L([]),F=L([]),C=L([]);const N=p=>p.map((r,v)=>({v:r,i:v})).filter(r=>r.v!==0);Me(()=>(a(z),a(x)),()=>{const p=a(z).map(V),r=a(x).map(V),v=new Array(2*R-1).fill(0);for(let _=0;_<R;_++)for(let y=0;y<R;y++)v[_+y]+=p[_]*r[y];M(A,v),M(C,v.slice(0,R).map((_,y)=>({lo:_,hi:v[y+R]||0,i:y})).filter(_=>_.lo!==0||_.hi!==0)),M(F,v.slice(0,R).map((_,y)=>se(_-(v[y+R]||0))))}),Kt(),ea();var K=wn(),q=s(K),be=e(s(q),4);we(be,1,()=>a(z),xe,(p,r,v)=>{var _=Pt(),y=fe(_),G=c=>{var u=Oe();l(c,u)};E(y,c=>{v>0&&c(G)});var P=e(y,2),w=s(P);Ta(w),k(w,"max",$-1);var Q=e(w,2),J=c=>{var u=mn(),Y=e(s(u)),U=I=>{var B=jt();B.textContent=v,l(I,B)};E(Y,I=>{v>1&&I(U)}),o(u),l(c,u)};E(Q,c=>{v>0&&c(J)}),o(P),qa(w,()=>a(z)[v],c=>Ye(z,a(z)[v]=c)),De("change",w,()=>Ye(z,a(z)[v]=V(a(z)[v]))),l(p,_)}),o(q);var ae=e(q,2),re=e(s(ae),4);we(re,1,()=>a(x),xe,(p,r,v)=>{var _=Pt(),y=fe(_),G=c=>{var u=Oe();l(c,u)};E(y,c=>{v>0&&c(G)});var P=e(y,2),w=s(P);Ta(w),k(w,"max",$-1);var Q=e(w,2),J=c=>{var u=_n(),Y=e(s(u)),U=I=>{var B=jt();B.textContent=v,l(I,B)};E(Y,I=>{v>1&&I(U)}),o(u),l(c,u)};E(Q,c=>{v>0&&c(J)}),o(P),qa(w,()=>a(x)[v],c=>Ye(x,a(x)[v]=c)),De("change",w,()=>Ye(x,a(x)[v]=V(a(x)[v]))),l(p,_)}),o(ae);var S=e(ae,2),j=e(s(S),4),Z=p=>{var r=Ct();l(p,r)},te=Ea(()=>(a(A),d(()=>N(a(A)).length===0)));E(j,p=>{a(te)&&p(Z)});var ie=e(j,2);we(ie,1,()=>(a(A),d(()=>N(a(A)))),xe,(p,r,v)=>{var _=fn(),y=fe(_),G=u=>{var Y=Oe();l(u,Y)};E(y,u=>{v>0&&u(G)});var P=e(y,2);let w;var Q=s(P,!0),J=e(Q),c=u=>{var Y=ka(),U=e(fe(Y)),I=B=>{var f=wa(),D=s(f,!0);o(f),X(()=>H(D,(a(r),d(()=>a(r).i)))),l(B,f)};E(U,B=>{a(r),d(()=>a(r).i>1)&&B(I)}),l(u,Y)};E(J,u=>{a(r),d(()=>a(r).i>0)&&u(c)}),o(P),X(()=>{w=He(P,1,"term svelte-11fkcz8",null,w,{wrap:a(r).i>=R,fw7:a(r).i>=R}),H(Q,(a(r),d(()=>a(r).v)))}),l(p,_)}),o(S);var ne=e(S,2),pe=s(ne),le=e(s(pe));le.textContent="4",h(),o(pe);var ue=e(pe,4),Re=p=>{var r=Ct();l(p,r)};E(ue,p=>{a(C),d(()=>a(C).length===0)&&p(Re)});var ce=e(ue,2);we(ce,1,()=>a(C),xe,(p,r,v)=>{var _=yn(),y=fe(_),G=f=>{var D=Oe();l(f,D)};E(y,f=>{v>0&&f(G)});var P=e(y,2),w=s(P),Q=f=>{var D=Ge("(");l(f,D)};E(w,f=>{a(r),d(()=>a(r).hi&&a(r).i>0)&&f(Q)});var J=e(w,1,!0),c=e(J),u=f=>{var D=bn(),he=s(D);o(D),X(()=>H(he,`−${a(r),d(()=>a(r).hi)??""}`)),l(f,D)};E(c,f=>{a(r),d(()=>a(r).hi)&&f(u)});var Y=e(c),U=f=>{var D=Ge(")");l(f,D)};E(Y,f=>{a(r),d(()=>a(r).hi&&a(r).i>0)&&f(U)});var I=e(Y),B=f=>{var D=ka(),he=e(fe(D)),je=ze=>{var Ae=wa(),Be=s(Ae,!0);o(Ae),X(()=>H(Be,(a(r),d(()=>a(r).i)))),l(ze,Ae)};E(he,ze=>{a(r),d(()=>a(r).i>1)&&ze(je)}),l(f,D)};E(I,f=>{a(r),d(()=>a(r).i>0)&&f(B)}),o(P),X(()=>H(J,(a(r),d(()=>a(r).lo)))),l(p,_)}),o(ne);var ve=e(ne,2),ke=s(ve);ke.textContent="mod 17";var qe=e(ke,4),W=p=>{var r=gn();l(p,r)},Ke=Ea(()=>(a(F),d(()=>N(a(F)).length===0)));E(qe,p=>{a(Ke)&&p(W)});var Te=e(qe,2);we(Te,1,()=>(a(F),d(()=>N(a(F)))),xe,(p,r,v)=>{var _=xn(),y=fe(_),G=c=>{var u=Oe();l(c,u)};E(y,c=>{v>0&&c(G)});var P=e(y,2),w=s(P,!0),Q=e(w),J=c=>{var u=ka(),Y=e(fe(u)),U=I=>{var B=wa(),f=s(B,!0);o(B),X(()=>H(f,(a(r),d(()=>a(r).i)))),l(I,B)};E(Y,I=>{a(r),d(()=>a(r).i>1)&&I(U)}),l(c,u)};E(Q,c=>{a(r),d(()=>a(r).i>0)&&c(J)}),o(P),X(()=>H(w,(a(r),d(()=>a(r).v)))),l(p,_)}),o(ve);var Ee=e(ve,2),ye=e(s(Ee)),$e=e(s(ye));$e.textContent="17",o(ye);var Ie=e(ye);Ie.nodeValue=` with n = 4: long
        multiplication, the tinted overflow terms fold back with a sign flip,
        coefficients wrap mod 17`,o(Ee),o(K),l(We,K),aa()}var qn=g('<button type="button"> </button>'),Tn=g('<span class="pcell tr svelte-1x9pnmt"> </span>'),En=g('<div class="prow f al-ct my2 svelte-1x9pnmt"><span> </span> <span class="pname tr svelte-1x9pnmt"> </span> <!></div>'),Ln=rn('<rect width="26"></rect><text y="206" text-anchor="middle"> </text>',1),Mn=g(`<div class="hint tc mt5 svelte-1x9pnmt">no noise at all: decryption is perfect, but b = a·s exactly, so Eve
            computes b·a<sup>−1</sup> and has the secret key</div>`),Rn=g(`<div class="pg mx-a my20 p10 rx10 svelte-1x9pnmt"><div class="f al-ct j-ct fw g10 mb10"><label>error size η = <b> </b> <input type="range" min="0" max="6" class="svelte-1x9pnmt"/></label> <button type="button" class="ptr rx5 svelte-1x9pnmt">new keys</button> <button type="button" class="ptr rx5 svelte-1x9pnmt">re-encrypt</button></div> <div class="tc my5"><span class="cap svelte-1x9pnmt">message (click bits to flip):</span> <!></div> <div class="polys svelte-1x9pnmt"></div> <div class="tc"><svg width="430" height="216" font-family="monospace" font-size="10" class="svelte-1x9pnmt"><rect x="44" fill="rgba(34, 170, 255, 0.10)"></rect><line x1="44" stroke="#999"></line><line x1="44" stroke="#e67" stroke-dasharray="4 3"></line><line x1="44" stroke="#e67" stroke-dasharray="4 3"></line><text x="40" text-anchor="end">+48</text><text x="40" text-anchor="end" fill="#e67">+q/4</text><text x="40" text-anchor="end">0</text><text x="40" text-anchor="end" fill="#e67">−q/4</text><text x="40" text-anchor="end">−48</text><!></svg> <div class="cap svelte-1x9pnmt">coefficients of v − u·s (centered mod 97), decoded bits below</div></div> <div><!></div> <!> <div class="note tc mt10 svelte-1x9pnmt">Eve only ever sees a, b, u, v. Each is indistinguishable from uniform
        random numbers mod 97; the secret s and all the error polynomials never
        leave home.</div></div>`);function $n(We,Se){Ue(Se,!1);const $=L(),R=L(),z=L(),x=L(),se=L(),V=L(),A=8,F=97,C=48,N=F/4;let K=L(1),q=L([1,0,1,1,0,0,1,0]),be=L(0),ae=L(0);const re=i=>(i%F+F)%F,S=i=>re(i)>F/2?re(i)-F:re(i),j=(i,m)=>i+Math.floor(Math.random()*(m-i+1)),Z=i=>Array.from({length:A},()=>j(-i,i)),te=()=>Array.from({length:A},()=>j(0,F-1));function ie(i,m){const b=new Array(A).fill(0);for(let T=0;T<A;T++)for(let O=0;O<A;O++)b[(T+O)%A]+=(T+O<A?1:-1)*i[T]*m[O];return b.map(re)}const ne=(i,m)=>i.map((b,T)=>re(b+m[T])),pe=(i,m)=>i.map((b,T)=>re(b-m[T]));let le=L([]),ue=L([]),Re=L([]),ce=L([]),ve=L([]),ke=L([]),qe=L([]);const W=i=>100-i*(88/C),Ke=i=>48+i*46;Me(()=>(a(be),a(K),a(le),a(ue),a(Re)),()=>{a(be),a(K),M(le,te()),M(ue,Z(Math.max(1,+a(K)))),M(Re,Z(+a(K))),M(ce,ne(ie(a(le),a(ue)),a(Re)))}),Me(()=>(a(ae),a(ce),a(K)),()=>{a(ae),a(ce),M(ve,Z(Math.max(1,+a(K)))),M(ke,Z(+a(K))),M(qe,Z(+a(K)))}),Me(()=>(a(le),a(ve),a(ke)),()=>{M($,ne(ie(a(le),a(ve)),a(ke)))}),Me(()=>(a(ce),a(ve),a(qe),a(q)),()=>{M(R,ne(ne(ie(a(ce),a(ve)),a(qe)),a(q).map(i=>i*C)))}),Me(()=>(a(R),a($),a(ue)),()=>{M(z,pe(a(R),ie(a($),a(ue))).map(S))}),Me(()=>a(z),()=>{M(x,a(z).map(i=>Math.abs(i)>N?1:0))}),Me(()=>(a(x),a(q)),()=>{M(se,a(x).filter((i,m)=>i!==a(q)[m]).length)}),Me(()=>(a(z),a(q)),()=>{M(V,Math.max(...a(z).map((i,m)=>Math.abs(S(i-a(q)[m]*C)))))}),Kt(),ea();var Te=Rn(),Ee=s(Te),ye=s(Ee),$e=e(s(ye)),Ie=s($e,!0);o($e);var p=e($e,2);Ta(p),o(ye);var r=e(ye,2),v=e(r,2);o(Ee);var _=e(Ee,2),y=e(s(_),2);we(y,1,()=>a(q),xe,(i,m,b)=>{var T=qn();let O;var oe=s(T,!0);o(T),X(()=>{O=He(T,1,"bit ptr rx5 mx2 svelte-1x9pnmt",null,O,{on:a(m)===1}),H(oe,a(m))}),De("click",T,()=>Ye(q,a(q)[b]=1-a(q)[b])),l(i,T)}),o(_);var G=e(_,2);we(G,5,()=>[["pub","public","a",a(le)],["pub","public","b",a(ce)],["sec","secret","s",a(ue)],["ct","sent","u",a($)],["ct","sent","v",a(R)]],xe,(i,m)=>{var b=Ea(()=>ln(a(m),4));let T=()=>a(b)[0],O=()=>a(b)[1],oe=()=>a(b)[2],Le=()=>a(b)[3];var ge=En(),me=s(ge),Pe=s(me,!0);o(me);var _e=e(me,2),Fe=s(_e);o(_e);var Ne=e(_e,2);we(Ne,1,Le,xe,(Xe,Je,ta,La)=>{var Ce=Tn(),Ve=s(Ce,!0);o(Ce),X(()=>H(Ve,a(Je))),l(Xe,Ce)}),o(ge),X(()=>{He(me,1,`tag ${T()??""} d-ib tc`,"svelte-1x9pnmt"),H(Pe,O()),H(Fe,`${oe()??""} =`)}),l(i,ge)}),o(G);var P=e(G,2),w=s(P),Q=s(w);k(Q,"width",A*46-16);var J=e(Q);k(J,"x2",396);var c=e(J);k(c,"x2",396);var u=e(c);k(u,"x2",396);var Y=e(u),U=e(Y),I=e(U),B=e(I),f=e(B),D=e(f);we(D,1,()=>a(z),xe,(i,m,b)=>{var T=Ln(),O=fe(T),oe=e(O),Le=s(oe,!0);o(oe),X((ge,me,Pe,_e)=>{k(O,"x",ge),k(O,"y",me),k(O,"height",Pe),k(O,"fill",(a(x),a(q),d(()=>a(x)[b]===a(q)[b]?"#2af":"#e44"))),k(oe,"x",_e),k(oe,"fill",(a(x),a(q),d(()=>a(x)[b]===a(q)[b]?"#555":"#e44"))),k(oe,"font-weight",(a(x),a(q),d(()=>a(x)[b]===a(q)[b]?"normal":"bold"))),H(Le,(a(x),d(()=>a(x)[b])))},[()=>d(()=>Ke(b)),()=>(a(m),d(()=>Math.min(W(0),W(a(m))))),()=>(a(m),d(()=>Math.abs(W(a(m))-W(0))||1)),()=>d(()=>Ke(b)+13)]),l(i,T)}),o(w),h(2),o(P);var he=e(P,2);let je;var ze=s(he),Ae=i=>{var m=Ge();X(()=>H(m,`✓ all 8 bits decoded correctly · largest noise |w| = ${a(V)??""} of the
            24.25 allowed`)),l(i,m)},Be=i=>{var m=Ge();X(()=>H(m,`✗ ${a(se)??""} of 8 bits flipped · largest noise |w| = ${a(V)??""} blew past
            the limit of 24.25`)),l(i,m)};E(ze,i=>{a(se)===0?i(Ae):i(Be,-1)}),o(he);var Ze=e(he,2),Qe=i=>{var m=Mn();l(i,m)};E(Ze,i=>{+a(K)==0&&i(Qe)}),h(2),o(Te),X((i,m,b,T,O,oe,Le,ge,me,Pe,_e,Fe,Ne)=>{H(Ie,a(K)),k(Q,"y",i),k(Q,"height",m),k(J,"y1",b),k(J,"y2",T),k(c,"y1",O),k(c,"y2",oe),k(u,"y1",Le),k(u,"y2",ge),k(Y,"y",me),k(U,"y",Pe),k(I,"y",_e),k(B,"y",Fe),k(f,"y",Ne),je=He(he,1,"verdict tc mt10 svelte-1x9pnmt",null,je,{bad:a(se)>0})},[()=>d(()=>W(N)),()=>d(()=>W(-24.25)-W(N)),()=>d(()=>W(0)),()=>d(()=>W(0)),()=>d(()=>W(N)),()=>d(()=>W(N)),()=>d(()=>W(-24.25)),()=>d(()=>W(-24.25)),()=>d(()=>W(C)+3),()=>d(()=>W(N)+3),()=>d(()=>W(0)+3),()=>d(()=>W(-24.25)+3),()=>d(()=>W(-48)+3)]),qa(p,()=>a(K),i=>M(K,i)),De("click",r,()=>M(be,a(be)+1)),De("click",v,()=>M(ae,a(ae)+1)),l(We,Te),aa()}var zn=g(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is ML-KEM,
                the lattice scheme this article builds, hybridised with the
                classical elliptic-curve exchange.</p>`),An=g(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is
                classical only, no ML-KEM. A recording of that handshake could
                be unwrapped by a future quantum computer.</p>`),Wn=g(`<p class="svelte-kugc17">The request to the test server did not make it (an ad blocker, a
                strict privacy mode, or being offline will do that), so there is
                nothing to report.</p>`),Sn=g('<div><span class="k d-ib svelte-kugc17"> </span> </div>'),jn=g('<div class="trace my10 py5 px10 rx5 svelte-kugc17"></div>'),Pn=g(`<!> <!> <p class="note svelte-kugc17">via pq.cloudflareresearch.com/cdn-cgi/trace, which echoes back the
            key exchange it negotiated with you. This tests your browser, not
            this site.</p>`,1),Cn=g("<div><!></div>");function Kn(We,Se){Ue(Se,!1);let $=L("checking"),R=L(""),z=L([]);const x={checking:"… checking whether your browser uses post-quantum crypto",pq:"✓ your browser is using post-quantum crypto",classical:"✗ your browser is not using post-quantum crypto",unknown:"could not check post-quantum support"},se=["kex","tls","http","h","ip","colo","loc","uag"];ea();var V=Cn();vn(s(V),{get title(){return x[a($)]},children:(A,F)=>{var C=Pn(),N=fe(C),K=S=>{var j=zn(),Z=e(s(j)),te=s(Z,!0);o(Z),h(),o(j),X(()=>H(te,a(R))),l(S,j)},q=S=>{var j=An(),Z=e(s(j)),te=s(Z,!0);o(Z),h(),o(j),X(()=>H(te,a(R))),l(S,j)},be=S=>{var j=Wn();l(S,j)};E(N,S=>{a($)==="pq"?S(K):a($)==="classical"?S(q,1):a($)==="unknown"&&S(be,2)});var ae=e(N,2),re=S=>{var j=jn();we(j,5,()=>a(z),xe,(Z,te)=>{var ie=Sn(),ne=s(ie),pe=s(ne,!0);o(ne);var le=e(ne,1,!0);o(ie),X(()=>{H(pe,a(te)[0]),H(le,a(te)[1])}),l(Z,ie)}),o(j),l(S,j)};E(ae,S=>{a(z).length&&S(re)}),h(2),l(A,C)},$$slots:{default:!0}}),o(V),X(()=>He(V,1,`pqc ${a($)==="pq"?"green":"yellow"}`,"svelte-kugc17")),l(We,V),aa()}var In=g(`<!> <!> Cast: <ul><li>Alice (wants to receive secrets)</li> <li>Bob (wants to send her one)</li> <li>Eve (reads everything in transit)</li> <li>a large quantum computer (arrival date unknown)</li></ul> <!> <p>Nearly every secret on the internet is guarded by one of two locks: RSA,
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
    Cryptography.</p> <!>`,1);function Yn(We,Se){Ue(Se,!1),ea();var $=In(),R=fe($);pn(R,{title:"Ring Learning with Errors",sub:"Post-Quantum Cryptography",desc:"Quantum-safe encryption from deliberately noisy polynomial arithmetic",date:"10 June 2026"});var z=e(R,2);Kn(z,{});var x=e(z,4);{let sn=dn(()=>[ee("q","The size of the clock: a prime modulus, all arithmetic keeps only remainders, e.g. $20 \\bmod 7 = 6$. Toy values 17 and 97 here; ML-KEM uses 3329"),ee("n","Ring dimension, a power of two: every polynomial is a tray of $n$ coefficients. Toy values 4 and 8 here; ML-KEM uses 256"),ee("x","Formal placeholder, never given a value; its powers only label coefficient slots"),ee("s","Alice's secret, a polynomial with small coefficients; the thing Eve wants"),ee("a","Public polynomial, every coefficient drawn uniformly at random"),ee("b","Public noisy product b = a·s + e, the other half of Alice's public key"),ee("e","Error polynomial: small, fresh, deliberate. The lie that makes the problem hard"),ee("pk","Alice's public key, the pair $(a, b)$; published to everyone, Eve included"),ee("sk","Alice's secret key, just $s$; never leaves her machine"),ee("r","Bob's own small randomness, drawn fresh for every encryption"),ee("m","The message, a polynomial with coefficients 0 or 1 (one bit per slot)"),ee("u","First half of the ciphertext, u = a·r + e₁"),ee("v","Second half of the ciphertext, v = b·r + e₂ + ⌊q/2⌋·m"),ee("w","Decryption residue w = e·r − e₁·s + e₂; rounding succeeds while every |wᵢ| < q/4"),ee("η","Noise bound: 'small' always means coefficients in [−η, η]")]);hn(x,{get list(){return a(sn)}})}var se=e(x,8),V=e(s(se));t(V,()=>n`q`);var A=e(V,2);t(A,()=>n`q`);var F=e(A,2);t(F,()=>n`q`);var C=e(F,2);t(C,()=>n`15 + 5 = 20`);var N=e(C,2);t(N,()=>n`15 + 5 \\equiv 3`);var K=e(N,2);t(K,()=>n`9 \\times 9 = 81 = 4 \\times 17 +
    13`);var q=e(K,2);t(q,()=>n`9 \\times 9 \\equiv 13`);var be=e(q,2);t(be,()=>n`16
    \\equiv -1`),h(),o(se);var ae=e(se,2),re=e(s(ae));t(re,()=>n`q`);var S=e(re,2);t(S,()=>n`(s_1,
    s_2) = (3, 7)`),h(),o(ae);var j=e(ae,2);t(j,()=>de`
\\begin{aligned}
2 s_1 + 5 s_2 &\\equiv 7 \\pmod{17}\\\\
4 s_1 + s_2 &\\equiv 2 \\pmod{17}
\\end{aligned}
`);var Z=e(j,4);t(Z,()=>de`
\\begin{aligned}
2 \\times \\text{first} - \\text{second}: \\qquad 9 s_2 &\\equiv 14 - 2 \\equiv 12
&&\\Rightarrow\\ s_2 \\equiv 7\\\\
\\text{put } s_2 \\text{ into second}: \\qquad 4 s_1 &\\equiv 2 - 7 \\equiv 12
&&\\Rightarrow\\ s_1 \\equiv 3
\\end{aligned}
`);var te=e(Z,2),ie=e(s(te));t(ie,()=>n`9 \\times 7 = 63 \\equiv 12`);var ne=e(ie,2);t(ne,()=>n`4
    \\times 3 = 12`),h(),o(te);var pe=e(te,2),le=e(s(pe));t(le,()=>n`+1`);var ue=e(le,2);t(ue,()=>n`-1`),h(),o(pe);var Re=e(pe,2);t(Re,()=>de`
\\begin{aligned}
2 s_1 + 5 s_2 &\\approx 8 \\pmod{17}\\\\
4 s_1 + s_2 &\\approx 1 \\pmod{17}
\\end{aligned}
`);var ce=e(Re,2),ve=e(s(ce));t(ve,()=>n`(s_1, s_2) = (14, 13)`);var ke=e(ve,2);t(ke,()=>n`(3, 7)`);var qe=e(ke,2);t(qe,()=>n`9 \\mod 17`);var W=e(qe,2);t(W,()=>n`\\pm 1`);var Ke=e(W,2);t(Ke,()=>n`\\pm 9`),h(),o(ce);var Te=e(ce,4),Ee=e(s(Te),3);t(Ee,()=>n`b_i \\approx \\vec{a}_i \\cdot \\vec{s}`);var ye=e(Ee,2);t(ye,()=>n`\\vec{s}`);var $e=e(ye,2);t($e,()=>n`\\vec{s}`);var Ie=e($e,2);t(Ie,()=>n`\\vec{a}_i`);var p=e(Ie,2);t(p,()=>n`\\vec{a}_i \\cdot \\vec{s}`);var r=e(p,2);t(r,()=>n`2 s_1 + 5 s_2`),h(3),o(Te);var v=e(Te,4),_=e(s(v));t(_,()=>n`n`);var y=e(_,2);t(y,()=>n`n`);var G=e(y,2);t(G,()=>n`n`);var P=e(G,2);t(P,()=>n`n`);var w=e(P,2);t(w,()=>n`n^2`);var Q=e(w,2);t(Q,()=>n`n`);var J=e(Q,2);t(J,()=>n`n`),h(),o(v);var c=e(v,2),u=e(s(c));t(u,()=>n`n`);var Y=e(u,2);t(Y,()=>n`q`);var U=e(Y,2);t(U,()=>n`n`);var I=e(U,2);t(I,()=>n`x`);var B=e(I,2);t(B,()=>n`q`);var f=e(B,2);t(f,()=>n`x^n`),h(),o(c);var D=e(c,2);t(D,()=>de`x^n \\equiv -1`);var he=e(D,2),je=e(s(he));t(je,()=>n`x^n + 1`);var ze=e(je,2);t(ze,()=>n`x^{n+2}`);var Ae=e(ze,2);t(Ae,()=>n`-x^2`);var Be=e(Ae,2);t(Be,()=>n`n = 4`);var Ze=e(Be,2);t(Ze,()=>n`q
    = 17`);var Qe=e(Ze,2);t(Qe,()=>n`1 + 2x + 3x^2 + 4x^3`);var i=e(Qe,2);t(i,()=>n`2 + x`),h(),o(he);var m=e(he,2);t(m,()=>de`
\\begin{aligned}
(1 + 2x + 3x^2 + 4x^3)(2 + x) &= 2 + 5x + 8x^2 + 11x^3 + 4x^4\\\\
&\\equiv -2 + 5x + 8x^2 + 11x^3\\\\
&\\equiv 15 + 5x + 8x^2 + 11x^3 \\pmod{17}
\\end{aligned}
`);var b=e(m,2),T=e(s(b));t(T,()=>n`4x^4 \\equiv -4`);var O=e(T,2);t(O,()=>n`x^3`),h(),o(b);var oe=e(b,4);kn(oe,{});var Le=e(oe,2),ge=e(s(Le));t(ge,()=>n`R_q = \\mathbb{Z}_q[x]/(x^n + 1)`);var me=e(ge,2);t(me,()=>n`n`);var Pe=e(me,2);t(Pe,()=>n`q`),h(5),o(Le);var _e=e(Le,2),Fe=e(s(_e));t(Fe,()=>n`\\mathbb{Z}_q`);var Ne=e(Fe,2);t(Ne,()=>n`\\mathbb{Z}_q[x]`);var Xe=e(Ne,2);t(Xe,()=>n`x`);var Je=e(Xe,2);t(Je,()=>n`(x^n + 1)`);var ta=e(Je,2);t(ta,()=>n`x^n + 1`);var La=e(ta,2);t(La,()=>n`x^n \\equiv -1`),h(),o(_e);var Ce=e(_e,2),Ve=e(s(Ce));t(Ve,()=>n`n`);var Ma=e(Ve,2);t(Ma,()=>n`n`);var Ra=e(Ma,2);t(Ra,()=>n`n^2`);var $a=e(Ra,2);t($a,()=>n`\\mathcal{O}(n \\log n)`);var It=e($a,2);t(It,()=>n`\\mathcal{O}(n^2)`),h(),o(Ce);var na=e(Ce,4),za=e(s(na));t(za,()=>n`s`);var Aa=e(za,4);t(Aa,()=>n`\\{-1, 0,
    1\\}`);var Wa=e(Aa,2);t(Wa,()=>n`a`);var Sa=e(Wa,2);t(Sa,()=>n`n`);var ja=e(Sa,2);t(ja,()=>n`0`);var Pa=e(ja,2);t(Pa,()=>n`q-1`);var Bt=e(Pa,2);t(Bt,()=>n`e`),h(),o(na);var Ca=e(na,2);t(Ca,()=>de`(a,\\ b = a \\cdot s + e)`);var oa=e(Ca,2),Ka=e(s(oa));t(Ka,()=>n`n = 4`);var Ft=e(Ka,2);t(Ft,()=>n`q = 17`),h(),o(oa);var Ia=e(oa,2);t(Ia,()=>de`
\\begin{alignedat}{2}
s &= 1 + x - x^3 \\qquad && \\text{secret, small}\\\\
a &= 6 + 14x + 3x^2 + 9x^3\\quad && \\text{public, uniform}\\\\
a \\cdot s &\\equiv 11 + 6x + 9x^2 + 6x^3\\quad && \\text{fold, then mod 17}\\\\
e &= 1 - x + x^3 && \\text{small lies}\\\\
b &\\equiv 12 + 5x + 9x^2 + 7x^3 && \\text{published}
\\end{alignedat}
`);var sa=e(Ia,2),Ba=e(s(sa));t(Ba,()=>n`(a, b)`);var Fa=e(Ba,2);t(Fa,()=>n`s`);var Nt=e(Fa,2);t(Nt,()=>n`b`),h(),o(sa);var ra=e(sa,2),Na=e(s(ra));t(Na,()=>n`b = a \\cdot s`);var Oa=e(Na,2);t(Oa,()=>n`s = b \\cdot a^{-1}`);var Ot=e(Oa,2);t(Ot,()=>n`a`),h(),o(ra);var ia=e(ra,6),Ya=e(s(ia));t(Ya,()=>n`[-\\eta,
    \\eta]`);var Yt=e(Ya,2);t(Yt,()=>n`\\eta`),h(),o(ia);var la=e(ia,2),Da=e(s(la),2);t(Da,()=>n`a`);var Ha=e(Da,2);t(Ha,()=>n`s`);var Za=e(Ha,2);t(Za,()=>n`e`);var Dt=e(Za,2);t(Dt,()=>n`s`),h(),o(la);var Qa=e(la,2);t(Qa,()=>de`
\\mathrm{pk} = (a,\\ b = a \\cdot s + e), \\qquad \\mathrm{sk} = s
`);var Xa=e(Qa,4);t(Xa,()=>de`
\\begin{aligned}
\\mathrm{pk} &= (6 + 14x + 3x^2 + 9x^3,\\ \\ 12 + 5x + 9x^2 + 7x^3)\\\\
\\mathrm{sk} &= 1 + x - x^3
\\end{aligned}
`);var da=e(Xa,2),Ja=e(s(da),2);t(Ja,()=>n`n`);var Va=e(Ja,2);t(Va,()=>n`m`);var Ga=e(Va,2);t(Ga,()=>n`\\lfloor
    q/2 \\rfloor`);var Ua=e(Ga,2);t(Ua,()=>n`r`);var et=e(Ua,2);t(et,()=>n`e_1`);var Ht=e(et,2);t(Ht,()=>n`e_2`),h(),o(da);var at=e(da,2);t(at,()=>de`
\\begin{aligned}
u &= a \\cdot r + e_1\\\\
v &= b \\cdot r + e_2 + \\lfloor q/2 \\rfloor \\cdot m
\\end{aligned}
`);var ca=e(at,2),tt=e(s(ca));t(tt,()=>n`(1, 0, 1, 1)`);var nt=e(tt,2);t(nt,()=>n`m = 1 + x^2 + x^3`);var ot=e(nt,2);t(ot,()=>n`\\lfloor 17/2 \\rfloor = 8`);var st=e(ot,2);t(st,()=>n`8 + 8x^2 + 8x^3`);var rt=e(st,2);t(rt,()=>n`r = 1 - x^2 + x^3`);var it=e(rt,2);t(it,()=>n`e_1 = x + x^2 - x^3`);var Zt=e(it,2);t(Zt,()=>n`e_2 = -1 + x`),h(),o(ca);var lt=e(ca,2);t(lt,()=>de`
\\begin{aligned}
u &= a \\cdot r + e_1 = (12 + 3x + 5x^2 + x^3) + (x + x^2 - x^3)\\\\
&\\equiv 12 + 4x + 6x^2\\\\[4pt]
v &= b \\cdot r + e_2 + 8m\\\\
&= (16 + 3x + 7x^2 + 14x^3) + (-1 + x) + (8 + 8x^2 + 8x^3)\\\\
&\\equiv 6 + 4x + 15x^2 + 5x^3
\\end{aligned}
`);var va=e(lt,2),dt=e(s(va));t(dt,()=>n`u`);var Qt=e(dt,2);t(Qt,()=>n`v`),h(),o(va);var ha=e(va,2),Xt=e(s(ha),2);t(Xt,()=>n`v - u \\cdot s`),h(),o(ha);var ct=e(ha,2);t(ct,()=>de`
\\begin{aligned}
v - u \\cdot s &= (a s + e) r + e_2 + \\lfloor q/2 \\rfloor m - (a r + e_1) s\\\\
&= \\lfloor q/2 \\rfloor \\, m + \\underbrace{e \\cdot r - e_1 \\cdot s + e_2}_{w,\\ \\text{small}}
\\end{aligned}
`);var pa=e(ct,2),vt=e(s(pa));t(vt,()=>n`a \\cdot r \\cdot s`);var ht=e(vt,2);t(ht,()=>n`w`);var pt=e(ht,2);t(pt,()=>n`m_i \\lfloor q/2
    \\rfloor + w_i`);var ut=e(pt,2);t(ut,()=>n`q/2`);var Jt=e(ut,2);t(Jt,()=>n`|w_i| < q/4`),h(),o(pa);var ua=e(pa,2),Vt=e(s(ua));t(Vt,()=>n`u \\cdot s \\equiv 16 + 5x + 10x^2 +
    11x^3`),h(),o(ua);var mt=e(ua,2);t(mt,()=>de`
\\begin{aligned}
v - u \\cdot s &\\equiv 7 + 16x + 5x^2 + 11x^3\\\\
&= 7 - x + 5x^2 - 6x^3 \\qquad \\text{(centered mod 17)}\\\\
&= \\underbrace{8 + 8x^2 + 8x^3}_{8m} + \\underbrace{(-1 - x - 3x^2 + 3x^3)}_{w}
\\end{aligned}
`);var ma=e(mt,2),_t=e(s(ma));t(_t,()=>n`w`);var ft=e(_t,2);t(ft,()=>n`q/4 \\approx
    4.25`);var bt=e(ft,2);t(bt,()=>n`-6`);var yt=e(bt,2);t(yt,()=>n`-1`);var Gt=e(yt,2);t(Gt,()=>n`(1, 0, 1, 1)`),h(),o(ma);var _a=e(ma,2),gt=e(s(_a));t(gt,()=>n`e
    \\cdot r`);var xt=e(gt,2);t(xt,()=>n`n`);var wt=e(xt,2);t(wt,()=>n`\\eta`);var kt=e(wt,2);t(kt,()=>n`n \\eta^2`);var qt=e(kt,2);t(qt,()=>n`\\eta`);var Ut=e(qt,2);t(Ut,()=>n`2^{160}`),h(),o(_a);var fa=e(_a,4),Tt=e(s(fa));t(Tt,()=>n`n = 8`);var Et=e(Tt,2);t(Et,()=>n`q = 97`);var Lt=e(Et,2);t(Lt,()=>n`\\lfloor q/2 \\rfloor = 48`);var Mt=e(Lt,2);t(Mt,()=>n`q/4
    \\approx 24`);var en=e(Mt,2);t(en,()=>n`v - u \\cdot s`),h(),o(fa);var Rt=e(fa,2);$n(Rt,{});var ba=e(Rt,4),ya=s(ba),$t=e(s(ya));t($t,()=>n`\\eta = 0`);var an=e($t,2);t(an,()=>n`b = a \\cdot s`),h(),o(ya);var ga=e(ya,2),tn=e(s(ga));t(tn,()=>n`\\eta = 1`),h(),o(ga);var zt=e(ga,2),nn=e(s(zt));t(nn,()=>n`\\eta`),h(),o(zt),o(ba);var xa=e(ba,6),At=e(s(xa));t(At,()=>n`n = 256`);var Wt=e(At,2);t(Wt,()=>n`q = 3329`);var St=e(Wt,2);t(St,()=>n`\\eta
    = 2`);var on=e(St,4);t(on,()=>n`2^{-164}`),h(),o(xa),un(e(xa,2),{list:[["On Ideal Lattices and Learning with Errors Over Rings (LPR, 2010)","https://eprint.iacr.org/2012/230"],["The Learning with Errors Problem (Regev's survey)","https://cims.nyu.edu/~regev/papers/lwesurvey.pdf"],["Worst-case to average-case reduction for LWE (MIT lecture notes)","https://people.csail.mit.edu/vinodv/CS294/lecture4.pdf"],["FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism","https://csrc.nist.gov/pubs/fips/203/final"],["Ring learning with errors (Wikipedia)","https://en.wikipedia.org/wiki/Ring_learning_with_errors"]]}),l(We,$),aa()}export{Yn as component};
