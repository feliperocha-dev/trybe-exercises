import { Component } from 'react';
import './App.css';
import Form from './components/Form';
import fieldsData from './Data'
import DataPage from './components/DataPage'

const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  residence: '',
  resume: '',
  job: '',
  description: '',
  submited: false,
}

class App extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = initialState;
  }

  handleInput({ target }) {
    const { name, value } = target;
    if (name === 'name') {
      this.setState({
        [name]: value.toUpperCase(),
      })
    } else if (name === 'address') {
      this.setState({
        [name]: value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, ''),
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submited: true,
    })
  }

  handleClear() {
    this.setState(initialState);
  }

  render() {
    return (
      <main>
        <Form data={fieldsData} handleInput={this.handleInput} handleSubmit={this.handleSubmit} handleClear={this.handleClear} values={this.state}/>
        { this.state.submited && <DataPage values={this.state}/>}
      </main>
    );
  }
}

export default App;
