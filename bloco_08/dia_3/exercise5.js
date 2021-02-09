
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  // Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
  return names.reduce((acc, curr) => {
    curr.split('').forEach((letter) => (letter === 'a'|| letter === 'A') ? acc += 1 : acc)
    return acc;
  } , 0);
}

assert.deepStrictEqual(containsA(), 20);