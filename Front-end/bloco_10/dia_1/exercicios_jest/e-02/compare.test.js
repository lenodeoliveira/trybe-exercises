const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

//Compare dois objetos (JSON) para verificar se são idênticos ou não
describe('Testing objects', ()=> {

  it('must be equal', () => {
    expect(obj1).toEqual(obj2);
  });
  
  it('it must not be the equals', () => {
    expect(obj1).not.toEqual(obj3);
  });
  
  it('it must not be the equals', () => {
    expect(obj2).not.toEqual(obj3);
  });

})

