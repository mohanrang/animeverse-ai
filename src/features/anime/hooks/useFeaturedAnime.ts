import { useQuery } from "@tanstack/react-query";
import { getTrendingAnime } from "@/services/anilist/anime";

export function useFeaturedAnime() {
  return useQuery({
    queryKey: ["featured-anime"],
    queryFn: async () => {
      const anime = await getTrendingAnime();
      return anime[0];
    },
  });
}