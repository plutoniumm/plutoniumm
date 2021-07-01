export function css_minify ( css ) {
    return css
        .replace( /\s\s+/g, " " )
        .replaceAll( "{ ", "{" )
        .replaceAll( "} ", "}" )
        .replaceAll( "; ", ";" )
        .replaceAll( ": ", ":" )
        .replaceAll( ", ", "," )
        .replaceAll( " {", "{" )
        .replaceAll( ": #", ":#" )
        .replaceAll( " }", "}" )
        .replaceAll( ":-", ": -" );
}

export function js_minify ( text, o ) {
    if ( o && o.output && o.output.comments ) {
        // Convert to `RegExp`
        o.output.comments = new RegExp( o.output.comments );
    }
    let out = UglifyJS.minify( text, Object.assign( { output: { comments: false } }, o ) );
    return out.error?.message || out.code;
}
