const { quicksort } = require('../src/quicksort');

describe('Quicksort', () => {
  it('should quicksort list [6, 4, 8, 10, 10, 3]', () => {
    const RESULT = [3, 4, 6, 8, 10, 10];
    expect(quicksort([6, 4, 8, 10, 10, 3])).toEqual(RESULT);
  });

  it('should quicksort list [5]', () => {
    const RESULT = [5];
    expect(quicksort([5])).toEqual(RESULT);
  });

  it('should quicksort empty list', () => {
    const RESULT = [];
    expect(quicksort([])).toEqual(RESULT);
  });

  it('should quicksort list [1, 2, 3, 4, 5]', () => {
    const RESULT = [1, 2, 3, 4, 5];
    expect(quicksort([1, 2, 3, 4, 5])).toEqual(RESULT);
  });
})