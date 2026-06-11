export default function Drafts () {
  let build = false;
  return {
    name: "vite-plugin-drafts-gate",
    enforce: "pre",
    config ( _, env ) {
      build = env.command === "build";
    },
    transform ( code, id ) {
      if ( !build ) return;
      if ( !id.endsWith( ".svelte" ) ) return;
      if ( !id.includes( "/routes/drafts/" ) ) return;
      // layouts keep a slot so svelte doesn't warn; pages are empty anyway
      const stub = id.includes( "+layout" ) ? "<slot />" : "";

      return {
        code: stub,
        map: null
      };
    },
  };
}
