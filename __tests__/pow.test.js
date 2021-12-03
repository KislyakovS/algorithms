const { pow } = require('../src/pow');

describe('Exponentiation', () => {
  it('shuld raise to the power of 5 the number 10', () => {
    expect(pow(10, 5)).toBe(Math.pow(10, 5))
  });

  it('shuld raise to the power of 8 the number 5', () => {
    expect(pow(5, 8)).toBe(Math.pow(5, 8))
  });
});