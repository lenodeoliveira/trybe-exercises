//utilizando promisses para transformar a função calcularDivisao em um fluxo assíncrono

function calcularDivisao(num1, num2) {
  const promisse = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode dividir um número por zero"));
    const result = num1 / num2;
    resolve(result);
  });

  return promisse;
}

//essa função retornará uma promisse que deverá ser resolvida por quem a chama.

//resolvendo a promisse
calcularDivisao(2, 2)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
