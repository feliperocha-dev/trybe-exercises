import { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className='display-container' >
        <div className='error-container'>
          <h1>Error 404</h1>
          <h2>Page not found</h2>
          <img src="https://media3.giphy.com/media/VdWNHBgPnDudA5F3MM/giphy.gif" alt="pokemon-confused"/>
        </div>
      </div>
    )
  }
}

export default NotFound;