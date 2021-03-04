const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }
  
        return reject({ error: 'Não possui esse tipo de animal.' });
      }, 100);
    })
  );

const getAnimal = (name) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const animalName = Animals.find(animal => animal.name === name);
            if(animalName) return resolve(animalName); 
            return reject('Não possui animal com esse nome.');   
        }, 100);
    
    });
}

const getListAnimals = (type) => ( 
     findAnimalsByType(type).then(list => list)
);

//testes
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Não possui animal com esse nome.')
      );
    });
  });
 
});