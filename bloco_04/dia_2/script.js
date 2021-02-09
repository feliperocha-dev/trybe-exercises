let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for ( let indice = 0 ; indice < numbers.length ; indice += 1 ) {
    console.log('Imprimindo conteudo do array: ' , numbers[indice] );
}

//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let number = 0
for ( let indice = 0; indice < numbers.length ; indice +=1 ) {
    number = numbers[indice] + number;
}
console.log( 'Soma do conteudo do array: ' ,  number );

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
number = 0;
for ( let indice = 0; indice < numbers.length ; indice +=1 ) {
    number = numbers[indice] + number;
}
console.log( 'Média aritimética dos numerod do array: ' ,  number / numbers.length );

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
number = 0;
for ( let indice = 0; indice < numbers.length ; indice +=1 ) {
    number = numbers[indice] + number;
}
if (number / numbers.length > 20 ){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual que 20');
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
number = 0;
for ( let indice = 0; indice < numbers.length ; indice +=1 ) {
    if ( number < numbers[indice]){
        number = numbers[indice];
    }
}
console.log('Maior número no array: ' , number);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let odd = 0;
for ( let indice = 0; indice < numbers.length ; indice +=1 ) {
    if ( numbers[indice] % 2 != 0){
        odd += 1;
    }
}
console.log('Quantidade de números ímpares: ' , odd);

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
number = 1000;
for ( let indice = 0; indice < numbers.length ; indice +=1 ) {
    if ( number > numbers[indice]){
        number = numbers[indice];
    }
}
console.log('Menor número no array: ' , number);

//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let array =  [] ;
for ( let indice = 0; indice < 26 ; indice +=1 ) {
    array[indice] = Math.floor(Math.random() * 1001);
    console.log('Numero na posição ' , indice , 'do Array: ' , array[indice]);
}

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for ( let indice = 0; indice < array.length ; indice +=1 ) {
    console.log('Elementos do array divididos por 2: ' , array[indice] / 2 );
}
