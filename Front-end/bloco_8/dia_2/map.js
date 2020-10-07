// const persons = [
//     { firstName: "Maria", lastName: "Ferreira" },
//     { firstName: "João", lastName: "Silva" },
//     { firstName: "Antonio", lastName: "Cabral" },
//   ];
  
//   const fullNames = [];
//   for(let i = 0; i < persons.length; i += 1){
//     fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
//   }
  
//   console.log(fullNames);

  const persons = [
    { firstName: "Maria", lastName: "Ferreira" },
    { firstName: "João", lastName: "Silva" },
    { firstName: "Antonio", lastName: "Cabral" },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

  ///
  const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);
