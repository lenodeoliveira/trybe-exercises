const express = require("express");
const rescue = require("express-rescue");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // Aqui o body-parser entra convertendo o body para JSON
//1
app.get("/ping", (req, res) => {
  res.send({ message: "Pong!" });
});

//2
const middlewareVerifyAge = (req, res, next) => {
  const { age } = req.body;
  if (age < 17) return res.status(401).json({ message: "Unauthorized" });
  next();
};

//3
app.post("/hello", middlewareVerifyAge, (req, res) => {
  const nome = req.body.nome;
  res.send({ message: `Hello, ${nome}` });
});

//4
app.put("/hello", (req, res) => {
  const { name, age } = req.body;

  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

//5
/*app.get(
  "/:fileName",
  rescue((req, res) => {
    fs.readFile(`./${req.params.fileName}`, "utf-8", (err, content) => {
      const result = JSON.parse(content);
      res.status(200).json("status 200 OK");
    });
  })
);*/
// 6
app.get(
  "/simpsons",
  rescue((req, res) => {
    fs.readFile("./simpsons.json", "utf-8", (err, content) => {
      const result = JSON.parse(content);
      console.log(result.id);
      res.send(result);
    });
  })
);

//7
function getCaracter(idCaracter) {
  return (
    require("./simpsons.json").filter((person) => person.id == idCaracter) || []
  );
}

app.get("/simpsons/:id", (req, res, _next) => {
  res.send(getCaracter(req.params.id));
});

//8

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});
app.listen(3000);
