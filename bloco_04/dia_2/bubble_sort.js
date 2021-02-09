
//Ordene o numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
        
        numbers[i] = numbers[j];
        numbers[j] = position;

        console.log('Iteração: ' , numbers);
      }
    }
  }

//Ordene o array numbers em ordem decrescente e imprima seus valores;
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        let position = numbers[i];
        
        numbers[i] = numbers[j];
        numbers[j] = position;

        console.log('Iteração: ' , numbers);
      }
    }
  }

//Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
for (let i = 1 , j = 0 ; i <= numbers.length; i += 1 , j += 1) {
    if ( i <  numbers.length){
        newArray[j] = numbers[j] * numbers[i];
    }else {
        newArray[j] = numbers[j] * 2;
    }
}
console.log(newArray);