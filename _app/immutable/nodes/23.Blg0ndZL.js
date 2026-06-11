import"../chunks/DsnmJJEf.js";import"../chunks/sDYslN56.js";import{p as K,f as J,a as U,g as Z,s as a,d as aa,c as M,r as P,n as ea}from"../chunks/CZzIV55D.js";import{a as Q,f as Y}from"../chunks/UcDFViGA.js";import{h as e}from"../chunks/D-VbVIMD.js";import{i as ia}from"../chunks/Cip6YPdY.js";import{D as ta,d as s}from"../chunks/CpJ4BgJm.js";import{M as na,_ as t,a as i}from"../chunks/BtH6GhOB.js";import{A as ra}from"../chunks/Cw6tFTSG.js";import{R as oa}from"../chunks/BkkycDmh.js";var sa=Y(`The way the Taylor's series is defined in its discrete form is as follows: <!> We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes: <!>`,1),fa=Y(`<!> <!> We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative <!> First and foremost, we define <!> as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of <!> which, in general, is <!> What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then, <!>. We can
now apply this twice to get the 1st derivative: <!> So one can then see that <!>. This
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
are forced to ask. What is <!>? <h3><!></h3> Simple application of the definition gives us <!> Here <!>, and <!>.
Giving us <!> Absolute insanity. <!> <!>`,1);function ka($,j){K(j,!1),ia();var f=fa(),c=J(f);na(c,{title:"Fractional, complex, and complex fractional derivatives",sub:"Recreational Math #003",desc:"Non-integer and other continuous derivatives.",date:"29 June 2025"});var m=a(c,2);{let o=aa(()=>[s("D","Derivative operator"),s("k","Variable positive integer"),s("α","Variable real")]);ta(m,{generics:{N:["n"],R:["x","y","z"],fXX:["f"]},get list(){return Z(o)}})}var v=a(m,2);e(v,()=>t`
\\begin{gathered}
\\frac{d^2}{dx^2} f(x) = \\frac{d}{dx} \\left( \\frac{d}{dx} f(x) \\right) \\\\
\\frac{d}{dx} f(x) = \\frac{d^{0.5}}{dx^{0.5}} \\left( \\frac{d^{0.5}}{dx^{0.5}} f(x) \\right)
\\end{gathered}
`);var l=a(v,2);e(l,()=>i`D^k = \\frac{d^k}{dx^k}`);var h=a(l,2);e(h,()=>i`x^n`);var d=a(h,2);e(d,()=>t`
    \\frac{d^k}{dx^k} x^n = D^k x^n  =\\frac{n!}{(n-k)!} x^{n-k} = \\frac{\\Gamma(n+1)}{\\Gamma(n-k+1)} x^{n-k}
`);var x=a(d,2);e(x,()=>t`D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} x^{n-\\frac12}`);var p=a(x,2);e(p,()=>t`D^{0.5} D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} \\cdot \\frac{\\Gamma(n-\\frac12+1)}{\\Gamma(n-1+1)} x^{n-1} = \\frac{\\Gamma(n+1)}{\\Gamma(n-1+1)} x^{n-1} = n x^{n-1} = D x^n.`);var u=a(p,2);e(u,()=>i`D^{0.5} x = \\frac{2}{\\sqrt{\\pi}} \\sqrt{x}`);var n=a(u,2),C=a(M(n));e(C,()=>i`e^{kx}`),P(n);var w=a(n,2);e(w,()=>i`D e^{kx} = k e^{kx}`);var g=a(w,2);e(g,()=>i`D^2 e^{kx} = k^2 e^{kx}`);var k=a(g,2);e(k,()=>i`D^{\\alpha} e^{kx} = k^{\\alpha} e^{kx}`);var y=a(k,2);e(y,()=>i`D^{0.5} e^{kx} = \\sqrt{k} e^{kx}`);var D=a(y,2);e(D,()=>i`D^{0.5}`);var b=a(D,2);e(b,()=>i`D e^{kx}`);var G=a(b,2);e(G,()=>i`k=2, \\alpha=i`);var W=a(G,2);e(W,()=>t`
\\begin{align*}
    D^{i} e^{2x} &= 2^i e^{2x}
    &= e^{i \\ln2} e^{2x}
    &= (\\cos(\\ln2) + i \\sin(\\ln2)) e^{2x}
\\end{align*}
`);var S=a(W,2);e(S,()=>i`D^i e^{ix}`);var _=a(S,2);e(_,()=>i`i^i e^{ix}`);var q=a(_,2);e(q,()=>i`e^{-\\frac{\\pi}{2}} e^{ix}`);var F=a(q,2);e(F,()=>i`\\cos x`);var T=a(F,2);e(T,()=>i`\\cos x = \\frac{e^{ix} + e^{-ix}}{2}`);var I=a(T,2);e(I,()=>i`D^{\\alpha} \\cos x = \\cos(x + \\frac{\\pi}2 \\alpha)`);var N=a(I,2);e(N,()=>i`D^i x`);var r=a(N,2),H=M(r);e(H,()=>i`D^i x`),P(r);var z=a(r,2);e(z,()=>i`D^i x = \\frac{1}{\\Gamma(2-i)} x^{1 - i}`);var A=a(z,2);e(A,()=>i`\\frac{1}{\\Gamma(2-i)} = \\frac{(i-1)\\sinh(\\pi)}{2\\pi}\\Gamma(i)`);var B=a(A,2);e(B,()=>i`x^{1 - i} = x \\cos (\\ln x) - i x \\sin(\\ln x)`);var O=a(B,2);e(O,()=>t`
    D^i x = \\frac{(i-1)\\sinh(\\pi)}{2\\pi} \\Gamma(i) \\left( x \\cos (\\ln x) - i x \\sin(\\ln x) \\right)
`);var R=a(O,2);ra(R,{title:"Continuous Taylor's Series",children:(o,ca)=>{ea();var V=sa(),X=a(J(V));e(X,()=>t`
        f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n
    `);var E=a(X,2);e(E,()=>t`
        f(x) = \\int_0^{\\infty} \\frac{D^t f(a)}{\\Gamma(t+1)} (x-a)^t dt
    `),Q(o,V)},$$slots:{default:!0}});var L=a(R,2);oa(L,{list:[["Fractional Derivatives (playlist)","https://www.youtube.com/playlist?list=PLJb1qAQIrmmB_ma3YrfuOXTPOQawokYV_"],["Gamma Function","https://en.m.wikipedia.org/wiki/Gamma_function"]]}),Q($,f),U()}export{ka as component};
