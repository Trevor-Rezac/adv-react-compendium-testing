import { useEffect, useState } from 'react'
import PokeCard from '../../components/Pokemon/PokeCard';
import styles from './pokemonlist.css'

export default function PokemonList() {
const [pokemon, setPokemon] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const getPokemon = async () => {
    const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex')
    const { results } = await res.json();
    console.log(results);
    const pokemonData = results.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.pokemon,
      img: pokemon.url_image,
      color: pokemon.color_1
    }))
    
    setPokemon(pokemonData);
    setIsLoading(false);
  }
  getPokemon()
}, []);

  return (
    <>
    
      {isLoading 
      ? (<p>Loading Pokemon...</p>) 
      : <div className={styles['poke-list']}> 
        {pokemon.map((pokemon) => <PokeCard pokemon={pokemon}/>)}
        </div>}
    
    </>
  )
}