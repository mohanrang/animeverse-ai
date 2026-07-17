import { Play, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { AnimeDetails } from "@/services/anilist/getAnimeDetails";

interface Props {
  anime: AnimeDetails;
}

export default function AnimeHero({ anime }: Props) {
  return (
    <section className="relative h-[650px] overflow-hidden rounded-3xl">
      {/* Banner */}
      <img
        src={anime.bannerImage ?? anime.coverImage.extraLarge}
        alt={anime.title.english ?? anime.title.romaji}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end gap-8 px-8 pb-12">
        {/* Poster */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={anime.coverImage.extraLarge}
          alt={anime.title.english ?? anime.title.romaji}
          className="hidden h-[420px] w-[290px] rounded-2xl object-cover shadow-2xl lg:block"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-3xl"
        >
          <p className="mb-3 tracking-[0.35em] text-violet-400 uppercase">
            Featured Anime
          </p>

          <h1 className="text-5xl font-black text-white md:text-6xl">
            {anime.title.english ?? anime.title.romaji}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {anime.averageScore}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              {anime.episodes ?? "?"} Episodes
            </span>

            <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-emerald-400">
              {anime.status}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              {anime.season} {anime.seasonYear}
            </span>
          </div>

          <p className="mt-6 line-clamp-4 text-lg text-zinc-300">
            {anime.description}
          </p>

          <div className="mt-8 flex gap-4">
            <Button size="lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>

            <Button variant="secondary" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Add Library
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
