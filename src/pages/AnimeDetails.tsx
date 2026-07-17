import { useParams } from "react-router-dom";
import { useAnimeDetails } from "@/hooks/useAnimeDetails";
import AnimeHero from "@/components/anime/details/AnimeHero";
import AnimeInfo from "@/components/anime/details/AnimeInfo";
import AnimeTrailer from "@/components/anime/details/AnimeTrailer";
import AnimeCharacters from "@/components/anime/details/AnimeCharacters";
import AnimeRecommendations from "@/components/anime/details/AnimeRecommendations";
import AnimeRelations from "@/components/anime/details/AnimeRelations";

export default function AnimeDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useAnimeDetails(Number(id));

  console.log(error);

  if (isLoading) {
    return <div className="p-10 text-white">Loading...</div>;
  }

  if (!data) {
    return <div className="p-10 text-red-400">Anime not found.</div>;
  }

  return (
    <main className="bg-black text-white">
      <AnimeHero anime={data} />
      <AnimeInfo anime={data} />
      <AnimeCharacters anime={data} />
      <AnimeTrailer anime={data} />
      <AnimeRecommendations anime={data} />
      <AnimeRelations anime={data} />
    </main>
  );
}
