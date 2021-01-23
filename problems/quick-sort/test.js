const { pivot, quickSort } = require("./index");
const unSortedArr = [10, 1, 20, 5, 8, 50, 9];
const sortedArr = [1, 5, 8, 9, 10, 20, 50];

test("Pivot function exists", () => {
  expect(pivot).toBeDefined();
});

test("QuickSort function exists", () => {
  expect(quickSort).toBeDefined();
});

test("Pivot returns index of pivot", () => {
  expect(pivot(unSortedArr)).toEqual(4);
});

test("Quick Sort", () => {
  expect(quickSort(unSortedArr)).toEqual(sortedArr);
});
