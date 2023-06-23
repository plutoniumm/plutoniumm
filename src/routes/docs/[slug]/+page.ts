import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { slug } }) => {
  const name = slug.split('/').pop();

  const file = await import(/*@vite-ignore*/`/src/routes/docs/${name}.mdx`);

  return {
    component: file.default,
  };
};