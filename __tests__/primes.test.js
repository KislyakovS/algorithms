const { isPrime, getPrimes } = require('../src/primes');

describe('Primes', () => {
  it('should the number 45 be a non-prime number', () => {
    expect(isPrime(45)).toBe(false);
  });

  it('should the number 29 be a prime number', () => {
    expect(isPrime(29)).toBe(true);
  });

  it('should get all primes up to 30', () => {
    const RESULT = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(getPrimes(30)).toEqual(RESULT);
    expect(getPrimes(30)).toHaveLength(RESULT.length);
  });

  it('should get all primes up to 30', () => {
    const RESULT = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(getPrimes(30)).toEqual(RESULT);
  });

  it('should get all primes up to 100', () => {
    const RESULT = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ];
    expect(getPrimes(100)).toEqual(RESULT);
  });
});
