import{S as Bn,i as Jn,s as Mn,x as Ua,r as Fa,d as s,H as r,e as g,y as Ga,v as Ka,j as i,z as o,f as x,h as y,k as t,A as Pa,m as e,n as La,o as Sn,t as Qa,b as Ya,B as Za}from"../../../../chunks/index-8848d1b6.js";import{_ as h,a as l,M as Vn,D as Xn,d as b}from"../../../../chunks/index-b763b419.js";import{I as Cn}from"../../../../chunks/image-8e4f6ed5.js";function On(rn){let f,qa,d,Aa,$,k,W,T,I,_,E,z,m,Da,Ha,ja,L,q,A,D,H,j,N,R,B,J,M,S,V,X,C,O,c,Va,Na,U,F,G,K,P,Q,Y,Z,aa,na,ta,ea,sa,ia,ra,oa,p,Xa,Ra,la,fa,ha,da,w,Ca,Ba,ma,ca,pa,wa,ua,va,ga,xa,ya,ba,$a,ka,Wa,Ta,Ia,_a,Ea,za,u,Oa,Ja,v,Ma,Sa,on=h`
    \\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}
`+"",ln=l`h`+"",fn=l`x`+"",hn=l`y`+"",an="(x=a,y=b)",dn=l`\\delta`+"",mn=l`x`+"",cn=l`(x=a+\\delta,y=b+\\epsilon)`+"",pn=l`\\epsilon`+"",wn=l`y=b`+"",un=l`f'(x) = \\frac{f(x + h) - f(x)}{h}`+"",vn=h`
\\begin{align*}
    \\frac{d^2f}{dx^2}
    &=\\lim _{h\\to 0}\\frac{{\\dfrac {f(x+h)-f(x)}{h}}-{\\dfrac {f(x)-f(x-h)}{h}}}{h}\\\\
    &=\\lim _{h\\to 0}{\\frac {f(x+h)-2f(x)+f(x-h)}{h^{2}}}
\\end{align*}
`+"",gn=l`f`+"",xn=l`h`+"",yn=l`h`+"",bn=l`ih`+"",$n=h`
\\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + ih) - f(x)}{ih}
`+"",kn=h`
\\frac{f(x + ih) - f(x)}{ih} = f'(x) + ih \\frac{f''(x)}{2!} - h^2 \\frac{f^{(3)}(x)}{3!} + \\cdots \\\\
`+"",Wn=h`
\\begin{align*}
f'(x) &= \\Im\\left[\\frac{f(x + ih) - f(x)}{ih}\\right] + h^2 \\frac{f^{(3)}(x)}{3!} - \\cdots \\\\
&= \\frac{\\Im[f(x + ih) - f(x)]}{h} + \\mathcal{O}(h^2) \\\\
\\end{align*}
`+"",Tn=l`h^2`+"",In=l`h`+"",_n=l`h`+"",En=l`ih`+"",zn=l`\\varepsilon^2 = 0`+"",Ln=l`\\varepsilon \\neq 0`+"",qn=h`a + b\\varepsilon`+"",An=l`\\varepsilon^2, \\varepsilon^3, \\cdots`+"",Dn=l`x \\to x + \\varepsilon`+"",Hn=h`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon + \\frac{f''(x)}{2!}\\varepsilon^2 + \\cdots`+"",jn=l`\\varepsilon^2 = 0`+"",Nn=l`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon`+"",Rn=h`
f'(x) = \\frac{f(x + \\varepsilon) - f(x)}{\\varepsilon}
`+"";return f=new Vn({props:{title:"Multiple first-principles",sub:"Recreational Math #004",desc:"Different ways to redefine the derivative",date:"13 July 2025"}}),d=new Xn({props:{generics:{C:["E","ih"],R:["x","y","a","b"],fXX:["f"]},list:[b("ℑ","The imaginary part of a complex number, often also written as Im"),b("ε","Dual number, often interpreted as an infinitesimal step. ε² = 0, but ε ≠ 0"),b("h","Variable, often interpreted as a small increment"),b("δ","Variable, often interpreted as a small increment"),b("ϵ","Epsilon, of δ fame."),b("ih","Variable, often interpreted as a small increment. Here, h is treated as real, and i is imaginary so that ih is complex")]}}),m=new Cn({props:{href:"//en.wikipedia.org/wiki/Limit_of_a_function",src:"//upload.wikimedia.org/wikipedia/commons/d/d5/Epsilon-delta_limit.svg",alt:"Wikipedia: Limit of a function"}}),{c(){Ua(f.$$.fragment),qa=Fa(),Ua(d.$$.fragment),Aa=s(`

We often define the fundamental derivative as:

`),$=new r(!1),k=s(`

which is a limit of the difference quotient as the increment
`),W=new r(!1),T=s(" approaches zero. We try to move a small distance in one direction ("),I=new r(!1),_=s(`)
and see how far it forces us in the other direction (`),E=new r(!1),z=s(`).

`),Ua(m.$$.fragment),Da=s(`

as in the image above, when at standing at `),Ha=s(an),ja=s(", we take a small step "),L=new r(!1),q=s(`
in `),A=new r(!1),D=s(", and end up at "),H=new r(!1),j=s(`. We see we also get a
small step `),N=new r(!1),R=s(", at the corresponding "),B=new r(!1),J=s(`. Taking the same idea
forward, if `),M=new r(!1),S=s(`, we can also define the
derivative, of the derivative, as:

`),V=new r(!1),X=s(`

We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only `),C=new r(!1),O=Fa(),c=g("h4"),Va=s("Imaginary Steps"),Na=s(`

This however still leaves us with a lot of freedom in how we choose the value
for `),U=new r(!1),F=s(". We can then also give it an imaginary value, and replace "),G=new r(!1),K=s(` with
`),P=new r(!1),Q=s(`, and get:

`),Y=new r(!1),Z=s(`

which implies, applying the Taylor series expansion, that:

`),aa=new r(!1),na=s(`

or taking just the real part both sides, we get:

`),ta=new r(!1),ea=s(`

We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now `),sa=new r(!1),ia=s(", and not "),ra=new r(!1),oa=s(`.

`),p=g("h4"),Xa=s("Automatic Differentiation"),Ra=s(`

Just as we took a small real step `),la=new r(!1),fa=s(", or a small imaginary step "),ha=new r(!1),da=s(`, we
can also take a small `),w=g("i"),Ca=s("'dual'"),Ba=s(` step, using dual numbers, which are
peculiarly defined as, let `),ma=new r(!1),ca=s(", but "),pa=new r(!1),wa=s(`.
We can define a dual number as:

`),ua=new r(!1),va=s(`

This also implies we throw away anything involving `),ga=new r(!1),xa=s(`,
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from `),ya=new r(!1),ba=s(`. We expand via Taylor:

`),$a=new r(!1),ka=s(`

But `),Wa=new r(!1),Ta=s(", so: "),Ia=new r(!1),_a=s(`

i.e.

`),Ea=new r(!1),za=s(`

Now isn't that neat. Automatic differentiation.

`),u=g("h4"),Oa=s("References"),Ja=Fa(),v=g("ul"),Ma=g("li"),this.h()},l(a){Ga(f.$$.fragment,a),qa=Ka(a),Ga(d.$$.fragment,a),Aa=i(a,`

We often define the fundamental derivative as:

`),$=o(a,!1),k=i(a,`

which is a limit of the difference quotient as the increment
`),W=o(a,!1),T=i(a," approaches zero. We try to move a small distance in one direction ("),I=o(a,!1),_=i(a,`)
and see how far it forces us in the other direction (`),E=o(a,!1),z=i(a,`).

`),Ga(m.$$.fragment,a),Da=i(a,`

as in the image above, when at standing at `),Ha=i(a,an),ja=i(a,", we take a small step "),L=o(a,!1),q=i(a,`
in `),A=o(a,!1),D=i(a,", and end up at "),H=o(a,!1),j=i(a,`. We see we also get a
small step `),N=o(a,!1),R=i(a,", at the corresponding "),B=o(a,!1),J=i(a,`. Taking the same idea
forward, if `),M=o(a,!1),S=i(a,`, we can also define the
derivative, of the derivative, as:

`),V=o(a,!1),X=i(a,`

We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only `),C=o(a,!1),O=Ka(a),c=x(a,"H4",{});var n=y(c);Va=i(n,"Imaginary Steps"),n.forEach(t),Na=i(a,`

This however still leaves us with a lot of freedom in how we choose the value
for `),U=o(a,!1),F=i(a,". We can then also give it an imaginary value, and replace "),G=o(a,!1),K=i(a,` with
`),P=o(a,!1),Q=i(a,`, and get:

`),Y=o(a,!1),Z=i(a,`

which implies, applying the Taylor series expansion, that:

`),aa=o(a,!1),na=i(a,`

or taking just the real part both sides, we get:

`),ta=o(a,!1),ea=i(a,`

We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now `),sa=o(a,!1),ia=i(a,", and not "),ra=o(a,!1),oa=i(a,`.

`),p=x(a,"H4",{});var nn=y(p);Xa=i(nn,"Automatic Differentiation"),nn.forEach(t),Ra=i(a,`

Just as we took a small real step `),la=o(a,!1),fa=i(a,", or a small imaginary step "),ha=o(a,!1),da=i(a,`, we
can also take a small `),w=x(a,"I",{});var tn=y(w);Ca=i(tn,"'dual'"),tn.forEach(t),Ba=i(a,` step, using dual numbers, which are
peculiarly defined as, let `),ma=o(a,!1),ca=i(a,", but "),pa=o(a,!1),wa=i(a,`.
We can define a dual number as:

`),ua=o(a,!1),va=i(a,`

This also implies we throw away anything involving `),ga=o(a,!1),xa=i(a,`,
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from `),ya=o(a,!1),ba=i(a,`. We expand via Taylor:

`),$a=o(a,!1),ka=i(a,`

But `),Wa=o(a,!1),Ta=i(a,", so: "),Ia=o(a,!1),_a=i(a,`

i.e.

`),Ea=o(a,!1),za=i(a,`

Now isn't that neat. Automatic differentiation.

`),u=x(a,"H4",{});var en=y(u);Oa=i(en,"References"),en.forEach(t),Ja=Ka(a),v=x(a,"UL",{});var sn=y(v);Ma=x(sn,"LI",{}),y(Ma).forEach(t),sn.forEach(t),this.h()},h(){$.a=k,W.a=T,I.a=_,E.a=z,L.a=q,A.a=D,H.a=j,N.a=R,B.a=J,M.a=S,V.a=X,C.a=O,U.a=F,G.a=K,P.a=Q,Y.a=Z,aa.a=na,ta.a=ea,sa.a=ia,ra.a=oa,la.a=fa,ha.a=da,ma.a=ca,pa.a=wa,ua.a=va,ga.a=xa,ya.a=ba,$a.a=ka,Wa.a=Ta,Ia.a=_a,Ea.a=za},m(a,n){Pa(f,a,n),e(a,qa,n),Pa(d,a,n),e(a,Aa,n),$.m(on,a,n),e(a,k,n),W.m(ln,a,n),e(a,T,n),I.m(fn,a,n),e(a,_,n),E.m(hn,a,n),e(a,z,n),Pa(m,a,n),e(a,Da,n),e(a,Ha,n),e(a,ja,n),L.m(dn,a,n),e(a,q,n),A.m(mn,a,n),e(a,D,n),H.m(cn,a,n),e(a,j,n),N.m(pn,a,n),e(a,R,n),B.m(wn,a,n),e(a,J,n),M.m(un,a,n),e(a,S,n),V.m(vn,a,n),e(a,X,n),C.m(gn,a,n),e(a,O,n),e(a,c,n),La(c,Va),e(a,Na,n),U.m(xn,a,n),e(a,F,n),G.m(yn,a,n),e(a,K,n),P.m(bn,a,n),e(a,Q,n),Y.m($n,a,n),e(a,Z,n),aa.m(kn,a,n),e(a,na,n),ta.m(Wn,a,n),e(a,ea,n),sa.m(Tn,a,n),e(a,ia,n),ra.m(In,a,n),e(a,oa,n),e(a,p,n),La(p,Xa),e(a,Ra,n),la.m(_n,a,n),e(a,fa,n),ha.m(En,a,n),e(a,da,n),e(a,w,n),La(w,Ca),e(a,Ba,n),ma.m(zn,a,n),e(a,ca,n),pa.m(Ln,a,n),e(a,wa,n),ua.m(qn,a,n),e(a,va,n),ga.m(An,a,n),e(a,xa,n),ya.m(Dn,a,n),e(a,ba,n),$a.m(Hn,a,n),e(a,ka,n),Wa.m(jn,a,n),e(a,Ta,n),Ia.m(Nn,a,n),e(a,_a,n),Ea.m(Rn,a,n),e(a,za,n),e(a,u,n),La(u,Oa),e(a,Ja,n),e(a,v,n),La(v,Ma),Sa=!0},p:Sn,i(a){Sa||(Qa(f.$$.fragment,a),Qa(d.$$.fragment,a),Qa(m.$$.fragment,a),Sa=!0)},o(a){Ya(f.$$.fragment,a),Ya(d.$$.fragment,a),Ya(m.$$.fragment,a),Sa=!1},d(a){Za(f,a),a&&t(qa),Za(d,a),a&&t(Aa),a&&$.d(),a&&t(k),a&&W.d(),a&&t(T),a&&I.d(),a&&t(_),a&&E.d(),a&&t(z),Za(m,a),a&&t(Da),a&&t(Ha),a&&t(ja),a&&L.d(),a&&t(q),a&&A.d(),a&&t(D),a&&H.d(),a&&t(j),a&&N.d(),a&&t(R),a&&B.d(),a&&t(J),a&&M.d(),a&&t(S),a&&V.d(),a&&t(X),a&&C.d(),a&&t(O),a&&t(c),a&&t(Na),a&&U.d(),a&&t(F),a&&G.d(),a&&t(K),a&&P.d(),a&&t(Q),a&&Y.d(),a&&t(Z),a&&aa.d(),a&&t(na),a&&ta.d(),a&&t(ea),a&&sa.d(),a&&t(ia),a&&ra.d(),a&&t(oa),a&&t(p),a&&t(Ra),a&&la.d(),a&&t(fa),a&&ha.d(),a&&t(da),a&&t(w),a&&t(Ba),a&&ma.d(),a&&t(ca),a&&pa.d(),a&&t(wa),a&&ua.d(),a&&t(va),a&&ga.d(),a&&t(xa),a&&ya.d(),a&&t(ba),a&&$a.d(),a&&t(ka),a&&Wa.d(),a&&t(Ta),a&&Ia.d(),a&&t(_a),a&&Ea.d(),a&&t(za),a&&t(u),a&&t(Ja),a&&t(v)}}}class Kn extends Bn{constructor(f){super(),Jn(this,f,null,On,Mn,{})}}export{Kn as default};
