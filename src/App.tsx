import { CharacterDetail } from './pages/CharacterDetail';
import { CharacterList } from './pages/CharactersList';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterList />
  },
  {
    path: '/characters/:characterId',
    element: <CharacterDetail />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
