import { gql } from "graphql-request";

export const SEARCH_ANIME_QUERY = gql`
  query SearchAnime($search: String) {
    Page(page: 1, perPage: 10) {
      media(
        type: ANIME
        search: $search
        sort: SEARCH_MATCH
      ) {
        id

        title {
          romaji
          english
        }

        coverImage {
          large
          extraLarge
        }

        averageScore

        episodes

        status

        genres
      }
    }
  }
`;