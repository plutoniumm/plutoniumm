import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const isDir = ( p ) => fs.lstatSync( p ).isDirectory();

export async function hash ( input ) {
  const data = new TextEncoder().encode( input );
  let hash = await crypto.subtle.digest( 'SHA-256', data );

  hash = Array.from( new Uint8Array( hash ) );
  hash = hash.map( b => b.toString( 16 ).padStart( 2, '0' ) ).join( '' );

  return hash;
}

const escape = ( unsafe ) => unsafe.replace( /[<>&'"]/g, c => {
  switch ( c ) {
    case '<': return '&lt;';
    case '>': return '&gt;';
    case '&': return '&amp;';
    case '\'': return '&apos;';
    case '"': return '&quot;';
  }
} );

/**
 * @param {Object} options
 * @param {string} options.inDir
 * @param {string} options.outDir
 */
export default function bannerer ( options = {} ) {
  const { inDir, outDir } = options;
  if ( !inDir || !outDir ) {
    throw new Error( 'vite-plugin-og-generator: inDir and outDir are required.' );
  }

  function SVG ( title ) {
    return `
    <svg width="1200" height="630" viewBox="0 0 1200 630"  xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-weight="700">
<defs>
<filter id="noiseFilter">
<feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" stitchTiles="stitch" seed="42"/>
<feColorMatrix type="saturate" values="0" />
<feComponentTransfer>
<feFuncA type="linear" slope="0.5" />
</feComponentTransfer>
</filter>
<linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
<stop offset="100%" style="stop-color:#2d2d2d;stop-opacity:1" />
</linearGradient>
<linearGradient id="opacityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" style="stop-color:white;stop-opacity:0" />
<stop offset="50%" style="stop-color:white;stop-opacity:1" />
<stop offset="100%" style="stop-color:white;stop-opacity:0" />
</linearGradient>
<mask id="opacityMask">
<rect width="1200" height="630" fill="url(#opacityGradient)"/>
</mask>
</defs>

    <rect width="100%" height="100%" fill="#ffffff" />
<rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.7" />
<g id="bg-img" transform="rotate(15, 600, 315) translate(-200, -50)" mask="url(#opacityMask)" stroke="#2af" stroke-width="6">
<line x1="0" y1="315.0" x2="1200" y2="315.0"  opacity="0.25"/>
<line x1="600.0" y1="0" x2="600.0" y2="630"  opacity="0.25"/>
<path d="M 0.0 2715.0L 10.0 2597.0L 20.0 2482.9L 30.0 2372.7L 40.0
2266.3L 50.0 2163.6L 60.0 2064.6L 70.0 1969.2L 80.0 1877.3L 90.0 1788.9L 100.0 1703.9L 110.0 1622.2L 120.0 1543.8L 130.0 1468.6L 140.0 1396.5L 150.0 1327.5L 160.0 1261.5L 170.0 1198.4L 180.0 1138.2L 190.0 1080.8L 200.0 1026.1L 210.0 974.1L 220.0 924.7L 230.0 877.8L 240.0 833.4L 250.0 791.4L 260.0 751.7L 270.0 714.3L 280.0 679.1L 290.0 646.0L 300.0 615.0L 310.0 586.0L 320.0 558.9L 330.0 533.7L 340.0 510.3L 350.0 488.6L 360.0 468.6L 370.0 450.2L 380.0 433.3L 390.0 417.9L 400.0 403.9L 410.0 391.2L 420.0 379.8L 430.0 369.6L 440.0 360.5L 450.0 352.5L 460.0 345.5L 470.0 339.4L 480.0 334.2L 490.0 329.8L 500.0 326.1L 510.0 323.1L 520.0 320.7L 530.0 318.8L 540.0 317.4L 550.0 316.4L 560.0 315.7L 570.0 315.3L 580.0 315.1L 590.0 315.0L 600.0 315.0L 610.0 315.0L 620.0 314.9L 630.0 314.7L 640.0 314.3L 650.0 313.6L 660.0 312.6L 670.0 311.2L 680.0 309.3L 690.0 306.9L 700.0 303.9L 710.0 300.2L 720.0 295.8L 730.0 290.6L 740.0 284.5L 750.0 277.5L 760.0 269.5L 770.0 260.4L 780.0 250.2L 790.0 238.8L 800.0 226.1L 810.0 212.1L 820.0 196.7L 830.0 179.8L 840.0 161.4L 850.0 141.4L 860.0 119.7L 870.0 96.3L 880.0 71.1L 890.0 44.0L 900.0 15.0L 910.0 -16.0L 920.0 -49.1L 930.0 -84.3L 940.0 -121.7L 950.0 -161.4L 960.0 -203.4L 970.0 -247.8L 980.0 -294.7L 990.0 -344.1L 1000.0 -396.1L 1010.0 -450.8L 1020.0 -508.2L 1030.0 -568.4L 1040.0 -631.5L 1050.0 -697.5L 1060.0 -766.5L 1070.0 -838.6L 1080.0 -913.8L 1090.0 -992.2L 1100.0 -1073.9L 1110.0 -1158.9L 1120.0 -1247.3L 1130.0 -1339.2L 1140.0 -1434.6L 1150.0 -1533.6L 1160.0 -1636.3L 1170.0 -1742.7L 1180.0 -1852.9L 1190.0
-1967.0L 1200.0 -2085.0" fill="none" opacity="0.5"/>

</g>
<text x="800" y="515" text-anchor="middle"  font-weight="700"
    transform="rotate(-10) translate(-10, 100)"
    font-size="72px" fill="#EAC5" font-family="monospace">
❮10|UV|01❯
</text>
<g fill="#000">
<text x="50%" y="50%" text-anchor="middle" font-size="80px">${ escape( title ) }</text>
<text x="1180" y="610" text-anchor="end" font-size="36px">plutoniumm</text>
</g>
</svg>`;
  }

  return {
    name: 'bannerer',

    async buildStart () {
      const rinDir = path.resolve( inDir );
      const routDir = path.resolve( outDir );
      if ( !fs.existsSync( routDir ) ) {
        fs.mkdirSync( routDir, { recursive: true } );
      }

      const files = fs.readdirSync( rinDir )
        .filter( file => isDir( path.join( rinDir, file ) ) );
      console.log( `[OG-Gen] Scanning ${ files.length } files in ${ inDir }...` );

      const promises = files.map( async ( file ) => {
        let page = path.join( rinDir, file, '+page.svelte' );
        page = fs.readFileSync( page, 'utf-8' );

        const titleMatch = page.match( /title=["'`](.*?)["'`]/ );
        if ( !titleMatch ) {
          return console.warn( `[OG-Gen] No title found for ${ file }, skipping.` );
        }
        const title = titleMatch[ 0 ].split( '=' )[ 1 ].slice( 1, -1 );
        const fileHash = await hash( title );
        console.log( title, fileHash );

        let output = `${ fileHash }.png`;
        output = path.join( routDir, output );

        if ( fs.existsSync( output ) ) return;
        console.log( `[OG-Gen] Generating: ${ title }` );

        await sharp( Buffer.from( SVG( title ) ) )
          .png()
          .toFile( output );
      } );

      await Promise.all( promises );
    }
  };
}