/* let elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

const len = elements.map(({ length }) => length); // [8, 6, 7, 9]
console.log(len)

var func = () => ({foo: 1});

//console.log(func())//

const increment = (number , value = 1) => (value === undefined ? number + 1 : number + value);

console.log(increment(5))
 */

//const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

const filteredPeople = filterPeople(people)

/* assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
 */
function filterPeople() {
  return people.filter(({bornIn,nationality}) => (bornIn >= 1901 && bornIn <= 2000) && 
  nationality === 'Australian');
}
console.log(filterPeople(people))