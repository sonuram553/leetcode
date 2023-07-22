function replaceElements(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = findMax(arr, i + 1);
  }
  arr[arr.length - 1] = -1;
  return arr;
}

function findMax(arr, start) {
  let max = arr[start++];
  while (start < arr.length) {
    if (arr[start] > max) max = arr[start];
    start++;
  }
  return max;
}
