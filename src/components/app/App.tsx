import React from "react";
import { pokemonData } from "../../data/pokemonData";
import Pokedex from "../Pokedex/Pokedex";
import "./App.css";

export class App extends React.Component {
  componentDidMount() {
    const pokemondata = pokemonData;
  }
  render() {
    return (
      <div className="app">
        <h1>pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
