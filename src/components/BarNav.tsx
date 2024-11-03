import { useEffect } from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
  pokemonIndex: number;
}

export default function Navbar({
  pokemonIndex,
  pokemonList,
  setPokemonIndex,
}: NavBarProps) {
  const selectPokemon = (index) => {
    setPokemonIndex(index);
  };

  useEffect(() => {
    alert("Pika Pikachu!!! ");
  }, [pokemonList[pokemonIndex]?.name.toLowerCase() === "pikachu"]);

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
