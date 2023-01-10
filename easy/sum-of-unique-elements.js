function sumOfUnique(nums) {
  const map = {};
  for (const num of nums) map[num] = (map[num] || 0) + 1;

  let sum = 0;
  for (const key in map) {
    if (map[key] === 1) sum += Number(key);
  }

  return sum;
}
