import Pokemon from './Pokemon';
import React, { Component } from 'react';
import pokemons from './Data';

class Pokedex extends Component {
  render() {
    return (
      <div className='App'>
        { pokemons.map((element, index) => <Pokemon key = {index} pokeData = {element} />) }
      </div>
    )
  }
}

export default Pokedex;