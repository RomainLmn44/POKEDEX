// import "./App.css";
// import MyTitle from "./components/MyTitle";
import Navbar from "./components/BarNav";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import { useEffect } from "react";

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

export default function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <div>
      <Navbar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
      />
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
    </div>
  );
}
