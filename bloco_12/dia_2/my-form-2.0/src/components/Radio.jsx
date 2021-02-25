import { Component } from "react";

class Radio extends Component {
  render() {
    const { handleInput, dataField } = this.props;
    const { label, name, type, residences } = dataField;
    return (
      <div>
        <label className='label' htmlFor={name}>{label}</label>
        {residences.map((residence) =>
          <span key={residence}>
            <input type={type} id={residence} name={name} value={residence} onChange={handleInput}></input>
            <label htmlFor={residence}>{residence}</label>
          </span>
        )}
      </div>
    );
  }
}

export default Radio;