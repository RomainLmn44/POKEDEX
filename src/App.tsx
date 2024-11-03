// import "./App.css";
// import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const selectPokemon = (index) => {
    setPokemonIndex(index);
  };

  const plus = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const moins = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button onClick={() => selectPokemon(index)} key={pokemon.name}>
            {pokemon.name}
          </button>
        ))}
      </nav>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
    </div>
  );
}

export default App;

{
  /* <button onClick={moins}>Précedent</button>
      <button onClick={plus}>Suivant</button> */
}
