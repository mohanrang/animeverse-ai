import AnimeGrid from "@/components/anime/AnimeGrid";
import { useTrendingAnime } from "@/features/anime/hooks/useTrendingAnime";

export default function TrendingSection() {
  const { data, isLoading, error } = useTrendingAnime();

  if (isLoading) {
    return (
      <div className="py-10">
        <h2 className="mb-4 text-2xl font-bold">
          🔥 Trending Now
        </h2>

        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10">
        <h2 className="mb-4 text-2xl font-bold">
          🔥 Trending Now
        </h2>

        <p>Failed to load anime.</p>
      </div>
    );
  }

  return (
    <section className="space-y-6">
    <div>
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Discover
        </p>

        <h2 className="text-4xl font-bold text-violet-500">
           Trending Anime
        </h2>
    </div>

    <AnimeGrid animeList={data ?? []} />
</section>
  );
}