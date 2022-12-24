function trimMean(arr) {
  const n = arr.length;
  const limit = n * 0.05;

  quickSort(arr);

  let sum = 0;
  for (let i = limit; i < n - limit; i++) sum += arr[i];

  return sum / (n - 2 * limit);
}

function findPivot(arr, start, end, compareFn) {
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (compareFn(arr[start], arr[i])) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }

  swap(arr, start, pivotIndex);
  return pivotIndex;
}

function quickSort(
  arr,
  start = 0,
  end = arr.length - 1,
  compareFn = compareNums
) {
  if (start >= end) return;

  const pivot = findPivot(arr, start, end, compareFn);
  quickSort(arr, start, pivot - 1, compareFn);
  quickSort(arr, pivot + 1, end, compareFn);
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function compareNums(left, right) {
  return right < left;
}
