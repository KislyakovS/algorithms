/*
*  Сортировка слиянием - это алгоритм сортировки, основанный на принципе "разделяй и властвуй". Он разбивает
*  массив на два подмассива, затем рекурсивно сортирует эти подмассивы, и в конце объединяет эти подмассивы в один отсортированный массив
*
*  Сложность: O(n * log n)
*  Память: O(n)
*/

const mergeSort = (numbers: number[]): number[] => {
  if (numbers.length < 2) {
    return numbers;
  }

  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left: number[], right: number[]): number[] => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift())
    }
  }

  if (left.length) results.push(...left);
  if (right.length) results.push(...right);

  return results;
}
