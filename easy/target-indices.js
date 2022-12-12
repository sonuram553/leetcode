function targetIndices(nums, target) {
  quickSort(nums);

  const index = binarySearch(nums, target);

  if (index === -1) return [];

  let i = index;
  const result = [i++];

  while (i < nums.length && nums[i] === target) result.push(i++);

  return result;
}

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let index = -1;

  while (start <= end) {
    const mid = (start + end) >>> 1;

    if (nums[mid] === target) {
      index = mid;
      end = mid - 1;
    } else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return index;
}

function findPivot(arr, start, end, compareFn) {
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
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
  if (start > end) return;

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
