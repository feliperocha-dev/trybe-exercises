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
    for ( index = 0 ; index < array.length ; index += 1 ){
        strTwo =  array[index];
        if ( str.length < array[index].length ){
            str = array[index];
        }
    }
    return str;
}

let arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log('Maior nome no array do array: ' , verifyMostCharacters(arrayNames));
