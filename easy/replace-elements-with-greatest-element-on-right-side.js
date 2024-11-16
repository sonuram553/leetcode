/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const n = arr.length;
  let currMax = arr[n - 1];

  arr[n - 1] = -1;

  for (let i = n - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = currMax;
    currMax = Math.max(currMax, temp);
  }

  return arr;
};

// With reduced line of codes
var replaceElements = function (arr) {
  const n = arr.length;
  let rightMax = -1;

  for (let i = n - 1; i >= 0; i--) {
    [arr[i], rightMax] = [rightMax, Math.max(rightMax, arr[i])];
  }

  return arr;
};
