import AnimeCarousel from "@/components/anime/AnimeCarousel";
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
    <div className="mb-8 flex items-end justify-between">
  <div>
    <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
      Discover
    </p>

    <h2 className="mt-2 text-4xl font-bold text-white">
      Trending Now
    </h2>

    <p className="mt-2 text-zinc-400">
      The most popular anime this week.
    </p>
  </div>

  <button className="rounded-full border border-violet-500/30 px-5 py-2 text-sm text-violet-300 transition hover:bg-violet-500 hover:text-white">
    View All →
  </button>
</div>

<AnimeCarousel animeList={data ?? []} />

</section>
  );
}