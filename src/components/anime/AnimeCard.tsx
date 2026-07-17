import { Play, Star } from "lucide-react";

export interface AnimeCardProps {
  id: number;
  title: string;
  image: string;
  score: number | null;
  episodes: number | null;
  status: string;
  genres: string[];
}

export default function AnimeCard({
  title,
  image,
  score,
  episodes,
  status,
  genres,
}: AnimeCardProps) {
  return (
    <div
      className="
        group
        h-[430px]
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500/60
        hover:shadow-2xl
        hover:shadow-violet-500/20
      "
    >
      {/* Poster */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:brightness-50
          "
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Rating */}
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-yellow-400 backdrop-blur-md">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          {score ?? "N/A"}
        </div>

        {/* Play Button */}
        <div className="absolute right-4 top-4 opacity-0 transition duration-300 group-hover:opacity-100">
          <button className="rounded-full bg-violet-600 p-3 shadow-lg transition hover:scale-110 hover:bg-violet-500">
            <Play className="h-5 w-5 fill-white text-white" />
          </button>
        </div>

        {/* Hover Details */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            translate-y-full
            bg-gradient-to-t
            from-black
            via-black/95
            to-transparent
            p-5
            transition-transform
            duration-300
            group-hover:translate-y-0
          "
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-300">
              {episodes ?? "?"} Episodes
            </span>

            
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white backdrop-blur"
              >
                {genre}
              </span>
            ))}
          </div>

          <button className="mt-5 w-full rounded-xl bg-violet-600 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            + Add to Library
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex h-[130px] flex-col justify-between p-4">
        <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold leading-7 text-white">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
          <span>{episodes ?? "?"} EP</span>

          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-300">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}