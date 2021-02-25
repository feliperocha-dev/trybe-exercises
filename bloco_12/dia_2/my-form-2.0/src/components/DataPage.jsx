import { Component } from "react";

class DataPage extends Component {
  render() {
    const { name, email, cpf, address, city, state, residence, resume, job, description } = this.props.values
    return (
      <div>
        <fieldset>
        <h3>Curriculo</h3>
          <p><span>Nome: </span>{name}</p>
          <p><span>Email: </span>{email}</p>
          <p><span>CPF: </span>{cpf}</p>
          <p><span>Endereço: </span>{address}</p>
          <p><span>Cidade: </span>{city}</p>
          <p><span>Residência: </span>{residence}</p>
          <p><span>Estado: </span>{state}</p>
          <p><span>Resumo do currículo: </span>{resume}</p>
          <p><span>Cargo: </span>{job}</p>
          <p><span>Descrição: </span>{description}</p>
        </fieldset>
      </div>
    )
  }
}

export default DataPage;