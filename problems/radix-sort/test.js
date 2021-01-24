const { getDigit, getNumOfDigits, mostDigits, radixSort } = require("./index");
const unSortedArr = [10, 1, 20, 5, 8, 50, 9];
const sortedArr = [1, 5, 8, 9, 10, 20, 50];

test("GetDigit function exists", () => {
  expect(getDigit).toBeDefined();
});

test("GetNumOfDigits function exists", () => {
  expect(getNumOfDigits).toBeDefined();
});

test("MostDigits function exists", () => {
  expect(mostDigits).toBeDefined();
});

test("RadixSort function exists", () => {
  expect(radixSort).toBeDefined();
});

test("GetDigit returns digit at kth place", () => {
  expect(getDigit(12345, 0)).toEqual(5);
  expect(getDigit(12345, 2)).toEqual(3);
});

test("GetNumDigits returns total counts of digits in a number", () => {
  expect(getNumOfDigits(12345)).toEqual(5);
  expect(getNumOfDigits(1004)).toEqual(4);
});

test("MostDigits returns length of the largest number", () => {
  expect(mostDigits([1, 2, 10, 100, 112, 20006])).toEqual(5);
});

test("RadixSort", () => {
  expect(radixSort(unSortedArr)).toEqual(sortedArr);
});
