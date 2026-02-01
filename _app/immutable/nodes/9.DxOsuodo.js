import{a as F,f as G}from"../chunks/peIzOwkN.js";import"../chunks/RUNPO2X1.js";import{p as K,f as P,a as Q,g as U,s as a,d as Y}from"../chunks/Ch0UZ__N.js";import{h as e}from"../chunks/BNJbiaqz.js";import{i as Z}from"../chunks/Ck5htymR.js";import{M as $,D as aa,_ as t,a as i,d as r}from"../chunks/DweT1-A0.js";import{I as ea}from"../chunks/BtWi7LMt.js";import{R as ia}from"../chunks/DEqd5dYh.js";var ta=G(`<!> <!> We often define the fundamental derivative as: <!> which is a limit of the difference quotient as the increment <!> approaches zero. We try to move a small distance in one direction (<!>)
and see how far it forces us in the other direction (<!>). <!> <!> in <!>, and end up at <!>. We see we also get a
small step <!>, at the corresponding <!>. Taking the same idea
forward, if <!>, we can also define the
derivative, of the derivative, as: <!> We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only <!> <h4>Imaginary Steps</h4> This however still leaves us with a lot of freedom in how we choose the value
for <!>. We can then also give it an imaginary value, and replace <!> with <!>, and get: <!> which implies, applying the Taylor series expansion, that: <!> or taking just the real part both sides, we get: <!> We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now <!>, and not <!>. <h4>Automatic Differentiation</h4> Just as we took a small real step <!>, or a small imaginary step <!>, we
can also take a small <i>'dual'</i> step, using dual numbers, which are
peculiarly defined as, let <!>, but <!>.
We can define a dual number as: <!> This also implies we throw away anything involving <!>,
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from <!>. We expand via Taylor: <!> But <!>, so: <!> i.e. <!> Now isn't that neat. Automatic differentiation. <!>`,1);function ma(C,H){K(H,!1),Z();var n=ta(),s=P(n);$(s,{title:"Multiple first-principles",sub:"Recreational Math #004",desc:"Different ways to redefine the derivative",date:"13 July 2025"});var o=a(s,2);{let S=Y(()=>[r("ℑ","The imaginary part of a complex number, often also written as Im"),r("ε","Dual number, often interpreted as an infinitesimal step. ε² = 0, but ε ≠ 0"),r("h","Variable, often interpreted as a small increment"),r("δ","Variable, often interpreted as a small increment"),r("ϵ","Epsilon, of δ fame."),r("ih","Variable, often interpreted as a small increment. Here, h is treated as real, and i is imaginary so that ih is complex")]);aa(o,{generics:{C:["E","ih"],R:["x","y","a","b"],fXX:["f"]},get list(){return U(S)}})}var f=a(o,2);e(f,()=>t`
    \\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}
`);var l=a(f,2);e(l,()=>i`h`);var h=a(l,2);e(h,()=>i`x`);var v=a(h,2);e(v,()=>i`y`);var m=a(v,2);ea(m,{href:"//en.wikipedia.org/wiki/Limit_of_a_function",src:"//upload.wikimedia.org/wikipedia/commons/d/d5/Epsilon-delta_limit.svg",alt:"Wikipedia: Limit of a function"});var c=a(m);c.nodeValue=" as in the image above, when at standing at (x=a,y=b), we take a small step ";var d=a(c);e(d,()=>i`\\delta`);var p=a(d,2);e(p,()=>i`x`);var x=a(p,2);e(x,()=>i`(x=a+\\delta,y=b+\\epsilon)`);var u=a(x,2);e(u,()=>i`\\epsilon`);var g=a(u,2);e(g,()=>i`y=b`);var w=a(g,2);e(w,()=>i`f'(x) = \\frac{f(x + h) - f(x)}{h}`);var y=a(w,2);e(y,()=>t`
\\begin{align*}
    \\frac{d^2f}{dx^2}
    &=\\lim _{h\\to 0}\\frac{{\\dfrac {f(x+h)-f(x)}{h}}-{\\dfrac {f(x)-f(x-h)}{h}}}{h}\\\\
    &=\\lim _{h\\to 0}{\\frac {f(x+h)-2f(x)+f(x-h)}{h^{2}}}
\\end{align*}
`);var b=a(y,2);e(b,()=>i`f`);var k=a(b,4);e(k,()=>i`h`);var W=a(k,2);e(W,()=>i`h`);var _=a(W,2);e(_,()=>i`ih`);var I=a(_,2);e(I,()=>t`
\\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + ih) - f(x)}{ih}
`);var T=a(I,2);e(T,()=>t`
\\frac{f(x + ih) - f(x)}{ih} = f'(x) + ih \\frac{f''(x)}{2!} - h^2 \\frac{f^{(3)}(x)}{3!} + \\cdots \\\\
`);var D=a(T,2);e(D,()=>t`
\\begin{align*}
f'(x) &= \\Im\\left[\\frac{f(x + ih) - f(x)}{ih}\\right] + h^2 \\frac{f^{(3)}(x)}{3!} - \\cdots \\\\
&= \\frac{\\Im[f(x + ih) - f(x)]}{h} + \\mathcal{O}(h^2) \\\\
\\end{align*}
`);var V=a(D,2);e(V,()=>i`h^2`);var q=a(V,2);e(q,()=>i`h`);var z=a(q,4);e(z,()=>i`h`);var E=a(z,2);e(E,()=>i`ih`);var L=a(E,4);e(L,()=>i`\\varepsilon^2 = 0`);var M=a(L,2);e(M,()=>i`\\varepsilon \\neq 0`);var R=a(M,2);e(R,()=>t`a + b\\varepsilon`);var A=a(R,2);e(A,()=>i`\\varepsilon^2, \\varepsilon^3, \\cdots`);var J=a(A,2);e(J,()=>i`x \\to x + \\varepsilon`);var N=a(J,2);e(N,()=>t`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon + \\frac{f''(x)}{2!}\\varepsilon^2 + \\cdots`);var X=a(N,2);e(X,()=>i`\\varepsilon^2 = 0`);var j=a(X,2);e(j,()=>i`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon`);var B=a(j,2);e(B,()=>t`
f'(x) = \\frac{f(x + \\varepsilon) - f(x)}{\\varepsilon}
`);var O=a(B,2);ia(O,{list:[]}),F(C,n),Q()}export{ma as component};
