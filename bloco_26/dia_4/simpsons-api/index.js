const express = require('express');
// const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const { getSimpsons, addNewSimpson } = require('./simpsons');
const { response } = require('express');

const app = express();

app.use(bodyParser.json());

app.listen('3000', () => console.log('Listening on port 3000'));

app.get('/simpsons', async (_req, res, next) => {
  try {
    const data = await getSimpsons();
    if (data.errno) throw new Error;
    res.status(200).json(data);
  } catch(err) {
    next(err);
  }
});

app.get('/simpsons/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getSimpsons();
    const character = data.find((character) => character.id === id);
    if (!character) {
      throw new Error('simpson not found');
    }
    res.status(200).json(character);
  } catch(err) {
    if (err.message === 'simpson not found') err.code = 404;
    next(err);
  }
});

app.post('/simpsons', async (req, res, next) => {
  try {
    const { id, name } = req.body;
    if ((!id) || (!name)) {
      throw new Error('parameter not informed');
    }
    const data = await getSimpsons();
    if (data.some((character) => character.id === id)) {
      throw new Error('id already exists');
    } 
    addNewSimpson(id, name, data);
    return res.status(204).end();
  } catch(err) {
    if (err.message === 'id already exists') err.code = 409;
    if (err.message === 'parameter not informed') err.code = 400
    next(err)
  }
});

app.use((err, _req, res, _next) => {
  if (err.code) {
    console.log('passou aqui');
    return res.status(err.code).json({ message: err.message })
  }
  return res.status(500).json({ message: 'Internal Error' })
});

