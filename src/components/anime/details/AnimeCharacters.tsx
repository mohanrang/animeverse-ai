import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { AnimeDetails } from "@/services/anilist/getAnimeDetails";
import CharacterCard from "./CharacterCard";

interface Props {
  anime: AnimeDetails;
}

export default function AnimeCharacters({ anime }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -700 : 700,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto mt-16 max-w-7xl px-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Main Characters</h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="rounded-full border border-white/10 bg-zinc-900 p-3 transition hover:border-violet-500 hover:bg-violet-600"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="rounded-full border border-white/10 bg-zinc-900 p-3 transition hover:border-violet-500 hover:bg-violet-600"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {anime.characters.edges.map((character) => (
          <CharacterCard
            key={character.node.id}
            image={character.node.image.large}
            name={character.node.name.full}
            role={character.role}
            voiceActor={character.voiceActors[0]?.name.full}
          />
        ))}
      </div>
    </section>
  );
}
