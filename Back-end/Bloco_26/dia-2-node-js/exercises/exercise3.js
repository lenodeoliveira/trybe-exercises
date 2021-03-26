async function soma(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    throw new Error("Informe apenas números");
  }
  const results = (num1 + num2) * num3;
  if (results < 50) {
    throw new Error("Valor muito baixo");
  }
  return await results;
}

soma(1, 2, 53)
  .then((r) => console.log(r))
  .catch((error) => console.log(error.message));
