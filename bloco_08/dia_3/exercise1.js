
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  // Dada uma matriz de matrizes, transforme em uma única matriz.
  return arrays.reduce((previousValue, currentValue) => {
    currentValue.forEach((value) => previousValue.push(value));
    return previousValue; 
  },[]);
}


  //usando concat
  // function flatten() {
  //   return arrays.reduce((acc, curr)=> acc.concat(curr), []);
  // }
 
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);