import { Component } from "react";

class Select extends Component {
  render() {
    const { handleInput, dataField, value } = this.props;
    const { states, name, label } = dataField;
    return (
      <div>
        <label className='label' htmlFor={name}>{label}</label>
        <select name={name} onChange={handleInput} value={value} required>
          {states.map((state) => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>

    );
  }
}

export default Select;