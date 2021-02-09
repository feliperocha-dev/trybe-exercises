//Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. 

const upperCase = string => string.toUpperCase();

const firstLetter = string => string[0];

const concatString = (stringA, stringB) => `${stringA} ${stringB}`;

module.exports = { upperCase, firstLetter, concatString };