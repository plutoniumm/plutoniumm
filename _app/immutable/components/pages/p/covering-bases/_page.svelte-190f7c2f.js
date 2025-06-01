import{S as Lt,i as zt,s as Gt,c as Me,e as j,d as l,f as z,h as R,j as q,k as d,l as e,m as G,n as W,o as r,p as C,w as Rt,u as ke,g as Fe,a as He,t as _,b as A,y as U,A as D,q as _t,r as Ot,H as y,G as $,I as M,J as k,K as F,L as H}from"../../../../chunks/index-4b6b7d51.js";import{_ as jt,a as B,M as Oe,L as Le}from"../../../../chunks/meta-4f90f7d1.js";function ze(b){let a,o,h,u,w,f;const x=b[2].default,m=Me(x,b,b[1],null);return{c(){a=j("details"),o=j("summary"),h=l(b[0]),u=z(),w=j("div"),m&&m.c(),this.h()},l(p){a=R(p,"DETAILS",{class:!0});var g=q(a);o=R(g,"SUMMARY",{class:!0});var E=q(o);h=d(E,b[0]),E.forEach(e),u=G(g),w=R(g,"DIV",{});var T=q(w);m&&m.l(T),T.forEach(e),g.forEach(e),this.h()},h(){W(o,"class","p-rel ptr p10 svelte-loo7by"),W(a,"class","p20 rx10 svelte-loo7by")},m(p,g){r(p,a,g),C(a,o),C(o,h),C(a,u),C(a,w),m&&m.m(w,null),f=!0},p(p,[g]){(!f||1&g)&&Rt(h,p[0]),m&&m.p&&(!f||2&g)&&ke(m,x,p,p[1],f?He(x,p[1],g,null):Fe(p[1]),null)},i(p){f||(_(m,p),f=!0)},o(p){A(m,p),f=!1},d(p){p&&e(a),m&&m.d(p)}}}function Ge(b,a,o){let{$$slots:h={},$$scope:u}=a,{title:w=""}=a;return b.$$set=f=>{"title"in f&&o(0,w=f.title),"$$scope"in f&&o(1,u=f.$$scope)},[w,u,h]}class Je extends Lt{constructor(a){super(),zt(this,a,Ge,ze,Gt,{title:0})}}function Kt(b,a,o){const h=b.slice();return h[5]=a[o],h[7]=o,h}function Vt(b,a,o){const h=b.slice();return h[5]=a[o],h[7]=o,h}function Xt(b,a,o){const h=b.slice();return h[9]=a[o],h[7]=o,h}function Zt(b){let a,o,h=b[9]+"";return{c(){a=U("tspan"),o=l(h),this.h()},l(u){a=D(u,"tspan",{x:!0,y:!0});var w=q(a);o=d(w,h),w.forEach(e),this.h()},h(){W(a,"x",15+30*b[7]),W(a,"y","25")},m(u,w){r(u,a,w),C(a,o)},p(u,w){2&w&&h!==(h=u[9]+"")&&Rt(o,h)},d(u){u&&e(a)}}}function ne(b){let a,o;return{c(){a=U("tspan"),o=l("―"),this.h()},l(h){a=D(h,"tspan",{x:!0,y:!0});var u=q(a);o=d(u,"―"),u.forEach(e),this.h()},h(){W(a,"x",10+30*b[7]),W(a,"y","45")},m(h,u){r(h,a,u),C(a,o)},p:_t,d(h){h&&e(a)}}}function te(b){let a,o,h,u,w,f,x,m,p,g,E=b[1].length-b[7]+"",T=b[1].length-b[7]-b[2]+"";return{c(){a=U("tspan"),o=l("("),h=new y(!0),u=l(")"),w=U("sup"),f=l(E),x=z(),m=U("tspan"),p=l(T),this.h()},l(s){a=D(s,"tspan",{x:!0,y:!0});var v=q(a);o=d(v,"("),h=$(v,!0),u=d(v,")"),w=D(v,"sup",{});var i=q(w);f=d(i,E),i.forEach(e),v.forEach(e),x=G(s),m=D(s,"tspan",{x:!0,y:!0});var S=q(m);p=d(S,T),S.forEach(e),this.h()},h(){h.a=u,W(a,"x",10+30*b[7]),W(a,"y","65"),W(m,"x",g=b[3]+30*b[7]),W(m,"y","60")},m(s,v){r(s,a,v),C(a,o),h.m(b[0],a),C(a,u),C(a,w),C(w,f),r(s,x,v),r(s,m,v),C(m,p)},p(s,v){1&v&&h.p(s[0]),2&v&&E!==(E=s[1].length-s[7]+"")&&Rt(f,E),6&v&&T!==(T=s[1].length-s[7]-s[2]+"")&&Rt(p,T),8&v&&g!==(g=s[3]+30*s[7])&&W(m,"x",g)},d(s){s&&e(a),s&&e(x),s&&e(m)}}}function Ue(b){let a,o,h,u,w,f,x=b[1],m=[];for(let s=0;s<x.length;s+=1)m[s]=Zt(Xt(b,x,s));let p=b[1],g=[];for(let s=0;s<p.length;s+=1)g[s]=ne(Vt(b,p,s));let E=b[1],T=[];for(let s=0;s<E.length;s+=1)T[s]=te(Kt(b,E,s));return{c(){a=j("p"),o=U("svg"),h=U("text");for(let s=0;s<m.length;s+=1)m[s].c();u=U("text");for(let s=0;s<g.length;s+=1)g[s].c();w=U("text");for(let s=0;s<T.length;s+=1)T[s].c();this.h()},l(s){a=R(s,"P",{class:!0});var v=q(a);o=D(v,"svg",{width:!0,height:!0,"font-family":!0,"font-weight":!0,"font-size":!0});var i=q(o);h=D(i,"text",{x:!0,y:!0});var S=q(h);for(let N=0;N<m.length;N+=1)m[N].l(S);S.forEach(e),u=D(i,"text",{x:!0,y:!0});var O=q(u);for(let N=0;N<g.length;N+=1)g[N].l(O);O.forEach(e),w=D(i,"text",{x:!0,y:!0,"font-size":!0});var L=q(w);for(let N=0;N<T.length;N+=1)T[N].l(L);L.forEach(e),i.forEach(e),v.forEach(e),this.h()},h(){W(h,"x","10"),W(h,"y","20"),W(u,"x","10"),W(u,"y","45"),W(w,"x","10"),W(w,"y","70"),W(w,"font-size","12"),W(o,"width",f=15+30*b[1].length),W(o,"height","80"),W(o,"font-family","sans-serif"),W(o,"font-weight","300"),W(o,"font-size","24"),W(a,"class","w-100 tc")},m(s,v){r(s,a,v),C(a,o),C(o,h);for(let i=0;i<m.length;i+=1)m[i].m(h,null);C(o,u);for(let i=0;i<g.length;i+=1)g[i].m(u,null);C(o,w);for(let i=0;i<T.length;i+=1)T[i].m(w,null)},p(s,[v]){if(2&v){let i;for(x=s[1],i=0;i<x.length;i+=1){const S=Xt(s,x,i);m[i]?m[i].p(S,v):(m[i]=Zt(S),m[i].c(),m[i].m(h,null))}for(;i<m.length;i+=1)m[i].d(1);m.length=x.length}if(2&v){let i;for(p=s[1],i=0;i<p.length;i+=1){const S=Vt(s,p,i);g[i]?g[i].p(S,v):(g[i]=ne(S),g[i].c(),g[i].m(u,null))}for(;i<g.length;i+=1)g[i].d(1);g.length=p.length}if(15&v){let i;for(E=s[1],i=0;i<E.length;i+=1){const S=Kt(s,E,i);T[i]?T[i].p(S,v):(T[i]=te(S),T[i].c(),T[i].m(w,null))}for(;i<T.length;i+=1)T[i].d(1);T.length=E.length}2&v&&f!==(f=15+30*s[1].length)&&W(o,"width",f)},i:_t,o:_t,d(s){s&&e(a),Ot(m,s),Ot(g,s),Ot(T,s)}}}function De(b,a,o){let{top:h=[]}=a,{base:u=10}=a,{base_str:w}=a;if(typeof u!="number")throw new Error("Base must be a number");let f=1;h.includes(".")&&(f=h.length-h.indexOf("."));let x=30;return u<=9&&u>=2&&u%1==0&&(x=24),w||(w=u.toString()),b.$$set=m=>{"top"in m&&o(1,h=m.top),"base"in m&&o(4,u=m.base),"base_str"in m&&o(0,w=m.base_str)},[w,h,f,x,u]}class J extends Lt{constructor(a){super(),zt(this,a,De,Ue,Gt,{top:1,base:4,base_str:0})}}function Pe(b){let a,o,h,u,w,f,x,m,p,g,E,T,s,v,i,S,O=jt(`
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
  `)+"",L=B("\\frac1n")+"",N=B("b")+"",Y=B("|b|-1")+"",K=B("\\frac1b")+"";return u=new J({props:{top:[1,1,1,1,".",0,0,1],base:2}}),m=new J({props:{top:[1,0,0,1,".",1,1,1],base:.5,base_str:"½"}}),{c(){a=l(`Consider the number first in base 10: 31.125. We will follow the process to
  convert to base two same as before. We can do the left and right parts of the
  decimal seperately.

  `),o=new y(!1),h=l(`

  Or,

  `),M(u.$$.fragment),w=l(`

  Now to get the result the same process with base `),f=new y(!1),x=l(`. We can
  see easily all that needs to be done is to rotate everything around the
  decimal point

  `),M(m.$$.fragment),p=l(`

  Just as before, the way for base `),g=new y(!1),E=l(" we used digits 0 to "),T=new y(!1),s=l(". For base "),v=new y(!1),i=l(" also we can do the same."),this.h()},l(c){a=d(c,`Consider the number first in base 10: 31.125. We will follow the process to
  convert to base two same as before. We can do the left and right parts of the
  decimal seperately.

  `),o=$(c,!1),h=d(c,`

  Or,

  `),k(u.$$.fragment,c),w=d(c,`

  Now to get the result the same process with base `),f=$(c,!1),x=d(c,`. We can
  see easily all that needs to be done is to rotate everything around the
  decimal point

  `),k(m.$$.fragment,c),p=d(c,`

  Just as before, the way for base `),g=$(c,!1),E=d(c," we used digits 0 to "),T=$(c,!1),s=d(c,". For base "),v=$(c,!1),i=d(c," also we can do the same."),this.h()},h(){o.a=h,f.a=x,g.a=E,T.a=s,v.a=i},m(c,I){r(c,a,I),o.m(O,c,I),r(c,h,I),F(u,c,I),r(c,w,I),f.m(L,c,I),r(c,x,I),F(m,c,I),r(c,p,I),g.m(N,c,I),r(c,E,I),T.m(Y,c,I),r(c,s,I),v.m(K,c,I),r(c,i,I),S=!0},p:_t,i(c){S||(_(u.$$.fragment,c),_(m.$$.fragment,c),S=!0)},o(c){A(u.$$.fragment,c),A(m.$$.fragment,c),S=!1},d(c){c&&e(a),c&&o.d(),c&&e(h),H(u,c),c&&e(w),c&&f.d(),c&&e(x),H(m,c),c&&e(p),c&&g.d(),c&&e(E),c&&T.d(),c&&e(s),c&&v.d(),c&&e(i)}}}function Qe(b){let a;return{c(){a=l("Can any Number be a Base? (video)")},l(o){a=d(o,"Can any Number be a Base? (video)")},m(o,h){r(o,a,h)},d(o){o&&e(a)}}}function Ye(b){let a,o,h,u,w,f,x,m,p,g,E,T,s,v,i,S,O,L,N,Y,K,c,I,hn,ln,dn,mn,tn,At,mt,cn,bn,un,wn,fn,gn,pn,vn,V,ct,yn,$n,xn,Tn,P,bt,En,Sn,Wn,Bn,Cn,qn,In,Nn,jn,Rn,ut,wt,ft,gt,_n,An,en,Mt,pt,Mn,kn,vt,yt,X,$t,Z,xt,Fn,Hn,Tt,Et,St,Wt,On,Ln,zn,Gn,Jn,Un,Dn,Pn,Qn,Yn,Kn,Vn,an,kt,Bt,Xn,Zn,nt,tt,et,at,rn,Ft,Ct,rt,st,nn,qt,ot,it,sn,Ht,It,on,ht,Q,Nt,ae=b[0]([4,2,0],10,"")+"",re=b[0]([1,1,0,1,0,0,1,0,0],2,"")+"",se=jt(`
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
`)+"",oe=ee(420,2)+"",ie=jt(`
\\begin{align*}
  420 \\div 7 &= 60\\ &r\\ 0\\\\
  60 \\div 7 &= 8\\ &r\\ 4\\\\
  8 \\div 7 &= 1\\ &r\\ 1\\\\
\\end{align*}
`)+"",he=ee(420,7)+"",le=B("b")+"",de=B("b-1")+"",me=B("b")+"",ce=B("b-1")+"",be=B("|b|-1")+"",ue=B("b")+"",we=b[0]([1,1,1,0],-2,"= -6")+"",fe=B("\\frac1n")+"",ge=B("\\frac1n")+"",pe=B("\\frac73")+"",ve=jt(`
\\begin{align*}
  265 \\div 7 &= 37\\ &r\\ 6, 37 \\times 3 &= 111\\\\
  111 \\div 7 &= 15\\ &r\\ 6, 15 \\times 3 &= 45\\\\
  45 \\div 7 &= 6\\ &r\\ 3, 6 \\times 3 &= 18\\\\
  18 \\div 7 &= 2\\ &r\\ 4, 2 \\times 3 &= 6\\\\
  6 \\div 7 &= 0\\ &r\\ 6, 0 \\times 3 &= 0\\\\
\\end{align*}
`)+"",ye=b[0]([6,4,3,6,6],7/3,"\\approx 265","\\frac73")+"",$e=B("\\frac37")+"",xe=B("\\frac37")+"",Te=B("\\sqrt[4]{5}")+"",Jt=parseInt("42",5)+"",Ee=B("(\\sqrt[4]5)^{2n}")+"",Se=B("\\sqrt[4]{5}")+"",We=b[0]([1,2,4,2,1],Math.pow(5,.25),"= 24.622 \\Leftrightarrow [6 + 2 \\times 5^{\\frac34} + 4 \\times 5^{\\frac24} + 2 \\times 5^{\\frac14}]","\\sqrt[4]{5}")+"",Be=B("\\sqrt{5}")+"",Ce=B("[1234]_{\\sqrt5} = [14 + 8 \\sqrt5]_{10}")+"",qe=B("\\pi")+"",Ie=b[0]([1,2,3],3.1415926535,"\\approx 19.15","\\pi")+"",Ne=B("[0 \\rightarrow 9, A \\rightarrow F]")+"",je=b[0]([15,1],7,"= 106_{10}")+"",Re=b[0]([7,9,10,4,5],2,"= 237")+"",_e=B("\\omega = \\frac{-1}2 + \\frac{i\\sqrt3}2")+"",Ae=b[0]([1,2,3,4],[-.5,Math.sqrt(3)/2],"= 5 + 3 \\omega + 2\\omega^2.","ω")+"";return a=new Oe({props:{title:"Going to 3.14th base",sub:"Seeing Numbers #002",desc:"Bases other than positive integers",date:"29 May 2025"}}),h=new J({props:{top:[4,2,0]}}),p=new J({props:{top:[1,1,0,1,0,0,1,0,0],base:2}}),c=new J({props:{top:[1,1,4,0],base:7}}),V=new J({props:{top:[1,1,1,0],base:-2}}),P=new Je({props:{title:"Base ½ example",$$slots:{default:[Pe]},$$scope:{ctx:b}}}),X=new J({props:{top:[4,0,0,0,2,0,0,0,0],base:Math.pow(5,.25),base_str:"∜5"}}),Z=new J({props:{top:[4,2],base:5}}),nn=new J({props:{top:[1,2,3,4],base:5,base_str:"ω"}}),Q=new Le({props:{href:"https://www.youtube.com/watch?v=PQAhC1M93C8",$$slots:{default:[Qe]},$$scope:{ctx:b}}}),{c(){M(a.$$.fragment),o=l(`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),M(h.$$.fragment),u=l(`

or very simply `),w=new y(!1),f=l(". The same number in base 2 is "),x=new y(!1),m=l(`. Which is written as:

`),M(p.$$.fragment),g=z(),E=j("h3"),T=l("Base Conversion"),s=l(`
To convert from base 10 to base 2: divide by 2 repeatedly and record remainders.

`),v=new y(!1),i=l(`

Then we read the remainders from bottom to top (incl. the last quotient), which
gives us the binary number
`),S=new y(!1),O=l(`. as we count the number of times we divided by 2 from the
bottom up. We can also go in the other direction, from base 2 to base 7. The
easiest way to do this is to go to base 10 first, then to base 7.

`),L=new y(!1),N=l(`

which again, including the last quotient, gives us the base 7 number
`),Y=new y(!1),K=l(`.

`),M(c.$$.fragment),I=l(`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),hn=new y(!1),ln=l(`, we use the digits 0 to
`),dn=new y(!1),mn=l(` to represent the number, with the obvious exception of 0.

`),tn=j("h3"),At=l("Rational Bases"),mt=l(`
While we did say for a given base `),cn=new y(!1),bn=l(" we use the digits 0 to "),un=new y(!1),wn=l(", we'll slightly modify this to say we'll use the digits 0 to "),fn=new y(!1),gn=l(" for a base "),pn=new y(!1),vn=l(`, this would let us allow for negative bases with
just a small change in how the numbers are read.

`),M(V.$$.fragment),ct=l(`
The above number is read as `),yn=new y(!1),$n=l(`. This
time we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single part fractions,
i.e `),xn=new y(!1),Tn=l(`, we can even flip around the traditional positive
power numbers around the decimal point.

`),M(P.$$.fragment),bt=l(`

Now what if we were to consider arbitrary rational bases rather than just those
which are of thr form `),En=new y(!1),Sn=l(". So say how we write 265 in base "),Wn=new y(!1),Bn=l(`.

`),Cn=new y(!1),qn=l(`

So very simply `),In=new y(!1),Nn=l(`. The small twist here being that once we remember to divide by 7, we also
have to remember to multiply by 3 in the same iteration. This however also
implies that we can get the number 265 in base `),jn=new y(!1),Rn=l(` also for free
by just rotating around the decimal point, i.e. 6.6346, which one can trivially verify.
`),ut=j("br"),wt=z(),ft=j("br"),gt=l(`
This however also means that we will be using the same digits 0 to 6 for `),_n=new y(!1),An=l(` also, which is natural considering that for fractions <1, we don't really have
any digits, so for a number with base less than 1, we can just use the same digits
as it's inverse and then rotate around the decimal point.

`),en=j("h3"),Mt=l("Irrational and Transcendental Bases"),pt=l(`
The easiest to start with is an 'nth' root base, such as `),Mn=new y(!1),kn=l(". We can see easily that this should be related to being in base 5. So consider 42, in base 5, or "),vt=l(Jt),yt=l(` in base 10. We can very easily first write

`),M(X.$$.fragment),$t=z(),M(Z.$$.fragment),xt=l(`

Clearly we can see both the above representations are functionally equivalent with extra place values added in the 'gaps' between the integer place values. It should be trivial to see that `),Fn=new y(!1),Hn=l(` are the standard place values when we use 5 as our base.
`),Tt=j("br"),Et=z(),St=j("br"),Wt=l(`
So now if we were to create a new number 421 in base `),On=new y(!1),Ln=l(", it's value would be "),zn=new y(!1),Gn=l(". Or as an exercise you can verify that converting "),Jn=new y(!1),Un=l(" to ten for 1234, is "),Dn=new y(!1),Pn=l(". Finally we can use these ideas to use the base "),Qn=new y(!1),Yn=l(". Then 123 in base 3 would be "),Kn=new y(!1),Vn=l(`.

`),an=j("h3"),kt=l("Removing Constraints"),Bt=l(`
So far, above we set some very arbitrary rules on what digits we can use for what base. In reality however those are the standard preferences for the given bases, there don't actually exist any constraints on what base we can use.

Consider using the symbols of base 16, i.e, `),Xn=new y(!1),Zn=l(", but in base 7. Then the number F1 would be "),nt=new y(!1),tt=l(". There are actually no limits to what digit we choose every step. '79A45' is a valid base 2 number as long as we do the place value algebra for it correctly "),et=new y(!1),at=z(),rn=j("h3"),Ft=l("Going further"),Ct=l(`
Not only can transcendental numbers be bases, so can complex numbers be. Consider a cube root of unity, `),rt=new y(!1),st=l(`. So a simple number like 1234 would be

`),M(nn.$$.fragment),qt=z(),ot=new y(!1),it=z(),sn=j("h4"),Ht=l("References"),It=z(),on=j("ul"),ht=j("li"),M(Q.$$.fragment),this.h()},l(n){k(a.$$.fragment,n),o=d(n,`

Numbers are usually represented in base 10, but they can be represented in any
base. The most common being are binary (base 2), decimal (base 10), and
hexadecimal (base 16). Binary, Hexadecimal, and Octal all being formats
computers just cannot get enough of. As a short introduction to bases, this is
how we read the number 420 in base 10:

`),k(h.$$.fragment,n),u=d(n,`

or very simply `),w=$(n,!1),f=d(n,". The same number in base 2 is "),x=$(n,!1),m=d(n,`. Which is written as:

`),k(p.$$.fragment,n),g=G(n),E=R(n,"H3",{});var t=q(E);T=d(t,"Base Conversion"),t.forEach(e),s=d(n,`
To convert from base 10 to base 2: divide by 2 repeatedly and record remainders.

`),v=$(n,!1),i=d(n,`

Then we read the remainders from bottom to top (incl. the last quotient), which
gives us the binary number
`),S=$(n,!1),O=d(n,`. as we count the number of times we divided by 2 from the
bottom up. We can also go in the other direction, from base 2 to base 7. The
easiest way to do this is to go to base 10 first, then to base 7.

`),L=$(n,!1),N=d(n,`

which again, including the last quotient, gives us the base 7 number
`),Y=$(n,!1),K=d(n,`.

`),k(c.$$.fragment,n),I=d(n,`

With that out of the way, we can now look at some more interesting bases. In
general as long as we have some base `),hn=$(n,!1),ln=d(n,`, we use the digits 0 to
`),dn=$(n,!1),mn=d(n,` to represent the number, with the obvious exception of 0.

`),tn=R(n,"H3",{});var lt=q(tn);At=d(lt,"Rational Bases"),lt.forEach(e),mt=d(n,`
While we did say for a given base `),cn=$(n,!1),bn=d(n," we use the digits 0 to "),un=$(n,!1),wn=d(n,", we'll slightly modify this to say we'll use the digits 0 to "),fn=$(n,!1),gn=d(n," for a base "),pn=$(n,!1),vn=d(n,`, this would let us allow for negative bases with
just a small change in how the numbers are read.

`),k(V.$$.fragment,n),ct=d(n,`
The above number is read as `),yn=$(n,!1),$n=d(n,`. This
time we can see we're not only allowed addition but also subtraction depending
upon which order-of-magnitude place we're in. Negative numbers can be taken one
step forward with rational powers (say <1). If we use single part fractions,
i.e `),xn=$(n,!1),Tn=d(n,`, we can even flip around the traditional positive
power numbers around the decimal point.

`),k(P.$$.fragment,n),bt=d(n,`

Now what if we were to consider arbitrary rational bases rather than just those
which are of thr form `),En=$(n,!1),Sn=d(n,". So say how we write 265 in base "),Wn=$(n,!1),Bn=d(n,`.

`),Cn=$(n,!1),qn=d(n,`

So very simply `),In=$(n,!1),Nn=d(n,`. The small twist here being that once we remember to divide by 7, we also
have to remember to multiply by 3 in the same iteration. This however also
implies that we can get the number 265 in base `),jn=$(n,!1),Rn=d(n,` also for free
by just rotating around the decimal point, i.e. 6.6346, which one can trivially verify.
`),ut=R(n,"BR",{}),wt=G(n),ft=R(n,"BR",{}),gt=d(n,`
This however also means that we will be using the same digits 0 to 6 for `),_n=$(n,!1),An=d(n,` also, which is natural considering that for fractions <1, we don't really have
any digits, so for a number with base less than 1, we can just use the same digits
as it's inverse and then rotate around the decimal point.

`),en=R(n,"H3",{});var dt=q(en);Mt=d(dt,"Irrational and Transcendental Bases"),dt.forEach(e),pt=d(n,`
The easiest to start with is an 'nth' root base, such as `),Mn=$(n,!1),kn=d(n,". We can see easily that this should be related to being in base 5. So consider 42, in base 5, or "),vt=d(n,Jt),yt=d(n,` in base 10. We can very easily first write

`),k(X.$$.fragment,n),$t=G(n),k(Z.$$.fragment,n),xt=d(n,`

Clearly we can see both the above representations are functionally equivalent with extra place values added in the 'gaps' between the integer place values. It should be trivial to see that `),Fn=$(n,!1),Hn=d(n,` are the standard place values when we use 5 as our base.
`),Tt=R(n,"BR",{}),Et=G(n),St=R(n,"BR",{}),Wt=d(n,`
So now if we were to create a new number 421 in base `),On=$(n,!1),Ln=d(n,", it's value would be "),zn=$(n,!1),Gn=d(n,". Or as an exercise you can verify that converting "),Jn=$(n,!1),Un=d(n," to ten for 1234, is "),Dn=$(n,!1),Pn=d(n,". Finally we can use these ideas to use the base "),Qn=$(n,!1),Yn=d(n,". Then 123 in base 3 would be "),Kn=$(n,!1),Vn=d(n,`.

`),an=R(n,"H3",{});var Ut=q(an);kt=d(Ut,"Removing Constraints"),Ut.forEach(e),Bt=d(n,`
So far, above we set some very arbitrary rules on what digits we can use for what base. In reality however those are the standard preferences for the given bases, there don't actually exist any constraints on what base we can use.

Consider using the symbols of base 16, i.e, `),Xn=$(n,!1),Zn=d(n,", but in base 7. Then the number F1 would be "),nt=$(n,!1),tt=d(n,". There are actually no limits to what digit we choose every step. '79A45' is a valid base 2 number as long as we do the place value algebra for it correctly "),et=$(n,!1),at=G(n),rn=R(n,"H3",{});var Dt=q(rn);Ft=d(Dt,"Going further"),Dt.forEach(e),Ct=d(n,`
Not only can transcendental numbers be bases, so can complex numbers be. Consider a cube root of unity, `),rt=$(n,!1),st=d(n,`. So a simple number like 1234 would be

`),k(nn.$$.fragment,n),qt=G(n),ot=$(n,!1),it=G(n),sn=R(n,"H4",{});var Pt=q(sn);Ht=d(Pt,"References"),Pt.forEach(e),It=G(n),on=R(n,"UL",{});var Qt=q(on);ht=R(Qt,"LI",{});var Yt=q(ht);k(Q.$$.fragment,Yt),Yt.forEach(e),Qt.forEach(e),this.h()},h(){w.a=f,x.a=m,v.a=i,S.a=O,L.a=N,Y.a=K,hn.a=ln,dn.a=mn,cn.a=bn,un.a=wn,fn.a=gn,pn.a=vn,yn.a=$n,xn.a=Tn,En.a=Sn,Wn.a=Bn,Cn.a=qn,In.a=Nn,jn.a=Rn,_n.a=An,Mn.a=kn,Fn.a=Hn,On.a=Ln,zn.a=Gn,Jn.a=Un,Dn.a=Pn,Qn.a=Yn,Kn.a=Vn,Xn.a=Zn,nt.a=tt,et.a=at,rt.a=st,ot.a=it},m(n,t){F(a,n,t),r(n,o,t),F(h,n,t),r(n,u,t),w.m(ae,n,t),r(n,f,t),x.m(re,n,t),r(n,m,t),F(p,n,t),r(n,g,t),r(n,E,t),C(E,T),r(n,s,t),v.m(se,n,t),r(n,i,t),S.m(oe,n,t),r(n,O,t),L.m(ie,n,t),r(n,N,t),Y.m(he,n,t),r(n,K,t),F(c,n,t),r(n,I,t),hn.m(le,n,t),r(n,ln,t),dn.m(de,n,t),r(n,mn,t),r(n,tn,t),C(tn,At),r(n,mt,t),cn.m(me,n,t),r(n,bn,t),un.m(ce,n,t),r(n,wn,t),fn.m(be,n,t),r(n,gn,t),pn.m(ue,n,t),r(n,vn,t),F(V,n,t),r(n,ct,t),yn.m(we,n,t),r(n,$n,t),xn.m(fe,n,t),r(n,Tn,t),F(P,n,t),r(n,bt,t),En.m(ge,n,t),r(n,Sn,t),Wn.m(pe,n,t),r(n,Bn,t),Cn.m(ve,n,t),r(n,qn,t),In.m(ye,n,t),r(n,Nn,t),jn.m($e,n,t),r(n,Rn,t),r(n,ut,t),r(n,wt,t),r(n,ft,t),r(n,gt,t),_n.m(xe,n,t),r(n,An,t),r(n,en,t),C(en,Mt),r(n,pt,t),Mn.m(Te,n,t),r(n,kn,t),r(n,vt,t),r(n,yt,t),F(X,n,t),r(n,$t,t),F(Z,n,t),r(n,xt,t),Fn.m(Ee,n,t),r(n,Hn,t),r(n,Tt,t),r(n,Et,t),r(n,St,t),r(n,Wt,t),On.m(Se,n,t),r(n,Ln,t),zn.m(We,n,t),r(n,Gn,t),Jn.m(Be,n,t),r(n,Un,t),Dn.m(Ce,n,t),r(n,Pn,t),Qn.m(qe,n,t),r(n,Yn,t),Kn.m(Ie,n,t),r(n,Vn,t),r(n,an,t),C(an,kt),r(n,Bt,t),Xn.m(Ne,n,t),r(n,Zn,t),nt.m(je,n,t),r(n,tt,t),et.m(Re,n,t),r(n,at,t),r(n,rn,t),C(rn,Ft),r(n,Ct,t),rt.m(_e,n,t),r(n,st,t),F(nn,n,t),r(n,qt,t),ot.m(Ae,n,t),r(n,it,t),r(n,sn,t),C(sn,Ht),r(n,It,t),r(n,on,t),C(on,ht),F(Q,ht,null),Nt=!0},p(n,[t]){const lt={};16&t&&(lt.$$scope={dirty:t,ctx:n}),P.$set(lt);const dt={};16&t&&(dt.$$scope={dirty:t,ctx:n}),Q.$set(dt)},i(n){Nt||(_(a.$$.fragment,n),_(h.$$.fragment,n),_(p.$$.fragment,n),_(c.$$.fragment,n),_(V.$$.fragment,n),_(P.$$.fragment,n),_(X.$$.fragment,n),_(Z.$$.fragment,n),_(nn.$$.fragment,n),_(Q.$$.fragment,n),Nt=!0)},o(n){A(a.$$.fragment,n),A(h.$$.fragment,n),A(p.$$.fragment,n),A(c.$$.fragment,n),A(V.$$.fragment,n),A(P.$$.fragment,n),A(X.$$.fragment,n),A(Z.$$.fragment,n),A(nn.$$.fragment,n),A(Q.$$.fragment,n),Nt=!1},d(n){H(a,n),n&&e(o),H(h,n),n&&e(u),n&&w.d(),n&&e(f),n&&x.d(),n&&e(m),H(p,n),n&&e(g),n&&e(E),n&&e(s),n&&v.d(),n&&e(i),n&&S.d(),n&&e(O),n&&L.d(),n&&e(N),n&&Y.d(),n&&e(K),H(c,n),n&&e(I),n&&hn.d(),n&&e(ln),n&&dn.d(),n&&e(mn),n&&e(tn),n&&e(mt),n&&cn.d(),n&&e(bn),n&&un.d(),n&&e(wn),n&&fn.d(),n&&e(gn),n&&pn.d(),n&&e(vn),H(V,n),n&&e(ct),n&&yn.d(),n&&e($n),n&&xn.d(),n&&e(Tn),H(P,n),n&&e(bt),n&&En.d(),n&&e(Sn),n&&Wn.d(),n&&e(Bn),n&&Cn.d(),n&&e(qn),n&&In.d(),n&&e(Nn),n&&jn.d(),n&&e(Rn),n&&e(ut),n&&e(wt),n&&e(ft),n&&e(gt),n&&_n.d(),n&&e(An),n&&e(en),n&&e(pt),n&&Mn.d(),n&&e(kn),n&&e(vt),n&&e(yt),H(X,n),n&&e($t),H(Z,n),n&&e(xt),n&&Fn.d(),n&&e(Hn),n&&e(Tt),n&&e(Et),n&&e(St),n&&e(Wt),n&&On.d(),n&&e(Ln),n&&zn.d(),n&&e(Gn),n&&Jn.d(),n&&e(Un),n&&Dn.d(),n&&e(Pn),n&&Qn.d(),n&&e(Yn),n&&Kn.d(),n&&e(Vn),n&&e(an),n&&e(Bt),n&&Xn.d(),n&&e(Zn),n&&nt.d(),n&&e(tt),n&&et.d(),n&&e(at),n&&e(rn),n&&e(Ct),n&&rt.d(),n&&e(st),H(nn,n),n&&e(qt),n&&ot.d(),n&&e(it),n&&e(sn),n&&e(It),n&&e(on),H(Q)}}}function ee(b,a){return b.toString(a).toUpperCase()}function Ke(b){return[function(a=[],o=-2,h="",u=""){a.reverse(),u.length===0&&(u=o.toString());let w="",f="";for(let x=0;x<a.length;x++){let m=a[x];w=`${m} \\cdot (${u})^${x}`+(w.length>0?" + ":"")+w,typeof o!="object"&&(f=`${m} \\cdot (${Math.pow(o,x).toFixed(2)})`+(f.length>0?" + ":"")+f)}return f.length>1&&(f="= "+f),B(`${w} ${f} ${h}`)}]}class Ze extends Lt{constructor(a){super(),zt(this,a,Ke,Ye,Gt,{})}}export{Ze as default};
