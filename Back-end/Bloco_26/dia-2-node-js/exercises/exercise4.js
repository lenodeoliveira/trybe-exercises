const fs = require("fs");
const path = "./simpsons.json";

//ler arquivo json
function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

//ler id e nome
async function readJson() {
  return await readFilePromise(path).then((result) => {
    JSON.parse(result).forEach((r) => console.log(`${r.id} - ${r.name}`));
  });
}

//encontrar ID
async function idcharacter(id) {
  const idString = id.toString();
  return await readFilePromise(path)
    .then((result) => JSON.parse(result))
    .then((r) => {
      const js = r.filter((res) => res.id === idString);
      if (js.length == 0) {
        throw new Error("id não encontrado");
      }
      console.log(js[0]);
    })
    .catch((error) => console.log(error.message));
}

//idcharacter(10);
//readFilePromise(path);

//removendo elemento pelo ID
const simpsons = require("./simpsons.json");

function removeID(idRemove) {
  const filterArray = simpsons.filter(
    (caracter) => parseInt(caracter.id) !== idRemove
  );
  fs.promises
    .writeFile(path, JSON.stringify(filterArray))
    .then(() => console.log("Salvo com sucesso!"))
    .catch((error) => console.log(error.message));
}

//removeID(10);

//criando um novo array de elementos
function createNewArray() {
  const filterArray = simpsons.slice(0, 4);
  fs.promises
    .writeFile(path, JSON.stringify(filterArray))
    .then(() => console.log("Salvo com sucesso!"))
    .catch((error) => console.log(error.message));
}

//createNewArray();

// criar novo arquivo
function createNewArrayJSON(message) {
  fs.promises
    .writeFile("simpsonFamily.json", JSON.stringify(message))
    .then(() => console.log("Salvo com sucesso!"))
    .catch((error) => console.log(error.message));
}

//createNewArrayJSON({ name: "Nelson Muntz" });

//substituição de personagens

const simpsonFamily = require("./simpsonFamily.json");

function setFileName(newName) {
  simpsonFamily["name"] = newName;
  fs.promises
    .writeFile("simpsonFamily.json", JSON.stringify(simpsonFamily))
    .then(() => console.log("Salvo com sucesso!"))
    .catch((error) => console.log(error.message));
}

//setFileName("Maggie Simpson");
