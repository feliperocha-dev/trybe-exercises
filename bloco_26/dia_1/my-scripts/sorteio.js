const readLine = require('readline-sync');

const generateRandomNumber = () => Math.ceil(Math.random() * 10);

const playGuessingNumber = () => {
  let continueGame = '';
  do {
    const randomNumber = generateRandomNumber();
    const answer = readLine.questionInt('Informe um número de 0 à 10. ');
    if (answer === randomNumber) {
      console.log('Parabéns, número correto!');
    } else {
      console.log(`Opa, não foi dessa vez. O número era ${randomNumber}!`);
    }
    continueGame = readLine.question('Contiunar? (y/n) ')
  } while (continueGame === 'y' )
}

playGuessingNumber();
