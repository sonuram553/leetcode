function topKFrequent(words, k) {
  quickSort(words, 0, words.length - 1, compareString);
  const result = [[words[0], 1]];

  let j = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i] === words[i - 1]) {
      result[j][1] += 1;
    } else {
      j++;
      result.push([words[i], 1]);
    }
  }

  quickSort(result, 0, result.length - 1, compare);

  return result.slice(0, k).map(([word, _]) => word);
}

function compare(right, main) {
  if (right[1] > main[1]) return true;
  if (right[1] < main[1]) return false;

  return compareString(right[0], main[0]);
}

function compareString(rightStr, mainStr) {
  let mainIndex = 0;
  let rightIndex = 0;

  while (mainIndex < rightStr.length && rightIndex < mainStr.length) {
    if (rightStr[rightIndex].charCodeAt(0) < mainStr[mainIndex].charCodeAt(0))
      return true;
    else if (
      rightStr[rightIndex].charCodeAt(0) > mainStr[mainIndex].charCodeAt(0)
    )
      return false;

    mainIndex++;
    rightIndex++;
  }

  // If some characters of mainString is left then it will come after to the other string
  if (mainIndex < mainStr.length) return true;

  return false;
}

function findPivot(arr, start, end, compare) {
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    if (compare(arr[i], arr[start])) {
      pivotIndex++;

      const left = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = left;
    }
  }

  const left = arr[start];
  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = left;

  return pivotIndex;
}

function quickSort(arr, start, end, compare) {
  if (start > end) return;

  const pivot = findPivot(arr, start, end, compare);
  quickSort(arr, start, pivot - 1, compare);
  quickSort(arr, pivot + 1, end, compare);
}

const arr = [
  "the",
  "day",
  "is",
  "sunny",
  "the",
  "the",
  "the",
  "sunny",
  "is",
  "is",
];
const arr1 = ["i", "love", "leetcode", "i", "love", "coding"];

topKFrequent(arr);
