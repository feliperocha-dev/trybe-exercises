//Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const string = require('./string');

describe('Tests functions in string.js', () => {
  it('Lower Case', () => {
    const newFunc = jest.spyOn(string, 'upperCase') 
      .mockImplementation((str) => str.toLowerCase());
    expect(newFunc('FELIPE')).toBe('felipe');
  });
  it('Restore func', () => {
    string.upperCase.mockRestore();
    expect(string.upperCase('felipe')).toBe('FELIPE');
  });
});