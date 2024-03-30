import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, params }) => {
  const loc = data.post.slug;
  const splitName = loc.split('/');
  console.log('splitName', splitName);


  let component;
  if (splitName.length === 1) {
    component = (await import(`../../../../docs/${loc}.md`));
  } else if (splitName.length === 2) {
    component = (await import(`../../../../docs/${splitName[0]}/${splitName[1]}.md`));
  } else if (splitName.length === 3) {
    component = (await import(`../../../../docs/${splitName[0]}/${splitName[1]}/${splitName[2]}.md`));
  };

  return {
    post: data.post,
    component: component.default,
  };
};