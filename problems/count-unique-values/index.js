/* 
--- Directions
Write a function - countUniqueValues which accepts a sorted array of integers. 
The function should return no. of unique values in the array.

--- Examples
countUniqueValues([])             // returns 0;
countUniqueValues([1])            // returns 1;
countUniqueValues([0,1,1,2])      // returns 3;
countUniqueValues([1,1,2,2,5,6])  // returns 4;
 */

function countUniqueValues(arr) {
  if (arr.length < 2) return arr.length;

  let count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) count++;
  }

  return count;
}

module.exports = countUniqueValues;
