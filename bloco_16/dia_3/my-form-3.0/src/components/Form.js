import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nameInput } from '../actions'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      states: ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT',
      'MS', 'MG', 'PA', 'PB', 'PR', 'PE','PI', 'RJ', 'RN', 'RS', 'RO', 'RR',
      'SC', 'SP', 'SE', 'TO', 'DF'],
    }
    this.renderInput = this.renderInput.bind(this);
    this.renderRadioInput = this.renderRadioInput.bind(this);
    this.renderTextArea = this.renderTextArea.bind(this);
  }

  renderInput(name, max, label, type, value) {
    return (
      <>
        <label htmlFor={ `${name}-input` }>{ label }</label>
        <input
          id={ `${name}-input` }
          type={ type }
          name={ name }
          maxLength={ max }
          value={ value }
          onChange={ ({ target }) => this.props.handleChange(target.value, name) }
        />
      </>
    );
  }

  renderRadioInput(name, value, label) {
    return (
      <>
        <input
          type="radio"
          id={ `${value}-input` }
          name={ name }
          value={ value }
          onChange={ ({ target }) => this.props.handleChange(target.value, name) }
        />
        <label htmlFor={ `${value}-input` }>{ label }</label>
      </>
    );
  }

  renderTextArea(name, max, label, value) {
    return (
      <>
        <label htmlFor={ `${name}-input` }>{ label }</label>
        <textarea
          id={ `${name}-input` }
          name={ name }
          maxLength={ max }
          value={ value }
          onChange={ ({ target }) => this.props.handleChange(target.value, name) }
        />
      </>
    );
  }

  render() {
    const { states } = this.state;
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      resume,
      job,
      description,
      handleSubmmitClick,
      handleClearClick
    } = this.props;
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          { this.renderInput( 'name', 40, 'Nome', 'text', name)}
          { this.renderInput('email', 50, 'Email', 'email', email) }
          { this.renderInput('cpf', 11, 'CPF', 'text', cpf) }
          { this.renderInput('address', 200, 'Endereço', 'text', address) }
          { this.renderInput('city', 28, 'Cidade', 'text', city) }
          <label>Estados</label>
          <select
            value={state}
            onChange={ ({ target }) => this.props.handleChange(target.value, 'state') }
          >
            { states.map((state) => <option key={ state }>{ state }</option>) }
          </select>
          <div>
            <p>Logradouro</p>
            { this.renderRadioInput('residence', 'house', 'Casa' ) }
            { this.renderRadioInput('residence', 'ap', 'Apartamento' ) }
          </div>
        </fieldset>
        <fieldset>
          <legend>Experiências</legend>
          { this.renderTextArea('resume', 1000, 'Resumo do Curriculo', resume) }
          { this.renderTextArea('job', 40, 'Cargo', job) }
          { this.renderTextArea('description', 40, 'Descrição do Cargo', description) }
        </fieldset>
        <div className="button-container">
          <button type="button" id="submit-button" onClick={ handleSubmmitClick }>Enviar</button>
          <button type="button" id="clear-button" onClick={ handleClearClick }>Limpar</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) =>( {
  name: state.inputFormReducer.name,
  email: state.inputFormReducer.email,
  cpf: state.inputFormReducer.cpf,
  address: state.inputFormReducer.address,
  city: state.inputFormReducer.city,
  resume: state.inputFormReducer.resume,
  job: state.inputFormReducer.job,
  description: state.inputFormReducer.description,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => dispatch(nameInput(value, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
