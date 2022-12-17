function minimumAbsDifference(arr) {
  const { abs } = Math;

  quickSort(arr);

  let result = [[arr[0], arr[1]]];
  let min = abs(arr[0] - arr[1]);

  for (let i = 2; i < arr.length; i++) {
    const diff = abs(arr[i - 1] - arr[i]);

    if (diff === min) result.push([arr[i - 1], arr[i]]);
    else if (diff < min) {
      min = diff;
      result = [[arr[i - 1], arr[i]]];
    }
  }

  return result;
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
