function findRelativeRanks(score) {
  const result = [];
  const n = score.length;
  let isDecreasing = true;
  let isIncreasing = true;

  // Check wether the scores are in Descending order
  for (let i = 0; i < n - 1; i++) {
    if (score[i] < score[i + 1]) {
      isDecreasing = false;
      break;
    }
  }

  if (isDecreasing) {
    for (let i = 0; i < n; i++) {
      if (i === 0) result.push("Gold Medal");
      else if (i === 1) result.push("Silver Medal");
      else if (i === 2) result.push("Bronze Medal");
      else result.push(String(i + 1));
    }

    return result;
  }

  // Check wether the scores are in Ascending order
  for (let i = 0; i < n - 1; i++) {
    if (score[i] > score[i + 1]) {
      isIncreasing = false;
      break;
    }
  }

  if (isIncreasing) {
    for (let i = 0; i < n; i++) {
      const rank = n - i;

      if (rank === 1) result.push("Gold Medal");
      else if (rank === 2) result.push("Silver Medal");
      else if (rank === 3) result.push("Bronze Medal");
      else result.push(String(rank));
    }

    return result;
  }

  // If scores are not sorted
  const sortedScore = [...score];
  const map = {};

  quickSort(sortedScore);

  for (let i = 0; i < n; i++) {
    map[sortedScore[i]] = i + 1;
  }

  for (let i = 0; i < n; i++) {
    const rank = map[score[i]];

    if (rank === 1) result.push("Gold Medal");
    else if (rank === 2) result.push("Silver Medal");
    else if (rank === 3) result.push("Bronze Medal");
    else result.push(String(rank));
  }

  return result;
}

function findPivot(arr, start, end) {
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] > arr[start]) {
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

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start > end) return;

  const pivot = findPivot(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}
