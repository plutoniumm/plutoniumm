import esbuild from 'esbuild';
import path from 'node:path';
import fs from 'node:fs';

const inDir = "src/components/light";
const outDir = "static/lt/";

export default function Bundle () {
  return {
    name: 'bundle-ts',
    async buildStart () {
      const dirPath = path.resolve( process.cwd(), inDir );

      let entries = fs.readdirSync( dirPath )
        .filter( ( f ) => f.endsWith( '.ts' ) )
        .map( ( f ) => ( {
          in: path.join( inDir, f ),
          out: path.join( outDir, f.replace( /\.ts$/, '.js' ) )
        } ) );


      await Promise.all( entries.map( ( { in: input, out: output } ) => {

        return esbuild.build( {
          entryPoints: [ input ],
          outfile: output,
          bundle: true,
          format: 'iife',
          sourcemap: false,
          minify: true,
          target: 'es2018',
          tsconfigRaw: '{}',
        } );
      } ) );
    }
  };
}
