//Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const fetchDogPictures = require('./dogPictures');

describe('Tests functions in string.js', () => {
  const apiFetch = jest.spyOn(fetchDogPictures, 'fetchDogPictures')
  afterEach(apiFetch.mockReset);

  it('testando requisição caso a promise resolva', async () => {
    apiFetch.mockResolvedValue('request sucess');
    
    expect(apiFetch()).resolves.toBe('request sucess');
  });
  it('testando requisição caso a promise seja rejeitada', async () => {
    apiFetch.mockResolvedValue('request failed');
    
    expect(apiFetch()).resolves.toBe('request failed');
  });
});