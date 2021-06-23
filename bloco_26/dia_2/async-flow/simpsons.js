const fs = require('fs').promises;
const readline = require('readline-sync');

const archive = 'simpsons.json';

function getSimpsons() {
  return fs.readFile(archive, 'utf-8')
    .then((dataArr) => JSON.parse(dataArr))
    .catch((err) => console.log(err.message));
}

async function getSimpsonById() {
  const id = readline.questionInt('\nInforme o ID do personagem. \n');
  const characters = await getSimpsons();
  return new Promise((resolve, reject) => {
    if (!(characters.some((character) => parseInt(character.id) === id))) {
      reject(new Error('id não encontrado'));
    }
    resolve(characters.find((character) => parseInt(character.id) === id));
  })
}

async function writeDocument() {
  const characters = await getSimpsons();
  const arrUpdated = characters
    .filter((character) => parseInt(character.id) !== 10 && parseInt(character.id) !== 6);
  fs.writeFile(`./${archive}`, JSON.stringify(arrUpdated))
    .then(() => console.log('Arquivo editado com sucesso'))
    .catch((err) => console.error(`Erro: ${err.message}`));
}

async function createNewFile() {
  const characters = await getSimpsons();
  const arrUpdated = characters
    .filter((character) => parseInt(character.id) <= 4);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(arrUpdated))
    .then(() => console.log('Arquivo editado com sucesso'))
    .catch((err) => console.error(`Erro: ${err.message}`));
}

async function addCharacter() {
  const characters = await getSimpsons();
  const arrUpdated = characters
    .filter((character) => ((parseInt(character.id) <= 4) || (character.name === 'Nelson Muntz')));
  fs.writeFile('./simpsonFamily.json', JSON.stringify(arrUpdated))
    .then(() => console.log('Arquivo editado com sucesso'))
    .catch((err) => console.error(`Erro: ${err.message}`));
}

async function editCharacter() {
  const characters = await getSimpsons();
  const arrUpdated = characters
    .filter((character) => ((parseInt(character.id) <= 4) || (character.name === 'Nelson Muntz')));
  arrUpdated.forEach((character) => {
    if (character.name === 'Nelson Muntz') character.name = 'Maggie Simpson';
  });
  fs.writeFile('./simpsonFamily.json', JSON.stringify(arrUpdated))
    .then(() => console.log('Arquivo editado com sucesso'))
    .catch((err) => console.error(`Erro: ${err.message}`));
}

async function callFunctions() {
  await getSimpsons()
   .then((result) => result.map(({ id, name }) => console.log( `${id} - ${name}`)))
   .catch((err) => console.log(`Erro: ${err.message}`));

  await getSimpsonById()
    .then((result) => console.log(result))
    .catch((err) => console.log(`Erro: ${err.message}`));
  
  await writeDocument();

  await createNewFile();

  await addCharacter();

  await editCharacter();
}

callFunctions();
