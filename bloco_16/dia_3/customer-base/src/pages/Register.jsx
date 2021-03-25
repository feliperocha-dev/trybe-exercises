import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Register.css';

class Register extends Component {
  render() {
    return (
      <div className="register-container">
        <form>
          <fieldset>
            <legend>Cadastro</legend>
            <div>
              <label htmlFor="client-name">Nome</label>
              <input type="text" id="client-name" name="name" />
            </div>
            <div>
              <label htmlFor="age-name">Idade</label>
              <input type="number" id="age-name" name="age" />
            </div>
            <div>
              <label htmlFor="client-name">Email</label>
              <input type="email" id="email-name" name="email" />
            </div>
          </fieldset>
        </form>
        <div>
          <button type="button">Cadastrar</button>
          <button type="button"><Link to='/clients-list'>Voltar</Link></button>
        </div>
      </div>
    );
  }
}

export default Register;