import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <p>Realize o login para acessar o sistema</p>
        <button type="button"><Link to='/login'>Login</Link></button>
      </div>
    );
  }
}

export default Home;