let fruits = [3, 4, 1, 1, 1];
let total = 0;
for (let i = 0; i < fruits.length; i++) {

    total += fruits[i];
    
}
if (total > 15) {
    
    console.log(total);
}
else{

    console.log('Valor menor que 16');
}