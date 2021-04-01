const express = require("express");
const app = express();
const helper = require("./helper");
const users = require("./users.json");

app.get("/comments/:text", (req, res, _next) => {
  res.send(helper.filterByComments(users, req.params.text));
});

app.use((err, _req, _res, _next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});
app.listen(3000);
