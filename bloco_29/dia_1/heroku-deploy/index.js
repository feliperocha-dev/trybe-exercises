const express = require('express');

const PORT = process.PORT || 3000;

app = express();

app.get('/', (_req, res) => {
  res.status(200).send('<h1>Está vivo!</h4>');
});

app.listen(PORT, () => console.log(`Lister Port ${PORT}`));
