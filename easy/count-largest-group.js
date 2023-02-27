function countLargestGroup(n) {
  const map = {};
  for (let i = 1; i <= n; i++) {
    const sum = digitSum(i);
    map[sum] = (map[sum] || 0) + 1;
  }

  let maxGroupSize;
  for (const key in map) {
    if (!maxGroupSize) maxGroupSize = map[key];
    else maxGroupSize = Math.max(maxGroupSize, map[key]);
  }

  let count = 0;
  for (const key in map) {
    if (map[key] === maxGroupSize) count++;
  }

  return count;
}

function digitSum(n) {
  let sum = 0;

  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}
