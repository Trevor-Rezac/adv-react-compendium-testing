import { useEffect, useState } from 'react'
import PokeCard from '../../components/Pokemon/PokeCard';

export default function PokemonList() {
const [pokemon, setPokemon] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const getPokemon = async () => {
    const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex')
    const { results } = await res.json();
    const pokemonData = results.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.pokemon,
      img: pokemon.url_image
    }))
    
    setPokemon(pokemonData);
    setIsLoading(false);
  }
  getPokemon()
}, []);

  return (
    <>
    <ul>
      {isLoading ? (<p>Loading Pokemon...</p>) : pokemon.map((pokemon) => <li><PokeCard pokemon={pokemon}/></li>)}
    </ul>
    </>
  )
}