function pivot(arr, start, end) {
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
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

  const pivotIndex = pivot(arr, start, end);
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

function findContentChildren(g, s) {
  quickSort(g);
  quickSort(s);

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      count++;
      i++;
      j++;
    } else j++;
  }

  return count;
}
