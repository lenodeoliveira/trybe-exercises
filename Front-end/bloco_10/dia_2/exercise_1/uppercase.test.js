const uppercase = require('./uppercase');

test('should call the callback function', () => {
     uppercase('jest', str => {
       expect(str).toBe('JEST');
    });
}) 