import{S as ne,i as te,s as ee,e as R,C as U,f as _,h as I,D as J,k as e,l as S,m as a,n as j,o as _t,p as kt,d as i,j as h,w as Ot,H as g,r as G,z as p,v as L,x as N,y as H,A,t as F,b as M,B as k}from"../../../../chunks/index-166e8620.js";import{A as Ae}from"../../../../chunks/accord-ad5fd7e4.js";import{_ as Rt,a as B,M as Fe}from"../../../../chunks/meta-682270cc.js";import{L as Me}from"../../../../chunks/link-2c8c9ede.js";function Dt(f,s,d){const l=f.slice();return l[5]=s[d],l[7]=d,l}function Qt(f,s,d){const l=f.slice();return l[5]=s[d],l[7]=d,l}function Kt(f,s,d){const l=f.slice();return l[9]=s[d],l[7]=d,l}function Vt(f){let s,d,l=f[9]+"";return{c(){s=U("tspan"),d=i(l),this.h()},l(b){s=J(b,"tspan",{x:!0,y:!0});var w=I(s);d=h(w,l),w.forEach(e),this.h()},h(){S(s,"x",15+30*f[7]),S(s,"y","25")},m(b,w){a(b,s,w),j(s,d)},p(b,w){2&w&&l!==(l=b[9]+"")&&Ot(d,l)},d(b){b&&e(s)}}}function Xt(f){let s,d;return{c(){s=U("tspan"),d=i("―"),this.h()},l(l){s=J(l,"tspan",{x:!0,y:!0});var b=I(s);d=h(b,"―"),b.forEach(e),this.h()},h(){S(s,"x",10+30*f[7]),S(s,"y","45")},m(l,b){a(l,s,b),j(s,d)},p:_t,d(l){l&&e(s)}}}function Yt(f){let s,d,l,b,w,v,y,c,E,$,T=f[1].length-f[7]+"",x=f[1].length-f[7]-f[2]+"";return{c(){s=U("tspan"),d=i("("),l=new g(!0),b=i(")"),w=U("sup"),v=i(T),y=G(),c=U("tspan"),E=i(x),this.h()},l(r){s=J(r,"tspan",{x:!0,y:!0});var u=I(s);d=h(u,"("),l=p(u,!0),b=h(u,")"),w=J(u,"sup",{});var o=I(w);v=h(o,T),o.forEach(e),u.forEach(e),y=L(r),c=J(r,"tspan",{x:!0,y:!0});var W=I(c);E=h(W,x),W.forEach(e),this.h()},h(){l.a=b,S(s,"x",10+30*f[7]),S(s,"y","65"),S(c,"x",$=f[3]+30*f[7]),S(c,"y","60")},m(r,u){a(r,s,u),j(s,d),l.m(f[0],s),j(s,b),j(s,w),j(w,v),a(r,y,u),a(r,c,u),j(c,E)},p(r,u){1&u&&l.p(r[0]),2&u&&T!==(T=r[1].length-r[7]+"")&&Ot(v,T),6&u&&x!==(x=r[1].length-r[7]-r[2]+"")&&Ot(E,x),8&u&&$!==($=r[3]+30*r[7])&&S(c,"x",$)},d(r){r&&e(s),r&&e(y),r&&e(c)}}}function ke(f){let s,d,l,b,w,v,y=f[1],c=[];for(let r=0;r<y.length;r+=1)c[r]=Vt(Kt(f,y,r));let E=f[1],$=[];for(let r=0;r<E.length;r+=1)$[r]=Xt(Qt(f,E,r));let T=f[1],x=[];for(let r=0;r<T.length;r+=1)x[r]=Yt(Dt(f,T,r));return{c(){s=R("p"),d=U("svg"),l=U("text");for(let r=0;r<c.length;r+=1)c[r].c();b=U("text");for(let r=0;r<$.length;r+=1)$[r].c();w=U("text");for(let r=0;r<x.length;r+=1)x[r].c();this.h()},l(r){s=_(r,"P",{class:!0});var u=I(s);d=J(u,"svg",{width:!0,height:!0,"font-family":!0,"font-weight":!0,"font-size":!0});var o=I(d);l=J(o,"text",{x:!0,y:!0});var W=I(l);for(let q=0;q<c.length;q+=1)c[q].l(W);W.forEach(e),b=J(o,"text",{x:!0,y:!0});var O=I(b);for(let q=0;q<$.length;q+=1)$[q].l(O);O.forEach(e),w=J(o,"text",{x:!0,y:!0,"font-size":!0});var z=I(w);for(let q=0;q<x.length;q+=1)x[q].l(z);z.forEach(e),o.forEach(e),u.forEach(e),this.h()},h(){S(l,"x","10"),S(l,"y","20"),S(b,"x","10"),S(b,"y","45"),S(w,"x","10"),S(w,"y","70"),S(w,"font-size","12"),S(d,"width",v=15+30*f[1].length),S(d,"height","80"),S(d,"font-family","sans-serif"),S(d,"font-weight","300"),S(d,"font-size","24"),S(s,"class","w-100 tc")},m(r,u){a(r,s,u),j(s,d),j(d,l);for(let o=0;o<c.length;o+=1)c[o].m(l,null);j(d,b);for(let o=0;o<$.length;o+=1)$[o].m(b,null);j(d,w);for(let o=0;o<x.length;o+=1)x[o].m(w,null)},p(r,[u]){if(2&u){let o;for(y=r[1],o=0;o<y.length;o+=1){const W=Kt(r,y,o);c[o]?c[o].p(W,u):(c[o]=Vt(W),c[o].c(),c[o].m(l,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=y.length}if(2&u){let o;for(E=r[1],o=0;o<E.length;o+=1){const W=Qt(r,E,o);$[o]?$[o].p(W,u):($[o]=Xt(W),$[o].c(),$[o].m(b,null))}for(;o<$.length;o+=1)$[o].d(1);$.length=E.length}if(15&u){let o;for(T=r[1],o=0;o<T.length;o+=1){const W=Dt(r,T,o);x[o]?x[o].p(W,u):(x[o]=Yt(W),x[o].c(),x[o].m(w,null))}for(;o<x.length;o+=1)x[o].d(1);x.length=T.length}2&u&&v!==(v=15+30*r[1].length)&&S(d,"width",v)},i:_t,o:_t,d(r){r&&e(s),kt(c,r),kt($,r),kt(x,r)}}}function Oe(f,s,d){let{top:l=[]}=s,{base:b=10}=s,{base_str:w}=s;if(typeof b!="number")throw new Error("Base must be a number");let v=1;l.includes(".")&&(v=l.length-l.indexOf("."));let y=30;return b<=9&&b>=2&&b%1==0&&(y=24),w||(w=b.toString()),f.$$set=c=>{"top"in c&&d(1,l=c.top),"base"in c&&d(4,b=c.base),"base_str"in c&&d(0,w=c.base_str)},[w,l,v,y,b]}class P extends ne{constructor(s){super(),te(this,s,Oe,ke,ee,{top:1,base:4,base_str:0})}}function ze(f){let s,d,l,b,w,v,y,c,E,$,T,x,r,u,o,W,O=Rt`
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
  `+"",z=B`\\frac1n`+"",q=B`b`+"",K=B`|b|-1`+"",V=B`\\frac1b`+"";return b=new P({props:{top:[1,1,1,1,".",0,0,1],base:2}}),c=new P({props:{top:[1,0,0,1,".",1,1,1],base:.5,base_str:"½"}}),{c(){s=i(`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    `),d=new g(!1),l=i(`

    Or,

    `),N(b.$$.fragment),w=i(`

    To obtain the same result, follow the same process with the base `),v=new g(!1),y=i(`.
    We can see efficiently, all that needs to be done is to rotate everything
    around the decimal point

    `),N(c.$$.fragment),E=i(`

    Just as before, the way for base `),$=new g(!1),T=i(" we used digits 0 to "),x=new g(!1),r=i(`. For
    base `),u=new g(!1),o=i(" also we can do the same."),this.h()},l(m){s=h(m,`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    `),d=p(m,!1),l=h(m,`

    Or,

    `),H(b.$$.fragment,m),w=h(m,`

    To obtain the same result, follow the same process with the base `),v=p(m,!1),y=h(m,`.
    We can see efficiently, all that needs to be done is to rotate everything
    around the decimal point

    `),H(c.$$.fragment,m),E=h(m,`

    Just as before, the way for base `),$=p(m,!1),T=h(m," we used digits 0 to "),x=p(m,!1),r=h(m,`. For
    base `),u=p(m,!1),o=h(m," also we can do the same."),this.h()},h(){d.a=l,v.a=y,$.a=T,x.a=r,u.a=o},m(m,C){a(m,s,C),d.m(O,m,C),a(m,l,C),A(b,m,C),a(m,w,C),v.m(z,m,C),a(m,y,C),A(c,m,C),a(m,E,C),$.m(q,m,C),a(m,T,C),x.m(K,m,C),a(m,r,C),u.m(V,m,C),a(m,o,C),W=!0},p:_t,i(m){W||(F(b.$$.fragment,m),F(c.$$.fragment,m),W=!0)},o(m){M(b.$$.fragment,m),M(c.$$.fragment,m),W=!1},d(m){m&&e(s),m&&d.d(),m&&e(l),k(b,m),m&&e(w),m&&v.d(),m&&e(y),k(c,m),m&&e(E),m&&$.d(),m&&e(T),m&&x.d(),m&&e(r),m&&u.d(),m&&e(o)}}}function Ge(f){let s;return{c(){s=i("Can any Number be a Base? (video)")},l(d){s=h(d,"Can any Number be a Base? (video)")},m(d,l){a(d,s,l)},d(d){d&&e(s)}}}function Le(f){let s,d,l,b,w,v,y,c,E,$,T,x,r,u,o,W,O,z,q,K,V,m,C,hn,ln,mn,dn,tn,Nt,dt,bn,cn,fn,wn,un,gn,pn,vn,X,bt,yn,$n,xn,Tn,D,ct,Wn,En,Bn,Sn,Cn,qn,In,jn,Rn,_n,ft,wt,ut,gt,Nn,Hn,en,Ht,pt,An,Fn,vt,yt,Y,$t,Z,xt,Mn,kn,Tt,Wt,Et,Bt,On,zn,Gn,Ln,Pn,Un,Jn,Dn,Qn,Kn,Vn,Xn,an,At,St,Yn,Zn,nt,tt,et,at,sn,Ft,Ct,st,rt,nn,qt,ot,it,rn,Mt,It,on,ht,Q,jt,ae=f[0]([4,2,0],10,"")+"",se=f[0]([1,1,0,1,0,0,1,0,0],2,"")+"",re=Rt`
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
`+"",oe=Zt(420,2)+"",ie=Rt`
\\begin{align*}
  420 \\div 7 &= 60\\ &r\\ 0\\\\
  60 \\div 7 &= 8\\ &r\\ 4\\\\
  8 \\div 7 &= 1\\ &r\\ 1\\\\
\\end{align*}
`+"",he=Zt(420,7)+"",le=B`b`+"",me=B`b-1`+"",de=B`b`+"",be=B`b-1`+"",ce=B`|b|-1`+"",fe=B`b`+"",we=f[0]([1,1,1,0],-2,"= -6")+"",ue=B`\\frac1n`+"",ge=B`\\frac1n`+"",pe=B`\\frac73`+"",ve=Rt`
\\begin{align*}
  265 \\div 7 &= 37\\ &r\\ 6, 37 \\times 3 &= 111\\\\
  111 \\div 7 &= 15\\ &r\\ 6, 15 \\times 3 &= 45\\\\
  45 \\div 7 &= 6\\ &r\\ 3, 6 \\times 3 &= 18\\\\
  18 \\div 7 &= 2\\ &r\\ 4, 2 \\times 3 &= 6\\\\
  6 \\div 7 &= 0\\ &r\\ 6, 0 \\times 3 &= 0\\\\
\\end{align*}
`+"",ye=f[0]([6,4,3,6,6],7/3,"\\approx 265","\\frac73")+"",$e=B`\\frac37`+"",xe=B`\\frac37`+"",Te=B`\\sqrt[4]{5}`+"",zt=parseInt("42",5)+"",We=B`(\\sqrt[4]5)^{2n}`+"",Ee=B`\\sqrt[4]{5}`+"",Be=f[0]([1,2,4,2,1],Math.pow(5,.25),"= 24.622 \\Leftrightarrow [6 + 2 \\times 5^{\\frac34} + 4 \\times 5^{\\frac24} + 2 \\times 5^{\\frac14}]","\\sqrt[4]{5}")+"",Se=B`\\sqrt{5}`+"",Ce=B`[1234]_{\\sqrt5} = [14 + 8 \\sqrt5]_{10}`+"",qe=B`\\pi`+"",Ie=f[0]([1,2,3],3.1415926535,"\\approx 19.15","\\pi")+"",je=B`[0 \\rightarrow 9, A \\rightarrow F]`+"",Re=f[0]([15,1],7,"= 106_{10}")+"",_e=f[0]([7,9,10,4,5],2,"= 237")+"",Ne=B`\\omega = \\frac{-1}2 + \\frac{i\\sqrt3}2`+"",He=f[0]([1,2,3,4],[-.5,Math.sqrt(3)/2],"= 5 + 3 \\omega + 2\\omega^2.","ω")+"";return s=new Fe({props:{title:"Going to 3.14th base",sub:"Recreational Math #002",desc:"Bases other than positive integers",date:"29 May 2025"}}),l=new P({props:{top:[4,2,0]}}),E=new P({props:{top:[1,1,0,1,0,0,1,0,0],base:2}}),m=new P({props:{top:[1,1,4,0],base:7}}),X=new P({props:{top:[1,1,1,0],base:-2}}),D=new Ae({props:{title:"Base ½ example",$$slots:{default:[ze]},$$scope:{ctx:f}}}),Y=new P({props:{top:[4,0,0,0,2,0,0,0,0],base:Math.pow(5,.25),base_str:"∜5"}}),Z=new P({props:{top:[4,2],base:5}}),nn=new P({props:{top:[1,2,3,4],base:5,base_str:"ω"}}),Q=new Me({props:{href:"https://www.youtube.com/watch?v=PQAhC1M93C8",$$slots:{default:[Ge]},$$scope:{ctx:f}}}),{c(){N(s.$$.fragment),d=i(`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),N(l.$$.fragment),b=i(`

or very simply `),w=new g(!1),v=i(`. The same number in base 2
is `),y=new g(!1),c=i(`. Which is written as:

`),N(E.$$.fragment),$=G(),T=R("h3"),x=i("Base Conversion"),r=i(`
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

`),u=new g(!1),o=i(`

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
`),W=new g(!1),O=i(`. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

`),z=new g(!1),q=i(`

which again, including the last quotient, gives us the base 7 number
`),K=new g(!1),V=i(`.

`),N(m.$$.fragment),C=i(`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),hn=new g(!1),ln=i(`, we use the digits 0 to
`),mn=new g(!1),dn=i(` to represent the number, with the obvious exception of 0.

`),tn=R("h3"),Nt=i("Rational Bases"),dt=i(`
While we did say for a given base `),bn=new g(!1),cn=i(" we use the digits 0 to "),fn=new g(!1),wn=i(`, we'll
slightly modify this to say we'll use the digits 0 to `),un=new g(!1),gn=i(` for a base
`),pn=new g(!1),vn=i(`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),N(X.$$.fragment),bt=i(`
The above number is read as `),yn=new g(!1),$n=i(`. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single-part fractions,
i.e. `),xn=new g(!1),Tn=i(`, we can even flip around the traditional positive power
numbers around the decimal point.

`),N(D.$$.fragment),ct=i(`

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form `),Wn=new g(!1),En=i("? So, say how we write 265 in base "),Bn=new g(!1),Sn=i(`.

`),Cn=new g(!1),qn=i(`

So very simply `),In=new g(!1),jn=i(`. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base `),Rn=new g(!1),_n=i(` also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
`),ft=R("br"),wt=G(),ut=R("br"),gt=i(`
Th, however, also means that we will be using the same digits 0 to 6 for `),Nn=new g(!1),Hn=i(`
also, which is natural considering that for fractions <1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the decimal point.

`),en=R("h3"),Ht=i("Irrational and Transcendental Bases"),pt=i(`
The easiest to start with is an 'nth' root base, such as `),An=new g(!1),Fn=i(`. This
should be related to being in base 5. So consider 42 in base 5, or `),vt=i(zt),yt=i(` in base 10. We can very easily first write

`),N(Y.$$.fragment),$t=G(),N(Z.$$.fragment),xt=i(`

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),Mn=new g(!1),kn=i(` are the standard place values
when we use five as our base.
`),Tt=R("br"),Wt=G(),Et=R("br"),Bt=i(`
So now, if we were to create a new number 421 in base `),On=new g(!1),zn=i(`, it's
value would be `),Gn=new g(!1),Ln=i(". Or as an exercise you can verify that converting "),Pn=new g(!1),Un=i(` to ten for 1234,
is `),Jn=new g(!1),Dn=i(`. Finally, we can use these ideas
to use the base `),Qn=new g(!1),Kn=i(". Then 123 in base three would be "),Vn=new g(!1),Xn=i(`.

`),an=R("h3"),At=i("Removing Constraints"),St=i(`
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, `),Yn=new g(!1),Zn=i(`, but in base 7. Then
the number F1 would be `),nt=new g(!1),tt=i(`. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly `),et=new g(!1),at=G(),sn=R("h3"),Ft=i("Going further"),Ct=i(`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),st=new g(!1),rt=i(`. So a simple
number like 1234 would be

`),N(nn.$$.fragment),qt=G(),ot=new g(!1),it=G(),rn=R("h4"),Mt=i("References"),It=G(),on=R("ul"),ht=R("li"),N(Q.$$.fragment),this.h()},l(n){H(s.$$.fragment,n),d=h(n,`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),H(l.$$.fragment,n),b=h(n,`

or very simply `),w=p(n,!1),v=h(n,`. The same number in base 2
is `),y=p(n,!1),c=h(n,`. Which is written as:

`),H(E.$$.fragment,n),$=L(n),T=_(n,"H3",{});var t=I(T);x=h(t,"Base Conversion"),t.forEach(e),r=h(n,`
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

`),u=p(n,!1),o=h(n,`

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
`),W=p(n,!1),O=h(n,`. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

`),z=p(n,!1),q=h(n,`

which again, including the last quotient, gives us the base 7 number
`),K=p(n,!1),V=h(n,`.

`),H(m.$$.fragment,n),C=h(n,`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),hn=p(n,!1),ln=h(n,`, we use the digits 0 to
`),mn=p(n,!1),dn=h(n,` to represent the number, with the obvious exception of 0.

`),tn=_(n,"H3",{});var lt=I(tn);Nt=h(lt,"Rational Bases"),lt.forEach(e),dt=h(n,`
While we did say for a given base `),bn=p(n,!1),cn=h(n," we use the digits 0 to "),fn=p(n,!1),wn=h(n,`, we'll
slightly modify this to say we'll use the digits 0 to `),un=p(n,!1),gn=h(n,` for a base
`),pn=p(n,!1),vn=h(n,`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),H(X.$$.fragment,n),bt=h(n,`
The above number is read as `),yn=p(n,!1),$n=h(n,`. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single-part fractions,
i.e. `),xn=p(n,!1),Tn=h(n,`, we can even flip around the traditional positive power
numbers around the decimal point.

`),H(D.$$.fragment,n),ct=h(n,`

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form `),Wn=p(n,!1),En=h(n,"? So, say how we write 265 in base "),Bn=p(n,!1),Sn=h(n,`.

`),Cn=p(n,!1),qn=h(n,`

So very simply `),In=p(n,!1),jn=h(n,`. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base `),Rn=p(n,!1),_n=h(n,` also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
`),ft=_(n,"BR",{}),wt=L(n),ut=_(n,"BR",{}),gt=h(n,`
Th, however, also means that we will be using the same digits 0 to 6 for `),Nn=p(n,!1),Hn=h(n,`
also, which is natural considering that for fractions <1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the decimal point.

`),en=_(n,"H3",{});var mt=I(en);Ht=h(mt,"Irrational and Transcendental Bases"),mt.forEach(e),pt=h(n,`
The easiest to start with is an 'nth' root base, such as `),An=p(n,!1),Fn=h(n,`. This
should be related to being in base 5. So consider 42 in base 5, or `),vt=h(n,zt),yt=h(n,` in base 10. We can very easily first write

`),H(Y.$$.fragment,n),$t=L(n),H(Z.$$.fragment,n),xt=h(n,`

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),Mn=p(n,!1),kn=h(n,` are the standard place values
when we use five as our base.
`),Tt=_(n,"BR",{}),Wt=L(n),Et=_(n,"BR",{}),Bt=h(n,`
So now, if we were to create a new number 421 in base `),On=p(n,!1),zn=h(n,`, it's
value would be `),Gn=p(n,!1),Ln=h(n,". Or as an exercise you can verify that converting "),Pn=p(n,!1),Un=h(n,` to ten for 1234,
is `),Jn=p(n,!1),Dn=h(n,`. Finally, we can use these ideas
to use the base `),Qn=p(n,!1),Kn=h(n,". Then 123 in base three would be "),Vn=p(n,!1),Xn=h(n,`.

`),an=_(n,"H3",{});var Gt=I(an);At=h(Gt,"Removing Constraints"),Gt.forEach(e),St=h(n,`
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, `),Yn=p(n,!1),Zn=h(n,`, but in base 7. Then
the number F1 would be `),nt=p(n,!1),tt=h(n,`. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly `),et=p(n,!1),at=L(n),sn=_(n,"H3",{});var Lt=I(sn);Ft=h(Lt,"Going further"),Lt.forEach(e),Ct=h(n,`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),st=p(n,!1),rt=h(n,`. So a simple
number like 1234 would be

`),H(nn.$$.fragment,n),qt=L(n),ot=p(n,!1),it=L(n),rn=_(n,"H4",{});var Pt=I(rn);Mt=h(Pt,"References"),Pt.forEach(e),It=L(n),on=_(n,"UL",{});var Ut=I(on);ht=_(Ut,"LI",{});var Jt=I(ht);H(Q.$$.fragment,Jt),Jt.forEach(e),Ut.forEach(e),this.h()},h(){w.a=v,y.a=c,u.a=o,W.a=O,z.a=q,K.a=V,hn.a=ln,mn.a=dn,bn.a=cn,fn.a=wn,un.a=gn,pn.a=vn,yn.a=$n,xn.a=Tn,Wn.a=En,Bn.a=Sn,Cn.a=qn,In.a=jn,Rn.a=_n,Nn.a=Hn,An.a=Fn,Mn.a=kn,On.a=zn,Gn.a=Ln,Pn.a=Un,Jn.a=Dn,Qn.a=Kn,Vn.a=Xn,Yn.a=Zn,nt.a=tt,et.a=at,st.a=rt,ot.a=it},m(n,t){A(s,n,t),a(n,d,t),A(l,n,t),a(n,b,t),w.m(ae,n,t),a(n,v,t),y.m(se,n,t),a(n,c,t),A(E,n,t),a(n,$,t),a(n,T,t),j(T,x),a(n,r,t),u.m(re,n,t),a(n,o,t),W.m(oe,n,t),a(n,O,t),z.m(ie,n,t),a(n,q,t),K.m(he,n,t),a(n,V,t),A(m,n,t),a(n,C,t),hn.m(le,n,t),a(n,ln,t),mn.m(me,n,t),a(n,dn,t),a(n,tn,t),j(tn,Nt),a(n,dt,t),bn.m(de,n,t),a(n,cn,t),fn.m(be,n,t),a(n,wn,t),un.m(ce,n,t),a(n,gn,t),pn.m(fe,n,t),a(n,vn,t),A(X,n,t),a(n,bt,t),yn.m(we,n,t),a(n,$n,t),xn.m(ue,n,t),a(n,Tn,t),A(D,n,t),a(n,ct,t),Wn.m(ge,n,t),a(n,En,t),Bn.m(pe,n,t),a(n,Sn,t),Cn.m(ve,n,t),a(n,qn,t),In.m(ye,n,t),a(n,jn,t),Rn.m($e,n,t),a(n,_n,t),a(n,ft,t),a(n,wt,t),a(n,ut,t),a(n,gt,t),Nn.m(xe,n,t),a(n,Hn,t),a(n,en,t),j(en,Ht),a(n,pt,t),An.m(Te,n,t),a(n,Fn,t),a(n,vt,t),a(n,yt,t),A(Y,n,t),a(n,$t,t),A(Z,n,t),a(n,xt,t),Mn.m(We,n,t),a(n,kn,t),a(n,Tt,t),a(n,Wt,t),a(n,Et,t),a(n,Bt,t),On.m(Ee,n,t),a(n,zn,t),Gn.m(Be,n,t),a(n,Ln,t),Pn.m(Se,n,t),a(n,Un,t),Jn.m(Ce,n,t),a(n,Dn,t),Qn.m(qe,n,t),a(n,Kn,t),Vn.m(Ie,n,t),a(n,Xn,t),a(n,an,t),j(an,At),a(n,St,t),Yn.m(je,n,t),a(n,Zn,t),nt.m(Re,n,t),a(n,tt,t),et.m(_e,n,t),a(n,at,t),a(n,sn,t),j(sn,Ft),a(n,Ct,t),st.m(Ne,n,t),a(n,rt,t),A(nn,n,t),a(n,qt,t),ot.m(He,n,t),a(n,it,t),a(n,rn,t),j(rn,Mt),a(n,It,t),a(n,on,t),j(on,ht),A(Q,ht,null),jt=!0},p(n,[t]){const lt={};2&t&&(lt.$$scope={dirty:t,ctx:n}),D.$set(lt);const mt={};2&t&&(mt.$$scope={dirty:t,ctx:n}),Q.$set(mt)},i(n){jt||(F(s.$$.fragment,n),F(l.$$.fragment,n),F(E.$$.fragment,n),F(m.$$.fragment,n),F(X.$$.fragment,n),F(D.$$.fragment,n),F(Y.$$.fragment,n),F(Z.$$.fragment,n),F(nn.$$.fragment,n),F(Q.$$.fragment,n),jt=!0)},o(n){M(s.$$.fragment,n),M(l.$$.fragment,n),M(E.$$.fragment,n),M(m.$$.fragment,n),M(X.$$.fragment,n),M(D.$$.fragment,n),M(Y.$$.fragment,n),M(Z.$$.fragment,n),M(nn.$$.fragment,n),M(Q.$$.fragment,n),jt=!1},d(n){k(s,n),n&&e(d),k(l,n),n&&e(b),n&&w.d(),n&&e(v),n&&y.d(),n&&e(c),k(E,n),n&&e($),n&&e(T),n&&e(r),n&&u.d(),n&&e(o),n&&W.d(),n&&e(O),n&&z.d(),n&&e(q),n&&K.d(),n&&e(V),k(m,n),n&&e(C),n&&hn.d(),n&&e(ln),n&&mn.d(),n&&e(dn),n&&e(tn),n&&e(dt),n&&bn.d(),n&&e(cn),n&&fn.d(),n&&e(wn),n&&un.d(),n&&e(gn),n&&pn.d(),n&&e(vn),k(X,n),n&&e(bt),n&&yn.d(),n&&e($n),n&&xn.d(),n&&e(Tn),k(D,n),n&&e(ct),n&&Wn.d(),n&&e(En),n&&Bn.d(),n&&e(Sn),n&&Cn.d(),n&&e(qn),n&&In.d(),n&&e(jn),n&&Rn.d(),n&&e(_n),n&&e(ft),n&&e(wt),n&&e(ut),n&&e(gt),n&&Nn.d(),n&&e(Hn),n&&e(en),n&&e(pt),n&&An.d(),n&&e(Fn),n&&e(vt),n&&e(yt),k(Y,n),n&&e($t),k(Z,n),n&&e(xt),n&&Mn.d(),n&&e(kn),n&&e(Tt),n&&e(Wt),n&&e(Et),n&&e(Bt),n&&On.d(),n&&e(zn),n&&Gn.d(),n&&e(Ln),n&&Pn.d(),n&&e(Un),n&&Jn.d(),n&&e(Dn),n&&Qn.d(),n&&e(Kn),n&&Vn.d(),n&&e(Xn),n&&e(an),n&&e(St),n&&Yn.d(),n&&e(Zn),n&&nt.d(),n&&e(tt),n&&et.d(),n&&e(at),n&&e(sn),n&&e(Ct),n&&st.d(),n&&e(rt),k(nn,n),n&&e(qt),n&&ot.d(),n&&e(it),n&&e(rn),n&&e(It),n&&e(on),k(Q)}}}function Zt(f,s){return f.toString(s).toUpperCase()}function Pe(f){return[function(s=[],d=-2,l="",b=""){s.reverse(),b.length===0&&(b=d.toString());let w="",v="";for(let y=0;y<s.length;y++){let c=s[y];w=`${c} \\cdot (${b})^${y}`+(w.length>0?" + ":"")+w,typeof d!="object"&&(v=`${c} \\cdot (${Math.pow(d,y).toFixed(2)}`+(v.length>0?" + ":"")+v)}return v.length>1&&(v="= "+v),B`${w} ${v} ${l}`}]}class Ke extends ne{constructor(s){super(),te(this,s,Pe,Le,ee,{})}}export{Ke as default};
