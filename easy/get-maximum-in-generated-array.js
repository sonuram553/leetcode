function getMaximumGenerated(n) {
  if (n === 0) return 0;

  let max = 1;
  const arr = new Array(n + 1);

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i < arr.length; i++) {
    const mid = i >>> 1;
    if (i & 1) arr[i] = arr[mid] + arr[mid + 1];
    else arr[i] = arr[mid];
    max = Math.max(max, arr[i]);
  }

  return max;
}
