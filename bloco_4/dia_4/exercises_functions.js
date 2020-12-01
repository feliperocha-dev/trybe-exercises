//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verifyPalindrome (word){
    if ( word.split('').reverse().join('') === word ){
        return true;
    }else{
        return false;
    }
}
let wordOne = 'arara';
let wordTwo = 'desenvolvimento';
console.log('A palavra' , wordOne , 'um palindromo?' , verifyPalindrome(wordOne));
console.log('A palavra' , wordTwo , 'um palindromo?' , verifyPalindrome(wordTwo));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function verifyHigherInteger (int){
    let higherInt = 0;
    for ( index = 0 ; index < int.length; index += 1){
        if (higherInt < int[index]){
            higherInt = index;
        }
    }
    return higherInt;
}
let arrayIntOne = [2, 3, 6, 7, 10, 1];
console.log('Indice do maior numero do array: ' , verifyHigherInteger(arrayIntOne));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function verifylowerInteger (int){
    lowerInt = 0;
    for ( let index = 0 ; index < int.length ; index += 1 ){
        if (lowerInt > int[index]){
            lowerInt =  index;
        }
    }
    return lowerInt;
}

let arrayIntTwo = [2, 4, 6, 7, 10, 0, -3];
console.log('Indice do menor numero do array: ' , verifylowerInteger(arrayIntTwo));

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function verifyMostCharacters (array) {
    let str = '';
    for ( let index = 0 ; index < array.length ; index += 1 ){
        strTwo =  array[index];
        if ( str.length < array[index].length ){
            str = array[index];
        }
    }
    return str;
}

let arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log('Maior nome no array do array: ' , verifyMostCharacters(arrayNames));

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function verifyRepeatInteger (array) {
    let count = [];
    let countTwo = [];   
    for ( let index = 0 ; index < array.length ; index += 1 ){
        let countThree = 0;
        for ( indexTwo = 0 ; indexTwo < array.length ; indexTwo += 1 ){
            if (array[index] === array[indexTwo]){
                count.push(array[index]);
                countThree += 1;
            }
        }
        countTwo.push(countThree);
    }
    return count[verifyHigherInteger(countTwo)];
}

let arrayIntThree = [2, 3, 2, 5, 8, 2, 3];
console.log('Numero que mais se repete: ' , verifyRepeatInteger(arrayIntThree));

//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sumNumber (num){
    let sum =0
    for ( let index = 1 ; index <= num ; index += 1 ){
        sum += index;
    }
    return sum;
}

let num = 5;
console.log('Somatorio dos numero de 1 até N: ' , sumNumber(num));

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verifyWordEnd (word, ending){
    let str = word.slice( ( word.length - ending.length ) , word.length );
    if (str === ending){
        return true;
    } else {
        return false;
    }
}

let word = 'trybe';
let ending = 'be';
console.log('A string ending é o final da string word?' , verifyWordEnd(word,ending));
word = 'joaofernando';
ending = 'fernan';
console.log('A string ending é o final da string word?' , verifyWordEnd(word,ending));
