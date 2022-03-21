const nums = [5, 1, 0, 5, 10, 2];
const step = 2;

function pivot(arr, start, end, compare) {
  let pivotIndex = start;

  for (let i = start + step; i <= end; i += step) {
    if (compare(arr[i], arr[start])) {
      pivotIndex += step;

      const temp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = temp;
    }
  }

  const temp = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = temp;

  return pivotIndex;
}

function quickSort(arr, start, end, compare) {
  if (start > end) return;

  const pivotIndex = pivot(arr, start, end, compare);

  quickSort(arr, start, pivotIndex - step, compare);
  quickSort(arr, pivotIndex + step, end, compare);
  return arr;
}

function inIncreasingOrder(left, right) {
  return left < right;
}

function inDecreasingOrder(left, right) {
  return left > right;
}

console.log(quickSort(nums, 0, nums.length - 1, inIncreasingOrder));
console.log(quickSort(nums, 1, nums.length - 1, inDecreasingOrder));
