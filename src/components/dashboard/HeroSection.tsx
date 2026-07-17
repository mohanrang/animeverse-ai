import { Play, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFeaturedAnime } from "@/features/anime/hooks/useFeaturedAnime";
import { motion } from "framer-motion";
import HeroSkeleton from "./HeroSkeleton";

export default function HeroSection() {
  const { data, isLoading } = useFeaturedAnime();

  if (isLoading || !data) {
    return <HeroSkeleton />;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mb-14 h-[620px] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
    >
      {/* Background */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url(${data.bannerImage || data.coverImage.extraLarge})`,
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-between px-8 lg:px-16">
        {/* Left */}
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold tracking-[0.4em] text-violet-400 uppercase">
            Featured Anime
          </p>

          <h1 className="mb-5 text-5xl leading-tight font-black text-white lg:text-5xl">
            {data.title.english ?? data.title.romaji}
          </h1>

          {/* Meta */}
          <div className="mb-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-white">
                {data.averageScore}
              </span>
            </div>

            <div className="rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur-md">
              {data.episodes ?? "?"} Episodes
            </div>

            <div className="rounded-full bg-violet-600/20 px-4 py-2 text-violet-300 backdrop-blur-md">
              {data.status}
            </div>
          </div>

          {/* Genres */}
          <div className="mb-6 flex flex-wrap gap-2">
            {data.genres.slice(0, 4).map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="mb-8 line-clamp-4 max-w-xl text-lg leading-relaxed text-zinc-300">
            {data.description?.replace(/<[^>]*>/g, "")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-xl bg-violet-600 px-8 font-semibold hover:bg-violet-500"
            >
              <Play className="mr-2 h-5 w-5 fill-white" />
              Watch Now
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="rounded-xl border border-white/10 bg-white/10 px-8 text-white backdrop-blur-md hover:bg-white/20"
            >
              <Plus className="mr-2 h-5 w-5" />
              My Library
            </Button>
          </div>
        </div>

        {/* Right Poster */}
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: -1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="hidden lg:block"
        >
          <img
            src={data.coverImage.extraLarge}
            alt={data.title.english ?? data.title.romaji}
            className="h-[460px] w-[310px] rounded-3xl object-cover shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
