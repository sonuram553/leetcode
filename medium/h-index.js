const quickSort = (() => {
  // utils/swap.js
  function swap(arr, leftIndex, rightIndex) {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  }
  var swap_default = swap;

  // utils/compare-nums.js
  function compareNums(left, right) {
    return right > left;
  }
  var compare_nums_default = compareNums;

  // sorting/quick-sort.js
  function findPivot(arr, start, end, compareFn) {
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++) {
      if (compareFn(arr[start], arr[i])) {
        pivotIndex++;
        swap_default(arr, i, pivotIndex);
      }
    }
    swap_default(arr, start, pivotIndex);
    return pivotIndex;
  }
  function quickSort(
    arr,
    start = 0,
    end = arr.length - 1,
    compareFn = compare_nums_default
  ) {
    if (start >= end) return;
    const pivot = findPivot(arr, start, end, compareFn);
    quickSort(arr, start, pivot - 1, compareFn);
    quickSort(arr, pivot + 1, end, compareFn);
  }
  return quickSort;
})();

function hIndex(citations) {
  let max = 0;
  const n = citations.length;

  quickSort(citations);

  let left = 0;
  let right = n - 1;

  // Binary Search
  while (left <= right) {
    const mid = (left + right) >> 1;
    const num = citations[mid];
    const position = mid + 1;
    if (position === num) return num;
    if (num > position) {
      max = left = position;
    } else right = mid - 1;
  }

  return max;
}
