const { expect } = require('@jest/globals');
const { async } = require('rsvp');
const { getUserName, findUserById } = require('./users');

describe('Testes da função getUserName', () => {
  test('Teste com um id que existe', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toBe('Mark');
    })
  });
  test('Teste com um inexistente', () => {
    expect.assertions(1);
    return getUserName(6).catch(error => {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }); 
  });
});

describe('Testes da função getUserName usando Async/Await', () => {
  test('Teste com um id que existe', async () => {
    expect.assertions(1);
    const user = await getUserName(4);
    expect(user).toBe('Mark');
  });
  test('Teste com um inexistente', async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
  });
});