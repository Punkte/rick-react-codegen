import {useParams} from 'react-router-dom';
import { getCharacterQuery } from '../queries/fetchCharacters';
import { useQuery } from '@apollo/client';
import CharacterItem from '../components/CharacterItem';

export const CharacterDetail = () => {
  const {characterId} = useParams()

  const { data, error } = useQuery(getCharacterQuery, {variables: {id: characterId ?? '1'}})
  return <>
    {data?.character && (
      <CharacterItem character={data.character} />
    )}

    {error && <pre>
      <code>
        {JSON.stringify(error)}
      </code>
      </pre>}
    </>
}