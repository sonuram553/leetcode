// Time Complexity O(n)

function sumOddLengthSubarrays(arr) {
  const n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    const evenLeft = evenCount(0, i - 1);
    const evenRight = evenCount(i + 1, n - 1);
    const oddLeft = oddCount(0, i - 1);
    const oddRight = oddCount(i + 1, n - 1);
    sum += arr[i] * (evenLeft * evenRight + oddLeft * oddRight);
  }

  return sum;
}

function evenCount(start, end) {
  return Math.floor((end - start + 1) / 2) + 1;
}

function oddCount(start, end) {
  const count = Math.abs(end - start + 1);
  return count - Math.floor(count / 2);
}
