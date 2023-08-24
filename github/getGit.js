import { writeFileSync, readFileSync } from "fs";
import { JSDOM } from "jsdom";

let date = null;

const args = process.argv.slice( 2 )[ 0 ] || "plutoniumm"
const getSource = async ( source ) => {
  let text = "";
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

// convert lang,stat,, lang,stat to lang,lang,lang,stat,stat,stat
const fLangs = [];
const fStats = []
for ( let i = 0;i < stats.length;i++ ) {
  const [ lang, stat ] = stats[ i ];
  fLangs.push( lang );
  fStats.push( stat );
};

date = new Date( date ).toLocaleDateString( "en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric"
} );
const oldStats = JSON.parse( readFileSync( './stats.json', 'utf-8' ) );

oldStats[ date ] = {
  langs: fLangs,
  stats: fStats
};

// sort by date
const dates = Object.keys( oldStats );
dates.sort( ( a, b ) => new Date( a ) - new Date( b ) );

const newStats = {};
for ( let i = 0;i < dates.length;i++ ) {
  const date = dates[ i ];
  newStats[ date ] = oldStats[ date ];
};

writeFileSync( './stats.json', JSON.stringify( newStats, null, 2 ) );