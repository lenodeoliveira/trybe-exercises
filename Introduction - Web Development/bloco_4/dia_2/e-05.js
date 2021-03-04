//somando os valores do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let media = 0;

for (let i = 0; i < numbers.length; i++) {
    
    media = (total += numbers[i]) / numbers.length; 
   
}

console.log(`A soma de todos os valores é ${total}`);
console.log(`A média aritmética é ${media}`);

