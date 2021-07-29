const express = require('express');
const bodyParser = require('body-parser');
const { Book } = require('./models');
const { Op } = require('sequelize');

const app = express();

app.use(bodyParser.json());

app.get('/books', async (req, res) => {
  try {
    const { author, orderBy } = req.query;
    if (!author && !orderBy) {
      const resp = await Book.findAll();
      return res.status(200).json(resp);
    }
    if (!author) {
      const resp = await Book.findAll({ order: [orderBy] });
      return res.status(200).json(resp);
    }
    const resp = await Book.findAll({ where: { author: { [Op.like]: `${author}%` } }  });
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await Book.findByPk(id);
    if (!resp) {
      return res.status(404).json({ message: 'not found' });  
    }
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/books', async (req, res) => {
  try {
    const bookData = req.body;
    const resp = await Book.create(bookData);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookData = req.body;
    let [ resp ] = await Book.update(bookData, { where: { id } });
    if (!resp) {
      return res.status(404).json({ message: 'not found' });  
    }
    resp = await Book.findByPk(id);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await Book.destroy({ where: { id } });
    if (!resp) {
      return res.status(404).json({ message: 'not found' });  
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => console.log('Listen Port 3000'));
