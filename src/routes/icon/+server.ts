import type { RequestHandler } from './$types';
import { YT_TOK } from "@";

async function channelIC (id: string) {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&fields=items%2Fsnippet%2Fthumbnails&key=${YT_TOK}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data?.items?.length) return '';
      return data.items[0].snippet.thumbnails.default.url;
    })
    .catch(() => '');
}

export const GET: RequestHandler = async ({ url }) => {
  const Q = url.searchParams;
  const [name, id] = [Q.get('name'), Q.get('id')];

  if (name !== 'youtube') {
    return new Response('');
  };
  const ic = await channelIC(id)
  return new Response(ic);
};