function groupAnagrams(arr) {
  const map = {};
  const result = [];

  for (const str of arr) {
    const charArr = str.split("");
    quickSort(charArr, 0, charArr.length - 1, compareStrings);

    const sortedStr = charArr.join("");
    if (map[sortedStr]) map[sortedStr].push(str);
    else map[sortedStr] = [str];
  }

  for (const key in map) {
    result.push(map[key]);
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

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

// Returns true if the rightString is less than the leftString.
// Thus, sort the array words in the ascending or dictionary order.

function compareStrings(leftStr, rightStr) {
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftStr.length && rightIndex < rightStr.length) {
    if (rightStr[rightIndex].charCodeAt(0) < leftStr[leftIndex].charCodeAt(0))
      return true;
    else if (
      rightStr[rightIndex].charCodeAt(0) > leftStr[leftIndex].charCodeAt(0)
    )
      return false;

    leftIndex++;
    rightIndex++;
  }

  // If some characters of leftString is left then it will come after rightString
  if (leftIndex < leftStr.length) return true;

  return false;
}
