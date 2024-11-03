// import { useState } from "react";
import { MouseEventHandler } from "react";

interface Pokemon {
  name: string;

  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
  plus: MouseEventHandler;
  moins: MouseEventHandler;
}

function Navbar({ pokemonIndex, pokemonList, plus, moins }: NavBarProps) {
  return (
    <>
      {pokemonIndex > 0 ? (
        <button type="button" onClick={plus}>
          Précedent
        </button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={moins}>
          Suivant
        </button>
      ) : null}
      <p>{pokemonIndex}</p>
    </>
  );
}

// export default Navbar;
