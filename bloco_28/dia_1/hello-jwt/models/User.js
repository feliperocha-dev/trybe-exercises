const connection = require('./connection');

const authenticate = (username, password) => {
  return connection()
    .then((db) => db.collection('users').findOne({ email: username, password }))
    .then((result) => result);
}

module.exports = { authenticate };
