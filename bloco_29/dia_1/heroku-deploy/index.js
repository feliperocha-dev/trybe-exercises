const express = require('express');

const PORT = process.env.PORT || 3000;

app = express();

app.get('/', (_req, res) => {
  res.status(200).send(`
    <body>
      <h1>Rodando na porta ${PORT}</h4>
      <p>Variavel de ambiente: ${process.env.TESTE}</p>
    </body>  
  `);
});

app.listen(PORT, () => console.log(`Listen Port ${PORT}`));
