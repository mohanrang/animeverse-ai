import type { AnimeDetails } from "@/services/anilist/getAnimeDetails";
import { motion } from "framer-motion";
import AnimeCarousel from "../AnimeCarousel";

interface Props {
  anime: AnimeDetails;
}

export default function AnimeRelations({ anime }: Props) {
  const relations = anime.relations.edges
    .filter((edge) => edge.node && edge.node.type === "ANIME")
    .map((edge) => edge.node);

  // anime.relations.edges.forEach((edge) => {
  //   console.log(edge.node.id, edge.node.type);
  // });

  if (relations.length === 0) return null;
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-violet-400 uppercase">
          EXPLORE MORE
        </p>

        <h2 className="text-3xl font-bold text-white">Related Anime</h2>

        <p className="mt-2 text-zinc-400">
          Prequels, sequels, movies and side stories.
        </p>
      </motion.div>

      <AnimeCarousel animeList={relations} />
    </section>
  );
}
