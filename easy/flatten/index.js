/* 
--- Direction
Write a function - flatten which accepts an array. The function should return a
new array which is flattened version of the input array.

--- Examples
flatten([1, 2])             // returns [1, 2]
flatten([[1]])              // returns [1]
flatten([1, [2, 3], 4])     // returns [1, 2, 3, 4]
flatten([1, [2, [3], 4], 5] // returns [1, 2, 3, 4, 5]
 */

function flatten(arr, index = 0) {
  if (index === arr.length) return [];

  if (arr[index] instanceof Array)
    return [...flatten(arr[index]), ...flatten(arr, index + 1)];
  else return [arr[index], ...flatten(arr, index + 1)];
}

module.exports = flatten;