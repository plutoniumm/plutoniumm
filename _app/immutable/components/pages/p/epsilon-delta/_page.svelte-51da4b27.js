import{S as Dn,i as jn,s as Hn,x as La,r as Ua,d as s,H as r,e as Ca,y as Na,v as Ya,j as t,z as o,f as Oa,h as Fa,k as i,A as Ba,m as e,n as Ga,o as Ln,t as Ja,b as Ma,B as Ra}from"../../../../chunks/index-214b3cef.js";import{_ as m,a as l,M as Nn,D as Bn,d as v}from"../../../../chunks/index-230b354e.js";import{I as Jn}from"../../../../chunks/image-ad0709bf.js";import{R as Mn}from"../../../../chunks/refs-803004c3.js";function Rn(Za){let f,Ia,h,_a,g,x,y,$,b,k,W,T,d,za,qa,Ea,I,_,z,q,E,A,D,j,H,L,N,B,J,M,R,S,p,Sa,Aa,V,X,C,O,F,G,K,P,Q,U,Y,Z,aa,na,ia,ea,w,Va,Da,sa,ta,ra,oa,u,Xa,ja,la,fa,ma,ha,da,ca,pa,wa,ua,va,ga,xa,ya,$a,ba,ka,Wa,Ta,c,Ha,an=m`
    \\frac{d}{dx} f = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}
`+"",nn=l`h`+"",en=l`x`+"",sn=l`y`+"",Ka="(x=a,y=b)",tn=l`\\delta`+"",rn=l`x`+"",on=l`(x=a+\\delta,y=b+\\epsilon)`+"",ln=l`\\epsilon`+"",fn=l`y=b`+"",mn=l`f'(x) = \\frac{f(x + h) - f(x)}{h}`+"",hn=m`
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
`+"",xn=l`h^2`+"",yn=l`h`+"",$n=l`h`+"",bn=l`ih`+"",kn=l`\\varepsilon^2 = 0`+"",Wn=l`\\varepsilon \\neq 0`+"",Tn=m`a + b\\varepsilon`+"",In=l`\\varepsilon^2, \\varepsilon^3, \\cdots`+"",_n=l`x \\to x + \\varepsilon`+"",zn=m`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon + \\frac{f''(x)}{2!}\\varepsilon^2 + \\cdots`+"",qn=l`\\varepsilon^2 = 0`+"",En=l`f(x + \\varepsilon) = f(x) + f'(x)\\varepsilon`+"",An=m`
f'(x) = \\frac{f(x + \\varepsilon) - f(x)}{\\varepsilon}
`+"";return f=new Nn({props:{title:"Multiple first-principles",sub:"Recreational Math #004",desc:"Different ways to redefine the derivative",date:"13 July 2025"}}),h=new Bn({props:{generics:{C:["E","ih"],R:["x","y","a","b"],fXX:["f"]},list:[v("ℑ","The imaginary part of a complex number, often also written as Im"),v("ε","Dual number, often interpreted as an infinitesimal step. ε² = 0, but ε ≠ 0"),v("h","Variable, often interpreted as a small increment"),v("δ","Variable, often interpreted as a small increment"),v("ϵ","Epsilon, of δ fame."),v("ih","Variable, often interpreted as a small increment. Here, h is treated as real, and i is imaginary so that ih is complex")]}}),d=new Jn({props:{href:"//en.wikipedia.org/wiki/Limit_of_a_function",src:"//upload.wikimedia.org/wikipedia/commons/d/d5/Epsilon-delta_limit.svg",alt:"Wikipedia: Limit of a function"}}),c=new Mn({props:{list:[]}}),{c(){La(f.$$.fragment),Ia=Ua(),La(h.$$.fragment),_a=s(`

We often define the fundamental derivative as:

`),g=new r(!1),x=s(`

which is a limit of the difference quotient as the increment
`),y=new r(!1),$=s(" approaches zero. We try to move a small distance in one direction ("),b=new r(!1),k=s(`)
and see how far it forces us in the other direction (`),W=new r(!1),T=s(`).

`),La(d.$$.fragment),za=s(`

as in the image above, when at standing at `),qa=s(Ka),Ea=s(", we take a small step "),I=new r(!1),_=s(`
in `),z=new r(!1),q=s(", and end up at "),E=new r(!1),A=s(`. We see we also get a
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
more accurate since the first error term is now `),aa=new r(!1),na=s(", and not "),ia=new r(!1),ea=s(`.

`),w=Ca("h4"),Va=s("Automatic Differentiation"),Da=s(`

Just as we took a small real step `),sa=new r(!1),ta=s(", or a small imaginary step "),ra=new r(!1),oa=s(`, we
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

`),La(c.$$.fragment),this.h()},l(a){Na(f.$$.fragment,a),Ia=Ya(a),Na(h.$$.fragment,a),_a=t(a,`

We often define the fundamental derivative as:

`),g=o(a,!1),x=t(a,`

which is a limit of the difference quotient as the increment
`),y=o(a,!1),$=t(a," approaches zero. We try to move a small distance in one direction ("),b=o(a,!1),k=t(a,`)
and see how far it forces us in the other direction (`),W=o(a,!1),T=t(a,`).

`),Na(d.$$.fragment,a),za=t(a,`

as in the image above, when at standing at `),qa=t(a,Ka),Ea=t(a,", we take a small step "),I=o(a,!1),_=t(a,`
in `),z=o(a,!1),q=t(a,", and end up at "),E=o(a,!1),A=t(a,`. We see we also get a
small step `),D=o(a,!1),j=t(a,", at the corresponding "),H=o(a,!1),L=t(a,`. Taking the same idea
forward, if `),N=o(a,!1),B=t(a,`, we can also define the
derivative, of the derivative, as:

`),J=o(a,!1),M=t(a,`

We often find this form of derivative, useful since it allows us to calculate
the second derivative without any first derivative terms. Numerically also, this
lets us calculate the slope using only `),R=o(a,!1),S=Ya(a),p=Oa(a,"H4",{});var n=Fa(p);Sa=t(n,"Imaginary Steps"),n.forEach(i),Aa=t(a,`

This however still leaves us with a lot of freedom in how we choose the value
for `),V=o(a,!1),X=t(a,". We can then also give it an imaginary value, and replace "),C=o(a,!1),O=t(a,` with
`),F=o(a,!1),G=t(a,`, and get:

`),K=o(a,!1),P=t(a,`

which implies, applying the Taylor series expansion, that:

`),Q=o(a,!1),U=t(a,`

or taking just the real part both sides, we get:

`),Y=o(a,!1),Z=t(a,`

We notice now interestingly that the derivative after a complex step, is much
more accurate since the first error term is now `),aa=o(a,!1),na=t(a,", and not "),ia=o(a,!1),ea=t(a,`.

`),w=Oa(a,"H4",{});var Pa=Fa(w);Va=t(Pa,"Automatic Differentiation"),Pa.forEach(i),Da=t(a,`

Just as we took a small real step `),sa=o(a,!1),ta=t(a,", or a small imaginary step "),ra=o(a,!1),oa=t(a,`, we
can also take a small `),u=Oa(a,"I",{});var Qa=Fa(u);Xa=t(Qa,"'dual'"),Qa.forEach(i),ja=t(a,` step, using dual numbers, which are
peculiarly defined as, let `),la=o(a,!1),fa=t(a,", but "),ma=o(a,!1),ha=t(a,`.
We can define a dual number as:

`),da=o(a,!1),ca=t(a,`

This also implies we throw away anything involving `),pa=o(a,!1),wa=t(a,`,
etc. It acts like an infinitesimal—nonzero, but square is zero. Let’s take a
small dual step from `),ua=o(a,!1),va=t(a,`. We expand via Taylor:

`),ga=o(a,!1),xa=t(a,`

But `),ya=o(a,!1),$a=t(a,", so: "),ba=o(a,!1),ka=t(a,`

i.e.

`),Wa=o(a,!1),Ta=t(a,`

Now isn't that neat. Automatic differentiation.

`),Na(c.$$.fragment,a),this.h()},h(){g.a=x,y.a=$,b.a=k,W.a=T,I.a=_,z.a=q,E.a=A,D.a=j,H.a=L,N.a=B,J.a=M,R.a=S,V.a=X,C.a=O,F.a=G,K.a=P,Q.a=U,Y.a=Z,aa.a=na,ia.a=ea,sa.a=ta,ra.a=oa,la.a=fa,ma.a=ha,da.a=ca,pa.a=wa,ua.a=va,ga.a=xa,ya.a=$a,ba.a=ka,Wa.a=Ta},m(a,n){Ba(f,a,n),e(a,Ia,n),Ba(h,a,n),e(a,_a,n),g.m(an,a,n),e(a,x,n),y.m(nn,a,n),e(a,$,n),b.m(en,a,n),e(a,k,n),W.m(sn,a,n),e(a,T,n),Ba(d,a,n),e(a,za,n),e(a,qa,n),e(a,Ea,n),I.m(tn,a,n),e(a,_,n),z.m(rn,a,n),e(a,q,n),E.m(on,a,n),e(a,A,n),D.m(ln,a,n),e(a,j,n),H.m(fn,a,n),e(a,L,n),N.m(mn,a,n),e(a,B,n),J.m(hn,a,n),e(a,M,n),R.m(dn,a,n),e(a,S,n),e(a,p,n),Ga(p,Sa),e(a,Aa,n),V.m(cn,a,n),e(a,X,n),C.m(pn,a,n),e(a,O,n),F.m(wn,a,n),e(a,G,n),K.m(un,a,n),e(a,P,n),Q.m(vn,a,n),e(a,U,n),Y.m(gn,a,n),e(a,Z,n),aa.m(xn,a,n),e(a,na,n),ia.m(yn,a,n),e(a,ea,n),e(a,w,n),Ga(w,Va),e(a,Da,n),sa.m($n,a,n),e(a,ta,n),ra.m(bn,a,n),e(a,oa,n),e(a,u,n),Ga(u,Xa),e(a,ja,n),la.m(kn,a,n),e(a,fa,n),ma.m(Wn,a,n),e(a,ha,n),da.m(Tn,a,n),e(a,ca,n),pa.m(In,a,n),e(a,wa,n),ua.m(_n,a,n),e(a,va,n),ga.m(zn,a,n),e(a,xa,n),ya.m(qn,a,n),e(a,$a,n),ba.m(En,a,n),e(a,ka,n),Wa.m(An,a,n),e(a,Ta,n),Ba(c,a,n),Ha=!0},p:Ln,i(a){Ha||(Ja(f.$$.fragment,a),Ja(h.$$.fragment,a),Ja(d.$$.fragment,a),Ja(c.$$.fragment,a),Ha=!0)},o(a){Ma(f.$$.fragment,a),Ma(h.$$.fragment,a),Ma(d.$$.fragment,a),Ma(c.$$.fragment,a),Ha=!1},d(a){Ra(f,a),a&&i(Ia),Ra(h,a),a&&i(_a),a&&g.d(),a&&i(x),a&&y.d(),a&&i($),a&&b.d(),a&&i(k),a&&W.d(),a&&i(T),Ra(d,a),a&&i(za),a&&i(qa),a&&i(Ea),a&&I.d(),a&&i(_),a&&z.d(),a&&i(q),a&&E.d(),a&&i(A),a&&D.d(),a&&i(j),a&&H.d(),a&&i(L),a&&N.d(),a&&i(B),a&&J.d(),a&&i(M),a&&R.d(),a&&i(S),a&&i(p),a&&i(Aa),a&&V.d(),a&&i(X),a&&C.d(),a&&i(O),a&&F.d(),a&&i(G),a&&K.d(),a&&i(P),a&&Q.d(),a&&i(U),a&&Y.d(),a&&i(Z),a&&aa.d(),a&&i(na),a&&ia.d(),a&&i(ea),a&&i(w),a&&i(Da),a&&sa.d(),a&&i(ta),a&&ra.d(),a&&i(oa),a&&i(u),a&&i(ja),a&&la.d(),a&&i(fa),a&&ma.d(),a&&i(ha),a&&da.d(),a&&i(ca),a&&pa.d(),a&&i(wa),a&&ua.d(),a&&i(va),a&&ga.d(),a&&i(xa),a&&ya.d(),a&&i($a),a&&ba.d(),a&&i(ka),a&&Wa.d(),a&&i(Ta),Ra(c,a)}}}class On extends Dn{constructor(f){super(),jn(this,f,null,Rn,Hn,{})}}export{On as default};
