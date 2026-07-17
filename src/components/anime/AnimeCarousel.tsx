import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimeCard from "./AnimeCard";
import type { Anime } from "@/services/anilist/anime";

interface AnimeCarouselProps {
  animeList: Anime[];
}

export default function AnimeCarousel({
  animeList,
}: AnimeCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const slider = carouselRef.current;

  if (!slider) return;

  const handleWheel = (e: WheelEvent) => {
    // Only intercept vertical wheel movement
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();

      slider.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
      });
    }
  };

  slider.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    slider.removeEventListener("wheel", handleWheel);
  };
}, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -900,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 900,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="
          absolute
          left-2
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-black/70
          p-3
          text-white
          opacity-0
          backdrop-blur-md
          transition-all
          duration-300
          group-hover:opacity-100
          hover:scale-110
          hover:bg-violet-600
        "
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="
          absolute
          right-2
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-black/70
          p-3
          text-white
          opacity-0
          backdrop-blur-md
          transition-all
          duration-300
          group-hover:opacity-100
          hover:scale-110
          hover:bg-violet-600
        "
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Carousel */}
      <div
  ref={carouselRef}
  className="
    flex
    gap-6
    overflow-x-auto
    scroll-smooth
    pb-4
    snap-x
    snap-mandatory
    scrollbar-hide
  "
>
        {animeList.map((anime) => (
          <div
            key={anime.id}
            className="w-[240px] flex-shrink-0 snap-start"
          >
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
      </div>
    </div>
  );
}