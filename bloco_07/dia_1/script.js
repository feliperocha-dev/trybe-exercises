//Exercise 1
//Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

const testingScope = escopo => { 
    if (escopo === true) { 
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope}
      ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }
  testingScope(true);

//Exercise 2
//Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ascendingArray = array => array.sort((a, b) => a-b);

console.log(ascendingArray(oddsAndEvens));

//Exercise 3
//Crie uma função que receba um número e retorne seu fatorial.

const factorial = num => num > 1 ? num * (factorial(num - 1)) : 1

console.log(factorial(2));

//Exercide 4
//Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = phrase => phrase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

// {
//     const array = phrase.split(' ');
//     let longestWord = '';
//     for(let index = 0; index < array.length; index += 1){
//         if(array[index].length > longestWord.length) {
//             longestWord = array[index];
//         }
//     }
//     return longestWord
// }

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

//Exercide 5
// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Felipe"))
