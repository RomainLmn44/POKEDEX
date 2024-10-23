import PokemonCard from "./components/PokemonCard";
const pokemonList = [
  {
    name: "Machopeur !",
    imgSrc: "https://www.pokepedia.fr/images/7/74/Machopeur-PDMC.png",
  },
  {
    name: "mew",
  },
];
function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}
export default App;
