
function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

describe('testing function myRemoveWithoutCopy', () => {
    it('returns the same array', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('should not return the expected array', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('must not have been changed', () => {
      const myArr = [1, 2, 3, 4];
      myRemoveWithoutCopy(myArr, 1);
      expect(myArr).toEqual([2, 3, 4]);
    });
    it('must return the expected array', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
})
