const binarySearch = require("./index");

test("BinarySearch function exists", () => {
  expect(binarySearch).toBeDefined();
});

test("BinarySearch returns -1 one if the value doesn't exits", () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6], 10)).toEqual(-1);
  expect(binarySearch([10, 13, 20, 31, 40], 100)).toEqual(-1);
});

test("BinarySearch returns the index of the value", () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toEqual(2);
  expect(binarySearch([10, 13, 20, 31, 40], 31)).toEqual(3);
  expect(binarySearch([1, 4, 6, 10, 14], 14)).toEqual(4);
});
