const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./banco");

//usando o use sem colocar o caminho ele será executado para qualquer chamada.
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, _next) => {
  res.send(bancoDeDados.getProdutos()); //Corverte para JSON;
});

app.get("/produtos/:id", (req, res, _next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, _next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //Converte JSON
});

app.put("/produtos/:id", (req, res, _next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //Converte JSON
});

app.delete("/produtos/:id", (req, res, _next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto); //Converte JSON
});

app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}.`);
});
