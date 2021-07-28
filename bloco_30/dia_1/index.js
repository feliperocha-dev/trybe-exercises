const express = require('express');
const Plant = require('./controllers/Plant');

const PORT = 3000;

const app = express();

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong' }));

app.get('/plants', (_req, res) => {
  const resp = Plant.getPlants();
  res.status(200).json(resp);
});

app.get('/plants/:id', (req, res) => {
  const { id } = req.params;
  const resp = Plant.getPlantById(Number(id));
  res.status(200).json(resp);
});

app.delete('/plants/:id', (req, res) => {
  const { id } = req.params;
  Plant.removePlantById(Number(id));
  res.status(204).end();
});

app.put('/plants/:id', (req, res) => {
  const { id } = req.params;
  const plantData = req.body;
  const resp = Plant.getPlantById(Number(id), plantData);
  res.status(200).json(resp);
});

app.listen(PORT, () => console.log(`Listen ${PORT}`));
