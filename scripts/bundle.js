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

      const builds = [];
      for ( const f of fs.readdirSync( dirPath ) ) {
        if ( !f.endsWith( '.ts' ) ) continue;

        builds.push( esbuild.build( {
          entryPoints: [ path.join( inDir, f ) ],
          outfile: path.join( outDir, f.replace( /\.ts$/, '.js' ) ),
          bundle: true,
          format: 'iife',
          sourcemap: false,
          minify: true,
          target: 'es2018',
          tsconfigRaw: '{}',
        } ) );
      }

      await Promise.all( builds );
    }
  };
}
