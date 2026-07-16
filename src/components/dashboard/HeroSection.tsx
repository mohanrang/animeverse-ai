import { Play, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFeaturedAnime } from "@/features/anime/hooks/useFeaturedAnime";

export default function HeroSection() {
  const { data, isLoading } = useFeaturedAnime();

  if (isLoading || !data)
    return (
      <div className="mb-12 h-[600px] w-full animate-pulse rounded-2xl bg-zinc-900/50" />
    );

  return (
    <section
      className="group relative mb-12 h-[600px] w-full overflow-hidden rounded-2xl bg-black shadow-2xl transition-all duration-700 hover:shadow-violet-500/10"
    >
      {/* Background Image with a subtle cinematic zoom effect on hover */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url(${data.bannerImage || data.coverImage.extraLarge})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%", 
        }}
      />

      {/* 
        Refined Gradients: 
        Using deeper blacks and adjusting the opacity stops to create a 
        smoother vignette effect that frames the text perfectly.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/30 via-transparent to-transparent" />

      {/* Content Container: Shifted to bottom-left alignment for a modern layout */}
      <div className="relative z-10 flex h-full max-w-3xl flex-col justify-end pb-16 px-8 md:px-16">
        
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-violet-400/90 drop-shadow-md">
          Featured Anime
        </p>

        {/* Tighter tracking and dynamic sizing for massive visual impact */}
        <h1 className="mb-4 text-5xl font-extrabold text-white drop-shadow-lg md:text-7xl tracking-tight line-clamp-2">
          {data.title.english ?? data.title.romaji}
        </h1>

        {/* 
          Metadata Pills: 
          Enclosing stats in glassmorphic badges makes them pop 
          against busy background images. 
        */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold md:text-sm">
          <span className="flex items-center gap-1.5 rounded-md bg-black/40 px-2.5 py-1 backdrop-blur-md border border-white/10">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="text-white">{data.averageScore}%</span>
          </span>
          
          <span className="rounded-md bg-black/40 px-2.5 py-1 backdrop-blur-md border border-white/10 text-white/90">
            {data.episodes ?? "?"} Episodes
          </span>
          
          <span className="rounded-md bg-black/40 px-2.5 py-1 backdrop-blur-md border border-white/10 text-emerald-400 uppercase tracking-wider">
            {data.status}
          </span>
        </div>

        {/* Softened text color and slightly reduced width for easier reading */}
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base line-clamp-3 md:line-clamp-4 drop-shadow-md">
          {data.description?.replace(/<[^>]*>/g, "")}
        </p>

        {/* Streaming-Style Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Primary Action: High contrast, rounded pill shape */}
          <Button 
            size="lg" 
            className="h-12 rounded-full bg-white px-8 font-bold text-black hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Play className="mr-2 h-5 w-5 fill-black" />
            Watch Now
          </Button>

          {/* Secondary Action: Frosted glass effect */}
          <Button 
            variant="outline" 
            size="lg" 
            className="h-12 rounded-full border-white/20 bg-black/40 px-8 font-bold text-white backdrop-blur-md hover:bg-white/20 hover:text-white transition-all"
          >
            <Plus className="mr-2 h-5 w-5" />
            My List
          </Button>
        </div>
      </div>
    </section>
  );
}