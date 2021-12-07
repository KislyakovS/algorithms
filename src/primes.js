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

module.exports = {
  isPrime,
}