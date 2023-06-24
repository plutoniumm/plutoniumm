import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { slug } }) => {
  const name = slug.split('/').pop();
  const file = await import(`../${name}.mdx`);

  return {
    component: file.default,
  };
};