import { posts } from '$posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  const post = posts.find((post) => slug === post.slug);

  if (!post) throw error(404, slug + ' :not found');
  return { post };
};