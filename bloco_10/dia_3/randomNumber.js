// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. 

const generateRandomNumber = () => Math.floor(Math.random() * 101);

module.exports = { generateRandomNumber };