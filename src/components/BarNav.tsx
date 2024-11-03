import { useEffect } from "react";

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

  useEffect(() => {
    alert("Pika Pikachu!!! ");
  }, [pokemonList[3][0]]);

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
