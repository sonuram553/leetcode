function countNegatives(grid) {
  let count = 0;

  for (const row of grid) {
    const index = binarySearch(row);
    if (index !== -1) count += row.length - index;
  }

  return count;
}

function binarySearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;

  while (start <= end) {
    const mid = (start + end) >>> 1;

    if (arr[mid] < 0) {
      index = mid;
      end = mid - 1;
    } else start = mid + 1;
  }

  return index;
}
