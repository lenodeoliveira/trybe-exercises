// Ter um array com os números da mega sena sorteados de forma aleatória
let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma7Play = [7, 16, 28, 31, 37, 55];
let turma72Play = [7, 16, 28, 31, 38, 55];
let turma73Play = [7, 17, 28, 31, 37, 55];

let plays = [turma7Play, turma72Play, turma73Play];

// Testa os 3 jogos
for(let indice = 0; indice < plays.length; indice += 1) {
  let numberOfHits = 0;
  let currentPlay = plays[indice];
  // Compara os jogos
  for (let i = 0; i < currentPlay.length; i += 1) {
    let playedNumber = currentPlay[i];
    for (let j = 0; j < megaSenaNumbers.length; j += 1) {
      let megaSenaNumber = megaSenaNumbers[j];
      if(playedNumber === megaSenaNumber) {
        numberOfHits += 1;
      }
    }
  }

  console.log(`Números sorteados: ${megaSenaNumbers}`);
  console.log(`Nossas tentativas: ${currentPlay}`);
  console.log(`Total de acertos: ${numberOfHits}`);
}