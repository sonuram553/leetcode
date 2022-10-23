const sumZero = require("./index");

test("SumZero function exits", () => {
  expect(sumZero).toBeDefined();
});

test("SumZero returns undefined if an array does not have a pair whose sum is zero", () => {
  expect(sumZero([])).toBeFalsy();
  expect(sumZero([1, 2])).toBeFalsy();
  expect(sumZero([-1, 0, 2, 3])).toBeFalsy();
});

test("SumZero returns a pair whose sum is zero", () => {
  expect(sumZero([-1, 1, 2, 3])).toEqual([-1, 1]);
  expect(sumZero([-4, -2, 0, 1, 2])).toEqual([-2, 2]);
  expect(sumZero([-3, 1, 2, 3])).toEqual([-3, 3]);
});
