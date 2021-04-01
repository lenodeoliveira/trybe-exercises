const express = require("express");
const middlewares = require("./middlewares");
const simpsons = require("./routes/simpsons");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    message: "Projeto Trybe",
  });
});

app.use(express.json());
app.use(middlewares.logMiddleware);
app.use("/simpsons", simpsons);

app.use(middlewares.errorMiddleware);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
