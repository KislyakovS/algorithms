// quicksort - Быстрая сортировка

const quicksort = (list) => {
  if (list.length <= 1) return list;

  const baseValue = list.pop();
  const prev = [];
  const next = [];

  list.forEach(numb => {
    if (numb > baseValue) {
      next.push(numb);
    } else {
      prev.push(numb);
    }
  });

  return [...quicksort(prev), baseValue, ...quicksort(next)];
};

module.exports = { quicksort }