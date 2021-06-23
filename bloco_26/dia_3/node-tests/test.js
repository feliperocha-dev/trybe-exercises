const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const getNumberType = require('./getNumberType');

describe('Testa a função getNumberByType', () => {
  describe('Quando recebe um número maior que zero como parametro', () => {
    const response = getNumberType(5);
    it('Deve retornar uma string', () => {
      expect(response).to.be.a('string');
    });
    it('Deve retornar "positivo"', () => {
      expect(response).to.be.equals('positivo');
    });
  });
  describe('Quando recebe um número menor que zero como parametro', () => {
    const response = getNumberType(-5);
    it('Deve retornar uma string', () => {
      expect(response).to.be.a('string');
    });
    it('Deve retonrar um número "negativo"', () => {
      expect(response).to.be.equals('negativo');
    });
  });
  describe('Quando recebe um número igual a zero como parametro', () => {
    const response = getNumberType(0);
    it('Deve retornar uma string', () => {
      expect(response).to.be.a('string');
    });
    it('Deve retornar "neutro"', () => {
      expect(response).to.be.equals('neutro');
    });
  });
  describe('Quando não recebe um parametro do tipo "number"', () => {
    const response = getNumberType('test');
    it('Deve retornar um erro', () => {
      expect(response).to.be.a('error')
    });
    it('Deve informar a mensagem de tipo inválido', () => {
      expect(response.message).to.be.equals('o valor deve ser um número')
    })
  })
});

const writeFile = require('./writeFile');

describe('Testa a função writeFile', () => {
  describe('A resposta', () => {

    before(() => sinon.stub(fs, 'writeFileSync').returns('ok'));

    after(() => fs.writeFileSync.restore());

    it('É uma string', () => {
      const response = writeFile('./file.txt', 'teste 1, 2, 3...');
      expect(response).to.be.a('string');
    });
    it('É "ok"', () => {
      const response = writeFile('./file.txt', 'teste 1, 2, 3...');
      expect(response).to.be.equals('ok');
    });
  })
});
