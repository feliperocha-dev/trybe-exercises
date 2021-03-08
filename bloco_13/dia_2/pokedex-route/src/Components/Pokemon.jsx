import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokeData;
    const pokemon = (
      <div className='display-container'>
        <div className='poke-description'>
          <p>{name}</p>
          <p>Type: {type}</p>
          <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <div className='poke-img'>
          <img src={image} alt={`${name}-img`}/>
        </div>
        <div className='description-link'>
          <Link to={`/pokemon/${id}`}><span>More Details</span></Link>
        </div>
      </div>
    );
    return pokemon;
  }
}

export default Pokemon;