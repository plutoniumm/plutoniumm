import type { PageServerLoad } from "./$types";
import { data } from ".";

export const prerender = true;
export const load: PageServerLoad = async ({ params }) => {
    return {
        posts: Object.entries(data),
    };
};
