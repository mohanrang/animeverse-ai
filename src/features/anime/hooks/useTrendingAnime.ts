import { useQuery } from "@tanstack/react-query";
import { getTrendingAnime } from "@/services/anilist/anime";

export function useTrendingAnime() {
  return useQuery({
    queryKey: ["trending-anime"],
    queryFn: getTrendingAnime,
  });
}