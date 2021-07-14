const { authenticate } = require('../models/User');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { username, password } =  req.body;
  if (!username || !password) {
    next({ statusCode: 400, message: 'Usuário ou Senha inválidos' });
    return;
  }
  const validUser = await authenticate(username, password);

  if (!validUser) {
    next({ statusCode: 400, message: 'Usuário ou Senha inválidos' });
    return;
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const header = {
    user: username,
    admin: (username === 'adm') ? true : false,
  };

  const token = jwt.sign(header, SECRET, jwtConfig);

  res.user = username

  return res.status(200).json({ token });
};
