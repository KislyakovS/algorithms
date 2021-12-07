const { isPrime, getPrimes } = require('../src/primes');

describe('Primes', () => {
  it('should the number 45 be a non-prime number', () => {
    expect(isPrime(45)).toBe(false);
  });

  it('should the number 29 be a prime number', () => {
    expect(isPrime(29)).toBe(true);
  });
});
