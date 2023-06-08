function findMaxK(nums) {
  let max = -1;
  const set = new Set();

  for (const num of nums) {
    if ((num < 0 && set.has(-num)) || (num > 0 && set.has(-num))) {
      max = Math.max(max, Math.abs(num));
      continue;
    }
    set.add(num);
  }

  return max;
}
