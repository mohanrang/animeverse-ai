import AnimeCard from "./AnimeCard";
import type { Anime } from "@/services/anilist/anime";

interface AnimeGridProps {
  animeList: Anime[];
}

export default function AnimeGrid({ animeList }: AnimeGridProps) {
  return (
    <div
      className="
        grid
        gap-6
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
      "
    >
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.id}
          id={anime.id}
          title={anime.title.english ?? anime.title.romaji}
          image={anime.coverImage.extraLarge ?? anime.coverImage.large}
          score={anime.averageScore}
          episodes={anime.episodes}
          status={anime.status}
          genres={anime.genres}
        />
      ))}
    </div>
  );
}