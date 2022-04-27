import PokemonList from './PokemonList';
import { Link } from 'react-router-dom'

export default function PokemonPage() {
  return (
    <>
    <Link to='/'>Home</Link>
    <h1>Pokedex</h1>
      <PokemonList />
    </>
  )
}