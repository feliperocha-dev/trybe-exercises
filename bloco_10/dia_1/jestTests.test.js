const sum = require('./sum');
const myRemove = require('./myRemove');
const myRemoveWithoutCopy = require('./myRemoveWithOutCopy');
const myFizzBuzz = require('./myFizzBuzz');

describe('Testa a função soma', () => {
    test('Testa se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    test('Testa se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    test('Teste se a função sum lança um erro quando os parametros são 4 e "5"', () => {
        expect(() => { sum(4, '5') }).toThrow();
    });
    test('Testa se a mensagem de erro é "parameters must be numbers" quando é realizado a chamada sum(4, "5")', () => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });
});

describe('Testa a função myRemove', () => {
    test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () =>{
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });
    test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });
    test('Verifica se o array passado por parâmetro não sofreu alterações', () => {
        const arr = [1, 2, 3, 4];
        myRemove(arr, 3);
        expect(arr).toStrictEqual([1, 2, 3, 4]);
    });
    test('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });    
});

describe('Testa a função myRemoveWithoutCopy', () => {
    test('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });
    test('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });
    test('Verifica se o array passado por parâmetro para a função myRemoveWithoutCopy sofreu alterações', () => {
        const arr = [1, 2, 3, 4];
        myRemoveWithoutCopy(arr, 3);
        expect(arr).toStrictEqual([1, 2, 4]);
    });
    test('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});

describe('Testa a função myFizzBuzz', () => {
    test('Testa uma chamada com um número divisível por 3 e 5 e verifica se o retorno é fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('Testa uma chamada com um número divisível por 3 e verifica se o retorno é fizz', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });
    test('Testa uma chamada com um número divisível por 5 e verifica se o retorno é buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    test('Testa uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é próprio número', () => {
        expect(myFizzBuzz(2)).toBe(2);
    });
    test('Testa uma chamada com um parâmetro que não é um número e verifica se o retorno é false', () => {
        expect(myFizzBuzz('5')).toBeFalsy();
    });
});