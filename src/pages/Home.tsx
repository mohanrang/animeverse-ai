import { useTrendingAnime } from "@/features/anime/hooks/useTrendingAnime";

export default function Home() {
  const { data, isLoading, error } = useTrendingAnime();

  if (isLoading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-red-500 text-2xl">
          Failed to load anime.
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        🔥 Trending Anime
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data?.map((anime) => (
          <div
            key={anime.id}
            className="rounded-lg overflow-hidden shadow-md bg-card"
          >
            <img
              src={anime.coverImage.large}
              alt={anime.title.english ?? anime.title.romaji}
              className="w-full"
            />

            <div className="p-3">
              <h2 className="font-semibold text-sm">
                {anime.title.english ?? anime.title.romaji}
              </h2>

              <p className="text-xs text-muted-foreground mt-2">
                ⭐ {anime.averageScore ?? "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}