function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (value === arr[mid]) return mid;
    else if (value > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}

// With Recursion
/* function binarySearch(arr, value, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  if (value === arr[mid]) return mid;
  else if (value > arr[mid]) return binarySearch(arr, value, mid + 1, end);
  else return binarySearch(arr, value, start, mid - 1);
} */

module.exports = binarySearch;
