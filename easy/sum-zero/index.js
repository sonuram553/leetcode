/* 
--- Directions
Write a function - sumZero which accepts a sorted array of integers. The function should
return an array of first two numbers whose sum is zero otherwise returns undefined.

--- Examples
sumZero([])             // returns undefined;
sumZero([-1])           // returns undefined;
sumZero([0, 1, 3])      // returns undefined
sumZero([-1, 1, 2, 3])  // returns [-1, 1];
 */

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] > -1) return;

    const sum = arr[start] + arr[end];
    if (sum === 0) return [arr[start], arr[end]];
    else if (sum > 0) end--;
    else start++;
  }
}

module.exports = sumZero;