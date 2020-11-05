const sum2 = require('./assertRefact');

describe('testing sum function', () => {
     test('if the type is function', () => {
            expect(typeof sum2).toBe('function');
     });
    
     test('sums two values', () => {
         expect(sum2(4, 5)).toBe(9);
     });

     test('sums two zeros', () => {
        expect(sum2(0, 0)).toBe(0);
     });

     test('testing whether the function throws an exception', () => {
         expect(() => sum2(4,'5')).toThrow();
     });

     test('testing whether the function throws an exception', () => {
        expect(() => sum2(4,'5')).toThrow();
    });

    test('error message is "parameters must be numbers"', () => {
        expect(() => {
          sum2(4, '5');
        }).toThrow(/parameters must be numbers/);
      });
});