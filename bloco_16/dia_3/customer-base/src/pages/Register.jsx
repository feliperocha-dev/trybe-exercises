import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Register.css';
import { connect } from 'react-redux';
import { registerClient, submitForm } from '../actions';

class Register extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let { handleSubmit } = this.props;
    handleSubmit();
  }

  render() {
    const { name, age, email, handleChange } = this.props;
    return (
      <div className="register-container">
        <form>
          <fieldset>
            <legend>Cadastro</legend>
            <div>
              <label htmlFor="client-name">Nome</label>
              <input
                type="text"
                id="client-name"
                name="name"
                value={ name }
                onChange={ ({ target }) => handleChange(target.value, target.name) }
              />
            </div>
            <div>
              <label htmlFor="age-name">Idade</label>
              <input
                type="number"
                id="age-name"
                name="age"
                value={ age }
                onChange={ ({ target }) => handleChange(target.value, target.name) }
              />
            </div>
            <div>
              <label htmlFor="client-name">Email</label>
              <input
                type="email"
                id="email-name"
                name="email"
                value={ email }
                onChange={ ({ target }) => handleChange(target.value, target.name) }
              />
            </div>
          </fieldset>
        </form>
        <div>
          <button type="button" onClick={ this.handleClick }>Cadastrar</button>
          <button type="button"><Link to='/clients-list'>Voltar</Link></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.registerReducer.input.name,
  age: state.registerReducer.input.age,
  email: state.registerReducer.input.email,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => dispatch(registerClient(value, name)),
  handleSubmit: () => dispatch(submitForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
