//Crie uma função que faça requisição para a api dog pictures . 

const fetchDogPictures = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => data
      .json()
      .then(json => data.status === 'success' ? Promise.resolve(json) : Promise.reject(json)));
};

module.exports = { fetchDogPictures };