// MongoDB

// const connection = require('./connection');
// const { ObjectId, ObjectID } = require('mongodb');

// function validadeFields(data) {
//   const requiredFields = ['firstName', 'lastName', 'email', 'password'];
//     for (let index = 0; index < requiredFields.length; index += 1) {
//     if (!(requiredFields[index] in data)) {
//       return {
//         error: true,
//         message: `Campo ${requiredFields[index]} obrigatório`
//       };
//     }
//   }
//   if (data.password.length < 6 || typeof(data.password) !== 'string') {
//     return {
//       error: true,
//       message: 'O campo password deve ter pelo menos 6 caracteres'
//     };
//   }
//   return {};
// }

// async function newUser(userData) {
//   const validation = validadeFields(userData);
//   if (validation.error) {
//     return validation;
//   }
//   const response = await connection()
//     .then((db) => db.collection('users').insertOne(userData))
//     .then((result) => ({ 
//       id: result.insertedId,
//       firstName: result.ops[0].firstName,
//       lastName: result.ops[0].lastName,
//       email: result.ops[0].email,
//     }));
//   return response;
// }

// async function getAll() {
//   return connection()
//     .then((db) => db.collection('users').find().toArray())
//     .then((users) => users.map(({ _id, firstName, lastName, email }) => ({
//       id: _id,
//       firstName, 
//       lastName,
//       email,
//     })));
// }

// async function getById(id) {
//   if (!ObjectId.isValid(id)) {
//     return {
//       error: true,
//       message: 'Id inválido',
//     };
//   }
//   return connection()
//     .then((db) => db.collection('users').findOne({ _id: ObjectId(id) }))
//     .then((user) => {
//       if (!user) {
//         return {
//           error: true,
//           message: 'Usuário não encontrado',
//         };
//       }
//       return {
//         id: user._id,
//         firstName: user.firstName, 
//         lastName: user.lastName,
//         email: user.email,
//       };
//     });
// }

// async function edit(userData, id) {
//   const validation = validadeFields(userData);
//   if (validation.error) {
//     return validation;
//   }
//   if (!ObjectId.isValid(id)) {
//     return {
//       error: true,
//       message: 'Id inválido',
//     };
//   }
//   const result = await connection()
//     .then((db) => db.collection('users').updateOne(
//       { _id: ObjectId(id) },
//       { $set: 
//         { 
//           firstName: userData.firstName,
//           lastName: userData.lastName,
//           email: userData.email,
//           password: userData.password,
//         },
//       },
//     ))
//     .then((result) => {
//       if (result.matchedCount === 0) {
//         return {
//           error: true,
//           message: 'Usuário não encontrado',
//         };
//       }
//       return {
//         id,
//         firstName: userData.firstName,
//         lastName: userData.lastName,
//         email: userData.email,
//       };
//     });
//   return result;
// }

const connection = require('./connection');

function validadeFields(data) {
  const requiredFields = ['firstName', 'lastName', 'email', 'password'];
    for (let index = 0; index < requiredFields.length; index += 1) {
    if (!(requiredFields[index] in data)) {
      return {
        error: true,
        message: `Campo ${requiredFields[index]} obrigatório`
      };
    }
  }
  if (data.password.length < 6 || typeof(data.password) !== 'string') {
    return {
      error: true,
      message: 'O campo password deve ter pelo menos 6 caracteres'
    };
  }
  return {};
}

async function newUser(userData) {
  const validation = validadeFields(userData);
  if (validation.error) {
    return validation;
  }
  const [result] = await connection.execute(`
    INSERT INTO users_crud.users(first_name, last_name, email, password)
    VALUES (?, ?, ?, ?)
    `, [userData.firstName, userData.lastName, userData.email, userData.password]);
  return { 
    id: result.insertId,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  };
}

async function getAll() {
  const [users] = await connection.execute('SELECT * FROM users_crud.users')
  return users.map(({ id, first_name, last_name, email }) => ({
    id,
    firstName: first_name, 
    lastName: last_name,
    email,
  }));
}

async function getById(id) {
  const [user] = await connection.execute(`
    SELECT * FROM users_crud.users WHERE id = ?
  `, [id]);
  if (user.length === 0) {
    return {
      error: true,
      message: 'Usuário não encontrado',
    };
  }
  return user.map(({ id, first_name, last_name, email }) => ({
    id,
    firstName: first_name, 
    lastName: last_name,
    email,
  }))[0];
}

async function edit(userData, id) {
  const validation = validadeFields(userData);
  if (validation.error) {
    return validation;
  }
  const [result] = await connection.execute(`
    UPDATE users_crud.users
    SET first_name=?, last_name=?, email=?, password=?
    WHERE id=?
  `, [userData.firstName, userData.lastName, userData.email, userData.password, id]);
  if(!result.affectedRows) {
    return {
      error: true,
      message: 'Usuário não encontrado',
    };
  }
  return {
    id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  };
}

module.exports = {
  newUser,
  getAll,
  getById,
  edit,
};
