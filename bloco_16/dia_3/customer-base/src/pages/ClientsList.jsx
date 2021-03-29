import { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/pages/ClientsList.css';
import { connect } from 'react-redux';

class ClientsList extends Component {
  render() {
    const { user, password, register } = this.props;
    return (
      <div className="clients-list-container">
        { (user.length === 0) && (password.length === 0) ? (
          <>
            <h2>Usuário não autenticado!</h2>
            <button type="button"><Link to='/login'>Voltar</Link></button>
          </>
        ) : (
          <>
            <h2>Listagem de Clientes</h2>
            { (register.length >= 1) && register.map((client) =>  (
              <div>
                <p><strong>Nome: </strong>{ client.name }</p>
                <p><strong>Idade: </strong>{ client.age }</p>
                <p><strong>Email: </strong>{ client.email }</p>
              </div>
            ) ) }
            <button type="button"><Link to='/register'>Cadastro</Link></button>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.logonReducer.user,
  password: state.logonReducer.password,
  register: state.registerReducer.register,
});

export default connect(mapStateToProps)(ClientsList);
