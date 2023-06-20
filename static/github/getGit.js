import { writeFileSync } from "fs";
// get svg
const svg = await fetch( "https://github-readme-stats.vercel.app/api/top-langs/?username=plutoniumm&theme=aura_dark&hide=HTML,CSS,Jupyter%20Notebook,SCSS&langs_count=10&layout=compact&hide_border=true&bg_color=0d1117" )
  .then( ( res ) => res.text() );


const date = new Date().toDateString( 'en-GB' );

console.log( svg, date );