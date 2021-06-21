const readLine = require('readline-sync');

const averageSpeed = (distance, time) => distance / time; 

const distance = readLine.questionInt('Qual a distancia em mêtros? ');;
const time = readLine.questionInt('Qual o tempo em segundos? ');;

console.log(`Velocidade média é ${averageSpeed(distance, time)} m/s.`)
