import "../style/pokemon.css";

interface pokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: pokemon) {
  return (
    <figure>
      {imgSrc ? <img className="imagePoke" src={imgSrc} /> : <p>???</p>}
      <figcaption className="figPoke">{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
