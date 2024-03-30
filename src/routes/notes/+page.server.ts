import { posts } from "$posts";
import type { Post } from "$posts";

type Resp = {
  posts: Post[];
};

export const load = (): Resp => ({ posts })