

function maisRepetido(numeros) {
    let num = {};
  
    for (let i = 0; i < numeros.length; i += 1) {
      let valor = numeros[i];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
  }
  
  console.log(maisRepetido([5, 3, 1, 5])); 