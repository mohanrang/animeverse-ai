import { GraphQLClient } from "graphql-request";

export const anilistClient = new GraphQLClient(
  import.meta.env.VITE_ANILIST_API
);