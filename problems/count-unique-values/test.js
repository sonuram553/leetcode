const countUniqueValues = require("./index");

test("CountUniqueValues function exists", () => {
  expect(countUniqueValues).toBeDefined();
});

test("CountUniqueValues returns count of unique values inside an array", () => {
  expect(countUniqueValues([])).toEqual(0);
  expect(countUniqueValues([1])).toEqual(1);
  expect(countUniqueValues([0, 1, 1, 2])).toEqual(3);
  expect(countUniqueValues([1, 1, 2, 2, 5, 6])).toEqual(4);
});
