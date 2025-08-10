import{S as Vt,i as Kt,s as Xt,e as O,G as U,f as z,h as I,J as L,k as e,l as T,m as s,n as j,o as It,p as Ht,D as Ie,d as i,j as h,w as Ct,r as G,v as D,x as R,H as u,y as _,z as g,A,t as F,b as H,B as N}from"../../../../chunks/index-214b3cef.js";import{_ as jt,a as E,M as Re,D as _e,d as Nt}from"../../../../chunks/index-230b354e.js";import{A as Ae}from"../../../../chunks/accord-daf7c414.js";import{R as Fe}from"../../../../chunks/refs-803004c3.js";function Gt(c,r,m){const l=c.slice();return l[5]=r[m],l[7]=m,l}function Dt(c,r,m){const l=c.slice();return l[5]=r[m],l[7]=m,l}function Jt(c,r,m){const l=c.slice();return l[9]=r[m],l[7]=m,l}function Ut(c){let r,m,l=c[9]+"";return{c(){r=U("tspan"),m=i(l),this.h()},l(f){r=L(f,"tspan",{id:!0,x:!0,y:!0});var w=I(r);m=h(w,l),w.forEach(e),this.h()},h(){T(r,"id","digit"),T(r,"x",15+30*c[7]),T(r,"y","25")},m(f,w){s(f,r,w),j(r,m)},p(f,w){2&w&&l!==(l=f[9]+"")&&Ct(m,l)},d(f){f&&e(r)}}}function Lt(c){let r,m;return{c(){r=U("tspan"),m=i("―"),this.h()},l(l){r=L(l,"tspan",{id:!0,x:!0,y:!0});var f=I(r);m=h(f,"―"),f.forEach(e),this.h()},h(){T(r,"id","bar"),T(r,"x",10+30*c[7]),T(r,"y","45")},m(l,f){s(l,r,f),j(r,m)},p:It,d(l){l&&e(r)}}}function Pt(c){let r,m,l,f,w,x,$,b,S,v,W=c[1].length-c[7]+"",y=c[1].length-c[7]-c[2]+"";return{c(){r=U("tspan"),m=i("("),l=i(c[0]),f=i(`)
                    `),w=U("sup"),x=i(W),$=G(),b=U("tspan"),S=i(y),this.h()},l(a){r=L(a,"tspan",{id:!0,x:!0,y:!0});var p=I(r);m=h(p,"("),l=h(p,c[0]),f=h(p,`)
                    `),w=L(p,"sup",{});var o=I(w);x=h(o,W),o.forEach(e),p.forEach(e),$=D(a),b=L(a,"tspan",{id:!0,x:!0,y:!0});var B=I(b);S=h(B,y),B.forEach(e),this.h()},h(){T(r,"id","base"),T(r,"x",10+30*c[7]),T(r,"y","65"),T(b,"id","power"),T(b,"x",v=c[3]+30*c[7]),T(b,"y","60")},m(a,p){s(a,r,p),j(r,m),j(r,l),j(r,f),j(r,w),j(w,x),s(a,$,p),s(a,b,p),j(b,S)},p(a,p){1&p&&Ct(l,a[0]),2&p&&W!==(W=a[1].length-a[7]+"")&&Ct(x,W),6&p&&y!==(y=a[1].length-a[7]-a[2]+"")&&Ct(S,y),8&p&&v!==(v=a[3]+30*a[7])&&T(b,"x",v)},d(a){a&&e(r),a&&e($),a&&e(b)}}}function He(c){let r,m,l,f,w,x,$=c[1],b=[];for(let a=0;a<$.length;a+=1)b[a]=Ut(Jt(c,$,a));let S=c[1],v=[];for(let a=0;a<S.length;a+=1)v[a]=Lt(Dt(c,S,a));let W=c[1],y=[];for(let a=0;a<W.length;a+=1)y[a]=Pt(Gt(c,W,a));return{c(){r=O("p"),m=U("svg"),l=U("text");for(let a=0;a<b.length;a+=1)b[a].c();f=U("text");for(let a=0;a<v.length;a+=1)v[a].c();w=U("text");for(let a=0;a<y.length;a+=1)y[a].c();this.h()},l(a){r=z(a,"P",{class:!0});var p=I(r);m=L(p,"svg",{width:!0,height:!0,"font-family":!0,"font-weight":!0,"font-size":!0,transform:!0});var o=I(m);l=L(o,"text",{x:!0,y:!0});var B=I(l);for(let C=0;C<b.length;C+=1)b[C].l(B);B.forEach(e),f=L(o,"text",{x:!0,y:!0});var M=I(f);for(let C=0;C<v.length;C+=1)v[C].l(M);M.forEach(e),w=L(o,"text",{x:!0,y:!0,"font-size":!0});var k=I(w);for(let C=0;C<y.length;C+=1)y[C].l(k);k.forEach(e),o.forEach(e),p.forEach(e),this.h()},h(){T(l,"x","10"),T(l,"y","20"),T(f,"x","10"),T(f,"y","45"),T(w,"x","10"),T(w,"y","70"),T(w,"font-size","12"),T(m,"width",x=15+30*c[1].length),T(m,"height","80"),T(m,"font-family","sans-serif"),T(m,"font-weight","300"),T(m,"font-size","24"),T(m,"transform","scale(1.25)"),T(r,"class","w-100 tc")},m(a,p){s(a,r,p),j(r,m),j(m,l);for(let o=0;o<b.length;o+=1)b[o].m(l,null);j(m,f);for(let o=0;o<v.length;o+=1)v[o].m(f,null);j(m,w);for(let o=0;o<y.length;o+=1)y[o].m(w,null)},p(a,[p]){if(2&p){let o;for($=a[1],o=0;o<$.length;o+=1){const B=Jt(a,$,o);b[o]?b[o].p(B,p):(b[o]=Ut(B),b[o].c(),b[o].m(l,null))}for(;o<b.length;o+=1)b[o].d(1);b.length=$.length}if(2&p){let o;for(S=a[1],o=0;o<S.length;o+=1){const B=Dt(a,S,o);v[o]?v[o].p(B,p):(v[o]=Lt(B),v[o].c(),v[o].m(f,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=S.length}if(15&p){let o;for(W=a[1],o=0;o<W.length;o+=1){const B=Gt(a,W,o);y[o]?y[o].p(B,p):(y[o]=Pt(B),y[o].c(),y[o].m(w,null))}for(;o<y.length;o+=1)y[o].d(1);y.length=W.length}2&p&&x!==(x=15+30*a[1].length)&&T(m,"width",x)},i:It,o:It,d(a){a&&e(r),Ht(b,a),Ht(v,a),Ht(y,a)}}}function Ne(c,r,m){let{top:l=[]}=r,{base:f}=r,{base_str:w="?"}=r,x=1,$=30;return w==="?"&&f!==void 0&&(w=f.toString()),Ie(()=>{l.includes(".")&&m(2,x=l.length-l.indexOf(".")),f<=9&&f>=2&&f%1==0&&m(3,$=24)}),c.$$set=b=>{"top"in b&&m(1,l=b.top),"base"in b&&m(4,f=b.base),"base_str"in b&&m(0,w=b.base_str)},[w,l,x,$,f]}class J extends Vt{constructor(r){super(),Kt(this,r,Ne,He,Xt,{top:1,base:4,base_str:0})}}function Me(c){let r,m,l,f,w,x,$,b,S,v,W,y,a,p,o,B,M=jt`
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
  `+"",k=E`\\frac1n`+"",C=E`b`+"",Q=E`|b|-1`+"",V=E`\\frac1b`+"";return f=new J({props:{top:[1,1,1,1,".",0,0,1],base:2}}),b=new J({props:{top:[1,0,0,1,".",1,1,1],base:.5,base_str:"½"}}),{c(){r=i(`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    `),m=new u(!1),l=i(`

    Or,

    `),R(f.$$.fragment),w=i(`

    To obtain the same result, follow the same process with the base `),x=new u(!1),$=i(`.
    We can see efficiently, all that needs to be done is to rotate everything
    around the first digit before the decimal point.

    `),R(b.$$.fragment),S=i(`

    Just as before, the way for base `),v=new u(!1),W=i(" we used digits 0 to "),y=new u(!1),a=i(`. For
    base `),p=new u(!1),o=i(" also we can do the same."),this.h()},l(d){r=h(d,`Consider the number first in base 10: 31.125. We will follow the process to
    convert to base two, the same as before. We can do the left and right parts
    of the decimal separately.

    `),m=g(d,!1),l=h(d,`

    Or,

    `),_(f.$$.fragment,d),w=h(d,`

    To obtain the same result, follow the same process with the base `),x=g(d,!1),$=h(d,`.
    We can see efficiently, all that needs to be done is to rotate everything
    around the first digit before the decimal point.

    `),_(b.$$.fragment,d),S=h(d,`

    Just as before, the way for base `),v=g(d,!1),W=h(d," we used digits 0 to "),y=g(d,!1),a=h(d,`. For
    base `),p=g(d,!1),o=h(d," also we can do the same."),this.h()},h(){m.a=l,x.a=$,v.a=W,y.a=a,p.a=o},m(d,q){s(d,r,q),m.m(M,d,q),s(d,l,q),A(f,d,q),s(d,w,q),x.m(k,d,q),s(d,$,q),A(b,d,q),s(d,S,q),v.m(C,d,q),s(d,W,q),y.m(Q,d,q),s(d,a,q),p.m(V,d,q),s(d,o,q),B=!0},p:It,i(d){B||(F(f.$$.fragment,d),F(b.$$.fragment,d),B=!0)},o(d){H(f.$$.fragment,d),H(b.$$.fragment,d),B=!1},d(d){d&&e(r),d&&m.d(),d&&e(l),N(f,d),d&&e(w),d&&x.d(),d&&e($),N(b,d),d&&e(S),d&&v.d(),d&&e(W),d&&y.d(),d&&e(a),d&&p.d(),d&&e(o)}}}function ke(c){let r,m,l,f,w,x,$,b,S,v,W,y,a,p,o,B,M,k,C,Q,V,d,q,K,ht,on,hn,ln,dn,en,Rt,lt,mn,bn,fn,cn,wn,un,gn,pn,X,dt,vn,yn,$n,xn,P,mt,Tn,Wn,Bn,En,Sn,qn,Cn,jn,In,Rn,bt,ft,ct,wt,_n,An,an,_t,ut,Fn,Hn,gt,pt,Y,vt,Z,yt,Nn,Mn,$t,xt,Tt,Wt,kn,On,zn,Gn,Dn,Jn,Un,Ln,Pn,Qn,Vn,Kn,sn,At,Bt,Xn,Yn,Zn,nt,tt,et,rn,Ft,Et,at,st,nn,St,rt,ot,tn,qt,Yt=c[0]([4,2,0],10,"")+"",Zt=c[0]([1,1,0,1,0,0,1,0,0],2,"")+"",ne=jt`
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
`+"",te=Qt(420,2)+"",ee=jt`
\\begin{align*}
  420 \\div 7 &= 60\\ &r\\ 0\\\\
  60 \\div 7 &= 8\\ &r\\ 4\\\\
  8 \\div 7 &= 1\\ &r\\ 1\\\\
\\end{align*}
`+"",ae=Qt(420,7)+"",se=E`b`+"",re=E`b-1`+"",oe=E`b`+"",ie=E`b-1`+"",he=E`|b|-1`+"",le=E`b`+"",de=c[0]([1,1,1,0],-2,"= -6")+"",me=E`\\frac1n`+"",be=E`\\frac1n`+"",fe=E`\\frac73`+"",ce=jt`
\\begin{align*}
  265 \\div 7 &= 37\\ &r\\ 6, 37 \\times 3 &= 111\\\\
  111 \\div 7 &= 15\\ &r\\ 6, 15 \\times 3 &= 45\\\\
  45 \\div 7 &= 6\\ &r\\ 3, 6 \\times 3 &= 18\\\\
  18 \\div 7 &= 2\\ &r\\ 4, 2 \\times 3 &= 6\\\\
  6 \\div 7 &= 0\\ &r\\ 6, 0 \\times 3 &= 0\\\\
\\end{align*}
`+"",we=c[0]([6,4,3,6,6],7/3,"\\approx 265","\\frac73")+"",ue=E`\\frac37`+"",ge=E`\\frac37`+"",pe=E`\\sqrt[4]{5}`+"",Mt=parseInt("42",5)+"",ve=E`(\\sqrt[4]5)^{2n}`+"",ye=E`\\sqrt[4]{5}`+"",$e=c[0]([1,2,4,2,1],Math.pow(5,.25),"= 24.622 Leftrightarrow [6 + 2 \\times 5^{\\frac34} + 4 \\times 5^{\\frac24} + 2 \\times 5^{\\frac14}]","sqrt[4]{5}")+"",xe=E`\\sqrt{5}`+"",Te=E`[1234]_{\\sqrt5} = [14 + 8 \\sqrt5]_{10}`+"",We=E`\\pi`+"",Be=c[0]([1,2,3],3.1415926535,"approx 19.15","pi")+"",Ee=E`[0 \\rightarrow 9, A \\rightarrow F]`+"",Se=c[0]([15,1],7,"= 106_{10}")+"",qe=c[0]([7,9,10,4,5],2,"= 237")+"",Ce=E`\\omega = \\frac{-1}2 + \\frac{i\\sqrt3}2`+"",je=c[0]([1,2,3,4],[-.5,Math.sqrt(3)/2],"= 5 + 3 omega + 2omega^2.","ω")+"";return r=new Re({props:{title:"Going to 3.14th base",sub:"Recreational Math #002",desc:"Bases other than positive integers",date:"29 May 2025",wallpaper:"naohoits4g"}}),l=new _e({props:{generics:{C:["z"],Hex:["A","F"]},list:[Nt("n","Variable. Usually positive integer"),Nt("r","Remainder. Usually < divisor base"),Nt("b","Base of number system")]}}),w=new J({props:{top:[4,2,0],base:10}}),W=new J({props:{top:[1,1,0,1,0,0,1,0,0],base:2}}),K=new J({props:{top:[1,1,4,0],base:7}}),X=new J({props:{top:[1,1,1,0],base:-2}}),P=new Ae({props:{title:"Base ½ example",$$slots:{default:[Me]},$$scope:{ctx:c}}}),Y=new J({props:{top:[4,0,0,0,2,0,0,0,0],base:Math.pow(5,.25),base_str:"∜5"}}),Z=new J({props:{top:[4,2],base:5}}),nn=new J({props:{top:[1,2,3,4],base:5,base_str:"ω"}}),tn=new Fe({props:{list:[["Can any Number be a Base? (video)","https://www.youtube.com/watch?v=PQAhC1M93C8"]]}}),{c(){R(r.$$.fragment),m=G(),R(l.$$.fragment),f=i(`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),R(w.$$.fragment),x=i(`

or very simply `),$=new u(!1),b=i(`. The same number in base 2
is `),S=new u(!1),v=i(`. Which is written as:

`),R(W.$$.fragment),y=G(),a=O("h3"),p=i("Base Conversion"),o=i(`
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

`),B=new u(!1),M=i(`

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
`),k=new u(!1),C=i(`. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

`),Q=new u(!1),V=i(`

which again, including the last quotient, gives us the base 7 number
`),d=new u(!1),q=i(`.

`),R(K.$$.fragment),ht=i(`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),on=new u(!1),hn=i(`, we use the digits 0 to
`),ln=new u(!1),dn=i(` to represent the number, with the obvious exception of 0.

`),en=O("h3"),Rt=i("Rational Bases"),lt=i(`
While we did say for a given base `),mn=new u(!1),bn=i(" we use the digits 0 to "),fn=new u(!1),cn=i(`, we'll
slightly modify this to say we'll use the digits 0 to `),wn=new u(!1),un=i(` for a base
`),gn=new u(!1),pn=i(`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),R(X.$$.fragment),dt=i(`
The above number is read as `),vn=new u(!1),yn=i(`. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single-part fractions,
i.e. `),$n=new u(!1),xn=i(`, we can even flip around the traditional positive power
numbers around the decimal point.

`),R(P.$$.fragment),mt=i(`

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form `),Tn=new u(!1),Wn=i("? So, say how we write 265 in base "),Bn=new u(!1),En=i(`.

`),Sn=new u(!1),qn=i(`

So very simply `),Cn=new u(!1),jn=i(`. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base `),In=new u(!1),Rn=i(` also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
`),bt=O("br"),ft=G(),ct=O("br"),wt=i(`
Th, however, also means that we will be using the same digits 0 to 6 for `),_n=new u(!1),An=i(`
also, which is natural considering that for fractions <1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the first digit.

`),an=O("h3"),_t=i("Irrational and Transcendental Bases"),ut=i(`
The easiest to start with is an 'nth' root base, such as `),Fn=new u(!1),Hn=i(`. This
should be related to being in base 5. So consider 42 in base 5, or `),gt=i(Mt),pt=i(` in base 10. We can very easily first write

`),R(Y.$$.fragment),vt=G(),R(Z.$$.fragment),yt=i(`

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),Nn=new u(!1),Mn=i(` are the standard place values
when we use five as our base.
`),$t=O("br"),xt=G(),Tt=O("br"),Wt=i(`
So now, if we were to create a new number 421 in base `),kn=new u(!1),On=i(`, it's
value would be `),zn=new u(!1),Gn=i(". Or as an exercise you can verify that converting "),Dn=new u(!1),Jn=i(` to ten for 1234,
is `),Un=new u(!1),Ln=i(`. Finally, we can use these ideas
to use the base `),Pn=new u(!1),Qn=i(". Then 123 in base three would be "),Vn=new u(!1),Kn=i(`.

`),sn=O("h3"),At=i("Removing Constraints"),Bt=i(`
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, `),Xn=new u(!1),Yn=i(`, but in base 7. Then
the number F1 would be `),Zn=new u(!1),nt=i(`. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly `),tt=new u(!1),et=G(),rn=O("h3"),Ft=i("Going further"),Et=i(`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),at=new u(!1),st=i(`. So a simple
number like 1234 would be

`),R(nn.$$.fragment),St=G(),rt=new u(!1),ot=G(),R(tn.$$.fragment),this.h()},l(n){_(r.$$.fragment,n),m=D(n),_(l.$$.fragment,n),f=h(n,`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),_(w.$$.fragment,n),x=h(n,`

or very simply `),$=g(n,!1),b=h(n,`. The same number in base 2
is `),S=g(n,!1),v=h(n,`. Which is written as:

`),_(W.$$.fragment,n),y=D(n),a=z(n,"H3",{});var t=I(a);p=h(t,"Base Conversion"),t.forEach(e),o=h(n,`
To convert from base 10 to base 2, divide by 2 repeatedly and record the remainder.

`),B=g(n,!1),M=h(n,`

Then we read the remainder from bottom to top (incl. the last quotient), which
gives us the binary number
`),k=g(n,!1),C=h(n,`. We can see the number appear as we count the remainder
from bottom to top. We can also go in the other direction, from base 2 to base
7. The easiest way to do this is to go to base 10 first, then to base 7.

`),Q=g(n,!1),V=h(n,`

which again, including the last quotient, gives us the base 7 number
`),d=g(n,!1),q=h(n,`.

`),_(K.$$.fragment,n),ht=h(n,`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),on=g(n,!1),hn=h(n,`, we use the digits 0 to
`),ln=g(n,!1),dn=h(n,` to represent the number, with the obvious exception of 0.

`),en=z(n,"H3",{});var it=I(en);Rt=h(it,"Rational Bases"),it.forEach(e),lt=h(n,`
While we did say for a given base `),mn=g(n,!1),bn=h(n," we use the digits 0 to "),fn=g(n,!1),cn=h(n,`, we'll
slightly modify this to say we'll use the digits 0 to `),wn=g(n,!1),un=h(n,` for a base
`),gn=g(n,!1),pn=h(n,`, this would let us allow for negative bases with just a small change in
how the numbers are read.

`),_(X.$$.fragment,n),dt=h(n,`
The above number is read as `),vn=g(n,!1),yn=h(n,`. This
time, we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single-part fractions,
i.e. `),$n=g(n,!1),xn=h(n,`, we can even flip around the traditional positive power
numbers around the decimal point.

`),_(P.$$.fragment,n),mt=h(n,`

Now, what if we were to consider arbitrary rational bases rather than just those
which are of the form `),Tn=g(n,!1),Wn=h(n,"? So, say how we write 265 in base "),Bn=g(n,!1),En=h(n,`.

`),Sn=g(n,!1),qn=h(n,`

So very simply `),Cn=g(n,!1),jn=h(n,`. The small twist here is that once we remember to divide by 7, we also have
to remember to multiply by 3 in the same iteration. This however also implies
that we can get the number 265 in base `),In=g(n,!1),Rn=h(n,` also for free by just rotating
around the decimal point, i.e. 6.6346, which one can trivially verify.
`),bt=z(n,"BR",{}),ft=D(n),ct=z(n,"BR",{}),wt=h(n,`
Th, however, also means that we will be using the same digits 0 to 6 for `),_n=g(n,!1),An=h(n,`
also, which is natural considering that for fractions <1, we don't have any digits,
so for a number with a base less than 1, we can just use the same digits as it's
inverse and then rotates around the first digit.

`),an=z(n,"H3",{});var kt=I(an);_t=h(kt,"Irrational and Transcendental Bases"),kt.forEach(e),ut=h(n,`
The easiest to start with is an 'nth' root base, such as `),Fn=g(n,!1),Hn=h(n,`. This
should be related to being in base 5. So consider 42 in base 5, or `),gt=h(n,Mt),pt=h(n,` in base 10. We can very easily first write

`),_(Y.$$.fragment,n),vt=D(n),_(Z.$$.fragment,n),yt=h(n,`

We can see both the above representations are functionally equivalent , with
extra place values added in the 'gaps' between the integer place values. It
should be trivial to see that `),Nn=g(n,!1),Mn=h(n,` are the standard place values
when we use five as our base.
`),$t=z(n,"BR",{}),xt=D(n),Tt=z(n,"BR",{}),Wt=h(n,`
So now, if we were to create a new number 421 in base `),kn=g(n,!1),On=h(n,`, it's
value would be `),zn=g(n,!1),Gn=h(n,". Or as an exercise you can verify that converting "),Dn=g(n,!1),Jn=h(n,` to ten for 1234,
is `),Un=g(n,!1),Ln=h(n,`. Finally, we can use these ideas
to use the base `),Pn=g(n,!1),Qn=h(n,". Then 123 in base three would be "),Vn=g(n,!1),Kn=h(n,`.

`),sn=z(n,"H3",{});var Ot=I(sn);At=h(Ot,"Removing Constraints"),Ot.forEach(e),Bt=h(n,`
So far, above, we set some very arbitrary rules on what digits we can use for what
base. In reality, however, those are the standard preferences for the given bases,
There don't exist any constraints on what base we can use. Consider using the symbols
of base 16, i.e, `),Xn=g(n,!1),Yn=h(n,`, but in base 7. Then
the number F1 would be `),Zn=g(n,!1),nt=h(n,`. There are
actually no limits to what digit we choose every step. '79A45' is a valid base 2
number as long as we do the place value algebra for it correctly `),tt=g(n,!1),et=D(n),rn=z(n,"H3",{});var zt=I(rn);Ft=h(zt,"Going further"),zt.forEach(e),Et=h(n,`
Not only can transcendental numbers be bases, so can complex numbers be. Consider
a cube root of unity, `),at=g(n,!1),st=h(n,`. So a simple
number like 1234 would be

`),_(nn.$$.fragment,n),St=D(n),rt=g(n,!1),ot=D(n),_(tn.$$.fragment,n),this.h()},h(){$.a=b,S.a=v,B.a=M,k.a=C,Q.a=V,d.a=q,on.a=hn,ln.a=dn,mn.a=bn,fn.a=cn,wn.a=un,gn.a=pn,vn.a=yn,$n.a=xn,Tn.a=Wn,Bn.a=En,Sn.a=qn,Cn.a=jn,In.a=Rn,_n.a=An,Fn.a=Hn,Nn.a=Mn,kn.a=On,zn.a=Gn,Dn.a=Jn,Un.a=Ln,Pn.a=Qn,Vn.a=Kn,Xn.a=Yn,Zn.a=nt,tt.a=et,at.a=st,rt.a=ot},m(n,t){A(r,n,t),s(n,m,t),A(l,n,t),s(n,f,t),A(w,n,t),s(n,x,t),$.m(Yt,n,t),s(n,b,t),S.m(Zt,n,t),s(n,v,t),A(W,n,t),s(n,y,t),s(n,a,t),j(a,p),s(n,o,t),B.m(ne,n,t),s(n,M,t),k.m(te,n,t),s(n,C,t),Q.m(ee,n,t),s(n,V,t),d.m(ae,n,t),s(n,q,t),A(K,n,t),s(n,ht,t),on.m(se,n,t),s(n,hn,t),ln.m(re,n,t),s(n,dn,t),s(n,en,t),j(en,Rt),s(n,lt,t),mn.m(oe,n,t),s(n,bn,t),fn.m(ie,n,t),s(n,cn,t),wn.m(he,n,t),s(n,un,t),gn.m(le,n,t),s(n,pn,t),A(X,n,t),s(n,dt,t),vn.m(de,n,t),s(n,yn,t),$n.m(me,n,t),s(n,xn,t),A(P,n,t),s(n,mt,t),Tn.m(be,n,t),s(n,Wn,t),Bn.m(fe,n,t),s(n,En,t),Sn.m(ce,n,t),s(n,qn,t),Cn.m(we,n,t),s(n,jn,t),In.m(ue,n,t),s(n,Rn,t),s(n,bt,t),s(n,ft,t),s(n,ct,t),s(n,wt,t),_n.m(ge,n,t),s(n,An,t),s(n,an,t),j(an,_t),s(n,ut,t),Fn.m(pe,n,t),s(n,Hn,t),s(n,gt,t),s(n,pt,t),A(Y,n,t),s(n,vt,t),A(Z,n,t),s(n,yt,t),Nn.m(ve,n,t),s(n,Mn,t),s(n,$t,t),s(n,xt,t),s(n,Tt,t),s(n,Wt,t),kn.m(ye,n,t),s(n,On,t),zn.m($e,n,t),s(n,Gn,t),Dn.m(xe,n,t),s(n,Jn,t),Un.m(Te,n,t),s(n,Ln,t),Pn.m(We,n,t),s(n,Qn,t),Vn.m(Be,n,t),s(n,Kn,t),s(n,sn,t),j(sn,At),s(n,Bt,t),Xn.m(Ee,n,t),s(n,Yn,t),Zn.m(Se,n,t),s(n,nt,t),tt.m(qe,n,t),s(n,et,t),s(n,rn,t),j(rn,Ft),s(n,Et,t),at.m(Ce,n,t),s(n,st,t),A(nn,n,t),s(n,St,t),rt.m(je,n,t),s(n,ot,t),A(tn,n,t),qt=!0},p(n,[t]){const it={};2&t&&(it.$$scope={dirty:t,ctx:n}),P.$set(it)},i(n){qt||(F(r.$$.fragment,n),F(l.$$.fragment,n),F(w.$$.fragment,n),F(W.$$.fragment,n),F(K.$$.fragment,n),F(X.$$.fragment,n),F(P.$$.fragment,n),F(Y.$$.fragment,n),F(Z.$$.fragment,n),F(nn.$$.fragment,n),F(tn.$$.fragment,n),qt=!0)},o(n){H(r.$$.fragment,n),H(l.$$.fragment,n),H(w.$$.fragment,n),H(W.$$.fragment,n),H(K.$$.fragment,n),H(X.$$.fragment,n),H(P.$$.fragment,n),H(Y.$$.fragment,n),H(Z.$$.fragment,n),H(nn.$$.fragment,n),H(tn.$$.fragment,n),qt=!1},d(n){N(r,n),n&&e(m),N(l,n),n&&e(f),N(w,n),n&&e(x),n&&$.d(),n&&e(b),n&&S.d(),n&&e(v),N(W,n),n&&e(y),n&&e(a),n&&e(o),n&&B.d(),n&&e(M),n&&k.d(),n&&e(C),n&&Q.d(),n&&e(V),n&&d.d(),n&&e(q),N(K,n),n&&e(ht),n&&on.d(),n&&e(hn),n&&ln.d(),n&&e(dn),n&&e(en),n&&e(lt),n&&mn.d(),n&&e(bn),n&&fn.d(),n&&e(cn),n&&wn.d(),n&&e(un),n&&gn.d(),n&&e(pn),N(X,n),n&&e(dt),n&&vn.d(),n&&e(yn),n&&$n.d(),n&&e(xn),N(P,n),n&&e(mt),n&&Tn.d(),n&&e(Wn),n&&Bn.d(),n&&e(En),n&&Sn.d(),n&&e(qn),n&&Cn.d(),n&&e(jn),n&&In.d(),n&&e(Rn),n&&e(bt),n&&e(ft),n&&e(ct),n&&e(wt),n&&_n.d(),n&&e(An),n&&e(an),n&&e(ut),n&&Fn.d(),n&&e(Hn),n&&e(gt),n&&e(pt),N(Y,n),n&&e(vt),N(Z,n),n&&e(yt),n&&Nn.d(),n&&e(Mn),n&&e($t),n&&e(xt),n&&e(Tt),n&&e(Wt),n&&kn.d(),n&&e(On),n&&zn.d(),n&&e(Gn),n&&Dn.d(),n&&e(Jn),n&&Un.d(),n&&e(Ln),n&&Pn.d(),n&&e(Qn),n&&Vn.d(),n&&e(Kn),n&&e(sn),n&&e(Bt),n&&Xn.d(),n&&e(Yn),n&&Zn.d(),n&&e(nt),n&&tt.d(),n&&e(et),n&&e(rn),n&&e(Et),n&&at.d(),n&&e(st),N(nn,n),n&&e(St),n&&rt.d(),n&&e(ot),N(tn,n)}}}function Qt(c,r){return c.toString(r).toUpperCase()}function Oe(c){return[function(r=[],m=-2,l="",f=""){r.reverse(),f.length===0&&(f=m.toString());let w="",x="";for(let $=0;$<r.length;$++){let b=r[$];w=`${b} \\cdot (${f})^${$}`+(w.length>0?" + ":"")+w,typeof m!="object"&&(x=`${b} \\cdot (${Math.pow(m,$).toFixed(2)}`+(x.length>0?" + ":"")+x)}return x.length>1&&(x="= "+x),E`${w} ${x} ${l}`}]}class Ue extends Vt{constructor(r){super(),Kt(this,r,Oe,ke,Xt,{})}}export{Ue as default};
