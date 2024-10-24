import "../style/pokemon.css";

interface CardI {
  name: string;
  image: string;
}

function PokemonCard({ pokemon }: CardI) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img className="imagePoke" src={pokemon.imgSrc} />
      ) : (
        <p>???</p>
      )}
      <figcaption className="figPoke">{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
