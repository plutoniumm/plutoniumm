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
}

// Get all posts and add metadata
let md: any = Object.entries(
  import.meta.glob<GlobEntry>(
    './**/*.mdx', { eager: true }
  )
);
const len = md.length;

for (let i = 0; i < len; i++) {
  const [key, value] = md[i];
  md[i] = ({
    ...value.metadata,
    slug: key.split('/').at(-2),
    date: +new Date(value.metadata.date)
  })
};

export const posts: Post[] = md.sort((a, b) => +new Date(b.date) - +new Date(a.date));
