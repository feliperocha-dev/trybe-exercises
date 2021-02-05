function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  let arrayTech = [];
  array.sort().forEach(element => {
    arrayTech.push({ tech: element, name });
  });
  return arrayTech;
}

module.exports = techList;