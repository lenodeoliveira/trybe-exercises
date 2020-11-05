
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


describe('testing function myFizzBuzz', () => {
  it('must be a function', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  it('must be divisible by 3 and 5, and return fizzbuzz', ()=> {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });

  it('must be divisible by 3 and return fizz', () => {
      expect(myFizzBuzz(3)).toBe('fizz')

  });

  it('must be divisible by 5 and return buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('must not be divisible by 3 or 5', () => {
    expect(myFizzBuzz(11)).toBe(11);
  })
  it('must be false', () => {
    expect(myFizzBuzz('5')).toBeFalsy();
  })

})
