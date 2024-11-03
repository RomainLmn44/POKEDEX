interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

export default function Navbar({ pokemonList, setPokemonIndex }: NavBarProps) {
  const selectPokemon = (index) => {
    setPokemonIndex(index);
  };

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => selectPokemon(index)} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
