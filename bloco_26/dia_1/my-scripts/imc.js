const readLine = require('readline-sync');

const getImc = (weight, height) => weight / (height ^ 2);

const getImcSituation = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso (magreza)';
  }
  if (imc < 25) {
    return 'Peso normal';
  }
  if (imc < 30) {
    return 'Acima do peso (sobrepeso)';
  }
  if (imc < 35) {
    return 'Obesidade grau I';
  }
  if (imc < 40) {
    return 'Obesidade grau II';
  }
  return 'Obesidade graus III e IV';
};

const weight = readLine.questionFloat('Qual seu peso? ');
const height = readLine.questionFloat('Qual sua altura? ');

console.log(`Seu IMC é de ${getImc(weight, height)}, e sua situação é ${getImcSituation(getImc(weight, height))}.`);

// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |