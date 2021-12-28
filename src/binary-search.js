// Binary search — классический алгоритм поиска элемента в отсортированном массиве(векторе), использующий дробление массива на половины.
// Используется в информатике, вычислительной математике и математическом программировании.

const binarySearch = (array, number) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (number === array[middleIndex]) {
      return middleIndex;
    }

    if (number > array[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return null;
}

module.exports = {
  binarySearch
}