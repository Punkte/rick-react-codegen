import { useQuery } from "@apollo/client"
import { allCharactersQuery } from "../queries/fetchCharacters"
import { isNotNull } from "../guards"
import CharacterListItem from "./CharacterListItem"

export const CharacterList = () => {
  const { data, refetch } = useQuery(allCharactersQuery)

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6">
        {(data?.characters?.results ?? []).filter(isNotNull)
          .map((character, i) => {
            return (
            <CharacterListItem
              key={i}
              character={character}
            />
          )
          })}
      </div>
      {typeof data?.characters?.info?.next === 'number' && <button onClick={() => refetch({page: data.characters!.info!.next as number})}>next</button>}
    </div>
  )
}