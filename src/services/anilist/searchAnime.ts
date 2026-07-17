import { anilistClient } from "./client";
import { SEARCH_ANIME_QUERY } from "./queries/searchAnime";
import type { Anime } from "./anime";

interface SearchResponse {
  Page: {
    media: Anime[];
  };
}

export async function searchAnime(search: string) {
  const data = await anilistClient.request<SearchResponse>(
    SEARCH_ANIME_QUERY,
    {
      search,
    }
  );

  return data.Page.media;
}