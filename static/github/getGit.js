import { writeFileSync, readFileSync } from "fs";
import { JSDOM } from "jsdom";

let date = null;

const args = process.argv.slice( 2 )[ 0 ] || "plutoniumm"
const getSource = async ( source ) => {
  let text = "";
  if ( source.startsWith( "." ) ) {
    console.log( "Running from local file", source );
    const file = readFileSync( source, "utf-8" );
    text = file;
    date = new Date( source.split( "/" ).pop().split( "." )[ 0 ] );
  } else {
    try {
      const hide = [ "HTML", "CSS", "Jupyter%20Notebook", "SCSS" ].join( "," );
      console.log( "Running from github", source );
      source = `https://github-readme-stats.vercel.app/api/top-langs/?username=${ source }&hide=${ hide }&langs_count=10&layout=compact&hide_border=true`
      const res = await fetch( new URL( source ) )
        .then( r => r.text() )
        .catch( e => console.log( "Fetch Failure", e ) );
      text = res;
      date = new Date();
    } catch ( e ) {
      console.log( "NOT VALID USER" );
    }
  }

  return text;
};

const svg = await getSource( args );
const dom = new JSDOM(
  `<html><body>${ svg }</body></html>`
).window.document;

const langs = dom.querySelectorAll( '.lang-name' );
const stats = [];

for ( let i = 0;i < langs.length;i++ ) {
  const lang = langs[ i ];
  const splits = lang
    .textContent
    .replaceAll( "\n", "" )
    .trim()
    .split( " " );

  const pct = parseFloat( splits.pop() );
  const name = splits.join( " " );

  stats.push( [ name, pct ] );
};


date = new Date( date ).toLocaleDateString( "en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric"
} );
console.log( date, stats );