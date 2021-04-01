const express = require("express");
const rescue = require("express-rescue");
const data = require("../data/simpsons.json");
const fs = require("fs");
const app = express();

app.get("/", (re, res) => {
  res.status(200).send(data);
});

//mesma rota pode ser colocado pois o verdo é diferente.
//adicionar
app.post(
  "/",
  rescue(async (req, res) => {
    const size = data.length;
    data[size] = {
      id: `${size + 1}`,
      name: req.body.name,
    };
    try {
      await fs.promises.writeFile(
        `${__dirname}/../data/simpsons.json`,
        JSON.stringify(data)
      );
      res.status(201).send({
        message: "Salvo com sucesso!",
      });
    } catch (error) {
      throw new Error(error);
    }
  })
);

//atualizar
app.put(
  "/:id",
  rescue(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    data[id - 1].name = name;

    try {
      await fs.promises.writeFile(
        `${__dirname}/../data/simpsons.json`,
        JSON.stringify(data)
      );
      res.status(200).send({
        message: "Salvo com sucesso!",
      });
    } catch (error) {
      throw new Error(error);
    }
  })
);

app.delete(
  "/:id",
  rescue(async (req, res) => {
    const { id } = req.params;
    const result = data.filter((person) => person.id !== id);

    try {
      await fs.promises.writeFile(
        `${__dirname}/../data/simpsons.json`,
        JSON.stringify(result)
      );
      res.status(204).send();
    } catch (error) {
      throw new Error(error);
    }
  })
);

module.exports = app;
