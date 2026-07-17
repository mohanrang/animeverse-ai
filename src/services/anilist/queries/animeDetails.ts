import { gql } from "graphql-request";

export const ANIME_DETAILS_QUERY = gql`
query AnimeDetails($id: Int) {
  Media(id: $id, type: ANIME) {
    id

    title {
      romaji
      english
      native
    }

    description(asHtml: false)

    bannerImage

    coverImage {
      extraLarge
      large
    }

    averageScore
    popularity
    favourites

    episodes
    duration
    status
    format
    season
    seasonYear

    genres

    trailer {
      id
      site
    }

    characters(sort: ROLE, perPage: 10) {
  edges {
    role

    node {
  id

  name {
    full
  }

  image {
    large
  }
}

   voiceActors(language: JAPANESE) {
  name {
    full
  }

  image {
    large
  }
}
  }
}


recommendations(perPage: 15, sort: RATING_DESC) {
  nodes {
    mediaRecommendation {
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

relations {
  edges {
    relationType

    node {
      id

      title {
        romaji
        english
      }

      coverImage {
        large
        extraLarge
      }

      description(asHtml: false)

      bannerImage

      averageScore

      episodes

      status

      genres

      type
    }
  }
}

    studios(isMain: true) {
      nodes {
        name
      }
    }

    nextAiringEpisode {
      episode
      timeUntilAiring
    }
  }
}
`;