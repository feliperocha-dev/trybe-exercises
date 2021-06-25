const fs = require('fs').promises;

const SIMPSONS_DATA = 'simpsons.json';

function getSimpsons() {
  return fs.readFile(SIMPSONS_DATA, 'utf-8')
    .then((data) => JSON.parse(data))
    .catch((err) => err);
}

function addNewSimpson(id, name, array) {
  array.push({ id, name });
  fs.writeFile(`./${SIMPSONS_DATA }`, JSON.stringify(array))
    .catch((err) => err);
}

module.exports = {
  getSimpsons,
  addNewSimpson,
}
