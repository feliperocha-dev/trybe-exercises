import { Component } from "react";

class Input extends Component{
  render(){
    const { handleInput, dataField, value } = this.props;
    const { label, name, type, length } = dataField;
    return (
      <div>
        <label className='label' htmlFor={name}>{label}</label>
        <input type={type} name={name} id={name} maxLength={length} onChange={handleInput} value={value} required />
      </div>
    )
  }  
}

export default Input;