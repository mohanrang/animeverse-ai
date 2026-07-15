import { anilistClient } from "./client";
import { TRENDING_ANIME_QUERY } from "./queries";

export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string | null;
  };
  coverImage: {
    large: string;
  };
  episodes: number | null;
  averageScore: number | null;
  status: string;
  genres: string[];
}

interface TrendingAnimeResponse {
  Page: {
    media: Anime[];
  };
}

export async function getTrendingAnime() {
  const data = await anilistClient.request<TrendingAnimeResponse>(
    TRENDING_ANIME_QUERY
  );

  return data.Page.media;
}