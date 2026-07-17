import { useState } from "react";
import SearchBar from "@/components/search/SearchBar";
import { useAnimeSearch } from "@/hooks/useAnimeSearch";
import AnimeCarousel from "@/components/anime/AnimeCarousel";
import { useDebounce } from "@/hooks/useDebounce";
import { Skeleton } from "@/components/ui/skeleton";

export default function Search() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  const { data, isLoading } = useAnimeSearch(debouncedSearch);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-violet-400 uppercase">
            DISCOVER
          </p>

          <h1 className="text-5xl font-bold text-white">Search Anime</h1>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Discover your next favorite anime from thousands of titles.
          </p>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        {isLoading && (
          <p className="mt-8 text-zinc-400">
            <div className="mt-10 space-y-6">
              <Skeleton className="h-8 w-64" />

              <div className="flex gap-6 overflow-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-[430px] w-[240px] rounded-3xl"
                  />
                ))}
              </div>
            </div>
          </p>
        )}

        {data && data.length > 0 && (
          <div className="mt-12">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-violet-400 uppercase">
                SEARCH RESULTS
              </p>

              <h2 className="text-3xl font-bold text-white">
                {data.length} Results Found
              </h2>

              <p className="mt-2 text-zinc-400">
                Showing results for{" "}
                <span className="font-semibold text-white">
                  "{debouncedSearch}"
                </span>
              </p>
            </div>

            <AnimeCarousel animeList={data} />
          </div>
        )}

        {search.length > 1 && !isLoading && data?.length === 0 && (
          <p className="mt-8 text-zinc-500">
            <div className="mt-24 text-center">
              <h3 className="text-2xl font-bold text-white">No Anime Found</h3>

              <p className="mt-3 text-zinc-500">
                Try searching with another title.
              </p>
            </div>
          </p>
        )}
      </div>
    </main>
  );
}
