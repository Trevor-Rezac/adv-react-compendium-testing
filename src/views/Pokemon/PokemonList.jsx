import { useEffect, useState } from 'react'
import PokeCard from '../../components/Pokemon/PokeCard';
import styles from './pokemonlist.css'

export default function PokemonList() {
const [pokemon, setPokemon] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);

const isSearching = !!searchQuery.length;
const noResults = isSearching && !searchResults.length;
const pokemonList = isSearching ? searchResults : pokemon;

const handleSearch = (e) => {
  setSearchQuery(e.target.value);
  const filteredPokemon = pokemon.filter((pokemon) => pokemon.name
      .toLowerCase()
      .includes(e.target.value.toLowerCase().trim()));
  setSearchResults(filteredPokemon);
}

useEffect(() => {
  const filteredPokemon = pokemon.filter((pokemon) => pokemon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim()));

  setSearchResults(filteredPokemon);
}, []);

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
      : <>
          <input 
          placeholder='Find Pokemon'
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
          />
          <div className={styles['poke-list']}> 
            {pokemonList.map((pokemon) => <PokeCard pokemon={pokemon} key={pokemon.id}/>)}
          </div>
        </>
        }
      {noResults && <p>No Results!</p>}
    </>
  )
}