function arrayRankTransform(arr) {
  if (!arr.length) return [];

  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num in map) map[num].indices.push(i);
    else map[num] = { indices: [i] };
  }

  quickSort(arr);

  let order = 1;
  map[arr[0]].order = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) order++;
    map[arr[i]].order = order;
  }

  for (const key in map) {
    const { indices, order } = map[key];
    for (const index of indices) arr[index] = order;
  }

  return arr;
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
