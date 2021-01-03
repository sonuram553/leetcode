const same = require("./index");

test("Same function exists", () => {
  expect(same).toBeDefined();
});

test("Same returns true if both arrays are empty", () => {
  expect(same([], [])).toEqual(true);
});

test("Same returns false when arrays lengths are different", () => {
  expect(same([1, 2], [1])).toEqual(false);
  expect(same([1, 2], [])).toEqual(false);
  expect(same([1, 2, 2], [4, 4])).toEqual(false);
});

test("Same returns true if every value in the array has it's corresponding value squared in the second array", () => {
  expect(same([2, 3, 2], [4, 9, 25])).toEqual(false);
  expect(same([2, 3, 2], [4, 9, 4])).toEqual(true);
  expect(same([2, 3, 5], [4, 9, 25])).toEqual(true);
});
