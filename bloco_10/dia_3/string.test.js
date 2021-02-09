//Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.


const string = require('./string');
jest.mock('./string');

describe('Tests functions in string.js', () => {
  it('Lower Case', () => {
    string.upperCase.mockImplementation((str) => str.toLowerCase());
  expect(string.upperCase('FELIPE')).toBe('felipe');
  });
  it('Last Letter', () => {
    string.firstLetter.mockImplementation((str) => str[str.length - 1]);
  expect(string.firstLetter('Felipe')).toBe('e');
  });
  it('Concat three strings', () => {
    string.concatString.mockImplementation((strA, strB, strC) => `${strA} ${strB} ${strC}`);
  expect(string.concatString('Felipe', 'Silva', 'Rocha')).toBe('Felipe Silva Rocha');
  });
});