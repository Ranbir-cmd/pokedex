import React from 'react'
import './PokedexSearchResults.css'
const PokedexSearchResults = () => {
    const pokeSelected = false;
  return (
      <div className="poke-search-card">

          {
              pokeSelected ? (
                  <div>
                      {/* show image  */}
                      <p>Name: Pikachu</p>
                      <p>id: something</p>
                      <p>height: 3</p>
                      <p>weight: 33</p>
                      <p>Base Experience: 100xp</p>

                  </div>
              ) : 
              (
                  
                      <h2>Welcome to the Pokedex</h2>
                  
              )
      
          }
      </div>
  )
}

export default PokedexSearchResults