let randomNumber = require('./randomNumber');

//Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

//Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

//Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('Tests of randomNumber function', () => {
  beforeEach(() => randomNumber.generateRandomNumber = jest.fn().mockReturnValue(10));
  afterEach(() => randomNumber.generateRandomNumber.mockReset());
  it('Tests the function return', () => {
    expect(randomNumber.generateRandomNumber()).toBe(10)
  });
  it('Tests the function call and the times the function was called', () => {
    randomNumber.generateRandomNumber();
    expect(randomNumber.generateRandomNumber).toHaveBeenCalled();
    expect(randomNumber.generateRandomNumber).toHaveBeenCalledTimes(1);
  });
  it('Tests a new implementation of the function that divides a number', () => {
    const newFuncDivision = jest.spyOn(randomNumber, 'generateRandomNumber')
      .mockImplementation((a, b) => a / b);
    expect(newFuncDivision(4, 2)).toBe(2);
  });
  it('Tests a new implementation for the function that multiplies a number', () => {
    const newFuncmultiplication = jest.spyOn(randomNumber, 'generateRandomNumber')
      .mockImplementation((a, b, c) => a * b *c);
    expect(newFuncmultiplication(2, 2, 2)).toBe(8);
  });
  it('Tests a new implementation for the function doubling a number', () => {
    const newFuncDouble = jest.spyOn(randomNumber, 'generateRandomNumber')
      .mockImplementation((a) => a + a);
    expect(newFuncDouble(3)).toBe(6);
  });
});

