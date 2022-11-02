// Using Sort
// Time Complexity O(m*n + nlogn), where m and n are the sizes of queries and nums respectively.

function answerQueries(nums, queries) {
  const result = [];

  quickSort(nums);

  for (const query of queries) {
    let sum = 0;
    let count = 0;

    for (const num of nums) {
      sum += num;

      if (sum > query) break;
      if (sum === query) {
        count++;
        break;
      }

      count++;
    }

    result.push(count);
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
