const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal !== undefined) {
        return resolve(animal);
      };

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.age === age);
      if (animal !== undefined) {
        return resolve(animal);
      };

      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getAnimalAge = (age) => (
  findAnimalsByAge(age).then(list => list)
);

const getAnimalName = (name) => (
  findAnimalsByName(name).then(list => list)
);

module.exports = { getAnimalName, getAnimalAge };