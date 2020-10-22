/* 
 *Modifique a função incrementadicionando parâmetros padrão 
 para que ela adicione 1 numberse valuenão for especificado.
 */

const increment = (number , value = 1) => (value === undefined ? number + 1 : number + value);

console.log(increment(5,5))