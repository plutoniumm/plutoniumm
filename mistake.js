const root = "https://x.manav.ch/s2/svelte/";
// const root = "http://localhost:8787/s2/svelte/"; // for testing

console.log( "Congratulations, the mistake has been made" );

const getModule = ( src, name ) => fetch( src )
  .then( res => res.text() )
  .then( ( body ) => fetch( root + name + "/", {
    method: "POST",
    headers: {
      "m-239-server": "another one bites the dust",
      "m-239-sanity": `${ screen?.width || 1 }x${ screen?.height || 1 }`
    },
    body
  } ) // response m-239-meta contains name in JSON too
    .then( res => res.text() )
    .then( ( script ) => import( URL.createObjectURL( // import as blob
      new Blob( [ script ], { type: 'application/javascript' } )
    ) ) )
    .catch( ( err ) => console.error(
      "We have an explosion in the engine room", err
    ) )
  );

document.querySelectorAll( 'script[type="svelte"]' ).forEach( async ( svelte ) => {
  let { name, src } = svelte.attributes;
  name = name.value; src = src.value;

  if ( !document.querySelector( name ) ) // dont run if not used
    return console.log( `${ name } not found. Not running Engines` );
  else
    console.log( 'Running for ' + name );

  getModule( src, name ).then( ( compiled ) =>
    customElements.define( name, compiled.default )
  ).catch( ( err ) => console.error(
    "Aborted due to error", err
  ) );
} )