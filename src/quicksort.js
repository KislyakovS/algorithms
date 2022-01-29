// quicksort - Быстрая сортировка

const quicksort = (list) => {
  if (list.length <= 1) return list;

  const base = list.splice(Math.floor(list.length / 2), 1)[0];
  const prev = [];
  const next = [];

  list.forEach(numb => {
    if (numb > base) {
      next.push(numb);
    } else {
      prev.push(numb);
    }
  });

  return [...quicksort(prev), base, ...quicksort(next)];
};

module.exports = { quicksort }