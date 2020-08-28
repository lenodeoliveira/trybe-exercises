//a pessoa marca no mínimo 6 numeros 
//sequencia de 6 numeros é sorteada.
//intervalo de 60

//array com os números sorteados.
let megaSenaNumbers = [];

//gerar numeros de forma aleatória
let firstNumber  = Math.ceil(Math.random() * 60);//arredondando os numeros gerados
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber  = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber  = Math.ceil(Math.random() * 60);
let sixthNumber  = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma7Play =[7, 16, 28, 31, 37, 55];
let numerOfHits = 0;

for (let i = 0; i < turma7Play.length; i++) 
{
    let playedNumber = turma7Play[i];
    for (let j = 0; j < megaSenaNumbers.length; j++) {

        let megaSenaNumber = megaSenaNumbers[j];

        if(playedNumber === megaSenaNumbers)
        {
            numerOfHits += 1;             
        }
    }
}

console.log(`Números sorteados: ${megaSenaNumbers}`);
console.log(`Nossas tentativas: ${turma7Play}`);
console.log(`Número de acertos: ${numerOfHits}`);