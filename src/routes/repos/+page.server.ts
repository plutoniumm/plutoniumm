import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const url = "https://api.github.com/users/plutoniumm/repos";

const repos = await fetch(url)
  .then((res) => res.json());

const tags = new Map([
  ["ACTIVE", "Active"],
  ["NUAD", "Not Under Active Dev"],
  ["DEAD", "Deprecated"],
  ["PLAN", "Planned"],
]);


const getTag = ({ description: desc, archived }) => {
  if (archived) return "DEAD";
  if (!desc) return "ACTIVE";
  if (desc.charAt(0) !== "[") return "ACTIVE";

  const tag = desc.split("]")[0]
    .replace("[", "");

  if (tags.has(tag)) return tag;
  return "ACTIVE";
};

interface Repo {
  name: string,
  description: string,
  updated: number,
  created: number,
  license: string,
  tag: keyof typeof tags,
  tagDesc: string,
}

const list: Repo[] = repos
  .map((r) => {
    return {
      name: r.name,
      description: r.description,
      updated: +new Date(r.updated_at) / 1000 | 0,
      created: +new Date(r.created_at) / 1000 | 0,
      license: r.license?.key || "none",
      tag: getTag(r),
      tagDesc: tags.get(getTag(r)),
    }
  })
  .sort((a, b) => b.created - a.created);

export const load: PageServerLoad = async () => {
  return {
    list
  };
};