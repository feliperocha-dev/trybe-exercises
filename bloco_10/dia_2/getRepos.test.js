const { expect } = require('@jest/globals');
const getRepos = require('./getRepos');

describe('Testa a função getRepos', () => {
  it('Verifica se o repositório "sd-01-week4-5-project-todo-list" existe', () =>{
    expect.assertions(2);
    return getRepos('https://api.github.com/orgs/tryber/repos').then(data => {
      expect(data).toContain('sd-01-week4-5-project-todo-list');
      expect(data).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});