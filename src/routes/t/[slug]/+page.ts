import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
  // load the markdown file based on slug
  console.log(data.post);
  const component = await import(`../../../../posts/${data.post.slug}/index.mdx`);

  return {
    post: data.post,
    component: component.default,
    layout: {
      fullWidth: true,
    },
  };
};