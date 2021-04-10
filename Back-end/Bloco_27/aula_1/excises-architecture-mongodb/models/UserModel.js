const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewUser = ({ id, firstName, lastName, email }) => {
  // const fullName = [firstName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

const validation = (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return false;
  if (password.length < 6) return false;

  return true;
};

const findByIdUser = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const user = await connection().then((db) =>
    db.collection('users').findOne(new ObjectId(id))
  );

  if (!user) return null;

  const { firstName, lastName, email } = user;

  return getNewUser({ id, firstName, lastName, email });
};

const createUser = async (firstName, lastName, email, password) => {
  const { insertedId } = await connection().then((db) =>
    db.collection('users').insertOne({ firstName, lastName, email, password })
  );
  return getNewUser({
    id: insertedId,
    firstName,
    lastName,
    email,
  });
};

const deleteUser = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const { deletedCount } = await connection().then((db) =>
    db.collection('users').deleteOne({ _id: ObjectId(id) })
  );
  if (deletedCount === 0) return true;
  return false;
};

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('users').find().toArray())
    .then((users) => {
      return users.map(({ _id, firstName, lastName, email }) => {
        return getNewUser({
          id: _id,
          firstName,
          lastName,
          email,
        });
      });
    });
};

module.exports = {
  createUser,
  getAll,
  validation,
  getNewUser,
  findByIdUser,
  deleteUser,
};
