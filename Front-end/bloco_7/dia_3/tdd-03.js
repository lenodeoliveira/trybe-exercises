const assert = require('assert');
// escreva a função addAllnumbers aqui

const addAllnumbers = (myArr) => {
    let totalSum = 0;
    for (let index = 0; index < myArr.length; index++) {

        totalSum += myArr[index];
    }

    return totalSum;
}


const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

console.log(output);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);