// drafts live at src/routes/drafts/* and are dev-only:
// on `vite build` every .svelte under /routes/drafts/ is replaced with an
// empty component, so the deployed site ships blank shells with no content
// in html or js chunks. `vite dev` leaves them untouched.
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
      return { code: "", map: null };
    },
  };
}
