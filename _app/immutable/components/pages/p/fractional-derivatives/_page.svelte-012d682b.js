import{S as ha,i as la,s as wa,x as $n,r as Fn,d as t,H as o,e as Hn,y as bn,v as In,j as r,z as s,f as Nn,h as _n,k as e,A as Dn,m as i,n as ua,t as Wn,b as Gn,B as Sn,q as An,o as va}from"../../../../chunks/index-214b3cef.js";import{_ as p,a as c,M as pa,D as ga,d as zn}from"../../../../chunks/index-a7fd1908.js";import{A as xa}from"../../../../chunks/accord-ff886527.js";import{R as ya}from"../../../../chunks/refs-56757f58.js";function ka(Tn){let m,w,d,u,h,g=p`
        f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n
    `+"",x=p`
        f(x) = \\int_0^{\\infty} \\frac{D^t f(a)}{\\Gamma(t+1)} (x-a)^t dt
    `+"";return{c(){m=t(`The way the Taylor's series is defined in its discrete form is as follows:

    `),w=new o(!1),d=t(`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),u=new o(!1),h=An(),this.h()},l(f){m=r(f,`The way the Taylor's series is defined in its discrete form is as follows:

    `),w=s(f,!1),d=r(f,`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),u=s(f,!1),h=An(),this.h()},h(){w.a=d,u.a=h},m(f,l){i(f,m,l),w.m(g,f,l),i(f,d,l),u.m(x,f,l),i(f,h,l)},p:va,d(f){f&&e(m),f&&w.d(),f&&e(d),f&&e(h),f&&u.d()}}}function $a(Tn){let m,w,d,u,h,g,x,f,l,b,D,W,G,S,T,q,F,I,y,qn,pn,gn,z,B,H,N,_,A,O,j,M,R,V,X,E,J,L,P,Q,Y,C,K,U,Z,nn,an,en,tn,rn,on,sn,fn,$,xn,cn,mn,dn,hn,ln,wn,un,vn,v,yn,k,kn,On=p`
\\frac{d^2}{dx^2} f(x) = \\frac{d}{dx} \\left( \\frac{d}{dx} f(x) \\right) \\\\
\\frac{d}{dx} f(x) = \\frac{d^{0.5}}{dx^{0.5}} \\left( \\frac{d^{0.5}}{dx^{0.5}} f(x) \\right) \\\\
`+"",jn=c`D^k = \\frac{d^k}{dx^k}`+"",Mn=c`x^n`+"",Rn=p`
    \\frac{d^k}{dx^k} x^n = D^k x^n  =\\frac{n!}{(n-k)!} x^{n-k} = \\frac{\\Gamma(n+1)}{\\Gamma(n-k+1)} x^{n-k}
`+"",Vn=p`D^{0.5} = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} x^{n-\\frac12}`+"",Xn=p`D^{0.5} D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} \\cdot \\frac{\\Gamma(n-\\frac12+1)}{\\Gamma(n-1+1)} x^{n-1} = \\frac{\\Gamma(n+1)}{\\Gamma(n-1+1)} x^{n-1} = n x^{n-1} = D x^n.`+"",En=c`D^{0.5} x = \\frac{2}{\\sqrt{\\pi}} \\sqrt{x}`+"",Jn=c`e^{kx}`+"",Ln=c`D e^{kx} = k e^{kx}`+"",Pn=c`D^2 e^{kx} = k^2 e^{kx}`+"",Qn=c`D^{\\alpha} e^{kx} = k^{\\alpha} e^{kx}`+"",Yn=c`D^{0.5} e^{kx} = \\sqrt{k} e^{kx}`+"",Cn=c`D^{0.5}`+"",Kn=c`D e^{kx}`+"",Un=c`k=2, \\alpha=i`+"",Zn=p`
\\begin{align*}
    D^{i} e^{2x} &= 2^i e^{2x}
    &= e^{i \\ln2} e^{2x}
    &= (\\cos(\\ln2) + i \\sin(\\ln2)) e^{2x}
\\end{align*}
`+"",na=c`D^i e^{ix}`+"",aa=c`i^i e^{ix}`+"",ea=c`e^{-\\frac{\\pi}{2}} e^{ix}`+"",ia=c`\\cos x`+"",ta=c`\\cos x = \\frac{e^{ix} + e^{-ix}}{2}`+"",ra=c`D^{\\alpha} \\cos x = \\cos x + \\frac{\\pi}2 \\alpha`+"",oa=c`D^i x`+"",sa=c`D^i x`+"",fa=c`D^i x = \\frac{1}{\\Gamma(2-i)} x^{1 - i}`+"",ca=c`\\frac{1}{\\Gamma(2-i)} = \\frac{i-1}{2\\pi}\\Gamma(i)`+"",ma=c`x^{1 - i} = x \\cos (\\ln x) + i x \\sin(\\ln x)`+"",da=p`
    D^i x = \\frac{i-1}{2\\pi} \\Gamma(i) \\left( x \\cos (\\ln x) + i x \\sin(\\ln x) \\right)
`+"";return m=new pa({props:{title:"Fractional, complex, and complex fractional derivatives",sub:"Recreational Math #003",desc:"Non-integer and other continuous derivatives.",date:"29 June 2025",wallpaper:"aFrlaatvtx"}}),d=new ga({props:{generics:{N:["n"],R:["x","y","z"],fXX:["f"]},list:[zn("D","Derivative operator"),zn("k","Variable positive integer"),zn("α","Variable real")]}}),v=new xa({props:{title:"Continuous Taylor's Series",$$slots:{default:[ka]},$$scope:{ctx:Tn}}}),k=new ya({props:{list:[["Fractional Derivatives (playlist)","https://www.youtube.com/playlist?list=PLJb1qAQIrmmB_ma3YrfuOXTPOQawokYV_"],["Gamma Function","https://en.m.wikipedia.org/wiki/Gamma_function"]]}}),{c(){$n(m.$$.fragment),w=Fn(),$n(d.$$.fragment),u=t(`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),h=new o(!1),g=t(`

First and foremost, we define `),x=new o(!1),f=t(` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),l=new o(!1),b=t(`
which, in general, is

`),D=new o(!1),W=t(`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),G=new o(!1),S=t(`. We can
now apply this twice to get the 1st derivative:

`),T=new o(!1),q=t(`

So one can then see that `),F=new o(!1),I=t(`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),y=Hn("h3"),qn=t("Derivatives of "),pn=new o(!1),gn=t(`
We know the basic ones like `),z=new o(!1),B=t(` and
`),H=new o(!1),N=t(`. From the pattern, we would expect that
`),_=new o(!1),A=t(", which would imply "),O=new o(!1),j=t(`.
It is trivial to see, if we apply `),M=new o(!1),R=t(" twice, we get "),V=new o(!1),X=t(`
back. So then what happens if we feed in `),E=new o(!1),J=Fn(),L=new o(!1),P=t(`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient. We can now even try to find `),Q=new o(!1),Y=t(" which would be "),C=new o(!1),K=t(`
or `),U=new o(!1),Z=t(`. Now that we took the imaginary derivative of
a complex function, we got a real coefficient. In general, we can safely say
that non-integer derivatives may give us a real or complex result. Now if we
want a the derivative of say `),nn=new o(!1),an=t(", we can represent "),en=new o(!1),tn=t(`
and then proceed from there. One can verify that `),rn=new o(!1),on=t(`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),sn=new o(!1),fn=t(`?

`),$=Hn("h3"),xn=t(`
Simple application of the definition gives us `),cn=new o(!1),mn=t(`

Here `),dn=new o(!1),hn=t(", and "),ln=new o(!1),wn=t(`.
Giving us

`),un=new o(!1),vn=t(`

Absolute insanity.

`),$n(v.$$.fragment),yn=Fn(),$n(k.$$.fragment),this.h()},l(n){bn(m.$$.fragment,n),w=In(n),bn(d.$$.fragment,n),u=r(n,`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),h=s(n,!1),g=r(n,`

First and foremost, we define `),x=s(n,!1),f=r(n,` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),l=s(n,!1),b=r(n,`
which, in general, is

`),D=s(n,!1),W=r(n,`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),G=s(n,!1),S=r(n,`. We can
now apply this twice to get the 1st derivative:

`),T=s(n,!1),q=r(n,`

So one can then see that `),F=s(n,!1),I=r(n,`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),y=Nn(n,"H3",{});var a=_n(y);qn=r(a,"Derivatives of "),pn=s(a,!1),a.forEach(e),gn=r(n,`
We know the basic ones like `),z=s(n,!1),B=r(n,` and
`),H=s(n,!1),N=r(n,`. From the pattern, we would expect that
`),_=s(n,!1),A=r(n,", which would imply "),O=s(n,!1),j=r(n,`.
It is trivial to see, if we apply `),M=s(n,!1),R=r(n," twice, we get "),V=s(n,!1),X=r(n,`
back. So then what happens if we feed in `),E=s(n,!1),J=In(n),L=s(n,!1),P=r(n,`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient. We can now even try to find `),Q=s(n,!1),Y=r(n," which would be "),C=s(n,!1),K=r(n,`
or `),U=s(n,!1),Z=r(n,`. Now that we took the imaginary derivative of
a complex function, we got a real coefficient. In general, we can safely say
that non-integer derivatives may give us a real or complex result. Now if we
want a the derivative of say `),nn=s(n,!1),an=r(n,", we can represent "),en=s(n,!1),tn=r(n,`
and then proceed from there. One can verify that `),rn=s(n,!1),on=r(n,`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),sn=s(n,!1),fn=r(n,`?

`),$=Nn(n,"H3",{}),_n($).forEach(e),xn=r(n,`
Simple application of the definition gives us `),cn=s(n,!1),mn=r(n,`

Here `),dn=s(n,!1),hn=r(n,", and "),ln=s(n,!1),wn=r(n,`.
Giving us

`),un=s(n,!1),vn=r(n,`

Absolute insanity.

`),bn(v.$$.fragment,n),yn=In(n),bn(k.$$.fragment,n),this.h()},h(){h.a=g,x.a=f,l.a=b,D.a=W,G.a=S,T.a=q,F.a=I,pn.a=null,z.a=B,H.a=N,_.a=A,O.a=j,M.a=R,V.a=X,E.a=J,L.a=P,Q.a=Y,C.a=K,U.a=Z,nn.a=an,en.a=tn,rn.a=on,sn.a=fn,cn.a=mn,dn.a=hn,ln.a=wn,un.a=vn},m(n,a){Dn(m,n,a),i(n,w,a),Dn(d,n,a),i(n,u,a),h.m(On,n,a),i(n,g,a),x.m(jn,n,a),i(n,f,a),l.m(Mn,n,a),i(n,b,a),D.m(Rn,n,a),i(n,W,a),G.m(Vn,n,a),i(n,S,a),T.m(Xn,n,a),i(n,q,a),F.m(En,n,a),i(n,I,a),i(n,y,a),ua(y,qn),pn.m(Jn,y),i(n,gn,a),z.m(Ln,n,a),i(n,B,a),H.m(Pn,n,a),i(n,N,a),_.m(Qn,n,a),i(n,A,a),O.m(Yn,n,a),i(n,j,a),M.m(Cn,n,a),i(n,R,a),V.m(Kn,n,a),i(n,X,a),E.m(Un,n,a),i(n,J,a),L.m(Zn,n,a),i(n,P,a),Q.m(na,n,a),i(n,Y,a),C.m(aa,n,a),i(n,K,a),U.m(ea,n,a),i(n,Z,a),nn.m(ia,n,a),i(n,an,a),en.m(ta,n,a),i(n,tn,a),rn.m(ra,n,a),i(n,on,a),sn.m(oa,n,a),i(n,fn,a),i(n,$,a),$.innerHTML=sa,i(n,xn,a),cn.m(fa,n,a),i(n,mn,a),dn.m(ca,n,a),i(n,hn,a),ln.m(ma,n,a),i(n,wn,a),un.m(da,n,a),i(n,vn,a),Dn(v,n,a),i(n,yn,a),Dn(k,n,a),kn=!0},p(n,[a]){const Bn={};1&a&&(Bn.$$scope={dirty:a,ctx:n}),v.$set(Bn)},i(n){kn||(Wn(m.$$.fragment,n),Wn(d.$$.fragment,n),Wn(v.$$.fragment,n),Wn(k.$$.fragment,n),kn=!0)},o(n){Gn(m.$$.fragment,n),Gn(d.$$.fragment,n),Gn(v.$$.fragment,n),Gn(k.$$.fragment,n),kn=!1},d(n){Sn(m,n),n&&e(w),Sn(d,n),n&&e(u),n&&h.d(),n&&e(g),n&&x.d(),n&&e(f),n&&l.d(),n&&e(b),n&&D.d(),n&&e(W),n&&G.d(),n&&e(S),n&&T.d(),n&&e(q),n&&F.d(),n&&e(I),n&&e(y),n&&e(gn),n&&z.d(),n&&e(B),n&&H.d(),n&&e(N),n&&_.d(),n&&e(A),n&&O.d(),n&&e(j),n&&M.d(),n&&e(R),n&&V.d(),n&&e(X),n&&E.d(),n&&e(J),n&&L.d(),n&&e(P),n&&Q.d(),n&&e(Y),n&&C.d(),n&&e(K),n&&U.d(),n&&e(Z),n&&nn.d(),n&&e(an),n&&en.d(),n&&e(tn),n&&rn.d(),n&&e(on),n&&sn.d(),n&&e(fn),n&&e($),n&&e(xn),n&&cn.d(),n&&e(mn),n&&dn.d(),n&&e(hn),n&&ln.d(),n&&e(wn),n&&un.d(),n&&e(vn),Sn(v,n),n&&e(yn),Sn(k,n)}}}class Sa extends ha{constructor(m){super(),la(this,m,null,$a,wa,{})}}export{Sa as default};
