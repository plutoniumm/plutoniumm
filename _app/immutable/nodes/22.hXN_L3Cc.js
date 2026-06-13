import{D as R,I as H,J as V,Y as e,at as L,et as E,it as K,k as Y,n as U,ot as X,q as Z,rt as ee,v as a}from"../chunks/Rl5PQ8XL.js";import"../chunks/D3BS_AkK.js";import{a as i,d as ae,i as t,n as te,o as ie,t as s,u as ne}from"../chunks/BXB8e5cd.js";var re=Y(`The way the Taylor's series is defined in its discrete form is as follows: <!> We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes: <!>`,1),oe=Y(`<!> <!> We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative <!> First and foremost, we define <!> as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of <!> which, in general, is <!> What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then, <!>. We
can now apply this twice to get the 1st derivative: <!> So one can then see that <!>. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation. <h3>Derivatives of <!></h3> We know the basic ones like <!> and <!>. From the pattern, we would expect that <!>, which would imply <!>.
It is trivial to see, if we apply <!> twice, we get <!> back. So then what happens if we feed in <!> <!> So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient. We can now even try to find <!> which would be <!> or <!>. Now that we took the imaginary derivative of
a complex function, we got a real coefficient. In general, we can safely say
that non-integer derivatives may give us a real or complex result. Now if we
want the derivative of say <!>, we can represent <!> and then proceed from there. One can verify that <!>.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is <!>? <h3></h3> Simple application of the definition gives us <!> Here <!>, and <!>.
Giving us <!> Absolute insanity. <!> <!>`,1);function le(M,Q){K(Q,!1),U();var d=oe(),f=V(d);ie(f,{title:"Fractional, complex, and complex fractional derivatives",sub:"Recreational Math #003",desc:"Non-integer and other continuous derivatives.",date:"29 June 2025"});var c=e(f,2);{let o=E(()=>[s("D","Derivative operator"),s("k","Variable positive integer"),s("α","Variable real")]);te(c,{generics:{N:["n"],R:["x","y","z"],fXX:["f"]},get list(){return H(o)}})}var l=e(c,2);a(l,()=>i`
\\begin{gathered}
\\frac{d^2}{dx^2} f(x) = \\frac{d}{dx} \\left( \\frac{d}{dx} f(x) \\right) \\\\
\\frac{d}{dx} f(x) = \\frac{d^{0.5}}{dx^{0.5}} \\left( \\frac{d^{0.5}}{dx^{0.5}} f(x) \\right)
\\end{gathered}
`);var v=e(l,2);a(v,()=>t`D^k = \\frac{d^k}{dx^k}`);var h=e(v,2);a(h,()=>t`x^n`);var m=e(h,2);a(m,()=>i`
    \\frac{d^k}{dx^k} x^n = D^k x^n  =\\frac{n!}{(n-k)!} x^{n-k} = \\frac{\\Gamma(n+1)}{\\Gamma(n-k+1)} x^{n-k}
`);var x=e(m,2);a(x,()=>i`D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} x^{n-\\frac12}`);var p=e(x,2);a(p,()=>i`D^{0.5} D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} \\cdot \\frac{\\Gamma(n-\\frac12+1)}{\\Gamma(n-1+1)} x^{n-1} = \\frac{\\Gamma(n+1)}{\\Gamma(n-1+1)} x^{n-1} = n x^{n-1} = D x^n.`);var u=e(p,2);a(u,()=>t`D^{0.5} x = \\frac{2}{\\sqrt{\\pi}} \\sqrt{x}`);var n=e(u,2),j=e(Z(n));a(j,()=>t`e^{kx}`),X(n);var w=e(n,2);a(w,()=>t`D e^{kx} = k e^{kx}`);var g=e(w,2);a(g,()=>t`D^2 e^{kx} = k^2 e^{kx}`);var _=e(g,2);a(_,()=>t`D^{\\alpha} e^{kx} = k^{\\alpha} e^{kx}`);var k=e(_,2);a(k,()=>t`D^{0.5} e^{kx} = \\sqrt{k} e^{kx}`);var y=e(k,2);a(y,()=>t`D^{0.5}`);var D=e(y,2);a(D,()=>t`D e^{kx}`);var b=e(D,2);a(b,()=>t`k=2, \\alpha=i`);var G=e(b,2);a(G,()=>i`
\\begin{align*}
    D^{i} e^{2x} &= 2^i e^{2x}
    &= e^{i \\ln2} e^{2x}
    &= (\\cos(\\ln2) + i \\sin(\\ln2)) e^{2x}
\\end{align*}
`);var W=e(G,2);a(W,()=>t`D^i e^{ix}`);var q=e(W,2);a(q,()=>t`i^i e^{ix}`);var S=e(q,2);a(S,()=>t`e^{-\\frac{\\pi}{2}} e^{ix}`);var F=e(S,2);a(F,()=>t`\\cos x`);var I=e(F,2);a(I,()=>t`\\cos x = \\frac{e^{ix} + e^{-ix}}{2}`);var T=e(I,2);a(T,()=>t`D^{\\alpha} \\cos x = \\cos(x + \\frac{\\pi}2 \\alpha)`);var $=e(T,2);a($,()=>t`D^i x`);var r=e($,2);a(r,()=>t`D^i x`,!0),X(r);var N=e(r,2);a(N,()=>t`D^i x = \\frac{1}{\\Gamma(2-i)} x^{1 - i}`);var z=e(N,2);a(z,()=>t`\\frac{1}{\\Gamma(2-i)} = \\frac{(i-1)\\sinh(\\pi)}{2\\pi}\\Gamma(i)`);var A=e(z,2);a(A,()=>t`x^{1 - i} = x \\cos (\\ln x) - i x \\sin(\\ln x)`);var B=e(A,2);a(B,()=>i`
    D^i x = \\frac{(i-1)\\sinh(\\pi)}{2\\pi} \\Gamma(i) \\left( x \\cos (\\ln x) - i x \\sin(\\ln x) \\right)
`);var J=e(B,2);ae(J,{title:"Continuous Taylor's Series",children:(o,se)=>{L();var O=re(),P=e(V(O));a(P,()=>i`
        f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n
    `);var C=e(P,2);a(C,()=>i`
        f(x) = \\int_0^{\\infty} \\frac{D^t f(a)}{\\Gamma(t+1)} (x-a)^t dt
    `),R(o,O)},$$slots:{default:!0}}),ne(e(J,2),{list:[["Fractional Derivatives (playlist)","https://www.youtube.com/playlist?list=PLJb1qAQIrmmB_ma3YrfuOXTPOQawokYV_"],["Gamma Function","https://en.m.wikipedia.org/wiki/Gamma_function"]]}),R(M,d),ee()}export{le as component};
