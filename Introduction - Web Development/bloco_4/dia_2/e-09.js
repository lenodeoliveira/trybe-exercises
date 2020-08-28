//encontrando maior valor.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 0;
for (let i = 0; i < numbers.length; i++) {
    
    menorValor = numbers[i];
    for (let j = 1; j < numbers.length; j++) {

        if(numbers[j] < menorValor){
            menorValor = numbers[j];
        }
    }

}

console.log(menorValor);
