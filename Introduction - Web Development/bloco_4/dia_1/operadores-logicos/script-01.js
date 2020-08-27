// Operadorres Lógico e (&&)  retorna true se os dois operados forem true

console.log(true && true); //true
console.log(true && false); //false

let idadeMaior = true;
let possuiCarteiraTrab = true;
let podeAplicar = idadeMaior && possuiCarteiraTrab; // true

console.log(podeAplicar);

/*Operador Lógico ou (||)*/
/*Só retornará true se um dos operandos forem true*/

let Idade = false;
let possuicarteiraTrab = true;
let podeaplicar = Idade || possuicarteiraTrab; // true

console.log(podeaplicar); //true


/* Operador NOT (!)*/
/*Operador de negação
 * Esse operador inverte o valor do operando,
 * ou seja, se ele era TRUE quando colocar o operador (!)  
 * ele retornará false
 */

let verdadeiro = true;
let resultado = !verdadeiro;

console.log(resultado);//false