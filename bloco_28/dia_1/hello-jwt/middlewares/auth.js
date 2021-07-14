const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    next({ statusCode: 401, message: 'Token not found' });
    return;
  }
  try {
    const { user, admin } = jwt.verify(token, SECRET);
    req.user = user;
    if (admin) {
      next();
      return;
    }
    next({ statusCode: 403, message: 'Restricted access' });
  } catch(err) {
    next({ statusCode: 401, message: err.message });
  }
};
