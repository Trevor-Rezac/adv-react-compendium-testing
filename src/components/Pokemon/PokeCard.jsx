export default function PokeCard({ pokemon }) {
  console.log('pokeCard!!!', pokemon.url_image)
  return (
    <>
    <p>
      ({pokemon.id}){pokemon.name}
    </p>
    <img src={pokemon.img} alt='pokemon image'/>
    </>
  )
}