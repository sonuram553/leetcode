const flatten = require("./index");

test("Flatten function exists", () => {
  expect(flatten).toBeDefined();
});

test("Flatten should flatten an array", () => {
  expect(flatten([[1]])).toEqual([1]);
  expect(flatten([1, 2])).toEqual([1, 2]);
  expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  expect(flatten([1, [2, [3], 4], 5])).toEqual([1, 2, 3, 4, 5]);
});
