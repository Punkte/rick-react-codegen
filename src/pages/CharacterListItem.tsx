import { Link } from "react-router-dom"
import { FragmentType, useFragment } from "../gql"
import { characterListItemFragment } from "../queries/fetchCharacters"

type Props = {
  character: FragmentType<typeof characterListItemFragment>
}

const CharacterListItem = ({character}: Props) => {
  const {name, image, id} = useFragment(characterListItemFragment, character)
  return (
    <Link to={`characters/${id}`}>
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
      </div>
    </div>
    </Link>
  )
}

export default CharacterListItem