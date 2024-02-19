import { FragmentType, useFragment } from "../gql/fragment-masking"
import { characterItemFragment } from "../queries/fetchCharacters"


type CharacterFragmentType = FragmentType<typeof characterItemFragment>

const CharacterItem = ({character}: {character: CharacterFragmentType}) => {
  const {image, name, species, status} = useFragment(characterItemFragment, character)

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
    <img
      alt="Name"
      className="w-full h-48 object-contain"
      width="400"
      height="400"
      src={image ?? ''}
    />
    <div className="p-4 infos">
      <h2 className="font-bold text-xl mb-2" data-name>{name}</h2>
      <p className="text-gray-700 dark:text-gray-400">Species: <span data-species>{species}</span></p>
      <p className="text-gray-700 dark:text-gray-400">Status: <span data-status>{status}</span></p>
    </div>
  </div>
  )
}

export default CharacterItem