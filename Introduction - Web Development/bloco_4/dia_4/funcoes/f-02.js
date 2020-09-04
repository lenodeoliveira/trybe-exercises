
function indiceMaior(numeros) {
    
    let Maior = 0;
    for (let index in numeros) {
      if (numeros[Maior] < numeros[index]) {
        Maior = index;
      }
    }
    return Maior;
  }
  
  console.log(indiceMaior([2, 3, 6, 7, 10, 1]));