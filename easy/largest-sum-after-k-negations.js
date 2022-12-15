function largestSumAfterKNegations(nums, k) {
  quickSort(nums);

  if (nums[0] === 0) return calculateSum(nums);
  if (nums[0] > 0) {
    if (k % 2 !== 0) nums[0] = -nums[0];
    return calculateSum(nums);
  }

  // First number is negative.
  let i = 0;
  const n = nums.length;

  // Convert negative numbers to positive.
  while (i < n && i < k && nums[i] < 0) {
    nums[i] = -nums[i];
    i++;
  }

  const sum = calculateSum(nums);

  if (i === k || nums[i] === 0 || (k - i) % 2 === 0) return sum;

  if (i === n) {
    if ((k - i) % 2 === 0) return sum;
    else return sum - 2 * nums[i - 1];
  }

  let num = nums[i];
  if (nums[i] > nums[i - 1]) num = nums[i - 1];
  return sum - 2 * num;
}

function calculateSum(nums) {
  return nums.reduce((acc, num) => num + acc);
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
