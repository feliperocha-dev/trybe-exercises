import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/pages/Login.css';
import { connect } from 'react-redux';
import { logon } from "../actions";

class Login extends Component {
  render() {
    const { user, password, handleChange } = this.props;
    return (
      <div className="login-container">
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="user"
            name="user"
            value={ user }
            onChange={ ({target}) => handleChange(target.value, target.name) }
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={ password } 
            onChange={ ({target}) => handleChange(target.value, target.name) }
          />
        </div>
        <button type="button"><Link to='/clients-list'>Login</Link></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.logonReducer.user,
  password: state.logonReducer.password,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => dispatch(logon(value, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);