// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if(n === 0) {
        return 0;
    }
   const arrNumber = n.toString().split('');
   let arr = [];
   const newArr = [];
   arrNumber.forEach(element => {
       if(element === '-') {
         arr.push(element);
         arrNumber.shift();
       }
   });
   let numberReverse = [];
   numberReverse = arrNumber.reverse();
   if (numberReverse[0] === '0') {
       numberReverse.shift();
   };
  
   let result = newArr.concat(arr, numberReverse).join('');
   return parseInt(result);
}

module.exports = reverseInt;
