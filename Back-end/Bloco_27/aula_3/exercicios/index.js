const express = require('express');

const Book = require('./controllers/Book');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.get('/books', Book.getAll);
app.get('/books/:id', Book.findById);
app.post('/books', Book.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
