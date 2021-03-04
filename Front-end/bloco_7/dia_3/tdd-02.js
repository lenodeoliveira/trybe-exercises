const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (myArrWords) => {
   const words = [];
    for (let index = 0; index < myArrWords.length; index++) {
        
         words.push(myArrWords[index].length);   
    }
    return words;
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

console.log(wordLengths(words));

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);