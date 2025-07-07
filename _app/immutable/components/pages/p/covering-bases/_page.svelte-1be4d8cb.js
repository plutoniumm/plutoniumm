import{S as he,i as le,s as de,e as q,C as U,f as F,h as S,D as J,k as e,l as v,m as a,n as N,o as zt,p as Pt,d as i,j as h,w as Qt,H as g,r as R,z as p,v as _,x as A,y as H,A as M,t as O,b as z,B as D}from"../../../../chunks/index-86b5a992.js";import{A as Ge}from"../../../../chunks/accord-6673e0de.js";import{_ as Ot,a as k,M as Ue}from"../../../../chunks/meta-1b423db4.js";import{L as Je}from"../../../../chunks/link-e4dd3b8e.js";function te(b,r,d){const l=b.slice();return l[5]=r[d],l[7]=d,l}function ee(b,r,d){const l=b.slice();return l[5]=r[d],l[7]=d,l}function ae(b,r,d){const l=b.slice();return l[9]=r[d],l[7]=d,l}function se(b){let r,d,l=b[9]+"";return{c(){r=U("tspan"),d=i(l),this.h()},l(c){r=J(c,"tspan",{x:!0,y:!0});var w=S(r);d=h(w,l),w.forEach(e),this.h()},h(){v(r,"x",15+30*b[7]),v(r,"y","25")},m(c,w){a(c,r,w),N(r,d)},p(c,w){2&w&&l!==(l=c[9]+"")&&Qt(d,l)},d(c){c&&e(r)}}}function re(b){let r,d;return{c(){r=U("tspan"),d=i("―"),this.h()},l(l){r=J(l,"tspan",{x:!0,y:!0});var c=S(r);d=h(c,"―"),c.forEach(e),this.h()},h(){v(r,"x",10+30*b[7]),v(r,"y","45")},m(l,c){a(l,r,c),N(r,d)},p:zt,d(l){l&&e(r)}}}function oe(b){let r,d,l,c,w,T,y,f,W,x,E=b[1].length-b[7]+"",$=b[1].length-b[7]-b[2]+"";return{c(){r=U("tspan"),d=i("("),l=new g(!0),c=i(")"),w=U("sup"),T=i(E),y=R(),f=U("tspan"),W=i($),this.h()},l(s){r=J(s,"tspan",{x:!0,y:!0});var u=S(r);d=h(u,"("),l=p(u,!0),c=h(u,")"),w=J(u,"sup",{});var o=S(w);T=h(o,E),o.forEach(e),u.forEach(e),y=_(s),f=J(s,"tspan",{x:!0,y:!0});var B=S(f);W=h(B,$),B.forEach(e),this.h()},h(){l.a=c,v(r,"x",10+30*b[7]),v(r,"y","65"),v(f,"x",x=b[3]+30*b[7]),v(f,"y","60")},m(s,u){a(s,r,u),N(r,d),l.m(b[0],r),N(r,c),N(r,w),N(w,T),a(s,y,u),a(s,f,u),N(f,W)},p(s,u){1&u&&l.p(s[0]),2&u&&E!==(E=s[1].length-s[7]+"")&&Qt(T,E),6&u&&$!==($=s[1].length-s[7]-s[2]+"")&&Qt(W,$),8&u&&x!==(x=s[3]+30*s[7])&&v(f,"x",x)},d(s){s&&e(r),s&&e(y),s&&e(f)}}}function Pe(b){let r,d,l,c,w,T,y=b[1],f=[];for(let s=0;s<y.length;s+=1)f[s]=se(ae(b,y,s));let W=b[1],x=[];for(let s=0;s<W.length;s+=1)x[s]=re(ee(b,W,s));let E=b[1],$=[];for(let s=0;s<E.length;s+=1)$[s]=oe(te(b,E,s));return{c(){r=q("p"),d=U("svg"),l=U("text");for(let s=0;s<f.length;s+=1)f[s].c();c=U("text");for(let s=0;s<x.length;s+=1)x[s].c();w=U("text");for(let s=0;s<$.length;s+=1)$[s].c();this.h()},l(s){r=F(s,"P",{class:!0});var u=S(r);d=J(u,"svg",{width:!0,height:!0,"font-family":!0,"font-weight":!0,"font-size":!0});var o=S(d);l=J(o,"text",{x:!0,y:!0});var B=S(l);for(let I=0;I<f.length;I+=1)f[I].l(B);B.forEach(e),c=J(o,"text",{x:!0,y:!0});var j=S(c);for(let I=0;I<x.length;I+=1)x[I].l(j);j.forEach(e),w=J(o,"text",{x:!0,y:!0,"font-size":!0});var L=S(w);for(let I=0;I<$.length;I+=1)$[I].l(L);L.forEach(e),o.forEach(e),u.forEach(e),this.h()},h(){v(l,"x","10"),v(l,"y","20"),v(c,"x","10"),v(c,"y","45"),v(w,"x","10"),v(w,"y","70"),v(w,"font-size","12"),v(d,"width",T=15+30*b[1].length),v(d,"height","80"),v(d,"font-family","sans-serif"),v(d,"font-weight","300"),v(d,"font-size","24"),v(r,"class","w-100 tc")},m(s,u){a(s,r,u),N(r,d),N(d,l);for(let o=0;o<f.length;o+=1)f[o].m(l,null);N(d,c);for(let o=0;o<x.length;o+=1)x[o].m(c,null);N(d,w);for(let o=0;o<$.length;o+=1)$[o].m(w,null)},p(s,[u]){if(2&u){let o;for(y=s[1],o=0;o<y.length;o+=1){const B=ae(s,y,o);f[o]?f[o].p(B,u):(f[o]=se(B),f[o].c(),f[o].m(l,null))}for(;o<f.length;o+=1)f[o].d(1);f.length=y.length}if(2&u){let o;for(W=s[1],o=0;o<W.length;o+=1){const B=ee(s,W,o);x[o]?x[o].p(B,u):(x[o]=re(B),x[o].c(),x[o].m(c,null))}for(;o<x.length;o+=1)x[o].d(1);x.length=W.length}if(15&u){let o;for(E=s[1],o=0;o<E.length;o+=1){const B=te(s,E,o);$[o]?$[o].p(B,u):($[o]=oe(B),$[o].c(),$[o].m(w,null))}for(;o<$.length;o+=1)$[o].d(1);$.length=E.length}2&u&&T!==(T=15+30*s[1].length)&&v(d,"width",T)},i:zt,o:zt,d(s){s&&e(r),Pt(f,s),Pt(x,s),Pt($,s)}}}function Qe(b,r,d){let{top:l=[]}=r,{base:c=10}=r,{base_str:w}=r;if(typeof c!="number")throw new Error("Base must be a number");let T=1;l.includes(".")&&(T=l.length-l.indexOf("."));let y=30;return c<=9&&c>=2&&c%1==0&&(y=24),w||(w=c.toString()),b.$$set=f=>{"top"in f&&d(1,l=f.top),"base"in f&&d(4,c=f.base),"base_str"in f&&d(0,w=f.base_str)},[w,l,T,y,c]}class G extends he{constructor(r){super(),le(this,r,Qe,Pe,de,{top:1,base:4,base_str:0})}}function Ve(b){let r,d,l,c,w,T,y,f,W,x,E,$,s,u,o,B,j=Ot`
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
  `+"",L=k`\\frac1n`+"",I=k`b`+"",hn=k`|b|-1`+"",nn=k`\\frac1b`+"";return c=new G({props:{top:[1,1,1,1,".",0,0,1],base:2}}),f=new G({props:{top:[1,0,0,1,".",1,1,1],base:.5,base_str:"½"}}),{c(){r=i(`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    `),d=new g(!1),l=i(`

    Or,

    `),A(c.$$.fragment),w=i(`

    To obtain the same result, follow the same process with the base `),T=new g(!1),y=i(`.
    We can see efficiently, all that needs to be done is to rotate everything
    around the decimal point

    `),A(f.$$.fragment),W=i(`

    Just as before, the way for base `),x=new g(!1),E=i(" we used digits 0 to "),$=new g(!1),s=i(`. For
    base `),u=new g(!1),o=i(" also we can do the same."),this.h()},l(m){r=h(m,`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    `),d=p(m,!1),l=h(m,`

    Or,

    `),H(c.$$.fragment,m),w=h(m,`

    To obtain the same result, follow the same process with the base `),T=p(m,!1),y=h(m,`.
    We can see efficiently, all that needs to be done is to rotate everything
    around the decimal point

    `),H(f.$$.fragment,m),W=h(m,`

    Just as before, the way for base `),x=p(m,!1),E=h(m," we used digits 0 to "),$=p(m,!1),s=h(m,`. For
    base `),u=p(m,!1),o=h(m," also we can do the same."),this.h()},h(){d.a=l,T.a=y,x.a=E,$.a=s,u.a=o},m(m,C){a(m,r,C),d.m(j,m,C),a(m,l,C),M(c,m,C),a(m,w,C),T.m(L,m,C),a(m,y,C),M(f,m,C),a(m,W,C),x.m(I,m,C),a(m,E,C),$.m(hn,m,C),a(m,s,C),u.m(nn,m,C),a(m,o,C),B=!0},p:zt,i(m){B||(O(c.$$.fragment,m),O(f.$$.fragment,m),B=!0)},o(m){z(c.$$.fragment,m),z(f.$$.fragment,m),B=!1},d(m){m&&e(r),m&&d.d(),m&&e(l),D(c,m),m&&e(w),m&&T.d(),m&&e(y),D(f,m),m&&e(W),m&&x.d(),m&&e(E),m&&$.d(),m&&e(s),m&&u.d(),m&&e(o)}}}function Ke(b){let r;return{c(){r=i("Can any Number be a Base? (video)")},l(d){r=h(d,"Can any Number be a Base? (video)")},m(d,l){a(d,r,l)},d(d){d&&e(r)}}}function Xe(b){let r,d,l,c,w,T,y,f,W,x,E,$,s,u,o,B,j,L,I,hn,nn,m,C,ln,dn,mn,cn,bn,fn,V,pt,wn,un,gn,pn,tn,Dt,yt,yn,vn,$n,xn,Tn,En,Wn,Bn,K,vt,kn,Sn,Cn,In,P,$t,Nn,qn,Fn,Rn,_n,jn,An,Hn,Mn,On,xt,Tt,Et,Wt,zn,Dn,en,Lt,Bt,Ln,Gn,kt,St,X,Ct,Y,It,Un,Jn,Nt,qt,Ft,Rt,Pn,Qn,Vn,Kn,Xn,Yn,Zn,nt,tt,et,at,st,an,Gt,_t,rt,ot,it,ht,lt,dt,sn,Ut,jt,mt,ct,Z,At,bt,ft,rn,Jt,Ht,on,wt,Q,Mt,me=b[0]([4,2,0],10,"")+"",ce=b[0]([1,1,0,1,0,0,1,0,0],2,"")+"",be=Ot`
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
`+"",fe=ie(420,2)+"",we=Ot`
\\begin{align*}
  420 \\div 7 &= 60\\ &r\\ 0\\\\
  60 \\div 7 &= 8\\ &r\\ 4\\\\
  8 \\div 7 &= 1\\ &r\\ 1\\\\
\\end{align*}
`+"",ue=ie(420,7)+"",ge=k`b`+"",pe=k`b-1`+"",ye=k`b`+"",ve=k`b-1`+"",$e=k`|b|-1`+"",xe=k`b`+"",Te=b[0]([1,1,1,0],-2,"= -6")+"",Ee=k`\\frac1n`+"",We=k`\\frac1n`+"",Be=k`\\frac73`+"",ke=Ot`
\\begin{align*}
  265 \\div 7 &= 37\\ &r\\ 6, 37 \\times 3 &= 111\\\\
  111 \\div 7 &= 15\\ &r\\ 6, 15 \\times 3 &= 45\\\\
  45 \\div 7 &= 6\\ &r\\ 3, 6 \\times 3 &= 18\\\\
  18 \\div 7 &= 2\\ &r\\ 4, 2 \\times 3 &= 6\\\\
  6 \\div 7 &= 0\\ &r\\ 6, 0 \\times 3 &= 0\\\\
\\end{align*}
`+"",Se=b[0]([6,4,3,6,6],7/3,"\\approx 265","\\frac73")+"",Ce=k`\\frac37`+"",Ie=k`\\frac37`+"",Ne=k`\\sqrt[4]{5}`+"",Vt=parseInt("42",5)+"",qe=k`(\\sqrt[4]5)^{2n}`+"",Fe=k`\\sqrt[4]{5}`+"",Re=b[0]([1,2,4,2,1],Math.pow(5,.25),"= 24.622 \\Leftrightarrow [6 + 2 \\times 5^{\\frac34} + 4 \\times 5^{\\frac24} + 2 \\times 5^{\\frac14}]","\\sqrt[4]{5}")+"",_e=k`\\sqrt{5}`+"",je=k`[1234]_{\\sqrt5} = [14 + 8 \\sqrt5]_{10}`+"",Ae=k`\\pi`+"",He=b[0]([1,2,3],3.1415926535,"\\approx 19.15","\\pi")+"",Me=k`[0 \\rightarrow 9, A \\rightarrow F]`+"",Oe=b[0]([15,1],7,"= 106_{10}")+"",ze=b[0]([7,9,10,4,5],2,"= 237")+"",De=k`\\omega = \\frac{-1}2 + \\frac{i\\sqrt3}2`+"",Le=b[0]([1,2,3,4],[-.5,Math.sqrt(3)/2],"= 5 + 3 \\omega + 2\\omega^2.","ω")+"";return r=new Ue({props:{title:"Going to 3.14th base",sub:"Recreational Math #002",desc:"Bases other than positive integers",date:"29 May 2025",ignores:"A, F"}}),E=new G({props:{top:[4,2,0]}}),j=new G({props:{top:[1,1,0,1,0,0,1,0,0],base:2}}),V=new G({props:{top:[1,1,4,0],base:7}}),K=new G({props:{top:[1,1,1,0],base:-2}}),P=new Ge({props:{title:"Base ½ example",$$slots:{default:[Ve]},$$scope:{ctx:b}}}),X=new G({props:{top:[4,0,0,0,2,0,0,0,0],base:Math.pow(5,.25),base_str:"∜5"}}),Y=new G({props:{top:[4,2],base:5}}),Z=new G({props:{top:[1,2,3,4],base:5,base_str:"ω"}}),Q=new Je({props:{href:"https://www.youtube.com/watch?v=PQAhC1M93C8",$$slots:{default:[Ke]},$$scope:{ctx:b}}}),{c(){A(r.$$.fragment),d=R(),l=q("define"),c=R(),w=q("define"),T=R(),y=q("define"),f=R(),W=q("define"),x=i(`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),A(E.$$.fragment),$=i(`

or very simply `),s=new g(!1),u=i(`. The same number in base 2
is `),o=new g(!1),B=i(`. Which is written as:

`),A(j.$$.fragment),L=R(),I=q("h3"),hn=i("Base Conversion"),nn=i(`
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

`),m=new g(!1),C=i(`

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
`),ln=new g(!1),dn=i(`. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

`),mn=new g(!1),cn=i(`

which again, including the last quotient, gives us the base 7 number
`),bn=new g(!1),fn=i(`.

`),A(V.$$.fragment),pt=i(`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),wn=new g(!1),un=i(`, we use the digits 0 to
`),gn=new g(!1),pn=i(` to represent the number, with the obvious exception of 0.

`),tn=q("h3"),Dt=i("Rational Bases"),yt=i(`
While we did say for a given base `),yn=new g(!1),vn=i(" we use the digits 0 to "),$n=new g(!1),xn=i(`, we'll
slightly modify this to say we'll use the digits 0 to `),Tn=new g(!1),En=i(` for a base
`),Wn=new g(!1),Bn=i(`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),A(K.$$.fragment),vt=i(`
The above number is read as `),kn=new g(!1),Sn=i(`. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single-part fractions,
i.e. `),Cn=new g(!1),In=i(`, we can even flip around the traditional positive power
numbers around the decimal point.

`),A(P.$$.fragment),$t=i(`

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form `),Nn=new g(!1),qn=i("? So, say how we write 265 in base "),Fn=new g(!1),Rn=i(`.

`),_n=new g(!1),jn=i(`

So very simply `),An=new g(!1),Hn=i(`. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base `),Mn=new g(!1),On=i(` also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
`),xt=q("br"),Tt=R(),Et=q("br"),Wt=i(`
Th, however, also means that we will be using the same digits 0 to 6 for `),zn=new g(!1),Dn=i(`
also, which is natural considering that for fractions <1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the decimal point.

`),en=q("h3"),Lt=i("Irrational and Transcendental Bases"),Bt=i(`
The easiest to start with is an 'nth' root base, such as `),Ln=new g(!1),Gn=i(`. This
should be related to being in base 5. So consider 42 in base 5, or `),kt=i(Vt),St=i(` in base 10. We can very easily first write

`),A(X.$$.fragment),Ct=R(),A(Y.$$.fragment),It=i(`

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),Un=new g(!1),Jn=i(` are the standard place values
when we use five as our base.
`),Nt=q("br"),qt=R(),Ft=q("br"),Rt=i(`
So now, if we were to create a new number 421 in base `),Pn=new g(!1),Qn=i(`, it's
value would be `),Vn=new g(!1),Kn=i(". Or as an exercise you can verify that converting "),Xn=new g(!1),Yn=i(` to ten for 1234,
is `),Zn=new g(!1),nt=i(`. Finally, we can use these ideas
to use the base `),tt=new g(!1),et=i(". Then 123 in base three would be "),at=new g(!1),st=i(`.

`),an=q("h3"),Gt=i("Removing Constraints"),_t=i(`
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, `),rt=new g(!1),ot=i(`, but in base 7. Then
the number F1 would be `),it=new g(!1),ht=i(`. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly `),lt=new g(!1),dt=R(),sn=q("h3"),Ut=i("Going further"),jt=i(`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),mt=new g(!1),ct=i(`. So a simple
number like 1234 would be

`),A(Z.$$.fragment),At=R(),bt=new g(!1),ft=R(),rn=q("h4"),Jt=i("References"),Ht=R(),on=q("ul"),wt=q("li"),A(Q.$$.fragment),this.h()},l(n){H(r.$$.fragment,n),d=_(n),l=F(n,"DEFINE",{key:!0,type:!0,content:!0}),S(l).forEach(e),c=_(n),w=F(n,"DEFINE",{key:!0,type:!0,content:!0}),S(w).forEach(e),T=_(n),y=F(n,"DEFINE",{key:!0,type:!0,content:!0}),S(y).forEach(e),f=_(n),W=F(n,"DEFINE",{key:!0,type:!0,content:!0}),S(W).forEach(e),x=h(n,`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),H(E.$$.fragment,n),$=h(n,`

or very simply `),s=p(n,!1),u=h(n,`. The same number in base 2
is `),o=p(n,!1),B=h(n,`. Which is written as:

`),H(j.$$.fragment,n),L=_(n),I=F(n,"H3",{});var t=S(I);hn=h(t,"Base Conversion"),t.forEach(e),nn=h(n,`
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

`),m=p(n,!1),C=h(n,`

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
`),ln=p(n,!1),dn=h(n,`. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

`),mn=p(n,!1),cn=h(n,`

which again, including the last quotient, gives us the base 7 number
`),bn=p(n,!1),fn=h(n,`.

`),H(V.$$.fragment,n),pt=h(n,`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),wn=p(n,!1),un=h(n,`, we use the digits 0 to
`),gn=p(n,!1),pn=h(n,` to represent the number, with the obvious exception of 0.

`),tn=F(n,"H3",{});var ut=S(tn);Dt=h(ut,"Rational Bases"),ut.forEach(e),yt=h(n,`
While we did say for a given base `),yn=p(n,!1),vn=h(n," we use the digits 0 to "),$n=p(n,!1),xn=h(n,`, we'll
slightly modify this to say we'll use the digits 0 to `),Tn=p(n,!1),En=h(n,` for a base
`),Wn=p(n,!1),Bn=h(n,`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),H(K.$$.fragment,n),vt=h(n,`
The above number is read as `),kn=p(n,!1),Sn=h(n,`. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single-part fractions,
i.e. `),Cn=p(n,!1),In=h(n,`, we can even flip around the traditional positive power
numbers around the decimal point.

`),H(P.$$.fragment,n),$t=h(n,`

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form `),Nn=p(n,!1),qn=h(n,"? So, say how we write 265 in base "),Fn=p(n,!1),Rn=h(n,`.

`),_n=p(n,!1),jn=h(n,`

So very simply `),An=p(n,!1),Hn=h(n,`. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base `),Mn=p(n,!1),On=h(n,` also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
`),xt=F(n,"BR",{}),Tt=_(n),Et=F(n,"BR",{}),Wt=h(n,`
Th, however, also means that we will be using the same digits 0 to 6 for `),zn=p(n,!1),Dn=h(n,`
also, which is natural considering that for fractions <1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the decimal point.

`),en=F(n,"H3",{});var gt=S(en);Lt=h(gt,"Irrational and Transcendental Bases"),gt.forEach(e),Bt=h(n,`
The easiest to start with is an 'nth' root base, such as `),Ln=p(n,!1),Gn=h(n,`. This
should be related to being in base 5. So consider 42 in base 5, or `),kt=h(n,Vt),St=h(n,` in base 10. We can very easily first write

`),H(X.$$.fragment,n),Ct=_(n),H(Y.$$.fragment,n),It=h(n,`

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),Un=p(n,!1),Jn=h(n,` are the standard place values
when we use five as our base.
`),Nt=F(n,"BR",{}),qt=_(n),Ft=F(n,"BR",{}),Rt=h(n,`
So now, if we were to create a new number 421 in base `),Pn=p(n,!1),Qn=h(n,`, it's
value would be `),Vn=p(n,!1),Kn=h(n,". Or as an exercise you can verify that converting "),Xn=p(n,!1),Yn=h(n,` to ten for 1234,
is `),Zn=p(n,!1),nt=h(n,`. Finally, we can use these ideas
to use the base `),tt=p(n,!1),et=h(n,". Then 123 in base three would be "),at=p(n,!1),st=h(n,`.

`),an=F(n,"H3",{});var Kt=S(an);Gt=h(Kt,"Removing Constraints"),Kt.forEach(e),_t=h(n,`
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, `),rt=p(n,!1),ot=h(n,`, but in base 7. Then
the number F1 would be `),it=p(n,!1),ht=h(n,`. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly `),lt=p(n,!1),dt=_(n),sn=F(n,"H3",{});var Xt=S(sn);Ut=h(Xt,"Going further"),Xt.forEach(e),jt=h(n,`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),mt=p(n,!1),ct=h(n,`. So a simple
number like 1234 would be

`),H(Z.$$.fragment,n),At=_(n),bt=p(n,!1),ft=_(n),rn=F(n,"H4",{});var Yt=S(rn);Jt=h(Yt,"References"),Yt.forEach(e),Ht=_(n),on=F(n,"UL",{});var Zt=S(on);wt=F(Zt,"LI",{});var ne=S(wt);H(Q.$$.fragment,ne),ne.forEach(e),Zt.forEach(e),this.h()},h(){v(l,"key","n"),v(l,"type","text"),v(l,"content","Variable. Usually positive integer"),v(w,"key","r"),v(w,"type","text"),v(w,"content","Remainder. Usually < divisor base"),v(y,"key","b"),v(y,"type","text"),v(y,"content","Base of number system"),v(W,"key","ω"),v(W,"type","wikipedia"),v(W,"content","Root_of_unity"),s.a=u,o.a=B,m.a=C,ln.a=dn,mn.a=cn,bn.a=fn,wn.a=un,gn.a=pn,yn.a=vn,$n.a=xn,Tn.a=En,Wn.a=Bn,kn.a=Sn,Cn.a=In,Nn.a=qn,Fn.a=Rn,_n.a=jn,An.a=Hn,Mn.a=On,zn.a=Dn,Ln.a=Gn,Un.a=Jn,Pn.a=Qn,Vn.a=Kn,Xn.a=Yn,Zn.a=nt,tt.a=et,at.a=st,rt.a=ot,it.a=ht,lt.a=dt,mt.a=ct,bt.a=ft},m(n,t){M(r,n,t),a(n,d,t),a(n,l,t),a(n,c,t),a(n,w,t),a(n,T,t),a(n,y,t),a(n,f,t),a(n,W,t),a(n,x,t),M(E,n,t),a(n,$,t),s.m(me,n,t),a(n,u,t),o.m(ce,n,t),a(n,B,t),M(j,n,t),a(n,L,t),a(n,I,t),N(I,hn),a(n,nn,t),m.m(be,n,t),a(n,C,t),ln.m(fe,n,t),a(n,dn,t),mn.m(we,n,t),a(n,cn,t),bn.m(ue,n,t),a(n,fn,t),M(V,n,t),a(n,pt,t),wn.m(ge,n,t),a(n,un,t),gn.m(pe,n,t),a(n,pn,t),a(n,tn,t),N(tn,Dt),a(n,yt,t),yn.m(ye,n,t),a(n,vn,t),$n.m(ve,n,t),a(n,xn,t),Tn.m($e,n,t),a(n,En,t),Wn.m(xe,n,t),a(n,Bn,t),M(K,n,t),a(n,vt,t),kn.m(Te,n,t),a(n,Sn,t),Cn.m(Ee,n,t),a(n,In,t),M(P,n,t),a(n,$t,t),Nn.m(We,n,t),a(n,qn,t),Fn.m(Be,n,t),a(n,Rn,t),_n.m(ke,n,t),a(n,jn,t),An.m(Se,n,t),a(n,Hn,t),Mn.m(Ce,n,t),a(n,On,t),a(n,xt,t),a(n,Tt,t),a(n,Et,t),a(n,Wt,t),zn.m(Ie,n,t),a(n,Dn,t),a(n,en,t),N(en,Lt),a(n,Bt,t),Ln.m(Ne,n,t),a(n,Gn,t),a(n,kt,t),a(n,St,t),M(X,n,t),a(n,Ct,t),M(Y,n,t),a(n,It,t),Un.m(qe,n,t),a(n,Jn,t),a(n,Nt,t),a(n,qt,t),a(n,Ft,t),a(n,Rt,t),Pn.m(Fe,n,t),a(n,Qn,t),Vn.m(Re,n,t),a(n,Kn,t),Xn.m(_e,n,t),a(n,Yn,t),Zn.m(je,n,t),a(n,nt,t),tt.m(Ae,n,t),a(n,et,t),at.m(He,n,t),a(n,st,t),a(n,an,t),N(an,Gt),a(n,_t,t),rt.m(Me,n,t),a(n,ot,t),it.m(Oe,n,t),a(n,ht,t),lt.m(ze,n,t),a(n,dt,t),a(n,sn,t),N(sn,Ut),a(n,jt,t),mt.m(De,n,t),a(n,ct,t),M(Z,n,t),a(n,At,t),bt.m(Le,n,t),a(n,ft,t),a(n,rn,t),N(rn,Jt),a(n,Ht,t),a(n,on,t),N(on,wt),M(Q,wt,null),Mt=!0},p(n,[t]){const ut={};2&t&&(ut.$$scope={dirty:t,ctx:n}),P.$set(ut);const gt={};2&t&&(gt.$$scope={dirty:t,ctx:n}),Q.$set(gt)},i(n){Mt||(O(r.$$.fragment,n),O(E.$$.fragment,n),O(j.$$.fragment,n),O(V.$$.fragment,n),O(K.$$.fragment,n),O(P.$$.fragment,n),O(X.$$.fragment,n),O(Y.$$.fragment,n),O(Z.$$.fragment,n),O(Q.$$.fragment,n),Mt=!0)},o(n){z(r.$$.fragment,n),z(E.$$.fragment,n),z(j.$$.fragment,n),z(V.$$.fragment,n),z(K.$$.fragment,n),z(P.$$.fragment,n),z(X.$$.fragment,n),z(Y.$$.fragment,n),z(Z.$$.fragment,n),z(Q.$$.fragment,n),Mt=!1},d(n){D(r,n),n&&e(d),n&&e(l),n&&e(c),n&&e(w),n&&e(T),n&&e(y),n&&e(f),n&&e(W),n&&e(x),D(E,n),n&&e($),n&&s.d(),n&&e(u),n&&o.d(),n&&e(B),D(j,n),n&&e(L),n&&e(I),n&&e(nn),n&&m.d(),n&&e(C),n&&ln.d(),n&&e(dn),n&&mn.d(),n&&e(cn),n&&bn.d(),n&&e(fn),D(V,n),n&&e(pt),n&&wn.d(),n&&e(un),n&&gn.d(),n&&e(pn),n&&e(tn),n&&e(yt),n&&yn.d(),n&&e(vn),n&&$n.d(),n&&e(xn),n&&Tn.d(),n&&e(En),n&&Wn.d(),n&&e(Bn),D(K,n),n&&e(vt),n&&kn.d(),n&&e(Sn),n&&Cn.d(),n&&e(In),D(P,n),n&&e($t),n&&Nn.d(),n&&e(qn),n&&Fn.d(),n&&e(Rn),n&&_n.d(),n&&e(jn),n&&An.d(),n&&e(Hn),n&&Mn.d(),n&&e(On),n&&e(xt),n&&e(Tt),n&&e(Et),n&&e(Wt),n&&zn.d(),n&&e(Dn),n&&e(en),n&&e(Bt),n&&Ln.d(),n&&e(Gn),n&&e(kt),n&&e(St),D(X,n),n&&e(Ct),D(Y,n),n&&e(It),n&&Un.d(),n&&e(Jn),n&&e(Nt),n&&e(qt),n&&e(Ft),n&&e(Rt),n&&Pn.d(),n&&e(Qn),n&&Vn.d(),n&&e(Kn),n&&Xn.d(),n&&e(Yn),n&&Zn.d(),n&&e(nt),n&&tt.d(),n&&e(et),n&&at.d(),n&&e(st),n&&e(an),n&&e(_t),n&&rt.d(),n&&e(ot),n&&it.d(),n&&e(ht),n&&lt.d(),n&&e(dt),n&&e(sn),n&&e(jt),n&&mt.d(),n&&e(ct),D(Z,n),n&&e(At),n&&bt.d(),n&&e(ft),n&&e(rn),n&&e(Ht),n&&e(on),D(Q)}}}function ie(b,r){return b.toString(r).toUpperCase()}function Ye(b){return[function(r=[],d=-2,l="",c=""){r.reverse(),c.length===0&&(c=d.toString());let w="",T="";for(let y=0;y<r.length;y++){let f=r[y];w=`${f} \\cdot (${c})^${y}`+(w.length>0?" + ":"")+w,typeof d!="object"&&(T=`${f} \\cdot (${Math.pow(d,y).toFixed(2)}`+(T.length>0?" + ":"")+T)}return T.length>1&&(T="= "+T),k`${w} ${T} ${l}`}]}class aa extends he{constructor(r){super(),le(this,r,Ye,Xe,de,{})}}export{aa as default};
