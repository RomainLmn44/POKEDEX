interface pokemonI {
  imgSrc: string | undefined;
  name: string;
}

export default function PokemonCard({ name, imgSrc }: pokemonI) {
  return (
    <>
      <figure>
        {imgSrc ? <img src={imgSrc} /> : <p> ??? </p>}
        <figcaption>{name}</figcaption>
      </figure>
    </>
  );
}
