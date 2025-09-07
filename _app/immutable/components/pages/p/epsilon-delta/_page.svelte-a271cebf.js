import{S as Dn,i as jn,s as Hn,x as La,r as Ua,d as s,H as r,e as Ca,y as Na,v as Ya,j as i,z as o,f as Oa,h as Fa,k as t,A as Ba,m as e,n as Ga,o as Ln,t as Ja,b as Ma,B as Ra}from"../../../../chunks/index-214b3cef.js";import{_ as m,a as l,M as Nn,D as Bn,d as v}from"../../../../chunks/index-a7fd1908.js";import{I as Jn}from"../../../../chunks/image-c1c3dcdd.js";import{R as Mn}from"../../../../chunks/refs-56757f58.js";function Rn(Za){let f,Ia,h,_a,g,x,y,$,b,k,W,T,d,za,Ea,qa,I,_,z,E,q,A,D,j,H,L,N,B,J,M,R,S,p,Sa,Aa,V,X,C,O,F,G,K,P,Q,U,Y,Z,aa,na,ta,ea,w,Va,Da,sa,ia,ra,oa,u,Xa,ja,la,fa,ma,ha,da,ca,pa,wa,ua,va,ga,xa,ya,$a,ba,ka,Wa,Ta,c,Ha,an=m`
    \\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}
`+"",nn=l`h`+"",tn=l`x`+"",en=l`y`+"",Ka="(x=a,y=b)",sn=l`\\delta`+"",rn=l`x`+"",on=l`(x=a+\\delta,y=b+\\epsilon)`+"",ln=l`\\epsilon`+"",fn=l`y=b`+"",mn=l`f'(x) = \\frac{f(x + h) - f(x)}{h}`+"",hn=m`
\\begin{align*}
    \\frac{d^2f}{dx^2}
    &=\\lim _{h\\to 0}\\frac{{\\dfrac {f(x+h)-f(x)}{h}}-{\\dfrac {f(x)-f(x-h)}{h}}}{h}\\\\
    &=\\lim _{h\\to 0}{\\frac {f(x+h)-2f(x)+f(x-h)}{h^{2}}}
\\end{align*}
`+"",dn=l`f`+"",cn=l`h`+"",pn=l`h`+"",wn=l`ih`+"",un=m`
\\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + ih) - f(x)}{ih}
`+"",vn=m`
\\frac{f(x + ih) - f(x)}{ih} = f'(x) + ih \\frac{f''(x)}{2!} - h^2 \\frac{f^{(3)}(x)}{3!} + \\cdots \\\\
`+"",gn=m`
\\begin{align*}
f'(x) &= \\Im\\left[\\frac{f(x + ih) - f(x)}{ih}\\right] + h^2 \\frac{f^{(3)}(x)}{3!} - \\cdots \\\\
&= \\frac{\\Im[f(x + ih) - f(x)]}{h} + \\mathcal{O}(h^2) \\\\
\\end{align*}
`+"",xn=l`h^2`+"",yn=l`h`+"",$n=l`h`+"",bn=l`ih`+"",kn=l`\\varepsilon^2 = 0`+"",Wn=l`\\varepsilon \\neq 0`+"",Tn=m`a + b\\varepsilon`+"",In=l`\\varepsilon^2, \\varepsilon^3, \\cdots`+"",_n=l`x \\to x + \\varepsilon`+"",zn=m`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon + \\frac{f''(x)}{2!}\\varepsilon^2 + \\cdots`+"",En=l`\\varepsilon^2 = 0`+"",qn=l`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon`+"",An=m`
f'(x) = \\frac{f(x + \\varepsilon) - f(x)}{\\varepsilon}
`+"";return f=new Nn({props:{title:"Multiple first-principles",sub:"Recreational Math #004",desc:"Different ways to redefine the derivative",date:"13 July 2025"}}),h=new Bn({props:{generics:{C:["E","ih"],R:["x","y","a","b"],fXX:["f"]},list:[v("ℑ","The imaginary part of a complex number, often also written as Im"),v("ε","Dual number, often interpreted as an infinitesimal step. ε² = 0, but ε ≠ 0"),v("h","Variable, often interpreted as a small increment"),v("δ","Variable, often interpreted as a small increment"),v("ϵ","Epsilon, of δ fame."),v("ih","Variable, often interpreted as a small increment. Here, h is treated as real, and i is imaginary so that ih is complex")]}}),d=new Jn({props:{href:"//en.wikipedia.org/wiki/Limit_of_a_function",src:"//upload.wikimedia.org/wikipedia/commons/d/d5/Epsilon-delta_limit.svg",alt:"Wikipedia: Limit of a function"}}),c=new Mn({props:{list:[]}}),{c(){La(f.$$.fragment),Ia=Ua(),La(h.$$.fragment),_a=s(`

We often define the fundamental derivative as:

`),g=new r(!1),x=s(`

which is a limit of the difference quotient as the increment
`),y=new r(!1),$=s(" approaches zero. We try to move a small distance in one direction ("),b=new r(!1),k=s(`)
and see how far it forces us in the other direction (`),W=new r(!1),T=s(`).

`),La(d.$$.fragment),za=s(`

as in the image above, when at standing at `),Ea=s(Ka),qa=s(", we take a small step "),I=new r(!1),_=s(`
in `),z=new r(!1),E=s(", and end up at "),q=new r(!1),A=s(`. We see we also get a
small step `),D=new r(!1),j=s(", at the corresponding "),H=new r(!1),L=s(`. Taking the same idea
forward, if `),N=new r(!1),B=s(`, we can also define the
derivative, of the derivative, as:

`),J=new r(!1),M=s(`

We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only `),R=new r(!1),S=Ua(),p=Ca("h4"),Sa=s("Imaginary Steps"),Aa=s(`

This however still leaves us with a lot of freedom in how we choose the value
for `),V=new r(!1),X=s(". We can then also give it an imaginary value, and replace "),C=new r(!1),O=s(` with
`),F=new r(!1),G=s(`, and get:

`),K=new r(!1),P=s(`

which implies, applying the Taylor series expansion, that:

`),Q=new r(!1),U=s(`

or taking just the real part both sides, we get:

`),Y=new r(!1),Z=s(`

We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now `),aa=new r(!1),na=s(", and not "),ta=new r(!1),ea=s(`.

`),w=Ca("h4"),Va=s("Automatic Differentiation"),Da=s(`

Just as we took a small real step `),sa=new r(!1),ia=s(", or a small imaginary step "),ra=new r(!1),oa=s(`, we
can also take a small `),u=Ca("i"),Xa=s("'dual'"),ja=s(` step, using dual numbers, which are
peculiarly defined as, let `),la=new r(!1),fa=s(", but "),ma=new r(!1),ha=s(`.
We can define a dual number as:

`),da=new r(!1),ca=s(`

This also implies we throw away anything involving `),pa=new r(!1),wa=s(`,
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from `),ua=new r(!1),va=s(`. We expand via Taylor:

`),ga=new r(!1),xa=s(`

But `),ya=new r(!1),$a=s(", so: "),ba=new r(!1),ka=s(`

i.e.

`),Wa=new r(!1),Ta=s(`

Now isn't that neat. Automatic differentiation.

`),La(c.$$.fragment),this.h()},l(a){Na(f.$$.fragment,a),Ia=Ya(a),Na(h.$$.fragment,a),_a=i(a,`

We often define the fundamental derivative as:

`),g=o(a,!1),x=i(a,`

which is a limit of the difference quotient as the increment
`),y=o(a,!1),$=i(a," approaches zero. We try to move a small distance in one direction ("),b=o(a,!1),k=i(a,`)
and see how far it forces us in the other direction (`),W=o(a,!1),T=i(a,`).

`),Na(d.$$.fragment,a),za=i(a,`

as in the image above, when at standing at `),Ea=i(a,Ka),qa=i(a,", we take a small step "),I=o(a,!1),_=i(a,`
in `),z=o(a,!1),E=i(a,", and end up at "),q=o(a,!1),A=i(a,`. We see we also get a
small step `),D=o(a,!1),j=i(a,", at the corresponding "),H=o(a,!1),L=i(a,`. Taking the same idea
forward, if `),N=o(a,!1),B=i(a,`, we can also define the
derivative, of the derivative, as:

`),J=o(a,!1),M=i(a,`

We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only `),R=o(a,!1),S=Ya(a),p=Oa(a,"H4",{});var n=Fa(p);Sa=i(n,"Imaginary Steps"),n.forEach(t),Aa=i(a,`

This however still leaves us with a lot of freedom in how we choose the value
for `),V=o(a,!1),X=i(a,". We can then also give it an imaginary value, and replace "),C=o(a,!1),O=i(a,` with
`),F=o(a,!1),G=i(a,`, and get:

`),K=o(a,!1),P=i(a,`

which implies, applying the Taylor series expansion, that:

`),Q=o(a,!1),U=i(a,`

or taking just the real part both sides, we get:

`),Y=o(a,!1),Z=i(a,`

We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now `),aa=o(a,!1),na=i(a,", and not "),ta=o(a,!1),ea=i(a,`.

`),w=Oa(a,"H4",{});var Pa=Fa(w);Va=i(Pa,"Automatic Differentiation"),Pa.forEach(t),Da=i(a,`

Just as we took a small real step `),sa=o(a,!1),ia=i(a,", or a small imaginary step "),ra=o(a,!1),oa=i(a,`, we
can also take a small `),u=Oa(a,"I",{});var Qa=Fa(u);Xa=i(Qa,"'dual'"),Qa.forEach(t),ja=i(a,` step, using dual numbers, which are
peculiarly defined as, let `),la=o(a,!1),fa=i(a,", but "),ma=o(a,!1),ha=i(a,`.
We can define a dual number as:

`),da=o(a,!1),ca=i(a,`

This also implies we throw away anything involving `),pa=o(a,!1),wa=i(a,`,
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from `),ua=o(a,!1),va=i(a,`. We expand via Taylor:

`),ga=o(a,!1),xa=i(a,`

But `),ya=o(a,!1),$a=i(a,", so: "),ba=o(a,!1),ka=i(a,`

i.e.

`),Wa=o(a,!1),Ta=i(a,`

Now isn't that neat. Automatic differentiation.

`),Na(c.$$.fragment,a),this.h()},h(){g.a=x,y.a=$,b.a=k,W.a=T,I.a=_,z.a=E,q.a=A,D.a=j,H.a=L,N.a=B,J.a=M,R.a=S,V.a=X,C.a=O,F.a=G,K.a=P,Q.a=U,Y.a=Z,aa.a=na,ta.a=ea,sa.a=ia,ra.a=oa,la.a=fa,ma.a=ha,da.a=ca,pa.a=wa,ua.a=va,ga.a=xa,ya.a=$a,ba.a=ka,Wa.a=Ta},m(a,n){Ba(f,a,n),e(a,Ia,n),Ba(h,a,n),e(a,_a,n),g.m(an,a,n),e(a,x,n),y.m(nn,a,n),e(a,$,n),b.m(tn,a,n),e(a,k,n),W.m(en,a,n),e(a,T,n),Ba(d,a,n),e(a,za,n),e(a,Ea,n),e(a,qa,n),I.m(sn,a,n),e(a,_,n),z.m(rn,a,n),e(a,E,n),q.m(on,a,n),e(a,A,n),D.m(ln,a,n),e(a,j,n),H.m(fn,a,n),e(a,L,n),N.m(mn,a,n),e(a,B,n),J.m(hn,a,n),e(a,M,n),R.m(dn,a,n),e(a,S,n),e(a,p,n),Ga(p,Sa),e(a,Aa,n),V.m(cn,a,n),e(a,X,n),C.m(pn,a,n),e(a,O,n),F.m(wn,a,n),e(a,G,n),K.m(un,a,n),e(a,P,n),Q.m(vn,a,n),e(a,U,n),Y.m(gn,a,n),e(a,Z,n),aa.m(xn,a,n),e(a,na,n),ta.m(yn,a,n),e(a,ea,n),e(a,w,n),Ga(w,Va),e(a,Da,n),sa.m($n,a,n),e(a,ia,n),ra.m(bn,a,n),e(a,oa,n),e(a,u,n),Ga(u,Xa),e(a,ja,n),la.m(kn,a,n),e(a,fa,n),ma.m(Wn,a,n),e(a,ha,n),da.m(Tn,a,n),e(a,ca,n),pa.m(In,a,n),e(a,wa,n),ua.m(_n,a,n),e(a,va,n),ga.m(zn,a,n),e(a,xa,n),ya.m(En,a,n),e(a,$a,n),ba.m(qn,a,n),e(a,ka,n),Wa.m(An,a,n),e(a,Ta,n),Ba(c,a,n),Ha=!0},p:Ln,i(a){Ha||(Ja(f.$$.fragment,a),Ja(h.$$.fragment,a),Ja(d.$$.fragment,a),Ja(c.$$.fragment,a),Ha=!0)},o(a){Ma(f.$$.fragment,a),Ma(h.$$.fragment,a),Ma(d.$$.fragment,a),Ma(c.$$.fragment,a),Ha=!1},d(a){Ra(f,a),a&&t(Ia),Ra(h,a),a&&t(_a),a&&g.d(),a&&t(x),a&&y.d(),a&&t($),a&&b.d(),a&&t(k),a&&W.d(),a&&t(T),Ra(d,a),a&&t(za),a&&t(Ea),a&&t(qa),a&&I.d(),a&&t(_),a&&z.d(),a&&t(E),a&&q.d(),a&&t(A),a&&D.d(),a&&t(j),a&&H.d(),a&&t(L),a&&N.d(),a&&t(B),a&&J.d(),a&&t(M),a&&R.d(),a&&t(S),a&&t(p),a&&t(Aa),a&&V.d(),a&&t(X),a&&C.d(),a&&t(O),a&&F.d(),a&&t(G),a&&K.d(),a&&t(P),a&&Q.d(),a&&t(U),a&&Y.d(),a&&t(Z),a&&aa.d(),a&&t(na),a&&ta.d(),a&&t(ea),a&&t(w),a&&t(Da),a&&sa.d(),a&&t(ia),a&&ra.d(),a&&t(oa),a&&t(u),a&&t(ja),a&&la.d(),a&&t(fa),a&&ma.d(),a&&t(ha),a&&da.d(),a&&t(ca),a&&pa.d(),a&&t(wa),a&&ua.d(),a&&t(va),a&&ga.d(),a&&t(xa),a&&ya.d(),a&&t($a),a&&ba.d(),a&&t(ka),a&&Wa.d(),a&&t(Ta),Ra(c,a)}}}class On extends Dn{constructor(f){super(),jn(this,f,null,Rn,Hn,{})}}export{On as default};
