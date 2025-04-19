import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ data, params }) => {
  return {
    posts: data.posts
  };
};
