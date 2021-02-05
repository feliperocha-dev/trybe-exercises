function hydrate(str) {
  const numberOfDrinks = str.match(/\d+/g);
  let numberOfWater = 0;
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    numberOfWater += parseInt(numberOfDrinks[index], 10);
  }
  if (numberOfWater === 1) str = `${numberOfWater} copo de água`;
  else str = `${numberOfWater} copos de água`;
  return str;
}

module.exports = hydrate;