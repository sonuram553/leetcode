function arrangeCoins1(n) {
  let count = 0;
  let i = 1;

  while (i <= n) {
    n -= i;
    i++;
    count++;
  }

  return count;
}

// Binary Search
function arrangeCoins2(n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const sum = Math.floor((mid * (mid + 1)) / 2);

    if (sum === n) return mid;
    if (sum > n) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}

// Math
function arrangeCoins(n) {
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
}
