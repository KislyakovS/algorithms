// НОД - Наибольшим общим делителем

const gcd_1 = (a, b) => {
  if (b === 0) return a;

  return gcd_1(b, a % b);
}

const gcd_2 = (a, b) => {
  while (b != 0) {
    if (a > b) a -= b;
    else b -= a;
  }

  return a;
}

module.exports = {
  gcd_1, gcd_2
}