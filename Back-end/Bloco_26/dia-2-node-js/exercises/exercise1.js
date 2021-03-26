function soma(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    ) {
      reject(new Error("Informe apenas números"));
    }
    const results = (num1 + num2) * num3;
    if (results < 50) {
      reject(new Error("Valor muito baixo"));
    }
    resolve(results);
  });
}
