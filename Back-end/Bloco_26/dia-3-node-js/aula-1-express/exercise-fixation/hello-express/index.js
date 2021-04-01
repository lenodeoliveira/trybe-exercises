const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const axios = require("axios");

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const data = funcionarios
    .filter((person) => person.genero == "F" && person.pais == "China")
    .reduce((prev, curr) => (prev.salario < curr.salario ? prev : curr));
  console.log(data);
});
