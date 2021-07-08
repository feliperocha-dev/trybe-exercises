const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const PORT = 3000;
const HTTP_OK = 200;
const HTTP_INTERNAL_ERROR = 500;
const HTTP_BAD_REQ = 400;
const HTTP_NOT_FOUND = 404;

app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(HTTP_OK).json({ message: 'pong' }));

app.use(router);

app.use((err, _req, res, _next) => {
  if (err.error) {
    if (err.error.code === 'invalidData' || err.error.code === 'alreadyExists') {
      return res.status(HTTP_BAD_REQ).json(err);
    }
    if (err.error.code === 'notFound') {
      return res.status(HTTP_NOT_FOUND).json(err);
    }
  }
  return res.status(HTTP_INTERNAL_ERROR).json({ message: 'internal error' });
});

app.listen(PORT, () => console.log(`Listen port ${PORT}`));
