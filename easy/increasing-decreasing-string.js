function sortString(str) {
  let size = 0;
  let result = "";
  let isLeftToRight = true;
  const charArr = str.split("");

  quickSort(charArr);

  while (size !== charArr.length) {
    let prevCh = "";
    let i = isLeftToRight ? 0 : charArr.length - 1;

    while (true) {
      const ch = charArr[i];

      if (ch && prevCh !== ch) {
        size++;
        prevCh = ch;
        result += ch;
        charArr[i] = null;
      }

      if (isLeftToRight) {
        i++;
        if (i === charArr.length) break;
      } else {
        i--;
        if (i < 0) break;
      }
    }

    isLeftToRight = !isLeftToRight;
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
  return right.charCodeAt(0) < left.charCodeAt(0);
}
