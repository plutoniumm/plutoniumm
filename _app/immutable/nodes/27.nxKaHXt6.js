import{$ as e,A as O,M as Q,Q as S,R as F,ct as G,it as K,lt as P,o as U,w as a}from"../chunks/BvhN-6Rm.js";import"../chunks/DwdwGuwu.js";import"../chunks/DDwXJn8G.js";import{a as t,c as Y,i,n as Z,o as ee,t as n,u as ae}from"../chunks/gs4HCyIA.js";var ie=Q(`<!> <!> We often define the fundamental derivative as: <!> which is a limit of the difference quotient as the increment <!> approaches zero. We try to move a small distance in one direction (<!>)
and see how far it forces us in the other direction (<!>). <!> <!> in <!>, and end up at <!>. We see we also get a
small step <!>, at the corresponding <!>. Taking the same idea
forward, if <!>, we can also define the
derivative, of the derivative, as: <!> We often find this form of the derivative useful, since it allows us to
calculate the second derivative without any first derivative terms. Numerically
also, this lets us calculate the second derivative using only values of <!>. <h4>Imaginary Steps</h4> This however still leaves us with a lot of freedom in how we choose the value
for <!>. We can then also give it an imaginary value, and replace <!> with <!>, and get: <!> which implies, applying the Taylor series expansion, that: <!> or taking just the real part of both sides, we get: <!> We notice now that the derivative after a complex step is much more accurate
since the first error term is now <!>, and not <!>. <h4>Automatic Differentiation</h4> Just as we took a small real step <!>, or a small imaginary step <!>, we
can also take a small <i>'dual'</i> step, using dual numbers, which are
peculiarly defined as, let <!>, but <!>.
We can define a dual number as: <!> This also implies we throw away anything involving <!>,
etc. It acts like an infinitesimal: nonzero, but its square is zero. Let’s take
a small dual step from <!>. We expand via Taylor: <!> But <!>, so: <!> i.e. <!> This is automatic differentiation. <!>`,1);function se(C,H){P(H,!1),U();var r=ie(),o=S(r);ee(o,{title:"Multiple first-principles",sub:"Recreational Math #004",desc:"Different ways to redefine the derivative",date:"13 July 2025"});var s=e(o,2);{let N=K(()=>[n("ℑ","The imaginary part of a complex number, often also written as Im"),n("ℜ","The real part of a complex number, often also written as Re"),n("ε","Dual number, often interpreted as an infinitesimal step. ε² = 0, but ε ≠ 0"),n("h","Variable, often interpreted as a small increment"),n("δ","Variable, often interpreted as a small increment"),n("ϵ","Epsilon, of δ fame."),n("ih","Variable, often interpreted as a small increment. Here, h is treated as real, and i is imaginary so that ih is complex")]);Z(s,{generics:{C:["E","ih"],R:["x","y","a","b"],fXX:["f"]},get list(){return F(N)}})}var l=e(s,2);a(l,()=>t`
    \\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}
`);var f=e(l,2);a(f,()=>i`h`);var d=e(f,2);a(d,()=>i`x`);var h=e(d,2);a(h,()=>i`y`);var v=e(h,2);Y(v,{href:"//en.wikipedia.org/wiki/Limit_of_a_function",src:"//upload.wikimedia.org/wikipedia/commons/d/d5/Epsilon-delta_limit.svg",alt:"Wikipedia: Limit of a function"});var c=e(v);c.nodeValue=" As in the image above, when standing at (x=a,y=b), we take a small step ";var m=e(c);a(m,()=>i`\\delta`);var p=e(m,2);a(p,()=>i`x`);var x=e(p,2);a(x,()=>i`(x=a+\\delta,y=b+\\epsilon)`);var u=e(x,2);a(u,()=>i`\\epsilon`);var _=e(u,2);a(_,()=>i`y=b`);var g=e(_,2);a(g,()=>i`f'(x) = \\frac{f(x + h) - f(x)}{h}`);var w=e(g,2);a(w,()=>t`
\\begin{align*}
    \\frac{d^2f}{dx^2}
    &=\\lim _{h\\to 0}\\frac{{\\dfrac {f(x+h)-f(x)}{h}}-{\\dfrac {f(x)-f(x-h)}{h}}}{h}\\\\
    &=\\lim _{h\\to 0}{\\frac {f(x+h)-2f(x)+f(x-h)}{h^{2}}}
\\end{align*}
`);var b=e(w,2);a(b,()=>i`f`);var y=e(b,4);a(y,()=>i`h`);var k=e(y,2);a(k,()=>i`h`);var W=e(k,2);a(W,()=>i`ih`);var T=e(W,2);a(T,()=>t`
\\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + ih) - f(x)}{ih}
`);var R=e(T,2);a(R,()=>t`
\\frac{f(x + ih) - f(x)}{ih} = f'(x) + ih \\frac{f''(x)}{2!} - h^2 \\frac{f^{(3)}(x)}{3!} + \\cdots
`);var I=e(R,2);a(I,()=>t`
\\begin{align*}
f'(x) &= \\Re\\left[\\frac{f(x + ih) - f(x)}{ih}\\right] + h^2 \\frac{f^{(3)}(x)}{3!} - \\cdots \\\\
&= \\frac{\\Im[f(x + ih) - f(x)]}{h} + \\mathcal{O}(h^2) \\\\
\\end{align*}
`);var q=e(I,2);a(q,()=>i`h^2`);var D=e(q,2);a(D,()=>i`h`);var M=e(D,4);a(M,()=>i`h`);var V=e(M,2);a(V,()=>i`ih`);var z=e(V,4);a(z,()=>i`\\varepsilon^2 = 0`);var A=e(z,2);a(A,()=>i`\\varepsilon \\neq 0`);var E=e(A,2);a(E,()=>t`a + b\\varepsilon`);var L=e(E,2);a(L,()=>i`\\varepsilon^2, \\varepsilon^3, \\cdots`);var J=e(L,2);a(J,()=>i`x \\to x + \\varepsilon`);var X=e(J,2);a(X,()=>t`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon + \\frac{f''(x)}{2!}\\varepsilon^2 + \\cdots`);var $=e(X,2);a($,()=>i`\\varepsilon^2 = 0`);var j=e($,2);a(j,()=>i`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon`);var B=e(j,2);a(B,()=>t`
f'(x) = \\frac{f(x + \\varepsilon) - f(x)}{\\varepsilon}
`),ae(e(B,2),{list:[]}),O(C,r),G()}export{se as component};
