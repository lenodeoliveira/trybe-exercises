const fs = require("fs");

const scriptStart = Date.now();

const fileNames = fs.readdirSync("./newFolder");

console.log(`encontrados ${fileNames.length} arquivos`);

let fileSizeTotal = 0;

for (const fileName of fileNames) {
  const file = fs.readFileSync(`./newFolder/${fileName}`);
  fileSizeTotal += file.byteLength;
}

console.log(`tamanho total dos arquivos: ${fileSizeTotal} bytes`);

const scriptTime = Date.now() - scriptStart;
console.log(`script concluído em ${scriptTime} milissegundos`);
