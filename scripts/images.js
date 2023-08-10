// name.ext => name-sm.ext, name-md.ext, name-lg.ext, name-xl.ext
import sharp from 'sharp';
import { readdirSync } from 'fs';

const sizes = new Map( [
  [ 'sm', 320 ],
  [ 'md', 640 ],
  [ 'lg', 1280 ],
  [ 'xl', 1920 ]
] );

const images = readdirSync( './static/images' );
const allowed = [ 'jpg', 'jpeg', 'png', 'webp' ];

images.forEach( image => {
  let [ name, ext ] = image.split( '.' );
  if ( !allowed.includes( ext ) ) return 0;

  sizes.forEach( ( size, key ) => {
    sharp( `./static/images/${ image }` )
      .resize( size ) // width
      .toFile( `./build/images/${ name }-${ key }.${ ext }` )
      .then( () => console.log( `generated ${ name }-${ key }.${ ext }` ) )
      .catch( err => console.log( err ) );
  } );
} );