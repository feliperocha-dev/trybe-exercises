const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const rescue = require('express-rescue');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.post('/user', rescue(async (req, res) => {
  const userData = req.body;
  const result = await User.newUser(userData);
  if (result.error) {
    return res.status(400).json({ message: result.message });
  }
  return res.status(201).json(result);
}));

app.get('/user', rescue(async (_req, res) => {
  const result = await User.getAll();
  return res.status(200).json(result);
}));

app.get('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const result = await User.getById(id);
  if (result.error) res.status(404).json({ message: result.message });
  return res.status(200).json(result);
}))

app.put('/user/:id', rescue(async (req, res) => {
  const userData = req.body;
  const { id } = req.params;
  const result = await User.edit(userData, id);
  if (result.error) {
    return res.status(400).json({ message: result.message });
  }
  return res.status(201).json(result);
}));

app.listen(PORT, () => console.log(`Listen port ${PORT}`));
