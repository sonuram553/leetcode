function minimumDifference(nums, k) {
  if (isSorted(nums) || isSorted(nums, false)) {
    // If nums is sorted, do nothing
  } else quickSort(nums);

  let min;
  let start = 0;
  let end = start + k - 1;

  while (end < nums.length) {
    const diff = Math.abs(nums[start] - nums[end]);

    if (min === undefined) min = diff;
    else min = Math.min(min, diff);

    start++;
    end = start + k - 1;
  }

  return min;
}

function isSorted(arr, ascending = true) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending && arr[i] > arr[i + 1]) return false;
    if (!ascending && arr[i] < arr[i + 1]) return false;
  }

  return true;
}

function findPivot(arr, start, end) {
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < arr[start]) {
      pivotIndex++;

      const left = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = left;
    }
  }

  const left = arr[start];
  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = left;

  return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start > end) return;

  const pivot = findPivot(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}
