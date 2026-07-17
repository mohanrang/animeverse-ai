import AnimeCardSkeleton from "@/components/anime/AnimeCardSkeleton";

export default function TrendingSkeleton() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <div className="h-4 w-24 rounded bg-zinc-800" />
        <div className="h-10 w-64 rounded bg-zinc-800" />
      </div>

      <div className="flex gap-6 overflow-hidden">
        {Array.from({ length: 6 }).map((_, index) => (
          <AnimeCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
