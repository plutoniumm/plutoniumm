export const cvec = () => ( {
    re: new Float64Array( 8 ),
    im: new Float64Array( 8 ),
} );

export const copy = ( c ) => ( {
    re: c.re.slice(),
    im: c.im.slice(),
} );

const ops = ( m ) => [ ( m >> 4 ) & 3, ( m >> 2 ) & 3, m & 3 ];

const xmask = ( m ) =>
    ops( m ).reduce( ( a, o, q ) => ( o === 1 || o === 2 ? a | ( 4 >> q ) : a ), 0 );

// P_m |b> = phase(m, b) |b ^ xmask(m)>
function phase ( m, b ) {
    let //
        re = 1,
        im = 0;
    const o = ops( m );

    for ( let q = 0;q < 3;q++ ) {
        const t = ( b >> ( 2 - q ) ) & 1;

        if ( o[ q ] === 2 ) {
            const s = t ? -1 : 1;
            const nr = -im * s;
            const ni = re * s;
            re = nr;
            im = ni;
        } else if ( o[ q ] === 3 && t ) {
            re = -re;
            im = -im;
        }
    }

    return [ re, im ];
}

export function channel ( p ) {
    const p1 = [ 1 - 3 * p, p, p, p ];
    const w = new Float64Array( 64 );

    for ( let m = 0;m < 64;m++ ) {
        const o = ops( m );
        w[ m ] = p1[ o[ 0 ] ] * p1[ o[ 1 ] ] * p1[ o[ 2 ] ];
    }

    // sigma = N(rho_clean) is diagonal for rho = (|000><000|+|111><111|)/2
    const sig = new Float64Array( 8 );

    for ( let m = 0;m < 64;m++ ) {
        const b = xmask( m );
        sig[ b ] += w[ m ] / 2;
        sig[ b ^ 7 ] += w[ m ] / 2;
    }

    // Petz Kraus R_k = rho^(1/2) A_k^dag sigma^(-1/2): two nonzero rows
    const R = [];

    for ( let k = 0;k < 64;k++ ) {
        const b0 = xmask( k );
        const b1 = b0 ^ 7;
        const sw = Math.sqrt( w[ k ] );
        const f0 = phase( k, 0 );
        const f7 = phase( k, 7 );
        const d0 = sig[ b0 ] > 1e-14 ? 1 / Math.sqrt( 2 * sig[ b0 ] ) : 0;
        const d1 = sig[ b1 ] > 1e-14 ? 1 / Math.sqrt( 2 * sig[ b1 ] ) : 0;
        R.push( {
            b0,
            b1,
            v0r: sw * f0[ 0 ] * d0,
            v0i: -sw * f0[ 1 ] * d0,
            v1r: sw * f7[ 0 ] * d1,
            v1i: -sw * f7[ 1 ] * d1,
        } );
    }

    return {
        w,
        R,
    };
}

// entanglement fidelity of decode . Petz . noise . encode
export function fidelity ( c0, c1, ch ) {
    const cols = [];

    for ( let m = 0;m < 64;m++ ) {
        const xm = xmask( m );
        const sw = Math.sqrt( ch.w[ m ] );
        const a = cvec();
        const b = cvec();

        for ( let s = 0;s < 8;s++ ) {
            const ph = phase( m, s );
            const pr = sw * ph[ 0 ];
            const pi = sw * ph[ 1 ];
            const t = s ^ xm;
            a.re[ t ] += pr * c0.re[ s ] - pi * c0.im[ s ];
            a.im[ t ] += pr * c0.im[ s ] + pi * c0.re[ s ];
            b.re[ t ] += pr * c1.re[ s ] - pi * c1.im[ s ];
            b.im[ t ] += pr * c1.im[ s ] + pi * c1.re[ s ];
        }

        cols.push( [ a, b ] );
    }

    const //
        a0r = c0.re[ 0 ],
        a0i = -c0.im[ 0 ],
        a7r = c0.re[ 7 ],
        a7i = -c0.im[ 7 ];
    const //
        b0r = c1.re[ 0 ],
        b0i = -c1.im[ 0 ],
        b7r = c1.re[ 7 ],
        b7i = -c1.im[ 7 ];
    let F = 0;

    for ( let k = 0;k < 64;k++ ) {
        const r = ch.R[ k ];

        for ( let m = 0;m < 64;m++ ) {
            const ca = cols[ m ][ 0 ];
            const cb = cols[ m ][ 1 ];
            const t0r =
                a0r * ca.re[ r.b0 ] -
                a0i * ca.im[ r.b0 ] +
                b0r * cb.re[ r.b0 ] -
                b0i * cb.im[ r.b0 ];
            const t0i =
                a0r * ca.im[ r.b0 ] +
                a0i * ca.re[ r.b0 ] +
                b0r * cb.im[ r.b0 ] +
                b0i * cb.re[ r.b0 ];
            const t1r =
                a7r * ca.re[ r.b1 ] -
                a7i * ca.im[ r.b1 ] +
                b7r * cb.re[ r.b1 ] -
                b7i * cb.im[ r.b1 ];
            const t1i =
                a7r * ca.im[ r.b1 ] +
                a7i * ca.re[ r.b1 ] +
                b7r * cb.im[ r.b1 ] +
                b7i * cb.re[ r.b1 ];
            const Tr = r.v0r * t0r - r.v0i * t0i + r.v1r * t1r - r.v1i * t1i;
            const Ti = r.v0r * t0i + r.v0i * t0r + r.v1r * t1i + r.v1i * t1r;
            F += Tr * Tr + Ti * Ti;
        }
    }

    return F / 4;
}

