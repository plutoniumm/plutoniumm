import{S as Ka,i as Pa,s as Qa,x as ha,r as g,e as h,d as t,H as r,y as da,v as k,f as d,h as m,k as i,j as s,z as o,l as f,A as ma,m as e,n as Bn,o as Xa,t as ca,b as pa,B as wa}from"../../../../chunks/index-74fbc9f8.js";import{_ as b,a as l,M as Ya}from"../../../../chunks/meta-846f439e.js";import{I as Za}from"../../../../chunks/image-9f22780b.js";function ni(ua){let c,Jn,p,Mn,w,Rn,u,Sn,v,Vn,x,On,y,Un,T,_,z,F,L,q,A,H,E,Cn,Gn,Kn,j,B,J,M,R,S,V,O,U,C,G,K,P,Q,X,Y,W,aa,Pn,Z,nn,an,en,tn,sn,rn,on,ln,fn,hn,dn,mn,cn,pn,wn,I,ia,Qn,un,vn,xn,yn,$,ea,Xn,gn,kn,bn,En,Wn,In,$n,Dn,Nn,Tn,_n,zn,Fn,Ln,qn,An,Hn,jn,D,ta,Yn,N,Zn,na,va=b`
    \\frac{df}{dx} = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}
`+"",xa=l`h`+"",ya=l`x`+"",ga=l`y`+"",sa="(x=a,y=b)",ka=l`\\delta`+"",ba=l`x`+"",Ea=l`(x=a+\\delta,y=b+\\epsilon)`+"",Wa=l`\\epsilon`+"",Ia=l`y=b`+"",$a=l`f'(x) = \\frac{f(x + h) - f(x)}{h}`+"",Da=b`
\\begin{align*}
    \\frac{d^2f}{dx^2}
    &=\\lim _{h\\to 0}\\frac{{\\dfrac {f(x+h)-f(x)}{h}}-{\\dfrac {f(x)-f(x-h)}{h}}}{h}\\\\
    &=\\lim _{h\\to 0}{\\frac {f(x+h)-2f(x)+f(x-h)}{h^{2}}}
\\end{align*}
`+"",Na=l`f`+"",Ta=l`h`+"",_a=l`h`+"",za=l`ih`+"",Fa=b`
\\frac{df}{dx} = \\lim_{h \\to 0} \\frac{f(x + ih) - f(x)}{ih}
`+"",La=b`
\\frac{f(x + ih) - f(x)}{ih} = f'(x) + ih \\frac{f''(x)}{2!} - h^2 \\frac{f^{(3)}(x)}{3!} + \\cdots \\\\
`+"",qa=b`
\\begin{align*}
f'(x) &= \\Im\\left[\\frac{f(x + ih) - f(x)}{ih}\\right] + h^2 \\frac{f^{(3)}(x)}{3!} - \\cdots \\\\
&= \\frac{\\Im[f(x + ih) - f(x)]}{h} + \\mathcal{O}(h^2) \\\\
\\end{align*}
`+"",Aa=l`h^2`+"",Ha=l`h`+"",ja=l`h`+"",Ba=l`ih`+"",Ja=l`\\varepsilon^2 = 0`+"",Ma=l`\\varepsilon \\neq 0`+"",Ra=b`a + b\\varepsilon`+"",Sa=l`\\varepsilon^2, \\varepsilon^3, \\cdots`+"",Va=l`x \\to x + \\varepsilon`+"",Oa=b`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon + \\frac{f''(x)}{2!}\\varepsilon^2 + \\cdots`+"",Ua=l`\\varepsilon^2 = 0`+"",Ca=l`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon`+"",Ga=b`
f'(x) = \\frac{f(x + \\varepsilon) - f(x)}{\\varepsilon}
`+"";return c=new Ya({props:{title:"Multiple first-principles",sub:"Recreational Math #004",desc:"Different ways to redefine the derivative",date:"13 July 2025",ignores:"x, y, df, f, a, b"}}),E=new Za({props:{href:"//en.wikipedia.org/wiki/Limit_of_a_function",src:"//upload.wikimedia.org/wikipedia/commons/d/d5/Epsilon-delta_limit.svg",alt:"Wikipedia: Limit of a function"}}),{c(){ha(c.$$.fragment),Jn=g(),p=h("define"),Mn=g(),w=h("define"),Rn=g(),u=h("define"),Sn=g(),v=h("define"),Vn=g(),x=h("define"),On=g(),y=h("define"),Un=t(`

We often define the fundamental derivative as:

`),T=new r(!1),_=t(`

which is a limit of the difference quotient as the increment
`),z=new r(!1),F=t(" approaches zero. We try to move a small distance in one direction ("),L=new r(!1),q=t(`)
and see how far it forces us in the other direction (`),A=new r(!1),H=t(`).

`),ha(E.$$.fragment),Cn=t(`

as in the image above, when at standing at `),Gn=t(sa),Kn=t(", we take a small step "),j=new r(!1),B=t(`
in `),J=new r(!1),M=t(", and end up at "),R=new r(!1),S=t(`. We see we also get a
small step `),V=new r(!1),O=t(", at the corresponding "),U=new r(!1),C=t(`. Taking the same idea
forward, if `),G=new r(!1),K=t(`, we can also define the
derivative, of the derivative, as:

`),P=new r(!1),Q=t(`

We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only `),X=new r(!1),Y=g(),W=h("h4"),aa=t("Imaginary Steps"),Pn=t(`

This however still leaves us with a lot of freedom in how we choose the value
for `),Z=new r(!1),nn=t(". We can then also give it an imaginary value, and replace "),an=new r(!1),en=t(` with
`),tn=new r(!1),sn=t(`, and get:

`),rn=new r(!1),on=t(`

which implies, applying the Taylor series expansion, that:

`),ln=new r(!1),fn=t(`

or taking just the real part both sides, we get:

`),hn=new r(!1),dn=t(`

We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now `),mn=new r(!1),cn=t(", and not "),pn=new r(!1),wn=t(`.

`),I=h("h4"),ia=t("Automatic Differentiation"),Qn=t(`

Just as we took a small real step `),un=new r(!1),vn=t(", or a small imaginary step "),xn=new r(!1),yn=t(`, we
can also take a small `),$=h("i"),ea=t("'dual'"),Xn=t(` step, using dual numbers, which are
peculiarly defined as, let `),gn=new r(!1),kn=t(", but "),bn=new r(!1),En=t(`.
We can define a dual number as:

`),Wn=new r(!1),In=t(`

This also implies we throw away anything involving `),$n=new r(!1),Dn=t(`,
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from `),Nn=new r(!1),Tn=t(`. We expand via Taylor:

`),_n=new r(!1),zn=t(`

But `),Fn=new r(!1),Ln=t(", so: "),qn=new r(!1),An=t(`

i.e.

`),Hn=new r(!1),jn=t(`

Now isn't that neat. Automatic differentiation.

`),D=h("h4"),ta=t("References"),Yn=g(),N=h("ul"),Zn=h("li"),this.h()},l(n){da(c.$$.fragment,n),Jn=k(n),p=d(n,"DEFINE",{key:!0,type:!0,content:!0}),m(p).forEach(i),Mn=k(n),w=d(n,"DEFINE",{key:!0,type:!0,content:!0}),m(w).forEach(i),Rn=k(n),u=d(n,"DEFINE",{key:!0,type:!0,content:!0}),m(u).forEach(i),Sn=k(n),v=d(n,"DEFINE",{key:!0,type:!0,content:!0}),m(v).forEach(i),Vn=k(n),x=d(n,"DEFINE",{key:!0,type:!0,content:!0}),m(x).forEach(i),On=k(n),y=d(n,"DEFINE",{key:!0,type:!0,content:!0}),m(y).forEach(i),Un=s(n,`

We often define the fundamental derivative as:

`),T=o(n,!1),_=s(n,`

which is a limit of the difference quotient as the increment
`),z=o(n,!1),F=s(n," approaches zero. We try to move a small distance in one direction ("),L=o(n,!1),q=s(n,`)
and see how far it forces us in the other direction (`),A=o(n,!1),H=s(n,`).

`),da(E.$$.fragment,n),Cn=s(n,`

as in the image above, when at standing at `),Gn=s(n,sa),Kn=s(n,", we take a small step "),j=o(n,!1),B=s(n,`
in `),J=o(n,!1),M=s(n,", and end up at "),R=o(n,!1),S=s(n,`. We see we also get a
small step `),V=o(n,!1),O=s(n,", at the corresponding "),U=o(n,!1),C=s(n,`. Taking the same idea
forward, if `),G=o(n,!1),K=s(n,`, we can also define the
derivative, of the derivative, as:

`),P=o(n,!1),Q=s(n,`

We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only `),X=o(n,!1),Y=k(n),W=d(n,"H4",{});var a=m(W);aa=s(a,"Imaginary Steps"),a.forEach(i),Pn=s(n,`

This however still leaves us with a lot of freedom in how we choose the value
for `),Z=o(n,!1),nn=s(n,". We can then also give it an imaginary value, and replace "),an=o(n,!1),en=s(n,` with
`),tn=o(n,!1),sn=s(n,`, and get:

`),rn=o(n,!1),on=s(n,`

which implies, applying the Taylor series expansion, that:

`),ln=o(n,!1),fn=s(n,`

or taking just the real part both sides, we get:

`),hn=o(n,!1),dn=s(n,`

We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now `),mn=o(n,!1),cn=s(n,", and not "),pn=o(n,!1),wn=s(n,`.

`),I=d(n,"H4",{});var ra=m(I);ia=s(ra,"Automatic Differentiation"),ra.forEach(i),Qn=s(n,`

Just as we took a small real step `),un=o(n,!1),vn=s(n,", or a small imaginary step "),xn=o(n,!1),yn=s(n,`, we
can also take a small `),$=d(n,"I",{});var oa=m($);ea=s(oa,"'dual'"),oa.forEach(i),Xn=s(n,` step, using dual numbers, which are
peculiarly defined as, let `),gn=o(n,!1),kn=s(n,", but "),bn=o(n,!1),En=s(n,`.
We can define a dual number as:

`),Wn=o(n,!1),In=s(n,`

This also implies we throw away anything involving `),$n=o(n,!1),Dn=s(n,`,
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from `),Nn=o(n,!1),Tn=s(n,`. We expand via Taylor:

`),_n=o(n,!1),zn=s(n,`

But `),Fn=o(n,!1),Ln=s(n,", so: "),qn=o(n,!1),An=s(n,`

i.e.

`),Hn=o(n,!1),jn=s(n,`

Now isn't that neat. Automatic differentiation.

`),D=d(n,"H4",{});var la=m(D);ta=s(la,"References"),la.forEach(i),Yn=k(n),N=d(n,"UL",{});var fa=m(N);Zn=d(fa,"LI",{}),m(Zn).forEach(i),fa.forEach(i),this.h()},h(){f(p,"key","ℑ"),f(p,"type","text"),f(p,"content","Denotes the imaginary part of a complex number, often also written as Im"),f(w,"key","ε"),f(w,"type","text"),f(w,"content","Dual number, often interpreted as an infinitesimal step. ε^2 = 0, but ε ≠ 0"),f(u,"key","h"),f(u,"type","text"),f(u,"content","Variable, often interpreted as a small increment"),f(v,"key","δ"),f(v,"type","text"),f(v,"content","Variable, often interpreted as a small increment"),f(x,"key","ϵ"),f(x,"type","text"),f(x,"content","Epsilon, of δ fame."),f(y,"key","ih"),f(y,"type","text"),f(y,"content","Variable, often interpreted as a small increment. Here, h is treated as real, and i is imaginary so that ih is complex"),T.a=_,z.a=F,L.a=q,A.a=H,j.a=B,J.a=M,R.a=S,V.a=O,U.a=C,G.a=K,P.a=Q,X.a=Y,Z.a=nn,an.a=en,tn.a=sn,rn.a=on,ln.a=fn,hn.a=dn,mn.a=cn,pn.a=wn,un.a=vn,xn.a=yn,gn.a=kn,bn.a=En,Wn.a=In,$n.a=Dn,Nn.a=Tn,_n.a=zn,Fn.a=Ln,qn.a=An,Hn.a=jn},m(n,a){ma(c,n,a),e(n,Jn,a),e(n,p,a),e(n,Mn,a),e(n,w,a),e(n,Rn,a),e(n,u,a),e(n,Sn,a),e(n,v,a),e(n,Vn,a),e(n,x,a),e(n,On,a),e(n,y,a),e(n,Un,a),T.m(va,n,a),e(n,_,a),z.m(xa,n,a),e(n,F,a),L.m(ya,n,a),e(n,q,a),A.m(ga,n,a),e(n,H,a),ma(E,n,a),e(n,Cn,a),e(n,Gn,a),e(n,Kn,a),j.m(ka,n,a),e(n,B,a),J.m(ba,n,a),e(n,M,a),R.m(Ea,n,a),e(n,S,a),V.m(Wa,n,a),e(n,O,a),U.m(Ia,n,a),e(n,C,a),G.m($a,n,a),e(n,K,a),P.m(Da,n,a),e(n,Q,a),X.m(Na,n,a),e(n,Y,a),e(n,W,a),Bn(W,aa),e(n,Pn,a),Z.m(Ta,n,a),e(n,nn,a),an.m(_a,n,a),e(n,en,a),tn.m(za,n,a),e(n,sn,a),rn.m(Fa,n,a),e(n,on,a),ln.m(La,n,a),e(n,fn,a),hn.m(qa,n,a),e(n,dn,a),mn.m(Aa,n,a),e(n,cn,a),pn.m(Ha,n,a),e(n,wn,a),e(n,I,a),Bn(I,ia),e(n,Qn,a),un.m(ja,n,a),e(n,vn,a),xn.m(Ba,n,a),e(n,yn,a),e(n,$,a),Bn($,ea),e(n,Xn,a),gn.m(Ja,n,a),e(n,kn,a),bn.m(Ma,n,a),e(n,En,a),Wn.m(Ra,n,a),e(n,In,a),$n.m(Sa,n,a),e(n,Dn,a),Nn.m(Va,n,a),e(n,Tn,a),_n.m(Oa,n,a),e(n,zn,a),Fn.m(Ua,n,a),e(n,Ln,a),qn.m(Ca,n,a),e(n,An,a),Hn.m(Ga,n,a),e(n,jn,a),e(n,D,a),Bn(D,ta),e(n,Yn,a),e(n,N,a),Bn(N,Zn),na=!0},p:Xa,i(n){na||(ca(c.$$.fragment,n),ca(E.$$.fragment,n),na=!0)},o(n){pa(c.$$.fragment,n),pa(E.$$.fragment,n),na=!1},d(n){wa(c,n),n&&i(Jn),n&&i(p),n&&i(Mn),n&&i(w),n&&i(Rn),n&&i(u),n&&i(Sn),n&&i(v),n&&i(Vn),n&&i(x),n&&i(On),n&&i(y),n&&i(Un),n&&T.d(),n&&i(_),n&&z.d(),n&&i(F),n&&L.d(),n&&i(q),n&&A.d(),n&&i(H),wa(E,n),n&&i(Cn),n&&i(Gn),n&&i(Kn),n&&j.d(),n&&i(B),n&&J.d(),n&&i(M),n&&R.d(),n&&i(S),n&&V.d(),n&&i(O),n&&U.d(),n&&i(C),n&&G.d(),n&&i(K),n&&P.d(),n&&i(Q),n&&X.d(),n&&i(Y),n&&i(W),n&&i(Pn),n&&Z.d(),n&&i(nn),n&&an.d(),n&&i(en),n&&tn.d(),n&&i(sn),n&&rn.d(),n&&i(on),n&&ln.d(),n&&i(fn),n&&hn.d(),n&&i(dn),n&&mn.d(),n&&i(cn),n&&pn.d(),n&&i(wn),n&&i(I),n&&i(Qn),n&&un.d(),n&&i(vn),n&&xn.d(),n&&i(yn),n&&i($),n&&i(Xn),n&&gn.d(),n&&i(kn),n&&bn.d(),n&&i(En),n&&Wn.d(),n&&i(In),n&&$n.d(),n&&i(Dn),n&&Nn.d(),n&&i(Tn),n&&_n.d(),n&&i(zn),n&&Fn.d(),n&&i(Ln),n&&qn.d(),n&&i(An),n&&Hn.d(),n&&i(jn),n&&i(D),n&&i(Yn),n&&i(N)}}}class ti extends Ka{constructor(c){super(),Pa(this,c,null,ni,Qa,{})}}export{ti as default};
