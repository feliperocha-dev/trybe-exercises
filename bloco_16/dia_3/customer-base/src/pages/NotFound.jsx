import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="error-container">
        <h2>ERROR 404: not found</h2>
        <button type="button"><Link to='/'>Voltar</Link></button>
      </div>
    );
  }
}

export default NotFound;