import"../chunks/DsnmJJEf.js";import"../chunks/sDYslN56.js";import{p as Ma,aH as fe,aI as zs,a as Ra,g as a,s as e,c as i,a4 as q,ao as _,r as n,u as c,n as h,f as H,aK as ya,t as W,aL as en,aM as an,d as tn}from"../chunks/CZzIV55D.js";import{a as l,f as d,t as Wa,d as sn,e as Es}from"../chunks/BlMiFbA4.js";import{h as t}from"../chunks/DS88NDGo.js";import{i as Aa}from"../chunks/Cip6YPdY.js";import{D as nn,d as j}from"../chunks/BgxUS35f.js";import{M as rn,a as s,_ as B}from"../chunks/Ca4_tEOp.js";import{s as A}from"../chunks/CVLMyftS.js";import{i as y}from"../chunks/BJjYSnFD.js";import{e as ie,i as re}from"../chunks/DMALeH6E.js";import{r as ht,s as x}from"../chunks/DXlEpTQd.js";import{s as ga}from"../chunks/DvReYul2.js";import{e as wa}from"../chunks/Au3KRjSp.js";import{b as dt}from"../chunks/rWj9Gqlu.js";import{o as on}from"../chunks/DY9qbGRG.js";import{A as ln}from"../chunks/JfG-0PZC.js";import{R as cn}from"../chunks/CIMe7u3z.js";var hn=d('<span class="plus svelte-11fkcz8">+</span>'),dn=d("<sup></sup>"),vn=d('<span class="pow svelte-11fkcz8">x<!></span>'),pn=d('<!> <span class="cell svelte-11fkcz8"><input type="number" min="0" step="1" class="svelte-11fkcz8"/> <!></span>',1),un=d('<span class="plus svelte-11fkcz8">+</span>'),mn=d("<sup></sup>"),fn=d('<span class="pow svelte-11fkcz8">x<!></span>'),bn=d('<!> <span class="cell svelte-11fkcz8"><input type="number" min="0" step="1" class="svelte-11fkcz8"/> <!></span>',1),yn=d('<span class="term svelte-11fkcz8">0</span>'),gn=d('<span class="plus svelte-11fkcz8">+</span>'),wn=d("<sup> </sup>"),xn=d("x<!>",1),kn=d("<!> <span> <!></span>",1),qn=d('<span class="term svelte-11fkcz8">0</span>'),_n=d('<span class="plus svelte-11fkcz8">+</span>'),Tn=d('<b class="wrap svelte-11fkcz8"> </b>'),En=d("<sup> </sup>"),zn=d("x<!>",1),Ln=d('<!> <span class="term svelte-11fkcz8"><!> <!><!><!></span>',1),Mn=d('<span class="term final svelte-11fkcz8">0</span>'),Rn=d('<span class="plus svelte-11fkcz8">+</span>'),An=d("<sup> </sup>"),Wn=d("x<!>",1),Sn=d('<!> <span class="term final svelte-11fkcz8"> <!></span>',1),$n=d('<div class="ringmul tc mx-a my20 p10 rx10 svelte-11fkcz8"><div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8">a(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8">b(x)</span> <span class="plus svelte-11fkcz8">=</span> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8">a·b</span> <span class="plus svelte-11fkcz8">=</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8">x<sup></sup> ≡ −1</span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="fw al-ct j-ct g5 my5"><span class="lbl svelte-11fkcz8"></span> <span class="plus svelte-11fkcz8">≡</span> <!> <!></div> <div class="note mt10 svelte-11fkcz8">every product in <b>R<sub></sub></b> </div></div>'),Kn=d("<button> </button>"),Pn=d('<span class="pcell svelte-1x9pnmt"> </span>'),Cn=d('<div class="prow svelte-1x9pnmt"><span> </span> <span class="pname svelte-1x9pnmt"> </span> <!></div>'),jn=sn('<rect width="26"></rect><text y="206" text-anchor="middle"> </text>',1),In=d(`<div class="hint tc mt5 svelte-1x9pnmt">no noise at all: decryption is perfect, but b = a·s exactly, so
            Eve computes b·a<sup>−1</sup> and has the secret key</div>`),Fn=d(`<div class="pg mx-a my20 p10 rx10 svelte-1x9pnmt"><div class="f al-ct j-ct fw g10 mb10"><label class="svelte-1x9pnmt">error size η = <b> </b> <input type="range" min="0" max="6" class="svelte-1x9pnmt"/></label> <button class="svelte-1x9pnmt">new keys</button> <button class="svelte-1x9pnmt">re-encrypt</button></div> <div class="tc my5"><span class="cap svelte-1x9pnmt">message (click bits to flip):</span> <!></div> <div class="polys svelte-1x9pnmt"></div> <div class="tc"><svg width="430" height="216" font-family="monospace" font-size="10" class="svelte-1x9pnmt"><rect x="44" fill="rgba(34, 170, 255, 0.10)"></rect><line x1="44" stroke="#999"></line><line x1="44" stroke="#e67" stroke-dasharray="4 3"></line><line x1="44" stroke="#e67" stroke-dasharray="4 3"></line><text x="40" text-anchor="end">+48</text><text x="40" text-anchor="end" fill="#e67">+q/4</text><text x="40" text-anchor="end">0</text><text x="40" text-anchor="end" fill="#e67">−q/4</text><text x="40" text-anchor="end">−48</text><!></svg> <div class="cap svelte-1x9pnmt">coefficients of v − u·s (centered mod 97), decoded bits below</div></div> <div><!></div> <!> <div class="note tc mt10 svelte-1x9pnmt">Eve only ever sees a, b, u, v. Each is indistinguishable from uniform
        random numbers mod 97; the secret s and all the error polynomials
        never leave home.</div></div>`);function Nn(Sa,$a){Ma($a,!1);const Te=q(),Ee=q(),oe=q(),I=q(),be=q(),Ne=q(),le=97,ce=le/4;let $=q(1),M=q([1,0,1,1,0,0,1,0]),ze=q(0),Le=q(0);const ye=r=>(r%le+le)%le,Oe=r=>ye(r)>le/2?ye(r)-le:ye(r),aa=(r,v)=>r+Math.floor(Math.random()*(v-r+1)),Me=r=>Array.from({length:8},()=>aa(-r,r));function Re(r,v){const m=new Array(8).fill(0);for(let b=0;b<8;b++)for(let E=0;E<8;E++)m[(b+E)%8]+=(b+E<8?1:-1)*r[b]*v[E];return m.map(ye)}const Ae=(r,v)=>r.map((m,b)=>ye(m+v[b]));let G=q([]),he=q([]),ta=q([]),J=q([]),ge=q([]),sa=q([]),Be=q([]);const z=r=>100-r*(88/48),na=r=>48+46*r;fe(()=>(a(ze),a($),a(G),a(he),a(ta)),()=>{a(ze),a($),_(G,Array.from({length:8},()=>aa(0,96))),_(he,Me(Math.max(1,+a($)))),_(ta,Me(+a($))),_(J,Ae(Re(a(G),a(he)),a(ta)))}),fe(()=>(a(Le),a(J),a($)),()=>{a(Le),a(J),_(ge,Me(Math.max(1,+a($)))),_(sa,Me(+a($))),_(Be,Me(+a($)))}),fe(()=>(a(G),a(ge),a(sa)),()=>{_(Te,Ae(Re(a(G),a(ge)),a(sa)))}),fe(()=>(a(J),a(ge),a(Be),a(M)),()=>{_(Ee,Ae(Ae(Re(a(J),a(ge)),a(Be)),a(M).map(r=>48*r)))}),fe(()=>(a(Ee),a(Te),a(he)),()=>{var r,v;_(oe,(r=a(Ee),v=Re(a(Te),a(he)),r.map((m,b)=>ye(m-v[b]))).map(Oe))}),fe(()=>a(oe),()=>{_(I,a(oe).map(r=>Math.abs(r)>ce?1:0))}),fe(()=>(a(I),a(M)),()=>{_(be,a(I).filter((r,v)=>r!==a(M)[v]).length)}),fe(()=>(a(oe),a(M)),()=>{_(Ne,Math.max(...a(oe).map((r,v)=>Math.abs(Oe(r-48*a(M)[v])))))}),zs(),Aa();var He=Fn(),De=i(He),Ye=i(De),ia=e(i(Ye)),ra=i(ia,!0);n(ia);var oa=e(ia,2);ht(oa),n(Ye);var la=e(Ye,2),xa=e(la,2);n(De);var Ze=e(De,2),ka=e(i(Ze),2);ie(ka,1,()=>a(M),re,(r,v,m)=>{var b=Kn();let E;var F=i(b,!0);n(b),W(()=>{E=ga(b,1,"bit svelte-1x9pnmt",null,E,{on:a(v)===1}),A(F,a(v))}),wa("click",b,()=>ya(M,a(M)[m]=1-a(M)[m])),l(r,b)}),n(Ze);var ca=e(Ze,2);ie(ca,5,()=>[["pub","public","a",a(G)],["pub","public","b",a(J)],["sec","secret","s",a(he)],["ct","sent","u",a(Te)],["ct","sent","v",a(Ee)]],re,(r,v)=>{var m=en(()=>an(a(v),4)),b=Cn(),E=i(b),F=i(E,!0);n(E);var Q=e(E,2),we=i(Q);n(Q);var je=e(Q,2);ie(je,1,()=>a(m)[3],re,(xe,de)=>{var ke=Pn(),Ge=i(ke,!0);n(ke),W(()=>A(Ge,a(de))),l(xe,ke)}),n(b),W(()=>{ga(E,1,`tag ${a(m)[0]??""}`,"svelte-1x9pnmt"),A(F,a(m)[1]),A(we,`${a(m)[2]??""} =`)}),l(r,b)}),n(ca);var We=e(ca,2),ha=i(We),Se=i(ha);x(Se,"width",352);var $e=e(Se);x($e,"x2",396);var Ke=e($e);x(Ke,"x2",396);var Pe=e(Ke);x(Pe,"x2",396);var da=e(Pe),qa=e(da),Qe=e(qa),va=e(Qe),pa=e(va),_a=e(pa);ie(_a,1,()=>a(oe),re,(r,v,m)=>{var b=jn(),E=H(b),F=e(E),Q=i(F,!0);n(F),W((we,je,xe,de)=>{x(E,"x",we),x(E,"y",je),x(E,"height",xe),x(E,"fill",(a(I),a(M),c(()=>a(I)[m]===a(M)[m]?"#2af":"#e44"))),x(F,"x",de),x(F,"fill",(a(I),a(M),c(()=>a(I)[m]===a(M)[m]?"#555":"#e44"))),x(F,"font-weight",(a(I),a(M),c(()=>a(I)[m]===a(M)[m]?"normal":"bold"))),A(Q,(a(I),c(()=>a(I)[m])))},[()=>c(()=>na(m)),()=>(a(v),c(()=>Math.min(z(0),z(a(v))))),()=>(a(v),c(()=>Math.abs(z(a(v))-z(0))||1)),()=>c(()=>na(m)+13)]),l(r,b)}),n(ha),h(2),n(We);var Ce=e(We,2);let ua;var Ka=i(Ce),Ta=r=>{var v=Wa();W(()=>A(v,`✓ all 8 bits decoded correctly · largest noise |w| = ${a(Ne)??""} of
            the 24.25 allowed`)),l(r,v)},ma=r=>{var v=Wa();W(()=>A(v,`✗ ${a(be)??""} of 8 bits flipped · largest noise |w| = ${a(Ne)??""} blew
            past the limit of 24.25`)),l(r,v)};y(Ka,r=>{a(be)===0?r(Ta):r(ma,!1)}),n(Ce);var Ea=e(Ce,2),za=r=>{var v=In();l(r,v)};y(Ea,r=>{+a($)==0&&r(za)}),h(2),n(He),W((r,v,m,b,E,F,Q,we,je,xe,de,ke,Ge)=>{A(ra,a($)),x(Se,"y",r),x(Se,"height",v),x($e,"y1",m),x($e,"y2",b),x(Ke,"y1",E),x(Ke,"y2",F),x(Pe,"y1",Q),x(Pe,"y2",we),x(da,"y",je),x(qa,"y",xe),x(Qe,"y",de),x(va,"y",ke),x(pa,"y",Ge),ua=ga(Ce,1,"verdict tc mt10 svelte-1x9pnmt",null,ua,{bad:a(be)>0})},[()=>c(()=>z(ce)),()=>c(()=>z(-24.25)-z(ce)),()=>c(()=>z(0)),()=>c(()=>z(0)),()=>c(()=>z(ce)),()=>c(()=>z(ce)),()=>c(()=>z(-24.25)),()=>c(()=>z(-24.25)),()=>c(()=>z(48)+3),()=>c(()=>z(ce)+3),()=>c(()=>z(0)+3),()=>c(()=>z(-24.25)+3),()=>c(()=>z(-48)+3)]),dt(oa,()=>a($),r=>_($,r)),wa("click",la,()=>_(ze,a(ze)+1)),wa("click",xa,()=>_(Le,a(Le)+1)),l(Sa,He),Ra()}var On=d(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is
                ML-KEM, the lattice scheme this article builds, hybridised with
                the classical elliptic-curve exchange.</p>`),Bn=d(`<p class="svelte-kugc17">Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b> </b>. That is
                classical only, no ML-KEM. A recording of that handshake could
                be unwrapped by a future quantum computer.</p>`),Hn=d(`<p class="svelte-kugc17">The request to the test server did not make it (an ad blocker,
                a strict privacy mode, or being offline will do that), so there
                is nothing to report.</p>`),Dn=d('<div><span class="k svelte-kugc17"> </span> </div>'),Yn=d('<div class="trace my10 py5 px10 rx5 svelte-kugc17"></div>'),Zn=d(`<!> <!> <p class="note svelte-kugc17">via pq.cloudflareresearch.com/cdn-cgi/trace, which echoes back the
            key exchange it negotiated with you. This tests your browser, not
            this site.</p>`,1),Qn=d("<div><!></div>"),Gn=d(`<!> <!> Cast: <ul><li>Alice (wants to receive secrets)</li> <li>Bob (wants to send her one)</li> <li>Eve (reads everything in transit)</li> <li>a large quantum computer (arrival date unknown)</li></ul> <!> <p>Nearly every secret on the internet is guarded by one of two locks: RSA,
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
    Cryptography.</p> <!>`,1);function ui(Sa,$a){Ma($a,!1),Aa();var Te=Gn(),Ee=H(Te);rn(Ee,{title:"Ring Learning with Errors",sub:"Post-Quantum Cryptography",desc:"Quantum-safe encryption from deliberately noisy polynomial arithmetic",date:"10 June 2026"});var oe=e(Ee,2);(function(fa,st){Ma(st,!1);let R=q("checking"),S=q(""),Je=q([]);const Ve={checking:"… checking whether your browser uses post-quantum crypto",pq:"✓ your browser is using post-quantum crypto",classical:"✗ your browser is not using post-quantum crypto",unknown:"could not check post-quantum support"},Ie=["kex","tls","http","h","ip","colo","loc","uag"];on(async()=>{try{const ve=await fetch("https://pq.cloudflareresearch.com/cdn-cgi/trace"),Fe=await ve.text();_(Je,(Fe.match(/[ -~]+/g)||[]).map(X=>{const qe=X.indexOf("=");return[X.slice(0,qe),X.slice(qe+1)]}).filter(X=>Ie.includes(X[0])));const pe=Fe.match(/kex=([A-Za-z0-9_-]+)/);_(S,pe?pe[1]:""),a(S)?a(S).includes("MLKEM")||a(S).includes("Kyber")?_(R,"pq"):_(R,"classical"):_(R,"unknown")}catch{_(R,"unknown")}}),Aa();var V=Qn(),Xe=i(V);ln(Xe,{get title(){return Ve[a(R)]},children:(ve,Fe)=>{var pe=Zn(),X=H(pe),qe=D=>{var Y=On(),U=e(i(Y)),ee=i(U,!0);n(U),h(),n(Y),W(()=>A(ee,a(S))),l(D,Y)},nt=D=>{var Y=Es(),U=H(Y),ee=Z=>{var ae=Bn(),te=e(i(ae)),Ue=i(te,!0);n(te),h(),n(ae),W(()=>A(Ue,a(S))),l(Z,ae)},_e=Z=>{var ae=Es(),te=H(ae),Ue=ea=>{var it=Hn();l(ea,it)};y(te,ea=>{a(R)==="unknown"&&ea(Ue)},!0),l(Z,ae)};y(U,Z=>{a(R)==="classical"?Z(ee):Z(_e,!1)},!0),l(D,Y)};y(X,D=>{a(R)==="pq"?D(qe):D(nt,!1)});var ba=e(X,2),La=D=>{var Y=Yn();ie(Y,5,()=>a(Je),re,(U,ee)=>{var _e=Dn(),Z=i(_e),ae=i(Z,!0);n(Z);var te=e(Z,1,!0);n(_e),W(()=>{A(ae,a(ee)[0]),A(te,a(ee)[1])}),l(U,_e)}),n(Y),l(D,Y)};y(ba,D=>{a(Je).length&&D(La)}),h(2),l(ve,pe)},$$slots:{default:!0}}),n(V),W(()=>ga(V,1,"pqc "+(a(R)==="pq"?"green":"yellow"),"svelte-kugc17")),l(fa,V),Ra()})(oe,{});var I=e(oe,4);{let fa=tn(()=>[j("q","The size of the clock: a prime modulus, all arithmetic keeps only remainders, e.g. $20 \\bmod 7 = 6$. Toy values 17 and 97 here; ML-KEM uses 3329"),j("n","Ring dimension, a power of two: every polynomial is a tray of $n$ coefficients. Toy values 4 and 8 here; ML-KEM uses 256"),j("x","Formal placeholder, never given a value; its powers only label coefficient slots"),j("s","Alice's secret, a polynomial with small coefficients; the thing Eve wants"),j("a","Public polynomial, every coefficient drawn uniformly at random"),j("b","Public noisy product b = a·s + e, the other half of Alice's public key"),j("e","Error polynomial: small, fresh, deliberate. The lie that makes the problem hard"),j("pk","Alice's public key, the pair $(a, b)$; published to everyone, Eve included"),j("sk","Alice's secret key, just $s$; never leaves her machine"),j("r","Bob's own small randomness, drawn fresh for every encryption"),j("m","The message, a polynomial with coefficients 0 or 1 (one bit per slot)"),j("u","First half of the ciphertext, u = a·r + e₁"),j("v","Second half of the ciphertext, v = b·r + e₂ + ⌊q/2⌋·m"),j("w","Decryption residue w = e·r − e₁·s + e₂; rounding succeeds while every |wᵢ| < q/4"),j("η","Noise bound: 'small' always means coefficients in [−η, η]")]);nn(I,{get list(){return a(fa)}})}var be=e(I,8),Ne=e(i(be));t(Ne,()=>s`q`);var le=e(Ne,2);t(le,()=>s`q`);var ce=e(le,2);t(ce,()=>s`q`);var $=e(ce,2);t($,()=>s`15 + 5 = 20`);var M=e($,2);t(M,()=>s`15 + 5 \\equiv 3`);var ze=e(M,2);t(ze,()=>s`9 \\times 9 = 81 = 4 \\times 17 +
    13`);var Le=e(ze,2);t(Le,()=>s`9 \\times 9 \\equiv 13`);var ye=e(Le,2);t(ye,()=>s`16
    \\equiv -1`),h(),n(be);var Oe=e(be,2),aa=e(i(Oe));t(aa,()=>s`q`);var Me=e(aa,2);t(Me,()=>s`(s_1,
    s_2) = (3, 7)`),h(),n(Oe);var Re=e(Oe,2);t(Re,()=>B`
\\begin{aligned}
2 s_1 + 5 s_2 &\\equiv 7 \\pmod{17}\\\\
4 s_1 + s_2 &\\equiv 2 \\pmod{17}
\\end{aligned}
`);var Ae=e(Re,4);t(Ae,()=>B`
\\begin{aligned}
2 \\times \\text{first} - \\text{second}: \\qquad 9 s_2 &\\equiv 14 - 2 \\equiv 12
&&\\Rightarrow\\ s_2 \\equiv 7\\\\
\\text{put } s_2 \\text{ into second}: \\qquad 4 s_1 &\\equiv 2 - 7 \\equiv 12
&&\\Rightarrow\\ s_1 \\equiv 3
\\end{aligned}
`);var G=e(Ae,2),he=e(i(G));t(he,()=>s`9 \\times 7 = 63 \\equiv 12`);var ta=e(he,2);t(ta,()=>s`4
    \\times 3 = 12`),h(),n(G);var J=e(G,2),ge=e(i(J));t(ge,()=>s`+1`);var sa=e(ge,2);t(sa,()=>s`-1`),h(),n(J);var Be=e(J,2);t(Be,()=>B`
\\begin{aligned}
2 s_1 + 5 s_2 &\\approx 8 \\pmod{17}\\\\
4 s_1 + s_2 &\\approx 1 \\pmod{17}
\\end{aligned}
`);var z=e(Be,2),na=e(i(z));t(na,()=>s`(s_1, s_2) = (14, 13)`);var He=e(na,2);t(He,()=>s`(3, 7)`);var De=e(He,2);t(De,()=>s`9 \\mod 17`);var Ye=e(De,2);t(Ye,()=>s`\\pm 1`);var ia=e(Ye,2);t(ia,()=>s`\\pm 9`),h(),n(z);var ra=e(z,4),oa=e(i(ra),3);t(oa,()=>s`b_i \\approx \\vec{a}_i \\cdot \\vec{s}`);var la=e(oa,2);t(la,()=>s`\\vec{s}`);var xa=e(la,2);t(xa,()=>s`\\vec{s}`);var Ze=e(xa,2);t(Ze,()=>s`\\vec{a}_i`);var ka=e(Ze,2);t(ka,()=>s`\\vec{a}_i \\cdot \\vec{s}`);var ca=e(ka,2);t(ca,()=>s`2 s_1 + 5 s_2`),h(3),n(ra);var We=e(ra,4),ha=e(i(We));t(ha,()=>s`n`);var Se=e(ha,2);t(Se,()=>s`n`);var $e=e(Se,2);t($e,()=>s`n`);var Ke=e($e,2);t(Ke,()=>s`n`);var Pe=e(Ke,2);t(Pe,()=>s`n^2`);var da=e(Pe,2);t(da,()=>s`n`);var qa=e(da,2);t(qa,()=>s`n`),h(),n(We);var Qe=e(We,2),va=e(i(Qe));t(va,()=>s`n`);var pa=e(va,2);t(pa,()=>s`q`);var _a=e(pa,2);t(_a,()=>s`n`);var Ce=e(_a,2);t(Ce,()=>s`x`);var ua=e(Ce,2);t(ua,()=>s`q`);var Ka=e(ua,2);t(Ka,()=>s`x^n`),h(),n(Qe);var Ta=e(Qe,2);t(Ta,()=>B`x^n \\equiv -1`);var ma=e(Ta,2),Ea=e(i(ma));t(Ea,()=>s`x^n + 1`);var za=e(Ea,2);t(za,()=>s`x^{n+2}`);var r=e(za,2);t(r,()=>s`-x^2`);var v=e(r,2);t(v,()=>s`n = 4`);var m=e(v,2);t(m,()=>s`q
    = 17`);var b=e(m,2);t(b,()=>s`1 + 2x + 3x^2 + 4x^3`);var E=e(b,2);t(E,()=>s`2 + x`),h(),n(ma);var F=e(ma,2);t(F,()=>B`
\\begin{aligned}
(1 + 2x + 3x^2 + 4x^3)(2 + x) &= 2 + 5x + 8x^2 + 11x^3 + 4x^4\\\\
&\\equiv -2 + 5x + 8x^2 + 11x^3\\\\
&\\equiv 15 + 5x + 8x^2 + 11x^3 \\pmod{17}
\\end{aligned}
`);var Q=e(F,2),we=e(i(Q));t(we,()=>s`4x^4 \\equiv -4`);var je=e(we,2);t(je,()=>s`x^3`),h(),n(Q);var xe=e(Q,4);(function(fa,st){Ma(st,!1);let R=q([1,2,3,4]),S=q([2,1,0,0]);const Je=f=>(f%17+17)%17,Ve=f=>{const o=Math.trunc(Number(f));return Number.isFinite(o)?Je(o):0};let Ie=q([]),V=q([]),Xe=q([]);const ve=f=>f.map((o,p)=>({v:o,i:p})).filter(o=>o.v!==0);fe(()=>(a(R),a(S)),()=>{const f=a(R).map(Ve),o=a(S).map(Ve),p=new Array(7).fill(0);for(let g=0;g<4;g++)for(let T=0;T<4;T++)p[g+T]+=f[g]*o[T];_(Ie,p),_(Xe,p.slice(0,4).map((g,T)=>({lo:g,hi:p[T+4]||0,i:T})).filter(g=>g.lo!==0||g.hi!==0)),_(V,p.slice(0,4).map((g,T)=>Je(g-(p[T+4]||0))))}),zs(),Aa();var Fe=$n(),pe=i(Fe),X=e(i(pe),4);ie(X,1,()=>a(R),re,(f,o,p)=>{var g=pn(),T=H(g),ue=u=>{var w=hn();l(u,w)};y(T,u=>{p>0&&u(ue)});var K=e(T,2),L=i(K);ht(L),x(L,"max",16);var se=e(L,2),ne=u=>{var w=vn(),O=e(i(w)),me=P=>{var C=dn();C.textContent=p,l(P,C)};y(O,P=>{p>1&&P(me)}),n(w),l(u,w)};y(se,u=>{p>0&&u(ne)}),n(K),dt(L,()=>a(R)[p],u=>ya(R,a(R)[p]=u)),wa("change",L,()=>ya(R,a(R)[p]=Ve(a(R)[p]))),l(f,g)}),n(pe);var qe=e(pe,2),nt=e(i(qe),4);ie(nt,1,()=>a(S),re,(f,o,p)=>{var g=bn(),T=H(g),ue=u=>{var w=un();l(u,w)};y(T,u=>{p>0&&u(ue)});var K=e(T,2),L=i(K);ht(L),x(L,"max",16);var se=e(L,2),ne=u=>{var w=fn(),O=e(i(w)),me=P=>{var C=mn();C.textContent=p,l(P,C)};y(O,P=>{p>1&&P(me)}),n(w),l(u,w)};y(se,u=>{p>0&&u(ne)}),n(K),dt(L,()=>a(S)[p],u=>ya(S,a(S)[p]=u)),wa("change",L,()=>ya(S,a(S)[p]=Ve(a(S)[p]))),l(f,g)}),n(qe);var ba=e(qe,2),La=e(i(ba),4),D=f=>{var o=yn();l(f,o)};y(La,f=>{a(Ie),c(()=>ve(a(Ie)).length===0)&&f(D)});var Y=e(La,2);ie(Y,1,()=>(a(Ie),c(()=>ve(a(Ie)))),re,(f,o,p)=>{var g=kn(),T=H(g),ue=w=>{var O=gn();l(w,O)};y(T,w=>{p>0&&w(ue)});var K=e(T,2);let L;var se=i(K,!0),ne=e(se),u=w=>{var O=xn(),me=e(H(O)),P=C=>{var k=wn(),N=i(k,!0);n(k),W(()=>A(N,(a(o),c(()=>a(o).i)))),l(C,k)};y(me,C=>{a(o),c(()=>a(o).i>1)&&C(P)}),l(w,O)};y(ne,w=>{a(o),c(()=>a(o).i>0)&&w(u)}),n(K),W(()=>{L=ga(K,1,"term svelte-11fkcz8",null,L,{wrap:a(o).i>=4}),A(se,(a(o),c(()=>a(o).v)))}),l(f,g)}),n(ba);var U=e(ba,2),ee=i(U);e(i(ee)).textContent="4",h(),n(ee);var _e=e(ee,4),Z=f=>{var o=qn();l(f,o)};y(_e,f=>{a(Xe),c(()=>a(Xe).length===0)&&f(Z)});var ae=e(_e,2);ie(ae,1,()=>a(Xe),re,(f,o,p)=>{var g=Ln(),T=H(g),ue=k=>{var N=_n();l(k,N)};y(T,k=>{p>0&&k(ue)});var K=e(T,2),L=i(K),se=k=>{var N=Wa("(");l(k,N)};y(L,k=>{a(o),c(()=>a(o).hi&&a(o).i>0)&&k(se)});var ne=e(L,1,!0),u=e(ne),w=k=>{var N=Tn(),ot=i(N);n(N),W(()=>A(ot,`−${a(o),c(()=>a(o).hi)??""}`)),l(k,N)};y(u,k=>{a(o),c(()=>a(o).hi)&&k(w)});var O=e(u),me=k=>{var N=Wa(")");l(k,N)};y(O,k=>{a(o),c(()=>a(o).hi&&a(o).i>0)&&k(me)});var P=e(O),C=k=>{var N=zn(),ot=e(H(N)),Xs=lt=>{var ct=En(),Us=i(ct,!0);n(ct),W(()=>A(Us,(a(o),c(()=>a(o).i)))),l(lt,ct)};y(ot,lt=>{a(o),c(()=>a(o).i>1)&&lt(Xs)}),l(k,N)};y(P,k=>{a(o),c(()=>a(o).i>0)&&k(C)}),n(K),W(()=>A(ne,(a(o),c(()=>a(o).lo)))),l(f,g)}),n(U);var te=e(U,2),Ue=i(te);Ue.textContent="mod 17";var ea=e(Ue,4),it=f=>{var o=Mn();l(f,o)};y(ea,f=>{a(V),c(()=>ve(a(V)).length===0)&&f(it)});var Vs=e(ea,2);ie(Vs,1,()=>(a(V),c(()=>ve(a(V)))),re,(f,o,p)=>{var g=Sn(),T=H(g),ue=u=>{var w=Rn();l(u,w)};y(T,u=>{p>0&&u(ue)});var K=e(T,2),L=i(K,!0),se=e(L),ne=u=>{var w=Wn(),O=e(H(w)),me=P=>{var C=An(),k=i(C,!0);n(C),W(()=>A(k,(a(o),c(()=>a(o).i)))),l(P,C)};y(O,P=>{a(o),c(()=>a(o).i>1)&&P(me)}),l(u,w)};y(se,u=>{a(o),c(()=>a(o).i>0)&&u(ne)}),n(K),W(()=>A(L,(a(o),c(()=>a(o).v)))),l(f,g)}),n(te);var Ts=e(te,2),rt=e(i(Ts));e(i(rt)).textContent="17",n(rt),e(rt).nodeValue=` with n = 4: long
        multiplication, the tinted overflow terms fold back with a sign flip,
        coefficients wrap mod 17`,n(Ts),n(Fe),l(fa,Fe),Ra()})(xe,{});var de=e(xe,2),ke=e(i(de));t(ke,()=>s`R_q = \\mathbb{Z}_q[x]/(x^n + 1)`);var Ge=e(ke,2);t(Ge,()=>s`n`);var Ls=e(Ge,2);t(Ls,()=>s`q`),h(5),n(de);var Pa=e(de,2),vt=e(i(Pa));t(vt,()=>s`\\mathbb{Z}_q`);var pt=e(vt,2);t(pt,()=>s`\\mathbb{Z}_q[x]`);var ut=e(pt,2);t(ut,()=>s`x`);var mt=e(ut,2);t(mt,()=>s`(x^n + 1)`);var ft=e(mt,2);t(ft,()=>s`x^n + 1`);var Ms=e(ft,2);t(Ms,()=>s`x^n \\equiv -1`),h(),n(Pa);var Ca=e(Pa,2),bt=e(i(Ca));t(bt,()=>s`n`);var yt=e(bt,2);t(yt,()=>s`n`);var gt=e(yt,2);t(gt,()=>s`n^2`);var wt=e(gt,2);t(wt,()=>s`\\mathcal{O}(n \\log n)`);var Rs=e(wt,2);t(Rs,()=>s`\\mathcal{O}(n^2)`),h(),n(Ca);var ja=e(Ca,4),xt=e(i(ja));t(xt,()=>s`s`);var kt=e(xt,4);t(kt,()=>s`\\{-1, 0,
    1\\}`);var qt=e(kt,2);t(qt,()=>s`a`);var _t=e(qt,2);t(_t,()=>s`n`);var Tt=e(_t,2);t(Tt,()=>s`0`);var Et=e(Tt,2);t(Et,()=>s`q-1`);var As=e(Et,2);t(As,()=>s`e`),h(),n(ja);var zt=e(ja,2);t(zt,()=>B`(a,\\ b = a \\cdot s + e)`);var Ia=e(zt,2),Lt=e(i(Ia));t(Lt,()=>s`n = 4`);var Ws=e(Lt,2);t(Ws,()=>s`q = 17`),h(),n(Ia);var Mt=e(Ia,2);t(Mt,()=>B`
\\begin{alignedat}{2}
s &= 1 + x - x^3 \\qquad && \\text{secret, small}\\\\
a &= 6 + 14x + 3x^2 + 9x^3\\quad && \\text{public, uniform}\\\\
a \\cdot s &\\equiv 11 + 6x + 9x^2 + 6x^3\\quad && \\text{fold, then mod 17}\\\\
e &= 1 - x + x^3 && \\text{small lies}\\\\
b &\\equiv 12 + 5x + 9x^2 + 7x^3 && \\text{published}
\\end{alignedat}
`);var Fa=e(Mt,2),Rt=e(i(Fa));t(Rt,()=>s`(a, b)`);var At=e(Rt,2);t(At,()=>s`s`);var Ss=e(At,2);t(Ss,()=>s`b`),h(),n(Fa);var Na=e(Fa,2),Wt=e(i(Na));t(Wt,()=>s`b = a \\cdot s`);var St=e(Wt,2);t(St,()=>s`s = b \\cdot a^{-1}`);var $s=e(St,2);t($s,()=>s`a`),h(),n(Na);var Oa=e(Na,6),$t=e(i(Oa));t($t,()=>s`[-\\eta,
    \\eta]`);var Ks=e($t,2);t(Ks,()=>s`\\eta`),h(),n(Oa);var Ba=e(Oa,2),Kt=e(i(Ba),2);t(Kt,()=>s`a`);var Pt=e(Kt,2);t(Pt,()=>s`s`);var Ct=e(Pt,2);t(Ct,()=>s`e`);var Ps=e(Ct,2);t(Ps,()=>s`s`),h(),n(Ba);var jt=e(Ba,2);t(jt,()=>B`
\\mathrm{pk} = (a,\\ b = a \\cdot s + e), \\qquad \\mathrm{sk} = s
`);var It=e(jt,4);t(It,()=>B`
\\begin{aligned}
\\mathrm{pk} &= (6 + 14x + 3x^2 + 9x^3,\\ \\ 12 + 5x + 9x^2 + 7x^3)\\\\
\\mathrm{sk} &= 1 + x - x^3
\\end{aligned}
`);var Ha=e(It,2),Ft=e(i(Ha),2);t(Ft,()=>s`n`);var Nt=e(Ft,2);t(Nt,()=>s`m`);var Ot=e(Nt,2);t(Ot,()=>s`\\lfloor
    q/2 \\rfloor`);var Bt=e(Ot,2);t(Bt,()=>s`r`);var Ht=e(Bt,2);t(Ht,()=>s`e_1`);var Cs=e(Ht,2);t(Cs,()=>s`e_2`),h(),n(Ha);var Dt=e(Ha,2);t(Dt,()=>B`
\\begin{aligned}
u &= a \\cdot r + e_1\\\\
v &= b \\cdot r + e_2 + \\lfloor q/2 \\rfloor \\cdot m
\\end{aligned}
`);var Da=e(Dt,2),Yt=e(i(Da));t(Yt,()=>s`(1, 0, 1, 1)`);var Zt=e(Yt,2);t(Zt,()=>s`m = 1 + x^2 + x^3`);var Qt=e(Zt,2);t(Qt,()=>s`\\lfloor 17/2 \\rfloor = 8`);var Gt=e(Qt,2);t(Gt,()=>s`8 + 8x^2 + 8x^3`);var Jt=e(Gt,2);t(Jt,()=>s`r = 1 - x^2 + x^3`);var Vt=e(Jt,2);t(Vt,()=>s`e_1 = x + x^2 - x^3`);var js=e(Vt,2);t(js,()=>s`e_2 = -1 + x`),h(),n(Da);var Xt=e(Da,2);t(Xt,()=>B`
\\begin{aligned}
u &= a \\cdot r + e_1 = (12 + 3x + 5x^2 + x^3) + (x + x^2 - x^3)\\\\
&\\equiv 12 + 4x + 6x^2\\\\[4pt]
v &= b \\cdot r + e_2 + 8m\\\\
&= (16 + 3x + 7x^2 + 14x^3) + (-1 + x) + (8 + 8x^2 + 8x^3)\\\\
&\\equiv 6 + 4x + 15x^2 + 5x^3
\\end{aligned}
`);var Ya=e(Xt,2),Ut=e(i(Ya));t(Ut,()=>s`u`);var Is=e(Ut,2);t(Is,()=>s`v`),h(),n(Ya);var Za=e(Ya,2),Fs=e(i(Za),2);t(Fs,()=>s`v - u \\cdot s`),h(),n(Za);var es=e(Za,2);t(es,()=>B`
\\begin{aligned}
v - u \\cdot s &= (a s + e) r + e_2 + \\lfloor q/2 \\rfloor m - (a r + e_1) s\\\\
&= \\lfloor q/2 \\rfloor \\, m + \\underbrace{e \\cdot r - e_1 \\cdot s + e_2}_{w,\\ \\text{small}}
\\end{aligned}
`);var Qa=e(es,2),as=e(i(Qa));t(as,()=>s`a \\cdot r \\cdot s`);var ts=e(as,2);t(ts,()=>s`w`);var ss=e(ts,2);t(ss,()=>s`m_i \\lfloor q/2
    \\rfloor + w_i`);var ns=e(ss,2);t(ns,()=>s`q/2`);var Ns=e(ns,2);t(Ns,()=>s`|w_i| < q/4`),h(),n(Qa);var Ga=e(Qa,2),Os=e(i(Ga));t(Os,()=>s`u \\cdot s \\equiv 16 + 5x + 10x^2 +
    11x^3`),h(),n(Ga);var is=e(Ga,2);t(is,()=>B`
\\begin{aligned}
v - u \\cdot s &\\equiv 7 + 16x + 5x^2 + 11x^3\\\\
&= 7 - x + 5x^2 - 6x^3 \\qquad \\text{(centered mod 17)}\\\\
&= \\underbrace{8 + 8x^2 + 8x^3}_{8m} + \\underbrace{(-1 - x - 3x^2 + 3x^3)}_{w}
\\end{aligned}
`);var Ja=e(is,2),rs=e(i(Ja));t(rs,()=>s`w`);var os=e(rs,2);t(os,()=>s`q/4 \\approx
    4.25`);var ls=e(os,2);t(ls,()=>s`-6`);var cs=e(ls,2);t(cs,()=>s`-1`);var Bs=e(cs,2);t(Bs,()=>s`(1, 0, 1, 1)`),h(),n(Ja);var Va=e(Ja,2),hs=e(i(Va));t(hs,()=>s`e
    \\cdot r`);var ds=e(hs,2);t(ds,()=>s`n`);var vs=e(ds,2);t(vs,()=>s`\\eta`);var ps=e(vs,2);t(ps,()=>s`n \\eta^2`);var us=e(ps,2);t(us,()=>s`\\eta`);var Hs=e(us,2);t(Hs,()=>s`2^{160}`),h(),n(Va);var Xa=e(Va,4),ms=e(i(Xa));t(ms,()=>s`n = 8`);var fs=e(ms,2);t(fs,()=>s`q = 97`);var bs=e(fs,2);t(bs,()=>s`\\lfloor q/2 \\rfloor = 48`);var ys=e(bs,2);t(ys,()=>s`q/4
    \\approx 24`);var Ds=e(ys,2);t(Ds,()=>s`v - u \\cdot s`),h(),n(Xa);var gs=e(Xa,2);Nn(gs,{});var Ua=e(gs,4),et=i(Ua),ws=e(i(et));t(ws,()=>s`\\eta = 0`);var Ys=e(ws,2);t(Ys,()=>s`b = a \\cdot s`),h(),n(et);var at=e(et,2),Zs=e(i(at));t(Zs,()=>s`\\eta = 1`),h(),n(at);var xs=e(at,2),Qs=e(i(xs));t(Qs,()=>s`\\eta`),h(),n(xs),n(Ua);var tt=e(Ua,6),ks=e(i(tt));t(ks,()=>s`n = 256`);var qs=e(ks,2);t(qs,()=>s`q = 3329`);var _s=e(qs,2);t(_s,()=>s`\\eta
    = 2`);var Gs=e(_s,4);t(Gs,()=>s`2^{-164}`),h(),n(tt);var Js=e(tt,2);cn(Js,{list:[["On Ideal Lattices and Learning with Errors Over Rings (LPR, 2010)","https://eprint.iacr.org/2012/230"],["The Learning with Errors Problem (Regev's survey)","https://cims.nyu.edu/~regev/papers/lwesurvey.pdf"],["Worst-case to average-case reduction for LWE (MIT lecture notes)","https://people.csail.mit.edu/vinodv/CS294/lecture4.pdf"],["FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism","https://csrc.nist.gov/pubs/fips/203/final"],["Ring learning with errors (Wikipedia)","https://en.wikipedia.org/wiki/Ring_learning_with_errors"]]}),l(Sa,Te),Ra()}export{ui as component};
