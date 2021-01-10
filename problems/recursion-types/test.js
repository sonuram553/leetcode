const collectOdds = require("./index");

test("CollectOdds function exists", () => {
  expect(collectOdds).toBeDefined();
});

test("CollectOdds returns empty array when the input array is empty", () => {
  expect(collectOdds([])).toEqual([]);
});

test("CollectOdds returns collection of odd values", () => {
  expect(collectOdds([1, 3, 5])).toEqual([1, 3, 5]);
  expect(collectOdds([1, 2, 3, 4])).toEqual([1, 3]);
});
