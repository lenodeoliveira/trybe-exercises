const users = require('./users');

describe('User role testing', () => {

    it('should return the user', async () => {
        const userID = await users.getUserName(4);
        expect(userID).toBe('Mark')
    });

   it('should return an error when searching for a user that does not exist', async () => {
      try {
        await users.getUserName(7);
      } catch (error) {
        expect(error).toEqual({"error": "User with 7 not found."});
      }
    });
});