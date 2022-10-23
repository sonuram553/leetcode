function findPivotIndex(arr, start, end) {
  let index = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      index += 1;
      const temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }

  const temp = arr[start];
  arr[start] = arr[index];
  arr[index] = temp;
  return index;
}

function quickSort(arr, start, end) {
  if (start > end) return;

  const pivot = findPivotIndex(arr, start, end);

  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}

function allSimilar(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      return false;
    }
  }

  return true;
}

const arr = [6, 5, 7, 9, 1];

function minCost(cost) {
  let count = 0;
  let minCost = 0;

  if (!allSimilar(cost)) quickSort(cost, 0, cost.length - 1);

  for (let i = cost.length - 1; i >= 0; i--) {
    if (count === 2) {
      count = 0;
    } else {
      minCost += cost[i];
      count += 1;
    }
  }

  return minCost;
}
