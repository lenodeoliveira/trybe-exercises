
const myRemove = (arr, item) => arr.filter(index => index !== item);

describe('testing function myRemove', () => {
    it('must be a function', () => {
    expect(typeof myRemove).toBe('function');
    });

    it('must return a new array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('must not be equal', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('must not have been changed', () => {
      const myList = [5, 6, 7, 8];
      myRemove(myList, 5);
      expect(myRemove(myList)).toEqual([5, 6, 7, 8]);
    });

    it('must return expected array', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
      });
})
/* 

//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);  */