const root = "https://x.manav.ch/s2/svelte/";
// const root = "http://localhost:8787/s2/svelte/"; // for testing

console.log( "Congratulations, you may make your mistake now" );

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
    .then( ( script ) => {
      const url = new Blob( [ script ], { type: 'application/javascript' } );
      console.log( url );
      const module = import( URL.createObjectURL( url ) );

      return module;
    } )
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

  // preload svelte internals
  const link = document.createElement( "link" );
  link.rel = "preload";
  link.as = "script";
  link.href = "https://unpkg.com/svelte@3.58.0/internal/index.mjs";
  link.crossOrigin = "anonymous";
  document.head.appendChild( link );
} )