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
  './**/*.mdx', { eager: true }
));

let meta = {};
for (let i = 0; i < md.length; i++) {
  const [key, value] = md[i];
  meta = value.metadata;

  if (!meta?.date || meta.draft) {
    md[i] = null;
    continue;
  };

  md[i] = ({
    ...meta,
    slug: key.split('/').at(-2),
    date: +new Date(meta.date)
  })
};

export const posts: Post[] = md
  .filter(Boolean)
  .sort((a, b) => b.date - a.date);
