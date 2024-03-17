// src/lib/server/posts.ts
type GlobEntry = {
  metadata: Post;
  default: unknown;
};

export interface Post {
  title: string;
  desc: string;
  date: number;
  slug: string;
  image: string;
  caption?: string;
}

// Get all posts and add metadata
let md: any = Object.entries(import.meta.glob<GlobEntry>(
  './**/*.md*', { eager: true }
));
md = md.map(e => {
  return {
    ...e[1].metadata,
    // default: e[1].default,
    slug: e[0].replace(/\.mdx?$/, '').replace(/^\.\//, '')
  }
});

export const posts: Post[] = md;
