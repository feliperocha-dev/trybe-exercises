import { Component } from "react";
import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import TextArea from './TextArea';


class Form extends Component {
  render() {
    const { data, handleInput, values, handleSubmit, handleClear } = this.props;
    return(
      <form>
        <fieldset>
          <legend>Sobre Você</legend>
          {data[0].map((field, index) => {
            if (field.name === 'state') {
              return <Select key={index} dataField={field} handleInput={handleInput} value={values[field.name]}/>;
            } if (field.type === 'radio') {
              return <Radio key={index} dataField={field} handleInput={handleInput} value={values[field.name]}/>;
            }
            return <Input key={index} dataField={field} handleInput={handleInput} value={values[field.name]}/>;
          })}
          
        </fieldset>
        <fieldset>
          <legend>Experiência</legend>
          {data[1].map((field, index) => <TextArea key={index} dataField={field} handleInput={handleInput} value={values[field.name]} />)}
        </fieldset>
        <div>
          <button type='submit' onClick={handleSubmit} value='send'>Enviar</button>
          <button onClick={handleClear} value='clear'>Limpar</button>
        </div>
      </form>
    );
  }
}

export default Form;
