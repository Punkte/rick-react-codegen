import { graphql } from "../gql";
import { CharacterItemFragment } from "../gql/graphql";

export const characterListItemFragment = graphql(`
  fragment CharacterListItem on Character {
    model: __typename
    id
    name
    image
  }
`)

export const characterItemFragment = graphql(`
  fragment CharacterItem on Character {
    model: __typename
    name
    status
    species
    image
  }
`)

export const allCharactersQuery = graphql(`
  query GetCharacters($page: Int! = 1) {
    characters(page: $page) {
      info {
        next
      }
      results {
        ...CharacterListItem
      }
    }
  }
`);
export const getCharacterQuery = graphql(`
  query GetCharacterBy($id: ID!) {
    character(id: $id) {
      ...CharacterItem
    }
  }
`);



export type Character = CharacterItemFragment