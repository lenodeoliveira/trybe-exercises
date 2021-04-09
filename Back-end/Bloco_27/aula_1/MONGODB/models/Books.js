const connection = require('./connection');
const Author = require('./Author');
const { ObjectId } = require('mongodb');

const getAllBooks = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((authors) => {
      return authors.map(({ _id, title, author_id }) => {
        return {
          id: _id,
          title,
          author_id,
        };
      });
    });
};

const findByIdBook = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const book = await connection().then((db) =>
    db.collection('books').findOne(new ObjectId(id))
  );

  if (!book) return null;

  const { title, author } = book;

  return { id, title, author };
};

const validation = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number') return false;
  return true;
};

const createBook = async (title, authorId) => {
  await connection().then((db) =>
    db.collection('books').insertOne({ title, authorId })
  );
};

module.exports = {
  getAllBooks,
  findByIdBook,
  createBook,
  validation,
};
