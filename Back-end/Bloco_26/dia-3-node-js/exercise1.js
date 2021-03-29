const fs = require("fs");

const startScript = Date.now();

const startFile1 = Date.now();
const file1 = fs.readFileSync("./arquivo1.txt");
const timeFile1 = Date.now() - startFile1;

const startFile2 = Date.now();
const file2 = fs.readFileSync("./arquivo2.txt");
const timeFile2 = Date.now() - startFile2;

const timeScript = Date.now() - startScript;

console.log(
  `arquivo1.txt: lidos ${file1.byteLength} bytes em ${timeFile1} milissegundos`
);
console.log(
  `arquivo2.txt: lidos ${file2.byteLength} bytes em ${timeFile2} milissegundos`
);
console.log(`script concluído em ${timeScript} milissegundos`);
