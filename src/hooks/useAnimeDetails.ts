import { useQuery } from "@tanstack/react-query";
import { getAnimeDetails } from "@/services/anilist/getAnimeDetails";

export function useAnimeDetails(id: number) {
  return useQuery({
    queryKey: ["anime-details", id],
    queryFn: () => getAnimeDetails(id),
    enabled: !!id,
  });
}