function mostFrequentEven(nums) {
  const map = {};
  let hasEven = false;

  for (const num of nums) {
    if (num % 2 === 0) {
      hasEven = true;
      map[num] = (map[num] || 0) + 1;
    }
  }

  if (!hasEven) return -1;

  let maxCount = 0;
  for (const num in map) {
    maxCount = Math.max(maxCount, map[num]);
  }

  let minNum = Number.MAX_VALUE;
  for (const key in map) {
    if (map[key] === maxCount) {
      minNum = Math.min(minNum, Number(key));
    }
  }

  return minNum;
}
