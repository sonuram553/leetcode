function kthDistinct(arr, k) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (str in map) map[str].count++;
    else map[str] = { index: i, count: 1 };
  }

  const distinctStrs = [];
  for (const str in map) {
    const { index, count } = map[str];
    if (count === 1) distinctStrs.push({ str, index });
  }

  if (k > distinctStrs.length) return "";

  quickSort(distinctStrs);
  return distinctStrs[k - 1].str;
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
  return right.index < left.index;
}
