function arrayPairSum(nums) {
  const n = nums.length;
  let sum = 0;

  // If nums is sorted in Ascending order
  if (isSorted(nums)) {
    for (let i = 0; i < n; i += 2) {
      sum += nums[i];
    }

    return sum;
  }

  // If nums is sorted in Descending order
  if (isSorted(nums, false)) {
    for (let i = 1; i < n; i += 2) {
      sum += nums[i];
    }

    return sum;
  }

  // If nums is not sorted
  quickSort(nums);
  
  for (let i = 0; i < n; i += 2) {
    sum += nums[i];
  }

  return sum;
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
