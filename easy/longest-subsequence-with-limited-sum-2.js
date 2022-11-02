// Better Solution - Using Prefix Sum and Binary Search along with sorting
// Time Complexity O((m+n)logn)

function answerQueries(nums, queries) {
  const n = nums.length;
  const result = [];

  quickSort(nums);

  // Calculate Prefix Sum
  for (let i = 1; i < n; i++) nums[i] += nums[i - 1];

  for (const query of queries) {
    if (query < nums[0]) {
      // query is smaller than the nums range
      result.push(0);
      continue;
    }

    if (query > nums[n - 1]) {
      // query is greater than the nums range
      result.push(n);
      continue;
    }

    // query is in nums range
    let maxIndex;
    let left = 0;
    let right = nums.length - 1;

    // Binary Search
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === query) {
        maxIndex = mid;
        break;
      }

      if (nums[mid] < query) {
        maxIndex = mid;
        left = mid + 1;
      } else right = mid - 1;
    }

    result.push(maxIndex + 1);
  }

  return result;
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

function compareNums(left, right) {
  return right < left;
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
