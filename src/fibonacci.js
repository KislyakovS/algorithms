// fibonacci - Числа Фибоначчи

const fibSum_1 = (n) => {
  if (n <= 2)
    return 1;

  return fibSum_1(n - 1) + fibSum_1(n - 2)
}

const fibSum_2 = (n) => {
  if (n <= 2)
    return 1;

  let sum = 0;
  let current = 1;
  let previous = 1;

  for (let _ = 2; _ < n; _++) {
    sum = current + previous;
    previous = current;
    current = sum;
  }

  return sum;
}

const fib = (n) => {
  if (n === 1)
    return [1]

  const result = [1, 1];
  let current = 1;
  let previous = 1;

  for (let _ = 2; _ < n; _++) {
    const sum = current + previous;
    result.push(sum);
    previous = current;
    current = sum;
  }

  return result;
}

module.exports = {
  fibSum_1, fibSum_2, fib
}