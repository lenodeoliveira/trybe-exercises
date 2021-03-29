const fs = require("fs");

const scriptStart = Date.now();

fs.readdir("./folder", (err, fileNames) => {
  console.log(`encontrados ${fileNames.length} arquivos`);
  const fileSizes = [];

  function logEnd() {
    if (fileSizes.length === fileNames.length) {
      const fileLengthSum = fileSizes.reduce((total, size) => total + size);
      const scriptTime = Date.now() - scriptStart;

      console.log(
        `lidos ${fileLengthSum} bytes em ${scriptTime} milissegundos`
      );
    }
  }

  fileNames.forEach((fileName) => {
    fs.readFile(`./folder/${fileName}`, (err, file) => {
      fileSizes.push(file.byteLength);
      logEnd();
    });
  });
});
