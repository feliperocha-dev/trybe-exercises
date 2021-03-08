import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import { Link } from 'react-router-dom';
import About from './Pages/About';
import Details from './Pages/Details';
import NotFound from './Pages/NotFound';

function App() {
  return(
    <BrowserRouter >
      <div>
        <Header  />
        <div className='App'>
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/About'>About</Link></button>
          <button><Link to='/Favorite'>Favorite</Link></button>
          <Switch >
            <Route exact path='/' component={ Home }/>
            <Route path='/pokemon/:id' render={ (props) => <Details {...props} /> }/>
            <Route path='/About' component={ About }/>
            <Route exact path='*' component={ NotFound }/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
