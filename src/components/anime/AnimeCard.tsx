import { Star } from "lucide-react";

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
  genres,
}: AnimeCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 w-full p-4">
          <div className="mb-2 flex items-center justify-between text-sm text-yellow-400">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400" />
              {score ?? "N/A"}
            </div>

            <span className="text-white">
              {episodes ?? "?"} EP
            </span>
          </div>

          <h3 className="line-clamp-2 text-lg font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs text-zinc-300">
            {genres.slice(0, 2).join(" • ")}
          </p>
        </div>
      </div>
    </div>
  );
}