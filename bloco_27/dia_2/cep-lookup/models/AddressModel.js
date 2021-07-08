const connection = require('./connection');
const fetch = require('node-fetch');

async function getByCep(cep) {
  const [queryResult] = await connection
    .execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep])
  if (queryResult.length === 0) {
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((data) => data.json())
      .then(async (data) => await create({
        cep: `${data.cep.substring(0, 5)}${data.cep.substring(6)}`,
        logradouro: `${data.logradouro.substring(0, 50)}`,
        bairro: `${data.bairro.substring(0, 20)}`,
        localidade: `${data.localidade.substring(0, 20)}`,
        uf: data.uf,
      }))
      .then((data) => queryResult.push(data))
      .catch((err) => err);
  }
  return queryResult;
}

async function create(newAddress) {
  const queryResult = await connection
    .execute(`INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
      values(?, ?, ?, ?, ?);`, Object.values(newAddress))
    .then(() => ({
      ...newAddress,
      cep: `${newAddress.cep.substring(0, 5)}-${newAddress.cep.substring(5)}`,
    }))
    .catch((err) => ({ error: err }));
  return queryResult;
}

module.exports = { getByCep, create };
