import { useQuery } from '@apollo/client'
import CharacterItem from "./components/CharacterItem";
import { isNotNull } from './guards';
import { Character, allCharactersQuery } from './queries/fetchCharacters';
import { useEffect, useState } from 'react';


function App() {
  const { data, refetch } = useQuery(allCharactersQuery)
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    if (data?.characters?.results) {
      setCharacters(data.characters.results.filter(isNotNull))
    }
  }, [data])

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6">
        {characters
          .map(({image, name, species, status}, i) => {
            return (
            <CharacterItem
              key={i}
              name={name ?? 'unknown'}
              species={species ?? 'unknown'}
              status={status ?? 'unknown'}
              src={image ?? 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'}
            />
          )
          })}
      </div>
      {typeof data?.characters?.info?.next === 'number' && <button onClick={() => refetch({page: data.characters!.info!.next as number})}>next</button>}
    </div>
  )
}

export default App
