function frequencySort(nums) {
  const entries = Object.entries(countItems(nums));

  quickSort(entries);

  const result = [];
  for (const [num, count] of entries)
    for (let i = 0; i < count; i++) result.push(Number(num));

  return result;
}

function countItems(arr) {
  const map = {};

  for (const item of arr) {
    if (map[item]) map[item] += 1;
    else map[item] = 1;
  }

  return map;
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
  if (right[1] < left[1]) return true;

  // If count is equal than the greater number will appear first
  if (left[1] === right[1] && Number(right[0]) > Number(left[0])) return true;

  return false;
}
