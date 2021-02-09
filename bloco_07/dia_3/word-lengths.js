//Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');

// escreva a função wordLengths aqui
const wordLengths = (arr) => {
    const newArr = [];
    for(let index in arr){
        newArr.push(arr[index].length);
    }
    return newArr;
};


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);