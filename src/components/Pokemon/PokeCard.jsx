import styles from './pokecard.css'

export default function PokeCard({ pokemon }) {
  
  return (
    <div className={styles['poke-card']} style={{backgroundColor: `${pokemon.color}`}}>
    <p>
      ({pokemon.id}){pokemon.name}
    </p>
    <img src={pokemon.img} alt='pokemon image'/>
    </div>
  )
}