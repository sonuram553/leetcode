function countGoodTriplets(arr, a, b, c) {
  const n = arr.length;
  const { abs } = Math;
  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (
          abs(arr[i] - arr[j]) <= a &&
          abs(arr[j] - arr[k]) <= b &&
          abs(arr[i] - arr[k]) <= c
        )
          count++;
      }
    }
  }

  return count;
}
