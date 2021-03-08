import { Component } from "react";
import PokemonsDetails from "../Components/PokemonsDetails";

class Details extends Component {
  render() {
    return (
      <PokemonsDetails id={this.props.match.params.id} />
    );
  }
}

export default Details;