const factorial = require("./index");

test("Factorial function exists", () => {
  expect(factorial).toBeDefined();
});

test("Factorial of 1 and 0 is 1", () => {
  expect(factorial(0)).toEqual(1);
  expect(factorial(1)).toEqual(1);
});

test("Factorial of 3 is 6", () => {
  expect(factorial(3)).toEqual(6);
});

test("Factorial of 5 is 120", () => {
  expect(factorial(5)).toEqual(120);
});
