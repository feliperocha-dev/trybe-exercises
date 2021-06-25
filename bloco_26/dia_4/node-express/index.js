const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => { res.status(200).json({ message: 'pong' }) });

app.post('/hello', (req, res) => {
  res.status(200).json({ message: `Hello, ${req.body.name}` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if ((parseInt(age) <= 17) || !age) {
    res.status(401).json({ message: 'Unauthorized' }); 
  }  
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const {name, age} = req.params;
  res.status(200).json({
    message: `Se nome é ${name} e você tem ${age} anos de idade.`,
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
