function sortByBits(arr) {
  const result = [];

  for (const num of arr) {
    const ones = count1Bit(num);

    if (Array.isArray(result[ones])) result[ones].push(num);
    else result[ones] = [num];
  }

  for (const nums of result) if (Array.isArray(nums)) quickSort(nums);

  return result.reduce((acc, nums) => {
    if (Array.isArray(nums)) return [...acc, ...nums];
    return acc;
  }, []);
}

function count1Bit(num) {
  let count = 0;

  while (num) {
    if (num % 2) count++;
    num = num >>> 1;
  }

  return count;
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
