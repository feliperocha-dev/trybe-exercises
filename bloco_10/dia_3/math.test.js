const math = require('./math');
jest.mock('./math');

describe('Testes das funções no arquivo math.js', () => {
  afterEach(() => math.subtrair.mockRestore());
  //Faça o mock da funcão subtrair e teste sua chamada.
  it('Testa a função subtrair', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
  //Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
  it('Testa a função multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toHaveBeenCalled();
  });
  //Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
  it('Testa a função somar', () => {
    math.somar.mockImplementation((num1, num2) => num1 + num2 );
    expect(math.somar(2, 3)).toBe(5);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(2, 3);
  });
  //Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
  it('Testa a função dividir', () => {
    math.dividir = jest.fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);

    expect(math.dividir()).toBe(2);
    expect(math.dividir).toHaveBeenCalledTimes(1)
    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2)
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3)
    expect(math.dividir).toHaveBeenCalled();
  });
  //Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
  it('Testa a função subtrair', () => {
    const mockSubtrair = jest
      .spyOn(math, 'subtrair')
      .mockReturnValue(20);
    math.subtrair(5, 4);
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair()).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(2);
  });
});