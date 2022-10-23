function sortArray(nums) {
  // If nums is sorted in Ascending order
  if (isSorted(nums)) return nums;

  // If nums is sorted in Descending order
  if (isSorted(nums, false)) {
    reverseArray(nums);
    return nums;
  }

  quickSort(nums);
  return nums;
}

function isSorted(arr, ascending = true) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending && arr[i] > arr[i + 1]) return false;
    if (!ascending && arr[i] < arr[i + 1]) return false;
  }

  return true;
}

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const left = arr[start];
    arr[start] = arr[end];
    arr[end] = left;

    start++;
    end--;
  }
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
