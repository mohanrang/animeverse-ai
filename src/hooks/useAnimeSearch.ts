import { useQuery } from "@tanstack/react-query";
import { searchAnime } from "@/services/anilist/searchAnime";

export function useAnimeSearch(search: string) {
  return useQuery({
    queryKey: ["anime-search", search],
    queryFn: () => searchAnime(search),
    enabled: search.trim().length > 1,
  });
}