export const norm = ( c ) => {
    let s = 0;
    for ( let j = 0;j < 8;j++ ) s += c.re[ j ] ** 2 + c.im[ j ] ** 2;

    return Math.sqrt( s );
};

/** <a|b> */
export const inner = ( a, b ) => {
    let //
        re = 0,
        im = 0;

    for ( let j = 0;j < 8;j++ ) {
        re += a.re[ j ] * b.re[ j ] + a.im[ j ] * b.im[ j ];
        im += a.re[ j ] * b.im[ j ] - a.im[ j ] * b.re[ j ];
    }

    return [ re, im ];
};

/** c -= (zr + i zi) b, in place */
function axpy ( c, zr, zi, b ) {
    for ( let j = 0;j < 8;j++ ) {
        c.re[ j ] -= zr * b.re[ j ] - zi * b.im[ j ];
        c.im[ j ] -= zr * b.im[ j ] + zi * b.re[ j ];
    }
}

/** the retraction: normalise the first codeword, straighten the second
    against it, normalise what is left */
export function orthonormalise ( c0, c1 ) {
    const a = copy( c0 );
    const na = norm( a ) || 1;

    for ( let j = 0;j < 8;j++ ) {
        a.re[ j ] /= na;
        a.im[ j ] /= na;
    }

    const b = copy( c1 );
    const ov = inner( a, b );
    axpy( b, ov[ 0 ], ov[ 1 ], a );
    const nb = norm( b ) || 1;

    for ( let j = 0;j < 8;j++ ) {
        b.re[ j ] /= nb;
        b.im[ j ] /= nb;
    }

    return [ a, b ];
}

const DELTA = 1e-4;

/** finite-difference gradient of F: 32 probes against one base evaluation */
function gradF ( c0, c1, ch ) {
    const base = fidelity( c0, c1, ch );
    const cur = [ c0, c1 ];
    const g = [ cvec(), cvec() ];

    for ( let w = 0;w < 2;w++ ) {
        for ( let j = 0;j < 8;j++ ) {
            for ( const part of [ "re", "im" ] ) {
                const probe = copy( cur[ w ] );
                probe[ part ][ j ] += DELTA;
                const pair = w === 0 ? [ probe, cur[ 1 ] ] : [ cur[ 0 ], probe ];
                g[ w ][ part ][ j ] =
                    ( fidelity( pair[ 0 ], pair[ 1 ], ch ) - base ) / DELTA;
            }
        }
    }

    return g;
}

/** one ascent step on F. mode "raw": bare update. mode "mani": project the
    gradient out of span{c0, c1} (the tangent space), step, then retract. */
export function ascend ( c0, c1, ch, mode, eta ) {
    const g = gradF( c0, c1, ch );

    if ( mode === "mani" ) {
        for ( const gw of g ) {
            for ( const b of [ c0, c1 ] ) {
                const ov = inner( b, gw );
                axpy( gw, ov[ 0 ], ov[ 1 ], b );
            }
        }
    }

    const out = [ copy( c0 ), copy( c1 ) ];

    for ( let w = 0;w < 2;w++ ) {
        for ( let j = 0;j < 8;j++ ) {
            out[ w ].re[ j ] += eta * g[ w ].re[ j ];
            out[ w ].im[ j ] += eta * g[ w ].im[ j ];
        }
    }

    return mode === "mani" ? orthonormalise( out[ 0 ], out[ 1 ] ) : out;
}

export function lcg ( seed ) {
    let s = seed >>> 0;

    return () => {
        s = ( s * 1664525 + 1013904223 ) >>> 0;

        return s / 4294967296 - 0.5;
    };
}

/** clean codewords |000>, |111> damaged by eps and made valid again */
export function damagedCode ( eps, seed ) {
    const c0 = cvec();
    c0.re[ 0 ] = 1;
    const c1 = cvec();
    c1.re[ 7 ] = 1;
    const rnd = lcg( seed );

    for ( const c of [ c0, c1 ] ) {
        for ( let j = 0;j < 8;j++ ) {
            c.re[ j ] += eps * rnd();
            c.im[ j ] += eps * rnd();
        }
    }

    return orthonormalise( c0, c1 );
}
