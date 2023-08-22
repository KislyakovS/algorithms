/*
*  Сортировка выбором - это алгоритм сортировки, который работает по принципу постоянного выбора наименьшего (или наибольшего, в зависимости от порядка сортировки)
*  элемента из части массива, которая еще не была отсортирована, и обмена его с первым неотсортированным элементом.
*
*  Сложность: O(n^2)
*  Память: O(1)
*/

const selectionSortAscendingOrder = (numbers: number[]): number[] => {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[minIndex] > numbers[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [numbers[minIndex], numbers[i]] = [numbers[i], numbers[minIndex]];
    }
  }

  return numbers;
}

const selectionSortDescendingOrder = (numbers: number[]): number[] => {
  for (let i = 0; i < numbers.length; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[maxIndex] < numbers[j]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      [numbers[maxIndex], numbers[i]] = [numbers[i], numbers[maxIndex]];
    }
  }

  return numbers;
}
