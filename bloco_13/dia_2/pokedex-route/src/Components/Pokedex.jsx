import React, { Component } from "react";
import pokemons from "../Data";
import Buttons from "./Buttons";
import Pokemon from "./Pokemon";

let newPokemonsArr = pokemons;

class Pokedex extends Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.state = {
      pokemon: pokemons[0],
      button: '',
    }
  }

  nextPokemon() {
    if(newPokemonsArr.indexOf(this.state.pokemon) === (newPokemonsArr.length - 1)) {
      this.setState({
        pokemon: newPokemonsArr[0],
      })
    } else {
      this.setState((previousState) => ({
        pokemon: newPokemonsArr[newPokemonsArr.indexOf(previousState.pokemon) + 1],
      }))
    }
  }

  filterPokemon(event) {
    if (event.target.innerText !== 'All') {
      newPokemonsArr = pokemons
        .filter((pokemon) => pokemon.type === event.target.innerText)
      this.setState({
        pokemon: newPokemonsArr[0],
      })
      if(newPokemonsArr.length === 1) {
        this.setState({
          button: true,
        })
      } else {
        this.setState({
          button: false,
        })
      }
    } else {
      newPokemonsArr = pokemons;
      this.setState({
        pokemon: newPokemonsArr[0],
        button: false,
      })
    }
  }

  render() {
    return (
      <>
        <Pokemon key = {this.state.pokemon.id} pokeData = {this.state.pokemon} />
        <Buttons nextPokemonFunction={this.nextPokemon} filterPokemonFunction={this.filterPokemon} disabled={this.state.button}/>
      </>
    );
  }
}

export default Pokedex;