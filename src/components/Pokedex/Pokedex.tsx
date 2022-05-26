import React from "react";
import PokedexSearchResults from "../Pokedex-search-result/PokedexSearchResults";
import Pokelist from "../Pokelist/Pokelist";
import Searchbox from "../Searchbox/Searchbox";
import "./Pokedex.css";
const Pokedex = () => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <Searchbox />
        <Pokelist />
      </div>
      <div className="poke-search-results">
        <PokedexSearchResults />
      </div>
    </div>
  );
};

export default Pokedex;
