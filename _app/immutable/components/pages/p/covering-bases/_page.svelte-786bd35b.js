import{S as ae,i as se,s as re,e as j,F as J,f as F,h as R,G as D,k as e,l as T,m as a,n as I,o as Nt,p as Gt,D as ke,d as i,j as h,w as Ht,r as G,v as L,x as H,H as u,y as _,z as g,A as N,t as A,b as M,B as k}from"../../../../chunks/index-fd6faf80.js";import{_ as _t,a as E,M as Oe,D as ze,d as Lt}from"../../../../chunks/index-b4de6977.js";import{A as Ge}from"../../../../chunks/accord-0e7ebe72.js";import{L as Le}from"../../../../chunks/link-d240c9a0.js";function Kt(f,s,l){const d=f.slice();return d[5]=s[l],d[7]=l,d}function Xt(f,s,l){const d=f.slice();return d[5]=s[l],d[7]=l,d}function Yt(f,s,l){const d=f.slice();return d[9]=s[l],d[7]=l,d}function Zt(f){let s,l,d=f[9]+"";return{c(){s=J("tspan"),l=i(d),this.h()},l(c){s=D(c,"tspan",{id:!0,x:!0,y:!0});var w=R(s);l=h(w,d),w.forEach(e),this.h()},h(){T(s,"id","digit"),T(s,"x",15+30*f[7]),T(s,"y","25")},m(c,w){a(c,s,w),I(s,l)},p(c,w){2&w&&d!==(d=c[9]+"")&&Ht(l,d)},d(c){c&&e(s)}}}function ne(f){let s,l;return{c(){s=J("tspan"),l=i("―"),this.h()},l(d){s=D(d,"tspan",{id:!0,x:!0,y:!0});var c=R(s);l=h(c,"―"),c.forEach(e),this.h()},h(){T(s,"id","bar"),T(s,"x",10+30*f[7]),T(s,"y","45")},m(d,c){a(d,s,c),I(s,l)},p:Nt,d(d){d&&e(s)}}}function te(f){let s,l,d,c,w,x,y,b,q,v,W=f[1].length-f[7]+"",$=f[1].length-f[7]-f[2]+"";return{c(){s=J("tspan"),l=i("("),d=i(f[0]),c=i(`)
                    `),w=J("sup"),x=i(W),y=G(),b=J("tspan"),q=i($),this.h()},l(r){s=D(r,"tspan",{id:!0,x:!0,y:!0});var p=R(s);l=h(p,"("),d=h(p,f[0]),c=h(p,`)
                    `),w=D(p,"sup",{});var o=R(w);x=h(o,W),o.forEach(e),p.forEach(e),y=L(r),b=D(r,"tspan",{id:!0,x:!0,y:!0});var B=R(b);q=h(B,$),B.forEach(e),this.h()},h(){T(s,"id","base"),T(s,"x",10+30*f[7]),T(s,"y","65"),T(b,"id","power"),T(b,"x",v=f[3]+30*f[7]),T(b,"y","60")},m(r,p){a(r,s,p),I(s,l),I(s,d),I(s,c),I(s,w),I(w,x),a(r,y,p),a(r,b,p),I(b,q)},p(r,p){1&p&&Ht(d,r[0]),2&p&&W!==(W=r[1].length-r[7]+"")&&Ht(x,W),6&p&&$!==($=r[1].length-r[7]-r[2]+"")&&Ht(q,$),8&p&&v!==(v=r[3]+30*r[7])&&T(b,"x",v)},d(r){r&&e(s),r&&e(y),r&&e(b)}}}function Ue(f){let s,l,d,c,w,x,y=f[1],b=[];for(let r=0;r<y.length;r+=1)b[r]=Zt(Yt(f,y,r));let q=f[1],v=[];for(let r=0;r<q.length;r+=1)v[r]=ne(Xt(f,q,r));let W=f[1],$=[];for(let r=0;r<W.length;r+=1)$[r]=te(Kt(f,W,r));return{c(){s=j("p"),l=J("svg"),d=J("text");for(let r=0;r<b.length;r+=1)b[r].c();c=J("text");for(let r=0;r<v.length;r+=1)v[r].c();w=J("text");for(let r=0;r<$.length;r+=1)$[r].c();this.h()},l(r){s=F(r,"P",{class:!0});var p=R(s);l=D(p,"svg",{width:!0,height:!0,"font-family":!0,"font-weight":!0,"font-size":!0,transform:!0});var o=R(l);d=D(o,"text",{x:!0,y:!0});var B=R(d);for(let S=0;S<b.length;S+=1)b[S].l(B);B.forEach(e),c=D(o,"text",{x:!0,y:!0});var O=R(c);for(let S=0;S<v.length;S+=1)v[S].l(O);O.forEach(e),w=D(o,"text",{x:!0,y:!0,"font-size":!0});var z=R(w);for(let S=0;S<$.length;S+=1)$[S].l(z);z.forEach(e),o.forEach(e),p.forEach(e),this.h()},h(){T(d,"x","10"),T(d,"y","20"),T(c,"x","10"),T(c,"y","45"),T(w,"x","10"),T(w,"y","70"),T(w,"font-size","12"),T(l,"width",x=15+30*f[1].length),T(l,"height","80"),T(l,"font-family","sans-serif"),T(l,"font-weight","300"),T(l,"font-size","24"),T(l,"transform","scale(1.25)"),T(s,"class","w-100 tc")},m(r,p){a(r,s,p),I(s,l),I(l,d);for(let o=0;o<b.length;o+=1)b[o].m(d,null);I(l,c);for(let o=0;o<v.length;o+=1)v[o].m(c,null);I(l,w);for(let o=0;o<$.length;o+=1)$[o].m(w,null)},p(r,[p]){if(2&p){let o;for(y=r[1],o=0;o<y.length;o+=1){const B=Yt(r,y,o);b[o]?b[o].p(B,p):(b[o]=Zt(B),b[o].c(),b[o].m(d,null))}for(;o<b.length;o+=1)b[o].d(1);b.length=y.length}if(2&p){let o;for(q=r[1],o=0;o<q.length;o+=1){const B=Xt(r,q,o);v[o]?v[o].p(B,p):(v[o]=ne(B),v[o].c(),v[o].m(c,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=q.length}if(15&p){let o;for(W=r[1],o=0;o<W.length;o+=1){const B=Kt(r,W,o);$[o]?$[o].p(B,p):($[o]=te(B),$[o].c(),$[o].m(w,null))}for(;o<$.length;o+=1)$[o].d(1);$.length=W.length}2&p&&x!==(x=15+30*r[1].length)&&T(l,"width",x)},i:Nt,o:Nt,d(r){r&&e(s),Gt(b,r),Gt(v,r),Gt($,r)}}}function Je(f,s,l){let{top:d=[]}=s,{base:c}=s,{base_str:w="?"}=s,x=1,y=30;return w==="?"&&c!==void 0&&(w=c.toString()),ke(()=>{d.includes(".")&&l(2,x=d.length-d.indexOf(".")),c<=9&&c>=2&&c%1==0&&l(3,y=24)}),f.$$set=b=>{"top"in b&&l(1,d=b.top),"base"in b&&l(4,c=b.base),"base_str"in b&&l(0,w=b.base_str)},[w,d,x,y,c]}class U extends ae{constructor(s){super(),se(this,s,Je,Ue,re,{top:1,base:4,base_str:0})}}function De(f){let s,l,d,c,w,x,y,b,q,v,W,$,r,p,o,B,O=_t`
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
  `+"",z=E`\\frac1n`+"",S=E`b`+"",V=E`|b|-1`+"",K=E`\\frac1b`+"";return c=new U({props:{top:[1,1,1,1,".",0,0,1],base:2}}),b=new U({props:{top:[1,0,0,1,".",1,1,1],base:.5,base_str:"½"}}),{c(){s=i(`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    `),l=new u(!1),d=i(`

    Or,

    `),H(c.$$.fragment),w=i(`

    To obtain the same result, follow the same process with the base `),x=new u(!1),y=i(`.
    We can see efficiently, all that needs to be done is to rotate everything
    around the first digit before the decimal point.

    `),H(b.$$.fragment),q=i(`

    Just as before, the way for base `),v=new u(!1),W=i(" we used digits 0 to "),$=new u(!1),r=i(`. For
    base `),p=new u(!1),o=i(" also we can do the same."),this.h()},l(m){s=h(m,`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    `),l=g(m,!1),d=h(m,`

    Or,

    `),_(c.$$.fragment,m),w=h(m,`

    To obtain the same result, follow the same process with the base `),x=g(m,!1),y=h(m,`.
    We can see efficiently, all that needs to be done is to rotate everything
    around the first digit before the decimal point.

    `),_(b.$$.fragment,m),q=h(m,`

    Just as before, the way for base `),v=g(m,!1),W=h(m," we used digits 0 to "),$=g(m,!1),r=h(m,`. For
    base `),p=g(m,!1),o=h(m," also we can do the same."),this.h()},h(){l.a=d,x.a=y,v.a=W,$.a=r,p.a=o},m(m,C){a(m,s,C),l.m(O,m,C),a(m,d,C),N(c,m,C),a(m,w,C),x.m(z,m,C),a(m,y,C),N(b,m,C),a(m,q,C),v.m(S,m,C),a(m,W,C),$.m(V,m,C),a(m,r,C),p.m(K,m,C),a(m,o,C),B=!0},p:Nt,i(m){B||(A(c.$$.fragment,m),A(b.$$.fragment,m),B=!0)},o(m){M(c.$$.fragment,m),M(b.$$.fragment,m),B=!1},d(m){m&&e(s),m&&l.d(),m&&e(d),k(c,m),m&&e(w),m&&x.d(),m&&e(y),k(b,m),m&&e(q),m&&v.d(),m&&e(W),m&&$.d(),m&&e(r),m&&p.d(),m&&e(o)}}}function Pe(f){let s;return{c(){s=i("Can any Number be a Base? (video)")},l(l){s=h(l,"Can any Number be a Base? (video)")},m(l,d){a(l,s,d)},d(l){l&&e(s)}}}function Qe(f){let s,l,d,c,w,x,y,b,q,v,W,$,r,p,o,B,O,z,S,V,K,m,C,X,bt,ln,dn,mn,bn,en,At,ft,fn,cn,wn,un,gn,pn,vn,$n,Y,ct,yn,xn,Tn,Wn,P,wt,Bn,En,qn,Cn,Sn,In,Rn,jn,Fn,Hn,ut,gt,pt,vt,_n,Nn,an,Mt,$t,An,Mn,yt,xt,Z,Tt,nn,Wt,kn,On,Bt,Et,qt,Ct,zn,Gn,Ln,Un,Jn,Dn,Pn,Qn,Vn,Kn,Xn,Yn,sn,kt,St,Zn,nt,tt,et,at,st,rn,Ot,It,rt,ot,tn,Rt,it,ht,on,zt,jt,hn,lt,Q,Ft,oe=f[0]([4,2,0],10,"")+"",ie=f[0]([1,1,0,1,0,0,1,0,0],2,"")+"",he=_t`
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
`+"",le=ee(420,2)+"",de=_t`
\\begin{align*}
  420 \\div 7 &= 60\\ &r\\ 0\\\\
  60 \\div 7 &= 8\\ &r\\ 4\\\\
  8 \\div 7 &= 1\\ &r\\ 1\\\\
\\end{align*}
`+"",me=ee(420,7)+"",be=E`b`+"",fe=E`b-1`+"",ce=E`b`+"",we=E`b-1`+"",ue=E`|b|-1`+"",ge=E`b`+"",pe=f[0]([1,1,1,0],-2,"= -6")+"",ve=E`\\frac1n`+"",$e=E`\\frac1n`+"",ye=E`\\frac73`+"",xe=_t`
\\begin{align*}
  265 \\div 7 &= 37\\ &r\\ 6, 37 \\times 3 &= 111\\\\
  111 \\div 7 &= 15\\ &r\\ 6, 15 \\times 3 &= 45\\\\
  45 \\div 7 &= 6\\ &r\\ 3, 6 \\times 3 &= 18\\\\
  18 \\div 7 &= 2\\ &r\\ 4, 2 \\times 3 &= 6\\\\
  6 \\div 7 &= 0\\ &r\\ 6, 0 \\times 3 &= 0\\\\
\\end{align*}
`+"",Te=f[0]([6,4,3,6,6],7/3,"\\approx 265","\\frac73")+"",We=E`\\frac37`+"",Be=E`\\frac37`+"",Ee=E`\\sqrt[4]{5}`+"",Ut=parseInt("42",5)+"",qe=E`(\\sqrt[4]5)^{2n}`+"",Ce=E`\\sqrt[4]{5}`+"",Se=f[0]([1,2,4,2,1],Math.pow(5,.25),"= 24.622 \\Leftrightarrow [6 + 2 \\times 5^{\\frac34} + 4 \\times 5^{\\frac24} + 2 \\times 5^{\\frac14}]","\\sqrt[4]{5}")+"",Ie=E`\\sqrt{5}`+"",Re=E`[1234]_{\\sqrt5} = [14 + 8 \\sqrt5]_{10}`+"",je=E`\\pi`+"",Fe=f[0]([1,2,3],3.1415926535,"\\approx 19.15","\\pi")+"",He=E`[0 \\rightarrow 9, A \\rightarrow F]`+"",_e=f[0]([15,1],7,"= 106_{10}")+"",Ne=f[0]([7,9,10,4,5],2,"= 237")+"",Ae=E`\\omega = \\frac{-1}2 + \\frac{i\\sqrt3}2`+"",Me=f[0]([1,2,3,4],[-.5,Math.sqrt(3)/2],"= 5 + 3 \\omega + 2\\omega^2.","ω")+"";return s=new Oe({props:{title:"Going to 3.14th base",sub:"Recreational Math #002",desc:"Bases other than positive integers",date:"29 May 2025"}}),d=new ze({props:{generics:{C:["z"],Hex:["A","F"]},list:[Lt("n","Variable. Usually positive integer"),Lt("r","Remainder. Usually < divisor base"),Lt("b","Base of number system")]}}),w=new U({props:{top:[4,2,0],base:10}}),W=new U({props:{top:[1,1,0,1,0,0,1,0,0],base:2}}),X=new U({props:{top:[1,1,4,0],base:7}}),Y=new U({props:{top:[1,1,1,0],base:-2}}),P=new Ge({props:{title:"Base ½ example",$$slots:{default:[De]},$$scope:{ctx:f}}}),Z=new U({props:{top:[4,0,0,0,2,0,0,0,0],base:Math.pow(5,.25),base_str:"∜5"}}),nn=new U({props:{top:[4,2],base:5}}),tn=new U({props:{top:[1,2,3,4],base:5,base_str:"ω"}}),Q=new Le({props:{href:"https://www.youtube.com/watch?v=PQAhC1M93C8",$$slots:{default:[Pe]},$$scope:{ctx:f}}}),{c(){H(s.$$.fragment),l=G(),H(d.$$.fragment),c=i(`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),H(w.$$.fragment),x=i(`

or very simply `),y=new u(!1),b=i(`. The same number in base 2
is `),q=new u(!1),v=i(`. Which is written as:

`),H(W.$$.fragment),$=G(),r=j("h3"),p=i("Base Conversion"),o=i(`
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

`),B=new u(!1),O=i(`

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
`),z=new u(!1),S=i(`. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

`),V=new u(!1),K=i(`

which again, including the last quotient, gives us the base 7 number
`),m=new u(!1),C=i(`.

`),H(X.$$.fragment),bt=i(`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),ln=new u(!1),dn=i(`, we use the digits 0 to
`),mn=new u(!1),bn=i(` to represent the number, with the obvious exception of 0.

`),en=j("h3"),At=i("Rational Bases"),ft=i(`
While we did say for a given base `),fn=new u(!1),cn=i(" we use the digits 0 to "),wn=new u(!1),un=i(`, we'll
slightly modify this to say we'll use the digits 0 to `),gn=new u(!1),pn=i(` for a base
`),vn=new u(!1),$n=i(`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),H(Y.$$.fragment),ct=i(`
The above number is read as `),yn=new u(!1),xn=i(`. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single-part fractions,
i.e. `),Tn=new u(!1),Wn=i(`, we can even flip around the traditional positive power
numbers around the decimal point.

`),H(P.$$.fragment),wt=i(`

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form `),Bn=new u(!1),En=i("? So, say how we write 265 in base "),qn=new u(!1),Cn=i(`.

`),Sn=new u(!1),In=i(`

So very simply `),Rn=new u(!1),jn=i(`. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base `),Fn=new u(!1),Hn=i(` also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
`),ut=j("br"),gt=G(),pt=j("br"),vt=i(`
Th, however, also means that we will be using the same digits 0 to 6 for `),_n=new u(!1),Nn=i(`
also, which is natural considering that for fractions <1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the first digit.

`),an=j("h3"),Mt=i("Irrational and Transcendental Bases"),$t=i(`
The easiest to start with is an 'nth' root base, such as `),An=new u(!1),Mn=i(`. This
should be related to being in base 5. So consider 42 in base 5, or `),yt=i(Ut),xt=i(` in base 10. We can very easily first write

`),H(Z.$$.fragment),Tt=G(),H(nn.$$.fragment),Wt=i(`

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),kn=new u(!1),On=i(` are the standard place values
when we use five as our base.
`),Bt=j("br"),Et=G(),qt=j("br"),Ct=i(`
So now, if we were to create a new number 421 in base `),zn=new u(!1),Gn=i(`, it's
value would be `),Ln=new u(!1),Un=i(". Or as an exercise you can verify that converting "),Jn=new u(!1),Dn=i(` to ten for 1234,
is `),Pn=new u(!1),Qn=i(`. Finally, we can use these ideas
to use the base `),Vn=new u(!1),Kn=i(". Then 123 in base three would be "),Xn=new u(!1),Yn=i(`.

`),sn=j("h3"),kt=i("Removing Constraints"),St=i(`
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, `),Zn=new u(!1),nt=i(`, but in base 7. Then
the number F1 would be `),tt=new u(!1),et=i(`. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly `),at=new u(!1),st=G(),rn=j("h3"),Ot=i("Going further"),It=i(`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),rt=new u(!1),ot=i(`. So a simple
number like 1234 would be

`),H(tn.$$.fragment),Rt=G(),it=new u(!1),ht=G(),on=j("h4"),zt=i("References"),jt=G(),hn=j("ul"),lt=j("li"),H(Q.$$.fragment),this.h()},l(n){_(s.$$.fragment,n),l=L(n),_(d.$$.fragment,n),c=h(n,`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),_(w.$$.fragment,n),x=h(n,`

or very simply `),y=g(n,!1),b=h(n,`. The same number in base 2
is `),q=g(n,!1),v=h(n,`. Which is written as:

`),_(W.$$.fragment,n),$=L(n),r=F(n,"H3",{});var t=R(r);p=h(t,"Base Conversion"),t.forEach(e),o=h(n,`
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

`),B=g(n,!1),O=h(n,`

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
`),z=g(n,!1),S=h(n,`. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

`),V=g(n,!1),K=h(n,`

which again, including the last quotient, gives us the base 7 number
`),m=g(n,!1),C=h(n,`.

`),_(X.$$.fragment,n),bt=h(n,`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),ln=g(n,!1),dn=h(n,`, we use the digits 0 to
`),mn=g(n,!1),bn=h(n,` to represent the number, with the obvious exception of 0.

`),en=F(n,"H3",{});var dt=R(en);At=h(dt,"Rational Bases"),dt.forEach(e),ft=h(n,`
While we did say for a given base `),fn=g(n,!1),cn=h(n," we use the digits 0 to "),wn=g(n,!1),un=h(n,`, we'll
slightly modify this to say we'll use the digits 0 to `),gn=g(n,!1),pn=h(n,` for a base
`),vn=g(n,!1),$n=h(n,`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),_(Y.$$.fragment,n),ct=h(n,`
The above number is read as `),yn=g(n,!1),xn=h(n,`. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single-part fractions,
i.e. `),Tn=g(n,!1),Wn=h(n,`, we can even flip around the traditional positive power
numbers around the decimal point.

`),_(P.$$.fragment,n),wt=h(n,`

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form `),Bn=g(n,!1),En=h(n,"? So, say how we write 265 in base "),qn=g(n,!1),Cn=h(n,`.

`),Sn=g(n,!1),In=h(n,`

So very simply `),Rn=g(n,!1),jn=h(n,`. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base `),Fn=g(n,!1),Hn=h(n,` also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
`),ut=F(n,"BR",{}),gt=L(n),pt=F(n,"BR",{}),vt=h(n,`
Th, however, also means that we will be using the same digits 0 to 6 for `),_n=g(n,!1),Nn=h(n,`
also, which is natural considering that for fractions <1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the first digit.

`),an=F(n,"H3",{});var mt=R(an);Mt=h(mt,"Irrational and Transcendental Bases"),mt.forEach(e),$t=h(n,`
The easiest to start with is an 'nth' root base, such as `),An=g(n,!1),Mn=h(n,`. This
should be related to being in base 5. So consider 42 in base 5, or `),yt=h(n,Ut),xt=h(n,` in base 10. We can very easily first write

`),_(Z.$$.fragment,n),Tt=L(n),_(nn.$$.fragment,n),Wt=h(n,`

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),kn=g(n,!1),On=h(n,` are the standard place values
when we use five as our base.
`),Bt=F(n,"BR",{}),Et=L(n),qt=F(n,"BR",{}),Ct=h(n,`
So now, if we were to create a new number 421 in base `),zn=g(n,!1),Gn=h(n,`, it's
value would be `),Ln=g(n,!1),Un=h(n,". Or as an exercise you can verify that converting "),Jn=g(n,!1),Dn=h(n,` to ten for 1234,
is `),Pn=g(n,!1),Qn=h(n,`. Finally, we can use these ideas
to use the base `),Vn=g(n,!1),Kn=h(n,". Then 123 in base three would be "),Xn=g(n,!1),Yn=h(n,`.

`),sn=F(n,"H3",{});var Jt=R(sn);kt=h(Jt,"Removing Constraints"),Jt.forEach(e),St=h(n,`
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, `),Zn=g(n,!1),nt=h(n,`, but in base 7. Then
the number F1 would be `),tt=g(n,!1),et=h(n,`. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly `),at=g(n,!1),st=L(n),rn=F(n,"H3",{});var Dt=R(rn);Ot=h(Dt,"Going further"),Dt.forEach(e),It=h(n,`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),rt=g(n,!1),ot=h(n,`. So a simple
number like 1234 would be

`),_(tn.$$.fragment,n),Rt=L(n),it=g(n,!1),ht=L(n),on=F(n,"H4",{});var Pt=R(on);zt=h(Pt,"References"),Pt.forEach(e),jt=L(n),hn=F(n,"UL",{});var Qt=R(hn);lt=F(Qt,"LI",{});var Vt=R(lt);_(Q.$$.fragment,Vt),Vt.forEach(e),Qt.forEach(e),this.h()},h(){y.a=b,q.a=v,B.a=O,z.a=S,V.a=K,m.a=C,ln.a=dn,mn.a=bn,fn.a=cn,wn.a=un,gn.a=pn,vn.a=$n,yn.a=xn,Tn.a=Wn,Bn.a=En,qn.a=Cn,Sn.a=In,Rn.a=jn,Fn.a=Hn,_n.a=Nn,An.a=Mn,kn.a=On,zn.a=Gn,Ln.a=Un,Jn.a=Dn,Pn.a=Qn,Vn.a=Kn,Xn.a=Yn,Zn.a=nt,tt.a=et,at.a=st,rt.a=ot,it.a=ht},m(n,t){N(s,n,t),a(n,l,t),N(d,n,t),a(n,c,t),N(w,n,t),a(n,x,t),y.m(oe,n,t),a(n,b,t),q.m(ie,n,t),a(n,v,t),N(W,n,t),a(n,$,t),a(n,r,t),I(r,p),a(n,o,t),B.m(he,n,t),a(n,O,t),z.m(le,n,t),a(n,S,t),V.m(de,n,t),a(n,K,t),m.m(me,n,t),a(n,C,t),N(X,n,t),a(n,bt,t),ln.m(be,n,t),a(n,dn,t),mn.m(fe,n,t),a(n,bn,t),a(n,en,t),I(en,At),a(n,ft,t),fn.m(ce,n,t),a(n,cn,t),wn.m(we,n,t),a(n,un,t),gn.m(ue,n,t),a(n,pn,t),vn.m(ge,n,t),a(n,$n,t),N(Y,n,t),a(n,ct,t),yn.m(pe,n,t),a(n,xn,t),Tn.m(ve,n,t),a(n,Wn,t),N(P,n,t),a(n,wt,t),Bn.m($e,n,t),a(n,En,t),qn.m(ye,n,t),a(n,Cn,t),Sn.m(xe,n,t),a(n,In,t),Rn.m(Te,n,t),a(n,jn,t),Fn.m(We,n,t),a(n,Hn,t),a(n,ut,t),a(n,gt,t),a(n,pt,t),a(n,vt,t),_n.m(Be,n,t),a(n,Nn,t),a(n,an,t),I(an,Mt),a(n,$t,t),An.m(Ee,n,t),a(n,Mn,t),a(n,yt,t),a(n,xt,t),N(Z,n,t),a(n,Tt,t),N(nn,n,t),a(n,Wt,t),kn.m(qe,n,t),a(n,On,t),a(n,Bt,t),a(n,Et,t),a(n,qt,t),a(n,Ct,t),zn.m(Ce,n,t),a(n,Gn,t),Ln.m(Se,n,t),a(n,Un,t),Jn.m(Ie,n,t),a(n,Dn,t),Pn.m(Re,n,t),a(n,Qn,t),Vn.m(je,n,t),a(n,Kn,t),Xn.m(Fe,n,t),a(n,Yn,t),a(n,sn,t),I(sn,kt),a(n,St,t),Zn.m(He,n,t),a(n,nt,t),tt.m(_e,n,t),a(n,et,t),at.m(Ne,n,t),a(n,st,t),a(n,rn,t),I(rn,Ot),a(n,It,t),rt.m(Ae,n,t),a(n,ot,t),N(tn,n,t),a(n,Rt,t),it.m(Me,n,t),a(n,ht,t),a(n,on,t),I(on,zt),a(n,jt,t),a(n,hn,t),I(hn,lt),N(Q,lt,null),Ft=!0},p(n,[t]){const dt={};2&t&&(dt.$$scope={dirty:t,ctx:n}),P.$set(dt);const mt={};2&t&&(mt.$$scope={dirty:t,ctx:n}),Q.$set(mt)},i(n){Ft||(A(s.$$.fragment,n),A(d.$$.fragment,n),A(w.$$.fragment,n),A(W.$$.fragment,n),A(X.$$.fragment,n),A(Y.$$.fragment,n),A(P.$$.fragment,n),A(Z.$$.fragment,n),A(nn.$$.fragment,n),A(tn.$$.fragment,n),A(Q.$$.fragment,n),Ft=!0)},o(n){M(s.$$.fragment,n),M(d.$$.fragment,n),M(w.$$.fragment,n),M(W.$$.fragment,n),M(X.$$.fragment,n),M(Y.$$.fragment,n),M(P.$$.fragment,n),M(Z.$$.fragment,n),M(nn.$$.fragment,n),M(tn.$$.fragment,n),M(Q.$$.fragment,n),Ft=!1},d(n){k(s,n),n&&e(l),k(d,n),n&&e(c),k(w,n),n&&e(x),n&&y.d(),n&&e(b),n&&q.d(),n&&e(v),k(W,n),n&&e($),n&&e(r),n&&e(o),n&&B.d(),n&&e(O),n&&z.d(),n&&e(S),n&&V.d(),n&&e(K),n&&m.d(),n&&e(C),k(X,n),n&&e(bt),n&&ln.d(),n&&e(dn),n&&mn.d(),n&&e(bn),n&&e(en),n&&e(ft),n&&fn.d(),n&&e(cn),n&&wn.d(),n&&e(un),n&&gn.d(),n&&e(pn),n&&vn.d(),n&&e($n),k(Y,n),n&&e(ct),n&&yn.d(),n&&e(xn),n&&Tn.d(),n&&e(Wn),k(P,n),n&&e(wt),n&&Bn.d(),n&&e(En),n&&qn.d(),n&&e(Cn),n&&Sn.d(),n&&e(In),n&&Rn.d(),n&&e(jn),n&&Fn.d(),n&&e(Hn),n&&e(ut),n&&e(gt),n&&e(pt),n&&e(vt),n&&_n.d(),n&&e(Nn),n&&e(an),n&&e($t),n&&An.d(),n&&e(Mn),n&&e(yt),n&&e(xt),k(Z,n),n&&e(Tt),k(nn,n),n&&e(Wt),n&&kn.d(),n&&e(On),n&&e(Bt),n&&e(Et),n&&e(qt),n&&e(Ct),n&&zn.d(),n&&e(Gn),n&&Ln.d(),n&&e(Un),n&&Jn.d(),n&&e(Dn),n&&Pn.d(),n&&e(Qn),n&&Vn.d(),n&&e(Kn),n&&Xn.d(),n&&e(Yn),n&&e(sn),n&&e(St),n&&Zn.d(),n&&e(nt),n&&tt.d(),n&&e(et),n&&at.d(),n&&e(st),n&&e(rn),n&&e(It),n&&rt.d(),n&&e(ot),k(tn,n),n&&e(Rt),n&&it.d(),n&&e(ht),n&&e(on),n&&e(jt),n&&e(hn),k(Q)}}}function ee(f,s){return f.toString(s).toUpperCase()}function Ve(f){return[function(s=[],l=-2,d="",c=""){s.reverse(),c.length===0&&(c=l.toString());let w="",x="";for(let y=0;y<s.length;y++){let b=s[y];w=`${b} \\cdot (${c})^${y}`+(w.length>0?" + ":"")+w,typeof l!="object"&&(x=`${b} \\cdot (${Math.pow(l,y).toFixed(2)}`+(x.length>0?" + ":"")+x)}return x.length>1&&(x="= "+x),E`${w} ${x} ${d}`}]}class na extends ae{constructor(s){super(),se(this,s,Ve,Qe,re,{})}}export{na as default};
