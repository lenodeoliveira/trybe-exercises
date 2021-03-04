const assert = require("assert");
//{'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9}

const { Console } = require("console");

const createMenu = (objMenu) => {
    
    const menu = { 
          fetchMenu: objMenu,
          consumption: [],
        };
    menu.order = (str) => menu.consumption.push(str);    
    menu.pay = () => {
        let totalValues = 0;
        const foodArray = Object.getOwnPropertyNames(menu.fetchMenu.food);
        const valuesFood = Object.values(menu.fetchMenu.food);
        //drink
        const drinkArray = Object.getOwnPropertyNames(menu.fetchMenu.drink);
        const valuesDrink = Object.values(menu.fetchMenu.drink);
        //consumo food
         for (let i = 0; i < foodArray.length; i++) {
               for (let j = 0; j < menu.consumption.length; j++) {
                   if(menu.consumption[j] === foodArray[i]){
                        totalValues += valuesFood[i];        
                   }
               }
         }
         //consumo drink
         for (let i = 0; i < drinkArray.length; i++) {
            for (let j = 0; j < menu.consumption.length; j++) {
                if(menu.consumption[j] === drinkArray[i]){
                     totalValues += valuesDrink[i];        
                }
            }
      }
         
         return Math.round(totalValues * 1.10);
    }
    return menu;
};

const testeObj = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }
const testMenu = createMenu(testeObj);
testMenu.order('coxinha');
testMenu.order('agua');
testMenu.order('sopa');
testMenu.order('sopa');
testMenu.order('cerveja');
console.log(testMenu.pay()) 

console.log(testMen.fetchMenu);
console.log(testeObj);

assert.deepStrictEqual(testMenu.fetchMenu, testeObj)



/* const arr = Object.values(menu.fetchMenu);
const arrFood = Object.values(arr[0]);
const arrDrink = Object.values(arr[1]);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(arrFood.reduce(reducer)); */
