//somando os valores do array
let numbers = [5, 9, 3, 19, 70, 8, 1, 2, 35, 27];
let total = 0;
let media = 0;

for (let i = 0; i < numbers.length; i++) {
    
    media = (total += numbers[i]) / numbers.length; 
   
}

if (media > 20)
{
    console.log('Valor maior que 20. ' + ' Valor = ' + media);
}
else
{
    console.log('Valor menor que 20.' + ' Valor = ' + media);
}


