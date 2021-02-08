const { default: expectationResultFactory } = require('jest-jasmine2/build/expectationResultFactory');
const uppercase = require('./uppercase');

describe('Testes da função uppercase', () => {
  it('A função uppercase deve retornar a str como letras maiúsculas', done => {
    uppercase('felipe', callback => {
      expect(callback).toBe('FELIPE');
      done();
    });
  });
});