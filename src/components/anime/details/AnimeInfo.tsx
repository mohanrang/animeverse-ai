import type { AnimeDetails } from "@/services/anilist/getAnimeDetails";
import { Calendar, Clock3, Film, Heart, Star, Tv, Users } from "lucide-react";

interface Props {
  anime: AnimeDetails;
}

export default function AnimeInfo({ anime }: Props) {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-6">
      <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-xl">
        <h2 className="mb-8 text-3xl font-bold text-white">Synopsis</h2>

        {/* Meta */}
        <div className="mb-8 flex flex-wrap gap-3">
          <InfoBadge
            icon={<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
            value={`${anime.averageScore}%`}
          />

          <InfoBadge icon={<Film className="h-4 w-4" />} value={anime.format} />

          <InfoBadge
            icon={<Tv className="h-4 w-4" />}
            value={`${anime.episodes ?? "?"} Episodes`}
          />

          <InfoBadge
            icon={<Clock3 className="h-4 w-4" />}
            value={`${anime.duration ?? "?"} min`}
          />

          <InfoBadge
            icon={<Calendar className="h-4 w-4" />}
            value={`${anime.season} ${anime.seasonYear}`}
          />

          <InfoBadge
            icon={<Users className="h-4 w-4" />}
            value={anime.studios.nodes[0]?.name ?? "Unknown Studio"}
          />
        </div>

        {/* Genres */}

        <div className="mb-8 flex flex-wrap gap-3">
          {anime.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-full bg-violet-500/15 px-4 py-2 text-sm text-violet-300 transition hover:bg-violet-500/25"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Description */}

        <p className="leading-8 text-zinc-300">{anime.description}</p>

        {/* Footer */}

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-zinc-700/60 p-5 pl-10">
            <p className="text-sm text-zinc-400">Popularity</p>

            <p className="mt-2 text-3xl font-bold text-white">
              {anime.popularity.toLocaleString()}
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-700/60 p-5 pl-10">
            <p className="flex items-center gap-2 text-sm text-zinc-400">
              <Heart className="h-4 w-4 text-red-400" />
              Favorites
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {anime.favourites.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBadge({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur">
      {icon}
      {value}
    </div>
  );
}
