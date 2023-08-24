import type { PageServerLoad } from './$types';

const url = "https://api.github.com/users/plutoniumm/repos";

const repos = await fetch(url)
  .then((res) => res.json());

const tags = new Map([
  ["ACTIVE", "Active"],
  ["NUAD", "Dead/Unmaintained"],
  ["PLAN", "Planned"],
]);


const getTag = ({ description: desc, archived }) => {
  if (archived) return "NUAD";
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
  created: number,
  license: string,
  tag: keyof typeof tags,
  tagDesc: string,
}

const cleanDesc = (desc: string) => {
  if (!desc) return null;
  if (desc.charAt(0) !== "[") return desc;
  return desc.split("]").slice(1).join("]").trim();
}

const list: Repo[] = repos
  .filter((r) => !r.fork)
  .map((r) => {
    return {
      name: r.name,
      description: cleanDesc(r.description),
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