function minimumOperations(nums) {
  quickSort(nums);

  const n = nums.length;
  const lastIndex = removeDuplicateInPlace(nums);

  let i = 0;
  while (i <= lastIndex && nums[i] === 0) i++;

  return lastIndex - i + 1;
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

function removeDuplicateInPlace(arr) {
  let i = 1;
  const n = arr.length;

  while (i < n && arr[i] !== arr[i - 1]) i++;

  i--;

  for (let j = i + 1; j < n; j++) {
    if (arr[i] !== arr[j]) arr[++i] = arr[j];
  }

  return i;
}
