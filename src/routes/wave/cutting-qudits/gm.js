// Gell-Mann decomposition of the mixed-dimensional CX gate (arXiv:2601.02064)
// complex numbers carried as [re, im] pairs, no external deps

const C = ( re, im ) => [ re, im || 0 ];
const cadd = ( a, b ) => [ a[ 0 ] + b[ 0 ], a[ 1 ] + b[ 1 ] ];
const cmul = ( a, b ) => [ a[ 0 ] * b[ 0 ] - a[ 1 ] * b[ 1 ], a[ 0 ] * b[ 1 ] + a[ 1 ] * b[ 0 ] ];
export const cabs = ( a ) => Math.hypot( a[ 0 ], a[ 1 ] );

const zeros = ( r, c ) =>
  Array.from( { length: r }, () => Array.from( { length: c }, () => C( 0 ) ) );

const eye = ( d ) => {
  const M = zeros( d, d );
  for ( let i = 0;i < d;i++ ) M[ i ][ i ] = C( 1 );

  return M;
};

// basis = {I} plus the generalised Gell-Mann matrices for dimension d
// order: per pair j<k a symmetric then an antisymmetric one, then diagonals
export function basis ( d ) {
  const out = [ {
    name: "I",
    M: eye( d ),
    norm: d,
  } ];

  for ( let j = 0;j < d;j++ ) {
    for ( let k = j + 1;k < d;k++ ) {
      const S = zeros( d, d );
      S[ j ][ k ] = C( 1 );
      S[ k ][ j ] = C( 1 );
      out.push( {
        name: "S" + j + k,
        M: S,
        norm: 2,
      } );
      const A = zeros( d, d );
      A[ j ][ k ] = C( 0, -1 );
      A[ k ][ j ] = C( 0, 1 );
      out.push( {
        name: "A" + j + k,
        M: A,
        norm: 2,
      } );
    }
  }

  for ( let l = 1;l < d;l++ ) {
    const D = zeros( d, d );
    const f = Math.sqrt( 2 / ( l * ( l + 1 ) ) );
    for ( let m = 0;m < l;m++ ) D[ m ][ m ] = C( f );
    D[ l ][ l ] = C( -l * f );
    out.push( {
      name: "D" + l,
      M: D,
      norm: 2,
    } );
  }

  return out;
}

function trProd ( M, N ) {
  const d = M.length;
  let t = C( 0 );

  for ( let i = 0;i < d;i++ )
    for ( let j = 0;j < d;j++ ) t = cadd( t, cmul( M[ i ][ j ], N[ j ][ i ] ) );

  return t;
}

// X^r in dimension d: |(j+r) mod d><j|
function shift ( d, r ) {
  const M = zeros( d, d );
  for ( let j = 0;j < d;j++ ) M[ ( j + r ) % d ][ j ] = C( 1 );

  return M;
}

function proj ( d, r ) {
  const M = zeros( d, d );
  M[ r ][ r ] = C( 1 );

  return M;
}

function kron ( A, B ) {
  const //
    ra = A.length,
    rb = B.length;
  const M = zeros( ra * rb, ra * rb );

  for ( let i = 0;i < ra;i++ )
    for ( let j = 0;j < ra;j++ )
      for ( let k = 0;k < rb;k++ )
        for ( let l = 0;l < rb;l++ )
          M[ i * rb + k ][ j * rb + l ] = cmul( A[ i ][ j ], B[ k ][ l ] );

  return M;
}

// CX_{d1,d2} = sum_r P_r (x) X^r, expanded over the two Gell-Mann bases.
// returns coefficient grid, the non-zero terms and (optionally, small dims
// only) the max element-wise reconstruction error against the exact gate
export function decompose ( d1, d2, verify ) {
  const B1 = basis( d1 );
  const B2 = basis( d2 );
  const grid = Array.from( { length: B1.length }, () =>
    Array.from( { length: B2.length }, () => C( 0 ) ) );

  for ( let r = 0;r < d1;r++ ) {
    const Pr = proj( d1, r );
    const Xr = shift( d2, r % d2 );
    const aco = B1.map( ( A ) => {
      const t = trProd( Pr, A.M );

      return [ t[ 0 ] / A.norm, t[ 1 ] / A.norm ];
    } );
    const bco = B2.map( ( B ) => {
      const t = trProd( Xr, B.M );

      return [ t[ 0 ] / B.norm, t[ 1 ] / B.norm ];
    } );

    for ( let a = 0;a < B1.length;a++ ) {
      if ( cabs( aco[ a ] ) < 1e-13 )
        continue;

      for ( let b = 0;b < B2.length;b++ )
        grid[ a ][ b ] = cadd( grid[ a ][ b ], cmul( aco[ a ], bco[ b ] ) );
    }
  }

  const terms = [];

  for ( let a = 0;a < B1.length;a++ )
    for ( let b = 0;b < B2.length;b++ )
      if ( cabs( grid[ a ][ b ] ) > 1e-12 )
        terms.push( {
          a,
          b,
          an: B1[ a ].name,
          bn: B2[ b ].name,
          c: grid[ a ][ b ],
        } );

  let err = null;

  if ( verify ) {
    const N = d1 * d2;
    const M = zeros( N, N );

    for ( const t of terms ) {
      const K = kron( B1[ t.a ].M, B2[ t.b ].M );

      for ( let i = 0;i < N;i++ )
        for ( let j = 0;j < N;j++ ) M[ i ][ j ] = cadd( M[ i ][ j ], cmul( t.c, K[ i ][ j ] ) );
    }

    const T = zeros( N, N );

    for ( let r = 0;r < d1;r++ ) {
      const K = kron( proj( d1, r ), shift( d2, r % d2 ) );

      for ( let i = 0;i < N;i++ )
        for ( let j = 0;j < N;j++ ) T[ i ][ j ] = cadd( T[ i ][ j ], K[ i ][ j ] );
    }

    err = 0;

    for ( let i = 0;i < N;i++ )
      for ( let j = 0;j < N;j++ )
        err = Math.max(
          err,
          cabs( [ M[ i ][ j ][ 0 ] - T[ i ][ j ][ 0 ], M[ i ][ j ][ 1 ] - T[ i ][ j ][ 1 ] ] ),
        );
  }

  return {
    names1: B1.map( ( x ) => x.name ),
    names2: B2.map( ( x ) => x.name ),
    grid,
    terms,
    err,
  };
}

const UNITS = [ "B", "KB", "MB", "GB", "TB", "PB", "EB" ];

export function fmtBytes ( x ) {
  let u = 0;

  while ( x >= 1024 && u < UNITS.length - 1 ) {
    x /= 1024;
    u++;
  }

  const num = x >= 100 ? Math.round( x ) : Math.round( x * 10 ) / 10;

  return num + " " + UNITS[ u ];
}
