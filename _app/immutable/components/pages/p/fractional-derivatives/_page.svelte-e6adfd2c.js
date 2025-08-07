import{S as Ga,i as Wa,s as Sa,x as In,r as Tn,d as t,H as o,e as F,y as Hn,v as qn,j as r,z as s,f as I,h as T,k as e,A as zn,m as i,n as Bn,t as En,b as Ln,B as Nn,q as Yn,o as Fa}from"../../../../chunks/index-0660b8b2.js";import{_ as $,a as l,M as Ia,D as Ta,d as Vn}from"../../../../chunks/index-c1fdaaf7.js";import{A as Ha}from"../../../../chunks/accord-cbeada10.js";import{L as Cn}from"../../../../chunks/link-1839ff98.js";function qa(y){let f,c,d,u,h,k=$`
        f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n
    `+"",b=$`
        f(x) = \\int_0^{\\infty} \\frac{D^t f(a)}{\\Gamma(t+1)} (x-a)^t dt
    `+"";return{c(){f=t(`The way the Taylor's series is defined in its discrete form is as follows:

    `),c=new o(!1),d=t(`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),u=new o(!1),h=Yn(),this.h()},l(m){f=r(m,`The way the Taylor's series is defined in its discrete form is as follows:

    `),c=s(m,!1),d=r(m,`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),u=s(m,!1),h=Yn(),this.h()},h(){c.a=d,u.a=h},m(m,w){i(m,f,w),c.m(k,m,w),i(m,d,w),u.m(b,m,w),i(m,h,w)},p:Fa,d(m){m&&e(f),m&&c.d(),m&&e(d),m&&e(h),m&&u.d()}}}function za(y){let f;return{c(){f=t("Fractional Derivatives (playlist)")},l(c){f=r(c,"Fractional Derivatives (playlist)")},m(c,d){i(c,f,d)},d(c){c&&e(f)}}}function Ba(y){let f;return{c(){f=t("Gamma Function")},l(c){f=r(c,"Gamma Function")},m(c,d){i(c,f,d)},d(c){c&&e(f)}}}function Ea(y){let f,c,d,u,h,k,b,m,w,H,q,z,B,E,L,N,_,A,D,Xn,_n,An,O,R,j,M,V,X,J,P,Q,Y,C,U,K,Z,nn,an,en,tn,rn,on,sn,fn,cn,mn,ln,dn,hn,wn,un,vn,W,On,pn,gn,xn,$n,yn,kn,bn,Dn,v,Rn,S,Jn,jn,p,Gn,g,Pn,Wn,x,Mn,Un=$`
\\frac{d^2}{dx^2} f(x) = \\frac{d}{dx} \\left( \\frac{d}{dx} f(x) \\right) \\\\
\\frac{d}{dx} f(x) = \\frac{d^{0.5}}{dx^{0.5}} \\left( \\frac{d^{0.5}}{dx^{0.5}} f(x) \\right) \\\\
`+"",Kn=l`D^k = \\frac{d^k}{dx^k}`+"",Zn=l`x^n`+"",na=$`
    \\frac{d^k}{dx^k} x^n = D^k x^n  =\\frac{n!}{(n-k)!} x^{n-k} = \\frac{\\Gamma(n+1)}{\\Gamma(n-k+1)} x^{n-k}
`+"",aa=$`D^{0.5} = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} x^{n-\\frac12}`+"",ea=$`D^{0.5} D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} \\cdot \\frac{\\Gamma(n-\\frac12+1)}{\\Gamma(n-1+1)} x^{n-1} = \\frac{\\Gamma(n+1)}{\\Gamma(n-1+1)} x^{n-1} = n x^{n-1} = D x^n.`+"",ia=l`D^{0.5} x = \\frac{2}{\\sqrt{\\pi}} \\sqrt{x}`+"",ta=l`e^{kx}`+"",ra=l`D e^{kx} = k e^{kx}`+"",oa=l`D^2 e^{kx} = k^2 e^{kx}`+"",sa=l`D^{\\alpha} e^{kx} = k^{\\alpha} e^{kx}`+"",fa=l`D^{0.5} e^{kx} = \\sqrt{k} e^{kx}`+"",ca=l`D^{0.5}`+"",ma=l`D e^{kx}`+"",la=l`k=2, \\alpha=i`+"",da=$`
\\begin{align*}
    D^{i} e^{2x} &= 2^i e^{2x}
    &= e^{i \\ln2} e^{2x}
    &= (\\cos(\\ln2) + i \\sin(\\ln2)) e^{2x}
\\end{align*}
`+"",ha=l`D^i e^{ix}`+"",wa=l`i^i e^{ix}`+"",ua=l`e^{-\\frac{\\pi}{2}} e^{ix}`+"",va=l`\\cos x`+"",pa=l`\\cos x = \\frac{e^{ix} + e^{-ix}}{2}`+"",ga=l`D^{\\alpha} \\cos x = \\cos x + \\frac{\\pi}2 \\alpha`+"",xa=l`D^i x`+"",$a=l`D^i x`+"",ya=l`D^i x = \\frac{1}{\\Gamma(2-i)} x^{1 - i}`+"",ka=l`\\frac{1}{\\Gamma(2-i)} = \\frac{i-1}{2\\pi}\\Gamma(i)`+"",ba=l`x^{1 - i} = x \\cos (\\ln x) + i x \\sin(\\ln x)`+"",Da=$`
    D^i x = \\frac{i-1}{2\\pi} \\Gamma(i) \\left( x \\cos (\\ln x) + i x \\sin(\\ln x) \\right)
`+"";return f=new Ia({props:{title:"Fractional, complex, and complex fractional derivatives",sub:"Recreational Math #003",desc:"Non-integer and other continuous derivatives.",date:"29 June 2025",wallpaper:"aFrlaatvtx"}}),d=new Ta({props:{generics:{N:["n"],R:["x","y","z"],fXX:["f"]},list:[Vn("D","Derivative operator"),Vn("k","Variable positive integer"),Vn("α","Variable real"),Vn("Γ","Gamma function","wikipedia")]}}),v=new Ha({props:{title:"Continuous Taylor's Series",$$slots:{default:[qa]},$$scope:{ctx:y}}}),g=new Cn({props:{href:"https://www.youtube.com/playlist?list=PLJb1qAQIrmmB_ma3YrfuOXTPOQawokYV_",$$slots:{default:[za]},$$scope:{ctx:y}}}),x=new Cn({props:{href:"https://en.m.wikipedia.org/wiki/Gamma_function",$$slots:{default:[Ba]},$$scope:{ctx:y}}}),{c(){In(f.$$.fragment),c=Tn(),In(d.$$.fragment),u=t(`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),h=new o(!1),k=t(`

First and foremost, we define `),b=new o(!1),m=t(` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),w=new o(!1),H=t(`
which, in general, is

`),q=new o(!1),z=t(`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),B=new o(!1),E=t(`. We can
now apply this twice to get the 1st derivative:

`),L=new o(!1),N=t(`

So one can then see that `),_=new o(!1),A=t(`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),D=F("h3"),Xn=t("Derivatives of "),_n=new o(!1),An=t(`
We know the basic ones like `),O=new o(!1),R=t(` and
`),j=new o(!1),M=t(`. From the pattern, we would expect that
`),V=new o(!1),X=t(", which would imply "),J=new o(!1),P=t(`.
It is trivial to see, if we apply `),Q=new o(!1),Y=t(" twice, we get "),C=new o(!1),U=t(`
back. So then what happens if we feed in `),K=new o(!1),Z=Tn(),nn=new o(!1),an=t(`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient. We can now even try to find `),en=new o(!1),tn=t(" which would be "),rn=new o(!1),on=t(`
or `),sn=new o(!1),fn=t(`. Now that we took the imaginary derivative of
a complex function, we got a real coefficient. In general, we can safely say
that non-integer derivatives may give us a real or complex result. Now if we
want a the derivative of say `),cn=new o(!1),mn=t(", we can represent "),ln=new o(!1),dn=t(`
and then proceed from there. One can verify that `),hn=new o(!1),wn=t(`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),un=new o(!1),vn=t(`?

`),W=F("h3"),On=t(`
Simple application of the definition gives us `),pn=new o(!1),gn=t(`

Here `),xn=new o(!1),$n=t(", and "),yn=new o(!1),kn=t(`.
Giving us

`),bn=new o(!1),Dn=t(`

Absolute insanity.

`),In(v.$$.fragment),Rn=Tn(),S=F("h4"),Jn=t("References"),jn=Tn(),p=F("ul"),Gn=F("li"),In(g.$$.fragment),Pn=Tn(),Wn=F("li"),In(x.$$.fragment),this.h()},l(n){Hn(f.$$.fragment,n),c=qn(n),Hn(d.$$.fragment,n),u=r(n,`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),h=s(n,!1),k=r(n,`

First and foremost, we define `),b=s(n,!1),m=r(n,` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),w=s(n,!1),H=r(n,`
which, in general, is

`),q=s(n,!1),z=r(n,`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),B=s(n,!1),E=r(n,`. We can
now apply this twice to get the 1st derivative:

`),L=s(n,!1),N=r(n,`

So one can then see that `),_=s(n,!1),A=r(n,`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),D=I(n,"H3",{});var a=T(D);Xn=r(a,"Derivatives of "),_n=s(a,!1),a.forEach(e),An=r(n,`
We know the basic ones like `),O=s(n,!1),R=r(n,` and
`),j=s(n,!1),M=r(n,`. From the pattern, we would expect that
`),V=s(n,!1),X=r(n,", which would imply "),J=s(n,!1),P=r(n,`.
It is trivial to see, if we apply `),Q=s(n,!1),Y=r(n," twice, we get "),C=s(n,!1),U=r(n,`
back. So then what happens if we feed in `),K=s(n,!1),Z=qn(n),nn=s(n,!1),an=r(n,`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient. We can now even try to find `),en=s(n,!1),tn=r(n," which would be "),rn=s(n,!1),on=r(n,`
or `),sn=s(n,!1),fn=r(n,`. Now that we took the imaginary derivative of
a complex function, we got a real coefficient. In general, we can safely say
that non-integer derivatives may give us a real or complex result. Now if we
want a the derivative of say `),cn=s(n,!1),mn=r(n,", we can represent "),ln=s(n,!1),dn=r(n,`
and then proceed from there. One can verify that `),hn=s(n,!1),wn=r(n,`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),un=s(n,!1),vn=r(n,`?

`),W=I(n,"H3",{}),T(W).forEach(e),On=r(n,`
Simple application of the definition gives us `),pn=s(n,!1),gn=r(n,`

Here `),xn=s(n,!1),$n=r(n,", and "),yn=s(n,!1),kn=r(n,`.
Giving us

`),bn=s(n,!1),Dn=r(n,`

Absolute insanity.

`),Hn(v.$$.fragment,n),Rn=qn(n),S=I(n,"H4",{});var Sn=T(S);Jn=r(Sn,"References"),Sn.forEach(e),jn=qn(n),p=I(n,"UL",{});var G=T(p);Gn=I(G,"LI",{});var Fn=T(Gn);Hn(g.$$.fragment,Fn),Fn.forEach(e),Pn=qn(G),Wn=I(G,"LI",{});var Qn=T(Wn);Hn(x.$$.fragment,Qn),Qn.forEach(e),G.forEach(e),this.h()},h(){h.a=k,b.a=m,w.a=H,q.a=z,B.a=E,L.a=N,_.a=A,_n.a=null,O.a=R,j.a=M,V.a=X,J.a=P,Q.a=Y,C.a=U,K.a=Z,nn.a=an,en.a=tn,rn.a=on,sn.a=fn,cn.a=mn,ln.a=dn,hn.a=wn,un.a=vn,pn.a=gn,xn.a=$n,yn.a=kn,bn.a=Dn},m(n,a){zn(f,n,a),i(n,c,a),zn(d,n,a),i(n,u,a),h.m(Un,n,a),i(n,k,a),b.m(Kn,n,a),i(n,m,a),w.m(Zn,n,a),i(n,H,a),q.m(na,n,a),i(n,z,a),B.m(aa,n,a),i(n,E,a),L.m(ea,n,a),i(n,N,a),_.m(ia,n,a),i(n,A,a),i(n,D,a),Bn(D,Xn),_n.m(ta,D),i(n,An,a),O.m(ra,n,a),i(n,R,a),j.m(oa,n,a),i(n,M,a),V.m(sa,n,a),i(n,X,a),J.m(fa,n,a),i(n,P,a),Q.m(ca,n,a),i(n,Y,a),C.m(ma,n,a),i(n,U,a),K.m(la,n,a),i(n,Z,a),nn.m(da,n,a),i(n,an,a),en.m(ha,n,a),i(n,tn,a),rn.m(wa,n,a),i(n,on,a),sn.m(ua,n,a),i(n,fn,a),cn.m(va,n,a),i(n,mn,a),ln.m(pa,n,a),i(n,dn,a),hn.m(ga,n,a),i(n,wn,a),un.m(xa,n,a),i(n,vn,a),i(n,W,a),W.innerHTML=$a,i(n,On,a),pn.m(ya,n,a),i(n,gn,a),xn.m(ka,n,a),i(n,$n,a),yn.m(ba,n,a),i(n,kn,a),bn.m(Da,n,a),i(n,Dn,a),zn(v,n,a),i(n,Rn,a),i(n,S,a),Bn(S,Jn),i(n,jn,a),i(n,p,a),Bn(p,Gn),zn(g,Gn,null),Bn(p,Pn),Bn(p,Wn),zn(x,Wn,null),Mn=!0},p(n,[a]){const Sn={};1&a&&(Sn.$$scope={dirty:a,ctx:n}),v.$set(Sn);const G={};1&a&&(G.$$scope={dirty:a,ctx:n}),g.$set(G);const Fn={};1&a&&(Fn.$$scope={dirty:a,ctx:n}),x.$set(Fn)},i(n){Mn||(En(f.$$.fragment,n),En(d.$$.fragment,n),En(v.$$.fragment,n),En(g.$$.fragment,n),En(x.$$.fragment,n),Mn=!0)},o(n){Ln(f.$$.fragment,n),Ln(d.$$.fragment,n),Ln(v.$$.fragment,n),Ln(g.$$.fragment,n),Ln(x.$$.fragment,n),Mn=!1},d(n){Nn(f,n),n&&e(c),Nn(d,n),n&&e(u),n&&h.d(),n&&e(k),n&&b.d(),n&&e(m),n&&w.d(),n&&e(H),n&&q.d(),n&&e(z),n&&B.d(),n&&e(E),n&&L.d(),n&&e(N),n&&_.d(),n&&e(A),n&&e(D),n&&e(An),n&&O.d(),n&&e(R),n&&j.d(),n&&e(M),n&&V.d(),n&&e(X),n&&J.d(),n&&e(P),n&&Q.d(),n&&e(Y),n&&C.d(),n&&e(U),n&&K.d(),n&&e(Z),n&&nn.d(),n&&e(an),n&&en.d(),n&&e(tn),n&&rn.d(),n&&e(on),n&&sn.d(),n&&e(fn),n&&cn.d(),n&&e(mn),n&&ln.d(),n&&e(dn),n&&hn.d(),n&&e(wn),n&&un.d(),n&&e(vn),n&&e(W),n&&e(On),n&&pn.d(),n&&e(gn),n&&xn.d(),n&&e($n),n&&yn.d(),n&&e(kn),n&&bn.d(),n&&e(Dn),Nn(v,n),n&&e(Rn),n&&e(S),n&&e(jn),n&&e(p),Nn(g),Nn(x)}}}class Oa extends Ga{constructor(f){super(),Wa(this,f,null,Ea,Sa,{})}}export{Oa as default};
