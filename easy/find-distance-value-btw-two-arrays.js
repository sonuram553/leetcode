function findTheDistanceValue(arr1, arr2, d) {
  let count = 0;

  quickSort(arr2);

  for (const num of arr1) {
    const range = [num - d, num + d];
    let flag = true;

    let start = 0;
    let end = arr2.length - 1;

    // Binary Search
    while (start <= end) {
      const mid = (start + end) >>> 1;

      if (arr2[mid] >= range[0] && arr2[mid] <= range[1]) {
        flag = false;
        break;
      }

      if (arr2[mid] > range[1]) end = mid - 1;
      else start = mid + 1;
    }

    flag && count++;
  }

  return count;
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
