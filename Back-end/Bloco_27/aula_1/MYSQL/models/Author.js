const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const [
    authors,
  ] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?',
    [id]
  );
  if (authors.length === 0) return null;
  const { firstName, middleName, lastName } = authors.map(serialize)[0];

  return getNewAuthor({
    firstName,
    middleName,
    lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  console.log(firstName);
  if (!firstName || typeof firstName !== 'string')
    throw new Error('Nome inválido!');
  if (!lastName || typeof lastName !== 'string')
    throw new Error('Sobrenome inválido!');

  return true;
};

const create = async (firstName, middleName, lastName) =>
  await connection.execute(
    'INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName]
  );

module.exports = { getAll, findById, create, isValid };
