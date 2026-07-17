import { anilistClient } from "./client";
import { TRENDING_ANIME_QUERY } from "./queries/trendingAnime";

export interface Anime {
  id: number;

  title: {
    romaji: string;
    english: string | null;
  };

  description: string | null;

  bannerImage: string | null;

  coverImage: {
    large: string;
    extraLarge: string;
  };

  averageScore: number | null;

  episodes: number | null;

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