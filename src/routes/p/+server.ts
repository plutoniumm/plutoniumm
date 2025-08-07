import { json } from "@sveltejs/kit";
import { data } from ".";

export const GET: RequestHandler = ({ url }) => {
    return json(data);
};
