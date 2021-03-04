let numbers = [1,13,7];
let odd = [];

for (let i = 0; i < numbers.length; i++) {

    if(numbers[i] % 2 != 0)
    {   
        odd[i] = numbers[i];
        console.log("Valores ímpares encontrados: " + odd[i]);
    }
}

if(odd.length === 0){
    console.log("nenhum valor ímpar encontrado");
}