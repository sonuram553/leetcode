function mergeSimilarItems(items1, items2) {
  quickSort(items1);
  quickSort(items2);

  let i = 0;
  let j = 0;
  const result = [];

  while (i < items1.length && j < items2.length) {
    if (items1[i][0] === items2[j][0]) {
      result.push([items1[i][0], items1[i][1] + items2[j][1]]);
      i++;
      j++;
    } else if (items1[i][0] < items2[j][0]) {
      result.push(items1[i]);
      i++;
    } else {
      result.push(items2[j]);
      j++;
    }
  }

  while (i < items1.length) result.push(items1[i++]);
  while (j < items2.length) result.push(items2[j++]);

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
  return right[0] < left[0];
}
