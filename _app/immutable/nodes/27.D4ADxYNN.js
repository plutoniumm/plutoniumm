import{A as Ae,B as R,D as Z,E,H as oe,I as t,J as be,L as s,N as Ma,Q as q,V as bt,X as k,Y as e,at as h,b as He,c,et as Qa,it as De,j as Ja,k as fe,n as Ce,o as Me,ot as n,q as i,rt as Ge,s as Ie,v as a,x as We,y as je}from"../chunks/Rl5PQ8XL.js";import"../chunks/D3BS_AkK.js";import{a as M,d as _t,i as r,n as Ka,o as Ua,t as L,u as er}from"../chunks/BXB8e5cd.js";var tr=fe(`<div class="box tc mx-a my20 p10 rx10 svelte-1sjdl4q"><div class="f al-ct j-ct fw g10 mb10"><label class="svelte-1sjdl4q">p<sub>0→1</sub> = <b> </b> <input type="range" min="0" max="0.5" step="0.01" class="svelte-1sjdl4q"/></label> <label class="svelte-1sjdl4q">p<sub>1→0</sub> = <b> </b> <input type="range" min="0" max="0.5" step="0.01" class="svelte-1sjdl4q"/></label> <button type="button" class="ptr rx5 svelte-1sjdl4q">re-toss</button></div> <svg width="480" height="186" font-family="monospace" font-size="10" class="svelte-1sjdl4q"><line x1="42" x2="468" stroke="#ddd"></line><line x1="42" x2="468" stroke="#999"></line><line x1="42" x2="468" stroke="#eee"></line><text x="38" text-anchor="end">1.0</text><text x="38" text-anchor="end">0.5</text><text x="38" text-anchor="end">0.0</text><polyline fill="none" stroke="#bbb" stroke-dasharray="3 3"></polyline><polyline fill="none" stroke="#bbb" stroke-dasharray="3 3"></polyline><line x1="42" x2="468" stroke="#c75200" stroke-dasharray="5 4"></line><text x="468" text-anchor="end" fill="#c75200"> </text><polyline fill="none" stroke="#097" stroke-width="1.5"></polyline><text x="255" y="182" text-anchor="middle" fill="#777"></text></svg> <div class="stat mt5 svelte-1sjdl4q"> <b> </b> · prediction from the SPAM formula <b> </b></div> <div class="note mt5 svelte-1sjdl4q">running mean of one noisy coin; the gray envelope is μ′ ± σ/√n. Set the
        two errors equal and the dashed line stays at 0.5; make them unequal and
        it shifts.</div></div>`);function ar(we,qe){De(qe,!1);const v=k(),m=k(),_=k(),V=k(),g=k(),H=k(),j=2**10;let T=k(0),B=k(0),W=k(0);const w=o=>{const d=Number(o);return Number.isFinite(d)?Math.min(.5,Math.max(0,d)):0};let y=k([]);const P=o=>42+o/(j-1)*426,u=o=>162-Math.min(1,Math.max(0,o))*142;R(()=>(t(W),t(T),t(B)),()=>{t(W);const o=w(t(T)),d=w(t(B)),p=new Array(j);let x=0;for(let $=0;$<j;$++){let X=Math.random()<.5?1:0;X===0&&Math.random()<o?X=1:X===1&&Math.random()<d&&(X=0),x+=X,p[$]=x/($+1)}q(y,p)}),R(()=>(t(T),t(B)),()=>{q(v,.5*(1+w(t(T))-w(t(B))))}),R(()=>t(v),()=>{q(m,Math.sqrt(t(v)*(1-t(v))))}),R(()=>t(y),()=>{q(_,t(y)[j-1]||0)}),R(()=>t(y),()=>{q(V,t(y).map((o,d)=>P(d).toFixed(1)+","+u(o).toFixed(1)).join(" "))}),R(()=>(t(y),t(v),t(m)),()=>{q(g,t(y).map((o,d)=>d<3?"":P(d).toFixed(1)+","+u(t(v)+t(m)/Math.sqrt(d+1)).toFixed(1)).filter(o=>o.length>0).join(" "))}),R(()=>(t(y),t(v),t(m)),()=>{q(H,t(y).map((o,d)=>d<3?"":P(d).toFixed(1)+","+u(t(v)-t(m)/Math.sqrt(d+1)).toFixed(1)).filter(o=>o.length>0).join(" "))}),bt(),Ce();var C=tr(),ne=i(C),Q=i(ne),G=e(i(Q),3),ue=i(G,!0);n(G);var ee=e(G,2);Ie(ee),n(Q);var D=e(Q,2),te=e(i(D),3),_e=i(te,!0);n(te);var ie=e(te,2);Ie(ie),n(D);var ce=e(D,2);n(ne);var J=e(ne,2),ae=i(J),se=e(ae),z=e(se),ve=e(z),re=e(ve),K=e(re),pe=e(K),le=e(pe),me=e(le),de=e(me),b=i(de);n(de);var f=e(de),N=e(f);N.textContent="shot number (1 … 1024)",n(J);var I=e(J,2),F=i(I);F.nodeValue="after 1024 shots: measured mean ";var A=e(F),S=i(A,!0);n(A);var O=e(A,2),l=i(O,!0);n(O),n(I),h(2),n(C),oe((o,d,p,x,$,X,Y,U,Ve,Oe,Ze,Le,ze,Se,Ye,Qe,Be)=>{E(ue,o),E(_e,d),c(ae,"y1",p),c(ae,"y2",x),c(se,"y1",$),c(se,"y2",X),c(z,"y1",Y),c(z,"y2",U),c(ve,"y",Ve),c(re,"y",Oe),c(K,"y",Ze),c(pe,"points",t(g)),c(le,"points",t(H)),c(me,"y1",Le),c(me,"y2",ze),c(de,"y",Se),E(b,`μ′ = ${Ye??""}`),c(f,"points",t(V)),E(S,Qe),E(l,Be)},[()=>(t(T),s(()=>w(t(T)).toFixed(2))),()=>(t(B),s(()=>w(t(B)).toFixed(2))),()=>s(()=>u(.5)),()=>s(()=>u(.5)),()=>s(()=>u(0)),()=>s(()=>u(0)),()=>s(()=>u(1)),()=>s(()=>u(1)),()=>s(()=>u(1)+3),()=>s(()=>u(.5)+3),()=>s(()=>u(0)+3),()=>(t(v),s(()=>u(t(v)))),()=>(t(v),s(()=>u(t(v)))),()=>(t(v),s(()=>u(t(v))-4)),()=>(t(v),s(()=>t(v).toFixed(3))),()=>(t(_),s(()=>t(_).toFixed(3))),()=>(t(v),s(()=>t(v).toFixed(3)))]),Me(ee,()=>t(T),o=>q(T,o)),Me(ie,()=>t(B),o=>q(B,o)),Ma("click",ce,()=>q(W,t(W)+1)),Z(we,C),Ge()}var rr=Ae('<line x1="50" x2="470" stroke="#eee"></line><text x="46" text-anchor="end"> </text>',1),or=Ae('<text y="228" text-anchor="middle"> </text>'),nr=Ae('<circle r="4" fill="#097"></circle>'),ir=fe(`<div class="box tc mx-a my20 p10 rx10 svelte-tnnb7t"><div class="f al-ct j-ct fw g10 mb10"><label class="svelte-tnnb7t">p<sub>0→1</sub> = <b> </b> <input type="range" min="0" max="0.5" step="0.01" class="svelte-tnnb7t"/></label> <label class="svelte-tnnb7t">p<sub>1→0</sub> = <b> </b> <input type="range" min="0" max="0.5" step="0.01" class="svelte-tnnb7t"/></label> <button type="button" class="ptr rx5 svelte-tnnb7t">re-toss</button></div> <svg width="480" height="240" font-family="monospace" font-size="10" class="svelte-tnnb7t"><!><!><line stroke="#c75200" stroke-dasharray="6 4" stroke-width="1.5"></line><!><text x="14" y="120" transform="rotate(-90 14 120)" text-anchor="middle" fill="#777">ln RSD</text><text x="260" y="239" text-anchor="middle" fill="#777">window size w (log axis)</text></svg> <div class="stat mt5 svelte-tnnb7t">intercept from the fit: <b> </b> · predicted from
        the error rates: <b> </b></div> <div class="note mt5 svelte-tnnb7t"></div></div>`);function sr(we,qe){De(qe,!1);const v=k(),m=256,_=[4,8,16,32,64,128],V=m*128;let g=k(.1),H=k(.3),j=k(0);const T=b=>{const f=Number(b);return Number.isFinite(f)?Math.min(.5,Math.max(0,f)):0};let B=k([]),W=k(0);const w=b=>50+(b-1.2)*420/3.8,y=b=>15+(.1-b)*195/3.2,P=Math.log(4),u=Math.log(128);R(()=>(t(j),t(g),t(H)),()=>{t(j);const b=T(t(g)),f=T(t(H)),N=new Array(V);for(let A=0;A<V;A++){let S=Math.random()<.5?1:0;S===0&&Math.random()<b?S=1:S===1&&Math.random()<f&&(S=0),N[A]=S}const I=[];let F=0;for(const A of _){const S=[];for(let o=0;o<m;o++){let d=0;for(let p=0;p<A;p++)d+=N[o*A+p];S.push(d/A)}const O=S.reduce((o,d)=>o+d,0)/m;let l=0;for(const o of S)l+=(o-O)*(o-O);if(l=Math.sqrt(l/(m-1)),l>0&&O>0){const o=Math.log(A),d=Math.log(l/O);I.push({x:o,y:d,w:A}),F+=d+.5*o}}q(B,I),q(W,I.length?F/I.length:0)}),R(()=>(t(H),t(g)),()=>{q(v,.5*Math.log((1+T(t(H))-T(t(g)))/(1+T(t(g))-T(t(H)))))}),bt(),Ce();var C=ir(),ne=i(C),Q=i(ne),G=e(i(Q),3),ue=i(G,!0);n(G);var ee=e(G,2);Ie(ee),n(Q);var D=e(Q,2),te=e(i(D),3),_e=i(te,!0);n(te);var ie=e(te,2);Ie(ie),n(D);var ce=e(D,2);n(ne);var J=e(ne,2),ae=i(J);je(ae,0,()=>[-1,-2,-3],He,(b,f)=>{var N=rr(),I=be(N),F=e(I),A=i(F,!0);n(F),oe((S,O,l)=>{c(I,"y1",S),c(I,"y2",O),c(F,"y",l),E(A,f)},[()=>s(()=>y(f)),()=>s(()=>y(f)),()=>s(()=>y(f)+3)]),Z(b,N)});var se=e(ae);je(se,1,()=>_,He,(b,f)=>{var N=or(),I=i(N,!0);n(N),oe(F=>{c(N,"x",F),E(I,t(f))},[()=>(t(f),s(()=>w(Math.log(t(f)))))]),Z(b,N)});var z=e(se),ve=e(z);je(ve,1,()=>t(B),He,(b,f)=>{var N=nr();oe((I,F)=>{c(N,"cx",I),c(N,"cy",F)},[()=>(t(f),s(()=>w(t(f).x))),()=>(t(f),s(()=>y(t(f).y)))]),Z(b,N)}),h(2),n(J);var re=e(J,2),K=e(i(re)),pe=i(K);n(K);var le=e(K,2),me=i(le);n(le),n(re);var de=e(re,2);de.textContent=`32768 simulated shots, 256 windows of each size. Dots are the measured ln
        RSD; the dashed line has slope −1/2 and the predicted intercept.`,n(C),oe((b,f,N,I,F,A,S,O)=>{E(ue,b),E(_e,f),c(z,"x1",N),c(z,"y1",I),c(z,"x2",F),c(z,"y2",A),E(pe,`c = ${S??""}`),E(me,`c = ${O??""}`)},[()=>(t(g),s(()=>T(t(g)).toFixed(2))),()=>(t(H),s(()=>T(t(H)).toFixed(2))),()=>s(()=>w(P)),()=>(t(v),s(()=>y(t(v)-.5*P))),()=>s(()=>w(u)),()=>(t(v),s(()=>y(t(v)-.5*u))),()=>(t(W),s(()=>t(W).toFixed(3))),()=>(t(v),s(()=>t(v).toFixed(3)))]),Me(ee,()=>t(g),b=>q(g,b)),Me(ie,()=>t(H),b=>q(H,b)),Ma("click",ce,()=>q(j,t(j)+1)),Z(we,C),Ge()}var lr=Ae('<line x1="50" x2="470" stroke="#eee"></line><text x="46" text-anchor="end"> </text>',1),dr=Ae('<line y1="15" y2="195" stroke="#f3f3f3"></line><text y="208" text-anchor="middle"> </text>',1),hr=Ae('<line x1="50" x2="470" stroke="#555" stroke-dasharray="2 3"></line><text x="468" text-anchor="end" fill="#555">floor B</text>',1),cr=Ae('<line y1="15" y2="195" stroke="#c75200" stroke-dasharray="4 3"></line><circle r="4.5" fill="#c75200"></circle>',1),vr=fe('<div class="stat mt5 svelte-3rmsx7"> <b> </b> <!></div>'),pr=fe('<div class="stat bad mt5 svelte-3rmsx7"> </div>'),mr=fe(`<div class="box tc mx-a my20 p10 rx10 svelte-3rmsx7"><div class="f al-ct j-ct fw g10 mb10"><label class="svelte-3rmsx7">A (statistical) = <b> </b> <input type="range" min="1" max="100" step="1" class="svelte-3rmsx7"/></label> <label class="svelte-3rmsx7">B (bias floor) = <b> </b> <input type="range" min="0" max="0.02" step="0.001" class="svelte-3rmsx7"/></label> <label class="svelte-3rmsx7">target σ² = <b> </b> <input type="range" min="0.001" max="0.05" step="0.001" class="svelte-3rmsx7"/></label></div> <svg width="480" height="225" font-family="monospace" font-size="10" class="svelte-3rmsx7"><!><!><!><line x1="50" x2="470" stroke="#d22" stroke-dasharray="6 4"></line><text x="54" fill="#d22">target σ²</text><polyline fill="none" stroke="#097" stroke-width="1.8"></polyline><!><text x="260" y="222" text-anchor="middle" fill="#777">shots N (log axis)</text><text x="14" y="105" transform="rotate(-90 14 105)" text-anchor="middle" fill="#777">Var (log axis)</text></svg> <!> <div class="note mt5 svelte-3rmsx7">Var(Ē<sub>N</sub>) = A/N + B on log-log axes. The curve falls as 1/N
        until the bias floor takes over; the marked point is where it crosses
        the target.</div></div>`);function ur(we,qe){De(qe,!1);const v=k(),m=k(),_=k(),V=k(),g=k(),H=k();let j=k(56),T=k(.002),B=k(.01);const W=(l,o,d)=>{const p=Number(l);return Number.isFinite(p)?Math.min(d,Math.max(o,p)):o},w=l=>Math.log(l)/Math.LN10,y=l=>50+(l-1)*420/4,P=l=>15+(1-l)*180/4,u=l=>Math.min(1.2,Math.max(-3.2,l));let C=k("");const ne=[[1,"10"],[2,"100"],[3,"1k"],[4,"10k"],[5,"100k"]],Q=[[0,"1"],[-1,"0.1"],[-2,"0.01"],[-3,"0.001"]];R(()=>t(j),()=>{q(v,W(t(j),1,100))}),R(()=>t(T),()=>{q(m,W(t(T),0,.02))}),R(()=>t(B),()=>{q(_,W(t(B),.001,.05))}),R(()=>(t(_),t(m)),()=>{q(V,t(_)>t(m))}),R(()=>(t(V),t(v),t(_),t(m)),()=>{q(g,t(V)?t(v)/(t(_)-t(m)):0)}),R(()=>(t(V),t(g)),()=>{q(H,t(V)?Math.ceil(t(g)):0)}),R(()=>(t(v),t(m)),()=>{const l=[];for(let o=0;o<=84;o++){const d=1+4*o/84,p=Math.pow(10,d),x=u(w(t(v)/p+t(m)));l.push(y(d).toFixed(1)+","+P(x).toFixed(1))}q(C,l.join(" "))}),bt(),Ce();var G=mr(),ue=i(G),ee=i(ue),D=e(i(ee)),te=i(D,!0);n(D);var _e=e(D,2);Ie(_e),n(ee);var ie=e(ee,2),ce=e(i(ie)),J=i(ce,!0);n(ce);var ae=e(ce,2);Ie(ae),n(ie);var se=e(ie,2),z=e(i(se)),ve=i(z,!0);n(z);var re=e(z,2);Ie(re),n(se),n(ue);var K=e(ue,2),pe=i(K);je(pe,1,()=>Q,He,(l,o)=>{var d=lr(),p=be(d),x=e(p),$=i(x,!0);n(x),oe((X,Y,U)=>{c(p,"y1",X),c(p,"y2",Y),c(x,"y",U),E($,(t(o),s(()=>t(o)[1])))},[()=>(t(o),s(()=>P(t(o)[0]))),()=>(t(o),s(()=>P(t(o)[0]))),()=>(t(o),s(()=>P(t(o)[0])+3))]),Z(l,d)});var le=e(pe);je(le,1,()=>ne,He,(l,o)=>{var d=dr(),p=be(d),x=e(p),$=i(x,!0);n(x),oe((X,Y,U)=>{c(p,"x1",X),c(p,"x2",Y),c(x,"x",U),E($,(t(o),s(()=>t(o)[1])))},[()=>(t(o),s(()=>y(t(o)[0]))),()=>(t(o),s(()=>y(t(o)[0]))),()=>(t(o),s(()=>y(t(o)[0])))]),Z(l,d)});var me=e(le),de=l=>{var o=hr(),d=be(o),p=e(d);oe((x,$,X)=>{c(d,"y1",x),c(d,"y2",$),c(p,"y",X)},[()=>(t(m),s(()=>P(u(w(t(m)))))),()=>(t(m),s(()=>P(u(w(t(m)))))),()=>(t(m),s(()=>P(u(w(t(m))))-4))]),Z(l,o)};We(me,l=>{t(m)>0&&l(de)});var b=e(me),f=e(b),N=e(f),I=e(N),F=l=>{var o=cr(),d=be(o),p=e(d);oe((x,$,X,Y)=>{c(d,"x1",x),c(d,"x2",$),c(p,"cx",X),c(p,"cy",Y)},[()=>(t(g),s(()=>y(w(t(g))))),()=>(t(g),s(()=>y(w(t(g))))),()=>(t(g),s(()=>y(w(t(g))))),()=>(t(_),s(()=>P(u(w(t(_))))))]),Z(l,o)};We(I,l=>{t(V)&&t(g)>=10&&t(g)<=1e5&&l(F)}),h(2),n(K);var A=e(K,2),S=l=>{var o=vr(),d=i(o),p=e(d),x=i(p);n(p);var $=e(p,2),X=Y=>{var U=Ja("(beyond the right edge of the chart)");Z(Y,U)};We($,Y=>{t(g)>1e5&&Y(X)}),n(o),oe((Y,U)=>{E(d,`N = A / (σ² − B) = ${t(v)??""} / ${Y??""} = `),E(x,`${U??""} shots`)},[()=>(t(_),t(m),s(()=>(t(_)-t(m)).toFixed(3))),()=>(t(H),s(()=>t(H).toLocaleString("en-US")))]),Z(l,o)},O=l=>{var o=pr(),d=i(o);n(o),oe((p,x)=>E(d,`the target σ² = ${p??""} sits at or below the floor B = ${x??""}: no number of shots reaches it`),[()=>(t(_),s(()=>t(_).toFixed(3))),()=>(t(m),s(()=>t(m).toFixed(3)))]),Z(l,o)};We(A,l=>{t(V)?l(S):l(O,-1)}),h(2),n(G),oe((l,o,d,p,x)=>{E(te,t(v)),E(J,l),E(ve,o),c(b,"y1",d),c(b,"y2",p),c(f,"y",x),c(N,"points",t(C))},[()=>(t(m),s(()=>t(m).toFixed(3))),()=>(t(_),s(()=>t(_).toFixed(3))),()=>(t(_),s(()=>P(u(w(t(_)))))),()=>(t(_),s(()=>P(u(w(t(_)))))),()=>(t(_),s(()=>P(u(w(t(_))))-4))]),Me(_e,()=>t(j),l=>q(j,l)),Me(ae,()=>t(T),l=>q(T,l)),Me(re,()=>t(B),l=>q(B,l)),Z(we,G),Ge()}var _r=fe(`<p>The clean way to track both decays at once is the Jaynes-Cummings
        density matrix. Write the qubit state as <!> and apply the standard <!> noise channel for a wait of length <!>; with <!> and <!> the state
        becomes</p> <!> <p>The diagonal carries populations and is eaten by <!>; the
        off-diagonal carries coherence and is eaten by <!>. A direct measurement reads only the diagonal, which
        is why the <!> experiment needs no extra gates. Sandwiching the wait
        between Hadamards rotates the off-diagonal terms onto the diagonal by creating
        a change of basis, so the second measurement reads the surviving coherence
        as a bias of the coin.</p>`,1),br=fe(`<p>Take <!> independent bits where a 1 flips to 0 with probability <!> and a 0 flips to 1 with probability <!>. The variance
        contributed by the bit in position <!> is</p> <!> <p>If the bits are read as an integer, <!>, the <!> weights make the variance scale exponentially with position, irrespective
        of <!> and <!>: one flipped high bit moves the answer by half its
        range. If the same bits are read as a binary fraction, <!>,
        as the phase estimation algorithm does, each extra bit only refines the
        answer and the variance stays small. For a product of two variables the
        mixing is worse still:</p> <!> <p>means and variances contaminate each other. So even with a full table of
        single-qubit characterisations, the circuit-level variance depends on
        the readout convention, the combination arithmetic, and every pairwise
        covariance. There is no universal formula to aim for.</p>`,1),fr=fe(`<p>In the minimal STO-3G basis the <!> Hamiltonian compiles to a sum of
        fifteen 4-qubit Pauli strings:</p> <!> <p>Each string is measured by its own set of shots; the energy estimate is
        the coefficient-weighted sum. The estimator <!> over all of it
        is what the <!> model describes.</p>`,1),gr=fe(`<!> <p>A quantum computer hands you one sample from a probability distribution
    shaped by your circuit, not the answer directly. Run the circuit once and
    you get one string of bits; run it again and you get a different one. Each
    run is called a <b>shot</b>, and the number you actually wanted, usually an
    average, has to be assembled out of thousands of shots. Time on these
    machines is rented by the second, so every shot has a price. Too few shots
    and the answer is noise; too many and you paid for precision you did not
    need.</p> <p>Given a circuit, a noisy machine, and a target precision, can the number of
    shots be predicted in advance, instead of found by trial and error, which is
    how it is mostly done today? It can be done in two ways:</p> <ul><li>Bottom-Up: take one qubit, model each noise source from physics, and
        predict the spread of its outcomes from the machine's published
        calibration data.</li> <li>Top-Down: for real multi-qubit circuits, where the bottom-up route turns
        out to be intractable, fit a two-parameter law to a few cheap runs and
        read the shot count off the curve.</li></ul> <!> <h3>A coin made of one qubit</h3> <p>The simplest useful circuit is one qubit, one Hadamard gate, one
    measurement. The qubit starts in <!>, the <!> gate puts it in an
    equal superposition, and the measurement collapses it to 0 or 1 with probability
    one half each. On a perfect machine this is a fair coin, and most of the bottom-up
    approach is us studying how noise bends this coin.</p> <p>Averaging the bits over <!> shots gives an estimate <!> of the true probability <!>. One shot is a Bernoulli draw, so its variance is <!>,
    and averaging <!> independent draws divides the variance by <!>:</p> <!> <p>The spread shrinks as <!>, so each extra digit of precision
    costs a factor of 100 in shots, which is to say a factor of 100 in money.
    This square-root law is the reason shot estimation is worth doing carefully:
    overshooting "to be safe" is expensive in the same regime where the machine
    is already expensive.</p> <h3>Noise that hides and noise that shifts</h3> <p>The first noise source is the most mundane: the machine sometimes reads the
    bit wrong. These are state preparation and measurement (SPAM) errors, and
    the readout half of them comes in two parts, <!>, the
    probability a 0 is reported as 1, and <!>, the reverse. The
    measured mean becomes</p> <!> <p>For the fair coin <!>. Take a strongly asymmetric case, <!> and <!>:</p> <!> <p>Two things follow, and you can check both in the widget below. If the two
    error rates are equal, the shifts cancel and <!> exactly: the mean
    of a fair coin cannot see symmetric readout noise at all, no matter how large
    it is. If the rates differ, the whole distribution slides to a new centre, 0.415
    in the worked case, and no number of shots brings it back. More shots only sharpen
    the estimate of the wrong value. The symmetric cancellation holds on two independent
    noisy simulators, IBM's and CERN's, both set to <!>.</p> <!> <h3>One number per qubit</h3> <p>To compare spreads across different means we switch from <!> to the relative
    standard deviation, <!>, which is dimensionless.
    Then we apply the central limit theorem in its most practical form. Take a
    long record of shots, <!> of them, and chop it into 256 windows of <!> shots each, for <!>. Average each window. The window averages are close to normally
    distributed, and their RSD inherits the square-root law, so on log axes the
    points fall on a straight line:</p> <!> <p>The slope is always <!>; it carries no information about the device.
    Everything the noise does to the distribution is compressed into the
    intercept <!>. For a coin that reads 1 with probability <!>, the
    window average has mean <!> and standard deviation <!>, so the intercept can be computed in closed form (all
    logs natural here):</p> <!> <p>A fair coin has <!> and therefore <!>. The asymmetric SPAM
    coin from the last section had <!>, so</p> <!> <p>and substituting <!> for <!> in general gives the prediction straight
    from the two readout rates:</p> <!> <p>Symmetric errors give <!> regardless of size, matching what
    the mean already told us. The formula is also a warning: if one error rate is
    held at zero and the other is <!>, the sensitivity is <!>, which is steepest near small <!>. One-directional
    readout error inflates the variance fastest, so a hardware designer should
    want readout errors small <i>and</i> symmetric, in that order of importance.</p> <!> <p>This is the entire bottom-up program in miniature: predict <!> from the calibration
    sheet, measure <!> from the windowed shots, compare. Every quantum machine
    publishes a calibration sheet per qubit on every calibration cycle: readout error
    rates, decay times, gate errors. On IBM's Torino machine the prediction landed
    within 0.01 of the measured intercept using nothing but that sheet.</p> <h3>The decay clocks</h3> <p>A qubit holding <!> relaxes toward <!> with a characteristic
    time <!>. To see it with the coin, we insert a wait of length <!> between
    the <!> gate and the measurement. The probability that an excited qubit decays
    during the wait is <!>, which reshuffles the two outcome probabilities:</p> <!> <p>Pushing these through the intercept formula gives the same expression as
    SPAM with one new factor <!>:</p> <!> <p>When the wait is short, <!>, <!>, and the SPAM
    formula reappears unchanged. With clean readout the formula collapses to <!>, and the numbers stay tame for realistic waits.
    Torino's calibration listed <!> microseconds; a wait one tenth of
    that gives</p> <!> <p>Running the wait circuit on Torino's hardware across a range of delays and
    comparing to these predictions, the median error was 0.01.</p> <p>The second clock, <!>, governs phase: how long the qubit remembers <i>where</i> in the superposition it is, not just how much. Phase is
    invisible to a direct measurement, so the circuit changes to <!>, wait, <!>. With no wait the two Hadamards cancel and the circuit always reads
    0. As the wait grows the surviving coherence <!> shrinks, and the outcome drifts from deterministic toward a fair
    coin. The same intercept formula applies with <!>, and on Torino the predictions held
    with mean and median errors of about 1%, with a visibly larger spread than
    the <!> case.</p> <!> <p>One more refinement, because the calibration sheet is itself a measurement: <!> comes with an uncertainty <!>, and that uncertainty
    propagates into the predicted intercept through the derivative,</p> <!> <p>where <!> is the machine's pulse time unit. The factor <!> means the uncertainty in <!> dies quickly as coherence times improve, and <!> gives <!>: short circuits are insensitive to
    how well you know the clock.</p> <h3>Gates lie too</h3> <p>Gate errors are the third ingredient. Assuming no correlated errors, each
    imperfect gate acts like a depolarising channel: with some probability it
    applies an unwanted <!>, <!> or <!> to the qubit. Individual probabilities
    per axis are hard to extract, but randomised benchmarking publishes a single
    combined figure, the error per layered gate <!>, and splitting it evenly
    gives <!>. Errors along a given axis compound across <!> gates as</p> <!> <p>which for <!> and <!> gives <!> against the shortcut's <!>. Substituting these compounded
    probabilities into the same intercept machinery, and running on Torino's
    hardware, the prediction errors stayed within about 0.1, with a slight bias
    toward underprediction. These figures do not account for SPAM, so part of
    that 0.1 is noise deliberately left out of the model.</p> <blockquote>The shortcut is safe as long as <!>. Past that the binomial error
    term grows large enough to corrupt predictions even though the circuit
    itself may still be fine. So the circuit still might work, but my math stops
    working.</blockquote> <div class="m20"><hr/></div> <h3>Where the bottom-up story ends</h3> <p>At this point one qubit is a solved bookkeeping exercise: every noise source
    on the calibration sheet maps to a predictable shift of one number, <!>. This however can be used only to caliberate individual qubits, and
    not compose them into large circuits.</p> <p>The variance of a sum of two random bits is</p> <!> <p>For classical independent coins the covariance is zero and life is easy.
    Qubits in one circuit are entangled; entanglement is correlation, so the
    covariance term cannot be dropped. Every pair of qubits needs its own
    covariance, and pairs grow quadratically:</p> <!> <p>covariances for a 100-qubit circuit, each one requiring its own
    measurements, on top of the single-qubit terms. Worse, the answer depends on
    how the measured bits are combined into a number, before any noise is even
    considered.</p> <!> <h3>Measure the variance instead</h3> <p>Here we flip direction; instead of predicting the variance from parts,
    measure it whole, but measure it cheaply. The analysis restricts to the
    class of circuits most NISQ algorithms already live in: expectation-value
    circuits, where the goal is the average <!> of some observable <!> over a prepared state. Variational chemistry, optimisation, most near-term
    workloads have this shape. For such circuits the observable's intrinsic variance
    is itself measurable:</p> <!> <p>and on a noiseless machine the estimator after <!> shots obeys the textbook
    law <!>: a straight line of slope <!> on log-log axes, falling forever. On a real machine it does not fall forever,
    and the deviation is modelled by the measured variance as</p> <!> <p><!> is the statistical part, the intrinsic quantum randomness that shots genuinely
    average away. <!> is a bias floor from systematic, device- and circuit-dependent
    error, the multi-qubit descendant of the intercept <!>: shots do nothing
    to it. The model is two numbers, and both come almost free. The same
    procedure that estimates <!> can also be used to estimate <!> with the same shot data. With one additional run of
    the same circuit with a 'squared' observable, the variance can be estimated.
    The fit over a few shot counts then gives us <!> and <!>.</p> <h3>A molecule as the test bench</h3> <p>The test bench is the standard entry-level chemistry problem: a variational
    quantum eigensolver (VQE) finding the ground-state energy of the <!> molecule, four qubits, a Hartree-Fock starting state, and an excitation-preserving
    ansatz. The observable is the molecular Hamiltonian, estimated term by term from <!>-eigenvalue measurements.</p> <!> <p>A fit needs error bars. Since <!> is approximately normal, the sample
    variance follows a scaled chi-squared distribution and its standard error has
    a closed form:</p> <!> <p>The relative error depends only on <!>, so it can be budgeted before
    touching the machine. Capping it at <!> percent requires</p> <!> <p>The circuit ran at three shot counts on three backends, a noisy simulator,
    IBM Kingston, and IBM Pittsburgh; <!> was fitted through the three points
    and the fit's predictions checked at shot counts it had never seen. On all three
    backends the predictions agreed with the measured variances within the error
    bounds above. The lowest point, <!>, carries a very large error bar,
    exactly as <!> says it must.</p> <p>Once fitted, the model runs backwards, and the inverse is the practical
    payoff. Fix the target variance, solve for the shots:</p> <!> <p>The numbers 56 and 0.002 here are illustrative values consistent with the
    Pittsburgh fit; the conclusion: for IBM Pittsburgh's noise characteristics
    at that instant, 7000 shots of this circuit would have achieved <!>.
    The widget below is this equation made draggable.</p> <!> <p>The variance does carry its own price: <!> means measuring
    a squared Hamiltonian, which compiles to its own, longer list of Pauli strings,
    each needing shots. The saving is that this overhead does not have to match the
    size of the main run. The variance enters only through the fitted <!> and <!>, and the curve, once fitted at small shot counts, can be evaluated at
    any <!>. So if the production run spends 50,000 shots on one precise
    expectation value, learning its variance does not take a second 50,000-shot
    campaign; the cheap fit already prices it:</p> <!> <p>The expensive run buys the precision; a handful of cheap runs is enough to
    certify it.</p> <p>Both fitted numbers are perishable. <!> varies with the state being prepared, <!> with the device, the qubits chosen, the layout, and the hour; the two-day-stale
    calibration that wrecked the qubit 61 prediction applies with full force here.
    Measurements need to be made afresh, per session. Two gaps however still remain
    open. Correlated errors and crosstalk are excluded for lack of accepted models,
    and there is no mechanistic account of <!>: the bottom-up half of the
    paper explains its single-qubit ancestor <!> from first principles, but what
    sets the size of the multi-qubit floor, and which knobs lower it, is still an
    empirical question.</p> <!>`,1);function qr(we,qe){De(qe,!1),Ce();var v=gr(),m=be(v);Ua(m,{title:"Estimating Shots and Variance",sub:"arXiv:2501.03194",desc:"How many runs a noisy quantum computer needs before its answer deserves trust",date:"6 January 2025"});var _=e(m,8);{let ke=Qa(()=>[L("N","number of shots: how many times the same circuit is run and measured"),L("μ","mean of the measured bits; for the coin circuit, the fraction of shots that read 1. μ′ is the mean after noise shifts it"),L("σ","standard deviation of the estimate; σ² is the variance, the measure of precision throughout"),L("p","probability of reading 1, with p₀ = 1 − p₁. The readout errors p₀→₁ and p₁→₀ are the odds of a 0 being read as 1, and the reverse"),L("w","window size: shots are grouped into windows of w and each window is averaged, which makes the averages near-normal"),L("c","intercept of the ln(RSD) vs ln(w) line; one number summarising how noisy a qubit's outcome distribution is"),L("ε","for T₁: the probability the qubit decays during the wait, 1 − e^(−t/T₁); for T₂: the coherence that survives the wait, e^(−t/T₂)"),L("b","(1+ε)/(1−ε), the factor a decay clock contributes inside the intercept formula"),L("T","decay clocks from the calibration sheet: T₁ for amplitude (a |1⟩ falling back to |0⟩), T₂ for phase"),L("H","the Hadamard gate: sends |0⟩ to an equal split of |0⟩ and |1⟩, the quantum coin flip"),L("O","the observable being estimated; here, the energy of the H₂ molecule"),L("A","statistical half of the model Var ≈ A/N + B; close to σ² of the observable, and shrinks as shots grow"),L("B","bias floor: the variance left over as N → ∞. No shot budget removes it"),L("E","error per layered gate (EPLG), a published benchmark of gate noise")]);Ka(_,{ignores:"t,k,n,x,y,i,j,s,e,d,a,m,q,r,u,v,X,Y,Z,P,V,S,W,I,R,F,L,D",get list(){return t(ke)}})}var V=e(_,4),g=e(i(V));a(g,()=>r`|0\\rangle`);var H=e(g,2);a(H,()=>r`H`),h(),n(V);var j=e(V,2),T=e(i(j));a(T,()=>r`N`);var B=e(T,2);a(B,()=>r`\\mu`);var W=e(B,2);a(W,()=>r`\\mu_0 = 0.5`);var w=e(W,2);a(w,()=>r`p(1-p)`);var y=e(w,2);a(y,()=>r`N`);var P=e(y,2);a(P,()=>r`N`),h(),n(j);var u=e(j,2);a(u,()=>M`
\\begin{aligned}
\\text{one shot:}\\quad \\sigma^2 &= p(1-p) = 0.5 \\times 0.5 = 0.25\\\\
N \\text{ shots:}\\quad \\sigma &= \\sqrt{0.25/N} = 0.5/\\sqrt{N}\\\\
N = 100:\\quad \\sigma &= 0.05\\\\
N = 10\\,000:\\quad \\sigma &= 0.005
\\end{aligned}
`);var C=e(u,2),ne=e(i(C));a(ne,()=>r`1/\\sqrt{N}`),h(),n(C);var Q=e(C,4),G=e(i(Q));a(G,()=>r`p_{0 \\to 1}`);var ue=e(G,2);a(ue,()=>r`p_{1 \\to 0}`),h(),n(Q);var ee=e(Q,2);a(ee,()=>M`
\\mu' = P(1) + p_{0\\to1}\\,P(0) - p_{1\\to0}\\,P(1)
`);var D=e(ee,2),te=e(i(D));a(te,()=>r`P(0) = P(1) = 0.5`);var _e=e(te,2);a(_e,()=>r`p_{0\\to1} = 0.33`);var ie=e(_e,2);a(ie,()=>r`p_{1\\to0} = 0.5`),h(),n(D);var ce=e(D,2);a(ce,()=>M`
\\mu' = 0.5 + 0.33 \\times 0.5 - 0.5 \\times 0.5 = 0.415
`);var J=e(ce,2),ae=e(i(J));a(ae,()=>r`\\mu' = 0.5`);var se=e(ae,2);a(se,()=>r`p_{0\\to1} = p_{1\\to0} = 0.33`),h(),n(J);var z=e(J,2);ar(z,{});var ve=e(z,4),re=e(i(ve));a(re,()=>r`\\sigma`);var K=e(re,2);a(K,()=>r`\\text{RSD} = \\sigma/\\mu`);var pe=e(K,2);a(pe,()=>r`2^{15}`);var le=e(pe,2);a(le,()=>r`w`);var me=e(le,2);a(me,()=>r`w = 4, 8, 16, \\ldots,
    128`),h(),n(ve);var de=e(ve,2);a(de,()=>M`
\\ln(\\text{RSD}) = -\\tfrac{1}{2}\\ln w + c
`);var b=e(de,2),f=e(i(b));a(f,()=>r`-1/2`);var N=e(f,2);a(N,()=>r`c`);var I=e(N,2);a(I,()=>r`p`);var F=e(I,2);a(F,()=>r`p`);var A=e(F,2);a(A,()=>r`\\sqrt{p(1-p)/w}`),h(),n(b);var S=e(b,2);a(S,()=>M`
\\begin{aligned}
c &= \\ln\\frac{\\sigma}{\\mu} + \\tfrac{1}{2}\\ln w
= \\ln\\frac{\\sqrt{p(1-p)/w}}{p} + \\tfrac{1}{2}\\ln w\\\\
&= \\tfrac{1}{2}\\ln\\frac{1-p}{p} = \\tfrac{1}{2}\\ln\\frac{p_0}{p_1}
\\end{aligned}
`);var O=e(S,2),l=e(i(O));a(l,()=>r`p_0 = p_1`);var o=e(l,2);a(o,()=>r`c = 0`);var d=e(o,2);a(d,()=>r`\\mu' = 0.415`),h(),n(O);var p=e(O,2);a(p,()=>M`
c = \\tfrac{1}{2}\\ln\\frac{0.585}{0.415} = 0.172
`);var x=e(p,2),$=e(i(x));a($,()=>r`\\mu'`);var X=e($,2);a(X,()=>r`p`),h(),n(x);var Y=e(x,2);a(Y,()=>M`
c_{\\text{pred}} = \\tfrac{1}{2}\\ln\\!\\left(\\frac{1 + p_{1\\to0} - p_{0\\to1}}{1 + p_{0\\to1} - p_{1\\to0}}\\right)
`);var U=e(Y,2),Ve=e(i(U));a(Ve,()=>r`c_{\\text{pred}} = 0`);var Oe=e(Ve,2);a(Oe,()=>r`x`);var Ze=e(Oe,2);a(Ze,()=>r`dc/dx =
    \\pm 2/(x^2 - 1)`);var Le=e(Ze,2);a(Le,()=>r`x`),h(3),n(U);var ze=e(U,2);sr(ze,{});var Se=e(ze,2),Ye=e(i(Se));a(Ye,()=>r`c`);var Qe=e(Ye,2);a(Qe,()=>r`c`),h(),n(Se);var Be=e(Se,4),ft=e(i(Be));a(ft,()=>r`|1\\rangle`);var gt=e(ft,2);a(gt,()=>r`|0\\rangle`);var xt=e(gt,2);a(xt,()=>r`T_1`);var yt=e(xt,2);a(yt,()=>r`t`);var wt=e(yt,2);a(wt,()=>r`H`);var Ia=e(wt,2);a(Ia,()=>r`\\varepsilon = 1 -
    e^{-t/T_1}`),h(),n(Be);var qt=e(Be,2);a(qt,()=>M`
p_0' = p_0 + p_1\\,\\varepsilon, \\qquad p_1' = p_1\\,(1 - \\varepsilon)
`);var Je=e(qt,2),Aa=e(i(Je));a(Aa,()=>r`b`),h(),n(Je);var kt=e(Je,2);a(kt,()=>M`
c_{\\text{pred}} = \\tfrac{1}{2}\\ln\\!\\left(\\frac{b\\,(1-p_{0\\to1}) + p_{1\\to0}}{b\\,p_{0\\to1} + 1 - p_{1\\to0}}\\right),
\\qquad b = \\frac{1+\\varepsilon}{1-\\varepsilon}
`);var Ke=e(kt,2),Tt=e(i(Ke));a(Tt,()=>r`\\varepsilon \\to 0`);var Nt=e(Tt,2);a(Nt,()=>r`b \\to 1`);var Mt=e(Nt,2);a(Mt,()=>r`c = \\tfrac{1}{2}\\ln b`);var Pa=e(Mt,2);a(Pa,()=>r`T_1 = 232`),h(),n(Ke);var It=e(Ke,2);a(It,()=>M`
\\begin{aligned}
\\varepsilon &= 1 - e^{-23.2/232} = 0.095\\\\
b &= \\frac{1.095}{0.905} = 1.210\\\\
c &= \\tfrac{1}{2}\\ln 1.210 = 0.095
\\end{aligned}
`);var Ue=e(It,4),At=e(i(Ue));a(At,()=>r`T_2`);var Pt=e(At,4);a(Pt,()=>r`H`);var Ft=e(Pt,2);a(Ft,()=>r`H`);var St=e(Ft,2);a(St,()=>r`\\varepsilon_2 =
    e^{-t/T_2}`);var Bt=e(St,2);a(Bt,()=>r`b =
    (1+\\varepsilon_2)/(1-\\varepsilon_2)`);var Fa=e(Bt,2);a(Fa,()=>r`T_1`),h(),n(Ue);var $t=e(Ue,2);_t($t,{title:"Where the decay factor b comes from",children:(ke,Na)=>{var ge=_r(),he=be(ge),Te=e(i(he));a(Te,()=>r`\\alpha|0\\rangle + \\beta|1\\rangle`);var xe=e(Te,2);a(xe,()=>r`T_1, T_2`);var ye=e(xe,2);a(ye,()=>r`t`);var Ne=e(ye,2);a(Ne,()=>r`\\varepsilon_1 = e^{-t/T_1}`);var Pe=e(Ne,2);a(Pe,()=>r`\\varepsilon_2 = e^{-t/T_2}`),h(),n(he);var Fe=e(he,2);a(Fe,()=>M`
    \\rho_{T_1+T_2} = \\begin{pmatrix}
    1 + (|\\alpha|^2 - 1)\\,\\varepsilon_1 & \\alpha\\beta^*\\,\\varepsilon_2\\\\
    \\alpha^*\\beta\\,\\varepsilon_2 & |\\beta|^2\\,\\varepsilon_1
    \\end{pmatrix}
    `);var $e=e(Fe,2),Xe=e(i($e));a(Xe,()=>r`\\varepsilon_1`);var Ee=e(Xe,2);a(Ee,()=>r`\\varepsilon_2`);var Re=e(Ee,2);a(Re,()=>r`T_1`),h(),n($e),Z(ke,ge)},$$slots:{default:!0}});var et=e($t,2),Xt=e(i(et));a(Xt,()=>r`T_2`);var Sa=e(Xt,2);a(Sa,()=>r`\\sigma_{T_2}`),h(),n(et);var Et=e(et,2);a(Et,()=>M`
\\begin{aligned}
\\sigma_c &= \\frac{\\partial c}{\\partial T_2}\\,\\sigma_{T_2} = \\frac{t\\,e^{t/T_2}}{T_2^2\\left(e^{2t/T_2} - 1\\right)}\\,\\sigma_{T_2} \\\\
\\text{At } &T_2 = 500\\,\\delta t,\\;\\; t = 100\\delta t,\\;\\; \\sigma_{T_2} = 20\\, \\delta t: \\\\
\\sigma_c &= \\frac{100 \\cdot e^{0.2}}{500^2 \\left(e^{0.4} - 1\\right)} \\cdot 20 \\approx \\frac{122.1}{122\\,950} \\cdot 20 \\approx 0.02
\\end{aligned}
`);var tt=e(Et,2),Ht=e(i(tt));a(Ht,()=>r`\\delta t`);var jt=e(Ht,2);a(jt,()=>r`1/T_2^2`);var Vt=e(jt,2);a(Vt,()=>r`c`);var Ot=e(Vt,2);a(Ot,()=>r`t \\to 0`);var Ba=e(Ot,2);a(Ba,()=>r`\\sigma_c \\to 0`),h(),n(tt);var at=e(tt,4),Zt=e(i(at));a(Zt,()=>r`X`);var zt=e(Zt,2);a(zt,()=>r`Y`);var Yt=e(zt,2);a(Yt,()=>r`Z`);var Rt=e(Yt,2);a(Rt,()=>r`E`);var Wt=e(Rt,2);a(Wt,()=>r`p_x = p_y = p_z = E/3`);var $a=e(Wt,2);a($a,()=>r`k`),h(),n(at);var Dt=e(at,2);a(Dt,()=>M`
P_k = 1 - (1-p)^k \\approx k\\,p
`);var rt=e(Dt,2),Ct=e(i(rt));a(Ct,()=>r`p = 0.001`);var Gt=e(Ct,2);a(Gt,()=>r`k = 50`);var Lt=e(Gt,2);a(Lt,()=>r`1 - 0.999^{50} = 0.0488`);var Xa=e(Lt,2);a(Xa,()=>r`0.05`),h(),n(rt);var ot=e(rt,2),Ea=e(i(ot));a(Ea,()=>r`k \\le 1/p`),h(),n(ot);var nt=e(ot,6),Ha=e(i(nt));a(Ha,()=>r`c`),h(),n(nt);var Qt=e(nt,4);a(Qt,()=>M`
\\mathrm{Var}(X_1 + X_2) = \\mathrm{Var}(X_1) + \\mathrm{Var}(X_2) + 2\\,\\mathrm{Cov}(X_1, X_2)
`);var Jt=e(Qt,4);a(Jt,()=>M`
\\binom{100}{2} = \\frac{100 \\times 99}{2} = 4950
`);var Kt=e(Jt,4);_t(Kt,{title:"How bits combine decides the variance",children:(ke,Na)=>{var ge=br(),he=be(ge),Te=e(i(he));a(Te,()=>r`k`);var xe=e(Te,2);a(xe,()=>r`p`);var ye=e(xe,2);a(ye,()=>r`q`);var Ne=e(ye,2);a(Ne,()=>r`i`),h(),n(he);var Pe=e(he,2);a(Pe,()=>M`
    \\mathrm{Var}(X_i) = (1 - p + q)(p - q)\\cdot 2^i
    `);var Fe=e(Pe,2),$e=e(i(Fe));a($e,()=>r`101010_2 = 42`);var Xe=e($e,2);a(Xe,()=>r`2^i`);var Ee=e(Xe,2);a(Ee,()=>r`p`);var Re=e(Ee,2);a(Re,()=>r`q`);var Ga=e(Re,2);a(Ga,()=>r`0.0110101_2 \\approx 0.42`),h(),n(Fe);var La=e(Fe,2);a(La,()=>M`
    \\mathrm{Var}(X_1 X_2) = \\left(\\mathrm{Var}(X_1) + \\mu_1^2\\right)\\left(\\mathrm{Var}(X_2) + \\mu_2^2\\right) - \\mu_1^2\\,\\mu_2^2
    `),h(2),Z(ke,ge)},$$slots:{default:!0}});var it=e(Kt,4),Ut=e(i(it));a(Ut,()=>r`\\langle O \\rangle`);var ja=e(Ut,2);a(ja,()=>r`O`),h(),n(it);var ea=e(it,2);a(ea,()=>M`
\\sigma^2 = \\mathrm{Var}(O) = \\langle O^2 \\rangle - \\langle O \\rangle^2
`);var st=e(ea,2),ta=e(i(st));a(ta,()=>r`N`);var aa=e(ta,2);a(aa,()=>r`\\mathrm{Var}(\\bar E_N) = \\sigma^2/N`);var Va=e(aa,2);a(Va,()=>r`-1`),h(),n(st);var ra=e(st,2);a(ra,()=>M`
\\mathrm{Var}(\\bar E_N) = \\frac{A}{N} + B, \\qquad A \\approx \\sigma^2,\\quad B \\ge 0
`);var lt=e(ra,2),oa=i(lt);a(oa,()=>r`A`);var na=e(oa,2);a(na,()=>r`B`);var ia=e(na,2);a(ia,()=>r`c`);var sa=e(ia,2);a(sa,()=>r`\\langle O \\rangle`);var la=e(sa,2);a(la,()=>r`\\langle O^2 \\rangle`);var da=e(la,2);a(da,()=>r`A`);var Oa=e(da,2);a(Oa,()=>r`B`),h(),n(lt);var dt=e(lt,4),ha=e(i(dt));a(ha,()=>r`H_2`);var Za=e(ha,2);a(Za,()=>r`\\pm 1`),h(),n(dt);var ca=e(dt,2);_t(ca,{title:"The actual Hamiltonian",children:(ke,Na)=>{var ge=fr(),he=be(ge),Te=e(i(he));a(Te,()=>r`H_2`),h(),n(he);var xe=e(he,2);a(xe,()=>M`
    \\begin{aligned}
    H ={}& 0.045\\,(YYYY + XXYY + YYXX + XXXX)\\\\
    &+ 0.120\\,(IIZZ + ZZII) + 0.166\\,(ZIIZ + IZZI)\\\\
    &+ 0.168\\, IZIZ + 0.170\\,(IIIZ + IZII) + 0.17\\, ZIZI\\\\
    &- 0.219\\,(ZIII + IIZI) - 0.815\\, IIII
    \\end{aligned}
    `);var ye=e(xe,2),Ne=e(i(ye));a(Ne,()=>r`\\bar E_N`);var Pe=e(Ne,2);a(Pe,()=>r`A/N + B`),h(),n(ye),Z(ke,ge)},$$slots:{default:!0}});var ht=e(ca,2),za=e(i(ht));a(za,()=>r`\\bar E_N`),h(),n(ht);var va=e(ht,2);a(va,()=>M`
\\mathrm{SE}(s^2) = s^2\\sqrt{\\frac{2}{N-1}}, \\qquad
s^2 = \\frac{1}{N-1}\\sum_{i=1}^{N}\\left(E_i - \\bar E_N\\right)^2
`);var ct=e(va,2),pa=e(i(ct));a(pa,()=>r`N`);var Ya=e(pa,2);a(Ya,()=>r`p`),h(),n(ct);var ma=e(ct,2);a(ma,()=>M`
N > \\frac{2 \\times 10^4}{p^2}: \\qquad
p = 2 \\;\\Rightarrow\\; N > 5000, \\qquad
p = 1 \\;\\Rightarrow\\; N > 20\\,000
`);var vt=e(ma,2),ua=e(i(vt));a(ua,()=>r`A/N + B`);var _a=e(ua,2);a(_a,()=>r`N = 32`);var Ra=e(_a,2);a(Ra,()=>r`\\sqrt{2/(N-1)}`),h(),n(vt);var ba=e(vt,4);a(ba,()=>M`
N = \\frac{A}{\\sigma^2 - B} = \\frac{56}{0.01 - 0.002} = 7000
`);var pt=e(ba,2),Wa=e(i(pt));a(Wa,()=>r`\\sigma^2 \\approx 0.01`),h(),n(pt);var fa=e(pt,2);ur(fa,{});var mt=e(fa,2),ga=e(i(mt));a(ga,()=>r`\\langle O^2 \\rangle`);var xa=e(ga,2);a(xa,()=>r`A`);var ya=e(xa,2);a(ya,()=>r`B`);var Da=e(ya,2);a(Da,()=>r`N`),h(),n(mt);var wa=e(mt,2);a(wa,()=>M`
\\mathrm{Var}(\\bar E_{50\\,000}) = \\frac{56}{50\\,000} + 0.002 \\approx 0.0031
`);var ut=e(wa,4),qa=e(i(ut));a(qa,()=>r`A`);var ka=e(qa,2);a(ka,()=>r`B`);var Ta=e(ka,2);a(Ta,()=>r`B`);var Ca=e(Ta,2);a(Ca,()=>r`c`),h(),n(ut),er(e(ut,2),{list:[["Estimating shots and variance on noisy quantum circuits (Seksaria & Prabhakar, 2025)","https://arxiv.org/abs/2501.03194"],["Quantum Computing in the NISQ era and beyond (Preskill, 2018)","https://arxiv.org/abs/1801.00862"],["A variational eigenvalue solver on a photonic quantum processor (Peruzzo et al., 2014)","https://www.nature.com/articles/ncomms5213"],["Benchmarking quantum processor performance at scale (McKay et al., 2023; EPLG)","https://arxiv.org/abs/2311.05933"],["A quantum engineer's guide to superconducting qubits (Krantz et al., 2019)","https://arxiv.org/abs/1904.06560"]]}),Z(we,v),Ge()}export{qr as component};
