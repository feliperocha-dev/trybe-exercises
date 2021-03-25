import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loadCurriculum: false,
    }
    this.handleSubmmitClick = this.handleSubmmitClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleSubmmitClick() {
    this.setState({
      loadCurriculum: true,
    });
  }

  handleClearClick() {
    this.setState({
      loadCurriculum: false,
    });
  }

  render() {
    const { inputs } = this.props;
    const { loadCurriculum } = this.state;
    return (
      <div className="App">
        <div className="form-container">
          <Form
            handleSubmmitClick={ this.handleSubmmitClick }
            handleClearClick={ this.handleClearClick }
          />
        </div>
       { (loadCurriculum) && (<div className="curriculum-container">
          <h4>Curriculo</h4>
          { Object.entries(inputs).map((input, index) => (
            <p key={index}>
              <strong>{ input[0].toUpperCase() }</strong>: {input[1]}
            </p>
          )) }
        </div>) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputs: state.inputFormReducer,
});

export default connect(mapStateToProps)(App);
