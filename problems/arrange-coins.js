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
function arrangeCoins(n) {
  let start = 1;
  let end = n;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (Math.floor((mid * (mid + 1)) / 2) > n) end = mid - 1;
    else start = mid + 1;
  }

  return start;
}

