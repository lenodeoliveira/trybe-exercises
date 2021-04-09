const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Books = require('./models/Books');

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  try {
    const { first_name, middle_name, last_name } = req.body;
    if (Author.isValid(first_name, middle_name, last_name)) {
      await Author.create(first_name, middle_name, last_name);
      res.status(201).json({ message: 'SUCCESS' });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!(await Books.validation(title, author_id))) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Books.createBook(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! ' });
});

app.get('/books/search', async (req, res) => {
  const idB = parseInt(req.query.idBook, 10);
  try {
    const authorsAndBooks = await Books.getByAuthorId(idB);
    res.status(200).json(authorsAndBooks);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

app.get('/books', async (req, res) => {
  const books = await Books.getAllBooks();
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const authorsAndBooks = await Books.findByIdBook(id);
    res.status(200).json(authorsAndBooks);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
