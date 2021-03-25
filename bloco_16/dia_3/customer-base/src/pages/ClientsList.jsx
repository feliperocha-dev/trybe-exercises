import { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/pages/ClientsList.css';

class ClientsList extends Component {
  render() {
    return (
      <div className="clients-list-container">
        <h2>Listagem de Clientes</h2>
        <button type="button"><Link to='/register'>Cadastro</Link></button>
      </div>
    );
  }
}

export default ClientsList;