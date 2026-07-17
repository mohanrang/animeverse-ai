import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full max-w-2xl">
      <Search
        className={`absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 transition-colors duration-300 ${
          focused ? "text-violet-400" : "text-zinc-500"
        }`}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search anime..."
        className="h-14 w-full rounded-2xl border border-white/10 bg-zinc-900/80 pr-14 pl-14 text-white backdrop-blur-xl transition-all duration-300 outline-none placeholder:text-zinc-500 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute top-1/2 right-5 -translate-y-1/2 text-zinc-500 transition hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
