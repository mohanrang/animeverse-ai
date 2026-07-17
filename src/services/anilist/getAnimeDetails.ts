import { anilistClient } from "./client";
import { ANIME_DETAILS_QUERY } from "./queries/animeDetails";
import type { Anime } from "./anime";

export interface AnimeDetails {
  id: number;

  title: {
    romaji: string;
    english: string | null;
    native: string;
  };

  description: string | null;

  bannerImage: string | null;

  coverImage: {
    extraLarge: string;
    large: string;
  };

  averageScore: number | null;
  popularity: number;
  favourites: number;

  episodes: number | null;
  duration: number | null;

  status: string;
  format: string;

  season: string | null;
  seasonYear: number | null;

  genres: string[];

  trailer: {
    id: string;
    site: string;
  } | null;

  characters: {
    edges: {
      role: string;
      node: {
        id: number;
        name: {
          full: string;
        };
        image: {
          large: string;
        };
      };
      voiceActors: {
        name: {
          full: string;
        };
        image: {
          large: string;
        };
      }[];
    }[];
  };

  recommendations: {
  nodes: {
    mediaRecommendation: Anime | null;
  }[];
};
relations: {
  edges: {
    relationType: string;

    node: {
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

      type: string;
    };
  }[];
};

studios: {
    nodes: {
      name: string;
    }[];
  };

  nextAiringEpisode: {
    episode: number;
    timeUntilAiring: number;
  } | null;

}


interface AnimeDetailsResponse {
  Media: AnimeDetails;
}

export async function getAnimeDetails(id: number) {
  const data = await anilistClient.request<AnimeDetailsResponse>(
    ANIME_DETAILS_QUERY,
    { id }
  );
console.log(data);
  return data.Media;
}