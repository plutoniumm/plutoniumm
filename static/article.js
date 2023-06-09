var conf;

function autoHighlight () {
  const hl = conf.getAttribute( 'hl' ).split( ',' ).map( x => x.trim() );

  // replace out all hl words by paragraph
  let ps = document.querySelectorAll( 'p, li, td' );
  ps = Array.from( ps ).filter(
    p => hl.some( word => p.innerHTML.includes( word ) )
  );

  for ( let i = 0;i < ps.length;i++ ) {
    const p = ps[ i ];
    let text = p.innerHTML;
    hl.forEach( ( word, indx ) => {
      const re = new RegExp( word, 'g' );
      text = text.replace( re, `<hl ix="${ indx % 6 }">${ word }</hl>` );
    } );

    p.innerHTML = text;
  };
}

async function mermaid () {
  const pre = document.querySelectorAll( 'pre' );
  if ( !pre ) return 0;

  let mermaid = ( await import( 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs' ) ).default;
  let config = {
    theme: 'base',
    startOnLoad: false,
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true
    }
  };
  mermaid.initialize( config );
  mermaid.run();
}

function makeToc () {
  const notoc = conf.getAttribute( 'notoc' );
  if ( notoc ) return 0;
  // ignore title
  let headings = Array.from( document.querySelectorAll( 'h1, h2, h3' ) ).slice( 1 )

  // make a tree
  let string = `<ul>`
  let currentLevel = headings[ 0 ].tagName[ 1 ];
  for ( let i = 0;i < headings.length;i++ ) {
    const heading = headings[ i ];
    const level = parseInt( heading.tagName[ 1 ] );
    const text = heading.innerText;

    let id;
    if ( heading.id )
      id = heading.id;
    else {
      // create & set
      id = text.replace( / /g, '-' ).toLowerCase();
      heading.id = id;
    };

    if ( level > currentLevel ) string += '<ul>';
    if ( level < currentLevel ) string += '</ul>';
    if ( level == currentLevel ) string += '</li>';

    currentLevel = level;

    string += `<li><a href="#${ id }">${ text }</a>`;
  };
  string += `</ul>`;

  const toc = document.querySelector( '#toc' );
  toc.innerHTML = string;
};

function calculateTime () {
  const main = document.querySelector( 'article' ).innerText;
  const words = main.split( ' ' ).filter( Boolean )
  let speed = words.length / 200; // 225 wpm

  // round words to nearest 500
  const rounded = ( ( words.length / 500 ) | 0 ) * 500;

  // since articles are dense, add a 10% non linear penalty
  document.querySelector( '#time' ).innerText = `${ Math.round( speed ** 1.1 ) } min read | ~${ rounded } words`;
};


//
function main () {
  conf = document.querySelector( 'conf' )
  setTimeout( () => {
    autoHighlight();
    makeToc();
    calculateTime();
    mermaid();
  }, 100 );
}

if ( document.readyState === 'loading' )
  document.addEventListener( 'DOMContentLoaded', main )
else
  main()