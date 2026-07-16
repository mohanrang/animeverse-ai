import { GraphQLClient } from "graphql-request";

console.log("AniList API:", import.meta.env.VITE_ANILIST_API);

export const anilistClient = new GraphQLClient(
  import.meta.env.VITE_ANILIST_API
);