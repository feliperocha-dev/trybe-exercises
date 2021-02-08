const encode = require('./encode');
const decode = require('./decode');
const { TestScheduler } = require('jest');

describe('Testa as funções Encode e Decode', () => {
    test('Testa se encode e decode são funções', () => {
        expect(typeof(encode)).toBe('function');
        expect(typeof(decode)).toBe('function');
    });
    test('Testa se na função Encode as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    test('Testa se na função Decode as vogais 1, 2, 3, 4 e 5 são convertidas em a, e, i, o, u, respectivamente', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    test('Testa se as demais letras/números não são convertidos nas funções Encode/Decode', () => {
        expect(encode('bcfgh')).toBe('bcfgh');
        expect(decode('6789')).toBe('6789');
    });
    test('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('aeiou')).toHaveLength(5);
        expect(decode('12345')).toHaveLength(5);
    });
});