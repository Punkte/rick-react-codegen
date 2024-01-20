import { graphql } from "../gql";
import { GetCharactersQuery } from "../gql/graphql";

export const allCharactersQuery = graphql(`
  query GetCharacters($page: Int! = 1) {
    characters(page: $page) {
      info {
        next
      }
      results {
        model: __typename
        name
        status
        species
        image
      }
    }
  }
`);

export type Character = NonNullable<NonNullable<NonNullable<GetCharactersQuery['characters']>['results']>[number]>