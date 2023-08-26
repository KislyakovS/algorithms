/*
*  Сортировка пузырьком - этот алгоритм основан на попарном сравнении и обмене соседних элементов. Если предшествующий элемент
*  оказывается больше последующего, элементы меняются местами. Таким образом, после каждого прохода по массиву, наибольший
*  элемент "всплывает" в конец массива, а наименьший элемент перемещается на одну позицию к началу массива.
*
*  Сложность: O(n^2)
*  Память: O(1)
*/

const bubbleSort = (numbers: number[]): number[] => {
  const { length } = numbers;

  for (let i = 0; i < length; i++) {
    for (let j = 1; j <= length - 1; j++) {
      if (numbers[j] < numbers[j - 1]) {
        [numbers[j], numbers[j - 1]] = [numbers[j - 1], numbers[j]];
      }
    }
  }

  return numbers;
}
