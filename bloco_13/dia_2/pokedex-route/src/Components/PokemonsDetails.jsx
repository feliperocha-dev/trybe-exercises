import { Component } from "react";
import pokemons from '../Data';

class PokemonsDetails extends Component {
  render() {
    const { id } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));
    const { name, type, averageWeight, image, summary, foundAt } = pokemon;
    return(
      <div className='display-container'>
        <div className='poke-description'>
          <p>{name}</p>
          <p>Type: {type}</p>
          <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <div className='poke-img'>
          <img src={image} alt={`${name}-img`}/>
        </div>
        <div className='poke-summary'>
          <h2>Sumary</h2>
          <p>{summary}</p>
        </div>
        <div className='poke-location'>
          <h2>Game Location</h2>
          <p>{foundAt[0].location}</p>
          <img src={foundAt[0].map} alt={`${pokemon.name}-location`}/>
        </div>
      </div>
    );
  }
}

export default PokemonsDetails;