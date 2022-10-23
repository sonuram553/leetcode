/*
--- Directions
Write a function called same, which accepts two arrays.
The function should return true if every value in the array
has it's corresponding value squared in the second array. The
frequency of values must be the same.

--- Examples
same([1, 2, 3], [4, 1, 9])  // returns true;
same([1, 2, 3], [4, 1])     // returns false;
same([1, 2, 1], [4, 4, 1])  // returns false;
*/

function same(leftArr, rightArr) {
  if (leftArr.length !== rightArr.length) return false;

  const leftArrMap = {};
  const rightArrMap = {};

  for (let value of leftArr) {
    leftArrMap[value] = ++leftArrMap[value] || 1;
  }

  for (let value of rightArr) {
    rightArrMap[value] = ++rightArrMap[value] || 1;
  }

  for (let key in leftArrMap) {
    if (
      !(key * key in rightArrMap) ||
      rightArrMap[key * key] !== leftArrMap[key]
    )
      return false;
  }

  return true;
}

module.exports = same;