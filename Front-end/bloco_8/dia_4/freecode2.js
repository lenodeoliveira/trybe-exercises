const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [a,b,...arr] = list; // change this
    // change code above this line
    return [...arr];
  }
const arr = removeFirstTwo(source);

console.log(arr)