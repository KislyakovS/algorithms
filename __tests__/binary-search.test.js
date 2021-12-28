const { binarySearch } = require('../src/binary-search');

const DEMO_ARRAY_1 = [1, 10, 15, 16, 17, 18, 20];
const DEMO_ARRAY_2 = [10, 30, 50, 66, 87, 130, 200];

describe('Binary search', () => {
  it(`should find the index of the number 10 in the array ${DEMO_ARRAY_1}`, () => {
    expect(binarySearch(DEMO_ARRAY_1, 10)).toBe(1);
  })

  it(`should find the index of the number 130 in the array ${DEMO_ARRAY_2}`, () => {
    expect(binarySearch(DEMO_ARRAY_2, 130)).toBe(5);
  })

  it(`should return null`, () => {
    expect(binarySearch(DEMO_ARRAY_2, 500)).toBe(null);
  })
});