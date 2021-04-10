const express = require('express');
const app = express();

const UserModel = require('./models/UserModel');

const port = 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await UserModel.getAll();
  res.status(200).json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findByIdUser(id);
  if (!user) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }
  return res.status(200).json(user);
});

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!UserModel.validation(firstName, lastName, email, password)) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  }
  const user = await UserModel.createUser(firstName, lastName, email, password);

  res.status(201).json(user);
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!(await UserModel.deleteUser(id))) {
    return res.status(200).json('OK');
  }
  return res.status(400).json({
    message: 'error',
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
