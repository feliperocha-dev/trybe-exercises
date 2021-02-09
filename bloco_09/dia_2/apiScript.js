const API_URL = 'https://icanhazdadjoke.com/';



const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      };
      
    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(response => addJoke(response.joke) );
};

const addJoke = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  jokeContainer.innerText = joke;
}

window.onload = () => fetchJoke();