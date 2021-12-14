const { fibSum_1, fibSum_2, fib } = require('../src/fibonacci');

describe('Fibonacci Numbers', () => {
  it('should find the sum of the first 10 fibonacci numbers v_1', () => {
    expect(fibSum_1(10)).toBe(55);
  });
  it('should find the sum of the first 7 fibonacci numbers v_1', () => {
    expect(fibSum_1(7)).toBe(13);
  });

  it('should find the sum of the first 8 fibonacci numbers v_2', () => {
    expect(fibSum_2(8)).toBe(21);
  });
  it('should find the sum of the first 20 fibonacci numbers v_2', () => {
    expect(fibSum_2(20)).toBe(6765);
  });

  it('should be a sequence of fibonacci numbers up to 5', () => {
    const RESULT = [1, 1, 2, 3, 5];

    expect(fib(5)).toEqual(RESULT);
  });
  it('should be a sequence of fibonacci numbers up to 10', () => {
    const RESULT = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

    expect(fib(10)).toEqual(RESULT);
  });
})