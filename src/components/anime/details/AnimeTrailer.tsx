import type { AnimeDetails } from "@/services/anilist/getAnimeDetails";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  anime: AnimeDetails;
}

export default function AnimeTrailer({ anime }: Props) {
  if (!anime.trailer || anime.trailer.site !== "youtube") {
    return (
      <section className="mx-auto mt-12 max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-12 text-center backdrop-blur-xl">
          <PlayCircle className="mx-auto mb-4 h-12 w-12 text-zinc-500" />

          <h2 className="text-2xl font-bold text-white">Trailer Unavailable</h2>

          <p className="mt-3 text-zinc-400">
            This anime doesn't currently have an official trailer on AniList.
          </p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mx-auto mt-16 max-w-7xl px-6"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold text-white">Official Trailer</h2>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl ring-1 shadow-black/50 ring-white/5">
          {/* Top Player Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-zinc-950 px-5 py-3">
            <div>
              <p className="text-md font-semibold text-white">
                {anime.title.english ?? anime.title.romaji}
              </p>

              <h3 className="text-xs text-zinc-400">Official Trailer</h3>
            </div>

            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
              YouTube
            </span>
          </div>

          {/* Video */}
          <div className="relative aspect-video bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${anime.trailer.id}`}
              title="Anime Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
