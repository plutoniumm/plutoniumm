import{S as Fa,i as Ia,s as qa,x as Jn,d as t,H as o,e as l,r as Sn,y as Pn,j as r,z as s,f as w,h as T,k as e,v as Bn,A as Qn,m as i,n as Rn,t as Yn,b as Un,B as Vn,q as aa,o as Ha}from"../../../../chunks/index-166e8620.js";import{A as Ea}from"../../../../chunks/accord-ad5fd7e4.js";import{_ as k,a as m,M as La}from"../../../../chunks/meta-682270cc.js";import{L as ea}from"../../../../chunks/link-2c8c9ede.js";function _a(b){let f,c,d,u,v,D=k`
        f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n
    `+"",G=k`
        f(x) = \\int_0^{\\infty} \\frac{D^t f(a)}{\\Gamma(t+1)} (x-a)^t dt
    `+"";return{c(){f=t(`The way the Taylor's series is defined in its discrete form is as follows:

    `),c=new o(!1),d=t(`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),u=new o(!1),v=aa(),this.h()},l(h){f=r(h,`The way the Taylor's series is defined in its discrete form is as follows:

    `),c=s(h,!1),d=r(h,`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),u=s(h,!1),v=aa(),this.h()},h(){c.a=d,u.a=v},m(h,p){i(h,f,p),c.m(D,h,p),i(h,d,p),u.m(G,h,p),i(h,v,p)},p:Ha,d(h){h&&e(f),h&&c.d(),h&&e(d),h&&e(v),h&&u.d()}}}function za(b){let f;return{c(){f=t("Fractional Derivatives (playlist)")},l(c){f=r(c,"Fractional Derivatives (playlist)")},m(c,d){i(c,f,d)},d(c){c&&e(f)}}}function Aa(b){let f;return{c(){f=t("Gamma Function")},l(c){f=r(c,"Gamma Function")},m(c,d){i(c,f,d)},d(c){c&&e(f)}}}function Na(b){let f,c,d,u,v,D,G,h,p,F,I,q,H,E,L,_,W,Xn,Tn,Fn,z,A,N,O,j,M,C,J,P,Q,Y,U,V,X,K,Z,In,qn,Hn,nn,an,en,tn,rn,on,En,Ln,_n,sn,fn,cn,hn,mn,dn,ln,wn,B,zn,un,vn,An,Nn,On,pn,xn,gn,yn,$n,kn,x,jn,R,Kn,Mn,g,bn,y,Zn,Dn,$,Cn,ia=k`
\\frac{d^2}{dx^2} f(x) = \\frac{d}{dx} \\left( \\frac{d}{dx} f(x) \\right) \\\\
\\frac{d}{dx} f(x) = \\frac{d^{0.5}}{dx^{0.5}} \\left( \\frac{d^{0.5}}{dx^{0.5}} f(x) \\right) \\\\
`+"",ta=m`D^k = \\frac{d^k}{dx^k}`+"",ra=m`x^n`+"",oa=k`
    \\frac{d^k}{dx^k} x^n = D^k x^n  =\\frac{n!}{(n-k)!} x^{n-k} = \\frac{\\Gamma(n+1)}{\\Gamma(n-k+1)} x^{n-k}
`+"",sa=k`D^{0.5} = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} x^{n-\\frac12}`+"",fa=k`D^{0.5} D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} \\cdot \\frac{\\Gamma(n-\\frac12+1)}{\\Gamma(n-1+1)} x^{n-1} = \\frac{\\Gamma(n+1)}{\\Gamma(n-1+1)} x^{n-1} = n x^{n-1} = D x^n.`+"",ca=m`D^{0.5} x = \\frac{2}{\\sqrt{\\pi}} \\sqrt{x}`+"",ha=m`e^{kx}`+"",ma=m`D e^{kx} = k e^{kx}`+"",da=m`D^2 e^{kx} = k^2 e^{kx}`+"",la=m`D^{\\alpha} e^{kx} = k^{\\alpha} e^{kx}`+"",wa=m`D^{0.5} e^{kx} = \\sqrt{k} e^{kx}`+"",ua=m`D^{0.5}`+"",va=m`D e^{kx}`+"",pa=m`k=2, \\alpha=i`+"",xa=k`
\\begin{align*}
    D^{i} e^{2x} &= 2^i e^{2x}
    &= e^{i \\ln2} e^{2x}
    &= (\\cos(\\ln2) + i \\sin(\\ln2)) e^{2x}
\\end{align*}
`+"",ga=m`D^i e^{ix}`+"",ya=m`i^i e^{ix}`+"",$a=m`e^{-\\frac{\\pi}{2}} e^{ix}`+"",ka=m`\\cos x`+"",ba=m`\\cos x = \\frac{e^{ix} + e^{-ix}}{2}`+"",Da=m`D^{\\alpha} \\cos x = \\cos x + \\frac{\\pi}2 \\alpha`+"",Ga=m`D^i x`+"",Wa=m`D^i x`+"",Sa=m`D^i x = \\frac{1}{\\Gamma(2-i)} x^{1 - i}`+"",Ba=m`\\frac{1}{\\Gamma(2-i)} = \\frac{i-1}{2\\pi}\\Gamma(i)`+"",Ra=m`x^{1 - i} = x \\cos (\\ln x) + i x \\sin(\\ln x)`+"",Ta=k`
    D^i x = \\frac{i-1}{2\\pi} \\Gamma(i) \\left( x \\cos (\\ln x) + i x \\sin(\\ln x) \\right)
`+"";return f=new La({props:{title:"Fractional Complex Derivatives",sub:"Recreational Math #003",desc:"Non-integer and other continuous derivatives.",date:"29 June 2025"}}),x=new Ea({props:{title:"Continuous Taylor's Series",$$slots:{default:[_a]},$$scope:{ctx:b}}}),y=new ea({props:{href:"https://www.youtube.com/playlist?list=PLJb1qAQIrmmB_ma3YrfuOXTPOQawokYV_",$$slots:{default:[za]},$$scope:{ctx:b}}}),$=new ea({props:{href:"https://en.m.wikipedia.org/wiki/Gamma_function",$$slots:{default:[Aa]},$$scope:{ctx:b}}}),{c(){Jn(f.$$.fragment),c=t(`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),d=new o(!1),u=t(`

First and foremost, we define `),v=new o(!1),D=t(` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),G=new o(!1),h=t(`
which, in general, is

`),p=new o(!1),F=t(`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),I=new o(!1),q=t(`. We can
now apply this twice to get the 1st derivative:

`),H=new o(!1),E=t(`

So one can then see that `),L=new o(!1),_=t(`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),W=l("h3"),Xn=t("Derivatives of "),Tn=new o(!1),Fn=t(`
We know the basic ones like `),z=new o(!1),A=t(` and
`),N=new o(!1),O=t(`. From the pattern, we would expect that
`),j=new o(!1),M=t(", which would imply "),C=new o(!1),J=t(`.
It is trivial to see, if we apply `),P=new o(!1),Q=t(" twice, we get "),Y=new o(!1),U=t(`
back. So then what happens if we feed in `),V=new o(!1),X=Sn(),K=new o(!1),Z=t(`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient.
`),In=l("br"),qn=l("br"),Hn=t(`
We can now even try to find `),nn=new o(!1),an=t(" which would be "),en=new o(!1),tn=t(" or "),rn=new o(!1),on=t(`.
Now that we took the imaginary derivative of a complex function, we got a real
coefficient. In general, we can safely say that non-integer derivatives may give
us a real or complex result.
`),En=l("br"),Ln=l("br"),_n=t(`

Now if we want a the derivative of say `),sn=new o(!1),fn=t(", we can represent "),cn=new o(!1),hn=t(`
and then proceed from there. One can verify that `),mn=new o(!1),dn=t(`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),ln=new o(!1),wn=t(`?

`),B=l("h3"),zn=t(`
Simple application of the definition gives us `),un=new o(!1),vn=Sn(),An=l("br"),Nn=l("br"),On=t(`

Here `),pn=new o(!1),xn=t(", and "),gn=new o(!1),yn=t(`.
Giving us

`),$n=new o(!1),kn=t(`

Absolute insanity.

`),Jn(x.$$.fragment),jn=Sn(),R=l("h4"),Kn=t("References"),Mn=Sn(),g=l("ul"),bn=l("li"),Jn(y.$$.fragment),Zn=Sn(),Dn=l("li"),Jn($.$$.fragment),this.h()},l(n){Pn(f.$$.fragment,n),c=r(n,`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),d=s(n,!1),u=r(n,`

First and foremost, we define `),v=s(n,!1),D=r(n,` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),G=s(n,!1),h=r(n,`
which, in general, is

`),p=s(n,!1),F=r(n,`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),I=s(n,!1),q=r(n,`. We can
now apply this twice to get the 1st derivative:

`),H=s(n,!1),E=r(n,`

So one can then see that `),L=s(n,!1),_=r(n,`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),W=w(n,"H3",{});var a=T(W);Xn=r(a,"Derivatives of "),Tn=s(a,!1),a.forEach(e),Fn=r(n,`
We know the basic ones like `),z=s(n,!1),A=r(n,` and
`),N=s(n,!1),O=r(n,`. From the pattern, we would expect that
`),j=s(n,!1),M=r(n,", which would imply "),C=s(n,!1),J=r(n,`.
It is trivial to see, if we apply `),P=s(n,!1),Q=r(n," twice, we get "),Y=s(n,!1),U=r(n,`
back. So then what happens if we feed in `),V=s(n,!1),X=Bn(n),K=s(n,!1),Z=r(n,`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient.
`),In=w(n,"BR",{}),qn=w(n,"BR",{}),Hn=r(n,`
We can now even try to find `),nn=s(n,!1),an=r(n," which would be "),en=s(n,!1),tn=r(n," or "),rn=s(n,!1),on=r(n,`.
Now that we took the imaginary derivative of a complex function, we got a real
coefficient. In general, we can safely say that non-integer derivatives may give
us a real or complex result.
`),En=w(n,"BR",{}),Ln=w(n,"BR",{}),_n=r(n,`

Now if we want a the derivative of say `),sn=s(n,!1),fn=r(n,", we can represent "),cn=s(n,!1),hn=r(n,`
and then proceed from there. One can verify that `),mn=s(n,!1),dn=r(n,`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),ln=s(n,!1),wn=r(n,`?

`),B=w(n,"H3",{}),T(B).forEach(e),zn=r(n,`
Simple application of the definition gives us `),un=s(n,!1),vn=Bn(n),An=w(n,"BR",{}),Nn=w(n,"BR",{}),On=r(n,`

Here `),pn=s(n,!1),xn=r(n,", and "),gn=s(n,!1),yn=r(n,`.
Giving us

`),$n=s(n,!1),kn=r(n,`

Absolute insanity.

`),Pn(x.$$.fragment,n),jn=Bn(n),R=w(n,"H4",{});var Gn=T(R);Kn=r(Gn,"References"),Gn.forEach(e),Mn=Bn(n),g=w(n,"UL",{});var S=T(g);bn=w(S,"LI",{});var Wn=T(bn);Pn(y.$$.fragment,Wn),Wn.forEach(e),Zn=Bn(S),Dn=w(S,"LI",{});var na=T(Dn);Pn($.$$.fragment,na),na.forEach(e),S.forEach(e),this.h()},h(){d.a=u,v.a=D,G.a=h,p.a=F,I.a=q,H.a=E,L.a=_,Tn.a=null,z.a=A,N.a=O,j.a=M,C.a=J,P.a=Q,Y.a=U,V.a=X,K.a=Z,nn.a=an,en.a=tn,rn.a=on,sn.a=fn,cn.a=hn,mn.a=dn,ln.a=wn,un.a=vn,pn.a=xn,gn.a=yn,$n.a=kn},m(n,a){Qn(f,n,a),i(n,c,a),d.m(ia,n,a),i(n,u,a),v.m(ta,n,a),i(n,D,a),G.m(ra,n,a),i(n,h,a),p.m(oa,n,a),i(n,F,a),I.m(sa,n,a),i(n,q,a),H.m(fa,n,a),i(n,E,a),L.m(ca,n,a),i(n,_,a),i(n,W,a),Rn(W,Xn),Tn.m(ha,W),i(n,Fn,a),z.m(ma,n,a),i(n,A,a),N.m(da,n,a),i(n,O,a),j.m(la,n,a),i(n,M,a),C.m(wa,n,a),i(n,J,a),P.m(ua,n,a),i(n,Q,a),Y.m(va,n,a),i(n,U,a),V.m(pa,n,a),i(n,X,a),K.m(xa,n,a),i(n,Z,a),i(n,In,a),i(n,qn,a),i(n,Hn,a),nn.m(ga,n,a),i(n,an,a),en.m(ya,n,a),i(n,tn,a),rn.m($a,n,a),i(n,on,a),i(n,En,a),i(n,Ln,a),i(n,_n,a),sn.m(ka,n,a),i(n,fn,a),cn.m(ba,n,a),i(n,hn,a),mn.m(Da,n,a),i(n,dn,a),ln.m(Ga,n,a),i(n,wn,a),i(n,B,a),B.innerHTML=Wa,i(n,zn,a),un.m(Sa,n,a),i(n,vn,a),i(n,An,a),i(n,Nn,a),i(n,On,a),pn.m(Ba,n,a),i(n,xn,a),gn.m(Ra,n,a),i(n,yn,a),$n.m(Ta,n,a),i(n,kn,a),Qn(x,n,a),i(n,jn,a),i(n,R,a),Rn(R,Kn),i(n,Mn,a),i(n,g,a),Rn(g,bn),Qn(y,bn,null),Rn(g,Zn),Rn(g,Dn),Qn($,Dn,null),Cn=!0},p(n,[a]){const Gn={};1&a&&(Gn.$$scope={dirty:a,ctx:n}),x.$set(Gn);const S={};1&a&&(S.$$scope={dirty:a,ctx:n}),y.$set(S);const Wn={};1&a&&(Wn.$$scope={dirty:a,ctx:n}),$.$set(Wn)},i(n){Cn||(Yn(f.$$.fragment,n),Yn(x.$$.fragment,n),Yn(y.$$.fragment,n),Yn($.$$.fragment,n),Cn=!0)},o(n){Un(f.$$.fragment,n),Un(x.$$.fragment,n),Un(y.$$.fragment,n),Un($.$$.fragment,n),Cn=!1},d(n){Vn(f,n),n&&e(c),n&&d.d(),n&&e(u),n&&v.d(),n&&e(D),n&&G.d(),n&&e(h),n&&p.d(),n&&e(F),n&&I.d(),n&&e(q),n&&H.d(),n&&e(E),n&&L.d(),n&&e(_),n&&e(W),n&&e(Fn),n&&z.d(),n&&e(A),n&&N.d(),n&&e(O),n&&j.d(),n&&e(M),n&&C.d(),n&&e(J),n&&P.d(),n&&e(Q),n&&Y.d(),n&&e(U),n&&V.d(),n&&e(X),n&&K.d(),n&&e(Z),n&&e(In),n&&e(qn),n&&e(Hn),n&&nn.d(),n&&e(an),n&&en.d(),n&&e(tn),n&&rn.d(),n&&e(on),n&&e(En),n&&e(Ln),n&&e(_n),n&&sn.d(),n&&e(fn),n&&cn.d(),n&&e(hn),n&&mn.d(),n&&e(dn),n&&ln.d(),n&&e(wn),n&&e(B),n&&e(zn),n&&un.d(),n&&e(vn),n&&e(An),n&&e(Nn),n&&e(On),n&&pn.d(),n&&e(xn),n&&gn.d(),n&&e(yn),n&&$n.d(),n&&e(kn),Vn(x,n),n&&e(jn),n&&e(R),n&&e(Mn),n&&e(g),Vn(y),Vn($)}}}class Ja extends Fa{constructor(f){super(),Ia(this,f,null,Na,qa,{})}}export{Ja as default};
