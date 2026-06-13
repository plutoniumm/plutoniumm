export default function Tex () {
  return {
    name: "vite-plugin-svelte-$$",
    enforce: "pre",
    transform ( code, id ) {
      if ( !id.endsWith( ".svelte" ) ) return;
      if ( id.includes( "node_modules" ) ) return;
      if ( !id.includes( "/wave/" ) && !id.includes( "/drafts/" ) ) return;

      // the <xxx /> swap inserts quote chars, so it must stay after the
      // quote-escape pass
      let result = code
        .replaceAll( "{_", "{@html _" )
        .replace(
          /(["'`])((?:\\.|[^\\\1])*)\1/g,
          ( _, q, m ) => q + m.replace( /\\/g, "\\\\" ) + q,
        )
        .replaceAll( "<xxx />", '<div class="m20"><hr /></div>' );

      return {
        code: result,
        map: null,
      };
    },
  };
}