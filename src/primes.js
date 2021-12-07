// primes - простые числа

const isPrime = (a) => {
  if (a <= 0) {
    return true;
  }

  const sqrt = Math.sqrt(a);

  for (let i = 2; i <= sqrt; i++) {
    if (a % i === 0) {
      return false;
    }
  }

  return true;
}

// Sieve of Eratosthenes - Решето Эратосфена

const getPrimes = (n) => {
  if (n <= 0) {
    return [];
  }

  const sieve = [];
  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (!sieve.includes(i)) {
      primes.push(i);

      for (let j = i * 2; j <= n; j += i) {
        sieve.push(j);
      };
    };
  };

  return primes;
}

module.exports = {
  isPrime,
  getPrimes
}