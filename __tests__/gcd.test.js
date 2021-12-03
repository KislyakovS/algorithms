const { gcd_1, gcd_2 } = require('../src/gcd');

describe('Greatest common divisor', () => {
  it('should find the largest common divisor among 100 and 45. v_1', () => {
    expect(gcd_1(100, 45)).toBe(5);
  })

  it('should find the largest common divisor among 100 and 45. v_2', () => {
    expect(gcd_2(100, 45)).toBe(5);
  })

  it('should find the largest common divisor among 452 and 32. v_1', () => {
    expect(gcd_1(452, 32)).toBe(4);
  })

  it('should find the largest common divisor among 452 and 32. v_2', () => {
    expect(gcd_2(452, 32)).toBe(4);
  })
})