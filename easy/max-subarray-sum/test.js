const maxSubArraySum = require("./index");

test("MaxSubArraySum function exists", () => {
  expect(maxSubArraySum).toBeDefined();
});

test("MaxSubArraySum returns 0 if array is empty", () => {
  expect(maxSubArraySum([])).toEqual(0);
});

test("MaxSubArraySum returns null if array length is less than n", () => {
  expect(maxSubArraySum([], 1)).toEqual(null);
  expect(maxSubArraySum([1, 2], 3)).toEqual(null);
});

test("MaxSubArraySum returns max sum", () => {
  expect(maxSubArraySum([1, 2, 8, 1, 5], 2)).toEqual(10);
  expect(maxSubArraySum([1, 2, 8, 1, 5], 3)).toEqual(14);
  expect(maxSubArraySum([1, 2, 3, 4, 6, 2, 8], 3)).toEqual(16);
});
