// pow - Возведение в степень

const pow = (a, b) => {
  const binary = b.toString(2);

  return [...binary].reverse().reduce((res, it) => {
    if (it === '1') res *= a;
    a *= a;

    return res;
  }, 1);
}

module.exports = { pow };