const express = require('express');
const rescue = require('express-rescue');
const AddressService =  require('../services/AddressService');

const AddressRouter = express.Router();

const HTTP_OK = 200;
const HTTP_CREATED = 201;

AddressRouter.get('/:cep', rescue(async (req, res, next) => {
  const { cep } = req.params;
  const response = await AddressService.getByCep(cep);
  if (response.error) {
    next(response);
    return;
  }
  if (response[0].error) {
    next(response[0].error);
    return;
  }
  return res.status(HTTP_OK).json(response);
}));

AddressRouter.post('/', async (req, res, next) => {
  const newAddress = req.body;
  const response = await AddressService.create(newAddress);
  if (response.error) {
    next(response);
    return;
  }
  return res.status(HTTP_CREATED).json(response);
});

module.exports = AddressRouter;
