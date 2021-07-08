const Joi = require('joi');
const AddressModel = require('../models/AddressModel');

function validateCep(cep) {
  if (!(/\d{5}-\d{3}$/.test(cep))) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  };
  return {};
}

function validateNewAddress(newAddress) {
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(newAddress);
  if (error) {
    return { error: { code: 'invalidData', message: error.message } };
  }
  return {};
}

function editCep(cep) {
  const newCep = `${cep.substring(0, 5)}${cep.substring(6)}`;
  return newCep;
}

async function getByCep(cep) {
  const cepValidation = validateCep(cep);
  if (cepValidation.error) {
    return (cepValidation);
  }
  const address = await AddressModel.getByCep(editCep(cep));
  console.log(address);
  if (address.length === 0) {
    return {
      error: { code: 'notFound', message: 'CEP não encontrado' },
    };
  }
  return address;
}

async function create(newAddress) {
  const newAddressValidation = validateNewAddress(newAddress);
  if (newAddressValidation.error) {
    return newAddressValidation;
  }
  const cepValidation = validateCep(newAddress.cep);
  if (cepValidation.error) {
    return cepValidation;
  }
  const cepEdited = editCep(newAddress.cep);
  newAddress.cep = cepEdited;
  const response = await AddressModel.create(newAddress);
  if (response.error) {
    return ({ error: { code: 'alreadyExists', message: 'CEP já existente' } });
  }
  return response;
}

module.exports = { getByCep, create };
