import{S as Oa,i as Ma,s as Ja,x as Kn,r as k,e as m,d as i,H as o,y as Zn,v as $,f as w,h as x,k as e,j as r,z as s,l as u,A as na,m as t,n as W,t as aa,b as ea,B as ta,q as ma,o as Pa}from"../../../../chunks/index-74fbc9f8.js";import{A as Qa}from"../../../../chunks/accord-5b8d583e.js";import{_ as I,a as h,M as Ya}from"../../../../chunks/meta-846f439e.js";import{L as wa}from"../../../../chunks/link-f469bc16.js";function Ca(S){let c,f,l,g,v,q=I`
        f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n
    `+"",y=I`
        f(x) = \\int_0^{\\infty} \\frac{D^t f(a)}{\\Gamma(t+1)} (x-a)^t dt
    `+"";return{c(){c=i(`The way the Taylor's series is defined in its discrete form is as follows:

    `),f=new o(!1),l=i(`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),g=new o(!1),v=ma(),this.h()},l(d){c=r(d,`The way the Taylor's series is defined in its discrete form is as follows:

    `),f=s(d,!1),l=r(d,`

    We can generalize this to a continuous form by replacing the factorial with
    the gamma function, and some more obvious changes:

    `),g=s(d,!1),v=ma(),this.h()},h(){f.a=l,g.a=v},m(d,p){t(d,c,p),f.m(q,d,p),t(d,l,p),g.m(y,d,p),t(d,v,p)},p:Pa,d(d){d&&e(c),d&&f.d(),d&&e(l),d&&e(v),d&&g.d()}}}function Ua(S){let c;return{c(){c=i("Fractional Derivatives (playlist)")},l(f){c=r(f,"Fractional Derivatives (playlist)")},m(f,l){t(f,c,l)},d(f){f&&e(c)}}}function Xa(S){let c;return{c(){c=i("Gamma Function")},l(f){c=r(f,"Gamma Function")},m(f,l){t(f,c,l)},d(f){f&&e(c)}}}function Ka(S){let c,f,l,g,v,q,y,d,p,An,B,L,R,V,A,j,O,M,J,P,Q,Y,C,U,F,ia,jn,On,X,K,Z,nn,an,en,tn,rn,on,sn,cn,fn,hn,dn,ln,mn,H,ra,Mn,wn,un,vn,pn,xn,gn,N,oa,Jn,yn,kn,$n,Dn,bn,En,Gn,Wn,_,Pn,In,Sn,T,sa,Qn,Fn,Hn,Nn,Tn,qn,_n,D,Yn,z,ca,Cn,b,zn,E,fa,Bn,G,Un,ua=I`
\\frac{d^2}{dx^2} f(x) = \\frac{d}{dx} \\left( \\frac{d}{dx} f(x) \\right) \\\\
\\frac{d}{dx} f(x) = \\frac{d^{0.5}}{dx^{0.5}} \\left( \\frac{d^{0.5}}{dx^{0.5}} f(x) \\right) \\\\
`+"",va=h`D^k = \\frac{d^k}{dx^k}`+"",pa=h`x^n`+"",xa=I`
    \\frac{d^k}{dx^k} x^n = D^k x^n  =\\frac{n!}{(n-k)!} x^{n-k} = \\frac{\\Gamma(n+1)}{\\Gamma(n-k+1)} x^{n-k}
`+"",ga=I`D^{0.5} = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} x^{n-\\frac12}`+"",ya=I`D^{0.5} D^{0.5} x^n = \\frac{\\Gamma(n+1)}{\\Gamma(n-\\frac12+1)} \\cdot \\frac{\\Gamma(n-\\frac12+1)}{\\Gamma(n-1+1)} x^{n-1} = \\frac{\\Gamma(n+1)}{\\Gamma(n-1+1)} x^{n-1} = n x^{n-1} = D x^n.`+"",ka=h`D^{0.5} x = \\frac{2}{\\sqrt{\\pi}} \\sqrt{x}`+"",$a=h`e^{kx}`+"",Da=h`D e^{kx} = k e^{kx}`+"",ba=h`D^2 e^{kx} = k^2 e^{kx}`+"",Ea=h`D^{\\alpha} e^{kx} = k^{\\alpha} e^{kx}`+"",Ga=h`D^{0.5} e^{kx} = \\sqrt{k} e^{kx}`+"",Wa=h`D^{0.5}`+"",Ia=h`D e^{kx}`+"",Sa=h`k=2, \\alpha=i`+"",Fa=I`
\\begin{align*}
    D^{i} e^{2x} &= 2^i e^{2x}
    &= e^{i \\ln2} e^{2x}
    &= (\\cos(\\ln2) + i \\sin(\\ln2)) e^{2x}
\\end{align*}
`+"",Ha=h`D^i e^{ix}`+"",Na=h`i^i e^{ix}`+"",Ta=h`e^{-\\frac{\\pi}{2}} e^{ix}`+"",qa=h`\\cos x`+"",_a=h`\\cos x = \\frac{e^{ix} + e^{-ix}}{2}`+"",za=h`D^{\\alpha} \\cos x = \\cos x + \\frac{\\pi}2 \\alpha`+"",Ba=h`D^i x`+"",La=h`D^i x`+"",Ra=h`D^i x = \\frac{1}{\\Gamma(2-i)} x^{1 - i}`+"",Va=h`\\frac{1}{\\Gamma(2-i)} = \\frac{i-1}{2\\pi}\\Gamma(i)`+"",Aa=h`x^{1 - i} = x \\cos (\\ln x) + i x \\sin(\\ln x)`+"",ja=I`
    D^i x = \\frac{i-1}{2\\pi} \\Gamma(i) \\left( x \\cos (\\ln x) + i x \\sin(\\ln x) \\right)
`+"";return c=new Ya({props:{title:"Fractional, complex, and fractional complex derivatives",sub:"Recreational Math #003",desc:"Non-integer and other continuous derivatives.",date:"29 June 2025",ignores:"d, f, x, z, n"}}),D=new Qa({props:{title:"Continuous Taylor's Series",$$slots:{default:[Ca]},$$scope:{ctx:S}}}),E=new wa({props:{href:"https://www.youtube.com/playlist?list=PLJb1qAQIrmmB_ma3YrfuOXTPOQawokYV_",$$slots:{default:[Ua]},$$scope:{ctx:S}}}),G=new wa({props:{href:"https://en.m.wikipedia.org/wiki/Gamma_function",$$slots:{default:[Xa]},$$scope:{ctx:S}}}),{c(){Kn(c.$$.fragment),f=k(),l=m("define"),g=k(),v=m("define"),q=k(),y=m("define"),d=k(),p=m("define"),An=i(`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),B=new o(!1),L=i(`

First and foremost, we define `),R=new o(!1),V=i(` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),A=new o(!1),j=i(`
which, in general, is

`),O=new o(!1),M=i(`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),J=new o(!1),P=i(`. We can
now apply this twice to get the 1st derivative:

`),Q=new o(!1),Y=i(`

So one can then see that `),C=new o(!1),U=i(`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),F=m("h3"),ia=i("Derivatives of "),jn=new o(!1),On=i(`
We know the basic ones like `),X=new o(!1),K=i(` and
`),Z=new o(!1),nn=i(`. From the pattern, we would expect that
`),an=new o(!1),en=i(", which would imply "),tn=new o(!1),rn=i(`.
It is trivial to see, if we apply `),on=new o(!1),sn=i(" twice, we get "),cn=new o(!1),fn=i(`
back. So then what happens if we feed in `),hn=new o(!1),dn=k(),ln=new o(!1),mn=i(`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient.
`),H=m("div"),ra=m("hr"),Mn=i(`
We can now even try to find `),wn=new o(!1),un=i(" which would be "),vn=new o(!1),pn=i(" or "),xn=new o(!1),gn=i(`.
Now that we took the imaginary derivative of a complex function, we got a real
coefficient. In general, we can safely say that non-integer derivatives may give
us a real or complex result.
`),N=m("div"),oa=m("hr"),Jn=i(`

Now if we want a the derivative of say `),yn=new o(!1),kn=i(", we can represent "),$n=new o(!1),Dn=i(`
and then proceed from there. One can verify that `),bn=new o(!1),En=i(`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),Gn=new o(!1),Wn=i(`?

`),_=m("h3"),Pn=i(`
Simple application of the definition gives us `),In=new o(!1),Sn=k(),T=m("div"),sa=m("hr"),Qn=i(`

Here `),Fn=new o(!1),Hn=i(", and "),Nn=new o(!1),Tn=i(`.
Giving us

`),qn=new o(!1),_n=i(`

Absolute insanity.

`),Kn(D.$$.fragment),Yn=k(),z=m("h4"),ca=i("References"),Cn=k(),b=m("ul"),zn=m("li"),Kn(E.$$.fragment),fa=k(),Bn=m("li"),Kn(G.$$.fragment),this.h()},l(n){Zn(c.$$.fragment,n),f=$(n),l=w(n,"DEFINE",{key:!0,type:!0,content:!0}),x(l).forEach(e),g=$(n),v=w(n,"DEFINE",{key:!0,type:!0,content:!0}),x(v).forEach(e),q=$(n),y=w(n,"DEFINE",{key:!0,type:!0,content:!0}),x(y).forEach(e),d=$(n),p=w(n,"DEFINE",{key:!0,type:!0,content:!0}),x(p).forEach(e),An=r(n,`

We usually find derivatives of functions at integer orders, such as 1st, 2nd,
etc. But what if we want to find the derivative in a non-integer order, like
0.5? What would that even mean? It would naturally be something where, if
applied twice, it would be the same as the 1st derivative

`),B=s(n,!1),L=r(n,`

First and foremost, we define `),R=s(n,!1),V=r(n,` as the kth derivative operator.
We can start by trying to reverse engineer the kth derivative of `),A=s(n,!1),j=r(n,`
which, in general, is

`),O=s(n,!1),M=r(n,`

What if we were to convert the factorial to a gamma function and then use that
to evaluate the derivative in a non-integer order? So then,

`),J=s(n,!1),P=r(n,`. We can
now apply this twice to get the 1st derivative:

`),Q=s(n,!1),Y=r(n,`

So one can then see that `),C=s(n,!1),U=r(n,`. This
also tells us that we can generalize the derivative operator to arbitrary real
numbers, not just integers. We can even use imaginary numbers, but that's a much
different conversation.

`),F=w(n,"H3",{});var a=x(F);ia=r(a,"Derivatives of "),jn=s(a,!1),a.forEach(e),On=r(n,`
We know the basic ones like `),X=s(n,!1),K=r(n,` and
`),Z=s(n,!1),nn=r(n,`. From the pattern, we would expect that
`),an=s(n,!1),en=r(n,", which would imply "),tn=s(n,!1),rn=r(n,`.
It is trivial to see, if we apply `),on=s(n,!1),sn=r(n," twice, we get "),cn=s(n,!1),fn=r(n,`
back. So then what happens if we feed in `),hn=s(n,!1),dn=$(n),ln=s(n,!1),mn=r(n,`

So, we can see taking the imaginary derivative of a real function gives us a
complex coefficient.
`),H=w(n,"DIV",{class:!0});var Ln=x(H);ra=w(Ln,"HR",{}),Ln.forEach(e),Mn=r(n,`
We can now even try to find `),wn=s(n,!1),un=r(n," which would be "),vn=s(n,!1),pn=r(n," or "),xn=s(n,!1),gn=r(n,`.
Now that we took the imaginary derivative of a complex function, we got a real
coefficient. In general, we can safely say that non-integer derivatives may give
us a real or complex result.
`),N=w(n,"DIV",{class:!0});var Rn=x(N);oa=w(Rn,"HR",{}),Rn.forEach(e),Jn=r(n,`

Now if we want a the derivative of say `),yn=s(n,!1),kn=r(n,", we can represent "),$n=s(n,!1),Dn=r(n,`
and then proceed from there. One can verify that `),bn=s(n,!1),En=r(n,`.
So, the differential operator is simply a shifting operator for the sinusoidal
function. But now that we've asked the question of an imaginary derivative, we
are forced to ask. What is `),Gn=s(n,!1),Wn=r(n,`?

`),_=w(n,"H3",{}),x(_).forEach(e),Pn=r(n,`
Simple application of the definition gives us `),In=s(n,!1),Sn=$(n),T=w(n,"DIV",{class:!0});var Vn=x(T);sa=w(Vn,"HR",{}),Vn.forEach(e),Qn=r(n,`

Here `),Fn=s(n,!1),Hn=r(n,", and "),Nn=s(n,!1),Tn=r(n,`.
Giving us

`),qn=s(n,!1),_n=r(n,`

Absolute insanity.

`),Zn(D.$$.fragment,n),Yn=$(n),z=w(n,"H4",{});var ha=x(z);ca=r(ha,"References"),ha.forEach(e),Cn=$(n),b=w(n,"UL",{});var Xn=x(b);zn=w(Xn,"LI",{});var da=x(zn);Zn(E.$$.fragment,da),da.forEach(e),fa=$(Xn),Bn=w(Xn,"LI",{});var la=x(Bn);Zn(G.$$.fragment,la),la.forEach(e),Xn.forEach(e),this.h()},h(){u(l,"key","Γ"),u(l,"type","wikipedia"),u(l,"content","Gamma_function"),u(v,"key","k"),u(v,"type","text"),u(v,"content","Variable positive integer"),u(y,"key","α"),u(y,"type","text"),u(y,"content","Variable real"),u(p,"key","D"),u(p,"type","text"),u(p,"content","Derivative operator"),B.a=L,R.a=V,A.a=j,O.a=M,J.a=P,Q.a=Y,C.a=U,jn.a=null,X.a=K,Z.a=nn,an.a=en,tn.a=rn,on.a=sn,cn.a=fn,hn.a=dn,ln.a=mn,u(H,"class","m20"),wn.a=un,vn.a=pn,xn.a=gn,u(N,"class","m20"),yn.a=kn,$n.a=Dn,bn.a=En,Gn.a=Wn,In.a=Sn,u(T,"class","m20"),Fn.a=Hn,Nn.a=Tn,qn.a=_n},m(n,a){na(c,n,a),t(n,f,a),t(n,l,a),t(n,g,a),t(n,v,a),t(n,q,a),t(n,y,a),t(n,d,a),t(n,p,a),t(n,An,a),B.m(ua,n,a),t(n,L,a),R.m(va,n,a),t(n,V,a),A.m(pa,n,a),t(n,j,a),O.m(xa,n,a),t(n,M,a),J.m(ga,n,a),t(n,P,a),Q.m(ya,n,a),t(n,Y,a),C.m(ka,n,a),t(n,U,a),t(n,F,a),W(F,ia),jn.m($a,F),t(n,On,a),X.m(Da,n,a),t(n,K,a),Z.m(ba,n,a),t(n,nn,a),an.m(Ea,n,a),t(n,en,a),tn.m(Ga,n,a),t(n,rn,a),on.m(Wa,n,a),t(n,sn,a),cn.m(Ia,n,a),t(n,fn,a),hn.m(Sa,n,a),t(n,dn,a),ln.m(Fa,n,a),t(n,mn,a),t(n,H,a),W(H,ra),t(n,Mn,a),wn.m(Ha,n,a),t(n,un,a),vn.m(Na,n,a),t(n,pn,a),xn.m(Ta,n,a),t(n,gn,a),t(n,N,a),W(N,oa),t(n,Jn,a),yn.m(qa,n,a),t(n,kn,a),$n.m(_a,n,a),t(n,Dn,a),bn.m(za,n,a),t(n,En,a),Gn.m(Ba,n,a),t(n,Wn,a),t(n,_,a),_.innerHTML=La,t(n,Pn,a),In.m(Ra,n,a),t(n,Sn,a),t(n,T,a),W(T,sa),t(n,Qn,a),Fn.m(Va,n,a),t(n,Hn,a),Nn.m(Aa,n,a),t(n,Tn,a),qn.m(ja,n,a),t(n,_n,a),na(D,n,a),t(n,Yn,a),t(n,z,a),W(z,ca),t(n,Cn,a),t(n,b,a),W(b,zn),na(E,zn,null),W(b,fa),W(b,Bn),na(G,Bn,null),Un=!0},p(n,[a]){const Ln={};1&a&&(Ln.$$scope={dirty:a,ctx:n}),D.$set(Ln);const Rn={};1&a&&(Rn.$$scope={dirty:a,ctx:n}),E.$set(Rn);const Vn={};1&a&&(Vn.$$scope={dirty:a,ctx:n}),G.$set(Vn)},i(n){Un||(aa(c.$$.fragment,n),aa(D.$$.fragment,n),aa(E.$$.fragment,n),aa(G.$$.fragment,n),Un=!0)},o(n){ea(c.$$.fragment,n),ea(D.$$.fragment,n),ea(E.$$.fragment,n),ea(G.$$.fragment,n),Un=!1},d(n){ta(c,n),n&&e(f),n&&e(l),n&&e(g),n&&e(v),n&&e(q),n&&e(y),n&&e(d),n&&e(p),n&&e(An),n&&B.d(),n&&e(L),n&&R.d(),n&&e(V),n&&A.d(),n&&e(j),n&&O.d(),n&&e(M),n&&J.d(),n&&e(P),n&&Q.d(),n&&e(Y),n&&C.d(),n&&e(U),n&&e(F),n&&e(On),n&&X.d(),n&&e(K),n&&Z.d(),n&&e(nn),n&&an.d(),n&&e(en),n&&tn.d(),n&&e(rn),n&&on.d(),n&&e(sn),n&&cn.d(),n&&e(fn),n&&hn.d(),n&&e(dn),n&&ln.d(),n&&e(mn),n&&e(H),n&&e(Mn),n&&wn.d(),n&&e(un),n&&vn.d(),n&&e(pn),n&&xn.d(),n&&e(gn),n&&e(N),n&&e(Jn),n&&yn.d(),n&&e(kn),n&&$n.d(),n&&e(Dn),n&&bn.d(),n&&e(En),n&&Gn.d(),n&&e(Wn),n&&e(_),n&&e(Pn),n&&In.d(),n&&e(Sn),n&&e(T),n&&e(Qn),n&&Fn.d(),n&&e(Hn),n&&Nn.d(),n&&e(Tn),n&&qn.d(),n&&e(_n),ta(D,n),n&&e(Yn),n&&e(z),n&&e(Cn),n&&e(b),ta(E),ta(G)}}}class te extends Oa{constructor(c){super(),Ma(this,c,null,Ka,Ja,{})}}export{te as default};
