import { motion } from "framer-motion";

interface CharacterCardProps {
  image: string;
  name: string;
  role: string;
  voiceActor?: string;
}

export default function CharacterCard({
  image,
  name,
  role,
  voiceActor,
}: CharacterCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="w-[180px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg transition-all hover:border-violet-500/50 hover:shadow-violet-500/20"
    >
      {/* Character Image */}
      <div className="relative h-[240px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-lg font-semibold text-white">
          {name}
        </h3>

        <span className="inline-block rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
          {role}
        </span>

        {voiceActor && (
          <p className="pt-2 text-sm text-zinc-400">🎙 {voiceActor}</p>
        )}
      </div>
    </motion.div>
  );
}
