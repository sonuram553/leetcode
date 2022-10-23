const { merge, mergeSort } = require("./index");
const unSortedArr = [10, 1, 20, 5, 8, 50, 9];
const sortedArr = [1, 5, 8, 9, 10, 20, 50];

test("Merge function exists", () => {
  expect(merge).toBeDefined();
});

test("MergeSort function exists", () => {
  expect(mergeSort).toBeDefined();
});

test("Merge function combine to sorted array", () => {
  expect(merge([1, 5, 10], [2, 4, 20])).toEqual([1, 2, 4, 5, 10, 20]);
});

test("Merge Sort", () => {
  expect(mergeSort(unSortedArr)).toEqual(sortedArr);
});
