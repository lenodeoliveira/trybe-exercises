const assert = require('assert');
const { verify } = require('crypto');

const createMenu = (objMenu) => {
    
    const menu = { 
          fetchMenu: objMenu,
          consumption: [],
        };
    menu.order = (str) => menu.consumption.push(str);    
    //menu.pay = verifyPay;

    return menu;
};

const verifyPay = () => {

    return menu.pay = 'III'
}

const men = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
men.order('coxinha');
men.order('agua');
men.order('sopa');
console.log(men)
//men.pay();

//const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
//teste 1
//obj = createMenu({ food: {}, drink: {} });
//console.log(obj)
//assert.deepStrictEqual(createMenu({ food: {}, drink: {} }), obj);
//teste 5
/* const meuRestaurante = createMenu({ food: {}, drink: {} });
meuRestaurante.order('coxinha');
const order = meuRestaurante.consumption;
assert.strictEqual(meuRestaurante.consumption, order); */

/* const output = { food: {}, drink: {} };
console.log(createMenu({ food: {}, drink: {} }));
console.log(teste.fetchMenu); */

/* const repetirOrder = createMenu({food: {}, drink: {}});
repetirOrder.order("coxinha");
repetirOrder.order("agua");
repetirOrder.order("coxinha");
const expected = repetirOrder.consumption;
console.log(expected)
assert.deepStrictEqual(repetirOrder.consumption, expected) */