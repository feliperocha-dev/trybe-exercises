import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientsList from './pages/ClientsList';
import Register from './pages/Register';
import Header from './components/Header';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/login' component={ Login } />
        <Route path='/clients-list' component={ ClientsList } />
        <Route path='/register' component={ Register } />
        <Route path='*' component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
