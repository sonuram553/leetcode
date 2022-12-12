function findKthPositive(arr, k) {
  let i = 1;
  let count = 0;

  while (true) {
    if (binarySearch(arr, i) === -1) count++;
    if (count === k) return i;

    i++;
  }
}

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = (start + end) >>> 1;

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}
