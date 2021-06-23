module.exports = (number) => {
  if (typeof(number) !== 'number') return(new Error('o valor deve ser um número'))
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
};
