/*
--- Directions
Write a function to collect odd values from an array of numbers.

--- Examples
collectOdds([])             // returns [];
collectOdds([1, 3, 5])      // returns [1, 3, 5];
collectOdds([1, 2, 3, 4])   // returns [1, 3];
 */

// Using Helper Method Recursion
function collectOdds(arr) {
  const result = [];

  function isOdd(index) {
    if (index === arr.length) return null;

    if (arr[index] % 2 !== 0) result.push(arr[index]);
    isOdd(index + 1);
  }

  isOdd(0);
  return result;
}

// Using Pure Recursion
/* function collectOdds(arr, index = 0) {
  let result = [];

  if (index === arr.length) return result;
  if (arr[index] % 2 !== 0) result.push(arr[index]);

  return [...result, ...collectOdds(arr, index + 1)];
} */

module.exports = collectOdds;
