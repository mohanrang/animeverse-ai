import type { Anime } from "@/services/anilist/anime";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimeCard from "./AnimeCard";
import { motion } from "framer-motion";

interface AnimeCarouselProps {
  animeList: Anime[];
}

export default function AnimeCarousel({ animeList }: AnimeCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

    setCanScrollLeft(scrollLeft > 5);

    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    const slider = carouselRef.current;

    if (!slider) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();

        slider.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      }
    };

    checkScroll();

    slider.addEventListener("scroll", checkScroll);
    slider.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      slider.removeEventListener("scroll", checkScroll);
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -900,
      behavior: "smooth",
    });

    requestAnimationFrame(checkScroll);
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 900,
      behavior: "smooth",
    });

    requestAnimationFrame(checkScroll);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Left Fade */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent" />

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className={`absolute top-1/2 left-3 z-20 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-violet-600 ${canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"} `}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className={`absolute top-1/2 right-3 z-20 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-violet-600 ${canScrollRight ? "opacity-100" : "pointer-events-none opacity-0"} `}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Carousel */}
      <motion.div
        ref={carouselRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pb-4 select-none"
      >
        {animeList.map((anime) => (
          <div key={anime.id} className="w-[240px] flex-shrink-0 snap-start">
            <AnimeCard
              id={anime.id}
              title={anime.title.english ?? anime.title.romaji}
              image={anime.coverImage.extraLarge ?? anime.coverImage.large}
              score={anime.averageScore}
              episodes={anime.episodes}
              status={anime.status}
              genres={anime.genres}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
