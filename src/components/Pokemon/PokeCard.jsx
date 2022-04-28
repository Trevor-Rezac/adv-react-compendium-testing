import styles from './pokecard.css'

export default function PokeCard({ pokemon }) {
  
  return (
    <div className={styles['poke-card']} style={{backgroundColor: `${pokemon.color}`}}>
    <h3>
      {pokemon.name}
    </h3>
    <img src={pokemon.img} alt='pokemon image'/>
    </div>
  )
}