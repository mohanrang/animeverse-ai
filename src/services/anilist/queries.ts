import { gql } from "graphql-request";

export const TRENDING_ANIME_QUERY = gql`
  query TrendingAnime {
  Page(page: 1, perPage: 12) {
    media(
      sort: TRENDING_DESC
      type: ANIME
    ) {
      id

      title {
        romaji
        english
      }

      description(asHtml: false)

      bannerImage

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