let a = 4;
let b = 4;
let c = 4;
let chessPiece = 'Queen';
let percentage = 39;
let saleValue = 3.5;
let productPrice = 1;
let saleAmount = 1000;
let salary = 0;


//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. 

//soma
console.log('Soma de a & b: ' , a + b);
//subtração
console.log('Subtracao de a & b: ' , a - b);
//multiplicação
console.log('Multiplicacao de a & b: ' , a * b)
//divisão
console.log('Divisao de a & b: ' , a / b)
//modulo(resto)
console.log('Resto de a & b: ' , a % b)

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
if (a > b){
    console.log('Maior numero: ' , a);
}else{
    console.log('Maior numero: ' , b);
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
if (a > b && a > c){
    console.log('Maior numero: ' , a);
}else if (b > b && b > c){
    console.log('Maior numero: ' , b);
}else{
    console.log('Maior numero: ' , c)
}

//Faça um programa que, dado um valor definido numa variável, retorne 'positive' se esse valor for positivo, 'negative' se for negativo e 'zero' caso contrário.
switch (a > 0) {
    case true:
        console.log('Positive');
        break;
    case false:
        console.log('Negative');
        break;
    default:
        console.log('zero');
}

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
switch (a + b + c == 180) {
    case true:
        console.log('Reprensenta os angulos de um triangulo? ' , true);
        break;
    case false:
        console.log('Reprensenta os angulos de um triangulo? ' , false);
        break;
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
chessPiece = chessPiece.toLowerCase();
if (chessPiece == 'king') {
    console.log('The King can move to one of the eight squares around it.');
}else if (chessPiece == 'queen'){
    console.log('The Queen can move any number of squares in all directions (right, left or diagonals).');
}else if (chessPiece == 'rook'){
    console.log('A rook can move any number of squares in left or right.');
}else if (chessPiece == 'bishop'){
    console.log ('A bishop can move any number of squares diagonally');
}else if (chessPiece == 'knight'){
    console.log(' When a knight moves four squares in the shape of L, and also can jump over other pieces.');
}else if (chessPiece == 'pawn'){
    console.log('A pawn can only move one square ahead.');
}else{
    console.log('Error! Piece not found!');
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
if (percentage >= 90 && percentage <= 100 ){
    console.log('Sua nota é A');
}else if ( percentage >= 80 && percentage <= 100 ) {
    console.log('Sua nota é B');
}else if ( percentage >= 70 && percentage <= 100 ) {
    console.log('Sua nota é C');
}else if ( percentage >=60 && percentage <= 100 ) {
    console.log('Sua nota é D');
}else if ( percentage >= 50 && percentage <= 100 ) {
    console.log('Sua nota é E');
}else if ( percentage < 50 && percentage >= 0) {
    console.log('Sua nota é F');
}else{
    console.log('Erro! Nota Porcentagem inválida!');
}

//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
if ( (a % 2) == 0 |  (b % 2) == 0 | (c % 2) == 0 ) {
    console.log('Algum dos números é par?' , true);
}else{
    console.log('Algum dos números é par?' , false);
}

//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
if ( (a % 2) != 0 |  (b % 2) != 0 | (c % 2) != 0 ) {
    console.log('Algum dos números é ímpar?' , true);
}else{
    console.log('Algum dos números é ímpar?' , false);
}

//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
function profitCalcutation(productPrice, saleValue, saleAmount) {
    switch ((productPrice | saleValue ) <= 0){
        case true:
            console.log('Erro! Valor do Produto ou da venda inválido!');
            break;
        case false:
            productPrice = productPrice + (productPrice * 0,2);
            let profit = saleAmount * (saleValue - productPrice);
            return console.log('Lucro da Empresa: ' , profit);
    }
}

profitCalcutation(productPrice, saleValue, saleAmount);

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
function inss (salary){
    if ( salary <= 1556.94 && salary > 0 ){
        salary = salary - (salary * 0.08);
        return salary;
    } else if ( salary > 1556.94  && salary <= 2594.92 ){
        salary = salary - (salary * 0.09);
        return salary;
    } else if ( salary > 2594.92  && salary <= 5189.82 ){
        salary = salary - (salary * 0.11);
        return salary;
    } else if ( salary > 5189.82 ){
        salary = salary - 570.88;
        return salary;
    } else {
        salary = -1;
        return salary;
    } 
}

function ir (salary){
    if ( salary <= 1903.98 && salary > 0 ){
        return salary;
    } else if ( salary > 1903.98  && salary <= 2826.65 ){
        salary = salary - ((salary * 0.07) - 142.8);
        return salary;
    } else if ( salary > 2826.65  && salary <= 3751.05 ){
        salary = salary - ((salary * 0.15) - 354.80);
        return salary;
    } else if ( salary > 3751.05 && salary <= 4664.68 ){
        salary = salary - ((salary * 0.225) - 636.13) ;
        return salary;
    } else if ( salary > 4664.68 ){
        salary = salary - ((salary * 0.275) - 869.36) ;
        return salary;
    } else {
        salary = -1;
        return salary;
    } 
}

salary = ir(inss(salary));
switch ( salary == -1 ) {
    case true:
        console.log ('Erro! Salário informado inválido')
    case false:
        console.log ('Seu salário liquido é: ' ,  salary)
}
