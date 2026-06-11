import"../chunks/DsnmJJEf.js";import"../chunks/sDYslN56.js";import{p as Me,t as H,a as _e,c as S,s as e,ao as Ce,r as l,W as V,u as D,a4 as Se,g as k,f as E,n as Be,d as Ie}from"../chunks/CZzIV55D.js";import{a as B,f as K,e as X}from"../chunks/UcDFViGA.js";import{h as a}from"../chunks/D-VbVIMD.js";import{i as je}from"../chunks/Cip6YPdY.js";import{D as ke,d as J}from"../chunks/CpJ4BgJm.js";import{o as ze}from"../chunks/DY9qbGRG.js";import{s as O}from"../chunks/3qRHltW6.js";import{e as L,i as P}from"../chunks/CTa6ybkt.js";import{s as I}from"../chunks/DXlEpTQd.js";import{p as Q}from"../chunks/CRk32S8W.js";import{M as Ne,_ as U,a as t}from"../chunks/BtH6GhOB.js";import{A as Re}from"../chunks/Cw6tFTSG.js";import{R as Oe}from"../chunks/BkkycDmh.js";var Ue=X('<tspan id="digit" y="25"> </tspan>'),Ge=X('<tspan id="bar" y="45">―</tspan>'),He=X('<tspan id="base" y="65"> <tspan baseline-shift="super" font-size="8"> </tspan></tspan> <tspan id="power" y="60"> </tspan>',1),Ve=K('<p class="w-100 tc"><svg height="80" font-family="sans-serif" font-weight="300" font-size="24" transform="scale(1.25)"><text x="10" y="20"></text><text x="10" y="45"></text><text x="10" y="70" font-size="12"></text></svg></p>');function b(G,f){Me(f,!1);let r=Q(f,"top",24,()=>[]),d=Q(f,"base",8),p=Q(f,"base_str",12,"?"),w=Se(1),M=Se(30);p()==="?"&&d()!==void 0&&p(d().toString()),ze(()=>{r().includes(".")&&Ce(w,r().length-r().indexOf(".")),d()<=9&&d()>=2&&d()%1==0&&Ce(M,24)}),je();var g=Ve(),y=S(g),x=S(y);L(x,5,r,P,(v,q,s)=>{var o=Ue();I(o,"x",15+30*s);var i=S(o,!0);l(o),H(()=>O(i,k(q))),B(v,o)}),l(x);var T=e(x);L(T,5,r,P,(v,q,s,o)=>{var i=Ge();I(i,"x",10+30*s),B(v,i)}),l(T);var _=e(T);L(_,5,r,P,(v,q,s,o)=>{var i=He(),u=E(i);I(u,"x",10+30*s);var j=S(u),A=e(j),z=S(A,!0);l(A),l(u);var $=e(u,2),N=S($,!0);l($),H(()=>{O(j,`(${p()??""})`),O(z,(V(r()),D(()=>r().length-s))),I($,"x",k(M)+30*s),O(N,(V(r()),k(w),D(()=>r().length-s-k(w))))}),B(v,i)}),l(_),l(y),l(g),H(()=>I(y,"width",(V(r()),D(()=>15+30*r().length)))),B(G,g),_e()}var De=K(`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately. <!> Or, <!> To obtain the same result, follow the same process with the base <!>.
    We can see efficiently, all that needs to be done is to rotate everything
    around the first digit before the decimal point. <!> Just as before, the way for base <!> we used digits 0 to <!>. For
    base <!> also we can do the same.`,1),Je=K(`<!> <!> Numbers are usually represented in base 10, but they can be represented in any
base. The most common are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10: <!> or very simply <!>. The same number in base 2
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
so for a number with a base less than 1, we can just use the same digits as its
inverse and then rotate around the first digit. <h3>Irrational and Transcendental Bases</h3> The easiest to start with is an 'nth' root base, such as <!> <!> <!> We can see both the above representations are functionally equivalent, with
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
number like 1234 would be <!> <!> <!>`,1);function oa(G,f){function r(h=[],W=-2,R="",C=""){h.reverse(),C.length===0&&(C=W.toString());let c="",n="";for(let m=0;m<h.length;m++){let F=h[m];c=`${F} \\cdot (${C})^${m}`+(c.length>0?" + ":"")+c,typeof W!="object"&&(n=`${F} \\cdot (${Math.pow(W,m).toFixed(2)})`+(n.length>0?" + ":"")+n)}return n.length>1&&(n="= "+n),t`${c} ${n} ${R}`}function d(h,W){return h.toString(W).toUpperCase()}Me(f,!1),je();var p=Je(),w=E(p);Ne(w,{title:"Going to 3.14th base",sub:"Recreational Math #002",desc:"Bases other than positive integers",date:"29 May 2025"});var M=e(w,2);{let h=Ie(()=>[J("n","Variable. Usually positive integer"),J("r","Remainder. Usually < divisor base"),J("b","Base of number system")]);ke(M,{generics:{C:["z"],Hex:["A","F"]},get list(){return k(h)}})}var g=e(M,2);b(g,{top:[4,2,0],base:10});var y=e(g,2);a(y,()=>r([4,2,0],10,""));var x=e(y,2);a(x,()=>r([1,1,0,1,0,0,1,0,0],2,""));var T=e(x,2);b(T,{top:[1,1,0,1,0,0,1,0,0],base:2});var _=e(T,4);a(_,()=>U`
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
`);var v=e(_,2);a(v,()=>d(420,2));var q=e(v,2);a(q,()=>U`
\\begin{align*}
  420 \\div 7 &= 60\\ &r\\ 0\\\\
  60 \\div 7 &= 8\\ &r\\ 4\\\\
  8 \\div 7 &= 1\\ &r\\ 1\\\\
\\end{align*}
`);var s=e(q,2);a(s,()=>d(420,7));var o=e(s,2);b(o,{top:[1,1,4,0],base:7});var i=e(o,2);a(i,()=>t`b`);var u=e(i,2);a(u,()=>t`b-1`);var j=e(u,4);a(j,()=>t`b`);var A=e(j,2);a(A,()=>t`b-1`);var z=e(A,2);a(z,()=>t`|b|-1`);var $=e(z,2);a($,()=>t`b`);var N=e($,2);b(N,{top:[1,1,1,0],base:-2});var Y=e(N,2);a(Y,()=>r([1,1,1,0],-2,"= -6"));var Z=e(Y,2);a(Z,()=>t`\\frac1n`);var ee=e(Z,2);Re(ee,{title:"Base ½ example",children:(h,W)=>{Be();var R=De(),C=e(E(R));a(C,()=>U`
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
  `);var c=e(C,2);b(c,{top:[1,1,1,1,".",0,0,1],base:2});var n=e(c,2);a(n,()=>t`\\frac1n`);var m=e(n,2);b(m,{top:[1,0,0,1,".",1,1,1],base:.5,base_str:"½"});var F=e(m,2);a(F,()=>t`b`);var We=e(F,2);a(We,()=>t`|b|-1`);var Fe=e(We,2);a(Fe,()=>t`\\frac1b`),Be(),B(h,R)},$$slots:{default:!0}});var ae=e(ee,2);a(ae,()=>t`\\frac1n`);var te=e(ae,2);a(te,()=>t`\\frac73`);var re=e(te,2);a(re,()=>U`
\\begin{align*}
  265 \\div 7 &= 37\\ &r\\ 6, 37 \\times 3 &= 111\\\\
  111 \\div 7 &= 15\\ &r\\ 6, 15 \\times 3 &= 45\\\\
  45 \\div 7 &= 6\\ &r\\ 3, 6 \\times 3 &= 18\\\\
  18 \\div 7 &= 2\\ &r\\ 4, 2 \\times 3 &= 6\\\\
  6 \\div 7 &= 0\\ &r\\ 6, 0 \\times 3 &= 0\\\\
\\end{align*}
`);var se=e(re,2);a(se,()=>r([6,4,3,6,6],7/3,"\\approx 265","\\frac73"));var ie=e(se,2);a(ie,()=>t`\\frac37`);var ne=e(ie,6);a(ne,()=>t`\\frac37`);var oe=e(ne,4);a(oe,()=>t`\\sqrt[4]{5}`);var he=e(oe);he.nodeValue=`. This
should be related to being in base 5. So consider 42 in base 5, or ${parseInt("42",5)??""} in base 10. We can very easily first write `;var le=e(he);b(le,{top:[4,0,0,0,2],base:Math.pow(5,.25),base_str:"∜5"});var be=e(le,2);b(be,{top:[4,2],base:5});var de=e(be,2);a(de,()=>t`(\\sqrt[4]5)^{4n}`);var ve=e(de,6);a(ve,()=>t`\\sqrt[4]{5}`);var me=e(ve,2);a(me,()=>r([1,2,4,2,1],Math.pow(5,.25),"= 24.622 Leftrightarrow [6 + 2 \\times 5^{\\frac34} + 4 \\times 5^{\\frac24} + 2 \\times 5^{\\frac14}]","sqrt[4]{5}"));var ue=e(me,2);a(ue,()=>t`\\sqrt{5}`);var ce=e(ue,2);a(ce,()=>t`[1234]_{\\sqrt5} = [14 + 8 \\sqrt5]_{10}`);var fe=e(ce,2);a(fe,()=>t`\\pi`);var pe=e(fe,2);a(pe,()=>t`\\pi`);var we=e(pe,2);a(we,()=>r([1,2,3],3.1415926535,"approx 19.15","pi"));var ge=e(we,4);a(ge,()=>t`[0 \\rightarrow 9, A \\rightarrow F]`);var ye=e(ge,2);a(ye,()=>r([15,1],7,"= 106_{10}"));var xe=e(ye,2);a(xe,()=>r([7,9,10,4,5],2,"= 237"));var Te=e(xe,4);a(Te,()=>t`\\omega = \\frac{-1}2 + \\frac{i\\sqrt3}2`);var qe=e(Te,2);b(qe,{top:[1,2,3,4],base:5,base_str:"ω"});var $e=e(qe,2);a($e,()=>r([1,2,3,4],[-.5,Math.sqrt(3)/2],"= 5 + 3 omega + 2omega^2.","ω"));var Ae=e($e,2);Oe(Ae,{list:[["Can any Number be a Base? (video)","https://www.youtube.com/watch?v=PQAhC1M93C8"]]}),B(G,p),_e()}export{oa as component};
