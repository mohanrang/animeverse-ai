import type { AnimeDetails } from "@/services/anilist/getAnimeDetails";
import { motion } from "framer-motion";
import AnimeCarousel from "../AnimeCarousel";
import type { Anime } from "@/services/anilist/anime";

interface Props {
  anime: AnimeDetails;
}

export default function AnimeRecommendations({ anime }: Props) {
  const recommendations: Anime[] = anime.recommendations.nodes
    .map((node) => node.mediaRecommendation)
    .filter((rec): rec is Anime => rec !== null);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-violet-400 uppercase">
          MORE TO WATCH
        </p>

        <h2 className="text-3xl font-bold text-white">Recommended for You</h2>

        <p className="mt-2 max-w-2xl text-zinc-400">
          Because you watched{" "}
          <span className="font-medium text-white">
            {anime.title.english ?? anime.title.romaji}
          </span>
        </p>
      </motion.div>

      {/* Premium Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <AnimeCarousel animeList={recommendations} />
      </motion.div>
    </section>
  );
}
