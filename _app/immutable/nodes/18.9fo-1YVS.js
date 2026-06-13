import{A as X,D as W,E as O,F as D,H as G,I as k,J as E,L as J,Q as Be,X as Ce,Y as e,at as We,b as L,c as j,et as Ie,it as Se,k as Y,n as Me,ot as h,q as C,rt as Ae,t as P,v as a,vt as je,y as Q}from"../chunks/Rl5PQ8XL.js";import"../chunks/CCKxRCvr.js";import"../chunks/D3BS_AkK.js";import{a as H,d as ke,i as t,n as Ne,o as Re,t as V,u as ze}from"../chunks/BXB8e5cd.js";var Oe=X('<tspan id="digit" y="25"> </tspan>'),He=X('<tspan id="bar" y="45">―</tspan>'),Ue=X('<tspan id="base" y="65"> <tspan baseline-shift="super" font-size="8"> </tspan></tspan> <tspan id="power" y="60"> </tspan>',1),De=Y('<p class="w-100 tc"><svg height="80" font-family="sans-serif" font-weight="300" font-size="24" transform="scale(1.25)"><text x="10" y="20"></text><text x="10" y="45"></text><text x="10" y="70" font-size="12"></text></svg></p>');function l(U,m){Se(m,!1);let r=P(m,"top",24,()=>[]),b=P(m,"base",8),p=P(m,"base_str",12,"?"),w=Ce(1),S=Ce(30);p()==="?"&&b()!==void 0&&p(b().toString()),Me();var g=De(),_=C(g),y=C(_);Q(y,5,r,L,(v,T,s)=>{var i=Oe();j(i,"x",15+s*30);var o=C(i,!0);h(i),G(()=>O(o,k(T))),W(v,i)}),h(y);var x=e(y);Q(x,5,r,L,(v,T,s,i)=>{var o=He();j(o,"x",10+s*30),W(v,o)}),h(x);var M=e(x);Q(M,5,r,L,(v,T,s,i)=>{var o=Ue(),u=E(o);j(u,"x",10+s*30);var A=C(u),F=e(A),N=C(F,!0);h(F),h(u);var $=e(u,2),R=C($,!0);h($),G(()=>{O(A,`(${p()??""})`),O(N,(D(r()),J(()=>r().length-s))),j($,"x",k(S)+s*30),O(R,(D(r()),k(w),J(()=>r().length-s-k(w))))}),W(v,o)}),h(M),h(_),h(g),G(()=>j(_,"width",(D(r()),J(()=>15+r().length*30)))),W(U,g),Ae()}var Ge=Y(`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately. <!> Or, <!> To obtain the same result, follow the same process with the base <!>.
    We can see efficiently, all that needs to be done is to rotate everything
    around the first digit before the decimal point. <!> Just as before, the way for base <!> we used digits 0 to <!>. For
    base <!> also we can do the same.`,1),Je=Y(`<!> <!> Numbers are usually represented in base 10, but they can be represented in any
base. The most common are binary (base 2), decimal (base 10), and hexadecimal
(base 16). Binary, Hexadecimal, and Octal all being formats computers just
cannot get enough of. As a short introduction to bases, this is how we read the
number 420 in base 10: <!> or very simply <!>. The same number in base 2
is <!>. Which is written as: <!> <h3>Base Conversion</h3> To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder. <!> Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number <!>. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7. <!> which again, including the last quotient, gives us the base 7 number <!>. <!> With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base <!>, we use the digits 0 to <!> to represent the number, with the obvious exception of 0. <h3>Rational Bases</h3> While we did say for a given base <!> we use the digits 0 to <!>, we'll
slightly modify this to say we'll use the digits 0 to <!> for a base <!>, this would let us allow for negative bases with just a small change in
how the numbers are read. <!> The above number is read as <!>. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say &lt;1). If we use single-part fractions,
i.e. <!>, we can even flip around the traditional positive power
numbers around the decimal point. <!> Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form <!>? So, say how we write 265 in base <!>. <!> So very simply <!>. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base <!> also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify. <br/> <br/> This, however, also means that we will be using the same digits 0 to 6 for <!> also, which is natural considering that for fractions &lt;1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as its inverse
and then rotate around the first digit. <h3>Irrational and Transcendental Bases</h3> The easiest to start with is an 'nth' root base, such as <!> <!> <!> We can see both the above representations are functionally equivalent, with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that <!> are the standard place values
when we use five as our base. <br/> <br/> So now, if we were to create a new number 12421 in base <!>, its
value would be <!>. Or as an exercise you can verify that converting <!> to ten for 1234,
is <!>. Finally, we can use these ideas
to use the base <!>. Then 123 in base <!> would be <!>. <h3>Removing Constraints</h3> So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, <!>, but in base 7. Then
the number F1 would be <!>. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly <!> <h3>Going further</h3> Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, <!>. So a simple
number like 1234 would be <!> <!> <!>`,1);function Ee(U,m){Se(m,!1);function r(d=[],q=-2,z="",B=""){d.reverse(),B.length===0&&(B=q.toString());let f="",n="";for(let c=0;c<d.length;c++){let I=d[c];f=`${I} \\cdot (${B})^${c}`+(f.length>0?" + ":"")+f,typeof q!="object"&&(n=`${I} \\cdot (${Math.pow(q,c).toFixed(2)})`+(n.length>0?" + ":"")+n)}return n.length>1&&(n="= "+n),t`${f} ${n} ${z}`}function b(d,q){return d.toString(q).toUpperCase()}Me();var p=Je(),w=E(p);Re(w,{title:"Going to 3.14th base",sub:"Recreational Math #002",desc:"Bases other than positive integers",date:"29 May 2025"});var S=e(w,2);{let d=Ie(()=>[V("n","Variable. Usually positive integer"),V("r","Remainder. Usually < divisor base"),V("b","Base of number system")]);Ne(S,{generics:{C:["z"],Hex:["A","F"]},get list(){return k(d)}})}var g=e(S,2);l(g,{top:[4,2,0],base:10});var _=e(g,2);a(_,()=>r([4,2,0],10,""));var y=e(_,2);a(y,()=>r([1,1,0,1,0,0,1,0,0],2,""));var x=e(y,2);l(x,{top:[1,1,0,1,0,0,1,0,0],base:2});var M=e(x,4);a(M,()=>H`
\\begin{align*}
	420 \\div 2 &= 210\\ &r\\ 0\\\\
	210 \\div 2 &= 105\\ &r\\ 0\\\\
	105 \\div 2 &= 52\\ &r\\ 1\\\\
	52 \\div 2 &= 26\\ &r\\ 0\\\\
	26 \\div 2 &= 13\\ &r\\ 0\\\\
	13 \\div 2 &= 6\\ &r\\ 1\\\\
	6 \\div 2 &= 3\\ &r\\ 0\\\\
	3 \\div 2 &= 1\\ &r\\ 1
\\end{align*}
`);var v=e(M,2);a(v,()=>b(420,2));var T=e(v,2);a(T,()=>H`
\\begin{align*}
  420 \\div 7 &= 60\\ &r\\ 0\\\\
  60 \\div 7 &= 8\\ &r\\ 4\\\\
  8 \\div 7 &= 1\\ &r\\ 1\\\\
\\end{align*}
`);var s=e(T,2);a(s,()=>b(420,7));var i=e(s,2);l(i,{top:[1,1,4,0],base:7});var o=e(i,2);a(o,()=>t`b`);var u=e(o,2);a(u,()=>t`b-1`);var A=e(u,4);a(A,()=>t`b`);var F=e(A,2);a(F,()=>t`b-1`);var N=e(F,2);a(N,()=>t`|b|-1`);var $=e(N,2);a($,()=>t`b`);var R=e($,2);l(R,{top:[1,1,1,0],base:-2});var K=e(R,2);a(K,()=>r([1,1,1,0],-2,"= -6"));var Z=e(K,2);a(Z,()=>t`\\frac1n`);var ee=e(Z,2);ke(ee,{title:"Base ½ example",children:(d,q)=>{We();var z=Ge(),B=e(E(z));a(B,()=>H`
  \\begin{align*}
    31 \\div 2 &= 15\\ &r\\ 1\\\\
    15 \\div 2 &= 7\\ &r\\ 1\\\\
    7 \\div 2 &= 3\\ &r\\ 1\\\\
    3 \\div 2 &= 1\\ &r\\ 1\\\\
    \\text{ and, }\\\\
    0.125 \\times 2 &= 0.25\\ &r\\ 0\\\\
    0.25 \\times 2 &= 0.5\\ &r\\ 0\\\\
    0.5 \\times 2 &= 1.0\\ &r\\ 1\\\\
  \\end{align*}
  `);var f=e(B,2);l(f,{top:[1,1,1,1,".",0,0,1],base:2});var n=e(f,2);a(n,()=>t`\\frac1n`);var c=e(n,2);l(c,{top:[1,0,0,1,".",1,1,1],base:1/2,base_str:"½"});var I=e(c,2);a(I,()=>t`b`);var qe=e(I,2);a(qe,()=>t`|b|-1`);var Fe=e(qe,2);a(Fe,()=>t`\\frac1b`),We(),W(d,z)},$$slots:{default:!0}});var ae=e(ee,2);a(ae,()=>t`\\frac1n`);var te=e(ae,2);a(te,()=>t`\\frac73`);var re=e(te,2);a(re,()=>H`
\\begin{align*}
  265 \\div 7 &= 37\\ &r\\ 6, 37 \\times 3 &= 111\\\\
  111 \\div 7 &= 15\\ &r\\ 6, 15 \\times 3 &= 45\\\\
  45 \\div 7 &= 6\\ &r\\ 3, 6 \\times 3 &= 18\\\\
  18 \\div 7 &= 2\\ &r\\ 4, 2 \\times 3 &= 6\\\\
  6 \\div 7 &= 0\\ &r\\ 6, 0 \\times 3 &= 0\\\\
\\end{align*}
`);var se=e(re,2);a(se,()=>r([6,4,3,6,6],7/3,"\\approx 265","\\frac73"));var oe=e(se,2);a(oe,()=>t`\\frac37`);var ne=e(oe,6);a(ne,()=>t`\\frac37`);var ie=e(ne,4);a(ie,()=>t`\\sqrt[4]{5}`);var de=e(ie);de.nodeValue=`. This
should be related to being in base 5. So consider 42 in base 5, or ${parseInt("42",5)??""} in base 10. We can very easily first write `;var he=e(de);l(he,{top:[4,0,0,0,2],base:Math.pow(5,.25),base_str:"∜5"});var le=e(he,2);l(le,{top:[4,2],base:5});var be=e(le,2);a(be,()=>t`(\\sqrt[4]5)^{4n}`);var ve=e(be,6);a(ve,()=>t`\\sqrt[4]{5}`);var ce=e(ve,2);a(ce,()=>r([1,2,4,2,1],Math.pow(5,.25),"= 24.622 Leftrightarrow [6 + 2 \\times 5^{\\frac34} + 4 \\times 5^{\\frac24} + 2 \\times 5^{\\frac14}]","sqrt[4]{5}"));var ue=e(ce,2);a(ue,()=>t`\\sqrt{5}`);var fe=e(ue,2);a(fe,()=>t`[1234]_{\\sqrt5} = [14 + 8 \\sqrt5]_{10}`);var me=e(fe,2);a(me,()=>t`\\pi`);var pe=e(me,2);a(pe,()=>t`\\pi`);var we=e(pe,2);a(we,()=>r([1,2,3],3.1415926535,"approx 19.15","pi"));var ge=e(we,4);a(ge,()=>t`[0 \\rightarrow 9, A \\rightarrow F]`);var _e=e(ge,2);a(_e,()=>r([15,1],7,"= 106_{10}"));var ye=e(_e,2);a(ye,()=>r([7,9,10,4,5],2,"= 237"));var xe=e(ye,4);a(xe,()=>t`\\omega = \\frac{-1}2 + \\frac{i\\sqrt3}2`);var Te=e(xe,2);l(Te,{top:[1,2,3,4],base:5,base_str:"ω"});var $e=e(Te,2);a($e,()=>r([1,2,3,4],[-.5,Math.sqrt(3)/2],"= 5 + 3 omega + 2omega^2.","ω")),ze(e($e,2),{list:[["Can any Number be a Base? (video)","https://www.youtube.com/watch?v=PQAhC1M93C8"]]}),W(U,p),Ae()}export{Ee as component};
