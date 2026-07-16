import { Play, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFeaturedAnime } from "@/features/anime/hooks/useFeaturedAnime";

export default function HeroSection() {
  const { data, isLoading } = useFeaturedAnime();

  if (isLoading || !data)
    return (
      <div className="h-[500px] animate-pulse rounded-3xl bg-zinc-900" />
    );

  return (
    <section
      className="relative mb-12 h-[500px] overflow-hidden rounded-3xl"
      style={{
  backgroundImage: `url(${data.bannerImage || data.coverImage.extraLarge})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right center",
}}
    >
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />

      <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center px-12 p-10">
        <p className="mb-2 text-violet-400 uppercase tracking-[0.3em]">
          Featured Anime
        </p>

        <h1 className="text-6xl font-bold text-white">
          {data.title.english ?? data.title.romaji}
        </h1>

        <p className="mb-6 text-zinc-300">
          {data.description?.replace(/<[^>]*>/g, "")}
        </p>

        <div className="mb-8 flex gap-6 text-sm">
          <span className="text-white">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {data.averageScore}
          </span>

          <span className="text-white">{data.episodes ?? "?"} Episodes</span>

          <span className="text-white">{data.status}</span>
        </div>

        <div className="flex gap-4">
          <Button size="lg">
            <Play className="mr-2 h-4 w-4" />
            Details
          </Button>

          <Button variant="secondary" size="lg">
            <Plus className="mr-2 h-4 w-4" />
            Library
          </Button>
        </div>
      </div>
    </section>
  );
}