import React from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokelist.css";
const Pokelist = () => {
  return (
    <div className="pokelist">
      <Pokecard name="dont know 1" />
      <Pokecard name="dont know 2" />
      <Pokecard name="dont know 3" />
      <Pokecard name="dont know 4" />
      <Pokecard name="dont know 5" />
    </div>
  );
};
export default Pokelist;
