// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import dsv from "@rollup/plugin-dsv";
import { readdirSync } from 'fs';
import { resolve } from 'path';
import sharp from 'sharp';

// name.ext =>
//      name-sm.ext, name-md.ext, name-lg.ext, name-xl.ext
const sizes = [
    [ 'sm', 320 ],
    [ 'md', 640 ],
    [ 'lg', 1280 ],
    [ 'xl', 1920 ]
];

const base = './static/images';
const images = readdirSync( base );
const allowed = [ 'jpg', 'jpeg', 'png', 'webp' ];

for ( let im = 0;im < images.length;im++ ) {
    let [ name, ext ] = images[ im ].split( '.' );
    if ( !allowed.includes( ext ) ) continue;

    const processed = readdirSync( base + '/set' );
    if ( processed.includes( `${ name }-sm.${ ext }` ) ) continue;

    const image = sharp( base + `/${ images[ im ] }` );
    const metadata = await image.metadata();

    console.log( `processing ${ images[ im ] } till ${ metadata.width }px` );

    let i = 0;
    while (
        sizes[ i ] &&
        metadata.width >= sizes[ i ][ 1 ]
    ) {
        const [ size, width ] = sizes[ i ];
        const filename = base + `/set/${ name }-${ size }.${ ext }`;

        await image.resize( width ).toFile( filename )
        console.log( `created ${ filename }` )
        i++;
    };
}

const config = {
    plugins: [
        dsv(),
        sveltekit(),
    ],
    resolve: {
        alias: {
            '$component': resolve( '/components' ),
            '$posts': resolve( '/posts' )
        }
    },
    server: {
        port: 3000,
        fs: { allow: [ "." ] }
    },
    build: {
        minify: "esbuild",
        cssMinify: true,
        sourcemap: false
    }
};

export default config;