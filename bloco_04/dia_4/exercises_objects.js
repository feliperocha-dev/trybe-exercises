//Agora vamos fazer alguns exercícios de fixação para consolidarmos os conhecimentos adquiridos no video anterior! 😉

let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { 
        golden: 2, 
        silver: 3, 
    },
}

//Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora' , player.name , player.lastName , 'tem' , player.age , 'anos de idade.');

//Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player ['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);

//Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora' , player.name , player.lastName , 'fou eleita a melhor do mundo por' , player.bestInTheWorld.length , 'vezes');

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medelhas de prata".

console.log('A jogadora possui' , player.medals.golden , 'de ouro e ', player.medals.silver , 'medalhas de prata.' )