// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    const arrString = str.toLowerCase().split('');
    let cont = 0;
    for(index = 0; index <= arrString.length; index += 1){
        if(arrString[index] === 'a') {
            cont = cont + 1;
        }
        if(arrString[index] === 'e') {
            cont = cont + 1;
        }
        if(arrString[index] === 'i') {
            cont = cont + 1;
        }
        if(arrString[index] === 'o') {
            cont = cont + 1;
        }
        if(arrString[index] === 'u') {
            cont = cont + 1;
        }
    }

    return cont;
}

module.exports = vowels;