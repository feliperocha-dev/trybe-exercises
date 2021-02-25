import { Component } from "react";

class TextArea extends Component{
  render() {
    const { handleInput, dataField, value } = this.props;
    const { label, name, length } = dataField;
    return (
      <div>
        <label className='label' htmlFor={name}>{label}</label>
        <textarea name={name} id={name} maxLength={length} onChange={handleInput} value={value} required></textarea>
      </div>
    )
  }
}

export default TextArea;
