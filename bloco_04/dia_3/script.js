//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let number = 5;
let asterisk = '';
if ( number > 1 ){
    for ( let indice = 1 ; indice <= number ; indice += 1 ){
        asterisk += '*';
        if ( indice === number){
            for ( let indice_2 = 0 ; indice_2 < number ; indice_2 += 1) {
                console.log(asterisk);
            }
        }
    }
}else{
    console.log('Numero igual a Zero ou Negativo');
}

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
asterisk = '';
if ( number > 0){
    for ( let indice = 1 ; indice <= number ; indice += 1 ){
        asterisk += '*';
        console.log(asterisk);
    }
}else{    
    console.log('Numero igual a Zero ou Negativo');
}

//3- Agora inverta o lado do triângulo. Por exemplo:
if ( number > 0){
    for ( let indice = 1 ; indice <= number ; indice += 1 ){
        asterisk = '';
        for (let indice_2 = 1 ;  indice_2 <= (number-indice) ; indice_2 += 1){
            asterisk += ' ';
        }
        for (let indice_2 = 1 ;  indice_2 <= (indice) ; indice_2 += 1){
            asterisk +=  '*';
        }
        console.log(asterisk);
    }
}else{    
    console.log('Numero igual a Zero ou Negativo');
}

//4- Depois, faça uma pirâmide com n asteriscos de base:
if ( number > 0){
    for ( let indice = 0 ; indice <= number ; indice += 1 ){
        if ((indice % 2) != 0 ){
            asterisk = ''; 
            for ( let indice_2 = number ;  indice_2 > (indice) ; indice_2 -=  2 ){
                asterisk += ' ';
            }
            for ( let indice_3 = 1 ;  indice_3 <= (indice) ; indice_3 += 1 ){
                asterisk += '*';
            }
            console.log(asterisk);
        }
    }
}else{    
    console.log('Numero igual a Zero ou Negativo');
}