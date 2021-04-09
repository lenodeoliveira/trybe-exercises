const connection = require('./connection');
const Author = require('./Author');

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books;'
  );
  return books;
};

const findByIdBook = async (id) => {
  const [
    books,
  ] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE id = ?',
    [id]
  );
  if (books.length === 0) throw new Error('Not found');

  return books;
};

const validation = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (
    !authorId ||
    typeof authorId !== 'number' ||
    !(await Author.findById(authorId))
  )
    return false;
  return true;
};
const createBook = async (title, authorId) =>
  await connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
    [title, authorId]
  );
module.exports = {
  getAllBooks,
  findByIdBook,
  createBook,
  validation,
};
