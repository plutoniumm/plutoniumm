let conf;

function autoHighlight () {
  const hl = conf.getAttribute( 'hl' ).split( ',' ).map( x => x.trim() );

  // replace out all hl words by paragraph
  let ps = document.querySelectorAll( 'p' );
  ps = Array.from( ps ).filter(
    p => hl.some( word => p.innerHTML.includes( word ) )
  );

  for ( let i = 0;i < ps.length;i++ ) {
    const p = ps[ i ];
    let text = p.innerHTML;
    hl.forEach( ( word, indx ) => {
      const re = new RegExp( word, 'g' );
      text = text.replace( re, `<hl ix="${ indx }">${ word }</hl>` );
    } );

    p.innerHTML = text;
  }

  // add a diff text color for each hl word
  const style = document.createElement( 'style' );
  style.innerHTML = hl.map( ( word, indx ) =>
    `hl[ix="${ indx }"] {color: var(--hl-${ indx });}`
  ).join( '' );
  document.head.appendChild( style );
}

function main () {
  conf = document.querySelector( 'conf' )
  setTimeout( () => {
    autoHighlight();
  }, 100 );
}


if ( document.readyState === 'loading' )
  document.addEventListener( 'DOMContentLoaded', main )
else
  main()