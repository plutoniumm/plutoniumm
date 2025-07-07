import{S as Aa,i as ja,s as Oa,x as na,r as k,e as l,d as i,H as o,y as aa,v as $,f as w,h as y,k as e,j as r,z as s,l as p,A as ea,m as t,n as _n,t as ta,b as ia,B as ra,q as ha,o as Ma}from"../../../../chunks/index-86b5a992.js";import{A as Va}from"../../../../chunks/accord-6673e0de.js";import{_ as E,a as h,M as Ca}from"../../../../chunks/meta-1b423db4.js";import{L as da}from"../../../../chunks/link-e4dd3b8e.js";function Ja(S){let c,f,m,x,u,B=E`
        f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n
    `+"",g=E`
        f(x) = \\int_0^{\\infty} \\frac{D^t f(a)}{\\Gamma(t+1)} (x-a)^t dt
    `+"";return{c(){c=i(`The way the Taylor's series is defined in its discrete form is as follows:

    `),f=new o(!1),m=i(`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),x=new o(!1),u=ha(),this.h()},l(d){c=r(d,`The way the Taylor's series is defined in its discrete form is as follows:

    `),f=s(d,!1),m=r(d,`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),x=s(d,!1),u=ha(),this.h()},h(){f.a=m,x.a=u},m(d,v){t(d,c,v),f.m(B,d,v),t(d,m,v),x.m(g,d,v),t(d,u,v)},p:Ma,d(d){d&&e(c),d&&f.d(),d&&e(m),d&&e(u),d&&x.d()}}}function Pa(S){let c;return{c(){c=i("Fractional Derivatives (playlist)")},l(f){c=r(f,"Fractional Derivatives (playlist)")},m(f,m){t(f,c,m)},d(f){f&&e(c)}}}function Qa(S){let c;return{c(){c=i("Gamma Function")},l(f){c=r(f,"Gamma Function")},m(f,m){t(f,c,m)},d(f){f&&e(c)}}}function Ya(S){let c,f,m,x,u,B,g,d,v,zn,T,q,H,_,z,L,A,j,O,M,V,C,J,P,F,oa,Ln,An,Q,Y,U,X,K,Z,nn,an,en,tn,rn,on,sn,cn,fn,hn,jn,On,Mn,dn,mn,ln,wn,un,vn,Vn,Cn,Jn,pn,xn,gn,yn,kn,$n,bn,Dn,N,Pn,Gn,Wn,Qn,Yn,Un,En,Sn,Fn,In,Bn,Nn,b,Xn,R,sa,Kn,D,Rn,G,ca,Tn,W,Zn,ma=E`
\\frac{d^2}{dx^2} f(x) = \\frac{d}{dx} \\left( \\frac{d}{dx} f(x) \\right) \\\\
\\frac{d}{dx} f(x) = \\frac{d^{0.5}}{dx^{0.5}} \\left( \\frac{d^{0.5}}{dx^{0.5}} f(x) \\right) \\\\
`+"",la=h`D^k = \\frac{d^k}{dx^k}`+"",wa=h`x^n`+"",ua=E`
    \\frac{d^k}{dx^k} x^n = D^k x^n  =\\frac{n!}{(n-k)!} x^{n-k} = \\frac{\\Gamma(n+1)}{\\Gamma(n-k+1)} x^{n-k}
`+"",va=E`D^{0.5} = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} x^{n-\\frac12}`+"",pa=E`D^{0.5} D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} \\cdot \\frac{\\Gamma(n-\\frac12+1)}{\\Gamma(n-1+1)} x^{n-1} = \\frac{\\Gamma(n+1)}{\\Gamma(n-1+1)} x^{n-1} = n x^{n-1} = D x^n.`+"",xa=h`D^{0.5} x = \\frac{2}{\\sqrt{\\pi}} \\sqrt{x}`+"",ga=h`e^{kx}`+"",ya=h`D e^{kx} = k e^{kx}`+"",ka=h`D^2 e^{kx} = k^2 e^{kx}`+"",$a=h`D^{\\alpha} e^{kx} = k^{\\alpha} e^{kx}`+"",ba=h`D^{0.5} e^{kx} = \\sqrt{k} e^{kx}`+"",Da=h`D^{0.5}`+"",Ga=h`D e^{kx}`+"",Wa=h`k=2, \\alpha=i`+"",Ea=E`
\\begin{align*}
    D^{i} e^{2x} &= 2^i e^{2x}
    &= e^{i \\ln2} e^{2x}
    &= (\\cos(\\ln2) + i \\sin(\\ln2)) e^{2x}
\\end{align*}
`+"",Sa=h`D^i e^{ix}`+"",Fa=h`i^i e^{ix}`+"",Ia=h`e^{-\\frac{\\pi}{2}} e^{ix}`+"",Ba=h`\\cos x`+"",Na=h`\\cos x = \\frac{e^{ix} + e^{-ix}}{2}`+"",Ra=h`D^{\\alpha} \\cos x = \\cos x + \\frac{\\pi}2 \\alpha`+"",Ta=h`D^i x`+"",qa=h`D^i x`+"",Ha=h`D^i x = \\frac{1}{\\Gamma(2-i)} x^{1 - i}`+"",_a=h`\\frac{1}{\\Gamma(2-i)} = \\frac{i-1}{2\\pi}\\Gamma(i)`+"",za=h`x^{1 - i} = x \\cos (\\ln x) + i x \\sin(\\ln x)`+"",La=E`
    D^i x = \\frac{i-1}{2\\pi} \\Gamma(i) \\left( x \\cos (\\ln x) + i x \\sin(\\ln x) \\right)
`+"";return c=new Ca({props:{title:"Fractional Complex Derivatives",sub:"Recreational Math #003",desc:"Non-integer and other continuous derivatives.",date:"29 June 2025",ignores:"d, f, x, z, n"}}),b=new Va({props:{title:"Continuous Taylor's Series",$$slots:{default:[Ja]},$$scope:{ctx:S}}}),G=new da({props:{href:"https://www.youtube.com/playlist?list=PLJb1qAQIrmmB_ma3YrfuOXTPOQawokYV_",$$slots:{default:[Pa]},$$scope:{ctx:S}}}),W=new da({props:{href:"https://en.m.wikipedia.org/wiki/Gamma_function",$$slots:{default:[Qa]},$$scope:{ctx:S}}}),{c(){na(c.$$.fragment),f=k(),m=l("define"),x=k(),u=l("define"),B=k(),g=l("define"),d=k(),v=l("define"),zn=i(`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),T=new o(!1),q=i(`

First and foremost, we define `),H=new o(!1),_=i(` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),z=new o(!1),L=i(`
which, in general, is

`),A=new o(!1),j=i(`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),O=new o(!1),M=i(`. We can
now apply this twice to get the 1st derivative:

`),V=new o(!1),C=i(`

So one can then see that `),J=new o(!1),P=i(`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),F=l("h3"),oa=i("Derivatives of "),Ln=new o(!1),An=i(`
We know the basic ones like `),Q=new o(!1),Y=i(` and
`),U=new o(!1),X=i(`. From the pattern, we would expect that
`),K=new o(!1),Z=i(", which would imply "),nn=new o(!1),an=i(`.
It is trivial to see, if we apply `),en=new o(!1),tn=i(" twice, we get "),rn=new o(!1),on=i(`
back. So then what happens if we feed in `),sn=new o(!1),cn=k(),fn=new o(!1),hn=i(`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient.
`),jn=l("br"),On=l("br"),Mn=i(`
We can now even try to find `),dn=new o(!1),mn=i(" which would be "),ln=new o(!1),wn=i(" or "),un=new o(!1),vn=i(`.
Now that we took the imaginary derivative of a complex function, we got a real
coefficient. In general, we can safely say that non-integer derivatives may give
us a real or complex result.
`),Vn=l("br"),Cn=l("br"),Jn=i(`

Now if we want a the derivative of say `),pn=new o(!1),xn=i(", we can represent "),gn=new o(!1),yn=i(`
and then proceed from there. One can verify that `),kn=new o(!1),$n=i(`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),bn=new o(!1),Dn=i(`?

`),N=l("h3"),Pn=i(`
Simple application of the definition gives us `),Gn=new o(!1),Wn=k(),Qn=l("br"),Yn=l("br"),Un=i(`

Here `),En=new o(!1),Sn=i(", and "),Fn=new o(!1),In=i(`.
Giving us

`),Bn=new o(!1),Nn=i(`

Absolute insanity.

`),na(b.$$.fragment),Xn=k(),R=l("h4"),sa=i("References"),Kn=k(),D=l("ul"),Rn=l("li"),na(G.$$.fragment),ca=k(),Tn=l("li"),na(W.$$.fragment),this.h()},l(n){aa(c.$$.fragment,n),f=$(n),m=w(n,"DEFINE",{key:!0,type:!0,content:!0}),y(m).forEach(e),x=$(n),u=w(n,"DEFINE",{key:!0,type:!0,content:!0}),y(u).forEach(e),B=$(n),g=w(n,"DEFINE",{key:!0,type:!0,content:!0}),y(g).forEach(e),d=$(n),v=w(n,"DEFINE",{key:!0,type:!0,content:!0}),y(v).forEach(e),zn=r(n,`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),T=s(n,!1),q=r(n,`

First and foremost, we define `),H=s(n,!1),_=r(n,` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),z=s(n,!1),L=r(n,`
which, in general, is

`),A=s(n,!1),j=r(n,`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),O=s(n,!1),M=r(n,`. We can
now apply this twice to get the 1st derivative:

`),V=s(n,!1),C=r(n,`

So one can then see that `),J=s(n,!1),P=r(n,`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),F=w(n,"H3",{});var a=y(F);oa=r(a,"Derivatives of "),Ln=s(a,!1),a.forEach(e),An=r(n,`
We know the basic ones like `),Q=s(n,!1),Y=r(n,` and
`),U=s(n,!1),X=r(n,`. From the pattern, we would expect that
`),K=s(n,!1),Z=r(n,", which would imply "),nn=s(n,!1),an=r(n,`.
It is trivial to see, if we apply `),en=s(n,!1),tn=r(n," twice, we get "),rn=s(n,!1),on=r(n,`
back. So then what happens if we feed in `),sn=s(n,!1),cn=$(n),fn=s(n,!1),hn=r(n,`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient.
`),jn=w(n,"BR",{}),On=w(n,"BR",{}),Mn=r(n,`
We can now even try to find `),dn=s(n,!1),mn=r(n," which would be "),ln=s(n,!1),wn=r(n," or "),un=s(n,!1),vn=r(n,`.
Now that we took the imaginary derivative of a complex function, we got a real
coefficient. In general, we can safely say that non-integer derivatives may give
us a real or complex result.
`),Vn=w(n,"BR",{}),Cn=w(n,"BR",{}),Jn=r(n,`

Now if we want a the derivative of say `),pn=s(n,!1),xn=r(n,", we can represent "),gn=s(n,!1),yn=r(n,`
and then proceed from there. One can verify that `),kn=s(n,!1),$n=r(n,`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),bn=s(n,!1),Dn=r(n,`?

`),N=w(n,"H3",{}),y(N).forEach(e),Pn=r(n,`
Simple application of the definition gives us `),Gn=s(n,!1),Wn=$(n),Qn=w(n,"BR",{}),Yn=w(n,"BR",{}),Un=r(n,`

Here `),En=s(n,!1),Sn=r(n,", and "),Fn=s(n,!1),In=r(n,`.
Giving us

`),Bn=s(n,!1),Nn=r(n,`

Absolute insanity.

`),aa(b.$$.fragment,n),Xn=$(n),R=w(n,"H4",{});var qn=y(R);sa=r(qn,"References"),qn.forEach(e),Kn=$(n),D=w(n,"UL",{});var I=y(D);Rn=w(I,"LI",{});var Hn=y(Rn);aa(G.$$.fragment,Hn),Hn.forEach(e),ca=$(I),Tn=w(I,"LI",{});var fa=y(Tn);aa(W.$$.fragment,fa),fa.forEach(e),I.forEach(e),this.h()},h(){p(m,"key","Γ"),p(m,"type","wikipedia"),p(m,"content","Gamma_function"),p(u,"key","k"),p(u,"type","text"),p(u,"content","Variable positive integer"),p(g,"key","α"),p(g,"type","text"),p(g,"content","Variable real"),p(v,"key","D"),p(v,"type","text"),p(v,"content","Derivative operator"),T.a=q,H.a=_,z.a=L,A.a=j,O.a=M,V.a=C,J.a=P,Ln.a=null,Q.a=Y,U.a=X,K.a=Z,nn.a=an,en.a=tn,rn.a=on,sn.a=cn,fn.a=hn,dn.a=mn,ln.a=wn,un.a=vn,pn.a=xn,gn.a=yn,kn.a=$n,bn.a=Dn,Gn.a=Wn,En.a=Sn,Fn.a=In,Bn.a=Nn},m(n,a){ea(c,n,a),t(n,f,a),t(n,m,a),t(n,x,a),t(n,u,a),t(n,B,a),t(n,g,a),t(n,d,a),t(n,v,a),t(n,zn,a),T.m(ma,n,a),t(n,q,a),H.m(la,n,a),t(n,_,a),z.m(wa,n,a),t(n,L,a),A.m(ua,n,a),t(n,j,a),O.m(va,n,a),t(n,M,a),V.m(pa,n,a),t(n,C,a),J.m(xa,n,a),t(n,P,a),t(n,F,a),_n(F,oa),Ln.m(ga,F),t(n,An,a),Q.m(ya,n,a),t(n,Y,a),U.m(ka,n,a),t(n,X,a),K.m($a,n,a),t(n,Z,a),nn.m(ba,n,a),t(n,an,a),en.m(Da,n,a),t(n,tn,a),rn.m(Ga,n,a),t(n,on,a),sn.m(Wa,n,a),t(n,cn,a),fn.m(Ea,n,a),t(n,hn,a),t(n,jn,a),t(n,On,a),t(n,Mn,a),dn.m(Sa,n,a),t(n,mn,a),ln.m(Fa,n,a),t(n,wn,a),un.m(Ia,n,a),t(n,vn,a),t(n,Vn,a),t(n,Cn,a),t(n,Jn,a),pn.m(Ba,n,a),t(n,xn,a),gn.m(Na,n,a),t(n,yn,a),kn.m(Ra,n,a),t(n,$n,a),bn.m(Ta,n,a),t(n,Dn,a),t(n,N,a),N.innerHTML=qa,t(n,Pn,a),Gn.m(Ha,n,a),t(n,Wn,a),t(n,Qn,a),t(n,Yn,a),t(n,Un,a),En.m(_a,n,a),t(n,Sn,a),Fn.m(za,n,a),t(n,In,a),Bn.m(La,n,a),t(n,Nn,a),ea(b,n,a),t(n,Xn,a),t(n,R,a),_n(R,sa),t(n,Kn,a),t(n,D,a),_n(D,Rn),ea(G,Rn,null),_n(D,ca),_n(D,Tn),ea(W,Tn,null),Zn=!0},p(n,[a]){const qn={};1&a&&(qn.$$scope={dirty:a,ctx:n}),b.$set(qn);const I={};1&a&&(I.$$scope={dirty:a,ctx:n}),G.$set(I);const Hn={};1&a&&(Hn.$$scope={dirty:a,ctx:n}),W.$set(Hn)},i(n){Zn||(ta(c.$$.fragment,n),ta(b.$$.fragment,n),ta(G.$$.fragment,n),ta(W.$$.fragment,n),Zn=!0)},o(n){ia(c.$$.fragment,n),ia(b.$$.fragment,n),ia(G.$$.fragment,n),ia(W.$$.fragment,n),Zn=!1},d(n){ra(c,n),n&&e(f),n&&e(m),n&&e(x),n&&e(u),n&&e(B),n&&e(g),n&&e(d),n&&e(v),n&&e(zn),n&&T.d(),n&&e(q),n&&H.d(),n&&e(_),n&&z.d(),n&&e(L),n&&A.d(),n&&e(j),n&&O.d(),n&&e(M),n&&V.d(),n&&e(C),n&&J.d(),n&&e(P),n&&e(F),n&&e(An),n&&Q.d(),n&&e(Y),n&&U.d(),n&&e(X),n&&K.d(),n&&e(Z),n&&nn.d(),n&&e(an),n&&en.d(),n&&e(tn),n&&rn.d(),n&&e(on),n&&sn.d(),n&&e(cn),n&&fn.d(),n&&e(hn),n&&e(jn),n&&e(On),n&&e(Mn),n&&dn.d(),n&&e(mn),n&&ln.d(),n&&e(wn),n&&un.d(),n&&e(vn),n&&e(Vn),n&&e(Cn),n&&e(Jn),n&&pn.d(),n&&e(xn),n&&gn.d(),n&&e(yn),n&&kn.d(),n&&e($n),n&&bn.d(),n&&e(Dn),n&&e(N),n&&e(Pn),n&&Gn.d(),n&&e(Wn),n&&e(Qn),n&&e(Yn),n&&e(Un),n&&En.d(),n&&e(Sn),n&&Fn.d(),n&&e(In),n&&Bn.d(),n&&e(Nn),ra(b,n),n&&e(Xn),n&&e(R),n&&e(Kn),n&&e(D),ra(G),ra(W)}}}class ne extends Aa{constructor(c){super(),ja(this,c,null,Ya,Oa,{})}}export{ne as default};
