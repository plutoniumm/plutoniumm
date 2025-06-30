import{S as ne,i as te,s as ee,e as R,C as U,f as _,h as I,D as J,k as e,l as W,m as a,n as N,o as _t,p as kt,d as i,j as h,w as Ot,H as g,r as G,z as p,v as L,x as j,y as H,A,t as F,b as M,B as k}from"../../../../chunks/index-166e8620.js";import{A as Ae}from"../../../../chunks/accord-ad5fd7e4.js";import{_ as Rt,a as C,M as Fe}from"../../../../chunks/meta-682270cc.js";import{L as Me}from"../../../../chunks/link-2c8c9ede.js";function Dt(w,s,m){const l=w.slice();return l[5]=s[m],l[7]=m,l}function Qt(w,s,m){const l=w.slice();return l[5]=s[m],l[7]=m,l}function Kt(w,s,m){const l=w.slice();return l[9]=s[m],l[7]=m,l}function Vt(w){let s,m,l=w[9]+"";return{c(){s=U("tspan"),m=i(l),this.h()},l(b){s=J(b,"tspan",{x:!0,y:!0});var f=I(s);m=h(f,l),f.forEach(e),this.h()},h(){W(s,"x",15+30*w[7]),W(s,"y","25")},m(b,f){a(b,s,f),N(s,m)},p(b,f){2&f&&l!==(l=b[9]+"")&&Ot(m,l)},d(b){b&&e(s)}}}function Xt(w){let s,m;return{c(){s=U("tspan"),m=i("―"),this.h()},l(l){s=J(l,"tspan",{x:!0,y:!0});var b=I(s);m=h(b,"―"),b.forEach(e),this.h()},h(){W(s,"x",10+30*w[7]),W(s,"y","45")},m(l,b){a(l,s,b),N(s,m)},p:_t,d(l){l&&e(s)}}}function Yt(w){let s,m,l,b,f,v,y,c,B,$,T=w[1].length-w[7]+"",x=w[1].length-w[7]-w[2]+"";return{c(){s=U("tspan"),m=i("("),l=new g(!0),b=i(")"),f=U("sup"),v=i(T),y=G(),c=U("tspan"),B=i(x),this.h()},l(r){s=J(r,"tspan",{x:!0,y:!0});var u=I(s);m=h(u,"("),l=p(u,!0),b=h(u,")"),f=J(u,"sup",{});var o=I(f);v=h(o,T),o.forEach(e),u.forEach(e),y=L(r),c=J(r,"tspan",{x:!0,y:!0});var E=I(c);B=h(E,x),E.forEach(e),this.h()},h(){l.a=b,W(s,"x",10+30*w[7]),W(s,"y","65"),W(c,"x",$=w[3]+30*w[7]),W(c,"y","60")},m(r,u){a(r,s,u),N(s,m),l.m(w[0],s),N(s,b),N(s,f),N(f,v),a(r,y,u),a(r,c,u),N(c,B)},p(r,u){1&u&&l.p(r[0]),2&u&&T!==(T=r[1].length-r[7]+"")&&Ot(v,T),6&u&&x!==(x=r[1].length-r[7]-r[2]+"")&&Ot(B,x),8&u&&$!==($=r[3]+30*r[7])&&W(c,"x",$)},d(r){r&&e(s),r&&e(y),r&&e(c)}}}function ke(w){let s,m,l,b,f,v,y=w[1],c=[];for(let r=0;r<y.length;r+=1)c[r]=Vt(Kt(w,y,r));let B=w[1],$=[];for(let r=0;r<B.length;r+=1)$[r]=Xt(Qt(w,B,r));let T=w[1],x=[];for(let r=0;r<T.length;r+=1)x[r]=Yt(Dt(w,T,r));return{c(){s=R("p"),m=U("svg"),l=U("text");for(let r=0;r<c.length;r+=1)c[r].c();b=U("text");for(let r=0;r<$.length;r+=1)$[r].c();f=U("text");for(let r=0;r<x.length;r+=1)x[r].c();this.h()},l(r){s=_(r,"P",{class:!0});var u=I(s);m=J(u,"svg",{width:!0,height:!0,"font-family":!0,"font-weight":!0,"font-size":!0});var o=I(m);l=J(o,"text",{x:!0,y:!0});var E=I(l);for(let q=0;q<c.length;q+=1)c[q].l(E);E.forEach(e),b=J(o,"text",{x:!0,y:!0});var O=I(b);for(let q=0;q<$.length;q+=1)$[q].l(O);O.forEach(e),f=J(o,"text",{x:!0,y:!0,"font-size":!0});var z=I(f);for(let q=0;q<x.length;q+=1)x[q].l(z);z.forEach(e),o.forEach(e),u.forEach(e),this.h()},h(){W(l,"x","10"),W(l,"y","20"),W(b,"x","10"),W(b,"y","45"),W(f,"x","10"),W(f,"y","70"),W(f,"font-size","12"),W(m,"width",v=15+30*w[1].length),W(m,"height","80"),W(m,"font-family","sans-serif"),W(m,"font-weight","300"),W(m,"font-size","24"),W(s,"class","w-100 tc")},m(r,u){a(r,s,u),N(s,m),N(m,l);for(let o=0;o<c.length;o+=1)c[o].m(l,null);N(m,b);for(let o=0;o<$.length;o+=1)$[o].m(b,null);N(m,f);for(let o=0;o<x.length;o+=1)x[o].m(f,null)},p(r,[u]){if(2&u){let o;for(y=r[1],o=0;o<y.length;o+=1){const E=Kt(r,y,o);c[o]?c[o].p(E,u):(c[o]=Vt(E),c[o].c(),c[o].m(l,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=y.length}if(2&u){let o;for(B=r[1],o=0;o<B.length;o+=1){const E=Qt(r,B,o);$[o]?$[o].p(E,u):($[o]=Xt(E),$[o].c(),$[o].m(b,null))}for(;o<$.length;o+=1)$[o].d(1);$.length=B.length}if(15&u){let o;for(T=r[1],o=0;o<T.length;o+=1){const E=Dt(r,T,o);x[o]?x[o].p(E,u):(x[o]=Yt(E),x[o].c(),x[o].m(f,null))}for(;o<x.length;o+=1)x[o].d(1);x.length=T.length}2&u&&v!==(v=15+30*r[1].length)&&W(m,"width",v)},i:_t,o:_t,d(r){r&&e(s),kt(c,r),kt($,r),kt(x,r)}}}function Oe(w,s,m){let{top:l=[]}=s,{base:b=10}=s,{base_str:f}=s;if(typeof b!="number")throw new Error("Base must be a number");let v=1;l.includes(".")&&(v=l.length-l.indexOf("."));let y=30;return b<=9&&b>=2&&b%1==0&&(y=24),f||(f=b.toString()),w.$$set=c=>{"top"in c&&m(1,l=c.top),"base"in c&&m(4,b=c.base),"base_str"in c&&m(0,f=c.base_str)},[f,l,v,y,b]}class P extends ne{constructor(s){super(),te(this,s,Oe,ke,ee,{top:1,base:4,base_str:0})}}function ze(w){let s,m,l,b,f,v,y,c,B,$,T,x,r,u,o,E,O=Rt`
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
  `+"",z=C`\\frac1n`+"",q=C`b`+"",K=C`|b|-1`+"",V=C`\\frac1b`+"";return b=new P({props:{top:[1,1,1,1,".",0,0,1],base:2}}),c=new P({props:{top:[1,0,0,1,".",1,1,1],base:.5,base_str:"½"}}),{c(){s=i(`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two same as before. We can do the left and right parts of
    the decimal seperately.

    `),m=new g(!1),l=i(`

    Or,

    `),j(b.$$.fragment),f=i(`

    Now to get the result the same process with base `),v=new g(!1),y=i(`. We can see
    easily all that needs to be done is to rotate everything around the decimal
    point

    `),j(c.$$.fragment),B=i(`

    Just as before, the way for base `),$=new g(!1),T=i(" we used digits 0 to "),x=new g(!1),r=i(`. For
    base `),u=new g(!1),o=i(" also we can do the same."),this.h()},l(d){s=h(d,`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two same as before. We can do the left and right parts of
    the decimal seperately.

    `),m=p(d,!1),l=h(d,`

    Or,

    `),H(b.$$.fragment,d),f=h(d,`

    Now to get the result the same process with base `),v=p(d,!1),y=h(d,`. We can see
    easily all that needs to be done is to rotate everything around the decimal
    point

    `),H(c.$$.fragment,d),B=h(d,`

    Just as before, the way for base `),$=p(d,!1),T=h(d," we used digits 0 to "),x=p(d,!1),r=h(d,`. For
    base `),u=p(d,!1),o=h(d," also we can do the same."),this.h()},h(){m.a=l,v.a=y,$.a=T,x.a=r,u.a=o},m(d,S){a(d,s,S),m.m(O,d,S),a(d,l,S),A(b,d,S),a(d,f,S),v.m(z,d,S),a(d,y,S),A(c,d,S),a(d,B,S),$.m(q,d,S),a(d,T,S),x.m(K,d,S),a(d,r,S),u.m(V,d,S),a(d,o,S),E=!0},p:_t,i(d){E||(F(b.$$.fragment,d),F(c.$$.fragment,d),E=!0)},o(d){M(b.$$.fragment,d),M(c.$$.fragment,d),E=!1},d(d){d&&e(s),d&&m.d(),d&&e(l),k(b,d),d&&e(f),d&&v.d(),d&&e(y),k(c,d),d&&e(B),d&&$.d(),d&&e(T),d&&x.d(),d&&e(r),d&&u.d(),d&&e(o)}}}function Ge(w){let s;return{c(){s=i("Can any Number be a Base? (video)")},l(m){s=h(m,"Can any Number be a Base? (video)")},m(m,l){a(m,s,l)},d(m){m&&e(s)}}}function Le(w){let s,m,l,b,f,v,y,c,B,$,T,x,r,u,o,E,O,z,q,K,V,d,S,hn,ln,dn,mn,tn,jt,mt,bn,cn,wn,fn,un,gn,pn,vn,X,bt,yn,$n,xn,Tn,D,ct,En,Bn,Cn,Wn,Sn,qn,In,Nn,Rn,_n,wt,ft,ut,gt,jn,Hn,en,Ht,pt,An,Fn,vt,yt,Y,$t,Z,xt,Mn,kn,Tt,Et,Bt,Ct,On,zn,Gn,Ln,Pn,Un,Jn,Dn,Qn,Kn,Vn,Xn,an,At,Wt,Yn,Zn,nt,tt,et,at,sn,Ft,St,st,rt,nn,qt,ot,it,rn,Mt,It,on,ht,Q,Nt,ae=w[0]([4,2,0],10,"")+"",se=w[0]([1,1,0,1,0,0,1,0,0],2,"")+"",re=Rt`
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
`+"",he=Zt(420,7)+"",le=C`b`+"",de=C`b-1`+"",me=C`b`+"",be=C`b-1`+"",ce=C`|b|-1`+"",we=C`b`+"",fe=w[0]([1,1,1,0],-2,"= -6")+"",ue=C`\\frac1n`+"",ge=C`\\frac1n`+"",pe=C`\\frac73`+"",ve=Rt`
\\begin{align*}
  265 \\div 7 &= 37\\ &r\\ 6, 37 \\times 3 &= 111\\\\
  111 \\div 7 &= 15\\ &r\\ 6, 15 \\times 3 &= 45\\\\
  45 \\div 7 &= 6\\ &r\\ 3, 6 \\times 3 &= 18\\\\
  18 \\div 7 &= 2\\ &r\\ 4, 2 \\times 3 &= 6\\\\
  6 \\div 7 &= 0\\ &r\\ 6, 0 \\times 3 &= 0\\\\
\\end{align*}
`+"",ye=w[0]([6,4,3,6,6],7/3,"\\approx 265","\\frac73")+"",$e=C`\\frac37`+"",xe=C`\\frac37`+"",Te=C`\\sqrt[4]{5}`+"",zt=parseInt("42",5)+"",Ee=C`(\\sqrt[4]5)^{2n}`+"",Be=C`\\sqrt[4]{5}`+"",Ce=w[0]([1,2,4,2,1],Math.pow(5,.25),"= 24.622 \\Leftrightarrow [6 + 2 \\times 5^{\\frac34} + 4 \\times 5^{\\frac24} + 2 \\times 5^{\\frac14}]","\\sqrt[4]{5}")+"",We=C`\\sqrt{5}`+"",Se=C`[1234]_{\\sqrt5} = [14 + 8 \\sqrt5]_{10}`+"",qe=C`\\pi`+"",Ie=w[0]([1,2,3],3.1415926535,"\\approx 19.15","\\pi")+"",Ne=C`[0 \\rightarrow 9, A \\rightarrow F]`+"",Re=w[0]([15,1],7,"= 106_{10}")+"",_e=w[0]([7,9,10,4,5],2,"= 237")+"",je=C`\\omega = \\frac{-1}2 + \\frac{i\\sqrt3}2`+"",He=w[0]([1,2,3,4],[-.5,Math.sqrt(3)/2],"= 5 + 3 \\omega + 2\\omega^2.","ω")+"";return s=new Fe({props:{title:"Going to 3.14th base",sub:"Recreational Math #002",desc:"Bases other than positive integers",date:"29 May 2025"}}),l=new P({props:{top:[4,2,0]}}),B=new P({props:{top:[1,1,0,1,0,0,1,0,0],base:2}}),d=new P({props:{top:[1,1,4,0],base:7}}),X=new P({props:{top:[1,1,1,0],base:-2}}),D=new Ae({props:{title:"Base ½ example",$$slots:{default:[ze]},$$scope:{ctx:w}}}),Y=new P({props:{top:[4,0,0,0,2,0,0,0,0],base:Math.pow(5,.25),base_str:"∜5"}}),Z=new P({props:{top:[4,2],base:5}}),nn=new P({props:{top:[1,2,3,4],base:5,base_str:"ω"}}),Q=new Me({props:{href:"https://www.youtube.com/watch?v=PQAhC1M93C8",$$slots:{default:[Ge]},$$scope:{ctx:w}}}),{c(){j(s.$$.fragment),m=i(`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),j(l.$$.fragment),b=i(`

or very simply `),f=new g(!1),v=i(`. The same number in base 2
is `),y=new g(!1),c=i(`. Which is written as:

`),j(B.$$.fragment),$=G(),T=R("h3"),x=i("Base Conversion"),r=i(`
To convert from base 10 to base 2: divide by 2 repeatedly and record remainders.

`),u=new g(!1),o=i(`

Then we read the remainders from bottom to top (incl. the last quotient), which
gives us the binary number
`),E=new g(!1),O=i(`. as we count the number of times we divided by 2 from the
bottom up. We can also go in the other direction, from base 2 to base 7. The
easiest way to do this is to go to base 10 first, then to base 7.

`),z=new g(!1),q=i(`

which again, including the last quotient, gives us the base 7 number
`),K=new g(!1),V=i(`.

`),j(d.$$.fragment),S=i(`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),hn=new g(!1),ln=i(`, we use the digits 0 to
`),dn=new g(!1),mn=i(` to represent the number, with the obvious exception of 0.

`),tn=R("h3"),jt=i("Rational Bases"),mt=i(`
While we did say for a given base `),bn=new g(!1),cn=i(" we use the digits 0 to "),wn=new g(!1),fn=i(`, we'll
slightly modify this to say we'll use the digits 0 to `),un=new g(!1),gn=i(` for a base
`),pn=new g(!1),vn=i(`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),j(X.$$.fragment),bt=i(`
The above number is read as `),yn=new g(!1),$n=i(`. This
time we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single part fractions,
i.e `),xn=new g(!1),Tn=i(`, we can even flip around the traditional positive power numbers
around the decimal point.

`),j(D.$$.fragment),ct=i(`

Now what if we were to consider arbitrary rational bases rather than just those
which are of thr form `),En=new g(!1),Bn=i(". So say how we write 265 in base "),Cn=new g(!1),Wn=i(`.

`),Sn=new g(!1),qn=i(`

So very simply `),In=new g(!1),Nn=i(`. The small twist here being that once we remember to divide by 7, we also
have to remember to multiply by 3 in the same iteration. This however also
implies that we can get the number 265 in base `),Rn=new g(!1),_n=i(` also for free by just
rotating around the decimal point, i.e. 6.6346, which one can trivially verify.
`),wt=R("br"),ft=G(),ut=R("br"),gt=i(`
This however also means that we will be using the same digits 0 to 6 for `),jn=new g(!1),Hn=i(`
also, which is natural considering that for fractions <1, we don't really have
any digits, so for a number with base less than 1, we can just use the same digits
as it's inverse and then rotate around the decimal point.

`),en=R("h3"),Ht=i("Irrational and Transcendental Bases"),pt=i(`
The easiest to start with is an 'nth' root base, such as `),An=new g(!1),Fn=i(`. We
can see easily that this should be related to being in base 5. So consider 42,
in base 5, or `),vt=i(zt),yt=i(` in base 10. We can very easily first write

`),j(Y.$$.fragment),$t=G(),j(Z.$$.fragment),xt=i(`

Clearly we can see both the above representations are functionally equivalent
with extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),Mn=new g(!1),kn=i(` are the standard place values
when we use 5 as our base.
`),Tt=R("br"),Et=G(),Bt=R("br"),Ct=i(`
So now if we were to create a new number 421 in base `),On=new g(!1),zn=i(`, it's
value would be `),Gn=new g(!1),Ln=i(". Or as an exercise you can verify that converting "),Pn=new g(!1),Un=i(` to ten for 1234,
is `),Jn=new g(!1),Dn=i(`. Finally we can use these ideas
to use the base `),Qn=new g(!1),Kn=i(". Then 123 in base 3 would be "),Vn=new g(!1),Xn=i(`.

`),an=R("h3"),At=i("Removing Constraints"),Wt=i(`
So far, above we set some very arbitrary rules on what digits we can use for what
base. In reality however those are the standard preferences for the given bases,
there don't actually exist any constraints on what base we can use. Consider using
the symbols of base 16, i.e, `),Yn=new g(!1),Zn=i(`, but in
base 7. Then the number F1 would be `),nt=new g(!1),tt=i(`. There are actually no limits to what digit we choose every step. '79A45' is
a valid base 2 number as long as we do the place value algebra for it correctly `),et=new g(!1),at=G(),sn=R("h3"),Ft=i("Going further"),St=i(`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),st=new g(!1),rt=i(`. So a simple
number like 1234 would be

`),j(nn.$$.fragment),qt=G(),ot=new g(!1),it=G(),rn=R("h4"),Mt=i("References"),It=G(),on=R("ul"),ht=R("li"),j(Q.$$.fragment),this.h()},l(n){H(s.$$.fragment,n),m=h(n,`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),H(l.$$.fragment,n),b=h(n,`

or very simply `),f=p(n,!1),v=h(n,`. The same number in base 2
is `),y=p(n,!1),c=h(n,`. Which is written as:

`),H(B.$$.fragment,n),$=L(n),T=_(n,"H3",{});var t=I(T);x=h(t,"Base Conversion"),t.forEach(e),r=h(n,`
To convert from base 10 to base 2: divide by 2 repeatedly and record remainders.

`),u=p(n,!1),o=h(n,`

Then we read the remainders from bottom to top (incl. the last quotient), which
gives us the binary number
`),E=p(n,!1),O=h(n,`. as we count the number of times we divided by 2 from the
bottom up. We can also go in the other direction, from base 2 to base 7. The
easiest way to do this is to go to base 10 first, then to base 7.

`),z=p(n,!1),q=h(n,`

which again, including the last quotient, gives us the base 7 number
`),K=p(n,!1),V=h(n,`.

`),H(d.$$.fragment,n),S=h(n,`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),hn=p(n,!1),ln=h(n,`, we use the digits 0 to
`),dn=p(n,!1),mn=h(n,` to represent the number, with the obvious exception of 0.

`),tn=_(n,"H3",{});var lt=I(tn);jt=h(lt,"Rational Bases"),lt.forEach(e),mt=h(n,`
While we did say for a given base `),bn=p(n,!1),cn=h(n," we use the digits 0 to "),wn=p(n,!1),fn=h(n,`, we'll
slightly modify this to say we'll use the digits 0 to `),un=p(n,!1),gn=h(n,` for a base
`),pn=p(n,!1),vn=h(n,`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),H(X.$$.fragment,n),bt=h(n,`
The above number is read as `),yn=p(n,!1),$n=h(n,`. This
time we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single part fractions,
i.e `),xn=p(n,!1),Tn=h(n,`, we can even flip around the traditional positive power numbers
around the decimal point.

`),H(D.$$.fragment,n),ct=h(n,`

Now what if we were to consider arbitrary rational bases rather than just those
which are of thr form `),En=p(n,!1),Bn=h(n,". So say how we write 265 in base "),Cn=p(n,!1),Wn=h(n,`.

`),Sn=p(n,!1),qn=h(n,`

So very simply `),In=p(n,!1),Nn=h(n,`. The small twist here being that once we remember to divide by 7, we also
have to remember to multiply by 3 in the same iteration. This however also
implies that we can get the number 265 in base `),Rn=p(n,!1),_n=h(n,` also for free by just
rotating around the decimal point, i.e. 6.6346, which one can trivially verify.
`),wt=_(n,"BR",{}),ft=L(n),ut=_(n,"BR",{}),gt=h(n,`
This however also means that we will be using the same digits 0 to 6 for `),jn=p(n,!1),Hn=h(n,`
also, which is natural considering that for fractions <1, we don't really have
any digits, so for a number with base less than 1, we can just use the same digits
as it's inverse and then rotate around the decimal point.

`),en=_(n,"H3",{});var dt=I(en);Ht=h(dt,"Irrational and Transcendental Bases"),dt.forEach(e),pt=h(n,`
The easiest to start with is an 'nth' root base, such as `),An=p(n,!1),Fn=h(n,`. We
can see easily that this should be related to being in base 5. So consider 42,
in base 5, or `),vt=h(n,zt),yt=h(n,` in base 10. We can very easily first write

`),H(Y.$$.fragment,n),$t=L(n),H(Z.$$.fragment,n),xt=h(n,`

Clearly we can see both the above representations are functionally equivalent
with extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),Mn=p(n,!1),kn=h(n,` are the standard place values
when we use 5 as our base.
`),Tt=_(n,"BR",{}),Et=L(n),Bt=_(n,"BR",{}),Ct=h(n,`
So now if we were to create a new number 421 in base `),On=p(n,!1),zn=h(n,`, it's
value would be `),Gn=p(n,!1),Ln=h(n,". Or as an exercise you can verify that converting "),Pn=p(n,!1),Un=h(n,` to ten for 1234,
is `),Jn=p(n,!1),Dn=h(n,`. Finally we can use these ideas
to use the base `),Qn=p(n,!1),Kn=h(n,". Then 123 in base 3 would be "),Vn=p(n,!1),Xn=h(n,`.

`),an=_(n,"H3",{});var Gt=I(an);At=h(Gt,"Removing Constraints"),Gt.forEach(e),Wt=h(n,`
So far, above we set some very arbitrary rules on what digits we can use for what
base. In reality however those are the standard preferences for the given bases,
there don't actually exist any constraints on what base we can use. Consider using
the symbols of base 16, i.e, `),Yn=p(n,!1),Zn=h(n,`, but in
base 7. Then the number F1 would be `),nt=p(n,!1),tt=h(n,`. There are actually no limits to what digit we choose every step. '79A45' is
a valid base 2 number as long as we do the place value algebra for it correctly `),et=p(n,!1),at=L(n),sn=_(n,"H3",{});var Lt=I(sn);Ft=h(Lt,"Going further"),Lt.forEach(e),St=h(n,`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),st=p(n,!1),rt=h(n,`. So a simple
number like 1234 would be

`),H(nn.$$.fragment,n),qt=L(n),ot=p(n,!1),it=L(n),rn=_(n,"H4",{});var Pt=I(rn);Mt=h(Pt,"References"),Pt.forEach(e),It=L(n),on=_(n,"UL",{});var Ut=I(on);ht=_(Ut,"LI",{});var Jt=I(ht);H(Q.$$.fragment,Jt),Jt.forEach(e),Ut.forEach(e),this.h()},h(){f.a=v,y.a=c,u.a=o,E.a=O,z.a=q,K.a=V,hn.a=ln,dn.a=mn,bn.a=cn,wn.a=fn,un.a=gn,pn.a=vn,yn.a=$n,xn.a=Tn,En.a=Bn,Cn.a=Wn,Sn.a=qn,In.a=Nn,Rn.a=_n,jn.a=Hn,An.a=Fn,Mn.a=kn,On.a=zn,Gn.a=Ln,Pn.a=Un,Jn.a=Dn,Qn.a=Kn,Vn.a=Xn,Yn.a=Zn,nt.a=tt,et.a=at,st.a=rt,ot.a=it},m(n,t){A(s,n,t),a(n,m,t),A(l,n,t),a(n,b,t),f.m(ae,n,t),a(n,v,t),y.m(se,n,t),a(n,c,t),A(B,n,t),a(n,$,t),a(n,T,t),N(T,x),a(n,r,t),u.m(re,n,t),a(n,o,t),E.m(oe,n,t),a(n,O,t),z.m(ie,n,t),a(n,q,t),K.m(he,n,t),a(n,V,t),A(d,n,t),a(n,S,t),hn.m(le,n,t),a(n,ln,t),dn.m(de,n,t),a(n,mn,t),a(n,tn,t),N(tn,jt),a(n,mt,t),bn.m(me,n,t),a(n,cn,t),wn.m(be,n,t),a(n,fn,t),un.m(ce,n,t),a(n,gn,t),pn.m(we,n,t),a(n,vn,t),A(X,n,t),a(n,bt,t),yn.m(fe,n,t),a(n,$n,t),xn.m(ue,n,t),a(n,Tn,t),A(D,n,t),a(n,ct,t),En.m(ge,n,t),a(n,Bn,t),Cn.m(pe,n,t),a(n,Wn,t),Sn.m(ve,n,t),a(n,qn,t),In.m(ye,n,t),a(n,Nn,t),Rn.m($e,n,t),a(n,_n,t),a(n,wt,t),a(n,ft,t),a(n,ut,t),a(n,gt,t),jn.m(xe,n,t),a(n,Hn,t),a(n,en,t),N(en,Ht),a(n,pt,t),An.m(Te,n,t),a(n,Fn,t),a(n,vt,t),a(n,yt,t),A(Y,n,t),a(n,$t,t),A(Z,n,t),a(n,xt,t),Mn.m(Ee,n,t),a(n,kn,t),a(n,Tt,t),a(n,Et,t),a(n,Bt,t),a(n,Ct,t),On.m(Be,n,t),a(n,zn,t),Gn.m(Ce,n,t),a(n,Ln,t),Pn.m(We,n,t),a(n,Un,t),Jn.m(Se,n,t),a(n,Dn,t),Qn.m(qe,n,t),a(n,Kn,t),Vn.m(Ie,n,t),a(n,Xn,t),a(n,an,t),N(an,At),a(n,Wt,t),Yn.m(Ne,n,t),a(n,Zn,t),nt.m(Re,n,t),a(n,tt,t),et.m(_e,n,t),a(n,at,t),a(n,sn,t),N(sn,Ft),a(n,St,t),st.m(je,n,t),a(n,rt,t),A(nn,n,t),a(n,qt,t),ot.m(He,n,t),a(n,it,t),a(n,rn,t),N(rn,Mt),a(n,It,t),a(n,on,t),N(on,ht),A(Q,ht,null),Nt=!0},p(n,[t]){const lt={};2&t&&(lt.$$scope={dirty:t,ctx:n}),D.$set(lt);const dt={};2&t&&(dt.$$scope={dirty:t,ctx:n}),Q.$set(dt)},i(n){Nt||(F(s.$$.fragment,n),F(l.$$.fragment,n),F(B.$$.fragment,n),F(d.$$.fragment,n),F(X.$$.fragment,n),F(D.$$.fragment,n),F(Y.$$.fragment,n),F(Z.$$.fragment,n),F(nn.$$.fragment,n),F(Q.$$.fragment,n),Nt=!0)},o(n){M(s.$$.fragment,n),M(l.$$.fragment,n),M(B.$$.fragment,n),M(d.$$.fragment,n),M(X.$$.fragment,n),M(D.$$.fragment,n),M(Y.$$.fragment,n),M(Z.$$.fragment,n),M(nn.$$.fragment,n),M(Q.$$.fragment,n),Nt=!1},d(n){k(s,n),n&&e(m),k(l,n),n&&e(b),n&&f.d(),n&&e(v),n&&y.d(),n&&e(c),k(B,n),n&&e($),n&&e(T),n&&e(r),n&&u.d(),n&&e(o),n&&E.d(),n&&e(O),n&&z.d(),n&&e(q),n&&K.d(),n&&e(V),k(d,n),n&&e(S),n&&hn.d(),n&&e(ln),n&&dn.d(),n&&e(mn),n&&e(tn),n&&e(mt),n&&bn.d(),n&&e(cn),n&&wn.d(),n&&e(fn),n&&un.d(),n&&e(gn),n&&pn.d(),n&&e(vn),k(X,n),n&&e(bt),n&&yn.d(),n&&e($n),n&&xn.d(),n&&e(Tn),k(D,n),n&&e(ct),n&&En.d(),n&&e(Bn),n&&Cn.d(),n&&e(Wn),n&&Sn.d(),n&&e(qn),n&&In.d(),n&&e(Nn),n&&Rn.d(),n&&e(_n),n&&e(wt),n&&e(ft),n&&e(ut),n&&e(gt),n&&jn.d(),n&&e(Hn),n&&e(en),n&&e(pt),n&&An.d(),n&&e(Fn),n&&e(vt),n&&e(yt),k(Y,n),n&&e($t),k(Z,n),n&&e(xt),n&&Mn.d(),n&&e(kn),n&&e(Tt),n&&e(Et),n&&e(Bt),n&&e(Ct),n&&On.d(),n&&e(zn),n&&Gn.d(),n&&e(Ln),n&&Pn.d(),n&&e(Un),n&&Jn.d(),n&&e(Dn),n&&Qn.d(),n&&e(Kn),n&&Vn.d(),n&&e(Xn),n&&e(an),n&&e(Wt),n&&Yn.d(),n&&e(Zn),n&&nt.d(),n&&e(tt),n&&et.d(),n&&e(at),n&&e(sn),n&&e(St),n&&st.d(),n&&e(rt),k(nn,n),n&&e(qt),n&&ot.d(),n&&e(it),n&&e(rn),n&&e(It),n&&e(on),k(Q)}}}function Zt(w,s){return w.toString(s).toUpperCase()}function Pe(w){return[function(s=[],m=-2,l="",b=""){s.reverse(),b.length===0&&(b=m.toString());let f="",v="";for(let y=0;y<s.length;y++){let c=s[y];f=`${c} \\cdot (${b})^${y}`+(f.length>0?" + ":"")+f,typeof m!="object"&&(v=`${c} \\cdot (${Math.pow(m,y).toFixed(2)}`+(v.length>0?" + ":"")+v)}return v.length>1&&(v="= "+v),C`${f} ${v} ${l}`}]}class Ke extends ne{constructor(s){super(),te(this,s,Pe,Le,ee,{})}}export{Ke as default};
